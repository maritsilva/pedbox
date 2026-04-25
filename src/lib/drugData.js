// ============================================================
// ANTIBIÓTICOS
// ============================================================
export const antibiotics = [
  {
    id: 'penp',
    name: 'Penicilina G Potássica',
    category: 'antibioticos',
    presentations: [
      { label: 'Penicilina G Potássica 500.000 UI', key: 'penp500' },
      { label: 'Penicilina G Potássica 1.000.000 UI', key: 'penp1m' },
      { label: 'Penicilina G Potássica 5.000.000 UI', key: 'penp5m' },
    ],
    calculate: (peso) => {
      const doseMin = Math.round(peso * 25000);
      const doseMax = Math.round(peso * 50000);
      return {
        presentations: [
          { label: 'Dose mínima (25.000 UI/kg/dose)', value: `${doseMin} UI/dose` },
          { label: 'Dose máxima (50.000 UI/kg/dose)', value: `${doseMax} UI/dose` },
          { label: 'Intervalo', value: '4/4h ou 6/6h, EV' },
        ],
        indications: ['Infecções estreptocócicas', 'Sífilis congênita', 'Meningite bacteriana', 'Endocardite bacteriana'],
        notes: ['Monitorar função renal', 'Pode causar hipocalemia com doses altas', 'Diluir em SF 0,9% ou SG 5%'],
      };
    },
  },
  {
    id: 'penc',
    name: 'Penicilina G Cristalina',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseMin = Math.round(peso * 25000);
      const doseMax = Math.round(peso * 50000);
      return {
        presentations: [
          { label: 'Dose mínima (25.000 UI/kg/dose)', value: `${doseMin} UI/dose` },
          { label: 'Dose máxima (50.000 UI/kg/dose)', value: `${doseMax} UI/dose` },
          { label: 'Intervalo', value: '4/4h ou 6/6h, EV' },
        ],
        indications: ['Infecções estreptocócicas', 'Pneumonia bacteriana', 'Meningite bacteriana'],
        notes: ['Diluir antes de administrar', 'Monitorar função renal e eletrólitos'],
      };
    },
  },
  {
    id: 'peng',
    name: 'Penicilina G Benzatina',
    category: 'antibioticos',
    calculate: (peso) => {
      let dose;
      if (peso < 30) dose = 600000;
      else dose = 1200000;
      return {
        presentations: [
          { label: 'Dose única (< 30 kg)', value: '600.000 UI, IM' },
          { label: 'Dose única (≥ 30 kg)', value: '1.200.000 UI, IM' },
          { label: 'Dose calculada', value: `${dose.toLocaleString()} UI, IM, dose única` },
        ],
        indications: ['Faringoamigdalite estreptocócica', 'Febre reumática (profilaxia)', 'Sífilis adquirida'],
        notes: ['Aplicar profundamente IM', 'Agitar bem o frasco antes de usar', 'Não administrar IV'],
      };
    },
  },
  {
    id: 'amox',
    name: 'Amoxicilina',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseMin = round(peso * 25, 1);
      const doseMax = round(peso * 50, 1);
      const doseAlta = round(peso * 90, 1);
      return {
        presentations: [
          { label: 'Dose padrão (25-50 mg/kg/dia)', value: `${doseMin}–${doseMax} mg/dia` },
          { label: 'Dose alta – OMA/Pneumonia (90 mg/kg/dia)', value: `${doseAlta} mg/dia` },
          { label: 'Intervalo', value: '8/8h ou 12/12h, VO' },
        ],
        indications: ['Otite média aguda', 'Amigdalite', 'Pneumonia comunitária', 'Sinusite', 'Infecção do trato urinário'],
        notes: ['Suspensão: 250 mg/5 mL ou 500 mg/5 mL', 'Dose máxima: 3g/dia', 'Tomar com ou sem alimentos'],
      };
    },
  },
  {
    id: 'amoxclav',
    name: 'Amoxicilina + Clavulanato',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseMin = round(peso * 25, 1);
      const doseMax = round(peso * 45, 1);
      return {
        presentations: [
          { label: 'Dose (25–45 mg/kg/dia de amoxicilina)', value: `${doseMin}–${doseMax} mg/dia` },
          { label: 'Intervalo', value: '8/8h ou 12/12h, VO' },
          { label: 'Apresentação', value: 'Suspensão 200/28,5 mg/5mL ou 400/57 mg/5mL' },
        ],
        indications: ['Otite média aguda refratária', 'Sinusite bacteriana', 'Infecções de pele e partes moles', 'Pneumonia'],
        notes: ['Tomar com alimentos para reduzir efeitos GI', 'Dose máxima: 3g/dia (amoxicilina)', 'Monitorar função hepática em uso prolongado'],
      };
    },
  },
  {
    id: 'ampi',
    name: 'Ampicilina',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseMin = round(peso * 50, 1);
      const doseMax = round(peso * 200, 1);
      return {
        presentations: [
          { label: 'Dose padrão (50 mg/kg/dia)', value: `${doseMin} mg/dia` },
          { label: 'Dose alta – meningite (200 mg/kg/dia)', value: `${doseMax} mg/dia` },
          { label: 'Intervalo', value: '6/6h, EV ou IM' },
        ],
        indications: ['Meningite bacteriana', 'Sepse neonatal', 'Listeriose', 'Infecções por enterococos'],
        notes: ['Diluir em SF 0,9% ou SG 5%', 'Dose máxima: 12g/dia', 'Incompatível com aminoglicosídeos'],
      };
    },
  },
  {
    id: 'cef',
    name: 'Cefalexina',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseMin = round(peso * 25, 1);
      const doseMax = round(peso * 50, 1);
      return {
        presentations: [
          { label: 'Dose (25–50 mg/kg/dia)', value: `${doseMin}–${doseMax} mg/dia` },
          { label: 'Intervalo', value: '6/6h, VO' },
          { label: 'Apresentação', value: 'Suspensão 250 mg/5 mL' },
        ],
        indications: ['Infecções de pele e partes moles', 'Faringoamigdalite', 'ITU não complicada'],
        notes: ['Dose máxima: 4g/dia', 'Pode ser tomado com alimentos', 'Reduzir dose na insuficiência renal'],
      };
    },
  },
  {
    id: 'cefa',
    name: 'Cefadroxila',
    category: 'antibioticos',
    calculate: (peso) => {
      const dose = round(peso * 30, 1);
      return {
        presentations: [
          { label: 'Dose (30 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: '12/12h, VO' },
          { label: 'Apresentação', value: 'Suspensão 250 mg/5 mL ou 500 mg/5 mL' },
        ],
        indications: ['Infecções de pele e partes moles', 'Faringoamigdalite', 'ITU não complicada'],
        notes: ['Dose máxima: 2g/dia', 'Administrar 2x ao dia', 'Pode ser tomado com alimentos'],
      };
    },
  },
  {
    id: 'genta',
    name: 'Gentamicina',
    category: 'antibioticos',
    calculate: (peso) => {
      const dose = round(peso * 5, 1);
      const doseRN = round(peso * 4, 1);
      return {
        presentations: [
          { label: 'Dose padrão (5 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Dose neonatal (4 mg/kg/dia)', value: `${doseRN} mg, a cada 24-48h` },
          { label: 'Intervalo', value: '24h (dose única diária), EV ou IM' },
        ],
        indications: ['Infecções gram-negativas graves', 'Sepse', 'Meningite por gram-negativos', 'Infecções hospitalares'],
        notes: ['Monitorar função renal', 'Dosar nível sérico em uso prolongado', 'Ototóxico – monitorar audição', 'Incompatível com ampicilina na mesma seringa'],
      };
    },
  },
  {
    id: 'amica',
    name: 'Amicacina',
    category: 'antibioticos',
    calculate: (peso) => {
      const dose = round(peso * 15, 1);
      const doseRN = round(peso * 15, 1);
      return {
        presentations: [
          { label: 'Dose (15 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: '24h (dose única diária), EV ou IM' },
          { label: 'Dose máxima', value: '1,5g/dia' },
        ],
        indications: ['Infecções por gram-negativos resistentes', 'Sepse hospitalar', 'Infecções por Pseudomonas'],
        notes: ['Monitorar função renal', 'Nefrotóxico e ototóxico', 'Dosar nível sérico quando possível'],
      };
    },
  },
  {
    id: 'azi',
    name: 'Azitromicina',
    category: 'antibioticos',
    calculate: (peso) => {
      const dose = round(peso * 10, 1);
      const dose3 = round(peso * 10, 1);
      return {
        presentations: [
          { label: 'Dose (10 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Duração padrão', value: '3–5 dias, VO' },
          { label: 'Apresentação', value: 'Suspensão 200 mg/5 mL' },
        ],
        indications: ['Pneumonia atípica', 'Faringoamigdalite (alergia penicilina)', 'Coqueluche', 'Sinusite', 'Infecções por Chlamydia'],
        notes: ['Dose máxima: 500 mg/dia', 'Tomar 1h antes ou 2h após refeições', 'Pode prolongar intervalo QT'],
      };
    },
  },
  {
    id: 'eritro',
    name: 'Eritromicina',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseMin = round(peso * 30, 1);
      const doseMax = round(peso * 50, 1);
      return {
        presentations: [
          { label: 'Dose (30–50 mg/kg/dia)', value: `${doseMin}–${doseMax} mg/dia` },
          { label: 'Intervalo', value: '6/6h, VO' },
          { label: 'Apresentação', value: 'Suspensão 200 mg/5 mL' },
        ],
        indications: ['Coqueluche', 'Pneumonia por Mycoplasma', 'Alergia à penicilina', 'Difteria'],
        notes: ['Dose máxima: 2g/dia', 'Tomar com alimentos para reduzir náuseas', 'Inibidor do CYP3A4'],
      };
    },
  },
  {
    id: 'clari',
    name: 'Claritromicina',
    category: 'antibioticos',
    calculate: (peso) => {
      const dose = round(peso * 15, 1);
      return {
        presentations: [
          { label: 'Dose (15 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: '12/12h, VO' },
          { label: 'Apresentação', value: 'Suspensão 250 mg/5 mL' },
        ],
        indications: ['Pneumonia atípica', 'Faringoamigdalite', 'Otite média', 'Sinusite'],
        notes: ['Dose máxima: 1g/dia', 'Pode ser tomado com ou sem alimentos', 'Inibidor do CYP3A4'],
      };
    },
  },
  {
    id: 'nitro',
    name: 'Nitrofurantoína',
    category: 'antibioticos',
    calculate: (peso) => {
      const dose = round(peso * 5, 1);
      const doseProf = round(peso * 1, 1);
      return {
        presentations: [
          { label: 'Dose terapêutica (5 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Dose profilática (1 mg/kg/dia)', value: `${doseProf} mg/dia` },
          { label: 'Intervalo', value: '6/6h (terapêutico) ou à noite (profilático), VO' },
        ],
        indications: ['Infecção do trato urinário baixo', 'Profilaxia de ITU recorrente'],
        notes: ['Não usar em < 1 mês de vida', 'Não usar na insuficiência renal grave', 'Tomar com alimentos', 'Pode causar coloração amarronzada na urina'],
      };
    },
  },
  {
    id: 'sulfa',
    name: 'Sulfametoxazol + Trimetoprim (SMX-TMP)',
    category: 'antibioticos',
    calculate: (peso) => {
      const doseTMP = round(peso * 8, 1);
      const doseSMX = round(peso * 40, 1);
      return {
        presentations: [
          { label: 'Dose (TMP: 8 mg/kg/dia)', value: `${doseTMP} mg TMP/dia` },
          { label: 'Dose (SMX: 40 mg/kg/dia)', value: `${doseSMX} mg SMX/dia` },
          { label: 'Intervalo', value: '12/12h, VO' },
        ],
        indications: ['Infecção urinária', 'Pneumocistose (PCP)', 'Shiguelose', 'Otite média'],
        notes: ['Suspensão: 200/40 mg/5 mL', 'Hidratação adequada', 'Monitorar hemograma em uso prolongado', 'Contraindicado em < 2 meses'],
      };
    },
  },
];

// ============================================================
// ANTICONVULSIVANTES
// ============================================================
export const anticonvulsivantes = [
  {
    id: 'diaz',
    name: 'Diazepam',
    category: 'anticonvulsionantes',
    calculate: (peso) => {
      const dose = round(peso * 0.3, 2);
      const doseMax = Math.min(dose, 10);
      return {
        presentations: [
          { label: 'Dose (0,2–0,5 mg/kg)', value: `${round(peso * 0.3, 2)} mg/dose` },
          { label: 'Dose máxima', value: `${doseMax} mg/dose` },
          { label: 'Via', value: 'EV lento (1–2 min) ou Retal' },
        ],
        indications: ['Crise convulsiva aguda', 'Estado epiléptico', 'Convulsão febril'],
        notes: ['Pode repetir após 5 min (máx 3 doses)', 'EV: monitorar respiração e PA', 'Retal: 0,5 mg/kg (max 20 mg)', 'Ter suporte ventilatório disponível'],
      };
    },
  },
  {
    id: 'fenobar',
    name: 'Fenobarbital',
    category: 'anticonvulsionantes',
    calculate: (peso) => {
      const ataque = round(peso * 20, 1);
      const manutMin = round(peso * 3, 1);
      const manutMax = round(peso * 5, 1);
      return {
        presentations: [
          { label: 'Dose de ataque (20 mg/kg)', value: `${ataque} mg, EV lento` },
          { label: 'Manutenção (3–5 mg/kg/dia)', value: `${manutMin}–${manutMax} mg/dia, VO` },
          { label: 'Intervalo manutenção', value: '12/12h ou dose única' },
        ],
        indications: ['Estado epiléptico', 'Crise neonatal', 'Epilepsia – manutenção'],
        notes: ['EV: não ultrapassar 1 mg/kg/min', 'Monitorar nível sérico: 15–40 mcg/mL', 'Sedação é efeito frequente'],
      };
    },
  },
  {
    id: 'fenito',
    name: 'Fenitoína',
    category: 'anticonvulsionantes',
    calculate: (peso) => {
      const ataque = round(peso * 20, 1);
      const manutMin = round(peso * 4, 1);
      const manutMax = round(peso * 8, 1);
      return {
        presentations: [
          { label: 'Dose de ataque (20 mg/kg)', value: `${ataque} mg, EV` },
          { label: 'Manutenção (4–8 mg/kg/dia)', value: `${manutMin}–${manutMax} mg/dia, VO` },
          { label: 'Infusão EV', value: 'Máx 1 mg/kg/min (criança)' },
        ],
        indications: ['Estado epiléptico refratário', 'Epilepsia tônico-clônica', 'Prevenção convulsão pós-TCE'],
        notes: ['Monitorar ECG durante infusão EV', 'Nível sérico: 10–20 mcg/mL', 'Não diluir em SG (precipita)', 'Cuidado com extravasamento – necrose'],
      };
    },
  },
  {
    id: 'carba',
    name: 'Carbamazepina',
    category: 'anticonvulsionantes',
    calculate: (peso) => {
      const inicio = round(peso * 5, 1);
      const manut = round(peso * 20, 1);
      return {
        presentations: [
          { label: 'Dose inicial (5 mg/kg/dia)', value: `${inicio} mg/dia` },
          { label: 'Dose manutenção (10–20 mg/kg/dia)', value: `até ${manut} mg/dia` },
          { label: 'Intervalo', value: '8/8h ou 12/12h, VO' },
        ],
        indications: ['Epilepsia parcial', 'Epilepsia tônico-clônica generalizada', 'Neuralgia do trigêmeo'],
        notes: ['Suspensão: 100 mg/5 mL', 'Monitorar hemograma e função hepática', 'Nível sérico: 4–12 mcg/mL', 'Indutor enzimático – múltiplas interações'],
      };
    },
  },
  {
    id: 'valp',
    name: 'Ácido Valpróico',
    category: 'anticonvulsionantes',
    calculate: (peso) => {
      const inicioMin = round(peso * 10, 1);
      const manutMax = round(peso * 60, 1);
      return {
        presentations: [
          { label: 'Dose inicial (10–15 mg/kg/dia)', value: `${inicioMin} mg/dia` },
          { label: 'Dose máxima (60 mg/kg/dia)', value: `${manutMax} mg/dia` },
          { label: 'Intervalo', value: '8/8h ou 12/12h, VO' },
        ],
        indications: ['Epilepsia generalizada', 'Ausência', 'Síndrome de Lennox-Gastaut', 'Enxaqueca (profilaxia)'],
        notes: ['Monitorar função hepática (especialmente < 2 anos)', 'Nível sérico: 50–100 mcg/mL', 'Teratogênico', 'Pode causar trombocitopenia'],
      };
    },
  },
];

// ============================================================
// ANTI-FÚNGICOS
// ============================================================
export const antifungicos = [
  {
    id: 'fluc',
    name: 'Fluconazol',
    category: 'antifungicos',
    calculate: (peso) => {
      const dose = round(peso * 6, 1);
      const doseMax = round(peso * 12, 1);
      return {
        presentations: [
          { label: 'Dose padrão (6 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Dose alta – invasiva (12 mg/kg/dia)', value: `${doseMax} mg/dia` },
          { label: 'Intervalo', value: 'Dose única diária, VO ou EV' },
        ],
        indications: ['Candidíase orofaríngea', 'Candidíase esofágica', 'Candidemia', 'Meningite por criptococo'],
        notes: ['Dose máxima: 800 mg/dia', 'Suspenção: 10 mg/mL ou 40 mg/mL', 'Inibidor do CYP2C9/3A4 – múltiplas interações'],
      };
    },
  },
  {
    id: 'anf',
    name: 'Anfotericina B',
    category: 'antifungicos',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      const doseMax = round(peso * 1.5, 1);
      return {
        presentations: [
          { label: 'Dose (1 mg/kg/dia)', value: `${dose} mg/dia, EV` },
          { label: 'Dose lipossomal (3–5 mg/kg/dia)', value: `${round(peso * 3, 1)}–${round(peso * 5, 1)} mg/dia, EV` },
          { label: 'Infusão', value: '2–6 horas, EV' },
        ],
        indications: ['Aspergilose invasiva', 'Candidemia grave', 'Criptococose', 'Mucormicose', 'Histoplasmose'],
        notes: ['Monitorar função renal e eletrólitos (K+, Mg2+)', 'Teste dose: 1 mg em 20–30 min', 'Não misturar com SF 0,9%', 'Flebite local frequente'],
      };
    },
  },
  {
    id: 'ceto',
    name: 'Cetoconazol',
    category: 'antifungicos',
    calculate: (peso) => {
      const dose = round(peso * 5, 1);
      return {
        presentations: [
          { label: 'Dose (3,3–6,6 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: 'Dose única diária, VO' },
          { label: 'Apresentação', value: 'Comprimido 200 mg / Shampoo 2%' },
        ],
        indications: ['Candidíase cutânea e mucosa', 'Pitiríase versicolor', 'Dermatomicoses (tópico)'],
        notes: ['Hepatotóxico – monitorar TGO/TGP', 'Tomar com alimentos', 'Uso sistêmico cada vez mais restrito'],
      };
    },
  },
  {
    id: 'nist',
    name: 'Nistatina',
    category: 'antifungicos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: 'RN (< 1 kg)', value: '100.000 UI, 6/6h, VO' },
          { label: 'RN (1–3 kg)', value: '200.000 UI, 6/6h, VO' },
          { label: 'Crianças', value: '400.000–600.000 UI, 6/6h, VO' },
        ],
        indications: ['Candidíase oral (sapinho)', 'Candidíase de fralda', 'Profilaxia em prematuros'],
        notes: ['Agitar bem antes de usar', 'Aplicar após amamentação', 'Uso apenas local – não absorve pelo TGI'],
      };
    },
  },
  {
    id: 'gri',
    name: 'Griseofulvina',
    category: 'antifungicos',
    calculate: (peso) => {
      const dose = round(peso * 20, 1);
      return {
        presentations: [
          { label: 'Dose (15–20 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: 'Dose única diária, VO' },
          { label: 'Duração', value: '6–8 semanas (couro cabeludo) / 4–6 semanas (pele)' },
        ],
        indications: ['Tinea capitis', 'Tinea corporis extensa', 'Onicomicose'],
        notes: ['Tomar com alimentos gordurosos', 'Monitorar função hepática', 'Fotossensibilidade possível'],
      };
    },
  },
  {
    id: 'terb',
    name: 'Terbinafina',
    category: 'antifungicos',
    calculate: (peso) => {
      let dose;
      if (peso < 20) dose = 62.5;
      else if (peso < 40) dose = 125;
      else dose = 250;
      return {
        presentations: [
          { label: '< 20 kg', value: '62,5 mg/dia' },
          { label: '20–40 kg', value: '125 mg/dia' },
          { label: '> 40 kg', value: '250 mg/dia' },
          { label: 'Dose calculada', value: `${dose} mg/dia, VO` },
        ],
        indications: ['Tinea capitis (Trichophyton)', 'Onicomicose', 'Tinea corporis extensa'],
        notes: ['Duração: 2–4 semanas (pele), 6 semanas (unhas dos pés)', 'Monitorar função hepática', 'Pode ser tomado com ou sem alimentos'],
      };
    },
  },
];

