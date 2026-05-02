// Tópicos Nasais e Otológicos

export const corticosteroideNasal = [
  {
    id: 'beclometasona-nasal',
    name: 'Beclometasona',
    category: 'nasal-corticosteroide',
    observations: 'Corticosteroide tópico de média potência para uso profilático',
    brands: ['Beclonasal aqua (GSK) — Spray 50 µg/dose', 'Clenili aquoso (Farmitalia) — Spray 50 µg/dose', 'Alerfin (Cimed) — Spray 100 µg/dose'],
    presentations: [{ label: 'Spray 50 µg/dose' }, { label: 'Spray 100 µg/dose' }],
    doses: [
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Sintomático ou profilático', value: '100 µg/narina/dose × 1 a 2. Para sensibilidade leve/moderada: 50 µg/narina/dose × 2 a 4. Máx: 4 jatos por narina/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não é contraindicada' }],
    sideEffects: ['Sabor/odor desagradável, epistaxe, secura nasal', 'Tosse, infecção trato urinário, aumento pressão intraocular', 'Anafilaxia e angioedema (raros)'],
    contraindications: [],
  },

  {
    id: 'budesonida-nasal',
    name: 'Budesonida',
    category: 'nasal-corticosteroide',
    observations: 'Corticosteroide tópico de baixa potência para uso profilático',
    brands: ['Budecort Aqua (AstraZeneca)', 'Inalajef (Legrand)', 'Busonid (Aché)', 'Noex (AstraZeneca)'],
    presentations: [{ label: 'Spray 32-64 µg/dose' }, { label: 'Suspensão inalação nasal 32-50 µg' }],
    doses: [
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Rinite alérgica', value: 'Iniciar 50-64 µg/narina/dose × 1 a 2, aumentar conforme necessidade' },
          { label: 'Após melhora', value: 'Reduzir até menor dose eficaz (2-4 semanas)' },
        ],
      },
    ],
    sideEffects: ['Queimação e secura nasal, epistaxe, espirros', 'Alergia, exantema, angioedema', 'Candidíase nasal ou faríngea'],
    contraindications: ['Tuberculose', 'Infecções não tratadas'],
  },

  {
    id: 'ciclesonida-nasal',
    name: 'Ciclesonida',
    category: 'nasal-corticosteroide',
    observations: 'Corticosteroide tópico de alta potência e meia-vida longa',
    brands: ['Omnaris (Nycomed) — Spray 50 µg/dose'],
    presentations: [{ label: 'Spray 50 µg/dose' }],
    doses: [
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Rinite alérgica', value: '2 jatos em cada narina 1 vez ao dia, preferencialmente manhã' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'dexametasona-nasal',
    name: 'Dexametasona Nasal',
    category: 'nasal-corticosteroide',
    observations: 'Corticosteroide associado a antimicrobiano e vasoconstritor',
    brands: ['Decadron nasal (Aché) — Sol. nasal 0,5 + 5 + 3,5 mg/mL', 'Hidronal (Aché) — Gotas 0,5 + 5 + 0,75 mg/mL'],
    presentations: [{ label: 'Solução nasal' }, { label: 'Gotas nasais' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '2 a 3 jatos ou gotas em cada narina 1 vez ao dia ou cada 12h' },
        ],
      },
    ],
    observations: 'Mais efeitos sistêmicos que outras alternativas. Para rinite alérgica, preferir fluticasona ou mometasona em dose única pela manhã',
    sideEffects: ['Irritação, secura e ardor nasal, epistaxe', 'Congestão de rebote, tosse, rinite', 'Vertigem, cefaleia, broncoconstrição, náuseas'],
    contraindications: ['Tuberculose', 'Infecções não tratadas'],
  },

  {
    id: 'fluticasona-nasal',
    name: 'Fluticasona',
    category: 'nasal-corticosteroide',
    observations: 'Corticosteroide tópico de alta potência e meia-vida longa. Furoato é mais potente com menos reações',
    brands: ['Avamys (GSK) — Spray 27,5 µg/dose', 'Flixonase Aquoso (GSK) — Spray 50 µg/dose', 'Plurair (Libbs)', 'Fluticasona + azelastina (Dymista)'],
    presentations: [{ label: 'Spray Furoato 27,5 µg/dose' }, { label: 'Spray Propionato 50 µg/dose' }],
    doses: [
      {
        group: 'Crianças 2-4 anos',
        items: [
          { label: 'Recomendação', value: 'Usar apenas furoato' },
        ],
      },
      {
        group: 'Crianças > 4 anos',
        items: [
          { label: 'Dose', value: '1 jato em cada narina 1 vez ao dia. Se necessário: 2 jatos/narina × 1, reduzir quando possível' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '2 jatos em cada narina 1 vez ao dia (propionato: × 2). Máx: 4 jatos por narina' },
          { label: 'Após controle', value: 'Reduzir para 1 jato/narina 1 vez ao dia, preferencialmente manhã' },
        ],
      },
    ],
    sideEffects: ['Cefaleia, infecção viral, faringite, tosse, epistaxe', 'Sintomas resfriado, rinite, sinusite', 'Irritação e queimação nasal, candidíase'],
    contraindications: [],
  },

  {
    id: 'mometasona-nasal',
    name: 'Mometasona',
    category: 'nasal-corticosteroide',
    observations: 'Corticosteroide tópico de alta potência e meia-vida longa',
    brands: ['Nasonex (Schering) — Spray 50 µg/dose'],
    presentations: [{ label: 'Spray 50 µg/dose' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '1 jato em cada narina 1 vez ao dia' },
          { label: 'Rinite alérgica', value: '2 jatos em cada narina 1 vez ao dia' },
          { label: 'Pólipo nasossinusal', value: '2 jatos em cada narina cada 12h' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },
];

export const antialergicosNasais = [
  {
    id: 'azelastina-nasal',
    name: 'Azelastina',
    category: 'nasal-antialergico',
    observations: 'Anti-histamínico H1 com boa eficácia e rápido início de ação',
    brands: ['Rino-Lastin (Aché) — Spray 0,9 mg/mL (126 µg/dose)'],
    presentations: [{ label: 'Spray 0,9 mg/mL' }, { label: 'Genérico 1 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 jato em cada narina cada 12h' },
          { label: 'Alternativa', value: '1 a 2 jatos em cada narina cada 12h' },
        ],
      },
    ],
    sideEffects: ['Cefaleia, sonolência, tontura, fadiga, mialgia', 'Irritação nasal, epistaxe, espirros, tosse', 'Gosto amargo na boca, ganho de peso, náusea', 'Pode piorar broncoespasmo'],
    contraindications: [],
  },

  {
    id: 'cromoglicato-nasal',
    name: 'Cromoglicato Dissódico',
    category: 'nasal-antialergico',
    observations: 'Estabilizador de mastócitos',
    brands: ['Rilan (EMS) — Spray 2% e 4%'],
    presentations: [{ label: 'Spray 2%' }, { label: 'Spray 4%' }],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: '2%', value: '2 jatos em cada narina × 4 a 6' },
          { label: '4%', value: '1 jato em cada narina × 2 a 4' },
        ],
      },
    ],
    sideEffects: ['Irritação e congestão nasal, ardor ocular', 'Tosse, irritação garganta, cefaleia, epistaxe', 'Alergia, urticária, angioedema, anafilaxia (rara)'],
    contraindications: [],
  },
];

