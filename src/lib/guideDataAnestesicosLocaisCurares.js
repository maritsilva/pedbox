export const anestesicosLocais = [
  {
    id: 'bupivacaina',
    name: 'Bupivacaína',
    suffix: 'Cloridrato de bupivacaína',
    category: 'anestesicos-locais',
    observations: 'Amida com ação anestésica local. Início de ação tardio: 6 a 10 minutos. Duração longa: 4 a 8 horas. Indicada para anestesia de longa duração, analgesia pós-operatória ou anestesia peridural. A solução 0,75% não deve ser usada em obstetrícia.',
    brands: [
      'Neocaína / Neocaína Isobárica / Bupivacaína — fr. amp. 0,25%, 0,5%, 0,75%',
      'Com epinefrina: associações com adrenalina/epinefrina',
      'Bupican Heavy / Neocaína Pesada / Marcaína — ampola 5 + 80 mg/mL (com glicose)',
      'Cloridrato de bupivacaína + glicose — ampola 5 + 80 mg/mL',
    ],
    presentations: [
      { label: 'Fr. amp. 2,5 mg/mL (0,25%)' },
      { label: 'Fr. amp. 5 mg/mL (0,5%)' },
      { label: 'Fr. amp. 7,5 mg/mL (0,75%)' },
      { label: 'Ampola pesada 5 + 80 mg/mL (com glicose)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Evitar em menores de 12 anos', value: '' }],
      },
      {
        group: 'Adultos — Dose máxima',
        items: [
          { label: 'Com epinefrina', value: '200 mg' },
          { label: 'Sem epinefrina', value: '175 mg. Doses podem ser repetidas após 3 horas' },
        ],
      },
      {
        group: 'Doses orientativas por procedimento',
        items: [
          { label: 'Peridural 0,75%', value: '10 a 20 mL → 75 a 150 mg' },
          { label: 'Peridural 0,5%', value: '10 a 20 mL → 50 a 100 mg' },
          { label: 'Peridural 0,25%', value: '10 a 20 mL → 25 a 50 mg' },
          { label: 'Caudal 0,5%', value: '15 a 30 mL → 75 a 150 mg' },
          { label: 'Caudal 0,25%', value: '15 a 30 mL → 37,5 a 75 mg' },
          { label: 'Nervos periféricos 0,5%', value: '5 mL → até 25 mg' },
          { label: 'Nervos periféricos 0,25%', value: '5 mL → até 12,5 mg' },
          { label: 'Retrobulbar 0,75%', value: '2 a 4 mL → 15 a 30 mg' },
          { label: 'Simpático 0,25%', value: '20 a 50 mL → 50 a 125 mg' },
          { label: 'Dose teste 0,5% c/ epinefrina', value: '2 a 4 mL → 10 a 15 mg' },
        ],
      },
    ],
    preparation: 'Apresentações com vasoconstritor contêm 5 µg/mL de epinefrina. A solução 0,75% não deve ser usada em obstetrícia. Não usar por via venosa. Tempo de ação: 2–4 horas sem epinefrina; até 8 horas com vasoconstritor.',
    sideEffects: [
      'Hiperventilação, apneia, parada cardíaca secundária',
      'Agitação, ansiedade, vertigem, zumbido, visão borrada, tremor, convulsão, síncope, cefaleia',
      'Náusea, vômitos',
      'Taquicardia, sudorese, febre',
      'Depressão miocárdica, bloqueio cardíaco, hipotensão, arritmias, fibrilação ventricular',
      'Urticária, prurido, eritema, edema angioneurótico, edema de laringe',
      'Não usar para bloqueio paracervical',
    ],
    contraindications: [],
  },

  {
    id: 'levobupivacaina',
    name: 'Levobupivacaína',
    category: 'anestesicos-locais',
    observations: 'Amida com ação anestésica local semelhante à bupivacaína. Início de ação tardio: 6 a 10 minutos. Duração após infiltração: 4 a 8 horas.',
    brands: [
      'Novabupi — ampola 0,25%, 0,5%, 0,75%',
      'Novabupi Isobárica — ampola 5 mg/mL (0,5%) sem conservante',
      'Com epinefrina: 5 µg/mL',
    ],
    presentations: [
      { label: 'Ampola 2,5 mg/mL (0,25%)' },
      { label: 'Ampola 5 mg/mL (0,5%)' },
      { label: 'Ampola 7,5 mg/mL (0,75%)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Evitar em menores de 12 anos', value: '' }],
      },
      {
        group: 'Adultos — Dose máxima',
        items: [
          { label: 'Peridural', value: '375 mg fracionadas' },
          { label: 'Bloqueios periféricos', value: '300 mg' },
        ],
      },
      {
        group: 'Doses orientativas',
        items: [
          { label: 'Infiltração local 0,25%', value: '60 mL → 150 mg' },
          { label: 'Peridural cirurgia 0,5%', value: '10 a 20 mL → 50 a 150 mg' },
          { label: 'Peridural analgesia 0,5%', value: '20 a 30 mL → 100 a 150 mg' },
          { label: 'Cesariana 0,5%', value: '30 mL → 75 a 150 mg' },
          { label: 'Nervo periférico 0,25–0,5%', value: '30 mL → 75 a 150 mg' },
          { label: 'Oftálmica 0,75%', value: '5 a 15 mL → 37,5 a 112,5 mg' },
          { label: 'Analgesia peridural 0,25%', value: '10 a 20 mL → 25 a 50 mg' },
          { label: 'Dor pós-op 0,125–0,25%', value: '4–10 mL/hora → 5 a 25 mg/hora' },
        ],
      },
    ],
    preparation: 'Não usar por via venosa.',
    sideEffects: [
      'Astenia, febre, cefaleia, vertigem, contraturas, tremor, síncope, confusão',
      'Hipotensão, edema, arritmia, fibrilação, edema pulmonar',
      'Injeção venosa acidental com parada cardíaca',
      'Náusea, vômito, constipação, cólica, icterícia',
      'Apneia, broncoespasmo, dispneia',
      'Sudorese, descoloração da pele, alergia, prurido, angioedema, urticária, anafilaxia',
    ],
    contraindications: [],
  },

  {
    id: 'lidocaina',
    name: 'Lidocaína',
    suffix: 'Cloridrato de lidocaína',
    category: 'anestesicos-locais',
    observations: 'Amida com ação anestésica local e antiarrítmica classe IB. Início: 2 a 3 min. Duração: 30 a 60 min sem epinefrina; 60 a 120 min com epinefrina. Eficaz em taquicardia ventricular e extrassístoles ventriculares sintomáticas. Ineficaz em arritmias supraventriculares. Na FV refratária, preferir amiodarona. 20 mg de cloridrato = 17,3 mg de lidocaína. Nível terapêutico: 1,5–5 µg/mL; tóxico: > 6 µg/mL. Não dialisável.',
    brands: [
      'Xylestesin / Xylestesin Isobárica / Carpule / Lidogel — fr. amp. 1% (10 mg/mL), 2% (20 mg/mL); ampola 5% (50 mg/mL)',
      'Com epinefrina: 10 mg/mL + 0,005 mg/mL e 20 mg/mL + 0,005 mg/mL',
      'Com norepinefrina: carpule 20 mg/mL + 0,02 mg/mL',
      'Com glicose: ampola 20 mg/mL + 75 mg/mL',
    ],
    presentations: [
      { label: 'Fr. amp. 10 mg/mL (1%)' },
      { label: 'Fr. amp. 20 mg/mL (2%)' },
      { label: 'Ampola 50 mg/mL (5%)' },
      { label: 'Gel 20 mg/mL (2%)' },
    ],
    doses: [
      {
        group: 'Crianças — Arritmia',
        items: [
          { label: 'Bolus EV', value: '1 mg/kg. Manutenção: 1 a 2 mg/kg/hora (diluir 120 mg em 100 mL SGI; correr 1 a 2,5 µg/kg/min)' },
        ],
      },
      {
        group: 'Crianças — Epilepsia refratária',
        items: [
          { label: 'Bolus', value: '1 a 2 mg/kg. Infusão: 2 a 4 mg/kg/hora (0,02 mg/kg/min). Dose máxima: 30 µg/kg' },
        ],
      },
      {
        group: 'Crianças — Bloqueio de HIC na intubação',
        items: [
          { label: 'Bolus EV', value: '1 a 2 mg/kg em 2 a 5 min antes da intubação' },
        ],
      },
      {
        group: 'Adultos — Dose máxima para anestesia local',
        items: [
          { label: 'Com epinefrina', value: '7 mg/kg ou 500 mg' },
          { label: 'Sem epinefrina', value: '4,4 mg/kg ou 300 mg' },
        ],
      },
      {
        group: 'Adultos — Convulsão refratária',
        items: [
          { label: 'Bolus EV', value: '50 a 100 mg. Se eficaz: manutenção 1 a 2 mg/min' },
        ],
      },
      {
        group: 'Adultos — Taquicardia/FV (alternativa inferior à amiodarona)',
        items: [
          { label: 'Bolus EV', value: '1,0 a 1,5 mg/kg. Se necessário: 0,5 a 0,75 mg/kg a cada 5 a 10 min. Dose acumulada: 3 mg/kg' },
          { label: 'Endotraqueal', value: '2 a 4 mg/kg ou 300 mg/dose diluída em 10 a 20 mL SF' },
          { label: 'Manutenção', value: '1 a 4 mg/min (20 a 60 µg/kg/min). Diluir 2000 mg em 250 mL SGI 5% = 1 mg/min por 7,5 mL/hora' },
        ],
      },
      {
        group: 'Doses orientativas por procedimento',
        items: [
          { label: 'Percutânea 0,5–1%', value: '1 a 60 mL → 5 a 300 mg' },
          { label: 'Regional EV 0,5%', value: '10 a 60 mL → 50 a 300 mg' },
          { label: 'Bloqueio braquial 1,5%', value: '15 a 20 mL → 225 a 300 mg' },
          { label: 'Bloqueio dental 2%', value: '1 a 5 mL → 20 a 100 mg' },
          { label: 'Bloqueio intercostal 1%', value: '3 mL → 30 mg' },
          { label: 'Peridural torácico 1%', value: '20 a 30 mL → 200 a 300 mg' },
          { label: 'Peridural lombar 1%', value: '25 a 30 mL → 250 a 300 mg' },
          { label: 'Anestesia peridural 2%', value: '10 a 15 mL → 200 a 300 mg' },
        ],
      },
    ],
    preparation: 'Para bolus EV: diluir para 20 mg/mL com SF. Não usar preparações com adrenalina EV. Cuidado em IR, IAM, choque, ICC grave e > 70 anos: usar metade da dose. Produtos sem vasoconstritor podem ser autoclavados a 121 °C. O calor inativa a epinefrina. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Anestesia local: alergia, anafilaxia, hipotensão, bradicardia, colapso vascular',
      'Náusea, vômitos, sonolência, confusão, euforia, convulsão, apneia, arritmia, FV',
      'Injeção EV acidental de epinefrina: taquicardia, hipertensão, palpitação, palidez perioral',
      'Não usar anestésicos com vasoconstritor em dedos, pênis, nariz ou orelha (risco de isquemia)',
      'Uso EV: tontura, parestesias, confusão, bradicardia, hipotensão',
      'Dose alta: agitação, convulsão, perda de consciência, coma, nistagmo, diplopia, disartria',
      'Doses muito altas: depressão miocárdica, choque, bloqueio AV, taquicardia ventricular, assistolia',
    ],
    contraindications: ['Bloqueio atrioventricular avançado sem marca-passo'],
  },

  {
    id: 'mepivacaina',
    name: 'Mepivacaína',
    category: 'anestesicos-locais',
    observations: 'Amida com estrutura semelhante à lidocaína. Início: 1,5 a 2 minutos. Duração intermediária: 45 a 180 minutos. Provoca menos vasodilatação que outros anestésicos — comumente usada sem vasoconstritor.',
    brands: ['Mepican — carpule 30 mg/mL (3%)'],
    presentations: [{ label: 'Carpule 30 mg/mL (3%)' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose máxima', value: '5 a 6 mg/kg. Em < 3 anos (< 13,6 kg): usar concentrações de 0,5 a 1,5%' },
        ],
      },
      {
        group: 'Adultos — Dose máxima',
        items: [
          { label: 'Com vasoconstritor', value: '7 mg/kg ou 500 mg' },
          { label: 'Sem vasoconstritor', value: '4,4 mg/kg ou 300 mg' },
        ],
      },
      {
        group: 'Doses orientativas',
        items: [
          { label: 'Peridural 1,5%', value: '10 a 25 mL → 150 a 375 mg' },
          { label: 'Peridural 2%', value: '10 a 20 mL → 200 a 400 mg' },
          { label: 'Braquial/cervical/intercostal/pudendo 1%', value: '5 a 40 mL → 50 a 400 mg' },
          { label: 'Transvaginal cada lado 1%', value: '15 mL → até 300 mg' },
          { label: 'Bloqueio paracervical 1%', value: 'até 20 mL → até 200 mg' },
        ],
      },
    ],
    preparation: 'Não usar por via venosa. Em anestesia paracervical: dose máxima dividida e aplicada lentamente; pode ser repetida a cada 90 minutos. Evitar em gestantes — metabolização fetal é difícil.',
    sideEffects: [
      'Bradicardia, parada cardiorrespiratória, bradicardia fatal com bloqueio paracervical',
      'Bloqueio cardíaco, hipotensão, arritmia ventricular',
      'Meningite bacteriana, hipersensibilidade (rara)',
      'Condrólise da articulação, transtorno do nervo craniano, convulsão',
    ],
    contraindications: ['Gestantes (metabolização fetal difícil)'],
  },

  {
    id: 'ropivacaina',
    name: 'Ropivacaína',
    suffix: 'Cloridrato de ropivacaína',
    category: 'anestesicos-locais',
    observations: 'Solução anestésica estéril, isotônica e isobárica. Amida com ação anestésica local. Duração após infiltração: 2 a 8 horas.',
    brands: [
      'Naropin / Ropi / Anesyn / Opivac — ampola 0,2% (2 mg/mL), 0,75% (7,5 mg/mL), 1,0% (10 mg/mL)',
      'Cloridrato de ropivacaína — ampola 0,75% e 1,0%',
    ],
    presentations: [
      { label: 'Ampola 2 mg/mL (0,2%)' },
      { label: 'Ampola 7,5 mg/mL (0,75%)' },
      { label: 'Ampola 10 mg/mL (1,0%)' },
    ],
    doses: [
      {
        group: 'Adultos — Dose máxima via peridural',
        items: [
          { label: 'Sem epinefrina', value: '200 mg. Com epinefrina: 250 mg' },
        ],
      },
      {
        group: 'Doses orientativas',
        items: [
          { label: 'Peridural cirúrgica 0,75%', value: '15 a 25 mL → 113 a 188 mg; início 10–20 min; duração 3–5 h' },
          { label: 'Peridural cirúrgica 1,0%', value: '15 a 20 mL → 150 a 200 mg; início 10–20 min; duração 4–6 h' },
          { label: 'Peridural cesariana 0,75%', value: '15 a 20 mL → 113 a 150 mg' },
          { label: 'Peridural torácica 0,75%', value: '5 a 15 mL → 38 a 113 mg' },
          { label: 'Bloqueio neural maior 0,75%', value: '10 a 40 mL → 75 a 300 mg; duração 6–10 h' },
          { label: 'Bloqueio de campo 0,75%', value: '1 a 30 mL → 7,5 a 225 mg; duração 2–6 h' },
          { label: 'Peridural dor — bolus 0,2%', value: '10 a 20 mL → 20 a 40 mg' },
          { label: 'Peridural dor — infusão 0,2%', value: '6 a 14 mL/hora → 12 a 28 mg/hora' },
          { label: 'Intra-articular 0,75%', value: '20 mL → 150 mg; duração 2–6 h' },
        ],
      },
    ],
    preparation: 'Não usar por via venosa.',
    sideEffects: [
      'Vertigem, cefaleia, hipertermia, hipo/hipertensão, bradicardia, taquicardia',
      'Náusea, vômito, retenção urinária, lombalgia',
      'Raro: convulsão, alucinações, parestesias',
      'Raríssimo: parada cardíaca, arritmia cardíaca',
      'Efeitos cardiovasculares e neurológicos se injetada em vasos ou absorvida em dose alta',
    ],
    contraindications: [],
  },
];