// ============================================================
// ANTI-HISTAMÍNICOS
// ============================================================
export const antihistaminicos = [
  {
    id: 'dexclo',
    name: 'Dexclorfeniramina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      let dose;
      if (peso < 15) dose = '2 mg, 8/8h';
      else dose = '4 mg, 8/8h';
      return {
        presentations: [
          { label: '2–5 anos', value: '0,5 mg/dose, 8/8h' },
          { label: '6–12 anos', value: '1 mg/dose, 8/8h' },
          { label: '> 12 anos', value: '2 mg/dose, 8/8h' },
        ],
        indications: ['Rinite alérgica', 'Urticária', 'Prurido', 'Reação alérgica leve'],
        notes: ['Xarope: 0,4 mg/mL', 'Causa sedação', 'Não usar em < 2 anos'],
      };
    },
  },
  {
    id: 'hidro',
    name: 'Hidroxizina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      return {
        presentations: [
          { label: 'Dose (1 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '6/6h ou 8/8h, VO' },
          { label: 'Dose máxima', value: '50 mg/dose (crianças)' },
        ],
        indications: ['Urticária', 'Prurido intenso', 'Ansiedade (pré-operatório)', 'Dermatite atópica'],
        notes: ['Xarope: 2 mg/mL', 'Sedação marcada', 'Pode prolongar QT'],
      };
    },
  },
  {
    id: 'lora',
    name: 'Loratadina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '2–12 anos (< 30 kg)', value: '5 mg/dia, VO' },
          { label: '> 12 anos ou > 30 kg', value: '10 mg/dia, VO' },
        ],
        indications: ['Rinite alérgica', 'Urticária crônica', 'Prurido alérgico'],
        notes: ['Xarope: 1 mg/mL', 'Não causa sedação significativa', 'Dose única diária'],
      };
    },
  },
  {
    id: 'deslo',
    name: 'Desloratadina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '6–11 meses', value: '1 mg/dia' },
          { label: '1–5 anos', value: '1,25 mg/dia' },
          { label: '6–11 anos', value: '2,5 mg/dia' },
          { label: '≥ 12 anos', value: '5 mg/dia' },
        ],
        indications: ['Rinite alérgica', 'Urticária crônica idiopática'],
        notes: ['Xarope: 0,5 mg/mL', 'Não sedativo', 'Dose única diária'],
      };
    },
  },
  {
    id: 'ceti',
    name: 'Cetirizina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '6 meses–2 anos', value: '2,5 mg/dia' },
          { label: '2–5 anos', value: '2,5 mg, 12/12h ou 5 mg/dia' },
          { label: '≥ 6 anos', value: '5–10 mg/dia' },
        ],
        indications: ['Rinite alérgica', 'Urticária', 'Dermatite atópica', 'Prurido alérgico'],
        notes: ['Gotas: 10 mg/mL (1 mg/gota)', 'Leve sedação possível', 'Dose única diária ou dividida em 2x'],
      };
    },
  },
  {
    id: 'fexo',
    name: 'Fexofenadina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '6 meses–2 anos', value: '15 mg, 12/12h' },
          { label: '2–11 anos', value: '30 mg, 12/12h' },
          { label: '≥ 12 anos', value: '120–180 mg/dia' },
        ],
        indications: ['Rinite alérgica sazonal', 'Urticária crônica idiopática'],
        notes: ['Não sedativo', 'Não tomar com suco de frutas (reduz absorção)', 'Comprimido 60 mg, 120 mg, 180 mg'],
      };
    },
  },
  {
    id: 'prome',
    name: 'Prometazina',
    category: 'antihistaminicos',
    calculate: (peso) => {
      const dose = round(peso * 0.5, 1);
      return {
        presentations: [
          { label: 'Dose (0,25–0,5 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '6/6h ou 8/8h, VO' },
          { label: 'Dose máxima', value: '25 mg/dose' },
        ],
        indications: ['Náuseas e vômitos', 'Reação alérgica', 'Sedação pré-operatória'],
        notes: ['CONTRAINDICADO em < 2 anos (risco de apneia)', 'Xarope: 1 mg/mL', 'Efeitos extrapiramidais possíveis'],
      };
    },
  },
];

