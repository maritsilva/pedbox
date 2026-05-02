export const antimicobacterianos = [
  {
    id: 'estreptomicina',
    name: 'Estreptomicina',
    suffix: 'S',
    category: 'antimicobacterianos',
    observations: 'Aminoglicosídeo de primeira linha para TB. Não penetra bem no SNC.',
    brands: ['Estreptomicina — sol. inj. 1000 mg'],
    presentations: [
      { label: 'Frasco-ampola 200 mg/mL' },
      { label: 'Solução injetável 1000 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'TB', value: '15–20 mg/kg/dia 1×/dia (máx 1 g)' },
          { label: 'Endocardite', value: '20–30 mg/kg/dia ÷ 2 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB', value: '15 mg/kg/dia IM' },
          { label: 'Endocardite', value: '2 g/dia ÷ 2 por 2 semanas; depois 1 g/dia por 4 semanas' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '1 dose a cada 24–72 h' },
      { label: 'ClCr < 10 mL/min', value: '1 dose a cada 72–96 h' },
    ],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis'], resistant: [], warning: '' },
    sideEffects: ['Vômito', 'Anorexia', 'Cefaleia', 'Neurite óptica', 'Hiperuricemia', 'Anafilaxia', 'Ototoxicidade', 'Nefrotoxicidade'],
    contraindications: [],
  },
  {
    id: 'etambutol',
    name: 'Etambutol',
    suffix: 'E',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático usado em meningite e infecções por micobactérias atípicas.',
    brands: ['Etambutol — comp. 400 mg; sol. oral 125 mg/5 mL'],
    presentations: [
      { label: 'Comprimido 400 mg' },
      { label: 'Solução oral 125 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'TB', value: '25 mg/kg/dia em associação' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB', value: '1200 mg/dia' },
          { label: 'Micobactéria atípica', value: '15 mg/kg/dia + claritromicina' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–29 mL/min', value: '15–25 mg/kg a cada 36 h' },
      { label: 'ClCr < 10 mL/min', value: '15–25 mg/kg a cada 48 h' },
    ],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis'], resistant: [], warning: '' },
    sideEffects: ['Neurite óptica', 'Cefaleia', 'Hiperuricemia', 'Náusea', 'Alergia'],
    contraindications: [],
  },
  {
    id: 'isoniazida',
    name: 'Isoniazida',
    suffix: 'H',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático eficaz e menos tóxico. Usado isoladamente nas fases de consolidação.',
    brands: ['Isoniazida — comp. 100 mg'],
    presentations: [{ label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'TB', value: '7–15 mg/kg/dia (máx 300 mg)' },
          { label: 'TB latente', value: '10–15 mg/kg/dia ou 20–40 mg/kg 2×/sem' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB', value: '10 mg/kg/dia (máx 300 mg)' },
          { label: 'TB latente', value: '5–10 mg/kg/dia por 9 meses' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis'], resistant: [], warning: '' },
    sideEffects: ['Hepatite', 'Fadiga', 'Deficiência de piridoxina', 'Convulsão', 'Neurite', 'Ginecomastia'],
    contraindications: [],
  },
  {
    id: 'pirazinamida',
    name: 'Pirazinamida',
    suffix: 'Z',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático bactericida com ação intracelular. Usada nos primeiros 2 meses do tratamento.',
    brands: ['Pirazinamida — comp. 500 mg; susp. 150 mg/5 mL'],
    presentations: [
      { label: 'Comprimido 500 mg' },
      { label: 'Suspensão 150 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'TB', value: '25–35 mg/kg/dia (máx 2 g)' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB', value: '1000–2000 mg/dia' },
          { label: 'AIDS — quimioprofilaxia', value: '300 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 10 mL/min', value: '1 dose 3×/sem' }],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis'], resistant: [], warning: '' },
    sideEffects: ['Hepatotoxicidade', 'Hiperuricemia', 'Porfiria', 'Artralgia', 'Náusea', 'Trombocitopenia'],
    contraindications: [],
  },
  {
    id: 'rifampicina',
    name: 'Rifampicina',
    suffix: 'R',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático. Eficaz contra S. aureus resistente, Gram-positivos e Gram-negativos. Reduz efeito de contraceptivos e varfarina.',
    brands: ['Rifaldin — cáps. 300 mg; susp. 100 mg/5 mL'],
    presentations: [
      { label: 'Cápsula 300 mg' },
      { label: 'Suspensão 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'TB', value: '10–20 mg/kg/dia (máx 600 mg)' },
          { label: 'Meningocócica (profilaxia)', value: '20 mg/kg/dia ÷ 2 doses' },
          { label: 'Hanseníase', value: '10 mg/kg/dose mensal' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB', value: '450–600 mg/dia' },
          { label: 'Meningococo (profilaxia)', value: '600 mg 2×/dia por 2 dias' },
          { label: 'Hanseníase', value: '600 mg mensal' },
        ],
      },
    ],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis, S. aureus, Gram-positivos'], resistant: [], warning: 'Reduz efeito de contraceptivos orais e varfarina.' },
    sideEffects: ['Anorexia', 'Náusea', 'Hepatite', 'Leucopenia', 'Erupção cutânea', 'Alteração de comportamento', 'Urina avermelhada'],
    contraindications: [],
  },
  {
    id: 'etionamida',
    name: 'Etionamida',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático para TB multirresistente. Análogo estrutural da isoniazida.',
    brands: ['Etionamida — comp. 250 mg'],
    presentations: [{ label: 'Comprimido 250 mg' }],
    doses: [
      {
        group: 'Crianças e Adultos',
        items: [
          { label: 'TB resistente', value: 'Iniciar 250 mg/dia; aumentar 250 mg/dia a cada 2 dias. Usual: 750 mg/dia ÷ 3. Máx: 1000 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Máx 500 mg/dia' }],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis multirresistente'], resistant: [], warning: '' },
    sideEffects: ['Hipotireoidismo', 'Neurite periférica', 'Náusea', 'Vômito', 'Hepatotoxicidade'],
    contraindications: [],
  },
  {
    id: 'rifabutina',
    name: 'Rifabutina',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático do grupo da rifampicina. Indicado para micobactérias atípicas e TB em pacientes em uso de antirretrovirais.',
    brands: ['Mycobutin — cáps. 150 mg'],
    presentations: [{ label: 'Cápsula 150 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'TB', value: '5 mg/kg/dia 5×/sem (máx 300 mg)' },
          { label: 'M. avium', value: '10–20 mg/kg/dia + macrolídeo' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB ativa', value: '5 mg/kg/dia (usual 300–600 mg)' },
          { label: 'M. avium', value: '300 mg/dia por 1–2 meses' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: '50% da dose' }],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis, M. avium complex'], resistant: [], warning: '' },
    sideEffects: ['Cefaleia', 'Náusea', 'Icterícia', 'Mialgia', 'Neutropenia', 'Urina avermelhada'],
    contraindications: [],
  },
  {
    id: 'terizidona',
    name: 'Terizidona',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático para TB multirresistente. Associar piridoxina para reduzir toxicidade neurológica.',
    brands: ['Terizidona — cáps. 250 mg'],
    presentations: [{ label: 'Cápsula 250 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'TB resistente', value: '15–20 mg/kg/dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'TB resistente', value: '500–1000 mg/dia' }],
      },
    ],
    sensitivity: { susceptible: ['Mycobacterium tuberculosis multirresistente'], resistant: [], warning: '' },
    sideEffects: ['Cefaleia', 'Tremores', 'Convulsão', 'Psicose', 'Neuropatia periférica', 'Náusea'],
    contraindications: [],
  },
  {
    id: 'clofazimina',
    name: 'Clofazimina',
    category: 'antimicobacterianos',
    observations: 'Distribuição gratuita pelo MS. Indicado na hanseníase multibacilar.',
    brands: ['Clofazimina — cáps. 50 mg e 100 mg'],
    presentations: [
      { label: 'Cápsula 50 mg' },
      { label: 'Cápsula 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Multibacilar (dose mensal)', value: '5 mg/kg/dose (máx 150 mg)' },
          { label: 'Multibacilar (diária)', value: '1 mg/kg/dose dias alternados (máx 50 mg)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Multibacilar', value: '300 mg mensal + rifampicina × 12 doses; e 50 mg/dia + dapsona × 12–18 meses' },
        ],
      },
    ],
    sensitivity: { susceptible: ['Mycobacterium leprae'], resistant: [], warning: '' },
    sideEffects: ['Pele acinzentada/avermelhada', 'Urina avermelhada', 'Pele seca', 'Prurido', 'Dor abdominal', 'Irritação conjuntival'],
    contraindications: [],
  },
  {
    id: 'dapsona',
    name: 'Dapsona',
    category: 'antimicobacterianos',
    observations: 'Sulfonamida. Distribuição gratuita em poliquimioterapia mensal para hanseníase.',
    brands: ['Dapsona — comp. 100 mg'],
    presentations: [{ label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Hanseníase', value: '1–2 mg/kg/dia (máx 50 mg)' },
          { label: 'Dermatite herpetiforme', value: '0,5–2 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Hanseníase', value: '100 mg/dia' },
          { label: 'Toxoplasmose', value: '200 mg/sem' },
          { label: 'Púrpura', value: '100 mg/dia × 3 semanas' },
        ],
      },
    ],
    sensitivity: { susceptible: ['Mycobacterium leprae'], resistant: [], warning: '' },
    sideEffects: ['Distúrbios psiquiátricos', 'Cefaleia', 'Meta-hemoglobinemia', 'Cianose', 'Hemólise grave em G6PD', 'Agranulocitose'],
    contraindications: [],
  },
];