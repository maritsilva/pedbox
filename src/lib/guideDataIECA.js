export const iecaDrugs = [
  {
    id: 'benazepril',
    name: 'Benazepril',
    category: 'anti-hipertensivos-ieca',
    observations: 'Inibidor da ECA de 2ª geração (não é mais eficaz que os outros).',
    brands: [
      'Lotensin (Novartis) — comprimidos revestidos 5 e 10 mg',
      'Lotensin H (+ Hidroclorotiazida) — comprimidos 5 + 6,25 mg e 10 + 12,5 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 5 mg' },
      { label: 'Comprimido revestido 10 mg' },
    ],
    doses: [
      {
        group: 'Crianças acima de 6 anos — Hipertensão',
        items: [
          { label: 'Início', value: '0,2 mg/kg/dia ÷ 1 (máximo 10 mg/dia)' },
          { label: 'Manutenção', value: '0,1 a 0,6 mg/kg/dia. Dose máxima: 40 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Início', value: '5 mg/dia ÷ 1. Ajustar a cada 1 a 2 semanas se necessário' },
          { label: 'Dose habitual', value: '20 a 40 mg/dia ÷ 1 a 2. Dose máxima: 40 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Tontura ao levantar, piora de angina, cefaleia, fadiga, sonolência',
      'Náusea, vômitos',
      'Hiperpotassemia, hiperuricemia, aumento de creatinina, disfunção renal',
    ],
    contraindications: [],
  },

  {
    id: 'captopril',
    name: 'Captopril',
    category: 'anti-hipertensivos-ieca',
    observations: 'Inibidor da enzima conversora de angiotensina (IECA) de 1ª geração. Além do efeito hipotensor, os IECAs têm efeitos favoráveis sobre a hemodinâmica, sobre a função renal e sobre a retenção hídrica induzida pela aldosterona. Prolonga sobrevida na ICC grave. Efeito: início 15 min; pico 60–90 min; duração 4–6 horas.',
    brands: [
      'Capoten (BMS) — comprimidos 25 e 50 mg',
      'Captotrineo / Capox / Captocard / Captomal / Captomed — comprimidos 25 e 50 mg',
      'Captopril (Farmanguinhos, FUNED, FURP, LAFEPE, LFM, Labter) — comprimidos 12,5 e 25 mg',
      'Mandar formular solução a 5 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 12,5 mg' },
      { label: 'Comprimido 25 mg' },
      { label: 'Comprimido 50 mg' },
      { label: 'Solução oral 5 mg/mL (manipulada)' },
    ],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [
          { label: 'Neonatos', value: 'Iniciar 0,01 a 0,15 mg/kg/dose × 1 a 3. Manutenção: 0,3 a 2 mg/kg/dia' },
          { label: 'Lactentes', value: 'Iniciar 0,05 mg/kg/dose × 1 a 4. Manutenção: 0,5 a 3 mg/kg/dia. Dose máxima: 6 mg/kg/dia' },
          { label: 'Crianças', value: 'Iniciar 0,3 a 0,5 mg/kg/dose × 3. Titular até máximo de 6 mg/kg/dia ou 450 mg/dia' },
        ],
      },
      {
        group: 'Crianças — Insuficiência cardíaca',
        items: [
          { label: 'RN prematuros', value: '0,01 a 0,4 mg/kg/dose ÷ 1 a 4' },
          { label: 'RN a termo', value: 'Iniciar 0,02 a 0,1 mg/kg. Dose usual: 0,5 a 2 mg/kg/dia ÷ 1 a 3' },
          { label: 'Crianças', value: 'Iniciar 0,15 a 0,5 mg/dose. Dose usual: 2,5 a 3 mg/kg/dia ÷ 1 a 4' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Dose inicial', value: '25 mg/dose × 1 a 2. Ajustar a cada 1 a 2 semanas' },
          { label: 'Dose habitual', value: '150 a 200 mg/dia ÷ 2 a 3. Dose máxima: 450 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Hipertensão aguda',
        items: [
          { label: 'Dose', value: '25 mg (pode ser sublingual). Meta: reduzir até 25% na 1ª hora; < 160/110 em 2 a 6 horas; < 135/85 em 24–48 horas' },
        ],
      },
      {
        group: 'Adultos — Insuficiência cardíaca',
        items: [
          { label: 'Início', value: '6,25 mg × 3 no 1º dia; aumentar para 25 mg/dia ÷ 2' },
          { label: 'Titular a cada 7 a 14 dias', value: 'Dose máxima: 150 mg/dia ÷ 3' },
        ],
      },
      {
        group: 'Adultos — Nefropatia diabética',
        items: [
          { label: 'Dose', value: '25 mg × 3. Tomar 1 hora antes ou 2 horas após as refeições, com copo de água' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '75% da dose a cada 12 a 24 horas' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose a cada 12 horas' },
      { label: 'Diálise', value: '50% da dose' },
    ],
    sideEffects: [
      'Hipotensão exagerada com a primeira dose (síncope, fraqueza, tontura)',
      'Tosse seca e contínua > 3 semanas (mais frequente que os demais IECAs)',
      'Proteinúria, piora da função renal com aumento de creatinina (tolerar até 30% de aumento)',
      'Dor torácica, hipotensão postural, taquicardia',
      'Neutropenia (risco maior na insuficiência renal)',
      'Erupção cutânea maculopapular e pruriginosa (pode desaparecer sem suspender o medicamento)',
      'Angioedema, cefaleia, fadiga, insônia',
      'Colestase, hepatite fulminante (rara, mas potencialmente fatal)',
      'Hiperpotassemia (potencializa efeito da espironolactona)',
      'Anti-inflamatórios não hormonais bloqueiam o efeito dos IECAs',
    ],
    contraindications: [
      'Hipertensão renovascular com estenose bilateral ou em rim único',
      'Rim transplantado com possibilidade de estenose da artéria renal anastomosada',
      'Mulheres em idade fértil (teratogênico: oligoidrâmnio, hipoplasia pulmonar, displasia tubular renal)',
      'Antecedente de angioedema relacionado a IECA',
    ],
  },

  {
    id: 'cilazapril',
    name: 'Cilazapril',
    category: 'anti-hipertensivos-ieca',
    observations: 'IECA de 2ª geração. Mais potente e de ação mais prolongada. Efeito: início 1 h; pico 3–7 h; duração 24 h.',
    brands: ['Vascase (Roche) — comprimidos revestidos 5 mg'],
    presentations: [{ label: 'Comprimido revestido 5 mg' }],
    doses: [
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Início', value: '1 mg/dia. Máximo: 10 mg/dia. Evitar em idosos' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Cefaleia, vertigens, fadiga, tontura',
      'Hipotensão exagerada',
      'Diarreia, náuseas, vômitos',
      'Erupção cutânea, eritema, tosse',
    ],
    contraindications: [],
  },

  {
    id: 'delapril',
    name: 'Delapril',
    category: 'anti-hipertensivos-ieca',
    observations: 'IECA de segunda geração.',
    brands: [
      'Delapril — comprimidos',
      'Hipertil (Delapril + Manidipino) — comprimidos 30 + 10 mg',
    ],
    presentations: [{ label: 'Comprimido 30 mg' }],
    doses: [],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'enalapril',
    name: 'Enalapril',
    suffix: 'Maleato de enalapril',
    category: 'anti-hipertensivos-ieca',
    observations: 'IECA de segunda geração. Mais bem tolerada que o captopril. Usada na hipertensão, na ICC e na disfunção assintomática do ventrículo esquerdo. Primeira escolha para ICC infantil. Os IECAs têm efeitos favoráveis sobre a hemodinâmica, função renal e retenção hídrica induzida pela aldosterona. Reduz proteinúria na síndrome nefrótica. Efeito oral: início 1 hora, dura até 24 horas. EV: início 15–60 minutos.',
    brands: [
      'Renitec (MSD) — comprimidos 5, 10 e 20 mg',
      'Enaplex — comprimidos 10 e 20 mg',
      'Angiopril / Enalabal / Enalamed / Enaprotec / Pressel / Renopril (Aché) / Savapress',
      'Vasotec IV (EUA) — ampola 1–2 mL: 1,25 mg/mL',
      'Enalapril + HCT: Malena HCT / Vasopril Plus — comprimidos 10 + 25 mg e 20 + 12,5 mg',
    ],
    presentations: [
      { label: 'Comprimido 5 mg' },
      { label: 'Comprimido 10 mg' },
      { label: 'Comprimido 20 mg' },
      { label: 'Ampola (enalaprilato) 1,25 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Hipertensão',
        items: [
          { label: 'Oral', value: 'Início 0,08 mg/kg/dia ÷ 1 a 2 (máx 5 mg). Ajustar a cada 7 a 14 dias. Dose máxima: 0,6 mg/kg/dia ou 40 mg/dia' },
        ],
      },
      {
        group: 'Crianças — Emergência hipertensiva',
        items: [
          { label: 'EV lento (5 min)', value: 'Iniciar 5 a 10 µg/kg/dose; ajustar até máx 1,25 mg/dose. Monitorar PA — risco de hipotensão e IRA, principalmente em neonatos' },
          { label: 'Infusão contínua', value: '0,2 a 0,8 µg/kg/min' },
        ],
      },
      {
        group: 'Crianças — Insuficiência cardíaca (> 2 anos)',
        items: [
          { label: 'Início', value: '0,1 mg/kg/dia ÷ 2. Ajustar até máximo de 0,5 mg/kg/dia ou 40 mg/dia ÷ 2' },
          { label: 'Dose usual', value: '0,2 a 0,5 mg/kg/dia ÷ 2' },
        ],
      },
      {
        group: 'Adultos — Hipertensão',
        items: [
          { label: 'Dose inicial', value: '5 a 10 mg/dia ÷ 1 (2,5 mg se estiver usando diurético)' },
          { label: 'Dose habitual', value: '20 mg/dia (entre 10 e 40 mg). Em idosos: 2,5 mg 2×/dia pode ser suficiente' },
        ],
      },
      {
        group: 'Adultos — Emergência hipertensiva (enalaprilato EV)',
        items: [
          { label: 'EV', value: '1,25 mg em 5 min, repetida a cada 6 a 8 horas. Se em uso de diurético: iniciar com metade da dose. Máx: 5 mg/dose × 4' },
        ],
      },
      {
        group: 'Adultos — Insuficiência cardíaca',
        items: [
          { label: 'Oral', value: 'Iniciar 5 mg/dia ÷ 2; aumentar a cada 3 a 7 dias. Dose habitual: 20 mg/dia ÷ 2. Dose máxima: 40 mg/dia' },
          { label: 'EV', value: 'Iniciar 1,25 mg a cada 6 horas; ajustar até 0,5 a 1 mg/dose a cada 6 horas (ICC instável ou IAM)' },
        ],
      },
    ],
    preparation: 'A dose venosa deve ser injetada lentamente em 5 minutos, sem diluir ou diluída até 25 µg/mL com SF. Usar dose inicial menor em pacientes hipovolêmicos ou em uso de diuréticos.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '75% da dose a cada 12 a 24 horas' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose a cada 24 horas' },
      { label: 'Diálise', value: '20 a 50%' },
    ],
    sideEffects: [
      'Tosse seca e contínua por mais de 3 semanas',
      'Náusea, diarreia',
      'Hipotensão exagerada, hipotensão postural, taquicardia, síncope',
      'Neutropenia (risco maior na IR e colagenoses), agranulocitose, anemia',
      'Contraturas musculares',
      'Erupção cutânea, angioedema (face, língua, lábios)',
      'Cefaleia, fadiga, insônia',
      'Colestase, hepatite fulminante (rara, mas potencialmente fatal)',
      'Disfunção renal transitória (tolerar até 30% de aumento da creatinina; valores maiores sugerem estenose de artéria renal)',
      'Impotência, hipoglicemia, hiperpotassemia',
      'Anti-inflamatórios não hormonais bloqueiam o efeito dos IECAs',
      'Hipotensão grave em prematuros (tratar com volume e dopamina)',
    ],
    contraindications: [],
  },
];