// ============================================================
// ANTI-INFLAMATÓRIOS
// ============================================================
export const antiinflamatorios = [
  {
    id: 'ibup',
    name: 'Ibuprofeno',
    category: 'antiinflamatorios',
    calculate: (peso) => {
      const doseAnti = round(peso * 30, 1);
      const doseAnalgesia = round(peso * 10, 1);
      return {
        presentations: [
          { label: 'Dose analgésica/antipirética (10 mg/kg/dose)', value: `${doseAnalgesia} mg/dose` },
          { label: 'Dose anti-inflamatória (30–40 mg/kg/dia)', value: `${doseAnti} mg/dia` },
          { label: 'Intervalo', value: '6/6h ou 8/8h, VO' },
        ],
        indications: ['Febre', 'Dor leve-moderada', 'Artrite juvenil', 'Dismenorreia'],
        notes: ['Suspensão: 100 mg/5 mL', 'Dose máxima: 2,4g/dia', 'Tomar com alimentos', 'Contraindicado na varicela'],
      };
    },
  },
  {
    id: 'dicl',
    name: 'Diclofenaco',
    category: 'antiinflamatorios',
    calculate: (peso) => {
      const dose = round(peso * 3, 1);
      return {
        presentations: [
          { label: 'Dose (1–3 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: '8/8h ou 12/12h, VO' },
          { label: 'Dose máxima', value: '150 mg/dia' },
        ],
        indications: ['Artrite reumatoide', 'Espondilite', 'Dor pós-operatória', 'Dismenorreia'],
        notes: ['Comprimido 50 mg', 'Tomar com alimentos', 'Monitorar função renal', 'Usar > 6 anos'],
      };
    },
  },
  {
    id: 'nap',
    name: 'Naproxeno',
    category: 'antiinflamatorios',
    calculate: (peso) => {
      const doseMin = round(peso * 5, 1);
      const doseMax = round(peso * 10, 1);
      return {
        presentations: [
          { label: 'Dose (5–10 mg/kg/dose)', value: `${doseMin}–${doseMax} mg/dose` },
          { label: 'Intervalo', value: '12/12h, VO' },
          { label: 'Dose máxima', value: '1g/dia' },
        ],
        indications: ['Artrite juvenil idiopática', 'Dor musculoesquelética', 'Febre'],
        notes: ['Suspensão: 125 mg/5 mL', 'Usar > 2 anos', 'Tomar com alimentos ou antiácido'],
      };
    },
  },
  {
    id: 'ceto',
    name: 'Cetoprofeno',
    category: 'antiinflamatorios',
    calculate: (peso) => {
      const dose = round(peso * 3, 1);
      return {
        presentations: [
          { label: 'Dose (1–3 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '8/8h, VO ou EV' },
          { label: 'Dose máxima', value: '150 mg/dose' },
        ],
        indications: ['Dor aguda', 'Pós-operatório', 'Inflamação musculoesquelética'],
        notes: ['Ampola: 100 mg/2 mL', 'EV: diluir e infundir em 30 min', 'Monitorar função renal'],
      };
    },
  },
  {
    id: 'nim',
    name: 'Nimesulida',
    category: 'antiinflamatorios',
    calculate: (peso) => {
      const dose = round(peso * 5, 1);
      return {
        presentations: [
          { label: 'Dose (5 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: '12/12h, VO' },
          { label: 'Dose máxima', value: '200 mg/dia' },
        ],
        indications: ['Dor e inflamação', 'Febre refratária'],
        notes: ['Suspensão: 50 mg/5 mL', 'CONTRAINDICADO em < 2 anos', 'Hepatotóxico – evitar uso prolongado', 'Usar com cautela'],
      };
    },
  },
  {
    id: 'aas',
    name: 'AAS (Ácido Acetilsalicílico)',
    category: 'antiinflamatorios',
    calculate: (peso) => {
      const doseAntiagregante = 3;
      const doseAntiinflamatorio = round(peso * 80, 1);
      return {
        presentations: [
          { label: 'Dose antiagregante (3–5 mg/kg/dia)', value: `${round(peso * 3, 1)}–${round(peso * 5, 1)} mg/dia` },
          { label: 'Dose anti-inflamatória (80–100 mg/kg/dia)', value: `${doseAntiinflamatorio} mg/dia` },
          { label: 'Intervalo', value: 'Dose única diária (antiagregante) / 6/6h (anti-inflamatório)' },
        ],
        indications: ['Doença de Kawasaki', 'Cardiopatia pós-Kawasaki (antiagregante)'],
        notes: ['CONTRAINDICADO em crianças com infecções virais (risco Síndrome de Reye)', 'Comprimido 100 mg, 500 mg', 'Não usar para febre/dor em crianças'],
      };
    },
  },
];

// ============================================================
// ANTI-PARASITÁRIOS
// ============================================================
export const antiparasitarios = [
  {
    id: 'alben',
    name: 'Albendazol',
    category: 'antiparasitarios',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '< 2 anos', value: '200 mg, dose única, VO' },
          { label: '≥ 2 anos', value: '400 mg, dose única, VO' },
          { label: 'Neurocisticercose', value: '15 mg/kg/dia, 8 dias' },
        ],
        indications: ['Ascaridíase', 'Oxiuríase', 'Ancilostomíase', 'Neurocisticercose', 'Giardíase'],
        notes: ['Suspensão: 400 mg/10 mL', 'Tomar com alimentos gordurosos', 'Repetir dose após 2 semanas para oxiuríase'],
      };
    },
  },
  {
    id: 'meben',
    name: 'Mebendazol',
    category: 'antiparasitarios',
    calculate: (peso) => {
      return {
        presentations: [
          { label: 'Dose padrão', value: '100 mg, 12/12h, 3 dias, VO' },
          { label: 'Dose alta (Ancilostomíase)', value: '500 mg, dose única, VO' },
        ],
        indications: ['Ascaridíase', 'Oxiuríase', 'Ancilostomíase', 'Tricocefalíase', 'Enterobíase'],
        notes: ['Suspensão: 100 mg/5 mL', 'Pode ser mastigado ou engolido', 'Tratar a família simultaneamente'],
      };
    },
  },
  {
    id: 'metro',
    name: 'Metronidazol',
    category: 'antiparasitarios',
    calculate: (peso) => {
      const doseGiardia = round(peso * 15, 1);
      const doseAmeba = round(peso * 30, 1);
      return {
        presentations: [
          { label: 'Giardíase (15 mg/kg/dia)', value: `${doseGiardia} mg/dia, 7–10 dias` },
          { label: 'Amebíase (30 mg/kg/dia)', value: `${doseAmeba} mg/dia, 10 dias` },
          { label: 'Intervalo', value: '8/8h, VO' },
        ],
        indications: ['Giardíase', 'Amebíase intestinal', 'Tricomoníase', 'Vaginose bacteriana', 'Infecções anaeróbias'],
        notes: ['Suspensão: 200 mg/5 mL', 'Dose máxima: 2g/dia', 'Não ingerir álcool (reação Antabuse)', 'Sabor metálico na boca'],
      };
    },
  },
  {
    id: 'secni',
    name: 'Secnidazol',
    category: 'antiparasitarios',
    calculate: (peso) => {
      const dose = round(peso * 30, 1);
      return {
        presentations: [
          { label: 'Dose única (30 mg/kg)', value: `${dose} mg, dose única, VO` },
          { label: 'Dose máxima', value: '2g' },
          { label: 'Apresentação', value: 'Sachê 1g, Comprimido 500 mg' },
        ],
        indications: ['Giardíase', 'Amebíase', 'Tricomoníase', 'Vaginose bacteriana'],
        notes: ['Dose única – melhor adesão', 'Dissolver em água ou suco', 'Não ingerir álcool'],
      };
    },
  },
  {
    id: 'anita',
    name: 'Nitazoxanida',
    category: 'antiparasitarios',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '1–3 anos', value: '100 mg, 12/12h, 3 dias' },
          { label: '4–11 anos', value: '200 mg, 12/12h, 3 dias' },
          { label: '≥ 12 anos', value: '500 mg, 12/12h, 3 dias' },
        ],
        indications: ['Giardíase', 'Criptosporidiose', 'Amebíase', 'Rotavírus (?)'],
        notes: ['Suspensão: 200 mg/5 mL', 'Tomar com alimentos', 'Boa tolerabilidade'],
      };
    },
  },
  {
    id: 'iver',
    name: 'Ivermectina',
    category: 'antiparasitarios',
    calculate: (peso) => {
      const dose = round(peso * 0.2, 2);
      return {
        presentations: [
          { label: 'Dose (200 mcg/kg)', value: `${dose} mg, dose única, VO` },
          { label: 'Dose máxima', value: '12 mg' },
          { label: 'Comprimido', value: '6 mg' },
        ],
        indications: ['Escabiose', 'Pediculose refratária', 'Estrongiloidíase', 'Oncocercose'],
        notes: ['Usar > 15 kg', 'Tomar em jejum com água', 'Dose única pode ser repetida após 7–14 dias'],
      };
    },
  },
  {
    id: 'pirv',
    name: 'Pamoato de Pirvínio',
    category: 'antiparasitarios',
    calculate: (peso) => {
      const dose = round(peso * 10, 1);
      return {
        presentations: [
          { label: 'Dose (10 mg/kg)', value: `${dose} mg, dose única, VO` },
          { label: 'Apresentação', value: 'Suspensão 50 mg/5 mL' },
        ],
        indications: ['Enterobíase (oxiuríase)'],
        notes: ['Dose única', 'Repetir após 3 semanas', 'Tinge as fezes de vermelho-alaranjado (normal)', 'Tratar a família'],
      };
    },
  },
];

