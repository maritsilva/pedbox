// Broncodilatadores anticolinérgicos

export const anticolinergicos = [
  {
    id: 'glicopirronio',
    name: 'Glicopirrônio',
    category: 'broncodilatadores-anticolinergico',
    observations: 'Antimuscarínico de ação longa, usado em dose única diária.',
    brands: [
      'Seebri — Cápsula inalante: 50 µg + inalador',
      'Glicopirrônio + indacaterol — Cápsula inalante: 50 + 110 µg + inalador',
    ],
    presentations: [{ label: 'Cápsula inalante 50 µg' }],
    doses: [
      {
        group: 'Adultos — DPOC',
        items: [
          { label: 'Dose', value: '50 µg/dose, 1 vez ao dia' },
          { label: 'Máximo', value: '1 dose/dia' },
        ],
      },
    ],
    preparation: 'NÃO usar em crises agudas de broncoespasmo, apenas para manutenção em longo prazo. Explicar que as cápsulas são para usar no dispositivo de inalação, não para ingerir. Orientar aspirar cápsula mais de uma vez pois pode ficar conteúdo no dispositivo.',
    sideEffects: [
      'Fadiga, insônia, boca seca',
      'Gastroenterite, dispepsia, diarreia, náusea, dor abdominal',
      'Artralgia, dor nas costas',
      'Dispneia, broncoespasmo paradoxal',
      'Sinusite, bronquite, nasofaringite, rinite, tosse',
      'Fibrilação atrial, angioedema, disúria',
    ],
    contraindications: [],
  },

  {
    id: 'ipratropio',
    name: 'Ipratrópio',
    suffix: 'Brometo de ipratrópio',
    category: 'broncodilatadores-anticolinergico',
    observations: 'Antimuscarínico de ação curta com pouca absorção sistêmica. Início em 20 min, pico em 60 min. Cada 1 mg brometo = 0,8 mg ipratrópio.',
    brands: [
      'Atrovent — Spray: 20 µg/dose; Gotas: 0,25 mg/mL (0,0125 mg/gota)',
      'Aerodivent — Gotas: 0,25 mg/mL',
      'Ipratrópio — Spray: 20 µg/dose; Solução inalação: 0,25 mg/mL',
      'Brometo de ipratrópio — Gotas: 0,25 mg/mL',
      'Ipratrópio + fenoterol — Spray: 20 + 50 µg/dose',
    ],
    presentations: [{ label: 'Spray 20 µg/dose' }, { label: 'Solução inalação 0,25 mg/mL' }],
    doses: [
      {
        group: 'Crianças — Crise aguda asma grave',
        items: [
          { label: 'Nebulização', value: '1-2 gotas/kg/dose, até 0,2 mg. Ou 0,25 mg brometo = 1 mL = 20 gotas' },
          { label: 'Intervalo', value: 'A cada 20 min por 1h, depois a cada 6-8h. Máx: 0,5 mg/dose' },
        ],
      },
      {
        group: 'Crianças — Crise aguda spray',
        items: [
          { label: 'Dose', value: '2-4 jatos/dose' },
          { label: 'Intervalo', value: 'A cada 20 min na 1ª hora, depois a cada 6-8h' },
        ],
      },
      {
        group: 'Crianças > 2 anos — Asma manutenção',
        items: [
          { label: 'Nebulização', value: '0,1-0,2 mg ou 0,125-0,25 mg brometo. 0,5-1 mL ou 10-20 gotas, 3-4x/dia' },
          { label: 'Spray', value: '1-2 jatos/dose, 3-4x/dia' },
        ],
      },
      {
        group: 'Adultos — Crise aguda/exacerbação DPOC',
        items: [
          { label: 'Nebulização', value: '0,4 mg ou 0,5 mg brometo. 2 mL ou 40 gotas/dose' },
          { label: 'Intervalo', value: 'A cada 20-30 min por 3 doses, depois a cada 4-6h. Continuar 30-60 min' },
        ],
      },
      {
        group: 'Adultos — Crise aguda spray',
        items: [
          { label: 'Dose', value: '2-8 jatos/dose' },
          { label: 'Intervalo', value: 'A cada 20 min na 1ª hora, depois a cada 4-6h' },
        ],
      },
      {
        group: 'Adultos — Manutenção asma/DPOC',
        items: [
          { label: 'Spray', value: '2-4 jatos/dose, 4-6x/dia. Máx: 12 jatos/dia' },
          { label: 'Nebulização', value: '20-40 gotas/dose, 3x/dia' },
        ],
      },
    ],
    preparation: 'Usar sempre associado a β2 ação curta (fenoterol ou salbutamol). Diluir solução para 3-4 mL com SF 0,9%. Fluxo 6-8 L/min.',
    sideEffects: [
      'Normalmente bem tolerado',
      'Cefaleia, nervosismo, tontura',
      'Dor aguda nos olhos, dificuldade acomodação visual',
      'Glaucoma, agitação, prurido, alopecia',
      'Pode piorar broncoespasmo, tosse, dispneia, aumento catarro',
      'Sinusite, sintomas resfriado, congestão nasal, coriza',
      'Irritação garganta, secura nasal',
      'Taquicardia, palpitação, hipertensão, infarto, angioedema, hipotensão',
      'Boca seca, estomatite, irritação garganta, náusea, vômitos',
      'Constipação, disfagia, dor costas',
      'Reduz salivação → aumenta risco de cáries (melhorar higiene oral)',
    ],
    contraindications: [],
  },

  {
    id: 'tiotropio',
    name: 'Tiotrópio',
    category: 'broncodilatadores-anticolinergico',
    observations: 'Antimuscarínico de ação longa, usado em dose única diária.',
    brands: ['Spiriva Respimat — Spray: 2,5 µg/dose'],
    presentations: [{ label: 'Spray 2,5 µg/dose' }],
    doses: [
      {
        group: 'Adultos — Asma (crises graves com tônus colinérgico aumentado)',
        items: [{ label: 'Dose', value: '2,5 µg/dose, 1 jato, 1x/dia' }],
      },
      {
        group: 'Adultos — DPOC com exacerbações frequentes',
        items: [{ label: 'Dose', value: '5 µg (2 jatos), 1x/dia' }],
      },
    ],
    sideEffects: [
      'Vertigem, boca seca, constipação',
      'Tosse, irritação garganta',
      'Sinusite, faringite, sintomas resfriado, congestão nasal, coriza',
      'Irritação garganta, taquicardia, arritmia',
      'Dificuldade urinar, visão borrada para perto',
    ],
    contraindications: [],
  },

  {
    id: 'umeclidinio',
    name: 'Umeclidínio',
    category: 'broncodilatadores-anticolinergico',
    observations: 'Antimuscarínico de ação longa, usado em dose única diária.',
    brands: [
      'Vanisto — Pó inalante: 62,5 µg/dose',
      'Umeclidínio + vilanterol — Anoro Ellipta — Pó inalante: 62,5 + 25 µg/dose',
    ],
    presentations: [{ label: 'Pó inalante 62,5 µg/dose' }, { label: 'Pó inalante 62,5 + 25 µg/dose' }],
    doses: [
      {
        group: 'Adultos — DPOC',
        items: [{ label: 'Dose', value: '62,5 µg, 1 jato, 1x/dia' }],
      },
    ],
    preparation: 'NÃO usar em tratamentos agudos.',
    sideEffects: [
      'Taquicardia, dor de dente, dor abdominal',
      'Hematoma, artralgia, mialgia',
      'Faringite, sinusite, rinite, tosse',
      'Sintomas resfriado',
    ],
    contraindications: [],
  },
];