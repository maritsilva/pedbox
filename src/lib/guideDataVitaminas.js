export const vitaminas = [
  {
    id: 'vitamina-a',
    name: 'Vitamina A',
    suffix: 'Retinol',
    category: 'vitaminas-minerais',
    observations: 'Vitamina lipossolúvel, sensível à oxidação. Carotenos vegetais têm 1/6 da atividade do retinol. Equivalências: 1 µg de retinol = 12 µg de β-caroteno; 1 UI = 3,6 µg de β-caroteno; 1 µg de retinol = 3,33 UI.',
    brands: [
      'Arovit — drágea 50.000 UI; gotas 150.000 UI/mL; cápsulas moles 100.000 e 200.000 UI',
      'Betacaroteno / Beta Bronze — cápsulas 2 mg e 4 mg',
      'Vitamina A + D — solução 20.000 UI vit. A + 1.250 UI vit. D/gota',
    ],
    presentations: [
      { label: 'Drágea 50.000 UI' },
      { label: 'Gotas 150.000 UI/mL' },
      { label: 'Cápsula mole 100.000 e 200.000 UI' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Megadose profilática semestral — 6 a 11 meses', value: '100.000 UI' },
          { label: 'Megadose profilática semestral — 1 a 5 anos', value: '200.000 UI' },
          { label: 'Tratamento da deficiência < 1 ano', value: '5.000–10.000 UI/dia por 10 dias' },
          { label: 'Tratamento da deficiência 1–8 anos', value: '5.000–15.000 UI/dia por 10–30 dias' },
          { label: 'Deficiência grave / sarampo / lesão ocular', value: '200.000 UI/dia por 2 dias. Repetir < 6 meses: 1/4 da dose; 6–11 meses: 1/2 dose. Repetir 1 dose após 2 semanas.' },
          { label: 'Reposição na insuficiência hepática crônica (lactentes)', value: '5.000–15.000 UI/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Suplementação', value: '4.000–5.000 UI/dia' },
          { label: 'Tratamento da deficiência', value: '50.000–100.000 UI/dia por 14 dias. Manutenção: 20.000 UI/dia por 2 meses.' },
          { label: 'Deficiência grave / lesão ocular', value: '500.000 UI/dia por 2 dias; depois 50.000–100.000 UI/dia por 14 dias; depois 10.000–20.000 UI/dia por 2 meses.' },
          { label: 'Prevenção de cegueira noturna em gestantes', value: '5.000–10.000 UI/dia ou 25.000 UI/semana' },
          { label: 'Proteção da pele — protoporfiria eritropoiética (betacaroteno)', value: '30–300 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Hipervitaminose A: > 5.000 UI/dia cronicamente ou 25.000 UI/dia sem deficiência.',
      'Cefaleia, vômito, anorexia, diarreia, ressecamento e descamação de pele e mucosas.',
      'Alopecia, lesões seborreicas, fissuras nos cantos da boca.',
      'Aumento do fígado e baço, anormalidades ósseas.',
      'Diplopia, aumento da pressão intracraniana, papiledema, sonolência, coma.',
    ],
    contraindications: [],
  },

  {
    id: 'vitamina-b1',
    name: 'Vitamina B1',
    suffix: 'Tiamina',
    category: 'vitaminas-minerais',
    observations: 'Vitamina hidrossolúvel relacionada ao metabolismo alimentar e estimulação de nervos periféricos. Derivados lipossolúveis benfotiamina e sulbutiamina atravessam a barreira hematoencefálica.',
    brands: [
      'Benerva / Beneum / Vitamin B1 — comprimido 300 mg',
      'Cloridrato de tiamina — comprimido 300 mg',
    ],
    presentations: [
      { label: 'Comprimido 300 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Beribéri — lactentes (início)', value: 'EV: 25–50 mg/dia; depois IM: 10 mg/dia por 7 dias' },
          { label: 'Beribéri — crianças', value: 'EV ou IM: 10 mg/dia por 7 dias; oral: 10–50 mg/dia por 7 dias. Manutenção: 3–5 mg/dia por 6 semanas.' },
          { label: 'Acidose láctica pirúvica grave', value: '600 mg/dia' },
          { label: 'Anemia megaloblástica responsiva', value: '100–200 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da deficiência', value: '10 mg/dia, via oral' },
          { label: 'Beribéri', value: '5–30 mg/dose, 1–3 vezes/dia, IM por 2 semanas; depois oral por 1 mês' },
          { label: 'Encefalopatia de Wernicke-Korsakoff', value: 'EV ou IM: 50–100 mg/dose por mínimo 5 dias, até dieta adequada' },
          { label: 'Síndrome de abstinência alcoólica grave', value: 'EV ou IM: 100–200 mg/dia por 7–15 dias' },
          { label: 'Síndrome de abstinência alcoólica moderada', value: 'IM: 100 mg/dia por 3 dias; depois oral 300 mg por 4 semanas' },
          { label: 'Prevenção / manutenção', value: '50–100 mg/dia, oral' },
        ],
      },
    ],
    preparation: 'EV: infundir lentamente, em cerca de 30 min.',
    sideEffects: [
      'EV: risco de reação anafilática, dificuldade respiratória, choque, hipotensão.',
      'EV/IM: rubor facial, agitação, diaforese, urticária, náusea, angioedema.',
      'Oral (raro): tremor, mal-estar, cefaleia, intolerância digestiva.',
    ],
    contraindications: [],
  },

  {
    id: 'benfotiamina',
    name: 'Benfotiamina',
    category: 'vitaminas-minerais',
    observations: 'Derivado lipossolúvel da tiamina que atravessa a barreira hematoencefálica.',
    brands: ['Milgamma — drágea 150 mg'],
    presentations: [{ label: 'Drágea 150 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Polineuropatia diabética', value: '150 mg/dose, 2–3 vezes ao dia por 4–8 semanas. Manutenção: 150 mg/dia.' },
          { label: 'Abstinência alcoólica (eficácia discutível)', value: '150 mg/dose, 4 vezes ao dia' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'sulbutiamina',
    name: 'Sulbutiamina',
    category: 'vitaminas-minerais',
    observations: 'Derivado lipossolúvel da tiamina que atravessa a barreira hematoencefálica.',
    brands: ['Arcalion — drágea 200 mg'],
    presentations: [{ label: 'Drágea 200 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Astenia', value: '400 mg/dia, em 2 tomadas' },
        ],
      },
    ],
    preparation: 'Engolir inteiro com um copo de água.',
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'vitamina-b2',
    name: 'Vitamina B2',
    suffix: 'Riboflavina',
    category: 'vitaminas-minerais',
    observations: 'Vitamina hidrossolúvel, fotossensível e termoestável. Participa do processo de produção de energia celular e formação de hemácias. Disponível em manipulação, via oral ou colírio, ou em associações.',
    brands: ['Manipulada ou em associações'],
    presentations: [{ label: 'Comprimido / cápsula (manipulado)' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tratamento da deficiência', value: '5–10 mg/dia' },
          { label: 'Acidemia glutárica com hipoglicemia', value: 'Iniciar 20 mg/dia; aumentar gradualmente até máx 300 mg/dia. Avaliar excreção de ácido glutárico.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da deficiência', value: '5–30 mg/dia' },
          { label: 'Cefaleia de córnea', value: 'Colírio 0,1% até pigmentação da córnea, seguido de radiação UV' },
        ],
      },
    ],
    sideEffects: ['Urina amarelo-escura ou laranjada.'],
    contraindications: [],
  },

  {
    id: 'vitamina-b3',
    name: 'Vitamina B3',
    suffix: 'Niacina / Nicotinamida / Ácido nicotínico',
    category: 'vitaminas-minerais',
    observations: 'Vitamina hidrossolúvel. Auxilia no metabolismo alimentar e na síntese das gorduras. Não usar comprimido LP em crianças.',
    brands: [
      'Metri — comprimido LP 500 e 1000 mg',
      'Niacina — comprimido LP 250, 500 e 750 mg',
      'Nicotinamida — manipulada ou em associações',
    ],
    presentations: [
      { label: 'Comprimido LP 500 mg e 1000 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Suplementação', value: '50–300 mg/dia' },
          { label: 'Hiperlipidemia', value: 'Iniciar 100–250 mg/dia; aumentar 100 mg/semana ou 250 mg a cada 2–3 semanas. Máx: 20 mg/kg/dia ou 1.000 mg/dia.' },
          { label: 'Pelagra', value: '150–300 mg/dia ÷ 3 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Suplementação', value: '100 mg/dia, 1–2 vezes ao dia' },
          { label: 'Pelagra', value: '50–100 mg/dose, 3–4 vezes ao dia. Máx: 500 mg/dia.' },
          { label: 'Hiperlipidemia / hipertrigliceridemia', value: 'Iniciar 500 mg/dia; aumentar 500 mg/dose a cada 4 semanas. Máx: 2.000 mg/dia. Manutenção: 1.000–2.000 mg/dia.' },
        ],
      },
    ],
    sideEffects: [
      'Rubor facial, boca seca, prurido, parestesia, cefaleia, náuseas, dor abdominal.',
      'Hepatotoxicidade, intolerância à glicose, hiperuricemia, edema macular.',
    ],
    contraindications: ['Doença hepática', 'Úlcera', 'Hemorragia arterial', 'Elevação de transaminases'],
  },

  {
    id: 'vitamina-b5',
    name: 'Vitamina B5',
    suffix: 'Ácido pantotênico',
    category: 'vitaminas-minerais',
    observations: 'Manipulada ou em associações. Deficiência isolada é rara.',
    brands: ['Manipulada ou em associações'],
    presentations: [{ label: 'Cápsula (manipulado)' }],
    doses: [
      {
        group: 'IDR geral',
        items: [
          { label: '0–6 meses', value: '1,7 mg/dia' },
          { label: '7–11 meses', value: '1,8 mg/dia' },
          { label: '1–3 anos', value: '2 mg/dia' },
          { label: '4–6 anos', value: '3 mg/dia' },
          { label: '7–11 anos', value: '4 mg/dia' },
          { label: 'Adultos', value: '5 mg/dia' },
        ],
      },
    ],
    sideEffects: ['Deficiência (rara): emagrecimento, distúrbios do crescimento, cefaleia, irritabilidade, insônia, lesões de mucosa.'],
    contraindications: [],
  },

  {
    id: 'vitamina-b6',
    name: 'Vitamina B6',
    suffix: 'Piridoxina',
    category: 'vitaminas-minerais',
    observations: 'Vitamina hidrossolúvel, sensível à luz e álcalis. Age como cofator enzimático no metabolismo de proteínas, carboidratos e gorduras. Fundamental para o desenvolvimento do SNC e da função cognitiva.',
    brands: [
      'Neuri / Metadoxil — comprimido 40 mg',
      'Cloridrato de piridoxina — comprimido 100 mg',
    ],
    presentations: [
      { label: 'Comprimido 40 mg' },
      { label: 'Comprimido 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Tratamento da deficiência', value: '5–25 mg/dia por 3 semanas; depois 1,5–5 mg/dia' },
          { label: 'Convulsão neonatal refratária', value: '100–200 mg/dia' },
          { label: 'Convulsões por dependência de piridoxina', value: 'Oral: 30–100 mg/dia (até 600 mg/dia). EV/IM/SC: 10–100 mg/dose.' },
          { label: 'Homocistinúria', value: '200–1.000 mg/dia' },
          { label: 'Hiperoxalúria primária', value: '5–20 mg/kg/dia' },
          { label: 'Intoxicação por isoniazida', value: 'EV: mesma dose de isoniazida ingerida, até máx 70 mg/kg ou 5 g' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da deficiência', value: 'EV/IM: 10–20 mg/dia por 3 semanas; depois 2–5 mg/dia oral' },
          { label: 'Anemias responsivas, sideroblásticas', value: 'Oral/IM: 50–200 mg/dia por 3 meses' },
          { label: 'Neurite periférica — prevenção', value: '25–50 mg/dia' },
          { label: 'Neurite periférica — tratamento', value: '50–300 mg/dia' },
          { label: 'Náusea gestacional', value: '10–25 mg/dose, 3 vezes ao dia' },
          { label: 'Tensão pré-menstrual', value: '50–500 mg/dia' },
          { label: 'Intoxicação por isoniazida', value: 'EV: mesma dose de isoniazida ingerida, até máx 5 g. Repetir após 30 min se necessário.' },
          { label: 'Intoxicação por cogumelo Gyromitra', value: 'EV: 25 mg/kg em 15–30 min. Repetir se necessário.' },
        ],
      },
    ],
    sideEffects: [
      'Neuropatia sensitiva e convulsões com doses EV muito altas.',
      'Parestesias, sonolência, ataxia, cefaleia, náusea, azia.',
      'Aumento de transaminases, deficiência de folato.',
      'EV: raros casos de anafilaxia.',
    ],
    contraindications: [],
  },

  {
    id: 'vitamina-b7',
    name: 'Vitamina B7',
    suffix: 'Biotina',
    category: 'vitaminas-minerais',
    observations: 'Também conhecida como vitamina H. Hidrossolúvel. Atua na síntese de ácidos graxos e DNA e no metabolismo de proteínas e carboidratos. Sintetizada por bactérias intestinais. Disponível em manipulação ou associações.',
    brands: ['Manipulada ou em associações'],
    presentations: [{ label: 'Cápsula (manipulado)' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Tratamento da deficiência', value: '1–10 mg/dia' },
          { label: 'Deficiência de biotinidase ou carboxilase congênita', value: '5–20 mg/dia' },
          { label: 'Acidemia propiônica', value: '10–20 mg/dia' },
          { label: 'Deficiência de holocarboxilase', value: '10 mg/dia' },
          { label: 'Casos graves', value: 'Pode requerer 200 mg/dia' },
          { label: 'Doença de gânglios basais responsiva à biotina', value: '5–10 mg/kg/dia + tiamina 300–900 mg/dia' },
        ],
      },
    ],
    sideEffects: ['Não há efeitos colaterais relacionados ao excesso. Deficiência isolada é rara.'],
    contraindications: [],
  },

  {
    id: 'vitamina-c',
    name: 'Vitamina C',
    suffix: 'Ácido ascórbico',
    category: 'vitaminas-minerais',
    observations: 'Vitamina hidrossolúvel. Antioxidante, importante para síntese de colágeno, metabolismo de colesterol e neurotransmissores e absorção de ferro. Doses acima de 500 mg/dia sem deficiência superam o limiar renal e são excretadas.',
    brands: [
      'Diversas marcas — comprimido efervescente 500 e 1.000 mg; comprimido 500 ou 1.000 mg; gotas 200 mg/mL; ampolas 100 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido / efervescente 500 mg e 1.000 mg' },
      { label: 'Gotas 200 mg/mL' },
      { label: 'Ampola 100 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Escorbuto', value: '300 mg/dia (3x/dia); depois 100 mg/dia por até 3 meses' },
          { label: 'Acidificação da urina', value: '500 mg/dose, 3–4 vezes ao dia' },
          { label: 'Síndrome de Chediak-Higashi', value: '200–2.000 mg/dia (fase estável)' },
          { label: 'Metemoglobinemia hereditária não tóxica', value: '200–500 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da deficiência leve', value: '100–250 mg/dose, 1–2 vezes ao dia' },
          { label: 'Tratamento da deficiência grave', value: '1.000–2.000 mg/dia, 1–2 vezes ao dia' },
          { label: 'Escorbuto', value: '300–1.000 mg/dia (oral, IM, EV ou SC) até normalizar reservas' },
          { label: 'Queimadura grave', value: '500–2.000 mg/dia até cicatrização' },
          { label: 'Cicatrização de feridas', value: 'EV/IM/SC: 300–500 mg/dia por 7–10 dias' },
          { label: 'Excreção de ferro com desferroxamina', value: '100–200 mg/dia. Iniciar após 1 mês. Monitorar função cardíaca.' },
        ],
      },
    ],
    sideEffects: [
      'Doses altas: diarreia osmótica, litíase renal, rubor, cefaleia, náusea, vômitos, pirose.',
      'EV rápido: tontura e síncope.',
    ],
    contraindications: ['Evitar doses altas em urolitíase ou condições de acumulação de ferro (talassemia, hemocromatose)'],
  },

  {
    id: 'vitamina-d',
    name: 'Vitamina D',
    suffix: 'Calciferol',
    category: 'vitaminas-minerais',
    observations: 'Vitamina lipossolúvel. D2 (ergocalciferol) e D3 (colecalciferol) possuem a mesma ação. 90% é sintetizada pelo organismo e ativada após banho de sol. Cada 1 µg equivale a 40 UI. Níveis séricos medidos pela 25-OH-vitamina D: > 20 ng/mL desejável para população saudável; > 30 ng/mL para grupos de risco.',
    brands: [
      'Diversas marcas — cápsulas/comprimidos 1.000/5.000/7.000/10.000/50.000 UI; gotas 200 UI/gota ou 400 UI/mL',
    ],
    presentations: [
      { label: 'Cápsula / comprimido 1.000–50.000 UI' },
      { label: 'Gotas 200 UI/gota ou 400 UI/mL' },
    ],
    doses: [
      {
        group: 'Profilaxia em crianças',
        items: [
          { label: 'Prematuros até 1,5 kg', value: '200 UI/dia' },
          { label: 'Prematuros ≥ 1,5 kg e nascidos a termo', value: '400 UI/dia. Máx: 1.000 UI/dia.' },
        ],
      },
      {
        group: 'Correção da deficiência em crianças',
        items: [
          { label: 'Reposição', value: '50.000 UI/semana ou 2.000–6.000 UI/dia por 6 semanas ou até níveis normais. Manutenção: 400–1.000 UI/dia.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'IDR até 70 anos', value: '600 UI/dia' },
          { label: 'IDR acima de 70 anos', value: '800 UI/dia' },
          { label: 'Dose profilática', value: '1.500–2.000 UI/dia ou 7.000–14.000 UI/semana' },
          { label: 'Correção da deficiência', value: '50.000 UI/semana ou 2.000 UI/dia por 8 semanas; depois dose profilática.' },
          { label: 'Obesos / má absorção', value: '6.000–10.000 UI/dia. Manutenção: 3.000–6.000 UI/dia.' },
          { label: 'Prevenção e tratamento da osteoporose (> 50 anos)', value: '800–1.000 UI/dia' },
        ],
      },
    ],
    sideEffects: [
      'Hipercalcemia crônica (uso de doses altas): poliúria, anorexia, prurido, hipercalciúria, cefaleia, hipertensão, insuficiência renal, pancreatite.',
      'Nível tóxico: acima de 100 ng/mL.',
    ],
    contraindications: ['Hipercalcemia', 'Hiperparatireoidismo primário'],
  },

  {
    id: 'vitamina-e',
    name: 'Vitamina E',
    suffix: 'Tocoferol',
    category: 'vitaminas-minerais',
    observations: 'Vitamina lipossolúvel com função antioxidante. Principal antioxidante da membrana celular. Principal forma: alfa-tocoferol. 1 UI = 1 mg de acetato de dl-alfa-tocoferol.',
    brands: [
      'Bio E / Emama / Ephynal / Toleovit E — cápsulas 400 ou 1.000 mg',
      'Vitamina E + selênio — cápsulas 400 mg + 50 µg',
    ],
    presentations: [
      { label: 'Cápsula 400 mg' },
      { label: 'Cápsula 1.000 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Deficiência nutricional — neonatos', value: '25–50 mg/dia por 1 semana' },
          { label: 'Deficiência nutricional — crianças', value: '3 mg/kg/dia por 1 mês' },
          { label: 'Colestase crônica — neonatos', value: '25–50 mg/kg/dia' },
          { label: 'Colestase crônica — crianças', value: '1 mg/kg/dia' },
          { label: 'Fibrose cística < 1 ano', value: '40–50 mg/dia' },
          { label: 'Fibrose cística 1–3 anos', value: '80–150 mg/dia' },
          { label: 'Fibrose cística 4–8 anos', value: '100–200 mg/dia' },
          { label: 'Fibrose cística > 8 anos', value: '200–400 mg/dia' },
          { label: 'Beta-talassemia', value: '700 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia', value: '15–30 mg/dia' },
          { label: 'Deficiência nutricional', value: '60–300 mg/dia' },
          { label: 'Má absorção / colestase crônica', value: '100 mg/dia (mínimo 1 mg/kg/dia)' },
          { label: 'Drepanocitose', value: '450 mg/dia' },
          { label: 'Alzheimer', value: '1.000 mg/dose, 2 vezes ao dia' },
          { label: 'Discinesia tardia', value: '800–1.600 mg/dia' },
          { label: 'Esteatose hepática não alcoólica', value: '1.000 mg/dia + vitamina C 1.000 mg/dia por 6 meses' },
        ],
      },
    ],
    sideEffects: [
      'Doses altas: fadiga, fraqueza muscular, cefaleia, náusea, diarreia, ginecomastia, hepatotoxicidade, hemorragias.',
      'EV em prematuro: risco de hemorragia intraventricular.',
      'Atrapalha a resposta ao ferro na anemia ferropriva.',
    ],
    contraindications: [],
  },

  {
    id: 'vitamina-k1',
    name: 'Vitamina K1',
    suffix: 'Fitomenadiona',
    category: 'vitaminas-minerais',
    observations: 'Vitamina lipossolúvel. Cofator da síntese hepática dos fatores de coagulação II, VII, IX, X, proteína C e S. Aumenta fatores de coagulação em 4–6 h (oral) ou 1–3 h (EV). Normalização do TP: 24–48 h oral ou 12–14 h EV.',
    brands: [
      'Kanakion / Vita K — ampola 10 mg EV; ampola pediátrica 2 mg oral/EV/IM',
    ],
    presentations: [
      { label: 'Ampola 10 mg (EV)' },
      { label: 'Ampola pediátrica 2 mg (oral/EV/IM)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Profilaxia da doença hemorrágica do RN (IM)', value: '0,3–0,4 mg IM até 1h após nascimento. < 1 kg: 0,5–1 mg. Máx: 0,4 mg/kg em prematuros.' },
          { label: 'Profilaxia (oral)', value: '1–2 mg/dose ao nascer, no 4º dia e após 3–4 semanas. Prematuros < 2,5 kg: preferir oral.' },
          { label: 'Tratamento da doença hemorrágica', value: 'EV/IM: 1–2 mg/dia' },
          { label: 'Deficiência por má absorção — oral', value: '2,5 mg 2×/semana ou 5 mg/dia' },
          { label: 'Deficiência por má absorção — EV', value: '5–10 mg a cada 15 dias' },
          { label: 'Reverter anticoagulação (RNI muito prolongado)', value: 'EV: 0,03 mg/kg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Distúrbios hemorrágicos / hipovitaminose', value: 'EV: 2,5–25 mg a cada 12 h até normalizar TP' },
          { label: 'Reverter varfarina — RNI > 9 sem sangramento', value: 'Oral: 2,5–5 mg' },
          { label: 'Reverter varfarina — sangramento leve', value: 'Oral: 1–5 mg/dia' },
          { label: 'Reverter varfarina — hemorragia', value: 'EV lento: 10 mg + plasma ou concentrado de complexo protrombínico' },
        ],
      },
    ],
    preparation: 'EV: injetar lentamente, mínimo 1 mg/min na linha do equipo durante infusão de SF 0,9% ou SG 5%. Não diluir ou misturar com outros medicamentos. A ampola pode ser usada por via oral (diluída em suco) se não for necessária reversão rápida.',
    sideEffects: [
      'No local da injeção: dor, edema, fibrose, flebite.',
      'Sistêmicos: hipotensão/hipertensão, rubor, tontura, cianose, dispneia, prurido, náuseas.',
      'Reação anafilactoide (não imunológica).',
      'Hiperbilirrubinemia e hemólise.',
      'Kernicterus em prematuros < 1,5 kg.',
    ],
    contraindications: [],
  },

  {
    id: 'l-carnitina',
    name: 'L-carnitina',
    category: 'vitaminas-minerais',
    observations: 'Formulação oral 50 ou 100 mg/mL. Não existe injetável no Brasil. Vendido também como suplemento alimentar.',
    brands: ['Suplemento oral 50 ou 100 mg/mL'],
    presentations: [{ label: 'Solução oral 50 ou 100 mg/mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Deficiência', value: '50–100 mg/kg/dia' },
          { label: 'Miocardites / ICC / pós-diálise', value: '75–100 mg/kg/dia, 2–3 vezes ao dia. Ou 50 mg/kg/dia, 3–4 vezes ao dia.' },
          { label: 'Adultos (dose fixa)', value: '1.000–3.000 mg/dose, 4–6 vezes ao dia' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },
];

export const minerais = [
  {
    id: 'calcio',
    name: 'Cálcio',
    category: 'vitaminas-minerais',
    observations: 'Conteúdo deve ser expresso em mg de cálcio elementar. A vitamina D aumenta a absorção. Álcool e cafeína em excesso reduzem absorção. Sais pouco solúveis são melhor absorvidos junto com refeições.',
    brands: [
      'Diversas formas: carbonato, citrato, citrato malato, fosfato tribásico, acetato — isolados ou com vitamina D / magnésio',
    ],
    presentations: [
      { label: 'Carbonato de cálcio (40% cálcio elementar)' },
      { label: 'Citrato de cálcio (21% cálcio elementar)' },
      { label: 'Gliconato de cálcio (9,3% cálcio elementar)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Suplementação 2–4 anos', value: '600 mg/dia ÷ 2–3 doses' },
          { label: 'Suplementação > 4 anos', value: '900 mg/dia ÷ 2–3 doses' },
          { label: 'Hipocalcemia — neonatos', value: '50–150 mg/kg/dia ÷ 4–6 doses. Máx: 1.000 mg/dia.' },
          { label: 'Raquitismo por hipocalcemia — lactentes e crianças', value: '20–75 mg/kg/dia ÷ 3–4 doses. Iniciar com menor dose.' },
          { label: 'Hiperfosfatemia da IRC — neonatos', value: '200 mg/dia' },
          { label: 'Hiperfosfatemia da IRC — lactentes e crianças', value: 'Iniciar 500 mg/dia; ajustar. Máx: 1.500 mg/dia ou 500 mg da dieta.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Suplementação', value: '500–1.600 mg/dia. Máx: 500 mg/dose.' },
          { label: 'Hipocalcemia crônica (> 8,4 mg/dL)', value: '1.000–3.000 mg/dia' },
          { label: 'Osteoporose / prevenção de fraturas', value: '1.200–1.500 mg/dia em 3 doses + vitamina D 800–1.000 UI/dia' },
          { label: 'Hiperfosfatemia da IRC (acetato ou carbonato)', value: 'Iniciar 500 mg/dia elementar. Tomar com refeições. Ajustar para Ca < 9,5 mg/dL e P < 4,5 mg/dL.' },
        ],
      },
    ],
    sideEffects: [
      'Dor abdominal, náusea, constipação, flatulência.',
      'Hipercalcemia, hipercalciúria, urolitíase.',
      'Síndrome leite-álcali em uso excessivo com vitamina D.',
    ],
    contraindications: ['Hipercalcemia', 'Hipercalciúria', 'Cálculo renal', 'Obstrução urinária', 'Calcificação de tecidos'],
  },

  {
    id: 'cromo',
    name: 'Cromo',
    suffix: 'Picolinato de cromo',
    category: 'vitaminas-minerais',
    observations: 'Não há comprovação de auxílio na perda de peso.',
    brands: ['Picolinato de cromo — cápsulas 35 mg'],
    presentations: [{ label: 'Cápsula 35 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Melhora do perfil lipídico e controle glicêmico', value: '125–200 µg/dia' },
        ],
      },
    ],
    sideEffects: ['Distúrbios de humor e sono, cefaleia, anemia.'],
    contraindications: [],
  },

  {
    id: 'fosforo',
    name: 'Fósforo',
    category: 'vitaminas-minerais',
    observations: 'Formulação manipulada em cápsulas ou solução de fosfato de sódio ou fosfato de potássio. 1 litro de leite contém ~1 g de fósforo.',
    brands: ['Manipulado — cápsulas ou solução de fosfato de sódio / fosfato de potássio'],
    presentations: [{ label: 'Cápsula ou solução manipulada' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Manutenção', value: '2–3 mmol/dia (62–94 mg/kg/dia) ÷ 3–4 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Manutenção oral (incluindo dieta)', value: '1–2 g/dia ÷ 3–4 doses' },
          { label: 'Hipofosfatemia leve', value: 'Aumentar aporte de alimentos ricos em fosfato' },
        ],
      },
    ],
    sideEffects: ['Doses altas: náusea, vômito, diarreia, flatulência.'],
    contraindications: ['Hiperfosfatemia'],
  },

  {
    id: 'magnesio',
    name: 'Magnésio',
    category: 'vitaminas-minerais',
    observations: 'Absorção oral é errática. Casos graves devem ser corrigidos por via parenteral. Preferir sais de citrato, glicinato ou óxido para suplementação. 1 mmol = 2 mEq = 24,3 mg de magnésio elementar.',
    brands: [
      'Cloreto de magnésio — frascos e cápsulas',
      'Glicinato de magnésio — cápsulas',
      'Malato de magnésio — comprimidos',
      'Magnem B6 — magnésio + vitamina B6',
      'Óxido de magnésio — comprimido',
    ],
    presentations: [
      { label: 'Cápsula / comprimido (diversas formas de sais)' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Hipomagnesemia leve/moderada ou manutenção oral', value: 'Iniciar com doses baixas; ajustar até 350 mg de Mg elementar/dia. Reduzir se houver diarreia.' },
          { label: 'Envenenamento por bário (sulfato de magnésio)', value: 'Adultos: 30 g. Crianças: 250 mg/kg. Usar logo após ingestão recente.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min / insuficiência renal', value: 'Vigiar hipermagnesemia' },
    ],
    sideEffects: [
      'Diarreia dose-dependente. Óxido de magnésio provoca mais efeitos GI. Glicinato é mais bem tolerado.',
      'Hipermagnesemia na IR: oligúria, perda de consciência, arreflexia.',
    ],
    contraindications: ['Hipermagnesemia', 'Insuficiência renal grave'],
  },

  {
    id: 'potassio-cloreto',
    name: 'Potássio — Cloreto',
    category: 'vitaminas-minerais',
    observations: 'Slow-K: drágea LP 600 mg KCl = 8 mEq de K. KCl manipulado solução 6%: 1 mL = 0,8 mEq de K. 1 mMol = 1 mEq = 39,1 mg de K elementar. Uma banana média contém ~10 mEq de K.',
    brands: [
      'Slow-K — drágea LP 600 mg KCl (8 mEq)',
      'KCl manipulado — solução 6% (0,8 mEq/mL)',
    ],
    presentations: [
      { label: 'Drágea LP 600 mg KCl (8 mEq de K)' },
      { label: 'Solução 6% (0,8 mEq/mL)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Prevenção de hipopotassemia por diuréticos', value: '1–2 mEq/kg/dia ÷ 2–4 doses' },
          { label: 'Hipopotassemia leve a moderada', value: '2–4 mEq/kg/dia ÷ 2–4 doses. Máx: 240 mEq/dia.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Prevenção de hipopotassemia', value: '600–900 mg (8–12 mEq K/dia), 2–3 vezes ao dia' },
          { label: 'Hipopotassemia leve (oral)', value: '40–100 mEq/dia' },
        ],
      },
    ],
    preparation: 'Drágeas LP: ingerir inteiras, com água, junto das refeições.',
    sideEffects: [
      'Náusea, vômitos, diarreia, dor abdominal, irritação gástrica, flatulência.',
      'Hiperpotassemia, parada cardíaca, ECG anormal.',
      'Risco aumentado na IRC, uso de espironolactona ou iECA.',
    ],
    contraindications: [
      'Hiperpotassemia',
      'Insuficiência renal aguda ou função renal duvidosa',
      'Pós-operatório imediato',
      'Trauma tecidual extenso',
    ],
  },

  {
    id: 'potassio-citrato',
    name: 'Potássio — Citrato',
    category: 'vitaminas-minerais',
    observations: 'Ajustar dose para manter pH urinário entre 6,0 e 7,0. Tomar com as refeições.',
    brands: ['Litocit — comprimido LP 5 e 10 mEq'],
    presentations: [
      { label: 'Comprimido LP 5 mEq' },
      { label: 'Comprimido LP 10 mEq' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Profilaxia de cálculos renais de cálcio e ácido úrico', value: '5–20 mEq/dose, 3 vezes ao dia' },
        ],
      },
    ],
    sideEffects: ['Ver cloreto de potássio.'],
    contraindications: ['Hiperpotassemia', 'Insuficiência renal'],
  },
];