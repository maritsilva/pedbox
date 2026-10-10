import { z } from 'zod';
import { GROWTH_REFERENCES, GROWTH_FORMATS, BONE_AGE_METHODS, specialistAllowed } from '../src/lib/growthOptions.js';
import { httpError } from './schemas.js';
import { rateLimit } from './integrations.js';
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(s=>{const d=new Date(`${s}T00:00:00Z`);return Number.isFinite(+d)&&d.toISOString().slice(0,10)===s;});
const reference=z.enum(GROWTH_REFERENCES.map(r=>r[0]));
const sex=z.enum(['M','F']);
const measure=z.object({reference,sex,birthDate:date,measureDate:date,height:z.number().finite().min(30).max(230).optional(),weight:z.number().finite().min(0.3).max(300).optional(),measurement:z.enum(['combined','height','weight','bmi','ofc']).default('combined'),value:z.number().finite().positive().max(500).optional(),diagnosis:z.enum(['none','turner','trisomy-21']).default('none'),boneAge:z.number().finite().min(0).max(25).optional(),boneAgeType:z.enum(BONE_AGE_METHODS.map(r=>r[0])).optional(),gestationWeeks:z.number().int().min(22).max(44),gestationDays:z.number().int().min(0).max(6)}).strict();
const chart=z.object({reference,sex,type:z.enum(['bmi','height','weight','ofc']),diagnosis:z.enum(['none','turner','trisomy-21']).default('none'),format:z.enum(GROWTH_FORMATS.map(r=>r[0])).default('three-percent-centiles'),custom:z.string().max(160).optional(),isSds:z.enum(['true','false']).default('false')}).strict();
function checkSelection(ref,diagnosis,sex,type){
 if(!specialistAllowed(ref,diagnosis))throw httpError(422,'A referência especializada exige diagnóstico confirmado.');
 if(ref==='turner'&&(sex!=='F'||type!=='height'))throw httpError(422,'Turner aceita somente estatura no sexo feminino.');
}

