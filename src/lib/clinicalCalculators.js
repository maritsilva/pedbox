import { numberInput } from './doseEngine.js';
const numeric = (id,label,min,max) => ({id,label,min,max});
const choice = (id,label,options) => ({id,label,options});
const yesNo = (id,label,points=1) => choice(id,label,[['0','Não'],[String(points),'Sim']]);
const sum = values => Object.values(values).reduce((a,b)=>a+Number(b),0);
const niddk='https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/children-adolescents-young-adults';
export const CLINICAL_DEFINITIONS = {
 'rdai': {
  population:'Avaliação de sibilância e retrações em lactentes com bronquiolite. A pontuação descreve achados respiratórios; não é um critério isolado de internação, alta ou escolha de tratamento.',
  fields:[choice('expiration','Sibilância durante a expiração',[['0','Ausente'],['1','Somente ao final'],['2','Em metade da fase expiratória'],['3','Em três quartos da fase expiratória'],['4','Durante toda a expiração']]),choice('inspiration','Sibilância durante a inspiração',[['0','Ausente'],['1','Em parte da inspiração'],['2','Durante toda a inspiração']]),choice('fields','Distribuição da sibilância',[['0','Nenhum campo pulmonar'],['1','Um ou dois dos quatro campos'],['2','Três ou quatro campos']]),...['Supraclaviculares','Intercostais','Subcostais'].map((label,i)=>choice(`retraction${i}`,`Retrações ${label.toLowerCase()}`,[['0','Ausentes'],['1','Leves'],['2','Moderadas'],['3','Intensas']]))],
  formula:'Sibilância: até 8 pontos. Retrações: até 9. Soma de 0 a 17. Não inclui frequência respiratória e não corresponde ao RACS ou a versões modificadas.',
  references:[['Kim et al., 2011 — tabela 1, RDAI','https://jamanetwork.com/journals/jamapediatrics/fullarticle/1107654'],['Nonoyama et al., 2019 — tabela 1, página 17; consulta em 08/10/2026','https://cjrt.ca/article/81397.pdf']],
  calculate:v=>({value:sum(v),unit:'/ 17 pontos'})
 },
 'pts': {
  population:'Crianças com trauma. Escore histórico de avaliação inicial; não substitui a abordagem do trauma nem determina isoladamente alta, transferência ou necessidade de imagem.',
  fields:[numeric('weight','Peso (kg)',0.1,200),numeric('pressure','Pressão arterial sistólica (mmHg)',0,300),choice('airway','Via aérea',[['2','Normal, sem suporte'],['1','Mantida com suporte'],['-1','Não pode ser mantida']]),choice('consciousness','Estado neurológico',[['2','Alerta'],['1','Consciência rebaixada, sem coma'],['-1','Coma']]),choice('wounds','Feridas abertas',[['2','Ausentes'],['1','Pequenas'],['-1','Extensas ou penetrantes']]),choice('fractures','Fraturas',[['2','Ausentes'],['1','Fechada isolada'],['-1','Exposta ou múltiplas']])],
  formula:'Seis componentes, cada um com −1, +1 ou +2 pontos. Peso: <10 / 10–20 / >20 kg. PAS: <50 / 50–90 / >90 mmHg. Total: −6 a +12; menor pontuação corresponde a maior gravidade. Campos vazios não equivalem a zero.',
  references:[['Tepas et al., 1987 — estudo original','https://pubmed.ncbi.nlm.nih.gov/3102714/'],['Pediatric Prevention Network — Pediatric Trauma, tabela 3; consulta em 08/10/2026','https://learn.pedspandemicnetwork.org/mod/book/view.php?chapterid=379&id=2785']],
  calculate:v=>({value:(v.weight<10?-1:v.weight<=20?1:2)+(v.pressure<50?-1:v.pressure<=90?1:2)+Number(v.airway)+Number(v.consciousness)+Number(v.wounds)+Number(v.fractures),unit:'pontos (intervalo: −6 a +12)'})
 },
 'scorad': {
  population:'Dermatite atópica. Extensão deve considerar lesões inflamatórias e proporções corporais apropriadas à idade. Pontuação não prescreve tratamento.',
  fields:[numeric('extent','Área inflamada (%)',0,100),...['Eritema','Edema / pápulas','Exsudação / crostas','Escoriações','Liquenificação','Ressecamento'].map((label,i)=>choice(`sign${i}`,label,[['0','Ausente'],['1','Leve'],['2','Moderado'],['3','Intenso']])),numeric('itch','Prurido (0–10)',0,10),numeric('sleep','Perda de sono (0–10)',0,10)],
  formula:'SCORAD = área/5 + 3,5 × soma dos seis sinais + prurido + perda de sono. Máximo: 103.',
  references:[['Société Française de Dermatologie — SCORAD','https://www.sfdermato.org/upload/scores/scorad-3b22aebdbbf650c338531006542f5838.pdf']],
  calculate:v=>({value:v.extent/5+3.5*sum(Object.fromEntries(Object.entries(v).filter(([k])=>k.startsWith('sign'))))+v.itch+v.sleep,unit:'/ 103 pontos'})
 },
 'capurro': {
  population:'Estimativa somática de idade gestacional. Examinar o recém-nascido e confrontar com a história obstétrica; não extrapolar a prematuros extremos.',
  fields:[choice('nipple','Mamilo / aréola',[['0','Mamilo pouco visível, sem aréola'],['5','Aréola lisa menor que 0,75 cm'],['10','Aréola maior que 0,75 cm, borda plana'],['15','Aréola maior que 0,75 cm, borda elevada']]),choice('skin','Pele',[['0','Gelatinosa'],['5','Fina e lisa'],['10','Descamação superficial discreta'],['15','Espessa, sulcos superficiais'],['20','Apergaminhada, sulcos profundos']]),choice('ear','Pavilhão auricular',[['0','Sem curvatura'],['8','Curvatura parcial da borda'],['16','Toda a borda superior encurvada'],['24','Totalmente encurvado']]),choice('breast','Glândula mamária',[['0','Não palpável'],['5','Menor que 0,5 cm'],['10','0,5 a 1 cm'],['15','Maior que 1 cm']]),choice('sole','Planta do pé',[['0','Sem sulcos'],['5','Marcas pouco definidas anteriormente'],['10','Marcas anteriores e sulcos no terço anterior'],['15','Sulcos na metade anterior'],['20','Sulcos ultrapassam a metade anterior']])],
  formula:'Idade gestacional em dias = soma + 204. Dividir por 7 para obter semanas.',
  references:[['SES-SP, Manual de Neonatologia, 2015, página PDF 18','https://www.saude.sp.gov.br/resources/ses/perfil/gestor/homepage/programa-de-fortalecimento-da-gestao-da-saude-no-estado-de-sao-paulo/consultas-publicas/manual_de_neonatologia.pdf']],
  calculate:v=>{const days=sum(v)+204;return {value:Math.floor(days/7),unit:`semanas e ${days%7} dias`};}
 },
 'downes': {
  population:'Escore respiratório neonatal, conforme tabela do HC-UFMG, versão 02 (2024). Não deve determinar isoladamente suporte respiratório.',
  fields:[choice('rate','Frequência respiratória',[['0','40 a menos de 60/min'],['1','60 a 80/min'],['2','Acima de 80/min']]),choice('retractions','Retrações',[['0','Ausentes'],['1','Intercostal e/ou subcostal'],['2','Intercostal, subcostal e esternal']]),choice('grunting','Gemido',[['0','Ausente'],['1','Audível na ausculta'],['2','Audível sem estetoscópio']]),choice('air','Murmúrio vesicular',[['0','Facilmente audível'],['1','Reduzido'],['2','Quase inaudível']]),choice('cyanosis','Cianose',[['0','Ausente'],['1','Melhora com oxigênio'],['2','Persiste com oxigênio']])],
  formula:'Soma de cinco critérios de 0 a 2. FR abaixo de 40/min, apneia e outros achados fora das opções exigem avaliação independente; não classificar como zero.',
  references:[['HC-UFMG — protocolo de surfactante, tabela 2','https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sudeste/hc-ufmg/saude/protocolos-assistenciais-hc-ufmg-ebserh/PRT_UTIN_105_Terapia_reposicao_surfactante_neonatologia_V02.pdf']],
  calculate:v=>({value:sum(v),unit:'/ 10 pontos'})
 },
 'superficie-corporal': {
  population:'Estimativa por peso e estatura. Não determina, por si só, doses de medicamentos.',
  fields:[numeric('weight','Peso (kg)',0.1,300),numeric('height','Estatura (cm)',20,250),choice('method','Método',[['mosteller','Mosteller'],['haycock','Haycock']])],
  formula:'Mosteller: √(peso × estatura / 3600). Haycock: 0,024265 × peso^0,5378 × estatura^0,3964.',
  references:[['Haycock et al., 1978','https://pubmed.ncbi.nlm.nih.gov/650346/'],['Comparação das fórmulas em crianças, 2022','https://pmc.ncbi.nlm.nih.gov/articles/PMC9489993/']],
  calculate:v=>({value:v.method==='mosteller'?Math.sqrt(v.weight*v.height/3600):0.024265*v.weight**0.5378*v.height**0.3964,unit:'m²'})
 },
 'tfg-pediatrica': {
  population:'CKiD U25: 1–25 anos, especialmente doença renal crônica leve a moderada. Bedside: estimativa pediátrica rápida; derivação principalmente em 8–15 anos. Neonatal: nascidos a termo até 28 dias. Creatinina padronizada; interpretação requer contexto e tendência.',
  fields:[choice('method','Equação',[['u25','CKiD U25 — creatinina'],['bedside','Schwartz bedside 2009'],['neonatal','Neonatal a termo']]),numeric('height','Comprimento / estatura (cm)',20,250),numeric('creatinine','Creatinina sérica',0.01,2000),choice('creatinineUnit','Unidade da creatinina',[['mgdl','mg/dL'],['umol','µmol/L']]),numeric('age','Idade (anos; neonatal: dias)',0,28),choice('sex','Sexo usado na equação',[['female','Feminino'],['male','Masculino']]),choice('term','Nasceu a termo?',[['yes','Sim'],['no','Não']])],
  formula:'Bedside: 0,413 × cm / creatinina (mg/dL). U25: κ(idade, sexo) × estatura (m) / creatinina. Neonatal: 0,31 × cm / creatinina.',
  references:[['NIDDK — equações pediátricas',niddk]],
  calculate:v=>{
   const cr=v.creatinine/(v.creatinineUnit==='umol'?88.4:1);
   if(v.method==='neonatal') {if(v.age>28||v.term!=='yes')return {error:'Equação neonatal restrita a nascidos a termo com até 28 dias.'}; return {value:0.31*v.height/cr,unit:'mL/min/1,73 m²'};}
   if(v.method==='bedside'){if(v.age<1||v.age>=18)return {error:'Use uma equação adequada à faixa etária; esta implementação bedside está restrita a 1–17 anos.'};return {value:0.413*v.height/cr,unit:'mL/min/1,73 m²'};}
   if(v.age<1||v.age>25)return {error:'CKiD U25 requer idade de 1 a 25 anos.'};
   const female=v.sex==='female';
   const k=v.age>=18?(female?41.4:50.8):(female?36.1:39)*((v.age<12?1.008:female?1.023:1.045)**(v.age-12));
   return {value:k*(v.height/100)/cr,unit:'mL/min/1,73 m²'};
  }
 },
 'pas-apendicite': {
  population:'Estudo original em crianças de 4–15 anos com suspeita de apendicite. Pontuação isolada não confirma nem exclui diagnóstico e não determina alta ou cirurgia.',
  fields:[yesNo('migration','Dor migrou para a fossa ilíaca direita?'),yesNo('anorexia','Perda de apetite?'),yesNo('vomiting','Náuseas ou vômitos?'),yesNo('fever','Febre?'),yesNo('tenderness','Dor à palpação na fossa ilíaca direita?',2),yesNo('movement','Dor nessa região ao tossir, percutir ou saltar?',2),yesNo('leukocytes','Leucócitos acima de 10.000/mm³?'),yesNo('neutrophils','Neutrófilos acima de 7.500/mm³?')],
  formula:'Soma de oito critérios: palpação e movimento valem 2 pontos cada; os demais, 1. Total: 0–10.',
  references:[['Samuel, 2002 — estudo original','https://pubmed.ncbi.nlm.nih.gov/12037754/']],
  calculate:v=>({value:sum(v),unit:'/ 10 pontos'})
 }
};
export function evaluateClinical(definition,raw){
 const values={};
 for(const field of definition.fields){
  if(raw[field.id]==null||String(raw[field.id]).trim()==='')return {error:'Preencha todos os critérios. Campos vazios não contam como ausência de sintomas.'};
  if(field.options){if(!field.options.some(([value])=>String(value)===String(raw[field.id])))return {error:`Valor inválido: ${field.label}.`};values[field.id]=raw[field.id];}
  else {const n=numberInput(raw[field.id]);if(!Number.isFinite(n)||n<field.min||n>field.max)return {error:`${field.label}: informe um valor entre ${field.min} e ${field.max}.`};values[field.id]=n;}
 }
 return definition.calculate(values);
}
