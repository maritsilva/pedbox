// ITRN — Inibidores Nucleosídicos da Transcriptase Reversa
export const antirretroviraisITRN = [
  {
    id: 'abacavir',
    name: 'Abacavir',
    suffix: 'ABC',
    category: 'antirretrovirais-itrn',
    observations: 'ITRN análogo de nucleotídeo/guanosina. Alta penetração no SNC. Contraindicado em portadores de HLA-B5701. A solução oral deve ser descartada 2 meses após aberta.',
    brands: ['Ziagenavir — comp. revestido 300 mg; sol. oral 20 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 300 mg' },
      { label: 'Solução oral 20 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças ≥ 3 meses',
        items: [{ label: 'AIDS', value: '8 mg/kg/dose 2×/dia (máx 600 mg/dia)' }],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da AIDS', value: '600 mg/dia ÷ 1–2 doses (geralmente + lamivudina)' },
          { label: 'Profilaxia transmissão vertical', value: '600 mg/dia + raltegravir (para gestantes com contraindicação ao TDF e AZT)' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Hipersensibilidade grave (febre, rash, fadiga, sintomas GI) — suspender imediatamente.' },
    sideEffects: [
      'Náusea, vômito, diarreia, dor abdominal, pancreatite, queda do apetite',
      'Cefaleia, fadiga, insônia, edema',
      'Acidose lática, hepatomegalia, esteatose',
      'Dislipidemia, hipertensão, síndrome lipodistrófica',
      'Aumento do risco de infarto',
      'Hipersensibilidade grave (febre, rash, faringite, sintomas GI) — suspender imediatamente',
    ],
    contraindications: ['HLA-B5701 positivo', 'Insuficiência hepática grave (Child-Pugh B ou C)'],
  },
  {
    id: 'didanosina',
    name: 'Didanosina',
    suffix: 'ddI',
    category: 'antirretrovirais-itrn',
    observations: 'ITRN análogo de nucleosídeo. Não é a melhor opção — toxicidade elevada. Não associar com alopurinol, ribavirina ou estavudina. Administrar 1 h antes ou 2 h após refeições.',
    brands: ['Videx — cáps. 125, 200, 250 e 400 mg; pó para sol. oral 4 g'],
    presentations: [
      { label: 'Cápsula 125, 200, 250 e 400 mg' },
      { label: 'Pó para solução oral 4 g' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '15 dias a 3 meses', value: '50 mg/m²/dia' },
          { label: '> 3 meses', value: '100–120 mg/m²/dia' },
          { label: '25–60 kg', value: '250 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: '≥ 60 kg', value: '400 mg/dia' },
          { label: '< 60 kg', value: '250 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–59 mL/min', value: '50–60% da dose' },
      { label: 'ClCr 10–29 mL/min', value: '35–40% da dose' },
      { label: 'ClCr < 10 mL/min', value: '25–30% da dose' },
    ],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Não associar com alopurinol, ribavirina ou estavudina.' },
    sideEffects: [
      'Neuropatia periférica, cefaleia, astenia, neurite óptica, despigmentação da retina',
      'Diarreia, náusea, vômitos, dor abdominal, anorexia, flatulência, boca seca, inflamação de glândulas salivares',
      'Lipoatrofia facial e periférica, toxicidade mitocondrial, hepatomegalia, hiperuricemia',
      'Pancreatite, acidose lática',
      'Anemia, granulocitopenia, leucopenia, plaquetopenia',
      'Stevens-Johnson, prurido, erupção cutânea, alopecia',
      'Hipo ou hiperglicemia, diabetes mellitus, rabdomiólise',
    ],
    contraindications: [],
  },
  {
    id: 'estavudina',
    name: 'Estavudina',
    suffix: 'd4T',
    category: 'antirretrovirais-itrn',
    observations: 'ITRN análogo da timidina. Não é a melhor opção — toxicidade elevada. Não associar com AZT (inibição). Pode ser tomado com alimentos.',
    brands: ['Stavudin — sol. oral 1 mg/mL'],
    presentations: [{ label: 'Solução oral 1 mg/mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Neonatos < 13 dias', value: '0,5 mg/kg/dose 2×/dia' },
          { label: '< 30 kg', value: '1 mg/kg/dose 2×/dia' },
          { label: '30–60 kg', value: '30 mg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: '> 60 kg', value: '40 mg/dose 2×/dia' },
          { label: '30–60 kg', value: '30 mg/dose 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr > 50 mL/min', value: '50% da dose' },
      { label: 'ClCr < 25 mL/min', value: '25% da dose' },
    ],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Não associar com AZT.' },
    sideEffects: [
      'Neuropatia periférica, fraqueza muscular, cefaleia, insônia, parestesias, formigamento',
      'Febre, calafrios, mal-estar, agitação, mania, hiporexia, depressão',
      'Desconforto gastrointestinal, náusea, vômitos, diarreia, rinite, tosse',
      'Erupção cutânea, edema angioneurótico',
      'Pancreatite, aumento de transaminases, acidose lática com hepatomegalia e esteatose',
      'Hipotireoidismo, lipodistrofia, lipoatrofia',
    ],
    contraindications: [],
  },
  {
    id: 'lamivudina',
    name: 'Lamivudina',
    suffix: '3TC',
    category: 'antirretrovirais-itrn',
    observations: 'ITRN análogo de nucleosídeo. Útil em todos os esquemas principais de TARV e também para hepatite B (100 mg/dia). A solução oral deve ser descartada 1 mês após aberta.',
    brands: ['Epivir / Lamivudina — comp. revestido 150 mg; sol. oral 10 mg/mL; sol. oral 50 mg/5 mL'],
    presentations: [
      { label: 'Comprimido revestido 150 mg' },
      { label: 'Solução oral 10 mg/mL' },
      { label: 'Solução oral 50 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Neonatos até 30 dias (AIDS + AZT)', value: '2 mg/kg/dose 2×/dia' },
          { label: '> 30 dias', value: '4 mg/kg/dose 2×/dia (máx 300 mg/dia)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da AIDS', value: '300 mg/dia ÷ 1–2 doses' },
          { label: 'Hepatite B crônica', value: '100 mg/dia por 12–18 meses (resistência crescente — não é mais escolha)' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–50 mL/min', value: '50% da dose' },
      { label: 'ClCr 15–29 mL/min', value: '30% da dose' },
      { label: 'ClCr 5–14 mL/min', value: '15% da dose' },
      { label: 'ClCr < 5 mL/min', value: '3% da dose' },
    ],
    sensitivity: { susceptible: ['HIV', 'HBV'], resistant: [], warning: '' },
    sideEffects: [
      'Cefaleia, fadiga, insônia ou sonolência, tontura, depressão, distúrbios psicomotores',
      'Náusea, vômito, dor/desconforto abdominal, diarreia, estomatite, pancreatite',
      'Tosse, sibilos, erupção cutânea, prurido, urticária, alopecia',
      'Aumento de transaminases, acidose lática, esteatose hepática, hepatomegalia',
      'Neutropenia, anemia, plaquetopenia',
      'Parestesia, dor osteomuscular, neuropatia periférica',
    ],
    contraindications: [],
  },
  {
    id: 'tenofovir',
    name: 'Tenofovir',
    suffix: 'TDF',
    category: 'antirretrovirais-itrn',
    observations: 'ITRN análogo de nucleosídeo. Baixa penetração no SNC. Monitorar creatinina sérica e TFG a cada 3–6 meses. Melhor tomar com alimentos. Pode exacerbar hepatite B se interrompido.',
    brands: ['Viread / Tenofovir — comp. revestido 300 mg'],
    presentations: [{ label: 'Comprimido revestido 300 mg' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose', value: '8 mg/kg 1×/dia (comp. revestido pode ser usado em > 35 kg)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Hepatite B crônica ou AIDS', value: '300 mg/dia 1×/dia (geralmente + lamivudina)' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–49 mL/min', value: '300 mg a cada 48 h' },
      { label: 'ClCr 10–29 mL/min', value: '300 mg a cada 72–96 h' },
    ],
    sensitivity: { susceptible: ['HIV', 'HBV'], resistant: [], warning: 'Monitorar função renal. Pode causar disfunção tubular renal, hipofosfatemia e desmineralização óssea.' },
    sideEffects: [
      'Geralmente bem tolerado',
      'Cefaleia, insônia, tontura, depressão',
      'Náusea, vômitos, hiporexia',
      'Disfunção tubular renal, insuficiência renal, proteinúria, hipofosfatemia',
      'Desmineralização óssea (monitorar crescimento em crianças)',
    ],
    contraindications: ['Insuficiência renal', 'Alto risco de disfunção renal', 'Diabéticos', 'Hipertensos graves', 'Osteoporose', 'Alterações do metabolismo ósseo'],
  },
  {
    id: 'zidovudina',
    name: 'Zidovudina',
    suffix: 'AZT',
    category: 'antirretrovirais-itrn',
    observations: 'ITRN antirretroviral sistêmico para HIV. Geralmente usado em coformulação com lamivudina. Não associar com estavudina. Monitorar hemograma. Reduzir dose em 30% se Hb < 8 g/dL; interromper se Hb < 7 g/dL.',
    brands: ['Zidovir / Zidovudina — Fr. amp. 10 mg/mL; cáps. 100 mg; sol. oral 10 mg/mL; sol. inj. 10 mg/mL'],
    presentations: [
      { label: 'Cápsula 100 mg' },
      { label: 'Solução oral 10 mg/mL' },
      { label: 'Frasco-ampola / sol. inj. 10 mg/mL' },
    ],
    doses: [
      {
        group: 'Neonatos — Profilaxia da transmissão vertical',
        items: [
          { label: '> 35 semanas', value: 'Oral: 4 mg/kg; EV: 3 mg/kg' },
          { label: '30–35 semanas', value: 'Oral: 2 mg/kg por 14 dias; depois 3 mg/kg. EV: 1,5 mg/kg por 14 dias; depois 2,3 mg/kg' },
          { label: '< 30 semanas', value: 'Oral: 2 mg/kg; EV: 1,5 mg/kg' },
          { label: 'Início', value: 'O mais rápido possível após parto (até 48 h). Usar por 4 semanas. Infundir EV em 30 min.' },
        ],
      },
      {
        group: 'Crianças — Tratamento da AIDS',
        items: [
          { label: 'Prematuros < 35 sem', value: '2 mg/kg/dose 2×/dia por 4 sem; depois 3 mg/kg/dose 2×/dia por 4 sem' },
          { label: 'A termo / neonatos ≤ 30 dias', value: '4 mg/kg/dose 2×/dia (oral); 3 mg/kg/dose 2×/dia (EV)' },
          { label: '> 30 dias e < 9 kg', value: '12 mg/kg/dose 2×/dia' },
          { label: '9–30 kg', value: '9 mg/kg/dose 2×/dia' },
          { label: '≥ 30 kg', value: '600 mg/dia ÷ 2–3 doses (máx 600 mg/dia)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da AIDS — oral', value: '600 mg/dia ÷ 2 doses' },
          { label: 'Profilaxia no parto — EV', value: '2 mg/kg em 1 h; depois 1 mg/kg/h até clampeamento do cordão' },
          { label: 'Profilaxia no parto — oral (sem acesso EV)', value: 'Ataque 600 mg; depois 400 mg a cada 3 h' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 15 mL/min', value: '50% da dose a cada 8 h' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Não associar com estavudina.' },
    sideEffects: [
      'Dor abdominal, náusea, vômitos, anorexia, diarreia, hepatite, colestase, esteatose com acidose lática grave',
      'Tontura, confusão, mania, convulsão, cefaleia intensa, insônia, astenia, mialgia, fadiga',
      'Eritema, urticária, prurido, lipodistrofia, lipoatrofia, hiperpigmentação das unhas',
      'Anemia, granulocitopenia, leucopenia — interromper se neutrófilos < 500/mm³ ou plaquetas < 100.000/mm³',
      'Miocardiopatia ou encefalopatia, acidose lática grave, convulsões febris',
    ],
    contraindications: [],
  },
];

// ITRNN — Inibidores Não Nucleosídicos da Transcriptase Reversa
export const antirretroviraisITRNN = [
  {
    id: 'efavirenz',
    name: 'Efavirenz',
    suffix: 'EFZ',
    category: 'antirretrovirais-itrnn',
    observations: 'ITRNN capaz de suprimir a replicação viral a longo prazo. Melhor tomar à noite, 2 h após a última refeição. Efeitos colaterais neurológicos pioram com álcool.',
    brands: ['Efavirenz — sol. oral 150 mg/5 mL; comp. revestido 600 mg; cáps. 200 mg'],
    presentations: [
      { label: 'Solução oral 150 mg/5 mL' },
      { label: 'Comprimido revestido 600 mg' },
      { label: 'Cápsula 200 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 3 anos (dose diária por peso)',
        items: [
          { label: '10–15 kg', value: '200 mg/dia' },
          { label: '15–20 kg', value: '250 mg/dia' },
          { label: '20–25 kg', value: '300 mg/dia' },
          { label: '25–32 kg', value: '350 mg/dia' },
          { label: '32–40 kg', value: '400 mg/dia' },
          { label: '> 40 kg', value: '600 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Tratamento da AIDS', value: '600 mg/dia' },
          { label: 'Associado à rifampicina', value: '800 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Melhor tomar à noite. Evitar álcool.' },
    sideEffects: [
      'Tontura, sonolência ou insônia, cefaleia, fadiga, agitação, alucinações, euforia, depressão',
      'Náusea, vômitos, diarreia, alteração do paladar, desconforto abdominal',
      'Tosse, sudorese, erupção cutânea maculopapular',
      'Pode aumentar risco de suicídio',
    ],
    contraindications: [],
  },
  {
    id: 'etravirina',
    name: 'Etravirina',
    suffix: 'ETR',
    category: 'antirretrovirais-itrnn',
    observations: 'ITRNN de resgate na AIDS com falha virológica. Sempre usado em combinação. O comprimido pode ser deglutido inteiro ou dissolvido em água. Melhor tomar com refeição gordurosa. Não associar à rifampicina.',
    brands: ['Intelence — comp. 100 mg'],
    presentations: [{ label: 'Comprimido 100 mg' }],
    doses: [
      {
        group: 'Crianças > 6 anos (dose por peso)',
        items: [
          { label: '16–19 kg', value: '100 mg/dose 2×/dia' },
          { label: '20–24 kg', value: '125 mg/dose 2×/dia' },
          { label: '25–29 kg', value: '150 mg/dose 2×/dia' },
          { label: '≥ 30 kg', value: '200 mg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Tratamento da AIDS', value: '200 mg/dose 2×/dia após refeição' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Não associar à rifampicina.' },
    sideEffects: [
      'Náusea, vômito, diarreia, hipertensão, fadiga, insônia',
      'Hepatite, transaminases aumentadas, cefaleia, neuropatia',
      'Erupção cutânea, exantema autolimitado, Stevens-Johnson',
      'Anemia, trombocitopenia, dislipidemia, piora de coronariopatia, broncoespasmo',
    ],
    contraindications: [],
  },
  {
    id: 'nevirapina',
    name: 'Nevirapina',
    suffix: 'NVP',
    category: 'antirretrovirais-itrnn',
    observations: 'ITRNN de primeira linha como alternativa ao efavirenz. Monitorar função hepática com 2, 4 e 8 semanas. Risco de Stevens-Johnson fatal nas primeiras 6 semanas — aumentar dose devagar.',
    brands: ['Nevirapina — comp. 200 mg; susp. oral 50 mg/5 mL'],
    presentations: [
      { label: 'Comprimido 200 mg' },
      { label: 'Suspensão oral 50 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '< 8 anos — indução (14 dias)', value: '200 mg/m² dose única diária' },
          { label: '< 8 anos — manutenção', value: '200 mg/m²/dose 2×/dia (máx 200 mg/dose)' },
          { label: '≥ 8 anos', value: '120–150 mg/m²/dose 2×/dia (máx 200 mg/dose)' },
          { label: 'Profilaxia transmissão vertical (neonato)', value: '1,5 mg/kg + AZT; > 2 kg: 12 mg; 1,5–2 kg: 8 mg. 2 doses com 48 h de intervalo; 3ª dose entre 96 h e 1 sem' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'AIDS — indução', value: '200 mg/dose 1×/dia por 14 dias' },
          { label: 'AIDS — manutenção', value: '200 mg/dose 2×/dia (se bem tolerado)' },
          { label: 'Reinício após interrupção > 7 dias', value: 'Reiniciar com metade da dose por 2 semanas' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Risco maior de hepatotoxicidade com CD4 > 250 (mulheres) ou > 400 (homens).' },
    sideEffects: [
      'Risco de Stevens-Johnson fatal nas primeiras 6 semanas — interromper se rash + febre/edema/conjuntivite',
      'Cefaleia, sedação, fadiga',
      'Náusea, diarreia, dor abdominal, hepatite, hepatotoxicidade',
      'Neutropenia, eosinofilia, rabdomiólise',
      'Obesidade com distribuição anômala',
    ],
    contraindications: ['Insuficiência hepática moderada a grave'],
  },
];

// IP — Inibidores de Protease
export const antirretroviraisIP = [
  {
    id: 'atazanavir',
    name: 'Atazanavir',
    suffix: 'ATV',
    category: 'antirretrovirais-ip',
    observations: 'IP de primeira linha no tratamento TARV. Melhor tomar com alimentos. Não usar com saquinavir ou inibidores de bomba protônica.',
    brands: ['Reyataz / Atazanavir — cáps. 150, 200 e 300 mg'],
    presentations: [
      { label: 'Cápsula 150 mg' },
      { label: 'Cápsula 200 mg' },
      { label: 'Cápsula 300 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 6 anos (+ ritonavir 100 mg/dose 2×/dia)',
        items: [
          { label: '15–20 kg', value: '150 mg/dia' },
          { label: '20–40 kg', value: '200 mg/dia' },
          { label: '≥ 40 kg', value: '300 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'AIDS (inclusive gestação)', value: '300 mg/dia + ritonavir 100 mg/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Não usar com saquinavir ou inibidores de bomba protônica.' },
    sideEffects: [
      'Cefaleia, tontura, delírio, insônia, febre, depressão, irritabilidade',
      'Mialgia, artralgia, diarreia, náusea, vômito, dor abdominal',
      'Erupção cutânea, Stevens-Johnson, tosse',
      'Hiperglicemia, alterações de gordura corporal, aumento de transaminases, colestase',
      'Nefrolitíase, distúrbios de coagulação, anemia, neutropenia',
    ],
    contraindications: ['Insuficiência hepática grave'],
  },
  {
    id: 'darunavir',
    name: 'Darunavir',
    suffix: 'DRV',
    category: 'antirretrovirais-ip',
    observations: 'IP alternativo quando atazanavir não pode ser usado. Melhor tomar com alimentos. Inibidor do CYP450 com múltiplas interações.',
    brands: ['Prezista — comp. revestido 75, 150, 300 e 600 mg'],
    presentations: [
      { label: 'Comprimido revestido 75, 150, 300 e 600 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 3 anos (dose a cada 12 h)',
        items: [
          { label: '10–15 kg', value: 'DRV 20 mg/kg + RTV 3 mg/kg' },
          { label: '15–30 kg', value: 'DRV 375 mg + RTV 50 mg' },
          { label: '30–40 kg', value: 'DRV 450 mg + RTV 100 mg' },
        ],
      },
      {
        group: 'Adultos e crianças > 40 kg',
        items: [{ label: 'AIDS (inclusive gestação)', value: 'DRV 600 mg 2×/dia + ritonavir 100 mg 2×/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Inibidor do CYP450 — múltiplas interações.' },
    sideEffects: [
      'Geralmente bem tolerado',
      'Cefaleia, fadiga, astenia, diarreia, dor abdominal, náusea, vômitos',
      'Erupção cutânea, Stevens-Johnson, necrólise epidérmica tóxica',
      'Mialgia, hepatite, hiperlipidemia, diabetes mellitus, lipodistrofia, pancreatite aguda',
    ],
    contraindications: ['Insuficiência hepática grave'],
  },
  {
    id: 'fosamprenavir',
    name: 'Fosamprenavir',
    suffix: 'FVP',
    category: 'antirretrovirais-ip',
    observations: 'IP alternativo, geralmente associado a ritonavir. Inibidor do CYP450.',
    brands: ['Telzir — comp. revestido 700 mg; susp. oral 250 mg/5 mL'],
    presentations: [
      { label: 'Comprimido revestido 700 mg' },
      { label: 'Suspensão oral 250 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos (+ ritonavir 3 mg/kg/dose 2×/dia)',
        items: [
          { label: '11–14 kg', value: '30 mg/kg/dose 2×/dia' },
          { label: '15–19 kg', value: '23 mg/kg/dose 2×/dia' },
          { label: '≥ 20 kg', value: '18 mg/kg/dose 2×/dia (máx 700 mg)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'AIDS', value: '1400 mg/dose 2×/dia; ou 1400 mg/dose + ritonavir 200 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Inibidor do CYP450 — múltiplas interações.' },
    sideEffects: [
      'Cefaleia, náusea, diarreia, vômitos, dispepsia, parestesia perioral',
      'Exantema, Stevens-Johnson, urticária, erupção cutânea, paroníquia, alopecia, queilite',
      'Esteatose, lipodistrofia, dislipidemia, hiperglicemia, diabetes, infarto do miocárdio',
      'Hemorragia aguda, neutropenia, transaminases aumentadas, nefrolitíase',
    ],
    contraindications: [],
  },
  {
    id: 'ritonavir',
    name: 'Ritonavir',
    suffix: 'RTV',
    category: 'antirretrovirais-ip',
    observations: 'IP sempre associado a outros inibidores de protease (dose de reforço farmacocinético). Melhor tomar com alimentos. Inibidor do citocromo P450.',
    brands: ['Norvir / Ritonavir — sol. oral 80 mg/mL e 400 mg/5 mL; comp. 100 mg'],
    presentations: [
      { label: 'Solução oral 80 mg/mL' },
      { label: 'Solução oral 400 mg/5 mL' },
      { label: 'Comprimido 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 1 mês (como reforço)',
        items: [
          { label: 'Associado a outro IP', value: '100–400 mg/dia ÷ 1–2 doses' },
        ],
      },
      {
        group: 'Adultos (uso isolado raro)',
        items: [
          { label: 'Dose inicial', value: '300 mg/dose 2×/dia; aumentar 100 mg a cada 4 dias até 600 mg/dose 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Inibidor do citocromo P450 — múltiplas interações.' },
    sideEffects: [
      'Cefaleia, confusão, disestesias, parestesias periorais, tontura, síncope, sudorese',
      'Hiperemia da pele/face/pescoço, náusea, vômito, diarreia, hepatite, aumento de transaminases',
      'Gosto muito ruim, irritação GI, anorexia, perda de peso',
      'Alergia, erupção cutânea, broncoespasmo, diabetes, dislipidemia, lipodistrofia',
    ],
    contraindications: [],
  },
  {
    id: 'saquinavir',
    name: 'Saquinavir',
    suffix: 'SQV',
    category: 'antirretrovirais-ip',
    observations: 'IP — realizar ECG antes de iniciar. Não usar se QT > 450 ms. Melhor tomar após refeição com gordura.',
    brands: ['Sivir — cáps. 200 mg'],
    presentations: [{ label: 'Cápsula 200 mg' }],
    doses: [
      {
        group: 'Adultos > 16 anos',
        items: [{ label: 'AIDS', value: '1000 mg/dose 2×/dia + ritonavir 100 mg 2×/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Realizar ECG antes de iniciar; contraindicado se QT > 450 ms.' },
    sideEffects: [
      'Ataxia, confusão, cefaleia, fadiga, agitação, convulsão, febre, depressão, sonolência ou insônia',
      'Hipotensão ou hipertensão, sopros, náusea, vômito, diarreia, estomatite, dor abdominal, azia',
      'Hemólise, hiperlipidemia, diabetes, erupção cutânea, Stevens-Johnson, depressão medular',
      'Dislipidemia, lipodistrofia, transaminases aumentadas, alterações no ECG',
    ],
    contraindications: ['Intervalo QT prolongado'],
  },
  {
    id: 'tipranavir',
    name: 'Tipranavir',
    suffix: 'TPV',
    category: 'antirretrovirais-ip',
    observations: 'IP reservado para casos de resistência ao darunavir. Melhor tomar após refeição com gordura. Inibidor do citocromo P450.',
    brands: ['Eloids — cáps. 250 mg; sol. oral 500 mg/5 mL'],
    presentations: [
      { label: 'Cápsula 250 mg' },
      { label: 'Solução oral 500 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças e adolescentes > 2 anos',
        items: [{ label: 'AIDS', value: '14 mg/kg/dose ou 375 mg/m²/dose 2×/dia (máx 500 mg) + ritonavir 6 mg/kg/dose 2×/dia (máx 200 mg)' }],
      },
      {
        group: 'Adultos > 18 anos',
        items: [{ label: 'AIDS', value: '500 mg/dose 2×/dia + ritonavir 200 mg/dose 2×/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV resistente a darunavir'], resistant: [], warning: 'Inibidor do citocromo P450.' },
    sideEffects: [
      'Erupção cutânea, prurido, cefaleia, fadiga, febre, distúrbios do sono',
      'Diarreia, náusea, vômito, dor abdominal, hiperlipidemia, pancreatite aguda',
      'Toxicidade hepática (pode piorar hepatopatia prévia)',
      'Hemorragia intracraniana',
    ],
    contraindications: [],
  },
];

// Outros antirretrovirais
export const antirretroviraisOutros = [
  {
    id: 'dolutegravir',
    name: 'Dolutegravir',
    suffix: 'DTG',
    category: 'antirretrovirais-outros',
    observations: 'Inibidor de integrase preferencial. Tomar pela manhã. Não tomar com antiácidos minerais ou suplementos de Ca/Fe — tomar 2 h antes ou 6 h depois. Contraindicado na gestação. Múltiplas interações.',
    brands: ['Tivicay — comp. 50 mg'],
    presentations: [{ label: 'Comprimido 50 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'AIDS', value: '50 mg/dia' },
          { label: 'Resistentes ao raltegravir / em uso de efavirenz ou tipranavir/RTV', value: '50 mg/dose 2×/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: 'Múltiplas interações (fenitoína, fenobarbital, carbamazepina, rifampicina, etc.). Aumenta concentração de metformina.' },
    sideEffects: [
      'Geralmente bem tolerado',
      'Cefaleia, insônia, tontura, cansaço, náusea, vômito, diarreia, dor abdominal',
      'Erupção cutânea, prurido, alergia',
      'Hepatite, aumento de enzimas hepáticas, hiperbilirrubinemia',
      'Aumento de creatinina, lipase sérica, hiperglicemia',
      'Síndrome inflamatória de reconstituição imune, insuficiência renal',
    ],
    contraindications: ['Gestantes'],
  },
  {
    id: 'enfuvirtida',
    name: 'Enfuvirtida',
    suffix: 'ENF/T20',
    category: 'antirretrovirais-outros',
    observations: 'Inibidor de fusão, restrito para casos multirresistentes. Aplicar SC na parte superior do braço, face anterior da coxa ou abdome (fora da região umbilical).',
    brands: ['Fuzeon — Fr. amp. 108 mg (diluir em 1,1 mL → concentração 90 mg/mL)'],
    presentations: [{ label: 'Frasco-ampola 108 mg' }],
    doses: [
      {
        group: 'Crianças 6–16 anos',
        items: [{ label: 'AIDS multirresistente', value: '2 mg/kg/dose 2×/dia SC (máx 90 mg/dose)' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'AIDS multirresistente', value: '90 mg/dose 2×/dia SC' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV multirresistente'], resistant: [], warning: '' },
    sideEffects: [
      'Reação local no sítio de injeção',
      'Rubor, febre, calafrio, tremores, dormência, parestesias, cefaleia, fadiga, insônia, ansiedade',
      'Neuropatia periférica, conjuntivite, náusea, vômitos, diarreia, azia, hiporexia, pancreatite',
      'Hipotensão, reações alérgicas graves, elevação de transaminases',
      'Disfunção renal, dispneia, pneumonia, glomerulonefrite, linfadenopatia',
    ],
    contraindications: [],
  },
  {
    id: 'maraviroque',
    name: 'Maraviroque',
    suffix: 'MVC',
    category: 'antirretrovirais-outros',
    observations: 'Antagonista do correceptor CCR5. Usado como resgate em falha virológica. Necessário teste prévio de genotipagem para tropismo viral (vírus R5).',
    brands: ['Celsentri — comp. revestido 150 e 300 mg'],
    presentations: [
      { label: 'Comprimido revestido 150 mg' },
      { label: 'Comprimido revestido 300 mg' },
    ],
    doses: [
      {
        group: 'Crianças > 40 kg',
        items: [{ label: 'AIDS', value: '150–300 mg/dose 2×/dia (conforme associação)' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'AIDS', value: '150–600 mg/dose 2×/dia (conforme outros ARVs em uso)' }],
      },
    ],
    sensitivity: { susceptible: ['HIV R5'], resistant: ['HIV X4 ou dual-trópico'], warning: 'Genotipagem para tropismo viral obrigatória antes do uso.' },
    sideEffects: [
      'Tontura, parestesia, sonolência, risco de AVC, convulsão',
      'Náusea, vômito, diarreia, dor abdominal, flatulência, hipotensão, gastrenterite, dispepsia',
      'Erupção cutânea, exantema, prurido, Stevens-Johnson',
      'Miosite infecciosa, choque séptico, pancreatite, disfunção renal',
      'Colestase, cirrose, hepatotoxicidade, aumento de transaminases',
      'Pancitopenia, neutropenia, depressão medular, anemia aplástica',
      'Endocardite, infarto do miocárdio, isquemia, tosse, febre',
    ],
    contraindications: ['Insuficiência renal grave', 'Uso concomitante com potentes indutores ou inibidores do CYP450'],
  },
  {
    id: 'raltegravir',
    name: 'Raltegravir',
    category: 'antirretrovirais-outros',
    observations: 'Inibidor de integrase — segunda opção após dolutegravir.',
    brands: ['Isentress — comp. mastigável 100 mg; comp. revestido 400 mg'],
    presentations: [
      { label: 'Comprimido mastigável 100 mg' },
      { label: 'Comprimido revestido 400 mg' },
    ],
    doses: [
      {
        group: 'Crianças 2–12 anos (dose 2×/dia por peso)',
        items: [
          { label: '14–19 kg', value: '100 mg' },
          { label: '20–28 kg', value: '150 mg' },
          { label: '29–40 kg', value: '200 mg' },
          { label: '≥ 40 kg', value: '300 mg' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'AIDS', value: '400 mg/dose 2×/dia' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sensitivity: { susceptible: ['HIV'], resistant: [], warning: '' },
    sideEffects: [
      'Geralmente bem tolerado',
      'Cefaleia, fadiga, tontura, insônia, dor abdominal, náusea, diarreia',
      'Aumento de TGO/TGP, hipertensão, aumento de LDL, triglicérides, glicemia',
      'Tosse, sintomas de gripe, erupção cutânea, verrugas genitais',
      'Síndrome de reconstituição imunitária, miopatia, rabdomiólise',
    ],
    contraindications: [],
  },
];