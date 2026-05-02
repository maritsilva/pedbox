// Diuréticos: Tiazídicos, Alça, Poupadores de Potássio e Outros

export const diureticosTiazidicos = [
  {
    id: 'clortalidona',
    name: 'Clortalidona',
    category: 'diureticos-tiazidicos',
    observations: 'Ação diurética moderada. Uso crônico faz o volume retornar parcialmente ao normal, com queda da resistência vascular periférica. Efeito superior ao da hidroclorotiazida. Início de ação: 2 a 4 horas. Duração: 24 a 48 horas.',
    brands: [
      'Clordilon / Neolidona / Clortal / Higroton — comprimidos 12,5 / 25 / 50 mg',
      'Clortalidona (genérico) — comprimidos 12,5 / 25 / 50 mg',
    ],
    presentations: [{ label: 'Comprimido 12,5 mg' }, { label: 'Comprimido 25 mg' }, { label: 'Comprimido 50 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 0,3 mg/kg/dia ÷ 1. Existem opções mais seguras. Dose máxima: 2 mg/kg/dia ou 50 mg/dia' }],
      },
      {
        group: 'Crianças — Diurético',
        items: [{ label: 'Oral', value: '0,5 a 1 mg/kg/dia ÷ 1, ou 1 a 2 mg/kg/dose em dias alternados. Não recomendado' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Oral', value: 'Iniciar 12,5 mg/dia. Efeito observado após 3 a 4 semanas. Dose habitual: 12,5 a 25 mg/dia. Em idosos: evitar doses > 12,5 mg/dia. Alternativa: 100 mg × 3 vezes por semana' },
        ],
      },
      {
        group: 'Adultos — Edema',
        items: [{ label: 'Oral', value: 'Iniciar 25 mg/dia. Dose usual: 50 a 100 mg/dia ou 100 mg em dias alternados. Dose máxima: 200 mg/dia' }],
      },
      {
        group: 'Adultos — ICC com congestão/hipovolemia',
        items: [{ label: 'Oral', value: 'Iniciar 12,5 a 25 mg/dia. Máximo: 100 mg/dia' }],
      },
    ],
    preparation: 'Melhor tomar pela manhã, após o café. Orientar ingestão de líquidos. Se resposta inadequada, adicionar ou trocar anti-hipertensivo.',
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' }],
    sideEffects: [
      'Cefaleia, vertigem, parestesia, fraqueza, cãibras',
      'Hipopotassemia, hiponatremia, hipomagnesemia, hiperuricemia, hipercalcemia',
      'Hipercolesterolemia, alcalose hipoclorêmica, hiperglicemia, glicosúria',
      'Hipotensão, arritmias, impotência',
      'Náusea, vômito, anorexia, diarreia, pancreatite',
      'Depressão medular, nefrite intersticial, vasculite',
      'Erupção cutânea, urticária, fotossensibilização',
      'Interações: álcool, anticoagulantes, digitálicos, AINEs',
    ],
    contraindications: ['Hiponatremia', 'Anúria'],
  },

  {
    id: 'hidroclorotiazida',
    name: 'Hidroclorotiazida',
    category: 'diureticos-tiazidicos',
    observations: 'Diurético tiazídico mais comumente utilizado na prática clínica. Uso crônico: volume retorna parcialmente ao normal, com queda da resistência vascular periférica. Início de ação: 2 horas. Duração: 6 a 12 horas.',
    brands: [
      'Clorana / Diurezin / Hidroflux / Hidroless / Hidromed / Neo Hidroclor — comprimidos 12,5 / 25 / 50 mg',
      'Hidroclorotiazida (genérico) — comprimidos 12,5 / 25 mg',
    ],
    presentations: [{ label: 'Comprimido 12,5 mg' }, { label: 'Comprimido 25 mg' }, { label: 'Comprimido 50 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão e diurese',
        items: [
          { label: 'Início', value: '0,5 a 1 mg/kg/dia ÷ 1. Manutenção: 1 a 2 mg/kg/dia ÷ 1 a 2. Doses de 0,25 a 0,5 mg/kg/dia podem ser eficazes' },
          { label: 'Dose máxima', value: '< 2 anos: 37,5 mg/dia; ≥ 2 anos: 50 a 100 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 12,5 a 25 mg/dia; ajustar até 50 mg × 1 a 2. Em idosos: 12,5 mg/dia geralmente suficiente. Dose máxima: 100 mg/dia' }],
      },
      {
        group: 'Adultos — Edema/congestão',
        items: [{ label: 'Oral', value: '25 a 100 mg/dia ÷ 1 a 2. Dose máxima: 200 mg/dia' }],
      },
      {
        group: 'Adultos — ICC com congestão/hipovolemia',
        items: [{ label: 'Oral', value: 'Iniciar 25 mg/dia ÷ 1. Máximo: 100 mg/dia' }],
      },
    ],
    preparation: 'Melhor tomar pela manhã após o café. Monitorar hipopotassemia (reduz efeito hipotensor). Orientar sobre partição do comprimido de 25 mg ao meio quando dose = 12,5 mg/dia.',
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min (pediatria)', value: 'Melhor evitar' },
      { label: 'ClCr < 10 mL/min ou creatinina > 2,5 mg/dL', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática grave', value: 'Uso não recomendado' },
    ],
    sideEffects: [
      'Cefaleia, tontura, fraqueza muscular',
      'Hipopotassemia, hiponatremia, hipocalemia, hiperuricemia, alcalose hipoclorêmica',
      'Hiperglicemia, hipomagnesemia, hiperlipidemia, hipercalcemia',
      'Aumento de ureia pré-renal',
      'Discrasia sanguínea, leucopenia, anemia aplásica, plaquetopenia, agranulocitose',
      'Pneumonite, erupção cutânea, hipotensão, desidratação',
      'Náusea, vômito, diarreia, pancreatite, hepatite, colestase intra-hepática',
      'Interações: anticoagulantes, digitálicos, AINEs, opioides, corticosteroides, metotrexato, colestiramina',
    ],
    contraindications: ['Hiponatremia', 'Anúria'],
  },

  {
    id: 'indapamida',
    name: 'Indapamida',
    category: 'diureticos-tiazidicos',
    observations: 'Tiazídico com menores efeitos sobre lipograma e glicemia. Uso restrito a adultos.',
    brands: [
      'Natrilix / Flux SR / Indapen SR / Indap — comprimido SR 1,5 mg',
      'Indapamida (genérico) — comprimido SR 1,5 mg',
    ],
    presentations: [{ label: 'Comprimido SR 1,5 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 1,5 mg/dia. Após 4 semanas ajustar até 2,5 mg/dia se necessário. Dose máxima: 5 mg/dia. Doses > 5 mg não melhoram controle pressórico e aumentam efeitos colaterais' }],
      },
      {
        group: 'Adultos — Edema/congestão',
        items: [{ label: 'Oral', value: 'Iniciar 2,5 mg/dia; ajustar após 1 semana até máximo 5 mg/dia' }],
      },
    ],
    preparation: 'Melhor tomar pela manhã após o café. Comprimidos não podem ser partidos. Monitorar hipopotassemia.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: 'Máximo 2,5 mg/dia' },
      { label: 'ClCr < 10 mL/min ou creatinina > 2,5 mg/dL', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática grave', value: 'Uso não recomendado' },
    ],
    sideEffects: [
      'Vertigem, astenia, cefaleia, fadiga, letargia, sonolência, cãibras, tontura',
      'Hipotensão, taquicardia',
      'Hipopotassemia, hiponatremia, hipercalcemia, hiperuricemia, hipovolemia, hipomagnesemia',
      'Trombocitopenia, leucopenia, agranulocitose, aplasia medular, anemia hemolítica',
      'Vasculite, angioedema, necrose cutânea',
      'Náuseas, constipação, boca seca, pancreatite, hepatite',
      'Noctúria, poliúria, impotência',
      'Erupção cutânea, púrpura; pode piorar lúpus e insuficiência hepática',
      'Interações: álcool, lítio, anticonvulsivantes, digitálicos, AINEs',
    ],
    contraindications: ['Hiponatremia', 'Anúria'],
  },
];

