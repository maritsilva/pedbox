export const hipotensao = [
  {
    id: 'efedrina',
    name: 'Efedrina',
    category: 'hipotensao',
    observations: 'Amina pressora simpaticomimética. Inibe a recaptação de norepinefrina nos receptores α e β.',
    brands: ['Efedrin / Unifedrine / Efedrina — ampola 1 mL: 50 mg/mL'],
    presentations: [{ label: 'Ampola 1 mL: 50 mg/mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'EV', value: '0,1 a 0,3 mg/kg/dose. Repetir após 5 a 10 min se necessário. Máx: 25 mg/dose' },
          { label: 'IM ou SC', value: '2 a 3 mg/kg ou 67 a 100 mg/m²' },
        ],
      },
      {
        group: 'Adultos — Hipotensão associada à anestesia',
        items: [
          { label: 'EV', value: '5 a 25 mg, lentamente. Repetir após 5 a 10 min se necessário' },
        ],
      },
      {
        group: 'Adultos — Profilaxia em raquianestesia / simpatectomia',
        items: [
          { label: 'EV', value: '3 a 6 mg, lentamente. Repetir após 4 min se necessário. Dose máxima: 30 mg' },
          { label: 'IM', value: '30 mg em dose única' },
          { label: 'SC', value: '25 a 50 mg em doses divididas' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, palidez, vertigem, inquietação, nervosismo, tremores, fraqueza, ansiedade, alucinações, confusão, delírios',
      'Angina, dispneia, taquicardia, bradicardia, arritmia, palpitações, hipertensão, hipotensão',
      'Náusea, vômito, anorexia, espasmo de esfíncter vesical, disúria, oligúria, retenção urinária',
    ],
    contraindications: ['Glaucoma de ângulo fechado'],
  },

  {
    id: 'etilefrina',
    name: 'Etilefrina',
    category: 'hipotensao',
    observations: 'Amina pressora simpaticomimética com ação direta sobre os receptores α. O efeito agonista após aplicação EV ocorre em 30 a 60 minutos.',
    brands: ['Efortil — ampola 1 mL: 10 mg/mL'],
    presentations: [{ label: 'Ampola 1 mL: 10 mg/mL' }],
    doses: [
      {
        group: 'Crianças < 2 anos',
        items: [
          { label: 'EV infusão contínua', value: '0,05 a 0,2 mg/minuto' },
          { label: 'IM ou SC', value: '2 a 4 mg/dose' },
        ],
      },
      {
        group: 'Crianças 2 a 6 anos',
        items: [
          { label: 'EV infusão contínua', value: '0,1 a 0,4 mg/minuto' },
          { label: 'IM ou SC', value: '4 a 7 mg/dose' },
        ],
      },
      {
        group: 'Crianças > 6 anos',
        items: [
          { label: 'EV infusão contínua', value: '0,2 a 0,6 mg/minuto' },
          { label: 'IM ou SC', value: '7 a 10 mg/dose. Pode repetir a cada 1 a 3 horas' },
        ],
      },
      {
        group: 'Adultos — Hipotensão sintomática ou ortostática',
        items: [
          { label: 'EV infusão contínua', value: '0,2 a 0,6 mg/minuto. Mínimo: 10 mg/hora; Máximo: 40 mg/hora' },
          { label: 'Colapso circulatório — EV lento', value: '5 a 10 mg/dose' },
          { label: 'IM ou SC', value: '10 mg/dose. Repetir a cada 1 a 3 horas se necessário' },
        ],
      },
    ],
    preparation: 'Infundir com SF 0,9%, SG 5%, Ringer lactato ou xilitol 10%. Não misturar com outros medicamentos ou lípides de nutrição parenteral.',
    sideEffects: [
      'Ansiedade, insônia, tremores, cefaleia, tontura, irritabilidade, náusea, alergia, hiper-hidrose, piloereção',
      'Taquicardia, angina, palpitações, arritmias ventriculares, dor no peito, hipertensão',
    ],
    contraindications: [
      'Hipertensão', 'Arritmia', 'Taquicardia', 'Coronariopatia', 'Tireotoxicose',
      'ICC descompensada', 'Cardiomiopatia obstrutiva', 'Aterosclerose',
      'Glaucoma de ângulo fechado', 'Hipertrofia prostática com retenção urinária',
      'Gestação', 'Amamentação',
    ],
  },

  {
    id: 'fenilefrina',
    name: 'Fenilefrina',
    category: 'hipotensao',
    observations: 'Amina pressora simpaticomimética com ação sobre receptores α e β.',
    brands: ['Fenilefrin — ampola 1 mL: 10 mg/mL'],
    presentations: [{ label: 'Ampola 1 mL: 10 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Crise de cianose / hipotensão sintomática',
        items: [
          { label: 'Bolus EV', value: '5 a 20 µg/kg/dose a cada 10 a 15 min' },
          { label: 'Infusão contínua EV', value: '0,1 a 0,5 µg/kg/min' },
          { label: 'IM ou SC', value: '0,1 mg/kg/dose a cada 1 ou 2 horas. Dose máxima: 5 mg' },
        ],
      },
      {
        group: 'Adultos — Hipotensão associada à anestesia',
        items: [
          { label: 'EV bolus', value: '0,04 a 0,1 mg/dose, lentamente. Repetir a cada 1 a 2 min se necessário' },
          { label: 'EV infusão contínua', value: 'Iniciar com 10 a 35 µg/min (ou 0,5 a 1,4 µg/kg/min). Máximo: 200 µg/min' },
          { label: 'IM/SC', value: '2 a 3 mg/dose, 3 a 5 min antes da anestesia' },
        ],
      },
    ],
    preparation: 'Diluir 1:10 (9 mL de ABD) para obter solução a 0,1% (1 mg/mL). Para infusão contínua: 10 mg em 500 mL de SGI ou SF; cada gota/min ≈ 1 µg/min. Evitar em idosos.',
    sideEffects: [
      'Cefaleia, ansiedade, tontura, excitabilidade, insônia, inquietação, tremor, fraqueza, visão turva',
      'Bradicardia reflexa, angina, diminuição do débito cardíaco, agravamento da ICC, hipertensão, arritmia, isquemia periférica',
      'Náusea, vômitos, dor epigástrica, vasoconstrição visceral, angina abdominal',
      'Anafilaxia, edema pulmonar, dispneia, palidez, prurido, piloereção, acidose metabólica, oligúria, hiperpotassemia',
    ],
    contraindications: ['Hipertensão grave', 'Taquicardia ventricular', 'Glaucoma de ângulo fechado'],
  },

  {
    id: 'metaraminol',
    name: 'Metaraminol',
    category: 'hipotensao',
    observations: 'Amina pressora simpaticomimética. Proporciona maior controle pressórico e está associada a menos acidose fetal que efedrina.',
    brands: ['Aramin — ampola 1 mL: 10 mg/mL'],
    presentations: [{ label: 'Ampola 1 mL: 10 mg/mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Uso', value: 'Contraindicado' },
        ],
      },
      {
        group: 'Adultos — Hipotensão associada a raquianestesia',
        items: [
          { label: 'IM/SC (profilaxia)', value: '2 a 10 mg/dose' },
          { label: 'EV infusão', value: 'Diluir 15 a 100 mg em 500 mL de SF ou SGI; ajustar gotejamento conforme resposta. Aguardar ao menos 10 min antes de aumentar dose' },
        ],
      },
      {
        group: 'Adultos — Choque com hipotensão',
        items: [
          { label: 'Bolus EV + infusão contínua', value: 'Bolus de 0,5 a 5 mg seguido de infusão de 15 a 100 mg' },
        ],
      },
    ],
    sideEffects: [
      'Hipertensão, arritmias, taquicardia ventricular, infarto, acidose metabólica',
      'Uso prolongado: necrose tubular aguda',
      'Resposta pressórica excessiva pode precipitar hemorragia cerebral e edema pulmonar',
      'Injeção subcutânea aumenta risco de necrose tecidual local e descamação',
    ],
    contraindications: [],
  },
];