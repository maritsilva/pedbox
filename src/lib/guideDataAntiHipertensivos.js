// Anti-hipertensivos: Outros, Vasodilatadores, Alfa-bloqueadores, Alfa-agonistas, Betabloqueadores

export const antiHipertensivosOutros = [
  {
    id: 'alisquireno',
    name: 'Alisquireno',
    category: 'anti-hipertensivos-outros',
    observations: 'Bloqueador de renina.',
    brands: ['Rasilez (Novartis) — comprimidos revestidos 150 e 300 mg'],
    presentations: [{ label: 'Comprimido revestido 150 mg' }, { label: 'Comprimido revestido 300 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Uso pediátrico', value: 'Melhor evitar — forma farmacêutica inadequada para uso pediátrico; o fabricante não recomenda' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Início', value: '150 mg ÷ 1. Se necessário, dobrar após 2 a 4 semanas. Dose habitual: 150 a 300 mg/dia ÷ 1' },
          { label: 'Doença renal crônica (não diabético)', value: 'Máximo 150 mg/dia' },
        ],
      },
    ],
    preparation: 'Melhor tomar após o café da manhã. Comprimidos não devem ser partidos ou mastigados. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Fadiga, cefaleia, tontura, convulsão, irritação gastrointestinal, diarreia, náuseas, vômitos, dor abdominal',
      'Erupção cutânea, anafilaxia',
      'Aumento de ureia e creatinina sérica, hiperpotassemia, anemia',
      'Gota, litíase renal, insuficiência renal, edema nas pernas',
      'Tosse, congestão nasal, faringite',
      'Não associar com BRA em diabéticos ou ClCr < 60 mL/min',
    ],
    contraindications: ['Crianças < 2 anos', 'Angioedema'],
  },

  {
    id: 'diazoxido',
    name: 'Diazóxido',
    category: 'anti-hipertensivos-outros',
    observations: 'Benzodiazínico não diurético com efeito hipotensor vasodilatador arteriolar. Hiperglicemiante (inibe liberação de insulina). Útil nas emergências hipertensivas. Efeito: início 1–10 min; duração 3–18 horas.',
    brands: ['Tensuril (Cristália) — ampola 20 mL: 15 mg/mL'],
    presentations: [{ label: 'Ampola 20 mL — 15 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Urgência/emergência hipertensiva',
        items: [{ label: 'Bolus EV', value: '1 a 3 mg/kg/dose. Mais seguro fazer doses menores em bolus repetidos a cada 10 min. Dose máxima: 150 mg/dose' }],
      },
      {
        group: 'Crianças — Hipoglicemia refratária',
        items: [
          { label: 'Neonatos e lactentes', value: 'Iniciar 10 mg/kg/dia ÷ 2 a 3. Dose usual: 5 a 15 mg/kg/dia ÷ 2 a 3' },
          { label: 'Crianças', value: 'Iniciar 3 mg/kg/dia ÷ 3. Dose usual: 3 a 8 mg/kg/dia ÷ 2 a 3. Dose máxima: 15 a 20 mg/kg/dia' },
        ],
      },
      {
        group: 'Adultos — Emergência hipertensiva',
        items: [{ label: 'Bolus EV', value: '1 a 3 mg/kg (mínimo 30–150 mg) a cada 10 a 15 min, até efeito ou 600 mg total' }],
      },
      {
        group: 'Adultos — Hipoglicemia refratária',
        items: [{ label: 'Oral', value: 'Iniciar 3 mg/kg/dia ÷ 3. Dose usual: 3 a 8 mg/kg/dia ÷ 2 a 3. Uso parenteral restrito a 5–10 dias' }],
      },
    ],
    sideEffects: [
      'Náuseas, vômitos, diarreia, constipação',
      'Hiperglicemia com cetoacidose',
      'Taquicardia, hipotensão sintomática, forte retenção de sódio e água (associar diurético)',
      'Isquemia cardíaca (angina), dissecção da aorta, piora de insuficiência cardíaca',
      'Cefaleia, fraqueza, tontura, tremor, rubor, erupção cutânea',
      'Hemólise, leucopenia, febre, hiponatremia, hiperuricemia, plaquetopenia',
      'Dor e necrose se extravasar',
      'Uso prolongado: síndrome lúpus-símile, miocardiopatia hipertrófica, hipertricose',
    ],
    contraindications: ['Feocromocitoma', 'Aneurisma dissecante', 'Aterosclerose grave'],
  },

  {
    id: 'fenoldopam',
    name: 'Fenoldopam',
    category: 'anti-hipertensivos-outros',
    observations: 'Agonista dopaminérgico DA-1 seletivo com efeito hipotensor e diurético (melhora perfusão renal). Meia-vida: 5 minutos. Início de ação: 15 minutos. Não usar por mais de 48 horas.',
    brands: ['Corlopam — fr. amp. 10 mg/1 mL e 20 mg/2 mL'],
    presentations: [{ label: 'Fr. amp. 10 mg/1 mL' }, { label: 'Fr. amp. 20 mg/2 mL' }],
    doses: [
      {
        group: 'Crianças — Crise hipertensiva',
        items: [{ label: 'Infusão contínua', value: 'Iniciar 0,2 µg/kg/min; titular a cada 20 a 30 min em 0,3 a 0,5 µg/kg/min. Dose máxima: 0,8 µg/kg/min' }],
      },
      {
        group: 'Crianças — Insuficiência cardíaca',
        items: [{ label: 'Infusão', value: '0,03 µg/kg/min' }],
      },
      {
        group: 'Adultos — Crise hipertensiva',
        items: [{ label: 'Infusão contínua titulada', value: 'Iniciar 0,03 a 0,1 µg/kg/min; ajustar 0,05 a 0,1 µg/kg/min. Raramente necessário > 4 µg/kg/min' }],
      },
      {
        group: 'Adultos — Hipertensão na disfunção renal aguda',
        items: [{ label: 'Infusão', value: 'Iniciar 0,1 µg/kg/min; ajustar a cada 15 min. Dose média: 0,25 a 0,5 µg/kg/min' }],
      },
    ],
    preparation: 'Diluir cada frasco de 10 mg em 250 mL de SF ou SGI. Ajustar a dose a cada 15 a 30 minutos. Iniciar anti-hipertensivo oral antes de descontinuar.',
    sideEffects: [
      'Hipotensão exagerada, taquicardia reflexa, palpitação',
      'Choque cardiogênico, insuficiência cardíaca, infarto do miocárdio',
      'Vasodilatação (eritrodermia), rubor',
      'Náuseas e vômitos',
      'Pode agravar hipertensão intracraniana',
    ],
    contraindications: [],
  },

  {
    id: 'fentolamina',
    name: 'Fentolamina',
    category: 'anti-hipertensivos-outros',
    observations: 'Bloqueador α usado em situações específicas de emergência hipertensiva. Não existe preparação parenteral no mercado brasileiro — pode ser obtida em farmácias de manipulação.',
    brands: ['Oraverse (EUA) — ampola 5 mL (não disponível no Brasil; obter em farmácia de manipulação estéril)'],
    presentations: [{ label: 'Ampola (manipulada)' }],
    doses: [
      {
        group: 'Crianças — Prevenção de crise hipertensiva (feocromocitoma)',
        items: [{ label: 'EV', value: '0,05 a 0,1 mg/kg/dose ou 1 mg EV. Usar 1 a 2 horas antes da cirurgia; repetir quando necessário' }],
      },
      {
        group: 'Adultos — Emergência hipertensiva',
        items: [{ label: 'EV/IM', value: '0,05 a 0,10 mg/kg ou 2 a 5–10 mg EV a cada 15 min até resposta; depois a cada 2 a 4 horas' }],
      },
      {
        group: 'Adultos — Cirurgia de feocromocitoma',
        items: [{ label: 'EV/IM', value: '0,05 a 0,1 mg/dose ou 5 mg/dose, 1 a 2 horas antes; repetir se necessário' }],
      },
      {
        group: 'Adultos — Extravasamento de aminas (necrose)',
        items: [{ label: 'Infiltração local', value: 'Diluir 5 a 10 mg em 10 mL SF; infiltrar o local com agulha de insulina (cerca de 1 a 2 mL)' }],
      },
      {
        group: 'Adultos — Insuficiência cardíaca',
        items: [{ label: 'EV contínua', value: '2,5 a 15 µg/kg/min' }],
      },
    ],
    sideEffects: [
      'Hipotensão exagerada, hipotensão ortostática, arritmia, taquicardia, angina, infarto do miocárdio',
      'Hipertensão paradoxal',
      'Tontura, cefaleia, fraqueza, AVC por oclusão arterial',
      'Náuseas, vômito, diarreia, dor abdominal, exacerbação de úlcera péptica',
      'Congestão nasal, dor e fibrose na injeção',
    ],
    contraindications: ['Insuficiência renal', 'Aterosclerose cerebral ou coronariana grave', 'Angina', 'Hipotensão', 'Infarto recente'],
  },
];

