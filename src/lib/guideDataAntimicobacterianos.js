export const antimicobacterianos = [
  {
    id: 'estreptomicina',
    name: 'Estreptomicina',
    suffix: 'S',
    category: 'antimicobacterianos',
    observations: 'Aminoglicosídeo de primeira linha para tuberculose. Não penetra bem no SNC. Usar via IM ou EV.',
    brands: [
      'Estreptomicina — Fr. amp. 1000 mg / 200 mg/mL',
    ],
    presentations: [
      { label: 'Fr. amp. 200 mg/mL (5 mL = 1000 mg)' },
      { label: 'Solução injetável 1000 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tuberculose', value: '15–20 mg/kg/dia 1×/dia IM. Máx: 1 g/dia' },
          { label: 'Endocardite', value: '20–30 mg/kg/dia ÷ 2' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tuberculose', value: '15 mg/kg/dia IM' },
          { label: 'Endocardite', value: '2 g/dia ÷ 2 por 2 semanas, depois 1 g/dia por 4 semanas' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '1 dose a cada 24–72 h' },
      { label: 'ClCr < 10 mL/min', value: '1 dose a cada 72–96 h' },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis sensível',
        'Brucella, Francisella tularensis',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Vômito, anorexia, cefaleia',
      'Neurite óptica, ototoxicidade (irreversível)',
      'Nefrotoxicidade, anafilaxia',
    ],
    contraindications: [],
  },
  {
    id: 'etambutol',
    name: 'Etambutol',
    suffix: 'E',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático usado especialmente em meningite tuberculosa. Avaliar função visual regularmente.',
    brands: [
      'Etambutol — comp. 400 mg; sol. oral 125 mg/5 mL',
    ],
    presentations: [
      { label: 'Comprimido 400 mg' },
      { label: 'Solução oral 125 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tuberculose', value: '25 mg/kg/dia em associação com outros tuberculostáticos' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tuberculose', value: '1200 mg/dia' },
          { label: 'Micobactéria atípica', value: '15 mg/kg/dia com claritromicina' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–29 mL/min', value: '15–25 mg/kg a cada 36 h' },
      { label: 'ClCr < 10 mL/min', value: '15–25 mg/kg a cada 48 h' },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis',
        'Mycobacterium avium complex (MAC)',
      ],
      resistant: [],
      warning: 'Monitorar acuidade visual e visão de cores — neurite óptica pode ser irreversível.',
    },
    sideEffects: [
      'Neurite óptica (dose-dependente — reversível se suspensão precoce)',
      'Cefaleia, hiperuricemia',
      'Náusea, alergia',
    ],
    contraindications: [],
  },
  {
    id: 'isoniazida',
    name: 'Isoniazida',
    suffix: 'H',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático mais eficaz e menos tóxico. Usado em todas as fases do tratamento da TB. Suplementar piridoxina 10–25 mg/dia para prevenir neuropatia.',
    brands: [
      'Isoniazida — comp. 100 mg',
    ],
    presentations: [
      { label: 'Comprimido 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tuberculose', value: '7–15 mg/kg/dia. Máx: 300 mg/dia' },
          { label: 'TB latente', value: '10–15 mg/kg/dia ou 20–40 mg/kg 2×/semana' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tuberculose ativa', value: '10 mg/kg/dia. Máx: 300 mg/dia' },
          { label: 'TB latente', value: '5–10 mg/kg/dia por 9 meses' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Não exige ajuste de dose' },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis sensível',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Hepatite (monitorar transaminases)',
      'Fadiga, deficiência de piridoxina (vitamina B6)',
      'Convulsão, neurite periférica',
      'Ginecomastia (raro)',
    ],
    contraindications: [],
  },
  {
    id: 'pirazinamida',
    name: 'Pirazinamida',
    suffix: 'Z',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático bactericida com ação intracelular. Usada nos primeiros 2 meses do tratamento da TB (fase intensiva).',
    brands: [
      'Pirazinamida — comp. 500 mg; susp. 150 mg/5 mL',
    ],
    presentations: [
      { label: 'Comprimido 500 mg' },
      { label: 'Suspensão oral 150 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tuberculose', value: '25–35 mg/kg/dia. Máx: 2 g/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tuberculose', value: '1000–2000 mg/dia' },
          { label: 'AIDS — quimioprofilaxia', value: '300 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 10 mL/min', value: '1 dose 3×/semana' },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis (fase intracelular)',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Hepatotoxicidade (principal — monitorar)',
      'Hiperuricemia, porfiria, artralgia',
      'Náusea, trombocitopenia',
    ],
    contraindications: [],
  },
  {
    id: 'rifampicina',
    name: 'Rifampicina',
    suffix: 'R',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático de amplo espectro. Eficaz contra S. aureus resistente, Gram-positivos e Gram-negativos. Induz enzimas hepáticas (CYP3A4) — múltiplas interações.',
    brands: [
      'Rifaldin — cáps. 300 mg; susp. 100 mg/5 mL',
    ],
    presentations: [
      { label: 'Cápsula 300 mg' },
      { label: 'Suspensão oral 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tuberculose', value: '10–20 mg/kg/dia. Máx: 600 mg/dia' },
          { label: 'Profilaxia meningococo', value: '20 mg/kg/dia ÷ 2 por 2 dias' },
          { label: 'Hanseníase', value: '10 mg/kg/dose mensal' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tuberculose', value: '450–600 mg/dia em jejum' },
          { label: 'Profilaxia meningococo', value: '600 mg 2×/dia por 2 dias' },
          { label: 'Hanseníase', value: '600 mg mensal' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis, Mycobacterium leprae',
        'S. aureus, S. epidermidis, Legionella, N. meningitidis',
      ],
      resistant: [],
      warning: 'Reduz efeito de contraceptivos orais, varfarina, corticoides, antirretrovirais e muitos outros. Colore urina, fezes e secreções de laranja (avisar o paciente).',
    },
    sideEffects: [
      'Anorexia, náusea, hepatite',
      'Leucopenia, plaquetopenia, erupção cutânea',
      'Alteração de comportamento, febre',
    ],
    contraindications: [],
  },
  {
    id: 'etionamida',
    name: 'Etionamida',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático para TB multirresistente (TB-MDR). Análogo estrutural da isoniazida. Associar piridoxina.',
    brands: [
      'Etionamida — comp. 250 mg',
    ],
    presentations: [
      { label: 'Comprimido 250 mg' },
    ],
    doses: [
      {
        group: 'Crianças e Adultos',
        items: [
          { label: 'TB resistente (início)', value: '250 mg/dia, aumentar 250 mg a cada 2 dias' },
          { label: 'Dose usual', value: '750 mg/dia ÷ 3 doses. Máx: 1000 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Máx 500 mg/dia' },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis multirresistente',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Hipotireoidismo (monitorar TSH)',
      'Neurite periférica, náusea, vômito',
      'Hepatotoxicidade',
    ],
    contraindications: [],
  },
  {
    id: 'rifabutina',
    name: 'Rifabutina',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático do grupo da rifampicina. Indicado para micobactérias atípicas (M. avium complex) e TB em pacientes com HIV (menos interações com antirretrovirais que a rifampicina).',
    brands: [
      'Mycobutin — cáps. 150 mg',
    ],
    presentations: [
      { label: 'Cápsula 150 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tuberculose', value: '5 mg/kg/dia 5×/semana. Máx: 300 mg/dia' },
          { label: 'M. avium complex', value: '10–20 mg/kg/dia com macrolídeo' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tuberculose ativa', value: '5 mg/kg/dia (usual 300–600 mg/dia)' },
          { label: 'M. avium complex', value: '300 mg/dia por 1–2 meses' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: '50% da dose' },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis, Mycobacterium avium complex (MAC)',
      ],
      resistant: [],
      warning: 'Colore urina e secreções de alaranjado.',
    },
    sideEffects: [
      'Cefaleia, náusea, icterícia',
      'Mialgia, neutropenia',
      'Urina avermelhada',
    ],
    contraindications: [],
  },
  {
    id: 'terizidona',
    name: 'Terizidona',
    category: 'antimicobacterianos',
    observations: 'Tuberculostático para TB multirresistente (TB-MDR). Associar piridoxina (vitamina B6) para reduzir neurotoxicidade.',
    brands: [
      'Terizidona — cáps. 250 mg',
    ],
    presentations: [
      { label: 'Cápsula 250 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'TB resistente', value: '15–20 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'TB resistente', value: '500–1000 mg/dia' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium tuberculosis multirresistente',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Cefaleia, tremores, convulsão',
      'Psicose, neuropatia periférica',
      'Náusea',
    ],
    contraindications: [],
  },
  {
    id: 'clofazimina',
    name: 'Clofazimina',
    category: 'antimicobacterianos',
    observations: 'Distribuição gratuita pelo Ministério da Saúde. Indicada na hanseníase multibacilar em poliquimioterapia.',
    brands: [
      'Clofazimina — cáps. 50 mg e 100 mg',
    ],
    presentations: [
      { label: 'Cápsula 50 mg' },
      { label: 'Cápsula 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Hanseníase multibacilar (mensal)', value: '5 mg/kg/dose. Máx: 150 mg' },
          { label: 'Hanseníase multibacilar (dias alternados)', value: '1 mg/kg/dose. Máx: 50 mg' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Multibacilar (mensal)', value: '300 mg com rifampicina por 12 doses' },
          { label: 'Multibacilar (diário)', value: '50 mg/dia com dapsona por 12–18 meses' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium leprae',
        'Mycobacterium tuberculosis multirresistente (adjuvante)',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Pele acinzentada / bronzeada (dose-dependente, reversível)',
      'Urina e secreções avermelhadas',
      'Pele seca, prurido, ictiose',
      'Dor abdominal, irritação conjuntival',
    ],
    contraindications: [],
  },
  {
    id: 'dapsona',
    name: 'Dapsona',
    category: 'antimicobacterianos',
    observations: 'Sulfonamida. Distribuição gratuita em poliquimioterapia mensal para hanseníase. Contraindicada em deficientes de G6PD.',
    brands: [
      'Dapsona — comp. 100 mg',
    ],
    presentations: [
      { label: 'Comprimido 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Hanseníase', value: '1–2 mg/kg/dia. Máx: 50 mg/dia' },
          { label: 'Dermatite herpetiforme', value: '0,5–2 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Hanseníase', value: '100 mg/dia' },
          { label: 'Toxoplasmose (profilaxia)', value: '200 mg/semana' },
          { label: 'Púrpura trombocitopênica', value: '100 mg/dia por 3 semanas' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Mycobacterium leprae',
        'Pneumocystis jirovecii (profilaxia)',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Meta-hemoglobinemia, cianose',
      'Hemólise grave em deficientes de G6PD',
      'Agranulocitose, distúrbios psiquiátricos',
      'Cefaleia, hepatotoxicidade',
    ],
    contraindications: [
      'Deficiência de G6PD',
    ],
  },
];