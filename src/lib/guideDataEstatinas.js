// Antilipemiantes — Estatinas

export const estatinas = [
  {
    id: 'rosuvastatina',
    name: 'Rosuvastatina',
    suffix: 'Rosuvastatina cálcica',
    category: 'estatinas',
    observations: 'Hipolipemiante de intensidade moderada, inibidor da HMG-CoA redutase. Melhor tomar à noite, ao deitar.',
    brands: [
      'Crestor (AstraZeneca) — Comprimidos revestidos: 5 / 10 / 20 / 40 mg',
      'Rusovas (Sigma) / Trezor (Azhi) / Ruvascor (Valefarma) / Vivacor / Ruscor (Torrent) / Rosuvast (EMS) — Comprimidos revestidos: 10 e 20 mg',
      'G Rosuvastatina cálcica — Comprimidos revestidos: 5–10–20 mg',
    ],
    presentations: [{ label: 'Comprimido revestido 5 / 10 / 20 / 40 mg' }],
    doses: [
      {
        group: 'Crianças > 8 anos',
        items: [
          { label: 'Meninas', value: 'Iniciar 1 ano após a menarca' },
          { label: '8 a 9 anos', value: '5 a 10 mg/dia ÷ 1' },
          { label: '≥ 10 anos', value: '5 a 20 mg/dia ÷ 1' },
        ],
      },
      {
        group: 'Adultos — Hipercolesterolemia',
        items: [
          { label: 'Início', value: 'Iniciar 5 mg/dia ÷ 1; ajustar conforme redução desejada' },
          { label: 'Redução LDL 30-50%', value: '5 a 10 mg/dia ÷ 1' },
          { label: 'Redução LDL ≥ 50%', value: '20 a 40 mg/dia ÷ 1. Dose máxima: 40 mg/dia' },
        ],
      },
    ],
        renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
    sideEffects: ['Cefaleia, astenia, vertigem', 'Náusea, vômito, dor abdominal, constipação, pancreatite', 'Aumento de enzimas hepáticas, insuficiência hepática', 'Mialgia, rabdomiólise', 'Prurido, exantema, urticária', 'Diabetes, aumento de hemoglobina, hipoglicemia', 'Hematúria, proteinúria'],
    contraindications: ['Doença hepática ativa', 'Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "May be taken with or without food; may be taken at any time of the day; swallow tablet whole.",
      monitoring: "Yost Pediatric patients: Baseline: ALT, AST, and creatine phosphokinase levels (CPK); fasting lipid panel (FLP) and repeat ALT and AST should be checked after 4 weeks of therapy; if no myopathy symptoms or laboratory abnor-malities, then monitor FLP...",
  },

  {
    id: 'sinvastatina',
    name: 'Sinvastatina',
    category: 'estatinas',
    observations: 'Hipolipemiante de alta intensidade, inibidor da HMG-CoA redutase. O comprimido não deve ser partido. Se usar 80 mg/dia, dividir em 3 doses: 20 mg (manhã) + 20 mg (tarde) + 40 mg (noite). Melhor tomar à noite, ao deitar.',
    brands: [
      'Zocor (MSD) — Comprimidos revestidos: 10 / 40 mg',
      'Sinvalip (Sigma) / Sinvascor (Baldacci) / Sinvasmax (Global) / Sinvasin (Biolab) — Comprimidos revestidos: 10–20–40 mg',
      'G Sinvastatina — Comprimidos revestidos: 10–20–40–80 mg',
      'Sinvastatina + Ezetimiba: Vytorin (MSD) — Comprimidos: 10+10 / 10+40 / 10+80 mg',
    ],
    presentations: [{ label: 'Comprimido revestido 10 / 20 / 40 / 80 mg' }],
    doses: [
      {
        group: 'Crianças > 10 anos',
        items: [
          { label: 'Meninas', value: 'Iniciar 1 ano após a menarca' },
          { label: 'Oral', value: 'Iniciar 10 mg/dia; ajustar a cada 4 a 6 semanas. Dose máxima: 40 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Início', value: 'Iniciar 10 mg/dia ÷ 1; ajustar conforme redução desejada' },
          { label: 'Redução LDL < 30%', value: '10 mg/dia ÷ 1' },
          { label: 'Redução LDL 30-50%', value: '20 a 40 mg/dia ÷ 1' },
          { label: 'Redução LDL ≥ 50%', value: '80 mg/dia ÷ 1 ou 40 mg com ezetimiba 10 mg' },
          { label: 'Interação com outras drogas', value: 'Usar no máximo 20 mg com drogas que aumentam risco de rabdomiólise' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Iniciar 10 mg; monitorar constantemente' }],
    sideEffects: [
      'Cefaleia, ansiedade, depressão, neuropatia, neuropatia periférica, paralisia facial',
      'Constipação, dispepsia, náusea, gastrite, hepatite, icterícia, dor abdominal',
      'Erupção cutânea, anafilaxia, angioedema, dermatomiosite, urticária, vasculite, epidermólise',
      'Gripe e resfriado',
      'Ginecomastia, impotência, disfunção tireoidiana',
      'Colestase hepática, aumento de enzimas hepáticas, cirrose, insuficiência hepática',
      'Anemia hemolítica, leucopenia, plaquetopenia',
      'Miopatia (↑ CPK), dor muscular',
      'Agranulocitose, disfunção renal',
      'ALERTA: Rabdomiólise → insuficiência renal aguda (risco 8× maior com genfibrozila, verapamil, diltiazem, fluconazol, antirretrovirais, azólicos, ciclosporina)',
    ],
    contraindications: ['Doença hepática ativa', 'Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
  },

  {
    id: 'atorvastatina',
    name: 'Atorvastatina',
    suffix: 'Atorvastatina cálcica',
    category: 'estatinas',
    observations: 'Hipolipemiante de alta intensidade. O comprimido revestido não deve ser partido. Melhor tomar à noite, ao deitar.',
    brands: [
      'Citalor (Pfizer) / Kolevas / Atorval (Biointerativa) / Lipistat (Sigma) — Comprimidos revestidos: 10–20–40–80 mg',
      'Ateroma (Legrand) / Atorless (Comed) / Lipitor / Luminarte (Sandoz) — Comprimidos revestidos: 10–20–40–80 mg',
      'G Atorvastatina cálcica — Comprimidos revestidos: 10–20–40–80 mg',
    ],
    presentations: [{ label: 'Comprimido revestido 10 / 20 / 40 / 80 mg' }],
    doses: [
      {
        group: 'Crianças > 10 anos',
        items: [
          { label: 'Meninas', value: '1 a 2 anos após a menarca' },
          { label: 'Oral', value: 'Iniciar 10 mg/dia ÷ 1. Se necessário, ajustar até máximo 20 mg/dia ÷ 1 após 4 semanas' },
        ],
      },
      {
        group: 'Adultos — Hipercolesterolemia',
        items: [
          { label: 'Início', value: 'Iniciar 10 mg/dia ÷ 1; ajustar conforme redução desejada' },
          { label: 'Redução LDL 30-50%', value: '10 a 20 mg/dia ÷ 1' },
          { label: 'Redução LDL ≥ 50%', value: '40 a 80 mg/dia ÷ 1. Dose máxima: 80 mg/dia' },
          { label: 'Ajuste', value: 'Após 2 a 4 semanas' },
        ],
      },
    ],
        renalAdjustment: [
      { label: "Ajuste renal (Lexicomp)", value: "Children 210 years and Adolescents: Because atorvas-tatin does not undergo significant renal excretion, dose modification is not necessary. Dialysis: Due to the..." },
    ],
    sideEffects: [
      'Cefaleia, fraqueza, artralgia, tontura',
      'Edema, dor torácica ou costas, artrite',
      'Erupção cutânea, artralgias, mialgia — risco de miosite: dosar CPK',
      'Dor abdominal, constipação, diarreia, dispepsia',
      'Aumento de enzimas hepáticas, hepatite (vigiar)',
      'Infecção, rinite, sinusite, laringite, bronquite, IVAS',
    ],
    contraindications: ['Doença hepática ativa', 'Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
      hepaticAdjustment: "Contraindicado ou evitar em insuficiência hepática descompensada.",
      preparation: "Oral: May be taken com ou sem alimentos or time of day. Engolir inteiro; do not break, crush, or chew.",
      monitoring: "Pediatric patients: Baseline: ALT, AST, and CPK; fasting lipid panel (FLP) and repeat ALT and AST should be checked after 4 weeks of therapy; if no myopathy symptoms or laboratory abnormalities, then monitor FLP, ALT, and AST every 3 to 4 months duri...",
  },

  {
    id: 'fluvastatina',
    name: 'Fluvastatina',
    category: 'estatinas',
    observations: 'Hipolipemiante de intensidade moderada, inibidor da HMG-CoA redutase.',
    brands: ['Lescol XL (Novartis) — Comprimidos revestidos: 80 mg', 'Lescol (Novartis) / Fluvastatin (Pfizer) — Cáps.: 20 e 40 mg'],
    presentations: [{ label: 'Cápsula 20 mg' }, { label: 'Cápsula 40 mg' }, { label: 'Comprimido revestido 80 mg' }],
    doses: [
      {
        group: 'Crianças > 10 anos',
        items: [
          { label: 'Oral', value: 'Iniciar 20 mg/dia ÷ 1. Se necessário, ajustar até máximo 40 mg ÷ 1 após 6 semanas' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Redução LDL < 30%', value: '20 mg/dia ÷ 1' },
          { label: 'Redução LDL 30-50%', value: '80 mg/dia ÷ 1. Dose máxima: 80 mg/dia' },
        ],
      },
    ],
    sideEffects: ['Cefaleia, fadiga, insônia, tontura, depressão, febre', 'Exantema', 'Dispepsia, dor abdominal, diarreia, náusea, indigestão', 'Hepatite, pancreatite (raro)', 'Aumento de transaminases', 'Lúpus, mialgia, rabdomiólise → IRA'],
    contraindications: ['Doença hepática ativa', 'Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Fluvastatin may be taken com ou sem alimentos. Immediate release capsules: Do not open capsules; do , not use two 40 mg capsules for an 80 mg once daily dose; extended release formulation should be used. Extended release tablet: Do not break, chew, or crush; engolir inteiro.",
      monitoring: "Pediatric patients: Baseline: ALT, AST, and creatine phosphokinase levels (CPK); fasting lipid panel (FLP) and repeat ALT and AST should be checked after 4 weeks of therapy; if no myopathy symptoms or laboratory abnor-malities, then monitor FLP, ALT...",
  },

  {
    id: 'lovastatina',
    name: 'Lovastatina',
    category: 'estatinas',
    observations: 'Hipolipemiante de intensidade moderada, inibidor da HMG-CoA redutase. Melhor tomar à noite, ao deitar. Ajustar dose conforme LDL a cada 4 semanas.',
    brands: ['Lipochol (NeoQuímica) — Comprimidos: 20 mg', 'Cáps.: 20 e 40 mg (genérico)'],
    presentations: [{ label: 'Cápsula 20 mg' }, { label: 'Cápsula 40 mg' }],
    doses: [
      {
        group: 'Crianças > 10 anos',
        items: [
          { label: 'Meninas', value: 'Iniciar 1 ano após menarca' },
          { label: 'Redução LDL < 20%', value: 'Iniciar 10 mg/dia ÷ 1; ajustar até máximo 20 mg/dia ÷ 1' },
          { label: 'Dose máxima', value: '40 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Início', value: 'Iniciar 20 mg/dia ÷ 1; ajustar conforme redução desejada' },
          { label: 'Redução LDL < 30%', value: '20 mg/dia ÷ 1' },
          { label: 'Redução LDL 30-50%', value: '40 mg ÷ 1. Dose máxima: 80 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, tontura, insônia, tremor, vertigem, depressão, ansiedade, ↓ memória',
      'Erupção cutâneas, prurido, dermatomiosite, impotência, ginecomastia',
      'Visão borrada, diarreia, dispepsia, vômitos, dor abdominal, refluxo, anorexia, boca seca',
      'Colestase, dor torácica',
      'Artralgia, câimbra, fraqueza, claudicação, IVAS',
    ],
    contraindications: ['Doença hepática ativa', 'Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
      renalAdjustment: [
      { label: "ClCr <30 mL/minute", value: "Immediate release: Children 210 years and Adoles-cents: Doses exceeding 20 mg/day should be carefully considered and implemented cautiously" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Oral: Immediate release tablets: Take with the evening meal. Extended release tablets: Take at bedtime; do not crush or chew.",
      monitoring: "Pediatric patients: Baseline: ALT, AST, and creatine phosphokinase levels (CPK); fasting lipid panel (FLP) and repeat ALT and AST should be checked after 4 weeks of therapy; if no myopathy symptoms or laboratory abnor-malities, then monitor FLP, ALT...",
  },

  {
    id: 'pitavastatina',
    name: 'Pitavastatina',
    category: 'estatinas',
    observations: 'Hipolipemiante de intensidade moderada, inibidor da HMG-CoA redutase. O comprimido não pode ser partido. Melhor tomar à noite, ao deitar.',
    brands: ['Livalo (Kowa) / Lester / Pivast (Momenta) — Comprimidos revestidos: 2 e 4 mg'],
    presentations: [{ label: 'Comprimido revestido 2 mg' }, { label: 'Comprimido revestido 4 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Redução LDL 30-50%', value: '2 a 4 mg/dia ÷ 1' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 15 a 60 mL/min', value: '50% da dose' },
    ],
    sideEffects: ['Mialgia, artralgia, dor nas costas', 'Diarreia, constipação', 'Sintomas nasais, faringite', 'Aumento de transaminases'],
    contraindications: ['Doença hepática ativa', 'Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
  },

  {
    id: 'pravastatina',
    name: 'Pravastatina',
    suffix: 'Pravastatina sódica',
    category: 'estatinas',
    observations: 'Hipolipemiante de intensidade moderada, inibidor da HMG-CoA redutase. Melhor tomar à noite, ao deitar.',
    brands: ['Comprimidos: 10–20–40 mg (genérico)', 'G Pravastatina sódica — Comprimidos: 10–20–40 mg'],
    presentations: [{ label: 'Comprimido 10 / 20 / 40 mg' }],
    doses: [
      {
        group: 'Crianças > 8 anos',
        items: [{ label: 'Oral', value: '10 a 20 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Início', value: 'Iniciar 10 mg/dia ÷ 1; ajustar conforme redução desejada' },
          { label: 'Redução LDL < 30%', value: '10 a 20 mg/dia ÷ 1' },
          { label: 'Redução LDL 30-50%', value: '40 a 80 mg/dia ÷ 1' },
          { label: 'Disfunção renal/hepática', value: '10 a 20 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, fadiga, tontura, ↓ memória, neuropatia',
      'Rabdomiólise → IRA',
      'Erupção cutânea, descoloração da pele, fotossensibilidade, anafilaxia, epidermólise, eritema multiforme',
      'Náuseas, vômito, dispepsia, pirose, icterícia, hepatopatia, pancreatite',
      'Visão borrada, opacidade da córnea e cristalino',
      'Mialgia, tosse, gripe',
    ],
    contraindications: ['Elevação persistente de transaminases', 'Mulheres em risco de gravidez'],
  },
];