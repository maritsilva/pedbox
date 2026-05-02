export const antifungicosAzolicos = [
  {
    id: 'cetoconazol',
    name: 'Cetoconazol',
    category: 'antifungicos-azolicos',
    observations: 'Antifúngico imidazólico. Evitar em dermatofitoses pela maior toxicidade comparada a outros azólicos.',
    brands: ['Cetoconazol — comp. 200 mg'],
    presentations: [{ label: 'Comprimido 200 mg' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose usual', value: '3–7 mg/kg/dia (máx 400 mg)' },
          { label: 'Por peso', value: '< 20 kg: 50 mg; 20–40 kg: 100 mg; > 40 kg: 200 mg' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '200 mg 1×/dia ou 400 mg/dia' },
          { label: 'Blastomicose', value: 'Até 400 mg/dia por 6 meses' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Candida, Blastomyces, Histoplasma, Cryptococcus, Aspergillus'],
      resistant: [],
      warning: 'Evitar com terfenadina, lovastatina, domperidona — risco de QT prolongado.',
    },
    sideEffects: ['Cefaleia', 'Tontura', 'Náusea', 'Vômito', 'Dor abdominal', 'Arritmia cardíaca', 'Hepatotoxicidade'],
    contraindications: [],
  },
  {
    id: 'fluconazol',
    name: 'Fluconazol',
    category: 'antifungicos-azolicos',
    observations: 'Triazólico. Baixa toxicidade. Boa penetração no SNC. Ineficaz em Candida krusei e glabrata.',
    brands: ['Zoltec — cáps. 100 mg e 150 mg; sol. inj. 2 mg/mL', 'Flucoran, Fluconazol genérico'],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Cápsula 150 mg' },
      { label: 'Solução injetável 2 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose inicial', value: '6–12 mg/kg' },
          { label: 'Manutenção', value: '3–12 mg/kg/dia (máx 600 mg)' },
          { label: 'Meningite criptocócica', value: '5–6 mg/kg 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Candidíase oral', value: '100–200 mg/dia por 7–14 dias' },
          { label: 'Candidíase esofágica', value: '200–400 mg/dia' },
          { label: 'Candidíase sistêmica', value: 'Ataque: 800 mg; manutenção: 400 mg/dia' },
          { label: 'Candidíase vaginal', value: '150 mg em dose única' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '50% da dose' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose a cada 48 h' },
    ],
    sensitivity: {
      susceptible: ['Candida albicans, C. tropicalis, C. parapsilosis, Cryptococcus neoformans, Coccidioides'],
      resistant: ['Candida krusei, algumas C. glabrata'],
      warning: '',
    },
    sideEffects: ['Cefaleia', 'Convulsões', 'Náusea', 'Vômito', 'Dor abdominal', 'Hepatotoxicidade', 'Síndrome de Stevens-Johnson'],
    contraindications: [],
  },
  {
    id: 'itraconazol',
    name: 'Itraconazol',
    category: 'antifungicos-azolicos',
    observations: 'Triazólico lipófilo. Excelente para Aspergillus e Blastomyces. Melhor absorção com alimento ácido.',
    brands: ['Sporanox — cáps. 100 mg; sol. oral 10 mg/mL'],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Solução oral 10 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Fúngicas', value: '5 mg/kg/dia por 3–6 semanas ou até 6 meses' },
          { label: 'Aspergilose', value: '5–10 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Blastomicose', value: '200 mg 1–2×/dia por 3–6 meses' },
          { label: 'Aspergilose', value: '200–400 mg/dia' },
          { label: 'Histoplasmose', value: '200 mg 2–3×/dia' },
        ],
      },
    ],
    sensitivity: {
      susceptible: ['Candida, Aspergillus, Blastomyces, Histoplasma, Cryptococcus, Paracoccidioides'],
      resistant: [],
      warning: 'Evitar com estatinas, carbamazepina — redução significativa de níveis.',
    },
    sideEffects: ['Cefaleia', 'Náusea', 'Vômito', 'Dor abdominal', 'Hepatotoxicidade', 'Edema periférico', 'Hipopotassemia'],
    contraindications: [],
  },
  {
    id: 'miconazol',
    name: 'Miconazol',
    category: 'antifungicos-azolicos',
    observations: 'Imidazólico. Primeira escolha em lesões localizadas (glossite romboidal, queilite angular).',
    brands: ['Daktarin oral gel — gel oral 20 mg/g'],
    presentations: [{ label: 'Gel oral 20 mg/g' }],
    doses: [
      {
        group: 'Crianças > 6 meses e Adultos',
        items: [
          { label: 'Dose usual', value: 'Aplicar pequena quantidade no local 4×/dia por 3–7 dias após desaparecimento dos sintomas' },
        ],
      },
    ],
    sensitivity: {
      susceptible: ['Candida albicans, dermatófitos'],
      resistant: [],
      warning: '',
    },
    sideEffects: ['Glossalgia', 'Desconforto local', 'Cefaleia', 'Fadiga', 'Diarreia', 'Alteração do paladar'],
    contraindications: [],
  },
];