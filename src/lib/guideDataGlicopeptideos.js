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
      brands: ['Targetcid — Fr. amp. 200 mg', 'Koplan — Fr. amp. 200 mg e 400 mg', 'Teiconin — Fr. amp. 200 mg e 400 mg'],
      presentations: [
        { label: 'Fr. amp. 200 mg' },
        { label: 'Fr. amp. 400 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: '0–2 meses', value: 'Ataque: 16 mg/kg/dose EV × 1; manutenção: 8 mg/kg/dia' },
            { label: '> 2 meses (dose usual)', value: 'Ataque: 10 mg/kg/dose a cada 12 h × 3 doses; manutenção: 6–10 mg/kg/dia' },
            { label: 'Artrite séptica', value: '12 mg/kg/dose EV por 3–5 doses; depois 12 mg/kg/dia EV ou IM até 4 meses. Manter nível sérico > 20 mg/L' },
            { label: 'Endocardite estafilocócica', value: '12 mg/kg/dose EV por 3–5 doses; depois 12 mg/kg/dia por 2 dias. Manter nível sérico > 30 mg/L' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose de ataque', value: '400 mg/dose a cada 12 h por 2–3 doses. Casos graves: 800 mg/dose a cada 12 h por 3–8 doses' },
            { label: 'Manutenção EV ou IM', value: '400–800 mg/dia ou 6–12 mg/kg/dia' },
            { label: 'Artrite séptica', value: '12 mg/kg/dose EV por 3–5 doses; depois 12 mg/kg/dia EV ou IM até 4 meses' },
            { label: 'Endocardite estafilocócica', value: '12 mg/kg/dose EV por 3–5 doses; depois 12 mg/kg/dia por 2 dias. Manter nível sérico > 30 mg/L' },
            { label: 'Peritonite na diálise peritoneal', value: 'Dose inicial intraperitoneal 400 mg; depois 20 mg/L no dialisato' },
          ],
        },
      ],
      preparation: 'Após reconstituição pode ser usado até 24 h se conservado a 5°C. EV em bolus 3–5 min ou infusão 30 min. Não misturar com aminoglicosídeo.',
      renalAdjustment: [
        { label: 'ClCr 30–60 mL/min', value: '1 dose a cada 48 h' },
        { label: 'ClCr < 30 mL/min ou diálise', value: '1 dose a cada 72 h' },
      ],
      sensitivity: {
        susceptible: [
          'S. aureus resistente à oxacilina, S. epidermidis, S. pyogenes, S. pneumoniae, S. viridans, S. bovis',
          'Clostridium difficile, Corynebacterium, E. faecalis (maioria), E. faecium (alguns)',
        ],
        resistant: [
          'Todos os Gram-negativos, todas as micobactérias',
          'Algumas cepas de Enterococcus, algumas cepas de S. epidermidis',
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
      observations: 'Betalactâmico glicopeptídeo. Uso restrito para S. aureus e S. epidermidis resistentes à oxacilina. Útil contra C. difficile e em alérgicos a penicilinas. Uso crescente para pneumococo resistente.',
      brands: ['Vancocina — Fr. amp. 500 mg e 1.000 mg', 'Vancoson — Fr. amp. 500 mg e 1.000 mg', 'Vancotrat — Fr. amp. 500 mg e 1.000 mg'],
      presentations: [
        { label: 'Fr. amp. 500 mg' },
        { label: 'Fr. amp. 1.000 mg' },
      ],
      doses: [
        {
          group: 'Crianças',
          items: [
            { label: 'Dose usual EV', value: '40–45 mg/kg/dia ÷ 3–4 doses. Casos graves: 45–60 mg/kg/dia. Máx: 2 g/dia' },
            { label: 'Meningite (> 1 mês)', value: '60 mg/kg/dia ÷ 4 doses. Manter nível sérico 15–20 µg/mL' },
            { label: 'Pneumonia', value: '40–60 mg/kg/dia ÷ 3–4 doses por 7–21 dias' },
            { label: 'Endocardite', value: '30–60 mg/kg/dia ÷ 2–3 doses por 4–6 semanas' },
            { label: 'Profilaxia endocardite', value: '15–20 mg/kg/dose 1–2 h antes do procedimento + gentamicina' },
            { label: 'Colite pseudomembranosa (oral)', value: '40 mg/kg/dia ÷ 4 doses. Máx: 2 g/dia' },
            { label: 'Intratecal', value: '5–20 mg/dia. Máx neonatos: 10 mg/dia' },
          ],
        },
        {
          group: 'Adultos',
          items: [
            { label: 'Dose usual', value: '15–20 mg/kg/dose a cada 8–12 h. Manter nível sérico 15–20 µg/mL. Máx: 2 g/dose' },
            { label: 'Casos graves (ataque)', value: '25–30 mg/kg' },
            { label: 'Endocardite', value: '15 mg/kg/dose 2×/dia por 4–6 semanas' },
            { label: 'Celulite / infecções de pele', value: '1000 mg/dose 2×/dia ou 15 mg/kg/dose 2×/dia por 10 dias' },
            { label: 'Intratecal', value: '10–20 mg/dose a cada 24–72 h' },
            { label: 'Colite pseudomembranosa (oral)', value: '125 mg/dose 4×/dia por 10–14 dias. Até 500 mg nos casos graves' },
            { label: 'Peritonite CAPD', value: 'Dose inicial 30 mg/kg; depois 15 mg/kg a cada banho' },
          ],
        },
      ],
          preparation: "IV: Reconstituir o frasco de 500 mg com 10 mL de AD (50 mg/mL). Diluir obrigatoriamente em SF 0,9% ou SG 5% para concentração máxima de 5 mg/mL (máx 10 mg/mL em acesso venoso central).\nTEMPO DE INFUSÃO: Infundir em pelo menos 60 minutos (ou taxa ≤ 10 mg/minuto) para prevenir Síndrome do Homem Vermelho (reação anafilactoide com rubor e hipotensão).",
          renalAdjustment: [
      { label: "ClCr ≥ 50 mL/min", value: "15 mg/kg a cada 6 a 8 horas com controle de nível sérico" },
      { label: "ClCr 30–49 mL/min", value: "15 mg/kg a cada 12 horas" },
      { label: "ClCr 10–29 mL/min", value: "15 mg/kg a cada 18 a 24 horas" },
      { label: "ClCr < 10 mL/min / TRS", value: "15 mg/kg dose de ataque; redosar guiado por nível sérico (<10–15 mcg/mL)" },
    ],
      sensitivity: {
        susceptible: [
          'S. aureus, S. epidermidis resistentes, S. pneumoniae inclusive resistentes, S. pyogenes, S. bovis, S. viridans',
          'Clostridium difficile, Corynebacterium, E. faecium (algumas), E. faecalis (maioria)',
          'Anaeróbios, Peptococcus, Peptostreptococcus',
        ],
        resistant: [
          'Algumas cepas de Enterococcus, micobactérias',
          'Gram-negativos: Pseudomonas, Proteus, Enterobacter, Klebsiella',
        ],
        warning: 'Apesar de penetração liquórica não ser boa, é eficaz em meningite com níveis séricos em torno de 30 µg/mL. Aminoglicosídeos, anfotericina ou furosemida pioram nefrotoxicidade.',
      },
      sideEffects: [
        'Síndrome do homem vermelho (eritema, prurido, hipotensão) — relacionada à velocidade de infusão',
        'Febre, calafrios, ototoxicidade, nefrotoxicidade rara',
        'Flebite, leucopenia, aumento de transaminases',
      ],
      contraindications: [],
        hepaticAdjustment: "Oral: Baixa absorção sistêmica, sem ajuste. IV: Sem recomendação formal de ajuste na bula, mas monitorar estritamente função renal.",
      monitoring: "Nível sérico de vale (trough): coletar 30 min antes da 4ª dose. Alvo: 10 a 15 mcg/mL (infecções moderadas) e 15 a 20 mcg/mL (meningite, sepse, endocardite, osteomielite, pneumonia por MRSA). Monitorar creatinina e débito urinário.",
  },
  ],
};