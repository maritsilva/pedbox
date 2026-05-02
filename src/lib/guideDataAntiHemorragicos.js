export const antiHemorragicos = [
  {
    id: 'acido-aminocaproico',
    name: 'Ácido Aminocaproico',
    category: 'anti-hemorragicos',
    observations: 'Ácido épsilon aminocaproico. Hemostático, redutor da fibrinólise.',
    brands: ['Ipsilon — comprimido 500 mg; frasco-ampola 50 mg/mL e 200 mg/mL'],
    presentations: [
      { label: 'Comprimido 500 mg' },
      { label: 'Frasco-ampola 50 mg/mL' },
      { label: 'Frasco-ampola 200 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Antifibrinólise',
        items: [
          { label: 'Oral: dose inicial', value: '50 a 100 mg/kg, seguida de 50 mg/kg/dose 4 vezes ao dia. Máx: 2 g/dose e 12 g/dia' },
          { label: 'EV', value: '50 a 100 mg/kg/dose, 2 a 4 vezes ao dia' },
        ],
      },
      {
        group: 'Adultos — Hemorragia',
        items: [
          { label: 'Oral', value: '5 g nas primeiras horas, seguido de 1 g/hora por 8 horas ou até controle do sangramento' },
          { label: 'EV', value: 'Dose inicial de 4 a 5 g em 1 hora, seguido de 1 g/hora por 8 horas ou até controle' },
        ],
      },
      {
        group: 'Adultos — Profilaxia de angioedema hereditário',
        items: [
          { label: 'Oral', value: '1 g/dose, 3 a 4 vezes ao dia. Máx: 8 g/dia' },
        ],
      },
    ],
    preparation: 'Diluir cada grama em 250 mL de SF, SGI ou Ringer.',
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: '15 a 25% da dose' },
    ],
    sideEffects: [
      'Tontura, cefaleia, fraqueza, arritmias, edema, hipotensão, hipertensão intracraniana, isquemia',
      'Miopatia, mioglobinúria, rabdomiólise, necrose muscular, hemorragia',
      'Trombose (maior em pacientes com histórico), diarreia, náusea, exantema',
      'Embolia pulmonar, disúria, obstrução do trato urinário, disfunção renal',
    ],
    contraindications: ['Coagulação intravascular ativa', 'Vasculopatias oclusivas'],
  },

  {
    id: 'acido-tranexamico',
    name: 'Ácido Tranexâmico',
    category: 'anti-hemorragicos',
    observations: 'Hemostático, antifibrinolítico. Auxiliar à reposição de fatores de coagulação na hemofilia e redução de sangramento cirúrgico.',
    brands: [
      'Transamin / Hemoblock / Trexacont — comprimido 250 e 500 mg; ampola 50 mg/mL',
      'Ácido tranexâmico — comprimido 250 mg; ampola 50 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido 250 mg' },
      { label: 'Comprimido 500 mg' },
      { label: 'Ampola 50 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Antifibrinólise',
        items: [
          { label: 'Oral', value: '100 a 1500 mg/dose, 3 vezes ao dia, por 5 dias' },
        ],
      },
      {
        group: 'Crianças — Profilaxia de angioedema hereditário',
        items: [
          { label: 'EV', value: '20 a 40 mg/kg/dia ÷ 2 a 3 doses, ou 500 mg/dose 4 vezes ao dia. Máx: 3000 mg/dia' },
        ],
      },
      {
        group: 'Adultos — Hemorragia por trauma ou cirurgia',
        items: [
          { label: 'EV', value: 'Bolus de 1000 mg em 10 minutos + infusão de 1000 mg ao longo de 8 horas' },
        ],
      },
      {
        group: 'Adultos — Outras indicações',
        items: [
          { label: 'Menorragia', value: 'Oral: 1000 a 1500 mg/dose, 3 vezes ao dia, por 5 dias' },
          { label: 'Epistaxe', value: 'Oral: 500 mg/dose, 3 vezes ao dia, por 7 dias' },
          { label: 'Prevenção de sangramento pós-parto (experimental)', value: 'EV: 1 a 4 g em 1 hora + 1 g/hora por 6 horas' },
          { label: 'Angioedema hereditário — profilaxia', value: 'Oral: 50 a 75 mg/kg/dia ÷ 2 a 3 doses' },
          { label: 'Angioedema hereditário — crise aguda', value: '25 mg/kg/dose EV ou 1000 mg/dose 4 vezes ao dia' },
          { label: 'Extração dentária em hemofílicos — EV', value: '10 mg/kg antes do procedimento; depois a cada 6 a 8 horas por 6 a 8 dias' },
          { label: 'Extração dentária em hemofílicos — oral', value: '25 mg/kg 2 h antes; depois 25 mg/kg/dose 3 a 4 h por 6 a 8 dias' },
          { label: 'Dose máxima', value: '75 mg/kg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Creatinina 1,4–2,8 mg/dL', value: '2600 mg/dia oral ou 20 mg/kg/dia EV' },
      { label: 'Creatinina 2,8–5,7 mg/dL', value: '1300 mg/dia oral ou 10 mg/kg/dia EV' },
      { label: 'Creatinina > 5,7 mg/dL', value: '650 mg/dia oral ou 5 mg/kg/dia EV' },
    ],
    sideEffects: [
      'Tontura, fadiga, cefaleia, náusea, vômito, diarreia, dor abdominal, dermatite',
      'Anemia, artralgia, mialgia, cãibra, distúrbios visuais',
      'Embolia pulmonar, necrose cortical renal, risco teórico de tromboembolismo',
      'EV: hemorragia subaracnóidea, edema cerebral ou infarto',
      'Injeção rápida: hipotensão e bradicardia',
    ],
    contraindications: [
      'Vasculopatia oclusiva', 'Coagulação intravascular', 'Doença tromboembólica ativa',
      'Trombose venosa profunda', 'Embolia pulmonar', 'Trombose cerebral',
    ],
  },

  {
    id: 'fibrinogenio',
    name: 'Fibrinogênio',
    category: 'anti-hemorragicos',
    observations: 'Agente hemostático utilizado em síndrome de desfibrinação, como complicações obstétricas, leucemia aguda, cirrose, traumatismos, cirurgias, infecções, choque e tumores.',
    brands: ['Haemocomplettan P — frasco-ampola 1 g'],
    presentations: [{ label: 'Frasco-ampola 1 g' }],
    doses: [
      {
        group: 'Adultos e Crianças',
        items: [
          { label: 'Hemorragia com hipofibrinogenemia < 100 mg/dL', value: 'Dose (mg/kg) = (nível-alvo em mg/dL − nível medido em mg/dL) × 1,7. Em geral: 1 a 2 g, podendo ir até 8 g nos casos graves' },
          { label: 'Fibrinogênio desconhecido', value: '70 mg/kg' },
          { label: 'Velocidade máxima de infusão', value: '5 mL/minuto' },
        ],
      },
    ],
    preparation: 'Reconstituir a 20 mg/mL com 50 mL de água para injetáveis. Monitorar ECG, pressão arterial e frequência cardíaca.',
    sideEffects: ['Cefaleia, eritema, prurido, alergia, vômito, fraqueza, febre, tromboembolismo'],
    contraindications: [],
  },

  {
    id: 'terlipressina',
    name: 'Terlipressina',
    category: 'anti-hemorragicos',
    observations: 'Agente vasoconstritor, análogo da vasopressina. Medicamento de escolha na hemorragia digestiva varicosa e na síndrome hepatorrenal.',
    brands: ['Glypressin — frasco-ampola 1 mg + diluente 5 mL; ampola 0,1 mg/mL'],
    presentations: [
      { label: 'Frasco-ampola 1 mg + diluente 5 mL' },
      { label: 'Ampola 0,1 mg/mL' },
    ],
    doses: [
      {
        group: 'Adultos — Hemorragia digestiva alta',
        items: [
          { label: 'EV bolus inicial', value: '2 mg; doses adicionais a cada 4 a 6 horas por 2 a 5 dias conforme peso: < 50 kg: 1 mg; 50–70 kg: 1,5 mg; > 70 kg: 2 mg. Dose máxima: 0,12 mg/kg' },
        ],
      },
      {
        group: 'Adultos — Síndrome hepatorrenal',
        items: [
          { label: 'EV bolus inicial', value: '1 mg; doses adicionais de 0,5 a 2 mg a cada 4 a 6 horas. Suspender após 3 dias se creatinina não reduzir > 25%' },
        ],
      },
    ],
    preparation: 'Após reconstituição: concentração de 0,2 mg/mL. Pode-se adicionar 10 mL de SF 0,9%. Geladeira por até 24 horas ou temperatura ambiente por até 12 horas.',
    sideEffects: ['Cefaleia, palidez, vasoconstrição, hipertensão, hiponatremia, dor abdominal, náusea, diarreia'],
    contraindications: ['Choque séptico', 'Insuficiência coronariana', 'Hipertensão não controlada'],
  },
];