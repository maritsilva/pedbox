import 'dotenv/config';
import {readFile} from 'node:fs/promises';
import {configFromEnv} from '../server/config.js';
import {collections} from '../server/schemas.js';
import {CONDUTAS_CATEGORIAS} from '../src/lib/condutasData.js';
const ids=process.argv.slice(2).filter(x=>!x.startsWith('--'));
if(!ids.length)throw Error('Informe IDs de tópicos. Padrão: validação sem gravação; --apply para importar rascunhos localmente.');
const config=configFromEnv();
if(config.production||!config.devAuth)throw Error('Este importador requer ambiente local com DEV_AUTH=true.');
const previousPath=process.argv.find(x=>x.startsWith('--previous='))?.slice('--previous='.length);
if(previousPath&&ids.length!==1)throw Error('--previous exige exatamente um tópico.');
const previous=previousPath?await readFile(previousPath,'utf8'):null;
const previousReferences=previous?.split('## 7. Referências e Pendências')[1];
if(previous&&!previousReferences)throw Error('Arquivo anterior sem referências.');
const payloads=[];
for(const id of ids){
 if(!/^[a-z0-9-]+$/.test(id))throw Error('ID inválido');
 const category=CONDUTAS_CATEGORIAS.find(c=>c.subcategorias.some(s=>s.topicos.some(t=>t.id===id)));
 const sub=category?.subcategorias.find(s=>s.topicos.some(t=>t.id===id));
 const topic=sub?.topicos.find(t=>t.id===id);if(!topic)throw Error('Tópico não encontrado: '+id);
 const content=await readFile(new URL(`../data/clinical-drafts/respiratorias/${id}.md`,import.meta.url),'utf8');
 const references=content.split('## 7. Referências e Pendências')[1];if(!references)throw Error('Referências ausentes: '+id);
 payloads.push(collections.contents.schema.parse({categoria_id:category.id,categoria_label:category.label,categoria_icon:category.icon,categoria_color:category.color,subcategoria_id:sub.id,subcategoria_label:sub.label,topico_id:id,topico_label:topic.label,conteudo:content,review_sources:'[PedBox pesquisa respiratórias v1]\n'+references.trim(),publication_status:'draft',is_custom:false}));
}
if(!process.argv.includes('--apply')){console.log(JSON.stringify({validated:payloads.map(p=>p.topico_id),writes:0}));process.exit(0);}
const root=`http://127.0.0.1:${config.port}/api/v1`;let cookie='';
async function request(path,method='GET',body){const res=await fetch(root+path,{method,headers:{Origin:config.origin,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{})},body:body?JSON.stringify(body):undefined});if(res.headers.get('set-cookie'))cookie=res.headers.get('set-cookie').split(';')[0];const data=await res.json();if(!res.ok)throw Error(`API ${res.status}: ${data.error||'falha'}`);return data;}
try{
 await request('/auth/dev-login','POST',{});
 const existing=[];let offset=0;do{const page=await request(`/contents?limit=200&offset=${offset}`);existing.push(...page.items);offset=page.nextOffset;}while(offset!==null);
 for(const payload of payloads){
  const matches=existing.filter(x=>x.topico_id===payload.topico_id&&x.categoria_id===payload.categoria_id&&x.review_sources?.startsWith('[PedBox pesquisa respiratórias v1]'));
  if(matches.length>1)throw Error('Duplicatas exigem revisão manual: '+payload.topico_id);
  const old=matches[0];
  if(old?.publication_status==='published')throw Error('Não sobrescrever revisão já publicada: '+payload.topico_id);
  if(old){
   if(old.conteudo===payload.conteudo&&old.review_sources===payload.review_sources){console.log('Sem alteração: '+payload.topico_id);continue;}
   if(!previous||old.conteudo!==previous||old.review_sources!=='[PedBox pesquisa respiratórias v1]\n'+previousReferences.trim())throw Error('Rascunho divergente: informe --previous=arquivo com a versão anterior exata; nunca substituir edições não conciliadas.');
   await request('/contents/'+old.id,'PATCH',payload);console.log('Rascunho atualizado: '+payload.topico_id);continue;
  }
  await request('/contents','POST',payload);console.log('Rascunho criado: '+payload.topico_id);
 }
}finally{if(cookie)await request('/logout','POST',{});}
