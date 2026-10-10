import {writeFile, mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {getAllDosagens} from '../src/lib/dosagensData.js';
import {calculateDose, intervalOptions} from '../src/lib/doseEngine.js';

// Technical inventory only. A successful arithmetic probe is not clinical approval.
const drugs=getAllDosagens();
const ids=new Set();
const rows=[];
for(const drug of drugs) {
 const duplicate=ids.has(drug.id); ids.add(drug.id);
 const indicationIds=new Set();
 for(const indication of drug.indicacoes) {
  const issues=[];
  if(duplicate) issues.push('Identificador de medicamento duplicado');
  if(indicationIds.has(indication.id)) issues.push('Identificador de indicação duplicado');
  indicationIds.add(indication.id);
  const intervals=intervalOptions(indication.freq);
  const probes=(intervals.length?intervals:[null]).map(interval=>({intervalHours:interval,error:calculateDose(indication,10,interval).error || null}));
  for(const probe of probes) if(probe.error&&!issues.includes(probe.error)) issues.push(probe.error);
  const presentations=(indication.apresentacoes || []).map(p=>{
   const notes=[];
   if(!(Number.isFinite(p.conc)&&p.conc>0)) notes.push('Concentração numérica inválida');
   if(p.tipo==='gotas'&&!(Number.isFinite(p.mL_por_gota)&&p.mL_por_gota>0)) notes.push('Fator de gotas ausente ou inválido');
   if(!['mL','gotas','comprimido','jatos'].includes(p.tipo)) notes.push('Conversão requer preparo ou implementação específica');
   if(p.tipo==='comprimido'&&!p.fractionStep) notes.push('Fracionamento não autorizado no cadastro; apenas unidades inteiras');
   return {label:p.label,type:p.tipo,notes};
  });
  if(!presentations.length) issues.push('Sem apresentações cadastradas');
  rows.push({drugId:drug.id,drug:drug.name,indicationId:indication.id,indication:indication.label,unit:indication.unidade,clinicalStatus:'pending',referencesRegistered:indication.references?.length || 0,arithmeticProbes:probes,issues,presentations});
 }
}
const report={scope:'Inventário técnico. Sondagem aritmética usa peso sintético de 10 kg e intervalos cadastrados; não valida população, dose, fonte ou segurança clínica.',summary:{drugs:drugs.length,indications:rows.length,indicationsWithTechnicalNotes:rows.filter(r=>r.issues.length).length,indicationsWithRegisteredReferences:rows.filter(r=>r.referencesRegistered>0).length,clinicallyApproved:0},indications:rows};
const folder=resolve('docs/clinical'); await mkdir(folder,{recursive:true});
await writeFile(resolve(folder,'inventario-dosagens.json'),JSON.stringify(report,null,2)+'\n');
const safe=s=>String(s||'').replaceAll('|','/').replaceAll('\n',' ');
const lines=['# Inventário técnico de dosagens','',report.scope,'',`Medicamentos: ${report.summary.drugs}. Indicações: ${rows.length}. Indicações com observações técnicas: ${report.summary.indicationsWithTechnicalNotes}. Aprovações clínicas registradas: 0.`,'','Uma indicação sem observação técnica ainda precisa de revisão clínica. As notas de fracionamento e preparo descrevem limites da conversão, não erros clínicos comprovados. Dados não são alterados por este script.','','| Medicamento / indicação | Unidade | Observações técnicas |','| --- | --- | --- |',...rows.map(r=>`| ${safe(r.drug)} / ${safe(r.indication)} | ${safe(r.unit)} | ${safe(r.issues.join('; ')||'Sondagem sem erro; revisão clínica pendente')} |`)];
await writeFile(resolve(folder,'inventario-dosagens.md'),lines.join('\n')+'\n');
console.log(JSON.stringify(report.summary,null,2));
