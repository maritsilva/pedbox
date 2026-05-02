export const OUTROS_ANTIBACTERIANOS_CATEGORY = {
  id: 'outros-antibacterianos',
  label: 'Outros Antibacterianos',
  color: 'indigo-500',
  icon: '💉',
  drugs: [
    {
      id: 'colistina',
      name: 'Colistina / Polimixina E',
      suffix: 'Colistimetato sódico',
      category: 'outros-antibacterianos',
      observations: 'Polimixina para infecção por Gram-negativos multirresistentes. Não usar como monoterapia; associar carbapenêmicos para retardar resistência. Equivalência: 1 mg colistina base ≈ 30.000 UI colistimetato.',
      brands: [
        'Colis-tek — Fr. amp. 150 mg',
        'Colomycin — Fr. amp. 1.000.000 UI',
      ],
      presentations: [
        { label: 'Fr. amp. 150 mg' },
        { label: 'Fr. amp. 1.000.000 UI' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual EV', value: '2,5–5 mg/kg/dia ÷ 2–4 doses' },
            { label: 'Intratecal (meningite)', value: '1–4,2 mg/dia' },
            { label: 'Fibrose cística EV', value: '3–5 mg/kg/dia ÷ 3. Máx: 100 mg/dose' },
            { label: 'Pneumonia inalatória', value: '30–150 mg ou 900.000–4.500.000 UI/dose 2×/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV', value: '2,5–5 mg/kg/dia ÷ 2–4 doses. Evitar > 300 mg/dia' },
            { label: 'Casos graves (ataque)', value: '300 mg EV; manutenção: 150 mg/dose 2×/dia' },
            { label: 'Meningite intratecal', value: '4,2 mg/dia' },
            { label: 'P. aeruginosa / Acinetobacter', value: 'Ataque 5 mg/kg; após 24 h manutenção + uso inalatório' },
          ],
        },
      ],
      preparation: 'Reconstituir em 2 mL ABD, diluir em SF ou glicosado, infundir em 30 min ou em 3 h a cada 8 h.',
      renalAdjustment: [
        { label: 'ClCr 50–80 mL/min', value: '2,5–3,5 mg/kg/dia ÷ 2 doses' },
        { label: 'ClCr 30–50 mL/min', value: '2,5 mg/kg/dia ÷ 1–2 doses' },
        { label: 'ClCr 10–29 mL/min', value: '1,5 mg/kg a cada 36 h' },
      ],
      sensitivity: {
        susceptible: [
          'P. aeruginosa multirresistente, A. baumannii',
          'Klebsiella, E. coli resistentes, Haemophilus',
          'Bordetella pertussis, Citrobacter',
        ],
        resistant: [
          'Proteus, Burkholderia, Serratia, Neisseria',
        ],
        warning: '',
      },
      sideEffects: [
        'Parestesia perioral, formigamentos, vertigem, ataxia, confusão, convulsão',
        'Nefrotoxicidade dose-dependente',
        'Miastenia, meta-hemoglobinemia',
      ],
      contraindications: [],
    },
    {
      id: 'daptomicina',
      name: 'Daptomicina',
      suffix: 'Cubicin',
      category: 'outros-antibacterianos',
      observations: 'Lipopeptídeo para Staphylococcus resistentes e enterococo/Streptococcus resistentes à vancomicina. NÃO usar em pneumonias — é inativada pelo surfactante pulmonar.',
      brands: [
        'Cubicin — Fr. amp. 500 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '4–6 mg/kg/dia' },
            { label: 'Endocardite estafilocócica resistente (< 6 anos)', value: '10 mg/kg/dia' },
            { label: 'Endocardite estafilocócica resistente (≥ 6 anos)', value: '6 mg/kg/dia' },
            { label: 'Infecções de pele', value: '7–10 mg/kg/dia por 14 dias' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Infecções de pele', value: '4 mg/kg/dia por 7–14 dias' },
            { label: 'Endocardite / bacteremia estafilocócica', value: '8–10 mg/kg/dia por 1–6 semanas. Máx: 12 mg/kg/dia' },
            { label: 'Osteomielite', value: '6–8 mg/kg/dia por 6 semanas' },
            { label: 'Artrite séptica', value: '6 mg/kg/dia por 3–4 semanas' },
          ],
        },
      ],
      preparation: 'Infundir em 2–30 min. Interromper se miopatia ou CPK > 5× o normal. Refrigerar a 2–8 °C.',
      renalAdjustment: [
        { label: 'ClCr < 30 mL/min ou diálise', value: '1 dose a cada 48 h' },
      ],
      sensitivity: {
        susceptible: [
          'Todos os Gram-positivos, incluindo resistentes',
          'S. aureus (MRSA), Enterococcus resistente à vancomicina (VRE)',
        ],
        resistant: [
          'Ineficaz em pneumonias (inativada pelo surfactante)',
        ],
        warning: 'Suspender estatinas durante o uso — risco de miopatia.',
      },
      sideEffects: [
        'Cefaleia, ansiedade, tremor, tontura',
        'Diarreia, hipotensão, edema',
        'Aumento de CPK, proteinúria, arritmia',
      ],
      contraindications: [],
    },
    {
      id: 'fosfomicina',
      name: 'Fosfomicina',
      suffix: 'Monuril',
      category: 'outros-antibacterianos',
      observations: 'Único do grupo. Usado principalmente em infecção urinária baixa de adultos. Via parenteral reservada para multirresistentes.',
      brands: [
        'Monuril — Sachê 3 g',
      ],
      presentations: [
        { label: 'Sachê 3 g' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Via parenteral (multirresistentes)', value: '100–400 mg/kg/dia ÷ 2–4 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Cistite / uretrite (mulher)', value: '3 g em dose única' },
            { label: 'ITU (homem)', value: '3 g/dose a cada 2–3 dias por 3 doses' },
            { label: 'Prostatite', value: '3 g/dose a cada 2–3 dias por 21 dias' },
          ],
        },
      ],
      sensitivity: {
        susceptible: [
          'E. coli (inclusive resistente), Enterobactérias, Pseudomonas',
          'S. aureus, Pneumococo',
        ],
        resistant: [
          'Acinetobacter, B. fragilis, Anaeróbios',
        ],
        warning: 'Evitar associação com metoclopramida.',
      },
      sideEffects: [
        'Cefaleia, tontura, fadiga',
        'Diarreia, náusea, vômito',
        'Hipopotassemia, neutropenia',
      ],
      contraindications: [],
    },
    {
      id: 'metronidazol',
      name: 'Metronidazol',
      suffix: 'Flagyl',
      category: 'outros-antibacterianos',
      observations: 'Imidazólico anaerobicida de primeira escolha. Amebicida, giardicida e tricomonocida. Boa concentração em líquor e abscessos. Muito eficaz por via oral.',
      brands: [
        'Flagyl — comp. 250 mg e 400 mg; susp. 200 mg/5 mL; sol. injetável 5 mg/mL',
      ],
      presentations: [
        { label: 'Comprimido 250 mg e 400 mg' },
        { label: 'Suspensão oral 200 mg/5 mL' },
        { label: 'Solução injetável 5 mg/mL' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Anaerobicida', value: '30–50 mg/kg/dia ÷ 3. Máx: 2250 mg/dia' },
            { label: 'Amebíase / giardíase', value: '35–50 mg/kg/dia ÷ 3 por 5–10 dias. Máx: 750 mg/dose' },
            { label: 'Giardíase', value: '15–30 mg/kg/dia ÷ 2–3 por 7–10 dias. Máx: 250 mg/dose' },
            { label: 'H. pylori', value: '20 mg/kg/dia ÷ 2 por 10–14 dias em esquema combinado' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Anaerobicida', value: '7,5 mg/kg/dose a cada 4 h ou 500 mg a cada 8 h. Casos graves: ataque 15 mg/kg. Máx: 4000 mg/dia' },
            { label: 'Amebíase', value: '500–750 mg/dose 3×/dia por 10 dias' },
            { label: 'C. difficile', value: '500 mg/dose 3×/dia por 14 dias' },
            { label: 'Giardíase', value: '250–500 mg/dose 3×/dia por 5–10 dias' },
            { label: 'Tricomoníase', value: '2 g dose única ou 250 mg 3×/dia por 7 dias' },
            { label: 'Vaginose bacteriana', value: '500 mg/dose 2×/dia por 7 dias' },
          ],
        },
      ],
      preparation: 'EV: concentração máxima 8 mg/mL em SF ou SGI. Velocidade máxima de infusão: 5 mL/min. NÃO ingerir álcool até 4 dias após o término do tratamento.',
      renalAdjustment: [
        { label: 'ClCr < 10 mL/min', value: '50% da dose 4×/dia' },
        { label: 'Hemodiálise', value: 'Remove 50–100%; repor dose após sessão' },
      ],
      sensitivity: {
        susceptible: [
          'Bacteroides, Peptococcus, Peptostreptococcus',
          'Clostridium difficile, Prevotella, Fusobacterium',
          'H. pylori, Trichomonas, Giardia, Entamoeba',
        ],
        resistant: [
          'Todas as bactérias aeróbicas',
          'Eubacterium, Propionibacterium, Lactobacillus',
        ],
        warning: 'Álcool causa efeito dissulfiram-like (vômitos intensos, convulsão).',
      },
      sideEffects: [
        'Gosto metálico, cefaleia, tontura',
        'Náusea, vômito, diarreia',
        'Urina vermelho-escura (sem importância clínica)',
        'Neuropatia periférica em doses altas e prolongadas',
      ],
      contraindications: [],
    },
    {
      id: 'linezolida',
      name: 'Linezolida',
      suffix: 'Zyvox',
      category: 'outros-antibacterianos',
      observations: 'Oxazolidinona bacteriostática. Única opção oral para Staphylococcus resistentes à oxacilina (MRSA). Boa equivalência oral/venosa. Monitorar hemograma semanalmente.',
      brands: [
        'Zyvox — comp. 600 mg; sol. injetável 2 mg/mL',
      ],
      presentations: [
        { label: 'Comprimido 600 mg' },
        { label: 'Solução injetável 2 mg/mL' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '30 mg/kg/dia ÷ 3. Máx: 600 mg/dose' },
            { label: 'Fibrose cística EV', value: '30 mg/kg/dia ÷ 3 por até 2 semanas' },
            { label: 'Endocardite enterococo resistente', value: '30 mg/kg/dia ÷ 3 por 8 semanas' },
            { label: 'TB multirresistente', value: '20–24 mg/kg/dia ÷ 2' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '600 mg/dose 2×/dia por 10–14 dias' },
            { label: 'Pneumonia / infecções graves', value: '600 mg/dose 2×/dia por 7–21 dias' },
            { label: 'TB multirresistente', value: '600 mg/dose 1–2×/dia por até 4 meses' },
          ],
        },
      ],
      preparation: 'EV: concentração 2 mg/mL; infundir em 30–120 min. Nível sérico > 20 mg/L aumenta toxicidade.',
      renalAdjustment: [
        { label: 'Insuficiência renal', value: 'Não exige ajuste de dose' },
      ],
      sensitivity: {
        susceptible: [
          'Todos os Gram-positivos, incluindo MRSA',
          'Streptococcus A, B, C, G e pneumococo resistentes',
          'Enterococo resistente à vancomicina (VRE)',
        ],
        resistant: [
          'Todos os Gram-negativos',
        ],
        warning: 'Evitar com inibidores de recaptação de serotonina — risco de síndrome serotoninérgica.',
      },
      sideEffects: [
        'Tontura, insônia, cefaleia',
        'Náusea, diarreia, colite',
        'Neuropatia periférica, neurite óptica (uso prolongado)',
        'Trombocitopenia, anemia — monitorar hemograma semanalmente',
      ],
      contraindications: [],
    },
    {
      id: 'nitrofurantoina',
      name: 'Nitrofurantoína',
      suffix: 'Macrodantina',
      category: 'outros-antibacterianos',
      observations: 'Derivado nitrofurânico. Antibacteriano restrito às infecções urinárias, sobretudo ITU baixa. Não funciona com ClCr < 40 mL/min. Para crianças pequenas, formular suspensão 25 mg/5 mL.',
      brands: [
        'Macrodantina — cáps. 100 mg',
      ],
      presentations: [
        { label: 'Cápsula 100 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '5–7 mg/kg/dia ÷ 4 doses por 3–7 dias. Máx: 100 mg/dose ou 400 mg/dia' },
            { label: '7–10 kg', value: '12,5 mg/dose × 4/dia' },
            { label: '11–20 kg', value: '25 mg/dose × 4/dia' },
            { label: '21–30 kg', value: '37,5 mg/dose × 4/dia' },
            { label: '31–40 kg', value: '50 mg/dose × 4/dia' },
            { label: '> 40 kg', value: '50–100 mg/dose × 4/dia' },
            { label: 'Profilaxia ITU', value: '1–2 mg/kg/dose 1×/dia. Máx: 100 mg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'ITU baixa', value: '50–100 mg/dose 4×/dia por 3–7 dias' },
            { label: 'Profilaxia ITU recorrente', value: '50–100 mg/dose 1×/dia ao deitar' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr < 60 mL/min', value: 'Uso contraindicado' },
      ],
      sensitivity: {
        susceptible: [
          'E. coli, Klebsiella, Enterobacter, Enterococcus',
        ],
        resistant: [
          'S. aureus, Serratia, Pseudomonas',
        ],
        warning: '',
      },
      sideEffects: [
        'Tontura, cefaleia, neuropatia periférica',
        'Náusea, anemia megaloblástica',
        'Pneumonite por hipersensibilidade, fibrose pulmonar intersticial (uso crônico)',
      ],
      contraindications: [
        'Neonatos',
        'Gestantes a termo',
        'Anúria ou oligúria',
        'ClCr < 60 mL/min',
      ],
    },
  ],
};