// ============================================================
// BRONCODILATADORES
// ============================================================
export const broncodilatadores = [
  {
    id: 'salb',
    name: 'Salbutamol (Albuterol)',
    category: 'broncodilatadores',
    calculate: (peso) => {
      const doseNeb = round(peso * 0.15, 2);
      const doseNebMax = Math.min(doseNeb, 5);
      return {
        presentations: [
          { label: 'Nebulização (0,1–0,15 mg/kg/dose)', value: `${doseNeb} mg (máx 5 mg)` },
          { label: 'Diluição', value: 'Diluir em 3–4 mL de SF 0,9%' },
          { label: 'MDI (spray)', value: '100–200 mcg (1–2 jatos) + espaçador' },
          { label: 'EV (crise grave)', value: `${round(peso * 0.005, 3)} mg/kg/dose, lento` },
        ],
        indications: ['Broncoespasmo agudo', 'Asma – crise', 'Sibilância do lactente', 'Bronquiolite'],
        notes: ['Pode repetir a cada 20 min (3x) na crise grave', 'Monitorar FC e tremores', 'Solução nebulização: 5 mg/mL'],
      };
    },
  },
  {
    id: 'ipra',
    name: 'Ipratrópio',
    category: 'broncodilatadores',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '< 20 kg', value: '250 mcg/dose, nebulização' },
          { label: '≥ 20 kg', value: '500 mcg/dose, nebulização' },
          { label: 'Intervalo', value: '20/20 min (3 doses) na crise, depois 6/6h' },
        ],
        indications: ['Crise asmática moderada-grave', 'DPOC', 'Broncoespasmo refratário ao salbutamol'],
        notes: ['Usar associado ao salbutamol na crise', 'Pode causar boca seca', 'Solução: 0,025% (250 mcg/mL)'],
      };
    },
  },
  {
    id: 'terb',
    name: 'Terbutalina',
    category: 'broncodilatadores',
    calculate: (peso) => {
      const dose = round(peso * 0.01, 3);
      return {
        presentations: [
          { label: 'SC (0,01 mg/kg/dose)', value: `${dose} mg, SC` },
          { label: 'Intervalo SC', value: 'A cada 20 min, máx 3 doses' },
          { label: 'Dose máxima SC', value: '0,4 mg/dose' },
        ],
        indications: ['Crise asmática grave', 'Broncoespasmo refratário', 'Tocolítico (obstetrícia)'],
        notes: ['SC é via preferencial em criança pequena', 'Monitorar FC, tremores, hipocalemia', 'Ampola: 0,5 mg/mL'],
      };
    },
  },
  {
    id: 'feno',
    name: 'Fenoterol',
    category: 'broncodilatadores',
    calculate: (peso) => {
      const doseNeb = round(peso * 0.05, 2);
      return {
        presentations: [
          { label: 'Nebulização (0,05 mg/kg/dose)', value: `${doseNeb} mg (máx 1,5 mg)` },
          { label: 'MDI (spray)', value: '200 mcg (1 jato) + espaçador' },
          { label: 'Diluição neb.', value: 'Completar para 3 mL com SF 0,9%' },
        ],
        indications: ['Crise de asma', 'Broncoespasmo', 'Sibilância'],
        notes: ['Solução nebulização: 5 mg/mL', 'Pode repetir a cada 20 min na crise', 'Monitorar FC'],
      };
    },
  },
  {
    id: 'mag',
    name: 'Sulfato de Magnésio',
    category: 'broncodilatadores',
    calculate: (peso) => {
      const dose = round(peso * 40, 0);
      const doseMax = Math.min(dose, 2000);
      return {
        presentations: [
          { label: 'Dose (40 mg/kg)', value: `${doseMax} mg (máx 2g), EV` },
          { label: 'Diluição', value: 'Diluir em 100 mL SF 0,9%' },
          { label: 'Infusão', value: '20–30 minutos' },
        ],
        indications: ['Asma grave refratária', 'Broncoespasmo refratário ao beta-2'],
        notes: ['Monitorar PA e FC durante infusão', 'Ter gluconato de cálcio disponível', 'Pode causar rubor, hipotensão'],
      };
    },
  },
  {
    id: 'ace',
    name: 'Acetilcisteína',
    category: 'broncodilatadores',
    calculate: (peso) => {
      return {
        presentations: [
          { label: 'Nebulização', value: '3 mL da solução 10% (1 ampola)' },
          { label: 'Oral (< 2 anos)', value: '100 mg, 12/12h' },
          { label: 'Oral (2–7 anos)', value: '100 mg, 8/8h' },
          { label: 'Oral (> 7 anos)', value: '200 mg, 8/8h' },
        ],
        indications: ['Mucolítico em doenças respiratórias', 'Bronquite', 'Fibrose cística', 'Antídoto em intoxicação por paracetamol'],
        notes: ['Ampola 300 mg/3 mL para nebulização', 'Sachê 200 mg para uso oral', 'Sabor forte – pode misturar com suco'],
      };
    },
  },
  {
    id: 'monte',
    name: 'Montelucaste',
    category: 'broncodilatadores',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '6 meses–5 anos', value: '4 mg/dia (sachê granulado)' },
          { label: '6–14 anos', value: '5 mg/dia (comprimido mastigável)' },
          { label: '> 14 anos', value: '10 mg/dia (comprimido)' },
        ],
        indications: ['Asma – manutenção', 'Rinite alérgica', 'Sibilância induzida por exercício'],
        notes: ['Tomar à noite', 'Não é broncodilatador de alívio', 'Pode causar alterações de humor (raro)'],
      };
    },
  },
];

