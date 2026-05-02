export const antagonistasAntidotos = [
  {
    id: 'dmsa',
    name: 'Ácido Dimercaptossuccínico',
    suffix: 'DMSA',
    category: 'antagonistas-antidotos',
    observations: 'Quelante utilizado em intoxicação por metais pesados (mercúrio, ouro, chumbo).',
    brands: ['Manipular cápsula 100 mg'],
    presentations: [{ label: 'Cápsula 100 mg (manipulada)' }],
    doses: [
      {
        group: 'Intoxicação por mercúrio e ouro',
        items: [
          { label: 'Dose', value: '3 mg/kg a cada 4 a 6 horas por 2 dias; depois mesma dose a cada 12 horas por 7 a 10 dias' },
        ],
      },
      {
        group: 'Intoxicação por chumbo — nível sérico > 100 µg/dL',
        items: [
          { label: 'Dose', value: '4 a 5 mg/kg a cada 4 horas por 3 a 5 dias' },
        ],
      },
    ],
    preparation: 'Manter urina alcalinizada para evitar nefrotoxicidade.',
    sideEffects: [
      'Cefaleia, parestesia, hipertensão, taquicardia, náusea, vômitos',
      'Queimação nos olhos, lábios, genitália e garganta, febre, mialgia',
      'Abscessos no local da injeção, IM: nefrotoxicidade',
    ],
    contraindications: ['Neutropenia'],
  },

  {
    id: 'azul-metileno',
    name: 'Azul de Metileno',
    suffix: 'Metiltionínio',
    category: 'antagonistas-antidotos',
    observations: 'Utilizado nas intoxicações por substâncias capazes de induzir a oxidação do ferro da hemoglobina (metahemoglobinemia).',
    brands: ['Manipular solução injetável 1% ou 2% (10 a 20 mg/mL)'],
    presentations: [{ label: 'Solução injetável 1–2% (manipulada)' }],
    doses: [
      {
        group: 'Crianças — Metahemoglobinemia aguda',
        items: [
          { label: 'EV', value: '1 a 2 mg/kg/dose ou 25 a 50 mg/m² em 5 a 10 min. Repetir após 1 hora se necessário. Dose máxima: 7 mg/kg' },
          { label: 'Deficiência de metahemoglobina redutase', value: '1 a 1,5 mg/kg/dia (máx 300 mg/dia) + vitamina C 200 mg/dia oral' },
        ],
      },
      {
        group: 'Adultos — Metahemoglobinemia aguda',
        items: [
          { label: 'EV', value: '1 a 2 mg/kg em 5 a 10 min. Repetir após 1 hora se necessário. Dose máxima: 7 mg/kg' },
          { label: 'Metahemoglobinemia crônica', value: 'Oral: 100 a 300 mg/dia' },
          { label: 'Profilaxia crônica / antisséptico urinário', value: 'Oral: 160 a 200 mg/dia, 3 a 4 vezes ao dia, com copo de água' },
        ],
      },
    ],
    sideEffects: [
      'Tontura, cefaleia, sudorese, náusea, vômito, dor abdominal, prurido, erupção cutânea',
      'Irritação vesical, hematúria, tenesmo, cianose, hiperestesia',
      'Doses elevadas: dor precordial, dispneia, inquietação, apreensão, tremores, disúria',
    ],
    contraindications: ['Disfunção renal', 'Gestação'],
  },

  {
    id: 'carvao-ativado',
    name: 'Carvão Vegetal Ativado',
    category: 'antagonistas-antidotos',
    observations: 'Reduz em até 70% a absorção de tóxicos se administrado até 30 minutos e 36% se até 1 hora após ingestão.',
    brands: ['Carverol — comprimido 250 mg'],
    presentations: [{ label: 'Comprimido 250 mg' }],
    doses: [
      {
        group: 'Crianças — Intoxicações',
        items: [
          { label: 'Dose', value: '1 g/kg ou 10 a 30 g em dose única oral ou por sonda gástrica' },
          { label: 'Casos graves', value: 'Iniciar 1 g/kg; depois 0,5 g/kg a cada 4 horas' },
        ],
      },
      {
        group: 'Adultos — Intoxicações',
        items: [
          { label: 'Dose', value: '1 g/kg ou 30 a 100 g em dose única oral ou por sonda gástrica' },
          { label: 'Casos graves', value: 'Iniciar 1 g/kg; depois 0,5 g/kg a cada 4 horas' },
        ],
      },
    ],
    preparation: 'Diluir em água, SF ou catárticos (sorbitol ou manitol): 8 mL por grama. Paciente com rebaixamento de consciência deve ser intubado antes do uso. Administrar até 1 hora após a ingestão. Doses múltiplas indicadas em intoxicações por fenobarbital, ácido valproico, carbamazepina, teofilina e substâncias de liberação prolongada.',
    sideEffects: [
      'Vômitos, constipação intestinal, distensão gástrica',
      'Pneumonia aspirativa, lesão pulmonar grave e derrame pleural, obstrução traqueal, cianose',
    ],
    contraindications: [
      'Risco de hemorragia ou perfuração do trato gastrointestinal',
      'Ausência de ruídos gastrointestinais',
    ],
  },

  {
    id: 'flumazenil',
    name: 'Flumazenil',
    category: 'antagonistas-antidotos',
    observations: 'Antagonista de benzodiazepínicos. Age em 1 a 3 minutos. Indicado para encerrar anestesias, intoxicações ou afastar intoxicação por benzodiazepínico.',
    brands: ['Lanexat / Flumazil / Flumazenil — ampola 0,1 mg/mL'],
    presentations: [{ label: 'Ampola 0,1 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Antagonista diazepínico',
        items: [
          { label: 'EV', value: '0,01 mg/kg/dose a cada 1 min até efeito desejado. Máx: 0,2 mg/dose ou 0,05 mg/kg ou 1 mg acumulado' },
          { label: 'Coma hepático', value: '0,1 mg/dose em 1 hora; contínua: 1 mg' },
        ],
      },
      {
        group: 'Adultos — Antagonista benzodiazepínico',
        items: [
          { label: 'EV', value: 'Iniciar 0,1 a 0,2 mg; depois 0,1 mg a cada 1 a 2 min até efeito ou até dose máxima de 3 mg' },
          { label: 'Coma hepático', value: '0,3 a 1 mg/dose até 1 mg/hora' },
          { label: 'Infusão contínua', value: 'Iniciar 0,1 a 0,4 mg/hora; titular' },
        ],
      },
    ],
    preparation: 'Cada aplicação EV em 15 a 60 segundos. Diluir em SF ou SGI. Pode deflagrar sintomas de abstinência se o paciente estava sedado há vários dias.',
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      { label: 'Insuficiência hepática', value: 'Reduzir dose ou frequência' },
    ],
    sideEffects: [
      'Náusea, vômitos, sensação de frio, cefaleia, agitação, euforia, ansiedade, visão borrada',
      'Arritmias, bradicardia, hipertensão, dor torácica',
      'Risco de convulsões ao usar como teste de intoxicação diazepínica ou em epilépticos em uso crônico',
      'O efeito do diazepínico pode reaparecer, exigindo doses adicionais',
    ],
    contraindications: [],
  },

  {
    id: 'hidroxicobalamina',
    name: 'Hidroxicobalamina',
    category: 'antagonistas-antidotos',
    observations: 'Precursor da cianocobalamina (vitamina B12). Utilizado na intoxicação por cianeto. Não disponível no Brasil.',
    brands: ['Cyanokit — frasco-ampola 5 g'],
    presentations: [{ label: 'Frasco-ampola 5 g' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Intoxicação por cianeto', value: '70 mg/kg EV lento' },
          { label: 'Homocistinúria por deficiência de metilcobalamina', value: '1 a 2 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Intoxicação por cianeto', value: '5 g em 15 min (neutraliza até 40 µmol de cianeto/L de sangue). Repetir se necessário' },
        ],
      },
    ],
    preparation: 'Reconstituir com 200 mL de SF 0,9%, SGI 5% ou Ringer lactato, com movimento de rotação delicado.',
    sideEffects: ['Náusea, cefaleia, hipertensão, eritema, prurido, linfocitopenia', 'Pode colorir urina de vermelho'],
    contraindications: [],
  },

  {
    id: 'naloxona',
    name: 'Naloxona',
    category: 'antagonistas-antidotos',
    observations: 'Antagonista de escolha para intoxicação por narcóticos opioides. Efeito instantâneo, mas curto (≈ 1 hora). Não induz depressão respiratória mesmo sem opioide. Pode ser usada como teste terapêutico.',
    brands: ['Narcan / Cloridrato de naloxona — ampola 0,4 mg/mL'],
    presentations: [{ label: 'Ampola 0,4 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Intoxicação opioide (incl. RN)',
        items: [
          { label: 'EV', value: '0,01 a 0,1 mg/kg/dose. Repetir a cada 2 a 3 min se necessário. Dose no tubo traqueal: 2 a 3× maior' },
          { label: 'Reverter depressão respiratória', value: 'Iniciar 0,001 a 0,01 mg/kg/dose; titular até máx 0,1 mg/kg a cada 2 min. Dose máxima acumulada: 10 mg' },
          { label: 'Reverter prurido por opioide', value: 'Infusão contínua: 0,003 a 0,1 mg/kg/hora; titular' },
        ],
      },
      {
        group: 'Adultos — Intoxicação opioide',
        items: [
          { label: 'EV / IM / SC', value: '0,4 a 2 mg/dose. Repetir a cada 2 a 3 min. Dose máxima acumulada: 10 mg' },
          { label: 'Apneia com suspeita de overdose (extra-hospitalar)', value: '0,4 mg IM. Repetir após 4 min se necessário' },
          { label: 'Depressão respiratória com doses habituais de opioide', value: 'EV: 0,1 a 0,2 mg/dose a cada 2 a 3 min' },
        ],
      },
    ],
    preparation: 'Diluir 2 mg em 500 mL de SF ou SGI → solução 0,004 mg/mL. Estável por 24 horas em temperatura ambiente. EV: infundir bem lento. Monitorar por pelo menos 2 horas.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Náusea, vômito, sudorese, nervosismo, inquietação, irritabilidade',
      'Em pacientes com uso crônico de opioides: crise de abstinência com vômitos, taquicardia, hipertensão, hipotensão, midríase, piloereção',
      'Raramente: arritmia, fibrilação, parada em pós-operatórios',
    ],
    contraindications: [],
  },

  {
    id: 'neostigmina',
    name: 'Neostigmina',
    category: 'antagonistas-antidotos',
    observations: 'Antagonista de curares não despolarizantes (tubocurarina, pancurônio). Também usado na myasthenia gravis e síndrome de Ogilvie.',
    brands: ['Normastig / Metilsulfato de neostigmina — ampola 0,5 mg/mL'],
    presentations: [{ label: 'Ampola 0,5 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Reverter curarização',
        items: [
          { label: 'Dose', value: '0,03 a 0,05 mg/kg/dose. Máx: 0,07 mg/kg ou 5 mg. Associar 0,4 mg de atropina para cada mg de neostigmina' },
        ],
      },
      {
        group: 'Crianças — Myasthenia gravis',
        items: [
          { label: 'EV / IM', value: '0,01 a 0,04 mg/kg a cada 2 a 6 horas. Manter atropina preparada' },
        ],
      },
      {
        group: 'Adultos — Reversão de curarização',
        items: [
          { label: 'EV', value: '0,03 a 0,07 mg/kg em 10 a 20 min. Repetir a cada 1 a 3 horas se necessário. Máx total: 0,07 mg/kg ou 5 mg. Associar atropina' },
        ],
      },
      {
        group: 'Adultos — Outras indicações',
        items: [
          { label: 'Myasthenia gravis — diagnóstico', value: '0,02 mg/kg IM em doses isoladas' },
          { label: 'Myasthenia gravis — tratamento', value: '0,5 a 2,5 mg EV ou IM' },
          { label: 'Atonia vesical', value: '0,5 a 1 mg/dose a cada 3 horas por até 5 doses' },
          { label: 'Síndrome de Ogilvie (pseudo-obstrução intestinal)', value: '2,0 a 2,5 mg EV em 10 min. Eficaz em 60% dos casos' },
          { label: 'Acidente ofídico elapídico (cobra coral)', value: '1 ampola EV + soro. Repetir a cada 4 horas com atropina se necessário. Criança: 0,05 mg/kg' },
        ],
      },
    ],
    preparation: 'Usar preferencialmente sob monitorização ECG — risco de bradicardia e BAV.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: 'Metade da dose' },
      { label: 'ClCr < 10 mL/min', value: '1/4 da dose' },
    ],
    sideEffects: [
      'Crise colinérgica: broncoespasmo, hipersecreção brônquica, hipersalivação, bradicardia, hipotensão, assistolia, bloqueio atrioventricular',
      'Anorexia, náusea, vômito, diarreia, miose, sudorese, fasciculação muscular, micção e evacuação involuntária',
      'Alergia, erupção cutânea, urticária, anafilaxia, perda de consciência, convulsão',
    ],
    contraindications: ['Peritonite', 'Obstrução do trato urinário ou gastrointestinal', 'Amamentação'],
  },

  {
    id: 'penicilamina',
    name: 'Penicilamina',
    category: 'antagonistas-antidotos',
    observations: 'Quelante de metais pesados (arsênio, chumbo, cobre e mercúrio). Considerar outras opções se houver intolerância.',
    brands: ['Cuprimine — cápsula 250 mg'],
    presentations: [{ label: 'Cápsula 250 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Intoxicação por chumbo', value: '30 a 40 mg/kg/dia ÷ 3 a 4 doses' },
          { label: 'Doença de Wilson', value: '20 mg/kg/dia ÷ 2 a 4 doses. Máx: 1500 mg/dia' },
          { label: 'Intoxicação por arsênio', value: '100 mg/kg/dia por 6 dias' },
          { label: 'Artrite reumatoide juvenil', value: 'Iniciar 3 mg/kg/dia por 3 meses; aumentar 5 a 10 mg/kg/dia 1 a 2 vezes ao dia. Máx: 250 mg/dia' },
          { label: 'Cistinúria', value: '30 mg/kg/dia ÷ 4 doses. Ajustar para excreção de cistina 100 a 200 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Intoxicação por chumbo', value: '25 a 35 mg/kg/dia ou 1000 a 1500 mg/dia ÷ 3 a 4 doses. Iniciar com 1/4 da dose, atingir dose plena em 2 a 3 semanas' },
          { label: 'Doença de Wilson', value: '750 a 1500 mg/dia ÷ 3 a 6 doses. Máx: 2000 mg/dia' },
          { label: 'Cistinúria', value: '1 a 4 g/dia ÷ 4 doses. Manutenção: 500 a 750 mg/dia' },
        ],
      },
    ],
    preparation: 'Tomar com água, longe das refeições. Evitar álcool. Suplementar piridoxina (vitamina B6) 25 a 50 mg/dia. Iniciar com doses baixas e aumentar gradualmente.',
    sideEffects: [
      'Fadiga, febre, ganho de peso, neurite óptica',
      'Uso prolongado: erupção cutânea, urticária, prurido, edema, estomatite, anorexia, vômito, icterícia',
      'Agranulocitose, anemia aplásica fatal, trombocitopenia, deficiência de ferro, linfadenopatia',
      'Nefrosíndromes, proteinúria, bronquiolite obstrutiva, artralgia, síndrome lúpus-like',
      'Polimiosite, dermatomiosite, neurite, pancreatite, pênfigo, miastenia',
    ],
    contraindications: ['Amamentação', 'Gestação (exceto doença de Wilson)', 'Insuficiência renal com uso prolongado'],
  },

  {
    id: 'pralidoxima',
    name: 'Pralidoxima',
    category: 'antagonistas-antidotos',
    observations: 'Reativador da função da colinesterase. Usado na intoxicação por organofosforados e anticolinesterásicos.',
    brands: ['Protopam — solução injetável 200 mg'],
    presentations: [{ label: 'Solução injetável 200 mg' }],
    doses: [
      {
        group: 'Crianças — Intoxicação por organofosforados',
        items: [
          { label: 'EV', value: '20 a 50 mg/kg/dose em 30 min. Repetir após 1 hora e a cada 6 a 12 horas se necessário' },
        ],
      },
      {
        group: 'Adultos — Intoxicação por organofosforados',
        items: [
          { label: 'EV (após atropinização)', value: '1 a 2 g/dose. Repetir após 1 hora e a cada 6 a 12 horas se necessário' },
          { label: 'Intoxicação por anticolinesterásico', value: 'EV: 1 a 2 g, seguido de doses de 250 mg a cada 5 min se necessário' },
        ],
      },
    ],
    preparation: 'Diluir em 150 a 250 mL de SF 0,9%; infundir em 15 a 30 min. Nas intoxicações por organofosforados, aplicar atropina primeiro. Manter vias aéreas livres aspirando bem secreções.',
    sideEffects: [
      'Tontura, diplopia, acomodação ocular prejudicada, cefaleia, sonolência, náusea, taquicardia, hipertensão, hiperventilação',
      'Infusão rápida: laringoespasmo, parada cardíaca, rigidez muscular',
    ],
    contraindications: [],
  },

  {
    id: 'protamina',
    name: 'Protamina',
    category: 'antagonistas-antidotos',
    observations: 'Neutraliza heparina por formação de complexo sem efeito anticoagulante. Age em 5 minutos após administração EV. Cada 1 mg neutraliza cerca de 100 UI de heparina.',
    brands: ['Protamina — ampola 5 mL: 10 mg/mL'],
    presentations: [{ label: 'Ampola 5 mL: 10 mg/mL' }],
    doses: [
      {
        group: 'Adultos — Intoxicação por heparina',
        items: [
          { label: '< 30 min da última dose', value: '1 mg para 100 UI de heparina' },
          { label: '30 a 60 min da última dose', value: '0,5 a 0,75 mg para 100 UI' },
          { label: '60 a 120 min da última dose', value: '0,375 a 0,5 mg para 100 UI' },
          { label: '> 120 min da última dose', value: '0,25 a 0,375 mg para 100 UI' },
          { label: 'Dose máxima', value: '50 mg em 10 minutos' },
          { label: 'Enoxaparina', value: '1 mg de protamina para 1 mg de enoxaparina' },
          { label: 'Dalteparina', value: '1 mg de protamina para 100 UI' },
          { label: 'Nadroparina', value: '1 mg de protamina para 7916 UI' },
        ],
      },
    ],
    preparation: 'Uso EV lento. Não misturar com outros medicamentos. Não altera anticoagulantes cumarínicos orais.',
    sideEffects: [
      'Hipotensão, bradicardia, rubor, dispneia, náusea, vômitos, alergia, anafilaxia',
      'Efeito anticoagulante se usada isoladamente em dose alta',
      'Risco aumentado de alergia em usuários de insulina com protamina',
    ],
    contraindications: [],
  },

  {
    id: 'sugamadex',
    name: 'Sugamadex',
    category: 'antagonistas-antidotos',
    observations: 'Antídoto de bloqueadores neuromusculares como rocurônio e vecurônio.',
    brands: ['Bridion — frasco-ampola 2 mL: 100 mg/mL'],
    presentations: [{ label: 'Frasco-ampola 2 mL: 100 mg/mL' }],
    doses: [
      {
        group: 'Crianças acima de 2 anos',
        items: [
          { label: 'Dose', value: '2 mg/kg em bolus EV' },
        ],
      },
      {
        group: 'Adultos — Reversão de rocurônio e vecurônio',
        items: [
          { label: 'Bloqueio intenso', value: '4 mg/kg em bolus EV' },
          { label: 'Bloqueio moderado', value: '2 mg/kg em bolus EV' },
          { label: 'Recuperação imediata (apenas rocurônio)', value: '1,2 mg/kg até 16 mg/kg' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' },
    ],
    sideEffects: [
      'Náusea, vômito, cefaleia, alergia, erupção cutânea, rubor na pele',
      'Edema laríngeo, dispneia, broncoespasmo, hipotensão, bradicardia, assistolia, prolongamento do QTc',
      'Aumento de creatina, mialgia, recorrência de bloqueio neuromuscular',
    ],
    contraindications: [],
  },

  {
    id: 'xarope-ipeca',
    name: 'Xarope de Ipeca',
    category: 'antagonistas-antidotos',
    observations: 'Emetizante para eliminação de drogas e tóxicos ingeridos recentemente. Efeito em 15 a 20 minutos. Não existe preparado comercial — manipular com 70 mg/mL (solução 7%).',
    brands: ['Manipular: solução 70 mg/mL (7%)'],
    presentations: [{ label: 'Solução 70 mg/mL (manipulada)' }],
    doses: [
      {
        group: 'Crianças 6 a 12 meses',
        items: [
          { label: 'Dose', value: '5 a 10 mL/dose + 10 a 20 mL/kg de água' },
        ],
      },
      {
        group: 'Crianças 1 a 12 anos',
        items: [
          { label: 'Dose', value: '15 mL/dose + 10 a 20 mL/kg de água. Segunda dose pode ser repetida em 30 min. Se falhar, fazer lavagem gástrica' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '30 mL/dose + 200 a 300 mL de água' },
        ],
      },
    ],
    sideEffects: [
      'Geralmente bem tolerado',
      'Raros: cardiotoxicidade e miopatia por uso repetido, letargia, vômitos, diarreia, febre, sonolência',
    ],
    contraindications: [
      'Coma ou inconsciência', 'Idosos', 'Insuficiência respiratória ou doença cardíaca',
      'Convulsão', 'Ingestão de tricíclicos, benzodiazepínicos, corrosivos ou derivados de petróleo',
      'Estimulantes do SNC',
    ],
  },
];