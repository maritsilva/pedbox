import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateDose,presentationAmount,intervalOptions,numberInput} from '../src/lib/doseEngine.js';
import {CLINICAL_DEFINITIONS,evaluateClinical} from '../src/lib/clinicalCalculators.js';
import {CALCULATORS} from '../src/lib/calculatorRegistry.js';
const indication={unidade:'mg/kg/dose',dose_min:10,dose_max:15,dose_max_abs:1000,freq:'6/6h'};
test('dose ceiling applies to mg and liquid conversion',()=>{const d=calculateDose(indication,100,6);assert.equal(d.max,1000);assert.equal(presentationAmount({conc:100,label:'100 mg/mL',tipo:'mL'},d.max,d.unit).value,10);});
test('daily ceiling applied before dividing; fixed doses never multiplied by weight',()=>{const d=calculateDose({...indication,unidade:'mg/kg/dia',maxScope:'day'},100,6);assert.equal(d.max,250);assert.equal(d.dailyMax,1000);assert.equal(calculateDose({...indication,unidade:'mg/dose'},100,6).max,15);});
test('micrograms and international units are preserved',()=>{const d=calculateDose({...indication,unidade:'mcg/kg/dose'},10,6);assert.equal(d.unit,'mcg');assert.ok(Math.abs(presentationAmount({conc:0.05,label:'0,05 mg/mL',tipo:'mL'},d.max,d.unit).value-3)<1e-10);assert.ok(presentationAmount({conc:1,label:'1 mg/mL',tipo:'mL'},100,'UI').error);});
test('infusions, unsupported units and ambiguous daily ceilings cannot produce boluses',()=>{for(const unidade of ['mcg/kg/min','UI/kg/h','mg/m²','% — tópico'])assert.ok(calculateDose({...indication,unidade},10,6).error);assert.ok(calculateDose({...indication,unidade:'mg/kg/dia'},10,6).error);});
test('alternative intervals require an explicit choice for daily doses',()=>{assert.deepEqual(intervalOptions('8/8h ou 12/12h'),[8,12]);assert.ok(calculateDose({...indication,unidade:'mg/kg/dia',maxScope:'dose',freq:'8/8h ou 12/12h'},10,null).error);});
test('no assumed drop factor, unsupported tablet fractions or bypass of age limits',()=>{assert.ok(presentationAmount({tipo:'gotas',conc:100,label:'100 mg/mL'},100,'mg').error);assert.ok(presentationAmount({tipo:'comprimido',conc:500,label:'500 mg'},100,'mg').error);assert.ok(presentationAmount({tipo:'mL',conc:100,label:'100 mg/mL',idade_min:12},100,'mg',{ageMonths:143,weight:40}).error);assert.equal(presentationAmount({tipo:'mL',conc:100,label:'100 mg/mL',idade_min:12},100,'mg',{ageMonths:144,weight:40}).value,1);});
test('invalid input never becomes zero or a partial number',()=>{for(const v of ['', ' ', '12abc',Infinity])assert.ok(!Number.isFinite(numberInput(v)));assert.equal(numberInput('12,5'),12.5);assert.ok(calculateDose(indication,0,6).error);});
test('BSA reference case and missing inputs',()=>{const d=CLINICAL_DEFINITIONS['superficie-corporal'];assert.equal(evaluateClinical(d,{weight:36,height:100,method:'mosteller'}).value,1);assert.ok(evaluateClinical(d,{weight:'',height:100,method:'mosteller'}).error);});
test('renal equations use correct units, age boundaries and sex coefficients',()=>{const d=CLINICAL_DEFINITIONS['tfg-pediatrica'];const base={height:100,creatinine:1,creatinineUnit:'mgdl',age:12,sex:'male',term:'yes',method:'u25'};assert.equal(evaluateClinical(d,base).value,39);assert.equal(evaluateClinical(d,{...base,sex:'female'}).value,36.1);assert.equal(evaluateClinical(d,{...base,age:18}).value,50.8);assert.ok(evaluateClinical(d,{...base,age:0}).error);assert.equal(evaluateClinical(d,{...base,method:'bedside',creatinine:88.4,creatinineUnit:'umol'}).value,41.3);});
test('PAS requires explicit absence and correct weights',()=>{const d=CLINICAL_DEFINITIONS['pas-apendicite'];assert.ok(evaluateClinical(d,{}).error);assert.equal(evaluateClinical(d,Object.fromEntries(d.fields.map(f=>[f.id,f.options[1][0]]))).value,10);assert.equal(evaluateClinical(d,Object.fromEntries(d.fields.map(f=>[f.id,'0']))).value,0);});
test('registry has unique IDs and paths; all active tools are available except blocked ones',()=>{assert.equal(new Set(CALCULATORS.map(c=>c.id)).size,CALCULATORS.length);assert.equal(new Set(CALCULATORS.map(c=>c.path)).size,CALCULATORS.length);for(const c of CALCULATORS.filter(c=>c.id!=='pressao-arterial'))assert.equal(c.status,'available');});
test('a daily frequency cannot bypass a recorded maximum number of administrations',()=>{
 const d={...indication,maxAdministrations:4,maxDailyPerKg:75,freq:'4/4h ou 6/6h'};
 assert.ok(calculateDose(d,10,4).error);
 assert.ok(calculateDose(d,10,null).error);
 assert.equal(calculateDose(d,10,6).max,150);
});
test('SCORAD independent limits and mixed case',()=>{
 const d=CLINICAL_DEFINITIONS.scorad, signs=Object.fromEntries(Array.from({length:6},(_,i)=>['sign'+i,'3']));
 assert.equal(evaluateClinical(d,{...signs,extent:100,itch:10,sleep:10}).value,103);
 assert.equal(evaluateClinical(d,{...signs,extent:20,itch:2,sleep:3}).value,72);
 assert.ok(evaluateClinical(d,{...signs,extent:101,itch:2,sleep:3}).error);
});
test('Capurro keeps weeks and remaining days separate',()=>{
 const d=CLINICAL_DEFINITIONS.capurro;
 const r=evaluateClinical(d,{nipple:'15',skin:'20',ear:'24',breast:'15',sole:'20'});
 assert.equal(r.value,42);assert.equal(r.unit,'semanas e 4 dias');
 assert.ok(evaluateClinical(d,{nipple:'1',skin:'20',ear:'24',breast:'15',sole:'20'}).error);
});
test('Downes has all five components and no missing-as-zero',()=>{
 const d=CLINICAL_DEFINITIONS.downes;
 assert.equal(evaluateClinical(d,{rate:'2',retractions:'2',grunting:'2',air:'2',cyanosis:'2'}).value,10);
 assert.ok(evaluateClinical(d,{rate:'0'}).error);
});

