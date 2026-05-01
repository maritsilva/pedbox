// ============================================================
// PENICILINAS — dados do Guia de Doses
// ============================================================

export const PENICILINAS_CATEGORY = {
  id: 'penicilinas',
  label: 'Penicilinas',
  color: 'blue-500',
  icon: '💉',
  drugs: [
    {
      id: 'amoxicilina',
      name: 'Amoxicilina',
      category: 'penicilinas',
      observations: 'Penicilina semissintética aminopenicilina, mais bem absorvida e com meia-vida um pouco maior que a ampicilina. Antibiótico mais usado em pediatria. Primeira escolha na otite média aguda. Não é primeira escolha para pneumonias. Suspensão estável por até 14 dias (preferir geladeira). Pode ser tomada às refeições.',
      brands: [
        'Amoxil / Amoxicilina — cáps. 500 mg; susp. 125, 250, 400 ou 500 mg/5 mL; comp. revestido 875 mg',
        'Genérico — cáps./comp. 500 mg; susp. 250, 400 ou 500 mg/5 mL',
      ],
      presentations: [
        { label: 'Cápsula / comprimido 500 mg' },
        { label: 'Comprimido revestido 875 mg' },
        { label: 'Suspensão oral 250 mg/5 mL' },
        { label: 'Suspensão oral 400 mg/5 mL' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Neonatos e < 3 meses', value: '20–30 mg/kg/dia ÷ 2 doses' },
            { label: '> 3 meses — dose usual', value: '25–50 mg/kg/dia ÷ 2–3 doses. Máx: 100 mg/kg/dia ou 500 mg/dose' },
            { label: 'Infecções graves', value: '80–100 mg/kg/dia ÷ 3 doses. Máx: 500 mg/dose' },
            { label: 'Otite média aguda', value: '80–90 mg/kg/dia ÷ 2 doses por 5–10 dias. Máx: 4 g/dia' },
            { label: 'Pneumonia por S. pneumoniae', value: '90 mg/kg/dia ÷ 2 doses por 7–10 dias. Máx: 4 g/dia' },
            { label: 'Pneumonia por H. influenzae', value: '75–100 mg/kg/dia ÷ 3 doses. Máx: 4 g/dia' },
            { label: 'Endocardite', value: '100–200 mg/kg/dia ÷ 4–6 doses por 2–4 semanas' },
            { label: 'Profilaxia endocardite', value: '50 mg/kg VO antes do procedimento' },
            { label: 'Profilaxia ITU', value: '10–15 mg/kg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '250–500 mg/dose 3×/dia ou 875 mg/dose 2×/dia. Máx: 3 g/dia' },
            { label: 'Otite / faringite', value: '250–500 mg/dose 3×/dia por 10 dias' },
            { label: 'Sinusite', value: '500 mg/dose 3×/dia por 10–14 dias (preferir + clavulanato)' },
            { label: 'Pneumonia', value: '500–1000 mg/dose 3×/dia + macrolídeo' },
            { label: 'Cistite', value: '500 mg/dose 3×/dia por 3–7 dias' },
            { label: 'Erradicação H. pylori', value: '1000 mg/dose 2×/dia em associação' },
            { label: 'Profilaxia endocardite', value: '2 g dose única 1 h antes' },
            { label: 'Doença de Lyme', value: '500 mg/dose 3×/dia por 14–28 dias' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr 10–30 mL/min', value: '250–500 mg/dose a cada 12 h' },
        { label: 'ClCr < 10 mL/min', value: '250–500 mg/dose a cada 24 h' },
        { label: 'Hemodiálise', value: 'Remove 20–50%' },
      ],
      sensitivity: {
        susceptible: [
          'Gram+ sensíveis à penicilina, Pneumococo, Meningococo, Streptococcus beta-hemolítico grupo A',
          'N. gonorrhoeae, S. typhi, Listeria',
          'Algumas cepas de: H. influenzae, Proteus mirabilis, Enterococcus faecalis',
        ],
        resistant: [
          'Staphylococcus resistentes à penicilina, Klebsiella, Pseudomonas, Enterobacter, Serratia, Proteus, B. fragilis',
          'Maioria de: Salmonella, Shigella, E. coli; ≥ 1/3 das cepas de H. influenzae',
          'Pneumococos resistentes no Brasil: ≈ 24,9%',
        ],
        warning: '',
      },
      sideEffects: [
        'Irritação, agitação, ansiedade, insônia, confusão, tontura, alteração de comportamento, convulsões',
        'Náusea, vômito, diarreia, febre, colite pseudomembranosa, colite hemorrágica, aumento de transaminases, colestase',
        'Alergia cutânea, urticária, erupção cutânea (3º–14º dia), eritema multiforme, dermatite esfoliativa, Stevens-Johnson, anafilaxia, vasculite',
        'Anemia, neutropenia, eosinofilia, trombocitopenia, hemólise',
      ],
      contraindications: [],
    },

    {
      id: 'amoxicilina-clavulanato',
      name: 'Amoxicilina + Clavulanato',
      category: 'penicilinas',
      observations: 'Penicilina semissintética + inibidor de beta-lactamase. Não usar como primeira escolha quando amoxicilina isolada é suficiente. Opção se amoxicilina foi usada nos últimos 30 dias ou falha após 48–72 h. Para evitar dose excessiva de clavulanato, preferir preparações 7:1 ou 14:1.',
      brands: [
        'Clavulin / Clavulin BD / Clavulin ES / Clavulin IV — comp. 500+125 mg, 875+125 mg; susp. 250+62,5 mg/5 mL, 400+57 mg/5 mL, 600+42,9 mg/5 mL; Fr. amp. 500+100 mg e 1000+200 mg',
        'Atak Clav, Lanico, Novamox, Policlavamoxil, Sigma-Clav BD, Sinot Clav, Claxam',
        'Genérico — comp. 500+125 mg e 875+125 mg; susp. 250+62,5 mg/5 mL e 400+57 mg/5 mL; Fr. amp. 1000+200 mg',
      ],
      presentations: [
        { label: 'Comp. revestido 500+125 mg e 875+125 mg' },
        { label: 'Suspensão 250+62,5 mg/5 mL e 400+57 mg/5 mL' },
        { label: 'Fr. amp. 500+100 mg e 1000+200 mg (EV)' },
      ],
      doses: [
        {
          group: 'Crianças (dose pela amoxicilina)',
          items: [
            { label: '0–3 meses', value: '30 mg/kg/dia ÷ 2 doses' },
            { label: '> 3 meses — dose usual', value: '20 mg/kg/dia ÷ 3 doses. BD: 25 mg/kg/dia ÷ 2 doses' },
            { label: 'Otite / sinusite / pneumonia — dose dobrada', value: '80–90 mg/kg/dia ÷ 2 doses. Máx: 4 g/dia' },
            { label: 'EV (0–3 meses)', value: '25 mg/kg/dose 2×/dia' },
            { label: 'EV (> 3 meses)', value: '25 mg/kg/dose 3×/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual oral', value: '250/62,5–500/125 mg/dose 3×/dia ou 875/125 mg/dose 2×/dia' },
            { label: 'EV', value: '1000/200 mg/dose 3–4×/dia' },
            { label: 'Sinusite / pneumonia comunitária', value: '500/125 mg/dose 3×/dia ou 875/125 mg/dose 2×/dia por 7–10 dias' },
            { label: 'Mordida / impetigo', value: '875/125 mg/dose 2×/dia por 7 dias' },
            { label: 'Profilaxia cirúrgica', value: 'EV: 1000/200 mg na indução; repetir após 8 h se cirurgia prolongada' },
          ],
        },
      ],
      preparation: 'Bolus EV: reconstituir em 20 mL de ABD ou SF; usar em até 20 min. Infusão: reconstituir em 100 mL de ABD ou SF; correr em 30–40 min; usar em até 4 h. Pode precipitar com glicose ou bicarbonato. NÃO usar IM. Suspensão: geladeira por até 7 dias (Clavulin ES: até 10 dias).',
      renalAdjustment: [
        { label: 'ClCr 10–30 mL/min', value: '250/125 mg/dose 2×/dia' },
        { label: 'ClCr < 10 mL/min', value: '25/5 mg/kg/dia' },
        { label: 'Hemodiálise', value: 'Administrar dose após a sessão' },
      ],
      sensitivity: {
        susceptible: [
          'Principal indicação: Haemophilus e Moraxella resistentes à amoxicilina',
          'Gram+ sensíveis, Estafilococos sensíveis à oxacilina',
          'Anaeróbios: Actinomyces, B. fragilis, P. melaninogenica, Clostridium (exceto difficile), Peptostreptococcus',
          'Gram− produtores de beta-lactamase: N. gonorrhoeae, M. catarrhalis, H. influenzae, E. coli, Klebsiella, Salmonella, Shigella, Proteus, Providencia, Aeromonas, H. ducreyi',
        ],
        resistant: [
          'Staphylococcus resistentes à oxacilina, Mycoplasma, Chlamydia, Pseudomonas, Enterobacter, Serratia',
          'A associação não melhora eficácia para pneumococo resistente (resistência não é por beta-lactamase)',
        ],
        warning: 'Doses excessivas de clavulanato podem provocar dor abdominal, erupção cutânea, hiperatividade ou tontura. Alopurinol aumenta risco de exantema.',
      },
      sideEffects: [
        'Cefaleia, mal-estar, tontura, náusea, vômito, diarreia (mais frequente que amoxicilina isolada), flatulência, colite pseudomembranosa',
        'Aumento de transaminases, fosfatase alcalina, bilirrubinas, anemia, trombocitopenia, aumento de TP',
        'Alergia cutânea, urticária, dermatite, Stevens-Johnson, anafilaxia, doença do soro, vasculite',
        'Até 90% dos pacientes com mononucleose apresentam erupção cutânea morbiliforme',
        'Vaginite, monilíase',
      ],
      contraindications: [],
    },

    {
      id: 'amoxicilina-sulbactam',
      name: 'Amoxicilina + Sulbactam',
      category: 'penicilinas',
      observations: 'Penicilina semissintética associada a inibidor de beta-lactamase.',
      brands: [
        'Tritamox IBL — comp. revestido 875+125 mg; susp. 1000+250 mg/5 mL; Fr. amp. 500+250 mg e 1000+500 mg',
      ],
      presentations: [
        { label: 'Comprimido revestido 875+125 mg' },
        { label: 'Suspensão oral 1000+250 mg/5 mL' },
        { label: 'Fr. amp. 500+250 mg e 1000+500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Oral', value: '40/10–100/25 mg/kg/dia ÷ 2 doses' },
            { label: 'EV/IM', value: '40/20–50/25 mg/kg/dia ÷ 2–3 doses. Máx: 100/50 mg/kg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Oral', value: '875/125 mg/dose 2×/dia' },
            { label: 'EV/IM', value: '1000/500 mg/dose 3×/dia' },
          ],
        },
      ],
      preparation: 'Reconstituir com 3,5 mL de ABD e aplicar imediatamente (IM). EV: concentração máxima 45 mg/mL em SGI; usar em até 6 h. Suspensão: geladeira por até 14 dias.',
      sensitivity: {
        susceptible: [
          'S. aureus, S. albus, S. faecalis, S. pneumoniae, S. pyogenes, S. viridans, Corynebacterium, Listeria',
          'E. coli, Citrobacter, Acinetobacter, H. influenzae, Klebsiella, Proteus, Salmonella, Shigella, Brucella, N. gonorrhoeae, N. meningitidis, Moraxella catarrhalis',
        ],
        resistant: [
          'Algumas cepas de: S. aureus, S. pneumoniae, Pseudomonas',
        ],
        warning: '',
      },
      sideEffects: [
        'Náusea, vômitos, diarreia, dispepsia, epigastralgia, alergia, exantema, urticária, anafilaxia',
      ],
      contraindications: [],
    },

    {
      id: 'ampicilina',
      name: 'Ampicilina',
      category: 'penicilinas',
      observations: 'Aminopenicilina. Após reconstituição da forma injetável, usar em até 1 hora. Contém 3 mEq de Na/g.',
      brands: [
        'Ampicilina / Ampicilina sódica — cáps./comp. 500 mg; susp. 250 mg/5 mL; Fr. amp. 500 e 1000 mg',
      ],
      presentations: [
        { label: 'Cápsula / comprimido 500 mg' },
        { label: 'Suspensão oral 250 mg/5 mL' },
        { label: 'Fr. amp. 500 mg e 1000 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Oral (≤ 20 kg)', value: '50–100 mg/kg/dia ÷ 4 doses. Máx: 4 g/dia' },
            { label: 'Oral (> 20 kg)', value: '500 mg/dose 4×/dia' },
            { label: 'EV/IM — dose usual', value: '100–150 mg/kg/dia ÷ 4 doses' },
            { label: 'EV/IM — casos graves', value: '200–400 mg/kg/dia ÷ 4 doses. Máx: 12 g/dia' },
            { label: 'RN ≤ 2 kg / ≤ 7 dias', value: '50 mg/kg/dose × 2' },
            { label: 'RN ≤ 2 kg / 8–28 dias', value: '50–75 mg/kg/dose × 2' },
            { label: 'RN > 2 kg / ≤ 7 dias', value: '50 mg/kg/dose × 3' },
            { label: 'RN > 2 kg / 8–28 dias', value: '50 mg/kg/dose × 3–4' },
            { label: 'RN > 2 kg / 28–60 dias', value: '50 mg/kg/dose × 4' },
            { label: 'Meningite (≤ 7 dias)', value: '200–300 mg/kg/dia ÷ 3–4 doses' },
            { label: 'Meningite (7 dias – 1 mês)', value: '75–100 mg/kg/dose EV 4×/dia' },
            { label: 'Meningite (> 1 mês)', value: '50–100 mg/kg/dose 4×/dia + cloranfenicol' },
            { label: 'Endocardite', value: '200–300 mg/kg/dia ÷ 4–6 doses + gentamicina ou ceftriaxona. Máx: 12 g/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Oral — dose usual', value: '250–500 mg/dose 4×/dia' },
            { label: 'EV/IM — dose usual', value: '1–2 g/dose 4–6×/dia. Máx: 12 g/dia' },
            { label: 'Sepse / meningite', value: 'EV: 12 g/dia ÷ 6–8 doses' },
            { label: 'Endocardite por enterococo', value: 'EV: 2 g/dose 4×/dia + ceftriaxona por 6 semanas' },
            { label: 'Profilaxia endocardite', value: 'EV/IM: 2 g/dose 30–60 min antes' },
            { label: 'Profilaxia estreptococo B perinatal', value: 'EV: ataque 2 g; depois 1 g/dose a cada 4 h até o parto' },
          ],
        },
      ],
      renalAdjustment: [
        { label: 'ClCr > 50 mL/min', value: 'A cada 6 h' },
        { label: 'ClCr 10–50 mL/min', value: 'A cada 6–12 h' },
        { label: 'ClCr < 10 mL/min', value: 'A cada 12–24 h' },
        { label: 'Hemodiálise', value: 'Remove 20–50%' },
      ],
      sensitivity: {
        susceptible: [
          'Gram+: Pneumococo (maioria), S. pyogenes, Meningococo, N. gonorrhoeae, S. typhi, Listeria',
          'Anaeróbios: Actinomyces, P. melaninogenica, Clostridium (não difficile), Peptostreptococcus',
          'Algumas cepas de: H. influenzae, Proteus mirabilis, Enterococcus faecalis',
        ],
        resistant: [
          'Staphylococcus resistentes à penicilina, Klebsiella, Pseudomonas, Enterobacter, Serratia, Proteus, B. fragilis',
          'Maioria de: Salmonella, Shigella, E. coli; ≥ 1/3 das cepas de H. influenzae',
        ],
        warning: 'Erupção cutânea mais frequente em mononucleose e citomegalovírus. Contém 3 mEq de Na/g.',
      },
      sideEffects: [
        'Alergia cutânea, erupção maculopapular, urticária, anafilaxia, prurido',
        'Vômito, diarreia, náusea, glossite, colite pseudomembranosa',
        'Eosinofilia, trombocitopenia, neutropenia, hemólise, febre medicamentosa',
        'Convulsões em doses muito altas, nefrite intersticial',
      ],
      contraindications: [],
    },

    {
      id: 'ampicilina-sulbactam',
      name: 'Ampicilina + Sulbactam',
      category: 'penicilinas',
      observations: 'Ampicilina associada a inibidor de beta-lactamase. Uso exclusivamente EV/IM.',
      brands: [
        'Unasyn / Sulbactam — Fr. amp. 1000+500 mg e 2000+1000 mg',
        'Ampicilina sódica + sulbactam sódica — Fr. amp. 1000+500 mg e 2000+1000 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 1000+500 mg e 2000+1000 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Neonatos pré-termo', value: '100 mg/kg/dia ÷ 2 doses EV' },
            { label: 'Neonatos a termo', value: '100 mg/kg/dia ÷ 3 doses EV' },
            { label: 'Lactentes e crianças', value: '100–200 mg/kg/dia ÷ 4 doses EV. Máx: 1 g/dose' },
            { label: 'Infecções graves', value: '200–300 mg/kg/dia ÷ 4 doses. Máx: 2 g/dose' },
            { label: 'Meningite', value: '200–400 mg/kg/dia ÷ 4 doses' },
            { label: 'Endocardite por enterococo resistente', value: '200–300 mg/kg/dia ÷ 4–6 doses por 4–6 semanas + gentamicina. Máx: 2 g/dose' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV/IM', value: '1–2 g de ampicilina + 0,5–1 g de sulbactam/dose. Máx: 12 g/dia' },
            { label: 'Infecções graves / Acinetobacter', value: 'EV: 2 g/dose 4×/dia' },
            { label: 'Infusão', value: 'EV lento em 10–15 min' },
          ],
        },
      ],
      sensitivity: {
        susceptible: [
          'Streptococcus, Staphylococcus, Pneumococcus, Haemophilus, Moraxella, Neisseria, Proteus, Klebsiella, Citrobacter, Morganella, Bacteroides, S. faecalis, Anaeróbios',
        ],
        resistant: [
          'Pseudomonas, Staphylococcus resistentes à oxacilina, Pneumococos resistentes à penicilina',
          'Algumas cepas de E. coli, Acinetobacter, Enterobacter',
        ],
        warning: '',
      },
      sideEffects: [
        'Náusea, vômito, diarreia, exantema, urticária, anafilaxia, doença do soro, vasculite',
        'Colite pseudomembranosa, Stevens-Johnson, dor e flebite no local',
        'Aumento de transaminases, anemia, trombocitopenia, leucopenia, eosinofilia, candidíase',
      ],
      contraindications: [],
    },

    {
      id: 'penicilina-benzatina',
      name: 'Benzilpenicilina Benzatina',
      suffix: 'Penicilina G Benzatina',
      category: 'penicilinas',
      observations: 'Penicilina G de depósito IM, que mantém nível sérico por 15 a 30 dias. Uso EXCLUSIVO intramuscular.',
      brands: [
        'Benzetacil / Benzilpenicilina Benzatina — Fr. amp. 600.000 UI e 1.200.000 UI',
      ],
      presentations: [
        { label: 'Fr. amp. 600.000 UI' },
        { label: 'Fr. amp. 1.200.000 UI' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Faringite estreptocócica / impetigo', value: '25.000–50.000 UI/kg dose única. Até 25 kg: 300.000–600.000 UI. Acima de 25 kg: 1.200.000 UI' },
            { label: 'Profilaxia doença reumática', value: 'Até 25 kg: 600.000 UI a cada 21 dias. Acima de 25 kg: 1.200.000 UI a cada 21 dias' },
            { label: 'Sífilis congênita', value: '50.000 UI/kg/dose semanal por 3 semanas' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Faringoamigdalite estreptocócica', value: '1.200.000 UI dose única' },
            { label: 'Profilaxia doença reumática', value: '1.200.000–2.400.000 UI a cada 2–4 semanas' },
            { label: 'Sífilis adquirida recente / gestante VDRL+', value: '2.400.000 UI dose única (dividida em 2 injeções). Se sífilis secundária: repetir após 1 semana. Tratar parceiro.' },
            { label: 'Sífilis adquirida antiga (≥ 1 ano)', value: '2.400.000 UI/semana por 3 semanas (total: 7.200.000 UI). Tratar parceiro.' },
          ],
        },
      ],
      sensitivity: {
        susceptible: [
          'Gram+: Streptococcus grupo A, B, C, G; Pneumococos, Meningococo, N. gonorrhoeae, Sífilis',
          'Gram−: Pasteurella multocida, Proteus mirabilis',
          'Anaeróbios: Peptostreptococcus, Clostridium (não difficile)',
        ],
        resistant: [
          'Maioria das cepas de: S. aureus, B. fragilis, Enterobacteriaceae, Pseudomonas',
        ],
        warning: 'Risco de anafilaxia — estar preparado para tratar. Uso EXCLUSIVO intramuscular.',
      },
      sideEffects: [
        'Anafilaxia (risco importante — vigilar), alergia, urticária, prurido, edema angioneurótico, laringoespasmo, broncoespasmo, hipotensão, colapso, morte',
        'Doença do soro, diarreia, vômito, miocardite, febre, eosinofilia, hemólise, neutropenia, distúrbio de coagulação, nefrite intersticial',
        'Dor intensa no local de injeção',
      ],
      contraindications: [],
    },

    {
      id: 'penicilina-procaina',
      name: 'Benzilpenicilina Procaína + Potássica',
      category: 'penicilinas',
      observations: 'Associação de penicilinas G que mantém nível sérico por 12 a 24 horas. Uso intramuscular.',
      brands: [
        'Penicilina procaína + benzilpenicilina potássica — Fr. amp. 300.000 + 100.000 UI',
      ],
      presentations: [
        { label: 'Fr. amp. 300.000 + 100.000 UI' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'IM — dose usual', value: '50.000 UI/kg/dia ÷ 1–2 doses' },
            { label: 'Até 10 kg', value: '200.000 UI/dia' },
            { label: 'Acima de 10 kg', value: '600.000 UI/dose 1–2×/dia' },
            { label: 'Sífilis congênita', value: '50.000 UI/kg/dia 1×/dia por 10–14 dias (se falhar > 1 dia, recomeçar do zero). Máx: 1.200.000 UI (criança) ou 4.800.000 UI (adulto)' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual IM', value: '1 ou 2 frascos a cada 12 h' },
          ],
        },
      ],
      sideEffects: [
        'Dor prolongada e abscesso estéril no local de injeção',
        'Reações similares às demais penicilinas',
      ],
      sensitivity: { susceptible: [], resistant: [], warning: '' },
      contraindications: [],
    },

    {
      id: 'penicilina-cristalina',
      name: 'Benzilpenicilina Potássica',
      suffix: 'Penicilina G Cristalina',
      category: 'penicilinas',
      observations: 'Penicilina G EV de início rápido e duração curta. Cada milhão de unidades contém 1,7 mEq de K e 0,3 mEq de Na.',
      brands: [
        'Aricilina / Benzilpenicilina potássica — Fr. amp. 5.000.000 UI',
      ],
      presentations: [
        { label: 'Fr. amp. 5.000.000 UI' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '100.000–150.000 UI/kg/dia ÷ 4 doses EV ou IM. Máx: 400.000 UI/kg/dia ou 8 mi UI/dia' },
            { label: 'Neonatos', value: '25.000–50.000 UI/kg/dose ÷ 2–3 doses' },
            { label: 'Sífilis congênita neonatal', value: '50.000 UI/kg/dose EV 2–3×/dia por 10 dias' },
            { label: 'Pneumonia comunitária', value: '200.000–250.000 UI/kg/dia ÷ 4–6 doses por 7–10 dias' },
            { label: 'Endocardite', value: '200.000–300.000 UI/kg/dia ÷ 4 doses por 4 semanas. Máx: 24 mi UI/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV', value: '3–4 milhões UI/dose 4–6×/dia' },
            { label: 'Neurossífilis', value: '3–4 mi UI/dose 6×/dia por 10–14 dias' },
            { label: 'Gangrena gasosa', value: '4 mi UI/dose 6×/dia + clindamicina' },
            { label: 'Erisipela', value: '1,2 mi UI/dose 6×/dia' },
            { label: 'Profilaxia estreptococo B perinatal', value: '5 mi UI de ataque; depois 2,5–3 mi UI/dose a cada 4 h até o parto' },
            { label: 'Endocardite estreptocócica', value: '12–24 mi UI/dia ÷ 4 doses ou contínuo + gentamicina por 2–4 semanas' },
            { label: 'Endocardite enterocócica', value: '18–30 mi UI/dia ÷ 6 doses ou EV contínuo + gentamicina por 4–6 semanas' },
          ],
        },
      ],
      preparation: 'Diluição inicial: 5 mi UI em 3,2 mL de ABD = 1.000.000 UI/mL. Rediluir para 100.000–500.000 UI/mL (crianças) ou 50.000 UI/mL (neonatos).',
      renalAdjustment: [
        { label: 'ClCr 10–50 mL/min', value: '75% da dose' },
        { label: 'ClCr < 10 mL/min', value: '20–50% da dose normal' },
      ],
      sensitivity: {
        susceptible: [
          'Gram+: Estreptococos grupo A, B, C, G; Pneumococos, Meningococos, N. gonorrhoeae, Enterococcus faecalis',
          'Anaeróbios: Bacteroides (exceto B. fragilis), Fusobacterium, Sífilis',
          'Gram−: Proteus mirabilis',
        ],
        resistant: [
          'Maioria das cepas de: S. aureus, B. fragilis, Enterobacteriaceae, Pseudomonas',
          'Percentual crescente de pneumococos é resistente ou tolerante',
        ],
        warning: 'Em dose muito alta: hiperpotassemia e convulsões.',
      },
      sideEffects: [
        'Potássica: hepatite, flebite, tromboflebite; em dose alta: hiperpotassemia e convulsões',
      ],
      contraindications: [],
    },

    {
      id: 'penicilina-v',
      name: 'Fenoximetilpenicilina',
      suffix: 'Penicilina V',
      category: 'penicilinas',
      observations: 'Penicilina de uso oral. Indicada para faringite, piodermite, profilaxia de doença reumática e de infecções pneumocócicas em imunodeprimidos. Melhor tomar em jejum.',
      brands: [
        'Meracilina / Pen-ve-oral — comp. 500.000 UI; susp. oral 500.000 UI; sol. oral 80.000 UI/mL',
        'Fenoximetilpenicilina potássica — comp. 500.000 UI',
      ],
      presentations: [
        { label: 'Comprimido 500.000 UI' },
        { label: 'Suspensão oral 500.000 UI/5 mL' },
        { label: 'Solução oral 80.000 UI/mL' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual', value: '40.000–80.000 UI/kg/dia ÷ 3 doses' },
            { label: 'Profilaxia doença reumática / pneumocócica (≤ 25 kg)', value: '400.000 UI/dose 2–3×/dia por 10 dias' },
            { label: 'Profilaxia doença reumática / pneumocócica (> 25 kg)', value: '800.000 UI/dose 2–3×/dia por 10 dias' },
            { label: 'Profilaxia drepanocitose (< 3 anos)', value: '200.000 UI/dose 2×/dia' },
            { label: 'Profilaxia drepanocitose (3–5 anos)', value: '400.000 UI/dose 2×/dia' },
            { label: 'Pneumonia', value: '80.000–120.000 UI/kg/dia 3–4×/dia. Máx: 3.200.000 UI/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Faringite estreptocócica / impetigo', value: '400.000–500.000 UI/dose 3–4×/dia' },
          ],
        },
      ],
      sensitivity: {
        susceptible: ['Gram+, Estreptococos, Pneumococos'],
        resistant: ['Maioria das cepas de S. aureus'],
        warning: '',
      },
      sideEffects: [
        'Convulsão, alergia, anafilaxia, náusea, vômito, diarreia, febre medicamentosa, colite pseudomembranosa, candidíase oral',
        'Hemólise, nefrite intersticial, neutropenia, trombocitopenia, eosinofilia, doença do soro',
      ],
      contraindications: [],
    },

    {
      id: 'oxacilina',
      name: 'Oxacilina',
      category: 'penicilinas',
      observations: 'Penicilina semissintética resistente a betalactamase. Indicada especialmente para estafilococos resistentes à penicilina e sensíveis à oxacilina. Contém 3,1 mEq de Na/g.',
      brands: [
        'Oxacilina / Oxacillin / Oxacilina sódica — Fr. amp. 500 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'EV/IM — dose usual', value: '100–150 mg/kg/dia ÷ 4 doses. Máx: 4 g/dia' },
            { label: 'Neonatos', value: '25 mg/kg/dose 2–3×/dia' },
            { label: 'Infecções graves', value: '150–200 mg/kg/dia ÷ 4–6 doses. Máx: 12 g/dia' },
            { label: 'Pneumonia', value: 'EV: 150–200 mg/kg/dia ÷ 3–4 doses por 21 dias' },
            { label: 'Endocardite', value: 'EV: 200 mg/kg/dia ÷ 4–6 doses por 4–6 semanas' },
            { label: 'Meningite', value: 'EV: 200 mg/kg/dia ÷ 4 doses' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV/IM', value: '250–500 mg/dose a cada 4–6 h' },
            { label: 'Infecções graves', value: '1000 mg/dose 4–6×/dia. Máx: 12 g/dia' },
            { label: 'Pneumonia', value: 'EV: 1–2 g/dose 6×/dia' },
            { label: 'Sepse / osteomielite', value: 'EV: 1,5–2 g/dose 4–6×/dia ou infusão contínua por 6 semanas' },
            { label: 'Endocardite', value: 'EV: 12 g/dia ÷ 4–6 doses por 6 semanas' },
          ],
        },
      ],
      preparation: 'EV: diluir para 100 mg/mL ou mais; correr em 10 min.',
      sensitivity: {
        susceptible: [
          'S. aureus sensível à oxacilina, S. epidermidis sensível, Streptococcus A, B, C, G, Pneumococo, C. diphtheriae, Listeria (algumas cepas), Peptostreptococcus',
        ],
        resistant: [
          '30–60% das cepas hospitalares de S. aureus e maioria de S. epidermidis hospitalares',
          'Enterococcus, Listeria, Anaeróbios (exceto Peptostreptococcus), todos os Gram-negativos',
        ],
        warning: '',
      },
      sideEffects: [
        'Alergia, erupção cutânea, febre medicamentosa, diarreia, náusea, constipação, vômitos, estomatite, colite pseudomembranosa',
        'Tromboflebite, aumento de TGO/TGP, colestase, hepatotoxicidade, depressão medular, eosinofilia, neutropenia, hemólise',
        'Nefrite intersticial, hematúria, albuminúria, disfunção renal (especialmente em RN com dose alta)',
      ],
      contraindications: [],
    },

    {
      id: 'piperacilina-tazobactam',
      name: 'Piperacilina + Tazobactam',
      category: 'penicilinas',
      observations: 'Ureidopenicilina antipseudomonas EV, associada a inibidor de beta-lactamase (8:1). Usada em infecções por Gram-negativos multirresistentes. Infusão contínua prolongada é mais eficaz. Contém ≈ 2,4 mEq de Na/g.',
      brands: [
        'Tazocin / Piezaram — Fr. amp. 2000+250 mg e 4000+500 mg',
        'Piperacilina sódica + tazobactam sódico — Fr. amp. 2000+250 mg e 4000+500 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 2000+250 mg e 4000+500 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Neonatos', value: '100 mg/kg/dose 2–3×/dia' },
            { label: 'Até 2 meses', value: '80 mg/kg/dose 4×/dia' },
            { label: '2–9 meses', value: '80 mg/kg/dose 3×/dia' },
            { label: '> 9 meses', value: '100 mg/kg/dose 3×/dia. Máx: 16 g/dia' },
            { label: 'Fibrose cística', value: '240–400 mg/kg/dia ÷ 3–4 doses. Máx: 24 g/dia' },
            { label: 'Endocardite', value: '240 mg/kg/dia ÷ 4 doses + aminoglicosídeo por 6 semanas. Máx: 18 g/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual EV', value: '2–4 g/dose 3–4×/dia. Máx: 18 g/dia' },
            { label: 'Pneumonia', value: '4 g/dose 4×/dia + aminoglicosídeo ou quinolona' },
            { label: 'Sepse / peritonite', value: '3–4 g/dose 4×/dia' },
            { label: 'Infecção urinária complicada', value: 'EV: 12 g/dia ÷ 3–4 doses' },
          ],
        },
      ],
      preparation: 'Diluir para ≥ 20 mg/mL em ABD/SF/SGI; infundir em 30 min. Infusão contínua prolongada é mais eficaz.',
      renalAdjustment: [
        { label: 'ClCr 20–40 mL/min', value: '2–3 g/dose 4×/dia' },
        { label: 'ClCr < 20 mL/min', value: '2 g/dose 3×/dia' },
        { label: 'Hemodiálise', value: 'Remove 30–40%' },
      ],
      sensitivity: {
        susceptible: [
          'Algumas cepas multirresistentes de: E. coli, Proteus, Shigella, Klebsiella, Moraxella, Enterobacter, Citrobacter, Providencia, Salmonella, Pseudomonas, Acinetobacter',
          'H. influenzae, Streptococcus, Pneumococcus, S. aureus sensível à oxacilina, Enterococcus, Anaeróbios incluindo B. fragilis',
        ],
        resistant: [
          'S. aureus e S. epidermidis resistentes à oxacilina',
          'Algumas cepas de B. fragilis, Clostridium e dos Gram-negativos listados',
        ],
        warning: '',
      },
      sideEffects: [
        'Cefaleia, tontura, confusão, fadiga, insônia, agitação, febre, alergia, erupção cutânea, dermatite esfoliativa, eritema multiforme, anafilaxia',
        'Edema, hipertensão, hipotensão, flebite, dor local, náusea, vômitos, diarreia, colite pseudomembranosa',
        'Leucopenia, neutropenia, trombocitopenia, eosinofilia, anemia, disfunção plaquetária na IR, hipopotassemia',
        'Aumento de transaminases, colestase, hepatite, nefrite intersticial',
      ],
      contraindications: [],
    },
  ],
};