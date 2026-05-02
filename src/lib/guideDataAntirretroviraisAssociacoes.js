export const antirretroviraisAssociacoes = [
  {
    id: 'entricitabina-tenofovir',
    name: 'Entricitabina + Tenofovir',
    category: 'antirretrovirais-associacoes',
    observations: 'Associação de dois ITRN. Usada para prevenção da infecção em HIV negativo (PrEP) e como parte do tratamento da AIDS.',
    brands: ['Truvada — comprimido revestido 200 + 300 mg'],
    presentations: [{ label: 'Comprimido revestido 200 + 300 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 35 kg',
        items: [
          { label: 'Prevenir infecção em HIV negativo (PrEP)', value: '1 comprimido/dia, associado a sexo seguro' },
          { label: 'Tratamento da AIDS', value: '1 comprimido/dia, geralmente junto com outros antirretrovirais' },
          { label: 'Orientação', value: 'Melhor tomar com alimentos' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Cautela' },
      { label: 'ClCr 30–49 mL/min', value: '1 dose a cada 48 h' },
      { label: 'ClCr < 30 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Cefaleia', 'Tontura', 'Depressão', 'Astenia', 'Insônia', 'Sonhos agitados',
      'Diarreia', 'Náusea', 'Vômito', 'Dor abdominal',
      'Erupção cutânea', 'Prurido', 'Hiperpigmentação da pele', 'Alteração da gordura corporal',
      'Acidose lática grave', 'Hepatotoxicidade', 'Hepatomegalia',
      'Nefrotoxicidade', 'Alterações visuais', 'Tosse', 'Dor torácica',
    ],
    contraindications: ['Osteoporose'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lamivudina-abacavir',
    name: 'Lamivudina + Abacavir',
    category: 'antirretrovirais-associacoes',
    observations: 'Associação de dois ITRN (3TC + ABC). Parte do tratamento da AIDS em adultos e crianças.',
    brands: ['Kivexa — comprimido revestido 300 + 600 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 600 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 25 kg',
        items: [
          { label: 'Tratamento da AIDS', value: '1 comprimido/dia, geralmente junto com outros antirretrovirais' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Dor abdominal', 'Cefaleia', 'Febre', 'Anemia', 'Hiporexia',
      'Alergia grave', 'Dispneia', 'Hipotensão', 'Acidose lática grave', 'Hepatomegalia',
    ],
    contraindications: ['Genótipo HLAB5701 positivo', 'Insuficiência hepática grave'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lamivudina-abacavir-dolutegravir',
    name: 'Lamivudina + Abacavir + Dolutegravir',
    category: 'antirretrovirais-associacoes',
    observations: 'Tratamento de dose fixa (3TC + ABC + DTG). Não recomendado para pacientes com resistência a inibidores de integrase.',
    brands: ['Triumeq — comprimido revestido 300 + 600 + 50 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 600 + 50 mg' }],
    doses: [
      {
        group: 'Adultos e crianças ≥ 40 kg',
        items: [
          { label: 'Tratamento da AIDS', value: '1 comprimido/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Sonolência', 'Letargia', 'Pesadelos', 'Ideias suicidas', 'Depressão', 'Fadiga', 'Cefaleia', 'Insônia',
      'Náusea', 'Vômito', 'Distensão abdominal', 'Anorexia', 'Dispepsia', 'Flatulência', 'Refluxo gastroesofágico',
      'Erupção cutânea', 'Prurido', 'Redução de neutrófilos', 'Hiperglicemia',
      'Aumento de lipase sérica e CPK', 'Hepatite', 'Aumento de enzimas hepáticas',
      'Artralgia', 'Miosite', 'Febre', 'Insuficiência renal',
    ],
    contraindications: ['Genótipo HLAB5701 positivo', 'Insuficiência hepática moderada ou grave', 'Não associar à dofetilida'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lamivudina-abacavir-zidovudina',
    name: 'Lamivudina + Abacavir + Zidovudina',
    category: 'antirretrovirais-associacoes',
    observations: 'Medicamento descontinuado. Marca: Trizivir.',
    brands: ['Trizivir — descontinuado'],
    presentations: [],
    doses: [],
    sideEffects: [],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lamivudina-tenofovir',
    name: 'Lamivudina + Tenofovir',
    category: 'antirretrovirais-associacoes',
    observations: 'Associação 3TC + TDF. Tratamento do HIV-1 e HIV-2, geralmente associada a dolutegravir ou outro antirretroviral.',
    brands: ['Duplivir — comprimido revestido 300 + 300 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 300 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 35 kg',
        items: [
          { label: 'Tratamento da AIDS — HIV-1 e HIV-2', value: '1 comprimido/dia, associado a dolutegravir ou outro antirretroviral' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Desmineralização óssea',
      'Nefrotoxicidade, principalmente se diabetes, hipertensão, baixo peso, doença renal, idosos',
    ],
    contraindications: ['Doença renal', 'Osteoporose'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lamivudina-tenofovir-efavirenz',
    name: 'Lamivudina + Tenofovir + Efavirenz',
    category: 'antirretrovirais-associacoes',
    observations: 'Esquema inicial alternativo de dose fixa (3TC + TDF + EFV). Tomar ao deitar, 2 horas após a última refeição.',
    brands: ['Telura — comprimido revestido 300 + 300 + 600 mg'],
    presentations: [{ label: 'Comprimido revestido 300 + 300 + 600 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da AIDS como esquema inicial alternativo', value: '1 comprimido ao dia' },
          { label: 'Profilaxia de transmissão vertical', value: '1 comprimido ao dia' },
          { label: 'Orientação', value: 'Melhor tomar ao deitar, 2 horas após a última refeição' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Pancreatite', 'Tontura', 'Convulsão',
      'Eritema multiforme', 'Erupção cutânea', 'Stevens-Johnson',
      'Acidose lática', 'Hepatite grave', 'Hepatomegalia com esteatose',
      'Osteopenia', 'Fratura', 'Insuficiência renal',
    ],
    contraindications: ['Insuficiência hepática moderada a grave', 'Não associar à elbasvir/grazoprevir'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lamivudina-zidovudina',
    name: 'Lamivudina + Zidovudina',
    category: 'antirretrovirais-associacoes',
    observations: 'Associação 3TC + AZT. Usada no tratamento, na profilaxia pós-exposição e na profilaxia de transmissão vertical.',
    brands: ['Biovir — comprimido revestido 150 + 300 mg'],
    presentations: [{ label: 'Comprimido revestido 150 + 300 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 30 kg',
        items: [
          { label: 'Dose usual', value: '1 comprimido, 2 vezes ao dia' },
          { label: 'Profilaxia pós-exposição ou após acidente', value: '1 comprimido, 2 vezes ao dia. Iniciar até 2 horas após o acidente' },
          { label: 'Profilaxia de transmissão vertical', value: '1 comprimido ao dia, associado a raltegravir, se alternativo ao tenofovir' },
        ],
      },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Tontura', 'Cefaleia', 'Dor/desconforto abdominal',
      'Hiperlactatemia', 'Acidose lática', 'Toxicidade hematológica',
    ],
    contraindications: ['Anemia, especialmente Hb < 10 g/dL', 'Neutropenia'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lopinavir-ritonavir',
    name: 'Lopinavir + Ritonavir',
    category: 'antirretrovirais-associacoes',
    observations: 'Inibidor de protease potencializado. A dose deve ser 25% maior se o paciente usar efavirenz ou nevirapina. Conservar sob refrigeração.',
    brands: [
      'Kaletra — comp. revestido 100 + 25 mg; comp. revestido 200 + 50 mg; solução oral 400 + 100 mg/5 mL',
      'Lopinavir + Ritonavir genérico — comp. revestido 200 + 50 mg; solução oral 80 + 20 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido revestido 100 + 25 mg' },
      { label: 'Comprimido revestido 200 + 50 mg' },
      { label: 'Solução oral 400 + 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 14 dias',
        items: [
          { label: '< 15 kg', value: '12 + 3 mg/kg/dose, 2×/dia' },
          { label: '15 a 25 kg', value: '200 + 50 mg/dose, 2×/dia' },
          { label: '26 a 35 kg', value: '300 + 75 mg/dose, 2×/dia' },
        ],
      },
      {
        group: 'Adultos e crianças > 35 kg',
        items: [
          { label: 'Dose usual', value: '400 + 100 mg/dose a cada 12 h' },
          { label: 'Se usar efavirenz ou nevirapina', value: 'Aumentar dose em 25%' },
          { label: 'Orientação', value: 'Tomar com alimentos e líquidos abundantemente. Conservar sob refrigeração.' },
        ],
      },
    ],
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
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];