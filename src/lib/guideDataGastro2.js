export const antiflatulentes = [
  {
    id: 'simeticona',
    name: 'Simeticona',
    suffix: 'Dimeticona',
    category: 'gastro2',
    observations: 'Antifisético redutor da tensão superficial das bolhas gasosas. Não absorvido. Marcas têm concentrações diferentes: 2,5–6,5 mg/gota — verificar antes de calcular dose.',
    brands: ['Luftal / Flagass / Mylicon / Neo Dimeticona — comp. 40 mg; cáps. 125 mg; gotas 75 mg/mL'],
    presentations: [
      { label: 'Comprimido 40 mg' },
      { label: 'Cápsula 125 mg' },
      { label: 'Gotas 75 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '1 mg/kg/dose 1–4×/dia' },
          { label: '< 2 anos', value: '10–20 mg/dose 1–4×/dia. Máx: 240 mg/dia' },
          { label: '2 a 11 anos', value: '20–40 mg/dose 1–4×/dia. Máx: 480 mg/dia' },
          { label: 'Preparo USG abdominal', value: 'Dose habitual no dia anterior (ao deitar ou dividida) + 1 h antes do exame' },
        ],
      },
      {
        group: 'Adultos — Flatulência / distensão abdominal',
        items: [
          { label: 'Dose', value: '40–360 mg/dose 1–4×/dia. Máx: 500 mg/dia' },
          { label: 'Preparo USG abdominal', value: '40 mg de 8/8 h ou 80 mg/dia; 40–150 mg 1–4 h antes do exame' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: ['Raramente: eczema de contato, urticária, diarreia, cefaleia, constipação moderada e transitória'],
    contraindications: ['Perfuração ou obstrução intestinal', 'Distensão abdominal grave com dor persistente'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const laxantesFibras = [
  {
    id: 'plantago-psyllium',
    name: 'Plantago (Psyllium)',
    category: 'gastro2',
    observations: 'Fibra coloide de hemicelulose formadora de massa. Uso prolongado seguro. Reduz absorção de glicose e colesterol. Ação em até 3 dias. Diluir em 1 copo de água + tomar mais 1 copo depois. Ingerir 1–2 L/dia.',
    brands: ['Metamucil / Fibra Mais / Plantaben — pó 174/210 g; sachê 5 g; cáps. 500 mg'],
    presentations: [{ label: 'Pó (sachê 5 g ou lata)' }, { label: 'Cápsula 500 mg' }],
    doses: [
      { group: 'Crianças (6–11 anos)', items: [{ label: 'Constipação', value: '2–3 g/dose 1–3×/dia' }] },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação / cólon irritável', value: '5 g/dose 1–3×/dia. Máx: 15 g/dia' },
          { label: 'Redução do colesterol', value: '10 g/dia' },
        ],
      },
    ],
    sideEffects: ['Raramente: diarreia, cólica, flatulência, distensão abdominal, empachamento', 'Irritação da garganta se tomada sem água suficiente'],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Megacólon'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar uso concomitante com outros medicamentos.' },
  },
  {
    id: 'policarbofila',
    name: 'Policarbofila',
    category: 'gastro2',
    observations: 'Fibra sintética hidrofílica que aumenta volume do bolo fecal e peristaltismo. Efeito pleno em até 3 dias. Tomar com copo de água durante/após refeições. Ingerir 1–2 L/dia. Não usar > 1 semana.',
    brands: ['Benestare / Muvinor — comp. revestido 500 mg'],
    presentations: [{ label: 'Comprimido revestido 500 mg' }],
    doses: [
      { group: 'Crianças (6–11 anos)', items: [{ label: 'Dose', value: '500 mg/dose 1–4×/dia' }] },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '500–1000 mg/dose 2×/dia' },
          { label: 'Diarreia', value: '1000 mg/dose 4×/dia. Máx: 6 g/dia' },
        ],
      },
    ],
    sideEffects: ['Raramente: náusea, vômitos, cólicas, flatulência, constipação (se ingestão insuficiente de água)'],
    contraindications: ['Obstrução intestinal', 'Megacólon'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'suplemento-fibras',
    name: 'Suplemento de Fibras',
    category: 'gastro2',
    observations: 'Registrado como alimento. Mistura de fibras solúveis (pectina, gomas, betaglucana, inulina) e insolúveis (celulose, lignina). Eficácia semelhante a alimentos integrais in natura. Introduzir lenta e gradualmente.',
    brands: ['Diversas marcas em pó (latas ou sachês)'],
    presentations: [{ label: 'Pó em lata ou sachê' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [{ label: '2 a 11 anos', value: '5–10 g/dia + idade da criança (ex.: 8 anos = 13–18 g/dia)' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia da constipação', value: '20–35 g/dia (dieta + suplemento)' },
          { label: 'Dieta pobre em fibras', value: '10–30 g/dia de suplemento' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: ['Flatulência, distensão abdominal, dor abdominal, cólicas (minimizados com introdução gradual)'],
    contraindications: ['Ingestão inadequada de água', 'Pode piorar cólon irritável'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const laxantesCatarticos = [
  {
    id: 'bisacodil',
    name: 'Bisacodil',
    category: 'gastro2',
    observations: 'Irritante da mucosa intestinal. Ação em 6–12 h. Deglutir inteiro com água, longe das refeições. Não tomar com antiácidos. Não usar > 7 dias.',
    brands: ['Bisalax / Dulcolax / Lacto Purga — drágea/comp. revestido 5 mg'],
    presentations: [{ label: 'Drágea/comprimido revestido 5 mg' }],
    doses: [
      { group: 'Crianças > 6 anos', items: [{ label: 'Constipação', value: '5 mg/dia. Máx: 10 mg/dia' }] },
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
    name: 'Extratos Vegetais (Sene / Cáscara-sagrada)',
    category: 'gastro2',
    observations: 'Irritante da mucosa intestinal. Ação em 8–12 h. Tomar com água ao deitar. Usar menor dose possível, não usar > 7 dias seguidos. Uso crônico: lesão do plexo mioentérico e risco de câncer de cólon.',
    brands: ['Sene / Cassia angustifolia — cápsulas/comp. com senosídeos', 'Cáscara-sagrada — cápsulas ou tintura'],
    presentations: [{ label: 'Cápsulas/comprimidos com senosídeos (concentrações variadas)' }],
    doses: [
      {
        group: 'Crianças > 6 anos',
        items: [{ label: 'Senosídeos', value: '8,6–15 mg/dia. Máx: 17,2 mg/dose 2×/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Senosídeos', value: '17,2–26,4 mg/dose 1–2×/dia. Máx: 34,4 mg/dose 2×/dia' },
          { label: 'Cáscara-sagrada', value: '20–30 mg/dia 1×/dia (1–3 cáps./comp. conforme formulação)' },
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
    category: 'gastro2',
    observations: 'Laxante osmótico salino de uso retal. Efeito imediato em 2–5 min. Não usar > 7 dias. Aplicar deitado.',
    brands: ['Phosfoenema / Fleet Enema — frasco enema 130 mL'],
    presentations: [{ label: 'Frasco enema 130 mL' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose por peso', value: '2–4 mL/kg. Máx: 120 mL' },
          { label: '2 a 5 anos', value: '~1/4 do frasco' },
          { label: '6 a 12 anos', value: '~1/2 frasco' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Impactação fecal / preparo', value: '1 frasco/vez' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal ou hepática', value: 'Melhor evitar' }],
    sideEffects: ['Cólica', 'Diarreia', 'Flatulência', 'Irritação', 'Sangramento retal', 'Hipernatremia', 'Hiperfosfatemia', 'Hipocalcemia', 'Hipocalemia'],
    contraindications: ['Obstrução intestinal', 'Apendicite', 'Insuficiência cardíaca'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'glicerina-supositorio',
    name: 'Glicerina (Supositório / Enema)',
    suffix: 'Glicerol',
    category: 'gastro2',
    observations: 'Laxante de efeito imediato. Escolha para gestantes e idosos. Aplicar deitado. Não usar > 7 dias. Uso repetido em crianças pode condicionar evacuação apenas sob estímulo.',
    brands: ['Glicel / Glycelax / Supositório de glicerina — supositório infantil e adulto; solução retal'],
    presentations: [{ label: 'Supositório infantil e adulto' }, { label: 'Solução retal' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '0 a 6 anos', value: '1 supositório infantil em situações agudas (uso esporádico)' },
          { label: 'Enema a 12%', value: '20–100 mL ou 10–20 mL/kg/dose' },
          { label: 'RN', value: '0,5–2 mL/kg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Constipação aguda / preparo', value: '1 supositório adulto ou enema 250–500 mL' }],
      },
    ],
    sideEffects: ['Diarreia', 'Tenesmo', 'Cólica', 'Flatulência', 'Irritação', 'Sangramento retal', 'Enema: risco de trauma mecânico'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lactitol',
    name: 'Lactitol',
    category: 'gastro2',
    observations: 'Laxante osmótico similar à lactulose.',
    brands: ['Malvado / Fontolax — solução 10 g/15 mL; sachê 10 g'],
    presentations: [{ label: 'Solução 10 g/15 mL' }, { label: 'Sachê 10 g' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Constipação', value: '1,5–3 mL/kg/dia 1–2×/dia' },
          { label: 'Desimpactação fecal', value: '2 mL/kg/dose 2×/dia' },
        ],
      },
    ],
    sideEffects: ['Flatulência', 'Cólica', 'Distensão abdominal', 'Diarreia', 'Hiponatremia', 'Hipoalbuminemia', 'Desidratação'],
    contraindications: ['Risco de desequilíbrio eletrolítico'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lactulose',
    name: 'Lactulose',
    category: 'gastro2',
    observations: 'Laxante osmótico. Uso prolongado seguro. Efeito pleno em 3–4 dias. Produz hidrogênio intestinal — risco teórico de explosão com eletrocauterização. Colonoscopia: tomar ≥ 2,5 L de líquidos.',
    brands: ['Lactulona / Lactulose / Farlac / Lacmax — xarope 667 mg/mL; sachê 15 mL'],
    presentations: [{ label: 'Xarope 667 mg/mL' }, { label: 'Sachê 15 mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Constipação', value: '1,5–3 mL/kg/dia 1–2×/dia' },
          { label: 'Desimpactação', value: '2 mL/kg/dose por 2–7 dias' },
          { label: 'Lactentes', value: 'Iniciar 2,5–10 mL/dia ÷ 3–4 doses' },
          { label: 'Crianças maiores', value: '10–50 mL/dia ÷ 3–4 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '15–30 mL/dia 1×/dia ou ÷ 2 doses. Máx: 60 mL/dia' },
          { label: 'Preparo colonoscopia', value: '200 mL diluídos em 1 L de limonada; 1 copo a cada 15 min (iniciar 6–8 h antes)' },
          { label: 'Encefalopatia hepática oral', value: '20–45 mL/dose a cada 1–6 h até objetivo; ajustar para 3–4 doses/dia' },
          { label: 'Encefalopatia hepática enema', value: '300 mL + 700 mL de AD/SF; reter 30–60 min; repetir a cada 4–6 h' },
        ],
      },
    ],
    sideEffects: ['Flatulência', 'Cólica', 'Distensão abdominal', 'Diarreia', 'Hiponatremia', 'Hipoalbuminemia', 'Desidratação'],
    contraindications: ['Obstrução intestinal', 'Apendicite', 'Intolerância à lactose', 'Galactosemia'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'macrogol-ions',
    name: 'Macrogol + Bicarbonato + KCl + NaCl',
    category: 'gastro2',
    observations: 'Laxante osmótico à base de polietilenoglicol (PEG) de alto PM + íons. Uso prolongado com acompanhamento. Ação em 2–4 dias. Dissolver em água, tomar pela manhã. Não usar > 2 semanas.',
    brands: ['Muvinlax — sachê 14 g'],
    presentations: [{ label: 'Sachê 14 g' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Constipação', value: '0,2–0,8 g/kg/dia 1×/dia (17 g/dia)' },
          { label: 'Desimpactação', value: '1–1,5 g/kg/dia 1–2×/dia por 1–3 dias. Máx: 100 g/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação crônica', value: '1–2 sachês/dia' },
          { label: 'Preparo intestinal', value: '8 sachês em 1 L de água; 1 copo a cada 10 min até 4 L' },
        ],
      },
    ],
    sideEffects: ['Cólicas', 'Empachamento', 'Flatulência', 'Diarreia', 'Uso prolongado: desequilíbrio hidroeletrolítico'],
    contraindications: ['Obstrução intestinal', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'oleo-mineral',
    name: 'Óleo Mineral',
    suffix: 'Petrolato líquido',
    category: 'gastro2',
    observations: 'Emoliente laxativo eventual. Ação em até 8 h. Tomar ao deitar, longe das refeições. Evitar em acamados e com disfagia. Se visível nas fezes: dose excessiva. Não usar > 1 semana. ATENÇÃO: risco de pneumonia lipídica por aspiração.',
    brands: ['Laxenol / Nujol / Purulim — frasco 100–120 mL'],
    presentations: [{ label: 'Frasco 100–120 mL' }],
    doses: [
      {
        group: 'Crianças (evitar < 1 ano)',
        items: [{ label: 'Constipação', value: '1–2 mL/kg/dia ou 5–15 mL/dose 1–2×/dia. Máx: 40 mL/dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Constipação', value: 'Iniciar 15 mL/dia 1–2×/dia; ajustar. Máx: 45 mL/dia' }],
      },
    ],
    sideEffects: ['Náusea', 'Vômito', 'Diarreia', 'Cólica', 'RISCO: pneumonia lipídica por aspiração', 'Uso prolongado: má absorção de vitaminas lipossolúveis'],
    contraindications: ['Refluxo', 'Apendicite', 'Diverticulite', 'Idosos', 'Gestantes'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'oleo-ricino',
    name: 'Óleo de Rícino',
    category: 'gastro2',
    observations: 'Irritante da mucosa intestinal. Ação em 1–4 h. Tomar com suco de frutas para mascarar o sabor.',
    brands: ['Laxol — frasco 30–60 mL'],
    presentations: [{ label: 'Frasco 30–60 mL' }],
    doses: [
      {
        group: 'Preparo intestinal para procedimentos',
        items: [{ label: 'Dose única', value: '15–60 mL' }],
      },
    ],
    sideEffects: ['Náusea', 'Vômitos', 'Cólicas', 'Diarreia'],
    contraindications: ['Gestação', 'Obstrução intestinal', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'picossulfato-sodio',
    name: 'Picossulfato de Sódio',
    category: 'gastro2',
    observations: 'Irritante da mucosa intestinal. Ação em 6–12 h. Não usar na constipação do intestino irritável. 1 gota = 0,5 mg.',
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
        group: 'Adultos',
        items: [{ label: 'Constipação refratária', value: '5–10 mg/dia ao deitar' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: ['Desconforto abdominal', 'Cólicas', 'Diarreia', 'Desequilíbrio eletrolítico', 'Tontura', 'Cefaleia', 'Vômitos', 'Náusea', 'Erupção cutânea', 'Angioedema'],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Apendicite', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'picossulfato-magnesio-citrico',
    name: 'Picossulfato + Óxido de Magnésio + Ácido Cítrico',
    category: 'gastro2',
    observations: 'Irritante da mucosa intestinal. Ação em 1–2 h. Usado para preparo intestinal, geralmente com bisacodil. Dissolver em 1 copo de água cheio; tomar quando acabar a efervescência, longe das refeições.',
    brands: ['Picolprep — sachê 10 + 3500 + 12000 mg'],
    presentations: [{ label: 'Sachê 10 + 3500 + 12000 mg' }],
    doses: [
      {
        group: 'Adultos — Preparo para procedimentos',
        items: [
          { label: 'Dose 1', value: '1 sachê 12 h antes do exame + 1–1,5 L de água em pequenas quantidades' },
          { label: 'Dose 2', value: '1 sachê 6 h antes do exame + 1–1,5 L de água em pequenas quantidades' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: ['Náusea', 'Vômito', 'Cólicas', 'Flatulência', 'Irritação anal', 'Diarreia', 'Alteração do paladar', 'Hipotensão', 'Hipernatremia', 'Hipocalemia', 'Desidratação'],
    contraindications: ['Impactação fecal', 'Obstrução intestinal', 'Apendicite', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'polietilenoglicol-4000',
    name: 'Polietilenoglicol 4000',
    suffix: 'Macrogol / PEG 4000',
    category: 'gastro2',
    observations: 'Laxante osmótico de alto PM. Sem sabor ou cheiro — dissolver em água ou suco claro. Não absorvido.',
    brands: ['PEG 4000 manipulado — sachê ou envelope com dose diária pré-calculada'],
    presentations: [{ label: 'Sachê/envelope (dose pré-calculada)' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Desimpactação', value: '0,5–1 g/kg/dia (até 2 g/kg/dia) por 3–6 dias' }],
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
    sensitivity: { susceptible: [], resistant: [], warning: 'Risco de aspiração por vômito (especialmente em desordens neurológicas).' },
  },
  {
    id: 'sorbitol-70',
    name: 'Sorbitol 70%',
    category: 'gastro2',
    observations: 'Laxante hiperosmótico de uso retal. Ação em 5–40 min. Aplicar deitado, inserir cânula suavemente.',
    brands: ['Minilax Enema — bisnaga 6,5 g de sorbitol 70%'],
    presentations: [{ label: 'Bisnaga 6,5 g' }],
    doses: [
      { group: 'Crianças', items: [{ label: 'Via retal', value: '1/2 a 1 bisnaga em dose única' }] },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '1 bisnaga via retal em dose única' },
          { label: 'Fecaloma', value: '2 doses' },
        ],
      },
    ],
    sideEffects: ['Diarreia', 'Cólica', 'Náusea', 'Distensão abdominal', 'Flatulência'],
    contraindications: ['Retocolite hemorrágica', 'Hemorragias agudas'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'sulfato-magnesio',
    name: 'Sulfato de Magnésio',
    suffix: 'Sal Amargo',
    category: 'gastro2',
    observations: 'Antiácido de efeito imediato; laxante em 30 min–6 h. Dissolver em copo cheio de água; tomar longe das refeições. 5 g = 1–2 colheres de chá. Não usar > 1 semana.',
    brands: ['Sal Amargo — pó 25–30 g; sachê 15 g'],
    presentations: [{ label: 'Pó e sachê 15 g' }],
    doses: [
      {
        group: 'Crianças (6–11 anos)',
        items: [{ label: 'Constipação', value: '5 g/dose 1×/dia. Repetir após 4–6 h se necessário. Máx: 2 doses/dia' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação', value: '10 g em dose única. Repetir após 6 h se necessário. Máx: 2 doses/dia' },
          { label: 'Azia', value: '5 g/dose 1–4×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: ['Desconforto abdominal', 'Cólica', 'Diarreia', 'Hipermagnesemia (hipotensão, depressão respiratória)', 'Hipofosfatemia', 'Hipocalcemia'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Risco maior de hipermagnesemia em idosos, lactentes < 1 ano e IRC.' },
  },
];

export const antidiarreicos = [
  {
    id: 'loperamida',
    name: 'Loperamida',
    category: 'gastro2',
    observations: 'Inibidor de peristaltismo com ação antissecretora leve. Indicado principalmente para diarreia do viajante. ALERTA FDA 2016: excesso de dose pode causar arritmias fatais. Formulações infantis proibidas. Suspender após fezes sólidas ou 24 h sem evacuação. Evitar álcool.',
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
          { label: 'Diarreia aguda / AIDS / cólon irritável', value: '1ª dose: 4 mg; manutenção 2 mg a cada 6 h ou após cada dejeção. Máx: 16 mg/dia' },
          { label: 'Diarreia do viajante', value: '4 mg 1ª dose; depois 2 mg após cada diarreia. Máx: 8 mg/dia' },
          { label: 'Diarreia por quimioterapia', value: '2 mg a cada 2 h (dia) e a cada 4 h (noite) até 12 h sem diarreia. Máx: 16 mg/24 h' },
        ],
      },
    ],
    sideEffects: [
      'Sedação', 'Sonolência', 'Fadiga', 'Tontura', 'Náusea', 'Vômito', 'Constipação',
      'Cólica abdominal', 'Distensão abdominal', 'Boca seca', 'Erupção cutânea', 'Hiperpigmentação',
      'INTERROMPER imediatamente se: constipação, cólicas, distensão abdominal ou sangue nas fezes',
    ],
    contraindications: [
      'Dor abdominal sem diarreia', 'Disenteria aguda sem antibióticos', 'Colite ulcerativa aguda',
      'Enterocolite bacteriana', 'Colite pseudomembranosa por antibióticos', 'Crianças < 2 anos',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'racecadotrila',
    name: 'Racecadotrila',
    category: 'gastro2',
    observations: 'Antidiarreico não opioide com atividade antissecretora. Não usar > 10 dias. Não usar como rotina junto com reidratação oral.',
    brands: ['Tiorfan / Racecadotrila — sachê 10 mg e 30 mg; cáps. 100 mg'],
    presentations: [
      { label: 'Sachê 10 mg e 30 mg' },
      { label: 'Cápsula 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 3 meses',
        items: [
          { label: 'Por peso', value: '1,5 mg/kg/dose 3×/dia' },
          { label: '< 9 kg', value: '10 mg a cada 8 h' },
          { label: '9–13 kg', value: '20 mg a cada 8 h' },
          { label: '> 13 kg', value: '30 mg a cada 8 h' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Diarreia', value: 'Casos agudos: iniciar 200 mg; depois 100 mg/dose a cada 8 h por até 7 dias' },
          { label: 'Diarreia da AIDS', value: '100–300 mg/dose 3×/dia' },
        ],
      },
    ],
    sideEffects: ['Tontura', 'Mal-estar', 'Cefaleia', 'Sonolência', 'Vertigem', 'Constipação', 'Náusea', 'Vômitos', 'Distensão abdominal'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'salicilato-bismuto',
    name: 'Salicilato de Bismuto',
    category: 'gastro2',
    observations: 'Efeito antissecretor e anti-inflamatório. Eficaz na diarreia do viajante e gastroenterite aguda. Maioria dos efeitos colaterais por causa do salicilato. Evitar uso prolongado.',
    brands: ['Peptozil — susp. oral 262 mg/15 mL'],
    presentations: [{ label: 'Suspensão oral 262 mg/15 mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Diarreia ou azia', value: '524 mg (30 mL)/dose a cada 30 min–1 h se necessário por até 2 dias. Máx: 8 doses/dia' },
          { label: 'Erradicação H. pylori', value: '525 mg (30 mL) 4×/dia + IBP + amoxicilina/tetraciclina + metronidazol por 10–14 dias' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar' }],
    sideEffects: [
      'Confusão', 'Ansiedade', 'Cefaleia', 'Depressão', 'Fraqueza', 'Náusea', 'Vômito',
      'Diarreia', 'Fezes acinzentadas', 'Neurotoxicidade em altas doses', 'Impactação fecal em idosos',
      'Uso prolongado: escurecimento da língua e dos dentes',
    ],
    contraindications: ['Dengue', 'Alergia ou asma por salicilatos', 'Gravidez', 'Amamentação'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: antiácidos, salicilatos, tetraciclina, insulina.' },
  },
  {
    id: 'zinco',
    name: 'Zinco',
    category: 'gastro2',
    observations: 'Suplemento que reduz gravidade e duração da diarreia infantil. Associar com reidratação oral. Aguardar 2 h antes de tomar antimicrobianos.',
    brands: ['Gliconato / Sulfato de zinco — solução oral, comp./cáps. e ampola (várias concentrações)'],
    presentations: [{ label: 'Solução oral, comprimidos, cápsulas e ampola' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'IDR lactentes', value: '2–4 mg/dia' },
          { label: 'IDR crianças maiores', value: '4–6 mg/dia' },
          { label: 'Prevenção diarreia/pneumonia', value: '15–140 mg/semana (iniciar nas primeiras 8 semanas de vida em lactentes)' },
          { label: 'Diarreia aguda 0–6 meses', value: '10 mg/dia por 10–14 dias' },
          { label: 'Diarreia aguda > 6 meses', value: '20 mg/dia por 10–14 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Suplementação', value: '7 mg/dia' },
          { label: 'Nutrição parenteral', value: '2,5–4 mg/dia' },
        ],
      },
    ],
    sideEffects: ['Altas doses: náusea, vômitos, cólicas, diarreia, letargia, fadiga'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações (podem ter absorção diminuída): ferro, tetraciclinas, cloroquina, penicilamina, dissulfiram.' },
  },
];