test('PTS handles score extremes, inclusive boundaries and missing clinical criteria', () => {
 const def = CLINICAL_DEFINITIONS.pts;
 const best={weight:'21',pressure:'91',airway:'2',consciousness:'2',wounds:'2',fractures:'2'};
 assert.equal(evaluateClinical(def,best).value,12);
 assert.equal(evaluateClinical(def,{weight:'5',pressure:'0',airway:'-1',consciousness:'-1',wounds:'-1',fractures:'-1'}).value,-6);
 assert.equal(evaluateClinical(def,{...best,weight:'10',pressure:'50'}).value,10);
 assert.equal(evaluateClinical(def,{...best,weight:'20',pressure:'90'}).value,10);
 assert.ok(evaluateClinical(def,{...best,pressure:''}).error);
 assert.ok(evaluateClinical(def,{...best,airway:'0'}).error);
 assert.ok(evaluateClinical(def,{...best,weight:'-1'}).error);
});

test('daily absolute cap requires an interval even when the base dose is per administration', () => {
 const entry={...indication,maxScope:'day',dose_max_abs:100};
 assert.ok(calculateDose(entry,10,null).error);
 const result=calculateDose(entry,10,6);
 assert.equal(result.max,25);
 assert.equal(result.dailyMax,100);
});
test('invalid limits and concentration metadata never create numeric dose results', () => {
 for(const patch of [{dose_max_abs:-1},{dose_max_abs:Infinity},{maxDaily:0},{maxScope:'unknown'}]) assert.ok(calculateDose({...indication,...patch},10,6).error);
 assert.ok(presentationAmount({tipo:'mL',conc:10,concUnit:'g',label:'10 g/mL'},10,'mg').error);
 assert.ok(presentationAmount({tipo:'comprimido',conc:10,label:'10 mg',fractionStep:-1},10,'mg').error);
 assert.ok(presentationAmount({tipo:'comprimido',conc:10,label:'10 mg',fractionStep:0},10,'mg').error);
});

