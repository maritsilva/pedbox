// Anticonvulsivantes — Guia Completo

export const anticonvulsivantes = [
  // ────────────────────────────────────────────────────────────────────
  // GERAÇÃO 1 / CLÁSSICOS
  // ────────────────────────────────────────────────────────────────────

  {
    id: 'valproato',
    name: 'Valproato (Ácido Valpróico)',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 1ª geração com múltiplos mecanismos de ação. Primeira linha nas epilepsias. Evitar em mulheres que possam engravidar. Fazer hemograma, transaminases, bilirrubinas, gamaGT, fosfatase alcalina e teste de gravidez antes de iniciar.',
    brands: [
      'Epilenil (Aché) — Cáps.: 250 mg; Comp. rev.: 500 mg',
      'Torval CT (Aché) — Comp. rev.: 500 mg; Gotas (40 mL): 200 mg/mL',
      'Vodsos — Comp.: 250 mg; Comp. rev.: 500 mg; Xarope (100 mL): 250 mg/5 mL',
      'Depakote (Aché) — Comp.: 250 e 500 mg; Comp. lib. prolong.: 125 mg',
      'Divalcon ER (Aché) — Comp. lib. prolong.: 250 e 500 mg',
      'Zyvalprex — Comp. rev.: 250 e 500 mg',
      'Genérico — Xarope (100 mL): 250 mg/5 mL; Divalproato de sódio em cáps.: 250 e 500 mg',
    ],
    presentations: [
      { label: 'Cápsula 250 mg' },
      { label: 'Comprimido revestido 500 mg' },
      { label: 'Comprimido 250 mg' },
      { label: 'Gotas 40 mL — 200 mg/mL' },
      { label: 'Xarope 100 mL — 250 mg/5 mL' },
      { label: 'Comprimido liberação prolongada 125 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Convulsões (mioclônicas, tônico-clônicas, parciais, Dravet, Lennox-Gastaut)', value: 'Iniciar com 10–15 mg/kg/dia ÷ 1–3. Aumentar semanalmente em 5–10 mg/kg/dia até resposta. Usual: 30–60 mg/kg/dia. Máx: 100 mg/kg/dia' },
          { label: 'Coreia reumática', value: 'Iniciar com 10 mg/kg/dia ÷ 2–3. Aumentar 10 mg semanalmente até máx de 40 mg/kg/dia' },
          { label: 'Via retal', value: 'Diluir xarope com água 1:1 como enema de retenção: 10–15 mg/kg/dose × 3' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia (tônico-clônicas, ausência, mioclônicas)', value: 'Iniciar com 250 mg/dia e aumentar em 250 mg a cada 4–7 dias. Usual: 750–2000 mg/dia ÷ 2–4. Máx: 1000 mg/dia' },
          { label: 'Estabilizador de humor (mania)', value: 'Iniciar com 750 mg ÷ 2–3 e ajustar pela resposta (nível: 80–120 µg/mL). Mania grave: dose ataque 20 mg/kg/dia × 3 dias. Máx: 60 mg/dia ou 3000 mg/dia' },
          { label: 'Profilaxia de enxaqueca', value: 'Iniciar com 250 mg/dose × 2 e ajustar até 500–1000 mg/dia' },
          { label: 'Dor neuropática (cluster, neuralgia, diabética)', value: '500–1000 mg/dia ÷ 2–3' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, ataxia (dose-relacionada), diplopia, visão borrada, tontura, sonolência, insônia, astenia, depressão',
      'Tremor, descoordenação, amnésia, parkinsonismo em idosos, ideação suicida',
      'Náusea, vômito, azia, diarreia, constipação, dor abdominal, ganho de peso',
      'Trombocitopenia, agranulocitose, alopecia, dermatopatia esfoliativa grave',
      'Hepatotoxicidade (potencialmente fatal, risco maior < 2 anos), insuficiência hepática fulminante',
      'Pancreatite aguda (rara), hiperamonemia com encefalopatia',
    ],
    contraindications: [
      'Disfunção hepática grave',
      'Erro inato do ciclo da ureia',
      'Evitar se houver risco de gravidez',
    ],
  },

  {
    id: 'fenobarbital',
    name: 'Fenobarbital',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante barbitúrico de 1ª geração. Profilaxia e tratamento de crises tônico-clônicas generalizadas e parciais. Boa escolha para recém-nascidos, lactentes e pacientes com dificuldade em tomar medicamentos 2×/dia. Não suspender abruptamente.',
    brands: [
      'Gardenal (Sanofi) — Comp.: 10 e 100 mg; Gotas (20 mL): 40 mg/mL; Amp. (1 mL): 100 mg/mL',
      'Carbital (Teuto) — Comp.: 10 e 100 mg',
      'Fenocris (Cristália)',
      'Genérico — Comp.: 100 mg; Gotas (20 mL): 40 mg/mL; Amp. (1 mL): 100 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 10 mg' },
      { label: 'Comprimido 100 mg' },
      { label: 'Gotas 20 mL — 40 mg/mL' },
      { label: 'Ampola 1 mL — 100 mg/mL (EV/IM)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Interromper convulsão e status epilepticus EV', value: '15–20 mg/kg (50–75 mg/min). Repetir 5–10 mg/kg a cada 15–20 min. Máx total: 40 mg/kg' },
          { label: 'Neonatos', value: '3–4 mg/kg/dia ÷ 1' },
          { label: '0–5 anos', value: 'Iniciar com 3–5 mg/kg/dia ÷ 1–3. Usual: 4–8 mg/dia' },
          { label: 'Síndrome abstinência neonatal IM', value: '3–10 mg/kg/dia' },
          { label: 'Síndrome abstinência neonatal ORAL', value: 'Iniciar 8 mg/kg/dia ÷ 1–2. Após 12–24h: manutenção 5 mg/kg/dia ajustado. Usual: 2–8 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Status epilepticus EV', value: '15–20 mg/kg (50–75 mg/min). Repetir 5–10 mg/kg após 10 min' },
          { label: 'Epilepsia ORAL', value: 'Iniciar com 50–100 mg/dia ÷ 1 e ajustar em 50 mg/semana. Máx: 300 mg/dia' },
          { label: 'Interromper convulsão aguda IM/EV', value: '200–320 mg/dose × 1–4' },
          { label: 'Pré-operatório (sedação) IM', value: '100–200 mg (1–1,5h antes)' },
          { label: 'Insônia', value: '100–320 mg ao deitar (até 2 semanas)' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, vertigem, ataxia, prejuízo de memória, hiperatividade/TDAH em crianças',
      'Irritabilidade, confusão, distúrbios de comportamento, alucinação, insônia, cefaleia, ideação suicida',
      'Erupção cutânea (Stevens Johnson, dermatite esfoliativa), náusea, vômito',
      'Oligúria, hipoprotombinemia, disfunção hepática, deficiência de vit. D e folatos (anemia megaloblástica)',
      'Osteoporose, hipocalcemia, osteomalacia, síndrome raquítica',
      'Pode piorar crises mioclônicas, atônicas e de ausência',
    ],
    contraindications: [
      'Insuficiência hepática grave',
      'Porfiria',
      'Insuficiência respiratória grave sem ventilação assistida',
      'Cardiopatia hipertrófica (altas doses)',
    ],
  },

  {
    id: 'fenitoina',
    name: 'Fenitoína',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 1ª geração, inibidor dos canais de sódio. Início rápido de ação. Vantagem: não causa depressão respiratória/sedação em doses terapêuticas. Profilaxia de crises tônico-clônicas generalizadas e parciais. Antiarrítmico Classe IB.',
    brands: [
      'Hidantal (Sanofi) — Comp.: 100 mg; Amp. (5 mL): 50 mg/mL',
      'Dantlin (EMS) — Comp.: 100 mg',
      'Fenitoína (Fontes) — Susp.: 100 mg/5 mL; Amp.: 50 mg/mL; Comp.: 100 mg',
      'Genérico — Susp.: 100 mg/5 mL; Amp.: 50 mg/mL; Comp.: 100 mg',
    ],
    presentations: [
      { label: 'Comprimido 100 mg' },
      { label: 'Suspensão 100 mL — 100 mg/5 mL' },
      { label: 'Ampola 5 mL — 50 mg/mL (EV/IM)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Status epilepticus refratário a diazepínicos EV', value: '15–20 mg/kg. Iniciar manutenção 12h depois' },
          { label: 'Dia 1 manutenção', value: '15 mg/kg/dia ÷ 1–4' },
          { label: 'Dia 2 manutenção', value: '10 mg/kg/dia ÷ 1–4' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Status epilepticus EV lento', value: 'Iniciar com 10–20 mg/kg (aprox. 1000–1500 mg), infundir 50 mg/min. Repetir 5–10 mg/kg após 10 min (máx total: 25–30 mg/kg)' },
          { label: 'Profilaxia em neurocirurgia IM (emergência)', value: '100–200 mg a cada 4h durante cirurgia' },
          { label: 'Manutenção (oral)', value: 'Iniciar 300 mg/dia ÷ 3. Ajustar a cada 2–4 semanas até máx 600 mg/dia' },
          { label: 'Neuralgia do trigêmeo', value: '200–500 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'EV: hipotensão, choque (injeção rápida), fibrilação ventricular, bradicardia, arritmia, parada cardíaca',
      'Fadiga, nistagmo, ataxia, diplopia, confusão mental, irritabilidade, insônia, cefaleia',
      'Depressão medular, anemia megaloblástica, hipertrofia gengival, hipertricose',
      'Linfadenopatia, polineuropatia, leucopenia, trombocitopenia, síndrome "lupus-símile"',
      'Hepatotoxicidade, hepatite tóxica, nefrotoxicidade grave, flebite (EV), tromboflebite',
      'Hipercalciúria, alterações de vit. D e K (raquitismo)',
    ],
    contraindications: [
      'Depressão medular',
      'Glaucoma',
      'Alergia a hidantoína',
      'BAV',
      'Porfiria hepática',
    ],
  },

  {
    id: 'carbamazepina',
    name: 'Carbamazepina',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante tricíclico de 1ª geração, inibidor dos canais de sódio. Usado em epilepsia parcial/generalizada e como estabilizador de humor. Risco de queda em idosos. Descontinuar gradualmente (6 meses).',
    brands: [
      'Tegretol (Novartis) — Comp.: 200 / 400 mg; Xarope (100 mL): 100 mg/5 mL',
      'Tegretol CR — Comp.: 200 e 400 mg',
      'Uni carbamax (UmãoQuímica) — Comp.: 200 mg',
      'Tegral (EMS) / Biocarbam (Ely) — Xarope (100 mL): 20 mg/mL; Comp.: 200 mg',
      'Genérico — Comp.: 200 e 400 mg; Xarope (100 mL): 20 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 200 mg' },
      { label: 'Comprimido 400 mg' },
      { label: 'Xarope 100 mL — 20 mg/mL' },
      { label: 'Xarope 100 mL — 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Até 6 anos', value: '10–20 mg/kg/dia ÷ 2–4. Máx: 35 mg/kg/dia' },
          { label: '7–14 anos', value: '200–1000 mg/dia ÷ 2–4. Máx: 1000 mg/dia' },
          { label: 'Coreia reumática', value: '7–20 mg/kg/dia ÷ 2–4' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia/estabilizador de humor inicial', value: '200–400 mg/dia ÷ 2–4. Aumentar em 100–200 mg a cada 3–7 dias' },
          { label: 'Epilepsia/estabilizador manutenção', value: '800–1200 mg/dia. Máx: 1600 mg/dia' },
          { label: 'Dor neuropática/neuralgia trigêmeo inicial', value: '200–400 mg/dose × 1–4' },
          { label: 'Dor neuropática/neuralgia trigêmeo máx', value: '1200 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, cefaleia, vertigem, ataxia, taquicardia, alteração no ECG',
      'Visão borrada, diplopia, aumento de pressão intraocular, confusão, agitação, convulsões',
      'Náuseas, diarreia, vômito, pancreatite, alterações GI',
      'Hepatotoxicidade, insuficiência renal, eosinofilia, depressão medular',
      'Anemia aplásica, síndrome de hipersensibilidade, Stevens Johnson, necrólise tóxica epidérmica',
      'Hiponatremia por SIADH, anemia, leucopenia, trombocitopenia, agranulocitose',
    ],
    contraindications: [
      'Depressão medular',
      'Glaucoma',
      'Alergia a antidepressivos tricíclicos',
      'BAV',
      'Porfiria hepática',
    ],
  },

  {
    id: 'primidona',
    name: 'Primidona',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 1ª geração. Segunda linha em epilepsias tônico-clônicas generalizadas e parciais. Metabolizada em fenobarbital e fenilmalomamida. Não suspender abruptamente.',
    brands: [
      'Primid (Apsen) — Comp.: 100 e 250 mg',
    ],
    presentations: [
      { label: 'Comprimido 100 mg' },
      { label: 'Comprimido 250 mg' },
    ],
    doses: [
      {
        group: 'Crianças até 8 anos',
        items: [
          { label: 'Epilepsia', value: 'Iniciar com 50 mg/dia ao deitar. Aumentar a cada 3–7 dias até dose eficaz. Usual: 10–25 mg/kg/dia (300–750 mg/dia) ÷ 2–3. Máx: 500 mg/dia' },
          { label: 'RN (melhor evitar)', value: 'Iniciar 12 mg/dia até 12–20 mg/kg/dia ÷ 2–3' },
        ],
      },
      {
        group: 'Adultos e crianças > 8 anos',
        items: [
          { label: 'Anticonvulsivante (casos refratários)', value: 'Iniciar com 100–125 mg/dia ao deitar. Ajustar semanalmente até manutenção 250–500 mg/dose ÷ 1–3. Máx: 2 g/dia' },
        ],
      },
    ],
    sideEffects: [
      'Semelhantes ao fenobarbital',
      'Sedação, ataxia, nistagmo, diplopia, vertigem, tontura, sonolência, agressividade, irritabilidade',
      'Psicose aguda, labilidade emocional, fadiga, ideação suicida',
      'Anemia megaloblástica (deficiência de folatos), pancitopenia, agranulocitose, linfoadenopatia',
      'Hepatite, doença hemorrágica no RN',
    ],
    contraindications: [
      'Porfiria',
      'Insuficiência hepática grave',
      'Alergia ao fenobarbital',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // GERAÇÃO 2 / MODERNAS
  // ────────────────────────────────────────────────────────────────────

  {
    id: 'lamotrigina',
    name: 'Lamotrigina',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 2ª geração, inibidor dos canais de sódio, amplo espectro. Primeira linha para epilepsias tônico-clônicas generalizadas primárias e parciais. Risco de reação grave (Stevens Johnson) — maior se associada a valproato. Retirada deve ser lenta: 25–50% a cada 2 semanas.',
    brands: [
      'Lamictal (GSK) — Comp. dispersível: 5 / 25 / 50 / 100 mg',
      'Lamitor (Libbs) — Comp. dispersível: 25 / 50 / 100 mg',
      'Neural (Cristália) — Comp.: 25 / 50 / 100 mg',
      'Genérico — Comp.: 25 / 50 / 100 mg',
    ],
    presentations: [
      { label: 'Comprimido dispersível 5 mg' },
      { label: 'Comprimido dispersível 25 mg' },
      { label: 'Comprimido dispersível 50 mg' },
      { label: 'Comprimido 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças acima de 2 anos',
        items: [
          { label: 'Anticonvulsivante progressivo', value: 'Iniciar 0,5–1,0 mg/kg/dia ÷ 1 por 2 sem, dobrar por 2 sem, aumentar a cada 2 sem em 5–15 mg/kg/dia ÷ 2. Máx: 300 mg/dia' },
          { label: 'Epilepsia (tônico-clônica, parcial)', value: 'Iniciar 25 mg ÷ 1 × 2 sem → 50 mg/dia ÷ 1 × 2 sem → aumentar 25–50 mg/dia a cada 2 sem em 2 doses' },
          { label: 'Usual monoterap', value: '200–400 mg/dia ÷ 2' },
          { label: 'Usual com valproato', value: '100–200 mg/dia ÷ 2' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Transtorno bipolar', value: 'Iniciar 25 mg/dia. Ajustar em 25 mg a cada 2 sem. Usual: 50–200 mg/dia ÷ 1–2' },
        ],
      },
    ],
    sideEffects: [
      'Erupção cutânea alérgica, dermatite grave, Stevens Johnson tardio (risco alto pela gravidade), síndrome epidérmica tóxica',
      'Angioedema, náusea, vômito, diarreia, dor abdominal, anorexia, constipação',
      'Tonzia, ataxia, astenia, dificuldade de coordenação, nervosismo, insônia, fadiga, irritabilidade',
      'Ansiedade, tremor, vertigem, diplopia, visão turva, cefaleia, dificuldade de ideação',
      'Alteração de metabolismo de folatos, neutropenia, dismenorreia, hemorragia retal',
      'Insuficiência hepática, síndrome de hipersensibilidade',
    ],
    contraindications: [
      'Hipersensibilidade conhecida',
    ],
  },

  {
    id: 'oxcarbazepina',
    name: 'Oxcarbazepina',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 2ª geração, inibidor dos canais de sódio. Derivado da carbamazepina com eficácia e tolerabilidade semelhantes. Tratamento de 3ª linha na depressão bipolar. Não suspender abruptamente.',
    brands: [
      'Trileptal (Novartis) — Comp. rev.: 300 e 600 mg',
      'Oxarb (UmãoQuímica)',
      'Prefies (EMS) — Xarope (100 mL): 300 mg/5 mL',
      'Genérico — Comp.: 300 e 600 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 300 mg' },
      { label: 'Comprimido revestido 600 mg' },
      { label: 'Xarope 100 mL — 300 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças acima de 2 anos',
        items: [
          { label: 'Epilepsia inicial', value: 'Iniciar 8–10 mg/kg/dia ÷ 2 (máx: 600 mg/dia)' },
          { label: 'Epilepsia usual', value: '20–40 mg/kg/dia ÷ 2' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia/estabilizador de humor inicial', value: 'Iniciar 300 mg/dose × 2. Ajustar a cada 3 dias conforme necessidade' },
          { label: 'Usual', value: '600–1200 mg/dia ÷ 2' },
          { label: 'Máximo', value: '2400 mg/dia ÷ 2' },
        ],
      },
    ],
    sideEffects: [
      'Fadiga, vertigem, sonolência, cansaço, distúrbio de memória, cefaleia, tontura, tremor, ataxia',
      'Depressão, ansiedade, distúrbio visual, instabilidade emocional e psíquica',
      'Incoordenação, agressividade, ideação suicida, status epilepticus',
      'Náuseas, hiponatremia (evitar com tiazídicos, eritromicina), angioedema, Stevens Johnson',
      'Leucopenia, trombocitopenia, agranulocitose',
    ],
    contraindications: [
      'Hipersensibilidade ao carbamazepina ou oxcarbazepina',
    ],
  },

  {
    id: 'levetiracetam',
    name: 'Levetiracetam',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 2ª geração com espectro amplo e boa segurança. Crises parciais/generalizadas. Epilepsia mioclônica juvenil. Nível sérico amplo: 3–63 µg/mL.',
    brands: [
      'Keppra (UCB) — Comp. rev.: 250 e 750 mg; Susp.: 500 mg/5 mL',
      'Genérico — Comp. rev.: 250 e 750 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 250 mg' },
      { label: 'Comprimido revestido 750 mg' },
      { label: 'Suspensão 500 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '1–6 meses', value: '7 mg/kg/dose × 2 (inicial) → 21 mg/kg/dose × 2 (usual)' },
          { label: '6 meses–4 anos', value: '10 mg/kg/dose × 2 (inicial) → 25 mg/kg/dose × 2 (usual)' },
          { label: '> 4 anos', value: '10 mg/kg/dose × 2 (inicial) → 30 mg/kg/dose × 2 (usual, máx: 250–750 mg/dose)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia inicial', value: '500 mg/dose × 2 (considerar meia dose primeiras 2 semanas)' },
          { label: 'Epilepsia usual', value: 'Ajustar conforme tolerância' },
          { label: 'Casos refratários máximo', value: '1500 mg/dose × 2' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, insônia, fadiga, ataxia, depressão, ansiedade, agressividade, irritabilidade',
      'Tontura, amnésia, ideação suicida, nistagmo, diplopia, visão borrada, labilidade emocional',
      'Anorexia, náusea, diarreia, constipação, dor abdominal, osteopenia (rara)',
      'Anemia, trombocitopenia, leucopenia, hipertensão, nasofaringite',
    ],
    contraindications: [
      'Hipersensibilidade',
    ],
  },

  {
    id: 'topiramato',
    name: 'Topiramato',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 2ª geração com múltiplos efeitos. Usado em algunas formas de compulsão alimentar. Início deve ser progressivo e cuidadoso. Tomar com bastante água.',
    brands: [
      'Topamax (Janssen) — Comp. rev.: 25 / 50 / 100 mg',
      'Topamax Sprinkle (Janssen) — Cáps.: 15 e 25 mg',
      'Patz SL (Sigma) — Comp. Sublingual: 5 mg',
      'Genérico — Comp. rev.: 25 / 50 / 100 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 25 mg' },
      { label: 'Comprimido revestido 50 mg' },
      { label: 'Comprimido revestido 100 mg' },
      { label: 'Cápsula Sprinkle 15 mg' },
      { label: 'Cápsula Sprinkle 25 mg' },
    ],
    doses: [
      {
        group: 'Crianças (2–16 anos)',
        items: [
          { label: 'Epilepsia/Lennox-Gastaut inicial', value: 'Iniciar 0,5–1 mg/kg/dia ao deitar (máx: 25 mg/dose)' },
          { label: 'Ajuste', value: 'A cada 1–2 semanas em 1–2 mg/kg/dia' },
          { label: 'Usual', value: '5–10 mg/kg/dia ÷ 2–4' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia inicial', value: 'Iniciar 25 mg/dose × 1–2. Aumentar gradualmente' },
          { label: 'Usual', value: '400 mg/dia ÷ 1–2' },
          { label: 'Máximo', value: '1600 mg/dia' },
          { label: 'Profilaxia enxaqueca/cluster', value: 'Iniciar 25 mg/dia. Aumentar a cada 7 dias. Usual: 100 mg/dia ÷ 2' },
          { label: 'Dependência cocaína/álcool', value: 'Iniciar 25 mg/dia até 300 mg/dia ÷ 2–3' },
        ],
      },
    ],
    sideEffects: [
      'Ataxia, nervosismo, confusão mental, ansiedade, vertigem, tontura, sonolência, fadiga',
      'Distúrbios de sono, parestesia/formigamentos, distúrbios emocionais/cognitivos/memória',
      'Glaucoma, mialgia, anorexia, perda de peso, alteração de paladar, boca seca, refluxo',
      'Nefrolitíase (dose alta), hipersensibilidade, visão borrada, diplopia',
      'Acidose metabólica, anemia, hepatite, hipercapnia, acidose respiratória',
    ],
    contraindications: [
      'Síndrome QT curto (rufinamida)',
      'Insuficiência hepática grave',
    ],
  },

  {
    id: 'gabapentina',
    name: 'Gabapentina',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 2ª geração, inibidor dos canais de cálcio. Tratamento de crises parciais. Tratamento de dor neuropática. Risco de queda em idosos. Suspender lentamente (uma semana ou mais).',
    brands: [
      'Neurontin (Pfizer) — Cáps.: 300 e 400 mg; Comp. rev.: 600 mg',
      'Gabrion (Biolab) / Progresse (Pharma)',
      'Genérico — Comp. rev.: 600 mg',
    ],
    presentations: [
      { label: 'Cápsula 300 mg' },
      { label: 'Cápsula 400 mg' },
      { label: 'Comprimido revestido 600 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 3 anos',
        items: [
          { label: 'Epilepsia inicial', value: 'Iniciar 10–15 mg/kg/dia ao deitar. Ajustar até máx: 35 mg/kg/dia ÷ 3' },
          { label: 'Usual', value: '8–35 mg/kg/dia ÷ 3. Máx: 3600 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia inicial', value: 'Iniciar 300 mg. Aumentar em 300 mg a cada 1–3 dias' },
          { label: 'Epilepsia usual', value: '900–1800 mg/dia ÷ 3. Máx: 3600 mg/dia' },
          { label: 'Dor neuropática', value: 'Iniciar 300 mg/dose × 1. Aumentar até 1800–3600 mg/dia ÷ 3' },
          { label: 'Profilaxia enxaqueca/cluster', value: '300–900 mg/dia ÷ 3 (até 2400 mg)' },
          { label: 'Ansiedade social', value: '900–3600 mg/dia ÷ 3' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, tontura, vertigem, fadiga, ataxia, tremor, hiperatividade, agressividade',
      'Labilidade emocional, dificuldade de ideação, depressão, ansiedade, amnésia, ideação suicida',
      'Nistagmo, diplopia, visão borrada, cefaleia, trombocitopenia',
      'Anorexia, náusea, diarreia, constipação, dor abdominal, ganho de peso, boca seca',
      'Insuficiência hepática, mialgia, fratura, tosse, faringite, leucopenia, edema periférico',
    ],
    contraindications: [
      'Hipersensibilidade',
    ],
  },

  {
    id: 'pregabalina',
    name: 'Pregabalina',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante de 3ª geração, inibidor dos canais de cálcio. Derivado da gabapentina. Ação ansiolítica e antinociceptiva para dor neuropática. Não interromper bruscamente.',
    brands: [
      'Lyrica (Pfizer) — Cáps.: 25 / 75 / 150 mg',
      'Dorene (Aché) / Prefies (EMS)',
      'Genérico — Cáps.: 75 e 150 mg',
    ],
    presentations: [
      { label: 'Cápsula 25 mg' },
      { label: 'Cápsula 75 mg' },
      { label: 'Cápsula 150 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dor neuropática (diabética, pós-herpética, central)', value: 'Iniciar 150 mg ÷ 2–3. Ajustar até máx: 600 mg/dia (evitar > 300 mg/dia em neuropatia diabética)' },
          { label: 'Ansiedade generalizada/social', value: 'Iniciar 300 mg ÷ 3. Ajustar. Máx: 600 mg/dia' },
          { label: 'Fibromialgia', value: 'Iniciar 75 mg/dose × 2. Ajustar até máx: 450 mg/dia' },
          { label: 'Síndrome pernas inquietas', value: 'Iniciar 75 mg, 1–3h antes de deitar. Usual: 150–300 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Tontura, sonolência, insônia, ataxia, cefaleia, tremores, fraqueza, alteração de atenção/cognição/fala',
      'Confusão, euforia, parestesias, fadiga, visão borrada, diplopia, depressão, ideação suicida',
      'Constipação, angioedema grave (suspender), edema periférico, dor torácica',
      'Neuropatia, hiperglicemia e diabetes, ganho de peso, aumento do apetite, boca seca',
      'Insuficiência hepática, rinite, sinusite, bronquite, hipoglicemia',
    ],
    contraindications: [
      'Hipersensibilidade',
    ],
  },

  {
    id: 'lacosamida',
    name: 'Lacosamida',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante inibidor dos canais de sódio. Útil em convulsões parciais refratárias. Contraindicação: BAV de 2º/3º graus.',
    brands: [
      'Vimpat (UCB) — Comp. rev.: 50 / 100 / 150 / 200 mg; Xarope (200 mL): 10 mg/mL; Amp. (20 mL): 10 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido revestido 50 mg' },
      { label: 'Comprimido revestido 100 mg' },
      { label: 'Comprimido revestido 150 mg' },
      { label: 'Comprimido revestido 200 mg' },
      { label: 'Xarope 200 mL — 10 mg/mL' },
      { label: 'Ampola 20 mL — 10 mg/mL (EV)' },
    ],
    doses: [
      {
        group: 'Crianças > 4 anos',
        items: [
          { label: 'Nota do fabricante', value: 'Não recomendado em < 17 anos' },
          { label: 'Iniciar', value: '1 mg/kg/dose × 2' },
          { label: 'Ajuste', value: 'Semanalmente. Usual: 2–6 mg/kg/dose × 2' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Crises parciais inicial', value: 'Iniciar 50 mg/dose × 2. Aumentar em 50–100 mg/semana' },
          { label: 'Crises parciais usual', value: '150–200 mg/dose × 2' },
          { label: 'Status epilepticus refratário EV', value: '200–400 mg (3–4 mg/kg em bolus 5 min)' },
          { label: 'Status manutenção EV', value: '200–600 mg/dose × 2' },
        ],
      },
    ],
    sideEffects: [
      'Tontura, cefaleia, depressão, insônia ou sonolência, distúrbio cognitivo/memória, tremor',
      'Ataxia, fadiga, ideação suicida, nistagmo, diplopia, visão borrada, náuseas, vômito',
      'Anemia, diarreia, astenia, arritmia, BAV, síncope, aumento de enzimas hepáticas',
    ],
    contraindications: [
      'BAV de 2º ou 3º graus',
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // OUTROS / ESPECIAIS
  // ────────────────────────────────────────────────────────────────────

  {
    id: 'vigabatrina',
    name: 'Vigabatrina',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante gabaérgico. Síndrome West (espasmos). Risco ocular: informar pais sobre risco de diminuição permanente do campo visual (40%).',
    brands: [
      'Sabril (Sanofi) — Comp.: 500 mg',
    ],
    presentations: [
      { label: 'Comprimido 500 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Espasmos infantis (1 mês–2 anos)', value: 'Iniciar com 50 mg/kg/dia ÷ 2. Aumentar conforme resposta. Usual: 50–150 mg/kg/dia ÷ 2' },
          { label: 'Epilepsia > 10 anos (parcial complexa refratária)', value: 'Iniciar 1 g/dia ÷ 2. Aumentar em 500 mg/semana. Usual: 2–3 g/dia ÷ 1–2' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Epilepsia parcial complexa refratária máximo', value: '4 g/dia' },
        ],
      },
    ],
    sideEffects: [
      'Neurite ótica, diminuição permanente do campo visual (40%), diplopia, sonolência, sedação (diminui com o tempo)',
      'Fadiga, tontura, ataxia, cefaleia, vertigem, agressividade, excitação, agitação, depressão',
      'Diplopia, piora das crises, tremor, erupção cutânea, vômito, diarreia, constipação, ganho de peso',
      'Faringite, bronquite, congestão nasal',
    ],
    contraindications: [
      'Hipersensibilidade',
    ],
  },

  {
    id: 'rufinamida',
    name: 'Rufinamida',
    category: 'anticonvulsivantes',
    observations: 'Anticonvulsivante inibidor dos canais de sódio. Contraindicação importante: síndrome QT curto. Encurtamento de intervalo QT (dose-dependente).',
    brands: [
      'Inovelon (Eisai) — Comp. rev.: 200 e 400 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 200 mg' },
      { label: 'Comprimido revestido 400 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Lennox-Gastaut inicial', value: 'Iniciar 400–800 mg/dia ÷ 2' },
          { label: 'Ajuste', value: 'A cada 2 dias até máx: 3200 mg/dia ÷ 2' },
          { label: 'Em associação', value: 'Iniciar com doses menores' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, tontura, sonolência, ataxia, status epilepticus (raro), comportamento agressivo, hiperatividade',
      'Diplopia, visão borrada, distúrbio visual, erupção cutânea, prurido, náuseas, vômito',
      'Perda de apetite, constipação, dispepsia, encurtamento intervalo QT (dose-dependente)',
    ],
    contraindications: [
      'Insuficiência hepática grave',
      'Síndrome QT curto',
    ],
  },

  {
    id: 'clobazam',
    name: 'Clobazam',
    category: 'anticonvulsivantes',
    observations: 'Benzodiazepínico, coadjuvante em crises mioclônicas e parciais de difícil controle. Risco de queda em idosos. Pode ocorrer tolerância e perda de eficácia. Retirada abrupta pode ocasionar convulsões.',
    brands: [
      'Frisium (Sanofi) — Comp.: 10 e 20 mg',
    ],
    presentations: [
      { label: 'Comprimido 10 mg' },
      { label: 'Comprimido 20 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Convulsões inicial', value: 'Iniciar 5 mg/kg/dia ao deiter. Aumentar até 0,5–1,5 mg/kg/dia ÷ 2–3. Usual: 0,3–1 mg/kg/dia. Máx: 10 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Convulsões inicial', value: 'Iniciar 5–15 mg/dia (acima 30 mg/dia ÷ 2–3)' },
          { label: 'Máximo', value: '80 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Anorexia, náuseas, vômito, constipação, disartria, ataxia, diarreia, letargia',
      'Sedação, sonolência (acima 30 mg/dose), irritabilidade, agressividade, ideação suicida',
      'Ação paradoxal: agitação, irritabilidade, agressividade',
      'Stevens Johnson, necrólise epidérmica tóxica, febre, tosse, pneumonia, bronquite',
    ],
    contraindications: [
      'Hipersensibilidade',
    ],
  },
];