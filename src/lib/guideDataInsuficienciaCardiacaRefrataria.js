// Tratamento da Insuficiência Cardíaca Refratária

export const insuficienciaCardiacaRefratariaDrugs = [
  {
    id: 'eplerenona',
    name: 'Eplerenona',
    category: 'insuficiencia-cardiaca-refrataria',
    observations: 'Antagonista da aldosterona análogo da espironolactona. Reduz risco de morte cardiovascular principalmente em infarto recente (3 a 14 dias). Mais seletivo que espironolactona, com menos efeitos adversos, porém risco de hiperpotassemia maior. Efeito completo após 4 semanas. Não dialisável.',
    brands: ['Inspra (EUA) — Comprimidos: 25 e 50 mg'],
    presentations: [{ label: 'Comprimido 25 mg' }, { label: 'Comprimido 50 mg' }],
    doses: [
      {
        group: 'Adultos — ICC crônica pós-infarto',
        items: [
          { label: 'Início', value: 'Iniciar 25 mg/dia; ajustar a cada 4 semanas conforme resposta e potássio sérico até máximo 50 mg' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Uso contraindicado' }],
    sideEffects: ['Tontura, fadiga', 'Diarreia, dor abdominal', 'Hiperpotassemia sérica', 'Hipertrigliceridemia, hipercolesterolemia, hiponatremia, náuseas', 'Angina, tosse, sintomas de resfriado', 'Ginecomastia'],
    contraindications: ['Creatinina sérica > 2,5 mg/dL', 'Potássio sérico > 5,5 mEq/L', 'Não usar com fortes inibidores CYP3A4 (claritromicina, itraconazol, ritonavir)', 'Não usar com diuréticos poupadores de potássio'],
  },

  {
    id: 'levosimendana',
    name: 'Levosimendana',
    category: 'insuficiencia-cardiaca-refrataria',
    observations: 'Sensibilizador de canais de cálcio. Efeito inotrópico e vasodilatador. Promissora em pré-operatório de cirurgia cardíaca e choque séptico refratário. Nível sérico ótimo: 150 a 250 ng/mL. Monitorar ECG durante infusão. Não misturar com furosemida na mesma seringa.',
    brands: ['Simdax (Orion) — Amp. 5 mL: 2,5 mg/mL'],
    presentations: [{ label: 'Ampola 5 mL — 2,5 mg/mL' }],
    doses: [
      {
        group: 'Adultos — ICC aguda grave refratária (CTI)',
        items: [
          { label: 'Bolus inicial', value: '12 a 24 µg/kg em 10 minutos' },
          { label: 'Infusão contínua', value: '0,05 a 0,1 µg/kg/minuto por 24 a 48 horas; ajustar conforme resposta' },
          { label: 'Diluição', value: '10 mL da ampola a 2,5 mg/mL em 500 mL SG 5% = solução 0,1 mg/mL' },
          { label: 'Correspondência infusão', value: '0,5 µg/kg/minuto = 0,15 mL/kg/hora' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Ajustes por ClCr', value: 'ClCr 50: 0,43; 40: 0,36; 30: 0,33; 20: 0,29; 10: 0,23; <5: 0,20 µg/kg/min' },
    ],
    sideEffects: [
      'Cefaleia, tontura, vertigem, trombocitopenia',
      'Arritmias ventriculares e supraventriculares, fibrilação atrial, palpitação',
      'Hipotensão (sobretudo em hipovolêmicos após diurético), taquicardia, piora de ICC',
      'Hipopotassemia, hemorragia',
      'Náuseas, vômito, dor abdominal, anorexia',
      'Febre, tremores, hepatotoxicidade',
      'Broncoespasmo, erupção cutânea',
    ],
    contraindications: ['Estenose subaórtica ou pulmonar grave', 'Infarto agudo', 'Cardiopatia hipertrófica'],
  },

  {
    id: 'milrinona',
    name: 'Milrinona',
    category: 'insuficiencia-cardiaca-refrataria',
    observations: 'Inibidor da fosfodiesterase com efeito inotrópico e vasodilatador. Escolha no tratamento de ICC grave com baixo débito e congestão. Melhora índice cardíaco, reduz pressão capilar pulmonar e resistência vascular. Mais potente e tolerado que amrinona. Evitar infusões > 48 h (pode aumentar mortalidade). Eficácia longo prazo questionável. Nível sérico ótimo: 150 a 250 ng/mL. Monitorar ECG. Não misturar com furosemida.',
    brands: ['Primacor (Abbott) — Amp. 10 mL: 1 mg/mL'],
    presentations: [{ label: 'Ampola 10 mL — 1 mg/mL' }],
    doses: [
      {
        group: 'Crianças — ICC, choque cardiogênico',
        items: [
          { label: 'Bolus inicial', value: '50 µg/kg em 15 a 30 minutos' },
          { label: 'Infusão contínua', value: '0,5 a 1 µg/kg/minuto; ajustar conforme resposta' },
          { label: 'Dose manutenção', value: '0,25 a 0,75 µg/kg/minuto' },
          { label: 'Observação', value: 'Monitorar hipotensão durante bolus; reverter com volume se necessário' },
        ],
      },
      {
        group: 'Adultos — ICC grave',
        items: [
          { label: 'Bolus inicial', value: '50 µg/kg em 10 minutos' },
          { label: 'Infusão contínua', value: '0,25 a 0,75 µg/kg/minuto; ajustar conforme resposta' },
          { label: 'Dose manutenção', value: '0,125 a 0,75 µg/kg/minuto' },
          { label: 'Dose máxima', value: '1,13 µg/kg/minuto' },
          { label: 'Diluição', value: '10 mL da ampola 1 mg/mL em 100 mL SF ou SG 5% = 0,1 mg/mL' },
          { label: 'Correspondência', value: '0,5 µg/kg/min = 0,15 mL/kg/hora' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Ajustes por ClCr', value: 'ClCr 50: 0,43; 40: 0,36; 30: 0,33; 20: 0,29; 10: 0,23; <5: 0,20 µg/kg/min' },
    ],
    sideEffects: [
      'Hipovolemia excessiva, desidratação, hipotensão ortostática, azotemia pré-renal, choque',
      'Hipopotassemia, hiponatremia',
      'Arritmias ventriculares, taquicardia, palpitação',
      'Cefaleia, tontura',
      'Tremores, febre',
    ],
    contraindications: [],
  },

  {
    id: 'nesiritida',
    name: 'Nesiritida',
    category: 'insuficiencia-cardiaca-refrataria',
    observations: 'Forma recombinante do peptídeo natriurético tipo B (BNP) humano recombinante. Uso exclusivamente hospitalar e por cardiologistas experientes. Segurança questionada. Piora a função renal nas doses preconizadas.',
    brands: ['Natrecor (EUA) — Fr. Amp.: 1,5 mg'],
    presentations: [{ label: 'Frasco-ampola 1,5 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [{ label: 'Observação', value: 'Poucos estudos experimentais; usar mesmas doses para adultos' }],
      },
      {
        group: 'Adultos — ICC aguda descompensada grave',
        items: [
          { label: 'Bolus', value: '2 µg/kg' },
          { label: 'Infusão contínua', value: '0,01 µg/kg/minuto (paciente 60 kg = 6 mL/h)' },
          { label: 'Dose máxima', value: '0,03 µg/kg/minuto' },
          { label: 'Diluição', value: '1 amp. (1,5 mg) em 5 mL SGi ou SF; rediluir em 89 mL = 6 mcg/mL' },
          { label: 'Observação', value: 'Não agitar frasco; apenas girar até diluição estável. Usar apenas pacientes hospitalizados selecionados. Monitorar PA continuamente.' },
        ],
      },
    ],
    sideEffects: [
      'Hipotensão é o principal problema limitante (se ocorrer: interromper e corrigir com aminas e reposição cuidadosa volume)',
      'Taquicardia ventricular, extrassistolia ventricular, cefaleia, náusea, dor abdominal',
      'Piora da função renal',
    ],
    contraindications: ['Hipotensão sistólica < 90 mmHg', 'Choque cardiogênico', 'Evidência de baixo débito hipovolêmico'],
  },
];

export const digitalicos = [
  {
    id: 'deslanosideo',
    name: 'Deslanosídeo',
    suffix: 'Lanatosídeo C',
    category: 'digitalicos',
    observations: 'Digitálico de ação curta. Eficácia semelhante à digoxina; preferido em emergências por início mais rápido. Início: 5-10 min. Duração: 4 h. Não recomendado associar a cálcio EV.',
    brands: ['Deslanol — Amp. 2 mL: 0,2 mg/mL', 'Descontinuado: Cedilanid'],
    presentations: [{ label: 'Ampola 2 mL — 0,2 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Dose de digitalização',
        items: [
          { label: 'RN pré-termo, neonatos, lactentes (↓ função renal)', value: '0,02 a 0,022 mg/kg' },
          { label: '2 semanas a 3 anos', value: '0,025 mg/kg' },
          { label: '> 3 anos', value: '0,0225 mg/kg' },
          { label: 'Administração', value: 'IM ou EV lento em 2-3 doses iguais com 3-4 h intervalo' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose digitalização rápida', value: 'EV lento: 0,4 a 0,8 mg 1ª dose; depois 0,2 a 0,4 mg a cada 2-4 h' },
          { label: 'Dose máxima', value: '2 mg/dia. Manutenção por via oral 12 h depois' },
        ],
      },
    ],
    sideEffects: [
      'Intoxicação: convulsões, distúrbios de frequência/condução/ritmo',
      'Bradicardia acentuada, parada cardíaca',
      'ECG: rastreamento ST com inversão pré-terminal onda T',
      'Monitorar ECG; corrigir hipopotassemia e hipomagnesemia se ocorrerem',
    ],
    contraindications: ['BAV II e III grau', 'Taquicardia ventricular', 'Bradicardia sinusal'],
  },

  {
    id: 'digoxina',
    name: 'Digoxina',
    category: 'digitalicos',
    observations: 'Glicosídeo cardíaco. Ação prolongada (6 h); não é escolha quando há necessidade de resposta rápida. Não apresenta efeito inotrópico negativo. Adequada para ICC. Dose deve ser ajustada conforme nível sérico para evitar intoxicação. Nível sérico terapêutico: 0,5 a 2 ng/mL. Não dialisável.',
    brands: [
      'Cardcor (Teuto) — Comprimidos: 0,25 mg',
      'Carditonit (Sarsa) — Comprimidos: 0,25 mg',
      'G Digoxina — Comprimidos: 0,25 mg; Élixir (60 mL): 50 µg/mL',
    ],
    presentations: [{ label: 'Comprimido 0,25 mg' }, { label: 'Élixir 50 µg/mL' }],
    doses: [
      {
        group: 'RN e lactentes — Dose manutenção (via oral)',
        items: [
          { label: 'RN pré-termo', value: '5 a 7,5 µg/kg/dia' },
          { label: 'RN a termo', value: '10 a 15 µg/kg/dia' },
          { label: '< 2 anos', value: '10 a 15 µg/kg/dia' },
          { label: '2 a 5 anos', value: '10 a 15 µg/kg/dia' },
          { label: '6 a 10 anos', value: '8 a 12 µg/kg/dia' },
          { label: '> 10 anos', value: '2,5 a 5 µg/kg/dia' },
        ],
      },
      {
        group: 'Adultos — FA crônica',
        items: [{ label: 'Oral', value: '0,125 a 0,25 mg/dia ÷ 1. Máx: 0,25 mg × 2. Idosos/disfunção: 0,125 mg/dia' }],
      },
      {
        group: 'Adultos — Cardioversão FA/flutter',
        items: [{ label: 'EV', value: '0,25 mg/dose; repetir até máx 1,5 mg em 24 h' }],
      },
      {
        group: 'Adultos — TSV',
        items: [
          { label: 'Oral', value: 'Iniciar 0,15 mg; ajustar para 0,125 a 0,25 mg/dose a cada 6-8 h até 8-12 µg/kg/dia. Manutenção: 0,125 a 0,25 mg/dia ÷ 1' },
          { label: 'EV', value: 'Bolus 0,25 a 0,5 mg; bolus adic. 0,25 mg até efeito/8-12 µg/kg/dia. Manutenção: 2,4 a 3,6 µg/kg/dia ÷ 1' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Se dose inicial necessária', value: 'Reduzir 50%' },
      { label: 'ClCr 10 a 50 mL/min', value: '25 a 75% da dose manutenção adequada' },
      { label: 'ClCr < 10 mL/min', value: '10 a 25% da dose manutenção a cada 48 h. Não dialisável' },
    ],
    sideEffects: [
      'Tontura, depressão, cefaleia, letargia, neuralgia, confusão, agitação, distúrbio humor, alucinações, ansiedade, febre, fraqueza',
      'Fotofobia, visão borrada, confusão de cor, distúrbio refração (borda amarelada, diplopia, raramente cegueira temporária)',
      'Anorexia, náuseas, vômito, dor abdominal, diarreia',
      'Erupção cutânea, prurido, urticária, edema angioneurótico, edema laríngeo',
      'Ginecomastia, trombocitopenia, eosinofilia',
      'Arritmias (bradicardia sinusal, TSV, BAV III, bigeminismo, trigeminismo, extrassistoles, assistolia, disfunção hepática, aumento PR > 0,14 s, edema facial, palpitações, isquemia)',
    ],
    contraindications: [],
  },
];