export const antiparasitarios = [
  {
    id: 'albendazol',
    name: 'Albendazol',
    category: 'antiparasitarios',
    observations: 'Anti-helmíntico benzimidazol de amplo espectro, principalmente contra nematódeos. Baixa absorção garante boa eficácia contra parasitas intestinais; usar por mais tempo em infecções teciduais.',
    brands: ['Albendazol — comprimido mastigável 400 mg; suspensão oral 400 mg'],
    presentations: [
      { label: 'Comprimido mastigável 400 mg' },
      { label: 'Suspensão oral 400 mg' },
    ],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: 'Ancilostomíase, necatoríase, ascaridíase, enterobíase/oxiuríase', value: '400 mg em dose única. Repetir em 14 dias. Casos graves: 3–5 dias.' },
          { label: 'Estrongiloidíase, teníase, tricuríase', value: '400 mg/dia por 3 dias' },
          { label: 'Larva migrans cutânea', value: '400 mg/dia por 3 dias. Maior eficácia associado a tiabendazol pomada local.' },
          { label: 'Larva migrans visceral / toxocaríase', value: '15 mg/kg/dia ÷ 2 doses. Máx: 400 mg/dose, por 5 dias' },
          { label: 'Cisticercose', value: '15 mg/kg/dia ÷ 2 doses. Máx: 400 mg/dose por 8–30 dias. Associar dexametasona 6 mg/dia ou prednisona 40–60 mg/dia.' },
          { label: 'Neurocisticercose', value: '15 mg/kg/dia ÷ 2 doses. Máx: 800 mg/dia por 8–21 dias. Corticoide e anticonvulsivante antes e durante a 1ª semana.' },
          { label: 'Equinococose / hidatidose', value: '15 mg/kg/dia ÷ 2 doses. Máx: 800 mg/dia por 1–6 meses' },
          { label: 'Triquinelose', value: '15 mg/kg/dia ÷ 2 doses. Máx: 800 mg/dia por 8–14 dias' },
          { label: 'Microsporidíase na AIDS', value: '400 mg/dose 2×/dia por 3 semanas' },
          { label: 'Giardíase', value: '10–15 mg/kg/dia. Máx: 400 mg/dia por 5 dias. Associar metronidazol.' },
          { label: 'Orientação', value: 'Tomar com refeição com gordura. Repetir parasitológico após 3–4 semanas.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Cefaleia', 'Tontura', 'Vertigem', 'Aumento de pressão intracraniana', 'Febre', 'Convulsões',
      'Diarreia', 'Náusea', 'Vômito', 'Dor abdominal', 'Boca seca',
      'Prurido', 'Erupção cutânea', 'Urticária', 'Alopecia reversível',
      'Leucopenia', 'Pancitopenia', 'Depressão medular',
      'Aumento de transaminases', 'Hepatotoxicidade', 'Disfunção renal aguda',
      'Pode provocar migração de ascaris pela boca e nariz',
      'Em tratamentos prolongados: monitorizar transaminases e hemograma',
    ],
    contraindications: ['Gravidez (teratogênico)', 'Não usar sem afastar possibilidade de gravidez'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'antimoniato-meglumina',
    name: 'Antimoniato de Meglumina',
    category: 'antiparasitarios',
    observations: 'Antimonial pentavalente. Usado em leishmaniose. 300 mg de antimoniato = 81 mg de antimônio pentavalente. A dose é calculada pelo antimônio.',
    brands: ['Glucantime — ampola 300 mg/mL'],
    presentations: [{ label: 'Ampola 300 mg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças — Leishmaniose visceral ou tegumentar',
        items: [
          { label: 'Dose', value: 'EV (preferencial) ou IM: 10–20 mg/kg/dia. Máx: 3 ampolas (15 mL/dia). > 50 kg: dose fixa de 5 ampolas.' },
          { label: 'Cutânea', value: '20 dias' },
          { label: 'Mucocutânea', value: '30 dias' },
          { label: 'Via EV', value: 'Diluir em 50–100 mL de SF ou SGI e fazer em 5–15 minutos' },
          { label: 'Via IM', value: 'Profunda, se plaquetas > 50.000/mm³' },
          { label: 'Monitorar semanalmente', value: 'Hemograma, transaminases, fosfatase alcalina, creatinina, eletrólitos, amilase, ureia, alterações de ondas T' },
        ],
      },
    ],
    sideEffects: [
      'Cardiotoxicidade', 'Alargamento do QT', 'Depressão de ST', 'Inversão de T',
      'Distúrbios de condução', 'Arritmias',
      'Artralgia', 'Mialgia', 'Febre', 'Erupção cutânea',
      'Irritação gástrica', 'Náusea', 'Vômitos', 'Anorexia', 'Epigastralgia', 'Empachamento',
      'Trombose venosa', 'Distúrbio renal', 'Pancreatite',
    ],
    contraindications: [
      'QTc > 450', 'Uso de drogas que prolongam QT', 'Transaminases elevadas',
      'Transplantados', 'Gestantes', 'Distúrbio renal ou hepático grave',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'dietilcarbamazina',
    name: 'Dietilcarbamazina',
    category: 'antiparasitarios',
    observations: 'Anti-helmíntico derivado da piperazina com rápido efeito por via oral. A maior parte dos efeitos adversos é devida à eliminação dos vermes no sistema linfático.',
    brands: ['Dietilcarbamazina — comprimido 50 mg'],
    presentations: [{ label: 'Comprimido 50 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: 'Filariose', value: '6 mg/kg/dia ÷ 1–3 doses por 12–21 dias. Pode iniciar com 1 mg/kg/dia e aumentar progressivamente.' },
          { label: 'Loíase', value: '8–10 mg/kg/dia ÷ 1–3 doses por 14–21 dias. Repetir se necessário.' },
          { label: 'Orientação', value: 'Tomar logo após as refeições' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência', 'Cefaleia', 'Mialgia', 'Astenia', 'Tontura',
      'Desconforto gástrico', 'Náusea', 'Febre', 'Dor', 'Edema', 'Hiperemia',
      'Hematúria', 'Linfangites', 'Linfadenites',
    ],
    contraindications: ['Hipertensão não controlada', 'Doença renal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'ivermectina',
    name: 'Ivermectina',
    category: 'antiparasitarios',
    observations: 'Antiparasitário de amplo espectro, eficaz em baixas doses. Primeira escolha para Ancylostoma caninum, Onchocerca volvulus, Strongyloides stercoralis e Sarcoptes scabiei.',
    brands: ['Ivermectina — comprimido 6 mg'],
    presentations: [{ label: 'Comprimido 6 mg' }],
    doses: [
      {
        group: 'Adultos e crianças > 15 kg',
        items: [
          { label: 'Ascaridíase', value: '150–200 µg/kg, dose única' },
          { label: 'Estrongiloidíase, larva migrans cutânea', value: '200 µg/kg/dia por 1–2 dias' },
          { label: 'Enterobíase / tricuríase', value: '200 µg/kg/dia por 1–3 dias' },
          { label: 'Oncocercose', value: '150 µg/kg dose única + doxiciclina 200 mg/dia por 6 semanas. Repetir a cada 3–6 meses.' },
          { label: 'Filariose', value: '200–400 µg/kg, dose única. Mais eficaz associada à dietilcarbamazina.' },
          { label: 'Escabiose / sarna e pediculose', value: '200 µg/kg, dose única. Repetir após 7–14 dias.' },
          { label: 'Orientação', value: 'Tomar com água. Repetir parasitológico após 2–4 semanas.' },
        ],
      },
    ],
    sideEffects: [
      'Fadiga', 'Fraqueza', 'Cefaleia', 'Febre', 'Insônia', 'Sonolência', 'Vertigem', 'Tontura',
      'Conjuntivite', 'Visão borrada',
      'Náusea', 'Diarreia', 'Dor abdominal', 'Anorexia', 'Constipação',
      'Hipotensão', 'Taquicardia', 'Edema',
      'Reações a larvas mortas nas microfilarioses (reação de Mazzotti)',
      'Reações oftalmológicas', 'Artralgia', 'Sinovite', 'Linfadenomegalia',
      'Leucopenia', 'Eosinofilia', 'Prurido', 'Erupção cutânea', 'Urticária',
    ],
    contraindications: ['Primeiro trimestre de gravidez', 'Lactação', 'Crianças < 15 kg'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'levamisol',
    name: 'Levamisol',
    category: 'antiparasitarios',
    observations: 'Anti-helmíntico específico para ascaridíase quando isolada. Alternativa ao albendazol e mebendazol na ancilostomíase. Imunomodulador.',
    brands: ['Ascaridil — comprimidos 80 e 150 mg'],
    presentations: [
      { label: 'Comprimido 80 mg' },
      { label: 'Comprimido 150 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '< 1 ano', value: '40 mg em dose única' },
          { label: '1 a 7 anos', value: '80 mg em dose única' },
          { label: '> 7 anos', value: '150 mg em dose única' },
        ],
      },
      {
        group: 'Adultos — Ascaridíase / ancilostomíase',
        items: [
          { label: 'Dose', value: '150 mg em dose única' },
          { label: 'Orientação', value: 'Tomar 30 min antes das refeições' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Cefaleia', 'Vertigem', 'Tontura', 'Sonolência', 'Depressão',
      'Náusea', 'Vômitos', 'Diarreia', 'Dor abdominal', 'Gosto metálico',
    ],
    contraindications: ['1º e 2º trimestre de gravidez', 'Lactação', 'Hepatopatia', 'Nefropatia grave'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'mebendazol',
    name: 'Mebendazol',
    category: 'antiparasitarios',
    observations: 'Anti-helmíntico benzimidazol de amplo espectro contra helmintíases intestinais. Mais seletivo que albendazol contra nematódeos.',
    brands: [
      'Mebendazol — comprimido 100 e 500 mg; suspensão oral 100 mg/5 mL',
      'Mebendazol + Tiabendazol — comprimido 100 + 166 mg; suspensão 100 + 166 mg/5 mL; creme/pomada 200 + 332 mg/g',
    ],
    presentations: [
      { label: 'Comprimido 100 mg e 500 mg' },
      { label: 'Suspensão oral 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: 'Nematódeos (ancilostomíase, ascaridíase, estrongiloidíase, necatoríase, tricuríase)', value: '100 mg/dose 2×/dia por 3 dias; ou 500 mg dose única' },
          { label: 'Capilaríase', value: '200 mg/dose 2×/dia por 20 dias' },
          { label: 'Enterobíase', value: '100 mg dose única. Repetir após 2 semanas.' },
          { label: 'Equinococose / hidatidose', value: '40–50 mg/kg/dia ÷ 3 doses por 3–6 meses (preferir albendazol)' },
          { label: 'Teníase', value: '200 mg/dose 2×/dia por 3 dias' },
          { label: 'Larva migrans visceral / toxocaríase', value: '100–200 mg/dose 2×/dia por 5 dias' },
          { label: 'Giardíase', value: '200 mg/dose 3×/dia por 5 dias' },
          { label: 'Orientação', value: 'Absorção melhor com alimentos. Repetir parasitológico após 3–4 semanas.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Tontura', 'Cefaleia', 'Febre', 'Convulsão',
      'Dor abdominal', 'Diarreia', 'Náusea', 'Vômitos',
      'Prurido', 'Erupção cutânea', 'Exantema', 'Angioedema', 'Queda de cabelos',
      'Neutropenia', 'Anemia', 'Leucopenia', 'Aumento de transaminases', 'Hematúria',
    ],
    contraindications: ['Gestação (teratogênico)', 'Não usar em possibilidade de gravidez'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'miltefosina',
    name: 'Miltefosina',
    category: 'antiparasitarios',
    observations: 'Análogo da aquifosfocolina. Única opção via oral para tratamento da leishmaniose. Não produzido no Brasil.',
    brands: ['Impavido — não produzido no Brasil'],
    presentations: [],
    doses: [
      {
        group: 'Adultos — Leishmaniose resistente',
        items: [
          { label: 'Dose', value: '2,5 mg/kg/dia. Máx: 150 mg/dia por 28 dias' },
          { label: 'Monitorização', value: 'Monitorar função renal e hepática durante o uso' },
        ],
      },
    ],
    sideEffects: [
      'Erupção cutânea', 'Prurido', 'Náusea', 'Vômito', 'Anorexia', 'Dor abdominal',
      'Leucocitose', 'Trombocitose',
    ],
    contraindications: ['Gravidez', 'Disfunção renal ou hepática'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'nitazoxanida',
    name: 'Nitazoxanida',
    category: 'antiparasitarios',
    observations: 'Nitrotiazol antimicrobiano de amplo espectro, ativo contra bactérias anaeróbias, protozoários e vírus intestinais. Mais eficaz tomada com alimentos.',
    brands: ['Annita / Nitazoxanida — comprimido revestido 500 mg; suspensão oral 100 mg/5 mL'],
    presentations: [
      { label: 'Comprimido revestido 500 mg' },
      { label: 'Suspensão oral 100 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '7,5 mg/kg/dose 2×/dia por 3 dias' },
          { label: '1 a 3 anos', value: '100 mg/dose 2×/dia por 3 dias' },
          { label: '4 a 11 anos', value: '200 mg/dose 2×/dia por 3 dias' },
        ],
      },
      {
        group: 'Adultos e > 12 anos',
        items: [
          { label: 'Dose usual / parasitoses / diarreias virais', value: '500 mg/dose 2×/dia por 3 dias' },
          { label: 'Amebíase', value: '500 mg/dose 2×/dia por 10 dias' },
          { label: 'Criptosporidíase e microsporidíase na AIDS', value: '500–1000 mg/dose 2×/dia por até 6 dias' },
          { label: 'Colite por C. difficile', value: '500 mg/dose 2×/dia por 7–10 dias' },
        ],
      },
    ],
    sideEffects: [
      'Náusea', 'Vômitos', 'Dor ou desconforto abdominal', 'Diarreia', 'Cefaleia',
      'Febre', 'Prurido', 'Tontura', 'Cor amarela ou esverdeada da urina',
      'Aumento discreto de transaminases',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'oxamniquina',
    name: 'Oxamniquina',
    category: 'antiparasitarios',
    observations: 'Tratamento de Schistosoma mansoni. Pode ser difícil de encontrar na rede pública. Manter repouso de pelo menos 3 horas após o uso.',
    brands: ['Oxamniquina — suspensão oral 50 mg/mL'],
    presentations: [{ label: 'Suspensão oral 50 mg/mL' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose', value: '20 mg/kg dose única ou 2 tomadas com 3 h de intervalo' },
        ],
      },
      {
        group: 'Adultos — Esquistossomose',
        items: [
          { label: 'Dose', value: '15 mg/kg dose única. Máx: 1500 mg' },
          { label: 'Orientação', value: 'Tomar após refeição. Repouso de pelo menos 3 h após o uso.' },
        ],
      },
    ],
    sideEffects: [
      'Tontura', 'Cefaleia', 'Sonolência', 'Excitação', 'Alucinação', 'Irritabilidade',
      'Febre', 'Convulsão (raro)',
      'Náusea', 'Vômito', 'Dor abdominal', 'Anorexia', 'Diarreia',
      'Urticária', 'Erupção cutânea', 'Broncoespasmo', 'Sudorese',
      'Aumento de transaminases', 'Hematúria', 'Urina avermelhada',
    ],
    contraindications: [
      'Gravidez', 'Lactação', 'Insuficiência hepática', 'Insuficiência renal',
      'ICC descompensada', 'Epilepsia',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'pirimetamina',
    name: 'Pirimetamina',
    category: 'antiparasitarios',
    observations: 'Usada em associação na malária, toxoplasmose ou pneumocistose. Sempre associar ácido folínico (não ácido fólico). Teratogênica no 1º trimestre.',
    brands: ['Daraprin — comprimido 25 mg'],
    presentations: [{ label: 'Comprimido 25 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Toxoplasmose congênita', value: '2 mg/kg/dia (máx 50 mg/dia) por 2 dias; depois 1 mg/kg/dia (máx 25 mg/dia) por 2–6 meses; depois 1 mg/kg 3×/semana por até 1 ano. Associar sulfadiazina e ácido folínico.' },
          { label: 'Pneumocistose', value: '1 mg/kg/dia, associada à dapsona e ácido folínico' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Toxoplasmose', value: 'Ataque: 200 mg/dia no 1º dia; depois 50–75 mg/dia até 2 semanas após melhora. Associar sulfadiazina e ácido folínico.' },
          { label: 'Isosporíase', value: '50–75 mg/dose por semana, associado a ácido folínico' },
          { label: 'Ácido folínico no adulto', value: '15 mg/dia até 1 semana após descontinuar pirimetamina' },
          { label: 'Ácido folínico na criança', value: '5–10 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Anemia hemolítica (deficiência de G6PD)', 'Anemia megaloblástica (evitar com ácido folínico)',
      'Leucopenia', 'Neutropenia', 'Trombocitopenia',
      'Exantema', 'Fotossensibilização', 'Convulsão', 'Ataxia', 'Nistagmo',
      'Anorexia', 'Náusea', 'Vômitos', 'Choque', 'Hematúria',
    ],
    contraindications: ['1º trimestre da gravidez (teratogênico)', 'Trocar por espiramicina na gestação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'pirvinio',
    name: 'Pirvínio',
    category: 'antiparasitarios',
    observations: 'Para oxiuríase/enterobíase. Não é primeira escolha. Não absorvido. Cora as fezes em vermelho.',
    brands: ['Pyr-pam — drágea 100 mg; suspensão oral 40 mL (10 mg/mL)'],
    presentations: [
      { label: 'Drágea 100 mg' },
      { label: 'Suspensão oral 10 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças e adultos — Enterobíase',
        items: [
          { label: 'Dose', value: '10 mg/kg em dose única em jejum. Máx: 600 mg/dose.' },
          { label: 'Repetição', value: 'Tratar todos os familiares e repetir após 1–2 semanas' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Náusea', 'Vômito', 'Dor abdominal', 'Diarreia',
      'Cora as fezes em vermelho', 'Fotossensibilização',
    ],
    contraindications: ['Insuficiência hepática', 'Insuficiência renal', 'Doença inflamatória intestinal'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'praziquantel',
    name: 'Praziquantel',
    category: 'antiparasitarios',
    observations: 'Antiparasitário de primeira escolha contra esquistossomose, cisticercose e neurocisticercose. Tomar junto ou após refeição, sem mastigar.',
    brands: [
      'Cisticid — comprimido 500 mg',
      'Praziquantel — comprimido 600 mg',
    ],
    presentations: [
      { label: 'Comprimido 500 mg' },
      { label: 'Comprimido 600 mg' },
    ],
    doses: [
      {
        group: 'Adultos e crianças > 4 anos',
        items: [
          { label: 'Esquistossomose', value: '50–60 mg/kg dose única, dividida em 3 doses' },
          { label: 'Teníase, difilobotríase', value: '10 mg/kg dose única' },
          { label: 'Himenolepíase', value: '15–25 mg/kg dose única ou em 2 dias. Repetir após 10 dias.' },
          { label: 'Cisticercose', value: '50 mg/kg/dia ÷ 3 doses por 14 dias' },
          { label: 'Neurocisticercose', value: '50 mg/kg/dia ÷ 3 doses por 15 dias. Associar dexametasona 6 mg/dia ou prednisona 40–60 mg/dia. Repetir após 3 meses se necessário.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Tontura', 'Vertigem', 'Mal-estar', 'Febre', 'Sonolência', 'Sedação',
      'Distúrbios visuais e de audição transitórios', 'Convulsão', 'Hipertensão intracraniana',
      'Anorexia', 'Náusea', 'Vômito', 'Dor abdominal',
      'Urticária', 'Erupção cutânea', 'Prurido', 'Sudorese', 'Mialgia',
      'Eosinofilia', 'Broncopneumonia por imunocomplexos',
    ],
    contraindications: ['Gravidez', 'Lactação', 'Cisticercose ocular', 'Insuficiência renal ou hepática'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'secnidazol',
    name: 'Secnidazol',
    category: 'antiparasitarios',
    observations: 'Imidazólico com atividade antiparasitária. Não associar com bebidas alcoólicas (efeito dissulfiram).',
    brands: ['Secnidazol — comprimido revestido 1.000 mg; suspensão oral 30 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 1.000 mg' },
      { label: 'Suspensão oral 30 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Amebíase intestinal, giardíase e tricomoníase', value: '30 mg/kg/dia. Máx: 2 g. 1 mL/kg/dia em dose única' },
          { label: 'Amebíase hepática', value: '10 mg/kg/dose por 5–7 dias' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Amebíase intestinal, giardíase', value: '2 g em dose única à noite' },
          { label: 'Amebíase hepática', value: '500 mg/dose 3×/dia por 5–7 dias' },
          { label: 'Tricomoníase vaginal', value: '2 g em dose única. Tratar parceiros sexuais.' },
          { label: 'Orientação', value: 'Tomar à noite, após refeição' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Cefaleia', 'Náusea', 'Vômito', 'Cólica', 'Gosto metálico', 'Dor abdominal',
      'Erupção cutânea', 'Leucopenia', 'Depressão medular (raros)',
    ],
    contraindications: [
      'Gravidez (principalmente 1º trimestre)', 'Doença neurológica ativa', 'Discrasias sanguíneas',
      'Não associar com álcool',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'tiabendazol',
    name: 'Tiabendazol',
    category: 'antiparasitarios',
    observations: 'Anti-helmíntico benzimidazólico potente, com alta frequência de efeitos colaterais que limita seu uso.',
    brands: ['Tiabendazol — comprimido 500 mg; suspensão oral 250 mg/5 mL; pomada 5%; loção 5%'],
    presentations: [
      { label: 'Comprimido 500 mg' },
      { label: 'Suspensão oral 250 mg/5 mL' },
      { label: 'Pomada 5%' },
      { label: 'Loção 5%' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Estrongiloidíase, tricuríase, ascaridíase resistentes', value: '50 mg/kg/dia ÷ 2 doses por 2–3 dias. Máx: 3000 mg/dia. Repetir 1–2 semanas depois. Em imunodeprimidos: até 28 dias.' },
          { label: 'Estrongiloidíase disseminada', value: '50 mg/kg/dia ÷ 2 doses por 7 dias; depois 500 mg/dia por 30 dias' },
          { label: 'Larva migrans visceral / toxocaríase', value: '25 mg/kg/dia ÷ 2–3 doses por 5 dias' },
          { label: 'Larva migrans cutânea', value: '25 mg/kg/dia ÷ 2–3 doses por 2–5 dias' },
          { label: 'Tratamento tópico', value: 'Pomada/loção no local 4–6×/dia por 5 dias' },
          { label: 'Triquinose', value: '25 mg/kg/dia ÷ 2–4 doses por 5 dias' },
          { label: 'Amebíase', value: '50 mg/kg/dia. Máx: 2 g/dia por 3 dias (intestinal) ou 5 dias (extraintestinal)' },
          { label: 'Orientação', value: 'Tomar após refeição' },
        ],
      },
    ],
    sideEffects: [
      'Anorexia', 'Náusea', 'Vômitos', 'Diarreia', 'Dor abdominal', 'Aumento de aminotransferases',
      'Tontura', 'Cefaleia', 'Sonolência', 'Zumbido', 'Formigamento', 'Alucinações', 'Parestesias',
      'Erupção cutânea', 'Prurido', 'Stevens-Johnson', 'Anafilaxia',
      'Edema conjuntival', 'Linfadenopatia', 'Hipotensão', 'Bradicardia',
      'Hematúria', 'Mau cheiro da urina', 'Hipoglicemia', 'Leucopenia',
    ],
    contraindications: ['Gravidez', 'Lactação', 'Insuficiência hepática', 'Insuficiência renal', 'Úlcera gástrica'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'tinidazol',
    name: 'Tinidazol',
    category: 'antiparasitarios',
    observations: 'Imidazólico de segunda geração com atividade antiprotozoária e antibacteriana. Não associar com álcool (efeito dissulfiram).',
    brands: ['Tinidazol — comprimido revestido 500 mg'],
    presentations: [{ label: 'Comprimido revestido 500 mg' }],
    doses: [
      {
        group: 'Crianças > 3 anos',
        items: [
          { label: 'Amebíase extraintestinal', value: '50 mg/kg/dia. Máx: 2 g/dia por 3–5 dias' },
          { label: 'Giardíase / tricomoníase', value: '50 mg/kg. Máx: 2 g. Dose única' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Amebíase sintomática não complicada', value: '2 g 1×/dia por 3 dias' },
          { label: 'Amebíase intestinal grave ou extraintestinal', value: '2 g 1×/dia por 5 dias' },
          { label: 'Giardíase, tricomoníase simples', value: '2 g em dose única. Tratar parceiro.' },
          { label: 'Tricomoníase resistente', value: '2 g/dia por 5–7 dias. Tratar parceiro.' },
          { label: 'Vaginose bacteriana / Gardnerella / Mobiluncus', value: '2 g/dia por 2 dias; ou 1 g/dia por 5 dias' },
          { label: 'Orientação', value: 'Tomar após refeição' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Náusea', 'Vômito', 'Cólica', 'Gosto metálico', 'Erupção cutânea',
      'Convulsões', 'Ataxia', 'Leucopenia', 'Depressão medular',
    ],
    contraindications: ['Gestação', 'Lactação', 'Não associar com álcool'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];