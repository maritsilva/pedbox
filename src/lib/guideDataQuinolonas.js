// ============================================================
// QUINOLONAS — dados do Guia de Doses
// ============================================================

export const QUINOLONAS_CATEGORY = {
  id: 'quinolonas',
  label: 'Quinolonas',
  color: 'purple-500',
  icon: '🧬',
  drugs: [
    {
      id: 'ciprofloxacino',
      name: 'Ciprofloxacino',
      category: 'quinolonas',
      observations: 'Fluoroquinolona mais eficaz que as demais para Pseudomonas. Associada à penicilina cristalina, é boa alternativa em pneumonias graves em adultos para cobrir Gram-positivos e Gram-negativos, inclusive Pseudomonas, Legionella, Mycoplasma. Para pneumonia, preferir levofloxacino ou moxifloxacino. Útil por via oral em infecções osteoarticulares por S. aureus ou Gram-negativos. Baixa penetração no líquor.',
      brands: [
        'Cipro / Ciprofloxacino — comp. rev. 250 e 500 mg; comp. LP 500 e 1000 mg; sol. infusão 2 mg/mL',
        'Cloridrato de ciprofloxacino — comp. rev. 250 e 500 mg; sol. infusão 2 mg/mL',
      ],
      presentations: [
        { label: 'Comprimido revestido 250 e 500 mg' },
        { label: 'Comprimido LP 500 e 1000 mg' },
        { label: 'Solução infusão 2 mg/mL' },
      ],
      doses: [
        {
          group: 'RN',
          items: [
            { label: 'Dose usual', value: '7–40 mg/kg/dia ÷ 2 doses' },
          ],
        },
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual oral', value: '20 mg/kg/dia ÷ 2 doses. Máx: 500 mg/dose' },
            { label: 'Infecções graves — oral', value: '30–40 mg/kg/dia ÷ 2 doses. Máx: 750 mg/dose' },
            { label: 'Infecções graves — EV', value: '10 mg/kg/dose a cada 8 h. Máx: 400 mg/dose' },
            { label: 'Pielonefrite / ITU grave — EV', value: '20–30 mg/kg/dia ÷ 3 doses por 10–21 dias' },
            { label: 'Pielonefrite / ITU grave — oral', value: '20–40 mg/kg/dia ÷ 2 doses por 10–21 dias' },
            { label: 'Fibrose cística — EV', value: '30 mg/kg/dia' },
            { label: 'Fibrose cística — oral', value: '40 mg/kg/dia ÷ 2 doses' },
            { label: 'Profilaxia meningite meningocócica', value: '20 mg/kg dose única oral. Máx: 500 mg' },
            { label: 'Endocardite EV/oral', value: '10–15 mg/kg/dose 2×/dia por 4–6 semanas. Máx: 750 mg oral ou 400 mg EV' },
            { label: 'Pneumonia por H. influenzae — EV', value: '30 mg/kg/dia ÷ 2 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral', value: '500–750 mg 2×/dia ou XR 500–1000 mg/dia' },
            { label: 'Dose usual EV', value: '200–400 mg/dose 2×/dia' },
            { label: 'Cancro mole', value: '500 mg 2×/dia por 3 dias' },
            { label: 'Diarreia / cólera / Campylobacter', value: 'Oral: 500 mg 2×/dia por 5–7 dias' },
            { label: 'Granuloma inguinal', value: '750 mg 2×/dia por 3 semanas ou mais' },
            { label: 'ITU não complicada', value: 'Oral: 250 mg 2×/dia ou 500 mg XR por 3 dias' },
            { label: 'ITU complicada', value: 'Oral: 500 mg 2×/dia ou 1000 mg XR por 5–7 dias; EV: 400 mg 2×/dia' },
            { label: 'Pielonefrite não complicada', value: '500 mg 2×/dia por 7 dias' },
            { label: 'Pielonefrite complicada', value: 'EV: 400 mg 2×/dia por 7–14 dias' },
            { label: 'Prostatite crônica', value: 'Oral: 500 mg 2×/dia; EV: 400 mg 2×/dia por mínimo 6 semanas' },
            { label: 'Sepse / pneumonia / artrite séptica / osteomielite', value: 'EV: 400 mg 2×/dia; oral: 500–750 mg 2×/dia (7–14 dias pneumonia; 4–6 semanas osteomielite)' },
            { label: 'Infecções por P. aeruginosa', value: 'EV: 400 mg 3×/dia; oral: 750 mg 2×/dia' },
            { label: 'Supercrescimento bacteriano no delgado', value: '500 mg 2×/dia por 7–10 dias' },
            { label: 'Sinusite', value: '500 mg 2×/dia por 10 dias' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr 30–50 mL/min', value: '50% da dose a cada 12 h' },
        { label: 'ClCr 5–30 mL/min', value: '50% da dose a cada 18–24 h' },
        { label: 'ClCr < 5 mL/min ou hemodiálise', value: '50% da dose a cada 24 h' },
        { label: 'CAPD', value: '500 mg VO 2×/dia' },
      ],
      sensitivity: {
        susceptible: [
          'Pseudomonas (maioria), E. coli, Proteus, Klebsiella, Enterobacter, Serratia, Salmonella, Shigella, Campylobacter, Citrobacter, Aeromonas, Acinetobacter, Providencia, Morganella, Yersinia',
          'Eficaz mas não 1ª escolha: S. aureus oxacilina sensível, S. pneumoniae, S. faecalis, Chlamydia, Mycoplasma, N. gonorrhoeae, Haemophilus, Listeria',
        ],
        resistant: [
          'Streptococcus A, B, C, G; Pneumococo; Enterococcus; S. maltophilia; Burkholderia cepacia; Nocardia; T. pallidum',
          'Algumas cepas de Pseudomonas, Acinetobacter; Anaeróbios (Bacteroides, Clostridium)',
        ],
        warning: 'Eficácia oral semelhante à EV — passar para oral tão logo possível. Proteger contra luz intensa. Não tomar com antiácidos. Risco de reações graves fatais com aminofilina/teofilina. Casos de lesão de cartilagem em crescimento observados em animais — usar em crianças apenas se os benefícios superarem o risco teórico.',
      },
      sideEffects: [
        'Náusea, vômito, diarreia, dispepsia, dor abdominal, hemorragia digestiva, flatulência, anorexia, colite pseudomembranosa',
        'Tontura, cefaleia, insônia, tremor, convulsões, alteração de comportamento, depressão, alucinações, desorientação, agitação, delírio, distúrbios de memória',
        'Hiperglicemia, hipoglicemia (inclusive coma), hematúria',
        'Erupção cutânea, alergia, urticária, fotossensibilização, anafilaxia',
        'Flebite e dor no local da injeção, edema, hiperemia, anemia, eosinofilia, neutropenia',
        'Tendinite, ruptura de tendão, artrite; aumento de QTc; piora de miastenia grave; nefrite intersticial',
        'Descoloração esverdeada de dentes em RN; possível risco de suicídio',
      ],
      contraindications: [],
    },

    {
      id: 'acido-nalidixo',
      name: 'Ácido Nalidíxico',
      category: 'quinolonas',
      observations: 'Quimioterápico do grupo quinolona. Útil na profilaxia de infecções do trato urinário baixo e nas diarreias invasivas por Shigella. Melhor tomar em jejum, 1 hora antes ou 2 horas após as refeições.',
      brands: [
        'Naluril — comprimido 500 mg',
      ],
      presentations: [
        { label: 'Comprimido 500 mg' },
      ],
      doses: [
        {
          group: 'Crianças > 3 meses',
          items: [
            { label: 'ITU / diarreia', value: '50–55 mg/kg/dia ÷ 4 doses' },
            { label: 'Profilaxia prolongada', value: '30–33 mg/kg/dia ÷ 4 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '500–1000 mg/dose 4×/dia' },
            { label: 'Infecção urinária', value: '1 g/dose 4×/dia por 7–14 dias' },
            { label: 'Profilaxia de ITU', value: '500 mg/dose 4×/dia' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr ≤ 20 mL/min', value: '50% da dose' },
      ],
      sensitivity: {
        susceptible: ['E. coli, Proteus, Klebsiella, Enterobacter, Shigella, Salmonella, Brucella'],
        resistant: ['Pseudomonas'],
        warning: '',
      },
      sideEffects: [
        'Sonolência ou insônia, tontura, vertigem, confusão, alucinações, psicose tóxica, depressão, cefaleia, pseudotumor cerebral, convulsão',
        'Febre, calafrios, mialgia, tendinite',
        'Alergia, exantema, urticária, prurido, fotossensibilidade, artralgia',
        'Náusea, vômitos, mal-estar, hepatite, colestase',
        'Eosinofilia, leucopenia, trombocitopenia, hemólise',
      ],
      contraindications: [
        'Convulsões',
        'Menores de 3 meses',
      ],
    },

    {
      id: 'levofloxacino',
      name: 'Levofloxacino',
      category: 'quinolonas',
      observations: 'Fluoroquinolona sintética de uso em infecções respiratórias, intestinais e urinárias. Fluoroquinolona "respiratória" com boa cobertura para pneumococo resistente à penicilina. Para uso EV: diluir a 5 mg/mL e correr em 60 min.',
      brands: [
        'Levaquin / Levoxin / Tavanic / Levofloxacino — comp. rev. 250, 500 e 750 mg; sol. injetável 5 mg/mL; sol. oral 5 mg/mL',
      ],
      presentations: [
        { label: 'Comprimido revestido 250, 500 e 750 mg' },
        { label: 'Solução injetável 5 mg/mL' },
        { label: 'Solução oral 5 mg/mL' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: '6 meses a 4 anos — dose usual', value: '15–20 mg/kg/dia ÷ 2 doses. Máx: 750 mg/dia' },
            { label: '≥ 5 anos — dose usual', value: '10 mg/kg/dia em 1 dose. Máx: 750 mg/dia' },
            { label: 'Pneumonia / otite (6 m a 4 anos)', value: '15–20 mg/kg/dia ÷ 2 doses' },
            { label: 'Sinusite', value: '10–20 mg/kg/dia ÷ 1–2 doses por 10–14 dias' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral ou EV', value: '250–500 mg/dia (750 mg/dia para cobrir Pseudomonas)' },
            { label: 'Sepse', value: 'EV: 750 mg 1×/dia' },
            { label: 'Bronquite crônica', value: '500 mg/dia por 7 dias' },
            { label: 'ITU não complicada', value: '250 mg/dia por 3 dias' },
            { label: 'ITU complicada e pielonefrite', value: '250 mg/dia por 10 dias ou 750 mg/dia por 5 dias' },
            { label: 'Prostatite', value: '500 mg/dia por 20 dias' },
            { label: 'Pneumonia comunitária ou hospitalar', value: '500 mg/dia por 7–14 dias (750 mg/dia se Pseudomonas)' },
            { label: 'Sinusite', value: '500–750 mg/dia por 7–14 dias' },
            { label: 'Tuberculose — alternativa', value: '500–1000 mg/dia' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr 20–49 mL/min (ref. 500 mg/dia)', value: 'Dose inicial 500 mg; depois 250 mg a cada 24 h' },
        { label: 'ClCr < 20 mL/min ou diálise ou CAPD', value: 'Dose inicial 500 mg; depois 250 mg a cada 48 h' },
      ],
      sensitivity: {
        susceptible: [
          'Pneumococo (inclusive resistente à penicilina), S. viridans, S. pyogenes, S. agalactiae',
          'Moraxella, Klebsiella, E. coli, Serratia, Proteus, Shigella, Vibrio, Yersinia, Legionella, Salmonella',
          'H. influenzae, Enterobacter, Campylobacter, Providencia, Morganella, Citrobacter, Aeromonas, P. multocida',
          'Mycoplasma, Enterococcus faecalis, Chlamydia pneumoniae, E. coli e Klebsiella ESBL/KPC, M. tuberculosis',
          'Acinetobacter e Pseudomonas: algumas cepas',
        ],
        resistant: [
          'Enterococcus faecium, algumas cepas de Acinetobacter e Pseudomonas',
          'Bacteroides fragilis, C. difficile, N. gonorrhoeae (maioria), Borrelia, T. pallidum, Staphylococcus MRSA',
        ],
        warning: 'Cátions bivalentes ou trivalentes, suplementos vitamínicos e minerais reduzem absorção. Risco com varfarina.',
      },
      sideEffects: [
        'Cefaleia, tontura, insônia, febre, fadiga, convulsão, confusão, nervosismo, irritabilidade, ansiedade, alucinação, desorientação, delírio, piora da memória',
        'Hipoglicemia grave, diarreia, náusea, vômito, dor abdominal, dispepsia, anorexia, colite',
        'Erupção cutânea, anafilaxia, tremor, artralgia',
        'Disfunção cardíaca, hipotensão, hipertensão, bradicardia, taquicardia, edema, flebite, vaginite',
        'Neutropenia, trombocitopenia, piora de miastenia grave, aumento de transaminases',
      ],
      contraindications: [],
    },

    {
      id: 'moxifloxacino',
      name: 'Moxifloxacino',
      category: 'quinolonas',
      observations: 'Fluoroquinolona "respiratória" com boa eficácia para anaeróbios.',
      brands: [
        'Avalox / Moxifloxacino — comp. rev. 400 mg; sol. injetável 1,6 mg/mL',
      ],
      presentations: [
        { label: 'Comprimido revestido 400 mg' },
        { label: 'Solução injetável 1,6 mg/mL' },
      ],
      doses: [
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral ou EV', value: '400 mg/dia' },
            { label: 'Sinusite', value: '400 mg/dia por 10 dias' },
            { label: 'Bronquite', value: '400 mg/dia por 5 dias' },
            { label: 'Peritonite', value: 'EV: 400 mg/dia por 5–14 dias' },
            { label: 'Pneumonia comunitária ou hospitalar', value: '400 mg/dia por 7–10 dias' },
          ],
        },
      ],
      sensitivity: {
        susceptible: [
          'Pneumococo, H. influenzae, Mycoplasma, Anaeróbios, S. pyogenes, Legionella, Moraxella, S. aureus',
          'E. coli, Klebsiella, Proteus, Chlamydia pneumoniae',
        ],
        resistant: [
          'Bacteroides fragilis, C. difficile',
        ],
        warning: '',
      },
      sideEffects: [
        'Náusea, vômito, diarreia, constipação, dor abdominal, necrose hepática',
        'Cefaleia, tontura, confusão, convulsão, possível risco de suicídio',
        'Piora de miastenia grave, anafilaxia, erupção cutânea',
        'Taquicardia, hipotensão, QT longo, agranulocitose, anemia, hipopotassemia, aumento de enzimas hepáticas',
      ],
      contraindications: [],
    },

    {
      id: 'norfloxacino',
      name: 'Norfloxacino',
      category: 'quinolonas',
      observations: 'Fluoroquinolona de espectro e indicações similares à ciprofloxacino e levofloxacino. Melhor tomar em jejum, 1 hora antes ou 2 horas após as refeições, com água. Evitar antiácidos durante o uso.',
      brands: [
        'Floxacin / Floxacinol / Norf — comp. rev. 400 mg',
        'Norfloxacino — comp. rev. 400 mg',
      ],
      presentations: [
        { label: 'Comprimido revestido 400 mg' },
      ],
      doses: [
        {
          group: 'Crianças (uso restrito)',
          items: [
            { label: 'Dose usual', value: '30–40 mg/kg/dia ÷ 3 doses. Máx: 800 mg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '400 mg/dose 2×/dia' },
            { label: 'Infecção urinária', value: '400 mg/dose 2×/dia por 7–10 dias (3 dias para E. coli, K. pneumoniae, P. mirabilis; 10–21 dias nas complicadas/pielonefrites)' },
            { label: 'Diarreia grave por Shigella', value: '400 mg/dose 2×/dia por 3–5 dias' },
            { label: 'Prostatite', value: '400 mg/dose 2×/dia por 4–6 semanas' },
            { label: 'Gonorreia não complicada', value: '800 mg em dose única (não preconizada como rotina)' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr < 30 mL/min', value: '400 mg a cada 24 h' },
      ],
      sensitivity: {
        susceptible: [
          'Pneumococo (inclusive resistente), S. pyogenes, S. agalactiae, Salmonella, Providencia, Morganella, Citrobacter, Aeromonas, P. multocida',
          'H. influenzae, Enterobacter, Enterococcus faecalis, Chlamydia pneumoniae, Mycoplasma',
          'E. coli e Klebsiella ESBL/KPC, Acinetobacter (algumas cepas), Tuberculose resistente',
        ],
        resistant: [
          'Enterococcus faecium, algumas cepas de Acinetobacter e Pseudomonas',
          'B. fragilis, C. difficile, N. gonorrhoeae (maioria), Borrelia, T. pallidum, Staphylococcus MRSA',
        ],
        warning: 'Cátions bivalentes, suplementos minerais, antiácidos e sucralfato reduzem absorção. Aumenta efeito da varfarina.',
      },
      sideEffects: [
        'Cefaleia, tontura, fraqueza, distúrbios do sono, depressão, ansiedade, nervosismo, euforia, irritabilidade, inquietação, tremor, zumbido, ataxia, convulsões',
        'Fraqueza muscular, piora da memória, delírio, déficit de atenção',
        'Náusea, vômitos, pirose, cólicas, dor abdominal, anorexia, diarreia, colite, xerostomia',
        'Erupção cutânea, anafilaxia, dermatite esfoliativa, urticária, fotossensibilização, alergia, dispneia, colapso vascular',
        'Artralgia, artrite, tendinite, ruptura de tendão, tendinite de Aquiles',
        'Leucopenia, trombocitopenia, hemólise, hepatite, disfunção renal aguda',
      ],
      contraindications: [],
    },

    {
      id: 'ofloxacino',
      name: 'Ofloxacino',
      category: 'quinolonas',
      observations: 'Fluoroquinolona de espectro e indicações similares ao levofloxacino, com vantagem comparativa para algumas infecções urinárias e sexualmente transmissíveis. Não penetra bem no líquor. Cátions bivalentes e antiácidos reduzem absorção. Aumenta efeito da varfarina.',
      brands: [
        'Floxil / Ofloxacino — comp. rev. 200 e 400 mg',
      ],
      presentations: [
        { label: 'Comprimido revestido 200 mg e 400 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '7,5 mg/kg/dia ÷ 2 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '200–400 mg/dose 2×/dia' },
            { label: 'Bronquite, pneumonia, piodermite, celulite', value: '400 mg/dose 2×/dia por 10 dias' },
            { label: 'Infecção urinária', value: '200 mg/dose 2×/dia por 3–10 dias' },
            { label: 'Prostatite ou gonorreia', value: '400 mg/dose 2×/dia por 6 semanas' },
            { label: 'Diarreia', value: '400 mg/dia 1–2×/dia por 3–5 dias' },
            { label: 'Clamídia', value: '400 mg/dia por 7 dias' },
            { label: 'Hanseníase (esquema alternativo)', value: '400 mg/dia em associação' },
            { label: 'Tuberculose (< 40 kg)', value: '400 mg/dia por 12 meses' },
            { label: 'Tuberculose (> 40 kg)', value: '600 mg/dia por 12 meses' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr 20–50 mL/min', value: 'Mesma dose a cada 24 h' },
        { label: 'ClCr < 20 mL/min ou diálise', value: '50% da dose a cada 24 h' },
      ],
      sensitivity: {
        susceptible: [
          'E. coli, Proteus, Klebsiella, Serratia, Salmonella, Shigella, Citrobacter, Aeromonas, Yersinia, Campylobacter, Chlamydia',
          'Eficaz mas não 1ª escolha: S. aureus oxacilina sensível, S. pneumoniae, S. epidermidis, S. viridans, M. catarrhalis, Mycoplasma, Haemophilus ducreyi, Tuberculose',
        ],
        resistant: [
          'Pseudomonas (maioria), Bacteroides, Nocardia, Anaeróbios, T. pallidum, Ureaplasma',
        ],
        warning: '',
      },
      sideEffects: [
        'Náusea, vômito, diarreia, dor abdominal, anorexia, azia, dispepsia, estomatite',
        'Erupção cutânea, prurido, urticária, Stevens-Johnson',
        'Aumento transitório de transaminases, piora de miastenia grave, dor torácica, vasculites, tendinite',
        'Cefaleia, tontura, confusão, agitação, distúrbios do sono (visuais, gustativos, olfatórios), insônia, febre, risco de convulsão',
        'Leucopenia, trombocitopenia, eosinofilia, hepatite, nefrite intersticial',
      ],
      contraindications: [],
    },
  ],
};