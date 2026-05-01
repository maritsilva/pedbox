// ============================================================
// GUIA DE DOSES PEDIÁTRICO — Estrutura rica por medicamento
// ============================================================

export const GUIDE_CATEGORIES = [
  {
    id: 'cefalosporinas',
    label: 'Cefalosporinas',
    color: 'red-500',
    icon: '🦠',
    drugs: [
      {
        id: 'cefotaxima',
        name: 'Cefotaxima',
        suffix: 'AM',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de terceira geração. Espectro semelhante à ceftriaxona, mas exige mais doses diárias e é menos eficaz que esta para gonococo e meningococo. Boa opção nas infecções ósseas, articulares e quadros de sepse.',
        brands: [
          'Cetazima (Novafarma) — Fr. Amp.: 500 e 1.000 mg',
          'Clafordil (Blau) — Fr. Amp.: 1.000 mg',
          'Kefozil (Biochimico)',
          '[G] Cefotaxima sódica — Fr. Amp.: 500 e 1.000 mg',
          'Descontinuados: Cefacolin, Ceforan, Claforan, Kefaxim, Loxporin',
        ],
        presentations: [
          { label: 'Fr. Amp. 500 mg', price: 'R$ 20' },
          { label: 'Fr. Amp. 1.000 mg', price: 'R$ 64' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'RN ≤ 7 dias (> 1 kg) a 14 dias', value: '50 mg/kg/dose × 2' },
              { label: 'RN 8 a 28 dias', value: '50 mg/kg/dose × 2 a 3' },
              { label: 'Lactentes e crianças (dose usual EV/IM)', value: '50 a 180 mg/kg/dia ÷ 3 a 4. Máx: 6 g/dia' },
              { label: 'Infecções graves', value: '200 a 225 mg/kg/dia ÷ 4 a 6. Máx: 12 g/dia' },
              { label: 'Endocardite', value: '200 mg/kg/dia ÷ 4, por 4 a 6 semanas' },
              { label: 'Pneumonia', value: '150 a 200 mg/kg/dia ÷ 3 a 4 (7–10 dias). Máx: 2 g/dose' },
              { label: 'Meningite', value: '50 mg/kg/dose × 4 (em < 1 mês: 75 mg/kg/dose × 4). Máx: 2 g/dose. No tratamento empírico, associar ampicilina ou aminoglicosídeo.' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual EV/IM', value: '1 g/dose × 3 a 4' },
              { label: 'Infecções graves', value: '1 a 2 g/dose × 3' },
              { label: 'Infecções complicadas', value: '2 g/dose × 4 a 6' },
              { label: 'Sepse', value: '2 g/dose × 3 a 4' },
              { label: 'Meningite / abscesso cerebral', value: '2 g/dose × 6 + metronidazol 30 mg/kg/dia ÷ 2 ou 4' },
              { label: 'Peritonite / infecções intra-abdominais', value: '2 g/dose × 3 (× 4 nos casos graves)' },
              { label: 'Pneumonia', value: '1 a 2 g/dose × 3' },
              { label: 'Infecção urinária comunitária', value: '1 g/dose × 2' },
              { label: 'Gonorreia (alternativa)', value: 'IM: 0,5 a 1 g/dose única' },
              { label: 'Profilaxia em cesariana', value: '1 g na clampagem do cordão + 6 h e 12 h depois' },
            ],
          },
        ],
        preparation: 'EV: diluir para 200 mg/mL com ABD, agitar até dissolver, depois rediluir para 40 mg/mL com SGI/SF/RL e infundir em 3–5 min. IM: diluir em ABD para 230–330 mg/mL; máximo de 2 g por sítio.',
        renalAdjustment: [
          { label: 'ClCr 10–50 mL/min', value: 'Mesma dose a cada 12 horas' },
          { label: 'ClCr < 10 mL/min', value: 'Mesma dose a cada 24 h ou 50% da dose' },
          { label: 'Hemodiálise', value: 'Mesma dose a cada 12–24 h' },
          { label: 'CPAD', value: '0,5 a 1 g/dose a cada 12–24 h' },
        ],
        sensitivity: {
          susceptible: [
            'Gram+: Streptococcus A,B,C,G, Pneumococo, S. viridans, Estafilococo sensível à oxacilina/meticilina',
            'Gram−: H. influenzae, N. meningitidis, M. catarrhalis, E. coli, Proteus mirabilis, Klebsiella',
            '20–30% das cepas hospitalares de: Pseudomonas, Enterobacter, Salmonella, Shigella, Yersinia, Citrobacter, Providencia, Morganella, Serratia, Pasteurella, Eikenella, Aeromonas, Vibrio cholerae',
            'Anaeróbios: Clostridios não difficile, Actinomyces, Peptostreptococcus',
          ],
          resistant: [],
          warning: '',
        },
        sideEffects: [
          'Alergia, erupção cutânea, prurido',
          'Cefaleia, febre',
          'Colite pseudomembranosa',
          'Diarreia, náusea, vômitos',
          'Flebite, dor no local da injeção',
          'Coombs positivo',
          'Plaquetopenia, leucopenia, neutropenia, eosinofilia',
          'Aumento transitório de ureia, creatinina e transaminases',
          'Candidíase genital',
          'Cada grama contém 2,2 mEq de sódio',
          'Infiltração provoca necrose tecidual',
        ],
        contraindications: [],
      },

      {
        id: 'ceftriaxona',
        name: 'Ceftriaxona',
        suffix: 'AM',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de terceira geração com mesmo espectro que a cefotaxima, mas pode ser usada em dose única diária. Boa opção em sepse, pneumonia e meningite (até a idade pré-escolar). Na meningite neonatal, associar ampicilina para cobrir Listeria e estreptococo do grupo B. Em pediatria, preferir à cefotaxima — exceto em RN < 15 dias, prematuros, ictéricos, colestase intensa e em casos de abscesso cerebral ou ventriculites.',
        brands: [
          'Rocefin (Roche) — Fr. Amp. IV: 500 e 1.000 mg; Fr. Amp. IM: 500 e 1.000 mg',
          'Triaxin (Momenta) — Fr. Amp. IM: 500 e 1.000 mg',
          'Triaxon (Teuto) — Fr. Amp. IV: 500 e 1.000 mg; Fr. Amp. IM: 500 e 1.000 mg',
          'Amplospec (Biochimico), Ceftriax (EMS), Keftron (ABL), Triaxton (Blau)',
          '[G] Ceftriaxona sódica — Fr. Amp. IM e IV: 500 e 1.000 mg',
          'Descontinuados: Bioteral, Celtricina, Celltriaxon, Glicocef, Neoceftriona, Prodoxin, Trioxina',
        ],
        presentations: [
          { label: 'Fr. Amp. IV 500 mg', price: 'R$ 54' },
          { label: 'Fr. Amp. IM 500 mg', price: 'R$ 103' },
          { label: 'Fr. Amp. 250 mg / 1.000 mg', price: '' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual', value: '50 a 75 mg/kg/dia ÷ 1. Máx: 1 g/dia' },
              { label: 'Sepse / casos graves', value: '100 mg/kg/dia ÷ 1 a 2. Máx: 4 g/dia' },
              { label: 'Meningite não gonocócica', value: 'Ataque: 100 mg/kg; Manutenção: 80–100 mg/kg/dia ÷ 1 a 2. Associar ampicilina no RN para cobrir Listeria.' },
              { label: 'Profilaxia meningite meningocócica', value: '125 mg/dose única IM' },
              { label: 'Pneumonia / Epiglotite', value: '50–100 mg/kg/dia ÷ 1 a 2 por 7–14 dias' },
              { label: 'Otite média aguda', value: '50 mg/kg/dose única. Máx: 1 g/dia' },
              { label: 'Profilaxia contato meningococo / conjuntivite gonocócica neonatal', value: '25–50 mg/kg/dose única. Máx: 125 mg/dose' },
              { label: 'Infecção gonocócica disseminada (neonatos)', value: '25–50 mg/kg/dia ÷ 1 por 7 dias (10–14 dias se meningite)' },
              { label: 'Infecção gonocócica disseminada (lactentes/crianças)', value: '50 mg/kg/dia ÷ 1' },
              { label: 'Doença de Lyme', value: '50–75 mg/kg/dia ÷ 1 por 2–4 semanas' },
              { label: 'Endocardite', value: '100 mg/dia ÷ 2 ou 80 mg/kg/dia ÷ 1 por 4–6 semanas. Máx: 4 g/dia' },
              { label: 'Profilaxia de endocardite/peritonite', value: '50 mg/kg, 30–60 min antes. Máx: 1 g/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '1 a 2 g/dose × 1 a 2' },
              { label: 'Pneumonia', value: '1 a 2 g/dia ÷ 1 a 2 (4 g/dia ÷ 2 para pneumococo resistente)' },
              { label: 'Sepse / meningite', value: '2 g/dose × 2 por 7–14 dias. Máx: 4 g/dia' },
              { label: 'Profilaxia meningite meningocócica', value: '250 mg/dose única' },
              { label: 'Cistite / pielonefrite', value: '1 a 2 g/dia ÷ 1' },
              { label: 'DST — Gonorreia não complicada, cancro mole, estupro', value: 'IM: 250–500 mg (dose única) + azitromicina + metronidazol' },
              { label: 'DST — Granuloma inguinal', value: '1 g/dia por 10–14 dias' },
              { label: 'Infecção gonocócica disseminada', value: '1–2 g/dose × 1 (× 3 nos casos graves), por 7 dias ou enquanto houver sintomas' },
              { label: 'Endocardite', value: '2 g/dia ÷ 1 por 4–6 semanas. Enterococo sensível: 4 g/dia ÷ 2 + ampicilina (2 g × 6) por 6 semanas' },
              { label: 'Profilaxia de endocardite', value: '1 g, 30–60 min antes' },
            ],
          },
        ],
        preparation: 'EV: diluir para 100 mg/mL com ABD ou SF, agitar até dissolver, depois rediluir para 40 mg/mL com SG/SF/RL; infundir em 5–30 min. NÃO infundir com soluções contendo cálcio. IM: diluir com lidocaína 1% sem vasoconstritor para 350 mg/mL. Infusão contínua pode ser mais eficaz que bolus.',
        renalAdjustment: [
          { label: 'Insuficiência renal ou hepática', value: 'Máximo 2 g/dia' },
        ],
        sensitivity: {
          susceptible: [],
          resistant: [
            'Gram+: Estafilococo MRSA, Pneumococo resistente à penicilina',
            'Gram−: Listeria, Pseudomonas aeruginosa, E. coli/Klebsiella ESBL+, KPC+, Acinetobacter, Stenotrophomonas maltophilia, Burkholderia cepacia (maioria), Enterobacter cloacae, Mycoplasma, Chlamydia, Legionella, Flavobacterium',
            'Anaeróbios: Bacteroides fragilis, Clostridium difficile, Prevotella melaninogenica',
          ],
          warning: 'Mesmo quando sensível in vitro, resistência comum durante o tratamento (associar aminoglicosídeo): Enterobacter, P. aeruginosa, Serratia, Citrobacter, Acinetobacter, Proteus.',
        },
        sideEffects: [
          'Erupção cutânea, prurido, alergia',
          'Diarreia, colite pseudomembranosa, náusea, vômitos, estomatite',
          'Formação de "lodo biliar" / colelitíase',
          'Distúrbios de coagulação',
          'Leucopenia, anemia, trombocitopenia/trombocitose, ↑ transaminases',
          'Eosinofilia, febre, calafrio, cefaleia, tontura',
          'Flebite e dor no local da injeção',
          'Risco de precipitados com cálcio (embolia pulmonar em neonatos)',
          'Cada 1g contém 83 mg (3,6 mEq) de sódio',
        ],
        contraindications: [
          'Neonato com icterícia grave — preferir cefotaxima',
        ],
      },
    ],
  },
];

export function getAllGuideDrugs() {
  return GUIDE_CATEGORIES.flatMap(cat => cat.drugs.map(d => ({ ...d, catLabel: cat.label, catColor: cat.color, catIcon: cat.icon })));
}