export const descongestRinoNasais = [
  {
    id: 'nafazolina-nasal',
    name: 'Nafazolina',
    category: 'nasal-descongestionante',
    observations: 'Descongestionante adrenérgico, vasoconstritor. NÃO usar mais de 3-5 dias (risco congestão de rebote)',
    brands: ['Sorine Adulto (Libbs)', 'Nasalflux (MedQuímica)', 'Novo Rino (Cristália)', 'Narino (EMS)'],
    presentations: [{ label: 'Gotas nasais 1 mg/mL' }, { label: 'Gotas 0,5 mg/mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '2 a 3 gotas em cada narina cada 8-12h' },
          { label: 'Máximo', value: 'Não usar mais de 3-5 dias (risco congestão rebote e dependência)' },
        ],
      },
    ],
    sideEffects: ['Tontura, cefaleia, ansiedade, agitação, alucinação, convulsão', 'Palidez, sudorese, náuseas, vômitos', 'Agitação, palpitação, hipertensão, taquicardia', 'Irritação nasal, congestão de rebote, risco dependência'],
    contraindications: [],
  },

  {
    id: 'oximetazolina-nasal',
    name: 'Oximetazolina',
    category: 'nasal-descongestionante',
    observations: 'Descongestionante nasal agonista adrenérgico, vasoconstritor. Efeito: 5-10 min, duração 5-6h',
    brands: ['Afrin (Cosmed)', 'Aturgyl (EMS)', 'Oxifir (Biossintética)', 'Rinidal (Eurofarma)'],
    presentations: [{ label: 'Spray 0,5 mg/mL' }, { label: 'Gotas 0,5 mg/mL' }, { label: 'Gotas 0,25 mg/mL' }],
    doses: [
      {
        group: 'Crianças 2-5 anos',
        items: [
          { label: 'Melhor evitar', value: '1 a 2 gotas solução 0,025% em cada narina cada 12h' },
        ],
      },
      {
        group: 'Crianças 6-12 anos',
        items: [
          { label: 'Dose', value: '2 a 3 gotas ou jatos 0,05% em cada narina cada 12h' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Rinite/sinusite', value: '2 a 3 gotas ou jatos 0,05% em cada narina cada 12h' },
          { label: 'Estridor pós-extubação', value: 'Nebulização 0,5 mL (0,25 mg/mL) em 2 mL SF, repetir cada 1-2h' },
        ],
      },
    ],
    sideEffects: ['Hipertensão, taquicardia, bradicardia reflexa, palpitação, palidez', 'Ansiedade, nervosismo, tontura, alucinações, convulsões', 'Espirros, coriza, dificuldade respiratória, secura mucosas', 'Congestão de rebote, risco dependência'],
    contraindications: [],
  },

  {
    id: 'xilometazolina-nasal',
    name: 'Xilometazolina',
    category: 'nasal-descongestionante',
    observations: 'Vasoconstritor nasal',
    brands: ['Otrivina (Novartis) — Gel nasal 1 mg/mL'],
    presentations: [{ label: 'Gel nasal 1 mg/mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: 'Aplicar pequena quantidade em cada narina cada 8-12h' },
          { label: 'Máximo', value: 'Não usar mais de 3-5 dias. Válido 30 dias' },
        ],
      },
    ],
    sideEffects: ['Tontura, cefaleia, tensão, agitação, insônia, tremores', 'Taquicardia, palpitações, sudorese, palidez', 'Hipertensão, náuseas, nervosismo', 'Secura e irritação mucosa nasal, espirros'],
    contraindications: [],
  },
];

