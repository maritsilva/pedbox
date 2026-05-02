export const antitussigenos = [
  {
    id: 'clobutinol-doxilamina',
    name: 'Clobutinol + Doxilamina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Antitussígeno de ação central. Doxilamina é anti-histamínico H1 de 1ª geração. Pelo efeito sedativo, evitar dirigir ou operar máquinas.',
    brands: [
      'Hytós Plus — xarope 20 + 3,75 mg/5 mL; gotas 48 + 9 mg/mL',
    ],
    presentations: [
      { label: 'Xarope 20 + 3,75 mg/5 mL' },
      { label: 'Gotas 48 + 9 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '1,8–2,4 mg/kg/dose 3×/dia' },
          { label: '2 a 5 anos', value: '20–30 mg/dose 3×/dia (5–7,5 mL ou 8–12 gotas)' },
          { label: '6 a 11 anos', value: '30–40 mg/dose 3×/dia (7,5–10 mL ou 12–16 gotas)' },
        ],
      },
      {
        group: 'Adultos — Tosse intensa, irritativa e seca',
        items: [{ label: 'Dose', value: '40–80 mg 3×/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Agitação', 'Sonolência', 'Tontura', 'Hipersonia', 'Convulsão',
      'Náusea', 'Vômitos', 'Dor abdominal', 'Taquicardia', 'Arritmia',
      'Cefaleia', 'Vertigem', 'Anorexia', 'Constipação', 'Boca seca', 'Retenção urinária',
    ],
    contraindications: [
      'Toxicomania', 'Uso de IMAO', 'Doença do trato respiratório inferior',
      'Cardiopatias', 'Convulsões não controladas', 'Primeiro trimestre de gestação',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'cloperastina',
    name: 'Cloperastina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Antitussígeno com ação seletiva sobre o centro regulador da tosse e leve ação anti-histamínica. Eficácia semelhante à da codeína.',
    brands: ['Seki / Tiluagen — xarope 1,77 mg/5 mL; gotas 35,4 mg/mL'],
    presentations: [
      { label: 'Xarope 1,77 mg/5 mL' },
      { label: 'Gotas 35,4 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '1,77–3,54 mg/kg/dia ÷ 4 (manhã + tarde + 2 juntas à noite)' },
          { label: '< 2 anos', value: '2,5 + 2,5 + 5 mL (5 + 5 + 10 gotas)' },
          { label: '2 a 5 anos', value: '5 + 5 + 10 mL (10 + 10 + 20 gotas)' },
          { label: '6 a 11 anos', value: '7,5 + 7,5 + 15 mL (15 + 15 + 30 gotas)' },
        ],
      },
      {
        group: 'Adultos — Tosse irritativa e seca',
        items: [{ label: 'Dose', value: '35,4 mg/dose 4×/dia (manhã + tarde + 2 juntas à noite)' }],
      },
    ],
    sideEffects: [
      'Boca seca', 'Vômito', 'Náusea', 'Perda de apetite', 'Sonolência', 'Tontura', 'Tremores',
      'Altas doses: epistaxe, distonia aguda, distúrbios respiratórios agudos',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'dextrometorfano',
    name: 'Dextrometorfano',
    category: 'antitussigenos-mucoliticos',
    observations: 'Antitussígeno de ação central. Não causa depressão respiratória nas doses habituais, mas uso abusivo pode causar dependência. Melhor evitar em menores de 4 anos. Antídoto: naloxona.',
    brands: [
      'Benalet TSC — xarope 15 mg/5 mL',
      'Bisoltussin — xarope 10 mg/5 mL',
      'Dextrometorfano + guaifenesina — xarope 6,5 + 66,5 mg/5 mL',
    ],
    presentations: [
      { label: 'Xarope 10 mg/5 mL' },
      { label: 'Xarope 15 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar < 4 anos)',
        items: [
          { label: '4 a 6 anos', value: '2,5–7,5 mg/dose 3–4×/dia' },
          { label: '7 a 12 anos', value: '5–10 mg/dose 3–4×/dia' },
        ],
      },
      {
        group: 'Adultos — Tosse seca',
        items: [{ label: 'Dose', value: '10–30 mg/dose a cada 4–6 h. Máx: 120 mg/dia' }],
      },
    ],
    sideEffects: [
      'Tontura', 'Fadiga', 'Náusea', 'Vômito', 'Dor abdominal', 'Sonolência',
      'Excitabilidade', 'Irritabilidade', 'Constipação', 'Erupção cutânea',
      'Altas doses: alucinação, depressão respiratória, ataxia',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: álcool e depressores do SNC. Antídoto: naloxona.' },
  },
  {
    id: 'dropropizina',
    name: 'Dropropizina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Antitussígeno de ação periférica com pequena ação anti-histamínica. Pode ser usado em tosse seca de qualquer etiologia. Melhor evitar em idosos. Tomar longe das refeições. 1 gota = 1 mg.',
    brands: ['Vibral / Atossion / Neotoss / ZipTuss — xarope 7,5 e 15 mg/5 mL; gotas 30 mg/mL'],
    presentations: [
      { label: 'Xarope infantil 7,5 mg/5 mL' },
      { label: 'Xarope 15 mg/5 mL' },
      { label: 'Gotas 30 mg/mL (1 gota = 1 mg)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '0,45 mg/kg/dose 4×/dia por até 7 dias' },
          { label: '6 meses a 3 anos', value: '2,5–5,0 mL ou 4–8 gotas/dose' },
          { label: '4 a 8 anos', value: '5–7,5 mL ou 8–12 gotas/dose' },
          { label: '8 a 11 anos', value: '7,5–10 mL ou 12–15 gotas/dose' },
        ],
      },
      {
        group: 'Adultos — Tosse seca ou irritativa',
        items: [{ label: 'Dose', value: '30 mg/dose 4×/dia por até 10 dias. Máx: 120 mg/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Sonolência', 'Hiperexcitabilidade', 'Tontura', 'Hipotensão', 'Hipertonia muscular',
      'Constipação', 'Náusea', 'Vômito', 'Dor epigástrica', 'Erupção cutânea',
    ],
    contraindications: [
      'Úlcera gástrica ativa', 'Insuficiência respiratória grave', 'Asma', 'Hipotensão',
      'Disfunção mucociliar', 'Disfunção hepática', 'Hipersecreção brônquica',
      'Tosse produtiva ou crônica',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: álcool e depressores do SNC.' },
  },
  {
    id: 'levodropropizina',
    name: 'Levodropropizina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Antitussígeno de ação periférica. Mesma atividade da dropropizina com maior tolerabilidade e menos sonolência. Tomar longe das refeições. 1 gota = 1 mg.',
    brands: ['Antux / Percof — xarope 30 mg/5 mL; gotas 30 mg/mL'],
    presentations: [
      { label: 'Xarope 30 mg/5 mL' },
      { label: 'Gotas 30 mg/mL (1 gota = 1 mg)' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [{ label: 'Dose por peso', value: '1 mg/kg/dose 3×/dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Tosse', value: '60 mg/dose 3×/dia' }],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Sonolência', 'Cefaleia', 'Tontura', 'Cansaço', 'Vertigem', 'Palpitações',
      'Alergia', 'Náusea', 'Vômito', 'Pirose', 'Dor abdominal', 'Diarreia',
    ],
    contraindications: [
      'Hipersecreção brônquica', 'Disfunção mucociliar', 'Insuficiência respiratória grave',
      'Asma', 'Gravidez', 'Lactação',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const mucoliticos = [
  {
    id: 'acetilcisteina',
    name: 'Acetilcisteína',
    category: 'antitussigenos-mucoliticos',
    observations: 'Reduz viscosidade do muco após 5–10 min quando inalado. Efeito controverso via oral. Antídoto na intoxicação por paracetamol. Após aberto, xarope válido por 14 dias. Odor forte ao abrir a ampola. Pode adquirir coloração rosa.',
    brands: ['Fluimucil / Acetilcisteína — comp. efervescente 200 e 600 mg; envelope 100, 200 e 600 mg; xarope 100 e 200 mg/5 mL; ampola 100 mg/mL'],
    presentations: [
      { label: 'Comprimido efervescente 200 mg e 600 mg' },
      { label: 'Envelope granulado 100, 200 e 600 mg' },
      { label: 'Xarope 100 mg/5 mL e 200 mg/5 mL' },
      { label: 'Ampola 100 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Via oral',
        items: [
          { label: 'Dose por peso', value: '15 mg/kg/dia ÷ 3 doses' },
          { label: '2 a 6 anos', value: '60–100 mg/dose 3×/dia' },
          { label: '7 a 11 anos', value: '100–200 mg/dose 3×/dia' },
        ],
      },
      {
        group: 'Crianças — Outras vias',
        items: [
          { label: 'IM', value: '150 mg/dose 1–2×/dia' },
          { label: 'Inalação', value: '20 mg/kg/dose 4×/dia' },
          { label: 'Lactentes — inalação', value: '2–4 mL/sessão 1–4×/dia' },
          { label: 'Crianças — inalação', value: '6–10 mL/sessão 3–4×/dia' },
          { label: 'Intratraqueal', value: '2–4 mL/dose 1–4×/dia' },
          { label: 'Íleo meconial — oral', value: '1 ampola diluída em 30 mL de suco a cada 8 h por 24 h' },
          { label: 'Íleo meconial — enema', value: '2–10 ampolas (600–3000 mg/dose) 3–4×/dia' },
          { label: 'Intoxicação por paracetamol', value: 'Mesmo esquema do adulto' },
        ],
      },
      {
        group: 'Adultos — Mucolítico',
        items: [
          { label: 'Oral', value: '600 mg/dia (1× ou ÷ 3 doses)' },
          { label: 'IM', value: '300 mg/dose 1–2×/dia' },
          { label: 'Inalação', value: '300–900 mg/dose 3–4×/dia' },
          { label: 'Intratraqueal', value: '300 mg/dose 1–2×/dia' },
        ],
      },
      {
        group: 'Adultos — Intoxicação por paracetamol',
        items: [
          { label: 'Via oral', value: '140 mg/kg seguido de 70 mg/kg a cada 4 h (com suco ou cola). Máx: 10 g' },
          { label: 'EV — 1ª dose', value: '150 mg/kg em 200 mL por 1 h' },
          { label: 'EV — 2ª dose', value: '50 mg/kg em 500 mL por 4 h' },
          { label: 'EV — 3ª dose', value: '100 mg/kg em 1000 mL por 16 h' },
        ],
      },
      {
        group: 'Adultos — Prevenção de nefropatia por contraste',
        items: [
          { label: 'Dose', value: '600 ou 1200 mg a cada 12 h (2 doses antes + 2 após). Hidratar com SF 1 mL/kg/h.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Cefaleia', 'Febre', 'Calafrios', 'Tontura', 'Urticária', 'Erupção cutânea',
      'Broncoespasmo por nebulização (raro — usar broncodilatador antes)', 'Irritação local', 'Rinorreia',
      'Náusea', 'Vômito', 'Diarreia', 'Estomatite',
      'Taquicardia', 'Hipotensão', 'Hipertensão', 'Edema', 'Aumento de transaminases',
      'Uso prolongado: hemoptise após nebulização ou instilação traqueal',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Monitorar eletrólitos durante uso parenteral. Após aberta, conservar ampola em refrigeração por 24 h para uso inalatório.' },
  },
  {
    id: 'ambroxol',
    name: 'Ambroxol',
    category: 'antitussigenos-mucoliticos',
    observations: 'Expectorante metabólito da guaifenesina, de ação pouco superior ao placebo. Baixa ação anti-inflamatória e anestésica. 1 gota = 0,3 mg. Pode elevar concentração pulmonar de antimicrobianos.',
    brands: ['Mucosolvan / Fluibron / Ambroxol — gotas 7,5 mg/mL; xarope 15 e 30 mg/5 mL; cápsula LP 75 mg'],
    presentations: [
      { label: 'Gotas 7,5 mg/mL (1 gota = 0,3 mg)' },
      { label: 'Xarope 15 mg/5 mL' },
      { label: 'Xarope 30 mg/5 mL' },
      { label: 'Cápsula LP 75 mg' },
    ],
    doses: [
      {
        group: 'Crianças — Via oral',
        items: [
          { label: 'Dose por peso', value: '1,5–2 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Até 2 anos', value: '7,5 mg 2×/dia (2,5 mL ou 25 gotas)' },
          { label: '2 a 5 anos', value: '7,5–15 mg 3×/dia (2,5–5 mL ou 25–50 gotas)' },
          { label: '6 a 11 anos', value: '15–30 mg 2–3×/dia (5–7,5 mL ou 50–100 gotas)' },
        ],
      },
      {
        group: 'Crianças — Inalação',
        items: [
          { label: 'Dose por peso', value: '0,6 mg/kg/sessão 1–2×/dia' },
          { label: '2 a 5 anos', value: '15 mg (2 mL) 1–2×/dia' },
          { label: '6 a 11 anos', value: '15–22,5 mg (2–3 mL) 1–2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Mucolítico oral', value: '60–120 mg/dose 2–3×/dia; ou cáps. LP 75 mg 1×/dia' },
          { label: 'Inalação', value: '15–22,5 mg (2–3 mL) 1–2×/dia' },
          { label: 'Dor de garganta (pastilha)', value: '20 mg a cada 3 h. Máx: 6 pastilhas/dia por até 3 dias (eficácia discutível)' },
        ],
      },
    ],
    sideEffects: [
      'Náusea', 'Vômitos', 'Diarreia', 'Dor abdominal', 'Dispepsia', 'Pirose', 'Constipação',
      'Sialorreia', 'Boca seca', 'Rinorreia', 'Fadiga', 'Disúria',
      'Erupções cutâneas', 'Anafilaxia', 'Urticária', 'Angioedema', 'Alteração no paladar',
      'Entorpecimento transitório na boca e garganta',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'bromexina',
    name: 'Bromexina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Mucolítico com ação pouco superior ao placebo. Início de ação lento (~5 h via oral). 1 gota = 0,13 mg. A apresentação em gotas pode ser usada por via oral ou inalatória.',
    brands: ['Bisolvon / Bromexina — gotas 2 mg/mL; xarope 4 e 8 mg/5 mL'],
    presentations: [
      { label: 'Gotas 2 mg/mL (1 gota = 0,13 mg)' },
      { label: 'Xarope infantil 4 mg/5 mL' },
      { label: 'Xarope 8 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças — Via oral',
        items: [
          { label: '2 a 5 anos', value: '8 mg/dia (60 gotas ou 10 mL) ÷ 2–3 doses' },
          { label: '6 a 11 anos', value: '4–8 mg/dose 3×/dia (30–60 gotas ou 5–10 mL)' },
        ],
      },
      {
        group: 'Crianças — Inalação',
        items: [
          { label: 'Dose por peso', value: '0,6 mg/kg/sessão 1–2×/dia' },
          { label: '2 a 5 anos', value: '1,3 mg (10 gotas) 1–2×/dia' },
          { label: '6 a 11 anos', value: '2 mg (15 gotas) 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Oral', value: '8 mg/dose 3×/dia. Máx: 48 mg/dia' },
          { label: 'Inalação', value: '8 mg (60 gotas) 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Náusea', 'Vômitos', 'Diarreia', 'Dor abdominal', 'Boca seca', 'Tontura',
      'Alergia', 'Angioedema', 'Erupção cutânea', 'Prurido', 'Anafilaxia', 'Broncoespasmo', 'Urticária',
    ],
    contraindications: ['Úlcera gástrica', 'Disfunção hepática'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'carbocisteina',
    name: 'Carbocisteína',
    category: 'antitussigenos-mucoliticos',
    observations: 'Mucolítico com início de ação mais rápido que a bromexina e propriedades anti-inflamatórias. 1 gota = 2,5 mg.',
    brands: ['Mucolitic / Carbocisteína — envelope 250 mg; xarope 100 e 250 mg/5 mL; gotas 50 mg/mL'],
    presentations: [
      { label: 'Envelope 250 mg' },
      { label: 'Xarope infantil 100 mg/5 mL' },
      { label: 'Xarope 250 mg/5 mL' },
      { label: 'Gotas 50 mg/mL (1 gota = 2,5 mg)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '2 a 5 anos', value: '50–125 mg/dose 3×/dia (2,5–6,25 mL ou 20–50 gotas)' },
          { label: '6 a 11 anos', value: '100–250 mg/dose 3×/dia (5–15 mL ou 40–100 gotas)' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Mucolítico', value: '500–750 mg/dose 3×/dia. Se necessário: até 1000 mg/dose 3×/dia' }],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      { label: 'Insuficiência hepática', value: 'Não exige ajuste' },
    ],
    sideEffects: [
      'Náusea', 'Vômitos', 'Gastrite', 'Dor epigástrica', 'Sangramento GI', 'Diarreia', 'Desconforto abdominal',
      'Tontura', 'Insônia', 'Cefaleia', 'Erupção cutânea', 'Palpitação', 'Hipoglicemia leve',
    ],
    contraindications: ['Úlcera gástrica', 'Recém-nascidos', 'Primeiro trimestre de gestação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'guaifenesina',
    name: 'Guaifenesina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Expectorante de ação pouco superior ao placebo. Melhor evitar em menores de 4 anos. Existem diversas associações de indicação discutível.',
    brands: ['Expectoflui / Frenotosse / Transpulmin / Dimepro — xarope 100 ou 200 mg/15 mL'],
    presentations: [
      { label: 'Xarope 100 mg/15 mL' },
      { label: 'Xarope 200 mg/15 mL' },
    ],
    doses: [
      {
        group: 'Crianças (evitar < 4 anos)',
        items: [
          { label: '2 a 5 anos', value: '50–100 mg/dose 1–6×/dia (7,5–15 mL). Máx: 600 mg/dia' },
          { label: '6 a 11 anos', value: '100–200 mg/dose 1–6×/dia (15–20 mL). Máx: 1200 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Mucolítico', value: '200–400 mg/dose a cada 4 h se necessário. Máx: 2400 mg/dia' }],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      { label: 'Insuficiência hepática', value: 'Não exige ajuste' },
    ],
    sideEffects: [
      'Tontura', 'Cefaleia', 'Sonolência', 'Náusea', 'Vômito', 'Dor abdominal', 'Erupção cutânea',
      'Altas doses: nefrolitíase (raro)', 'Hipouricemia',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'hedera',
    name: 'Hedera (Hera)',
    category: 'antitussigenos-mucoliticos',
    observations: 'Fitoterápico à base de Hera com ação broncodilatadora e mucolítica de eficácia e segurança bem estabelecidas. A concentração do extrato seco pode variar entre marcas, mas a quantidade de compostos vegetais é semelhante. A presença de sorbitol em algumas marcas pode ter efeito laxante.',
    brands: ['Abrilar / Bronflex / Phitoss / Aeromel / Respiratus / Hevelair — xarope ~7,5 mg/mL'],
    presentations: [{ label: 'Xarope 7,5 mg/mL (concentração variável por marca)' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '2 a 6 anos', value: '2,5 mL/dose 2–3×/dia' },
          { label: '7 a 11 anos', value: '5 mL/dose 2–3×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Mucolítico', value: '7,5 mL/dose 2–3×/dia por 7–10 dias' }],
      },
    ],
    sideEffects: [
      'Desconforto abdominal', 'Diarreia', 'Náusea', 'Erupções cutâneas', 'Reações alérgicas',
      'Altas doses: vômitos, agitação',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const colutoriosTopicos = [
  {
    id: 'benzidamina',
    name: 'Benzidamina',
    category: 'antitussigenos-mucoliticos',
    observations: 'Anestésico e anti-inflamatório tópico para faringite ou estomatite aftosa. Melhora hálito e higiene bucal. Evitar uso prolongado. Não engolir. Pastilhas só para pacientes com consciência e sem disfagia.',
    brands: ['Flogoral / Ciflogex / Angino-Rub — pastilha 3 mg; colutório 1,5 mg/mL; spray 1,5 mg/mL'],
    presentations: [
      { label: 'Pastilha 3 mg' },
      { label: 'Colutório 1,5 mg/mL' },
      { label: 'Spray 1,5 mg/mL' },
    ],
    doses: [
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Colutório', value: '15 mL/dose — bochechar ou gargarejar 3–4×/dia' },
          { label: 'Spray', value: '2–6 jatos na área afetada até 4×/dia' },
          { label: 'Pastilha', value: 'Deixar dissolver na boca até 4×/dia' },
        ],
      },
    ],
    sideEffects: [
      'Dormência local', 'Sonolência (raro)', 'Cefaleia (raro)', 'Náusea (raro)', 'Boca seca (raro)',
      'Tosse (raro)', 'Faringite (raro)',
      'Uso prolongado: sensibilização e alergia',
      'Se engolir: náusea e azia',
      'Se usar sem diluir: irritação da mucosa',
    ],
    contraindications: ['Lactação', 'Gravidez'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'benzocaina',
    name: 'Benzocaína (e associações)',
    category: 'antitussigenos-mucoliticos',
    observations: 'Anestésico local tópico oral. ATENÇÃO: evitar em menores de 6 anos. Evitar prescrever como sintomático para faringites — fazer diagnóstico preciso antes (febre + prostração > 3 dias pode ser faringite estreptocócica). Não tratar estreptococo adequadamente pode causar doença reumática.',
    brands: [
      'Benzocaína + cetilpiridínio — pastilha 10 + 1,466 mg; spray 4 + 0,5 mg/mL',
      'Benzocaína + dequalínio — pastilha 0,25 + 5 mg',
      'Benzocaína + cetilpiridínio + borato de sódio — colutório 1 + 5 + 30 mg/5 mL',
    ],
    presentations: [
      { label: 'Pastilha — várias associações' },
      { label: 'Spray' },
      { label: 'Colutório' },
      { label: 'Pomada oral' },
    ],
    doses: [
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Pastilha/spray', value: '1 pastilha ou spray na região oral 3–4×/dia' },
          { label: 'Colutório', value: 'Gargarejar com 5 mL diluído em água 3–4×/dia' },
          { label: 'Aftas — pomada/solução', value: 'Aplicar pequena quantidade sem esfregar 3–6×/dia' },
          { label: 'Orientação', value: 'Não engolir. Aguardar 30 min antes de ingerir líquidos ou alimentos.' },
        ],
      },
    ],
    sideEffects: [
      'Sensação de ardor à aplicação', 'Alergia', 'Asma (rara)',
      'Irritação da língua e mucosa oral', 'Alteração do paladar',
    ],
    contraindications: ['Menores de 6 anos'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Apresentações com neomicina podem gerar resistência microbiana.' },
  },
  {
    id: 'flurbiprofeno',
    name: 'Flurbiprofeno',
    category: 'antitussigenos-mucoliticos',
    observations: 'Anti-inflamatório não hormonal em pastilha para dor de garganta.',
    brands: ['Strepsils — pastilha 8,75 mg'],
    presentations: [{ label: 'Pastilha 8,75 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Faringite dolorosa', value: 'Deixar dissolver lentamente na boca. Máx: 5 pastilhas/dia por até 3 dias' }],
      },
    ],
    sideEffects: [
      'Crises de asma', 'Dor abdominal', 'Náusea', 'Cefaleia', 'Irritação da mucosa',
      'Risco de nefrotoxicidade', 'Piora de infecções bacterianas',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'hexamidina-tetracaina',
    name: 'Hexamidina + Tetracaína',
    category: 'antitussigenos-mucoliticos',
    observations: 'Spray antisséptico + anestésico local. Evitar uso prolongado.',
    brands: ['Hexomedine — spray 1 + 0,5 mg/mL'],
    presentations: [{ label: 'Spray 1 + 0,5 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças > 3 anos',
        items: [{ label: 'Dose', value: '1–3 nebulizações/dose até a cada 4 h' }],
      },
    ],
    sideEffects: [
      'Dormência ou anestesia da língua',
      'Redução transitória de reflexos faríngeos',
      'Alergia à tetracaína — até anafilaxia',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'procaina-neomicina-bismuto',
    name: 'Procaína + Neomicina + Tartarato de Bismuto',
    category: 'antitussigenos-mucoliticos',
    observations: 'Anestésico + antibiótico + cicatrizante para aftas. ATENÇÃO: evitar prescrever — contém antibiótico (risco de resistência). Evitar uso prolongado.',
    brands: ['Aftine / Bismu-Jet — gotas 15 + 15 + 25 mg/mL'],
    presentations: [{ label: 'Gotas 15 + 15 + 25 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças > 3 anos',
        items: [{ label: 'Aftas', value: '1–2 gotas no local afetado 3–6×/dia' }],
      },
    ],
    sideEffects: ['Irritação das mucosas (incomum)', 'Alergia'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'tirotricina-quinosol',
    name: 'Tirotricina + Quinosol',
    category: 'antitussigenos-mucoliticos',
    observations: 'Colutório/spray antisséptico com anestésico (lidocaína no spray).',
    brands: ['Malvatricin — colutório 0,10 + 1 mg/mL; spray 0,1 + 2 mg/mL + lidocaína 4 mg/mL'],
    presentations: [
      { label: 'Colutório 0,10 + 1 mg/mL' },
      { label: 'Spray 0,1 + 2 mg/mL (+ lidocaína 4 mg/mL)' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Colutório', value: '15 mL/dose — bochechar ou gargarejar 3×/dia' },
          { label: 'Spray', value: '2–3 jatos na área afetada 4×/dia' },
        ],
      },
    ],
    sideEffects: ['Irritação das mucosas (incomum)', 'Alergia', 'Dormência ou anestesia da língua'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'triancinolona-oral',
    name: 'Triancinolona (pomada oral)',
    category: 'antitussigenos-mucoliticos',
    observations: 'Corticosteroide tópico oral para lesões na mucosa bucal. Melhor evitar em crianças. Aguardar 30 min antes de ingerir líquidos ou alimentos. Evitar uso prolongado.',
    brands: ['Omcilon A / Mud Oral / Oncileg A / Oralsept — pomada oral 1 mg/g'],
    presentations: [{ label: 'Pomada oral 1 mg/g (triancinolona acetonida)' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Aftas/lesões orais', value: 'Aplicar camada fina sobre a lesão sem esfregar a cada 8 h por até 5 dias' }],
      },
    ],
    sideEffects: [
      'Geralmente bem tolerada',
      'Sensação de queimação local',
      'Dermatite', 'Irritação local',
    ],
    contraindications: ['Infecções bacterianas, virais ou fúngicas'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];