test('frequency parser distinguishes course duration from dosing intervals and retains explicit alternatives', () => {
 assert.deepEqual(intervalOptions('12/12h por 5–10 dias'),[12]);
 assert.deepEqual(intervalOptions('12/12h ou 1x ao dia'),[12,24]);
 assert.deepEqual(intervalOptions('6/6h ou 8/8h por 7–10 dias'),[6,8]);
 assert.deepEqual(intervalOptions('4–6h'),[]);
 assert.deepEqual(intervalOptions('4/4–6/6h'),[]);
 assert.deepEqual(intervalOptions('6/8h'),[]);
 assert.deepEqual(intervalOptions('Dia 1: 10 mg/kg; dias 2–5: 5 mg/kg/dia'),[]);
});
test('dose catalogue exposes one ceftriaxone record without discarding its five indications', async () => {
 const {getAllDosagens}=await import('../src/lib/dosagensData.js');
 const drugs=getAllDosagens();
 assert.equal(new Set(drugs.map(d=>d.id)).size,drugs.length);
 const matches=drugs.filter(d=>d.id==='ceftriaxona');
 assert.equal(matches.length,1);
 assert.deepEqual(matches[0].indicacoes.map(i=>i.id),['dose-geral','meningite','sepse-neonatal','pneumonia','gonorreia']);
});

test('RDAI keeps wheeze and retraction components within 0–17 and requires all six findings', () => {
 const d=CLINICAL_DEFINITIONS.rdai;
 assert.equal(evaluateClinical(d,{expiration:'4',inspiration:'2',fields:'2',retraction0:'3',retraction1:'3',retraction2:'3'}).value,17);
 assert.equal(evaluateClinical(d,{expiration:'0',inspiration:'0',fields:'0',retraction0:'0',retraction1:'0',retraction2:'0'}).value,0);
 assert.equal(evaluateClinical(d,{expiration:'2',inspiration:'1',fields:'1',retraction0:'1',retraction1:'2',retraction2:'3'}).value,10);
 assert.ok(evaluateClinical(d,{expiration:'4',inspiration:'2',fields:'2',retraction0:'3',retraction1:'3'}).error);
 assert.ok(evaluateClinical(d,{expiration:'5',inspiration:'2',fields:'2',retraction0:'3',retraction1:'3',retraction2:'3'}).error);
});

test('blood pressure with proven classification defects remains blocked',()=>{
 assert.equal(CALCULATORS.find(c=>c.id==='pressao-arterial').status,'blocked');
});

test('GINA 2026 asthma control calculates 0 to 4 criteria and assigns correct control status', () => {
 const d = CLINICAL_DEFINITIONS.gina;
 const well = evaluateClinical(d, { ageGroup: 'over5', daySymptoms: '0', nightAwakening: '0', relieverUse: '0', activityLimitation: '0' });
 assert.equal(well.value, 0);
 assert.equal(well.status, 'normal');
 assert.match(well.classification, /Bem Controlada/);

 const partly = evaluateClinical(d, { ageGroup: 'over5', daySymptoms: '1', nightAwakening: '0', relieverUse: '1', activityLimitation: '0' });
 assert.equal(partly.value, 2);
 assert.equal(partly.status, 'warning');
 assert.match(partly.classification, /Parcialmente Controlada/);

 const uncontrolled = evaluateClinical(d, { ageGroup: 'under6', daySymptoms: '1', nightAwakening: '1', relieverUse: '1', activityLimitation: '1' });
 assert.equal(uncontrolled.value, 4);
 assert.equal(uncontrolled.status, 'danger');
 assert.match(uncontrolled.classification, /Não Controlada/);
});

test('Capurro somatoneurologico calculates weeks and remaining days with constant 200', () => {
 const d = CLINICAL_DEFINITIONS['capurro-neuro'];
 const r = evaluateClinical(d, { nipple: '15', skin: '20', ear: '24', sole: '20', scarf: '18', head: '12' });
 // sum = 15+20+24+20+18+12 = 109. days = 109 + 200 = 309. weeks = 44, rem = 1
 assert.equal(r.value, 44);
 assert.equal(r.unit, 'semanas e 1 dias');
});

