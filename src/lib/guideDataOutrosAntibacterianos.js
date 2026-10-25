export const OUTROS_ANTIBACTERIANOS_CATEGORY = {
  id: 'outros-antibacterianos',
  label: 'Outros Antibacterianos',
  color: 'teal-600',
  icon: '💉',
  drugs: [
    {
      id: 'colistina',
      name: 'Colistina / Polimixina E',
      suffix: 'Colistimetato sódico',
      category: 'outros-antibacterianos',
      observations: 'Polimixina para infecção Gram-negativos multirresistentes. Não usar como monoterapia; associar carbapenêmicos para retardar resistência. Equivalência: 1 mg colistina base ≈ 30.000 UI colistimetato.',
      brands: ['Colis-tek — Fr. amp. 150 mg', 'Colomycin — Fr. amp. 1.000.000 UI'],
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
            { label: 'Fibrose cística EV', value: '3–5 mg/kg/dia ÷ 3 doses. Máx: 100 mg/dose' },
            { label: 'Pneumonia inalatória', value: '30–150 mg ou 900.000–4.500.000 UI/dose 2×/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '2,5–5 mg/kg/dia ÷ 2–4 doses. Evitar > 300 mg/dia' },
            { label: 'Casos graves (ataque)', value: 'EV: 300 mg; manutenção: 150 mg/dose 2×/dia' },
            { label: 'Meningite intratecal', value: '4,2 mg/dia' },
            { label: 'Fibrose cística EV', value: '3 mg/kg/dia ÷ 3 doses' },
          ],
        },
      ],
      preparation: 'Reconstituir em 2 mL ABD; diluir em SF ou glicosado; infundir em 30 min ou 3 h a cada 8 h.',
      renalAdjustment: [
        { label: 'ClCr 50–80 mL/min', value: '2,5–3,5 mg/kg/dia ÷ 2 doses' },
        { label: 'ClCr 30–50 mL/min', value: '2,5 mg/kg/dia ÷ 1–2 doses' },
        { label: 'ClCr 10–29 mL/min', value: '1,5 mg/kg a cada 36 h' },
      ],
      sensitivity: {
        susceptible: [
          'P. aeruginosa multirresistente, A. baumannii, Klebsiella, E. coli resistentes',
          'Haemophilus, B. pertussis, Citrobacter',
        ],
        resistant: ['Proteus, Burkholderia, Serratia, Neisseria'],
        warning: '',
      },
      sideEffects: [
        'Parestesia perioral, formigamentos, vertigem, ataxia',
        'Confusão, convulsão, miastenia',
        'Nefrotoxicidade',
      ],
      contraindications: [],
    },
    {
      id: 'daptomicina',
      name: 'Daptomicina',
      suffix: 'Cubicin',
      category: 'outros-antibacterianos',
      observations: 'Lipopeptídeo para Staphylococcus resistentes e enterococo/Streptococcus resistentes à vancomicina. Não usar em pneumonias (inativada por surfactante).',
      brands: ['Cubicin — Fr. amp. 500 mg'],
      presentations: [{ label: 'Fr. amp. 500 mg' }],
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
          preparation: "IV: Cubicin: Reconstitute vial with 10 mL NS to a resultant concentration of 50 mg/mL. Using a 21-gauge needle or smaller or needleless device, add NS to vial by directing to the wall of the vial and rotate gently to wet powder. Allow vial to stand for 10 minutes, then gently swirl to obtain completely reconstituted solution. Do not shake or agitat...",
          renalAdjustment: [
      { label: "ClCr <30 mL/minute", value: "received 4 mg/kg/dose and had the dosing interval extended to every 48 hours (Ardura 2007) GFR <10 mL/minute/1" },
    ],
      sensitivity: {
        susceptible: ['Todos os Gram-positivos, inclusive SARM, enterococo resistente à vancomicina'],
        resistant: ['Ineficaz em pneumonias (inativada por surfactante)'],
        warning: '',
      },
      sideEffects: [
        'Cefaleia, ansiedade, tremor, tontura',
        'Diarreia, hipotensão, edema',
        'Aumento de CPK, proteinúria',
      ],
      contraindications: [],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      monitoring: "Sinais e sintomas de myopa-thy (muscle pain or weakness, particularly of the distal extremities), weekly CPK levels during therapy (more frequent monitoring if history of current or prior statin therapy and/or renal impairment), sinais de peripheral ...",
  },
    {
      id: 'fosfomicina',
      name: 'Fosfomicina',
      suffix: 'Monuril',
      category: 'outros-antibacterianos',
      observations: 'Único do grupo. Usado principalmente em infecção urinária de adultos. Em uso parenteral: indicado em infecções por multirresistentes.',
      brands: ['Monuril — sachê 3 g'],
      presentations: [{ label: 'Sachê 3 g' }],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Parenteral (multirresistentes)', value: '100–400 mg/kg/dia ÷ 2–4 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Cistite / uretrite (mulher)', value: '3 g em dose única' },
            { label: 'ITU (homem)', value: '3 g/dose a cada 2–3 dias × 3 doses (prostatite: 21 dias)' },
          ],
        },
      ],
      sensitivity: {
        susceptible: ['E. coli inclusive resistente, Enterobactérias, Pseudomonas, S. aureus, Pneumococo'],
        resistant: ['Acinetobacter, B. fragilis, Anaeróbios'],
        warning: 'Evitar com metoclopramida.',
      },
      sideEffects: [
        'Cefaleia, tontura, fadiga',
        'Diarreia, náusea, vômito',
        'Hipopotassemia',
      ],
      contraindications: [],
    },
    {
      id: 'metronidazol',
      name: 'Metronidazol',
      suffix: 'Flagyl',
      category: 'outros-antibacterianos',
      observations: 'Imidazólico anaerobicida de primeira escolha. Amebicida, giardicida, tricomonocida. Boa concentração em líquor e abscessos. Muito eficaz por via oral.',
      brands: ['Flagyl — comp. 250 mg e 400 mg; susp. 200 mg/5 mL; sol. inj. 5 mg/mL'],
      presentations: [
        { label: 'Comprimido 250 mg' },
        { label: 'Comprimido 400 mg' },
        { label: 'Suspensão 200 mg/5 mL' },
        { label: 'Solução injetável 5 mg/mL' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Anaerobicida', value: '30–50 mg/kg/dia ÷ 3 doses. Máx: 2250 mg/dia' },
            { label: 'Amebíase / giardíase', value: '35–50 mg/kg/dia ÷ 3 por 5–10 dias. Máx: 750 mg/dose' },
            { label: 'Giardíase', value: '15–30 mg/kg/dia ÷ 2–3 por 7–10 dias. Máx: 250 mg/dose' },
            { label: 'H. pylori', value: '20 mg/kg/dia ÷ 2 por 10–14 dias em esquema' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Anaerobicida', value: '7,5 mg/kg/dose a cada 6 h ou 500 mg a cada 8 h. Casos graves: ataque 15 mg/kg. Máx: 4000 mg/dia' },
            { label: 'Amebíase', value: '500–750 mg/dose 3×/dia por 10 dias' },
            { label: 'C. difficile', value: '500 mg/dose 3×/dia por 14 dias' },
            { label: 'Giardíase', value: '250–500 mg/dose 3×/dia por 5–10 dias' },
            { label: 'Tricomoníase', value: '2 g dose única ou 250 mg 3×/dia por 7 dias' },
            { label: 'Vaginose', value: '500 mg/dose 2×/dia por 7 dias' },
          ],
        },
      ],
          preparation: "Oral: Immediate release tablets and capsules: May administer com alimentos to minimize GI upset Extended release: Should be taken on an empty stom-ach (1 hour before or 2 hours after meals); do not split, chew, or crush. Parenteral: Administer undiluted (5 mg/mL) by slow inter-mittent infusion over 30 to 60 minutes. Avoid contact of drug solution with ...",
          renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      sensitivity: {
        susceptible: [
          'Bacteroides, Peptococcus, Peptostreptococcus, Clostridium difficile',
          'Prevotella, Fusobacterium, H. pylori',
        ],
        resistant: ['Todas as bactérias aeróbicas', 'Eubacterium, Propionibacterium'],
        warning: 'Álcool: efeito dissulfiram-like (vômitos intensos, convulsão).',
      },
      sideEffects: [
        'Gosto metálico, náusea, vômito, diarreia',
        'Urina vermelho-escura',
        'Neuropatia periférica em dose alta prolongada',
      ],
      contraindications: [],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      monitoring: "Monitor CBC com diferencial no início (linha de base), during, and after prolonged or repeated courses of therapy. Closely monitor patients with severe hepatic impairment or ESRD for reações adversas. Observe patients carefully if neurologic symptoms occur and ...",
  },
    {
      id: 'linezolida',
      name: 'Linezolida',
      suffix: 'Zyvox',
      category: 'outros-antibacterianos',
      observations: 'Oxazolidinona. Única opção oral para Staphylococcus resistentes à oxacilina. Equivalência oral/venosa boa. Bacteriostático.',
      brands: ['Zyvox — comp. 600 mg; sol. inj. 2 mg/mL'],
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
            { label: 'Endocardite enterococo resistente', value: 'EV/oral: 30 mg/kg/dia ÷ 3 por 8 semanas' },
            { label: 'TB multirresistente', value: '20–24 mg/kg/dia ÷ 2' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '600 mg/dose 2×/dia por 10–14 dias' },
            { label: 'Pneumonia / infecções graves', value: '600 mg/dose 2×/dia por 7–21 dias' },
            { label: 'TB multirresistente', value: '600 mg/dose 1–2×/dia até 4 meses' },
          ],
        },
      ],
          preparation: "Oral suspension: Reconstitute with 123 mL of distilled water (in 2 portions); shake vigorously. Concentration is 100 mg/5 mL. Prior to administration mix gently by inverting bottle; do not shake.",
          renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      sensitivity: {
        susceptible: [
          'Todos os Gram-positivos, Staphylococcus resistentes, Streptococcus A, B, C, G',
          'Pneumococo resistente, Enterococo resistente à vancomicina',
        ],
        resistant: ['Todos os Gram-negativos'],
        warning: 'Monitorar hemograma semanalmente.',
      },
      sideEffects: [
        'Tontura, insônia, náusea, diarreia, colite',
        'Neuropatia, neurite óptica',
        'Trombocitopenia — monitorar hemograma semanalmente',
      ],
      contraindications: [],
        hepaticAdjustment: "Mild to moderate impairment (Child Pugh class A or B): No adjustment is recommended. Severe hepatic impairment (Child Pugh Class C): Use has not been adequately evaluated.",
      monitoring: "CBC (weekly), particularly in patients at increased risk for bleeding, patients with pre-existing thrombocytopenia or myelosuppression, patients with chronic infection who have received or who are on concomitant antibiotics, or concomitant medication...",
  },
    {
      id: 'nitrofurantoina',
      name: 'Nitrofurantoína',
      suffix: 'Macrodantina',
      category: 'outros-antibacterianos',
      observations: 'Derivado nitrofurânico. Antibacteriano restrito às infecções urinárias, sobretudo ITU baixa. Para crianças pequenas, formular suspensão 25 mg/5 mL. Não funciona com ClCr < 40 mL/min.',
      brands: ['Macrodantina — cáps. 100 mg'],
      presentations: [{ label: 'Cápsula 100 mg' }],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'ITU (5–7 mg/kg/dia ÷ 4)', value: '7–10 kg: 12,5 mg/dose × 4 | 11–20 kg: 25 mg/dose × 4 | 21–30 kg: 37,5 mg/dose × 4 | 31–40 kg: 50 mg/dose × 4 | > 40 kg: 50–100 mg/dose × 4' },
            { label: 'Duração', value: '3–7 dias. Máx: 100 mg/dose ou 400 mg/dia' },
            { label: 'Profilaxia ITU', value: '1–2 mg/kg/dose 1×/dia. Máx: 100 mg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'ITU baixa', value: '50–100 mg/dose 4×/dia por 3–7 dias' },
            { label: 'Profilaxia ITU recorrente', value: '50–100 mg/dose 1× ao deitar' },
          ],
        },
      ],
          renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      sensitivity: {
        susceptible: ['E. coli, Klebsiella, Enterobacter, Enterococcus'],
        resistant: ['S. aureus, Serratia, Pseudomonas'],
        warning: '',
      },
      sideEffects: [
        'Tontura, cefaleia, neuropatia',
        'Náusea (tomar com alimento)',
        'Pneumonite, fibrose pulmonar intersticial (uso crônico)',
      ],
      contraindications: ['Neonatos', 'Gestantes a termo', 'Anúria / oligúria'],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Oral: Administer com alimentos or milk; do not administer with antacid preparations containing magne-sium trisilicate; suspension may be mixed with water, milk, fruit juice, or infant formula. Shake suspension well before use.",
      monitoring: "Sinais de pulmonary reaction; sinais de numbness or tingling of the extremities; periodic liver and função renal tests; CBC; urine culture and in vitro susceptibility tests. Observe for change in bowel frequency.",
  },
  ],
};