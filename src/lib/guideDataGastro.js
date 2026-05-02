export const antiacidos = [
  {
    id: 'carbonatos',
    name: 'Carbonatos (Antiácidos)',
    category: 'gastro',
    observations: 'Reagem com HCl produzindo grande quantidade de CO₂. Evitar uso prolongado (máx 2 semanas). Existem opções mais seguras e eficazes.',
    brands: [
      'Bicarbonato de sódio — pó 2,5/5/30/50/80/100 g',
      'Eno Tabs / Carbonato de cálcio — comp. mastigável 750 mg',
    ],
    presentations: [
      { label: 'Pó (bicarbonato de sódio)' },
      { label: 'Comprimido mastigável 750 mg (carbonato de cálcio)' },
    ],
    doses: [
      {
        group: 'Adultos — Azia e má digestão',
        items: [
          { label: 'Bicarbonato de sódio', value: '5 g (1 colher de chá) dissolvido em meio copo de água/dose. Máx: 6 doses/dia (idosos: máx 3/dia)' },
          { label: 'Carbonato de cálcio', value: '500–2000 mg/dose. Máx: 8.000 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Bicarbonato: distensão abdominal, náusea, eructação, sobrecarga de sódio, alcalose metabólica, hipertensão',
      'Carbonato de cálcio: constipação, flatulência, distensão abdominal, urolitíase',
    ],
    contraindications: ['Dieta com restrição de sódio', 'Hipertensão não controlada', 'Tratamento a longo prazo', 'Hipercalcemia', 'Hipercalciúria'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Com diuréticos pode levar à depleção de cloreto.' },
  },
  {
    id: 'hidroxido-aluminio',
    name: 'Hidróxido de Alumínio',
    category: 'gastro',
    observations: 'Antiácido não sistêmico. Forma cloreto de alumínio (constipante). Melhor tomar 1–2 h após refeições principais e ao deitar. Evitar uso prolongado. Não usar se fosfato < 7 mg/dL.',
    brands: [
      'Pepsamar — comp. mastigável 230 mg',
      'Hidróxido de alumínio — susp. oral 310 mg/5 mL; comp. 230 e 300 mg',
    ],
    presentations: [
      { label: 'Comprimido mastigável 230 mg' },
      { label: 'Suspensão oral 310 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar — risco de intoxicação por alumínio)',
        items: [
          { label: 'Hiperfosfatemia', value: '50–150 mg/kg/dia ÷ 4–6 doses' },
          { label: 'IRC (> 1 ano) — quelante de fosfato', value: '60 mg/kg/dia ÷ 2 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Azia e má digestão', value: '400–1600 mg/dose 4–6×/dia. Máx: 3.840 mg/dia' },
          { label: 'Hiperfosfatemia', value: '300–600 mg/dose 3×/dia após refeições por até 4 semanas' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Constipação', 'Náusea', 'Vômitos', 'Desconforto abdominal', 'Encefalopatia',
      'Depleção de fósforo', 'Descoloração fecal',
      'Uso prolongado: acúmulo de alumínio, hipofosfatemia',
    ],
    contraindications: ['Insuficiência renal', 'Gravidez', 'Lactação'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Altera absorção de: digoxina, ferro, anticolinérgicos, barbitúricos, quinina, varfarina, tetraciclina, vitaminas.' },
  },
  {
    id: 'hidroxido-magnesio',
    name: 'Hidróxido de Magnésio',
    category: 'gastro',
    observations: 'Antiácido não sistêmico potente com efeito laxativo. Não produz alcalose sistêmica. Como laxante, efeito em 30 min–6 h. Não usar > 14 dias como antiácido nem > 3 dias como laxante.',
    brands: ['Leite de Magnésia — susp. oral 1282,5 mg/15 mL'],
    presentations: [{ label: 'Suspensão oral 1282,5 mg/15 mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '2 a 5 anos', value: '5–15 mL/dia 1–2×/dia' },
          { label: '6 a 11 anos', value: '15–30 mL/dia 1–2×/dia' },
          { label: 'Azia', value: '2,5–5 mL/dose 4×/dia' },
          { label: 'Constipação', value: '0,5–1 mL/kg/dose 1–2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Azia e má digestão', value: '400–1200 mg/dose ou 5–15 mL 4–5×/dia. Máx: 4800 mg/dia' },
          { label: 'Laxante', value: '2400–4800 mg ou 30–60 mL em dose única' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar' }],
    sideEffects: [
      'Efeito laxativo',
      'Hipermagnesemia (hipotensão, depressão respiratória — risco maior em idosos, lactentes < 1 ano e IRC)',
      'Hipofosfatemia e hipocalcemia secundárias',
    ],
    contraindications: ['Insuficiência renal'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Altera absorção de: digoxina, ferro, anticolinérgicos, barbitúricos, quinina, varfarina, tetraciclina, vitaminas.' },
  },
  {
    id: 'malgradato',
    name: 'Malgradato',
    suffix: 'Aluminato de magnésio',
    category: 'gastro',
    observations: 'Antiácido com efeito laxativo. Associação com simeticona auxilia em distensão gasosa. Melhor tomar 1–2 h após refeições e ao deitar. Não usar > 14 dias.',
    brands: [
      'Riopan — susp. oral 400 mg/5 mL',
      'Malgradato + simeticona — comp. mastigável 800 + 100 mg; susp. 400 + 50 mg/5 mL',
    ],
    presentations: [
      { label: 'Suspensão oral 400 mg/5 mL' },
      { label: 'Comprimido mastigável 800 + 100 mg' },
    ],
    doses: [
      {
        group: 'Adultos — Azia e distúrbios funcionais',
        items: [{ label: 'Dose', value: '800 mg ou 10 mL/dose 4×/dia. Máx: 6400 mg ou 80 mL/dia' }],
      },
    ],
    sideEffects: ['Efeito laxativo', 'Hipofosfatemia', 'Acúmulo de magnésio (especialmente em IRC)'],
    contraindications: ['Insuficiência renal', 'Gravidez', 'Lactação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'subcitrato-bismuto',
    name: 'Subcitrato de Bismuto',
    category: 'gastro',
    observations: 'Ação antissecretora e bactericida. Útil na cicatrização de úlceras e no tratamento de H. pylori. Deglutir inteiro com água, longe das refeições. Não tomar com antiácidos.',
    brands: ['Peptulan — comp. revestido 120 mg'],
    presentations: [{ label: 'Comprimido revestido 120 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica', value: '240 mg/dose 2×/dia por 4–8 semanas. Aguardar 8 sem para repetir. Tomar 30 min antes café e jantar. Máx: 480 mg/dia' },
          { label: 'Erradicação H. pylori (casos refratários)', value: '480 mg/dia 2×/dia + IBP + amoxicilina/tetraciclina ± nitroimidazólico por 7–10 dias' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar' }],
    sideEffects: [
      'Náusea', 'Vômito', 'Cefaleia', 'Tontura', 'Constipação', 'Diarreia',
      'Escurecimento das fezes',
      'Uso prolongado: escurecimento de língua e dentes; impactação fecal em debilitados',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Diminui absorção de ferro e cálcio.' },
  },
  {
    id: 'associacoes-antiacidas',
    name: 'Associações Antiácidas (Al + Mg)',
    category: 'gastro',
    observations: 'A associação hidróxido de alumínio + hidróxido de magnésio visa anular efeitos constipantes e laxativos. Dose-padrão: 800 mg (Al+Mg)/dose 4×/dia. Efeito dura ~2 h. Usar > Mg se constipação crônica; > Al se tendência à diarreia. Não usar de forma contínua ou prolongada.',
    brands: [
      'Alka-gel, Droxaine, Gastrobion, Gastrogel, Kolantyl, Maalox, Magnazia, Mylanta Plus, Simeco Plus',
      'Associações com simeticona, bicarbonato, alginato, carbonato de cálcio também disponíveis',
    ],
    presentations: [
      { label: 'Comprimidos e suspensões orais variadas' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Dose usual', value: '800 mg (Al+Mg)/dose 4×/dia' }],
      },
    ],
    sideEffects: [
      'Alcalose metabólica', 'Sobrecarga de sódio e cálcio', 'Risco de hipertensão arterial', 'Litíase renal',
      'Interações frequentes com outros medicamentos',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Podem mascarar sintomas de câncer gástrico. Uso com dieta rica em leite aumenta risco de litíase renal.' },
  },
];

export const antagonistasH2 = [
  {
    id: 'cimetidina',
    name: 'Cimetidina',
    category: 'gastro',
    observations: 'Anti-histamínico H2 de menor tempo de ação (6–8 h) e menor potência. Maior capacidade de interação com CYP450 e maior incidência de efeitos colaterais. Melhor evitar em crianças. Evitar em idosos com delirium ou comprometimento cognitivo. Infusão EV rápida: hipotensão e arritmia.',
    brands: ['Tagamet / Cimetidina — comp. revestido 200 e 400 mg; ampola 150 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 200 mg e 400 mg' },
      { label: 'Ampola 150 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar)',
        items: [
          { label: 'Oral/IM/EV', value: '20–40 mg/kg/dia ÷ 2–4 doses' },
          { label: 'RN', value: '5–10 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Lactentes', value: '10–20 mg/kg/dia ÷ 2–4 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica oral', value: '400 mg 2×/dia ou 800 mg ao deitar por 4–8 sem. Manutenção: 400 mg ao deitar' },
          { label: 'Úlcera EV/IM', value: '300 mg/dose a cada 6–8 h; ou 37,5 mg/h infusão contínua. Máx: 2400 mg/dia' },
          { label: 'Refluxo GE', value: '1600 mg/dia ÷ 2–4 doses por 12 semanas' },
          { label: 'Erradicação H. pylori', value: '400 mg 2×/dia + antimicrobianos' },
          { label: 'Zollinger-Ellison oral', value: 'Iniciar 300 mg/dose 4×/dia; ajustar conforme resposta' },
          { label: 'Azia', value: '200 mg/dose 1–2×/dia 30 min antes das refeições' },
          { label: 'Urticária aguda grave', value: '400 mg 2×/dia + anti-histamínico H1' },
          { label: 'Profilaxia aspiração ácida', value: '400 mg VO na noite anterior + 400 mg IM 2 h antes da indução' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: '50% da dose' },
      { label: 'ClCr 10–50 mL/min', value: 'Máx 300 mg a cada 12 h' },
    ],
    sideEffects: [
      'Cansaço', 'Tontura', 'Sonolência', 'Psicose', 'Agitação', 'Confusão mental', 'Cefaleia',
      'Convulsão', 'Diarreia', 'Náusea', 'Vômito', 'Constipação',
      'Bradicardia', 'Hipotensão', 'Arritmia', 'Taquicardia', 'Parada cardíaca', 'Bloqueio AV',
      'Broncoespasmo', 'Mialgia', 'Erupção cutânea', 'Alopecia', 'Stevens-Johnson',
      'Ginecomastia', 'Galactorreia', 'Impotência', 'Oligospermia', 'Redução da libido',
      'Trombocitopenia', 'Neutropenia', 'Leucopenia', 'Agranulocitose', 'Aplasia medular',
      'Hepatite', 'Nefrite intersticial', 'Febre', 'Pancreatite',
      'Uso prolongado: risco de deficiência de B12; pode mascarar câncer gástrico',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Potente inibidor CYP450: interage com teofilina, varfarina, fenitoína, tricíclicos, benzodiazepínicos, sulfonilureias. Reduz eficácia de cetoconazol e clopidogrel.' },
  },
  {
    id: 'famotidina',
    name: 'Famotidina',
    category: 'gastro',
    observations: 'Anti-histamínico H2. Age por até 12 h, não altera metabolismo de outros fármacos. Tão eficaz quanto ranitidina. Melhor evitar em crianças (forma farmacêutica inadequada). Dose única ao deitar com água. Evitar em idosos com delirium.',
    brands: ['Famox — comp. 20 e 40 mg'],
    presentations: [{ label: 'Comprimido 20 mg e 40 mg' }],
    doses: [
      {
        group: 'Crianças (melhor evitar)',
        items: [{ label: 'Dose', value: '0,5 mg/kg/dose 1–2×/dia por até 8 semanas. Se necessário: até 1 mg/kg/dose 2×/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica', value: '40 mg/dia 1–2×/dia por 4–8 sem. Manutenção: 20 mg ao deitar' },
          { label: 'Refluxo leve a moderado', value: '20 mg 2×/dia por 6 semanas. Refratário: dobrar a dose' },
          { label: 'Erradicação H. pylori', value: '40 mg/dia + antimicrobianos' },
          { label: 'Zollinger-Ellison', value: '20 mg/dose 4×/dia; refratários: até 160 mg/dose 4×/dia' },
          { label: 'Esofagite erosiva', value: '20–40 mg 2×/dia por até 12 semanas' },
          { label: 'Azia', value: '10–20 mg 1–2×/dia 30 min antes da refeição' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '10–50% da dose' },
      { label: 'ClCr < 10 mL/min', value: '10% da dose' },
    ],
    sideEffects: [
      'Tontura', 'Sonolência', 'Cefaleia', 'Agitação', 'Mialgia', 'Vômito', 'Constipação', 'Diarreia',
      'Fadiga', 'Rabdomiólise', 'Artralgia', 'Ansiedade', 'Alucinação', 'Insônia', 'Convulsão',
      'Pneumonia intersticial', 'Anorexia', 'Bloqueio AV', 'Broncoespasmo', 'Redução da libido',
      'Hepatite', 'Aumento de enzimas hepáticas', 'Palpitação', 'Trombocitopenia',
      'Raros: Stevens-Johnson, anafilaxia, angioedema, urticária',
      'Uso prolongado: risco de deficiência de B12; pode mascarar câncer gástrico',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar com drogas que prolongam QT.' },
  },
  {
    id: 'ranitidina',
    name: 'Ranitidina',
    category: 'gastro',
    observations: 'Anti-histamínico H2 com melhor perfil de segurança da classe e único indicado para crianças. Age por até 8 h, quase não altera metabolismo de outros fármacos. Dose única ao deitar. Injeção EV rápida: bradicardia. Evitar em idosos com delirium. 1 gota = 2 mg.',
    brands: ['Antak / Ranidin / Ranitidina — comp. 150 e 300 mg; xarope 75 mg/5 mL; gotas 40 mg/mL; ampola 25 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 150 mg e 300 mg' },
      { label: 'Xarope 75 mg/5 mL' },
      { label: 'Gotas 40 mg/mL (1 gota = 2 mg)' },
      { label: 'Ampola 25 mg/mL' },
    ],
    doses: [
      {
        group: 'RN prematuro',
        items: [{ label: 'Profilaxia sangramento EV', value: '0,5 mg/kg/dose 2×/dia' }],
      },
      {
        group: 'RN a termo',
        items: [
          { label: 'Profilaxia sangramento EV', value: '1,5–3 mg/kg/dia ÷ 3 doses; ou bolus 1,5 mg/kg + infusão 0,04–0,08 mg/kg/h' },
          { label: 'Refluxo GE oral', value: '2 mg/kg/dose 3×/dia' },
        ],
      },
      {
        group: 'Crianças ≥ 1 mês',
        items: [
          { label: 'EV geral', value: '2–6 mg/kg/dia ÷ 3–4 doses. Máx: 50 mg/dose ou 200 mg/dia' },
          { label: 'Refluxo GE oral', value: '5–10 mg/kg/dia ÷ 2 doses. Máx: 300 mg/dia' },
          { label: 'Úlcera péptica oral', value: '4–8 mg/kg/dia ÷ 2–3 doses por 8 semanas. Máx: 300 mg/dia' },
          { label: 'Esofagite erosiva oral', value: '5–10 mg/kg/dia. Máx: 150 mg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica oral', value: '150 mg 2×/dia ou 300 mg ao deitar. Manutenção: 150 mg ao deitar' },
          { label: 'Úlcera EV/IM', value: '50 mg/dose 3–4×/dia. Máx: 400 mg/dia. Infusão contínua: 6,25 mg/h' },
          { label: 'Refluxo GE', value: '150 mg 2×/dia (dobrar nos refratários). Profilaxia: 150 mg ao deitar' },
          { label: 'Esofagite erosiva', value: '150 mg 4×/dia. Manutenção: 150 mg 2×/dia' },
          { label: 'Zollinger-Ellison oral', value: 'Iniciar 150 mg 2×/dia; ajustar até 6 g/dia' },
          { label: 'Azia', value: '300 mg/dia. Manutenção: 150 mg/dose' },
          { label: 'Urticária aguda grave', value: '150 mg 2×/dia + anti-histamínico H1' },
          { label: 'Prevenção vômitos por quimio ou transfusão EV', value: '50 mg dose única 30 min antes' },
          { label: 'Hemorragia por úlcera EV', value: '50 mg a cada 8 h, diluído em 100 mL SF em 15–20 min' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Adultos com IRC', value: '150 mg VO ou 50 mg EV a cada 24 h' },
      { label: 'Crianças ClCr 30–50 mL/min', value: '2 mg/kg VO ou 1 mg/kg EV a cada 12 h' },
      { label: 'Crianças ClCr 10–29 mL/min', value: '1 mg/kg VO ou 0,5 mg/kg EV a cada 12 h' },
      { label: 'Crianças ClCr < 10 mL/min', value: '1 mg/kg VO ou 0,5 mg/kg EV a cada 24 h' },
    ],
    sideEffects: [
      'Dor abdominal', 'Constipação', 'Diarreia', 'Náusea', 'Vômitos', 'Cefaleia',
      'Agitação', 'Confusão', 'Tontura', 'Depressão', 'Ansiedade', 'Sonolência',
      'Alucinações', 'Insônia', 'Vertigem', 'Bradicardia', 'Bloqueio AV', 'Taquicardia', 'Vasculite',
      'Anafilaxia', 'Angioedema', 'Stevens-Johnson', 'Eritema multiforme', 'Necrólise epidérmica tóxica',
      'Alopecia', 'Erupção cutânea', 'Broncoespasmo', 'Pancreatite',
      'Leucopenia', 'Trombocitopenia', 'Agranulocitose', 'Anemia aplásica', 'Pancitopenia',
      'Ginecomastia', 'Hepatite colestática', 'Insuficiência hepática (raro)',
      'Artralgia', 'Mialgia', 'Nefrite intersticial',
      'Uso prolongado: risco de deficiência de B12; pode mascarar câncer gástrico',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Acima de 400 mg/dia, inibe mais CYP450: aumenta nível de teofilina, varfarina, fenitoína, tricíclicos, benzodiazepínicos, sulfonilureias.' },
  },
];

const ibpAlertaComum = 'ALERTAS IBP — Efeitos comuns: dor abdominal, diarreia, constipação, flatulência, náusea, vômitos, cefaleia, tontura, tosse. Uso prolongado: risco de hipomagnesemia, déficit de B12/ferro/cálcio, fraturas, pneumonia, infecção por C. difficile. Raros/graves: lúpus, Stevens-Johnson, necrólise epidérmica tóxica, anafilaxia, rabdomiólise, nefrite intersticial, pancreatite.';

export const ibp = [
  {
    id: 'dexlansoprazol',
    name: 'Dexlansoprazol',
    category: 'gastro',
    observations: 'Enantiômero do lansoprazol, eficácia semelhante. ' + ibpAlertaComum,
    brands: ['Dexilant — cápsula retard 20 e 60 mg'],
    presentations: [{ label: 'Cápsula retard 20 mg e 60 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Esofagite não erosiva', value: '30 mg/dia por 4 semanas' },
          { label: 'Esofagite erosiva', value: '60 mg/dia por até 8 semanas' },
          { label: 'Manutenção', value: '30 mg/dia por até 6 meses' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Diarreia', 'Dor abdominal', 'Náusea', 'Vômito', 'Flatulência', 'Sintomas gripais',
      'Alergia', 'Raro: anafilaxia, Stevens-Johnson',
      'Uso prolongado: osteoporose e fraturas',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'esomeprazol',
    name: 'Esomeprazol',
    category: 'gastro',
    observations: 'Eficaz como omeprazol. Mais eficaz que antagonistas H2 para úlceras e esofagites, mas pode levar até 4 dias para efeito pleno. Tomar com água 1 h antes do desjejum. Insuficiência hepática: máx 20 mg/dia. ' + ibpAlertaComum,
    brands: ['Nexium / Esomeprazol — comp. retard 20 e 40 mg; fr-amp. 40 mg'],
    presentations: [
      { label: 'Comprimido retard 20 mg e 40 mg' },
      { label: 'Frasco-ampola 40 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Esofagite erosiva EV (< 1 ano)', value: '0,5 mg/kg/dose 1×/dia por até 10 dias' },
          { label: 'Esofagite erosiva EV (1–12 anos)', value: '10 mg/dose 1×/dia por até 10 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera ou refluxo', value: '20–40 mg/dia 1×/dia por 4–8 semanas (EV: até 10 dias)' },
          { label: 'Esofagite erosiva oral', value: '20–40 mg/dia por 4–8 sem. Manutenção: 20 mg/dia. Azia: 20 mg/dia por 14 dias' },
          { label: 'Erradicação H. pylori', value: '40 mg/dia + antimicrobianos por 7 dias' },
          { label: 'Hipersecreção ácida', value: '40 mg 2×/dia; ajustar até 240 mg ou mais' },
          { label: 'Profilaxia hemorragia gástrica EV', value: '80 mg em 30 min imediatamente após endoscopia' },
          { label: 'Profilaxia úlcera por AINEs', value: '20 mg/dia por até 6 meses' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Sonolência', 'Irritabilidade', 'Vertigem', 'Confusão', 'Depressão', 'Mialgia', 'Parestesia',
      'Angioedema', 'Febre', 'Aumento de creatinina', 'Icterícia', 'Trombocitopenia',
      'Hiponatremia', 'Leucopenia', 'Ginecomastia', 'Asma',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar com: clopidogrel, rifampicina, atazanavir, cetoconazol.' },
  },
  {
    id: 'lansoprazol',
    name: 'Lansoprazol',
    category: 'gastro',
    observations: 'Tão eficaz quanto omeprazol, efeito ligeiramente mais rápido. Pode levar até 4 dias para efeito pleno. Não administrar com alimentos ou outros medicamentos. Não abrir, triturar ou partir a cápsula. Tomar 1 h antes do desjejum. Insuficiência hepática grave: melhor evitar. ' + ibpAlertaComum,
    brands: ['Prazol / Lanz / Lansoprazol — cápsula retard 15 e 30 mg'],
    presentations: [{ label: 'Cápsula retard 15 mg e 30 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Refluxo / esofagite erosiva', value: '0,8–4 mg/kg/dia por até 12 semanas' },
          { label: '< 10 kg', value: '7,5 mg/dia' },
          { label: '10–30 kg', value: '15 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera gástrica / esofagite erosiva', value: '30 mg/dia por até 8 sem. Manutenção: 15 mg/dia por até 12 meses' },
          { label: 'Úlcera duodenal / refluxo', value: '15 mg/dia por 4–8 semanas' },
          { label: 'Azia', value: '15 mg/dia por 14 dias (aguardar 4 meses para repetir)' },
          { label: 'Erradicação H. pylori', value: '30 mg 2×/dia + antimicrobianos' },
          { label: 'Hipersecreção ácida', value: '60 mg/dia; ajustar até < 10 mEq/h. Máx: 90 mg 2×/dia' },
          { label: 'Profilaxia úlcera por AINEs', value: '15 mg/dia por até 3 meses' },
          { label: 'Profilaxia úlcera por estresse', value: '30 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Insônia', 'Fadiga', 'Ansiedade', 'Tremor', 'Vertigem', 'Astenia',
      'Dor abdominal', 'Flatulência', 'Diarreia', 'Constipação', 'Vômito', 'Náusea',
      'Alteração do apetite', 'Melena', 'Colite', 'Esofagite',
      'Dispneia', 'Angina', 'Anemia', 'Hemólise', 'Leucopenia', 'Eosinofilia', 'Hipertensão',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Mesmas interações do omeprazol.' },
  },
  {
    id: 'omeprazol',
    name: 'Omeprazol',
    category: 'gastro',
    observations: 'Inibidor de bomba de prótons. Mais eficaz que antagonistas H2 para úlceras e esofagite. Tomar com água 1 h antes do desjejum. Não partir ou triturar. Bolus EV mín 5 min; infusão: mín 20–30 min. Insuficiência hepática: máx 10 mg/dia (crianças). ' + ibpAlertaComum,
    brands: ['Gastrium / Losec Mups / Omeprazol — cáps./comp. 10/20/40 mg; fr-amp. 40 mg; susp. oral 40 mg/10 mL'],
    presentations: [
      { label: 'Cápsula 10 mg, 20 mg e 40 mg' },
      { label: 'Comprimido revestido 10 mg, 20 mg e 40 mg' },
      { label: 'Frasco-ampola 40 mg' },
      { label: 'Suspensão oral 40 mg/10 mL' },
    ],
    doses: [
      {
        group: 'Crianças (> 2 anos)',
        items: [
          { label: 'Refluxo / esofagite oral', value: '0,7–3,3 mg/kg/dia 1×/dia por 4–8 semanas. 10–20 kg: 10 mg/dia; > 20 kg: 20 mg/dia' },
          { label: 'Erradicação H. pylori', value: '1–2 mg/kg/dia ÷ 2 doses. 15–30 kg: 10 mg 2×/dia; > 30 kg: 20 mg 2×/dia' },
          { label: 'Profilaxia úlcera por estresse', value: '1,5–2,0 mg/kg/dia ÷ 3 doses (ajustar para pH > 5)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica', value: '20–40 mg/dia 1×/dia por 4–8 semanas' },
          { label: 'Refluxo GE', value: '20 mg/dia por 4 sem. Refratário: 40 mg/dia 1–2×/dia por até 8 sem' },
          { label: 'Esofagite erosiva', value: '20 mg/dia por 4–8 sem. Refratário: 40 mg/dia. Manutenção: 10–20 mg/dia' },
          { label: 'Azia', value: '20 mg/dia por 14 dias (aguardar 4 meses para repetir)' },
          { label: 'Erradicação H. pylori', value: '20–40 mg/dose 1–2×/dia + antimicrobianos' },
          { label: 'Hipersecreção ácida EV/oral', value: 'Iniciar 60 mg 1×/dia; ajustar. Máx: 80 mg/dose' },
          { label: 'Profilaxia úlcera por AINEs', value: '20 mg/dia por até 6 meses' },
          { label: 'Ressangramento GI EV', value: 'Bolus 80 mg + infusão contínua 8 mg/h por 72 h' },
          { label: 'Profilaxia CTI oral', value: '40 mg/dia. Manutenção: 20–40 mg/dia' },
          { label: 'Profilaxia aspiração ácida EV', value: '40 mg 1 h antes da cirurgia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Diarreia', 'Dor abdominal', 'Flatulência', 'Náusea', 'Vômito', 'Parestesia', 'Astenia', 'Fraqueza',
      'Sonolência', 'Insônia', 'Ansiedade', 'Agitação', 'Alteração do paladar', 'Erupção cutânea',
      'Dor nas costas', 'Neurite', 'Espasmo muscular', 'Hipotensão', 'Hiponatremia', 'Hipofosfatemia',
      'Taquicardia', 'Bradicardia', 'Angina', 'Hepatite', 'Icterícia', 'Hematúria', 'Artralgia',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar com: clopidogrel, rifampicina, atazanavir, cetoconazol. Aumenta nível de: digoxina, diazepam, varfarina.' },
  },
  {
    id: 'pantoprazol',
    name: 'Pantoprazol',
    category: 'gastro',
    observations: 'Tão eficaz quanto omeprazol, tempo de ação maior. Tomar com água 1 h antes do desjejum (versão magnésica: pode tomar com alimento). Não partir ou triturar. Pode ser tomado com antiácidos. EV: diluir para 0,4–0,8 mg/mL; bolus lento 2–3 min; infusão 15–30 min. ' + ibpAlertaComum,
    brands: ['Pantocal / Pantozol / Pantoprazol — comp. revestido 20 e 40 mg; fr-amp. 40 mg'],
    presentations: [
      { label: 'Comprimido revestido 20 mg e 40 mg' },
      { label: 'Frasco-ampola 40 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Refluxo GE', value: '0,6–0,9 mg/kg/dia por 4 semanas. 5–11 anos: 20 mg/dia (refratário: 20–40 mg/dia)' },
          { label: 'Esofagite erosiva 15–40 kg', value: '20 mg/dia' },
          { label: 'Esofagite erosiva > 40 kg', value: '40 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica / esofagite erosiva EV', value: '40 mg/dia por 7–10 dias' },
          { label: 'Úlcera duodenal oral', value: '40 mg/dia por 4–8 semanas' },
          { label: 'Úlcera gástrica / esofagite oral', value: '40 mg/dia por até 8 semanas. Manutenção: 20–40 mg/dia' },
          { label: 'Refluxo GE leve', value: '20 mg/dia por 8 semanas' },
          { label: 'Refluxo GE moderado a grave', value: 'Iniciar 40 mg/dia; reavaliar após 1 mês' },
          { label: 'Erradicação H. pylori', value: '40 mg 2×/dia + antimicrobianos' },
          { label: 'Hipersecreção ácida oral', value: 'Iniciar 40 mg 2×/dia; ajustar' },
          { label: 'Hipersecreção ácida EV', value: 'Iniciar 80 mg 2×/dia. Máx: 7 dias' },
          { label: 'Profilaxia úlcera por AINEs', value: '20 mg/dia' },
          { label: 'Ressangramento GI EV', value: 'Bolus 80 mg + infusão contínua 8 mg/h; ou 40 mg a cada 6–12 h. Após 72 h: oral' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Insônia', 'Ansiedade', 'Depressão', 'Halitose', 'Glossite', 'Anorexia', 'Disfagia',
      'Exantema', 'Edema', 'Febre', 'Distúrbios visuais', 'Polaciúria', 'Dor torácica',
      'Taquicardia', 'Palpitação', 'Hipotensão', 'Hipertensão', 'Hiperglicemia', 'Hiperlipidemia',
      'Artralgia', 'Fraqueza', 'Dispneia', 'Sinusite', 'Leucopenia', 'Trombocitopenia', 'Anemia',
      'EV: deficiência de zinco, tromboflebite',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar uso concomitante com outros medicamentos.' },
  },
  {
    id: 'rabeprazol',
    name: 'Rabeprazol',
    category: 'gastro',
    observations: 'Ligeiramente mais eficaz que omeprazol na redução da acidez, com maior tempo de ação. Insuficiência renal aguda, pielonefrite e insuficiência hepática: melhor evitar. ' + ibpAlertaComum,
    brands: ['Pariet — comp. revestido 10 e 20 mg'],
    presentations: [{ label: 'Comprimido revestido 10 mg e 20 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Refluxo sintomático (≥ 15 kg)', value: '10 mg/dia por 12 semanas' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera péptica', value: '20 mg/dia por 4–6 semanas' },
          { label: 'Refluxo sintomático', value: '20 mg/dia por 4–8 semanas' },
          { label: 'Esofagite erosiva / manutenção', value: '20 mg/dia por 4–8 semanas; manutenção: 20 mg/dia' },
          { label: 'Refluxo não erosivo', value: '10–20 mg/dia por 4 semanas; reavaliar' },
          { label: 'Erradicação H. pylori', value: '20 mg 2×/dia + antimicrobianos' },
          { label: 'Hipersecreção ácida', value: '60 mg 2×/dia; ajustar conforme resposta' },
        ],
      },
    ],
    sideEffects: [
      'Colestase', 'Esofagite', 'Vertigem', 'Albuminúria', 'Dislipidemia',
      'Dor torácica', 'Hipertensão', 'Infarto',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar uso concomitante com outras drogas.' },
  },
];