export const diureticosAlca = [
  {
    id: 'acido-etacrinico',
    name: 'Ácido Etacrínico',
    category: 'diureticos-alca',
    observations: 'Não disponível no Brasil (Edecrin — fr. amp. 50 mg; comprimido 25 mg).',
    brands: ['Edecrin (EUA) — fr. amp. 50 mg; comprimido 25 mg (não disponível no Brasil)'],
    presentations: [{ label: 'Fr. amp. 50 mg (EUA)' }, { label: 'Comprimido 25 mg (EUA)' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'EV/oral', value: '1 mg/kg/dia ÷ 1 a 3' }],
      },
      {
        group: 'Adultos — Edema',
        items: [
          { label: 'Oral', value: '25 a 200 mg/dia ÷ 1 a 2' },
          { label: 'EV', value: '0,5 a 1 mg/kg/dose ÷ 1 a 3' },
        ],
      },
    ],
    sideEffects: [
      'Desidratação, hipotensão, lipotimia, tontura',
      'Disfunção renal pré-renal',
      'Espoliação de K, Na, P, Ca e Cl',
    ],
    contraindications: [],
  },

  {
    id: 'bumetanida',
    name: 'Bumetanida',
    category: 'diureticos-alca',
    observations: '1 mg de bumetanida oral ≡ 20 mg torsemida ≡ 40 mg furosemida ≡ 50 mg ácido etacrínico. Diuréticos de alça são escolha na insuficiência renal. Habitualmente usados com poupadores de potássio.',
    brands: ['Burinax — comprimido 1 mg'],
    presentations: [{ label: 'Comprimido 1 mg' }],
    doses: [
      {
        group: 'Crianças — Edema / ICC',
        items: [{ label: 'Oral/EV/IM', value: '0,01 a 0,1 mg/kg/dose ÷ 1 a 2 (dias alternados). Máximo: 0,3 mg/kg/dia ou 10 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '0,5 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — ICC',
        items: [{ label: 'Oral', value: 'Iniciar 0,5 a 1,0 mg ÷ 1 a 2; ajustar. Dose máxima: 10 mg/dia' }],
      },
      {
        group: 'Adultos — Edema',
        items: [
          { label: 'Oral', value: '0,5 a 2 mg ÷ 1 a 2. Se necessário, repetir após 2 a 3 horas. Máximo: 10 mg/dia' },
          { label: 'EV/IM', value: '0,5 a 1 mg/dose. Repetir se necessário após 2 a 3 h' },
        ],
      },
    ],
    preparation: 'Melhor tomar pela manhã após o café. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Tremores, cefaleia, encefalopatia, fadiga, fraqueza, tontura, letargia, nervosismo, irritabilidade, parestesia',
      'Ototoxicidade',
      'Cãibras, espoliação de K, Na, P, Ca e Cl, alcalose, hipercalciúria, hiperuricemia',
      'Trombocitopenia, náuseas, vômitos, cólica',
      'Hipotensão ortostática',
      'Alergia cruzada com sulfas',
    ],
    contraindications: ['Coma hepático', 'Anúria'],
  },

  {
    id: 'furosemida',
    name: 'Furosemida',
    category: 'diureticos-alca',
    observations: 'Diurético de alça mais usado na insuficiência cardíaca e edema pulmonar agudo.',
    brands: [
      'Lasix / Diuremida / Neosemid / Furosemida — comprimido 40 mg; ampola 2 mL: 10 mg/mL',
      'Furosemida + cloreto de potássio — comprimido 40 + 100 mg',
    ],
    presentations: [{ label: 'Comprimido 40 mg' }, { label: 'Ampola 2 mL — 10 mg/mL' }],
    doses: [
      {
        group: 'RN pré-termo — Edema',
        items: [
          { label: '< 31 semanas', value: '1 mg/kg/dia' },
          { label: '≥ 31 semanas', value: '1 mg/kg/dose ÷ 1 a 2' },
        ],
      },
      {
        group: 'Crianças — Edema / ICC',
        items: [
          { label: 'Oral', value: 'Iniciar 2 mg/kg/dia ÷ 1; ajustar até 1 a 4 mg/kg/dia. Máximo: 6 mg/dose' },
          { label: 'EV/IM', value: 'Iniciar 0,5 a 2 mg/kg/dose a cada 12 a 24 h. Manutenção: 1 a 4 mg/kg/dia' },
          { label: 'EV infusão contínua', value: '0,2 a 0,4 mg/kg/hora' },
        ],
      },
      {
        group: 'Crianças — Hipertensão refratária',
        items: [{ label: 'EV/oral', value: '0,5 a 2,0 mg/kg/dose ÷ 1 a 4. Máximo: 6 mg/kg/dia' }],
      },
      {
        group: 'Crianças — IRA',
        items: [{ label: 'EV', value: '1 a 4 mg/kg dose única (até 12 mg/kg/dose) após reparação de volume' }],
      },
      {
        group: 'Adultos — ICC',
        items: [
          { label: 'Oral', value: 'Iniciar 20 a 40 mg/dia; titular' },
          { label: 'EV', value: 'Urgência: 20 a 40 mg/dose; bolus inicial 20 a 40 mg (se já usa, até 0,5 a 1 mg/kg). Repetir após 1 h. Máximo: 200 mg/dose' },
          { label: 'EV infusão contínua', value: 'Bolus 40 a 100 mg, depois infusão 10 a 40 mg/hora' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '20 mg ÷ 1 a 2/dia' }],
      },
      {
        group: 'Adultos — IRA',
        items: [
          { label: 'EV', value: 'Após reparação de volume: iniciar 20 a 80 mg; ajustar até 600 mg se necessário' },
          { label: 'EV infusão contínua', value: 'Bolus 0,5 a 1,5 mg/kg; depois 0,1 a 0,6 mg/kg/hora' },
        ],
      },
      {
        group: 'Adultos — IRC',
        items: [{ label: 'EV/oral', value: '20 a 160 mg × 2/dia. Útil enquanto FG > 20 a 30 mL/min' }],
      },
    ],
    preparation: 'EV sem diluir ou a 1 mg/mL. Aplicar em 3 a 5 min (não bolus rápido — risco de surdez reversível). Doses > 1 g: infusão em 1 hora. Não misturar na mesma solução com cefalosporinas, clorpromazina, dopamina, dobutamina, fluconazol, gentamicina, hidrocortisona, imipenem, metoclopramida, midazolam, morfina, ondansetrona, vecurônio, tiopental. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Hipovolemia excessiva, desidratação, hipotensão ortostática, azotemia pré-renal, choque, tromboembolismo',
      'Hipopotassemia, hiponatremia, hipofosfatemia, hipocalcemia, hipomagnesemia, hipocloremia, alcalose, hipercalciúria, hiperuricemia',
      'Anafilaxia (rara), urticária, fotossensibilização, erupção cutânea, vasculite',
      'Alergia cruzada com sulfas',
      'Ototoxicidade aditiva à dos aminoglicosídeos',
      'Cefaleia, tontura, vertigem, pancreatite, náusea, vômito, dor abdominal, constipação',
      'Agranulocitose, anemia, trombocitopenia, eritema multiforme, nefrite alérgica intersticial',
      'Prematuros: uso prolongado → hipercalciúria, nefrocalcinose, osteopenia, hiperparatireoidismo',
      'Idosos: piora de incontinência urinária e risco de quedas',
    ],
    contraindications: ['Insuficiência renal anúrica que não respondeu a doses altas'],
  },

  {
    id: 'torasemida',
    name: 'Torasemida',
    category: 'diureticos-alca',
    observations: 'Não disponível no Brasil (Demadex — comprimidos 5/10/20/100 mg; ampola 2 e 5 mL: 10 mg/mL). Diurético com potência 2 a 4 vezes superior à furosemida.',
    brands: ['Demadex (EUA) — comprimidos 5/10/20/100 mg; ampola 10 mg/mL (não disponível no Brasil)'],
    presentations: [{ label: 'Comprimido 5/10/20/100 mg (EUA)' }, { label: 'Ampola 10 mg/mL (EUA)' }],
    doses: [
      {
        group: 'Adultos — Edema',
        items: [
          { label: 'Oral', value: 'Iniciar 10 a 20 mg/dia; titular até máximo 200 mg/dia. Cirrose hepática: iniciar 5 a 10 mg/dia; até 40 mg/dia' },
          { label: 'EV infusão contínua', value: 'Bolus 20 mg, depois 5 a 20 mg/hora' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 5 mg/dia ÷ 1; aumentar se necessário para 10 mg/dia' }],
      },
    ],
    sideEffects: ['Semelhante à furosemida'],
    contraindications: [],
  },
];

export const diureticosPoupadores = [
  {
    id: 'amilorida',
    name: 'Amilorida',
    suffix: 'Cloridrato de amilorida',
    category: 'diureticos-poupadores',
    observations: 'Diurético antagonista do canal de sódio retentor de potássio e magnésio. Usado em associação com outros diuréticos para prevenir hipopotassemia.',
    brands: [
      'Amilorida + clortalidona — comprimidos 5 + 25 mg',
      'Amilorida + HCT — comprimidos 2,5 + 25 mg; 5 + 50 mg',
      'Cloridrato de amilorida + HCT — drágeas/comp. 2,5 + 25 mg; 5 + 50 mg',
    ],
    presentations: [{ label: 'Comprimido 5 mg (associação)' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Oral', value: '0,4 a 0,625 mg/kg/dia. Dose máxima: 20 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão / ICC',
        items: [{ label: 'Oral', value: '2,5 a 10 mg/dia. Dose máxima: 20 mg/dia. Em idosos: 2,5 a 5 mg/dia ou em dias alternados' }],
      },
    ],
    preparation: 'Melhor tomar pela manhã após o café. Monitorar eletrólitos e função renal (diabéticos e nefropatas). Pacientes com DRC ou DM: monitoração frequente.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: 'Metade da dose' },
      { label: 'ClCr < 10 mL/min ou creatinina > 1,5 mg/dL', value: 'Melhor evitar' },
      { label: 'ClCr < 30 mL/min (idosos)', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Cefaleia, fadiga, astenia, tontura, fraqueza muscular, cãibras, encefalopatia',
      'Alergia, erupção cutânea, anafilaxia',
      'Arritmia, palpitação',
      'Náusea, vômito, dor abdominal, diarreia, perda de apetite',
      'Ginecomastia, galactorreia, impotência',
      'Tosse, dispneia',
      'Alcalose hiperclorêmica, hiponatremia',
      'Hiperpotassemia (risco maior no uso isolado), reduz excreção renal de potássio',
      'Aplasia medular, neutropenia, agranulocitose',
      'Aumenta pressão intraocular',
    ],
    contraindications: ['Potássio sérico > 5,5 mEq/L', 'Anúria', 'Nefropatia diabética'],
  },

  {
    id: 'espironolactona',
    name: 'Espironolactona',
    category: 'diureticos-poupadores',
    observations: 'Diurético com efeito cardioprotetor e redutor de morbimortalidade na ICC do adulto. Manipular doses abaixo de 25 mg.',
    brands: [
      'Aldactone / Diacqua / Espironolactona — comprimidos 25 / 50 / 100 mg',
      'Espironolactona + furosemida — cápsulas 100 + 20 mg',
      'Espironolactona + HCT — comprimidos 50 + 50 mg',
    ],
    presentations: [{ label: 'Comprimido 25 mg' }, { label: 'Comprimido 50 mg' }, { label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças — ICC / Hipertensão',
        items: [{ label: 'Oral', value: '1 a 2 mg/kg/dia ÷ 1 a 4. Máximo: 100 mg/dia' }],
      },
      {
        group: 'Crianças — Ascite refratária',
        items: [{ label: 'Oral', value: 'Até 7 mg/kg/dia + furosemida' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '25 a 100 mg/dia ÷ 1 a 2' }],
      },
      {
        group: 'Adultos — ICC',
        items: [{ label: 'Oral', value: '12,5 a 50 mg/dia ÷ 1. Associar IECA e diurético tiazídico ou de alça. Reduzir se K > 5 mEq/L ou creatinina > 2,5 mg/dL. Suspender se K > 6 mEq/L ou creatinina > 3,5 mg/dL' }],
      },
      {
        group: 'Adultos — Hipopotassemia',
        items: [{ label: 'Oral', value: '25 a 100 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — Ascite na cirrose',
        items: [{ label: 'Oral', value: 'Iniciar 50 a 100 mg/dia; aumentar 50 mg a cada 2 a 3 dias até 200 mg/dia. Ajustes adicionais até 400 mg/dia a cada 2 a 3 semanas' }],
      },
      {
        group: 'Adultos — Hiperaldosteronismo primário',
        items: [{ label: 'Oral', value: '100 a 400 mg/dia ÷ 1 a 2' }],
      },
    ],
    preparation: 'Dosar potássio com 1 mês de tratamento e a cada 4 meses após estabilização.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '1 ou 2 doses/dia' },
      { label: 'ClCr < 10 mL/min', value: 'Uso não recomendado' },
    ],
    sideEffects: [
      'Tontura, letargia, cefaleia, confusão',
      'Arritmia, hipotensão',
      'Hiperpotassemia (risco aumentado com IECA, AINEs ou disfunção renal grave)',
      'Hiponatremia, desidratação, hipercloremia, acidose',
      'Erupção cutânea, urticária, depressão medular',
      'Ginecomastia, amenorreia, dor na mama, redução da libido, disúria',
      'Aumenta discretamente hemoglobina glicosilada em diabéticos',
      'Crescimento de cabelos em mulheres',
      'Anorexia, náusea, vômito, diarreia, gastrite, cólica, hemorragia gastrointestinal',
      'Tosse, rouquidão',
    ],
    contraindications: ['Insuficiência renal grave', 'Anúria', 'Hiperpotassemia', 'Doença de Addison'],
  },
];

export const outrosDiureticos = [
  {
    id: 'acetazolamida',
    name: 'Acetazolamida',
    category: 'outros-diureticos',
    observations: 'Inibidor da anidrase carbônica. Eficaz no controle de certos tipos de glaucoma, retenção hídrica, edema cardíaco, doença de altitude e crises convulsivas (ausência, parciais, Lennox-Gastaut). Não existem apresentações parenterais no Brasil.',
    brands: ['Diamox — comprimido 250 mg'],
    presentations: [{ label: 'Comprimido 250 mg' }],
    doses: [
      {
        group: 'Crianças — Diurético',
        items: [{ label: 'Oral', value: '5 mg/kg/dia ÷ 1 a cada 2 dias' }],
      },
      {
        group: 'Crianças — Crise de ausência (≥ 1 ano)',
        items: [{ label: 'Oral', value: '20 mg/kg/dia ÷ 1 a 2. < 1 ano: 10 mg/kg/dia ÷ 1 a 2' }],
      },
      {
        group: 'Crianças — Glaucoma',
        items: [{ label: 'Oral', value: '10 a 40 mg/kg/dia ÷ 3 a 4' }],
      },
      {
        group: 'Crianças — Hidrocefalia',
        items: [{ label: 'Oral', value: 'Iniciar 25 mg/kg/dia ÷ 3; aumentar 25 mg a cada dose até máximo 100 mg/kg/dia ou 2 g/dia' }],
      },
      {
        group: 'Crianças — Profilaxia mal de altitude',
        items: [{ label: 'Oral', value: '1,25 a 2,5 mg/kg × 2. Máximo: 125 mg/dose' }],
      },
      {
        group: 'Crianças — Anticonvulsivante',
        items: [{ label: 'Oral', value: '8 a 30 mg/kg/dia ÷ 3 a 4' }],
      },
      {
        group: 'Adultos — Edema',
        items: [{ label: 'Oral', value: '250 a 375 mg/dose ÷ 1 ou a cada 2 dias' }],
      },
      {
        group: 'Adultos — Anticonvulsivante',
        items: [{ label: 'Oral', value: '8 a 30 mg/kg/dia ÷ 4. Dose máxima: 1 g/dia' }],
      },
      {
        group: 'Adultos — Glaucoma',
        items: [
          { label: 'Ângulo aberto', value: '250 mg × 1 a 4' },
          { label: 'Agudo/fechado', value: 'Início 250 a 500 mg; manutenção 125 a 250 mg × 2 a 4' },
        ],
      },
      {
        group: 'Adultos — Profilaxia mal de altitude',
        items: [{ label: 'Oral', value: '250 mg/dia iniciando no dia anterior à subida; manter 2 a 3 dias em altitude elevada' }],
      },
    ],
    preparation: 'Melhor tomar pela manhã após o café. Comprimido não pode ser partido; doses < 250 mg devem ser manipuladas. Compatível EV com diltiazem, polimixinas, cimetidina e ranitidina.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: 'A cada 12 horas' },
      { label: 'ClCr < 10 mL/min', value: 'Uso não recomendado' },
      { label: 'Hemodiálise', value: 'Remove 20 a 50%' },
    ],
    sideEffects: [
      'Parestesia, zumbidos, tontura, fadiga, sonolência, febre, convulsão, paralisia',
      'Glaucoma, erupção cutânea, eritema multiforme, fotossensibilização, Stevens-Johnson, necrólise epidérmica tóxica',
      'Anafilaxia, agranulocitose, anemia aplástica, trombocitopenia',
      'Anorexia, alteração do paladar, vômito, diarreia, irritação GI, litíase, melena',
      'Necrose hepática fulminante',
      'Depressão/aplasia medular, hipopotassemia transitória, acidose hiperclorêmica (uso prolongado exige reposição de bicarbonato)',
      'Nefrite intersticial, poliúria, piora de pneumopatia crônica',
      'Miopia transitória, glaucoma de ângulo fechado',
    ],
    contraindications: [
      'Insuficiência hepática',
      'Cirrose',
      'Hiponatremia',
      'Hipopotassemia grave',
      'Acidose hiperclorêmica',
      'Insuficiência suprarrenal',
      'Alergia a sulfonamidas',
    ],
  },

  {
    id: 'manitol',
    name: 'Manitol',
    category: 'outros-diureticos',
    observations: 'Diurético osmótico útil como teste na IRA e na hipertensão intracraniana. Efeito: início 15 min; pico 1 h; duração 3 a 8 horas. Manitol 20% tem osmolaridade ≈ 1100 mOsm/L.',
    brands: ['Manitol 20% — bolsa plástica/frasco 250 mL e 500 mL'],
    presentations: [{ label: 'Solução 20% — frasco/bolsa 250 mL e 500 mL' }],
    doses: [
      {
        group: 'Crianças — Anúria/oligúria (teste)',
        items: [
          { label: 'EV', value: '0,25 a 0,75 g/kg ou 1 a 3 mL a 20%/kg em 3 a 5 min. Manutenção: 0,25 a 0,5 g/kg a cada 4 a 6 h. Dose máxima: 60 mL a 20% ou 12,5 g' },
        ],
      },
      {
        group: 'Crianças — Edema cerebral',
        items: [{ label: 'EV', value: '0,25 a 1 g/kg' }],
      },
      {
        group: 'Adultos — Edema cerebral',
        items: [
          { label: 'EV', value: 'Ataque: 0,5 a 1 g/kg. Manutenção: 0,25 mg/kg/dose em infusão rápida de 15 min. Não indicado no edema citotóxico hipóxico-isquêmico' },
        ],
      },
      {
        group: 'Adultos — Glaucoma agudo',
        items: [{ label: 'EV', value: '1,0 a 2 g/kg a 20% em 30 a 60 min. Velocidade máxima: 60 gotas/min' }],
      },
      {
        group: 'Adultos — Pré-operatório neurocirurgia',
        items: [{ label: 'EV', value: '1,5 a 2 g/kg em 30 a 60 min' }],
      },
      {
        group: 'Adultos — Anúria/oligúria (teste)',
        items: [{ label: 'EV', value: '0,2 g/kg ou 1 mL a 20%/kg em 3 a 5 min. Dose máxima: 60 mL a 20% (12,5 g). Sucesso: diurese > 30 mL/h em 2 a 3 h. Não repetir se sem diurese em 2 h' }],
      },
    ],
    preparation: 'Não usar se cristais em suspensão — aquecer em autoclave para redissolver. Usar filtro na linha. Preferir solução 20%. Cuidado para não extravasar. Controlar: eletrólitos, osmolaridade sérica (manter 310 a 320 mOsm/L), ureia e creatinina.',
    sideEffects: [
      'Cefaleia, desorientação, convulsão, calafrios, letargia, confusão, polidipsia',
      'Sobrecarga circulatória, edema pulmonar, hiperosmolaridade, desidratação intracelular',
      'Náusea, vômitos, dor torácica, necrose tissular se infiltrar',
      'Reações alérgicas, anafilactoide',
      'Hipo ou hiperpotassemia, hiponatremia',
      'Aumento inicial paradoxal da PIC pode ocorrer',
    ],
    contraindications: [
      'Osmolaridade sérica > 340 mOsm/L',
      'Hiperosmolaridade',
      'Granulocitopenia',
      'Insuficiência renal grave',
      'Hemorragia intracraniana ativa',
      'Edema pulmonar grave',
      'Desidratação grave',
      'Anúria',
    ],
  },

  {
    id: 'metolazona',
    name: 'Metolazona',
    category: 'outros-diureticos',
    observations: 'Não disponível no Brasil (Zaroxolyn — comprimidos 2,5 / 5 / 10 mg).',
    brands: ['Zaroxolyn (EUA) — comprimidos 2,5 / 5 / 10 mg (não disponível no Brasil)'],
    presentations: [{ label: 'Comprimido 2,5 / 5 / 10 mg (EUA)' }],
    doses: [
      {
        group: 'Adultos — Edema',
        items: [{ label: 'Oral', value: '5 a 20 mg ÷ 1' }],
      },
      {
        group: 'Adultos — Potenciar furosemida na disfunção renal',
        items: [{ label: 'Oral', value: '2,5 a 20 mg ÷ 1' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '2,5 a 5 mg ÷ 1' }],
      },
    ],
    preparation: 'Melhor tomar pela manhã após o café.',
    sideEffects: [
      'Tontura, cefaleia, fadiga',
      'Hiponatremia, hipovolemia, hipotensão ortostática, hiperuricemia',
      'Náusea, vômitos, pancreatite',
      'Aplasia medular, agranulocitose, trombose',
      'Hepatite, Stevens-Johnson, vasculite',
    ],
    contraindications: ['Anúria', 'Coma hepático'],
  },
];