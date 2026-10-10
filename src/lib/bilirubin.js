import tables from './aapBilirubinTables.json' with {type:'json'};
import {localTimestamp} from './timeCalculators.js';
export const BILI_SOURCE='https://doi.org/10.1542/peds.2022-058859';
export const NEURO_RISKS=[['hemolysis','Doença hemolítica isoimune, deficiência de G6PD ou outra hemólise'],['sepsis','Sepse'],['albumin','Albumina menor que 3 g/dL'],['instability','Instabilidade clínica significativa nas últimas 24 horas']];
export function thresholds(weeks,hours,risk,risingUnderPhoto=false) {
 if(!Number.isInteger(weeks)||weeks<35||weeks>42||!Number.isFinite(hours)||hours<1||hours>336||typeof risk!=='boolean') return null;
 const hour=Math.floor(hours); // Conservative completed-hour lookup; no unvalidated interpolation.
 const photo=tables.curves[`${risk?2:1}-${Math.min(weeks,risk?38:40)}`][hour];
 const exchange=tables.curves[`${risk||risingUnderPhoto?4:3}-${Math.min(weeks,38)}`][hour];
 return {photo,exchange,escalation:Math.round((exchange-2)*10)/10,hour};
}
const numeric=value=>String(value).trim()===''?null:Number(String(value).replace(',','.'));
export function evaluateBilirubin({birthDate,birthTime,weeks,days,unit,risk,readings,birthWeight='',risingUnderPhoto=false}) {
 const birth=localTimestamp(birthDate,birthTime),w=numeric(weeks),d=numeric(days),weight=numeric(birthWeight);
 if(birth===null) return {error:'Informe data e hora válidas do nascimento.'};
 if(!Number.isInteger(w)||w<35||w>42||!Number.isInteger(d)||d<0||d>6) return {error:'Estas curvas atendem somente IG de 35 a 42 semanas e dias de 0 a 6. Não extrapolar para prematuros menores de 35 semanas.'};
 if(typeof risk!=='boolean') return {error:'Confirme se há fatores adicionais de neurotoxicidade.'};
 if(!['mg/dL','µmol/L'].includes(unit)) return {error:'Selecione uma unidade válida.'};
 if(weight!==null&&(!Number.isFinite(weight)||weight<=0)) return {error:'Peso de nascimento deve ser positivo.'};
 if(!readings.length) return {error:'Adicione ao menos um exame.'};
 const factor=unit==='µmol/L'?17.1:1;
 const results=[];
 for(const [index,row] of readings.entries()) {
  const stamp=localTimestamp(row.date,row.time),total=numeric(row.total),direct=numeric(row.direct),currentWeight=numeric(row.weight);
  if(stamp===null||total===null||!Number.isFinite(total)||total<0||total/factor>60||!['serum','tcb'].includes(row.type)) return {error:`Exame ${index+1}: confira data, hora, tipo e bilirrubina (0–60 mg/dL ou equivalente).`};
  if(direct!==null&&(!Number.isFinite(direct)||direct<0||direct>total||row.type!=='serum')) return {error:`Exame ${index+1}: a direta deve ser sérica, não negativa e não maior que a total.`};
  if(currentWeight!==null&&(!Number.isFinite(currentWeight)||currentWeight<=0)) return {error:`Exame ${index+1}: peso deve ser positivo.`};
  const hours=(stamp-birth)/3600000,limits=thresholds(w,hours,risk,risingUnderPhoto);
  if(!limits) return {error:`Exame ${index+1}: a coleta deve ocorrer entre 1 e 336 horas de vida. Não há extrapolação fora da tabela.`};
  if(results.some(r=>r.stamp===stamp)) return {error:'Há coletas no mesmo horário. Confira as datas antes de calcular a tendência.'};
  const bt=total/factor,bd=direct===null?null:direct/factor;
  const status=row.type==='tcb'?'screening':bt>=limits.exchange?'exchange':bt>=limits.escalation?'escalation':bt>=limits.photo?'photo':'below';
  results.push({index,stamp,hours,bt,bd,type:row.type,...limits,status,delta:limits.photo-bt,confirmSerum:row.type==='tcb'&&(bt>=15||limits.photo-bt<=3),loss:weight!==null&&currentWeight!==null?(weight-currentWeight)/weight*100:null,rate:null,rapid:false});
 }
 results.sort((a,b)=>a.stamp-b.stamp);
 for(let i=1;i<results.length;i++){
  const a=results[i-1],b=results[i];
  if(a.type===b.type){b.rate=(b.bt-a.bt)/(b.hours-a.hours);b.rapid=b.rate >= (b.hours<=24?0.3:0.2);}
 }
 return {error:null,results,weeks:w,risk};
}
