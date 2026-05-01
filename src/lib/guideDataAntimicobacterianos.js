export const antimicobacterianos = [
  {
    id: "estreptomicina",
    name: "Estreptomicina — S",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Estreptomicina", form: "Frasco-ampola 200mg/mL" },
      { brand: "Estreptomicina", form: "Solução injetável 1000mg" }
    ],
    observation: "Aminoglicosídeo de primeira linha para TB. Não penetra bem no SNC.",
    doses: {
      children: "TB: 15-20 mg/kg/dia 1x/dia (máx 1g). Endocardite: 20-30 mg/kg/dia ÷2",
      adults: "TB: 15 mg/kg/dia IM. Endocardite: 2g/dia ÷2 por 2 sem, depois 1g/dia por 4 sem"
    },
    renalAdjustment: "ClCr 10-50: 1 dose a cada 24-72h. ClCr <10: 1 dose a cada 72-96h",
    sideEffects: ["Vômito", "Anorexia", "Cefaleia", "Neurite óptica", "Hiperuricemia", "Anafilaxia"]
  },
  {
    id: "etambutol",
    name: "Etambutol — E",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Etambutol", form: "Comprimido 400mg" },
      { brand: "Etambutol", form: "Solução oral 125mg/5mL" }
    ],
    observation: "Tuberculostático usado em meningite.",
    doses: {
      children: "TB: 25 mg/kg/dia em associação",
      adults: "TB: 1200 mg/dia. Micobactéria atípica: 15 mg/kg/dia com claritromicina"
    },
    renalAdjustment: "ClCr 10-29: 15-25 mg/kg a cada 36h. ClCr <10: 15-25 mg/kg a cada 48h",
    sideEffects: ["Neurite óptica", "Cefaleia", "Hiperuricemia", "Náusea", "Alergia"]
  },
  {
    id: "isoniazida",
    name: "Isoniazida — H",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Isoniazida", form: "Comprimido 100mg" }
    ],
    observation: "Tuberculostático eficaz e menos tóxico. Usado isoladamente nas fases de consolidação.",
    doses: {
      children: "TB: 7-15 mg/kg/dia (máx 300mg). TB latente: 10-15 mg/kg/dia ou 20-40 mg/kg 2x/sem",
      adults: "TB: 10 mg/kg/dia (máx 300mg). TB latente: 5-10 mg/kg/dia por 9 meses"
    },
    renalAdjustment: "Insuficiência renal: não exige ajuste",
    sideEffects: ["Hepatite", "Fadiga", "Deficiência de piridoxina", "Convulsão", "Neurite", "Ginecomastia"]
  },
  {
    id: "pirazinamida",
    name: "Pirazinamida — Z",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Pirazinamida", form: "Comprimido 500mg" },
      { brand: "Pirazinamida", form: "Suspensão 150mg/5mL" }
    ],
    observation: "Tuberculostático bactericida com ação intracelular. Usada nos primeiros 2 meses.",
    doses: {
      children: "TB: 25-35 mg/kg/dia (máx 2g)",
      adults: "TB: 1000-2000 mg/dia. AIDS quimioprofilaxia: 300 mg/dia"
    },
    renalAdjustment: "ClCr <10: 1 dose 3x/sem",
    sideEffects: ["Hepatotoxicidade", "Hiperuricemia", "Porfiria", "Artralgia", "Náusea", "Trombocitopenia"]
  },
  {
    id: "rifampicina",
    name: "Rifampicina — R",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Rifaldin", form: "Cápsula 300mg" },
      { brand: "Rifaldin", form: "Suspensão 100mg/5mL" }
    ],
    observation: "Tuberculostático. Eficaz contra S. aureus resistente, Gram-positivos e Gram-negativos.",
    doses: {
      children: "TB: 10-20 mg/kg/dia (máx 600mg). Meningocócica: 20 mg/kg/dia 2x/dia. Hanseníase: 10 mg/kg/dose mensal",
      adults: "TB: 450-600 mg/dia. Meningococo: 600mg 2x/dia por 2 dias. Hanseníase: 600mg mensal"
    },
    sideEffects: ["Anorexia", "Náusea", "Hepatite", "Leucopenia", "Erupção cutânea", "Alteração de comportamento"],
    interactions: "Reduz efeito de contraceptivos e varfarina"
  },
  {
    id: "etionamida",
    name: "Etionamida",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Etionamida", form: "Comprimido 250mg" }
    ],
    observation: "Tuberculostático para TB multirresistente. Análogo estrutural da isoniazida.",
    doses: {
      adultsChildren: "TB resistente: iniciar 250mg/dia, aumentar 250mg/dia a cada 2 dias. Usual: 750mg/dia ÷3. Máx: 1000mg/dia"
    },
    renalAdjustment: "ClCr <30: máximo 500mg/dia",
    sideEffects: ["Hipotireoidismo", "Neurite periférica", "Náusea", "Vômito", "Hepatotoxicidade"]
  },
  {
    id: "rifabutina",
    name: "Rifabutina",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Mycobutin", form: "Cápsula 150mg" }
    ],
    observation: "Tuberculostático do grupo da rifampicina. Para micobactérias atípicas.",
    doses: {
      children: "TB: 5 mg/kg/dia 5x/sem (máx 300mg). M. avium: 10-20 mg/kg/dia com macrolídeo",
      adults: "TB ativa: 5 mg/kg/dia (usual 300-600mg). M. avium: 300mg/dia por 1-2 meses"
    },
    renalAdjustment: "ClCr <30: 50% dose",
    sideEffects: ["Cefaleia", "Náusea", "Icterícia", "Mialgia", "Neutropenia", "Urina avermelhada"]
  },
  {
    id: "terizidona",
    name: "Terizidona",
    catLabel: "Antimicobacterianos",
    catIcon: "🧬",
    presentations: [
      { brand: "Terizidona", form: "Cápsula 250mg" }
    ],
    observation: "Tuberculostático para TB multirresistente. Associar piridoxina.",
    doses: {
      children: "15-20 mg/kg/dia",
      adults: "TB resistente: 500-1000 mg/dia"
    },
    sideEffects: ["Cefaleia", "Tremores", "Convulsão", "Psicose", "Neuropatia periférica", "Náusea"]
  },
  {
    id: "clofazimina",
    name: "Clofazimina",
    catLabel: "Hanseníase",
    catIcon: "🧬",
    presentations: [
      { brand: "Clofazimina", form: "Cápsula 50mg ou 100mg" }
    ],
    observation: "Distribuição gratuita. Hanseníase multibacilar.",
    doses: {
      children: "Multibacilar: 5 mg/kg/dose mensal (máx 150mg) e 1 mg/kg/dose dias alternados (máx 50mg)",
      adults: "Multibacilar: 300mg mensal com rifampicina x12 doses e 50mg/dia com dapsona x12-18 meses"
    },
    sideEffects: ["Pele acinzentada", "Urina avermelhada", "Pele seca", "Prurido", "Dor abdominal", "Irritação conjuntival"]
  },
  {
    id: "dapsona",
    name: "Dapsona",
    catLabel: "Hanseníase",
    catIcon: "🧬",
    presentations: [
      { brand: "Dapsona", form: "Comprimido 100mg" }
    ],
    observation: "Sulfonamida. Distribuição gratuita em poliquimioterapia mensal.",
    doses: {
      children: "Hanseníase: 1-2 mg/kg/dia (máx 50mg). Dermatite herpetiforme: 0,5-2 mg/kg/dia",
      adults: "Hanseníase: 100mg/dia. Toxoplasmose: 200mg/sem. Púrpura: 100mg/dia x3 sem"
    },
    sideEffects: ["Distúrbios psiquiátricos", "Cefaleia", "Meta-hemoglobinemia", "Cianose", "Hemólise grave em G6PD", "Agranulocitose"]
  }
];