export const curares = [
  {
    id: 'atracurio',
    name: 'Atracúrio',
    category: 'curares-bloqueadores-neuromusculares',
    observations: 'Bloqueador não despolarizante com início de ação rápido e duração intermediária, 20 a 50 minutos.',
    brands: ['Tracrium — ampola 2,5 e 5 mL: 10 mg/mL'],
    presentations: [{ label: 'Ampola 2,5 mL — 10 mg/mL' }, { label: 'Ampola 5 mL — 10 mg/mL' }],
    doses: [
      {
        group: 'Procedimentos rápidos / intubação',
        items: [
          { label: 'Adultos e crianças > 2 anos', value: '0,4 a 0,5 mg/kg' },
          { label: '1 mês a 2 anos', value: '0,3 a 0,4 mg/kg/dose' },
        ],
      },
      {
        group: 'Manutenção cirúrgica',
        items: [
          { label: 'Bolus', value: '0,08 a 0,1 mg/kg/dose a cada 20 a 45 min' },
          { label: 'Infusão contínua', value: '5 a 13 µg/kg/min' },
        ],
      },
    ],
    preparation: 'Bolus EV pode ser rápido e sem diluir. Em debilitados e hipovolêmicos, fracionar a dose. Insuficiência renal: não exige ajuste. Antídoto: neostigmina + atropina.',
    sideEffects: [
      'Liberação de histamina, hipotensão, vasodilatação, eritema difuso transitório',
      'Prurido, urticária, erupção cutânea, anafilaxia',
      'Taquicardia, bradicardia, rubor',
      'Dispneia, broncoespasmo, laringoespasmo',
      'Interação com aminoglicosídeos, polimixina B e isoflurano',
    ],
    contraindications: [],
  },

  {
    id: 'cisatracurio',
    name: 'Cisatracúrio',
    category: 'curares-bloqueadores-neuromusculares',
    observations: 'Bloqueador não despolarizante com duração intermediária, 20 a 50 minutos.',
    brands: ['Nimbium / Cis — ampola 5 e 10 mL: 2 mg/mL'],
    presentations: [{ label: 'Ampola 5 mL — 2 mg/mL' }, { label: 'Ampola 10 mL — 2 mg/mL' }],
    doses: [
      {
        group: 'Procedimentos rápidos / intubação',
        items: [
          { label: 'Adultos', value: '0,15 a 0,2 mg/kg' },
          { label: 'Crianças 2 a 12 anos', value: '0,1 a 0,15 mg/kg' },
        ],
      },
      {
        group: 'Manutenção cirúrgica',
        items: [
          { label: 'Após 40 a 60 min', value: '0,02 a 0,03 mg/kg/dose' },
          { label: 'Infusão contínua', value: '1 a 3 µg/kg/min (pode variar 0,5 a 10,2 µg/kg/min)' },
        ],
      },
    ],
    preparation: 'Insuficiência renal: não exige ajuste. Antídoto: neostigmina + atropina.',
    sideEffects: [
      'Liberação de histamina leve, rubor, exantema, erupção cutânea, anafilaxia',
      'Broncoespasmo, hipotensão, bradicardia',
      'Interação com aminoglicosídeos, polimixina B, desflurano, enflurano, isoflurano e N₂O',
    ],
    contraindications: [],
  },

  {
    id: 'pancuronio',
    name: 'Pancurônio',
    suffix: 'Brometo de pancurônio',
    category: 'curares-bloqueadores-neuromusculares',
    observations: 'Bloqueador não despolarizante de longa duração, 1 a 3 horas. Apresenta tolerância progressiva a cada dose. Resposta individual variável.',
    brands: ['Pancuron / Brometo de pancurônio — ampola 2 mL: 2 mg/mL'],
    presentations: [{ label: 'Ampola 2 mL — 2 mg/mL' }],
    doses: [
      {
        group: 'Anestesia geral',
        items: [{ label: 'Dose', value: '0,04 a 0,1 mg/kg/dose' }],
      },
      {
        group: 'Neonatos',
        items: [{ label: 'Dose', value: '0,01 a 0,02 mg/kg/dose' }],
      },
      {
        group: 'Intubação traqueal',
        items: [{ label: 'Dose inicial', value: '0,06 a 0,1 mg/kg/dose' }],
      },
      {
        group: 'Manutenção cirúrgica',
        items: [
          { label: 'Após 1 hora', value: '0,01 mg/kg repetida a cada 20 a 60 min' },
          { label: 'Infusão contínua', value: '0,3 a 0,5 µg/kg/min' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '50% da dose' },
      { label: 'ClCr < 10 mL/min', value: 'Melhor evitar' },
    ],
    preparation: 'EV sem diluir ou diluído em SF, SGI ou infusão lactada. Antídoto: neostigmina + atropina. Equipamento para ventilação e intubação deve estar disponível antes do uso.',
    sideEffects: [
      'Liberação de histamina, hipotensão, taquicardia, arritmia, extrassístolia ventricular',
      'Colapso cardiovascular, edema periférico e pulmonar',
      'Hipersalivação, erupção cutânea',
      'Paralisia respiratória prolongada',
      'Interação com aminoglicosídeos, polimixina B, suxametônio, isoflurano; toxicidade com fenitoína',
    ],
    contraindications: [],
  },

  {
    id: 'rocuronio',
    name: 'Rocurônio',
    suffix: 'Brometo de rocurônio',
    category: 'curares-bloqueadores-neuromusculares',
    observations: 'Bloqueador não despolarizante similar ao vecurônio. Início de ação rápido: 1 minuto. Duração intermediária: 30 a 60 minutos.',
    brands: [
      'Esmeron / Rocuron — fr. amp. 5 mL: 10 mg/mL',
      'Brometo de rocurônio — fr. amp. 5 mL: 10 mg/mL',
    ],
    presentations: [{ label: 'Fr. amp. 5 mL — 10 mg/mL' }],
    doses: [
      {
        group: 'Sequência rápida para intubação',
        items: [{ label: 'Bolus', value: '0,6 a 1,2 mg/kg/dose' }],
      },
      {
        group: 'Anestesia geral / intubação traqueal',
        items: [{ label: 'Dose', value: '0,45 a 0,6 mg/kg/dose' }],
      },
      {
        group: 'Manutenção cirúrgica',
        items: [
          { label: 'Adultos', value: '0,1 a 0,2 mg/kg/dose a cada 20 a 30 min; ou infusão contínua 10 a 12 µg/kg/min' },
          { label: 'Crianças', value: '0,075 a 0,15 mg/kg; ou infusão 7 a 12 µg/kg/min' },
        ],
      },
    ],
    preparation: 'Perde potência após 60 dias à temperatura ambiente. Pode ser diluído em SF, SGI ou Ringer lactato. Antídoto: edrofônio ou neostigmina. Equipamento para ventilação disponível antes do uso.',
    sideEffects: [
      'Hipertensão, hipotensão, taquicardia, arritmia',
      'Náusea, vômito, erupção cutânea, soluço, prurido',
      'Aumento da resistência vascular periférica',
      'Interação com aminoglicosídeos, polimixina B; fenitoína diminui o efeito',
    ],
    contraindications: [],
  },

  {
    id: 'suxametonio',
    name: 'Suxametônio',
    suffix: 'Succinilcolina',
    category: 'curares-bloqueadores-neuromusculares',
    observations: 'Bloqueador neuromuscular despolarizante de efeito ultracurto. Indicado para intubação e procedimentos rápidos. Efeito EV: início 1 min, duração 5 min. Efeito IM: início 2–3 min, duração 10–30 min.',
    brands: [
      'Quelicin / Succinil Colin / Succitrat — pó liofilizado 100 e 500 mg; fr. amp. 100 e 500 mg',
    ],
    presentations: [
      { label: 'Pó liofilizado 100 mg' },
      { label: 'Pó liofilizado 500 mg' },
      { label: 'Fr. amp. 100 mg' },
    ],
    doses: [
      {
        group: 'Anestesia geral / intubação traqueal',
        items: [
          { label: 'EV', value: '0,6 mg/kg/dose (ou 0,3 a 1,1 mg/kg). Dose máxima: 150 mg' },
          { label: 'IM', value: '3 a 4 mg/kg' },
        ],
      },
      {
        group: 'Sequência rápida para intubação',
        items: [
          { label: 'Adultos', value: '1 a 1,5 mg/kg após sedação' },
          { label: 'Lactentes', value: '2 mg/kg' },
          { label: 'Neonatos até 6 meses', value: '2 a 3 mg/kg' },
        ],
      },
      {
        group: 'Manutenção cirúrgica',
        items: [
          { label: 'Adultos', value: '0,3 a 1,1 mg/kg/dose a cada 20 a 30 min; ou infusão 2,5 a 4,3 mg/min' },
          { label: 'Crianças', value: '0,3 a 0,6 mg/kg a cada 5 a 10 min (uso breve — risco de hipertermia maligna)' },
        ],
      },
    ],
    preparation: 'Pode ser usado sem diluir ou diluído em SF ou SGI. Não misturar com soluções alcalinas ou bicarbonato. Conservar em geladeira. Reduzir dose na insuficiência hepática. Pré-tratamento com atropina recomendado.',
    sideEffects: [
      'Aumenta risco de hipertermia maligna',
      'Bradicardia (usar atropina se necessário), hiperpotassemia, risco de parada cardíaca súbita',
      'Hipertensão, taquicardia, eritrodermia, broncoespasmo, hipersalivação',
      'Aumento da pressão intracraniana e intraocular',
      'Mialgia, rabdomiólise (risco de reação grave em miopatias não diagnosticadas)',
    ],
    contraindications: [
      'Miopatias músculo-esqueléticas',
      'História de hipertermia maligna',
      'Hipertensão intracraniana',
      'Fase aguda de lesões graves',
    ],
  },

  {
    id: 'vecuronio',
    name: 'Vecurônio',
    category: 'curares-bloqueadores-neuromusculares',
    observations: 'Bloqueador não despolarizante com início de ação rápido e duração intermediária, 20 a 50 minutos. Resposta individual variável.',
    brands: ['Vecuron / Vecurônio — fr. amp. 4 mg e 10 mg'],
    presentations: [
      { label: 'Fr. amp. 4 mg' },
      { label: 'Fr. amp. 10 mg' },
    ],
    doses: [
      {
        group: 'Anestesia / intubação traqueal / ventilação',
        items: [{ label: 'Dose', value: '0,08 a 0,1 mg/kg/dose' }],
      },
      {
        group: 'Manutenção',
        items: [
          { label: 'Após 25 a 40 min', value: '0,01 a 0,03 mg/kg a cada 15 min conforme necessário' },
          { label: 'Infusão contínua (adultos)', value: '0,8 a 1,2 µg/kg/min' },
        ],
      },
    ],
    preparation: 'Diluir para 1 mg/mL ou mais em SF, SGI ou Ringer lactato. Evitar associar com sais de magnésio. Insuficiência renal: não exige ajuste. Antídoto: neostigmina + atropina.',
    sideEffects: [
      'Efeitos raros',
      'Hipersalivação, erupção cutânea, prurido',
      'Bradicardia, choque circulatório, edema, rubor, taquicardia, hipotensão',
      'Paralisia respiratória prolongada, broncoespasmo, apneia, fraqueza muscular',
      'Interação com aminoglicosídeos, polimixina B, piperacilina, nicardipina, isoflurano',
    ],
    contraindications: [],
  },
];