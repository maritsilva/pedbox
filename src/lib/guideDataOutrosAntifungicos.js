export const outrosAntifungicos = [
  {
    id: 'flucitosina',
    name: 'Flucitosina',
    category: 'outros-antifungicos',
    observations: 'Antimetabólico análogo da pirimidina. Não produzido no Brasil. Usado associado à anfotericina em infecções fúngicas graves e refratárias (endocardite, meningite). Exige ajuste na insuficiência renal.',
    brands: [],
    presentations: [],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose usual', value: '25 mg/kg/dose 4×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Endocardite / meningite fúngica', value: '50–100 mg/kg/dia ÷ 4 doses (associado à anfotericina)' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Exige ajuste de dose' }],
    sensitivity: {
      susceptible: ['Candida, Cryptococcus'],
      resistant: [],
      warning: 'Não produzido no Brasil. Usar sempre em associação.',
    },
    sideEffects: [
      'Toxicidade miocárdica, parada cardíaca',
      'Leucopenia, trombocitopenia, plaquetopenia',
      'Hepatotoxicidade, anemia aplástica',
      'Vômitos, diarreia',
    ],
    contraindications: [],
  },
  {
    id: 'griseofulvina',
    name: 'Griseofulvina',
    category: 'outros-antifungicos',
    observations: 'Antifúngico oral útil em dermatofitoses, tineas do couro cabeludo, pele e unhas por Microsporum, Epidermophyton ou Trichophyton que não respondem a tratamento tópico. Ineficaz para Candida.',
    brands: ['Fulcin / Griseofulvina — comp. 500 mg'],
    presentations: [{ label: 'Comprimido 500 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose usual', value: '10–25 mg/kg/dia ÷ 1–2 doses' },
          { label: '15–25 kg', value: '125–250 mg/dia' },
          { label: '> 25 kg', value: '250–500 mg/dia' },
          { label: 'Duração', value: 'Igual ao adulto' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '500 mg/dia' },
          { label: 'Infecções graves', value: '750–1000 mg/dia ÷ 1–2 doses' },
          { label: 'Tinea do corpo', value: '2–4 semanas' },
          { label: 'Tinea inguinal e dos pés', value: '4–8 semanas' },
          { label: 'Tinea do cabelo', value: '4–12 semanas' },
          { label: 'Tinea da unha (mão / pé)', value: '4–6 meses / 6–24 meses' },
        ],
      },
    ],
    preparation: 'Tomar após as refeições. Evitar exposição solar ou usar protetor fator > 20. Monitorar função hepática/renal, hemograma e função hematopoética.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Microsporum, Epidermophyton, Trichophyton'],
      resistant: ['Candida'],
      warning: 'Reduz efeito de contraceptivos.',
    },
    sideEffects: [
      'Alergia, erupção cutânea, urticária, náusea, vômitos, diarreia',
      'Cefaleia, tontura, insônia, fadiga, confusão mental',
      'Parestesia de mãos e pés, pseudotumor cerebral, neurite, fotossensibilização',
      'Lúpus-like, leucopenia, granulocitopenia, hepatotoxicidade',
    ],
    contraindications: ['Lesão hepatocelular', 'Lúpus', 'Gestação', 'Porfiria'],
  },
  {
    id: 'terbinafina',
    name: 'Terbinafina',
    category: 'outros-antifungicos',
    observations: 'Antifúngico oral para micoses de unha por Trichophyton, Microsporum e Epidermophyton. Opção para micoses sistêmicas.',
    brands: ['Lamisil / Terbinafina — comp. 250 mg'],
    presentations: [{ label: 'Comprimido 250 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Onicomicose — 10–20 kg', value: '62,5 mg/dia' },
          { label: 'Onicomicose — 20–40 kg', value: '125 mg/dia' },
          { label: 'Dose por peso', value: '5 mg/kg/dia' },
          { label: 'Duração', value: 'Igual ao adulto' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '250 mg/dia' },
          { label: 'Couro cabeludo', value: '3 semanas' },
          { label: 'Onicomicose das mãos', value: '6 semanas' },
          { label: 'Onicomicose dos pés', value: '12 semanas' },
          { label: 'Tinea da virilha e do pé', value: '2–6 semanas' },
          { label: 'Tinea do cabelo / tonsurante', value: '4–6 semanas' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Trichophyton, Microsporum, Epidermophyton'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Dispepsia, náusea, vômito, dor abdominal, anorexia',
      'Alopecia, erupção cutânea, prurido, dermatite esfoliativa, anafilaxia',
      'Cefaleia, tontura, vertigem, linfopenia, neutropenia, trombocitopenia',
      'Aumento de transaminases, disfunção hepática',
    ],
    contraindications: ['Hepatopatia ou nefropatia preexistente'],
  },
];