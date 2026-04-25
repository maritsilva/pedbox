// ============================================================
// HELPER
// ============================================================
export function r(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// ============================================================
// DATA STRUCTURE
// Each drug has:
//   doses: array of { label, mgPerKgPerDay, maxMgPerDay, interval (doses/day), via }
//   presentations: array of { label, mgPerMl } (null mgPerMl = solid/fixed)
//   indications: string[]
//   notes: string[]
// ============================================================

export const antibiotics = [
  {
    id: 'amox', name: 'Amoxicilina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 40, maxMgPerDay: 3000, interval: 3, via: 'VO (8/8h)' },
      { label: 'Alta dose – OMA/Pneumonia', mgPerKgPerDay: 90, maxMgPerDay: 3000, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 250 mg/5 mL', mgPerMl: 50 },
      { label: 'Suspensão 500 mg/5 mL', mgPerMl: 100 },
    ],
    indications: ['Otite média aguda', 'Amigdalite', 'Pneumonia comunitária', 'Sinusite', 'ITU'],
    notes: ['Tomar com ou sem alimentos', 'Dose máxima: 3g/dia'],
  },
  {
    id: 'amoxclav', name: 'Amoxicilina + Clavulanato', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 40, maxMgPerDay: 3000, interval: 3, via: 'VO (8/8h)' },
      { label: 'Alta dose', mgPerKgPerDay: 90, maxMgPerDay: 3000, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 200/28,5 mg/5 mL', mgPerMl: 40 },
      { label: 'Suspensão 400/57 mg/5 mL', mgPerMl: 80 },
    ],
    indications: ['Otite média aguda refratária', 'Sinusite bacteriana', 'Infecções de pele', 'Pneumonia'],
    notes: ['Tomar com alimentos para reduzir efeitos GI', 'Dose máxima: 3g/dia (amoxicilina)'],
  },
  {
    id: 'ampi', name: 'Ampicilina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 100, maxMgPerDay: 12000, interval: 4, via: 'EV/IM (6/6h)' },
      { label: 'Alta – meningite', mgPerKgPerDay: 200, maxMgPerDay: 12000, interval: 4, via: 'EV (6/6h)' },
    ],
    presentations: [
      { label: 'Ampola 500 mg', mgPerMl: null, fixedMg: 500 },
      { label: 'Ampola 1g', mgPerMl: null, fixedMg: 1000 },
    ],
    indications: ['Meningite bacteriana', 'Sepse neonatal', 'Listeriose', 'Infecções por enterococos'],
    notes: ['Diluir em SF 0,9% ou SG 5%', 'Incompatível com aminoglicosídeos na mesma seringa'],
  },
  {
    id: 'cef', name: 'Cefalexina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 40, maxMgPerDay: 4000, interval: 4, via: 'VO (6/6h)' },
    ],
    presentations: [
      { label: 'Suspensão 250 mg/5 mL', mgPerMl: 50 },
    ],
    indications: ['Infecções de pele e partes moles', 'Faringoamigdalite', 'ITU não complicada'],
    notes: ['Dose máxima: 4g/dia', 'Pode ser tomado com alimentos'],
  },
  {
    id: 'cefa', name: 'Cefadroxila', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 30, maxMgPerDay: 2000, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 250 mg/5 mL', mgPerMl: 50 },
      { label: 'Suspensão 500 mg/5 mL', mgPerMl: 100 },
    ],
    indications: ['Infecções de pele e partes moles', 'Faringoamigdalite', 'ITU não complicada'],
    notes: ['Dose máxima: 2g/dia'],
  },
  {
    id: 'azi', name: 'Azitromicina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 10, maxMgPerDay: 500, interval: 1, via: 'VO (24/24h), 3–5 dias' },
    ],
    presentations: [
      { label: 'Suspensão 200 mg/5 mL', mgPerMl: 40 },
    ],
    indications: ['Pneumonia atípica', 'Faringoamigdalite (alergia à penicilina)', 'Coqueluche', 'Sinusite'],
    notes: ['Tomar 1h antes ou 2h após refeições', 'Pode prolongar intervalo QT'],
  },
  {
    id: 'clari', name: 'Claritromicina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 15, maxMgPerDay: 1000, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 250 mg/5 mL', mgPerMl: 50 },
    ],
    indications: ['Pneumonia atípica', 'Faringoamigdalite', 'Otite média', 'Sinusite'],
    notes: ['Dose máxima: 1g/dia', 'Inibidor do CYP3A4'],
  },
  {
    id: 'eritro', name: 'Eritromicina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 40, maxMgPerDay: 2000, interval: 4, via: 'VO (6/6h)' },
    ],
    presentations: [
      { label: 'Suspensão 200 mg/5 mL', mgPerMl: 40 },
    ],
    indications: ['Coqueluche', 'Pneumonia por Mycoplasma', 'Alergia à penicilina', 'Difteria'],
    notes: ['Tomar com alimentos para reduzir náuseas', 'Inibidor do CYP3A4'],
  },
  {
    id: 'genta', name: 'Gentamicina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 5, maxMgPerDay: 300, interval: 1, via: 'EV/IM (24/24h)' },
      { label: 'Neonatal', mgPerKgPerDay: 4, maxMgPerDay: 200, interval: 1, via: 'EV/IM (24–48h)' },
    ],
    presentations: [
      { label: 'Ampola 40 mg/mL', mgPerMl: 40 },
      { label: 'Ampola 10 mg/mL', mgPerMl: 10 },
    ],
    indications: ['Infecções gram-negativas graves', 'Sepse', 'Meningite por gram-negativos'],
    notes: ['Monitorar função renal', 'Ototóxico – monitorar audição', 'Incompatível com ampicilina na mesma seringa'],
  },
  {
    id: 'amica', name: 'Amicacina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: 15, maxMgPerDay: 1500, interval: 1, via: 'EV/IM (24/24h)' },
    ],
    presentations: [
      { label: 'Ampola 250 mg/mL', mgPerMl: 250 },
    ],
    indications: ['Infecções por gram-negativos resistentes', 'Sepse hospitalar', 'Pseudomonas'],
    notes: ['Nefrotóxico e ototóxico', 'Dosar nível sérico quando possível'],
  },
  {
    id: 'nitro', name: 'Nitrofurantoína', category: 'antibioticos',
    doses: [
      { label: 'Terapêutica', mgPerKgPerDay: 5, maxMgPerDay: 400, interval: 4, via: 'VO (6/6h)' },
      { label: 'Profilática', mgPerKgPerDay: 1, maxMgPerDay: 100, interval: 1, via: 'VO (noite)' },
    ],
    presentations: [
      { label: 'Cápsula 100 mg', mgPerMl: null, fixedMg: 100 },
    ],
    indications: ['ITU baixo', 'Profilaxia de ITU recorrente'],
    notes: ['Não usar em < 1 mês de vida', 'Tomar com alimentos', 'Urina pode ficar amarronzada'],
  },
  {
    id: 'sulfa', name: 'Sulfametoxazol + Trimetoprim', category: 'antibioticos',
    doses: [
      { label: 'TMP (componente ativo)', mgPerKgPerDay: 8, maxMgPerDay: 320, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 200/40 mg/5 mL (SMX/TMP)', mgPerMl: 8 }, // 8mg TMP/5mL = 1,6 mg TMP/mL
    ],
    indications: ['Infecção urinária', 'Pneumocistose (PCP)', 'Shiguelose', 'Otite média'],
    notes: ['Suspensão: TMP 8 mg/mL + SMX 40 mg/mL', 'Hidratação adequada', 'Contraindicado em < 2 meses'],
  },
  {
    id: 'penp', name: 'Penicilina G Potássica', category: 'antibioticos',
    doses: [
      { label: 'Padrão (25.000 UI/kg/dose × 6)', mgPerKgPerDay: null, fixedNote: 'Dose: 25.000–50.000 UI/kg/dose, 4/4h ou 6/6h, EV', interval: null, via: 'EV' },
    ],
    presentations: [
      { label: 'Frasco 500.000 UI', mgPerMl: null },
      { label: 'Frasco 1.000.000 UI', mgPerMl: null },
    ],
    indications: ['Infecções estreptocócicas', 'Sífilis congênita', 'Meningite bacteriana', 'Endocardite'],
    notes: ['Unidade em UI (não mg)', 'Monitorar função renal', 'Diluir em SF 0,9% ou SG 5%'],
  },
  {
    id: 'penc', name: 'Penicilina G Cristalina', category: 'antibioticos',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: null, fixedNote: 'Dose: 25.000–50.000 UI/kg/dose, 4/4h ou 6/6h, EV', interval: null, via: 'EV' },
    ],
    presentations: [
      { label: 'Frasco 1.000.000 UI', mgPerMl: null },
      { label: 'Frasco 5.000.000 UI', mgPerMl: null },
    ],
    indications: ['Infecções estreptocócicas', 'Pneumonia bacteriana', 'Meningite bacteriana'],
    notes: ['Dose em UI', 'Diluir antes de administrar'],
  },
  {
    id: 'peng', name: 'Penicilina G Benzatina', category: 'antibioticos',
    doses: [
      { label: '< 30 kg', mgPerKgPerDay: null, fixedNote: '600.000 UI, IM, dose única', interval: null, via: 'IM' },
      { label: '≥ 30 kg', mgPerKgPerDay: null, fixedNote: '1.200.000 UI, IM, dose única', interval: null, via: 'IM' },
    ],
    presentations: [
      { label: 'Frasco 600.000 UI', mgPerMl: null },
      { label: 'Frasco 1.200.000 UI', mgPerMl: null },
    ],
    indications: ['Faringoamigdalite estreptocócica', 'Febre reumática (profilaxia)', 'Sífilis adquirida'],
    notes: ['Aplicar profundamente IM', 'Agitar bem o frasco', 'Não administrar IV'],
  },
];

