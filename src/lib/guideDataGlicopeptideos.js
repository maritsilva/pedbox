export const GLICOPEPTIDEOS_CATEGORY = {
  id: 'glicopeptideos',
  label: 'Glicopeptídeos',
  color: 'purple-500',
  icon: '💊',
  drugs: [
    {
      id: 'teicoplanina',
      name: 'Teicoplanina',
      suffix: 'Targetcid, Koplan, Teiconin',
      category: 'glicopeptideos',
      observations: 'Glicopeptídeo antiestafilococo resistente. Mesmo espectro da vancomicina com vantagem de poder ser administrado por via intramuscular. Penetra pouco no SNC.',
      brands: [
        'Targetcid — Fr. amp. 200 mg',
        'Koplan — Fr. amp. 400 mg',
        'Teiconin — Fr. amp. 200 mg e 400 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 200 mg' },
        { label: 'Fr. amp. 400 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: '0–2 meses', value: '16 mg/kg/dose EV ataque, seguido de 8 mg/kg/dia' },
            { label: '> 2 meses (dose usual)', value: '10 mg/kg/dose a cada 12 h por 3 doses; depois 6–10 mg/kg/dia' },
            { label: 'Artrite séptica', value: '12 mg/kg/dose EV por 3–5 doses, depois 12 mg/kg/dia EV ou IM até 4 meses. Nível sérico > 20 mg/L' },
            { label: 'Endocardite estafilocócica', value: '12 mg/kg/dose EV por 3–5 doses, depois 12 mg/kg/dia EV ou IM por 2 dias. Nível sérico > 30 mg/L' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Ataque', value: '400 mg/dose a cada 12 h por 2–3 doses; ou 800 mg/dose a cada 12 h por 3–8 doses' },
            { label: 'Manutenção EV ou IM', value: '400–800 mg/dia ou 6–12 mg/kg/dia' },
            { label: 'Artrite séptica', value: '12 mg/kg/dose EV por 3–5 doses, depois 12 mg/kg/dia EV ou IM até 4 meses' },
            { label: 'Endocardite estafilocócica', value: '12 mg/kg/dose EV por 3–5 doses, depois 12 mg/kg/dia EV ou IM por 2 dias. Nível sérico > 30 mg/L' },
            { label: 'Peritonite (diálise peritoneal)', value: 'Dose inicial intraperitoneal 400 mg, seguido de 20 mg/L no dialisato' },
          ],
        },
      ],
      preparation: 'EV em bolus 3–5 min ou infusão 30 min. Após reconstituição: conservar a 5°C por até 24 h. NÃO misturar com aminoglicosídeo no mesmo equipo.',
      renalAdjustment: [
        { label: 'ClCr 30–60 mL/min', value: '1 dose a cada 48 h' },
        { label: 'ClCr < 30 mL/min ou diálise', value: '1 dose a cada 72 h' },
      ],
      sensitivity: {
        susceptible: [
          'S. aureus resistente à oxacilina (MRSA)',
          'S. epidermidis, S. pyogenes, S. pneumoniae, S. viridans, S. bovis',
          'Clostridium difficile, Corynebacterium',
          'E. faecalis (maioria), E. faecium (alguns)',
        ],
        resistant: [
          'Todos os Gram-negativos',
          'Todas as micobactérias',
          'Algumas cepas de Enterococcus e S. epidermidis',
        ],
        warning: 'Potencial nefrotoxicidade com aminoglicosídeos, anfotericina e drogas nefrotóxicas.',
      },
      sideEffects: [
        'Exantema, prurido, broncoespasmo, anafilaxia',
        'Febre medicamentosa, Síndrome de Stevens-Johnson',
        'Nefrotoxicidade, ototoxicidade',
      ],
      contraindications: [],
    },
    {
      id: 'vancomicina',
      name: 'Vancomicina',
      suffix: 'Vancocina, Vancoson, Vancotrat',
      category: 'glicopeptideos',
      observations: 'Glicopeptídeo betalactâmico. Uso restrito para S. aureus e S. epidermidis resistentes à oxacilina. Útil contra C. difficile e em alérgicos a penicilinas. Uso crescente para pneumococo resistente. Apesar de penetração liquórica não ser boa, é eficaz em meningite com níveis séricos em torno de 30 µg/mL.',
      brands: [
        'Vancocina — Fr. amp. 500 mg e 1.000 mg',
        'Vancoson — Fr. amp. 500 mg',
        'Vancotrat — Fr. amp. 500 mg e 1.000 mg',
      ],
      presentations: [
        { label: 'Fr. amp. 500 mg' },
        { label: 'Fr. amp. 1.000 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual EV', value: '40–45 mg/kg/dia ÷ 3–4 doses. Máx: 2 g/dia' },
            { label: 'Casos graves', value: '45–60 mg/kg/dia ÷ 3–4 doses' },
            { label: 'Meningite (> 1 mês)', value: '60 mg/kg/dia ÷ 4 doses. Ajustar para nível sérico 15–20 µg/mL' },
            { label: 'Pneumonia', value: '40–60 mg/kg/dia ÷ 3–4 doses por 7–21 dias' },
            { label: 'Endocardite', value: '30–60 mg/kg/dia ÷ 2–3 doses por 4–6 semanas' },
            { label: 'Profilaxia endocardite', value: '15–20 mg/kg/dose 1–2 h antes. Associar gentamicina' },
            { label: 'Colite pseudomembranosa (oral)', value: '40 mg/kg/dia ÷ 4 doses. Máx: 2 g/dia' },
            { label: 'Intratecal', value: '5–20 mg/dia. Máx: 10 mg/dia em neonatos' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '15–20 mg/kg/dose a cada 8–12 h. Manter nível 15–20 µg/mL. Máx: 2 g/dose' },
            { label: 'Casos graves (meningite, sepse)', value: 'Ataque 25–30 mg/kg' },
            { label: 'Endocardite', value: '15 mg/kg/dose 2×/dia por 4–6 semanas' },
            { label: 'Celulite / infecções de pele', value: '1000 mg/dose 2×/dia ou 15 mg/kg/dose 2×/dia por 10 dias' },
            { label: 'Intratecal', value: '10–20 mg/dose a cada 24–72 h' },
            { label: 'Colite pseudomembranosa (oral)', value: '125 mg/dose 4×/dia por 10–14 dias; até 500 mg nos casos graves' },
            { label: 'Peritonite CAPD', value: 'Dose inicial 30 mg/kg, depois 15 mg/kg a cada banho' },
          ],
        },
      ],
      preparation: 'Diluir para 50 mg/mL em ABD, depois rediluir para 2,5–5 mg/mL em SF ou SGI. Infundir em 30–60 min. Doses > 1 g em 2 h. Reduzir velocidade se hiperemia de pele/pescoço (síndrome do homem vermelho).',
      renalAdjustment: [
        { label: 'ClCr 30–50 mL/min', value: '50% da dose diária' },
        { label: 'ClCr 10–29 mL/min', value: '50% da dose a cada 24 h' },
        { label: 'ClCr < 10 mL/min ou diálise', value: 'Ajustar para manter nível sérico 15–20 µg/mL' },
      ],
      sensitivity: {
        susceptible: [
          'S. aureus e S. epidermidis resistentes à oxacilina',
          'S. pneumoniae inclusive resistentes, S. pyogenes, S. bovis, S. viridans',
          'Clostridium difficile, Corynebacterium',
          'E. faecalis (maioria), E. faecium (algumas)',
          'Anaeróbios, Peptococcus, Peptostreptococcus',
        ],
        resistant: [
          'Algumas cepas de Enterococcus (VRE)',
          'Micobactérias',
          'Gram-negativos: Pseudomonas, Proteus, Enterobacter, Klebsiella',
        ],
        warning: 'Aminoglicosídeos, anfotericina ou furosemida pioram a nefrotoxicidade.',
      },
      sideEffects: [
        'Síndrome do homem vermelho (rubor, eritema, prurido — relacionado à infusão rápida)',
        'Febre, calafrios',
        'Ototoxicidade, nefrotoxicidade rara',
        'Flebite, leucopenia, aumento de transaminases',
      ],
      contraindications: [],
    },
  ],
};