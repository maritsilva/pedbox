export const probioticos = [
  {
    id: 'bacillus-clausii',
    name: 'Bacillus clausii',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Alimento probiótico. Pouco eficaz quando usado isoladamente para tratar diarreias agudas ou crônicas.',
    brands: ['Enterogermina — flaconete 5 mL: 2 × 10⁹ esporos ou 4 × 10⁹ esporos'],
    presentations: [
      { label: 'Flaconete 5 mL — 2 × 10⁹ esporos' },
      { label: 'Flaconete 5 mL — 4 × 10⁹ esporos' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Reequilíbrio da microbiota intestinal', value: '4 × 10⁹ esporos/dia, 1 a 2 vezes ao dia' },
          { label: 'Profilaxia da diarreia por antibioticoterapia', value: '2 × 10⁹ esporos/dose, 3 vezes ao dia' },
          { label: 'Diarreia aguda (controverso)', value: '2 × 10⁹ esporos/dose, até 4 vezes ao dia' },
          { label: 'Diarreia crônica', value: '2 × 10⁹ esporos/dose, 2 vezes ao dia' },
        ],
      },
    ],
    sideEffects: [
      'Não absorvido.',
      'Não foi relatado efeito colateral significativo.',
      'Não deve ser utilizado por imunodeprimidos.',
    ],
    contraindications: ['Imunodeprimidos'],
  },

  {
    id: 'bifidobacterium-lactis',
    name: 'Bifidobacterium lactis',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Alimento probiótico. Pouco eficaz para tratar diarreias agudas ou crônicas.',
    brands: ['Reflorint — sachê 2 g: 1 × 10⁸ esporos'],
    presentations: [
      { label: 'Sachê 2 g — 1 × 10⁸ esporos' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Profilaxia da diarreia por infecções gastrintestinais', value: '10⁸ esporos — 1 sachê/dose, 1 vez ao dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Reequilíbrio da microbiota intestinal', value: '10⁸ esporos — 1 sachê/dose, 1 a 2 vezes ao dia' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'lactobacillus-acidophilus',
    name: 'Lactobacillus acidophilus',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Alimento probiótico. Pouco eficaz para tratar diarreias.',
    brands: [
      'Florastor — sachês 2 × 10⁹ UFC; cápsulas 1 × 10⁹ UFC; sachês 2 × 10⁷ UFC; cápsulas 2 × 10⁷ UFC',
      'Prolive — comprimido mastigável 2 × 10⁷ UFC; cápsulas 1 × 10⁹ UFC',
    ],
    presentations: [
      { label: 'Sachê 2 × 10⁹ UFC' },
      { label: 'Cápsula 1 × 10⁹ UFC' },
      { label: 'Cápsula / sachê 2 × 10⁷ UFC' },
      { label: 'Comprimido mastigável 2 × 10⁷ UFC' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Prevenção de enterocolite necrosante em RN pré-termo', value: '10⁹ UFC/dose, 2 vezes ao dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Reequilíbrio da microbiota intestinal', value: '1 dose diária da cápsula ou do sachê' },
        ],
      },
    ],
    preparation: 'Tomar com água ou misturar o conteúdo da cápsula ou sachê aos alimentos.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'lactobacillus-reuteri',
    name: 'Lactobacillus reuteri',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Alimento probiótico útil no tratamento da cólica infantil.',
    brands: [
      'Colikids / Provance — gotas 5 mL: 1 × 10⁸ UFC / 5 gotas',
      'Provanche — comprimido mastigável 1 × 10⁸ UFC',
    ],
    presentations: [
      { label: 'Gotas 5 mL — 1 × 10⁸ UFC / 5 gotas' },
      { label: 'Comprimido mastigável — 1 × 10⁸ UFC' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Sintomático nos transtornos intestinais', value: '10⁸ UFC (5 gotas/dose), 1 vez ao dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Reequilíbrio da microbiota intestinal', value: '10⁸ UFC/dose, 1 vez ao dia' },
        ],
      },
    ],
    preparation: 'As gotas podem ser tomadas puras ou diluídas em água, suco ou leite, não aquecidos.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'saccharomyces-boulardii',
    name: 'Saccharomyces boulardii',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Levedura com ação probiótica, registrada como medicamento.',
    brands: [
      'Floratil / Repoflor / Floratil AT / Floralon — cápsulas 100 mg; sachê 100 mg; cápsulas 200 mg; sachê 200 mg',
    ],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Sachê 100 mg' },
      { label: 'Cápsula 200 mg' },
      { label: 'Sachê 200 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Diarreia infecciosa aguda', value: '200 mg/dose, 3 vezes ao dia' },
          { label: 'Profilaxia da diarreia por antibioticoterapia', value: '200 mg/dose, 2 vezes ao dia. Iniciar 48 h antes. Continuar 2 semanas após o término do tratamento.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Reequilíbrio da microbiota intestinal', value: '200 a 750 mg/dose, 1 a 3 vezes ao dia' },
          { label: 'Diarreia aguda', value: 'Iniciar: 200 a 250 mg/dose, 3 vezes ao dia por 2 dias. Depois: 100 mg/dose, 3 vezes ao dia por 5 dias.' },
          { label: 'Diarreia crônica', value: '200 mg/dose, 1 a 2 vezes ao dia' },
          { label: 'Profilaxia da diarreia por antibioticoterapia', value: '200 mg/dose, 2 vezes ao dia. Iniciar 48 h antes. Continuar 2 semanas após o término.' },
          { label: 'Coadjuvante na erradicação do H. pylori', value: '50 a 100 mg/dia, 2 a 4 vezes ao dia' },
        ],
      },
    ],
    preparation: 'As cápsulas podem ser abertas para uso imediato. O pó pode ser misturado a líquidos ou alimentos em temperatura ambiente.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'saccharomyces-cerevisiae',
    name: 'Saccharomyces cerevisiae',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Levedura com ação probiótica, registrada como medicamento.',
    brands: ['Florax — flaconete pediátrico 2,5 × 10⁸ UFC; flaconete adulto 5 × 10⁸ UFC'],
    presentations: [
      { label: 'Flaconete pediátrico — 2,5 × 10⁸ UFC' },
      { label: 'Flaconete adulto — 5 × 10⁸ UFC' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Reequilíbrio da microbiota intestinal', value: '1 flaconete/dose, 2 vezes ao dia, por 2 a 3 dias' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },
];

export const proctologicos = [
  {
    id: 'diltiazem-topico',
    name: 'Diltiazem tópico',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Opção ao tratamento com nitratos. Manipular a 2% em gel ou pomada.',
    brands: ['Manipulado 2% — gel ou pomada'],
    presentations: [
      { label: 'Gel ou pomada 2% (manipulado)' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Fissura anal crônica / trombose hemorroidária', value: 'Aplicar na região perianal 3 vezes ao dia, por até 12 semanas. Reavaliar após 4 semanas.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, menor que com nitratos.',
      'Prurido anal.',
      'Dermatite de contato.',
    ],
    contraindications: [],
  },

  {
    id: 'dinitrato-isossorbida-topico',
    name: 'Dinitrato de isossorbida tópico',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Auxilia na cicatrização e reduz a dor. Nitratos são a primeira escolha no tratamento da fissura anal. Manipular a 0,5 a 2% em gel ou pomada.',
    brands: ['Manipulado 0,5–2% — gel ou pomada'],
    presentations: [
      { label: 'Gel ou pomada 0,5–2% (manipulado)' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Fissura anal crônica / trombose hemorroidária', value: 'Aplicar na região perianal 3 vezes ao dia. Reavaliar após 4 semanas.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, que pode diminuir ao longo do tempo de uso.',
      'Dermatite de contato.',
      'Angioedema.',
      'Náusea.',
      'Tontura.',
      'Hipotensão.',
    ],
    contraindications: [],
  },

  {
    id: 'nifedipino-topico',
    name: 'Nifedipino tópico',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Opção ao tratamento com nitratos. Manipular a 0,2–2% em gel ou pomada. Associação com lidocaína 1,5% (nifedipino 0,3% + lidocaína 1,5%) também disponível.',
    brands: ['Manipulado 0,2–2% — gel ou pomada', 'Manipulado nifedipino 0,3% + lidocaína 1,5%'],
    presentations: [
      { label: 'Gel ou pomada 0,2–2% (manipulado)' },
      { label: 'Gel nifedipino 0,3% + lidocaína 1,5% (manipulado)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Fissura anal', value: 'Pomada 0,5%, 2 vezes ao dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Fissura anal crônica / trombose hemorroidária', value: 'Aplicar na região perianal 2 a 4 vezes ao dia, por até 12 semanas. Reavaliar após 4 semanas.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, menor que com nitratos.',
      'Prurido anal.',
      'Dermatite de contato.',
    ],
    contraindications: [],
  },

  {
    id: 'nitroglicerina-topica',
    name: 'Nitroglicerina tópica',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Auxilia na cicatrização e reduz a dor. Nitratos são a primeira escolha no tratamento da fissura anal. Manipular a 0,05–0,6% em gel ou pomada.',
    brands: ['Manipulado 0,05–0,6% — gel ou pomada'],
    presentations: [
      { label: 'Gel ou pomada 0,05–0,6% (manipulado)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Fissura anal', value: 'Concentração 0,05–0,2%, 2 vezes ao dia, por até 8 semanas' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Fissura anal crônica — inicial', value: '0,2% na região perianal, 2–3 vezes ao dia por 4 semanas. Reavaliar.' },
          { label: 'Fissura anal crônica — escalonamento', value: 'Se necessário, aumentar para 0,4% por semana até máximo 0,6%.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, que pode diminuir ao longo do tempo de uso.',
      'Dermatite de contato.',
      'Angioedema.',
      'Náusea.',
      'Tontura.',
      'Hipotensão.',
    ],
    contraindications: [],
  },

  {
    id: 'associacoes-hemorroidas',
    name: 'Associações proctológicas (hemorroidas)',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Diversas associações tópicas para tratamento de hemorroidas, em pomada ou supositório. Aplicar a pomada intrarretalmente (~1 cm da cânula). Repetir após cada evacuação. Limitar uso de corticoides e anestésicos a até 7 dias seguidos. Antes de usar, certificar-se de que não se trata de sífilis, tuberculose, herpes, condiloma ou câncer.',
    brands: [
      'Proctyl — pomada ou supositório com anti-inflamatório, anestésico e cicatrizante',
      'Proctosan / Hemorroidil / Xyloproct / Hemocort / Hemotiss / Proctogynel — diversas associações',
    ],
    presentations: [
      { label: 'Pomada proctológica' },
      { label: 'Supositório proctológico' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Hemorroidas', value: 'Aplicar 2–4 vezes ao dia, inclusive após cada evacuação. Após melhora, continuar 1 vez ao dia por 1 semana.' },
        ],
      },
    ],
    sideEffects: [
      'Risco de absorção sistêmica de lidocaína/benzocaína — cuidado em crianças e idosos debilitados.',
      'Sensibilização cutânea com uso prolongado de corticoides e anestésicos (> 7 dias).',
    ],
    contraindications: [],
  },
];

export const outrasGastro = [
  {
    id: 'acido-ursodesoxicolico',
    name: 'Ácido ursodesoxicólico',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Útil no tratamento de doenças hepatobiliares e colestáticas crônicas. Reduz a secreção hepática de colesterol e a reabsorção fracional de colesterol pelos intestinos.',
    brands: ['Ursacol — comprimido 50, 150 e 300 mg'],
    presentations: [
      { label: 'Comprimido 50 mg' },
      { label: 'Comprimido 150 mg' },
      { label: 'Comprimido 300 mg' },
    ],
    doses: [
      {
        group: 'Crianças (doses não bem estabelecidas)',
        items: [
          { label: 'Fibrose cística', value: '30 mg/kg/dia ÷ 2 doses' },
          { label: 'Atresia de vias biliares', value: '10–20 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Prurido por colestase (NP)', value: '15 mg/kg/dia ÷ 2 doses' },
          { label: 'Prurido por colestase (oral)', value: '30 mg/kg/dia ÷ 3 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia da litíase biliar', value: '300 mg/dose, 2 vezes ao dia' },
          { label: 'Dissolver cálculo biliar', value: '8–10 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Cirrose biliar primária', value: '13–15 mg/kg/dia ÷ 2–4 doses' },
        ],
      },
    ],
    preparation: 'Tomar com copo de água, junto das refeições.',
    sideEffects: [
      'Diarreia, constipação, dispepsia, náusea, vômitos.',
      'Cefaleia, tontura.',
      'Dor muscular, artralgia, mialgia.',
      'Erupção cutânea, alopecia, coceira.',
      'Tosse, bronquite, faringite, infecção do trato respiratório superior.',
      'Hiperglicemia, aumento de transaminases.',
      'Leucopenia, trombocitopenia, colecistite.',
    ],
    contraindications: ['Cálculos calcificados', 'Gestação'],
  },

  {
    id: 'aspartato-ornitina',
    name: 'Aspartato de ornitina',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Reduz as concentrações plasmáticas de amônia.',
    brands: ['Hepa-Merz — sachê 5 g; ampola 10 mL: 500 mg/mL'],
    presentations: [
      { label: 'Sachê 5 g' },
      { label: 'Ampola 10 mL — 500 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose', value: 'Não há referência de doses em crianças.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Encefalopatia hepática / hiperamonemia — EV', value: '20 g/dia ou 6 g em infusão contínua. Diluir até máx. 30 g/500 mL. Não ultrapassar 5 g/hora.' },
          { label: 'Encefalopatia hepática / hiperamonemia — oral', value: '1 ou 2 sachês/dia, às refeições principais. Normalmente associado à lactulose.' },
        ],
      },
    ],
    sideEffects: [
      'Bem tolerado.',
      'Náusea, vômitos (desaparecem com redução da dose).',
      'Altas doses: hiperglicemia.',
    ],
    contraindications: ['Insuficiência renal grave', 'Uso de bebidas alcoólicas'],
  },

  {
    id: 'budesonida-gastro',
    name: 'Budesonida (oral)',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Glicocorticoide sintético com ação principalmente local e pouca absorção sistêmica. Opção ao uso de prednisona/prednisolona com menos efeitos adversos, porém eficácia levemente menor e custo maior. Efeito completo obtido entre 2 a 4 semanas.',
    brands: ['Entocort — cápsulas LP 3 mg'],
    presentations: [
      { label: 'Cápsula LP 3 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 8 anos',
        items: [
          { label: 'Dose habitual', value: '0,45 mg/kg/dia. Máx: 9 mg/dia.' },
          { label: 'Doença de Crohn leve a moderada (> 25 kg)', value: '9 mg/dia por 8 semanas; depois 6 mg/dia por 2 semanas.' },
          { label: 'Hepatite autoimune (9–17 anos)', value: '3 mg/dose, 3 vezes ao dia + azatioprina 1–2 mg/kg/dia por até 6 meses. Manutenção: 3 mg/dose, 2 vezes ao dia.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Doença de Crohn / retocolite ulcerativa leve a moderada', value: '9 mg/dia por 8 semanas. Se recorrência, repetir por mais 8 semanas. Manutenção: 6 mg/dia por 3 meses, com redução gradual.' },
        ],
      },
    ],
    preparation: 'Tomar preferencialmente pela manhã, com água. As cápsulas podem ser abertas, mas o conteúdo não deve ser mastigado.',
    renalAdjustment: [
      { label: 'Insuficiência hepática moderada', value: 'Máximo 3 mg/dia' },
    ],
    sideEffects: [
      'Náusea, vômito, diarreia, dor abdominal.',
      'Cefaleia, sinusite, pneumonia.',
      'Supressão do crescimento, mialgia, artralgia, fraturas, osteoporose.',
      'Cushing, anafilaxia, rinite, eczemas, catarata, glaucoma, angioedema.',
    ],
    contraindications: [
      'Infecção não controlada',
      'Tuberculose ativa',
      'Insuficiência hepática grave',
      'Úlcera gástrica',
    ],
  },

  {
    id: 'mesalazina',
    name: 'Mesalazina',
    suffix: '5-ASA',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Anti-inflamatório derivado do ácido 5-aminossalicílico (5-ASA) com ação local no intestino. Dissociação em mesalazina e sulfapiridina (ação sistêmica). Monitorar regularmente: função renal, hepática e hemograma durante tratamento prolongado.',
    brands: [
      'Asalit / Mesacol / Pentasa / Mesacol MMX / Chronsa / Mesaneo — supositório 250–1000 mg; comprimido revestido 400–800 mg; cápsula LP 500 mg; sachê LP 1 g; enema 1 g/100 mL; enema 3 g + diluente 100 mL',
    ],
    presentations: [
      { label: 'Comprimido revestido 400 mg e 800 mg' },
      { label: 'Cápsula LP 500 mg' },
      { label: 'Sachê LP 1 g' },
      { label: 'Supositório 250, 500 e 1.000 mg' },
      { label: 'Enema 1 g/100 mL e 3 g + diluente 100 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Retocolite ulcerativa ou doença de Crohn', value: 'Oral: 50–100 mg/kg/dia ÷ 2–4 doses. Máx: 1 g/dose ou 4 g/dia. Ciclos de 3–6 semanas.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Doença de Crohn — oral', value: '1 g/dose, 4 vezes ao dia' },
          { label: 'Retocolite ulcerativa — oral', value: '400–800 mg/dose, 4 vezes ao dia. Manutenção: 1,2–2,4 g/dia por 8 semanas.' },
          { label: 'Retocolite ulcerativa distal — enema', value: '1–4 g ao deitar. Reter até o dia seguinte. Manutenção: 2 g/dia ou 4 g a cada 2 dias.' },
          { label: 'Proctite — supositório', value: '500 mg/dose, 1–2 vezes ao dia. Manutenção: 250 mg a cada 2 dias.' },
          { label: 'Proctite leve a moderada — retal', value: '1 g/dia, 1–2 vezes ao dia.' },
        ],
      },
    ],
    preparation: 'Tomar preferencialmente à noite, com água, longe das refeições. Não mastigar comprimidos. Grânulos LP: colocar sobre a língua e engolir com água. Tentar evacuar antes de supositório ou enema. Reter por pelo menos 3 horas.',
    renalAdjustment: [
      { label: 'Insuficiência renal / ClCr < 30 mL/min', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática grave', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Náusea, vômito, dispepsia, dor abdominal, flatulência, diarreia, constipação, hemorragia GI.',
      'Cefaleia, tontura, insônia, mal-estar, ansiedade, fraqueza.',
      'Artralgia, poliúria, distúrbios visuais, erupção cutânea.',
      'Nasofaringite, rinite, sinusite, dispneia, tosse.',
      'Muito raros: miocardite, nefrite intersticial, hepatotoxicidade, leucopenia, plaquetopenia.',
    ],
    contraindications: [
      'Alergia a salicilatos',
      'Úlcera péptica',
      'Obstrução urinária',
      'Discrasia hemorrágica',
      'Doença renal parenquimal',
    ],
  },

  {
    id: 'pancreatina',
    name: 'Pancreatina',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Constituída por 3 enzimas pancreáticas (lipase, amilase, protease). A dose é representada pela quantidade de lipase em UI. Enzimas com revestimento gastroprotetor em microesferas para não se degradarem no pH ácido. Suplementação excessiva aumenta risco de estenose intestinal e hiperuricemia.',
    brands: ['Creon — cápsulas 10.000 UI e 25.000 UI'],
    presentations: [
      { label: 'Cápsula 10.000 UI de lipase' },
      { label: 'Cápsula 25.000 UI de lipase' },
    ],
    doses: [
      {
        group: 'Crianças — fibrose cística',
        items: [
          { label: 'Lactentes', value: '2.000 UI por 120 mL de leite, fórmula ou amamentação' },
          { label: 'Menores de 4 anos', value: '1.000 UI/kg por refeição' },
          { label: 'Maiores de 4 anos', value: '500 UI/kg por refeição. Máx: 2.500 UI/kg/refeição ou 10.000 UI/kg/dia.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Insuficiência pancreática exócrina / pancreatite crônica / fibrose cística', value: '20.000–50.000 UI por refeição. 20.000–25.000 UI por lanche. Ajustar conforme resposta.' },
          { label: 'Diarreia da AIDS (empírico)', value: '50.000 UI a cada refeição' },
        ],
      },
    ],
    preparation: 'Tomar no início da refeição (se prolongada: metade no início e metade no meio). Se abrir cápsula, não mastigar os grânulos.',
    sideEffects: [
      'Dor abdominal, náusea, vômito, constipação, distensão abdominal, diarreia.',
      'Sem proteção das microesferas: irritação e aftas na mucosa oral.',
      'Doses excessivas: estenose intestinal, hiperuricosúria, hiperuricemia.',
    ],
    contraindications: ['Pancreatite aguda', 'Alergia a carne de porco'],
  },

  {
    id: 'prucaloprida',
    name: 'Prucaloprida',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Agonista serotoninérgico que estimula o reflexo peristáltico, a liberação de secreções intestinais e a motilidade gastrointestinal. Descontinuar se não houver efeito em até 4 semanas.',
    brands: ['Resolor — comprimido revestido 1 mg e 2 mg'],
    presentations: [
      { label: 'Comprimido revestido 1 mg' },
      { label: 'Comprimido revestido 2 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Constipação intestinal crônica', value: '2 mg/dia, 1 comprimido, 1 vez ao dia. Descontinuar se sem efeito em 4 semanas.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: '1 mg/dia' },
      { label: 'Insuficiência hepática grave', value: '1 mg/dia' },
    ],
    sideEffects: [
      'Cefaleia, tontura, tremor, cansaço, mal-estar, febre.',
      'Diarreia, náusea, vômito, dor abdominal, flatulência, dispepsia, hiporexia.',
      'Espasmo muscular, polaciúria.',
    ],
    contraindications: ['Diálise', 'Obstrução intestinal', 'Doença inflamatória intestinal'],
  },

  {
    id: 'sucralfato',
    name: 'Sucralfato',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Protetor de mucosa gástrica com ação tópica. Atua como barreira física a irritantes. Pouco absorvido. Pode ser utilizado em pacientes que recebem radioterapia.',
    brands: ['Sucrafilm — comprimido mastigável 1.000 mg; flaconete 10 mL: 200 mg/mL'],
    presentations: [
      { label: 'Comprimido mastigável 1.000 mg' },
      { label: 'Flaconete 10 mL — 200 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Estomatite — bochecho', value: '2,5–5 mL/dose, 4 vezes ao dia' },
          { label: 'Proteção gástrica / esofagite', value: '40–80 mg/kg/dia ÷ 4 doses' },
          { label: '3 meses a 5 anos', value: '500 mg/dose, 4 vezes ao dia' },
          { label: '≥ 6 anos', value: '1.000 mg/dose, 4 vezes ao dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Úlcera duodenal / profilaxia de úlcera por estresse', value: '1 g, 2–4 vezes ao dia por 4–8 semanas' },
          { label: 'Manutenção / profilaxia de lesões gástricas', value: '1 g/dose, 2 vezes ao dia' },
        ],
      },
    ],
    preparation: 'Tomar com água, longe das refeições.',
    sideEffects: [
      'Constipação, diarreia, flatulência, náusea, dispepsia.',
      'Tontura, cefaleia, sonolência.',
      'Reações de hipersensibilidade.',
      'Toxicidade por alumínio em doença renal.',
      'Hiperglicemia em diabéticos.',
    ],
    contraindications: [],
  },

  {
    id: 'sulfassalazina',
    name: 'Sulfassalazina',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Anti-inflamatório derivado do ácido 5-aminossalicílico. No intestino, dissocia-se em mesalazina e sulfapiridina (ação sistêmica, alta concentração no líquido articular). Associar 5 mg/dia de ácido fólico.',
    brands: ['Azulfin — comprimido gastrorresistente 500 mg'],
    presentations: [
      { label: 'Comprimido gastrorresistente 500 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Colite ulcerativa', value: '40–60 mg/kg/dia ÷ 3–6 doses. Manutenção: 30 mg/kg/dia. Máx: 4 g/dia.' },
          { label: 'Colite ulcerativa — 25–34 kg', value: '500 mg/dose, 3 vezes ao dia' },
          { label: 'Colite ulcerativa — 35–50 kg', value: '1000 mg/dose, 3 vezes ao dia' },
          { label: 'Artrite idiopática juvenil', value: 'Iniciar 10 mg/kg/dia; aumentar 10 mg/kg/semana até 30–50 mg/kg/dia. Máx: 2 g/dia.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Colite ulcerativa — início', value: '500 mg/dose, 2–4 vezes ao dia. Aumentar semanalmente até 1000 mg/dose, 3–4 vezes ao dia.' },
          { label: 'Colite ulcerativa — manutenção', value: '500 mg/dose, 4 vezes ao dia. Monitorar se > 4 g/dia.' },
          { label: 'Artrite reumatoide', value: 'Iniciar 500 mg/dia; aumentar semanalmente até 1000 mg/dose, 2 vezes ao dia. Máx: 3 g/dia.' },
        ],
      },
    ],
    preparation: 'Tomar com 1 copo de água, após as refeições. Associar 5 mg/dia de ácido fólico.',
    sideEffects: [
      'Náusea, vômito, dispepsia, anorexia.',
      'Tontura, cefaleia, erupção cutânea, prurido, urticária, febre.',
      'Stevens-Johnson, cianose, urina descolorida, cristalúria.',
      'Leucopenia, anemia, trombocitopenia, hemólise, depressão medular.',
      'Hepatite, nefrotoxicidade, alteração de transaminases.',
      'Oligospermia, asma.',
    ],
    contraindications: ['Porfiria', 'Agranulocitose', 'Alergia a sulfas e salicilatos', 'Obstrução'],
  },

  {
    id: 'tegaserode',
    name: 'Tegaserode',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Agonista do receptor de serotonina. Avaliar risco/benefício antes do uso — relacionado a aumento do risco cardiovascular. Evitar em mulheres acima de 55 anos.',
    brands: ['Zelmac — comprimido 6 mg'],
    presentations: [
      { label: 'Comprimido 6 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Cólon irritável com constipação / hipomotilidade em mulheres', value: '6 mg/dose, 2 vezes ao dia por 4–6 semanas. Se necessário, prorrogar por mais 4–6 semanas.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal grave', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Cefaleia, tontura, enxaqueca.',
      'Dor abdominal, diarreia, náusea, flatulência.',
      'Dor nas costas, fraqueza, dor nas pernas.',
      'Aumento do risco de infarto e eventos cardíacos.',
    ],
    contraindications: ['Obstrução intestinal', 'Doença hepática'],
  },

  {
    id: 'vedolizumabe',
    name: 'Vedolizumabe',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Anticorpo monoclonal para tratamentos refratários de DII. Verificar se o paciente está em dia com vacinação. Descontinuar se não houver efeito após a semana 14.',
    brands: ['Entyvio — frasco-ampola 300 mg'],
    presentations: [
      { label: 'Frasco-ampola 300 mg' },
    ],
    doses: [
      {
        group: 'Adultos > 17 anos',
        items: [
          { label: 'Doença de Crohn / colite ulcerativa — EV', value: '300 mg em solução única. Repetir após 2, 6 e 8 semanas. A partir daí, a cada 8 semanas.' },
        ],
      },
    ],
    preparation: 'Reconstituir com 4,8 mL de água para injetáveis e administrar em 30 minutos.',
    sideEffects: [
      'Cefaleia, fadiga.',
      'Náusea, artralgia, dor nas costas.',
      'Bronquite, faringite, infecções, nasofaringite, influenza.',
      'Prurido, erupção cutânea.',
      'Aumento de enzimas hepáticas, hepatite.',
      'Febre, anafilaxia.',
      'Câncer (raro).',
    ],
    contraindications: [],
  },

  {
    id: 'pepsina-metoclopramida-simeticona',
    name: 'Pepsina + Metoclopramida + Simeticona',
    category: 'probioticos-proctologicos-gastro',
    observations: 'Pepsina é uma enzima proteolítica. Evitar uso prolongado acima de 5 dias. Pelo efeito sedativo da metoclopramida, orientar pacientes a evitar dirigir ou operar máquinas.',
    brands: ['Digeplus — cápsulas 50 + 40 + 7 mg'],
    presentations: [
      { label: 'Cápsula 50 mg pepsina + 40 mg metoclopramida + 7 mg simeticona' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dispepsia funcional / dificuldade de digestão', value: '1–2 cápsulas após as refeições substanciosas' },
        ],
      },
    ],
    sideEffects: [
      'Ver metoclopramida e simeticona.',
    ],
    contraindications: [
      'Hemorragia, perfuração ou obstrução gastrointestinal',
      'Convulsões não controladas',
      'Parkinson',
    ],
  },
];