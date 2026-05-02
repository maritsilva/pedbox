export const antiespasmódicos = [
  {
    id: 'adifenina-dipirona-prometazina',
    name: 'Adifenina + Dipirona + Prometazina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Adifenina é antiespasmódico com ação relaxante inespecífica. Evitar em idosos. Não usar por períodos prolongados.',
    brands: [
      'Lisador / Dorilen / Sedador — comp. 10 + 500 + 5 mg; gotas 10 + 500 + 5 mg/1,5 mL',
    ],
    presentations: [
      { label: 'Comprimido 10 + 500 + 5 mg' },
      { label: 'Gotas 10 + 500 + 5 mg/1,5 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [{ label: 'Dose', value: '8–16 gotas a cada 6 h se necessário' }],
      },
      {
        group: 'Adultos — Cólicas / analgésico',
        items: [
          { label: 'Oral', value: '1–2 comprimidos ou 30–60 gotas a cada 6 h se necessário' },
          { label: 'IM', value: '1–2 mL até a cada 6 h (aplicar lentamente)' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Adifenina: boca seca, ressecamento de secreções, fotofobia, dificuldade de acomodação visual',
      'Prometazina e dipirona: ver efeitos próprios de cada medicamento',
    ],
    contraindications: [
      'Glaucoma de ângulo fechado', 'Obstrução urinária ou intestinal', 'Doença cardíaca',
      'Asma', 'Úlcera gástrica', 'Gravidez', 'Lactação',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'butilbrometo-escopolamina',
    name: 'Butilbrometo de Escopolamina',
    suffix: 'Hioscina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiespasmódico com potencial anticolinérgico muito alto. Evitar em idosos. Aplicação EV lenta (mín 5 min). Associação com dipirona pode causar subdose/superdose dependendo da apresentação. 1 gota = 0,5 mg.',
    brands: [
      'Buscopan / Hioscina — drágea 10 mg; gotas 10 mg/mL; ampola 20 mg/mL',
    ],
    presentations: [
      { label: 'Drágea 10 mg' },
      { label: 'Gotas 10 mg/mL (1 gota = 0,5 mg)' },
      { label: 'Ampola 20 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Oral (1–5 anos)', value: 'Melhor evitar. Se necessário: 5–10 gotas/dose 1–3×/dia' },
          { label: 'Oral (7–12 anos)', value: '10–20 gotas/dose 1–3×/dia' },
          { label: 'Oral por peso', value: '0,3–0,5 mg/kg/dose 1–3×/dia' },
          { label: 'EV ou IM', value: '0,3 mg/kg/dose a cada 6–8 h. Máx: 1,5 mg/kg/dia' },
          { label: 'Hipersalivação (controverso)', value: 'Oral: 0,06–0,25 mg/dose 6×/dia' },
        ],
      },
      {
        group: 'Adultos — Cólicas',
        items: [
          { label: 'Oral', value: '10–20 mg/dose 3–5×/dia. Máx: 60 mg/dia' },
          { label: 'EV/IM/SC', value: '10–40 mg/dose 1–3×/dia. Máx: 100 mg/dia' },
          { label: 'Cólon irritável', value: '10 mg 30 min antes das refeições' },
          { label: 'Preparo radiológico', value: 'EV: 20 mg/dose' },
          { label: 'Obstrução intestinal maligna', value: 'EV infusão contínua: 40–100 mg/24 h' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Sonolência', 'Cefaleia', 'Fadiga', 'Delírio', 'Insônia', 'Euforia', 'Inquietação',
      'Agitação', 'Psicose', 'Confusão mental', 'Tremores', 'Fraqueza', 'Febre',
      'Diarreia', 'Náusea', 'Vômito', 'Boca seca', 'Disfagia', 'Constipação',
      'Nariz e garganta seca', 'Dispneia', 'Sudorese diminuída', 'Retenção urinária',
      'Taquicardia', 'Bradicardia', 'Palpitação', 'Visão borrada',
      'Aumento da pressão intraocular', 'Midríase', 'Fotofobia', 'Ressecamento ocular', 'Cicloplegia',
      'Erupção cutânea', 'Urticária', 'Anafilaxia',
      'Risco de depressão do SNC e hemorragia intracraniana no RN se administrado à mãe antes do parto',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Síndrome de Down ou paralisia espástica: podem não tolerar bem.' },
  },
  {
    id: 'escopolamina-dipirona',
    name: 'Escopolamina + Dipirona',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Aplicação EV lenta (mín 5 min). IM profunda, nunca SC. Evitar em idosos. 1 gota = 0,33 mg de escopolamina + 16,67 mg de dipirona.',
    brands: [
      'Buscopan Composto — comp. 10 + 250 mg; ampola 4 + 500 mg/5 mL; gotas 6,67 + 333,4 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 10 + 250 mg' },
      { label: 'Gotas 6,67 + 333,4 mg/mL' },
      { label: 'Ampola 5 mL (4 + 500 mg/mL)' },
    ],
    doses: [
      {
        group: 'Crianças (evitar < 6 anos)',
        items: [
          { label: '1 a 3 anos', value: '5–7 gotas/dose 4×/dia' },
          { label: '3 a 6 anos', value: '7–12 gotas/dose 4×/dia' },
          { label: '7 a 11 anos', value: '13–20 gotas/dose 4×/dia' },
        ],
      },
      {
        group: 'Adultos — Cólicas',
        items: [
          { label: 'Oral', value: '1–2 comprimidos ou 20–40 gotas/dose 3–4×/dia' },
          { label: 'EV/IM', value: '1 ampola (5 mL)/dose; repetir se necessário' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: ['Ver efeitos da dipirona e da hioscina separadamente'],
    contraindications: [
      'Glaucoma de ângulo fechado', 'Obstrução urinária', 'Íleo paralítico', 'Miastenia',
      'Tireotoxicose', 'Insuficiência cardíaca', 'Angina', 'Arritmia cardíaca',
      'Hipertrofia prostática obstrutiva', 'Doença hepática', 'Doença renal',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar com anticolinérgicos, bupropiona ou donepezila (risco de convulsões).' },
  },
  {
    id: 'escopolamina-paracetamol',
    name: 'Escopolamina + Paracetamol',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Evitar em idosos.',
    brands: ['Buscoduo / Espalti Duo — comp. revestido 10 + 500 mg'],
    presentations: [{ label: 'Comprimido revestido 10 + 500 mg' }],
    doses: [
      {
        group: 'Adultos — Cólicas',
        items: [{ label: 'Dose', value: '1–2 comprimidos 3–4×/dia. Máx: 8 comprimidos/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: ['Ver efeitos da escopolamina e do paracetamol'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'homatropina',
    name: 'Homatropina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Espasmolítico com alto potencial anticolinérgico e pouca ação no SNC. Evitar em idosos. 1 gota = 0,1 mg.',
    brands: ['Homatropina — gotas 2 mg/mL'],
    presentations: [{ label: 'Gotas 2 mg/mL (1 gota = 0,1 mg)' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Dose', value: '0,1 mg/kg/dose 3–4×/dia. Máx: 0,3 mg/kg/dose' }],
      },
      {
        group: 'Adultos — Cólicas',
        items: [{ label: 'Dose', value: '2,5–5 mg/dose 3–4×/dia. Máx: 30 mg/dia' }],
      },
    ],
    sideEffects: [
      'Sede', 'Boca seca', 'Sonolência', 'Euforia', 'Fraqueza', 'Fala lenta', 'Febre', 'Rubor facial',
      'Exantema', 'Dermatite eczematosa', 'Taquicardia', 'Midríase', 'Constipação', 'Retenção urinária',
      'Cicloplegia', 'Confusão', 'Irritabilidade', 'Sintomas psicóticos', 'Disartria', 'Tremores',
      'Congestão vascular', 'Edema',
      'Lactentes: dificuldade/colapso respiratório e convulsões',
    ],
    contraindications: ['Glaucoma de ângulo fechado', 'Hemorragia', 'Síndrome de Down (toleram mal)'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'homatropina-simeticona',
    name: 'Homatropina + Simeticona',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Para cólicas associadas à flatulência. Efeitos anticolinérgicos em lactentes podem ser mais pronunciados. 1 gota = 0,07 mg de homatropina + 2,4 mg de simeticona.',
    brands: ['Espasmo Dimetil / Espasmo Flatol — gotas 2,5 + 80 mg/mL'],
    presentations: [{ label: 'Gotas 2,5 + 80 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Cólicas com flatulência',
        items: [{ label: 'Dose', value: '1 gota/kg/dose 1–3×/dia' }],
      },
    ],
    sideEffects: ['Ver efeitos da homatropina'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'mebeverina',
    name: 'Mebeverina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiespasmódico com ação seletiva sobre a musculatura GI. Mais potente que papaverina. Tomar após as refeições.',
    brands: ['Duspatalin / Rubenti — cápsula LP 200 mg'],
    presentations: [{ label: 'Cápsula liberação prolongada 200 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Cólicas', value: '200 mg/dose 1–2×/dia' },
          { label: 'Cólon irritável', value: '200–400 mg/dose 2×/dia' },
        ],
      },
    ],
    sideEffects: ['Tontura', 'Vertigem', 'Cefaleia', 'Náusea', 'Vômito', 'Diarreia', 'Erupção cutânea', 'Exantema'],
    contraindications: ['Fibrose cística', 'Doença renal', 'Doença hepática', 'Amamentação', 'Gestação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'otilônio',
    name: 'Otilônio',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiespasmódico antagonista do cálcio. Pouco absorvido. Em altas doses exibe efeitos anticolinérgicos.',
    brands: ['Lonium — comp. revestido 40 mg'],
    presentations: [{ label: 'Comprimido revestido 40 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Cólon irritável', value: '40 mg/dose 1–3×/dia' },
          { label: 'Preparo para endoscopia', value: '40 mg ao deitar + 40 mg 1 h antes do exame' },
        ],
      },
    ],
    sideEffects: ['Em altas doses: efeitos anticolinérgicos'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'papaverina',
    name: 'Papaverina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Derivado opioide antiespasmódico intestinal, biliar, urinário e vasodilatador cerebral/coronariano. Evitar uso por mais de 2 dias seguidos ou 3 dias/semana. ATENÇÃO: aplicação EV rápida causa apneia fatal.',
    brands: ['Hypoverin — ampola 50 mg/mL'],
    presentations: [{ label: 'Ampola 50 mg/mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'EV/IM', value: '1,5 mg/kg/dose 1–4×/dia' }],
      },
      {
        group: 'Adultos — Cólicas intensas / espasmos vasculares',
        items: [{ label: 'EV/IM', value: '30–120 mg/dose; repetir após 3 h se necessário. Máx: 2 doses/dia' }],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Sonolência', 'Tontura', 'Sedação', 'Vertigem', 'Fadiga', 'Depressão medular',
      'Prurido', 'Erupção cutânea', 'Constipação', 'Diarreia', 'Perda de apetite',
      'Hipotensão', 'Arritmia', 'Hipertensão', 'Icterícia', 'Aumento de enzimas hepáticas',
      'Acidose metabólica', 'Hepatotoxicidade', 'Cirrose', 'Hepatite',
      'Pressão intracraniana aumentada',
      'ATENÇÃO: aplicação EV rápida pode causar apneia fatal',
    ],
    contraindications: ['Glaucoma de ângulo fechado', 'Retenção urinária', 'Bloqueio atrioventricular', 'Amamentação', 'Gestação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'pinavério',
    name: 'Pinavério',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiespasmódico. Pouco absorvido. Tomar com água durante as refeições. Evitar em idosos.',
    brands: ['Dicetel — comp. revestido 50 e 100 mg'],
    presentations: [{ label: 'Comprimido revestido 50 mg e 100 mg' }],
    doses: [
      {
        group: 'Adultos — Cólon irritável / distúrbios biliares',
        items: [{ label: 'Dose', value: '50 mg/dose 3×/dia. Se necessário: 100 mg/dose 2×/dia' }],
      },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Constipação', 'Dor abdominal', 'Diarreia', 'Flatulência',
      'Distensão abdominal', 'Dispepsia', 'Erupção cutânea', 'Angioedema',
      'Sonolência', 'Cefaleia', 'Vertigem',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'trimebutina',
    name: 'Trimebutina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiespasmódico para distúrbios de motilidade GI. Tomar com água durante as refeições.',
    brands: ['Digedrat / Trimeb — cápsula 200 mg'],
    presentations: [{ label: 'Cápsula 200 mg' }],
    doses: [
      {
        group: 'Adultos — Cólon irritável / dismotilidade GI',
        items: [{ label: 'Dose', value: '200 mg/dose 3×/dia' }],
      },
    ],
    sideEffects: [
      'Tontura', 'Sonolência', 'Fadiga', 'Cefaleia', 'Ondas de calor ou frio', 'Ansiedade',
      'Boca seca', 'Diarreia', 'Dispepsia', 'Dor epigástrica', 'Náusea', 'Constipação',
      'Erupções cutâneas', 'Ginecomastia', 'Retenção urinária', 'Disfunção auditiva',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const antieméticos = [
  {
    id: 'alizaprida',
    name: 'Alizaprida',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antidopaminérgico com efeito antiemético e procinético. Geralmente usado com corticosteroide na prevenção de vômitos por quimioterapia. Não usar por mais de 1 semana. Diluir em 50 mL de SF, aplicação lenta.',
    brands: ['Superan — ampola 50 mg/2 mL'],
    presentations: [{ label: 'Ampola 50 mg/2 mL' }],
    doses: [
      {
        group: 'Crianças > 6 anos',
        items: [{ label: 'IM ou EV', value: '25 mg/dose' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Vômitos por quimioterapia', value: 'IM ou EV: 100–200 mg/dia 3–4×/dia (iniciar 30 min antes)' },
          { label: 'Vômitos pós-operatórios', value: 'EV: 100–200 mg, 30 min antes do fim da anestesia' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência', 'Manifestações extrapiramidais', 'Espasmos faciais', 'Movimentos involuntários',
      'Torcicolo', 'Discinesia tardia', 'Distonia aguda', 'Parkinsonismo', 'Convulsões',
      'Aumento de prolactina', 'Amenorreia', 'Galactorreia', 'Ginecomastia',
      'Hipotensão ortostática', 'Tremor', 'Cefaleia', 'Insônia', 'Vertigem',
      'Dispneia', 'Rubor', 'Transpiração excessiva', 'Diarreia',
    ],
    contraindications: ['Gravidez', 'Lactação', 'Uso de neurolépticos', 'Feocromocitoma', 'Alergia a metoclopramida'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'aprepitanto',
    name: 'Aprepitanto',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético antagonista do receptor de neuroquinina NK1. Prevenção de vômitos por quimioterapia. Pode ser associado com dexametasona e ondansetrona.',
    brands: ['Emend — cáps. 125 mg + 2× 80 mg', 'Fosaprepitanto — fr-amp. 150 mg'],
    presentations: [
      { label: 'Cápsula 125 mg e 80 mg' },
      { label: 'Frasco-ampola 150 mg (fosaprepitanto)' },
    ],
    doses: [
      {
        group: 'Adultos — Prevenção de vômitos por quimioterapia',
        items: [
          { label: '1º dia', value: 'Aprepitanto 125 mg + dexametasona 12 mg + ondansetrona 32 mg' },
          { label: '2º e 3º dias', value: 'Aprepitanto 80 mg + dexametasona 8 mg' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Confusão', 'Cefaleia', 'Depressão', 'Tontura', 'Insônia', 'Ansiedade',
      'Anorexia', 'Perda de peso', 'Fraqueza', 'Fadiga',
      'Diarreia', 'Constipação', 'Dor abdominal', 'Gastrite', 'Dispepsia', 'Disfagia',
      'Faringite', 'Soluços', 'Desidratação',
      'Taquicardia', 'Hipertensão', 'Hipotensão', 'Arritmia',
      'Erupção cutânea', 'Stevens-Johnson', 'Elevação de enzimas hepáticas',
      'Hiperglicemia', 'Distúrbios eletrolíticos', 'Anemia',
    ],
    contraindications: ['Pimozida', 'Terfenadina', 'Astemizol', 'Cisaprida', 'Clozapina', 'Ergotamina', 'Gravidez', 'Lactação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'bromoprida',
    name: 'Bromoprida',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético e procinético. Melhor evitar em crianças — existem alternativas mais seguras. Evitar uso prolongado. Pelo efeito sedativo, evitar dirigir. 1 gota = 0,17 mg.',
    brands: ['Digesan / Plamet / Digesprid — cáps. 10 mg; gotas 4 mg/mL; sol. oral 1 mg/mL; ampola 5 mg/mL'],
    presentations: [
      { label: 'Cápsula 10 mg' },
      { label: 'Gotas 4 mg/mL (1 gota = 0,17 mg)' },
      { label: 'Solução oral 1 mg/mL' },
      { label: 'Ampola 5 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar)',
        items: [
          { label: 'Antiemético oral/IM/EV', value: '0,5–1,0 mg/kg/dia ÷ 3 doses' },
          { label: 'Refluxo gastroesofágico', value: 'Oral: 0,5–1,0 mg/kg/dia, 30 min antes das refeições' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Náuseas e vômitos oral', value: '10–20 mg/dose 3×/dia. Máx: 60 mg/dia' },
          { label: 'Náuseas e vômitos IM/EV', value: '10–20 mg/dose 1–3×/dia' },
          { label: 'Refluxo GE', value: '10 mg/dose 1–3×/dia, 30 min antes das refeições' },
          { label: 'Pós-operatório EV', value: '20 mg antes da cirurgia; depois 20 mg/dia por até 5 dias' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 40 mL/min', value: '50% da dose' }],
    sideEffects: [
      'Sonolência', 'Cefaleia', 'Fadiga', 'Astenia', 'Fraqueza', 'Inquietação', 'Lassidão',
      'Insônia', 'Calafrios', 'Tontura', 'Náusea', 'Distúrbios de acomodação ocular',
      'Espasmos musculares', 'Hipertensão', 'Diarreia', 'Cólicas intestinais',
      'Sintomas extrapiramidais (principalmente crianças e adolescentes)',
      'Galactorreia', 'Ginecomastia', 'Erupções cutâneas', 'Urticária',
    ],
    contraindications: [
      'Hemorragia gastrointestinal', 'Íleo mecânico obstrutivo', 'Feocromocitoma', 'Epilepsia',
      'Obstrução, perfuração ou hemorragia GI', 'Hipersensibilidade à metoclopramida',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar com álcool, sedativos, hipnóticos, narcóticos, IMAO, digoxina, anticolinérgicos.' },
  },
  {
    id: 'domperidona',
    name: 'Domperidona',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antidopaminérgico com efeito antiemético e procinético. Menos efeitos colinérgicos. Evitar uso prolongado. Não administrar com antiácidos. Aguardar 30 min após tomar para ingerir alimentos. Doses altas/prolongadas: risco de hiperprolactinemia.',
    brands: ['Motilium / Domperidona — comp. 10 mg; suspensão oral 1 mg/mL'],
    presentations: [
      { label: 'Comprimido 10 mg' },
      { label: 'Suspensão oral 1 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '< 35 kg', value: '0,25 mg/kg/dose 3×/dia. Máx: 1 mg/kg/dia' },
          { label: '≥ 35 kg', value: 'Mesma dose do adulto' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Refluxo / vômitos (inclusive quimioterapia)', value: '10 mg/dose 3–4×/dia' },
          { label: 'Galactagogo (eficácia discutível)', value: '10 mg/dose 3×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Reduzir para 1–2×/dia' }],
    sideEffects: [
      'Sonolência e sedação (leve)', 'Tontura', 'Disartria', 'Alergia', 'Boca seca',
      'Arritmia', 'Prolongamento do intervalo QT', 'Hipotensão', 'Manifestações extrapiramidais',
      'Prolactina aumentada', 'Ginecomastia', 'Galactorreia (uso prolongado)',
    ],
    contraindications: [
      'Hemorragia', 'Perfuração', 'Obstrução digestiva', 'QT prolongado', 'Prolactinoma',
      'Insuficiência cardíaca congestiva', 'Doença hepática', 'Comprometimento renal',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar com drogas que prolongam intervalo QT.' },
  },
  {
    id: 'dimenidrinato',
    name: 'Dimenidrinato',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Anti-histamínico com efeito antiemético e antivertiginoso. Piridoxina (B6) em associações possui baixa ação antiemética. Para cinetose, tomar 30 min–1 h antes. Pelo efeito sedativo, evitar dirigir. EV: diluir 1 mL (50 mg) em 10 mL de SF e aplicar em 2 min.',
    brands: ['Dramin / Dramavit — comp. 100 mg; cáps. 25 e 50 mg; sol. oral 12,5 mg/5 mL'],
    presentations: [
      { label: 'Comprimido 100 mg' },
      { label: 'Cápsula 25 mg e 50 mg' },
      { label: 'Solução oral 12,5 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Oral', value: '5 mg/kg/dia ou 1,0–1,5 mg/kg/dose 4–6×/dia. Máx: 150 mg/dia' },
          { label: '2 a 5 anos', value: '12,5–25 mg/dose 3–4×/dia. Máx: 75 mg/dia' },
          { label: '6 a 11 anos', value: '25–50 mg/dose 3–4×/dia. Máx: 150 mg/dia' },
          { label: 'IM', value: '1,25 mg/kg/dose 3–4×/dia (> 4 anos: EV)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Náusea / vômito / cinetose IM/EV', value: '50–100 mg/dose 4×/dia. Mín intervalo: 4 h. Máx: 400 mg/dia' },
          { label: 'Oral', value: '50–100 mg/dose 4–6×/dia. Máx: 400 mg/dia' },
          { label: 'Hiperêmese / náusea gravídica', value: '50 mg/dose 4×/dia. Máx: 400 mg/dia' },
          { label: 'Vertigem', value: '50 mg/dose 1–2×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Sonolência', 'Sedação', 'Excitação', 'Insônia', 'Nervosismo', 'Tontura', 'Zumbidos',
      'Incoordenação', 'Fadiga', 'Diplopia', 'Euforia', 'Tremores', 'Convulsões', 'Cefaleia', 'Febre',
      'Efeitos atropínicos', 'Visão borrada', 'Fotossensibilização', 'Asma',
      'Anorexia', 'Náusea', 'Vômitos', 'Diarreia', 'Boca seca',
      'Hipotensão', 'Taquicardia', 'Leucopenia', 'Anemia', 'Agranulocitose', 'Hemólise',
      'Disúria', 'Poliúria',
    ],
    contraindications: ['Glaucoma de ângulo fechado', 'Retenção urinária', 'Demência', 'Comprometimento cognitivo'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Potencializa álcool, sedativos e anticolinérgicos.' },
  },
  {
    id: 'droperidol',
    name: 'Droperidol',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético, ansiolítico e antipsicótico. Butirofenona. Uso restrito hospitalar. Injeção EV lenta: 2–5 min.',
    brands: ['Droperdal — ampola 2,5 mg/mL'],
    presentations: [{ label: 'Ampola 2,5 mg/mL' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [{ label: 'Pré-indução anestésica / pós-operatório', value: '0,05 mg/kg em dose única (0,01 mg/kg pode ser eficaz). Máx: 0,1 mg/kg' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Antiemético', value: 'Dose inicial 2,5 mg; depois 1–2 doses adicionais de 1,25 mg se necessário' },
        ],
      },
    ],
    sideEffects: [
      'Arritmias graves', 'Sedação', 'Sonolência acentuada', 'Distonias', 'Discinesia tardia',
      'Ansiedade', 'Alucinações', 'Hipotensão', 'Taquicardia', 'Impotência',
      'Ganho de peso', 'Calafrios', 'Laringoespasmo', 'Broncoespasmo',
    ],
    contraindications: ['QT longo', 'Cardiopatia grave', 'Arritmia', 'Feocromocitoma'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'granisetrona',
    name: 'Granisetrona',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético antagonista de serotonina. Vômitos por quimioterapia, radioterapia e pós-operatório. Uso restrito hospitalar.',
    brands: ['Kytril — ampola 1 mg/mL'],
    presentations: [{ label: 'Ampola 1 mg/mL' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Vômito por quimioterapia EV', value: '10–40 µg/kg, 30 min antes. Máx: 3 mg/dose' },
          { label: 'Vômito cíclico EV', value: '40 µg/kg 4×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Vômito por quimioterapia EV', value: '10–40 µg/kg, 30 min antes. Máx: 3 mg/dose ou 9 mg/dia' },
          { label: 'Vômito pós-operatório EV', value: '1 mg sem diluir por 30 seg ou diluído por mín 5 min' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Agitação', 'Ansiedade', 'Insônia', 'Sonolência', 'Fraqueza', 'Tontura', 'Hiperestesia',
      'Hipotensão', 'Hipertensão', 'Síncope', 'Constipação', 'Diarreia', 'Dor abdominal',
      'Arritmias', 'Bloqueio AV', 'Fibrilação atrial', 'Prolongamento do QT',
      'Aumento de transaminases',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'meclizina',
    name: 'Meclizina',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético com potencial anticolinérgico muito alto. Reduz estímulos excitatórios do ouvido médio e labirinto. Pelo efeito sedativo, evitar dirigir.',
    brands: ['Meclin — comp. 25 e 50 mg'],
    presentations: [{ label: 'Comprimido 25 mg e 50 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Cinetose', value: '25 mg 1 h antes da viagem; repetir após 12 h se necessário' },
          { label: 'Vertigem', value: '25–100 mg/dia ÷ 1–4 doses' },
          { label: 'Vômitos por radioterapia', value: '50 mg 2 h antes do procedimento' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência', 'Tontura', 'Fadiga', 'Cefaleia', 'Alucinações', 'Ansiedade', 'Nervosismo',
      'Insônia', 'Taquicardia', 'Hipertensão', 'Palpitação', 'Broncoespasmo',
      'Náusea', 'Boca seca', 'Diarreia', 'Colestase', 'Hepatite',
      'Alergia', 'Erupção cutânea', 'Visão borrada',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'metoclopramida',
    name: 'Metoclopramida',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético e procinético. Risco anticolinérgico moderado. NÃO usar em < 1 ano. Melhor evitar em < 18 anos. Uso por > 5 dias ou doses altas contraindicado pela EMA. Injetável restrito a ambiente hospitalar. Bolus EV: diluir para 0,2 mg/mL, mín 3 min. Em idosos: 50% da dose. 1 gota = 0,19 mg.',
    brands: ['Plasil / Metoclopramida / Novosil — comp. 10 mg; ampola 5 mg/mL; gotas 4 mg/mL'],
    presentations: [
      { label: 'Comprimido 10 mg' },
      { label: 'Gotas 4 mg/mL (1 gota = 0,19 mg)' },
      { label: 'Ampola 5 mg/mL (10 mg/2 mL)' },
    ],
    doses: [
      {
        group: 'Crianças > 1 ano (melhor evitar < 18 anos)',
        items: [
          { label: 'Refluxo / gastroparesia oral/EV', value: '0,1–0,2 mg/kg/dose 4×/dia' },
          { label: 'Vômito por quimioterapia EV', value: '0,5–1 mg/kg/dose 4×/dia + dexametasona' },
          { label: 'Facilitar passagem de sonda (< 6 anos)', value: '0,1 mg/kg/dose 1 h antes (2,5–5 mg)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Vômitos oral', value: '10 mg/dose até a cada 8 h' },
          { label: 'Vômitos EV', value: '10–20 mg/dose ou 0,5 mg/kg/dose 3×/dia' },
          { label: 'Prevenção de vômito por quimioterapia EV', value: '1–2 mg/kg 30 min antes; depois a cada 2–4 h. Ou 25–50 mg + difenidramina' },
          { label: 'Pós-operatório EV', value: '10 mg antes do fim da cirurgia; depois 10–20 mg/dose 4×/dia' },
          { label: 'Refluxo / gastroparesia / dismotilidade GI oral', value: '5–10 mg/dose 3×/dia, 30 min antes das refeições e antes de deitar' },
          { label: 'Náusea por enxaqueca IM', value: '10 mg/dose' },
          { label: 'Galactagogo (controverso)', value: '10 mg/dose 3×/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–50 mL/min', value: '75% da dose' },
      { label: 'ClCr 10–29 mL/min', value: '50% da dose' },
      { label: 'ClCr < 10 mL/min', value: '25% da dose' },
    ],
    sideEffects: [
      'Reações extrapiramidais agudas (até 48 h após início, principalmente EV): distonia muscular, trismo, protrusão da língua, espasmos, opistótono, hipertonia',
      'Sonolência', 'Alucinações', 'Sedação', 'Fadiga', 'Astenia', 'Cefaleia',
      'Confusão', 'Agitação', 'Irritabilidade', 'Ansiedade', 'Convulsão em epilépticos',
      'Diarreia', 'Boca seca', 'Constipação', 'Retenção de fluidos', 'Náusea', 'Vômitos',
      'Erupção cutânea', 'Urticária', 'Hipertensão', 'Hipotensão', 'Taquicardia supraventricular',
      'Bloqueio AV', 'Bradicardia', 'Neutropenia', 'Leucopenia',
      'Ginecomastia', 'Galactorreia', 'Amenorreia', 'Porfiria', 'Disúria', 'Impotência',
      'Síndrome neuroléptica maligna',
      'Uso prolongado: tremores, parkinsonismo, discinesia tardia, ansiedade, risco de suicídio',
    ],
    contraindications: ['Feocromocitoma', 'Obstrução gastrointestinal', 'Convulsões mal controladas'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'ondansetrona',
    name: 'Ondansetrona',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético antagonista de serotonina. Doses > 8 mg EV: diluir em 50–100 mL de SF/SGI e infundir em 15 min. Insuficiência hepática: máx 8 mg/dose.',
    brands: ['Vonau Flash / Zofran / Nausedron / Ansetron — comp. orodispersível 4 e 8 mg; comp. revestido 4 e 8 mg; ampola 2 mg/mL'],
    presentations: [
      { label: 'Comprimido orodispersível 4 mg e 8 mg' },
      { label: 'Comprimido revestido 4 mg e 8 mg' },
      { label: 'Ampola 2 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Prevenção vômito por quimioterapia EV', value: '0,15 mg/kg/dose 1–3×. Máx: 8 mg/dose (iniciar 30 min antes, intervalo 8 h)' },
          { label: 'Prevenção vômito por quimioterapia oral (≥ 4 anos)', value: '4 mg/dose 1–3×/dia' },
          { label: 'Prevenção vômito pós-operatório EV (> 1 mês)', value: '< 40 kg: 0,1 mg/kg; ≥ 40 kg: 4 mg. Iniciar antes da indução.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Prevenção vômito por quimioterapia EV', value: '0,15 mg/kg/dose 1–3× (intervalo 4–8 h); ou dose única até 16 mg 30 min antes. Máx: 16 mg/dose' },
          { label: 'Prevenção vômito por quimioterapia oral', value: '24 mg em dose única 30 min antes; ou 8 mg/dose 2–3×/dia' },
          { label: 'Prevenção vômito pós-operatório EV/IM', value: 'Dose única de 4 mg, 30 min antes do fim da anestesia' },
          { label: 'Hiperêmese gravídica', value: '4–8 mg/dose' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Fraqueza', 'Fadiga', 'Convulsões', 'Tontura', 'Obnubilação', 'Sedação', 'Sonolência',
      'Dor muscular', 'Ataxia', 'Sintomas extrapiramidais', 'Acatisia', 'Distonia', 'Discinesia',
      'Rigidez', 'Tremor', 'Parkinsonismo', 'Febre', 'Calafrios',
      'Dor abdominal', 'Boca seca', 'Constipação', 'Diarreia', 'Erupção cutânea', 'Visão borrada',
      'Broncoespasmo', 'Aumento de enzimas hepáticas',
      'Taquicardia', 'Bradicardia', 'Síncope', 'Flutter atrial', 'Angina', 'Aumento do QT',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'palonosetrona',
    name: 'Palonosetrona',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Antiemético antagonista de serotonina de segunda geração.',
    brands: ['Onicit / Cloridrato de palonosetrona — fr-amp. 0,05 mg/mL'],
    presentations: [{ label: 'Frasco-ampola 0,05 mg/mL' }],
    doses: [
      {
        group: 'Crianças (1 mês a 17 anos)',
        items: [{ label: 'Vômito por quimioterapia EV', value: '20 µg/kg 30 min antes. Máx: 1,5 mg' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Vômito por quimioterapia EV', value: '0,25 mg em 15 min, 30 min antes' },
          { label: 'Vômito pós-operatório EV', value: '75 µg antes do fim da anestesia' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Tontura', 'Ansiedade', 'Arritmia', 'Prolongamento de QTc',
      'Hipotensão', 'Bradicardia', 'Prurido', 'Constipação', 'Diarreia',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'palonosetrona-netupitanto',
    name: 'Palonosetrona + Netupitanto',
    category: 'antiespasmadicos-antieméticos',
    observations: 'Combinação de antagonista de serotonina (5-HT3) + antagonista de NK1.',
    brands: ['Akynzeo — cápsula 0,5 + 300 mg'],
    presentations: [{ label: 'Cápsula 0,5 + 300 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Vômito por quimioterapia', value: '1 cápsula 1 hora antes' }],
      },
    ],
    sideEffects: ['Cefaleia', 'Fadiga', 'Fraqueza', 'Eritema', 'Dispepsia', 'Constipação'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];