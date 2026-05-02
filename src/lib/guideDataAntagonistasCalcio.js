// Anti-hipertensivos — Antagonistas do Cálcio

export const antagonistasCalcio = [
  {
    id: 'anlodipino',
    name: 'Anlodipino',
    suffix: 'Besilato de anlodipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina, bloqueador de canal de cálcio.',
    brands: [
      'Norvasc / Amlovasc / Pressat / Anlodipino — comprimidos 5 e 10 mg',
      'Besilato de anlodipino (genérico) — comprimidos 5 e 10 mg',
      'Anlodipino + benazepril — cáps. 2,5 + 10 / 5 + 10 / 5 + 20 mg',
      'Anlodipino + enalapril — cáps. 2,5 + 10 / 5 + 10 / 5 + 20 mg',
      'Anlodipino + losartana — cáps. 2,5 + 50 / 5 + 50 / 5 + 100 mg',
    ],
    presentations: [{ label: 'Comprimido 5 mg' }, { label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Oral', value: 'Iniciar 0,1 mg/kg/dia ÷ 1 a 2. 6 a 17 anos: 2,5 a 10 mg/dia. Dose máxima: 0,5 mg/kg/dia' },
          { label: 'Insuficiência hepática', value: '50% da dose' },
        ],
      },
      {
        group: 'Adultos — Hipertensão / Angina',
        items: [{ label: 'Oral', value: 'Início: 2,5 a 5 mg/dia. Dose habitual: 5 a 10 mg/dia. Aguardar 1 a 2 semanas antes de aumentar. Dose máxima: 10 mg/dia' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [{ label: 'Oral', value: '5 a 10 mg/dia' }],
      },
    ],
    preparation: 'Melhor tomar com copo de água, antes ou após refeições. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Cefaleia, sonolência, tontura, fadiga, astenia, tremor, alterações de humor, distúrbios visuais',
      'Edema, eritrodermia, erupção cutânea, prurido, angioedema, sudorese, vasculite',
      'Palpitação, síncope, hipotensão, rubor, piora de ICC (raro)',
      'Náusea, dor abdominal, diarreia, constipação, boca seca, hepatite, colestase, pancreatite',
      'Artralgia, cãibras, mialgia, neuropatia periférica, parestesias',
      'Edema de membros inferiores (idosos), hipertrofia gengival, ginecomastia, impotência',
      'Polaciúria, hiperglicemia, leucopenia, plaquetopenia',
      'Interações: clopidogrel, claritromicina, sinvastatina, amiodarona, telaprevir',
    ],
    contraindications: [
      'Doença do nodo sinusal',
      'BAV de 2º ou 3º grau sem marca-passo',
      'ICC com FE < 35%',
      'Hipotensão grave',
      'Bradicardia grave',
      'IAM recente',
      'Angina instável',
    ],
  },

  {
    id: 'diltiazem',
    name: 'Diltiazem',
    suffix: 'Cloridrato de diltiazem',
    category: 'antagonistas-calcio',
    observations: 'Antagonista do cálcio da classe benzotiazepinas. Antiarrítmico. Não provoca taquicardia reflexa. Fabricante contraindica uso em crianças; existem opções mais seguras.',
    brands: [
      'Cardizem / Balcor / Cordil / Diltiazem — comp. 30 e 60 mg; cáps. CD 180/240 mg; cáps. SR 90/120 mg',
      'Cloridrato de diltiazem (genérico) — comp. 30 e 60 mg',
    ],
    presentations: [
      { label: 'Comprimido 30 mg' },
      { label: 'Comprimido 60 mg' },
      { label: 'Cápsula CD 180 / 240 mg' },
      { label: 'Cápsula SR 90 / 120 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 5 anos',
        items: [{ label: 'Oral (uso restrito)', value: 'Iniciar 1,5 a 2 mg/kg/dia ÷ 3 a 4. Dose máxima: 3,5 mg/kg/dia. Fabricante contraindica; existem opções mais seguras' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral LP', value: 'Início 180 mg/dia ÷ 1 a 2. Dose habitual: 240 a 360 mg/dia. Dose máxima: 480 mg/dia' }],
      },
      {
        group: 'Adultos — Angina',
        items: [{ label: 'Oral', value: 'Início 120 a 180 mg/dia. Dose habitual: 120 a 360 mg/dia. Dose máxima: 480 mg/dia' }],
      },
      {
        group: 'Adultos — Profilaxia enxaqueca',
        items: [{ label: 'Oral', value: '120 a 360 mg/dia ÷ 1 a 3' }],
      },
      {
        group: 'Adultos — Arritmia',
        items: [{ label: 'Oral LP', value: '120 a 360 mg/dia' }],
      },
    ],
    preparation: 'Melhor tomar com copo de água, antes das refeições. Aguardar 2 semanas antes de ajustar dose. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Bradicardia, hipotensão, rubor, arritmia, BAV, assistolia, pode piorar ICC',
      'Tontura, fraqueza, tremores, cefaleia, nervosismo, parestesia, astenia',
      'Náusea, constipação, boca seca, dispepsia',
      'Edema periférico',
      'Urticária, erupção cutânea, dermatite (pode evoluir para epidermólise ou Stevens-Johnson)',
      'Leucopenia, trombocitopenia, hepatotoxicidade',
      'Bloqueadores do canal de cálcio podem causar toxicidade grave em crianças',
    ],
    contraindications: [
      'Doença do nodo sinusal',
      'BAV de 2º ou 3º grau sem marca-passo',
      'IAM agudo com congestão pulmonar',
      'Síndrome de Wolff-Parkinson-White',
      'Choque cardiogênico',
      'Hipotensão arterial grave',
      'Angina instável',
      'Taquicardia ventricular',
      'Bradicardia grave',
    ],
  },

  {
    id: 'felodipino',
    name: 'Felodipino',
    category: 'antagonistas-calcio',
    observations: 'Bloqueador seletivo de canal de cálcio, derivado da di-hidropiridina, com efeitos semelhantes ao nifedipino. Fabricante contraindica uso em crianças.',
    brands: ['Splendil — comprimido LP 2,5 / 5 / 10 mg'],
    presentations: [{ label: 'Comprimido LP 2,5 mg' }, { label: 'Comprimido LP 5 mg' }, { label: 'Comprimido LP 10 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Início: 2,5 a 5 mg/dia. Aumentar se necessário até 10 mg/dia. Idosos: iniciar com 2,5 mg/dia' }],
      },
      {
        group: 'Adultos — Angina',
        items: [{ label: 'Oral', value: '2,5 a 5 mg × 2' }],
      },
    ],
    preparation: 'Melhor tomar com copo de água, antes das refeições ou ao deitar. Aguardar 2 semanas antes de ajustar dose.',
    sideEffects: [
      'Cefaleia, tontura, ansiedade, depressão, insônia, irritabilidade',
      'Edema periférico, angioedema, taquicardia, arritmia, hipotensão, dispneia, rubor',
      'Urticária, AVC',
    ],
    contraindications: [],
  },

  {
    id: 'lacidipino',
    name: 'Lacidipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina, antagonista do canal de cálcio. Comprimido pode ser partido na marca.',
    brands: ['Lacipil — comprimido revestido 4 mg'],
    presentations: [{ label: 'Comprimido revestido 4 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 2 mg/dia. Após 4 semanas, aumentar se necessário até 4 mg/dia. Dose máxima: 6 mg/dia' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [{ label: 'Oral', value: '4 mg/dia' }],
      },
    ],
    sideEffects: [
      'Cefaleia, tontura, astenia',
      'Rubor, edema, palpitação, dor torácica',
      'Erupção cutânea, púrpura',
      'Náusea, hiperplasia gengival',
    ],
    contraindications: ['Estenose aórtica avançada'],
  },

  {
    id: 'lercanidipino',
    name: 'Lercanidipino',
    suffix: 'Cloridrato de lercanidipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina, antagonista do canal de cálcio.',
    brands: ['Zanidip — comprimido revestido 10 e 20 mg', 'Cloridrato de lercanidipino (genérico) — comprimido revestido 10 e 20 mg'],
    presentations: [{ label: 'Comprimido revestido 10 mg' }, { label: 'Comprimido revestido 20 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Dose habitual: 10 mg/dia. Dose máxima: 20 mg/dia' }],
      },
    ],
    sideEffects: [
      'Cefaleia, vertigem, fraqueza, tontura',
      'Taquicardia, hipotensão, poliúria, edema, rubor',
      'Erupção cutânea, náusea, vômitos',
    ],
    contraindications: [],
  },

  {
    id: 'levanlodipino',
    name: 'Levanlodipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina, antagonista de canal de cálcio.',
    brands: ['Novanlo — comprimidos 2,5 mg e 5 mg'],
    presentations: [{ label: 'Comprimido 2,5 mg' }, { label: 'Comprimido 5 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '2,5 a 5 mg/dia' }],
      },
    ],
    sideEffects: [
      'Cefaleia, vertigem, palpitação, fraqueza, tontura',
      'Hipotensão, edema, rubor',
      'Erupção cutânea, náusea, vômitos',
    ],
    contraindications: [],
  },

  {
    id: 'manidipino',
    name: 'Manidipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina, antagonista de canal de cálcio. Melhor tomar pela manhã após o café com copo de água. Aguardar 2 a 4 semanas antes de aumentar a dose.',
    brands: ['Manivasc — comprimido 10 mg'],
    presentations: [{ label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Dose máxima: 20 mg/dia. Em idosos: 10 mg/dia' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [{ label: 'Oral', value: '10 mg/dia' }],
      },
    ],
    sideEffects: [
      'Cefaleia, tontura, vertigem, parestesia, sonolência, astenia',
      'Edema, palpitações, hipotensão, dispneia',
      'Náusea, vômitos, constipação, boca seca, dor abdominal',
      'Erupção cutânea, eritema, prurido',
    ],
    contraindications: ['Insuficiência renal ou hepática grave', 'IAM recente', 'Angina instável'],
  },

  {
    id: 'nicardipino',
    name: 'Nicardipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina IV. Não disponível no Brasil (Cardene — solução injetável 2,5 mg/mL). Início de ação EV: 5–15 min; pico: 30–120 min; duração: 4–6 horas.',
    brands: ['Cardene (EUA) — solução injetável 2,5 mg/mL (não disponível no Brasil)'],
    presentations: [{ label: 'Solução injetável 2,5 mg/mL (EUA)' }],
    doses: [
      {
        group: 'Crianças — Urgência/emergência hipertensiva',
        items: [{ label: 'EV', value: 'Ataque: 30 µg/kg em 1 min (máx 2 mg). Depois infusão contínua 0,5 a 4 µg/kg/min' }],
      },
      {
        group: 'Adultos — Emergência hipertensiva',
        items: [{ label: 'EV', value: 'Iniciar 5 mg/hora; aumentar 2,5 mg/hora a cada 5 a 15 min. Máximo: 15 mg/hora. Insuficiência renal: não exige ajuste' }],
      },
    ],
    sideEffects: [
      'Rubor, palpitação, hipotensão ortostática, taquicardia reflexa, piora de angina',
      'Hipopotassemia, cefaleia, tontura, sonolência, parestesias',
      'Náusea, vômito, boca seca, dispepsia',
      'Fraqueza, mialgia, edema periférico',
    ],
    contraindications: [],
  },

  {
    id: 'nifedipino',
    name: 'Nifedipino',
    category: 'antagonistas-calcio',
    observations: 'Di-hidropiridina anti-hipertensiva. Uso sublingual NÃO é mais considerado seguro (risco de queda abrupta da PA). Na encefalopatia hipertensiva: reduzir PA inicialmente em apenas 25 a 30%. Fabricante contraindica uso em crianças; existem opções mais seguras.',
    brands: [
      'Adalat / Adalat Oros / Loncord / Neofedipina / Nifedipino — cápsula 10/20 mg; comp. LP 20/30/60 mg',
    ],
    presentations: [
      { label: 'Cápsula 10 mg' },
      { label: 'Cápsula 20 mg' },
      { label: 'Comprimido LP 20 / 30 / 60 mg' },
    ],
    doses: [
      {
        group: 'Crianças — Urgência hipertensiva',
        items: [{ label: 'Oral', value: '0,04 a 0,25 mg/kg/dose; repetir após 4 a 6 h. Perfurar cápsula de liberação imediata e deixar na boca, monitorando PA. Máximo: 10 mg/dose ou 3 mg/kg/dia' }],
      },
      {
        group: 'Crianças — Hipertensão crônica',
        items: [{ label: 'Oral LP', value: 'Iniciar 0,25 a 0,5 mg/kg/dia ÷ 1 a 2. Dose máxima: 3 mg/kg/dia ou 120 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral LP', value: 'Iniciar 30 mg/dia ÷ 1 a 3. Dose habitual: 20 a 60 mg/dia ÷ 1 a 2. Dose máxima: 120 mg/dia' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [
          { label: 'Oral', value: 'Início 30 mg/dia ÷ 1 a 3. Dose habitual: 10 a 30 mg × 3 a 4' },
          { label: 'Oral LP', value: '30 a 90 mg/dia ÷ 1 a 2. Dose máxima: 120 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Profilaxia enxaqueca',
        items: [{ label: 'Oral', value: '30 a 90 mg/dia ÷ 2 a 3' }],
      },
      {
        group: 'Adultos — Megaesôfago chagásico',
        items: [{ label: 'Sublingual', value: '10 mg ≈ 40 min antes das refeições' }],
      },
    ],
    preparation: 'Cápsulas e comprimidos não podem ser mastigados ou partidos. Apresentações Oros: dose única diária. Apresentações retard: 2 doses. Insuficiência renal: não exige ajuste. Não usar nas urgências/emergências hipertensivas.',
    sideEffects: [
      'Náusea, vômito, constipação',
      'Palpitações, hipotensão grave, bradicardia ou taquicardia reflexa, hipotensão ortostática e síncope (idosos)',
      'Tontura, fraqueza, cefaleia, sensação de calor',
      'Edema maleolar (frequente em idosos), rubor',
      'Prurido, urticária, erupção cutânea, eritema facial, dermatite (pode evoluir para epidermólise ou Stevens-Johnson)',
      'Em diálise/hipertensão maligna/hipovolemia: queda exagerada da PA',
      'Doses altas: hipotensão exagerada, tremores, mialgia, arritmias',
      'Interações: digoxina, clopidogrel, claritromicina, cimetidina, cetoconazol, itraconazol, sinvastatina, amiodarona, telaprevir, sulfato de magnésio. Com β-bloqueador: risco de BAV e bradicardia',
    ],
    contraindications: [
      'Doença do nodo sinusal ou BAV sem marca-passo',
      'IAM agudo recente',
      'Hipotensão arterial grave',
      'Choque',
      'Bradicardia grave',
      'Estenose aórtica grave (di-hidropiridinas)',
    ],
  },

  {
    id: 'nitrendipino',
    name: 'Nitrendipino',
    category: 'antagonistas-calcio',
    observations: 'Antagonista do cálcio, anti-hipertensivo e antiarrítmico. Di-hidropiridina. Em idosos: manter a menor dose possível.',
    brands: ['Caltren — comprimidos 10 e 20 mg', 'Nitrendipino (genérico) — comprimidos 10 e 20 mg'],
    presentations: [{ label: 'Comprimido 10 mg' }, { label: 'Comprimido 20 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Início: 10 mg/dia. Dose habitual: 20 mg ÷ 1 a 2. Dose máxima: 40 mg/dia. Efeito: início 4 horas' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [{ label: 'Oral', value: '20 mg × 1 a 2' }],
      },
    ],
    sideEffects: [
      'Cefaleia, tontura, rubor, sensação de calor, fadiga',
      'Edema do tornozelo, palpitações, hipotensão postural, dor torácica',
      'Alergia, erupção cutânea, náusea',
      'Interações: digoxina, cimetidina. Com β-bloqueador: risco de BAV e bradicardia',
    ],
    contraindications: ['Estenose aórtica grave', 'Gestação', 'Lactação'],
  },

  {
    id: 'verapamil',
    name: 'Verapamil',
    suffix: 'Cloridrato de verapamil',
    category: 'antagonistas-calcio',
    observations: 'Antagonista do cálcio da classe fenilalquilaminas. Antiarrítmico classe IV: deprime nodo SA e AV. Mais efeito depressor miocárdico e inibidor do BAV que o diltiazem. Efeito oral: início 30–60 min, pico 1–2 h. Efeito EV: início 1–5 min, pico 3–5 min, duração 2 h. NÃO usar EV em lactentes jovens; evitar em < 5 anos. Uso em < 1 ano pode provocar colapso vascular grave e fatal.',
    brands: [
      'Dilacoron / Cordilat — comp. revestido 80 mg; comp. retard 120/240 mg; ampola 2 mL: 2,5 mg/mL',
      'Cloridrato de verapamil (genérico) — comp. revestido 80 mg; comp. retard 120/240 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 80 mg' },
      { label: 'Comprimido retard 120 mg' },
      { label: 'Comprimido retard 240 mg' },
      { label: 'Ampola 2 mL — 2,5 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças > 1 ano — Arritmias (agudo)',
        items: [{ label: 'EV', value: '0,1 a 0,3 mg/kg/dose (máx 5 mg na 1ª dose) em 2 min. Repetir após 20 a 30 min se necessário (máx 10 mg na 2ª dose)' }],
      },
      {
        group: 'Crianças — Arritmias (manutenção)',
        items: [{ label: 'Oral', value: '2 a 7 mg/kg/dia ÷ 3. Dose máxima: 480 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Oral', value: 'Iniciar 80 mg × 3. Dose usual: 240 a 360 mg/dia ÷ 3 a 4. Dose máxima: 480 mg/dia' },
          { label: 'Oral retard', value: '240 a 360 mg/dia ÷ 1 a 2. Dose máxima: 480 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Conversão de TSV paroxística',
        items: [{ label: 'EV', value: 'Início: 2,5 a 5 mg (0,04 mg/kg) em 2 a 5 min. Se ineficaz: repetir 5 a 10 mg após 15 a 30 min. Dose máxima total: 20 mg' }],
      },
      {
        group: 'Adultos — Conversão de FA',
        items: [{ label: 'EV', value: '5 a 10 mg (0,075 a 0,15 mg/kg) em 2 a 5 min. Repetir após 15 a 30 min. Dose máxima acumulada: 20 mg' }],
      },
      {
        group: 'Adultos — Arritmias (manutenção)',
        items: [
          { label: 'EV infusão contínua', value: '5 µg/kg/min ou 5 a 10 mg/hora' },
          { label: 'Oral', value: '240 a 360 mg/dia ÷ 3 a 4. Retard: 120 a 360 mg/dia ÷ 1 a 2. Dose máxima: 480 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Angina / coronariopatia crônica',
        items: [{ label: 'Oral', value: '80 a 160 mg × 3. Retard: iniciar 120 mg à noite; titular. Dose máxima: 480 mg/dia' }],
      },
      {
        group: 'Adultos — Profilaxia enxaqueca',
        items: [{ label: 'Oral', value: '80 a 120 mg ÷ 1' }],
      },
      {
        group: 'Adultos — Profilaxia cluster',
        items: [{ label: 'Oral', value: '240 a 480 mg/dia ÷ 2 a 4' }],
      },
    ],
    preparation: 'EV: usar apenas em CTI com monitorização ECG e cálcio EV disponível. Insuficiência hepática grave: menor dose possível. Se colapso em < 1 ano: tratar com bolus de cálcio, reposição de volume e adrenalina contínua. Se bradicardia: atropina.',
    sideEffects: [
      'Bradicardia, falência cardíaca, pode piorar ICC, edema pulmonar, BAV, piora de angina, hipotensão grave, infarto',
      'Edema periférico',
      'Constipação, náusea, desconforto gástrico, íleo transitório, aumento de transaminases',
      'Confusão mental, convulsões, tontura, fraqueza, nervosismo, cefaleia, insônia, espasmo muscular, AVC',
      'Rubor, exantema, prurido, urticária, Stevens-Johnson, artralgia',
      'Faringite, sinusite, sintomas gripais',
      'Precipita insuficiência respiratória em miopatias (ex. Duchenne)',
      'Associação com digoxina: risco de bradicardia, BAV e hipoglicemia (aumenta nível sérico da digoxina)',
      'Com β-bloqueador: risco de BAV e bradicardia',
      'Bloqueadores do canal de cálcio podem causar toxicidade grave em crianças (principalmente diltiazem e verapamil)',
    ],
    contraindications: [
      'ICC muito grave',
      'FE < 30%',
      'Hipotensão grave',
      'Doença do nodo sinusal',
      'BAV sem marca-passo',
      'Choque cardiogênico',
      'WPW ou vias acessórias com flutter/FA',
      'Taquicardia ventricular',
      'NÃO usar EV em lactentes jovens nem como hipotensor pós-IAM',
    ],
  },
];