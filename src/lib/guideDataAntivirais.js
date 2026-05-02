export const antiviraisHerpes = [
  {
    id: 'aciclovir',
    name: 'Aciclovir',
    category: 'antivirais-herpes',
    observations: 'Antiviral sistêmico, inibidor competitivo da síntese do DNA viral. Indicado para herpes simples, varicela, zóster e CMV.',
    brands: ['Zovirax / Aciclovir — comp. 200 mg; Fr. amp. 250 mg'],
    presentations: [
      { label: 'Comprimido 200 mg' },
      { label: 'Frasco-ampola 250 mg' },
    ],
    doses: [
      {
        group: 'Crianças — Herpes neonatal',
        items: [
          { label: '< 1 kg', value: '20 mg/kg/dose 2×/dia (≤ 14 dias) ou 3×/dia (> 14 dias)' },
          { label: '1–2 kg', value: '20 mg/kg/dose 2×/dia (≤ 7 dias) ou 3×/dia (> 7 dias)' },
          { label: '> 2 kg', value: '20 mg/kg/dose 3×/dia' },
          { label: 'Duração — localizado', value: '14 dias' },
          { label: 'Duração — disseminado / SNC', value: 'Mínimo 21 dias' },
          { label: 'Profilaxia de recidivas — oral', value: '300 mg/m²/dose 3×/dia por 6 meses' },
        ],
      },
      {
        group: 'Crianças — Herpes simples',
        items: [
          { label: 'Imunocompetentes — EV', value: '5 mg/kg/dose 3×/dia' },
          { label: 'Imunocompetentes — oral', value: '20 mg/kg/dose 4×/dia (máx 800 mg/dose)' },
          { label: 'Imunocomprometidos — oral', value: '20 mg/kg/dose 4×/dia por 5–10 dias (máx 80 mg/kg/dia)' },
          { label: 'Imunocomprometidos — EV', value: '10 mg/kg/dose 3×/dia (máx 400 mg/dose)' },
          { label: 'Profilaxia de recidiva', value: '20 mg/kg/dose 2×/dia' },
          { label: 'Herpes genital — oral', value: '40–80 mg/kg/dia ÷ 3–4 doses por 5–10 dias (máx 1200 mg/dia)' },
          { label: 'Gengivoestomatite herpética — oral', value: '15 mg/kg/dose 5×/dia por 5–7 dias (máx 200 mg/dose)' },
          { label: 'Encefalite por herpes — EV', value: '20 mg/kg/dose a cada 8 h por 14–21 dias' },
        ],
      },
      {
        group: 'Crianças — Varicela / Zóster',
        items: [
          { label: 'Imunocompetentes — oral', value: '80 mg/kg/dia ÷ 4 doses por 5 dias (máx 800 mg/dia; iniciar até 24 h)' },
          { label: 'Imunodeprimidos — EV', value: '10 mg/kg/dose ou 500 mg/m²/dose 3×/dia por 7–10 dias' },
          { label: 'Imunodeprimidos — oral', value: '20 mg/kg/dose 4×/dia por 10 dias (máx 800 mg/dose)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Herpes simples mucocutâneo grave — EV', value: '5–10 mg/kg/dose 3×/dia por 5–10 dias' },
          { label: 'Herpes genital — oral', value: '200 mg 5×/dia por 10 dias; ou 400 mg 3×/dia por 10 dias' },
          { label: 'Encefalite herpética — EV', value: '10 mg/kg/dose 3×/dia por 14–21 dias' },
          { label: 'Pneumonia por herpes/varicela — EV', value: '10 mg/kg/dose 3×/dia por 7 dias' },
          { label: 'Herpes-zóster — oral', value: '800 mg/dose 5×/dia por 7–10 dias' },
          { label: 'Herpes-zóster grave imunodeprimido — EV', value: '10–15 mg/kg/dose 3×/dia por 7–10 dias' },
          { label: 'Profilaxia imunodeprimido — oral', value: '400 mg a cada 4 h durante o dia por 7–10 dias' },
          { label: 'Profilaxia pós-transplante — EV herpes', value: '150 mg/m²/dose a cada 8 h' },
          { label: 'Profilaxia pós-transplante — EV CMV', value: '500 mg/m²/dose a cada 8 h' },
        ],
      },
    ],
    preparation: 'Infundir em 1 hora. Usar em até 12 horas após reconstituição. Pode precipitar se infundido com dopamina, dobutamina, meropenem, vancomicina, ondansetrona, entre outros.',
    renalAdjustment: [
      { label: 'ClCr 25–50 mL/min', value: '10 mg/kg EV a cada 12 h' },
      { label: 'ClCr 10–25 mL/min', value: '10 mg/kg EV a cada 24 h; oral máx 800 mg a cada 12 h' },
      { label: 'ClCr < 10 mL/min', value: '5 mg/kg a cada 24 h; oral máx 200 mg a cada 12 h' },
      { label: 'Hemodiálise', value: 'Repor dose diária' },
      { label: 'Diálise peritoneal', value: '2,5 mg/kg' },
    ],
    sensitivity: {
      susceptible: ['HSV-1, HSV-2, VZV, CMV (parcial), EBV'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Geralmente bem tolerado',
      'Cefaleia, vertigem, sonolência, letargia, tremores, tontura, agitação, encefalopatia, delírio, psicose, ataxia, convulsões, alucinação',
      'Náusea, vômito, anorexia, diarreia, constipação',
      'Precipitação nos túbulos renais, IRA por cristais, hematúria, síndrome hemolítico-urêmica',
      'Flebite, dor local, dermatite vesicular se infiltrar',
      'Diaforese, hipotensão, transaminases elevadas, artralgia',
      'Farmacodermia, prurido, Stevens-Johnson, alopecia',
      'Depressão medular, neutropenia, anemia, púrpura trombocitopênica, hepatotoxicidade, icterícia',
    ],
    contraindications: [],
  },
  {
    id: 'cidofovir',
    name: 'Cidofovir',
    category: 'antivirais-herpes',
    observations: 'Antiviral para CMV resistente. Não produzido no Brasil. Hidratar previamente com SF 0,9%. Administrar probenecida antes e depois da dose.',
    brands: [],
    presentations: [],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'CMV resistente a ganciclovir em transplantados', value: '5 mg/kg 1×/sem por 2 semanas; depois a cada 2 semanas (manutenção)' },
        ],
      },
    ],
    sensitivity: {
      susceptible: ['CMV resistente a ganciclovir'],
      resistant: [],
      warning: 'Contraindicado em disfunção renal, mesmo leve.',
    },
    sideEffects: [
      'Cefaleia, agitação, confusão, convulsão, congestão, hipotensão',
      'Fraqueza, pneumonia, colangite, colite, asma, cardiomiopatia, síncope',
    ],
    contraindications: ['Disfunção renal, mesmo leve'],
  },
  {
    id: 'famciclovir',
    name: 'Famciclovir',
    category: 'antivirais-herpes',
    observations: 'Antiviral inibidor da DNA polimerase, pró-droga do penciclovir. Mais bem absorvido e com melhor biodisponibilidade que o aciclovir.',
    brands: ['Famvir — comp. 125 mg e 250 mg'],
    presentations: [
      { label: 'Comprimido 125 mg' },
      { label: 'Comprimido 250 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Herpes simples', value: '250 mg/dose 3×/dia por 5–7 dias' },
          { label: 'Herpes simples em imunodeprimidos', value: '500 mg/dose 2×/dia por 5–10 dias' },
          { label: 'Herpes-zóster', value: '500 mg/dose 3×/dia por 7–10 dias' },
          { label: 'Herpes genital — 1º episódio', value: '250 mg/dose 3×/dia por 7–10 dias' },
          { label: 'Herpes genital — recorrência', value: '125 mg/dose 2×/dia por 5 dias' },
          { label: 'Herpes genital — ataque', value: '500 mg/dose 2×/dia; depois 250 mg/dose 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 40–59 mL/min', value: '500 mg a cada 12 h' },
      { label: 'ClCr 20–39 mL/min', value: '500 mg a cada 24 h' },
      { label: 'ClCr < 20 mL/min', value: '250 mg a cada 24 h' },
      { label: 'Hemodiálise', value: '250 mg após cada sessão' },
    ],
    sensitivity: {
      susceptible: ['HSV-1, HSV-2, VZV'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Cefaleia, fadiga, sonolência, tontura',
      'Náusea, vômito, diarreia, dor abdominal, constipação, anorexia',
      'Febre, prurido, erupção cutânea, anafilaxia',
      'Neutropenia, elevação de enzimas hepáticas',
    ],
    contraindications: [],
  },
  {
    id: 'ganciclovir',
    name: 'Ganciclovir',
    category: 'antivirais-herpes',
    observations: 'Antiviral para tratamento e profilaxia da citomegalia, sobretudo em imunodeprimidos. Cada grama contém 2,8 mEq de sódio. Interromper se neutrófilos < 500/mm³.',
    brands: ['Cymevine / Ganciclovir — Fr. amp. 500 mg; sol. inj. 1 mg/mL; cáps. 250 mg'],
    presentations: [
      { label: 'Frasco-ampola 500 mg' },
      { label: 'Solução injetável 1 mg/mL' },
      { label: 'Cápsula 250 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Citomegalovirose congênita sintomática — EV', value: '6 mg/kg/dose 2×/dia por 6 semanas' },
          { label: 'CMV grave em imunodeprimidos — indução', value: '5 mg/kg/dose 2×/dia por 7–21 dias' },
          { label: 'CMV grave em imunodeprimidos — manutenção', value: '6 mg/kg/dia EV 5×/sem; ou 10 mg/kg/dia 3×/sem' },
          { label: 'Profilaxia CMV na AIDS', value: '6 mg/kg/dia 5×/sem; ou 10 mg/kg/dia 3×/sem' },
          { label: 'Pneumonia neonatal por CMV', value: '5 mg/kg/dose 2×/dia por 2–4 semanas' },
          { label: 'Profilaxia pós-transplante — indução', value: '5 mg/kg/dose 2×/dia por 14–21 dias' },
          { label: 'Profilaxia pós-transplante — manutenção', value: '5–6 mg/kg/dia 5×/sem por mais 100 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'CMV retinite / meningite / colite / esofagite — EV indução', value: '5 mg/kg/dose a cada 12 h por 14–21 dias' },
          { label: 'CMV — EV manutenção', value: '5–6 mg/kg/dia 5×/sem' },
          { label: 'CMV — oral manutenção', value: '3000 mg/dia ÷ 3–6 doses' },
          { label: 'Profilaxia CMV na AIDS — oral', value: '3000 mg/dia' },
          { label: 'Profilaxia em transplantados — EV', value: '5 mg/kg/dose a cada 12 h por 7–14 dias; depois manutenção conforme risco' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 50–69 mL/min', value: '50% da dose EV ou oral' },
      { label: 'ClCr 25–49 mL/min', value: '25% dose EV a cada 24 h; 1/3 dose oral a cada 24 h' },
      { label: 'ClCr 10–24 mL/min', value: '12,5% dose EV a cada 24 h; 1/6 dose oral a cada 24 h' },
      { label: 'ClCr < 10 mL/min', value: '12,5% da dose 3×/sem após diálise' },
    ],
    sensitivity: {
      susceptible: ['CMV, HSV-1, HSV-2, VZV, EBV'],
      resistant: [],
      warning: 'Interromper se neutrófilos < 500/mm³.',
    },
    sideEffects: [
      'Astenia, cefaleia, mal-estar, febre, ataxia, euforia, sonolência, tremor, confusão, coma, convulsão, encefalopatia',
      'Dor abdominal, constipação, anorexia, boca seca, náusea, vômito, pancreatite, diarreia',
      'Celulite, flebite, erupção cutânea, exantema, acne, fotossensibilização, alopecia',
      'Descolamento de retina, perda de visão, arritmia, hipertensão, edema, trombose',
      'Disfunção hepática, uremia, infecção urinária',
      'Neutropenia, plaquetopenia, leucopenia, anemia, pancitopenia, eosinofilia, depressão medular',
    ],
    contraindications: [],
  },
  {
    id: 'valaciclovir',
    name: 'Valaciclovir',
    category: 'antivirais-herpes',
    observations: 'Antiviral convertido em aciclovir após metabolização. Biodisponibilidade e níveis séricos superiores, permitindo menor dose diária.',
    brands: ['Valtrex / Valaciclovir — comp. revestido 500 mg'],
    presentations: [{ label: 'Comprimido revestido 500 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose usual', value: '20 mg/kg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Herpes-zóster em imunocompetente', value: '1 g/dose 3×/dia por 7 dias' },
          { label: 'Herpes labial', value: '2 g/dose 2×/dia por 1 dia' },
          { label: 'Imunodeprimidos', value: '1 g/dose 2×/dia por 5–10 dias' },
          { label: 'Herpes genital — 1º episódio', value: '1 g/dose 2×/dia por 7–10 dias' },
          { label: 'Herpes genital — recorrência', value: '500 mg/dose 2×/dia por 5 dias' },
          { label: 'Profilaxia / tratamento supressivo', value: '500 mg–1 g/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–50 mL/min', value: 'Máx 1 g a cada 12 h' },
      { label: 'ClCr 10–29 mL/min', value: 'Máx 1 g a cada 24 h' },
      { label: 'ClCr < 10 mL/min', value: 'Máx 500 mg a cada 24 h' },
    ],
    sensitivity: {
      susceptible: ['HSV-1, HSV-2, VZV'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Cefaleia, tontura, depressão, meningite asséptica, encefalopatia, convulsão, fadiga',
      'Náusea, vômito, dor abdominal, erupção cutânea, dismenorreia, artralgia',
      'Síndrome hemolítico-urêmica, púrpura trombocitopênica',
      'Leucopenia, trombocitopenia, aumento de transaminases',
    ],
    contraindications: [],
  },
  {
    id: 'valganciclovir',
    name: 'Valganciclovir',
    category: 'antivirais-herpes',
    observations: 'Antiviral para CMV. Pró-droga do ganciclovir. Tomar preferencialmente com alimentos.',
    brands: ['Valcyte — comp. revestido 450 mg'],
    presentations: [{ label: 'Comprimido revestido 450 mg' }],
    doses: [
      {
        group: 'Adultos e adolescentes',
        items: [
          { label: 'Retinite por CMV — indução', value: '900 mg/dose 2×/dia por 21 dias' },
          { label: 'Retinite por CMV — manutenção e profilaxia', value: '900 mg/dose 1×/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 40–59 mL/min', value: '50% da dose a cada 12 h' },
      { label: 'ClCr 25–39 mL/min', value: '25% da dose a cada 24 h' },
      { label: 'ClCr 10–24 mL/min', value: '25% da dose a cada 48 h' },
      { label: 'ClCr < 10 mL/min', value: 'Melhor evitar' },
    ],
    sensitivity: {
      susceptible: ['CMV'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Febre, cefaleia, diarreia, náusea, vômito, dor abdominal',
      'Neutropenia, plaquetopenia, anemia grave',
    ],
    contraindications: ['Neutropenia', 'Plaquetopenia', 'Anemia grave'],
  },
];

export const antiviraisInfluenza = [
  {
    id: 'amantadina',
    name: 'Amantadina',
    category: 'antivirais-influenza',
    observations: 'Antiviral tricíclico com atividade antiviral e antiparkinsoniana. Reduz duração dos sintomas de influenza A se iniciada precocemente. Não é eficaz para influenza B. Pode ser usada em H1N1 e H3N2.',
    brands: ['Mantidan — comp. 100 mg'],
    presentations: [{ label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Influenza A', value: '5 mg/kg/dia ÷ 2 doses (máx 100 mg/dose); iniciar o mais cedo possível; manter até 48 h após fim dos sintomas' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia e tratamento de influenza A', value: '200 mg/dia ÷ 1–2 doses por até 48 h após remissão ou enquanto houver exposição' },
          { label: 'Doença de Parkinson', value: 'Iniciar 100 mg/dia; ajustar para 300–400 mg/dia se necessário (idosos: iniciar 100 mg/dia)' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–59 mL/min', value: 'Reduzir 50%' },
      { label: 'ClCr 15–29 mL/min', value: '50% a cada 48 h' },
      { label: 'ClCr < 15 mL/min ou hemodiálise', value: '1 dose a cada semana' },
    ],
    sensitivity: {
      susceptible: ['Influenza A (H1N1, H3N2)'],
      resistant: ['Influenza B', 'H1N1 resistente'],
      warning: 'Evitar álcool.',
    },
    sideEffects: [
      'Tontura, convulsões, agitação, cefaleia, alucinações, depressão, ansiedade, insônia, sedação, apatia, paranoia, irritabilidade, coma, ideação suicida, quedas',
      'Insuficiência cardíaca congestiva, hipotensão ortostática, edema periférico',
      'Hiporexia, náusea, vômito, constipação, boca seca, retenção urinária',
    ],
    contraindications: [],
  },
  {
    id: 'oseltamivir',
    name: 'Oseltamivir',
    category: 'antivirais-influenza',
    observations: 'Antiviral para tratamento e profilaxia da influenza. Mais eficaz se iniciado até o 2º dia de sintomas. Em casos graves, usar independentemente do tempo. Uso profilático é restrito — proibido exceto para profissionais de saúde que manipulam amostras contaminadas.',
    brands: ['Tamiflu — cáps. 30, 45 e 75 mg'],
    presentations: [
      { label: 'Cápsula 30 mg' },
      { label: 'Cápsula 45 mg' },
      { label: 'Cápsula 75 mg' },
    ],
    doses: [
      {
        group: 'RN Prematuros',
        items: [
          { label: '< 38 semanas', value: '1 mg/kg/dose 2×/dia por 5 dias' },
          { label: '38–40 semanas', value: '1,5 mg/kg/dose 2×/dia por 5 dias' },
        ],
      },
      {
        group: 'Crianças — Tratamento (5 dias)',
        items: [
          { label: '< 10 meses', value: '3 mg/kg/dose 2×/dia' },
          { label: '10–12 meses', value: '3 mg/kg/dose 2×/dia' },
          { label: '> 1 ano e ≤ 15 kg', value: '30 mg 2×/dia' },
          { label: '15–23 kg', value: '45 mg 2×/dia' },
          { label: '23–40 kg', value: '60 mg 2×/dia' },
          { label: '> 40 kg', value: '75 mg 2×/dia' },
        ],
      },
      {
        group: 'Crianças — Profilaxia (10 dias)',
        items: [
          { label: '< 10 meses', value: '3 mg/kg/dose 1×/dia' },
          { label: '> 1 ano e ≤ 15 kg', value: '30 mg 1×/dia' },
          { label: '15–23 kg', value: '45 mg 1×/dia' },
          { label: '23–40 kg', value: '60 mg 1×/dia' },
          { label: '> 40 kg', value: '75 mg 1×/dia' },
        ],
      },
      {
        group: 'Adultos e adolescentes > 40 kg',
        items: [
          { label: 'Tratamento influenza A ou B / H1N1', value: '75 mg/dose 2×/dia por 5 dias' },
          { label: 'Profilaxia', value: '75 mg/dia por 7–10 dias (iniciar até 48 h após exposição) + vacinar' },
        ],
      },
    ],
    preparation: 'Preparo da suspensão a partir da cápsula: abrir uma cápsula em copo, acrescentar água com seringa, misturar bem, administrar imediatamente.',
    renalAdjustment: [
      { label: 'ClCr 30–60 mL/min', value: 'Máx 30 mg/dose 2×/dia' },
      { label: 'ClCr 10–29 mL/min', value: 'Máx 30 mg/dose 1×/dia' },
      { label: 'ClCr < 10 mL/min / hemodiálise', value: '30 mg/dose após sessão de hemodiálise' },
      { label: 'Diálise peritoneal', value: '30 mg/dose uma vez por semana' },
    ],
    sensitivity: {
      susceptible: ['Influenza A e B, H1N1'],
      resistant: [],
      warning: 'Suspender tratamento se houver possibilidade de afastar influenza.',
    },
    sideEffects: [
      'Tontura, fadiga, insônia, cefaleia, edema ocular, conjuntivite',
      'Anorexia, náusea, vômito, diarreia, dor abdominal, colite pseudomembranosa',
      'Hepatite, anemia, arritmia, piora de angina',
      'Erupção cutânea, Stevens-Johnson, bronquite, epistaxe',
      'Agrava ou precipita diabetes mellitus',
      'Relatos de distúrbios de comportamento em adolescentes',
    ],
    contraindications: [],
  },
  {
    id: 'peramivir',
    name: 'Peramivir',
    category: 'antivirais-influenza',
    observations: 'Antiviral inibidor de neuraminidase para influenza. Não produzido no Brasil.',
    brands: [],
    presentations: [],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Influenza aguda', value: 'EV: 12 mg/kg/dose única' },
          { label: 'Casos graves', value: 'EV: 10–12 mg/kg/dia por 5–10 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Influenza aguda', value: 'EV: 600 mg dose única (até 48 h após sintomas)' },
          { label: 'Casos graves', value: 'EV: 600 mg/dia por 5–10 dias' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–50 mL/min', value: '1/3 da dose' },
      { label: 'ClCr 10–29 mL/min', value: '1/6 da dose' },
    ],
    sensitivity: {
      susceptible: ['Influenza A e B'],
      resistant: [],
      warning: 'Não produzido no Brasil.',
    },
    sideEffects: [
      'Hipertensão, insônia, febre, aumento da glicemia',
      'Diarreia, constipação, vômito, proteinúria',
      'Neutropenia, aumento de enzimas hepáticas, aumento de CPK',
    ],
    contraindications: [],
  },
  {
    id: 'rimantadina',
    name: 'Rimantadina',
    category: 'antivirais-influenza',
    observations: 'Antiviral para influenza A. Não produzido no Brasil.',
    brands: ['Flumadine — comp. 100 mg'],
    presentations: [{ label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '1–9 anos', value: '5 mg/kg/dia 1–2×/dia (máx 150 mg/dia)' },
          { label: '≥ 10 anos', value: '5 mg/kg/dia 1–2×/dia (máx 200 mg/dia)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia e tratamento de influenza A', value: '100 mg/dose 2×/dia por 7 dias' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: '50% da dose' },
    ],
    sensitivity: {
      susceptible: ['Influenza A'],
      resistant: ['Influenza B'],
      warning: 'Não produzido no Brasil.',
    },
    sideEffects: [
      'Tontura, fadiga, cefaleia, insônia, perda de concentração, nervosismo, fraqueza',
      'Dor abdominal, náusea, vômito, anorexia, boca seca',
    ],
    contraindications: [],
  },
  {
    id: 'zanamivir',
    name: 'Zanamivir',
    category: 'antivirais-influenza',
    observations: 'Antiviral inalatório para influenza. Requer Diskhaler específico. Melhor evitar em asmáticos pelo risco de broncoespasmo.',
    brands: ['Relenza — pó + Diskhaler 5 mg/dose'],
    presentations: [{ label: 'Pó para inalação oral 5 mg/dose (Diskhaler)' }],
    doses: [
      {
        group: 'Adultos e crianças > 7 anos',
        items: [
          { label: 'Tratamento de influenza', value: '2 inalações de 5 mg 2×/dia (total 20 mg/dia) por 5 dias' },
          { label: 'Profilaxia de influenza', value: '2 inalações de 5 mg 1×/dia (20 mg/dia) por 10 dias' },
        ],
      },
    ],
    preparation: 'Exige Diskhaler específico. Encaixar disco com 4 doses, perfurar a cápsula, coordenar respiração e inalar. Ensinar técnica ao paciente.',
    sensitivity: {
      susceptible: ['Influenza A e B'],
      resistant: [],
      warning: 'Melhor evitar em asmáticos — risco de broncoespasmo.',
    },
    sideEffects: [
      'Broncoespasmo ou piora de crise de asma',
      'Edema na boca, faringe ou laringe',
      'Efeitos neuropsiquiátricos transitórios',
      'Frequência de efeitos colaterais similar ao placebo em estudos',
    ],
    contraindications: [],
  },
];