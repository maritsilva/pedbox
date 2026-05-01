// ============================================================
// SULFONAMIDAS E AMINOGLICOSÍDEOS — dados do Guia de Doses
// ============================================================

export const SULFONAMIDAS_CATEGORY = {
  id: 'sulfonamidas',
  label: 'Sulfonamidas',
  color: 'lime-500',
  icon: '🧪',
  drugs: [
    {
      id: 'sulfadiazina',
      name: 'Sulfadiazina',
      category: 'sulfonamidas',
      observations: 'Sulfonamida de ação bacteriostática, eficiente no tratamento de infecções gonocócicas, estafilocócicas, estreptocócicas e meningocócicas. Suplementar ácido fólico, tomar bastante líquido e evitar sol ou usar protetor solar.',
      brands: [
        'Sulfazina / Sulfadiazina — comprimido 500 mg',
      ],
      presentations: [
        { label: 'Comprimido 500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose inicial', value: '75 mg/kg/dia ÷ 4 doses' },
            { label: 'Manutenção', value: '120–150 mg/kg/dia ÷ 4 doses. Máx: 6 g/dia' },
            { label: 'Toxoplasmose congênita', value: '100 mg/kg/dia ÷ 2 doses por 12 meses + pirimetamina + ácido folínico' },
            { label: 'Profilaxia doença reumática (≤ 30 kg)', value: '0,5 g/dia' },
            { label: 'Profilaxia doença reumática (> 30 kg)', value: '1 g/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '2–4 g/dia ÷ 3–6 doses. Máx: 6 g/dia' },
            { label: 'Paracoccidioidomicose', value: '65–100 mg/kg/dia ÷ 6 doses' },
            { label: 'Toxoplasmose em imunodeprimidos — tratamento', value: '4–6 g/dia por 6 semanas + pirimetamina + ácido folínico' },
            { label: 'Toxoplasmose em imunodeprimidos — profilaxia', value: '2–4 g/dia por 2–4 semanas' },
            { label: 'Pneumocystis jirovecii', value: '100 mg/kg/dia ÷ 4 doses' },
          ],
        },
      ],
      sensitivity: {
        susceptible: ['Toxoplasma, Malária, Paracoccidioidomicose'],
        resistant: [
          'Algumas cepas de: Bacillus anthracis, Brucella, Pseudomonas, H. influenzae, Yersinia, Chlamydia',
        ],
        warning: '',
      },
      sideEffects: [
        'Cansaço, fraqueza, cefaleia, náusea, vômito, anorexia, diarreia',
        'Hipersensibilidade, erupção cutânea, prurido, Stevens-Johnson',
        'Hepatite, icterícia, hepatite fulminante, febre, artralgia, mialgia',
        'Depressão medular, agranulocitose, anemia aplástica',
        'Nefropatia aguda, cristalúria, nefrite intersticial, hemólise',
      ],
      contraindications: [],
    },

    {
      id: 'sulfametoxazol-trimetoprima',
      name: 'Sulfametoxazol + Trimetoprima',
      suffix: 'Cotrimoxazol',
      category: 'sulfonamidas',
      observations: 'Associação bacteriostática útil sobretudo em infecções urinárias, otites, sinusites, bronquites e pneumocistose. A incidência de efeitos colaterais é maior em pacientes com AIDS. Contraindicado na porfiria, deficiência de folato, insuficiência renal ou hepática grave e primeiro trimestre da gestação.',
      brands: [
        'Bactrim / Bactrim F — comp. 400+80 mg e 800+160 mg; susp. 200+40 mg/5 mL e 400+80 mg/5 mL; ampola 80+16 mg/mL',
        'Genérico — comp. 400+80 mg e 800+160 mg; susp. 200+40 mg/5 mL; ampola 80+16 mg/mL',
      ],
      presentations: [
        { label: 'Comprimido 400+80 mg (simples) e 800+160 mg (forte)' },
        { label: 'Suspensão oral 200+40 mg/5 mL' },
        { label: 'Ampola 80+16 mg/mL' },
      ],
      doses: [
        {
          group: 'Crianças (dose pelo sulfametoxazol)',
          items: [
            { label: 'Oral 2 m–2 anos', value: '30–60 mg/kg/dia ÷ 2 doses' },
            { label: 'Oral > 2 anos', value: '40 mg/kg/dia ÷ 2 doses. Máx: 800 mg/dose' },
            { label: 'EV', value: '40–50 mg/kg/dia ÷ 2–4 doses' },
            { label: 'Profilaxia ITU', value: '10 mg/kg/dia 1×/dia' },
            { label: 'Pneumocystis — tratamento', value: '75–100 mg/kg/dia ÷ 3–4 doses por 21 dias (iniciar EV)' },
            { label: 'Pneumocystis — profilaxia', value: '25–50 mg/kg/dia ÷ 1–2 doses ou 75 mg/m²/dia 3×/semana' },
            { label: 'Ciclosporíase / isosporíase', value: '40–50 mg/kg/dia ÷ 2 doses por 7–10 dias' },
            { label: 'Infecção por B. cepacea (FC)', value: '40–50 mg/kg/dia ÷ 2–4 doses' },
            { label: 'Meningite por Listeria (alérgico à PEN)', value: 'EV: 50–100 mg/kg/dia ÷ 2–4 doses por 21 dias' },
            { label: 'Nocardia pulmonar', value: '200 mg/kg/dia ÷ 2 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'ITU / cistite', value: '800 mg/dose 2×/dia por 3–7 dias' },
            { label: 'Pielonefrite', value: '800 mg/dose 2×/dia por 10–14 dias' },
            { label: 'Prostatite aguda', value: '400 mg/dose 2×/dia por 2 semanas' },
            { label: 'Prostatite crônica', value: '400 mg/dose 2×/dia por 2–3 meses' },
            { label: 'Bronquite / DPOC', value: '800 mg/dose 2×/dia por 5–14 dias' },
            { label: 'Sinusite / mastite', value: '400 mg/dose 2×/dia por 7–14 dias' },
            { label: 'Nocardia pulmonar ou cerebral — oral', value: '25–50 mg/kg/dia ÷ 2 doses' },
            { label: 'Nocardia — EV', value: '75 mg/kg/dia ÷ 3–4 doses' },
            { label: 'Pneumocistose pulmonar', value: '75–100 mg/kg/dia ÷ 3–4 doses ou 1600 mg/dose 3×/dia por 21 dias (EV nos casos graves)' },
            { label: 'Profilaxia pneumocistose', value: '800 mg/dose 3×/semana' },
            { label: 'Paracoccidioidomicose grave', value: 'EV: 800–1200 mg/dose 4×/dia; profilaxia: 400–800 mg/dose 2×/dia por 6–18 meses' },
            { label: 'Neurotoxoplasmose', value: '50 mg/kg/dia ÷ 2 doses' },
            { label: 'Granuloma inguinal', value: '800 mg/dose 2×/dia por 3 semanas' },
            { label: 'Diarreia por Shigella', value: '800 mg/dose 2×/dia por 5–7 dias' },
            { label: 'Cólera', value: '800 mg/dose 2×/dia por 3 dias' },
            { label: 'Isosporíase na AIDS', value: '800 mg/dose 2×/dia por 7–10 dias (dobrar e prolongar até 28 dias se persistir)' },
            { label: 'Supressão isosporíase AIDS', value: '800 mg/dose 3×/semana' },
          ],
        },
      ],
      preparation: 'EV: diluir cada mL em 25 mL de SGI; agitar bem; correr em 60–90 min. Se necessário, diluir em 15 mL de SGI. Não misturar na mesma solução para via oral.',
      renalAdjustment: [
        { label: 'ClCr 15–30 mL/min', value: '50% da dose' },
        { label: 'ClCr < 15 mL/min', value: 'Não recomendado' },
      ],
      sensitivity: {
        susceptible: [
          'Gram-negativos: Moraxella, Meningococo, E. coli, Klebsiella, Salmonella, Shigella, Citrobacter, Morganella, Serratia, Enterobacter, Providencia, Haemophilus, Acinetobacter, B. pertussis, P. cepacea (maioria), S. maltophilia, Aeromonas, Yersinia, Legionella, F. tularensis, V. cholerae',
          'Gram-positivos: Listeria, S. aureus (inclusive algumas cepas resistentes à oxacilina), S. epidermidis, S. faecalis, Nocardia, Chlamydia, Pneumocystis jirovecii',
        ],
        resistant: [
          'S. pneumoniae (pode falhar mesmo quando sensível in vitro), Enterococcus, Bacteroides, Fusobacterias, P. aeruginosa, B. fragilis, Proteus (maioria), Micobacterias, T. pallidum, Mycoplasma, Rickettsias',
          'Algumas cepas de: N. gonorrhoeae, Meningococo, Estafilococo, E. coli, Klebsiella, Enterobacter, Serratia, Salmonella, Shigella, Acinetobacter, Pseudomonas, Haemophilus',
        ],
        warning: 'Reduz efeito de anticoncepcionais. Pode precipitar kernicterus na hiperbilirrubinemia neonatal grave.',
      },
      sideEffects: [
        'Cefaleia, confusão, depressão, convulsão, alucinações, ataxia, calafrios, febre medicamentosa, meningite asséptica',
        'Náusea, vômito, diarreia, anorexia, glossite, estomatite, colite pseudomembranosa, pancreatite, esplenomegalia',
        'Erupção cutânea, urticária, prurido, dermatite, eritema multiforme, Stevens-Johnson, anafilaxia, doença do soro, fotossensibilização',
        'Agranulocitose, aplasia medular, eosinofilia, anemia hemolítica, trombocitopenia, neutropenia, agrava deficiência de folato, anemia megaloblástica',
        'Síndrome lúpica, vasculite, hepatite, icterícia, colestase, nefrite intersticial, necrose tubular aguda, miocardite alérgica',
        'Hiperpotassemia, hipoglicemia, aumento de transaminases, artralgia, mialgia',
      ],
      contraindications: [
        'Porfiria',
        'Deficiência de folato',
        'Insuficiência renal ou hepática grave',
        'Primeiro trimestre da gestação',
      ],
    },
  ],
};