// ============================================================
// CORTICOSTEROIDES
// ============================================================
export const corticosteroides = [
  {
    id: 'pred',
    name: 'Prednisolona',
    category: 'corticosteroides',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      const doseMax = round(peso * 2, 1);
      return {
        presentations: [
          { label: 'Dose padrão (1 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Dose alta – asma (2 mg/kg/dia)', value: `${doseMax} mg/dia` },
          { label: 'Intervalo', value: 'Dose única diária (manhã), VO' },
        ],
        indications: ['Asma – crise', 'Síndrome nefrótica', 'Doenças inflamatórias', 'Reação alérgica grave', 'Croup'],
        notes: ['Xarope: 1 mg/mL ou 3 mg/mL', 'Dose máxima: 60 mg/dia', 'Tomar pela manhã com alimentos', 'Retirada gradual se > 7 dias'],
      };
    },
  },
  {
    id: 'dexa',
    name: 'Dexametasona',
    category: 'corticosteroides',
    calculate: (peso) => {
      const dose = round(peso * 0.15, 2);
      const doseAntiema = round(peso * 0.25, 2);
      return {
        presentations: [
          { label: 'Croup/Laringotraqueíte (0,15–0,6 mg/kg)', value: `${dose} mg, dose única, VO/IM/EV` },
          { label: 'Antiemésis (0,25 mg/kg)', value: `${doseAntiema} mg/dose` },
          { label: 'Meningite bacteriana (0,15 mg/kg/dose)', value: `${dose} mg/dose, 6/6h, 4 dias` },
        ],
        indications: ['Croup', 'Laringotraqueobronquite', 'Meningite bacteriana', 'Edema cerebral', 'Antiemésis'],
        notes: ['Ampola: 4 mg/mL', 'Dose máxima: 10 mg/dose', '6x mais potente que prednisolona', 'Meia-vida longa (36–54h)'],
      };
    },
  },
  {
    id: 'metil',
    name: 'Metilprednisolona',
    category: 'corticosteroides',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      const pulsoterapia = round(peso * 30, 0);
      return {
        presentations: [
          { label: 'Dose padrão (1–2 mg/kg/dia)', value: `${dose} mg/dia, EV ou VO` },
          { label: 'Pulsoterapia (30 mg/kg/dia)', value: `${Math.min(pulsoterapia, 1000)} mg/dia, EV (máx 1g)` },
          { label: 'Asma grave', value: `${round(peso * 2, 1)} mg/dose, 6/6h, EV` },
        ],
        indications: ['Asma grave', 'Anafilaxia', 'Doenças autoimunes', 'Miastenia gravis', 'Pulsoterapia'],
        notes: ['Ampola: 40 mg, 125 mg, 500 mg, 1g', 'Pulsoterapia: infundir em 30–60 min', 'Monitorar glicemia e PA'],
      };
    },
  },
  {
    id: 'beta',
    name: 'Betametasona',
    category: 'corticosteroides',
    calculate: (peso) => {
      return {
        presentations: [
          { label: 'Dose padrão (0,1–0,2 mg/kg/dia)', value: `${round(peso * 0.1, 2)}–${round(peso * 0.2, 2)} mg/dia` },
          { label: 'Intervalo', value: '12/12h ou dose única, VO ou IM' },
          { label: 'Solução oral', value: '0,1 mg/mL ou 0,5 mg/mL' },
        ],
        indications: ['Doenças inflamatórias', 'Asma – manutenção', 'Doenças alérgicas', 'Laringotraqueíte'],
        notes: ['25x mais potente que hidrocortisona', 'Ampola: 3 mg ou 12 mg', 'Não se usa para insuficiência adrenal (não tem ação mineralocorticoide)'],
      };
    },
  },
  {
    id: 'hidro',
    name: 'Hidrocortisona',
    category: 'corticosteroides',
    calculate: (peso) => {
      const dose = round(peso * 5, 1);
      const crise = round(peso * 10, 1);
      return {
        presentations: [
          { label: 'Dose padrão (5 mg/kg/dose)', value: `${dose} mg/dose, EV` },
          { label: 'Crise addisoniana (10 mg/kg/dose)', value: `${crise} mg/dose, EV` },
          { label: 'Intervalo', value: '6/6h, EV' },
        ],
        indications: ['Insuficiência adrenal', 'Crise addisoniana', 'Anafilaxia (adjuvante)', 'Estado de choque refratário'],
        notes: ['Ampola: 100 mg, 500 mg', 'Diluir em SF ou SG', 'Tem ação mineralocorticoide', 'Monitorar glicemia e eletrólitos'],
      };
    },
  },
];

