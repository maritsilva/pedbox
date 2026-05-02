// Broncodilatadores adrenérgicos de ação longa

export const broncodilatadoresAdrenergicosLonga = [
  {
    id: 'bambuterol',
    name: 'Bambuterol',
    category: 'broncodilatadores-acao-longa',
    observations: 'Agonista β2-adrenérgico de ação longa.',
    brands: ['Bambair — Solução oral: 5 mg/5 mL'],
    presentations: [{ label: 'Solução oral 5 mg/5 mL' }],
    doses: [
      {
        group: 'Crianças 2-5 anos',
        items: [{ label: 'Dose', value: '5-10 mg/dia, 1 vez ao dia' }},
      },
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Inicial', value: 'Iniciar 10 mg/dia, 1 vez ao dia' },
          { label: 'Manutenção', value: 'Aumentar se necessário para 20 mg ao deitar' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Reduzir a dose' }],
    sideEffects: [
      'Tremor, cefaleia, cãibra, agitação, inquietação',
      'Náusea, alergia, arritmia, taquicardia, palpitação',
      'Aumento da enzima hepática',
    ],
    contraindications: [],
  },

  {
    id: 'formoterol',
    name: 'Formoterol',
    category: 'broncodilatadores-acao-longa',
    observations: 'β2-agonista de efeito prolongado até 12 horas. Usar no tratamento de manutenção associado a corticosteroide inalatório na asma persistente moderada/grave e na DPOC.',
    brands: [
      'Foradil — Cápsula inalante: 12 µg',
      'Formocaps — Cápsula inalante: 12 µg',
      'Formoterol — Cápsula inalante: 12 µg',
      'Foraseg / Symbicort / Vannair — Associações com budesonida: 6+100, 6+200, 6+400, 12+400 µg',
      'Formoterol + fluticasona — Cápsula: 6 + 250 µg',
    ],
    presentations: [{ label: 'Cápsula inalante 12 µg' }, { label: 'Cápsula inalante 6 + 250 µg (com fluticasona)' }],
    doses: [
      {
        group: 'Crianças (sobretudo > 5 anos)',
        items: [{ label: 'Asma manutenção', value: '12 µg, 1 jato ou cápsula/dose, 2 vezes ao dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Asma e DPOC manutenção', value: '12-24 µg, 1-2 jatos ou cápsulas/dose, 2 vezes ao dia' }],
      },
    ],
    preparation: 'Explicar que as cápsulas são para usar no dispositivo de inalação, não para ingerir. Inalador pode ser usado indefinidamente. Cápsulas semiabertas devem ser armazenadas em local fresco sem congelar. Alertar risco de confundir com β2 ação curta e usar várias doses (pode ser fatal). Orientar aspirar cápsula mais de uma vez pois pode ficar conteúdo no dispositivo.',
    sideEffects: [
      'Tremores, tontura, sonolência, cefaleia, irritabilidade, agitação',
      'Cãibras, mialgia',
      'Taquicardia, palpitação, arritmias, angina, hipertensão, hipotensão',
      'Dispepsia, náusea, vômitos, boca seca',
      'Amigdalite, diarreia, irritação faringe, rinite, rouquidão',
      'Risco de broncoespasmo paradoxal grave',
      'Superdosagem ou sem corticosteroide inalatório aumenta risco de piora asma',
    ],
    contraindications: [],
  },

  {
    id: 'indacaterol',
    name: 'Indacaterol',
    category: 'broncodilatadores-acao-longa',
    observations: 'β2-agonista de ação prolongada para uso contínuo em dose única diária. Não preconizado para asma.',
    brands: ['Onbrize — Cápsula inalante: 150 e 300 µg'],
    presentations: [{ label: 'Cápsula inalante 150 µg' }, { label: 'Cápsula inalante 300 µg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Uso', value: 'Não usar em menores de 18 anos' }],
      },
      {
        group: 'Adultos — DPOC',
        items: [
          { label: 'Dose inicial', value: 'Inalar cápsula de 150 µg/dia' },
          { label: 'Ajuste', value: 'Se necessário, usar 1 cápsula de 300 µg/dia' },
        ],
      },
    ],
    preparation: 'Abrir, colocar cápsula, fechar, perfurar, aspirar e inalar o conteúdo.',
    sideEffects: [
      'Tremor, cefaleia, cãibras, insônia, inquietação',
      'Náusea, broncoespasmo paradoxal, tosse, faringite',
      'Alergia, arritmia, hipopotassemia',
    ],
    contraindications: [],
  },

  {
    id: 'olodaterol',
    name: 'Olodaterol',
    category: 'broncodilatadores-acao-longa',
    observations: 'β2-agonista de ação longa. Uso inalatório.',
    brands: ['Striverdi Respimat — Spray: 2,5 µg/dose'],
    presentations: [{ label: 'Spray 2,5 µg/dose' }],
    doses: [
      {
        group: 'Adultos — DPOC',
        items: [{ label: 'Dose', value: 'Dois jatos por dose, uma vez ao dia' }],
      },
    ],
    preparation: 'Frasco na posição vertical. Abrir tampa amarela. Expirar. Colocar inalador na boca e apertar botão enquanto inspira.',
    sideEffects: [
      'Broncoespasmo paradoxal, tontura, rash nasofaríngeo',
      'Hipopotassemia, hiperglicemia',
      'Pode piorar angina, hipertensão, arritmia',
    ],
    contraindications: [],
  },

  {
    id: 'salmeterol',
    name: 'Salmeterol',
    category: 'broncodilatadores-acao-longa',
    observations: 'β2-agonista de ação prolongada até 12 horas. Usar sempre associado a corticosteroide inalatório na asma persistente moderada/grave ou na DPOC.',
    brands: [
      'Serevent — Rotadisco: 50 µg/dose; Pó inalante: 50 µg',
      'Salmeterol + fluticasona — 25+50, 25+125, 25+250, 50+100, 50+250, 50+500 µg/dose',
    ],
    presentations: [{ label: 'Rotadisco/Pó 50 µg/dose' }],
    doses: [
      {
        group: 'Adultos e crianças > 4 anos',
        items: [
          { label: 'Dose', value: '50 µg a cada 12 horas' },
          { label: 'Máx adultos', value: '100 µg/dose, 2 vezes ao dia' },
          { label: 'Adolescentes', value: 'Evitar dose mais alta' },
        ],
      },
    ],
    preparation: 'Alertar risco de confundir com β2 ação curta e usar várias doses como resgate (pode ser fatal). Em crises agudas, preferir salbutamol ou fenoterol. De ação longa úteis no controle prolongado e profilaxia do broncoespasmo do exercício, 1x ao dia antes atividade física.',
    sideEffects: [
      'Tremores, cefaleia, irritabilidade, hiperatividade',
      'Palpitações, arritmias, broncoespasmo paradoxal',
      'Faringite, prolongamento QTc',
      'Diarreia, náusea, gengivite, erupção cutânea',
      'Cãibras, hipopotassemia, artralgia, urticária',
      'Risco menor com associação a corticosteroide inalatório que sem',
    ],
    contraindications: [],
  },

  {
    id: 'vilanterol-fluticasona',
    name: 'Vilanterol + Fluticasona',
    category: 'broncodilatadores-acao-longa',
    observations: 'β2-agonista de ação prolongada associado a corticosteroide sintético para tratamento de manutenção na asma e na DPOC.',
    brands: ['Relvar Ellipta — Pó inalante: 25+100 µg/dose ou 25+200 µg/dose'],
    presentations: [{ label: 'Pó inalante 25 + 100 µg/dose' }, { label: 'Pó inalante 25 + 200 µg/dose' }],
    doses: [
      {
        group: 'Adultos — Asma e DPOC manutenção',
        items: [{ label: 'Dose', value: '1 dose diária. Máx: 1 dose/dia' }],
      },
    ],
    preparation: 'NÃO usar em crises agudas de broncoespasmo, apenas para manutenção a longo prazo.',
    sideEffects: [
      'Cefaleia, candidíase, diarreia, dor abdominal',
      'Hipertensão, edema',
      'Faringite, pneumonia, tosse, sinusite, rinite, rouquidão',
      'Dor orofaríngea, artralgia, fratura',
    ],
    contraindications: [],
  },
];