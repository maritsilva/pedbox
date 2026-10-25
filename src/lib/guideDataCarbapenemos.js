// ============================================================
// CARBAPENÊMICOS E MONOBACTÂMICOS — dados do Guia de Doses
// ============================================================

export const CARBAPENEMOS_CATEGORY = {
  id: 'carbapenemos',
  label: 'Carbapenêmicos e Monobactâmicos',
  color: 'cyan-500',
  icon: '🔬',
  drugs: [
    {
      id: 'aztreonam',
      name: 'Aztreonam',
      category: 'carbapenemos',
      observations: 'Betalactâmico monobactâmico resistente à beta-lactamase. Não induz produção de beta-lactamase. Não tem reação cruzada com cefalosporinas e betalactâmicos. Não é primeira escolha para nada, por ser muito caro. Muito usado em infecções por Pseudomonas. Inativo contra Gram-positivos. Boa penetração no SNC.',
      brands: [
        'Azactam / Azanem — Fr. amp. 1.000 mg',
        'Aztreonam — Fr. amp. 1.000 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 1.000 mg' },
      ],
      doses: [
        {
          group: 'RN a termo e prematuros',
          items: [
            { label: '< 1,2 kg / ≤ 14 dias', value: '30 mg/kg/dose × 2' },
            { label: '< 1,2 kg / > 14 dias', value: '30 mg/kg/dose × 2–3' },
            { label: '1,2–2 kg / ≤ 7 dias', value: '30 mg/kg/dose × 2' },
            { label: '1,2–2 kg / > 7 dias', value: '30 mg/kg/dose × 3' },
            { label: '> 2 kg / ≤ 7 dias', value: '30 mg/kg/dose × 3' },
            { label: '> 2 kg / > 7 dias', value: '30 mg/kg/dose × 4' },
          ],
        },
        {
          group: 'Crianças (EV/IM)',
          items: [
            { label: 'Dose usual', value: '30 mg/kg/dose a cada 8 h' },
            { label: 'Infecções graves', value: '120–150 mg/kg/dia ÷ 3–4 doses. Máx: 8 g/dia' },
            { label: 'Pseudomonas na fibrose cística', value: '150–200 mg/kg/dia ÷ 3–4 doses. Máx: 12 g/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV ou IM', value: '1 g/dose a cada 8 h' },
            { label: 'Infecções graves', value: 'EV: 2 g/dose a cada 8 h. Máx: 8 g/dia' },
            { label: 'Fibrose cística', value: '8–12 g/dia ÷ 3–4 doses' },
            { label: 'Infecção urinária', value: 'EV/IM: 500–1000 mg/dose a cada 12 h' },
            { label: 'Pneumonia', value: 'EV: 2 g/dose a cada 8 h' },
            { label: 'Osteomielite', value: 'EV: 2 g/dose a cada 8 h por 6 semanas' },
          ],
        },
      ],
          preparation: "Parenteral: IM: Reconstitute vial with at least 3 mL SWFI, sterile bacteriostatic water for injection, NS, or bacteriostatic sodium chloride per gram.of aztreonam to a final concentration of ≤333 mg/mL; immediately shake vig-orously. Do not mix with any local anesthetic agent. IV: Bolus injection: Reconstitute vial with 6 to 10 mL SWFI; immediately...",
          renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      sensitivity: {
        susceptible: [
          'Gram-negativos aeróbios resistentes ou alternativos às cefalosporinas de 3ª geração e aminoglicosídeos',
          'Serratia, Pseudomonas, Enterobacter, Klebsiella, E. coli, Citrobacter, Proteus mirabilis, Neisseria, H. influenzae',
        ],
        resistant: [
          'Gram-positivos: todos',
          'Algumas cepas de Pseudomonas, S. maltophilia',
          'E. coli e Klebsiella produtoras de ESBL',
          'Anaeróbios',
        ],
        warning: 'Pode causar hiperargininemia, com aumento de insulina e bilirrubinas em RN.',
      },
      sideEffects: [
        'Flebite, exantema, eosinofilia, aumento de TGO, hepatite, colestase',
        'Diarreia, náusea, vômitos, dor abdominal, colite pseudomembranosa',
        'Superinfecção por Gram-positivos, hipotensão, convulsões, confusão',
        'Leucopenia, neutropenia, trombocitopenia, anafilaxia, tromboflebite e dor no local da injeção',
      ],
      contraindications: [],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      monitoring: "Injection: Periodic renal and hepatic function tests; monitor for stool frequency; monitor for signs of anaphylaxis during first dose",
  },

    {
      id: 'ertapenem',
      name: 'Ertapenem',
      category: 'carbapenemos',
      observations: 'Carbapenêmico com espectro mais estrito, sem atividade antipseudomonas. Mais usado contra enterobactérias e anaeróbios. Vantagem de poder ser usado IM e em dose única diária.',
      brands: [
        'Invanz — Fr. amp. 1.000 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 1.000 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '15 mg/kg/dose a cada 12 h. Máx: 500 mg/dose' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV ou IM', value: '1 g/dia por até 14 dias' },
            { label: 'Infecções intra-abdominais ou pélvicas complicadas graves', value: '1 g/dia por 5–14 dias' },
            { label: 'Pneumonias comunitárias / pielonefrite', value: '1 g/dia por 10–14 dias' },
            { label: 'Osteomielite', value: 'EV: 1 g/dia por 6 semanas' },
          ],
        },
      ],
          preparation: "Parenteral: IM: Reconstitute 1,000 mg vial with 3.2 mL of 1% lidocaine HCI injection (without epinephrine); resultant concentration: 280 mg/mL (invanz prescribing informa-tion Canada 2014). Shake well. Intermittent 1V infusion: Reconstitute 1,000 mg vial with 10 mL of SWF, NS, or bacteriostatic water for injection; resultant concentration: 100 mg/m...",
          renalAdjustment: [
      { label: "Ajuste renal (Lexicomp)", value: "There are no pediatric specific recommendations; based on experience in adult patients, dosage adjustment suggested." },
    ],
      sensitivity: {
        susceptible: [
          'S. aureus, S. pneumoniae, E. coli, H. influenzae, Klebsiella, Moraxella, Proteus, Citrobacter, Enterobacter',
          'Prevotella, anaeróbios inclusive C. difficile',
        ],
        resistant: [
          'Pseudomonas, Acinetobacter',
          'S. aureus resistente à oxacilina, pneumococo resistente à penicilina',
        ],
        warning: '',
      },
      sideEffects: [
        'Cefaleia, febre, edema, tosse, dor torácica, taquicardia, hipotensão',
        'Diarreia, náusea, vômitos, dor abdominal',
        'Exantema, erupção cutânea, eosinofilia, flebite, tromboflebite',
        'Dor na injeção intramuscular',
      ],
      contraindications: [],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      monitoring: "Periodic renal, hepatic, and hematologic function tests; neurological assessment",
  },

    {
      id: 'imipenem',
      name: 'Imipenem + Cilastatina',
      category: 'carbapenemos',
      observations: 'Betalactâmico carbapenêmico associado à cilastatina, um inibidor enzimático que reduz excreção e toxicidade renal. Resistente às beta-lactamases, com boa ação contra Gram-positivos, Gram-negativos e anaeróbios. Deve ser reservado para infecções resistentes a todos os demais antibióticos. Em crianças, preferir meropenem pelo risco de convulsão, sobretudo em infecção meníngea. Cada grama contém ≈ 3,2 mEq de sódio.',
      brands: [
        'Tienam / Imipenem — Fr. amp. 500 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 500 mg' },
      ],
      doses: [
        {
          group: 'RN a termo e prematuros',
          items: [
            { label: '< 1,2 kg / ≤ 14 dias', value: '40 mg/kg/dia ÷ 2' },
            { label: '< 1,2 kg / > 14 dias', value: '50 mg/kg/dia ÷ 2' },
            { label: '1,2–1,5 kg / ≤ 7 dias', value: '40 mg/kg/dia ÷ 2' },
            { label: '1,2–1,5 kg / > 7 dias', value: '50 mg/kg/dia ÷ 2' },
            { label: '> 1,5 kg / ≤ 7 dias', value: '50 mg/kg/dia ÷ 2' },
            { label: '> 1,5 kg / > 7 dias', value: '75 mg/kg/dia ÷ 3' },
          ],
        },
        {
          group: 'Crianças',
          items: [
            { label: '1–3 meses', value: '100 mg/kg/dia ÷ 4 doses' },
            { label: '> 3 meses — dose usual', value: '60–100 mg/kg/dia ÷ 4 doses. Máx: 4 g/dia' },
            { label: 'Fibrose cística', value: 'EV: 90–100 mg/kg/dia ÷ 4 doses' },
            { label: 'Endocardite', value: '60–100 mg/kg/dia ÷ 4 doses por 6 semanas (associado)' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV ou IM', value: '500 mg/dose a cada 6 h ou 1000 mg/dose a cada 8 h. Máx: 4 g/dia' },
            { label: 'Infecções graves ou por Pseudomonas', value: '1000 mg/dose a cada 6 h' },
            { label: 'Fibrose cística', value: '500–1000 mg/dose a cada 4 h' },
          ],
        },
      ],
          preparation: "|V:,Reconstitute vials with approximately 10 mL of NS, D5W, D10W, D5NS, D51/2NS, or D51/4NS and shake well. Withdraw desired dose and dilute in a compatible solution to a final concentration not to exceed 5 mg/mL; concentrations >5 mg/mL may have shortened stability; a final admixture of imipenem-cilastatin 10 mg/mL in NS was shown to maintain solu...",
          renalAdjustment: [
      { label: "Ajuste renal (Lexicomp)", value: "Infants, Children, and Adolescents: IV: Manufacturer's tabeling: Patient weight <30 kg and impaired renal function (not defined): Use not rec-ommended The follo..." },
    ],
      sensitivity: {
        susceptible: [
          'Todos os cocos Gram-positivos (exceto S. aureus resistente à oxacilina e Enterococcus)',
          'Quase todos os bastonetes Gram-negativos (exceto Legionella e S. maltophilia)',
          'Todos os anaeróbios',
          'E. coli ESBL, S. aureus oxacilina sensível, Enterobacter, Serratia, Klebsiella, Pseudomonas',
        ],
        resistant: [
          'S. aureus resistente à oxacilina, Legionella, Enterococcus faecium, S. maltophilia',
          'E. coli e Klebsiella KPC, C. difficile, algumas cepas de Pseudomonas e A. baumannii',
        ],
        warning: 'Pode induzir resistência por desrepressão gênica. Algumas raras cepas são sensíveis ao imipenem e resistentes ao meropenem, ou vice-versa.',
      },
      sideEffects: [
        'Hipotensão, taquicardia, eritema e dor no local da injeção, flebite',
        'Alergia, urticária, erupção cutânea, prurido, Stevens-Johnson, anafilaxia',
        'Possibilidade de alergia cruzada com penicilina e cefalosporinas',
        'Alucinações, confusão mental, convulsões',
        'Náusea, vômitos, diarreia, colite pseudomembranosa, hepatite',
        'Eosinofilia, leucopenia, agranulocitose, anemia, aumento de transaminases, disfunção renal, Coombs positivo',
      ],
      contraindications: [],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      monitoring: "Periodic renal, hepatic, and hematologic function tests; bowel movement frequency. Monitor for signs of anaphylaxis during first dose.",
  },

    {
      id: 'meropenem',
      name: 'Meropenem',
      category: 'carbapenemos',
      observations: 'Betalactâmico carbapenêmico de largo espectro. Menos potente contra Gram-positivos que o imipenem, porém com boa ação em Gram-negativos e anaeróbios. Penetra bem no SNC — indicado em meningites. Pode ser usado em monoterapia em infecções graves. Induz resistência por desrepressão gênica — reservar para infecções resistentes a outros antibióticos. Produz menos convulsões que o imipenem na meningite. Cada grama contém ≈ 3,9 mEq de Na.',
      brands: [
        'Meronem / Meronax / Meropenem — Fr. amp. 500 e 1.000 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 500 mg' },
        { label: 'Fr. amp. 1.000 mg' },
      ],
      doses: [
        {
          group: 'RN a termo e prematuros',
          items: [
            { label: '≤ 2 kg / < 14 dias', value: '40 mg/kg/dia ÷ 2' },
            { label: '≤ 2 kg / 15–28 dias', value: '60 mg/kg/dia ÷ 3' },
            { label: '> 2 kg / ≤ 14 dias', value: '60 mg/kg/dia ÷ 3' },
            { label: '> 2 kg / > 15–60 dias', value: '90 mg/kg/dia ÷ 3' },
          ],
        },
        {
          group: 'Crianças > 2 meses',
          items: [
            { label: 'Dose usual', value: '60 mg/kg/dia ÷ 3 doses' },
            { label: 'Meningite e infecções graves', value: '120 mg/kg/dia ÷ 3 doses. Máx: 2 g/dose' },
            { label: 'Infecção por B. cepacia ou P. aeruginosa (fibrose cística)', value: 'EV: 60–120 mg/kg/dia ÷ 3 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV', value: '1,5–6 g/dia ÷ 3 doses' },
            { label: 'Sepse, pneumonia, infecções intra-abdominais complicadas', value: '1 g/dose a cada 8 h' },
            { label: 'Meningite, fibrose cística', value: '2 g/dose a cada 8 h. Máx: 6 g/dia' },
            { label: 'Infecções pélvicas e ginecológicas', value: '500 mg/dose a cada 8 h' },
          ],
        },
      ],
          preparation: "Parenteral: Reconsti-tute meropenem 500 mg and 1g vials with 10 mL and 20 mL SWFI respectively to yield a concentration of 50 mg/mL. For IV infusion, may further dilute with DSW or NS to a final concentration ranging from 1 to 20 mg/mL.",
          renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      sensitivity: {
        susceptible: [
          'Cocos Gram-positivos (exceto S. aureus oxacilina resistente e E. faecium)',
          'Quase todos os bastonetes Gram-negativos (exceto Legionella e S. maltophilia)',
          'Pseudomonas, inclusive multirresistente; S. aureus oxacilina sensível; Enterobacter; Serratia; Klebsiella',
          'Anaeróbios: semelhante a clindamicina, metronidazol e cloranfenicol',
        ],
        resistant: [
          'Legionella, C. difficile, S. maltophilia',
          'Algumas cepas de Pseudomonas cepacia, Acinetobacter baumannii',
        ],
        warning: '',
      },
      sideEffects: [
        'Febre, confusão mental, convulsões, cefaleia, insônia, agitação',
        'Eritema e dor no local da injeção, flebite, erupção cutânea, alergia, urticária, Stevens-Johnson, anafilaxia',
        'Náusea, vômito, diarreia, candidíase oral e perineal, glossite, manchas nos dentes, colite pseudomembranosa',
        'Hipotensão, eosinofilia, leucopenia, anemia, aumento de transaminases, LDH, fosfatase alcalina, bilirrubina, hepatite, disfunção renal',
      ],
      contraindications: [],
        hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      monitoring: "Periodic renal, hepatic, and hematologic function tests. Observe for changes in bowel frequency. Monitor for signs of anaphylaxis during first dose.",
  },
  ],
};