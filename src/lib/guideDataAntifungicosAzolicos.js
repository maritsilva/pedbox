export const antifungicosAzolicos = [
  {
    id: 'cetoconazol',
    name: 'Cetoconazol',
    category: 'antifungicos-azolicos',
    observations: 'Antifúngico imidazólico. Evitar uso sistêmico em dermatofitoses pela maior hepatotoxicidade. Preferir fluconazol ou itraconazol.',
    brands: [
      'Cetoconazol — comp. 200 mg',
    ],
    presentations: [
      { label: 'Comprimido 200 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose usual', value: '3–7 mg/kg/dia. Máx: 400 mg/dia' },
          { label: '< 20 kg', value: '50 mg/dose 1×/dia' },
          { label: '20–40 kg', value: '100 mg/dose 1×/dia' },
          { label: '> 40 kg', value: '200 mg/dose 1×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '200 mg/dia (até 400 mg/dia nos casos graves)' },
          { label: 'Blastomicose', value: 'Até 400 mg/dia por 6 meses' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Candida spp., Blastomyces, Histoplasma',
        'Cryptococcus neoformans, Aspergillus (ação fraca)',
      ],
      resistant: [],
      warning: 'Evitar com terfenadina, lovastatina, domperidona — risco de prolongamento do QT e arritmia grave.',
    },
    sideEffects: [
      'Cefaleia, tontura, náusea, vômito, dor abdominal',
      'Hepatotoxicidade (monitorar TGO/TGP)',
      'Arritmia cardíaca (prolongamento do QT)',
    ],
    contraindications: [],
  },
  {
    id: 'fluconazol',
    name: 'Fluconazol',
    category: 'antifungicos-azolicos',
    observations: 'Triazólico de baixa toxicidade. Boa penetração no SNC. Ineficaz contra Candida krusei e C. glabrata resistente.',
    brands: [
      'Zoltec — cáps. 100 mg e 150 mg; sol. injetável 2 mg/mL',
    ],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Cápsula 150 mg' },
      { label: 'Solução injetável 2 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose de ataque', value: '6–12 mg/kg' },
          { label: 'Manutenção', value: '3–12 mg/kg/dia. Máx: 600 mg/dia' },
          { label: 'Meningite criptocócica', value: '5–6 mg/kg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Candidíase oral/esofágica', value: '100–200 mg/dia por 7–14 dias (esofágica: 200–400 mg/dia)' },
          { label: 'Candidíase sistêmica', value: 'Ataque 800 mg, manutenção 400 mg/dia' },
          { label: 'Meningite criptocócica', value: '400–800 mg/dia' },
          { label: 'Candidíase vulvovaginal', value: '150 mg dose única' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '50% da dose' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose a cada 48 h' },
    ],
    sensitivity: {
      susceptible: [
        'Candida albicans, C. tropicalis, C. parapsilosis',
        'Cryptococcus neoformans, Coccidioides',
      ],
      resistant: [
        'Candida krusei (intrinsecamente resistente)',
        'Candida glabrata (frequentemente resistente)',
        'Aspergillus spp.',
      ],
      warning: '',
    },
    sideEffects: [
      'Cefaleia, convulsões (raro)',
      'Náusea, vômito, dor abdominal',
      'Hepatotoxicidade, Síndrome de Stevens-Johnson',
    ],
    contraindications: [],
  },
  {
    id: 'itraconazol',
    name: 'Itraconazol',
    category: 'antifungicos-azolicos',
    observations: 'Triazólico lipófilo com excelente ação contra Aspergillus e Blastomyces. Melhor absorção com alimento ácido ou refrigerante. A solução oral tem melhor biodisponibilidade que as cápsulas.',
    brands: [
      'Sporanox — cáps. 100 mg; sol. oral 10 mg/mL',
    ],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Solução oral 10 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Infecções fúngicas', value: '5 mg/kg/dia por 3–6 semanas (até 6 meses nas sistêmicas)' },
          { label: 'Aspergilose', value: '5–10 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Blastomicose / histoplasmose leve', value: '200 mg 1–2×/dia por 3–6 meses' },
          { label: 'Aspergilose', value: '200–400 mg/dia' },
          { label: 'Histoplasmose grave', value: '200 mg 2–3×/dia' },
          { label: 'Onicomicose (pulso)', value: '200 mg 2×/dia por 1 semana, repetir por 2–3 meses' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Candida spp., Aspergillus spp.',
        'Blastomyces, Histoplasma, Cryptococcus',
        'Paracoccidioides brasiliensis, Sporothrix',
      ],
      resistant: [],
      warning: 'Evitar com estatinas, carbamazepina — redução significativa de níveis séricos. Risco de insuficiência cardíaca em pacientes predispostos.',
    },
    sideEffects: [
      'Cefaleia, náusea, vômito, dor abdominal',
      'Hepatotoxicidade (monitorar em uso prolongado)',
      'Edema periférico, hipopotassemia',
    ],
    contraindications: [],
  },
  {
    id: 'miconazol',
    name: 'Miconazol',
    category: 'antifungicos-azolicos',
    observations: 'Imidazólico tópico/oral. Primeira escolha em lesões localizadas como glossite romboidal mediana e queilite angular. Não usar em crianças menores de 6 meses pelo risco de asfixia com o gel oral.',
    brands: [
      'Daktarin oral gel — gel oral 20 mg/g (2%)',
    ],
    presentations: [
      { label: 'Gel oral 20 mg/g (tubo 40 g)' },
    ],
    doses: [
      {
        group: 'Crianças > 6 meses e Adultos',
        items: [
          { label: 'Candidíase oral', value: 'Aplicar pequena quantidade no local 4×/dia por 3–7 dias após desaparecimento dos sintomas' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Candida albicans, Candida spp.',
        'Dermatófitos (uso tópico cutâneo)',
      ],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Glossalgia, desconforto local',
      'Cefaleia, fadiga, diarreia',
      'Alteração do paladar',
    ],
    contraindications: [
      'Crianças menores de 6 meses (risco de asfixia com gel oral)',
    ],
  },
];