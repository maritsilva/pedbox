export const antiflatulentos = [
  {
    id: 'simeticona',
    name: 'Simeticona',
    suffix: 'Dimeticona',
    category: 'laxantes-antidiarreicos',
    observations: 'Antifisético redutor da tensão superficial das bolhas gasosas. Não absorvido. Observar concentração por gota entre marcas (2,5 mg/gota a 6,5 mg/gota).',
    brands: ['Luftal / Flagass / Neo Dimeticona / Mylicon / Mylicon — comp. 40 mg; cáps. 125 mg; gotas 75 mg/mL'],
    presentations: [
      { label: 'Comprimido 40 mg' },
      { label: 'Cápsula 125 mg' },
      { label: 'Gotas 75 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose geral', value: '1 mg/kg/dose 1–4×/dia' },
          { label: '< 2 anos', value: '10–20 mg/dose 1–4×/dia. Máx: 240 mg/dia' },
          { label: '2 a 11 anos', value: '20–40 mg/dose 1–4×/dia. Máx: 480 mg/dia' },
          { label: 'Preparo para USG (dia anterior)', value: 'Dose de acordo com a idade ao deitar + 1 dose 1 h antes do exame' },
        ],
      },
      {
        group: 'Adultos — Flatulência / distensão gasosa',
        items: [
          { label: 'Dose', value: '40–360 mg/dose 1–4×/dia. Máx: 500 mg/dia' },
          { label: 'Preparo para USG', value: '40 mg 8/8 h no dia anterior + 40–150 mg 1–4 h antes do exame' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Não absorvido — raramente: eczema de contato, urticária, diarreia, cefaleia, constipação transitória',
    ],
    contraindications: ['Perfuração ou obstrução intestinal', 'Distensão abdominal grave com dor persistente'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const laxantesFibras = [
  {
    id: 'plantago',
    name: 'Plantago',
    suffix: 'Psyllium',
    category: 'laxantes-antidiarreicos',
    observations: 'Fibra coloide formadora de massa. Uso prolongado seguro. Reduz absorção de glicose e colesterol. Ação em até 3 dias. Diluir cada dose em 1 copo de água e tomar mais 1 copo depois. Orientar ingestão de 1–2 L de água/dia.',
    brands: ['Metamucil / Plantaben / Fibra Mais — pó 174/210 g; sachê 5 g; cápsula 500 mg'],
    presentations: [
      { label: 'Pó' },
      { label: 'Sachê 5 g' },
      { label: 'Cápsula 500 mg' },
    ],
    doses: [
      {
        group: 'Crianças 6–11 anos',
        items: [{ label: 'Dose', value: '2–3 g/dose 1–3×/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação / cólon irritável', value: '5 g/dose 1–3×/dia. Máx: 15 g/dia' },
          { label: 'Redução de colesterol', value: '10 g/dia' },
        ],
      },
    ],
    sideEffects: ['Diarreia', 'Cólica', 'Flatulência', 'Distensão abdominal', 'Empachamento'],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Megacólon'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar uso concomitante com outras drogas.' },
  },
  {
    id: 'policarbofila',
    name: 'Policarbofila',
    category: 'laxantes-antidiarreicos',
    observations: 'Fibra sintética hidrofílica que aumenta volume do bolo fecal. Efeito pleno em até 3 dias. Tomar com copo cheio de água durante ou após refeições. Evitar > 1 semana. Orientar 1–2 L de água/dia.',
    brands: ['Benestare / Muvinor — comp. revestido 500 mg'],
    presentations: [{ label: 'Comprimido revestido 500 mg' }],
    doses: [
      {
        group: 'Crianças 6–11 anos',
        items: [{ label: 'Dose', value: '500 mg/dose 1–4×/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '500–1000 mg/dose 2×/dia. Máx: 6 g/dia' },
          { label: 'Diarreia', value: '1000 mg/dose 4×/dia' },
        ],
      },
    ],
    sideEffects: ['Náusea', 'Vômitos', 'Cólicas', 'Flatulência', 'Constipação (se ingestão de água insuficiente)'],
    contraindications: ['Obstrução intestinal', 'Megacólon'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar uso concomitante com outras drogas.' },
  },
];

export const laxantesCatarticos = [
  {
    id: 'bisacodil',
    name: 'Bisacodil',
    category: 'laxantes-antidiarreicos',
    observations: 'Irritante da mucosa intestinal. Ação em 6–12 h. Deglutir inteiro com água, longe das refeições. Não tomar com antiácidos. Evitar > 7 dias.',
    brands: ['Bisalax / Dulcolax / Lacto Purga — drágea/comp. revestido 5 mg'],
    presentations: [{ label: 'Drágea / comprimido revestido 5 mg' }],
    doses: [
      {
        group: 'Crianças > 6 anos',
        items: [{ label: 'Constipação', value: '5 mg/dia. Máx: 10 mg/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação refratária', value: '5–10 mg/dia ao deitar. Máx: 30 mg/dia' },
          { label: 'Preparo intestinal', value: '10–20 mg na noite anterior ao procedimento' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Náusea', 'Vômito', 'Cólicas', 'Diarreia', 'Melanose colônica', 'Atonia do cólon',
      'Taquifilaxia', 'Desequilíbrio eletrolítico', 'Desidratação', 'Oligúria',
      'Uso crônico: íleo adinâmico, nefrite, doença inflamatória intestinal, constipação crônica',
    ],
    contraindications: ['Íleo paralítico', 'Apendicite', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'extratos-vegetais-laxantes',
    name: 'Extratos Vegetais (Sene / Cáscara-Sagrada)',
    category: 'laxantes-antidiarreicos',
    observations: 'Irritante da mucosa intestinal. Ação em 8–12 h. Tomar com água preferencialmente ao deitar. Usar a menor dose eficaz por não mais de 7 dias. Uso crônico: lesão do plexo mioentérico e risco de câncer de cólon.',
    brands: ['Sene Alexandrina / Cassia angustifolia — cáps./comp. com senosídeos variados'],
    presentations: [{ label: 'Cápsulas ou comprimidos com senosídeos' }],
    doses: [
      {
        group: 'Crianças > 6 anos',
        items: [{ label: 'Senosídeos', value: '8,6–15 mg/dia. Máx: 17,2 mg/dose 2×/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Senosídeos', value: '17,2–26,4 mg/dose 1–2×/dia. Máx: 34,4 mg/dose 2×/dia' },
          { label: 'Cáscara-sagrada', value: '20–30 mg/dia 1×/dia' },
        ],
      },
    ],
    sideEffects: [
      'Diarreia', 'Cólicas', 'Vômitos', 'Desequilíbrio hidroeletrolítico', 'Desidratação',
      'Pigmentação melanótica', 'Descoloração da urina', 'Atonia intestinal',
      'Fissura anal', 'Prolapso hemorroidário',
    ],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Íleo paralítico', 'Apendicite', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'fosfato-sodio-enema',
    name: 'Fosfato de Sódio (Enema)',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante osmótico salino de uso retal. Efeito imediato: 2–5 min. Aplicar deitado. Evitar > 7 dias.',
    brands: ['Phosfoenema / Fleet Enema — frasco enema 130 mL'],
    presentations: [{ label: 'Frasco enema 130 mL' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose geral', value: '2–4 mL/kg. Máx: 120 mL' },
          { label: '2 a 5 anos', value: '≈ 1/4 do frasco' },
          { label: '6 a 12 anos', value: '≈ 1/2 frasco' },
        ],
      },
      {
        group: 'Adultos — Impactação / preparo',
        items: [{ label: 'Dose', value: '1 frasco de enema/vez' }],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Cólica', 'Diarreia', 'Flatulência', 'Irritação retal', 'Sangramento', 'Prurido',
      'Hipernatremia', 'Hiperfosfatemia', 'Hipocalcemia', 'Hipocalemia',
    ],
    contraindications: ['Obstrução intestinal', 'Apendicite', 'Insuficiência cardíaca'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'glicerina',
    name: 'Glicerina',
    suffix: 'Glicerol',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante de efeito imediato. Escolha para gestantes e idosos. Aplicar deitado. Uso esporádico. Uso repetido pode criar dependência de estímulo para evacuação em crianças.',
    brands: ['Glicel / Glycelax / Supositório de glicerina — supositório infantil e adulto; solução retal'],
    presentations: [
      { label: 'Supositório infantil' },
      { label: 'Supositório adulto' },
      { label: 'Solução retal' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Supositório infantil (0–6 anos)', value: '1 dose em situações agudas' },
          { label: 'Enema 12%', value: '20–100 mL ou 10–20 mL/kg/dose' },
          { label: 'RN', value: '0,5–2 mL/kg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Constipação / preparo', value: '1 supositório adulto ou 250–500 mL de enema' }],
      },
    ],
    sideEffects: [
      'Diarreia', 'Tenesmo', 'Cólica', 'Flatulência', 'Irritação retal', 'Sangramento', 'Prurido',
      'Enema: risco de trauma mecânico, dor abdominal e vômitos',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lactulose',
    name: 'Lactulose',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante osmótico. Uso prolongado seguro. Efeito pleno em 3–4 dias. Produz H₂ no intestino (risco de explosão com eletrocauterização). Colonoscopia: tomar ≥ 2,5 L de líquidos.',
    brands: ['Lactulona / Lactulose / Farlac / Colact — xarope 667 mg/mL; sachê 15 mL'],
    presentations: [
      { label: 'Xarope 667 mg/mL' },
      { label: 'Sachê 15 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Constipação', value: '1,5–3 mL/kg/dia 1–2×/dia' },
          { label: 'Desimpactação fecal', value: '2 mL/kg/dose por 2–7 dias' },
          { label: 'Lactentes', value: 'Iniciar 2,5–10 mL/dia ÷ 3–4 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '15–30 mL/dia 1×/dia ou ÷ 2 doses. Máx: 60 mL/dia' },
          { label: 'Preparo para colonoscopia', value: 'Diluir 200 mL em 1 L de limonada; tomar 1 copo a cada 15 min iniciando 6–8 h antes' },
          { label: 'Encefalopatia hepática oral', value: '20–45 mL/dose a cada 1–6 h; ajustar para 3–4 doses/dia visando 2–3 evacuações pastosas' },
          { label: 'Encefalopatia hepática enema', value: 'Diluir 300 mL em 700 mL de AD ou SF; reter 30–60 min; repetir a cada 4–6 h' },
        ],
      },
    ],
    sideEffects: [
      'Flatulência', 'Cólica', 'Distensão abdominal', 'Diarreia',
      'Hiponatremia', 'Hipoalbuminemia', 'Desidratação',
      'Uso prolongado: desequilíbrio eletrolítico',
    ],
    contraindications: ['Obstrução intestinal', 'Apendicite', 'Intolerância à lactose', 'Galactosemia'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lactitol',
    name: 'Lactitol',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante osmótico semelhante à lactulose.',
    brands: ['Malvado / Fontolax — solução 10 g/15 mL; sachê 10 g'],
    presentations: [
      { label: 'Solução 10 g/15 mL' },
      { label: 'Sachê 10 g' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Constipação', value: '1,5–3 mL/kg/dia 1–2×/dia' },
          { label: 'Desimpactação fecal', value: '2 mL/kg/dose 2×/dia' },
        ],
      },
    ],
    sideEffects: ['Flatulência', 'Cólica', 'Distensão abdominal', 'Diarreia', 'Hiponatremia', 'Desidratação'],
    contraindications: ['Risco de desequilíbrio eletrolítico'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'macrogol-muvinlax',
    name: 'Macrogol + Eletrólitos',
    suffix: 'Polietilenoglicol + NaCl + KCl + NaHCO₃',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante osmótico de alto peso molecular. Ação em 2–4 dias. Uso prolongado possível com acompanhamento. Dissolver em água, tomar preferencialmente pela manhã. Evitar > 2 semanas.',
    brands: ['Muvinlax — sachê 14 g'],
    presentations: [{ label: 'Sachê 14 g' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Constipação', value: '0,2–0,8 g/kg/dia 1×/dia' },
          { label: 'Desimpactação fecal', value: '1–1,5 g/kg/dia 1–2×/dia por 1–3 dias. Máx: 100 g/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação crônica', value: '1–2 sachês/dia' },
          { label: 'Preparo intestinal', value: 'Diluir 8 sachês em 1 L de água; tomar 1 copo a cada 10 min (até 4 L)' },
        ],
      },
    ],
    sideEffects: ['Cólicas', 'Empachamento', 'Flatulência', 'Diarreia', 'Uso prolongado: desequilíbrio eletrolítico'],
    contraindications: ['Obstrução intestinal', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'polietilenoglicol-peg4000',
    name: 'Polietilenoglicol 4000',
    suffix: 'PEG 4000',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante osmótico. Sem sabor ou cheiro, pode ser dissolvido em água ou suco claro.',
    brands: ['PEG 4000 — manipulado em sachê ou envelope'],
    presentations: [{ label: 'Pó manipulado (sachê/envelope)' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Desimpactação', value: '0,5–2 g/kg/dia por 3–6 dias' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Preparo intestinal', value: '120–240 g em 2–4 L de líquido claro' },
          { label: 'Constipação crônica', value: '8–25 g/dia' },
        ],
      },
    ],
    sideEffects: ['Empachamento', 'Cólicas', 'Náusea', 'Vômitos', 'Flatulência', 'Diarreia', 'Irritação anal', 'Alergia', 'Urticária'],
    contraindications: ['Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Risco de aspiração em pacientes com desordem neurológica.' },
  },
  {
    id: 'oleo-mineral',
    name: 'Óleo Mineral',
    suffix: 'Petrolato líquido',
    category: 'laxantes-antidiarreicos',
    observations: 'Emoliente laxativo eventual. Ação em até 8 h. Tomar ao deitar, longe das refeições. Evitar em acamados e com dificuldade de deglutição. Evitar > 1 semana. Se visível nas fezes: dose excessiva. RISCO DE ASPIRAÇÃO — pneumonia lipídica.',
    brands: ['Laxenol / Nujol / Purulim — frasco 100–120 mL'],
    presentations: [{ label: 'Frasco 100–120 mL' }],
    doses: [
      {
        group: 'Crianças (evitar < 1 ano)',
        items: [{ label: 'Constipação', value: '1–2 mL/kg/dia ou 5–15 mL/dose 1–2×/dia. Máx: 40 mL/dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Constipação', value: 'Iniciar 15 mL/dia 1–2×/dia; ajustar conforme efeito. Máx: 45 mL/dia' }],
      },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Cólica',
      'Risco de aspiração → pneumonia lipídica',
      'Uso prolongado: má absorção de vitaminas lipossolúveis',
    ],
    contraindications: ['Refluxo', 'Apendicite', 'Diverticulite', 'Idosos', 'Gestantes'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'picossulfato-sodio',
    name: 'Picossulfato de Sódio',
    category: 'laxantes-antidiarreicos',
    observations: 'Irritante da mucosa intestinal. Ação em 6–12 h. Tomar preferencialmente ao deitar. 1 gota = 0,5 mg. Não usar na constipação da síndrome do intestino irritável.',
    brands: ['Guttalax / Rapilax / Diltin — gotas 7,5 mg/mL'],
    presentations: [{ label: 'Gotas 7,5 mg/mL (1 gota = 0,5 mg)' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Até 4 anos', value: '0,25 mg/kg/dia' },
          { label: '4 a 10 anos', value: '2,5–5 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Constipação refratária',
        items: [{ label: 'Dose', value: '5–10 mg/dia ao deitar' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Desconforto abdominal', 'Cólicas', 'Diarreia', 'Desequilíbrio eletrolítico',
      'Tontura', 'Cefaleia', 'Vômitos', 'Náusea', 'Erupção cutânea', 'Angioedema',
    ],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Apendicite', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'picossulfato-oxido-magnesio',
    name: 'Picossulfato + Óxido de Magnésio + Ácido Cítrico',
    category: 'laxantes-antidiarreicos',
    observations: 'Usado principalmente em preparos para colonoscopia/cirurgias, geralmente em conjunto com bisacodil. Início de ação: 1–2 h. Dissolver em 1 copo de água, tomar quando cessar efervescência. Tomar 1–1,5 L de água após cada sachê.',
    brands: ['Picolprep — sachê 10 + 3500 + 12000 mg'],
    presentations: [{ label: 'Sachê 10 + 3500 + 12000 mg' }],
    doses: [
      {
        group: 'Adultos — Preparo para procedimentos',
        items: [{ label: 'Dose', value: '1 sachê 12 h antes + 1 sachê 6 h antes do exame' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Náusea', 'Vômito', 'Cólicas', 'Flatulência', 'Irritação anal', 'Diarreia',
      'Alteração do paladar', 'Hipotensão', 'Hipernatremia', 'Hipocalemia', 'Desidratação',
    ],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Apendicite', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'sorbitol-enema',
    name: 'Sorbitol 70% (Enema)',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante hiperosmótico de uso retal. Ação em 5–40 min. Aplicar deitado, cânula suavemente.',
    brands: ['Minilax Enema — bisnaga 6,5 g de sorbitol 70%'],
    presentations: [{ label: 'Bisnaga 6,5 g (sorbitol 70%)' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Dose', value: '1/2 a 1 bisnaga via retal em dose única' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Constipação / fecaloma', value: '1 bisnaga (fecaloma: 2 doses)' }],
      },
    ],
    sideEffects: ['Diarreia', 'Cólica', 'Náusea', 'Distensão abdominal', 'Flatulência'],
    contraindications: ['Retocolite hemorrágica', 'Hemorragias agudas'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'sulfato-magnesio-laxante',
    name: 'Sulfato de Magnésio',
    suffix: 'Sal Amargo',
    category: 'laxantes-antidiarreicos',
    observations: 'Laxante: efeito em 30 min–6 h. Antiácido: efeito imediato. Dissolver em copo cheio de água. Evitar > 1 semana.',
    brands: ['Sal Amargo — pó 25–30 g; sachê 15 g'],
    presentations: [
      { label: 'Pó 25–30 g' },
      { label: 'Sachê 15 g' },
    ],
    doses: [
      {
        group: 'Crianças 6–11 anos',
        items: [{ label: 'Constipação', value: '5 g/dose 1×/dia; repetir após 4–6 h se necessário. Máx: 2 doses/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '10 g em dose única; repetir após 6 h. Máx: 2 doses/dia' },
          { label: 'Azia', value: '5 g/dose 1–4×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Desconforto abdominal', 'Cólica', 'Diarreia',
      'Hipermagnesemia → hipotensão e depressão respiratória (risco em IRC, idosos, < 1 ano)',
      'Hipofosfatemia e hipocalcemia secundárias',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const antidiarreicos = [
  {
    id: 'loperamida',
    name: 'Loperamida',
    category: 'laxantes-antidiarreicos',
    observations: 'Inibidor de peristaltismo com propriedades antissecretórias leves. Usar principalmente na diarreia do viajante. Melhor evitar em crianças < 6 anos. ALERTA FDA 2016: excesso de dose pode causar eventos cardíacos fatais. Proibidas formulações infantis. Suspender após fezes sólidas ou 24 h sem evacuação. Evitar em idosos com delirium.',
    brands: ['Imosec / Diasec / Kaosec — comp. 2 mg'],
    presentations: [{ label: 'Comprimido 2 mg' }],
    doses: [
      {
        group: 'Crianças > 6 anos (melhor evitar)',
        items: [{ label: 'Dose', value: '0,1 mg/kg/dose' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Diarreia aguda / AIDS / cólon irritável', value: 'Dose inicial 4 mg; manutenção 2 mg/dose 1–4×/dia. Máx: 16 mg/dia. Interromper se sem melhora após 10 dias.' },
          { label: 'Diarreia do viajante', value: '2 mg após cada diarreia. Iniciar com 4 mg. Máx: 8 mg/dia' },
          { label: 'Diarreia por quimioterapia', value: '2 mg a cada 2 h (dia) / 4 h (noite) até 12 h sem diarreia. Máx: 16 mg/24 h' },
        ],
      },
    ],
    sideEffects: [
      'Sedação', 'Sonolência', 'Fadiga', 'Tontura', 'Náusea', 'Vômito', 'Constipação',
      'Cólica abdominal', 'Distensão abdominal', 'Boca seca', 'Erupção cutânea', 'Alergia',
      'Hiperpigmentação',
      'ATENÇÃO: em caso de constipação, cólicas intensas, distensão ou sangue nas fezes — interromper imediatamente',
    ],
    contraindications: [
      'Dor abdominal sem diarreia', 'Disenteria aguda sem antibioticoterapia',
      'Colite ulcerativa aguda', 'Enterocolite bacteriana', 'Colite pseudomembranosa',
      'Crianças < 2 anos',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'racecadotrila',
    name: 'Racecadotrila',
    category: 'laxantes-antidiarreicos',
    observations: 'Antidiarreico não opioide com atividade antissecretora. Evitar > 10 dias. Associar com reidratação oral em casos selecionados.',
    brands: ['Tiorfan / Racecadotrila — sachê 10 mg e 30 mg; cápsula 100 mg'],
    presentations: [
      { label: 'Sachê 10 mg e 30 mg' },
      { label: 'Cápsula 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 3 meses',
        items: [
          { label: 'Dose geral', value: '1,5 mg/kg/dose 3×/dia' },
          { label: '< 9 kg', value: '10 mg a cada 8 h' },
          { label: '9 a 13 kg', value: '20 mg a cada 8 h' },
          { label: '> 13 kg', value: '30 mg a cada 8 h' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Diarreia', value: '100 mg/dose a cada 8 h por até 7 dias. Dose inicial: 200 mg' },
          { label: 'Diarreia da AIDS', value: '100–300 mg/dose 3×/dia' },
        ],
      },
    ],
    sideEffects: [
      'Tontura', 'Mal-estar', 'Cefaleia', 'Sonolência', 'Vertigem',
      'Constipação', 'Náusea', 'Vômitos', 'Distensão abdominal',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'salicilato-bismuto',
    name: 'Salicilato de Bismuto',
    category: 'laxantes-antidiarreicos',
    observations: 'Efeito antissecretor e anti-inflamatório. Útil na diarreia do viajante e gastroenterite aguda. A maioria dos efeitos colaterais é pelo salicilato. Evitar uso prolongado.',
    brands: ['Peptozil — suspensão oral 262 mg/15 mL'],
    presentations: [{ label: 'Suspensão oral 262 mg/15 mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Diarreia ou azia', value: '524 mg (30 mL)/dose a cada 30 min–1 h se necessário por até 2 dias. Máx: 8 doses/dia' },
          { label: 'Erradicação H. pylori', value: '525 mg (30 mL)/dose 4×/dia + IBP + amoxicilina/tetraciclina + metronidazol por 10–14 dias' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar' }],
    sideEffects: [
      'Confusão', 'Ansiedade', 'Cefaleia', 'Depressão', 'Fraqueza', 'Náusea', 'Vômito', 'Diarreia',
      'Fezes acinzentadas', 'Neurotoxicidade em altas doses', 'Impactação fecal em idosos',
      'Uso prolongado: escurecimento da língua e dos dentes',
    ],
    contraindications: ['Dengue', 'Alergia ou crise de asma com salicilatos', 'Gravidez', 'Amamentação'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: antiácidos, salicilatos, tetraciclina, insulina.' },
  },
  {
    id: 'zinco',
    name: 'Zinco',
    category: 'laxantes-antidiarreicos',
    observations: 'Suplemento que reduz gravidade e duração de episódios de diarreia infantil. Associar com reidratação oral. Aguardar 2 h antes de tomar antimicrobianos.',
    brands: ['Gliconato de zinco / Sulfato de zinco — diversas apresentações orais e parenterais'],
    presentations: [
      { label: 'Solução oral (várias concentrações)' },
      { label: 'Comprimidos/cápsulas (várias concentrações)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Ingestão diária (lactentes)', value: '2–4 mg/dia' },
          { label: 'Ingestão diária (crianças maiores)', value: '4–6 mg/dia' },
          { label: 'Prevenção diarreia/pneumonia', value: '15–140 mg/semana' },
          { label: 'Diarreia aguda 0–6 meses', value: '10 mg/dia por 10–14 dias' },
          { label: 'Diarreia aguda > 6 meses', value: '20 mg/dia por 10–14 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Suplementação oral', value: '7 mg/dia' },
          { label: 'Nutrição parenteral', value: '2,5–4 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Altas doses: náusea, vômitos, cólicas, diarreia, letargia, fadiga',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: ferro, tetraciclinas, cloroquina, dissulfiram, penicilamina.' },
  },
];