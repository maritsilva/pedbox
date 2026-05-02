export const expansoresColoides = [
  {
    id: 'albumina-humana',
    name: 'Albumina Humana',
    category: 'expansores-coloides',
    observations: 'Hemoderivado, expansor plasmático natural com efeito de aumento do volume plasmático equivalente a 4 a 5 vezes o obtido com cristaloide. O efeito oncótico dura 12 a 18 horas apenas. Solução a 5%: iso-oncótica. Solução a 20–25%: hiperoncótica.',
    brands: ['Albumin / Albumina Humana Grifols / Alburex / Blauimmax / Plasbumin / Vitalex — frasco-ampola 50 mL a 20% (0,2 g/mL)'],
    presentations: [
      { label: 'Frasco-ampola 50 mL a 20% (0,2 g/mL)' },
    ],
    doses: [
      {
        group: 'Crianças — Expansor plasmático',
        items: [
          { label: 'EV', value: '0,5 a 1 g/kg/dose (= 10 a 20 mL/kg da solução a 5%). Correr em 30 a 60 min ou livre' },
        ],
      },
      {
        group: 'Crianças — Hipoalbuminemia grave',
        items: [
          { label: 'Prematuros', value: '0,5 a 1,5 g/kg/dia; ou 2,5 a 7,5 mL/kg da solução a 20%, sem diluir' },
          { label: 'Crianças', value: '1 a 2 g/kg/dia, ou 5 a 10 mL/kg a 20%. Máx: 6 g/kg/dia' },
        ],
      },
      {
        group: 'Crianças — Outras indicações',
        items: [
          { label: 'Ascite refratária / hipertensão intra-abdominal', value: '1 g/kg ou 5 mL/kg a 20%, sem diluir + furosemida 1 mg/kg' },
          { label: 'Hiperbilirrubinemia neonatal', value: '1 g/kg ou 5 mL/kg a 20%, sem diluir, 1 hora antes ou durante transfusão' },
          { label: 'Edema refratário na síndrome nefrótica', value: '0,5 a 1 g/kg/dose ou 2,5 a 5 mL/kg a 20%, sem diluir, em 30 a 120 min + furosemida' },
        ],
      },
      {
        group: 'Adultos — Expansão plasmática',
        items: [
          { label: 'EV', value: '12,5 a 25 g/dose em 5 a 30 min. Pode repetir após 30 min. Máx: 1,5 g/kg/dia ou 250 g/40 horas' },
          { label: 'Hipoalbuminemia grave', value: '0,5 a 1,0 g/kg por dose, a cada 1 ou 2 dias' },
        ],
      },
      {
        group: 'Adultos — Indicações específicas',
        items: [
          { label: 'Pós-paracentese de grande volume', value: '5 a 10 g de albumina por cada litro removido' },
          { label: 'Cirrose com peritonite bacteriana espontânea', value: '1,5 g/kg no 1º dia + 1 g/kg no 3º dia. Preferir solução a 20%' },
        ],
      },
    ],
    preparation: 'Diluir o frasco a 20% em 1:3 com SF, SG 5% ou 10%, ou Ringer, para obter solução a 5%. Infusão solução 5%: 2 a 4 mL/min (volemia normal) ou 5 a 10 mL/min (hipoproteinemia). Infusão solução 20%: 1 a 2 mL/min (volemia normal) ou 2 a 3 mL/min (hipoproteinemia). Não misturar com verapamil ou lípides de nutrição parenteral. Não diluir com água. Armazenar 2 a 8 ºC, sem congelar.',
    sideEffects: [
      'Geralmente bem tolerada',
      'Risco de congestão aguda e edema agudo de pulmão em ICC',
      'Hipersensibilidade, anafilaxia, hipernatremia aguda, febre, calafrios, náusea, vômito',
      'Risco de hemorragia intraventricular em prematuros com solução concentrada',
      'Cada litro a 5% contém 160 mEq de sódio',
    ],
    contraindications: ['Anemia grave', 'Insuficiência cardíaca congestiva'],
  },

  {
    id: 'dextrano-40',
    name: 'Dextrano 40',
    category: 'expansores-coloides',
    observations: 'Expansor plasmático coloide.',
    brands: ['Dextrano 40 — frasco 500 e 1000 mL (dextrano 10% em glicose 5%)'],
    presentations: [
      { label: 'Frasco 500 mL' },
      { label: 'Frasco 1000 mL' },
    ],
    doses: [
      {
        group: 'Adultos e Crianças',
        items: [
          { label: 'Reposição de volume / prevenção de tromboembolia', value: '10 mL/kg ou 500 a 1000 mL como parte da reposição no choque. Dose máxima: 1,5 g/kg' },
        ],
      },
    ],
    sideEffects: ['Anafilaxia (1% dos casos)', 'Hipervolemia, congestão, lesão e formação de coágulos', 'Aumenta fibrinólise, disfunção renal'],
    contraindications: [],
  },

  {
    id: 'hidroxietilamido',
    name: 'Hidroxietilamido',
    suffix: 'Hetamido',
    category: 'expansores-coloides',
    observations: 'Expansor plasmático coloide.',
    brands: ['Haes Steril / Istarplas / Voluven 6% — frasco ou bolsa 500 mL (60 mg/mL)'],
    presentations: [{ label: 'Frasco/bolsa 500 mL (60 mg/mL)' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Reposição de volume', value: 'Geralmente 500 a 1000 mL por etapa. Evitar ultrapassar 50 mL/kg/dia' },
        ],
      },
    ],
    preparation: 'Infundir os primeiros 10 mL lentamente como teste alérgico.',
    sideEffects: ['Alergia, anafilaxia, hipervolemia, congestão, hipernatremia'],
    contraindications: [],
  },

  {
    id: 'succinilgelatina',
    name: 'Succinilgelatina',
    suffix: 'Gelatina fluida modificada',
    category: 'expansores-coloides',
    observations: 'Expansor plasmático coloide.',
    brands: ['Gelafundin — frasco 500 mL (40 mg/mL)'],
    presentations: [{ label: 'Frasco 500 mL (40 mg/mL)' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Reposição de volume / profilaxia de hipotensão em anestesia', value: 'Geralmente 500 a 1500 mL. Evitar ultrapassar 20 mL/kg/dia' },
        ],
      },
    ],
    preparation: 'Infundir os primeiros 10 a 30 mL lentamente como teste alérgico.',
    sideEffects: ['Alergia, anafilaxia, hipervolemia, congestão'],
    contraindications: [],
  },
];