test('New Ballard Score calculates gestational age in weeks from neuromuscular and physical items', () => {
 const d = CLINICAL_DEFINITIONS['new-ballard'];
 const termInputs = {
  posture: '4', squareWindow: '4', armRecoil: '4', poplitealAngle: '4', scarfSign: '3', heelToEar: '3',
  skin: '4', lanugo: '3', plantarSurface: '4', breast: '3', eyeEar: '3', genitals: '3'
 };
 const r = evaluateClinical(d, termInputs);
 assert.ok(r.value >= 37);
});

test('SIRS and Phoenix 2024 score identifies septic shock and severe organ dysfunction', () => {
 const d = CLINICAL_DEFINITIONS['sirs-sepsis'];
 const shock = evaluateClinical(d, {
  tempSirs: '1', heartRateSirs: '1', respRateSirs: '1', leukoSirs: '1',
  respDysfunction: '2', cvDysfunction: '1', coagDysfunction: '1', neuroDysfunction: '0'
 });
 assert.equal(shock.value, 4);
 assert.equal(shock.status, 'danger');
 assert.match(shock.classification, /CHOQUE SÉPTICO/);
});

test('Roma IV functional constipation confirms diagnosis with at least 2 criteria', () => {
 const d = CLINICAL_DEFINITIONS['roma-iv'];
 const positive = evaluateClinical(d, {
  ageGroup: 'over4', bowelFreq: '1', incontinence: '1', retentive: '0', painful: '0', fecalMass: '0', largeStool: '0'
 });
 assert.equal(positive.value, 2);
 assert.match(positive.classification, /Critérios preenchidos/);
});

test('CDLQI sums 10 questions and classifies quality of life impairment', () => {
 const d = CLINICAL_DEFINITIONS.cdlqi;
 const answers = Object.fromEntries(Array.from({ length: 10 }, (_, i) => [`q${i + 1}`, '2']));
 const r = evaluateClinical(d, answers);
 assert.equal(r.value, 20);
 assert.match(r.classification, /EXTREMAMENTE GRANDE/);
});

test('getBPCategory evaluates Stage 2 and Stage 1 prior to Elevated BP under AAP 2017 rules', async () => {
 const { getBPCategory } = await import('../src/lib/bpData.js');

 // Critical clinical case: severe hypertension must NEVER be downgraded to 'Pressão Elevada'
 const severeCase = getBPCategory(99.9, 99.9, true, 180, 110, { p95: 112 }, { p95: 74 });
 assert.equal(severeCase.label, 'Hipertensão Estágio 2', 'Severe BP must classify as Stage 2 HTN');

 // Stage 2 via >= P95 + 12 mmHg: SBP 125 with P95 = 110 (125 >= 122)
 const stage2P95 = getBPCategory(98, 50, true, 125, 65, { p95: 110 }, { p95: 70 });
 assert.equal(stage2P95.label, 'Hipertensão Estágio 2', 'BP >= P95 + 12 must classify as Stage 2 HTN');

 // Stage 1: BP >= P95 but < P95 + 12 mmHg
 const stage1Case = getBPCategory(96, 50, true, 114, 65, { p95: 110 }, { p95: 70 });
 assert.equal(stage1Case.label, 'Hipertensão Estágio 1', 'BP >= P95 must classify as Stage 1 HTN');

 // Stage 1 via DBP >= 80 mmHg: SBP normal (P50) but DBP 82 mmHg
 const stage1Dbp = getBPCategory(50, 92, true, 95, 82, { p95: 110 }, { p95: 75 });
 assert.equal(stage1Dbp.label, 'Hipertensão Estágio 1', 'DBP >= 80 mmHg must classify as Stage 1 HTN');

 // Elevated BP: SBP >= 120 or >= P90 to < P95
 const elevatedCase = getBPCategory(91, 50, true, 105, 65, { p95: 110 }, { p95: 70 });
 assert.equal(elevatedCase.label, 'Pressão Elevada', 'BP between P90 and P95 must classify as Pressão Elevada');

 // Normal BP: < P90 and < 120/<80
 const normalCase = getBPCategory(50, 50, true, 95, 60, { p95: 110 }, { p95: 70 });
 assert.equal(normalCase.label, 'Normal', 'BP < P90 must classify as Normal');

 // Adolescents >= 13 years
 const adolStage2 = getBPCategory(99, 99, false, 142, 85);
 assert.equal(adolStage2.label, 'Hipertensão Estágio 2');

 const adolStage1 = getBPCategory(90, 90, false, 132, 75);
 assert.equal(adolStage1.label, 'Hipertensão Estágio 1');

 const adolElevated = getBPCategory(50, 50, false, 122, 75);
 assert.equal(adolElevated.label, 'Pressão Elevada');

 const adolNormal = getBPCategory(50, 50, false, 115, 75);
 assert.equal(adolNormal.label, 'Normal');
});

