export const equinocandinas = [
  {
    id: 'anidulafungina',
    name: 'Anidulafungina',
    category: 'equinocandinas',
    observations: 'Antifúngico sistêmico equinocandina para candidíase e aspergilose refratárias.',
    brands: ['Ecalta / Anidulafungina — Fr. amp. 100 mg'],
    presentations: [{ label: 'Frasco-ampola 100 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Candidíase invasiva peritoneal / intra-abdominal — ataque', value: '200 mg' },
          { label: 'Candidíase invasiva — manutenção', value: '100 mg/dia por ≥ 14 dias após última cultura positiva' },
          { label: 'Candidíase esofágica — ataque', value: '100 mg' },
          { label: 'Candidíase esofágica — manutenção', value: '50 mg/dia por 7 dias após melhora clínica' },
          { label: 'Infecções cardiovasculares por Candida', value: '100–200 mg/dia' },
        ],
      },
    ],
    preparation: 'Infusão venosa lenta: 1 mg/minuto.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Candida albicans, C. glabrata, C. tropicalis, C. parapsilosis, C. krusei, Aspergillus'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Cefaleia, distúrbios visuais, alergia, urticária',
      'Hipotensão, sobrecarga com infusão rápida, febre',
      'Hipopotassemia, aumento de enzimas hepáticas, diarreia, náusea, vômitos',
      'Hepatotoxicidade, dor abdominal, arritmias',
      'Leucopenia, neutropenia, trombocitopenia, flebite, erupção cutânea',
    ],
    contraindications: [],
  },
  {
    id: 'caspofungina',
    name: 'Caspofungina',
    category: 'equinocandinas',
    observations: 'Equinocandina para candidíase e aspergiloses invasivas graves ou refratárias. Ineficaz contra outros fungos; baixa penetração no SNC.',
    brands: ['Cancidas — Fr. amp. 50 e 70 mg'],
    presentations: [
      { label: 'Frasco-ampola 50 mg' },
      { label: 'Frasco-ampola 70 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 3 meses',
        items: [
          { label: 'Dose de ataque', value: '70 mg/m²/dia no 1º dia (máx 70 mg/dia)' },
          { label: 'Manutenção', value: '50 mg/m²/dia (máx 70 mg/dia)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Aspergilose / candidíase sistêmica / candidíase orofaríngea — ataque', value: '70 mg/dia no 1º dia' },
          { label: 'Aspergilose / candidíase sistêmica — manutenção', value: '50 mg/dia por 14 dias após melhora clínica' },
          { label: 'Candidíase esofágica', value: '50 mg/dia por 14–21 dias' },
        ],
      },
    ],
    preparation: 'Reconstituir com 10,5 mL de água para injeção. Diluir em 250 mL de SF. Não diluir em SG. Infundir em 1 hora.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Candida, Aspergillus'],
      resistant: [],
      warning: 'Uso concomitante com ciclosporina piora hepatotoxicidade.',
    },
    sideEffects: [
      'Calafrio, febre, cefaleia, insônia, diarreia, vômito, náusea, dor abdominal',
      'Taquicardia, erupção, prurido, eritema, edema',
      'Hipopotassemia, hipercalcemia, anemia, eosinofilia, neutropenia',
      'Transaminases aumentadas, fosfatase alcalina aumentada',
      'Flebite, tromboflebite, distúrbio renal, proteinúria, hematúria',
      'Dispneia, broncoespasmo, anafilaxia, alteração de coagulação, sudorese',
    ],
    contraindications: [],
  },
  {
    id: 'micafungina',
    name: 'Micafungina',
    category: 'equinocandinas',
    observations: 'Equinocandina usada como primeira linha no tratamento de candidíases invasivas.',
    brands: ['Mycamine — Fr. amp. 50 e 100 mg'],
    presentations: [
      { label: 'Frasco-ampola 50 mg' },
      { label: 'Frasco-ampola 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Candidíase sistêmica', value: '2 mg/kg/dia (máx 100 mg/dose)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Candidíase sistêmica / sepse / invasiva', value: '100–150 mg/dia por 10–30 dias (média 14 dias)' },
          { label: 'Candidíase esofágica', value: '150 mg/dia por 14–21 dias' },
          { label: 'Profilaxia em transplante de medula', value: '50 mg/dia' },
        ],
      },
    ],
    preparation: 'Infusão venosa lenta: < 1 mg/minuto.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: {
      susceptible: ['Candida albicans, C. glabrata, C. tropicalis, C. krusei, C. parapsilosis'],
      resistant: [],
      warning: '',
    },
    sideEffects: [
      'Febre, náusea, vômitos, diarreia, dor abdominal, anorexia, cefaleia, insônia',
      'Ansiedade, fadiga, calafrios, hipotensão, taquicardia, edema, tosse, dispneia',
      'Flebite, erupção cutânea, depressão medular, hipopotassemia',
      'Reações alérgicas relacionadas à infusão rápida',
    ],
    contraindications: [],
  },
];