export const antimicrobianosOtologicos = [
  {
    id: 'ciprofloxacino-otologico',
    name: 'Ciprofloxacino',
    category: 'otologico-antimicrobiano',
    brands: ['Ciloxan (Novartis) — Gotas 3 mg/mL', 'Otoflex (Zambon) — Gotas 5 mg/mL + Hidrocortisona 10 mg/mL', 'Otofix (EMS) — Gotas 2 mg/mL'],
    presentations: [{ label: 'Gotas 3 mg/mL' }, { label: 'Gotas 5 mg/mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Ciloxan', value: '3 a 4 gotas/dose × 2 a 3' },
          { label: 'Otoflex', value: '2 a 3 gotas/dose × 3-4' },
        ],
      },
      {
        group: 'Crianças',
        items: [
          { label: 'Otoflex', value: '1 a 2 gotas/dose × 3' },
        ],
      },
    ],
    usage: 'Inclinar cabeça para lado oposto. Limpar e secar ouvido. Aplicar gotas e manter posição 5-10 min. Tratamento 7-14 dias. Não usar tampões algodão.',
    sideEffects: [],
    contraindications: ['Não usar se tímpano não estiver íntegro'],
  },

  {
    id: 'gentamicina-otologica',
    name: 'Gentamicina',
    category: 'otologico-antimicrobiano',
    brands: ['Garasone (Schering) — Gotas 3 mg/mL + Betametasona 1 mg/mL'],
    presentations: [{ label: 'Gotas 3 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Dose', value: '3 a 4 gotas/dose × 2 a 4' },
        ],
      },
    ],
    usage: 'Inclinar cabeça para lado oposto. Limpar e secar ouvido. Aplicar gotas e manter posição 5-10 min.',
    sideEffects: [],
    contraindications: ['Não usar se tímpano não estiver íntegro'],
  },

  {
    id: 'neomicina-polimixina-otologico',
    name: 'Neomicina + Polimixina B',
    category: 'otologico-antimicrobiano',
    brands: ['Otosporin (GSK) — Gotas 3,5 mg/mL + 10.000 UI/mL + Hidrocortisona 10 mg/mL'],
    presentations: [{ label: 'Gotas com corticosteroide' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Dose', value: '3 gotas/dose × 3 a 4' },
        ],
      },
    ],
    usage: 'Inclinar cabeça para lado oposto. Limpar e secar ouvido. Aplicar gotas e manter posição 5-10 min.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'polimixina-lidocaina-otologico',
    name: 'Polimixina B + Lidocaína',
    category: 'otologico-antimicrobiano',
    brands: ['Lisodorm (PDM) — Gotas 10.000 UI/mL + Lidocaína 40 mg/mL'],
    presentations: [{ label: 'Gotas' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Dose', value: '3 a 4 gotas/dose × 1 a 3' },
        ],
      },
    ],
    usage: 'Inclinar cabeça para lado oposto. Limpar e secar ouvido. Aplicar gotas e manter posição 5-10 min.',
    sideEffects: [],
    contraindications: [],
  },
];

export const emolientesCerume = [
  {
    id: 'peroxido-carbamida-cerume',
    name: 'Peróxido de Carbamida',
    category: 'otologico-emoliente',
    observations: 'Emoliente de cerume',
    brands: ['Aceratum (GSK) — Gotas 50 mg/mL'],
    presentations: [{ label: 'Gotas 50 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Dose', value: '2 a 5 gotas/dose × 2 a 4' },
        ],
      },
    ],
    usage: 'Inclinar cabeça para lado oposto. Limpar e secar. Aplicar gotas, manter posição 5-10 min. Tampar com algodão pode aumentar eficácia.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'hidroxiquinolina-cerume',
    name: 'Hidroxiquinolina + Trolamina',
    category: 'otologico-emoliente',
    brands: ['Cerumin (Aché) — Gotas 0,4 + 140 mg/mL'],
    presentations: [{ label: 'Gotas' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Dose', value: '5 gotas/dose × 3' },
        ],
      },
    ],
    usage: 'Inclinar cabeça. Aplicar gotas, manter posição 5-10 min.',
    sideEffects: [],
    contraindications: [],
  },
];