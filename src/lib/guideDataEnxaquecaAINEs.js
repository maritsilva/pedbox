export const analgesicoEnxaqueca = [
  {
    id: 'analgesicos-cafeina',
    name: 'Analgésicos com Cafeína',
    category: 'enxaqueca',
    observations: 'Uso crônico pode induzir cefaleia por abstinência. Não ultrapassar 400 mg de cafeína/dia. Evitar em crianças e idosos. Ref: 1 lata de refrigerante cola ≈ 40 mg; 2 latinhas de energéticos ≈ 100 mg.',
    brands: [
      'Cafeína + AAS — comp. revestido 65 + 650 mg',
      'Cafeína + AAS + paracetamol — comp. revestido 65 + 250 + 250 mg',
      'Cafeína + dipirona — comprimido 65 + 500 mg',
      'Cafeína + paracetamol — comp. revestido 65 + 500 mg',
      'Cafeína + paracetamol + propifenazona — comp. revestido 50 + 250 + 150 mg',
    ],
    presentations: [
      { label: 'Comprimido com cafeína 65 mg + analgésico' },
    ],
    doses: [
      {
        group: 'Adultos — Enxaqueca e dor leve a moderada',
        items: [
          { label: 'Dose', value: '1 a 2 comprimidos por dose, até a cada 6 h' },
          { label: 'Orientação', value: 'Basear a dose na concentração do analgésico, não da cafeína. Melhor evitar em pacientes com insônia.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Irritação gastrointestinal', 'Azia', 'Desconforto epigástrico',
      'Insônia', 'Agitação', 'Ansiedade', 'Nervosismo', 'Inquietação', 'Tremores', 'Cefaleia',
      'Estimulação excessiva do SNC', 'Taquicardia', 'Arritmia cardíaca', 'Palpitações', 'Taquiarritmia',
      'Aumento da diurese',
      'A redução do sono pode durar até 8 h no adulto',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'diidroergotamina',
    name: 'Diidroergotamina',
    category: 'enxaqueca',
    observations: 'Ergótico agonista serotoninérgico. Útil em enxaquecas de maior duração ou alta taxa de recorrência. Não usar em enxaquecas complexas (hemiparesia, oftalmoplegia, diplopia, inconsciência). Não usar por mais de 10 dias seguidos.',
    brands: [
      'Diidroergotamina + dipirona + cafeína — comp. 1 + 350 + 100 mg',
      'Diidroergotamina + paracetamol + cafeína + metoclopramida — comp. 1 + 450 + 75 + 10 mg',
    ],
    presentations: [
      { label: 'Comprimido 1 mg de diidroergotamina (com associações)' },
    ],
    doses: [
      {
        group: 'Adultos — Enxaqueca, crises moderadas',
        items: [
          { label: 'Dose', value: '1–2 mg de diidroergotamina por dose. Se necessário, repetir após 30 min. Máx: 6 mg/dia.' },
          { label: 'Orientação', value: 'Não usar por mais de 10 dias seguidos. Limitar cafeína durante o uso.' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência', 'Câimbras', 'Mialgia', 'Fraqueza', 'Vertigem',
      'Náusea', 'Vômito', 'Dor abdominal', 'Polidipsia',
      'Hipertensão aguda', 'Angina', 'Claudicação intermitente', 'Parestesias',
      'Risco de necrose de extremidades', 'Ergotismo',
      'Uso acima de 10 mg/semana pode causar cefaleia de rebote',
    ],
    contraindications: [
      'Vasculopatias periféricas', 'Úlcera péptica', 'Hipertensão não controlada', 'Coronariopatia',
      'Lactação', 'Doença renal ou hepática grave',
      'Não associar com inibidor de protease ou macrolídeos',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'isometepteno-dipirona-cafeina',
    name: 'Isometepteno + Dipirona + Cafeína',
    category: 'enxaqueca',
    observations: 'Derivado ergótico para crises leves de enxaqueca. Não usar em casos complexos ou durante aura. Pode provocar cefaleia por rebote se usada excessivamente. Pode causar coloração avermelhada na urina.',
    brands: ['Neosaldina / Neosaldor / Sedamed / Tensaldin — drágea 30 + 300 + 30 mg; gotas 50 + 300 + 30 mg/mL'],
    presentations: [
      { label: 'Drágea 30 + 300 + 30 mg' },
      { label: 'Gotas 15 mL (50 + 300 + 30 mg/mL)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose', value: '≈ 1 gota/kg/dose (1 gota = 1,7 mg isometepteno + 10 mg dipirona)' },
        ],
      },
      {
        group: 'Adultos — Enxaqueca / dor leve a moderada',
        items: [
          { label: 'Dose', value: '60 mg de isometepteno/dose = 1–2 drágeas ou 40 gotas por dose' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal ou hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Náusea', 'Vômitos', 'Rubor', 'Sudorese', 'Hipertensão', 'Hiperglicemia',
      'Vasoconstrição', 'Anafilaxia', 'Hipotensão', 'Broncodilatação',
      'Relaxamento da musculatura lisa', 'Diplopia', 'Midríase', 'Miose',
      'Anemia', 'Cefaleia por rebote (uso excessivo)',
    ],
    contraindications: [
      'Hipertensão não controlada', 'Crise hipertensiva', 'Glaucoma', 'Cardiopatias',
      'Discrasias sanguíneas', 'Porfiria', 'Deficiência de G6PD', 'Gravidez', 'Amamentação',
      'Interações: IMAO, diidroergotamina, triptanos, varfarina, clonidina',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'naratriptana',
    name: 'Naratriptana',
    category: 'enxaqueca',
    observations: 'Triptano para alívio de crises agudas. Ação em 2–4 horas. Sem ação profilática.',
    brands: ['Naramig / Naratrin — comprimido revestido 2,5 mg'],
    presentations: [{ label: 'Comprimido revestido 2,5 mg' }],
    doses: [
      {
        group: 'Adultos > 18 anos — Crise aguda de enxaqueca',
        items: [
          { label: 'Dose', value: '1 comprimido por dose. Repetir após 4 h se persistir. Máx: 5 mg/dia.' },
          { label: 'Orientação', value: 'Tomar com copo cheio de água' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 15–30 mL/min', value: 'Máx 2,5 mg/dia' },
      { label: 'ClCr < 15 mL/min', value: 'Evitar' },
      { label: 'Insuficiência hepática grave', value: 'Evitar' },
    ],
    sideEffects: [
      'Cefaleia', 'Parestesia', 'Formigamento', 'Agitação', 'Tontura', 'Sonolência', 'Cansaço',
      'Sensação de calor', 'Vertigem', 'Sudorese', 'Câimbras', 'Mialgia', 'Disestesia',
      'Sensação de mal-estar indefinida', 'Confusão mental', 'Sonhos anormais',
      'Náusea', 'Vômitos', 'Boca seca', 'Aumento transitório de transaminases',
      'Dor torácica', 'Sensação de opressão no peito ou garganta', 'Rubor',
      'Hipertensão', 'Arritmia', 'Taquicardia', 'Agravamento de angina',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'rizatriptana',
    name: 'Rizatriptana',
    category: 'enxaqueca',
    observations: 'Triptano para alívio rápido de crises agudas. Ação em 30 minutos. Sem ação profilática. Usar apenas se houver certeza do diagnóstico de enxaqueca. Pode causar cefaleia secundária por uso semanal frequente.',
    brands: ['Maxalt / Maxalt RPD — comprimido revestido 10 mg; disco sublingual 10 mg'],
    presentations: [
      { label: 'Comprimido revestido 10 mg' },
      { label: 'Comprimido orodispersível 10 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '< 40 kg', value: '5 mg/dose' },
          { label: '≥ 40 kg', value: '10 mg/dose' },
        ],
      },
      {
        group: 'Adultos — Crise aguda de enxaqueca',
        items: [
          { label: 'Dose', value: '10 mg/dose. Repetir após 2 h se necessário. Máx: 30 mg/dia.' },
        ],
      },
    ],
    sideEffects: [
      'Mesmos efeitos adversos dos triptanos em geral',
      'Pode causar cefaleia secundária por uso semanal frequente',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar associação com opioides, antieméticos, antipsicóticos e antidepressivos moduladores de serotonina (risco de síndrome serotoninérgica).' },
  },
  {
    id: 'sumatriptana',
    name: 'Sumatriptana',
    category: 'enxaqueca',
    observations: 'Triptano para alívio rápido de crises agudas. Não age como profilático. Único triptano que não atravessa a barreira hematoencefálica. Aguardar 24 h após uso de diidroergotamina.',
    brands: [
      'Imigran / Sumax — comp. revestido 50 e 100 mg; spray nasal 20 mg/jato; seringa preenchida 6 mg/0,5 mL',
      'Sumatriptana + naproxeno — comp. 50 + 500 mg; comp. 85 + 500 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 50 mg e 100 mg' },
      { label: 'Spray nasal 20 mg/jato' },
      { label: 'Seringa preenchida 6 mg/0,5 mL (SC)' },
    ],
    doses: [
      {
        group: 'Adultos — Crise aguda de enxaqueca',
        items: [
          { label: 'Oral', value: '25 mg/dose. Se não houver melhora, repetir após 2 h (25–100 mg/dose). Máx: 200 mg/dia.' },
          { label: 'SC', value: '6 mg/dose. Repetir após 1 h se necessário. Máx: 12 mg/dia.' },
          { label: 'Nasal', value: '20 mg/dose. Repetir após 2 h se necessário (5–20 mg/dose). Máx: 40 mg/dia.' },
          { label: 'Orientação', value: 'Solução injetável: uso SC somente. Não usar IM ou EV.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      { label: 'Insuficiência hepática grave', value: 'Evitar' },
    ],
    sideEffects: [],
    contraindications: [
      'Coronaropatia', 'Hipertensão não controlada', 'Doença vascular periférica',
      'Disfunção hepática ou renal grave', 'Enxaqueca com hemiplegia',
      'Pacientes com risco aumentado de AVC', 'Aterosclerose importante',
      'Uso simultâneo com derivados do ergot', 'Uso de IMAO',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'zolmitriptana',
    name: 'Zolmitriptana',
    category: 'enxaqueca',
    observations: 'Triptano para alívio rápido e controle de crise. Sem ação profilática.',
    brands: ['Zomig / Zomig OD — comprimido 2,5 mg; comprimido orodispersível 2,5 mg'],
    presentations: [
      { label: 'Comprimido 2,5 mg' },
      { label: 'Comprimido orodispersível 2,5 mg' },
    ],
    doses: [
      {
        group: 'Adultos — Crise aguda de enxaqueca',
        items: [
          { label: 'Dose', value: '2,5–5 mg/dose. Se não houver melhora, repetir em 2 h. Máx: 10 mg/dia.' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const ainesDrugs = [
  {
    id: 'aceclofenaco',
    name: 'Aceclofenaco',
    category: 'aines',
    observations: 'Derivado do ácido arilacético. Eficácia semelhante ao diclofenaco. Não recomendado em crianças.',
    brands: ['Proflam / Aceclo-gran — comprimido revestido 100 mg'],
    presentations: [{ label: 'Comprimido revestido 100 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Anti-inflamatório / analgésico / osteoartrites', value: '100 mg/dose 2×/dia. Tomar após refeições com copo de água.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Evitar' }],
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Úlcera', 'Hemorragia digestiva',
      'Tontura', 'Cefaleia', 'Alergia', 'Erupção cutânea', 'Epidermólise',
      'Disfunção renal', 'Leucopenia', 'Neutropenia', 'Risco de trombose',
    ],
    contraindications: ['História de anafilaxia com salicilatos ou AINEs', 'Úlcera péptica', 'Tratamento de dor perioperatória', 'Hipertensão arterial', 'Asma'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'acido-mefenâmico',
    name: 'Ácido Mefenâmico',
    category: 'aines',
    observations: 'AINE de curta duração. Pico de ação: 2–4 h. Não usar por mais de 1 semana. Melhor evitar em crianças e idosos.',
    brands: ['Ponstan / Ácido mefenâmico — comprimido 500 mg'],
    presentations: [{ label: 'Comprimido 500 mg' }],
    doses: [
      {
        group: 'Crianças > 14 anos e Adultos',
        items: [
          { label: 'Dor leve a moderada / dismenorreia', value: '500 mg/dose 1–3×/dia. Tomar após refeições. Não usar por mais de 1 semana.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Evitar' }],
    sideEffects: [
      'Convulsões', 'Cefaleia', 'Sonolência', 'Vertigem', 'Tontura',
      'Diarreia', 'Constipação', 'Náuseas', 'Dispepsia', 'Dor abdominal', 'Vômitos',
      'Anemia hemolítica', 'Hemorragia', 'Agranulocitose', 'Exantema', 'Broncospasmo',
    ],
    contraindications: ['Úlcera péptica', 'Hipertensão', 'Asma'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'celecoxibe',
    name: 'Celecoxibe',
    category: 'aines',
    observations: 'Inibidor seletivo de COX-2. Menor risco de úlcera/gastrite que os inibidores não seletivos. Risco maior de coronariopatia e AVC com altas doses (> 200 mg/dia). Usar com cuidado em pacientes com risco cardíaco.',
    brands: ['Celebra / Celecoxibe — cápsulas 100 e 200 mg'],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Cápsula 200 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '≥ 25 kg', value: '100 mg/dose 2×/dia' },
          { label: '10–25 kg', value: '50 mg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite / espondilite / osteoartrites', value: '200 mg/dia em 1–2 doses' },
          { label: 'Dor aguda / dismenorreia', value: '200 mg/dose 2×/dia; ou 400 mg no 1º dia' },
          { label: 'Polipose adenomatosa familiar', value: '400 mg/dose 2×/dia' },
          { label: 'Crise de gota', value: '400 mg/dose 2×/dia; ou 800 mg no 1º dia, depois 400 mg 1×/dia por 7 dias' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal grave', value: 'Melhor evitar' }],
    sideEffects: [
      'Dor abdominal', 'Diarreia', 'Náusea', 'Vômito', 'Estomatite', 'Dispepsia', 'Gastrite',
      'Úlcera', 'Sangramento gástrico', 'Esofagite', 'Colite',
      'Cefaleia', 'Tontura', 'Insônia', 'Erupção cutânea', 'Exantema',
      'Hipertensão', 'Angina', 'Infarto', 'Edema', 'Disfunção renal', 'Disúria', 'Hematúria',
      'Conjuntivite', 'Aumento de transaminases', 'Anemia', 'Plaquetopenia',
      'Faringite', 'Sinusite', 'Epistaxe',
    ],
    contraindications: ['Úlcera péptica', 'Hipertensão', 'Cardiopatias', 'Asma', 'Doença hepática'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'cetoprofeno',
    name: 'Cetoprofeno',
    category: 'aines',
    observations: 'Derivado do ácido propiônico. Eficácia semelhante a outros AINEs. Uso EV: diluir em 100–150 mL de SF 0,9% ou SGI 5%, infundir em 20–30 min. Uso IM: diretamente.',
    brands: [
      'Profenid / Artrinid / Bi Profenid / Cetoprofeno — cápsulas 50 mg; comp. retard 200 mg; comp. entérico 100 mg; Fr. amp. EV 100 mg; ampola IM 100 mg; gotas 20 mg/mL; supositório 100 mg; cápsulas LP 150, 160 e 320 mg',
      'Cetoprofeno + omeprazol — cápsula LP 200 + 20 mg',
    ],
    presentations: [
      { label: 'Cápsula 50 mg' },
      { label: 'Comprimido retard 200 mg' },
      { label: 'Gotas 20 mg/mL' },
      { label: 'Ampola EV 100 mg' },
      { label: 'Ampola IM 100 mg' },
      { label: 'Supositório 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar)',
        items: [
          { label: '1 a 6 anos', value: '1 mg/kg/dose 3–4×/dia. 1 gota = 1 mg' },
          { label: '7 a 11 anos', value: '25 mg 3–4×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Anti-inflamatório / osteoartrite / artrite', value: '50 mg/dose 3–4×/dia; ou 200–300 mg/dia ÷ 2–3 doses' },
          { label: 'Comprimido LP / cápsula LP', value: '200–320 mg/dia em 1–2 doses. Máx: 300 mg/dia' },
          { label: 'Dismenorreia', value: '50 mg/dose 3×/dia' },
          { label: 'Enxaqueca', value: '50–75 mg no início da crise' },
          { label: 'Dor moderada a intensa (EV/IM)', value: '100 mg/dose 2×/dia. Máx: 300 mg/dia por 2 dias' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal', value: 'Máx 150 mg/dia' },
      { label: 'ClCr ≤ 25 mL/min', value: 'Máx 100 mg/dia' },
      { label: 'Insuficiência hepática', value: 'Máx 100 mg/dia' },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Diarreia', 'Dor abdominal', 'Epigastralgia', 'Constipação', 'Flatulência',
      'Úlcera péptica', 'Sangramento digestivo', 'Perfuração intestinal', 'Anemia por perda GI crônica',
      'Cefaleia', 'Vertigem', 'Sonolência', 'Tontura', 'Depressão', 'Piora do humor',
      'Erupção cutânea', 'Prurido', 'Broncoespasmo', 'Vasculite',
      'Dor e ardor intensos na via venosa', 'Disfunção renal', 'Nefrite intersticial', 'Infecção urinária',
      'Anti-inflamatórios não hormonais aumentam risco de embolia aguda',
    ],
    contraindications: [
      'Úlcera péptica', 'Gastrite', 'Porfiria', 'Hipertensão', 'Tratamento de dor perioperatória',
      'Asma', 'Depressão medular', 'Gestação (último trimestre)',
      'Não usar junto com cidofovir',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar associação com outros AINEs, anticoagulantes. Risco de toxicidade com ciclosporina e metotrexato.' },
  },
  {
    id: 'diclofenaco-potassico',
    name: 'Diclofenaco Potássico',
    category: 'aines',
    observations: 'AINE útil para dor aguda ou crônica. Não há diferença significativa de eficácia entre diclofenaco sódico e potássico.',
    brands: [
      'Cataflam / Benevran / Fenaflan / Neotaflan — drágea 50 mg; suspensão oral 10 mg/5 mL; gotas 15 mg/mL; comp. dispersível/revestido 50 mg; ampola 25 mg/mL',
    ],
    presentations: [
      { label: 'Drágea/Comprimido 50 mg' },
      { label: 'Suspensão oral 10 mg/5 mL' },
      { label: 'Gotas 15 mg/mL (1 gota = 0,5 mg)' },
      { label: 'Ampola 25 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças > 1 ano',
        items: [
          { label: 'Artrites crônicas', value: '2–3 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Analgésico', value: '1 mg/kg/dose 3×/dia. Máx: 50 mg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Anti-inflamatório oral', value: '25–50 mg/dose 3×/dia; ou 75–150 mg/dia ÷ 1–3 doses' },
          { label: 'Oral LP/Retard', value: '75 mg/dose 1–2×/dia; ou 100 mg/dia' },
          { label: 'IM', value: '75 mg/dia por no máximo 2 dias. Máx: 150 mg/dia' },
          { label: 'Artrite reumatoide', value: '150–200 mg/dia ÷ 2–3 doses' },
          { label: 'Osteoartrites', value: '100–150 mg/dia ÷ 1–3 doses' },
          { label: 'Espondilite anquilosante', value: '100–125 mg/dia ÷ 4–5 doses' },
          { label: 'Analgésico / dismenorreia', value: '50 mg/dose 3×/dia (1ª dose: 100 mg)' },
          { label: 'Enxaqueca', value: '50 mg dose única e precoce' },
          { label: 'Cefaleia intensa (emergência)', value: '75 mg/dose' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Melhor evitar' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Dor abdominal', 'Azia', 'Náusea', 'Dispepsia', 'Flatulência', 'Estomatite',
      'Vômito', 'Diarreia', 'Constipação', 'Sangramento', 'Gastrite', 'Úlceras', 'Perfurações GI', 'Pancreatite',
      'Tontura', 'Obnubilação', 'Sonolência', 'Cefaleia', 'Zumbidos', 'Perda de audição', 'Visão borrada',
      'Alergia', 'Erupção cutânea', 'Urticária', 'Fotossensibilização', 'Prurido',
      'Epidermólise', 'Stevens-Johnson', 'Eritema multiforme',
      'Nefrite', 'Insuficiência renal', 'Retenção hídrica', 'Edema', 'Hipopotassemia', 'Hiponatremia',
      'Elevação de transaminases', 'Hepatite', 'Colestase',
      'Taquicardia', 'Palpitações', 'Hipertensão arterial',
      'Leucopenia', 'Trombocitopenia', 'Inibição da agregação plaquetária',
      'Agranulocitose', 'Anemia aplástica', 'Anemia hemolítica',
    ],
    contraindications: [
      'Úlcera péptica', 'Gastrite', 'Porfiria', 'Hipertensão', 'Insuficiência cardíaca grave',
      'Distúrbios hemorrágicos', 'Histórico de cirurgia de revascularização miocárdica',
      'Doença inflamatória intestinal', 'Doença hepática ativa', 'Asma',
      'História de anafilaxia com salicilatos ou AINEs',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar associação com outros AINEs ou anticoagulantes. Reduz efeito de diuréticos e anti-hipertensivos (IECAs e BRAs).' },
  },
  {
    id: 'diclofenaco-sodico',
    name: 'Diclofenaco Sódico',
    category: 'aines',
    observations: 'AINE útil no tratamento da dor. Doses e cuidados semelhantes ao diclofenaco potássico.',
    brands: [
      'Voltaren / Biofenac / Neotaren / Sonaflex AP / Diclofenaco sódico — comp. revestido 50 mg; comp. retard 100 mg; comp. SR 75 mg; ampola 25 mg/mL; comp. LP 75 ou 100 mg',
    ],
    presentations: [
      { label: 'Comprimido revestido 50 mg' },
      { label: 'Comprimido retard 100 mg' },
      { label: 'Comprimido SR 75 mg' },
      { label: 'Ampola 25 mg/mL' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: 'Mesma dose do diclofenaco potássico. Ver ficha correspondente.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: ['Mesmos que o diclofenaco potássico'],
    contraindications: ['Mesmas que o diclofenaco potássico'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'diclofenaco-colestiramina',
    name: 'Diclofenaco Colestiramina',
    category: 'aines',
    observations: 'Associação de diclofenaco com colestiramina.',
    brands: ['Flotac / Dyrtac / Zotac — cápsula 70 mg'],
    presentations: [{ label: 'Cápsula 70 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose habitual', value: '70 mg/dose 2×/dia. Tomar com água, junto às refeições.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Evitar' },
    ],
    sideEffects: ['Mesmos que os demais diclofenaco'],
    contraindications: ['Mesmas que o diclofenaco potássico'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'etodolaco',
    name: 'Etodolaco',
    category: 'aines',
    observations: 'Anti-inflamatório com eficácia comparável ao diclofenaco nas doses usuais.',
    brands: ['Flancox — comp. revestido 300, 400 e 500 mg'],
    presentations: [
      { label: 'Comprimido revestido 300 mg' },
      { label: 'Comprimido revestido 400 mg' },
      { label: 'Comprimido revestido 500 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 6 anos',
        items: [
          { label: '20–30 kg', value: '400 mg/dia 1×/dia' },
          { label: '31–45 kg', value: '600 mg/dia 1×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite reumatoide / osteoartrites', value: '300 mg 3–4×/dia; ou 400 mg 2×/dia. Máx: 1200 mg/dia' },
          { label: 'Analgésico', value: '300–400 mg/dose até 3×/dia. Máx: 1000 mg/dia' },
          { label: 'Orientação', value: 'Tomar após refeições, com água' },
        ],
      },
    ],
    sideEffects: [
      'Náusea', 'Cólicas abdominais', 'Vômito', 'Dispepsia', 'Diarreia', 'Melena', 'Gastrite',
      'Flatulência', 'Constipação', 'Disúria', 'Poliúria', 'Visão borrada',
      'Depressão', 'Fraqueza', 'Tontura', 'Irritabilidade', 'Exantema', 'Erupção cutânea', 'Prurido',
    ],
    contraindications: ['Úlcera', 'Gastrite', 'Hipertensão', 'Asma', 'Doença renal ou hepática grave'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'etoricoxibe',
    name: 'Etoricoxibe',
    category: 'aines',
    observations: 'Inibidor seletivo de COX-2. Evitar doses acima de 90 mg pelo alto risco cardíaco.',
    brands: ['Arcoxia / Hetori — comp. revestido 60 e 90 mg'],
    presentations: [
      { label: 'Comprimido revestido 60 mg' },
      { label: 'Comprimido revestido 90 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Osteoartrite', value: '60 mg/dia' },
          { label: 'Artrite reumatoide / espondilite anquilosante / dores agudas', value: '90 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal ou hepática', value: 'Melhor evitar' }],
    sideEffects: [
      'Cefaleia', 'Fadiga', 'Astenia', 'Ansiedade', 'Insônia',
      'Insuficiência cardíaca', 'Edema', 'Hipertensão', 'Crise hipertensiva', 'Disfunção renal',
      'Náusea', 'Pirose', 'Vômitos', 'Diarreia', 'Dispepsia', 'Úlcera péptica',
      'Hepatite', 'Aumento de transaminases',
      'Erupção cutânea', 'Prurido', 'Exantema', 'Urticária', 'Síndrome de Stevens-Johnson',
    ],
    contraindications: ['Úlcera', 'Hipertensão', 'Cardiopatias', 'Asma', 'Amamentação', 'Gestação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'indometacina',
    name: 'Indometacina',
    category: 'aines',
    observations: 'AINE inibidor não seletivo de COX, cerca de 20 vezes mais potente que o AAS. Uso prolongado limitado pela intolerância. Eficaz no fechamento do canal arterial persistente do prematuro. EV: diluir para 0,5–1 mg/mL em SF; infundir em 20 min.',
    brands: [
      'Indocid — cápsulas 25 e 50 mg',
      'Indocin E.V. (importado) — frasco-ampola 1 mg (liofilizado)',
    ],
    presentations: [
      { label: 'Cápsula 25 mg' },
      { label: 'Cápsula 50 mg' },
      { label: 'Frasco-ampola EV 1 mg (importado)' },
    ],
    doses: [
      {
        group: 'Crianças — Anti-inflamatório',
        items: [
          { label: 'Dose', value: '2–4 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Manutenção', value: '1–2,5 mg/kg/dia ÷ 3 doses. Máx: 200 mg/dia' },
        ],
      },
      {
        group: 'Crianças — PDA (canal arterial persistente)',
        items: [
          { label: '1ª dose', value: '0,2 mg/kg EV a cada 12 h' },
          { label: '2ª e 3ª doses — < 48 h de vida', value: '0,1 mg/kg' },
          { label: '2ª e 3ª doses — 2 a 7 dias de vida', value: '0,2 mg/kg' },
          { label: '2ª e 3ª doses — > 7 dias de vida', value: '0,25 mg/kg' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite reumatoide / osteoartrites / espondilite', value: '75 mg/dose ÷ 2–3 tomadas, aumentar semanalmente. Máx: 200 mg/dia' },
          { label: 'Dor leve a moderada / cefaleia / dismenorreia', value: '25 mg/dose 3–4×/dia' },
          { label: 'Dor noturna persistente / rigidez matinal', value: '100 mg ao deitar' },
        ],
      },
    ],
    sideEffects: [
      'Anorexia', 'Náusea', 'Vômito', 'Dor abdominal', 'Úlcera péptica', 'Diarreia', 'Hepatite',
      'Hipertensão', 'Edema', 'Opacificação de córnea',
      'Sonolência', 'Fadiga', 'Tontura', 'Depressão', 'Confusão', 'Cefaleia',
      'Discinesias sanguíneas', 'Hemorragia digestiva', 'Reações alérgicas', 'Erupção cutânea',
      'Piora da função renal', 'Oligúria', 'Depressão medular', 'Trombocitopenia', 'Agranulocitose',
      'Hipopotassemia', 'Hiponatremia dilucional', 'Hipoglicemia com uso EV', 'Anemia hemolítica',
      'RN: sangramentos, enterocolite necrosante, perfuração intestinal, insuficiência renal, oligúria',
    ],
    contraindications: [
      'Úlcera', 'Gastrite', 'Hipertensão', 'Asma', 'Doença renal ou hepática grave',
      'RN com ureia > 30 mg/dL', 'RN com diurese < 1 mL/kg/h', 'RN com plaquetas < 60.000',
      'RN com sangramentos', 'RN com suspeita de enterocolite',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'lornoxicam',
    name: 'Lornoxicam',
    category: 'aines',
    observations: 'AINE mais usado como analgésico.',
    brands: ['Xefo — comprimido revestido 8 mg'],
    presentations: [{ label: 'Comprimido revestido 8 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite / osteoartrites / analgesia', value: '4–8 mg/dose 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Cefaleia', 'Tontura', 'Sonolência', 'Náusea', 'Vômito', 'Dor abdominal', 'Diarreia',
      'Hemorragia digestiva', 'Boca seca', 'Tosse', 'Asma', 'Hipertensão', 'Anemia', 'Depressão medular',
    ],
    contraindications: ['Úlcera', 'Hipertensão', 'Asma', 'Doença hepática', 'Gestação no último trimestre'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'loxoprofeno',
    name: 'Loxoprofeno',
    category: 'aines',
    observations: 'Derivado do ácido fenilpropiônico. Eficácia semelhante ao piroxicam com início de ação mais rápido. Não usar em crianças.',
    brands: ['Loxonin / Oxotron — comprimido 60 mg'],
    presentations: [{ label: 'Comprimido 60 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite / osteoartrites / dor leve a moderada', value: '60 mg/dose 3×/dia' },
          { label: 'Dor aguda', value: 'Pode-se tomar 120 mg em dose única' },
          { label: 'Máximo', value: '180 mg/dia. Tomar após refeições com água.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia', 'Sonolência', 'Anorexia', 'Náusea', 'Vômito', 'Dor abdominal', 'Diarreia',
      'Constipação', 'Dispepsia', 'Úlcera péptica', 'Erupção cutânea', 'Prurido',
      'Palpitação', 'Hipotensão', 'Choque', 'Leucopenia', 'Plaquetopenia',
      'Anemia aplástica ou hemolítica', 'Síndrome de Stevens-Johnson', 'Disfunção renal', 'Nefrose',
      'Transaminases aumentadas',
    ],
    contraindications: ['Cardiopatia grave', 'Úlcera ativa', 'Hemorragia digestiva', 'Asma', 'Gestação no último trimestre'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'meloxicam',
    name: 'Meloxicam',
    category: 'aines',
    observations: 'Derivado do ácido enólico com pequena seletividade para COX-2. Menor frequência de reações GI, mas maior risco de eventos cardiovasculares. Uso IM contraindicado em < 15 anos.',
    brands: ['Movatec / Melocox / Artritec / Meloxicam genérico — comp. 7,5 e 15 mg; ampola 15 mg'],
    presentations: [
      { label: 'Comprimido 7,5 mg' },
      { label: 'Comprimido 15 mg' },
      { label: 'Ampola IM 15 mg' },
    ],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite reumatoide / osteoartrites', value: 'Iniciar 7,5 mg/dia. Se necessário, aumentar para 15 mg/dia (dose única diária). Máx: 15 mg/dia' },
          { label: 'Idosos', value: 'Máx 7,5 mg/dia' },
          { label: 'Orientação', value: 'Tomar após refeições com água. IM: injeção lenta e profunda no glúteo.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' },
      { label: 'Hemodiálise', value: 'Máx 7,5 mg/dia' },
      { label: 'Insuficiência hepática grave', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Náusea', 'Vômitos', 'Dispepsia', 'Gastrite', 'Úlcera péptica', 'Colite', 'Diarreia',
      'Dor abdominal', 'Constipação', 'Flatulência', 'Azia', 'Esofagite',
      'Prurido', 'Erupção cutânea', 'Diaforese', 'Tontura', 'Cefaleia', 'Insônia', 'Vertigem',
      'Mal-estar', 'Fadiga', 'Ansiedade', 'Depressão', 'Irritabilidade', 'Confusão mental',
      'Artralgia', 'Tremor', 'Lombalgia',
      'Edema', 'Angina', 'Arritmia cardíaca', 'Hipertensão', 'Hipotensão', 'Infarto do miocárdio',
      'Palpitação', 'Síncope', 'Parestesia', 'Taquicardia',
      'Anemia', 'Leucopenia', 'Hepatite', 'Hiperbilirrubinemia', 'Trombocitopenia',
      'Nefrite túbulo-intersticial', 'Aumento de creatinina', 'Hematúria', 'Albuminúria',
      'Broncoespasmo', 'Depressão medular', 'Agranulocitose',
    ],
    contraindications: [
      'Úlcera péptica', 'Hemorragia digestiva',
      'Asma ou anafilaxia após AAS ou outro AINE',
      'Último trimestre de gestação',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'naproxeno',
    name: 'Naproxeno',
    category: 'aines',
    observations: 'Derivado do ácido arilpropiônico. Menor risco de eventos cardiovasculares comparado a outros AINEs. Para uso prolongado, parece ser o AINE que menos aumenta risco cardiovascular. Como antitérmico, preferir ibuprofeno.',
    brands: ['Naprosyn / Flanax / Naproxeno / Naproxeno + esomeprazol — comp. 250, 500 ou 550 mg; associação 500 + 20 mg'],
    presentations: [
      { label: 'Comprimido 250 mg' },
      { label: 'Comprimido 500 mg' },
      { label: 'Comprimido 550 mg' },
      { label: 'Comprimido revestido 500 + esomeprazol 20 mg' },
    ],
    doses: [
      {
        group: 'Crianças — Artrites crônicas',
        items: [
          { label: 'Dose', value: '10–15 mg/kg/dia ÷ 2 doses. Máx: 500 mg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite reumatoide / osteoartrites / espondilite', value: '250–500 mg/dose a cada 12 h. Máx: 1500 mg/dia (até 6 meses)' },
          { label: 'Anti-inflamatório / analgésico', value: '250 mg/dose 3×/dia por até 5 dias (1ª dose: 500 mg)' },
          { label: 'Antitérmico', value: '250 mg/dose 2×/dia. Máx: 600 mg/dia' },
          { label: 'Profilaxia da enxaqueca', value: '250–500 mg/dose 2×/dia por até 6 meses' },
          { label: 'Enxaqueca aguda', value: '500–750 mg em dose única; se não houver melhora em 1 h, adicionar 250–500 mg. Máx: 1250 mg/dia' },
          { label: 'Gota aguda', value: '250 mg/dose 3×/dia; ou 750 mg na 1ª dose. Máx: 1250 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Azia', 'Náusea', 'Vômito', 'Desconforto abdominal', 'Gastrite', 'Úlcera péptica',
      'Diarreia', 'Hemorragia digestiva', 'Hematêmese', 'Melena', 'Flatulência',
      'Mal-estar', 'Tontura', 'Vertigem', 'Distúrbios visuais', 'Distúrbios da cognição',
      'Alergia', 'Erupção cutânea', 'Prurido', 'Edema', 'Disfunção renal',
      'Nefrite túbulo-intersticial', 'Trombocitopenia', 'Disfunção plaquetária', 'Agranulocitose',
      'Em ARJ: possível pneumonite com fragilidade de pele e escaras por exposição solar',
    ],
    contraindications: [
      'Úlcera péptica', 'Hemorragia digestiva',
      'Asma após AAS ou outro AINE',
      'Último trimestre de gestação',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Rever a necessidade após 10 dias de uso contínuo. Apresentação com esomeprazol: ingerir longe das refeições.' },
  },
  {
    id: 'nimesulida',
    name: 'Nimesulida',
    category: 'aines',
    observations: 'AINE do grupo metano-sulfonanilida com pequena seletividade para COX-2. Menor frequência de reações GI. Evitar por mais de 15 dias pelo risco de hepatotoxicidade. 1 gota = 2,5 mg.',
    brands: ['Nisulid / Cimelide / Scaflogin / Nimesulix / Deltaflan / Nimesulida genérica — comp. 100 mg; gotas 50 mg/mL'],
    presentations: [
      { label: 'Comprimido 100 mg' },
      { label: 'Gotas 50 mg/mL (1 gota = 2,5 mg)' },
      { label: 'Comprimido (betaciclodextrina) 400 mg = 100 mg nimesulida' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar)',
        items: [
          { label: 'Dose', value: '2,5 mg/kg/dose 2×/dia. Lactentes: 0,25 mL/kg/dose 2×/dia' },
          { label: 'Supositório 3–9 anos', value: '50 mg/dose 2×/dia' },
          { label: 'Supositório > 9 anos', value: '100 mg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Anti-inflamatório / analgésico', value: '50–100 mg/dose 2×/dia. Máx: 200 mg/dia' },
          { label: 'Artrite reumatoide / osteoartrites', value: '100–200 mg/dose 2×/dia' },
          { label: 'Dismenorreia', value: '100 mg/dose 2×/dia (iniciar 3–5 dias antes do período)' },
          { label: 'Idosos', value: 'Máx 100 mg/dia pelo menor tempo possível' },
          { label: 'Orientação', value: 'Tomar após refeições com água. Evitar por mais de 15 dias.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Náusea', 'Dor abdominal', 'Diarreia', 'Constipação', 'Aftas', 'Azia', 'Epigastralgia',
      'Gastrite', 'Úlceras pépticas', 'Perfuração ou hemorragia GI',
      'Febre', 'Asma', 'Dispneia',
      'Erupção cutânea', 'Urticária', 'Prurido', 'Eritema', 'Angioedema', 'Síndrome de Stevens-Johnson',
      'Cefaleia', 'Sonolência', 'Tontura', 'Vertigem', 'Alterações visuais',
      'Sinais de hepatotoxicidade: anorexia, náusea, vômitos, dor abdominal, fadiga, urina escura, icterícia — raros casos de hepatite grave',
      'Aumento de transaminases', 'Nefrite túbulo-intersticial', 'Oligúria', 'Hematúria', 'Edema',
      'Leucopenia', 'Neutropenia', 'Púrpura', 'Plaquetopenia',
    ],
    contraindications: [
      'Hemorragia digestiva', 'Úlcera péptica', 'Asma', 'Hipertensão', 'Doença hepática',
      'Cirurgia de revascularização miocárdica', 'Uso de etanol',
      'Histórico de alergia a sulfonamidas ou salicilatos',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Reduz efeito de diuréticos e anti-hipertensivos. Risco de hipoglicemia com glibenclamida e de convulsão com quinolonas.' },
  },
  {
    id: 'piroxicam',
    name: 'Piroxicam',
    category: 'aines',
    observations: 'Anti-inflamatório do grupo oxicam. Ação lenta — não deve ser primeira escolha em inflamações agudas. Evitar uso prolongado em doenças reumatológicas crônicas.',
    brands: ['Feldene / Floxicam / Flamostat / Pirfel / Piroxicam-betaciclodextrina — cápsulas 20 mg; comp. solúvel 20 mg; supositório 20 mg; ampola IM 40 mg'],
    presentations: [
      { label: 'Cápsula 20 mg' },
      { label: 'Comprimido solúvel 20 mg' },
      { label: 'Supositório 20 mg' },
      { label: 'Ampola IM 40 mg' },
    ],
    doses: [
      {
        group: 'Crianças (melhor evitar, não usar < 1 ano)',
        items: [
          { label: 'Artrites crônicas', value: '0,2–0,4 mg/kg/dia 1×/dia. Máx: 15 mg/dia. 1 gota = 0,4 mg' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Artrite reumatoide / osteoartrite / espondilite', value: '10–20 mg/dia 1–2×/dia' },
          { label: 'Gota aguda', value: '20–40 mg/dia 1–2×/dia por 6 dias' },
          { label: 'Analgésico / dismenorreia / pós-operatório', value: '40 mg/dia no 1º–2º dia; depois 20 mg/dia por 3 dias. Máx: 40 mg/dia' },
          { label: 'Orientação', value: 'Tomar após refeições com água. Solução injetável: apenas IM.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Anorexia', 'Náusea', 'Vômitos', 'Gastrite', 'Úlcera péptica', 'Hemorragia GI', 'Epigastralgia',
      'Constipação', 'Cólicas', 'Dispepsia', 'Flatulência', 'Colite', 'Aftas', 'Proctite',
      'Tontura', 'Cefaleia', 'Sonolência', 'Confusão mental', 'Convulsões', 'Depressão',
      'Distúrbios psicóticos', 'Distúrbio de comportamento',
      'Insuficiência cardíaca', 'Hipertensão arterial', 'Edema',
      'Inibição da agregação plaquetária', 'Depressão medular', 'Hemólise', 'Anemia',
      'Agranulocitose', 'Trombocitopenia',
      'Erupção cutânea', 'Fotossensibilidade', 'Alergia',
      'Hipoglicemia', 'Hiperglicemia', 'Aumento de transaminases', 'Icterícia', 'Hepatite tóxica',
      'Síndrome de ativação de macrófagos', 'CIVD', 'Disfunção renal aguda', 'Síndrome nefrótica',
    ],
    contraindications: [
      'Hemorragia digestiva', 'Úlcera péptica', 'Hipertensão', 'Asma',
      'Cirurgia de revascularização miocárdica', 'Terceiro trimestre de gestação',
      'Histórico de alergia a salicilatos',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'parecoxibe',
    name: 'Parecoxibe',
    category: 'aines',
    observations: 'Único inibidor seletivo de COX-2 por via parenteral. Eficaz no período perioperatório quando o paciente não pode usar via oral. Pró-fármaco do valdecoxibe. Evitar por mais de 5 dias.',
    brands: ['Bextra — frasco-ampola EV/IM 40 mg'],
    presentations: [{ label: 'Frasco-ampola EV/IM 40 mg' }],
    doses: [
      {
        group: 'Adultos > 18 anos',
        items: [
          { label: 'Artrite reumatoide / osteoartrites', value: '5–20 mg em dose única diária' },
          { label: 'Dor aguda / pós-operatório', value: '20–40 mg/dose a cada 2–4 h. Máx: 80 mg/dia' },
          { label: 'Cólica renal aguda', value: '40 mg em dose única' },
          { label: 'Preparo', value: 'Reconstituir em 2 mL de SF 0,9% ou SGI 5%. Estável por 24 h. IM: injeção lenta e profunda. EV: bolus direto ou via Y.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Dor abdominal', 'Diarreia', 'Náusea', 'Vômito', 'Estomatite', 'Dispepsia', 'Flatulência',
      'Gastrite', 'Úlcera', 'Sangramento gástrico', 'Refluxo', 'Proctite',
      'Cefaleia', 'Tontura', 'Insônia',
      'Erupção cutânea', 'Exantema', 'Stevens-Johnson', 'Necrólise epidérmica tóxica', 'Eritema multiforme',
      'Conjuntivite', 'Sinusite', 'Epistaxe', 'Faringite', 'Rinite',
      'Hipertensão', 'Angina', 'Edema',
      'Nefrite intersticial', 'Insuficiência renal aguda', 'Necrose papilar', 'Disúria', 'Hematúria',
      'Aumento de transaminases', 'Anemia', 'Plaquetopenia',
    ],
    contraindications: [
      'Úlcera', 'Hipertensão', 'Asma', 'História de anafilaxia com salicilatos',
      'Cirurgia de revascularização miocárdica', 'Terceiro trimestre de gestação',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'tenoxicam',
    name: 'Tenoxicam',
    category: 'aines',
    observations: 'Isômero do piroxicam com segurança e eficácia semelhantes. Indicado para dor moderada e doenças musculoesqueléticas. EV: reconstituir em 2 mL de diluente; usar imediatamente. Evitar injeção intra-arterial.',
    brands: ['Tilatil / Reumotec / Tenoxil / Tilnox / Tenoxicam — comp. revestido 20 mg; frasco-ampola 20 mg'],
    presentations: [
      { label: 'Comprimido revestido 20 mg' },
      { label: 'Frasco-ampola 20 mg' },
    ],
    doses: [
      {
        group: 'Adultos > 18 anos',
        items: [
          { label: 'Artrite reumatoide / osteoartrites / espondilite — oral', value: '20 mg/dia por 7–14 dias' },
          { label: 'Artrite reumatoide / osteoartrites / espondilite — IM/EV', value: '20 mg/dia por no máximo 2 dias' },
          { label: 'Analgésico / dismenorreia / enxaqueca — IM/EV', value: '20–40 mg/dia conforme intensidade' },
          { label: 'Pós-operatório — oral/IM/EV', value: '40 mg/dia por até 5 dias' },
          { label: 'Crise aguda de gota — oral/IM/EV', value: '40 mg/dia por 1–2 dias; depois 20 mg/dia por mais 5 dias' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Anorexia', 'Náusea', 'Vômitos', 'Azia', 'Pirose', 'Gastrite', 'Úlcera péptica',
      'Hemorragia gástrica', 'Epigastralgia', 'Constipação', 'Cólica', 'Dispepsia', 'Flatulência',
      'Colite', 'Estomatite', 'Proctite',
      'Tontura', 'Cefaleia', 'Fadiga', 'Sonolência', 'Confusão mental', 'Vertigem', 'Convulsões',
      'Depressão', 'Distúrbios psicóticos', 'Distúrbio de comportamento',
      'Insuficiência cardíaca', 'Hipertensão', 'Edema', 'Dispneia', 'Asma',
      'Hepatite tóxica', 'Disfunção renal aguda', 'Nefrite túbulo-intersticial',
      'Depressão medular', 'Hemólise', 'Anemia', 'Eosinofilia', 'Trombocitopenia',
      'Inibição da agregação plaquetária',
      'Erupção cutânea', 'Fotossensibilidade', 'Angioedema', 'Urticária', 'Anafilaxia',
      'Síndrome de Stevens-Johnson', 'Síndrome de Lyell',
      'Hipoglicemia', 'Hiperglicemia',
    ],
    contraindications: [
      'Hemorragia digestiva', 'Úlcera péptica', 'Asma', 'Alergia a salicilatos',
      'Terceiro trimestre de gestação',
      'Não associar a poupador de potássio',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'trometamol-cetorolaco',
    name: 'Trometamol Cetorolaco',
    category: 'aines',
    observations: 'Derivado do ácido acético. Fraco anti-inflamatório, mas potente analgésico. Alternativa à morfina na analgesia pós-operatória quando há risco de depressão respiratória. Não usar para dor leve ou crônica. Evitar por mais de 5 dias. 1 gota = 1 mg.',
    brands: ['Toragesic / Toradol / Deocil SL — comp. sublingual 10 mg; gotas 10 mg/mL; ampola 30 mg/mL'],
    presentations: [
      { label: 'Comprimido sublingual 10 mg' },
      { label: 'Gotas 10 mg/mL' },
      { label: 'Ampola 30 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Oral', value: '1 mg/kg/dia. Máx: 10 mg/dia. Melhor evitar formulação oral.' },
          { label: 'IM', value: '1 mg/kg/dia. Máx: 30 mg/dia' },
          { label: 'EV', value: '0,5 mg/kg/dia. Máx: 15 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dor aguda — oral', value: '10 mg/dose 3–4×/dia. Máx: 40 mg/dia' },
          { label: 'Dor aguda — EV', value: '30 mg/dose 1–4×/dia. Máx: 120 mg/dia' },
          { label: 'Dor aguda — IM', value: '60 mg/dose 1–2×/dia; ou 30 mg 4×/dia. Máx: 120 mg/dia' },
          { label: 'Idosos / < 50 kg', value: 'Metade da dose. Máx: 60 mg/dia' },
          { label: 'Orientação EV', value: 'Não diluir. Bolus de pelo menos 15 segundos.' },
          { label: 'Comp. sublingual', value: 'Deixar dissolver lentamente sob a língua, sem água.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal / ClCr < 30 mL/min', value: 'Melhor evitar. Dialisável 30–50%.' },
    ],
    sideEffects: [
      'Úlcera', 'Hemorragia gástrica', 'Melena', 'Dispepsia', 'Náusea', 'Vômito', 'Diarreia', 'Constipação',
      'Tontura', 'Sonolência', 'Cefaleia', 'Euforia', 'Alucinação',
      'Redução da agregação plaquetária', 'Edema', 'Hipertensão', 'Sudorese', 'Poliúria',
      'Nefrite intersticial',
      'Risco de trombose vascular, AVC e infarto do miocárdio',
    ],
    contraindications: [
      'Intolerância a AAS', 'Úlcera péptica', 'Hipertensão', 'Asma', 'Disfunção renal',
      'Analgesia profilática em cirurgias',
      'Risco de nefrotoxicidade com diuréticos e hemorragias com anticoagulantes',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];