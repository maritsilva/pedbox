export const outrosBacterianos = [
  {
    id: "colistina",
    name: "Colistina",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Colis-tek / Colomycin", form: "Frasco-ampola 150 mg" },
      { brand: "Colis-tek / Colomycin", form: "Frasco-ampola 1.000.000 UI" }
    ],
    observation: "Polimixina usada na infecção por Gram-negativos multirresistentes. Não usar como monoterapia; associar carbapenêmicos.",
    doses: {
      children: "2,5 a 5 mg/kg/dia, dividido em 2 a 4 doses. Intratecal: 1 a 4,2 mg/dia. FC EV: 3 a 5 mg/kg/dia",
      adults: "2,5 a 5 mg/kg/dia. Evitar > 300 mg/dia. Casos graves EV: 300 mg ataque, 150 mg/dose 2x/dia"
    },
    renalAdjustment: "ClCr 50-80: 2,5-3,5 mg/kg/dia ÷2. ClCr 30-50: 2,5 mg/kg/dia ÷1-2. ClCr 10-29: 1,5 mg/kg a cada 36h",
    sensibility: "P. aeruginosa multirresistente, A. baumannii, Klebsiella, E. coli resistentes",
    resistance: "Proteus, Burkholderia, Serratia, Neisseria",
    sideEffects: ["Parestesia perioral", "Vertigem", "Confusão", "Convulsão", "Nefrotoxicidade", "Meta-hemoglobinemia"]
  },
  {
    id: "daptomicina",
    name: "Daptomicina",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Cubicin", form: "Frasco-ampola 500 mg" }
    ],
    observation: "Lipopeptídeo para Staphylococcus resistentes à oxacilina/linezolida. Para pacientes que não toleram vancomicina.",
    doses: {
      children: "4 a 6 mg/kg/dia. Endocardite: <6 anos 10 mg/kg/dia, ≥6 anos 6 mg/kg/dia. Infecções pele: 7 a 10 mg/kg/dia",
      adults: "Infecções pele: 4 mg/kg/dia por 7-14 dias. Endocardite/bacteremia: 8 a 10 mg/kg/dia. Máximo: 12 mg/kg/dia"
    },
    renalAdjustment: "ClCr <30 ou diálise: 1 dose a cada 48h",
    sensibility: "Todos os Gram-positivos, inclusive resistentes",
    resistance: "Ineficaz em pneumonias (inativada por surfactante)",
    sideEffects: ["Cefaleia", "Fraqueza", "Hipotensão", "Edema", "Arritmia", "Diarreia", "Aumento de CPK"]
  },
  {
    id: "fosfomicina",
    name: "Fosfomicina",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Monuril", form: "Sachê 3g" }
    ],
    observation: "Único do grupo. Usado em infecção urinária de adultos.",
    doses: {
      children: "100 a 400 mg/kg/dia ÷2-4 doses (apenas parenteral multirresistentes)",
      adults: "Mulher: 3g dose única. Homem: 3g/dose a cada 2-3 dias x3 doses. Prostatite: 21 dias"
    },
    sensibility: "E. coli, Pseudomonas, S. aureus, Pneumococo",
    resistance: "Acinetobacter, B. fragilis, Anaeróbios",
    sideEffects: ["Cefaleia", "Tontura", "Fadiga", "Diarreia", "Náusea", "Queimação anal", "Neutropenia"]
  },
  {
    id: "metronidazol",
    name: "Metronidazol",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Flagyl", form: "Comprimido 250mg ou 400mg" },
      { brand: "Flagyl", form: "Suspensão 200mg/5mL" },
      { brand: "Flagyl", form: "Solução injetável 5mg/mL" }
    ],
    observation: "Anaerobicida de primeira escolha. Amebicida, giardicida. Boa concentração em abscessos.",
    doses: {
      children: "Anaerobicida: 30-50 mg/kg/dia ÷3 (máx 2250). Giardíase: 15-30 mg/kg/dia ÷2-3 x7-10d",
      adults: "Anaerobicida: 500mg a cada 8h. Casos graves: 15 mg/kg ataque EV. Máximo 4g/dia"
    },
    renalAdjustment: "ClCr <10: 50% dose a cada 4h. Hemodialisável: 50-100%",
    sensibility: "Bacteroides, Peptococcus, Clostridium, C. difficile, Fusobacterium",
    resistance: "Bactérias aeróbicas, Eubacterium, Propionibacterium, Lactobacillus",
    sideEffects: ["Cefaleia", "Tontura", "Náusea", "Gosto metálico", "Urina vermelho-escura", "Neuropatia periférica"]
  },
  {
    id: "linezolida",
    name: "Linezolida",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Zyvox", form: "Comprimido 600mg" },
      { brand: "Zyvox", form: "Solução injetável 2mg/mL" }
    ],
    observation: "Oxazolidinona. Única opção oral para Staphylococcus resistentes à oxacilina.",
    doses: {
      children: "30 mg/kg/dia ÷3 (máx 600 mg/dose). TB multirresistente: 20-24 mg/kg/dia ÷2",
      adults: "600mg/dose 2x/dia por 10-14 dias. TB multirresistente: 600mg 1-2x/dia até 4 meses"
    },
    renalAdjustment: "Não exige ajuste",
    sensibility: "Staphylococcus resistentes, Streptococcus, Enterococos resistentes à vancomicina",
    resistance: "Todos Gram-negativos (exceto ação fraca em Haemophilus)",
    sideEffects: ["Tontura", "Insônia", "Náusea", "Diarreia", "Colite", "Trombocitopenia", "Neuropatia"]
  },
  {
    id: "nifuroxazida",
    name: "Nifuroxazida",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Passifuril", form: "Suspensão 200mg/5mL" }
    ],
    observation: "Derivado nitrofurânico. Antibacteriano intestinal pouco absorvido.",
    doses: {
      adults: "800mg/dia ÷2-4 doses. Se persistir após 5 dias, suspender e fazer antibiograma"
    },
    sideEffects: ["Náusea", "Vômito", "Diarreia", "Tontura", "Erupção cutânea"],
    contraindications: "Gravidez"
  },
  {
    id: "nitrofurantoina",
    name: "Nitrofurantoína",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Macrodantina", form: "Cápsula 100mg" }
    ],
    observation: "Derivado nitrofurânico. Antibacteriano para ITU.",
    doses: {
      children: "5-7 mg/kg/dia ÷4 por 3-7 dias. Profilaxia: 1-2 mg/kg/dose 1x/dia",
      adults: "ITU baixa: 50-100mg 4x/dia por 3-7 dias. Profilaxia: 50-100mg ao deitar"
    },
    renalAdjustment: "ClCr <60: contraindicado",
    sensibility: "E. coli, Shigella, Klebsiella, Enterococcus, Proteus",
    resistance: "S. aureus, Serratia, Pseudomonas",
    sideEffects: ["Tontura", "Cefaleia", "Neuropatia", "Náusea", "Anemia megaloblástica", "Fibrose pulmonar"],
    contraindications: "Anúria, Oligúria, Gestantes a termo, Neonatos"
  },
  {
    id: "polimixina-b",
    name: "Polimixina B",
    catLabel: "Outros Antibacterianos",
    catIcon: "💊",
    presentations: [
      { brand: "Polixi B / Bedfordpoly", form: "Frasco-ampola 500.000 UI" },
      { brand: "Polixi B / Bedfordpoly", form: "Frasco-ampola 1.000.000 UI" }
    ],
    observation: "Para Pseudomonas, Acinetobacter, E. coli multirresistentes. Usar sempre em associação.",
    doses: {
      adultsChildren: "EV: 15.000-25.000 UI/kg/dia ÷4-6. IM: 25.000-30.000 UI/kg/dia ÷4-6. Intratecal: 50.000 UI/dose"
    },
    sensibility: "Pseudomonas, Acinetobacter, E. coli, Klebsiella multirresistentes",
    sideEffects: ["Irritabilidade", "Fraqueza", "Sonolência", "Paralisia", "Apneia", "Disfunção renal"]
  }
];