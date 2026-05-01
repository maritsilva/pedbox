export const antifungicosAzolicos = [
  {
    id: "cetoconazol",
    name: "Cetoconazol",
    catLabel: "Antifúngicos Azólicos",
    catIcon: "🍄",
    presentations: [
      { brand: "Cetoconazol", form: "Comprimido 200mg" }
    ],
    observation: "Antifúngico imidazólico. Evitar em dermatofitoses pela maior toxicidade.",
    doses: {
      children: ">2 anos: 3-7 mg/kg/dia (máx 400mg). <20kg: 50mg. 20-40kg: 100mg. >40kg: 200mg",
      adults: "Usual: 200mg 1x/dia ou 400mg/dia. Blastomicose: até 400mg/dia x6 meses"
    },
    renalAdjustment: "Não exige ajuste",
    sensibility: "Candida, Blastomyces, Histoplasma, Cryptococcus, Aspergillus",
    sideEffects: ["Cefaleia", "Tontura", "Náusea", "Vômito", "Dor abdominal", "Arritmia cardíaca", "Hepatotoxicidade"],
    interactions: "Evitar com terfenadina, lovastatina, domperidona — risco de QT prolongado"
  },
  {
    id: "fluconazol",
    name: "Fluconazol",
    catLabel: "Antifúngicos Azólicos",
    catIcon: "🍄",
    presentations: [
      { brand: "Zoltec", form: "Cápsula 100mg" },
      { brand: "Zoltec", form: "Cápsula 150mg" },
      { brand: "Zoltec", form: "Solução injetável 2mg/mL" }
    ],
    observation: "Triazólico. Baixa toxicidade. Boa penetração no SNC. Ineficaz em Candida krusei/glabrata.",
    doses: {
      children: "Inicial: 6-12 mg/kg. Manutenção: 3-12 mg/kg/dia (máx 600mg). Meningite criptocócica: 5-6 mg/kg 2x/dia",
      adults: "Candidíase oral: 100-200mg/dia x7-14d. Esofágica: 200-400mg/dia. Sistêmica: 800mg ataque, 400mg/dia"
    },
    renalAdjustment: "ClCr 10-50: 50% dose. ClCr <10: 50% dose a cada 48h",
    sensibility: "Candida albicans, C. tropicalis, C. parapsilosis, Cryptococcus neoformans, Coccidioides",
    resistance: "Candida krusei, algumas C. glabrata",
    sideEffects: ["Cefaleia", "Convulsões", "Náusea", "Vômito", "Dor abdominal", "Hepatotoxicidade", "Síndrome Stevens-Johnson"]
  },
  {
    id: "itraconazol",
    name: "Itraconazol",
    catLabel: "Antifúngicos Azólicos",
    catIcon: "🍄",
    presentations: [
      { brand: "Sporanox", form: "Cápsula 100mg" },
      { brand: "Sporanox", form: "Solução oral 10mg/mL" }
    ],
    observation: "Triazólico lipófilo. Excelente para Aspergillus e Blastomyces. Melhor absorção com alimento ácido.",
    doses: {
      children: "Fúngicas: 5 mg/kg/dia x3-6 sem ou até 6 meses. Aspergilo: 5-10 mg/kg/dia",
      adults: "Blastomicose: 200mg 1-2x/dia x3-6 meses. Aspergilose: 200-400mg/dia. Histoplasmose: 200mg 2-3x/dia"
    },
    sensibility: "Candida, Aspergillus, Blastomyces, Histoplasma, Cryptococcus, Paracoccidioides",
    sideEffects: ["Cefaleia", "Náusea", "Vômito", "Dor abdominal", "Hepatotoxicidade", "Edema periférico", "Hipopotassemia"],
    interactions: "Evitar com estatinas, carbamazepina — redução significativa de níveis"
  },
  {
    id: "miconazol",
    name: "Miconazol",
    catLabel: "Antifúngicos Azólicos",
    catIcon: "🍄",
    presentations: [
      { brand: "Daktarin oral gel", form: "Gel oral 20mg/g" }
    ],
    observation: "Imidazólico. Primeira escolha em lesões localizadas (glossite romboidal, queilite angular).",
    doses: {
      adultsChildren: ">6 meses: aplicar pequena quantidade no local 4x/dia por 3-7 dias após desaparecimento sintomas"
    },
    sideEffects: ["Glossalgia", "Desconforto local", "Cefaleia", "Fadiga", "Diarreia", "Alteração do paladar"]
  }
];