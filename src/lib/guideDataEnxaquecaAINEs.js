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
];