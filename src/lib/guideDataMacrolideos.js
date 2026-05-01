// ============================================================
// MACROLÍDEOS E LINCOSAMIDAS — dados do Guia de Doses
// ============================================================

export const MACROLIDEOS_CATEGORY = {
  id: 'macrolideos',
  label: 'Macrolídeos e Lincosamidas',
  color: 'yellow-500',
  icon: '🔴',
  drugs: [
    {
      id: 'azitromicina',
      name: 'Azitromicina',
      category: 'macrolideos',
      observations: 'Macrolídeo azalídeo derivado da eritromicina com meia-vida muito longa. Mais eficaz para H. influenzae e Moraxella catarrhalis que a eritromicina e a claritromicina. Tomar em jejum: 1 hora antes ou 2 horas após refeições. Após reconstituição, suspensão estável por até 5 dias em temperatura ambiente. Macrolídeos elevam níveis séricos de digoxina, varfarina, teofilina e ciclosporina.',
      brands: [
        'Azitromicina / Zithromax / Astro / Azi / Azitrocin — comp. rev. 500 e 1000 mg; susp. oral 200 mg/5 mL; Fr. amp. 500 mg',
      ],
      presentations: [
        { label: 'Comprimido revestido 500 mg e 1000 mg' },
        { label: 'Suspensão oral 200 mg/5 mL' },
        { label: 'Frasco-ampola 500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual oral — 1º dia', value: '10–12 mg/kg/dose. Neonatos: 10–20 mg/kg/dia. Máx: 500 mg/dose' },
            { label: 'Dose usual oral — dias seguintes', value: '5–6 mg/kg/dose. Máx: 500 mg/dose' },
            { label: 'Infecções graves — EV', value: '10 mg/kg/dia. Máx: 500 mg/dose' },
            { label: 'Faringite', value: '5 mg/kg/dia por 3–5 dias (dose dobrada no 1º dia)' },
            { label: 'Sinusite', value: '10 mg/kg/dia por 3–5 dias' },
            { label: 'Otite — opção 1', value: '10 mg/kg/dia 1×/dia por 1 dia' },
            { label: 'Otite — opção 2', value: '20 mg/kg/dia dose única' },
            { label: 'Pneumonia atípica', value: '10 mg/kg/dia no 1º dia; depois 5 mg/kg/dia por 4 dias. Máx: 500 mg/dia' },
            { label: 'Micobactérias atípicas — tratamento', value: '10–12 mg/kg/dia + etambutol' },
            { label: 'Micobactérias atípicas — profilaxia', value: '20 mg/kg/semana' },
            { label: 'Cólera', value: 'Dose única de 20 mg/kg. Máx: 1 g/dose' },
            { label: 'Fibrose cística', value: '5 mg/kg/dia por 5 dias (dose dupla no 1º dia)' },
            { label: 'Uso prolongado (< 40 kg)', value: '250 mg/dia' },
            { label: 'Uso prolongado (> 40 kg)', value: '500 mg/dia' },
            { label: 'Profilaxia de endocardite', value: '15 mg/kg 30–60 min antes. Máx: 500 mg/dose' },
            { label: 'Conjuntivite / pneumonia por Chlamydia', value: 'Oral EV: 20 mg/kg/dia por 3 dias' },
            { label: 'Diarreia', value: '10 mg/kg/dia por 3 dias' },
            { label: 'Campylobacter', value: '5–10 mg/kg/dia por 5 dias' },
            { label: 'Diarreia grave por Shigella', value: '12 mg/kg/dia no 1º dia; depois 6 mg/kg/dia por 4 dias. Máx: 250 mg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Faringite, otite, sinusite, piodermites', value: '500 mg/dia no 1º dia; depois 250 mg/dia do 2º ao 5º dia' },
            { label: 'Pneumonia comunitária', value: 'EV ou oral: 500 mg/dia por pelo menos 5 dias' },
            { label: 'Exacerbação de DPOC', value: 'Oral: 500 mg/dia por 3 dias' },
            { label: 'Gonorreia', value: '2 g oral dose única + ceftriaxona IM' },
            { label: 'DST — cancro mole e Chlamydia', value: 'Oral: 1 g dose única' },
            { label: 'Cólera / Tracoma', value: 'Dose única de 1 g' },
            { label: 'Granuloma inguinal / linfogranuloma venéreo', value: '1 g 1×/semana por 3 semanas' },
            { label: 'Micobactérias atípicas', value: '500–600 mg/dia + etambutol; profilaxia: 1200 mg/semana' },
            { label: 'DIP', value: '500 mg/dia no 1º, 2º e 7º dias; depois 250 mg/dia do 7º ao 14º dia' },
            { label: 'Profilaxia de endocardite', value: '500 mg 1 hora antes do procedimento' },
          ],
        },
      ],
      preparation: 'EV: diluir em 1 ou 2 mg/mL; correr cada dose em 1–3 horas.',
      renalAdjustment: [
        { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      ],
      sensitivity: {
        susceptible: [
          'S. pyogenes, Pneumococo, Estafilococos, Mycoplasma pneumoniae, Legionella, Chlamydia pneumoniae',
          'Haemophilus, Moraxella catarrhalis, T. gondii, E. trachomatis, L. pneumophila, B. pertussis, Campylobacter, H. pylori',
        ],
        resistant: [
          'S. aureus resistente à oxacilina (nenhum macrolídeo é útil)',
          'Algumas cepas de Streptococcus grupo A, Pneumococo, S. epidermidis, N. gonorrhoeae, Salmonella, Shigella',
          'Algumas cepas de S. aureus sensíveis à oxacilina são resistentes',
          'Gram-negativos: Pseudomonas, Acinetobacter, E. coli, Klebsiella, Enterobacter, Serratia, Brucella',
        ],
        warning: '',
      },
      sideEffects: [
        'Diarreia, dor e cólica abdominal, náusea, vômitos, flatulência, colite pseudomembranosa',
        'Palpitação, dor torácica, arritmia ventricular, hipotensão, aumento do intervalo QTc',
        'Candidíase oral, perda temporária de audição, alergia, angioedema, anafilaxia',
        'Eritema multiforme, Stevens-Johnson, urticária, cefaleia, tontura, vertigem',
        'Alteração de comportamento, agressividade, síncope, vaginite, erupção cutânea',
        'Aumento de TGO/TGP e CPK, colestase, necrose hepática, pancreatite',
        'Anemia, leucopenia, trombocitopenia, nefrite, insuficiência renal aguda',
      ],
      contraindications: [],
    },

    {
      id: 'claritromicina',
      name: 'Claritromicina',
      category: 'macrolideos',
      observations: 'Macrolídeo derivado da eritromicina, 4 vezes mais potente para estreptococo e estafilococo sensível à oxacilina, e mais bem tolerada que ela. Sabor ruim pode prejudicar adesão. Aumenta risco de toxicidade com digoxina, colchicina, ciclosporina, cimetidina, teofilina, valproato, carbamazepina, estatinas, varfarina e tacrolimus. Risco de arritmias em pacientes com QT longo.',
      brands: [
        'Klaricid / Claritromicina — comp. LP 500 mg; susp. oral 125 e 250 mg/5 mL; Fr. amp. 500 mg',
      ],
      presentations: [
        { label: 'Comprimido LP 500 mg' },
        { label: 'Suspensão oral 125 mg/5 mL e 250 mg/5 mL' },
        { label: 'Frasco-ampola 500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Otite, amigdalite, sinusite, pneumonia, piodermite', value: '15 mg/kg/dia ÷ 2 doses por 10 dias. Máx: 500 mg/dose' },
            { label: 'Profilaxia de endocardite', value: '15 mg/kg 1 hora antes' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral', value: '250–500 mg/dose 2×/dia ou 1000 mg LP 1×/dia' },
            { label: 'EV', value: '500 mg/dose 2×/dia' },
            { label: 'Bronquite, exacerbações, pneumonia', value: '250–500 mg/dose 2×/dia ou 1000 mg/dia LP por 7–14 dias' },
            { label: 'Helicobacter pylori', value: '1000 mg/dia em associação' },
            { label: 'Sinusite', value: '500 mg/dose 2×/dia ou 1000 mg/dia LP por 14 dias' },
            { label: 'Faringite, amigdalite, piodermites', value: '250 mg/dose 2×/dia por 10 dias' },
            { label: 'Profilaxia endocardite', value: '500 mg 1 hora antes' },
            { label: 'Micobactéria atípica', value: '500 mg/dose 2×/dia + etambutol' },
          ],
        },
      ],
      preparation: 'EV: diluir liofilizado em 10 mL de água para injeção; depois rediluir em 250 mL de SGI, SF ou Ringer.',
      renalAdjustment: [
        { label: 'ClCr 10–30 mL/min', value: '50% da dose' },
        { label: 'ClCr < 10 mL/min', value: '25% da dose 1×/dia' },
      ],
      sensitivity: {
        susceptible: [
          'Pneumococo, S. pyogenes, H. influenzae, Moraxella, Gonococo, Meningococo, Campylobacter',
          'Chlamydia trachomatis, Mycoplasma, H. pylori, Legionella, B. pertussis, B. parapertussis, Toxoplasma, Mycobacterium avium',
        ],
        resistant: [
          'Yersinia, Proteus, E. coli, Enterococcus, Klebsiella, Salmonella, Pseudomonas, Bacteroides',
          'Todo S. aureus resistente à oxacilina; algumas cepas de S. aureus sensíveis à oxacilina',
        ],
        warning: '',
      },
      sideEffects: [
        'Cefaleia, dispepsia, náusea, vômito, diarreia, dor abdominal, hepatite reversível, dor no local da injeção',
        'Trombocitopenia, neutropenia, erupção cutânea, prurido, urticária, Stevens-Johnson',
        'Aumento de transaminases, tontura, creatinina aumentada, prolongamento do TP, colestase',
        'Risco de arritmias em pacientes com QT longo',
      ],
      contraindications: [],
    },

    {
      id: 'clindamicina',
      name: 'Clindamicina',
      category: 'macrolideos',
      observations: 'Lincosamida com boa ação para anaeróbios (exceto B. fragilis). Boa concentração em abscessos e ossos. Escolha em malária, sempre associada. Não penetra no SNC. Tem ação intracelular e exerce ação bactericida contra S. aureus já fagocitado por neutrófilos. Risco de colite pseudomembranosa (0,1–10% — pode ocorrer semanas após o fim do tratamento). Via oral: tomar com alimentos e muita água.',
      brands: [
        'Dalacin C / Clindarix / Clindamicina — cápsulas 300 mg; ampola 150 mg/mL; sol. injetável 150 mg/mL',
      ],
      presentations: [
        { label: 'Cápsula 300 mg' },
        { label: 'Ampola 150 mg/mL' },
      ],
      doses: [
        {
          group: 'RN prematuros e a termo',
          items: [
            { label: '< 1200 g / < 28 dias', value: '10 mg/kg/dia ÷ 2' },
            { label: '1200–2000 g / ≤ 7 dias', value: '10 mg/kg/dia ÷ 2' },
            { label: '1200–2000 g / > 7 dias', value: '15 mg/kg/dia ÷ 3' },
            { label: '> 2000 g / ≤ 7 dias', value: '15 mg/kg/dia ÷ 3' },
            { label: '> 2000 g / > 7 dias', value: '20 mg/kg/dia ÷ 4' },
          ],
        },
        {
          group: 'Crianças',
          items: [
            { label: 'Oral', value: '10–40 mg/kg/dia ÷ 3–4 doses. Máx: 1800 mg/dia' },
            { label: 'EV', value: '20–40 mg/kg/dia ÷ 3–4 doses. Mínimo 300 mg/dia' },
            { label: 'Malária', value: '20 mg/kg/dia ÷ 3 doses por 7 dias + primaquina' },
            { label: 'Profilaxia endocardite (alternativa)', value: '20 mg/kg 1 hora antes. Máx: 600 mg/dose' },
            { label: 'Otite', value: '30–40 mg/kg/dia ÷ 3 doses por 5–10 dias' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral', value: '600–1800 mg/dia ÷ 2–4 doses' },
            { label: 'EV/IM', value: '600–2700 mg/dia ÷ 2–4 doses' },
            { label: 'Mastite', value: 'Oral: 300 mg/dose 4×/dia' },
            { label: 'Vaginose bacteriana', value: 'Oral: 300 mg/dose 2×/dia por 7 dias' },
            { label: 'Profilaxia doença perinatal EBhemolítico B', value: 'EV: 900 mg a cada 8 h até o parto' },
            { label: 'Ferida infectada', value: 'Oral: 300 mg/dose 3–4×/dia' },
            { label: 'Gangrena', value: 'EV: 900 mg/dose 3×/dia' },
            { label: 'Malária não complicada', value: '20 mg/kg/dia ÷ 3 doses por 7 dias + cloroquina' },
            { label: 'Malária grave por P. falciparum', value: 'EV: ataque 10 mg/kg; depois 5 mg/kg/dose 3×/dia + artesunato/artemeter/quinina; passar para oral tão logo possível' },
            { label: 'Profilaxia de endocardite (alternativa)', value: '600 mg/dose 1 hora antes' },
            { label: 'Toxoplasmose em alérgicos a sulfa', value: '600 mg/dose 3–4×/dia + pirimetamina + ácido folínico' },
            { label: 'Pneumocistose moderada — alternativa', value: 'Oral: 300 mg/dose 4×/dia + primaquina por 21 dias' },
            { label: 'Pneumocistose grave — alternativa', value: 'EV: 600 mg/dose 4×/dia + primaquina por 21 dias' },
            { label: 'Pneumonia por S. aureus oxacilina resistente', value: '600 mg/dose 3×/dia por 7–21 dias' },
          ],
        },
      ],
      preparation: 'EV: diluir para 6 mg/mL em SF ou SGI; correr em ~30 min. Máx: 30 mg/min. Parada cardíaca por injeção EV rápida.',
      renalAdjustment: [
        { label: 'Insuficiência renal', value: 'Não exige ajuste' },
      ],
      sensitivity: {
        susceptible: [
          'Anaeróbios (exceto B. fragilis): Bacteroides spp., Propionibacterium, Clostridium, Peptococcus, Peptostreptococcus, microaerófilos',
          'Eficaz para S. aureus comunitário resistente à oxacilina',
        ],
        resistant: [
          'C. difficile, Enterococo, Gonococo, Bordetella, Nocardia, Chlamydia, Enterobacterias, H. influenzae, Meningococo, Mycoplasma',
          'S. viridans, S. aureus, S. pyogenes, Actinomyces, Veillonella, S. pneumoniae, S. epidermidis, C. diphtheriae, Fusobacterium',
        ],
        warning: 'Acúmulo na insuficiência hepática moderada.',
      },
      sideEffects: [
        'Náusea, vômito, diarreia aquosa, dispepsia, dor abdominal, cólicas, esofagite, anorexia, azia',
        'Risco de colite pseudomembranosa (0,1–10% — pode ocorrer semanas após o tratamento)',
        'Alergia rara, erupção cutânea, urticária, prurido, febre, Stevens-Johnson',
        'Hipotensão, arritmia, aumento de QT no ECG; parada cardíaca por injeção EV rápida',
        'Disfunção hepática, leucopenia, trombocitopenia, eosinofilia, prolongamento de bloqueio neuromuscular',
        'Dor no local da injeção, flebite, risco de disfunção renal',
      ],
      contraindications: [
        'Diarreia prévia',
        'Colite crônica',
      ],
    },

    {
      id: 'eritromicina',
      name: 'Eritromicina',
      category: 'macrolideos',
      observations: 'Macrolídeo bacteriostático útil no tratamento de infecções estreptocócicas e estafilocócicas em alérgicos à penicilina. Tomar 1 hora antes ou no intervalo das refeições. Aumenta risco de toxicidade com digoxina, colchicina, ciclosporina, cimetidina, midazolam, fenitoína, valproato, carbamazepina, estatinas, varfarina e tacrolimus. Contraindicado em pacientes com QT longo.',
      brands: [
        'Estolato de eritromicina / Eritromicina — susp. oral 125 e 250 mg/5 mL; comp. 500 mg; Fr. amp. 1000 mg',
      ],
      presentations: [
        { label: 'Suspensão oral 125 mg/5 mL e 250 mg/5 mL' },
        { label: 'Comprimido 500 mg' },
        { label: 'Frasco-ampola 1.000 mg' },
      ],
      doses: [
        {
          group: 'Neonatos',
          items: [
            { label: '≤ 7 dias (ou < 1 kg ≤ 14 dias)', value: '20 mg/kg/dia ÷ 2 doses' },
            { label: '> 7 dias', value: '30 mg/kg/dia ÷ 3 doses' },
          ],
        },
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual oral', value: '30–50 mg/kg/dia ÷ 3–4 doses. Máx: 2 g/dia' },
            { label: 'EV', value: '15–20 mg/kg/dia ÷ 4 doses ou EV contínuo em 24 h. Máx: 4 g/dia' },
            { label: 'Impetigo estreptocócico / estafilocócico', value: 'Oral: 40 mg/kg/dia ÷ 4 doses por 7–10 dias' },
            { label: 'Conjuntivite / pneumonia por Chlamydia', value: 'Oral: 50 mg/kg/dia ÷ 4 doses por 14 dias' },
            { label: 'Pneumonia atípica', value: 'Oral: 40 mg/kg/dia ÷ 2–4 doses por 14 dias; EV graves: 20 mg/kg/dia ÷ 4 doses' },
            { label: 'Profilaxia doença reumática (alérgico à PEN) 4 m–3 anos', value: '250 mg/dia' },
            { label: 'Profilaxia doença reumática (alérgico à PEN) > 3 anos', value: '500 mg/dia ÷ 2 doses' },
            { label: 'Coqueluche', value: 'Oral: 40 mg/kg/dia ÷ 4 doses por 14 dias' },
            { label: 'Otite média', value: '50 mg/kg/dia ÷ 3–4 doses por 10 dias' },
            { label: 'Cólera / Campylobacter', value: '50 mg/kg/dia ÷ 4 doses (Campylobacter: ÷ 2–3 por 5–7 dias)' },
            { label: 'Preparo pré-operatório de cólon', value: 'Oral: 20 mg/kg/dose × 3 no dia anterior + neomicina + citrato' },
            { label: 'Efeito procinético oral', value: '3–5 mg/kg/dose a cada 3–4 h (ajustar até 10 mg/kg/dose). Máx: 250 mg/dose' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral', value: '250–500 mg/dose 2–4×/dia' },
            { label: 'EV', value: '0,5–1 g/dose ÷ 4 doses ou 15–20 mg/kg/dia ÷ 4 doses. Máx: 1000 mg/dose ou 4 g/dia' },
            { label: 'DST por Chlamydia', value: '500 mg/dose 4×/dia por 7 dias' },
            { label: 'Preparo do cólon para cirurgia', value: '3 doses de 1000 mg com intervalos de 3–6 h antes da cirurgia' },
            { label: 'Prostatite crônica por Ureaplasma / Chlamydia', value: '30 mg/kg/dia ÷ 4 doses por 4–6 semanas' },
            { label: 'Granuloma inguinal', value: '500 mg/dose 4×/dia por 3 semanas' },
            { label: 'Exacerbações de gastroparesia', value: 'EV: 3 mg/kg/dose 3×/dia' },
          ],
        },
      ],
      preparation: 'EV: reconstituir em 20 mL de ABD; diluir para concentração final de 1 mg/mL; infundir em 30–45 min.',
      renalAdjustment: [
        { label: 'ClCr < 10 mL/min', value: '10–17 mg/kg a cada 8 h' },
      ],
      sensitivity: {
        susceptible: [
          'Streptococcus A, Staphylococcus sensível à oxacilina, Legionella, C. diphtheriae, H. influenzae, Moraxella catarrhalis',
          'U. urealyticum, Campylobacter, B. pertussis, M. pneumoniae, Chlamydia',
          'Não 1ª escolha: Estreptococos, Estafilococos, Pneumococos, Haemophilus, Actinomyces, Rickettsia, Espiroquetas',
        ],
        resistant: [
          'Maioria dos Gram-negativos: E. coli, Klebsiella, Enterobacter, Serratia, Proteus, Salmonella, Shigella, Acinetobacter, Pseudomonas',
          'S. aureus resistente à oxacilina (nenhum macrolídeo é útil)',
        ],
        warning: '',
      },
      sideEffects: [
        'Cefaleia, convulsão, fraqueza muscular, dor epigástrica, cólicas abdominais, náusea, vômito, dispepsia, flatulência, diarreia',
        'Candidíase oral, disfunção hepática, hepatite colestática, colite pseudomembranosa, pancreatite',
        'Alergia, erupção cutânea, prurido, urticária, eosinofilia, anafilaxia, flebite no local da injeção',
        'Ototoxicidade EV, febre, dispneia, tosse',
        'Arritmia ventricular, aumento do QTc, taquicardia ventricular, torsade de pointes, bradicardia',
      ],
      contraindications: [
        'Pacientes com doença do QT longo',
      ],
    },

    {
      id: 'espiramicina',
      name: 'Espiramicina',
      category: 'macrolideos',
      observations: 'Macrolídeo toxoplasmícida. Semelhante à eritromicina, com ação adicional contra Toxoplasma gondii. Alternativa à pirimetamina.',
      brands: [
        'Rovamicina — comprimido revestido 500 mg (= 1.500.000 UI)',
      ],
      presentations: [
        { label: 'Comprimido revestido 500 mg (1.500.000 UI)' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '50 mg/kg/dia ÷ 2–3 doses (aumentar 50% nos casos graves)' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '2.000.000–3.000.000 UI/dia ÷ 2–3 doses' },
            { label: 'Infecções graves', value: '4.000.000–5.000.000 UI/dia ÷ 2–3 doses' },
            { label: 'Toxoplasmose na gestante', value: '1 g/dose 3–4×/dia no 1º trimestre ou até o parto' },
            { label: 'Criptosporidiose na AIDS', value: '25 mg/dose 3×/dia' },
          ],
        },
      ],
      sensitivity: {
        susceptible: ['Semelhante à eritromicina + Toxoplasma gondii'],
        resistant: [],
        warning: '',
      },
      sideEffects: [
        'Náusea, vômito, diarreia, disfunção hepática, fadiga, sudorese, opressão torácica, colite, epistaxe',
      ],
      contraindications: [],
    },

    {
      id: 'lincomicina',
      name: 'Lincomicina',
      category: 'macrolideos',
      observations: 'Lincosamida pouco usada atualmente.',
      brands: [
        'Lincomicina / Frademicina / Hylinc — ampola 200 mg/mL e 300 mg/mL',
      ],
      presentations: [
        { label: 'Ampola 200 mg/mL e 300 mg/mL' },
      ],
      doses: [
        {
          group: 'Crianças > 1 mês',
          items: [
            { label: 'IM', value: '10 mg/kg/dose 1–2×/dia' },
            { label: 'EV', value: '10–20 mg/kg/dia ÷ 2–3 doses. Máx: 8 g/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'IM', value: '600 mg/dose 1–2×/dia' },
            { label: 'EV', value: '600–1000 mg/dose 2–3×/dia. Máx: 8 g/dia' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'Insuficiência renal grave', value: 'Reduzir dose em 70–75%' },
      ],
      sensitivity: {
        susceptible: ['Gram-positivos, Estafilococos oxacilina sensível, Bacteroides, Anaeróbios'],
        resistant: [],
        warning: '',
      },
      sideEffects: [
        'Dor epigástrica, náusea, vômito, estomatite, colite pseudomembranosa, diarreia, alergia, Stevens-Johnson',
      ],
      contraindications: [],
    },
  ],
};