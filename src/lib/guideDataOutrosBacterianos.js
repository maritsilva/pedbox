export const outrosBacterianos = [
  {
    id: 'polimixina-b',
    name: 'Polimixina B',
    category: 'outros-bacterianos',
    observations: 'Polimixina para Pseudomonas, Acinetobacter e E. coli multirresistentes. Usar sempre em associação com outros antibióticos. Nefrotoxicidade menos pronunciada que a colistina.',
    brands: [
      'Polixi B — Fr. amp. 500.000 UI',
      'Bedfordpoly — Fr. amp. 500.000 UI e 1.000.000 UI',
    ],
    presentations: [
      { label: 'Fr. amp. 500.000 UI' },
      { label: 'Fr. amp. 1.000.000 UI' },
    ],
    doses: [
      {
        group: 'Crianças e Adultos',
        items: [
          { label: 'Dose usual EV', value: '15.000–25.000 UI/kg/dia ÷ 4–6 doses' },
          { label: 'Via IM', value: '25.000–30.000 UI/kg/dia ÷ 4–6 doses' },
          { label: 'Intratecal', value: '50.000 UI/dose' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [
        'Pseudomonas aeruginosa, Acinetobacter baumannii',
        'E. coli e Klebsiella multirresistentes',
      ],
      resistant: [
        'Proteus, Burkholderia, Serratia, Neisseria',
      ],
      warning: '',
    },
    sideEffects: [
      'Irritabilidade, fraqueza, sonolência',
      'Paralisia, apneia (bloqueio neuromuscular)',
      'Disfunção renal dose-dependente',
    ],
    contraindications: [],
  },
  {
    id: 'nifuroxazida',
    name: 'Nifuroxazida',
    category: 'outros-bacterianos',
    observations: 'Derivado nitrofurânico. Antibacteriano intestinal pouco absorvido. Uso restrito à diarreia bacteriana.',
    brands: [
      'Passifuril — susp. 200 mg/5 mL',
    ],
    presentations: [
      { label: 'Suspensão oral 200 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '800 mg/dia ÷ 2–4 doses. Se persistir após 5 dias, suspender e fazer antibiograma' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Náusea, vômito, diarreia',
      'Tontura, erupção cutânea',
    ],
    contraindications: [
      'Gravidez',
    ],
  },
];