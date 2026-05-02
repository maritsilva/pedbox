export const outrosBacterianos = [
  {
    id: 'nifuroxazida',
    name: 'Nifuroxazida',
    category: 'outros-bacterianos',
    observations: 'Derivado nitrofurânico. Antibacteriano intestinal pouco absorvido. Se persistir diarreia após 5 dias, suspender e fazer antibiograma.',
    brands: ['Passifuril — susp. 200 mg/5 mL'],
    presentations: [{ label: 'Suspensão 200 mg/5 mL' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '800 mg/dia ÷ 2–4 doses por até 5 dias' },
        ],
      },
    ],
    sensitivity: {
      susceptible: [],
      resistant: [],
      warning: '',
    },
    sideEffects: ['Náusea', 'Vômito', 'Diarreia', 'Tontura', 'Erupção cutânea'],
    contraindications: ['Gestantes'],
  },
  {
    id: 'polimixina-b',
    name: 'Polimixina B',
    category: 'outros-bacterianos',
    observations: 'Para Pseudomonas, Acinetobacter, E. coli multirresistentes. Usar sempre em associação.',
    brands: ['Polixi B — Fr. amp. 500.000 UI e 1.000.000 UI', 'Bedfordpoly — Fr. amp. 500.000 UI'],
    presentations: [
      { label: 'Fr. amp. 500.000 UI' },
      { label: 'Fr. amp. 1.000.000 UI' },
    ],
    doses: [
      {
        group: 'Crianças e Adultos',
        items: [
          { label: 'EV', value: '15.000–25.000 UI/kg/dia ÷ 4–6 doses' },
          { label: 'IM', value: '25.000–30.000 UI/kg/dia ÷ 4–6 doses' },
          { label: 'Intratecal', value: '50.000 UI/dose' },
        ],
      },
    ],
    sensitivity: {
      susceptible: ['Pseudomonas, Acinetobacter, E. coli, Klebsiella multirresistentes'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Irritabilidade, fraqueza, sonolência',
      'Paralisia, apneia',
      'Disfunção renal',
    ],
    contraindications: [],
  },
];