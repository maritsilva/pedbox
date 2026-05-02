export const antirretroviraisAssoc = [
  {
    id: 'entricitabina-tenofovir',
    name: 'Entricitabina + Tenofovir',
    category: 'antirretrovirais-assoc',
    observations: 'Associação de dois ITRN para prevenção (PrEP) e tratamento da infecção pelo HIV.',
    brands: ['Truvada — comp. revestido 200 + 300 mg'],
    presentations: [{ label: 'Comprimido revestido 200 + 300 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 35 kg',
        items: [
          { label: 'Prevenção HIV negativo (PrEP)', value: '1 comprimido/dia, associado a sexo seguro' },
          { label: 'Tratamento AIDS', value: '1 comprimido/dia, geralmente junto com outros antirretrovirais' },
        ],
      },
    ],
    preparation: 'Melhor tomar com alimentos.',
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Cautela' },
      { label: 'ClCr 30–49 mL/min', value: 'Uma dose a cada 48 h' },
      { label: 'ClCr < 30 mL/min', value: 'Melhor evitar' },
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia', 'Tontura', 'Depressão', 'Astenia', 'Insônia', 'Sonhos agitados',
      'Diarreia', 'Náusea', 'Vômito', 'Dor abdominal', 'Erupção cutânea', 'Prurido',
      'Hiperpigmentação da pele', 'Alteração da gordura corporal',
      'Acidose lática grave', 'Hepatotoxicidade', 'Hepatomegalia',
      'Nefrotoxicidade', 'Alterações visuais', 'Tosse', 'Dor torácica',
    ],
    contraindications: ['Osteoporose'],
  },
  {
    id: 'lamivudina-abacavir',
    name: 'Lamivudina + Abacavir',
    category: 'antirretrovirais-assoc',
    observations: 'Associação de dois ITRN para tratamento da AIDS.',
    brands: ['Kivexa — comp. revestido 300 + 600 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 600 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 25 kg',
        items: [
          { label: 'Tratamento AIDS', value: '1 comprimido/dia, geralmente junto com outros antirretrovirais' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Dor abdominal', 'Cefaleia', 'Febre',
      'Anemia', 'Hiporexia', 'Alergia grave', 'Dispneia', 'Hipotensão',
      'Acidose lática grave', 'Hepatomegalia',
    ],
    contraindications: ['Genótipo HLAB5701 positivo', 'Insuficiência hepática grave'],
  },
  {
    id: 'lamivudina-abacavir-dolutegravir',
    name: 'Lamivudina + Abacavir + Dolutegravir',
    category: 'antirretrovirais-assoc',
    observations: 'Associação de dose fixa. Por ser tratamento de dose fixa, não é recomendado para pacientes com resistência a inibidores de integrase.',
    brands: ['Triumeq — comp. revestido 300 + 600 + 50 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 600 + 50 mg' }],
    doses: [
      {
        group: 'Adultos e crianças ≥ 40 kg',
        items: [
          { label: 'Tratamento AIDS', value: '1 comprimido/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
    sideEffects: [
      'Sonolência', 'Letargia', 'Pesadelos', 'Ideias suicidas', 'Depressão', 'Fadiga',
      'Cefaleia', 'Insônia', 'Náusea', 'Vômito', 'Distensão abdominal', 'Anorexia',
      'Dispepsia', 'Flatulência', 'Refluxo gastroesofágico', 'Erupção cutânea', 'Prurido',
      'Redução de neutrófilos', 'Hiperglicemia', 'Aumento de lipase sérica e CPK',
      'Hepatite', 'Aumento de enzimas hepáticas', 'Artralgia', 'Miosite', 'Febre', 'Insuficiência renal',
    ],
    contraindications: [
      'Genótipo HLAB5701 positivo',
      'Insuficiência hepática moderada ou grave',
      'Não associar à dofetilida',
    ],
  },
  {
    id: 'lamivudina-tenofovir',
    name: 'Lamivudina + Tenofovir',
    category: 'antirretrovirais-assoc',
    observations: 'Associação de dois ITRN para tratamento do HIV-1 e HIV-2.',
    brands: ['Duplivir — comp. revestido 300 + 300 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 300 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 35 kg',
        items: [
          { label: 'Tratamento AIDS HIV-1 e HIV-2', value: '1 comprimido/dia, associado a dolutegravir ou outro antirretroviral' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
    sideEffects: [
      'Desmineralização óssea',
      'Nefrotoxicidade — principalmente se diabetes, hipertensão, baixo peso, doença renal ou idosos',
    ],
    contraindications: ['Doença renal', 'Osteoporose'],
  },
  {
    id: 'lamivudina-tenofovir-efavirenz',
    name: 'Lamivudina + Tenofovir + Efavirenz',
    category: 'antirretrovirais-assoc',
    observations: 'Esquema inicial alternativo para tratamento da AIDS e profilaxia de transmissão vertical.',
    brands: ['Telura — comp. revestido 300 + 300 + 600 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 300 + 600 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento AIDS (esquema inicial alternativo)', value: '1 comprimido ao dia' },
          { label: 'Profilaxia de transmissão vertical', value: '1 comprimido ao dia' },
        ],
      },
    ],
    preparation: 'Melhor tomar ao deitar, 2 horas após a última refeição.',
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Não associar à elbasvir/grazoprevir.' },
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Pancreatite', 'Tontura', 'Convulsão',
      'Eritema multiforme', 'Erupção cutânea', 'Stevens-Johnson',
      'Acidose lática', 'Hepatite grave', 'Hepatomegalia com esteatose',
      'Osteopenia', 'Fratura', 'Insuficiência renal',
    ],
    contraindications: ['Insuficiência hepática moderada a grave'],
  },
  {
    id: 'lamivudina-zidovudina',
    name: 'Lamivudina + Zidovudina',
    category: 'antirretrovirais-assoc',
    observations: 'Associação de dois ITRN bem tolerada. Usada no tratamento e profilaxia pós-exposição ao HIV.',
    brands: ['Biovir — comp. revestido 150 + 300 mg'],
    presentations: [{ label: 'Comprimido revestido 150 + 300 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 30 kg',
        items: [
          { label: 'Dose usual', value: '1 comprimido 2×/dia' },
          { label: 'Profilaxia pós-exposição / acidente', value: '1 comprimido 2×/dia — iniciar até 2 horas após o acidente' },
          { label: 'Profilaxia de transmissão vertical', value: '1 comprimido/dia, associado a raltegravir, se alternativo ao tenofovir' },
        ],
      },
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Tontura', 'Cefaleia',
      'Dor/desconforto abdominal', 'Hiperlactatemia', 'Acidose lática', 'Toxicidade hematológica',
    ],
    contraindications: ['Anemia, especialmente Hb < 10 g/dL', 'Neutropenia'],
  },
  {
    id: 'lopinavir-ritonavir',
    name: 'Lopinavir + Ritonavir',
    category: 'antirretrovirais-assoc',
    observations: 'Inibidor de protease potencializado por ritonavir. A dose deve ser 25% maior se o paciente usar efavirenz ou nevirapina. Conservar sob refrigeração.',
    brands: [
      'Kaletra — comp. revestido 100 + 25 mg; comp. revestido 200 + 50 mg; sol. oral 400 + 100 mg/5 mL',
      'Lopinavir + Ritonavir — comp. revestido 200 + 50 mg; sol. oral 80 + 20 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 100 + 25 mg' },
      { label: 'Comprimido 200 + 50 mg' },
      { label: 'Solução oral 400 + 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 14 dias',
        items: [
          { label: '< 15 kg', value: '12 + 3 mg/kg/dose, 2×/dia' },
          { label: '15–25 kg', value: '200 + 50 mg/dose, 2×/dia' },
          { label: '26–35 kg', value: '300 + 75 mg/dose, 2×/dia' },
        ],
      },
      {
        group: 'Adultos e crianças > 35 kg',
        items: [
          { label: 'Dose usual', value: '400 + 100 mg/dose a cada 12 h' },
        ],
      },
    ],
    preparation: 'Melhor tomar junto com alimentos. Tomar líquidos abundantemente. Conservar sob refrigeração.',
    sensitivity: { susceptible: [], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia', 'Insônia', 'Astenia', 'Tontura',
      'Náusea', 'Vômito', 'Diarreia', 'Dor abdominal',
      'Erupção cutânea', 'Eritema multiforme', 'Stevens-Johnson', 'Necrólise epidérmica',
      'Hiperglicemia', 'Dislipidemia', 'Hiperuricemia', 'Pode precipitar ou agravar diabetes mellitus',
      'Hiponatremia', 'Hipofosfatemia', 'Nefrolitíase', 'Nefrite',
      'Cardiotoxicidade', 'Bloqueio atrioventricular',
      'Acúmulo e distribuição anômala de gordura',
      'Aumento de amilase', 'Aumento de transaminases e bilirrubinas',
      'Neutropenia', 'Plaquetopenia',
    ],
    contraindications: [],
  },
];