export const AMINOGLICOSIDEOS_CATEGORY = {
  id: 'aminoglicosideos',
  label: 'Aminoglicosídeos',
  color: 'teal-600',
  icon: '💉',
  drugs: [
    {
      id: 'amicacina',
      name: 'Amicacina',
      category: 'aminoglicosideos',
      observations: 'Aminoglicosídeo com menor índice de resistência. Indicado em infecções graves por Gram-negativos, sobretudo hospitalares. Preferir gentamicina quando mais barata e igualmente eficaz. Dose única diária preferível em > 1 ano, estáveis, sem imunodepressão ou insuficiência renal/hepática. Monitorar nível sérico: basal < 10 µg/mL; pico (30 min após infusão) 15–30 µg/mL. Nível > 35 µg/mL: nefro e ototoxicidade.',
      brands: [
        'Amiclin / Amicacina — ampola 50 mg/mL e 250 mg/mL',
        'Sulfato de amicacina — ampola 50 e 250 mg/mL',
      ],
      presentations: [
        { label: 'Ampola 50 mg/mL' },
        { label: 'Ampola 250 mg/mL' },
      ],
      doses: [
        {
          group: 'RN prematuros e a termo',
          items: [
            { label: '< 1 kg / ≤ 14 dias', value: '15 mg/kg a cada 48 h' },
            { label: '< 1 kg / 15–28 dias', value: '15 mg/kg/dia' },
            { label: '1–2 kg / ≤ 7 dias', value: '15 mg/kg a cada 48 h' },
            { label: '1–2 kg / 8–28 dias', value: '15 mg/kg/dia' },
            { label: '> 2 kg / ≤ 7 dias', value: '15 mg/kg/dia' },
            { label: '> 2 kg / > 7 dias', value: '17,5 mg/kg/dia' },
          ],
        },
        {
          group: 'Crianças (EV/IM)',
          items: [
            { label: 'Sepse / infecção grave', value: '15–20 mg/kg/dia ÷ 1–3 doses. EV em 30–60 min' },
            { label: 'Fibrose cística', value: '15–30 mg/kg/dia ÷ 1–3 doses (preferir dose única diária)' },
            { label: 'Meningite ≤ 7 dias', value: '15–20 mg/kg/dia ÷ 2 doses EV' },
            { label: 'Meningite > 7 dias', value: '20–30 mg/kg/dia ÷ 3 doses EV' },
            { label: 'Endocardite', value: '15 mg/kg/dia ÷ 2–3 doses' },
            { label: 'Peritonite diálise peritoneal', value: 'Inicial IP: 25 mg/L; manutenção: 12 mg/L por litro de solução' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV ou IM', value: '15 mg/kg/dia ÷ 1–3 doses. Máx: 1500 mg/dia' },
            { label: 'Pneumonia hospitalar', value: '15–20 mg/kg/dia' },
            { label: 'Infecção urinária', value: '15 mg/kg em dose única diária' },
            { label: 'Intratecal na meningite grave', value: '30 mg/dia por 5–10 dias' },
            { label: 'Intravítrea na endoftalmite', value: '0,4 mg em 0,1 mL de SF + vancomicina' },
            { label: 'M. fortuitum / chelonae / abscessus', value: '10–15 mg/kg/dia por 2 semanas + cefoxitina' },
          ],
        },
      ],
      preparation: 'Diluir a dose em 100 mL de NaCl 0,9% ou SGI; infundir em 40 min. Pode ser diluída em Ringer, ABD e bicarbonato.',
      renalAdjustment: [
        { label: 'ClCr 10–50 mL/min', value: '50% da dose diária a cada 24–72 h' },
        { label: 'ClCr < 10 mL/min', value: '50% da dose diária a cada 48–72 h' },
        { label: 'Hemodiálise', value: 'Remove 20%; meia dose adicional após sessão' },
      ],
      sensitivity: {
        susceptible: [
          'E. coli, Pseudomonas (maioria), Proteus, Klebsiella, Enterobacter, Serratia, Salmonella, Shigella, Citrobacter, Enterococcus, Yersinia enterocolitica',
          'Eficaz (não 1ª escolha): S. aureus, S. epidermidis, H. influenzae, M. fortuitum, M. chelonae, M. abscessus',
        ],
        resistant: [
          'Anaeróbios, algumas cepas de S. pneumoniae',
          'Gram-negativos multirresistentes: Klebsiella, Enterobacter, Pseudomonas',
        ],
        warning: 'Aminoglicosídeos têm pouca penetração intratecal — uso restrito a meningites em situações excepcionais.',
      },
      sideEffects: [
        'Nefrotoxicidade: albuminúria, hematúria, cilindros granulosos, alterações de K/Na/Mg/Ca (risco aumentado com contraste iodado EV, ciclosporina, anfotericina ou vancomicina)',
        'Ototoxicidade: zumbido, tontura, surdez (principalmente com > 3 g de AAS/dia)',
        'Urticária, erupção cutânea, angioedema, febre, anafilaxia, prurido, náusea, vômito',
        'Bloqueio neuromuscular, tremores, cefaleia, ataxia, parestesia, vertigem',
        'Anemia, neutropenia, trombocitopenia, disfunção hepática, hepatomegalia, esplenomegalia, fibrose pulmonar, hipertensão, artralgia, eosinofilia',
      ],
      contraindications: [],
    },

    {
      id: 'gentamicina',
      name: 'Gentamicina',
      category: 'aminoglicosideos',
      observations: 'Aminoglicosídeo antibiótico. Aplicar em musculatura profunda ou EV. Não eficaz na meningite por baixa penetração intratecal. Dose única diária preferível, exceto no choque, neutropênicos, imunodeprimidos e na insuficiência renal/hepática. Monitorar: basal 1–2 µg/mL; pico (30 min após infusão) 5–10 µg/mL; pico dose única 16–24 µg/mL.',
      brands: [
        'Gentamicina / Gentamicin — ampola 20, 40 e 80 mg/mL',
        'Sulfato de gentamicina — ampola 10, 40 e 80 mg/mL',
      ],
      presentations: [
        { label: 'Ampola 10 mg/mL, 40 mg/mL e 80 mg/mL' },
      ],
      doses: [
        {
          group: 'RN prematuros e a termo',
          items: [
            { label: '< 1 kg / ≤ 14 dias', value: '5 mg/kg a cada 48 h' },
            { label: '< 1 kg / 15–28 dias', value: '5 mg/kg a cada 36 h' },
            { label: '1–2 kg / ≤ 7 dias', value: '5 mg/kg a cada 48 h' },
            { label: '1–2 kg / > 7 dias', value: '5 mg/kg a cada 36 h' },
            { label: '> 2 kg / ≤ 7 dias', value: '4 mg/kg/dia' },
            { label: '> 2 kg / > 7 dias', value: '4–5 mg/kg/dia' },
          ],
        },
        {
          group: 'Crianças',
          items: [
            { label: 'Sepse / infecção grave', value: '4,5–7,5 mg/kg/dia ÷ 1–3 doses' },
            { label: 'Intratecal', value: '1–2 mg/dia' },
            { label: 'Fibrose cística', value: '10–12 mg/kg/dia 1×/dia EV' },
            { label: 'Endocardite', value: 'EV/IM: 3–6 mg/kg/dia por 2–6 semanas (dependendo da associação)' },
            { label: 'Profilaxia endocardite (alto risco)', value: '1,5 mg/kg 30 min antes + ampicilina ou vancomicina' },
            { label: 'Meningite', value: 'EV: 7,5 mg/kg/dia ÷ 3 doses + ampicilina ou cefotaxima' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV ou IM', value: '3–5 mg/kg/dia ÷ 3 doses' },
            { label: 'Infecção grave', value: '5–7 mg/kg/dia ÷ 1–3 doses. Máx: 300 mg/dia' },
            { label: 'Pneumonia hospitalar', value: 'Ataque 2 mg/kg; depois 1,7 mg/kg/dose 3×/dia' },
            { label: 'Meningite por Pseudomonas', value: 'EV: 5 mg/kg/dia ÷ 3 doses' },
            { label: 'Endocardite', value: '3 mg/kg/dia ÷ 1–3 doses por 2 ou mais semanas' },
            { label: 'ITU complicada', value: '4,5 mg/kg/dia em dose única' },
          ],
        },
      ],
      preparation: 'Diluir para no mínimo 10 mg/mL em SF ou SGI; infundir em 30 min.',
      renalAdjustment: [
        { label: 'ClCr 10–50 mL/min', value: 'Mesma dose a cada 12–24 h' },
        { label: 'ClCr < 10 mL/min', value: 'Mesma dose a cada 48–72 h' },
        { label: 'Hemodiálise', value: 'Iniciar com 2–3 mg/kg; depois 1–2 mg/kg a cada 48–72 h' },
      ],
      sensitivity: {
        susceptible: [
          'Gram-negativos: E. coli, Pseudomonas, Proteus, Klebsiella, Enterobacter, Serratia, Salmonella, Shigella, Citrobacter, Yersinia, H. influenzae, Haemophilus, Moraxella',
          'Eficaz (não 1ª escolha): S. aureus e S. epidermidis sensíveis à oxacilina',
        ],
        resistant: [
          'Anaeróbios, algumas cepas de S. pneumoniae, Gram-negativos multirresistentes',
          'Algumas cepas de Klebsiella e Pseudomonas; Pneumococo; Gram-positivos em geral',
        ],
        warning: 'Nefrotoxicidade aumentada com anfotericina, furosemida, ciclosporina, cisplatina, anti-inflamatórios e contraste.',
      },
      sideEffects: [
        'Nefrotoxicidade: albuminúria, hematúria, cilindros granulosos, alterações de K/Na/Mg/Ca',
        'Ototoxicidade: tontura, surdez; cefaleia, vertigem, ataxia',
        'Erupção cutânea, angioedema, anafilaxia, prurido, miopatia, fraqueza, tremor',
        'Náusea, vômito, anorexia, bloqueio neuromuscular',
        'Febre, espasmo, convulsões, parestesia, anemia, neutropenia, trombocitopenia, tromboflebite',
        'Disfunção hepática, hepatomegalia, transaminases alteradas, esplenomegalia, fibrose pulmonar, neurite óptica, hipertensão, artralgia',
      ],
      contraindications: [],
    },

    {
      id: 'tobramicina',
      name: 'Tobramicina',
      category: 'aminoglicosideos',
      observations: 'Aminoglicosídeo com eficácia melhor que a gentamicina para Pseudomonas, mas menos eficaz que a amicacina. Pouco menos nefrotóxica. Pico sérico ideal: 6–10 µg/mL. Diluir para ≥ 10 mg/mL e infundir em 30–60 min. Não misturar com outros antibióticos.',
      brands: [
        'Tobramicina / Bramitob / Tobrazol — flaconete 75 mg/mL; ampola 50 mg/mL; cápsulas inalatórias 28 mg; solução inalatória 300 mg',
      ],
      presentations: [
        { label: 'Ampola 50 mg/mL' },
        { label: 'Flaconete 75 mg/mL' },
        { label: 'Cápsula inalatória 28 mg' },
        { label: 'Solução inalatória 300 mg' },
      ],
      doses: [
        {
          group: 'RN prematuros e a termo',
          items: [
            { label: '< 1 kg / ≤ 14 dias', value: '5 mg/kg a cada 48 h' },
            { label: '< 1 kg / 15–28 dias', value: '5 mg/kg a cada 36 h' },
            { label: '1–2 kg / ≤ 7 dias', value: '5 mg/kg a cada 48 h' },
            { label: '1–2 kg / > 7 dias', value: '5 mg/kg a cada 36 h' },
            { label: '> 2 kg / ≤ 7 dias', value: '4 mg/kg/dia' },
            { label: '> 2 kg / > 7 dias', value: '4–5 mg/kg/dia' },
          ],
        },
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '6–7,5 mg/kg/dia ÷ 3–4 doses' },
            { label: 'Fibrose cística — EV', value: '10–12 mg/kg/dia ÷ 1–3 doses' },
            { label: 'Fibrose cística — inalatória (flaconete)', value: '300 mg 1×/dia em ciclos de 28 dias' },
            { label: 'Fibrose cística — inalatória (cápsula)', value: '112 mg (4 cápsulas/dose) em 2 ciclos de 28 dias' },
            { label: 'Endocardite', value: 'EV/IM: 3–6 mg/kg/dia ÷ 3 doses por 2–3 semanas' },
            { label: 'Meningite', value: 'EV: 7,5 mg/kg/dia ÷ 3 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV ou IM', value: '1–5,5 mg/kg/dose a cada 8 h ou 4–7 mg/kg/dia em dose única' },
            { label: 'Dose máxima', value: '300 mg/dia' },
            { label: 'Intratecal', value: '5–20 mg/dia' },
            { label: 'Brucelose', value: '240 mg/dia em dose única + doxiciclina por 7 dias' },
            { label: 'ITU complicada', value: '5 mg/dia em dose única' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr > 60 mL/min', value: 'A cada 8 h' },
        { label: 'ClCr 40–60 mL/min', value: 'A cada 12 h' },
        { label: 'ClCr 20–39 mL/min', value: 'A cada 24 h' },
        { label: 'ClCr 10–19 mL/min', value: 'A cada 48 h' },
        { label: 'ClCr < 10 mL/min', value: 'A cada 72 h ou conforme nível sérico' },
      ],
      sensitivity: {
        susceptible: [
          'E. coli, Proteus, Serratia, Shigella, Yersinia, Enterobacter, Salmonella, Citrobacter, Klebsiella (inclusive algumas ESBL), Pseudomonas (maioria)',
          'Eficaz (não 1ª linha): S. epidermidis, H. influenzae, S. aureus',
        ],
        resistant: [
          'N. gonorrhoeae, Chlamydia, Rickettsia, Pneumococo, Mycoplasma, Streptococcus A/B/C/D/G, S. aureus MRSA, Enterococcus, Acinetobacter, Anaeróbios',
          'Algumas cepas de Klebsiella e Pseudomonas',
        ],
        warning: '',
      },
      sideEffects: [
        'Nefrotoxicidade: proteinúria, disfunção renal, cilindrúria, aumento de creatinina, perda de eletrólitos',
        'Ototoxicidade: perda auditiva, tinnitus, vertigem, alteração de equilíbrio, ataxia',
        'Neurotoxicidade: vertigem, parestesia, cefaleia, fraqueza muscular, febre',
        'Náusea, vômitos, flebite, alergia, neutropenia, trombocitopenia, eosinofilia, erupção cutânea, dermatite',
        'Intensifica bloqueio neuromuscular',
      ],
      contraindications: [],
    },

    {
      id: 'neomicina',
      name: 'Neomicina',
      category: 'aminoglicosideos',
      observations: 'Aminoglicosídeo com baixa absorção digestiva (~3% absorvido). Pode se acumular no córtex renal e tecidos cocleares causando toxicidade. Uso oral.',
      brands: [],
      presentations: [],
      doses: [
        {
          group: 'Adultos / Crianças',
          items: [
            { label: 'Encefalopatia hepática — oral', value: '50–100 mg/kg/dia ÷ 1–2 doses (4–6 g/dia por 1–2 semanas; depois reduzir para 1,5–2 g a cada 6 dias)' },
            { label: 'Profilaxia cirurgia colorretal', value: '3 doses de 1 g no dia anterior (às 13 h, 14 h e 23 h) + eritromicina ou metronidazol + limpeza intestinal' },
          ],
        },
      ],
      sensitivity: {
        susceptible: ['Gram-negativos aeróbios'],
        resistant: [],
        warning: '',
      },
      sideEffects: [
        'Ototoxicidade, toxicidade tubular renal, neurotoxicidade',
        'Náusea, vômito, diarreia, paralisia respiratória',
      ],
      contraindications: [
        'Ulceração ou inflamação gastrointestinal',
        'Obstrução intestinal',
      ],
    },
  ],
};