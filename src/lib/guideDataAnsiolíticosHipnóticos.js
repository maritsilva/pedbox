// Ansiolíticos, Hipnóticos e Sedativos

export const ansiolíticosHipnóticos = [
  {
    id: 'midazolam',
    name: 'Midazolam (B1)',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Benzodiazepínico de ação rápida para sedação, anestesia e emergências. Maior risco de depressão respiratória especialmente em doses altas, administração EV rápida e em lactentes pequenos. Pacientes devem permanecer em observação por pelo menos 3 horas com acompanhante responsável. Antídoto: Flumazenil (reverte sedação, apneia, obstrução — mas atenção ao risco de agitação paradoxal).',
    brands: [
      'Dormonid (Roche) — Compr. revestido: 15 mg; Ampolas: 3 mL e 5 mL — 5 mg/mL',
      'Dormire (Cristália) — Compr. revestido: 15 mg; Ampolas — 5 mg/mL',
      'Dormium (AbbVie/Quimidrol) — Compr.: 15 mg; Ampolas — 5 mg/mL',
      'Induson — Ampolas: 10 mL — 5 mg/mL',
      'Solução oral — 2 mg/mL',
      'Maleato de Midazolam (genérico) — Compr. 15 mg; Ampolas 3, 5 e 10 mL — 5 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido revestido 15 mg' },
      { label: 'Ampola 3 mL — 5 mg/mL (EV/IM)' },
      { label: 'Ampola 5 mL — 5 mg/mL (EV/IM)' },
      { label: 'Ampola 10 mL — 5 mg/mL (EV/IM)' },
      { label: 'Solução oral 2 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Sedação para procedimentos',
        items: [
          { label: 'Via oral', value: '0,25–0,5 mg/kg/dose (máx: 20 mg)' },
          { label: 'Via intranasal', value: '0,2–0,3 mg/kg/dose (máx: 10 mg)' },
          { label: 'Via EV/IM', value: '0,05–0,1 mg/kg/dose (máx: 2 mg inicial)' },
        ],
      },
      {
        group: 'Adultos — Sedação para procedimentos',
        items: [
          { label: 'Via oral', value: '15 mg (15–30 min antes)' },
          { label: 'Via intranasal', value: '0,2–0,3 mg/kg/dose (máx: 10 mg)' },
          { label: 'Via EV/IM', value: 'Inicial: 2–5 mg EV lento, repetir a cada 2–3 min até máx de 10 mg' },
        ],
      },
      {
        group: 'Convulsão durando > 5 minutos',
        items: [
          { label: 'Via EV', value: '0,1–0,3 mg/kg/dose (máx: 10 mg) lento; pode repetir' },
          { label: 'Via IM/intranasal/retal (buccal)', value: '0,2–0,3 mg/kg/dose (máx: 10 mg)' },
        ],
      },
      {
        group: 'Indução do sono — Insônia',
        items: [
          { label: 'Via oral', value: '15 mg ao deitar' },
        ],
      },
      {
        group: 'Sedação em UTI / adaptação à ventilação mecânica',
        items: [
          { label: 'Bolus inicial EV', value: '0,05–0,2 mg/kg' },
          { label: 'Infusão contínua', value: '0,05–0,2 mg/kg/h, titular conforme resposta' },
        ],
      },
      {
        group: 'Sedação em sequência rápida para intubação',
        items: [
          { label: 'Via EV', value: '0,1–0,3 mg/kg em bolus' },
        ],
      },
      {
        group: 'Status convulsivo',
        items: [
          { label: 'Via EV/IM', value: '0,1–0,3 mg/kg/dose (máx: 10 mg); repetir a cada 5–10 min se necessário' },
        ],
      },
      {
        group: 'Indução anestésica',
        items: [
          { label: 'Adultos EV', value: '0,1–0,2 mg/kg (1,5–2,5 mg) a cada 2–3 seg até resposta' },
          { label: 'Crianças EV/IM', value: '0,1–0,15 mg/kg' },
        ],
      },
      {
        group: 'Sedação pré-operatória',
        items: [
          { label: 'Via oral', value: '0,25–0,5 mg/kg (máx: 20 mg), 30 min antes' },
          { label: 'Via EV/IM', value: '0,05–0,1 mg/kg (máx: 4 mg)' },
        ],
      },
    ],
    sideEffects: [
      'Respiratórios: depressão respiratória, apneia (maior risco em doses altas, EV rápido e lactentes pequenos), parada cardíaca por apneia não assistida',
      'Neurológicos: cefaleia, tontura, sedação exagerada, tremores, agitação paradoxal, ataxia, disartria, nistagmo, diplopia, sonolência, amnésia anterógrada, redução da atenção, delírio, alucinação',
      'Cardiovasculares: bradicardia, flutuações de pressão arterial, taquicardia, contrações ventriculares prematuras',
      'Respiratórios locais (via nasal): ardência e queimação, sabor amargo na faringe',
      'Outros: náuseas, vômitos, salivação excessiva, erupção cutânea',
    ],
    contraindications: [
      'Glaucoma de ângulo fechado',
      'Choque',
      'Depressão prévia do SNC grave',
      'DPOC com disfunção respiratória grave',
      'Apneia de sono não tratada',
      'Insuficiência hepática grave',
    ],
  },

  {
    id: 'alprazolam',
    name: 'Alprazolam',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Benzodiazepínico potente, antipânico e sedativo. Início e duração de ação intermediários. Não suspender abruptamente após uso prolongado. Antídoto: Flumazenil.',
    brands: [
      'Frontal (Pfizer) — Compr.: 0,25 / 0,5 / 1 / 2 mg [30]; Compr. sublingual: 0,5 mg [30]; Compr. XR: 0,5 / 1 / 2 mg [30]',
      'Apraz (Cosmed) — Compr.: 0,25 / 0,5 / 1 / 2 mg [30]',
      'Tranquinal (Bagó) — Compr.: 0,25 / 0,5 / 1 / 2 mg [30]; Compr. sublingual: 0,5 mg [30]',
      'Genérico — Compr.: 0,25 / 0,5 / 1 / 2 mg',
    ],
    presentations: [
      { label: 'Comprimido 0,25 mg' },
      { label: 'Comprimido 0,5 mg' },
      { label: 'Comprimido 1 mg' },
      { label: 'Comprimido 2 mg' },
      { label: 'Comprimido sublingual 0,5 mg' },
      { label: 'Comprimido XR 0,5 / 1 / 2 mg' },
    ],
    doses: [
      {
        group: 'Crianças a partir de 7 anos',
        items: [
          { label: 'Ansiedade', value: 'Iniciar com 0,005 mg/kg/dose × 3 e aumentar em 0,125–0,25 mg por vez. Máx: 0,02 mg/kg/dose ou 0,06 mg/kg/dia ou 3 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Sedação, ansiólise', value: 'Iniciar com 0,25–0,5 mg/dose × 1–3. Usual: 0,5–2 mg/dia ÷ 1–3. Máx: 4 mg/dia' },
          { label: 'Ansiedade generalizada/pânico/fobia/ansiedade com depressão', value: 'Iniciar com 0,5 mg/dose × 3 e ajustar a cada 3–4 dias. Usual: 3–6 mg/dia ÷ 3–4. Máx: 10 mg/dia' },
          { label: 'Comprimido de liberação prolongada', value: 'Iniciar com 0,5–1 mg/dose 1×/dia e ajustar a cada 3–4 dias até máx de 6 mg/dia' },
          { label: 'Crise de pânico/agorafobia', value: '0,5–1,0 mg sublingual (mais rápido que oral)' },
        ],
      },
      {
        group: 'Idosos',
        items: [
          { label: 'Dose', value: 'Usar metade da dose habitual. Considerar alternativas mais seguras' },
        ],
      },
    ],
    sideEffects: [
      'Sedação, sonolência, tontura, vertigem, cefaleia, visão turva, confusão, síncope',
      'Rigidez, distonia, ataxia, rigidez muscular, fala pastosa, disartria, amnésia, incoordenação',
      'Agitação, raiva, fadiga, convulsão, disfunção intelectual, distúrbio cognitivo, desinibição, agressividade',
      'Náusea, vômito, ptialismo, diarreia, anorexia ou aumento de apetite, hepatite',
      'Abstinência, taquicardia, palpitação, edema, alergia, erupção cutânea, congestão nasal',
      'Aumenta risco de quedas e acidentes',
    ],
    contraindications: [
      'Miastenia',
      'Glaucoma de ângulo fechado',
      'Disfunção hepática grave',
      'DPOC com disfunção respiratória',
      'Apneia de sono',
      'Atividades de risco que exijam atenção',
    ],
  },

  {
    id: 'bromazepam',
    name: 'Bromazepam',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Benzodiazepínico com potencial maior de dependência e abstinência. Não suspender abruptamente. Antídoto: Flumazenil.',
    brands: [
      'Lexotan (Roche) — Compr.: 3 / 6 mg [20–30]',
      'Somalium (Aché) — Compr.: 3 / 6 mg [30]; Gotas (20 mL): 2,5 mg/mL',
      'Fluxtar SR (Zodiac) — Cáps. lib. prolongada: 3 / 6 mg [30]',
      'Genérico — Compr.: 3 / 6 mg; Gotas: 2,5 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 3 mg' },
      { label: 'Comprimido 6 mg' },
      { label: 'Gotas 20 mL — 2,5 mg/mL' },
      { label: 'Cápsula liberação prolongada 3 / 6 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose sugerida', value: '0,1–0,3 mg/kg/dia ÷ 1–3' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Sedação, ansiólise', value: 'Iniciar com 1,5–3,0 mg/dose × 1–3 por 1 semana e ajustar conforme resposta' },
          { label: 'Dose usual', value: '6–30 mg/dia. Em pacientes debilitados: máx 3 mg/dia. Internados: máx 12 mg/dose × 3' },
          { label: 'Pico de ação SR', value: '4–6 horas; comprimidos comuns: 1–2 horas' },
        ],
      },
      {
        group: 'Idosos',
        items: [
          { label: 'Dose', value: 'Iniciar máx 3 mg/dia e ajustar mais lentamente. Melhor evitar' },
        ],
      },
    ],
    sideEffects: [
      'Fadiga, sonolência, sedação excessiva, relaxamento e redução da força muscular',
      'Tontura, disartria, embotamento emocional, redução da atenção e cognição, confusão mental',
      'Cefaleia, ataxia, diplopia, amnésia anterógrada com comportamento inadequado/agressivo',
      'Agitação, inquietação paradoxal, delírio, pesadelos, alucinações, depressão',
      'Dependência física e psíquica, tolerância, risco de abuso, abstinência na retirada',
      'Hipomania e mania em deprimidos, parada cardíaca, hipotensão, palpitação',
      'Prurido, erupção cutânea',
    ],
    contraindications: [
      'Miastenia',
      'Glaucoma de ângulo fechado',
      'Gravidez',
      'Disfunção hepática grave',
      'DPOC com disfunção respiratória',
      'Apneia de sono',
    ],
  },

  {
    id: 'clonazepam',
    name: 'Clonazepam',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Benzodiazepínico de ação intermediária. Como anticonvulsivante, perde eficácia após algumas semanas (tolerância). Retirada deve ser lenta.',
    brands: [
      'Rivotril (Roche) — Compr.: 0,5 / 2 mg [20–30]; Compr. sublingual: 0,25 mg [30]; Gotas (20 mL): 2,5 mg/mL',
      'Clopam (Cristália) — Compr.: 0,5 / 2 mg; Gotas (20 mL): 2,5 mg/mL',
      'Genérico — Compr.: 0,5 / 2 mg; Gotas (20 mL): 2,5 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 0,5 mg' },
      { label: 'Comprimido 2 mg' },
      { label: 'Comprimido sublingual 0,25 mg' },
      { label: 'Gotas 20 mL — 2,5 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Neuropatia, convulsões', value: 'Iniciar com 0,01–0,05 mg/kg/dia ÷ 2–3 e aumentar a cada 3 dias (máx 0,5 mg/dia). Manutenção: 0,05–0,2 mg/kg/dia ÷ 2–3 (até 0,3 mg/kg/dia)' },
          { label: 'Prevenção de convulsão febril', value: '0,1 mg/kg/dia ÷ 2–3' },
        ],
      },
      {
        group: 'Adultos e crianças > 30 kg',
        items: [
          { label: 'Epilepsia', value: 'Iniciar com 0,25–0,5 mg/dose × 3 e aumentar 0,5–1 mg/dia a cada 3 dias. Manutenção: 2–10 mg/dia. Máx: 20 mg/dia' },
          { label: 'Ansiedade antecipatória, pânico', value: 'Dose habitual: 0,5–1 mg/dose ÷ 1–2. Resgate: 0,25–0,5 mg/dose sublingual' },
          { label: 'Mania aguda', value: '2–8 mg/dia ÷ 2–4' },
          { label: 'Insônia', value: '0,25–2 mg, 30 min antes de deitar' },
          { label: 'Neuralgia do trigêmeo', value: '2–6 mg/dia ÷ 1–2' },
        ],
      },
    ],
    sideEffects: [
      'Ataxia, distúrbios de comportamento/personalidade',
      'Sonolência, sedação, redução da atenção, vertigem, hipotonia muscular',
      'Tremores, movimentos coreiformes, fala arrastada, fadiga, distúrbios visuais',
      'Confusão mental, depressão respiratória (EV)',
      'Erupção cutânea, alopecia, anorexia, vômito, diarreia, boca seca, hipersalivação',
      'Hipotensão, palpitação, dependência, risco de suicídio',
    ],
    contraindications: [
      'Insuficiência hepática grave',
      'Glaucoma de ângulo fechado',
      'Miastenia',
      'Alcoolismo grave',
    ],
  },

  {
    id: 'diazepam',
    name: 'Diazepam',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Sedativo, ansiolítico, anticonvulsivante e miorrelaxante. Início rápido e duração longa. Não misturar com nenhuma droga na mesma seringa. EV: fazer lento (risco de depressão respiratória). Antídoto: Flumazenil.',
    brands: [
      'Valium (Roche) — Compr.: 5 / 10 mg [30]',
      'Diazepam NQ — Compr.: 5 / 10 mg [30]',
      'Compaz (Cristália); Uni Diazepax — Compr.: 5 / 10 mg; Amp. (2 mL): 5 mg/mL',
      'Santiazepam — Compr.: 5 / 10 mg; Amp. (1 mL): 10 mg/mL',
      'Genérico — Compr.: 5 / 10 mg; Amp. (2 mL): 5 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 5 mg' },
      { label: 'Comprimido 10 mg' },
      { label: 'Ampola 2 mL — 5 mg/mL (EV/IM)' },
      { label: 'Ampola 1 mL — 10 mg/mL (EV/IM)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Ansiolítico ORAL ou RETAL', value: '0,05–0,2 mg/kg/dose × 3–4' },
          { label: 'Sedação consciente ORAL', value: '6 meses–2 anos: 0,2–0,3 mg/kg/dose. > 2 anos: 0,2–0,5 mg/kg/dose. Máx: 10 mg' },
          { label: 'Sedação consciente EV', value: '0,05–0,1 mg/kg/dose a cada 3–5 min' },
          { label: 'Anticonvulsivante (emergência) EV', value: '0,1–0,3 mg/kg/dose lento (sem diluir)' },
          { label: 'Anticonvulsivante (emergência) RETAL', value: '0,3–0,5 mg/kg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Ansiedade generalizada ORAL', value: 'Inicial: 5 mg/dose × 1–2. Usual: 10–40 mg/dia ÷ 2–4. EV/IM: 2–10 mg/dose × 3–4' },
          { label: 'Ansiolítico (estresse agudo) ORAL', value: '5 mg/dia ÷ 1–2. EV ou IM: 5–10 mg/dose até 4/4 horas' },
          { label: 'Pré-operatório IM', value: '10 mg em dose única' },
          { label: 'Interromper convulsão RETAL', value: '0,2–0,5 mg/kg/dose' },
          { label: 'Interromper convulsão EV', value: '0,15–0,2 mg/kg/dose (pode repetir)' },
          { label: 'Espasmos musculares EV/IM', value: '5–10 mg' },
          { label: 'Espasmos musculares ORAL', value: '5–10 mg/dose × 3–4' },
        ],
      },
    ],
    sideEffects: [
      'Fadiga, tontura, sedação excessiva, sonolência (pior nos primeiros 3–4 dias)',
      'Relaxamento e redução da força muscular, redução da atenção e cognição',
      'Confusão mental (sobretudo idosos), cefaleia, ataxia, amnésia',
      'Efeito paradoxal com agitação, diplopia, visão borrada',
      'Flebite (EV), hipotensão',
    ],
    contraindications: [
      'Miastenia',
      'Glaucoma de ângulo fechado',
      'Hipersensibilidade a benzodiazepínicos',
      'Disfunção hepática grave',
    ],
  },

  {
    id: 'flunitrazepam',
    name: 'Flunitrazepam',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Sedativo de ação longa. Retirar gradualmente. Atentar para risco de queda e prejuízo da cognição em idosos.',
    brands: [
      'Rohypnol (Adium) — Compr. revestido: 1 mg [20–30]',
      'Rohydorm (Sigma) — Compr. revestido: 1 / 2 mg [20]',
    ],
    presentations: [
      { label: 'Comprimido revestido 1 mg' },
      { label: 'Comprimido revestido 2 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Sedação pré-anestésica', value: '0,015–0,030 mg/kg' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Distúrbios de ansiedade e insônia', value: 'Iniciar com 0,5 mg/dose ao deitar e ajustar para 1 mg, se necessário. Excepcionalmente 2 mg (melhor evitar)' },
          { label: 'Sedação pré-anestésica', value: '1–2 mg/dose (15–30 µg/kg)' },
        ],
      },
      {
        group: 'Idosos',
        items: [
          { label: 'Dose máxima', value: '0,5 mg/dose' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, déficit de atenção no dia seguinte, confusão mental, cansaço, cefaleia',
      'Tontura, incoordenação, hipocinesia, diplopia, amnésia, agitação paradoxal',
      'Relaxamento e fraqueza muscular, náusea, vômito, hipotensão',
      'Erupção cutânea, dependência, risco de quedas e fraturas (principalmente idosos)',
    ],
    contraindications: [
      'Insuficiência hepática grave',
      'Miastenia grave',
    ],
  },

  {
    id: 'lorazepam',
    name: 'Lorazepam',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Ansiolítico, sedativo e antiemético. Início e duração de ação intermediárias. Evitar em idosos quando possível.',
    brands: [
      'Lorax (Wyeth) — Compr.: 1 / 2 mg [30]',
      'Ansirax (Teuto) — Compr.: 1 / 2 mg',
      'Genérico — Compr.: 1 / 2 mg',
      '(Ampolas não disponíveis no Brasil)',
    ],
    presentations: [
      { label: 'Comprimido 1 mg' },
      { label: 'Comprimido 2 mg' },
    ],
    doses: [
      {
        group: 'Crianças (uso EV com ampolas importadas)',
        items: [
          { label: 'Sedação, ansiólise, náusea', value: '0,025–0,05 mg/kg/dose × 4' },
          { label: 'Anticonvulsivante', value: '0,05–0,1 mg/kg/dose EV lento' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Sedação, ansiólise', value: '2–3 mg/dia ÷ 2–3 (usar dose menor em idosos)' },
          { label: 'Insônia', value: '0,5–2 mg ao deitar' },
          { label: 'Transtorno de ansiedade situacional ou generalizada', value: 'Iniciar com 0,5 mg/dose × 2–3 e ajustar' },
          { label: 'Auxiliar no controle de vômitos', value: '0,5–2 mg/dose × 4–6' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, cefaleia, tontura, sedação, fraqueza, baixo nível de atenção',
      'Amnésia transitória, instabilidade emocional, desorientação, depressão, alterações do humor',
      'Náusea, vômito, constipação, boca seca, erupção cutânea, alopecia',
    ],
    contraindications: [
      'Glaucoma de ângulo fechado',
      'Hipotensão grave',
    ],
  },

  {
    id: 'zolpidem',
    name: 'Zolpidem (Hemitartarato)',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Sedativo não benzodiazepínico e hipnótico. Não associar com bebidas alcoólicas e depressores do SNC. Suspender retirada gradual. Tomado com alimentos demora mais a agir.',
    brands: [
      'Stilnox (Sanofi), Noctiden (Biolab), Zylinox (Zydus), Turno (Eurofarma) — Compr. rev.: 10 mg [20]',
      'Stilnox CR — Compr. lib. prolongada: 6,25 / 12,5 mg',
      'Patz SL (Sigma) — Compr. Sublingual: 5 mg',
      'Zolfest D — Compr. eferv.: 10 mg',
      'Genérico — Compr. rev.: 10 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 10 mg' },
      { label: 'Comprimido liberação prolongada 6,25 / 12,5 mg' },
      { label: 'Comprimido sublingual 5 mg' },
      { label: 'Comprimido efervescente 10 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Insônia', value: '5–10 mg imediatamente antes de deitar' },
        ],
      },
      {
        group: 'Idosos',
        items: [
          { label: 'Dose', value: '5 mg ao deitar. Garantir que o paciente vai dormir nas próximas 7–8 horas' },
        ],
      },
    ],
    sideEffects: [
      'Mais comuns: Tontura, diarreia, amnésia anterógrada, cefaleia, hipotensão, fadiga, sonolência diurna persistente',
      'Menos comuns: Agitação, ansiedade, boca seca, constipação, pesadelos',
      'Sonambulismo, alucinações, comportamento complexo de sono (comer ou dirigir dormindo)',
    ],
    contraindications: [
      'Insuficiência hepática grave',
    ],
  },

  {
    id: 'buspirona',
    name: 'Buspirona',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Ansiolítico não diazepínico. Não produz dependência nem sonolência e não potencia depressão do álcool. Efeito demora 2–4 semanas.',
    brands: [
      'Ansitec (Libbs) — Compr.: 5 / 10 mg [20]',
    ],
    presentations: [
      { label: 'Comprimido 5 mg' },
      { label: 'Comprimido 10 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Ansiedade', value: 'Iniciar com 5 mg/dose × 3 e aumentar a cada 3 dias. Usual: 10 mg/dose × 2–3 (30–40 mg/dia). Máx: 60 mg/dia ÷ 3' },
        ],
      },
    ],
    sideEffects: [
      'Tontura, nervosismo, cefaleia, insônia, fraqueza, confusão, hostilidade, raiva, delírio, excitação',
      'Taquicardia, náusea, diarreia, constipação, sudorese',
    ],
    contraindications: [
      'Miastenia',
      'Glaucoma de ângulo fechado',
      'Gravidez',
      'Disfunção hepática/renal grave',
      'Uso de IMAO',
    ],
  },

  {
    id: 'melatonina',
    name: 'Melatonina',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Hormônio sintético. A resposta pode ocorrer após algumas semanas de uso. Geralmente bem tolerada.',
    brands: [
      'Formulações em cápsulas de 1,5–3 mg (Suplementos alimentares no Brasil)',
    ],
    presentations: [
      { label: 'Cápsula 1,5 mg' },
      { label: 'Cápsula 3 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Distúrbios leves do sono, jet lag, adaptação ao fuso horário', value: '1,5–3 mg em dose única, uma hora antes do horário estabelecido para dormir' },
        ],
      },
    ],
    sideEffects: [
      'Geralmente bem tolerada',
      'Sonolência, sedação, tontura, astenia, irritabilidade, inquietação',
      'Dor abdominal, constipação, boca seca',
    ],
    contraindications: [
      'Uso em caso de doenças autoimunes deve ser avaliado',
    ],
  },

  {
    id: 'valeriana',
    name: 'Valeriana',
    category: 'ansiolíticos-hipnóticos',
    observations: 'Fitoterápico à base de Valeriana officinalis. Pode potencializar o efeito de outros depressores do SNC.',
    brands: [
      'Valeriane, Valerimed, Sonoripan, Valyanne, Valesona, Ricalm — Várias apresentações em cápsulas/compr. (50 / 100 / 225 mg, etc)',
    ],
    presentations: [
      { label: 'Cápsula/Comprimido 50 mg' },
      { label: 'Cápsula/Comprimido 100 mg' },
      { label: 'Cápsula/Comprimido 225 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Indução do sono, distúrbios relacionados a ansiedade', value: '200–400 mg/dose, 30 min antes de deitar. Máx: 900 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Tontura, sonolência, cefaleia, ansiedade, midríase',
      'Hepatotoxicidade (principalmente em altas doses)',
    ],
    contraindications: [
      'Nenhuma informada',
    ],
  },
];