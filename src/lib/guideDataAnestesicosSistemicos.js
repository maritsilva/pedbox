export const anestesicosSistemicos = [
  {
    id: 'alfentanila',
    name: 'Alfentanila',
    category: 'anestesicos-sistemicos',
    observations: 'Analgésico e anestésico geral opioide, cerca de 10 vezes mais potente que fentanila. Início de ação em menos de 1 minuto, com duração de ação muito curta, aproximadamente 15 a 20 minutos. A dose deve ser titulada.',
    brands: [
      'Rapifen — ampola 5 mL: 0,544 mg/mL',
      'Alfast — ampola 5 mL: 0,544 mg/mL',
      'Alfentanila — ampola 5 mL: 0,544 mg/mL',
    ],
    presentations: [{ label: 'Ampola 5 mL — 0,544 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças — Procedimentos de curta duração',
        items: [
          { label: 'Bolus inicial EV', value: '7 a 15 µg/kg' },
          { label: 'Bolus complementares', value: '3 a 5 µg/kg' },
        ],
      },
      {
        group: 'Sedação e analgesia',
        items: [
          { label: 'Bolus EV', value: '10 a 25 µg/kg, seguido de infusão contínua de 0,25 a 1 µg/kg/min' },
        ],
      },
      {
        group: 'Anestesia',
        items: [
          { label: 'Indução', value: '20 a 150 µg/kg' },
          { label: 'Manutenção', value: '0,5 a 3 µg/kg/min. Interromper infusão 5 min antes do fim da anestesia' },
        ],
      },
      {
        group: 'Anestesia geral adjuvante',
        items: [
          { label: 'Indução', value: '10 a 50 µg/kg' },
          { label: 'Manutenção', value: '0,5 a 2 µg/kg/min, ou bolus intermitentes de 5 a 10 µg/kg' },
        ],
      },
    ],
    preparation: 'Diluir em SF, SGI ou Ringer. Bolus lento: 3 a 5 minutos. Risco de apneia aumenta com dose — monitorar frequência respiratória e ventilação. Não misturar com anfotericina. Crianças: não exige ajuste renal.',
    sideEffects: [
      'Depressão respiratória, rigidez muscular e torácica (risco maior com injeção rápida e em neonatos)',
      'Pode exigir curarização para conseguir ventilar',
      'Hipotensão leve e transitória, vasodilatação, bradicardia, arritmia',
      'Náusea, vômito, espasmo do trato biliar, retenção urinária',
      'Broncoespasmo, laringoespasmo, urticária, cefaleia, calafrios',
      'Associada a diazepam: aumenta risco de vasodilatação, hipotensão e depressão respiratória',
      'Antídoto: naloxona 2 mg EV. Risco de aumento da pressão intracraniana',
    ],
    contraindications: [],
  },

  {
    id: 'cetamina',
    name: 'Cetamina',
    category: 'anestesicos-sistemicos',
    observations: 'Anestésico dissociativo, hipnótico e sedativo. Não barbitúrico, com ação broncodilatadora e baixo risco de depressão respiratória. Mantém reflexos protetores de vias respiratórias e quase nunca provoca deterioração hemodinâmica. Efeito broncodilatador útil na sedação do paciente com asma grave. Opção para intubação. Não usar para procedimentos que exijam imobilidade com tomografia. Início EV: 1 min; IM: 4 min. Duração EV: 3–10 min; IM: 12–25 min. Recuperação: 1–2 h após EV; 3–4 h após IM.',
    brands: [
      'Ketamin S / Clortamina / Ketalar — fr. amp. 10 mL: 50 mg/mL; ampola 2 mL: 50 mg/mL',
      'Cloridrato de cetamina — fr. amp. 10 mL: 50 mg/mL',
    ],
    presentations: [
      { label: 'Fr. amp. 10 mL — 50 mg/mL' },
      { label: 'Ampola 2 mL — 50 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Sedação consciente',
        items: [
          { label: 'EV bolus', value: '0,5 a 2 mg/kg. Repetir metade a cada 10 a 15 min, ou infusão contínua 0,5 a 2 mg/kg/hora' },
          { label: 'IM', value: 'Dose inicial 2 a 5 mg/kg; seguida de 2 a 4 mg/kg após 15 a 20 min' },
        ],
      },
      {
        group: 'Crianças — Analgesia',
        items: [
          { label: 'IM', value: '2 mg/kg até 7 mg/kg' },
        ],
      },
      {
        group: 'Crianças — Intubação e adaptação à ventilação',
        items: [
          { label: 'EV ou IM', value: '1 a 2 mg/kg' },
        ],
      },
      {
        group: 'Crianças — Anestesia geral',
        items: [
          { label: 'Indução EV', value: '1 a 3 mg/kg. Manutenção: 0,01 a 0,03 mg/kg/min' },
          { label: 'Indução IM', value: '3 a 5 mg/kg' },
          { label: 'Anestesia epidural', value: 'Dose usual: 0,5 mg/kg. Dose máxima: 1 mg/kg' },
        ],
      },
      {
        group: 'Adultos — Analgesia',
        items: [
          { label: 'EV bolus', value: '1 a 4,5 mg/kg. Doses suplementares: ~1/3 da dose inicial' },
          { label: 'IM', value: '4 a 10 mg/kg' },
        ],
      },
      {
        group: 'Adultos — Sedação em asmáticos / broncoconstrição',
        items: [
          { label: 'EV', value: 'Bolus 0,5 a 1 mg/kg em 2 a 3 min; seguido de infusão contínua 10 a 20 µg/kg/min' },
          { label: 'IM', value: '2 a 4 mg/kg' },
        ],
      },
      {
        group: 'Adultos — Anestesia',
        items: [
          { label: 'Indução EV', value: '1,5 a 2,5 mg/kg. Manutenção: 25 a 75 µg/kg/min' },
          { label: 'Anestesia geral adjuvante EV', value: 'Indução: 0,5 a 2 mg/kg; manutenção: 1 a 2 mg/min ou 25 a 100 µg/kg/min' },
          { label: 'Anestesia geral adjuvante IM', value: '4 a 6 mg/kg' },
          { label: 'Emergência psiquiátrica', value: '0,5 mg/kg' },
        ],
      },
    ],
    preparation: 'Diluir 500 mg em 500 mL de SGI ou SF (1 mg/mL). Injeção EV lenta, máximo 0,5 mg/kg/min. Atropinização prévia reduz secreção. Não usar barbitúricos e benzodiazepínicos na mesma seringa ou linha. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Alucinações auditivas e visuais, pesadelos, disforia, nistagmo, diplopia, tremores',
      'Hipertensão, taquicardia, arritmias, sensibilização à catecolamina (libera adrenalina endógena)',
      'Aumento da pressão intracraniana, aumento de secreções, hipertialismo, laringoespasmo (raro)',
      'Edema pulmonar, apneia, depressão respiratória em dose alta',
      'Anorexia, náusea, vômitos, anafilaxia',
      'Durante recuperação: delírio, desorientação, ilusões, estado onírico, risco de adição',
      'Cisatracúrio aumenta duração do bloqueio neuromuscular; hormônios tireoidianos podem aumentar risco cardiovascular',
    ],
    contraindications: [
      'Hipertensão intracraniana, aneurisma cerebral, psicose',
      'Insuficiência cardíaca congestiva grave, angina, neurotoxicose, tireotoxicose',
      'Cirurgias de faringe, laringe e traqueia, eclâmpsia',
    ],
  },

  {
    id: 'dexmedetomidina',
    name: 'Dexmedetomidina',
    category: 'anestesicos-sistemicos',
    observations: 'Sedativo agonista alfa-2 adrenérgico muito seletivo, com capacidade de induzir efeito anestésico e com ação analgésica. Início de ação: 5 a 10 minutos. Duração do efeito: 1 a 2 horas. O paciente pode ser acordado sob estímulo, mesmo quando a sedação estiver adequada.',
    brands: [
      'Precedex / Simbilex — ampola 2 mL: 100 µg/mL',
    ],
    presentations: [{ label: 'Ampola 2 mL — 100 µg/mL' }],
    doses: [
      {
        group: 'Crianças — Sedação consciente',
        items: [
          { label: 'EV dose inicial', value: '0,5 a 1 µg/kg em 10 min, seguida de infusão contínua 0,2 a 0,7 µg/kg/hora' },
        ],
      },
      {
        group: 'Crianças — Sedação para procedimentos (não intubados)',
        items: [
          { label: 'Dose inicial', value: '1 µg/kg em 10 min; manutenção: 0,6 µg/kg/hora. Titular a cada 30 min. Faixa habitual: 0,2 a 1 µg/kg/hora' },
        ],
      },
      {
        group: 'Crianças — Ventilação mecânica / cirurgia neurológica com paciente acordado',
        items: [
          { label: 'Dose inicial', value: '0,5 a 1 µg/kg em 10 min; manutenção: 0,1 a 1 µg/kg/hora. Titular a cada 30 min (menor dose possível)' },
        ],
      },
      {
        group: 'Crianças — Pré-anestésico',
        items: [
          { label: 'EV', value: '0,33 a 0,67 µg/kg, 15 min antes da cirurgia' },
        ],
      },
    ],
    preparation: 'Diluir 2 mL (200 µg) em 48 mL de solução fisiológica → concentração final 4 µg/mL. Usar bomba de infusão. Monitorização clínica e eletrônica cuidadosa. Em idosos, titular mais devagar com doses de manutenção mais baixas. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Bradicardia, hipotensão, arritmia, alterações eletrocardiográficas, parada sinusal, fibrilação atrial, BAV',
      'Taquicardia ventricular, hipertensão, taquicardia durante bolus inicial',
      'Agitação, ansiedade, febre, alucinações, convulsão',
      'Náusea, vômitos, boca seca',
      'Oligúria, disfunção renal, anemia',
      'Hipoglicemia, hipopotassemia, hipocalcemia, hipomagnesemia',
      'Depressão respiratória, apneia, acidose, broncoespasmo, hipóxia, edema pulmonar',
      'Taquifilaxia: pode exigir aumento da dose após 24 horas de uso',
    ],
    contraindications: [],
  },

  {
    id: 'etomidato',
    name: 'Etomidato',
    category: 'anestesicos-sistemicos',
    observations: 'Hipnótico de ação curta. Não tem efeito analgésico. Início de ação: 30 a 60 segundos. Duração: 2 a 3 minutos. Considerada melhor alternativa na sequência rápida para intubação no trauma, por não aumentar pressão intracraniana ou potencializar hipotensão do hipovolêmico.',
    brands: ['Hypnomidate / Etomidato — ampola 10 mL: 2 mg/mL'],
    presentations: [{ label: 'Ampola 10 mL — 2 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças — Indução anestésica',
        items: [
          { label: 'EV', value: '0,2 a 0,6 mg/kg em 30 a 60 segundos' },
        ],
      },
      {
        group: 'Sedação para procedimentos',
        items: [
          { label: 'EV', value: '0,1 a 0,3 mg/kg. Repetir metade da dose a cada 3 a 5 min' },
        ],
      },
      {
        group: 'Sequência rápida para intubação',
        items: [
          { label: 'EV', value: '0,2 a 0,3 mg/kg em dose única' },
        ],
      },
    ],
    preparation: 'Age em 30 segundos; efeito dura 3 a 5 min (pode ser prolongado com doses repetidas). Evitar em choque séptico — risco de depressão suprarrenal. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Baixo potencial de depressão respiratória, apneia curta (~15 a 20 segundos)',
      'Mioclonia, movimentos involuntários',
      'Tosse e soluço',
      'Flebite e dor no local da injeção',
      'Reduz pressão intracraniana e intraocular',
      'Nistagmo, hipotensão (rara)',
      'Depressão suprarrenal transitória',
      'Náusea, vômito',
    ],
    contraindications: ['Choque séptico'],
  },

  {
    id: 'fentanila',
    name: 'Fentanila',
    suffix: 'Citrato de fentanila',
    category: 'anestesicos-sistemicos',
    observations: 'Analgésico opioide 100 vezes mais potente que morfina. Início EV: 1 a 2 min. Duração EV: 30 a 60 min. Indicado para procedimentos de analgesia e sedação, pré-operatório, adjuvante de anestesia local, dor crônica via transdérmica. Para uso prolongado, preferir morfina. O adesivo pode demorar até 24 horas para ter efeito inicial, com duração de 72 horas.',
    brands: [
      'Fentanil / Fentanest / Unifental — ampola 10 mL: 50 µg/mL; ampola 2 e 5 mL: 50 µg/mL',
      'Citrato de fentanila — ampola 2 e 5 mL: 50 µg/mL',
      'Fentanila + droperidol — ampola 2 mL: 50 µg/mL + 2,5 mg/mL',
      'Adesivo transdérmico: 12,5 / 25 / 50 / 75 / 100 µg/hora',
    ],
    presentations: [
      { label: 'Ampola 10 mL — 50 µg/mL' },
      { label: 'Ampola 2 e 5 mL — 50 µg/mL' },
      { label: 'Adesivo transdérmico 12,5–100 µg/h' },
    ],
    doses: [
      {
        group: 'Crianças — Analgesia / UTI (neonatos)',
        items: [
          { label: 'Neonatos', value: 'Bolus 1 a 2 µg/kg; infusão contínua 0,5 a 2 µg/kg/hora. Prematuros < 34 sem: 0,64 µg/kg/hora; > 34 sem: 0,75 µg/kg/hora adicional' },
          { label: '2 a 12 anos', value: 'Bolus 1 a 2 µg/kg; infusão contínua 1 a 3 µg/kg/hora' },
        ],
      },
      {
        group: 'Crianças — Dor intensa / procedimentos',
        items: [
          { label: 'Dor intensa EV', value: '0,5 a 1,5 µg/kg a cada 30 a 60 min' },
          { label: 'Intubação / procedimentos rápidos', value: 'Bolus 1 a 5 µg/kg/dose. Com midazolam: 2 a 3 µg/kg' },
          { label: 'Sedação consciente EV/IM', value: '0,5 a 2 µg/kg em 3 a 5 min. Dose máx: 50 µg' },
          { label: 'Anestesia geral adjuvante (> 2 anos)', value: '2 a 3 µg/kg/dose EV' },
          { label: 'Anestesia epidural', value: 'Usual: 1 a 1,5 µg/kg. Máx: 2,5 µg/kg' },
        ],
      },
      {
        group: 'Adultos — Analgesia / UTI',
        items: [
          { label: 'Bolus EV ou IM', value: '0,5 a 1 µg/kg/dose ou 0,35 a 1,5 µg/kg a cada 0,5 a 1 hora' },
          { label: 'Infusão contínua', value: '0,7 a 10 µg/kg/hora' },
          { label: 'Analgesia para procedimentos', value: '25 a 50 µg/dose, repetida em 5 a 10 min (máx 4 vezes)' },
          { label: 'Analgesia intratecal', value: '5 a 25 µg dose única' },
          { label: 'Dor aguda intensa / pós-op', value: '50 a 100 µg/dose IM/EV a cada 1–2 h; infusão EV: 0,5 a 1,5 µg/kg/hora' },
        ],
      },
      {
        group: 'Adultos — Uso transdérmico',
        items: [
          { label: 'Início', value: 'Menor adesivo disponível; ajustar pelo efeito. Efeito inicial do 1º adesivo: 12 a 24 h. Cada adesivo dura 3 dias. Remover o anterior antes de aplicar novo' },
        ],
      },
    ],
    preparation: 'Bolus lentos (~3 min). Doses acima de 5 µg/kg: infundir em 5 a 10 min. Pode ser misturada com midazolam, atropina, hidroxizina, droperidol. Não misturar com pentobarbital ou fenobarbital. O adesivo não pode ser recortado. Exposição ao calor (febre, banho quente) aumenta concentração plasmática.',
    sideEffects: [
      'Depressão respiratória, apneia, rigidez torácica e muscular, broncoconstrição, laringoespasmo',
      'Injeção muito rápida pode causar rigidez torácica/muscular, broncoconstrição ou laringoespasmo',
      'Confusão mental, agitação, tontura, alucinações, convulsão, aumento da pressão intracraniana',
      'Bradicardia, hipo ou hipertensão, sudorese, hipotermia, vasodilatação periférica',
      'Constipação, distensão abdominal, íleo paralítico, disfunção urinária, priapismo',
      'Coceira, prurido ou eritema no local do adesivo, eritrodermia',
      'Hiponatremia (SIADH), hipoatividade suprarrenal',
      'Tolerância, dependência física e síndrome de abstinência',
      'Contraindicado em: crise asmática, HIC, politraumatizados hipovolêmicos, IR/IH grave, obstrução GI, depressão respiratória grave',
    ],
    contraindications: [
      'Crise asmática, asma aguda ou grave',
      'Hipertensão intracraniana',
      'Politraumatizados com hipovolemia',
      'Insuficiência renal ou hepática muito grave',
      'Obstrução gastrointestinal',
      'Depressão respiratória grave',
    ],
  },

  {
    id: 'hidrato-cloral',
    name: 'Hidrato de Cloral',
    category: 'anestesicos-sistemicos',
    observations: 'Sedativo hipnótico para procedimentos diagnósticos e terapêuticos não dolorosos de curta duração. Não tem efeito analgésico; pode apresentar efeito paradoxal quando houver dor. Age em 30 a 60 minutos. Usar com extrema cautela em prematuros — efeito pode durar até 60 horas.',
    brands: ['Manipular em farmácia de manipulação: solução 20% (200 mg/mL) ou 10% (100 mg/mL)'],
    presentations: [
      { label: 'Solução oral 200 mg/mL (20%) — manipulada' },
      { label: 'Solução oral 100 mg/mL (10%) — manipulada' },
    ],
    doses: [
      {
        group: 'Crianças — Sedação para exames / procedimentos',
        items: [
          { label: 'Neonatos', value: '25 mg/kg/dose oral ou retal' },
          { label: 'Lactentes e crianças (dose usual)', value: '25 a 50 mg/kg/dose, 30 a 60 min antes. Pode repetir após 30 min. Dose máx: 100 mg/kg ou 1000 mg/dia (lactentes); 2000 mg/dia (crianças maiores)' },
          { label: 'Dose ajustada (protocolo 2)', value: 'Iniciar com 25 mg/kg; dose usual 50 a 75 mg/kg/dose. Dose máx: 120 mg/kg ou 1000 mg/dia (lactentes); 2000 mg/dia (crianças maiores)' },
        ],
      },
      {
        group: 'Crianças — Sedação para ventilação assistida',
        items: [
          { label: 'Por sonda gástrica', value: '10 a 40 mg/kg/dose a cada 4 a 6 h. Titular pela resposta' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Sedação para procedimento', value: '500 a 1000 mg, 30 min antes' },
          { label: 'Sedação/ansiedade', value: '250 mg/dose, 3×/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Depressão respiratória, apneia obstrutiva durante o sono, sedação prolongada',
      'Agitação paradoxal, euforia, delírio, ataxia, cefaleia, confusão, tontura',
      'Hepatotoxicidade (risco com doses repetidas)',
      'Dispepsia, náusea, vômitos, diarreia, flatulência, dor epigástrica',
      'Depressão miocárdica, arritmia, hipotensão, torsades de pointes',
      'Erupção cutânea, febre, leucopenia, eosinofilia, porfiria, cianose',
      'Em prematuros: acidose e hiperbilirrubinemia descritos',
    ],
    contraindications: [
      'Insuficiência hepática ou renal grave',
      'Gastrite',
      'Hipertrofia grave de amígdalas/adenoides',
    ],
  },

  {
    id: 'propofol',
    name: 'Propofol',
    category: 'anestesicos-sistemicos',
    observations: 'Sedativo hipnótico potente, uso venoso. Tem ação antiemética, anticonvulsivante e ansiolítica. Não possui ação analgésica. Acordar rápido sem ação sensitiva residual. Início: 30 segundos. Duração: 3 a 10 minutos. Fabricante não recomenda uso em menores de 3 anos.',
    brands: [
      'Diprivan / Propofol / Provive — ampola ou fr. amp.: 10 mg/mL (emulsão lipídica)',
    ],
    presentations: [{ label: 'Ampola / fr. amp. — 10 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Sedação consciente',
        items: [
          { label: 'Dose inicial', value: '1 a 2 mg/kg; bolus complementares 0,5 mg/kg a cada 3 a 5 min; ou infusão contínua 5 a 8 mg/kg/hora' },
        ],
      },
      {
        group: 'Crianças — Sequência rápida de intubação',
        items: [
          { label: 'EV', value: '1 a 3 mg/kg' },
        ],
      },
      {
        group: 'Crianças — Sedação prolongada para ventilação',
        items: [
          { label: 'Atenção', value: 'Melhor EVITAR infusão contínua em crianças — risco de acidose metabólica fatal (síndrome do propofol)' },
        ],
      },
      {
        group: 'Crianças — Anestesia geral',
        items: [
          { label: 'Indução', value: '2,5 a 3,5 mg/kg em 20 a 30 s. Lidocaína 0,2 mg/kg pode reduzir dor da injeção' },
          { label: 'Manutenção', value: '0,2 a 0,35 mg/kg/min' },
          { label: 'Status convulsivo', value: 'Bolus 1 a 3 mg/kg; infusão contínua 1 a 15 mg/kg/hora' },
        ],
      },
      {
        group: 'Adultos — Sedação para procedimentos',
        items: [
          { label: 'Dose inicial', value: '2 a 5 mg/kg; ou doses de 1 mg/kg ou 25 a 50 mg a cada 30 s até efeito. Manutenção: 0,1 a 0,2 mg/kg/min' },
        ],
      },
      {
        group: 'Adultos — Sedação em UTI / ventilação',
        items: [
          { label: 'Início', value: '0,3 mg/kg/hora (5 µg/kg/min). Aumentar 0,3 mg/kg/hora a cada 5 a 10 min até efeito. Manutenção: 25 a 75 µg/kg/min' },
          { label: 'Idosos e debilitados', value: 'Menos da metade das doses. Não usar em cardiopatas com FE < 50%' },
        ],
      },
      {
        group: 'Adultos — Anestesia geral (ASA I–II)',
        items: [
          { label: 'Indução', value: '1,0 a 2,5 mg/kg ou ~40 mg a cada 10 s até indução. Manutenção: 0,1 a 0,2 mg/kg/min (primeiros 15 min); depois 2/3 dessa dose' },
        ],
      },
      {
        group: 'Adultos — Status convulsivo',
        items: [
          { label: 'Bolus inicial', value: '1 a 2 mg/kg; infusão: 1,2 mg/kg/hora aumentando 0,005 a 0,01 mg/kg/min a cada 5 min. Dose usual: 1,8 a 12 mg/kg/hora' },
        ],
      },
    ],
    preparation: 'Diluir somente em SGI (mínimo 2 mg/mL). Trocar solução e equipo a cada 12 h. Bolus de 30 a 60 s. Assepsia rigorosa — solução é bom meio de cultura. Monitorar gasometria no uso prolongado. Pacientes alérgicos a ovo têm risco aumentado. Armazenar 2 a 8 °C. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Hipotensão, bradicardia, hipertensão',
      'Apneia, hipertrigliceridemia, hipercapnia, acidose aguda',
      'Convulsão em epilépticos, cefaleia, sonolência, febre, mialgia, mioclonia',
      'Náusea, vômitos, cólicas abdominais, pancreatite, urina esverdeada',
      'Síncope, trombose, necrose se extravasar, insuficiência renal aguda, priapismo',
      'Alergia, anafilaxia, laringoespasmo, edema pulmonar',
      'Síndrome da infusão de propofol (doses altas/uso prolongado): acidose metabólica, rabdomiólise, hiperlipidemia, hipotensão, arritmias',
      'Bupivacaína e lidocaína podem aumentar efeito hipnótico',
    ],
    contraindications: [
      'Menores de 3 anos com infecção respiratória grave',
      'Crianças com difteria ou epiglotite graves',
    ],
  },

  {
    id: 'remifentanila',
    name: 'Remifentanila',
    category: 'anestesicos-sistemicos',
    observations: 'Analgésico opioide e anestésico geral de ação ultracurta, aproximadamente 3 a 5 minutos. Potência semelhante à fentanila, porém não deve ser usado como único agente indutor anestésico. Não adequado para uso intratecal ou epidural (contém glicina). Fabricante contraindica em menores de 1 ano.',
    brands: [
      'Ultiva / Remifas — fr. amp. 1, 2 e 5 mg',
      'Cloridrato de remifentanila — fr. amp. 2 e 5 mg',
    ],
    presentations: [
      { label: 'Fr. amp. 1 mg' },
      { label: 'Fr. amp. 2 mg' },
      { label: 'Fr. amp. 5 mg' },
    ],
    doses: [
      {
        group: 'Crianças — Manutenção de anestesia adjuvante',
        items: [
          { label: 'Neonatos', value: '0,4 a 1 µg/kg/min. Bolus suplementares: 1 µg/kg a cada 2 a 5 min' },
          { label: 'Crianças', value: '0,05 a 1,3 µg/kg/min' },
        ],
      },
      {
        group: 'Crianças — Analgesia / adaptação à ventilação',
        items: [
          { label: 'Neonatos', value: 'Iniciar 0,075 a 0,15 µg/kg/min; titular até máximo 0,5 a 0,94 µg/kg/min' },
          { label: 'Crianças', value: '0,1 µg/kg/min' },
        ],
      },
      {
        group: 'Adultos — Anestesia',
        items: [
          { label: 'Indução', value: '0,5 a 1 µg/kg/min; manutenção: 0,1 a 0,4 µg/kg/min ou bolus 0,1 a 1 µg/kg a cada 2 a 5 min' },
          { label: 'Analgesia (respiração espontânea)', value: '0,1 µg/kg/min' },
          { label: 'Sedação e analgesia', value: 'Infusão contínua 0,025 a 0,1 µg/kg/min (sem dose de ataque)' },
          { label: 'Anestesia geral adjuvante', value: 'Iniciar 0,1 a 0,15 µg/kg/min; ajustar até máximo 0,2 a 0,4 µg/kg/min' },
        ],
      },
    ],
    preparation: 'Diluir em ABD, SG ou SF para 25 ou 50 µg/mL. Bolus EV lentos (3 a 5 min) devem ser evitados em pacientes respirando espontaneamente. Não utilizar para induzir anestesia em crianças. Não usar intratecal ou epidural.',
    sideEffects: [
      'Depressão respiratória, apneia, hipóxia',
      'Náusea, vômitos, constipação',
      'Rigidez muscular (infusão rápida piora)',
      'Cefaleia, tontura, agitação',
      'Hipotensão, bradicardia, taquicardia, hipertensão, rubor, tremores',
      'Febre, calafrio, prurido, transpiração excessiva, anafilaxia',
      'Hemorragia, dor no local da aplicação',
      'Interações: IMAOs, naltrexona, etanol',
    ],
    contraindications: ['Uso intratecal ou epidural (contém glicina)'],
  },

  {
    id: 'sufentanila',
    name: 'Sufentanila',
    suffix: 'Citrato de sufentanila',
    category: 'anestesicos-sistemicos',
    observations: 'Analgesia e anestesia geral. Opioide 10 a 15 vezes mais potente que fentanila.',
    brands: [
      'Sufenta / Fastfen — ampola 1 mL: 50 µg/mL; ampola 5 mL: 50 µg/mL; ampola 2 mL: 5 µg/mL',
      'Citrato de sufentanila — ampola 1 mL: 50 µg/mL; ampola 2 mL: 5 µg/mL',
    ],
    presentations: [
      { label: 'Ampola 1 mL — 50 µg/mL' },
      { label: 'Ampola 5 mL — 50 µg/mL' },
      { label: 'Ampola 2 mL — 5 µg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Sedação / pré-sedação para procedimento',
        items: [{ label: 'EV', value: '1,5 a 3 µg/kg' }],
      },
      {
        group: 'Crianças — Anestesia geral',
        items: [
          { label: 'Indução EV lento', value: '10 a 25 µg/kg. Manutenção: 25 a 50 µg/kg' },
          { label: 'Anestesia epidural', value: '0,25 a 0,5 µg/kg. Máximo: 0,75 µg/kg' },
        ],
      },
      {
        group: 'Adultos — Anestesia geral',
        items: [
          { label: 'Indução EV lento', value: '0,5 a 5,0 µg/kg. Manutenção: 0,01 a 0,05 µg/kg/min' },
          { label: 'Adjuvante — indução', value: '0,3 µg/kg. Manutenção: 0,5 a 1,5 µg/kg/hora ou bolus 0,1 a 0,25 µg/kg' },
        ],
      },
      {
        group: 'Adultos — Sedação e analgesia',
        items: [
          { label: 'Bolus ou infusão', value: 'Bolus 0,1 a 0,5 µg/kg ou infusão contínua 0,005 a 0,01 µg/kg/min' },
          { label: 'Analgesia para procedimentos', value: '2 a 5 µg/dose, repetida em 4 a 10 min; ou infusão 2 a 8 µg/hora' },
          { label: 'Analgesia intratecal', value: '2 a 10 µg dose única' },
          { label: 'Dor aguda intensa', value: 'EV/IM: 50 a 100 µg/dose a cada 1–2 h; infusão EV: 0,5 a 1,5 µg/kg/hora' },
          { label: 'Peridural', value: '10 a 50 µg dose única; ou infusão 10 a 20 µg/hora. Com bupivacaína: bolus 10 a 15 µg (repetir em 1 h, até 2 vezes)' },
        ],
      },
    ],
    preparation: 'Diluir em SG ou SF. Estável por 24 horas.',
    sideEffects: [
      'Depressão respiratória neonatal, rigidez muscular e torácica',
      'Bradicardia, bradiarritmia, hipotensão, hipertensão, parada cardíaca',
      'Midríase, diminuição da FC',
      'Náusea, vômito, sonolência, convulsão, cefaleia',
      'Prurido, calafrio, anafilaxia',
      'Laringoespasmo, broncoespasmo',
      'Hiponatremia (SIADH)',
      'Interação com barbitúricos e depressores do SNC',
    ],
    contraindications: [],
  },

  {
    id: 'tiopental',
    name: 'Tiopental',
    category: 'anestesicos-sistemicos',
    observations: 'Sedativo barbitúrico de ação curta (5 a 10 min). Útil em sedação/anestesia e tratamento de convulsões refratárias. Reduz pressão intracraniana. Contém 4,9 mEq de sódio/grama.',
    brands: ['Thiopentax — fr. amp. 500 e 1000 mg'],
    presentations: [
      { label: 'Fr. amp. 500 mg' },
      { label: 'Fr. amp. 1000 mg' },
    ],
    doses: [
      {
        group: 'Crianças — Indução anestésica',
        items: [
          { label: 'Lactentes e crianças', value: '2 a 5 mg/kg' },
          { label: 'Sequência rápida de intubação', value: '4 a 7 mg/kg/dose' },
          { label: 'RN', value: '3 a 4 mg/kg' },
        ],
      },
      {
        group: 'Crianças — Hipertensão intracraniana',
        items: [
          { label: 'Bolus', value: '5 a 10 mg/kg em 15 a 30 min; seguido de infusão contínua ou bolus 5 mg/kg/hora por 3 horas; depois 3 mg/kg/hora' },
        ],
      },
      {
        group: 'Crianças — Estado convulsivo',
        items: [
          { label: 'Bolus lento (2 min)', value: '5 mg/kg EV; depois infusão contínua 1 a 2 mg/kg/hora. Dose máxima: 5 mg/kg/hora' },
          { label: 'Alternativa', value: 'Bolus 2 a 3 mg/kg; manutenção necessária' },
        ],
      },
      {
        group: 'Adultos — Convulsão refratária',
        items: [{ label: 'EV', value: '75 a 250 mg/dose' }],
      },
      {
        group: 'Adultos — Indução anestésica',
        items: [{ label: 'EV', value: '3 a 5 mg/kg' }],
      },
      {
        group: 'Adultos — HIC e coma induzido',
        items: [
          { label: 'Bolus', value: '3 a 5 mg/kg em 10 min; infusão contínua 1 a 3 mg/kg/hora; doses reforço 2,5 mg/kg se necessário. Ou bolus 1,5 a 3,5 mg/kg' },
        ],
      },
    ],
    preparation: 'Diluição mínima 20 mg/mL em ABD ou SF. SGI: infundir em 2 a 10 min. Pode ser necessário reduzir dose pela metade em idosos. Nível sérico: hipnótico 1–5 µg/mL; tóxico > 10 µg/mL; coma 30–100 µg/mL.',
    renalAdjustment: [{ label: 'ClCr < 10 mL/min', value: '75% da dose' }],
    sideEffects: [
      'Hipotensão grave, depressão cardíaca, redução do débito',
      'Depressão imunitária, flebite, risco de necrose tecidual',
      'Anafilaxia, apneia, broncoespasmo, depressão respiratória (exige VM)',
      'Exige monitorização de EEG contínua para controle de convulsões',
      'Após infusão prolongada, pode demorar > 1 dia para acordar',
      'Coma barbitúrico prolongado: quadro indistinguível de morte encefálica',
      'No trauma craniano grave: maior mortalidade em relação à craniectomia descompressiva',
    ],
    contraindications: ['Porfiria intermitente aguda'],
  },
];