export const antiHipertensivosVasodilatadores = [
  {
    id: 'hidralazina',
    name: 'Hidralazina',
    category: 'anti-hipertensivos-vasodilatadores',
    observations: 'Vasodilatador de ação direta. Usada em associação a diurético e β-bloqueador. Segunda linha nas urgências/emergências. Efeito oral: início 20–30 min, pico 1–2 h, duração 2–4 h. EV: início 15 min, pico 15–30 min, duração 2–6 h.',
    brands: [
      'Apresolina (Novartis) — dragée 25 e 50 mg',
      'Nepresol (Cristália) — ampola 1 mL: 20 mg/mL; comprimidos 25 e 50 mg',
    ],
    presentations: [{ label: 'Comprimido 25 mg' }, { label: 'Comprimido 50 mg' }, { label: 'Ampola 1 mL — 20 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Hipertensão / ICC',
        items: [
          { label: 'EV/IM', value: '0,1 a 0,5 mg/kg/dose × 3 a 4. Máx: 2 mg/kg/dose ou 20 mg/dose' },
          { label: 'Oral', value: 'Início 0,75 mg/kg/dia ÷ 3 a 4. > 30 kg: iniciar 25 mg/dia. Ajustar a cada 7 dias. Máx: 7,5 mg/kg/dia ou 200 mg/dia' },
        ],
      },
      {
        group: 'Crianças — Urgência/emergência hipertensiva',
        items: [{ label: 'EV/IM', value: '0,2 a 0,6 mg/kg/dose × 6. Primeiras 3 doses a cada 1 a 2 horas. Dose máxima: 3,5 mg/kg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 50 mg/dia ÷ 2. Aumentar 25 mg a cada 7 dias. Dose máxima: 300 mg/dia' }],
      },
      {
        group: 'Adultos — Urgência hipertensiva',
        items: [{ label: 'EV/IM', value: 'Bolus EV 10 a 20 mg/dose ou IM 10 a 40 mg a cada 4 a 6 horas. Dose usual: 10 a 40 mg/dose' }],
      },
      {
        group: 'Adultos — ICC',
        items: [
          { label: 'EV/IM', value: '5 mg, depois 10 mg, depois 20 mg a cada 4 a 6 horas' },
          { label: 'Oral', value: 'Iniciar 25 a 50 mg × 3 a 4; ajustar até máximo 300 mg/dia (usar com isossorbida oral)' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '1 dose a cada 8 horas' },
      { label: 'ClCr < 10 mL/min', value: '1 dose a cada 12 a 16 horas' },
    ],
    sideEffects: [
      'Tontura, cefaleia, fadiga, distúrbios do sono, febre',
      'Hipotensão postural, taquicardia, palpitação, retenção de sódio e água (associar diurético)',
      'Neurite periférica (rara; responde à piridoxina), artralgia',
      'Náuseas, vômitos, diarreia, anorexia, icterícia',
      'Hepatotoxicidade e colangite aguda (raras)',
      'Síndrome lúpus-símile no uso prolongado (artralgia, febre, esplenomegalia, FAN positivo)',
    ],
    contraindications: ['Taquicardia grave', 'Aneurisma dissecante de aorta', 'Cardiopatia reumática', 'Coronariopatia'],
  },

  {
    id: 'minoxidil',
    name: 'Minoxidil',
    category: 'anti-hipertensivos-vasodilatadores',
    observations: 'Vasodilatador de ação direta. Eficaz mesmo na hipertensão grave e resistente. Droga secundária nas crises hipertensivas. Efeito: início 30–60 min; pico 2–8 h; duração 2–5 dias. Recomendado associar β-bloqueador e diurético de alça.',
    brands: ['Loniten — comprimidos 2,5 e 10 mg'],
    presentations: [{ label: 'Comprimido 2,5 mg' }, { label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão refratária',
        items: [
          { label: 'Início', value: '0,1 a 0,2 mg/kg/dia (máx 5 mg). Aumentar 0,1 a 0,2 mg/kg/dia a cada 3 a 7 dias. Dose máxima: 1,0 mg/kg/dia ou 50 mg/dia ÷ 3 a 4' },
          { label: 'Urgência', value: '0,1 a 0,2 mg/kg até máximo 10 mg/dose (existem opções melhores)' },
        ],
      },
      {
        group: 'Adultos — Hipertensão refratária',
        items: [{ label: 'Oral', value: 'Iniciar 5 mg/dia ÷ 1; ajustar a cada 3 a 7 dias. Dose habitual: 10 a 40 mg/dia ÷ 1 a 2. Dose máxima: 80 mg/dia' }],
      },
    ],
    preparation: 'Se reduzir PA diastólica > 30 mmHg: dividir em 2 doses diárias. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Retenção hídrica e edema (associar diurético de alça)',
      'Taquicardia reflexa (associar β-bloqueador)',
      'Hipertricose (uso prolongado)',
      'Pericardite, derrame pericárdico',
      'Rash cutâneo',
    ],
    contraindications: [],
  },

  {
    id: 'nitroprussiato',
    name: 'Nitroprussiato de Sódio',
    category: 'anti-hipertensivos-vasodilatadores',
    observations: 'Vasodilatador mais potente disponível. Exige controle intensivo. Efeito: início instantâneo; duração até 10 min após fim da infusão. Usar monitorização invasiva (cateter intra-arterial) de preferência. Proteger da luz.',
    brands: [
      'Nitro (Hipolabor) — ampola 2 mL: 25 mg/mL',
      'Nitrous — fr. amp. 50 mg',
    ],
    presentations: [{ label: 'Ampola 2 mL — 25 mg/mL' }, { label: 'Fr. amp. 50 mg' }],
    doses: [
      {
        group: 'Adultos e crianças — Emergência hipertensiva',
        items: [
          { label: 'Infusão contínua', value: 'Iniciar 0,3 a 0,5 µg/kg/min; aumentar 0,3 a 0,5 µg/kg/min a cada 5 min. Dose habitual: 2 a 3 µg/kg/min. Dose máxima: adulto 8 µg/kg/min; criança 10 µg/kg/min (usar doses altas por poucos minutos)' },
          { label: 'Tratamento prolongado', value: 'Máximo 2,5 µg/kg/min (3,6 mg/kg/dia). Monitorar nível de cianeto' },
        ],
      },
    ],
    preparation: 'Diluições comuns: 50 mg em 250 mL SGI = 200 µg/mL; 50 mg em 500 mL = 100 µg/mL; 50 mg em 1000 mL = 50 µg/mL. Diluir somente em SGI. Proteger da luz (equipo opaco ou cobrir com papel). Usar em até 24 horas. Não misturar com outra droga. Nunca usar SF.',
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Máximo 3 µg/kg/min' }],
    sideEffects: [
      'Hipotensão exagerada',
      'Intoxicação por cianeto/tiocianato (uso prolongado ou doses altas): acidose, taquicardia, alteração do nível de consciência',
      'Náuseas, vômitos, cefaleia, inquietação, sudorese, palpitações',
    ],
    contraindications: [],
  },
];

export const antiHipertensivosAlfaBloqueadores = [
  {
    id: 'doxazosina',
    name: 'Doxazosina',
    suffix: 'Mesilato de doxazosina',
    category: 'anti-hipertensivos-alfa-bloqueadores',
    observations: 'Bloqueador α1 seletivo e competitivo pós-juncional. Útil como anti-hipertensivo e na obstrução urinária por hiperplasia prostática. Efeito: início 2 a 6 horas. Preferir tiazídico, IECA, BRA ou BCC para hipertensão isolada.',
    brands: [
      'Carduran (Pfizer) — comprimido XL 4 mg',
      'Doxipress / Doxuran / Mesidox / Duomo — comprimidos 2 e 4 mg',
      'Karvil / Unoprox — comprimidos 1, 2 e 4 mg',
      'Doxazosina + Finasterida: Duomo HP / Hominus / Prós-HP — cáps. 2 + 5 mg',
    ],
    presentations: [{ label: 'Comprimido 1, 2 e 4 mg' }, { label: 'Comprimido XL 4 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [{ label: '> 1 ano', value: 'Iniciar 1 mg/dia ÷ 1; ajustar pela resposta. Dose máxima: 4 mg/dia' }],
      },
      {
        group: 'Crianças — Disfunção urinária / cálculo renal',
        items: [{ label: '≥ 3 anos', value: 'Iniciar 0,5 mg/dia ÷ 1 ao deitar; ajustar a cada 1 a 2 semanas. Dose usual: 0,03 mg/dia. Dose máxima: 2 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Início 1 mg/dia ÷ 1; ajustar a cada 1 a 2 semanas até máximo 16 mg/dia. Dose habitual: 2 a 8 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — Hiperplasia prostática benigna',
        items: [
          { label: 'Comprimido comum', value: 'Iniciar 1 mg/dia; dobrar após 1 a 2 semanas; dose máxima 8 mg/dia' },
          { label: 'Comprimido XL', value: '4 mg/dia ÷ 1. Se necessário, dobrar após 3 a 4 semanas. Dose máxima 8 mg/dia' },
        ],
      },
    ],
    preparation: 'Melhor tomar após o café da manhã. Se pausado por muitos dias, reiniciar com menor dose. Não trocar diretamente comprimido comum por XL: suspender última dose do dia e iniciar XL no dia seguinte.',
    sideEffects: [
      'Hipotensão ortostática, edema periférico, palpitações, rubor, edema facial',
      'Tontura, vertigem, cefaleia, fadiga, sonolência, ansiedade, depressão',
      'Angioedema, aumento do risco cardiológico',
      'Infecção respiratória, rinite, dispneia, epistaxia',
      'Náusea, diarreia, dor abdominal, dispepsia, boca seca',
      'Hepatite, impotência, priapismo (raro), incontinência urinária',
    ],
    contraindications: ['Insuficiência renal grave'],
  },

  {
    id: 'fenoxibenzamina',
    name: 'Fenoxibenzamina',
    category: 'anti-hipertensivos-alfa-bloqueadores',
    observations: 'Potente bloqueador α com meia-vida superior a 24 horas. Não disponível no Brasil (Dibenzyline — EUA, cáps. 10 mg). Não deve ser usado prolongadamente.',
    brands: ['Dibenzyline (EUA) — cáps. 10 mg (não disponível no Brasil)'],
    presentations: [{ label: 'Cápsula 10 mg (EUA)' }],
    doses: [
      {
        group: 'Crianças — Manejo pré-operatório do feocromocitoma',
        items: [{ label: 'Oral', value: 'Iniciar 0,2 mg/kg/dose × 1 a 2; titular a cada 4 dias. Manutenção: 0,4 a 3 mg/kg/dia ÷ 3 a 4. Dose máxima: 4 mg/kg/dia e 40 mg/dose' }],
      },
      {
        group: 'Adultos — Hipertensão por feocromocitoma',
        items: [{ label: 'Oral', value: 'Iniciar 10 mg × 2; aumentar gradualmente. Dose máxima: 120 mg/dia' }],
      },
    ],
    sideEffects: [
      'Hipotensão postural, taquicardia, síncope, tontura, fadiga',
      'Congestão nasal, miose',
      'Irritação gastrointestinal, inibição da ejaculação',
      'Mutagênico e carcinogênico (uso prolongado)',
      'Em pacientes com bloqueio alfa, adrenalina reduz a PA',
    ],
    contraindications: ['Hipotensão grave'],
  },

  {
    id: 'prazosina',
    name: 'Prazosina',
    category: 'anti-hipertensivos-alfa-bloqueadores',
    observations: 'Bloqueador α1 pós-sináptico. Tratamento da hipertensão secundária a excesso de catecolaminas, feocromocitoma, neuroblastoma.',
    brands: ['Minipress — cáps. lib. lenta 1, 2 e 4 mg'],
    presentations: [{ label: 'Cápsula lib. lenta 1, 2 e 4 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão por doença renal',
        items: [{ label: 'Dose teste (> 20 kg)', value: '2 mg à noite; manutenção: 0,05 a 0,1 mg/kg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 1,0 mg ao deitar; ajustar a cada 3 a 7 dias até máximo 20 mg/dia ÷ 1' }],
      },
      {
        group: 'Adultos — Hiperplasia prostática',
        items: [{ label: 'Oral', value: '1 a 4 mg/dia ÷ 1' }],
      },
    ],
    preparation: 'Melhor tomar à noite. Orientar pacientes a evitar dirigir ou operar máquinas (efeito sedativo). A cápsula não deve ser aberta, partida ou mastigada.',
    sideEffects: [
      'Hipotensão grave e síncope na 1ª dose (30–90 min após), hipotensão ortostática, edema, dispneia',
      'Sonolência, tontura, cefaleia, letargia, depressão, fraqueza',
      'Náuseas, vômito, diarreia, constipação, pancreatite',
      'Congestão nasal, boca seca, rinite, epistaxia',
      'Impotência, priapismo (raro), incontinência urinária, polaciúria',
      'Taquifilaxia',
    ],
    contraindications: ['Cardiopatia grave', 'Edema pulmonar por estenose aórtica ou mitral', 'Hipertensão grave'],
  },

  {
    id: 'terazosina',
    name: 'Terazosina',
    category: 'anti-hipertensivos-alfa-bloqueadores',
    observations: 'Bloqueador α1 pós-sináptico com meia-vida mais longa. Só importado (Hytrin — Canadá). Efeito: início 15 min; pico 2–3 h; duração 12 horas.',
    brands: ['Hytrin (Canadá) — comprimidos (não disponível no Brasil)'],
    presentations: [{ label: 'Comprimido (importado)' }],
    doses: [
      {
        group: 'Crianças — Hipertensão por doença renal',
        items: [{ label: 'Oral', value: 'Iniciar 1 mg à noite; aumentar lentamente conforme resposta e tolerância' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Início 1 mg/dia ÷ 1 ao deitar. Dose habitual: 1 a 2 mg/dia. Dose máxima: 20 mg/dia' }],
      },
      {
        group: 'Adultos — Hiperplasia prostática benigna',
        items: [{ label: 'Oral', value: 'Iniciar 1 mg/dia ao deitar. Ajustar até máximo 20 mg/dia' }],
      },
    ],
    preparation: 'Melhor tomar ao deitar. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Hipotensão ortostática, palpitação, tontura, sonolência, cefaleia, fadiga',
      'Náuseas, vômito, diarreia, constipação',
      'Congestão nasal, dispneia, boca seca, rinite, epistaxia',
      'Incontinência urinária ou polaciúria',
    ],
    contraindications: ['Angina ou cardiopatia grave', 'Insuficiência hepática'],
  },
];

export const antiHipertensivosAlfaAgonistas = [
  {
    id: 'clonidina',
    name: 'Clonidina',
    category: 'anti-hipertensivos-alfa-agonistas',
    observations: 'Anti-hipertensivo agonista α2 de ação central. Analgésico por via peridural. Auxiliar no diagnóstico do feocromocitoma e no tratamento do déficit de atenção. Efeito hipotensor: início 30–60 min; pico 2–4 h; duração 6–8 h (até 24 h). Suspensão súbita pode provocar crise hipertensiva grave — retirada progressiva em 4 dias.',
    brands: [
      'Atensina — comprimidos 0,10 / 0,15 / 0,20 mg',
      'Clonidin — ampola 1 mL: 150 µg/mL',
    ],
    presentations: [
      { label: 'Comprimido 0,10 mg' },
      { label: 'Comprimido 0,15 mg' },
      { label: 'Comprimido 0,20 mg' },
      { label: 'Ampola 1 mL — 150 µg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 5 a 10 µg/kg/dia ÷ 2 a 3; ajustar pela resposta. Dose máxima: 0,9 mg/dia' }],
      },
      {
        group: 'Crianças — Autismo / TDAH / hiperatividade',
        items: [{ label: 'Oral', value: 'Ajuste por peso a cada 3 a 7 dias em 3 a 5 µg/kg/dia. Dose máxima: 0,2 mg/dia' }],
      },
      {
        group: 'Crianças — Sedação para procedimento',
        items: [{ label: 'Dose única', value: '4 µg/kg ou 0,15 mg/m²' }],
      },
      {
        group: 'Crianças — Abstinência por opioides',
        items: [{ label: 'Oral', value: '0,5 a 5 µg/kg/dia ÷ 4 a 6' }],
      },
      {
        group: 'Crianças — Espasticidade',
        items: [{ label: 'Oral', value: '0,025 a 0,1 mg/dia ÷ 2 a 3' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '0,1 mg × 2; aumentar gradualmente até máximo 2,4 mg/dia. Dose habitual: 0,1 a 0,3 mg × 2' }],
      },
      {
        group: 'Adultos — Profilaxia enxaqueca',
        items: [{ label: 'Oral', value: 'Iniciar 0,1 mg × 1 a 2; ajustar a cada 2 semanas' }],
      },
      {
        group: 'Adultos — Alcoolismo / abstinência química',
        items: [{ label: 'Oral', value: 'Iniciar 0,3 a 0,5 mg × 2 a 4; ajustar até máximo 1 mg/dia' }],
      },
      {
        group: 'Adultos — Diarreia secretória crônica',
        items: [{ label: 'EV', value: '0,2 a 0,3 mg/dose em 7 a 10 min. Peridural: 30 µg/hora' }],
      },
    ],
    preparation: 'Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Sonolência e sedação (principais), vertigem, depressão do SNC, fadiga, fraqueza, pesadelos, irritabilidade',
      'Hipotensão, hipotensão ortostática, bradicardia, BAV, ICC, retenção hidrossalina, fenômeno de Raynaud',
      'Boca seca, constipação, náusea, anorexia, dor abdominal',
      'Congestão nasal, sinusite, aumento da temperatura corporal',
      'Impotência sexual',
      'Crise hipertensiva grave e sintomas neurológicos por retirada súbita',
    ],
    contraindications: [
      'Feocromocitoma',
      'Insuficiência renal grave',
      'Bradiarritmia grave, BAV de II ou III grau',
      'Anticoagulante com sangramento ativo',
    ],
  },

  {
    id: 'metildopa',
    name: 'Metildopa',
    category: 'anti-hipertensivos-alfa-agonistas',
    observations: 'Não deve ser usada como primeira linha. Preferir tiazídico, IECA, BRA ou BCC. Monitorar função hepática mensalmente nos primeiros 6 a 12 meses. Evitar em idosos. Suspensão súbita causa rebote grave.',
    brands: [
      'Aldomet (MSD) — comprimidos revestidos 250 e 500 mg',
      'Metilcord / Metilvita / Tensival / Venopressin — comprimidos 250 e 500 mg',
      'Metildopa (FUNED, FURP) — comprimidos 250 mg',
    ],
    presentations: [{ label: 'Comprimido 250 mg' }, { label: 'Comprimido 500 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Oral', value: 'Início 10 mg/kg/dia ÷ 2 a 4. Ajustar a cada 2 dias. Dose máxima: 60 mg/kg/dia ou 2000 mg/dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Oral', value: 'Iniciar 250 mg × 2; ajustar a cada 2 dias. Dose usual: 500 a 1500 mg/dia ÷ 2 a 3. Dose máxima: 3000 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão na gravidez',
        items: [{ label: 'Oral', value: 'Iniciar 250 mg × 2; ajustar até 500 mg × 2 a 3' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Máximo 2 doses/dia (a cada 12 ou 24 horas)' }],
    sideEffects: [
      'Sonolência, fraqueza, tontura, insônia, pesadelos, depressão, sedação, cefaleia, parkinsonismo',
      'Hipotensão postural, taquicardia, edema, retenção hidrossalina',
      'Náuseas, vômito, diarreia, boca seca, pancreatite, colite',
      'Lesão hepatocelular (hepatite e cirrose), febre inexplicada (suspensão imediata)',
      'Impotência, ginecomastia, desordens menstruais',
      'Coombs positivo com ou sem hemólise (suspender se hemólise)',
      'Plaquetopenia, neutropenia, anemia autoimune',
      'Urina vermelha ou marrom, síndrome lúpus-símile',
    ],
    contraindications: [
      'Doença hepática ativa ou hepatite medicamentosa anterior',
      'Uso de IMAOs',
      'Feocromocitoma',
      'Depressão grave',
    ],
  },

  {
    id: 'rilmenidina',
    name: 'Rilmenidina',
    category: 'anti-hipertensivos-alfa-agonistas',
    observations: 'Agonista imidazolínico central e do rim. Interrupção súbita causa rebote grave.',
    brands: ['Hyperium (Servier) — comprimidos 1 mg'],
    presentations: [{ label: 'Comprimido 1 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Oral', value: '1 mg/dia ÷ 1. Após 4 semanas, se necessário aumentar para 2 mg/dia ÷ 2' }],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 15–80 mL/min', value: 'Até 1 mg/dia' },
      { label: 'ClCr < 15 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Taquicardia, hipotensão postural, palpitação, edema, extremidades frias',
      'Insônia, fraqueza, cefaleia, depressão, ansiedade, tontura',
      'Náuseas, diarreia, dispepsia, boca seca, dor abdominal',
      'Impotência, ondas de calor, tosse',
      'Erupção cutânea, fotossensibilidade, eritema, prurido',
    ],
    contraindications: ['Insuficiência renal grave', 'Depressão grave'],
  },
];

export const antiHipertensivosBetaBloqueadores = [
  {
    id: 'atenolol',
    name: 'Atenolol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador cardioseletivo (β1). Antiarrítmico classe II. Betabloqueadores não são primeira escolha no tratamento da hipertensão pediátrica.',
    brands: [
      'Ablok / Angipress / Atenobal / Telol — comprimidos 25, 50 e 100 mg',
      'Ateneum / Atenollab / Tenolon — comprimidos 50 mg',
    ],
    presentations: [{ label: 'Comprimido 25 mg' }, { label: 'Comprimido 50 mg' }, { label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [{ label: 'Oral', value: '0,5 a 1 mg/kg/dia ÷ 1 a 2. Dose máxima: 2 mg/kg/dia ou 100 mg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Início 25 a 50 mg/dia ÷ 1; ajustar. Dose habitual: 50 a 100 mg/dia ÷ 1. Dose máxima: 200 mg/dia' }],
      },
      {
        group: 'Adultos — Angina',
        items: [{ label: 'Oral', value: '50 a 100 mg/dia ÷ 1 a 2' }],
      },
      {
        group: 'Adultos — Arritmia',
        items: [{ label: 'EV', value: '2,5 mg em 2,5 min; repetir até 3 vezes a cada 5 min. Manutenção oral: 50 a 100 mg/dia' }],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 15–35 mL/min', value: '50 mg/dia' },
      { label: 'ClCr < 15 mL/min', value: '25 mg/dia' },
    ],
    sideEffects: [
      'Bradicardia, hipotensão, BAV, insuficiência cardíaca',
      'Fadiga, fraqueza, tontura, sonolência, depressão, pesadelos',
      'Broncoespasmo (evitar em asmáticos)',
      'Náuseas, diarreia, extremidades frias',
    ],
    contraindications: ['BAV de II ou III grau', 'Bradicardia', 'Hipotensão', 'Asma', 'Choque cardiogênico'],
  },

  {
    id: 'carvedilol',
    name: 'Carvedilol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador não seletivo (α1, β1 e β2) de 3ª geração. Útil na hipertensão e na ICC moderada e grave (↓ mortalidade, melhora FE e classe funcional). Pacientes com asma: preferir metoprolol. Iniciar apenas no paciente estável.',
    brands: [
      'Coreg (GSK) / Cardibet / Cardilol — comprimidos 3,125 / 6,25 / 12,5 / 25 mg',
      'Carvedilol (genérico) — comprimidos 3,125 / 6,25 / 12,5 / 25 mg',
      'Mandar formular solução oral 1 mg/mL (30 mL)',
    ],
    presentations: [
      { label: 'Comprimido 3,125 mg' },
      { label: 'Comprimido 6,25 mg' },
      { label: 'Comprimido 12,5 mg' },
      { label: 'Comprimido 25 mg' },
    ],
    doses: [
      {
        group: 'Crianças — ICC',
        items: [{ label: 'Oral', value: 'Iniciar 0,1 mg/kg/dia ÷ 2 (máx 6,25 mg/dose); aumentar a cada 2 a 3 semanas. Dose usual: 0,1 a 1 mg/kg/dia ÷ 2 a 3. Máximo 50 mg/dia ÷ 2' }],
      },
      {
        group: 'Crianças — Hipertensão',
        items: [{ label: 'Oral', value: 'Dose máxima: 1 mg/kg/dia ou 25 mg × 2. Formular doses para < 30 kg' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 6,25 mg × 2; dobrar a cada 2 semanas até máximo 25 mg × 2 (máximo 100 mg/dia)' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [{ label: 'Oral', value: '25 a 50 mg × 2' }],
      },
      {
        group: 'Adultos — Arritmias',
        items: [{ label: 'Oral', value: '3,125 a 25 mg/dia ÷ 1; ajustar semanalmente. Dose usual: 12,5 mg/dia ÷ 1' }],
      },
    ],
    preparation: 'Reduzir dose se FC < 55 bpm. Insuficiência renal grave: não recomendado.',
    sideEffects: [
      'Bradicardia, hipotensão ortostática, piora de ICC, edema',
      'Cefaleia, tontura, fadiga, distúrbios do sono, insônia',
      'Broncoespasmo',
      'Náuseas, diarreia, vômitos',
      'Impotência, hiperglicemia, aumento de transaminases',
      'Trombocitopenia, leucopenia, aplasia medular',
      'Stevens-Johnson',
    ],
    contraindications: [
      'BAV de II ou III grau',
      'ICC grave que exige inotropismo',
      'Choque cardiogênico',
      'Bradicardia grave',
      'Asma ou broncoespasmo grave',
      'Hipotensão grave',
    ],
  },

  {
    id: 'esmolol',
    name: 'Esmolol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador de ação ultrarápida. Antiarrítmico classe II. Útil na taquicardia supraventricular, flutter ou fibrilação atrial. Efeito: início 1 a 2 minutos.',
    brands: ['Brevibloc (Cristália) — ampola 10 mL: 250 mg/mL e ampola 10 mL: 10 mg/mL'],
    presentations: [{ label: 'Ampola 10 mL — 250 mg/mL' }, { label: 'Ampola 10 mL — 10 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Emergência hipertensiva / arritmia',
        items: [{ label: 'Bolus + infusão', value: 'Bolus inicial 100 a 500 µg/kg em 1 a 2 min; infusão 50 a 100 µg/kg/min. Ajustar a cada 5 a 10 min' }],
      },
      {
        group: 'Crianças — Crise tireotóxica',
        items: [{ label: 'Bolus', value: '500 µg/kg; infusão 0,5 a 250 µg/kg/min' }],
      },
      {
        group: 'Adultos — Emergências (arritmia, hipertensão, crise tireotóxica)',
        items: [{ label: 'Protocolo escalonado', value: 'Bolus 100 a 500 µg/kg em 1 min; infusão 25 a 50 µg/kg/min por 4 min. Se insuficiente: bolus 500 µg/kg + infusão 100 µg/kg/min; repetir até efeito. Manter 50 a 300 µg/kg/min' }],
      },
      {
        group: 'Adultos — IAM (arritmia, hipertensão)',
        items: [{ label: 'Bolus + infusão', value: 'Bolus 100 µg/kg/min; infusão 50 µg/kg/min; titular até máximo 300 µg/kg/min' }],
      },
      {
        group: 'Adultos — Arritmias',
        items: [{ label: 'EV', value: '500 µg/kg bolus (1 min); infusão 50 a 200 µg/kg/min (coronariopatia) ou 30 a 50 µg/kg/min (outras arritmias). Ajustar a cada 5 a 10 min' }],
      },
    ],
    preparation: 'Diluir para 10 mg/mL em SGI (não usar SF). Administrar lentamente em 30 s. Nunca usar a ampola de 250 mg/mL sem diluir. Interromper se hipotensão grave. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Hipotensão, bradicardia, BAV',
      'Náuseas, vômitos',
      'Broncoespasmo',
    ],
    contraindications: ['BAV de II ou III grau', 'Hipotensão', 'Asma', 'Bradicardia', 'Choque cardiogênico'],
  },

  {
    id: 'labetalol',
    name: 'Labetalol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'Bloqueador α1 e β. Não disponível no Brasil (Trandate — EUA). Efeito: início 5–10 min; pico 15 min; duração 2–4 horas.',
    brands: ['Trandate (EUA) — ampola 4/20/40 mL: 5 mg/mL; comprimidos 100 e 200 mg (não disponível no Brasil)'],
    presentations: [{ label: 'Ampola 5 mg/mL (EUA)' }, { label: 'Comprimido 100 e 200 mg (EUA)' }],
    doses: [
      {
        group: 'Crianças > 1 ano — Urgência/emergência hipertensiva',
        items: [{ label: 'EV', value: 'Dose inicial 0,25 a 1 mg em 2 min (máx 40 mg/dose); infusão titulada até máx 3 mg/kg/hora; ou bolus repetidos 0,2 mg/dose' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: '100 a 400 mg × 2' }],
      },
      {
        group: 'Adultos — Emergência hipertensiva',
        items: [{ label: 'EV', value: 'Dose inicial 10 a 20 mg em 2 min. Bolus adicionais 40 a 80 mg a cada 10 min. Dose máxima acumulada: 300 mg' }],
      },
    ],
    preparation: 'Diluir para 1 mg/mL em SGI (200 mg em 160 mL de diluente). Manter paciente sentado por várias horas após a dose. Insuficiência hepática: 50% da dose.',
    sideEffects: [
      'Hipotensão excessiva, hipotensão ortostática, BAV, bradicardia',
      'Broncoespasmo, náuseas, vômitos',
      'Erupção cutânea',
    ],
    contraindications: ['Asma', 'DPOC', 'BAV de II ou III grau', 'Choque cardiogênico', 'ICC descompensada'],
  },

  {
    id: 'metoprolol',
    name: 'Metoprolol',
    suffix: 'Tartarato / Succinato',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador cardioseletivo (β1). Pico do efeito anti-hipertensivo em 1 a 2 semanas. Succinato: 1 vez ao dia. Tartarato: até 4 vezes ao dia. A diferença de preço entre as formulações é grande — explicar ao paciente.',
    brands: [
      'Tartarato: Lopressor (Novartis) / Seloken (AstraZeneca) — comprimidos 100 mg; ampola 5 mL: 1 mg/mL',
      'Succinato: Selozok (AstraZeneca/Medley) — comprimidos LP 25 / 50 / 100 mg',
      'Selopress Zok (Succinato + HCT) — comprimidos 47,5 + 12,5 mg',
    ],
    presentations: [
      { label: 'Comprimido 100 mg (tartarato)' },
      { label: 'Comprimido LP 25 / 50 / 100 mg (succinato)' },
      { label: 'Ampola 5 mL — 1 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [
          { label: 'Tartarato', value: 'Iniciar 1 a 2 mg/kg/dia ÷ 2 (máx 25 mg/dose); ajustar a cada 2 semanas. Dose máxima: 6 mg/kg/dia ou 200 mg/dia' },
          { label: 'Succinato (≥ 6 anos)', value: 'Iniciar 1 mg/kg/dia ÷ 1 (50 mg/dia máx). Dose máxima: 2 mg/kg/dia ou 200 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Tartarato', value: 'Iniciar 50 mg × 2; ajustar. Dose habitual: 100 a 200 mg/dia ÷ 1 a 2' },
          { label: 'Succinato', value: 'Iniciar 25 a 50 mg/dia ÷ 1; ajustar a cada 2 a 4 semanas' },
        ],
      },
      {
        group: 'Adultos — Emergência hipertensiva',
        items: [{ label: 'EV', value: '5 mg/dose repetida até 3 vezes a cada 10 min' }],
      },
      {
        group: 'Adultos — Angina',
        items: [{ label: 'Tartarato', value: '50 a 300 mg/dia × 2. Succinato: iniciar 100 mg/dia ÷ 1. Dose máxima: 400 mg/dia' }],
      },
      {
        group: 'Adultos — ICC estável',
        items: [{ label: 'Succinato', value: 'Iniciar 12,5 mg/dia ÷ 1; ajustar a cada 2 semanas até máximo 200 mg/dia' }],
      },
      {
        group: 'Adultos — Arritmia / FA / FV',
        items: [{ label: 'EV', value: '5 mg em 5 min; repetir até 2 vezes a cada 5 min. Oral: 50 a 400 mg/dia ÷ 2 (tartarato) ou 1 × dia (succinato)' }],
      },
      {
        group: 'Adultos — Profilaxia de enxaqueca',
        items: [{ label: 'Oral', value: '50 a 200 mg/dia ÷ 1 a 2' }],
      },
    ],
    preparation: 'Comprimido simples (tartarato) e LP (succinato) podem ser partidos ao sulco. Comprimido revestido (tartarato) não pode ser partido. Melhor tomar longe das refeições. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Bradicardia, hipotensão, BAV, piora de ICC',
      'Fadiga, tontura, depressão, pesadelos, insônia',
      'Broncoespasmo (evitar em asmáticos)',
      'Extremidades frias, claudicação',
      'Náuseas, diarreia',
    ],
    contraindications: ['BAV de II ou III grau', 'Bradicardia grave', 'Choque cardiogênico', 'Asma grave'],
  },

  {
    id: 'nebivolol',
    name: 'Nebivolol',
    suffix: 'Cloridrato de nebivolol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador β1-seletivo de terceira geração.',
    brands: ['Neblet / Lobeat — comprimidos 5 mg', 'Cloridrato de nebivolol (genérico) — comprimidos 5 mg'],
    presentations: [{ label: 'Comprimido 5 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: '', value: 'Segurança e dose não estabelecidas' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Dose habitual: 5 mg/dia. Aumentar progressivamente a cada 2 semanas. Dose usual: 5 a 10 mg/dia. Dose máxima: 40 mg/dia' }],
      },
      {
        group: 'Adultos — ICC estável',
        items: [{ label: 'Oral', value: 'Iniciar 1,25 mg/dia ÷ 1; ajustar a cada 1 a 2 semanas até 10 mg/dia' }],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: '50% da dose' },
      { label: 'Insuficiência hepática moderada', value: '50% da dose' },
    ],
    sideEffects: [
      'Cefaleia, vertigem, fadiga, tontura, sonolência',
      'Diarreia, constipação',
      'Piora de edema e dispneia',
      'Bradicardia, hipotensão, síncope, angina, arritmia ventricular',
    ],
    contraindications: ['BAV de II ou III grau', 'Hipotensão', 'Asma', 'Choque cardiogênico'],
  },

  {
    id: 'pindolol',
    name: 'Pindolol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador não seletivo (β1 e β2).',
    brands: [
      'Visken — comprimidos 5 e 10 mg',
      'Viskaldix (Pindolol + Clopamida, Novartis) — comprimidos 10 + 5 mg',
    ],
    presentations: [{ label: 'Comprimido 5 mg' }, { label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 5 mg × 2; ajustar gradualmente a cada 3 a 4 semanas. Dose usual: 10 a 40 mg/dia' }],
      },
      {
        group: 'Adultos — Coronariopatia',
        items: [{ label: 'Oral', value: 'Iniciar 5 mg/dia ÷ 1; dose usual 5 mg × 2' }],
      },
      {
        group: 'Adultos — Depressão (auxiliar)',
        items: [{ label: 'Oral', value: '2,5 a 5 mg × 3 (geralmente associado a ISRS)' }],
      },
    ],
    preparation: 'O comprimido não deve ser partido ou mastigado. Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Insônia, tontura, pesadelos, nervosismo, ansiedade, cansaço, fadiga, cefaleia',
      'Dor torácica, edema, bradicardia, hipotensão sintomática',
      'Náuseas, erupção cutânea, artralgia, mialgia',
    ],
    contraindications: ['BAV de II ou III grau', 'Hipotensão', 'Asma', 'Bradicardia', 'Choque cardiogênico'],
  },

  {
    id: 'propranolol',
    name: 'Propranolol',
    suffix: 'Cloridrato de propranolol',
    category: 'anti-hipertensivos-betabloqueadores',
    observations: 'β-bloqueador não seletivo (β1 e β2). Antiarrítmico classe II. Antiangina, antienxaqueca. Bloqueia manifestações cardiovasculares de ansiedade e fobias. Betabloqueadores não são primeira escolha na hipertensão pediátrica. Nível sérico terapêutico: 30 a 100 ng/mL.',
    brands: [
      'Inderal — comprimidos 40 e 80 mg',
      'Amprax / Propol / Propranolol (Farmanguinhos, FURP) — comprimidos 40 e 80 mg',
      'Propranolol + HCT (Tenadern) — comprimidos 40 + 25 mg, 80 + 12,5 mg, 80 + 25 mg',
      'Não existem preparações parenterais no Brasil',
    ],
    presentations: [{ label: 'Comprimido 10 mg' }, { label: 'Comprimido 40 mg' }, { label: 'Comprimido 80 mg' }],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [{ label: 'Oral', value: '1 a 2 mg/kg/dia ÷ 2 a 3; ajustar a cada 3 a 7 dias. Dose máxima: 8 mg/kg/dia ou 640 mg/dia' }],
      },
      {
        group: 'Crianças — Arritmias',
        items: [
          { label: 'EV', value: '0,01 a 0,15 mg/kg/dose em 10 min; repetir a cada 6 a 8 h se necessário' },
          { label: 'Oral', value: 'Iniciar 0,5 a 1 mg/kg/dia ÷ 3 a 4; ajustar. Dose usual: 1 a 4 mg/kg/dia. Dose máxima: 16 mg/kg/dia' },
        ],
      },
      {
        group: 'Crianças — Profilaxia enxaqueca',
        items: [{ label: 'Oral', value: '0,5 a 3 mg/kg ÷ 2 a 3; ≥ 7 anos: iniciar 10 mg/dia, aumentar 10 mg/semana' }],
      },
      {
        group: 'Crianças — Crise de hipóxia (Fallot)',
        items: [{ label: 'Oral', value: 'Iniciar 1 mg/kg/dia × 4; aumentar 1 mg/kg/dia até máximo 5 mg/kg/dia' }],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [{ label: 'Oral', value: 'Iniciar 60 a 80 mg/dia ÷ 2 a 3; ajustar. Dose usual: 120 a 240 mg/dia. Dose máxima: 320 mg/dia ÷ 2 a 4' }],
      },
      {
        group: 'Adultos — Arritmia (extrassístole/pós-IAM)',
        items: [{ label: 'EV', value: '0,1 a 0,15 mg/kg em 5 a 10 min (máx 8 mg); depois oral 10 a 40 mg × 4' }],
      },
      {
        group: 'Adultos — TSV paroxística',
        items: [{ label: 'EV', value: '1 mg/dose lento; repetir até 2 vezes (intervalos 2 a 3 min)' }],
      },
      {
        group: 'Adultos — FA',
        items: [{ label: 'EV', value: '0,5 a 1 mg/dose; repetir a cada 2 a 5 min. Dose máxima: 5 mg' }],
      },
      {
        group: 'Adultos — Tireotoxicose',
        items: [{ label: 'EV', value: 'Início 0,5 a 1 mg com monitoramento; depois 1 a 3 mg EV lento (15 min). Oral: 40 mg × 3 a 4' }],
      },
      {
        group: 'Adultos — Profilaxia enxaqueca',
        items: [{ label: 'Oral', value: 'Iniciar 80 mg/dia ÷ 2 a 4; aumentar 20 a 40 mg a cada 3 a 4 semanas até 160 a 240 mg/dia' }],
      },
      {
        group: 'Adultos — Profilaxia varizes esofagianas',
        items: [{ label: 'Oral', value: 'Iniciar 20 mg/dia × 2; titular até maior dose tolerada (FC 55 a 60 bpm)' }],
      },
    ],
    preparation: 'Infusão EV: mínimo 1 mg/min. Suspensão gradual (pelo menos 2 semanas). Insuficiência renal: não exige ajuste.',
    sideEffects: [
      'Bradicardia, hipotensão, BAV, ICC, fenômeno de Raynaud',
      'Fadiga, tontura, depressão, pesadelos, distúrbios do sono',
      'Broncoespasmo, mascaramento da hipoglicemia em diabéticos',
      'Náuseas, vômitos, diarreia, constipação',
      'Impotência, extremidades frias',
    ],
    contraindications: ['BAV de II ou III grau', 'Asma', 'Bradicardia', 'Choque cardiogênico', 'ICC descompensada'],
  },
];