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
    observations: 'Antifúngico triazólico para micoses superficiais e profundas, inclusive em imunodeprimidos. Ação contra Cryptococcus, Histoplasma, Blastomyces, Paracoccidioides, Sporothrix e Coccidioides. Baixa penetração no SNC e vias urinárias. Solução oral e cápsulas não são intercambiáveis.',
    brands: [
      'Sporanox / Itraspor / Micopal / Neo Itrax / Traxonol — cáps. 100 mg; sol. oral 10 mg/mL',
      'Itraconazol genérico — cáps. 100 mg',
    ],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Solução oral 10 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Blastomicose, candidíase, aspergilose, criptococose, paracoccidioidomicose e outros', value: '5–10 mg/kg/dia (máx 5 mg/kg/dia em < 1 ano)' },
          { label: 'Profilaxia na AIDS', value: '2,5–5 mg/kg/dia' },
          { label: 'Dermatofitose', value: '3–5 mg/kg/dia por 15 dias ou alternados por 4–6 semanas' },
          { label: 'Tinea da unha', value: '5 mg/kg/dia por 1–3 meses; ou dose dobrada 1 sem/mês por 4–6 meses' },
          { label: 'Aspergilose pulmonar — fibrose cística', value: '5 mg/kg/dia por 2 meses + macrolídeo' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '100–200 mg/dia ÷ 1–2 doses (graves: até 600 mg/dia ÷ 3)' },
          { label: 'Aspergilose broncopulmonar alérgica', value: '200 mg 2×/dia por 12 semanas + corticoterapia' },
          { label: 'Blastomicose leve a moderada / histoplasmose', value: '200 mg 3×/dia por 3 dias; depois 200 mg 1–2×/dia por 6–12 meses' },
          { label: 'Candidíase orofaríngea refratária', value: '200 mg/dia por 7–14 dias' },
          { label: 'Candidíase vaginal', value: '200 mg 2×/dia por 1–2 dias' },
          { label: 'Coccidioidomicose meníngea', value: '400–800 mg/dia' },
          { label: 'Criptococose', value: '200–400 mg/dia por 6–12 meses' },
          { label: 'HIV — supressão alternativa ao fluconazol', value: '200 mg 2×/dia' },
          { label: 'Esporotricose cutânea', value: '200 mg/dia por 2–6 meses' },
          { label: 'Esporotricose osteoarticular, pulmonar ou meníngea', value: '200 mg 2×/dia por 12 meses' },
          { label: 'Micetoma', value: '200 mg 2×/dia por 10 meses ou até melhora' },
          { label: 'Pitiríase versicolor', value: '200–400 mg/dia por 3–7 dias' },
          { label: 'Onicomicoses', value: '200 mg/dia por 12 semanas; ou pulso 200 mg 2×/dia por 1 sem/mês por 3–6 meses' },
          { label: 'Tinea corporis / tinea manus', value: '5 mg/kg/dia por 4 semanas' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Candida, Aspergillus, Blastomyces, Histoplasma, Cryptococcus, Paracoccidioides, Sporothrix, Coccidioides'],
      resistant: [],
      warning: 'Não usar com terfenadina, astemizol, lovastatina, pimozida, midazolam oral, cisaprida e antiarrítmicos. Inibidor forte do CYP450; antiácidos reduzem absorção.',
    },
    sideEffects: [
      'Cefaleia, tontura, fadiga, mal-estar, febre, depressão',
      'Náusea, dor abdominal, cólicas, constipação, dispepsia, anorexia, vômito, diarreia',
      'Erupção cutânea, prurido, rinite, tosse, dispneia, sinusite',
      'Hipopotassemia, efeito inotrópico negativo, fraqueza muscular',
      'Icterícia, alergia, urina escura, edema, albuminúria, disfunção hepática reversível',
      'Hepatotoxicidade grave (rara)',
    ],
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
  {
    id: 'posaconazol',
    name: 'Posaconazol',
    category: 'antifungicos-azolicos',
    observations: 'Antifúngico triazólico de segunda geração, de uso restrito pela alta incidência de efeitos colaterais. Evitar em menores de 13 anos.',
    brands: ['Noxafil — susp. oral 200 mg/5 mL'],
    presentations: [{ label: 'Suspensão oral 200 mg/5 mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia de candidíase/aspergilose em imunocomprometidos', value: '200 mg 3×/dia durante neutropenia ou imunossupressão' },
          { label: 'Infecção grave por Candida ou Aspergillus', value: '800 mg/dia ÷ 2 (com alimento) ou 4×/dia (em jejum); por 3 dias ou até estabilização; depois 400 mg/dia ÷ 2' },
          { label: 'Candidíase esofágica/orofaríngea refratária', value: 'Gargarejar e engolir 100 mg 2×/dia nos primeiros dias; depois 400 mg/dia por 13 dias' },
          { label: 'Criptococose', value: '400 mg 2×/dia (alternativa)' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Candida, Aspergillus, Cryptococcus'],
      resistant: [],
      warning: 'Melhor absorvido com líquidos ácidos durante ou após refeição.',
    },
    sideEffects: [
      'Febre, diarreia, náusea, cefaleia, fadiga, tontura, constipação, mucosite',
      'Edema nas pernas, hipertensão, erupção cutânea, hipopotassemia, hipomagnesemia',
      'Desidratação, anemia, trombocitopenia, neutropenia',
      'Síndrome hemolítico-urêmica, púrpura trombocitopênica trombótica',
      'Arritmia / torsades de pointes, hepatotoxicidade e icterícia',
    ],
    contraindications: ['Menores de 13 anos'],
  },
  {
    id: 'voriconazol',
    name: 'Voriconazol',
    category: 'antifungicos-azolicos',
    observations: 'Antifúngico triazólico de alto custo. Primeira escolha para aspergilose invasiva e opção para Candida glabrata e C. krusei. Penetração moderada no SNC e baixa nas vias urinárias.',
    brands: ['Vfend / Voriconazol — comp. 50 e 200 mg; Fr. amp. 200 mg'],
    presentations: [
      { label: 'Comprimido 50 mg' },
      { label: 'Comprimido 200 mg' },
      { label: 'Frasco-ampola 200 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'EV — ataque', value: '9 mg/kg/dose a cada 12 h por 2 doses' },
          { label: 'EV — manutenção', value: '8–9 mg/kg/dose a cada 12 h (máx 350 mg/dose)' },
          { label: 'Via oral', value: 'Conforme peso; segurança não estabelecida em crianças pequenas' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Aspergilose invasiva, coccidioidomicose meníngea, criptococose — EV ataque', value: '6 mg/kg/dose a cada 12 h no 1º dia' },
          { label: 'Aspergilose invasiva — EV manutenção', value: '4 mg/kg/dose a cada 12 h' },
          { label: 'Aspergilose invasiva — oral', value: '200 mg a cada 12 h (< 40 kg: 100 mg a cada 12 h)' },
          { label: 'Candidíase disseminada grave — oral ataque', value: '400 mg a cada 12 h por 2 doses' },
          { label: 'Candidíase disseminada grave — oral manutenção', value: '200 mg a cada 12 h' },
          { label: 'Candidíase esofágica/orofaríngea refratária', value: '200 mg 2×/dia' },
          { label: 'Neuroparacoccidioidomicose / blastomicose', value: '200–400 mg 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      { label: 'Diálise', value: 'Não dialisável ou pouco dialisável' },
    ],
    sensitivity: {
      susceptible: ['Aspergillus, Candida glabrata, C. krusei, Cryptococcus, Coccidioides, Blastomyces'],
      resistant: [],
      warning: 'Não associar com indutores do CYP450. Risco de hipoglicemia com sulfonilureias. Monitorar ciclosporina e tacrolimus.',
    },
    sideEffects: [
      'Cefaleia, alucinações, tontura, febre, calafrios',
      'Vômito, náusea, boca seca, taquicardia, hipertensão, hipotensão',
      'Erupção cutânea, distúrbios visuais, visão borrada, fotofobia, cromatopsia',
      'Hepatotoxicidade, icterícia, aumento de enzimas hepáticas',
    ],
    contraindications: [],
  },
];