export function installGrowth(app,db,config,{fetchGrowth=fetch}={}) {
 const cache=new Map();
 async function upstream(ref,endpoint,payload){
  if(!config.rcpchKey)throw httpError(503,'API de crescimento não configurada.');
  let res;
  try {res=await fetchGrowth(`https://api.rcpch.ac.uk/growth/v1/${ref}/${endpoint}`,{method:'POST',redirect:'error',headers:{'Subscription-Key':config.rcpchKey,'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(20000)});}catch{throw httpError(503,'Não foi possível acessar o RCPCH. Tente novamente.');}
  if(!res.ok)throw httpError(res.status===429?429:503,res.status===429?'Limite do serviço RCPCH atingido. Tente mais tarde.':'RCPCH indisponível ou credencial não autorizada.');
  try {return await res.json();}catch{throw httpError(502,'Resposta inválida do serviço de crescimento.');}
 }
 app.get('/api/v1/growth/status',(_req,res)=>res.json({configured:Boolean(config.rcpchKey)}));
 app.get('/api/v1/growth/charts',rateLimit(db,'growth-charts',30),async(req,res)=>{
  const {reference,sex,type,diagnosis,format,custom,isSds}=chart.parse(req.query);
  checkSelection(reference,diagnosis,sex,type);
  let centiles=format;
  if(format==='custom'){centiles=(custom||'').split(';').map(v=>Number(v.trim().replace(',','.')));if(!custom||centiles.length>15||centiles.some(v=>!Number.isFinite(v)||(isSds==='true'?(v < -4 || v > 4):(v<=0||v>=100))))throw httpError(422,'Informe até 15 valores separados por ponto e vírgula. Percentis entre 0 e 100; SDS entre -4 e 4.');}
  else if(isSds==='true')throw httpError(422,'Selecione valores personalizados para informar SDS.');
  const key=JSON.stringify([reference,sex,type,centiles,isSds]);
  if(cache.get(key)?.expires>Date.now())return res.json(cache.get(key).data);
  const data=await upstream(reference,'chart-coordinates',{sex:sex==='M'?'male':'female',measurement_method:type,centile_format:centiles,is_sds:isSds==='true'});
  if(!Array.isArray(data.centile_data))throw httpError(502,'Curvas de crescimento inválidas.');
  if(cache.size>=100)cache.delete(cache.keys().next().value);
  cache.set(key,{data,expires:Date.now()+6*3600000});res.json(data);
 });
 app.post('/api/v1/growth/measurements',rateLimit(db,'growth-measurement',15),async(req,res)=>{
  const f=measure.parse(req.body);
  checkSelection(f.reference,f.diagnosis,f.sex,f.measurement);
  if(f.measurement==='combined'&&(!f.height||!f.weight))throw httpError(422,'Informe peso e altura.');
  if(f.measurement!=='combined'&&!f.value)throw httpError(422,'Informe o valor da medida.');
  if((f.boneAge!==undefined)!==(f.boneAgeType!==undefined))throw httpError(422,'Informe idade óssea e método juntos.');
  const days=(Date.parse(f.measureDate)-Date.parse(f.birthDate))/86400000;
  const age=days/365.25;
  const today=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  if(days<0||f.measureDate>today||age>25)throw httpError(422,'Datas fora da faixa da referência selecionada.');
  if(f.reference==='cdc'&&age<2&&f.measurement==='combined')throw httpError(422,'Para IMC CDC, informe idade de 2 a 20 anos. Use o módulo de lactentes para outras medidas.');
  const values=f.measurement==='combined'?{height:f.height,weight:f.weight,bmi:f.weight/(f.height/100)**2}:{[f.measurement]:f.value};
  const raw={},scores=Object.fromEntries(['height','weight','bmi','ofc'].map(t=>[t,{z:null,percentile:null,error:'Medida não informada.'}]));let plotAge=age;
  const primary=f.measurement==='combined'?'bmi':f.measurement;
  // Sequential calls avoid bursts against the account quota; preserve the complete responses.
  for(const [type,value] of Object.entries(values)){
   const result=await upstream(f.reference,'calculation',{birth_date:f.birthDate,observation_date:f.measureDate,observation_value:value,sex:f.sex==='M'?'male':'female',gestation_weeks:f.gestationWeeks,gestation_days:f.gestationDays,measurement_method:type,...(f.boneAge===undefined?{}:{bone_age:f.boneAge,bone_age_type:f.boneAgeType})});
   if(result.provenance?.growth_reference!==(f.reference==='turner'?'turners-syndrome':f.reference))throw httpError(502,'Referência retornada pelo RCPCH não corresponde à solicitação.');
   raw[type]=result;
   const v=result.measurement_calculated_values;
   const z=v?.corrected_sds, percentile=v?.corrected_centile;
   const ageResult=result.measurement_dates?.corrected_decimal_age;
   const invalid=v?.corrected_measurement_error||result.child_observation_value?.observation_value_error||result.measurement_dates?.corrected_decimal_age_error||!Number.isFinite(z)||!Number.isFinite(percentile)||!Number.isFinite(ageResult);
   scores[type]=invalid?{z:null,percentile:null,error:'Sem resultado válido para esta medida e faixa etária.'}:{z,percentile,error:null};
   if(type===primary&&!invalid)plotAge=ageResult;
  }
  if(scores[primary].z===null)throw httpError(422,'O RCPCH não calculou resultado válido para esta medida, idade e referência. Confira os dados.');
  res.json({measurement:f.measurement,reference:f.reference,birthDate:f.birthDate,date:f.measureDate,sex:f.sex,age:plotAge,ageMonths:plotAge*12,...values,scores,raw,gestationWeeks:f.gestationWeeks,gestationDays:f.gestationDays});
 });
}