// ============================================================
// LAXATIVOS
// ============================================================
export const laxativos = [
  {
    id: 'lact',
    name: 'Lactulose',
    category: 'laxativos',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      return {
        presentations: [
          { label: '< 1 ano', value: '1–5 mL/dia' },
          { label: '1–5 anos', value: '5–10 mL/dia' },
          { label: '6–12 anos', value: '10–15 mL/dia' },
          { label: 'Dose calculada (1 mL/kg/dia)', value: `${dose} mL/dia` },
        ],
        indications: ['Constipação funcional', 'Encefalopatia hepática', 'Constipação crônica'],
        notes: ['Solução: 667 mg/mL', 'Efeito em 24–48h', 'Pode causar flatulência', 'Aumentar ingesta hídrica'],
      };
    },
  },
  {
    id: 'hidro',
    name: 'Hidróxido de Magnésio (Leite de Magnésia)',
    category: 'laxativos',
    calculate: (peso) => {
      const dose = round(peso * 0.5, 1);
      return {
        presentations: [
          { label: 'Dose laxativa (0,5 mL/kg/dose)', value: `${dose} mL/dose` },
          { label: '< 2 anos', value: '0,5 mL/kg (com cautela)' },
          { label: '2–5 anos', value: '5–15 mL/dia' },
          { label: '6–11 anos', value: '15–30 mL/dia' },
        ],
        indications: ['Constipação aguda', 'Constipação funcional'],
        notes: ['Suspensão: 800 mg/10 mL', 'Tomar com bastante água', 'Não usar na insuficiência renal'],
      };
    },
  },
  {
    id: 'oleo',
    name: 'Óleo Mineral',
    category: 'laxativos',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      return {
        presentations: [
          { label: 'Dose (1–3 mL/kg/dia)', value: `${dose}–${round(peso * 3, 1)} mL/dia` },
          { label: 'Dose máxima', value: '90 mL/dia' },
          { label: 'Intervalo', value: 'Dose única ou dividida, VO' },
        ],
        indications: ['Constipação crônica', 'Impactação fecal'],
        notes: ['CONTRAINDICADO em < 1 ano (risco aspiração)', 'Não tomar antes de deitar', 'Pode reduzir absorção de vitaminas lipossolúveis'],
      };
    },
  },
];

