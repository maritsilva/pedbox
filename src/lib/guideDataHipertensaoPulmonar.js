// Tratamento da Hipertensão Pulmonar

export const hipertensaoPulmonarDrugs = [
  {
    id: 'alprostadil',
    name: 'Alprostadil',
    suffix: 'Prostaglandina E1',
    category: 'hipertensao-pulmonar',
    observations: 'Manter o canal arterial aberto em recém-nascidos enquanto se providencia cirurgia paliativa ou definitiva. Indicado em: transposição dos grandes vasos, atresia tricúspide, Ebstein, hipoplasia de VE, atresia e estenose pulmonar ± CIV, Fallot grave, ICC, coarctação de aorta crítica. Para hipertensão pulmonar: 20 a 200 ng/kg/minuto.',
    brands: [
      'Alproxy (Siam) — Amp. 2 mL: 500 µg',
      'Descontinuado: Befaprostadil',
    ],
    presentations: [{ label: 'Ampola 2 mL — 500 µg' }],
    preparation: 'Diluir 500 µg em 100 mL SGI ou SF (5 µg/mL): para infusão de 0,1 µg/kg/minuto, infundir a 1,2 mL/kg/hora (infusão bastante lenta). Para infusão mais rápida, fazer solução mais concentrada: 500 µg em 50 mL (10 µg/mL) ou 500 µg em 25 mL (20 µg/mL). Todo RN deve ter verificado o clamp do equipo para evitar refluxo. Certificar-se de ter material de intubação e reanimação por risco de apneia. Acesso venoso adicional para dar volume em caso de hipotensão.',
    observations_extra: 'Alerta: Pode piorar fisiopatologia de transposição com CIA restritiva, Fallot sem PCA, drenagem anômala total de veias pulmonares obstrutiva e HP do RN.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'ambrisentana',
    name: 'Ambrisentana',
    category: 'hipertensao-pulmonar',
    observations: 'Antagonista de endotelina A. Medicamento de alto custo; verificar disponibilidade local.',
    brands: ['Volibris (GSK) — Comprimido: 5 e 10 mg'],
    presentations: [{ label: 'Comprimido 5 mg' }, { label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Hipertensão pulmonar', value: 'Iniciar 5 mg/dia ÷ 1. Após 4 dias, conforme tolerância e necessidade, aumentar até máximo de 10 mg/dia ÷ 1' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: ['Cefaleia, rubor, palpitação, congestão nasal, náuseas, tonturas, dor abdominal, constipação', 'Edema, retenção hídrica, aumento de transaminases'],
    contraindications: ['Gravidez (não usar na fibrose pulmonar idiopática)', 'Insuficiência hepática moderada a grave'],
  },

  {
    id: 'bosentana',
    name: 'Bosentana',
    category: 'hipertensao-pulmonar',
    observations: 'Antagonista de endotelina. Não descontinuar abruptamente. Risco teratogênico. Monitorar aminotransferases.',
    brands: ['Tracleer (Actelion) — Comprimidos revestidos 62,5 e 125 mg', 'G Bosentana — Comprimidos revestidos 62,5 e 125 mg'],
    presentations: [{ label: 'Comprimido revestido 62,5 mg' }, { label: 'Comprimido revestido 125 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '10 a 20 kg', value: 'Iniciar 31,25 mg/dia ÷ 1; aumentar para 31,25 mg × 2 após 4 semanas' },
          { label: '20 a 40 kg', value: 'Metade da dose do adulto' },
        ],
      },
      {
        group: 'Adultos — Hipertensão pulmonar',
        items: [
          { label: 'Oral', value: '31,25 mg × 2. Após 4 semanas, dobrar a dose. Se associa à ritonavir, iniciar 62,5 mg/dia ou em dias alternados' },
          { label: 'Dose habitual', value: '125 mg × 2 (> 40 kg). > 40 kg: 125 mg × 2' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Melhor evitar' }],
    sideEffects: ['Disfunção hepática (interromper e não reiniciar)', 'Aumento de transaminases, cefaleia, rinofairingite', 'Hipotensão, edema, anemia', 'Pode atenuar função hepatotóxica durante tratamento'],
    contraindications: ['Gravidez', 'Risco teratogênico', 'Interação com furosemida, ciclosporina ou glibenclamida', 'Disfunção hepática moderada a grave', 'Elevação persistente de transaminases', 'Hipotensão significativa'],
  },

  {
    id: 'iloprosta',
    name: 'Iloprosta',
    category: 'hipertensao-pulmonar',
    observations: 'Análogo da prostaciclina (PGI2), com ação vasodilatadora arterial e inibidor leve de agregação plaquetária.',
    brands: ['Ventavis (Bayer) — Amp. inal. 1 mL: 10 µg/mL; Sol. nebuliz. 1 mL'],
    presentations: [{ label: 'Ampola inalatória 1 mL — 10 µg/mL' }],
    doses: [
      {
        group: 'Adultos > 18 anos — Hipertensão pulmonar grave',
        items: [
          { label: 'Inalação', value: 'Iniciar 2,5 µg/dose; manter entre 2,5 e 5 µg/dose a cada 3 a 4 horas' },
          { label: 'Intervalo mínimo', value: '2 horas' },
          { label: 'Dose máxima', value: '45 µg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Disfunção hepática ou renal', value: 'Não usar' },
      { label: 'ClCr < 30 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: ['Vasodilatação, rubor, hemorragia', 'Taquicardia, palpitação, síncope, cefaleia', 'Broncoespasmo, tosse, dispneia, resfriado', 'Náuseas, edema, insuficiência renal aguda, tetania'],
    contraindications: ['Trombocitopenia', 'Coronariopatia grave', 'Coronariopatia nos últimos 6 meses', 'ICC não controlada', 'Arritmias graves', 'Angina instável', 'Hipertensão pulmonar venooclusiva', 'Valvulopatias', 'Gravidez e lactação'],
  },

  {
    id: 'macitentana',
    name: 'Macitentana',
    category: 'hipertensao-pulmonar',
    observations: 'Antagonista de endotelina. O comprimido não pode ser partido ou triturado. Monitorar aminotransferases.',
    brands: ['Opsumit (Actelion) — Comprimidos revestidos 10 mg'],
    presentations: [{ label: 'Comprimido revestido 10 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Hipertensão pulmonar', value: '10 mg/dia ÷ 1' }],
      },
    ],
    sideEffects: ['Anemia, resfriado, bronquite, faringite', 'Cefaleia, infecção do trato urinário'],
    contraindications: ['Doença hepática', 'Elevação persistente de transaminases (> 3× limite superior normal)', 'Gravidez e lactação'],
  },

  {
    id: 'sildenafila',
    name: 'Sildenafila',
    category: 'hipertensao-pulmonar',
    observations: 'Ver página 232 em Tratamento da disfunção erétil.',
    brands: [],
    presentations: [],
    doses: [],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'riociguate',
    name: 'Riociguate',
    category: 'hipertensao-pulmonar',
    observations: 'Estimulador de guanilato ciclase solúvel.',
    brands: ['Adempas (Bayer) — Comp.: 0,5–1–1,5–2–2,5 mg'],
    presentations: [
      { label: 'Comprimido 0,5 mg' },
      { label: 'Comprimido 1 mg' },
      { label: 'Comprimido 1,5 mg' },
      { label: 'Comprimido 2 mg' },
      { label: 'Comprimido 2,5 mg' },
    ],
    doses: [
      {
        group: 'Adultos — Hipertensão pulmonar tromboembólica crônica',
        items: [
          { label: 'Oral', value: 'Iniciar 0,5 a 1 mg × 3. Aumentar a cada 2 semanas, se necessário, até 2,5 mg × 3. Máximo: 7,5 mg/dia' },
          { label: 'Observação', value: 'Não usar na doença pulmonar veno-oclusiva' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 15 mL/min', value: 'Melhor evitar' }],
    sideEffects: ['Tontura, cefaleia, hipotensão, anemia, hemorragia', 'Constipação, diarreia, gastrite, refluxo, náusea, vômito'],
    contraindications: ['Uso com inibidores de PDE-5 (aguardar 24 a 48 horas)', 'Pneumonia intersticial idiopática', 'Gestação ou risco de gravidez'],
  },

  {
    id: 'treprostinila',
    name: 'Treprostinila',
    category: 'hipertensao-pulmonar',
    observations: 'Medicamento descontinuado. Marca: Remodulin',
    brands: [],
    presentations: [],
    doses: [],
    sideEffects: [],
    contraindications: [],
  },
];