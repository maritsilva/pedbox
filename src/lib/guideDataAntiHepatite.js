export const antiHepatite = [
  {
    id: 'adefovir',
    name: 'Adefovir',
    category: 'anti-hepatite',
    observations: 'Antiviral análogo da adenosina para hepatite B crônica.',
    brands: ['Hepsera — comp. 10 mg'],
    presentations: [{ label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite B crônica', value: '10 mg/dia por 48 semanas ou mais (duração ideal não estabelecida)' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–49 mL/min', value: 'Mesma dose a cada 48 h' },
      { label: 'ClCr 10–29 mL/min', value: 'Mesma dose a cada 72 h' },
      { label: 'ClCr < 10 mL/min / hemodiálise', value: 'Dose a cada 7 dias' },
    ],
    sensitivity: { susceptible: ['HBV'], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia, astenia, náusea, vômito, diarreia, dor abdominal',
      'Erupção cutânea, prurido',
      'Acidose lática, esteatose, hepatomegalia',
      'Nefrotoxicidade (sobretudo com disfunção renal prévia ou uso de medicamentos nefrotóxicos)',
      'Pode piorar hepatite B',
    ],
    contraindications: [],
  },
  {
    id: 'alfainterferona',
    name: 'Alfainterferona 2A / 2B',
    category: 'anti-hepatite',
    observations: 'Proteína recombinante com atividade antiviral e imunomoduladora. Não é mais recomendada como primeira linha para hepatite — existem opções mais seguras e efetivas.',
    brands: [
      'Roferon A / Interferon alfa 2A — seringa 0,5 mL (3 e 9 milhões UI); Fr. amp. 1, 3, 5 e 9 milhões UI',
      'Alfainterferona 2B — Fr. amp. 3, 5 e 10 milhões UI',
    ],
    presentations: [
      { label: 'Seringa 0,5 mL — 3 e 9 milhões UI' },
      { label: 'Frasco-ampola 1, 3, 5, 9 e 10 milhões UI' },
    ],
    doses: [
      {
        group: 'Adultos — Hepatite B crônica',
        items: [
          { label: 'Esquema diário', value: '4,5–5 milhões UI/dia SC por 16–24 semanas' },
          { label: 'Esquema 3×/sem', value: '9–10 milhões UI 3×/sem SC por 16–24 semanas' },
          { label: 'Mutação do pré-core', value: 'Tratar por 48 semanas' },
        ],
      },
      {
        group: 'Adultos — Outros (interferon alfa 2B)',
        items: [
          { label: 'Hepatite C', value: 'IM/SC: 3 milhões UI 3×/sem + ribavirina' },
          { label: 'Tricoleucemia', value: 'IM/SC: 2 milhões UI/m²/dose 3×/sem por ≥ 6 meses' },
          { label: 'Linfoma folicular', value: 'SC: 5 milhões UI/dose 3×/sem' },
          { label: 'Melanoma — indução', value: '20 milhões UI/dose 5×/sem por 4 semanas' },
          { label: 'Melanoma — manutenção', value: '10 milhões UI/m²/dose 3×/sem por 48 semanas' },
          { label: 'Sarcoma de Kaposi', value: 'IM/SC: 30 milhões UI/m² 3×/sem' },
        ],
      },
    ],
    sensitivity: { susceptible: ['HBV', 'HCV'], resistant: [], warning: 'Monitorar hemograma e transaminases. Suspender se neutrófilos < 500/mm³ ou plaquetas < 30.000/mm³.' },
    sideEffects: [
      'Sintomas gripais nas primeiras doses (febre, mialgia, mal-estar, calafrios, cefaleia)',
      'Fadiga, astenia, tontura, irritabilidade, sonolência, insônia',
      'Distúrbios neuropsíquicos: depressão profunda, ideação suicida, psicose, ataxia, paranoia',
      'Náusea, vômito, diarreia, boca seca, perda do paladar, dor abdominal, anorexia',
      'Neutropenia, plaquetopenia, anemia',
      'Miocardiopatia, insuficiência cardíaca, arritmia, morte súbita',
      'Queda de cabelo, erupção cutânea, prurido, sudorese',
      'Hepatite autoimune, cirrose biliar, hepatotoxicidade',
      'Tireoidite autoimune, hipotireoidismo, hipertireoidismo',
      'Retinopatia, perda auditiva, convulsões, amnésia',
      'Fibrose pulmonar, candidíase',
    ],
    contraindications: [
      'Insuficiência hepática ou cirrose descompensada (Child-Pugh B ou C)',
      'Ascite, encefalopatia',
      'Consumo de álcool, distúrbios coagulatórios',
      'Cardiopatia grave descompensada',
      'Diabetes tipo 1 de difícil controle',
      'Depressão grave refratária, convulsões de difícil controle',
      'Imunodeficiência primária, transplantados renais',
      'Gestação ou risco de gestação',
    ],
  },
  {
    id: 'alfapeginterferona',
    name: 'Alfapeginterferona 2A / 2B',
    category: 'anti-hepatite',
    observations: 'Molécula de interferon ligada ao polietilenoglicol, permitindo doses semanais. Monitorar hemograma, glicemia e função tireoidiana a cada 12 semanas. Suspender se neutrófilos < 500/mm³ ou plaquetas < 30.000/mm³.',
    brands: [
      'Pegasys (alfapeginterferona 2A) — seringa preenchida 180 µg',
      'Alfapeginterferona 2B — Fr. amp. 118,4 / 148 / 177,6 / 296 µg',
    ],
    presentations: [
      { label: 'Seringa preenchida 180 µg' },
      { label: 'Frasco-ampola 118,4–296 µg' },
    ],
    doses: [
      {
        group: 'Adultos e crianças — Hepatite C crônica (alfa 2A)',
        items: [
          { label: 'Dose usual', value: '180 µg/dose semanal SC; associado ou não à ribavirina 180–1200 mg/dia por 24 ou 48 semanas (depende do genótipo)' },
        ],
      },
      {
        group: 'Adultos e crianças — Hepatites B e C crônicas (alfa 2B)',
        items: [
          { label: 'Dose usual', value: '1,5 µg/kg/dose semanal por 24 ou 48 semanas' },
        ],
      },
      {
        group: 'Adultos — Melanoma',
        items: [
          { label: 'Indução', value: '6 µg/kg/dose semanal por 8 doses' },
          { label: 'Manutenção', value: 'Metade da dose' },
        ],
      },
    ],
    sensitivity: { susceptible: ['HCV', 'HBV'], resistant: [], warning: '' },
    sideEffects: [
      'Semelhantes à alfainterferona convencional, geralmente mais toleráveis',
      'Sintomas gripais, fadiga, astenia, cefaleia',
      'Distúrbios neuropsíquicos: depressão, insônia, irritabilidade',
      'Neutropenia, plaquetopenia',
      'Disfunção tireoidiana, hepatite autoimune',
    ],
    contraindications: [
      'Insuficiência hepática grave (Child-Pugh B ou C)',
      'Gestação',
    ],
  },
  {
    id: 'boceprevir',
    name: 'Boceprevir',
    category: 'anti-hepatite',
    observations: 'Inibidor de protease de primeira geração para hepatite C. Não é mais recomendado como primeira linha — existem opções melhores.',
    brands: ['Victrelis — cáps. 200 mg'],
    presentations: [{ label: 'Cápsula 200 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C crônica (não respondedores)', value: '800 mg/dose 3×/dia; iniciar após 4 semanas de indução com alfapeginterferona + ribavirina; manter por 24–44 semanas' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HCV genótipo 1'], resistant: [], warning: '' },
    sideEffects: [
      'Anemia, neutropenia, febre, ansiedade, depressão, insônia, irritabilidade',
      'Tontura, cefaleia, tosse, dispneia',
      'Diarreia, náusea, vômito, boca seca',
      'Artralgia, pele seca, exantema',
    ],
    contraindications: ['Disfunção hepática grave (Child-Pugh B ou C)', 'Doença autoimune', 'Gestantes'],
  },
  {
    id: 'daclatasvir',
    name: 'Daclatasvir',
    category: 'anti-hepatite',
    observations: 'Inibidor da NS5A, proteína viral não estrutural. Usado em associação ao sofosbuvir.',
    brands: ['Daklinza — comp. revestido 30 e 60 mg'],
    presentations: [
      { label: 'Comprimido revestido 30 mg' },
      { label: 'Comprimido revestido 60 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C crônica genótipos 1 e 3', value: '30–60 mg/dose 1×/dia + sofosbuvir por 12 semanas (associado ou não à ribavirina)' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HCV genótipos 1 e 3'], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia, fadiga, vertigem, sonolência, insônia',
      'Náusea, diarreia, erupção cutânea, anemia',
    ],
    contraindications: [],
  },
  {
    id: 'dasabuvir-ombitasvir-ritonavir-veruprevir',
    name: 'Dasabuvir + Ombitasvir + Ritonavir + Veruprevir',
    category: 'anti-hepatite',
    observations: 'Combinação antiviral de ação direta para hepatite C genótipo 1.',
    brands: ['Viekira Pak — cartela 1: ombitasvir + ritonavir + veruprevir; cartela 2: dasabuvir'],
    presentations: [{ label: 'Combinação em cartelas (tomar com refeições)' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C genótipo 1 (inclusive com cirrose)', value: '4 comprimidos/dia: 2 comp. cartela 1 pela manhã + 1 dasabuvir pela manhã + 1 dasabuvir à noite' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HCV genótipo 1'], resistant: [], warning: 'Tomar junto com refeições.' },
    sideEffects: [
      'Fadiga, insônia, astenia, náusea, prurido, erupção cutânea, angioedema',
      'Aumento de bilirrubina sérica e enzimas hepáticas',
      'Insuficiência hepática',
    ],
    contraindications: [],
  },
  {
    id: 'elbasvir-grazoprevir',
    name: 'Elbasvir + Grazoprevir',
    category: 'anti-hepatite',
    observations: 'Inibidor da NS5A + inibidor da protease NS3 para hepatite C genótipos 1 e 4.',
    brands: ['Zepatier — comp. revestido 50 + 100 mg'],
    presentations: [{ label: 'Comprimido revestido 50 mg + 100 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C genótipos 1 e 4', value: '1 comprimido/dia por 12 semanas' },
          { label: 'Com polimorfismos da NS5A ou anticorpos > 800.000 UI/mL', value: 'Indução com alfapeginterferona + ribavirina; depois manter 16 semanas + ribavirina' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HCV genótipos 1 e 4'], resistant: [], warning: '' },
    sideEffects: [
      'Fadiga, cefaleia, insônia, tontura, irritabilidade, ansiedade, depressão',
      'Náusea, vômito, diarreia, dor abdominal, constipação, dispepsia, boca seca',
      'Suor noturno, prurido, alopecia',
      'Aumento de bilirrubina e enzimas hepáticas',
      'Fraqueza, mialgia, artralgia, aumento de CPK',
    ],
    contraindications: ['Disfunção hepática grave (Child-Pugh B ou C)', 'Gestantes'],
  },
  {
    id: 'entecavir',
    name: 'Entecavir',
    category: 'anti-hepatite',
    observations: 'Análogo da adenosina. Bloqueia a DNA polimerase do HBV, com baixas taxas de resistência.',
    brands: ['Baraclude — comp. revestido 0,5 mg'],
    presentations: [{ label: 'Comprimido revestido 0,5 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite B — cirrose Child-Pugh A', value: '0,5 mg/dia' },
          { label: 'Hepatite B — cirrose Child-Pugh B ou C', value: '1 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–49 mL/min', value: 'Mesma dose a cada 48 h' },
      { label: 'ClCr 10–29 mL/min', value: 'Mesma dose a cada 72 h' },
      { label: 'ClCr < 10 mL/min', value: 'Mesma dose a cada 7 dias' },
    ],
    sensitivity: { susceptible: ['HBV'], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia, fadiga, tontura, erupção cutânea, acne, edema periférico',
      'Ascite, aumento de enzimas hepáticas, encefalopatia hepática',
      'Aumento de creatinina, hematúria, glicosúria, hiperglicemia',
      'Dor abdominal, diarreia, vômito, dispepsia, náusea',
    ],
    contraindications: ['Gestantes'],
  },
  {
    id: 'ribavirina',
    name: 'Ribavirina',
    category: 'anti-hepatite',
    observations: 'Análogo da guanosina inibidor de replicação viral. Usado em associação para hepatite C e bronquiolite grave por VSR (nebulização). O aerossol não é produzido no Brasil.',
    brands: ['Ribavirin / Ribavirina — cáps. 250 mg'],
    presentations: [{ label: 'Cápsula 250 mg' }],
    doses: [
      {
        group: 'Crianças > 3 anos',
        items: [
          { label: 'Hepatite C crônica', value: '15 mg/kg/dia ÷ 2 doses + alfapeginterferona' },
          { label: 'Bronquiolite grave por VSR (nebulização)', value: '20 mg/mL por 12–18 h/dia por 3–7 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C — < 75 kg', value: '1000 mg/dia ÷ 2 doses + peginterferona' },
          { label: 'Hepatite C — > 70 kg', value: '1250 mg/dia (750 mg manhã + 500 mg tarde/noite)' },
          { label: 'Cirrose Child-Pugh B ou C', value: 'Iniciar 500 mg/dia e aumentar gradualmente' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Contraindicado' }],
    sensitivity: { susceptible: ['HCV', 'VSR'], resistant: [], warning: 'Teratogênico. Usar contracepção por até 6 meses após o término, inclusive para parceiros homens.' },
    sideEffects: [
      'Cefaleia, fadiga, astenia, insônia, vertigem, conjuntivite',
      'Erupção cutânea, alergia, prurido',
      'Hipotensão, parada cardíaca',
      'Anemia hemolítica dose-dependente, depressão medular',
      'Broncoespasmo, tosse',
      'Hiporexia, dispepsia, náusea, dor abdominal',
      'Hepatite grave, hemoglobinopatias',
    ],
    contraindications: [
      'Teratogênico (contracepção obrigatória por 6 meses após)',
      'Amamentação',
      'Cardiopatia não controlada',
      'Disfunção hepática grave',
      'Hemoglobinopatias',
      'ClCr < 30 mL/min',
    ],
  },
  {
    id: 'simeprevir',
    name: 'Simeprevir',
    category: 'anti-hepatite',
    observations: 'Inibidor de protease de segunda geração para hepatite C. Tomar com refeição. Orientar exposição à luz solar.',
    brands: ['Olysio — cáps. 150 mg'],
    presentations: [{ label: 'Cápsula 150 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C genótipos 1 e 4', value: '150 mg/dia 1×/dia com refeição + sofosbuvir por 12 semanas' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HCV genótipos 1 e 4'], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia, fadiga, insônia, tontura',
      'Prurido, erupção cutânea, fotossensibilidade',
      'Aumento de bilirrubina e lipase sérica',
      'Náusea, diarreia, constipação, mialgia, dispneia',
    ],
    contraindications: [],
  },
  {
    id: 'sofosbuvir',
    name: 'Sofosbuvir',
    category: 'anti-hepatite',
    observations: 'Análogo de nucleotídeo que inibe a polimerase NS5B do HCV.',
    brands: ['Sovaldi — comp. revestido 400 mg'],
    presentations: [{ label: 'Comprimido revestido 400 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C genótipos 1 e 4', value: '400 mg/dia por 8–24 semanas (em associação)' },
        ],
      },
    ],
    sensitivity: { susceptible: ['HCV genótipos 1 e 4'], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia, insônia, astenia, fadiga, irritabilidade',
      'Náusea, diarreia, redução do apetite, aumento de lipase sérica',
      'Prurido, erupção cutânea, anemia, plaquetopenia',
      'Fraqueza, mialgia, sintomas gripais, aumento de CPK, hiperbilirrubinemia',
    ],
    contraindications: [],
  },
  {
    id: 'sofosbuvir-ledipasvir',
    name: 'Sofosbuvir + Ledipasvir',
    category: 'anti-hepatite',
    observations: 'Antiviral de ação direta combinado, inibidor da polimerase NS5B + inibidor NS5A do HCV.',
    brands: ['Harvoni — comp. revestido 400 + 90 mg'],
    presentations: [{ label: 'Comprimido revestido 400 mg + 90 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite C', value: '1 comprimido/dia (ver protocolo conforme genótipo e presença de cirrose)' },
        ],
      },
    ],
    sensitivity: { susceptible: ['HCV'], resistant: [], warning: '' },
    sideEffects: [
      'Fadiga, cefaleia, náusea, diarreia, insônia',
    ],
    contraindications: [],
  },
];