test('condutasData exports complete clinical catalog with explicit ESM imports and stripped headers', async () => {
 const { CONDUTAS_CATEGORIAS } = await import('../src/lib/condutasData.js');
 assert.ok(Array.isArray(CONDUTAS_CATEGORIAS));
 const neo = CONDUTAS_CATEGORIAS.find(c => c.id === 'neonatal');
 const cipe = CONDUTAS_CATEGORIAS.find(c => c.id === 'cirurgia-pediatrica');
 const urg = CONDUTAS_CATEGORIAS.find(c => c.id === 'urgencias-emergencias');
 const puer = CONDUTAS_CATEGORIAS.find(c => c.id === 'puericultura');
 const resp = CONDUTAS_CATEGORIAS.find(c => c.id === 'respiratorio');
 const hemato = CONDUTAS_CATEGORIAS.find(c => c.id === 'hematologia');
 const nefro = CONDUTAS_CATEGORIAS.find(c => c.id === 'nefrologia');
 const neuro = CONDUTAS_CATEGORIAS.find(c => c.id === 'neurologia');
 assert.ok(neo, 'Neonatal category must exist');
 assert.ok(cipe, 'Cirurgia Pediátrica category must exist');
 assert.ok(urg, 'Urgências e Emergências category must exist');
 assert.ok(puer, 'Puericultura category must exist');
 assert.ok(resp, 'Doenças Respiratórias category must exist');
 assert.ok(hemato, 'Hematologia category must exist');
 assert.ok(nefro, 'Nefrologia category must exist');
 assert.ok(neuro, 'Neurologia category must exist');

 const totalNeo = neo.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalCipe = cipe.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalUrg = urg.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalPuer = puer.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalResp = resp.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalHemato = hemato.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalNefro = nefro.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);
 const totalNeuro = neuro.subcategorias.reduce((acc, sub) => acc + sub.topicos.length, 0);

 assert.equal(totalNeo, 29, 'Must have 29 Neonatologia topics');
 assert.equal(totalCipe, 30, 'Must have 30 Cirurgia Pediátrica topics');
 assert.equal(totalUrg, 22, 'Must have 22 Urgência e Emergência topics');
 assert.equal(totalPuer, 28, 'Must have 28 Puericultura topics');
 assert.equal(totalResp, 23, 'Must have 23 Doenças Respiratórias topics');
 assert.equal(totalHemato, 16, 'Must have 16 Hematologia topics');
 assert.equal(totalNefro, 12, 'Must have 12 Nefrologia topics');
 assert.equal(totalNeuro, 3, 'Must have 3 Neurologia topics');

 // All 163 topics across 8 complete clinical areas must have substantive content and NO forbidden metadata header
 const allTopics = [...neo.subcategorias, ...cipe.subcategorias, ...urg.subcategorias, ...puer.subcategorias, ...resp.subcategorias, ...hemato.subcategorias, ...nefro.subcategorias, ...neuro.subcategorias]
   .flatMap(sub => sub.topicos);

 assert.equal(allTopics.length, 163, 'Total condutas topics across 8 areas must be 163');
 for (const topico of allTopics) {
   assert.ok(topico.conteudo && topico.conteudo.length > 200, `Topic ${topico.id} must have substantive content`);
   assert.ok(!topico.conteudo.includes('Versão editorial:'), `Topic ${topico.id} must not include "Versão editorial:"`);
   assert.ok(!topico.conteudo.includes('**Categoria:**'), `Topic ${topico.id} must not include "**Categoria:**"`);
   assert.ok(!topico.conteudo.includes('**Área:**'), `Topic ${topico.id} must not include "**Área:**"`);
 }
});