// ============================================================
// SINTOMÁTICOS
// ============================================================
export const sintomaticos = [
  {
    id: 'para',
    name: 'Paracetamol (Acetaminofeno)',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 15, 1);
      return {
        presentations: [
          { label: 'Dose (10–15 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '4/4h ou 6/6h, VO' },
          { label: 'Gota 200 mg/mL', value: `${round(dose / 200 * 5, 1)} mL (${round(dose / 200 * 5 * 5, 0)} gotas aprox.)` },
          { label: 'Xarope 160 mg/5 mL', value: `${round(dose / 160 * 5, 1)} mL` },
        ],
        indications: ['Febre', 'Dor leve-moderada', 'Cefaleia', 'Pós-vacinação'],
        notes: ['Dose máxima: 75 mg/kg/dia ou 4g/dia', 'Dose máxima por dose: 1g', 'Hepatotóxico em sobredose', 'SEGURO em lactentes e gravidez'],
      };
    },
  },
  {
    id: 'onda',
    name: 'Ondansetrona',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 0.15, 2);
      const doseMax = Math.min(dose, 4);
      return {
        presentations: [
          { label: 'Dose (0,1–0,15 mg/kg/dose)', value: `${doseMax} mg/dose (máx 4 mg)` },
          { label: 'Via', value: 'VO, SL ou EV' },
          { label: 'Intervalo', value: '8/8h, máx 3 doses' },
        ],
        indications: ['Náuseas e vômitos', 'Gastroenterite aguda', 'Pós-quimioterapia', 'Pós-operatório'],
        notes: ['Ampola: 4 mg/2 mL', 'Comprimido ODT: 4 mg, 8 mg', 'Pode prolongar QT', 'Uso > 6 meses'],
      };
    },
  },
  {
    id: 'meto',
    name: 'Metoclopramida',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 0.1, 2);
      return {
        presentations: [
          { label: 'Dose (0,1 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '8/8h, VO ou EV' },
          { label: 'Dose máxima', value: '10 mg/dose' },
        ],
        indications: ['Náuseas e vômitos', 'Refluxo gastroesofágico', 'Gastroparesia'],
        notes: ['Ampola: 10 mg/2 mL', 'Risco de efeitos extrapiramidais (especialmente em crianças)', 'Não usar em < 1 ano sem indicação precisa'],
      };
    },
  },
  {
    id: 'busc',
    name: 'Escopolamina (Buscopan)',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 0.5, 1);
      return {
        presentations: [
          { label: 'Dose (0,3–0,5 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '8/8h, VO' },
          { label: 'Comprimido', value: '10 mg | Gotas: 1 mg/gota' },
        ],
        indications: ['Cólica intestinal', 'Espasmo gastrointestinal', 'Cólica renal'],
        notes: ['Gotas: 10 mg/mL', 'Dose máxima: 10 mg/dose', 'Pode causar boca seca, taquicardia'],
      };
    },
  },
  {
    id: 'levo',
    name: 'Levodropropizina',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 1, 1);
      return {
        presentations: [
          { label: 'Dose (1–1,5 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Intervalo', value: '8/8h, VO' },
          { label: 'Apresentação', value: 'Xarope 6 mg/mL' },
        ],
        indications: ['Tosse seca irritativa', 'Tosse não produtiva'],
        notes: ['Usar > 2 anos', 'Dose máxima: 60 mg/dose', 'Não usar em tosse produtiva'],
      };
    },
  },
  {
    id: 'ambro',
    name: 'Ambroxol',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 1.2, 1);
      return {
        presentations: [
          { label: '< 2 anos', value: '7,5 mg, 12/12h' },
          { label: '2–5 anos', value: '7,5 mg, 8/8h' },
          { label: '6–12 anos', value: '15 mg, 8/8h' },
          { label: "> 12 anos", value: '30 mg, 8/8h' },
        ],
        indications: ['Tosse produtiva', 'Bronquite', 'DPOC', 'Fibrose cística'],
        notes: ['Xarope: 15 mg/5 mL', 'Mucolítico e secretolítico', 'Beber bastante líquido'],
      };
    },
  },
  {
    id: 'bromo',
    name: 'Bromexina',
    category: 'sintomaticos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '< 2 anos', value: '2 mg, 12/12h' },
          { label: '2–5 anos', value: '2 mg, 8/8h' },
          { label: '6–12 anos', value: '4 mg, 8/8h' },
          { label: '> 12 anos', value: '8 mg, 8/8h' },
        ],
        indications: ['Tosse produtiva', 'Bronquite', 'Secreção brônquica espessa'],
        notes: ['Xarope: 4 mg/5 mL', 'Precursor do ambroxol', 'Beber bastante líquido'],
      };
    },
  },
  {
    id: 'simet',
    name: 'Simeticona',
    category: 'sintomaticos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: 'RN/lactente', value: '40 mg após as refeições e ao deitar' },
          { label: '2–12 anos', value: '40–80 mg, 4x/dia' },
          { label: '> 12 anos', value: '80–120 mg, 4x/dia' },
        ],
        indications: ['Flatulência', 'Cólica do lactente', 'Distensão abdominal por gás'],
        notes: ['Gotas: 75 mg/mL', 'Pode ser adicionado ao leite', 'Sem absorção sistêmica – muito seguro'],
      };
    },
  },
  {
    id: 'ranit',
    name: 'Ranitidina',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 2, 1);
      return {
        presentations: [
          { label: 'Dose (2–4 mg/kg/dia)', value: `${dose} mg/dia` },
          { label: 'Intervalo', value: '12/12h, VO' },
          { label: 'Dose máxima', value: '300 mg/dia' },
        ],
        indications: ['Refluxo gastroesofágico', 'Úlcera péptica', 'Esofagite de refluxo'],
        notes: ['Xarope: 15 mg/mL', 'Ampola: 50 mg/2 mL', 'Disponibilidade variável por país'],
      };
    },
  },
  {
    id: 'hidro',
    name: 'Hidratação Oral (SRO)',
    category: 'sintomaticos',
    calculate: (peso) => {
      const min = round(peso * 50, 0);
      const max = round(peso * 100, 0);
      return {
        presentations: [
          { label: 'Desidratação leve (50 mL/kg)', value: `${min} mL em 4 horas` },
          { label: 'Desidratação moderada (100 mL/kg)', value: `${max} mL em 4 horas` },
          { label: 'Manutenção', value: '10 mL/kg após cada evacuação' },
        ],
        indications: ['Desidratação por gastroenterite', 'Prevenção de desidratação'],
        notes: ['SRO da OMS: 245 mOsm/L', 'Oferecer pequenas quantidades com frequência', 'Manter aleitamento materno'],
      };
    },
  },
  {
    id: 'acetil',
    name: 'Acetilcisteína (sintomático)',
    category: 'sintomaticos',
    calculate: (peso) => {
      return {
        presentations: [
          { label: '< 2 anos', value: '100 mg, 12/12h' },
          { label: '2–7 anos', value: '100 mg, 8/8h' },
          { label: '> 7 anos', value: '200 mg, 8/8h' },
        ],
        indications: ['Tosse produtiva', 'Bronquite', 'Fibrose cística', 'Mucolítico geral'],
        notes: ['Sachê efervescente 200 mg', 'Dissolver em água', 'Tomar com bastante líquido'],
      };
    },
  },
  {
    id: 'dipi',
    name: 'Dipirona (Metamizol)',
    category: 'sintomaticos',
    calculate: (peso) => {
      const dose = round(peso * 15, 1);
      const gotas = round(dose / 500 * 20, 0);
      return {
        presentations: [
          { label: 'Dose (10–25 mg/kg/dose)', value: `${dose} mg/dose` },
          { label: 'Gotas 500 mg/mL', value: `${gotas} gotas/dose` },
          { label: 'Intervalo', value: '6/6h, VO ou EV' },
        ],
        indications: ['Febre', 'Dor moderada-intensa', 'Cólica'],
        notes: ['Gotas: 500 mg/mL (1 gota = 25 mg)', 'Dose máxima: 1g/dose', 'Risco raro de agranulocitose', 'EV: infundir lentamente'],
      };
    },
  },
];

// ============================================================
// HELPER
// ============================================================
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

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