export const anticonvulsivantes = [
  {
    id: 'diaz', name: 'Diazepam', category: 'anticonvulsionantes',
    doses: [
      { label: 'EV (0,3 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.3, maxMgPerDose: 10, interval: null, via: 'EV lento (1–2 min)' },
      { label: 'Retal (0,5 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.5, maxMgPerDose: 20, interval: null, via: 'Retal' },
    ],
    presentations: [
      { label: 'Ampola 5 mg/mL (2 mL)', mgPerMl: 5 },
      { label: 'Solução retal 5 mg/2,5 mL', mgPerMl: 2 },
    ],
    indications: ['Crise convulsiva aguda', 'Estado epiléptico', 'Convulsão febril'],
    notes: ['Pode repetir após 5 min (máx 3 doses)', 'Monitorar respiração', 'Ter suporte ventilatório disponível'],
  },
  {
    id: 'fenobar', name: 'Fenobarbital', category: 'anticonvulsionantes',
    doses: [
      { label: 'Ataque (20 mg/kg)', mgPerKgPerDay: null, mgPerKgPerDose: 20, maxMgPerDose: 800, interval: null, via: 'EV lento (máx 1 mg/kg/min)' },
      { label: 'Manutenção (4 mg/kg/dia)', mgPerKgPerDay: 4, maxMgPerDay: null, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Ampola 200 mg/mL', mgPerMl: 200 },
      { label: 'Solução oral 40 mg/mL', mgPerMl: 40 },
      { label: 'Comprimido 100 mg', mgPerMl: null, fixedMg: 100 },
    ],
    indications: ['Estado epiléptico', 'Crise neonatal', 'Epilepsia – manutenção'],
    notes: ['Nível sérico: 15–40 mcg/mL', 'Sedação é efeito frequente'],
  },
  {
    id: 'fenito', name: 'Fenitoína', category: 'anticonvulsionantes',
    doses: [
      { label: 'Ataque (20 mg/kg)', mgPerKgPerDay: null, mgPerKgPerDose: 20, maxMgPerDose: 1000, interval: null, via: 'EV (máx 1 mg/kg/min)' },
      { label: 'Manutenção (5 mg/kg/dia)', mgPerKgPerDay: 5, maxMgPerDay: 300, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Ampola 50 mg/mL', mgPerMl: 50 },
      { label: 'Suspensão 25 mg/5 mL', mgPerMl: 5 },
    ],
    indications: ['Estado epiléptico refratário', 'Epilepsia tônico-clônica'],
    notes: ['Monitorar ECG', 'Nível sérico: 10–20 mcg/mL', 'Não diluir em SG (precipita)'],
  },
  {
    id: 'carba', name: 'Carbamazepina', category: 'anticonvulsionantes',
    doses: [
      { label: 'Inicial (5 mg/kg/dia)', mgPerKgPerDay: 5, maxMgPerDay: 600, interval: 3, via: 'VO (8/8h)' },
      { label: 'Manutenção (15 mg/kg/dia)', mgPerKgPerDay: 15, maxMgPerDay: 1200, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 100 mg/5 mL', mgPerMl: 20 },
      { label: 'Comprimido 200 mg', mgPerMl: null, fixedMg: 200 },
    ],
    indications: ['Epilepsia parcial', 'Epilepsia tônico-clônica generalizada', 'Neuralgia do trigêmeo'],
    notes: ['Monitorar hemograma e função hepática', 'Nível sérico: 4–12 mcg/mL', 'Indutor enzimático'],
  },
  {
    id: 'valp', name: 'Ácido Valpróico', category: 'anticonvulsionantes',
    doses: [
      { label: 'Inicial (10 mg/kg/dia)', mgPerKgPerDay: 10, maxMgPerDay: 1000, interval: 2, via: 'VO (12/12h)' },
      { label: 'Máxima (40 mg/kg/dia)', mgPerKgPerDay: 40, maxMgPerDay: 2000, interval: 3, via: 'VO (8/8h)' },
    ],
    presentations: [
      { label: 'Xarope 250 mg/5 mL', mgPerMl: 50 },
      { label: 'Comprimido 250 mg', mgPerMl: null, fixedMg: 250 },
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Epilepsia generalizada', 'Ausência', 'Síndrome de Lennox-Gastaut'],
    notes: ['Monitorar função hepática (especialmente < 2 anos)', 'Nível sérico: 50–100 mcg/mL', 'Teratogênico'],
  },
];

export const antifungicos = [
  {
    id: 'fluc', name: 'Fluconazol', category: 'antifungicos',
    doses: [
      { label: 'Padrão (6 mg/kg/dia)', mgPerKgPerDay: 6, maxMgPerDay: 400, interval: 1, via: 'VO ou EV (24/24h)' },
      { label: 'Alta – invasiva (12 mg/kg/dia)', mgPerKgPerDay: 12, maxMgPerDay: 800, interval: 1, via: 'VO ou EV (24/24h)' },
    ],
    presentations: [
      { label: 'Suspensão 10 mg/mL', mgPerMl: 10 },
      { label: 'Suspensão 40 mg/mL', mgPerMl: 40 },
      { label: 'Ampola 2 mg/mL', mgPerMl: 2 },
    ],
    indications: ['Candidíase orofaríngea', 'Candidíase esofágica', 'Candidemia', 'Criptococose'],
    notes: ['Inibidor do CYP2C9/3A4 – múltiplas interações'],
  },
  {
    id: 'anf', name: 'Anfotericina B', category: 'antifungicos',
    doses: [
      { label: 'Convencional (1 mg/kg/dia)', mgPerKgPerDay: 1, maxMgPerDay: 80, interval: 1, via: 'EV (4–6h)' },
      { label: 'Lipossomal (3 mg/kg/dia)', mgPerKgPerDay: 3, maxMgPerDay: 200, interval: 1, via: 'EV (4–6h)' },
    ],
    presentations: [
      { label: 'Frasco 50 mg (reconstituir)', mgPerMl: null, fixedMg: 50 },
    ],
    indications: ['Aspergilose invasiva', 'Candidemia grave', 'Criptococose', 'Mucormicose'],
    notes: ['Monitorar função renal e eletrólitos', 'Teste dose: 1 mg em 20–30 min', 'Não misturar com SF 0,9%'],
  },
  {
    id: 'nist', name: 'Nistatina', category: 'antifungicos',
    doses: [
      { label: 'RN/Lactente', mgPerKgPerDay: null, fixedNote: '100.000–400.000 UI, 4–6x/dia', interval: null, via: 'VO (tópico oral)' },
    ],
    presentations: [
      { label: 'Suspensão 100.000 UI/mL', mgPerMl: null, uiPerMl: 100000 },
    ],
    indications: ['Candidíase oral (sapinho)', 'Candidíase de fralda', 'Profilaxia em prematuros'],
    notes: ['Aplicar após amamentação', 'Uso apenas local – não absorve pelo TGI'],
  },
  {
    id: 'gri', name: 'Griseofulvina', category: 'antifungicos',
    doses: [
      { label: 'Padrão (20 mg/kg/dia)', mgPerKgPerDay: 20, maxMgPerDay: 1000, interval: 1, via: 'VO (24/24h)' },
    ],
    presentations: [
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
      { label: 'Suspensão 125 mg/5 mL', mgPerMl: 25 },
    ],
    indications: ['Tinea capitis', 'Tinea corporis extensa', 'Onicomicose'],
    notes: ['Tomar com alimentos gordurosos', 'Duração: 6–8 semanas', 'Fotossensibilidade possível'],
  },
  {
    id: 'terb_af', name: 'Terbinafina', category: 'antifungicos',
    doses: [
      { label: '< 20 kg', mgPerKgPerDay: null, fixedNote: '62,5 mg/dia', interval: 1, via: 'VO (24/24h)' },
      { label: '20–40 kg', mgPerKgPerDay: null, fixedNote: '125 mg/dia', interval: 1, via: 'VO (24/24h)' },
      { label: '> 40 kg', mgPerKgPerDay: null, fixedNote: '250 mg/dia', interval: 1, via: 'VO (24/24h)' },
    ],
    presentations: [
      { label: 'Comprimido 250 mg', mgPerMl: null, fixedMg: 250 },
    ],
    indications: ['Tinea capitis (Trichophyton)', 'Onicomicose', 'Tinea corporis'],
    notes: ['Monitorar função hepática', 'Duração: 2–6 semanas conforme localização'],
  },
];

export const antihistaminicos = [
  {
    id: 'dexclo', name: 'Dexclorfeniramina', category: 'antihistaminicos',
    doses: [
      { label: '2–5 anos', mgPerKgPerDay: null, fixedNote: '0,5 mg/dose, 8/8h', via: 'VO' },
      { label: '6–12 anos', mgPerKgPerDay: null, fixedNote: '1 mg/dose, 8/8h', via: 'VO' },
      { label: '> 12 anos', mgPerKgPerDay: null, fixedNote: '2 mg/dose, 8/8h', via: 'VO' },
    ],
    presentations: [
      { label: 'Xarope 0,4 mg/5 mL', mgPerMl: 0.08 },
      { label: 'Comprimido 2 mg', mgPerMl: null, fixedMg: 2 },
    ],
    indications: ['Rinite alérgica', 'Urticária', 'Prurido', 'Reação alérgica leve'],
    notes: ['Causa sedação', 'Não usar em < 2 anos'],
  },
  {
    id: 'hidro_ah', name: 'Hidroxizina', category: 'antihistaminicos',
    doses: [
      { label: 'Padrão (1 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 1, maxMgPerDose: 50, interval: null, via: 'VO (6/6h ou 8/8h)' },
    ],
    presentations: [
      { label: 'Xarope 2 mg/mL', mgPerMl: 2 },
      { label: 'Comprimido 25 mg', mgPerMl: null, fixedMg: 25 },
    ],
    indications: ['Urticária', 'Prurido intenso', 'Ansiedade (pré-operatório)', 'Dermatite atópica'],
    notes: ['Sedação marcada', 'Pode prolongar QT'],
  },
  {
    id: 'lora', name: 'Loratadina', category: 'antihistaminicos',
    doses: [
      { label: '< 30 kg', mgPerKgPerDay: null, fixedNote: '5 mg/dia', interval: 1, via: 'VO (24/24h)' },
      { label: '≥ 30 kg', mgPerKgPerDay: null, fixedNote: '10 mg/dia', interval: 1, via: 'VO (24/24h)' },
    ],
    presentations: [
      { label: 'Xarope 1 mg/mL', mgPerMl: 1 },
      { label: 'Comprimido 10 mg', mgPerMl: null, fixedMg: 10 },
    ],
    indications: ['Rinite alérgica', 'Urticária crônica', 'Prurido alérgico'],
    notes: ['Não causa sedação significativa', 'Dose única diária'],
  },
  {
    id: 'deslo', name: 'Desloratadina', category: 'antihistaminicos',
    doses: [
      { label: '6–11 meses', mgPerKgPerDay: null, fixedNote: '1 mg/dia', interval: 1, via: 'VO' },
      { label: '1–5 anos', mgPerKgPerDay: null, fixedNote: '1,25 mg/dia', interval: 1, via: 'VO' },
      { label: '6–11 anos', mgPerKgPerDay: null, fixedNote: '2,5 mg/dia', interval: 1, via: 'VO' },
      { label: '≥ 12 anos', mgPerKgPerDay: null, fixedNote: '5 mg/dia', interval: 1, via: 'VO' },
    ],
    presentations: [
      { label: 'Xarope 0,5 mg/mL', mgPerMl: 0.5 },
      { label: 'Comprimido 5 mg', mgPerMl: null, fixedMg: 5 },
    ],
    indications: ['Rinite alérgica', 'Urticária crônica idiopática'],
    notes: ['Não sedativo', 'Dose única diária'],
  },
  {
    id: 'ceti', name: 'Cetirizina', category: 'antihistaminicos',
    doses: [
      { label: '6m–2 anos', mgPerKgPerDay: null, fixedNote: '2,5 mg/dia', interval: 1, via: 'VO' },
      { label: '2–5 anos', mgPerKgPerDay: null, fixedNote: '2,5 mg, 12/12h ou 5 mg/dia', interval: 1, via: 'VO' },
      { label: '≥ 6 anos', mgPerKgPerDay: null, fixedNote: '5–10 mg/dia', interval: 1, via: 'VO' },
    ],
    presentations: [
      { label: 'Gotas 10 mg/mL (1 mg/gota)', mgPerMl: 10 },
      { label: 'Xarope 5 mg/5 mL', mgPerMl: 1 },
    ],
    indications: ['Rinite alérgica', 'Urticária', 'Dermatite atópica'],
    notes: ['Leve sedação possível', 'Dose única diária ou 2x/dia'],
  },
  {
    id: 'fexo', name: 'Fexofenadina', category: 'antihistaminicos',
    doses: [
      { label: '6m–2 anos', mgPerKgPerDay: null, fixedNote: '15 mg, 12/12h', via: 'VO' },
      { label: '2–11 anos', mgPerKgPerDay: null, fixedNote: '30 mg, 12/12h', via: 'VO' },
      { label: '≥ 12 anos', mgPerKgPerDay: null, fixedNote: '120–180 mg/dia', via: 'VO' },
    ],
    presentations: [
      { label: 'Suspensão 30 mg/5 mL', mgPerMl: 6 },
      { label: 'Comprimido 60 mg', mgPerMl: null, fixedMg: 60 },
      { label: 'Comprimido 120 mg', mgPerMl: null, fixedMg: 120 },
    ],
    indications: ['Rinite alérgica sazonal', 'Urticária crônica idiopática'],
    notes: ['Não sedativo', 'Não tomar com suco de frutas (reduz absorção)'],
  },
  {
    id: 'prome', name: 'Prometazina', category: 'antihistaminicos',
    doses: [
      { label: 'Padrão (0,5 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.5, maxMgPerDose: 25, interval: null, via: 'VO (6/6h ou 8/8h)' },
    ],
    presentations: [
      { label: 'Xarope 1 mg/mL', mgPerMl: 1 },
      { label: 'Comprimido 25 mg', mgPerMl: null, fixedMg: 25 },
    ],
    indications: ['Náuseas e vômitos', 'Reação alérgica', 'Sedação pré-operatória'],
    notes: ['⚠️ CONTRAINDICADO em < 2 anos (risco de apneia)', 'Efeitos extrapiramidais possíveis'],
  },
];

export const antiinflamatorios = [
  {
    id: 'ibup', name: 'Ibuprofeno', category: 'antiinflamatorios',
    doses: [
      { label: 'Antipirético/Analgésico (10 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 10, maxMgPerDose: 400, interval: null, via: 'VO (6/6h ou 8/8h)' },
      { label: 'Anti-inflamatório (30 mg/kg/dia)', mgPerKgPerDay: 30, maxMgPerDay: 2400, interval: 4, via: 'VO (6/6h)' },
    ],
    presentations: [
      { label: 'Suspensão 100 mg/5 mL', mgPerMl: 20 },
      { label: 'Suspensão 50 mg/1,25 mL (gotas)', mgPerMl: 40 },
      { label: 'Comprimido 200 mg', mgPerMl: null, fixedMg: 200 },
      { label: 'Comprimido 400 mg', mgPerMl: null, fixedMg: 400 },
    ],
    indications: ['Febre', 'Dor leve-moderada', 'Artrite juvenil', 'Dismenorreia'],
    notes: ['Tomar com alimentos', 'Contraindicado na varicela'],
  },
  {
    id: 'dicl', name: 'Diclofenaco', category: 'antiinflamatorios',
    doses: [
      { label: 'Padrão (1–3 mg/kg/dia)', mgPerKgPerDay: 2, maxMgPerDay: 150, interval: 3, via: 'VO (8/8h)' },
    ],
    presentations: [
      { label: 'Comprimido 50 mg', mgPerMl: null, fixedMg: 50 },
      { label: 'Ampola 75 mg/3 mL', mgPerMl: 25 },
    ],
    indications: ['Artrite reumatoide', 'Dor pós-operatória', 'Dismenorreia'],
    notes: ['Tomar com alimentos', 'Monitorar função renal', 'Usar > 6 anos'],
  },
  {
    id: 'nim', name: 'Nimesulida', category: 'antiinflamatorios',
    doses: [
      { label: 'Padrão (5 mg/kg/dia)', mgPerKgPerDay: 5, maxMgPerDay: 200, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 50 mg/5 mL', mgPerMl: 10 },
      { label: 'Comprimido 100 mg', mgPerMl: null, fixedMg: 100 },
    ],
    indications: ['Dor e inflamação', 'Febre refratária'],
    notes: ['⚠️ CONTRAINDICADO em < 2 anos', 'Hepatotóxico – evitar uso prolongado'],
  },
  {
    id: 'nap', name: 'Naproxeno', category: 'antiinflamatorios',
    doses: [
      { label: 'Padrão (5–10 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 7.5, maxMgPerDose: 500, interval: null, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 125 mg/5 mL', mgPerMl: 25 },
      { label: 'Comprimido 250 mg', mgPerMl: null, fixedMg: 250 },
    ],
    indications: ['Artrite juvenil idiopática', 'Dor musculoesquelética'],
    notes: ['Tomar com alimentos ou antiácido', 'Usar > 2 anos'],
  },
  {
    id: 'aas', name: 'AAS (Ácido Acetilsalicílico)', category: 'antiinflamatorios',
    doses: [
      { label: 'Antiagregante (3–5 mg/kg/dia)', mgPerKgPerDay: 4, maxMgPerDay: 100, interval: 1, via: 'VO (24/24h)' },
      { label: 'Anti-inflamatório Kawasaki (80 mg/kg/dia)', mgPerKgPerDay: 80, maxMgPerDay: 3000, interval: 4, via: 'VO (6/6h)' },
    ],
    presentations: [
      { label: 'Comprimido 100 mg', mgPerMl: null, fixedMg: 100 },
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Doença de Kawasaki', 'Cardiopatia pós-Kawasaki (antiagregante)'],
    notes: ['⚠️ Risco de Síndrome de Reye em infecções virais', 'NÃO usar para febre/dor comum em crianças'],
  },
];

export const antiparasitarios = [
  {
    id: 'alben', name: 'Albendazol', category: 'antiparasitarios',
    doses: [
      { label: '< 2 anos', mgPerKgPerDay: null, fixedNote: '200 mg, dose única', via: 'VO' },
      { label: '≥ 2 anos', mgPerKgPerDay: null, fixedNote: '400 mg, dose única', via: 'VO' },
      { label: 'Neurocisticercose (15 mg/kg/dia × 8 dias)', mgPerKgPerDay: 15, maxMgPerDay: 800, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Suspensão 400 mg/10 mL', mgPerMl: 40 },
      { label: 'Comprimido 400 mg', mgPerMl: null, fixedMg: 400 },
    ],
    indications: ['Ascaridíase', 'Oxiuríase', 'Ancilostomíase', 'Neurocisticercose'],
    notes: ['Tomar com alimentos gordurosos', 'Repetir após 2 semanas para oxiuríase'],
  },
  {
    id: 'meben', name: 'Mebendazol', category: 'antiparasitarios',
    doses: [
      { label: 'Padrão', mgPerKgPerDay: null, fixedNote: '100 mg, 12/12h, 3 dias', via: 'VO' },
      { label: 'Dose única (ancilostomíase)', mgPerKgPerDay: null, fixedNote: '500 mg, dose única', via: 'VO' },
    ],
    presentations: [
      { label: 'Suspensão 100 mg/5 mL', mgPerMl: 20 },
      { label: 'Comprimido 100 mg', mgPerMl: null, fixedMg: 100 },
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Ascaridíase', 'Oxiuríase', 'Ancilostomíase', 'Tricocefalíase'],
    notes: ['Tratar a família simultaneamente'],
  },
  {
    id: 'metro', name: 'Metronidazol', category: 'antiparasitarios',
    doses: [
      { label: 'Giardíase (15 mg/kg/dia × 7–10 dias)', mgPerKgPerDay: 15, maxMgPerDay: 750, interval: 3, via: 'VO (8/8h)' },
      { label: 'Amebíase (30 mg/kg/dia × 10 dias)', mgPerKgPerDay: 30, maxMgPerDay: 2000, interval: 3, via: 'VO (8/8h)' },
    ],
    presentations: [
      { label: 'Suspensão 200 mg/5 mL', mgPerMl: 40 },
      { label: 'Comprimido 250 mg', mgPerMl: null, fixedMg: 250 },
      { label: 'Ampola 5 mg/mL', mgPerMl: 5 },
    ],
    indications: ['Giardíase', 'Amebíase intestinal', 'Tricomoníase', 'Infecções anaeróbias'],
    notes: ['Não ingerir álcool (reação Antabuse)', 'Sabor metálico na boca'],
  },
  {
    id: 'secni', name: 'Secnidazol', category: 'antiparasitarios',
    doses: [
      { label: 'Dose única (30 mg/kg)', mgPerKgPerDay: null, mgPerKgPerDose: 30, maxMgPerDose: 2000, interval: null, via: 'VO, dose única' },
    ],
    presentations: [
      { label: 'Suspensão 1g/20 mL', mgPerMl: 50 },
      { label: 'Sachê 1g', mgPerMl: null, fixedMg: 1000 },
    ],
    indications: ['Giardíase', 'Amebíase', 'Tricomoníase', 'Vaginose bacteriana'],
    notes: ['Dose única – melhor adesão', 'Não ingerir álcool'],
  },
  {
    id: 'anita', name: 'Nitazoxanida', category: 'antiparasitarios',
    doses: [
      { label: '1–3 anos', mgPerKgPerDay: null, fixedNote: '100 mg, 12/12h, 3 dias', via: 'VO' },
      { label: '4–11 anos', mgPerKgPerDay: null, fixedNote: '200 mg, 12/12h, 3 dias', via: 'VO' },
      { label: '≥ 12 anos', mgPerKgPerDay: null, fixedNote: '500 mg, 12/12h, 3 dias', via: 'VO' },
    ],
    presentations: [
      { label: 'Suspensão 200 mg/5 mL', mgPerMl: 40 },
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Giardíase', 'Criptosporidiose', 'Amebíase'],
    notes: ['Tomar com alimentos', 'Boa tolerabilidade'],
  },
  {
    id: 'iver', name: 'Ivermectina', category: 'antiparasitarios',
    doses: [
      { label: 'Dose única (200 mcg/kg)', mgPerKgPerDay: null, mgPerKgPerDose: 0.2, maxMgPerDose: 12, interval: null, via: 'VO, dose única' },
    ],
    presentations: [
      { label: 'Comprimido 6 mg', mgPerMl: null, fixedMg: 6 },
    ],
    indications: ['Escabiose', 'Estrongiloidíase', 'Pediculose refratária', 'Oncocercose'],
    notes: ['Usar > 15 kg', 'Tomar em jejum com água'],
  },
  {
    id: 'pirv', name: 'Pamoato de Pirvínio', category: 'antiparasitarios',
    doses: [
      { label: 'Dose única (10 mg/kg)', mgPerKgPerDay: null, mgPerKgPerDose: 10, maxMgPerDose: 500, interval: null, via: 'VO, dose única' },
    ],
    presentations: [
      { label: 'Suspensão 50 mg/5 mL', mgPerMl: 10 },
    ],
    indications: ['Enterobíase (oxiuríase)'],
    notes: ['Repetir após 3 semanas', 'Fezes ficam vermelho-alaranjadas (normal)', 'Tratar a família'],
  },
];

export const broncodilatadores = [
  {
    id: 'salb', name: 'Salbutamol', category: 'broncodilatadores',
    doses: [
      { label: 'Nebulização (0,15 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.15, maxMgPerDose: 5, interval: null, via: 'Inalatório (20/20 min na crise)' },
    ],
    presentations: [
      { label: 'Solução nebulização 5 mg/mL', mgPerMl: 5 },
    ],
    indications: ['Broncoespasmo agudo', 'Asma – crise', 'Sibilância', 'Bronquiolite'],
    notes: ['Diluir em 3–4 mL de SF 0,9%', 'Pode repetir a cada 20 min (3x)', 'MDI: 100–200 mcg + espaçador'],
  },
  {
    id: 'ipra', name: 'Ipratrópio', category: 'broncodilatadores',
    doses: [
      { label: '< 20 kg', mgPerKgPerDay: null, fixedNote: '250 mcg/dose', via: 'Inalatório' },
      { label: '≥ 20 kg', mgPerKgPerDay: null, fixedNote: '500 mcg/dose', via: 'Inalatório' },
    ],
    presentations: [
      { label: 'Solução 0,25 mg/mL (250 mcg/mL)', mgPerMl: 0.25 },
    ],
    indications: ['Crise asmática moderada-grave', 'Broncoespasmo refratário ao salbutamol'],
    notes: ['Usar associado ao salbutamol na crise', 'Pode causar boca seca'],
  },
  {
    id: 'mag', name: 'Sulfato de Magnésio', category: 'broncodilatadores',
    doses: [
      { label: 'Dose EV (40 mg/kg)', mgPerKgPerDay: null, mgPerKgPerDose: 40, maxMgPerDose: 2000, interval: null, via: 'EV (20–30 min)' },
    ],
    presentations: [
      { label: 'Ampola 500 mg/10 mL', mgPerMl: 50 },
      { label: 'Ampola 2g/10 mL', mgPerMl: 200 },
    ],
    indications: ['Asma grave refratária', 'Broncoespasmo refratário ao beta-2'],
    notes: ['Diluir em 100 mL SF 0,9%', 'Monitorar PA e FC', 'Ter gluconato de cálcio disponível'],
  },
  {
    id: 'monte', name: 'Montelucaste', category: 'broncodilatadores',
    doses: [
      { label: '6m–5 anos', mgPerKgPerDay: null, fixedNote: '4 mg/dia', interval: 1, via: 'VO (noite)' },
      { label: '6–14 anos', mgPerKgPerDay: null, fixedNote: '5 mg/dia', interval: 1, via: 'VO (noite)' },
      { label: '> 14 anos', mgPerKgPerDay: null, fixedNote: '10 mg/dia', interval: 1, via: 'VO (noite)' },
    ],
    presentations: [
      { label: 'Sachê granulado 4 mg', mgPerMl: null, fixedMg: 4 },
      { label: 'Comprimido mastigável 5 mg', mgPerMl: null, fixedMg: 5 },
      { label: 'Comprimido 10 mg', mgPerMl: null, fixedMg: 10 },
    ],
    indications: ['Asma – manutenção', 'Rinite alérgica', 'Sibilância induzida por exercício'],
    notes: ['Tomar à noite', 'Não é broncodilatador de alívio'],
  },
  {
    id: 'ace', name: 'Acetilcisteína', category: 'broncodilatadores',
    doses: [
      { label: '< 2 anos', mgPerKgPerDay: null, fixedNote: '100 mg, 12/12h', via: 'VO' },
      { label: '2–7 anos', mgPerKgPerDay: null, fixedNote: '100 mg, 8/8h', via: 'VO' },
      { label: '> 7 anos', mgPerKgPerDay: null, fixedNote: '200 mg, 8/8h', via: 'VO' },
    ],
    presentations: [
      { label: 'Sachê 100 mg', mgPerMl: null, fixedMg: 100 },
      { label: 'Sachê 200 mg', mgPerMl: null, fixedMg: 200 },
      { label: 'Ampola 300 mg/3 mL (nebulização)', mgPerMl: 100 },
    ],
    indications: ['Mucolítico', 'Bronquite', 'Fibrose cística', 'Intoxicação por paracetamol'],
    notes: ['Dissolver em água ou suco'],
  },
  {
    id: 'feno', name: 'Fenoterol', category: 'broncodilatadores',
    doses: [
      { label: 'Nebulização (0,05 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.05, maxMgPerDose: 1.5, interval: null, via: 'Inalatório (20/20 min na crise)' },
    ],
    presentations: [
      { label: 'Solução nebulização 5 mg/mL', mgPerMl: 5 },
    ],
    indications: ['Crise de asma', 'Broncoespasmo'],
    notes: ['Completar para 3 mL com SF 0,9%', 'Monitorar FC'],
  },
];

export const corticosteroides = [
  {
    id: 'pred', name: 'Prednisolona', category: 'corticosteroides',
    doses: [
      { label: 'Padrão (1 mg/kg/dia)', mgPerKgPerDay: 1, maxMgPerDay: 60, interval: 1, via: 'VO (manhã)' },
      { label: 'Alta – asma (2 mg/kg/dia)', mgPerKgPerDay: 2, maxMgPerDay: 60, interval: 1, via: 'VO (manhã)' },
    ],
    presentations: [
      { label: 'Xarope 1 mg/mL', mgPerMl: 1 },
      { label: 'Xarope 3 mg/mL', mgPerMl: 3 },
      { label: 'Comprimido 5 mg', mgPerMl: null, fixedMg: 5 },
      { label: 'Comprimido 20 mg', mgPerMl: null, fixedMg: 20 },
    ],
    indications: ['Asma – crise', 'Síndrome nefrótica', 'Doenças inflamatórias', 'Croup'],
    notes: ['Tomar pela manhã com alimentos', 'Retirada gradual se > 7 dias'],
  },
  {
    id: 'dexa', name: 'Dexametasona', category: 'corticosteroides',
    doses: [
      { label: 'Croup (0,6 mg/kg, dose única)', mgPerKgPerDay: null, mgPerKgPerDose: 0.6, maxMgPerDose: 10, interval: null, via: 'VO/IM/EV, dose única' },
      { label: 'Meningite (0,15 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.15, maxMgPerDose: 10, interval: null, via: 'EV (6/6h × 4 dias)' },
    ],
    presentations: [
      { label: 'Ampola 4 mg/mL', mgPerMl: 4 },
      { label: 'Ampola 10 mg/mL', mgPerMl: 10 },
      { label: 'Elixir 0,1 mg/mL', mgPerMl: 0.1 },
    ],
    indications: ['Croup', 'Laringotraqueobronquite', 'Meningite bacteriana', 'Edema cerebral'],
    notes: ['6x mais potente que prednisolona', 'Meia-vida longa (36–54h)'],
  },
  {
    id: 'metil', name: 'Metilprednisolona', category: 'corticosteroides',
    doses: [
      { label: 'Padrão (1 mg/kg/dia)', mgPerKgPerDay: 1, maxMgPerDay: 60, interval: 1, via: 'EV ou VO' },
      { label: 'Pulsoterapia (30 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 30, maxMgPerDose: 1000, interval: null, via: 'EV (30–60 min)' },
    ],
    presentations: [
      { label: 'Ampola 40 mg', mgPerMl: null, fixedMg: 40 },
      { label: 'Ampola 125 mg', mgPerMl: null, fixedMg: 125 },
      { label: 'Ampola 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Asma grave', 'Anafilaxia', 'Doenças autoimunes', 'Pulsoterapia'],
    notes: ['Monitorar glicemia e PA', 'Pulsoterapia: infundir em 30–60 min'],
  },
  {
    id: 'beta', name: 'Betametasona', category: 'corticosteroides',
    doses: [
      { label: 'Padrão (0,1–0,2 mg/kg/dia)', mgPerKgPerDay: 0.15, maxMgPerDay: 8, interval: 2, via: 'VO ou IM (12/12h)' },
    ],
    presentations: [
      { label: 'Solução oral 0,1 mg/mL', mgPerMl: 0.1 },
      { label: 'Solução oral 0,5 mg/mL', mgPerMl: 0.5 },
      { label: 'Ampola 4 mg/mL', mgPerMl: 4 },
    ],
    indications: ['Doenças inflamatórias', 'Asma – manutenção', 'Doenças alérgicas'],
    notes: ['25x mais potente que hidrocortisona', 'Sem ação mineralocorticoide'],
  },
  {
    id: 'hidro_ct', name: 'Hidrocortisona', category: 'corticosteroides',
    doses: [
      { label: 'Padrão (5 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 5, maxMgPerDose: 500, interval: null, via: 'EV (6/6h)' },
      { label: 'Crise addisoniana (10 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 10, maxMgPerDose: 500, interval: null, via: 'EV' },
    ],
    presentations: [
      { label: 'Ampola 100 mg', mgPerMl: null, fixedMg: 100 },
      { label: 'Ampola 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Insuficiência adrenal', 'Crise addisoniana', 'Anafilaxia (adjuvante)', 'Choque refratário'],
    notes: ['Diluir em SF ou SG', 'Tem ação mineralocorticoide', 'Monitorar glicemia e eletrólitos'],
  },
];

export const laxativos = [
  {
    id: 'lact', name: 'Lactulose', category: 'laxativos',
    doses: [
      { label: 'Padrão (1 mL/kg/dia)', mgPerKgPerDay: null, mlPerKgPerDay: 1, maxMlPerDay: 30, interval: 2, via: 'VO (12/12h)' },
    ],
    presentations: [
      { label: 'Solução 667 mg/mL', mgPerMl: 667, isMl: true },
    ],
    indications: ['Constipação funcional', 'Encefalopatia hepática', 'Constipação crônica'],
    notes: ['Efeito em 24–48h', 'Pode causar flatulência', 'Aumentar ingesta hídrica'],
    isMlDrug: true,
  },
  {
    id: 'hidro_lx', name: 'Leite de Magnésia', category: 'laxativos',
    doses: [
      { label: '2–5 anos', mgPerKgPerDay: null, fixedNote: '5–15 mL/dia', via: 'VO' },
      { label: '6–11 anos', mgPerKgPerDay: null, fixedNote: '15–30 mL/dia', via: 'VO' },
    ],
    presentations: [
      { label: 'Suspensão 800 mg/10 mL', mgPerMl: 80 },
    ],
    indications: ['Constipação aguda', 'Constipação funcional'],
    notes: ['Tomar com bastante água', 'Não usar na insuficiência renal'],
  },
  {
    id: 'oleo', name: 'Óleo Mineral', category: 'laxativos',
    doses: [
      { label: 'Padrão (1–3 mL/kg/dia)', mgPerKgPerDay: null, fixedNote: '1–3 mL/kg/dia (máx 90 mL)', via: 'VO' },
    ],
    presentations: [
      { label: 'Frasco 100 mL', mgPerMl: null },
    ],
    indications: ['Constipação crônica', 'Impactação fecal'],
    notes: ['⚠️ CONTRAINDICADO em < 1 ano (risco de aspiração)', 'Não tomar antes de deitar'],
  },
];

export const sintomaticos = [
  {
    id: 'para', name: 'Paracetamol', category: 'sintomaticos',
    doses: [
      { label: 'Padrão (15 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 15, maxMgPerDose: 1000, interval: null, via: 'VO (4/4h ou 6/6h)' },
    ],
    presentations: [
      { label: 'Gotas 200 mg/mL', mgPerMl: 200 },
      { label: 'Xarope 160 mg/5 mL', mgPerMl: 32 },
      { label: 'Xarope 200 mg/5 mL', mgPerMl: 40 },
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
      { label: 'Comprimido 750 mg', mgPerMl: null, fixedMg: 750 },
    ],
    indications: ['Febre', 'Dor leve-moderada', 'Cefaleia', 'Pós-vacinação'],
    notes: ['Dose máxima: 75 mg/kg/dia ou 4g/dia', 'SEGURO em lactentes e gravidez', 'Hepatotóxico em sobredose'],
  },
  {
    id: 'dipi', name: 'Dipirona (Metamizol)', category: 'sintomaticos',
    doses: [
      { label: 'Padrão (15–25 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 20, maxMgPerDose: 1000, interval: null, via: 'VO (6/6h)' },
    ],
    presentations: [
      { label: 'Gotas 500 mg/mL', mgPerMl: 500 },
      { label: 'Xarope 50 mg/mL', mgPerMl: 50 },
      { label: 'Ampola 500 mg/mL', mgPerMl: 500 },
      { label: 'Comprimido 500 mg', mgPerMl: null, fixedMg: 500 },
    ],
    indications: ['Febre', 'Dor moderada-intensa', 'Cólica'],
    notes: ['Gotas: 500 mg/mL (1 gota = 25 mg aprox.)', 'Risco raro de agranulocitose', 'EV: infundir lentamente'],
  },
  {
    id: 'onda', name: 'Ondansetrona', category: 'sintomaticos',
    doses: [
      { label: 'Padrão (0,15 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.15, maxMgPerDose: 4, interval: null, via: 'VO/SL/EV (8/8h, máx 3 doses)' },
    ],
    presentations: [
      { label: 'Ampola 4 mg/2 mL', mgPerMl: 2 },
      { label: 'Comprimido ODT 4 mg', mgPerMl: null, fixedMg: 4 },
      { label: 'Comprimido 8 mg', mgPerMl: null, fixedMg: 8 },
    ],
    indications: ['Náuseas e vômitos', 'Gastroenterite aguda', 'Pós-quimioterapia', 'Pós-operatório'],
    notes: ['Pode prolongar QT', 'Uso > 6 meses'],
  },
  {
    id: 'meto', name: 'Metoclopramida', category: 'sintomaticos',
    doses: [
      { label: 'Padrão (0,1 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.1, maxMgPerDose: 10, interval: null, via: 'VO/EV (8/8h)' },
    ],
    presentations: [
      { label: 'Ampola 5 mg/mL', mgPerMl: 5 },
      { label: 'Xarope 4 mg/5 mL', mgPerMl: 0.8 },
      { label: 'Comprimido 10 mg', mgPerMl: null, fixedMg: 10 },
    ],
    indications: ['Náuseas e vômitos', 'Refluxo gastroesofágico', 'Gastroparesia'],
    notes: ['Risco de efeitos extrapiramidais em crianças', 'Não usar em < 1 ano sem indicação precisa'],
  },
  {
    id: 'busc', name: 'Escopolamina (Buscopan)', category: 'sintomaticos',
    doses: [
      { label: 'Padrão (0,5 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 0.5, maxMgPerDose: 10, interval: null, via: 'VO (8/8h)' },
    ],
    presentations: [
      { label: 'Gotas 10 mg/mL', mgPerMl: 10 },
      { label: 'Comprimido 10 mg', mgPerMl: null, fixedMg: 10 },
      { label: 'Ampola 20 mg/mL', mgPerMl: 20 },
    ],
    indications: ['Cólica intestinal', 'Espasmo gastrointestinal', 'Cólica renal'],
    notes: ['Pode causar boca seca, taquicardia'],
  },
  {
    id: 'levo', name: 'Levodropropizina', category: 'sintomaticos',
    doses: [
      { label: 'Padrão (1 mg/kg/dose)', mgPerKgPerDay: null, mgPerKgPerDose: 1, maxMgPerDose: 60, interval: null, via: 'VO (8/8h)' },
    ],
    presentations: [
      { label: 'Xarope 6 mg/mL', mgPerMl: 6 },
    ],
    indications: ['Tosse seca irritativa', 'Tosse não produtiva'],
    notes: ['Usar > 2 anos', 'Não usar em tosse produtiva'],
  },
  {
    id: 'ambro', name: 'Ambroxol', category: 'sintomaticos',
    doses: [
      { label: '< 2 anos', mgPerKgPerDay: null, fixedNote: '7,5 mg, 12/12h', via: 'VO' },
      { label: '2–5 anos', mgPerKgPerDay: null, fixedNote: '7,5 mg, 8/8h', via: 'VO' },
      { label: '6–12 anos', mgPerKgPerDay: null, fixedNote: '15 mg, 8/8h', via: 'VO' },
      { label: '> 12 anos', mgPerKgPerDay: null, fixedNote: '30 mg, 8/8h', via: 'VO' },
    ],
    presentations: [
      { label: 'Xarope 15 mg/5 mL', mgPerMl: 3 },
      { label: 'Gotas 7,5 mg/mL', mgPerMl: 7.5 },
    ],
    indications: ['Tosse produtiva', 'Bronquite', 'Fibrose cística'],
    notes: ['Beber bastante líquido'],
  },
  {
    id: 'simet', name: 'Simeticona', category: 'sintomaticos',
    doses: [
      { label: 'Lactente', mgPerKgPerDay: null, fixedNote: '40 mg, após refeições (máx 4x/dia)', via: 'VO' },
      { label: '2–12 anos', mgPerKgPerDay: null, fixedNote: '40–80 mg, 4x/dia', via: 'VO' },
      { label: '> 12 anos', mgPerKgPerDay: null, fixedNote: '80–120 mg, 4x/dia', via: 'VO' },
    ],
    presentations: [
      { label: 'Gotas 75 mg/mL', mgPerMl: 75 },
    ],
    indications: ['Flatulência', 'Cólica do lactente', 'Distensão abdominal'],
    notes: ['Sem absorção sistêmica – muito seguro', 'Pode ser adicionado ao leite'],
  },
];

export const ALL_CATEGORIES = [
  { id: 'antibioticos', label: 'Antibióticos', color: 'red-500', icon: '🦠', drugs: antibiotics },
  { id: 'anticonvulsionantes', label: 'Anticonvulsivantes', color: 'purple-500', icon: '🧠', drugs: anticonvulsivantes },
  { id: 'antiinflamatorios', label: 'Anti-inflamatórios', color: 'orange-500', icon: '🔥', drugs: antiinflamatorios },
  { id: 'antifungicos', label: 'Anti-fúngicos', color: 'green-500', icon: '🌿', drugs: antifungicos },
  { id: 'antihistaminicos', label: 'Anti-histamínicos', color: 'cyan-500', icon: '🌸', drugs: antihistaminicos },
  { id: 'antiparasitarios', label: 'Anti-parasitários', color: 'lime-500', icon: '🪱', drugs: antiparasitarios },
  { id: 'broncodilatadores', label: 'Broncodilatadores', color: 'yellow-500', icon: '💨', drugs: broncodilatadores },
  { id: 'corticosteroides', label: 'Corticosteroides', color: 'red-400', icon: '💊', drugs: corticosteroides },
  { id: 'laxativos', label: 'Laxativos', color: 'teal-600', icon: '🚽', drugs: laxativos },
  { id: 'sintomaticos', label: 'Sintomáticos', color: 'blue-500', icon: '🩺', drugs: sintomaticos },
];