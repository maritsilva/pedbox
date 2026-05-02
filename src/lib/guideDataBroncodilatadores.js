// Broncodilatadores adrenérgicos de ação curta

export const broncodilatadoresAdrenergicosAcao = [
  {
    id: 'fenoterol',
    name: 'Fenoterol',
    suffix: 'Bromidrato de fenoterol',
    category: 'broncodilatadores-acao-curta',
    observations: 'β2-agonista seletivo de ação curta, útil na crise de broncoespasmo e na profilaxia da crise induzida por exercício.',
    brands: ['Berotec — Spray: 100 µg/jato; Gotas: 5 mg/mL (0,25 mg/gota)', 'Bromifen — Gotas: 5 mg/mL (0,25 mg/gota)', 'Fenotec — Spray: 100 µg/dia; Spray: 5 mg/dia em gotas'],
    presentations: [{ label: 'Spray 100 µg/jato' }, { label: 'Gotas 5 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Broncoespasmo spray (resgate habitual em casa)',
        items: [{ label: 'Dose', value: '100 a 200 µg, 1 a 2 jatos/dose, a cada 20 minutos, até 3 doses' }],
      },
      {
        group: 'Crianças — Broncoespasmo spray (resgate em hospital com espaçador)',
        items: [
          { label: '5 a 10 kg', value: '200 a 400 µg, 2 a 4 jatos/dose' },
          { label: '10 a 20 kg', value: '400 a 600 µg, 4 a 6 jatos/dose' },
          { label: '> 20 kg', value: '600 a 800 µg, 6 a 8 jatos/dose' },
        ],
      },
      {
        group: 'Crianças — Urgência',
        items: [
          { label: 'Spray', value: 'Até 10 jatos por dose, usar espaçador. Repetir a cada 20 minutos na 1ª hora. Depois, a cada 2-4 horas' },
        ],
      },
      {
        group: 'Crianças — Nebulização intermitente',
        items: [
          { label: 'Dose', value: '0,07 a 0,15 mg/kg. Casa: 1-2 gotas/dose. Hospital: 0,2-0,3 mL/dose. Repetir a cada hora' },
        ],
      },
      {
        group: 'Crianças — Dose oral',
        items: [
          { label: '< 1 ano', value: '0,75 a 1,75 mg/dose, 2-3 vezes ao dia' },
          { label: '1 a 6 anos', value: '1,25 a 2,5 mg/dose, 3-4 vezes ao dia' },
          { label: '> 6 anos', value: '2,5 mg/dose, 3-4 vezes ao dia' },
        ],
      },
      {
        group: 'Adultos — Broncoespasmo oral',
        items: [
          { label: 'Dose', value: '2,5 a 5 mg/dose, 3 vezes ao dia. Nas crises, repetir em 5 min ou a cada 4 horas' },
          { label: 'Spray', value: '200 a 400 µg/dose' },
        ],
      },
      {
        group: 'Adultos — Manutenção',
        items: [
          { label: 'Frequência', value: '2-4 vezes ao dia. Máximo: 8 doses/dia' },
        ],
      },
      {
        group: 'Adultos — Inalação',
        items: [
          { label: 'Dose', value: '0,5 mg (2 gotas). Crises graves: até 1,25 mg (5 gotas). Máximo: 2 mg/dia' },
        ],
      },
    ],
    preparation: 'Solução/gotas podem ser administradas por via oral ou por inalação. Antes da inalação, diluir em 3-5 mL de SF 0,9%. Por via oral, melhor antes das refeições. Spray melhor com espaçador. Lavar boca após uso.',
    sideEffects: [
      'Tremores finos (tendem a desaparecer com uso)',
      'Irritabilidade, inquietação, desassossego',
      'Vertigem, tontura, cefaleia, fadiga',
      'Cãibras, sudorese',
      'Taquicardia, palpitações, hipertensão sistólica',
      'Redução da diastólica, arritmias',
      'Náusea, vômitos',
      'Hipopotassemia, hiperinsulinemia, hiperlipidemia',
      'Broncoespasmo paradoxal',
    ],
    contraindications: ['Arritmia cardíaca grave', 'Cardiomiopatia hipertrófica', 'Hipertireoidismo'],
  },

  {
    id: 'terbutalina',
    name: 'Terbutalina',
    suffix: 'Sulfato de terbutalina',
    category: 'broncodilatadores-acao-curta',
    observations: 'β2-agonista com início de ação: 0,5-3 horas por via oral; 20 minutos por via subcutânea.',
    brands: ['Terbutalin — Ampola: 1 mL: 0,5 mg/mL', 'Sulfato de terbutalina — Xarope: 1,5 mg/5 mL; Ampola: 1 mL: 0,5 mg/mL', 'Terbutalina + guaifenesina — Xarope: 1,5 + 66,5 mg/5 mL'],
    presentations: [{ label: 'Xarope 1,5 mg/5 mL' }, { label: 'Ampola 0,5 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Oral',
        items: [
          { label: 'Dose', value: '0,05-0,075 mg/kg/dose, 3 vezes ao dia. Ou 0,15-0,25 mL/kg/dose do xarope. Aumentar até 0,15 mg/kg/dose, 3x/dia. Máx: 5 mg/dia' },
        ],
      },
      {
        group: 'Crianças — SC',
        items: [
          { label: 'Dose', value: '0,005-0,01 mg/kg/dose. Máx: 0,4 mg/dose. Intervalo: 15-20 min' },
        ],
      },
      {
        group: 'Crianças — EV em CTI',
        items: [
          { label: 'Bolus inicial', value: '2-10 µg/kg em 10-20 minutos' },
          { label: 'Infusão contínua', value: '0,08-0,4 µg/kg/min, aumentar 0,1-0,2 µg/kg/min a cada 20-30 min. Máx: 6-10 µg/kg/min' },
        ],
      },
      {
        group: 'Adultos — Broncoespasmo oral',
        items: [
          { label: 'Dose', value: '3-4,5 mg, 10-15 mL/dose, 3 vezes ao dia. Máx: 15 mg/dia' },
        ],
      },
      {
        group: 'Adultos — SC/IM',
        items: [
          { label: 'Dose', value: '0,25 mg/dose, repetir em 15-30 min. Máx: 0,5 mg em 4h e 4 doses/24h' },
        ],
      },
      {
        group: 'Adultos — EV em CTI',
        items: [
          { label: 'Dose', value: 'Iniciar 0,25 mg/min, aumentar 0,005-0,01 mg a cada 10 min' },
        ],
      },
      {
        group: 'Adultos — Evitar parto prematuro (tocólise < 48h)',
        items: [
          { label: 'EV', value: 'Iniciar 5-10 µg/min, aumentar 5 µg/min a cada 30 min. Máx: 25 µg/min. Manter 1h, reduzir para menor dose sem contrações por 24h' },
        ],
      },
    ],
    preparation: 'Diluir 5 mg em 1000 mL de SG 5% para obter solução a 5 µg/mL. Usar em 12 horas. Uso parenteral reservado para casos graves. Não exige ajuste renal.',
    sideEffects: [
      'Tremores, irritabilidade, tonzia, cefaleia, sonolência, insônia, vertigem, ansiedade, inquietação',
      'Taquicardia, palpitações, hipertensão sistólica, redução diastólica, arritmias, prolongamento QT',
      'Aumento de CPK',
      'Náusea, vômito, boca seca, alteração paladar',
      'Dispneia, broncoespasmo paradoxal, edema pulmonar',
      'Faringite, aperto peito, garganta seca, sudorese, fraqueza, cãibras',
    ],
    contraindications: ['Hipopotassemia', 'Hiperinsulinemia', 'Hiperlipidemia', 'Cardiopatia', 'Hipertireoidismo', 'Gestação múltipla'],
  },

  {
    id: 'salbutamol',
    name: 'Salbutamol',
    suffix: 'Albuterol',
    category: 'broncodilatadores-acao-curta',
    observations: 'Agonista β2-adrenérgico com início em minutos e duração 2-5h inalatório, 3-8h oral. Formulações orais menos eficientes com mais efeitos colaterais.',
    brands: [
      'Aerolin — Comprimido: 2, 4 mg; Spray: 100 µg/jato; Solução nebulização: 5 mg/mL; Xarope: 2 mg/5 mL; Ampola: 0,5 mg/mL',
      'Aerolin Nebules — Ampola/nebulização: 1 mg/mL',
      'Aeromed / Aerodini / Aerogold — Xarope: 2 mg/5 mL; Spray: 100 µg/jato',
      'Salbutamol + guaifenesina — Xarope: 2 + 100 mg/5 mL',
    ],
    presentations: [
      { label: 'Comprimido 2 mg' },
      { label: 'Comprimido 4 mg' },
      { label: 'Spray 100 µg/jato' },
      { label: 'Solução nebulização 5 mg/mL' },
      { label: 'Xarope 2 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças — Broncoespasmo spray (resgate casa)',
        items: [{ label: 'Dose', value: '100-200 µg, 1-2 jatos/dose' }],
      },
      {
        group: 'Crianças — Broncoespasmo spray (hospital)',
        items: [
          { label: 'Dose', value: '2-6 jatos/dose com espaçador' },
          { label: 'Intervalo', value: 'Repetir 20 min na 1ª hora, depois 2-4h conforme resposta' },
        ],
      },
      {
        group: 'Crianças — Manutenção spray',
        items: [{ label: 'Dose', value: '1 jato (100 µg), a cada 4 horas' }],
      },
      {
        group: 'Crianças — Nebulização',
        items: [
          { label: 'Até 2 anos', value: '0,15 mg/kg/dose' },
          { label: '2-6 anos', value: '1,25-2,5 mg/dose' },
          { label: '> 6 anos', value: '2,5-5 mg/dose' },
          { label: 'Intervalo', value: 'A cada 20-30 min na 1ª hora, depois 2-6h conforme resposta' },
        ],
      },
      {
        group: 'Crianças — EV em UTI',
        items: [
          { label: 'Bolus inicial', value: '10 µg/kg em 10 min' },
          { label: 'Infusão', value: '0,2 µg/kg/min, aumentar 0,1 µg/kg/min a cada 20-30 min. Máx: 0,6-0,8 µg/kg/min' },
        ],
      },
      {
        group: 'Crianças — Hipopotassemia (nebulização)',
        items: [
          { label: '≤ 5 kg', value: '0,4 mg/dose' },
          { label: '5-25 kg', value: '2,5 mg/dose' },
          { label: '> 25 kg', value: '5 mg/dose' },
        ],
      },
      {
        group: 'Adultos — Broncoespasmo spray (casa)',
        items: [{ label: 'Dose', value: '200 µg, 2-4 jatos/dose' }],
      },
      {
        group: 'Adultos — Broncoespasmo spray (hospital)',
        items: [
          { label: 'Dose', value: '4-8 jatos/dose, até 10 jatos na urgência' },
          { label: 'Intervalo', value: 'A cada 20 min na 1ª hora, depois 1-4h conforme resposta' },
        ],
      },
      {
        group: 'Adultos — Manutenção spray',
        items: [
          { label: 'Dose', value: '1-2 jatos a cada 4-6h. Máx: 8 jatos ou 800 µg/dia' },
        ],
      },
      {
        group: 'Adultos — Nebulização intermitente',
        items: [
          { label: 'Dose', value: '2,5-5 mg diluída em SF' },
          { label: 'Intervalo', value: 'A cada 30-60 min por 3 doses, depois 1-4h. Crises graves: até 15 min' },
        ],
      },
      {
        group: 'Adultos — Nebulização contínua em CTI',
        items: [{ label: 'Dose', value: '5-10 mg/hora em 10-15 mL SF por hora' }],
      },
      {
        group: 'Adultos — SC/IM',
        items: [
          { label: 'Dose', value: '0,15-0,25 mg/dose, repetir em 15-30 min. Máx: 0,5 mg em 4h e 2 mg/dia' },
        ],
      },
      {
        group: 'Adultos — EV contínuo em CTI',
        items: [
          { label: 'Bolus', value: '200 µg em 10 min' },
          { label: 'Infusão', value: '3-12 µg/min' },
        ],
      },
      {
        group: 'Adultos — Oral',
        items: [{ label: 'Dose', value: '2-4 mg/dose, 3-4 vezes ao dia' }],
      },
      {
        group: 'Adultos — Hipopotassemia (nebulização)',
        items: [{ label: 'Dose', value: '10-20 mg diluída para 4 mL SF. Nebulizar 40-60 min. Efeito 5h' }],
      },
    ],
    preparation: 'Agitar spray antes de usar. Aguardar 3 min entre jatos da mesma dose. Espaçadores melhoram eficácia. Diluir nebulização em SF 0,9% para 2-3 mL por 10 min. Fazer em local ventilado. Testar bombinha em água: flutua = vazia, afunda = cheia.',
    sideEffects: [
      'Tremores finos, taquicardia, irritabilidade, inquietação, vertigem, cefaleia, cãibras, agitação, insônia, ansiedade, fadiga',
      'Palpitações, hipertensão sistólica, redução diastólica, arritmias',
      'Vasodilatação em áreas mal ventiladas, podendo piorar hipoxemia (corrige com O2)',
      'Hipopotassemia (doses altas IV/nebulização), hiperinsulinemia, hiperlipidemia',
      'Náusea, vômitos, mal-estar digestivo, azia, pirose, garganta seca',
      'Alergia, urticária, angioedema, Stevens-Johnson',
      'Irritação faringe, tosse, rouquidão',
      'Broncoespasmo paradoxal, sudorese',
    ],
    contraindications: ['Arritmia cardíaca grave'],
  },
];