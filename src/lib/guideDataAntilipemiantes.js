// Antilipemiantes: Inibidores PCSK9, Sequestrador de Ácido Biliar, Fibratos, Ômega 3

export const inibidoresPCSK9 = [
  {
    id: 'evolocumabe',
    name: 'Evolocumabe',
    category: 'antilipemiantes-pcsk9',
    observations: 'Inibidor da PCSK9, capaz de reduzir o LDL em até 60%.',
    brands: ['Repatha (Amgen) — Caneta preenchida 1 mL: 140 mg'],
    presentations: [{ label: 'Caneta preenchida 140 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hiperlipidemia primária', value: '140 mg/dose a cada 2 semanas ou 420 mg/dose a cada 4 semanas' },
          { label: 'Hipercolesterolemia familiar homozigótica', value: '420 mg/dose a cada 4 semanas' },
          { label: 'Administração', value: 'Via subcutânea na coxa, abdômen ou parte superior do braço' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar' }],
    sideEffects: ['Tontura, febre, artralgias', 'Gastroenterite, náuseas', 'Infecção do trato urinário, anemia, mialgia', 'Diarreia, diabetes, resfriado', 'Nasofaringite, sinusite, tosse', 'Erupção cutânea, urticária', 'Desenvolvimento de anticorpos (raro)'],
    contraindications: [],
  },

  {
    id: 'alirocumabe',
    name: 'Alirocumabe',
    category: 'antilipemiantes-pcsk9',
    observations: 'Inibidor da PCSK9, capaz de reduzir o LDL em até 60%.',
    brands: ['Praluent (Sanofi) — Caneta preenchida 1 mL: 75 mg; Caneta preenchida 1 mL: 150 mg'],
    presentations: [{ label: 'Caneta preenchida 75 mg' }, { label: 'Caneta preenchida 150 mg' }],
    doses: [
      {
        group: 'Adultos > 18 anos',
        items: [
          { label: 'Hipercolesterolemia primária', value: 'Iniciar 75 mg/dose a cada 2 semanas. Se necessário, aumentar até 150 mg/dose a cada 2 semanas' },
          { label: 'Redução LDL > 60%', value: 'Iniciar 150 mg/dose a cada 2 semanas' },
          { label: 'Alternativa', value: '300 mg/dose a cada 4 semanas' },
          { label: 'Administração', value: 'Via subcutânea na coxa, abdômen ou parte superior do braço' },
        ],
      },
    ],
    sideEffects: ['Diarreia, aumento de enzimas hepáticas', 'Imunogenicidade (risco de perda de eficácia)', 'Cefaleia, tosse', 'Reação no local da injeção, prurido, erupção cutânea, hipersensibilidade', 'Confusão, comprometimento cognitivo', 'Artralgia, mialgia, espasmos musculares'],
    contraindications: [],
  },
];

export const sequestradoresAcidoBiliar = [
  {
    id: 'colestiramina',
    name: 'Colestiramina',
    category: 'antilipemiantes-sequestrador',
    observations: 'Sequestrador do ácido biliar, reduz LDL em 15 a 25%. Também reduz níveis de glicose em pacientes com hiperglicemia. Redutor do prurido da colestase. Tratamento da diarreia por excesso de ácidos biliares. Não é absorvido: poucos efeitos sistêmicos.',
    brands: ['Questran Light (BMS) — Sachê: 4 g'],
    presentations: [{ label: 'Sachê 4 g' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Dose usual', value: '240 mg/kg/dia. Máximo: 360 mg/kg/dia ou 8 g/dia' }],
      },
      {
        group: 'Crianças ≥ 6 anos',
        items: [
          { label: '< 10 anos', value: 'Iniciar 2 g/dia ÷ 1 por 1 semana; ajustar até 4 g/dia ÷ 1' },
          { label: '≥ 10 anos', value: 'Ajustar até 8 g/dia ÷ 1 a 2' },
        ],
      },
      {
        group: 'Adultos — Hipercolesterolemia',
        items: [
          { label: 'Início', value: 'Iniciar 4 g/dia ÷ 1 a 2. Ajustar gradualmente em intervalos de 4 semanas' },
          { label: 'Manutenção', value: '8 a 16 g/dia ÷ 2 a 4. Dose máxima: 24 g/dia' },
        ],
      },
      {
        group: 'Adultos — Diarreia por má absorção',
        items: [
          { label: 'Início', value: 'Iniciar 4 g/dia ÷ 1; aumentar semanalmente até 4 vezes ao dia' },
          { label: 'Dose usual', value: '4 g × 3. Dose máxima: 36 g/dia' },
        ],
      },
    ],
    preparation: 'Diluir em água ou suco. Manter em repouso 1 a 2 minutos; misturar novamente antes de tomar. Tomar longe de outros medicamentos (1 hora depois e 4 horas antes).',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Náuseas, vômito, empachamento, constipação, flatulência, meteorismo, azia, dor epigástrica, úlcera, esteatorreia, diarreia, irritação perianal',
      'Perda do esmalte dos dentes, hemorragia digestiva',
      'Tontura, cefaleia, sonolência',
      'Hipertrigliceridemia, pancreatite, acidose hiperclorêmica (doses altas)',
      'Aumento da excreção renal de cálcio, hipercalciúria',
      'Uso crônico: deficiência de vitaminas lipossolúveis (A, D, K, folato)',
      'Pode prejudicar absorção de outros medicamentos',
    ],
    contraindications: ['Obstrução biliar completa', 'Constipação'],
  },
];

export const fibratosAntilipemiantes = [
  {
    id: 'fenofibrato',
    name: 'Fenofibrato',
    category: 'antilipemiantes-fibrato',
    observations: 'Hipolipemiante, fibrato. Melhor tomar com alimentos. Não é dialisável.',
    brands: ['Lipidil (Abbott) — Cáps.: 200 mg; Comprimidos revestidos: 160 mg', 'Lipanon (Farmasa) — Cáps. retard: 250 mg', 'Reducofen (Abiqu2) — Cáps.: 200 mg', 'G Fenofibrato — Cáps.: 200 mg'],
    presentations: [{ label: 'Cápsula 200 mg' }, { label: 'Comprimido revestido 160 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertrigliceridemia',
        items: [{ label: 'Oral', value: 'Iniciar 160 a 200 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — Hipercolesterolemia mista',
        items: [{ label: 'Oral', value: '160 a 200 mg/dia ÷ 1. Pode ser associada a estatinas' }],
      },
      {
        group: 'Adultos — Hipertrigliceridemia grave (> 1000 mg/dL)',
        items: [{ label: 'Oral', value: '160 a 250 mg, associado a estatinas, ômega 3 ou ácido nicotínico' }],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar. Não é dialisável' }],
    sideEffects: ['Cefaleia, insônia, fadiga, tonturas', 'Dor abdominal, náuseas, vômito, diarreia, dispepsia, cólicas, constipação', 'Hepatite colestática, hepatoxicidade, pancreatite', 'Aumento de enzimas hepáticas e creatinina sérica', 'Erupção cutânea, prurido, alopecia, disfunção sexual', 'Dor nas costas, rabdomiólise', 'Depressão medular, asma, rinite', 'Artralgia, mialgia, câimbras (pacientes com predisposição à miopatia)'],
    contraindications: ['Hepatopatia (exceto infiltração gordurosa)', 'Elevação persistente de transaminases', 'Insuficiência renal grave'],
  },

  {
    id: 'bezafibrato',
    name: 'Bezafibrato',
    category: 'antilipemiantes-fibrato',
    observations: 'Hipolipemiante, capaz de reduzir triglicérides em 30 a 60% e aumentar HDL em 7 a 11%. O comprimido não deve ser partido. Usado em associação com estatinas quando TG > 200 e HDL < 34.',
    brands: ['Cedur (Germani) — Comprimidos retard: 400 mg', 'Comprimidos: 200 mg; Comprimidos lib. prolong.: 400 mg', 'G Bezafibrato — Comprimidos revestidos: 200 mg'],
    presentations: [{ label: 'Comprimido revestido 200 mg' }, { label: 'Comprimido retard 400 mg' }],
    doses: [
      {
        group: 'Crianças > 4 anos — Triglicérides > 500 mg/dL',
        items: [{ label: 'Oral', value: '5 a 10 mg/kg/dia ÷ 1 a 3. Máximo: 400 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertrigliceridemia (> 500 mg/dL)',
        items: [{ label: 'Oral', value: '200 mg × 1 a 3' }],
      },
      {
        group: 'Adultos — Hipertrigliceridemia grave (> 1000 mg/dL)',
        items: [{ label: 'Oral', value: '200 a 400 mg, associado a estatinas, ômega 3 ou ácido nicotínico' }],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 60 mL/min ou Cr sérica > 1,5 mg/dL', value: 'Uso contraindicado' }],
    sideEffects: ['Tontura, cefaleia, insônia, anorexia, náuseas, tosse', 'Urticária, prurido, eczema', 'Gastrite, flatulência, azia, náuseas, vômito, diarreia, dispepsia, indigestão', 'Dor e cãimbras musculares nas pernas', 'Impotência e alopecia'],
    contraindications: ['Não usar com estatinas em pacientes com risco de miopatia (exceto infiltração gordurosa)', 'Afecções da vesícula biliar'],
  },

  {
    id: 'ciprofibrato',
    name: 'Ciprofibrato',
    category: 'antilipemiantes-fibrato',
    observations: 'Hipolipemiante fibrato. O comprimido não deve ser partido. Não é dialisável.',
    brands: ['Oroxan (Sanofi) / Citrato (Kley) / Cipide (CIF) / Lipless (Biosintética) — Comprimidos: 100 mg', 'G Ciprofibrato — Comprimidos: 100 mg'],
    presentations: [{ label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertrigliceridemia (> 500 mg/dL)',
        items: [{ label: 'Oral', value: '100 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — Hipertrigliceridemia grave (> 1000 mg/dL)',
        items: [{ label: 'Oral', value: '100 mg/dia ÷ 1, associado a estatinas, ômega 3 ou ácido nicotínico' }],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30 a 60 mL/min', value: '1 dose em dias alternados' },
      { label: 'ClCr < 30 mL/min', value: 'Uso contraindicado. Não é dialisável' },
    ],
    sideEffects: ['Cefaleia, vertigem, tontura, sonolência', 'Diarreia, constipação, vômito, dispepsia, indigestão', 'Mialgia, fadiga, rabdomiólise', 'Alopecia, erupção cutânea', 'Raro: miopatia (↑ CPK), suspeita de mortalidade não cardíaca'],
    contraindications: ['Insuficiência renal grave', 'Insuficiência hepática grave'],
  },

  {
    id: 'genfibrozila',
    name: 'Genfibrozila',
    category: 'antilipemiantes-fibrato',
    observations: 'Hipolipemiante, fibrato. O comprimido não deve ser partido. Tomar 30 minutos antes do café da manhã e antes do jantar. Descontinuar se não houver resposta após 2 meses.',
    brands: ['Lopid (Pfizer) — Comprimidos revestidos: 600 mg; Comprimidos revestidos: 900 mg', 'G Genfibrozila — Comprimidos revestidos: 600 e 900 mg'],
    presentations: [{ label: 'Comprimido revestido 600 mg' }, { label: 'Comprimido revestido 900 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertrigliceridemia',
        items: [
          { label: 'Início', value: 'Iniciar 600 mg/dia ÷ 1 a 2' },
          { label: 'Dose máxima', value: '1200 mg/dia ÷ 2' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Uso contraindicado' }],
    sideEffects: ['Tontura, cefaleia, vertigem, convulsão, ↓ libido, febre, calafrio', 'Dispepsia, dor abdominal, náusea, vômito, diarreia, apendicite aguda', 'Fibrilação atrial, dor muscular, miopatia, miastenia', 'Edema, disúria, visão borrada, pirose, tosse, rouquidão', 'Erupção cutânea, eczema, depressão medular'],
    contraindications: ['Hepatopatia', 'Colecistopatia'],
  },
];

export const omegaTres = [
  {
    id: 'omega-3',
    name: 'Ômega 3',
    category: 'antilipemiantes-omega',
    observations: 'Ácidos graxos EPA (ácido eicosapentaenoico) e DHA (ácido docosahexaenoico). Capaz de reduzir triglicérides de 15 a 30%, Apo B e triglicérides; discretamente HDL.',
    brands: [
      'Corene 3 (Bestico) — Cáps.: 1.100 mg',
      'Kream (Vibra) — Cáps.: 500 mg',
      'Maltens DHA (Galia) — Cáps.: 250 mg',
      'Óleo de Peixe (Diversos Marcas) — Cáps.: 1.000 mg',
    ],
    presentations: [{ label: 'Cápsula 250 a 1.100 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hipertrigliceridemia (200-499 mg/dL)', value: '2 a 4 g/dia ÷ 1 a 2, com as refeições' },
          { label: 'Hipertrigliceridemia grave (> 1000 mg/dL)', value: '4 a 6 g/dia ÷ 1 a 2, com as refeições' },
          { label: 'Gestantes', value: 'Mais seguro recomendar dieta com peixes de águas profundas (salmão, cavala, arenque, sardinha, atum, truta) com baixos níveis de mercúrio' },
        ],
      },
    ],
    sideEffects: ['Diarreia, náuseas, vômito, dor abdominal, eructação, diminuição do paladar, dispepsia, constipação, flatulência', 'Artralgia', 'Prurido, erupção cutânea', 'Aumento de LDL e enzimas hepáticas'],
    contraindications: [],
  },
];