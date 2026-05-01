export const GLICOPEPTIDEOS_CATEGORY = {
  id: 'glicopeptideos',
  name: 'Glicopeptídeos',
  icon: '💊',
  drugs: [
    {
      id: 'teicoplanina',
      name: 'Teicoplanina',
      suffix: '(Targetcid, Koplan, Teiconin)',
      apresentacao: [
        'Frasco-ampola: 200 mg',
        'Frasco-ampola: 400 mg',
      ],
      observacao: 'Glicopeptídeo antiestafilococo resistente. Mesmo espectro da vancomicina com vantagem de poder ser administrado por via intramuscular. Penetra pouco no SNC.',
      dosePediatrica: {
        titulo: 'Crianças',
        descricao: 'Dose usual: 0 a 2 meses: iniciar com 16 mg/kg/dose EV, seguido de 8 mg/kg/dia. > 2 meses: iniciar com 10 mg/kg/dose a cada 12 h por 3 doses; depois 6 a 10 mg/kg/dia',
        detalhes: [
          'Artrite séptica: 12 mg/kg/dose EV por 3 a 5 doses, depois 12 mg/kg/dia EV ou IM até 4 meses. Manter nível sérico > 20 mg/L',
          'Endocardite estafilocócica: 12 mg/kg/dose EV por 3 a 5 doses, depois 12 mg/kg/dia EV ou IM por 2 dias. Manter nível sérico > 30 mg/L',
        ]
      },
      doseAdulta: {
        titulo: 'Adultos',
        descricao: 'Ataque: 400 mg/dose a cada 12 h por 2 a 3 doses. Ou 800 mg/dose a cada 12 h por 3 a 8 doses. Manutenção EV ou IM: 400 a 800 mg/dia ou 6 a 12 mg/kg/dia',
        detalhes: [
          'Artrite séptica: 12 mg/kg/dose EV por 3 a 5 doses, depois 12 mg/kg/dia EV ou IM até 4 meses',
          'Endocardite estafilocócica: 12 mg/kg/dose EV por 3 a 5 doses, depois 12 mg/kg/dia EV ou IM por 2 dias. Manter nível sérico > 30 mg/L',
          'Peritonite na diálise peritoneal: Dose inicial intraperitoneal 400 mg, seguido de 20 mg/L no dialisato',
        ]
      },
      administracao: 'Após reconstituição pode ser usado até 24 h se conservado a 5°C. EV em bolus 3 a 5 min ou infusão 30 min. Não misturar com aminoglicosídeo',
      ajusteRenal: [
        'ClCr 30–60 mL/min: 1 dose a cada 48 h',
        'ClCr < 30 mL/min ou diálise: 1 dose a cada 72 h',
      ],
      sensibilidade: {
        sensivel: ['S. aureus resistente à oxacilina', 'S. epidermidis', 'S. pyogenes', 'S. pneumoniae', 'S. viridans', 'S. bovis', 'Clostridium difficile', 'Corynebacterium', 'E. faecalis maioria', 'E. faecium alguns'],
        resistente: ['Todos Gram-negativos', 'Todas micobactérias', 'Algumas cepas Enterococcus', 'Algumas cepas S. epidermidis'],
      },
      efeitosColaterais: ['Exantema', 'Prurido', 'Broncoespasmo', 'Anafilaxia', 'Febre medicamentosa', 'Síndrome de Stevens-Johnson', 'Nefrotoxicidade', 'Ototoxicidade'],
      interacoes: 'Potencial nefrotoxicidade com aminoglicosídeos, anfotericina e drogas nefrotóxicas',
    },
    {
      id: 'vancomicina',
      name: 'Vancomicina',
      suffix: '(Vancocina, Vancoson, Vancotrat)',
      apresentacao: [
        'Frasco-ampola: 500 mg',
        'Frasco-ampola: 1.000 mg',
      ],
      observacao: 'Betalactâmico glicopeptídeo. Uso restrito para S. aureus e S. epidermidis resistentes à oxacilina. Útil contra C. difficile e em alérgicos a penicilinas. Uso crescente para pneumococo resistente.',
      dosePediatrica: {
        titulo: 'Crianças',
        descricao: 'Dose usual EV: 40 a 45 mg/kg/dia dividido em 3 a 4 doses. Casos graves: 45 a 60 mg/kg/dia. Dose máxima: 2 g/dia',
        detalhes: [
          'Meningoencefalite/meningite (> 1 mês): 60 mg/kg/dia dividido em 4 doses. Ajustar para nível sérico 15-20 µg/mL',
          'Pneumonia: 40 a 60 mg/kg/dia dividido em 3 a 4 doses por 7 a 21 dias',
          'Endocardite: 30 a 60 mg/kg/dia dividido em 2 a 3 doses por 4 a 6 semanas',
          'Profilaxia endocardite: 15 a 20 mg/kg/dose 1 a 2 h antes do procedimento, associar gentamicina',
          'Colite pseudomembranosa: Oral 40 mg/kg/dia dividido em 4 doses. Máximo: 2 g/dia',
          'Intratecal: 5 a 20 mg/dia. Máximo: 10 mg/dia em neonatos',
        ]
      },
      doseAdulta: {
        titulo: 'Adultos',
        descricao: 'Dose usual: 15 a 20 mg/kg/dose a cada 2 a 3 doses para manter nível sérico 15-20 µg/mL. Máximo: 2 g/dose',
        detalhes: [
          'Casos graves (artrite, meningite, pneumonia, sepse): Ataque 25 a 30 mg/kg',
          'Endocardite: 15 mg/kg/dose 2 vezes ao dia por 4 a 6 semanas',
          'Celulite/infecções pele: 1000 mg/dose 2 vezes ao dia ou 15 mg/kg/dose 2 vezes ao dia por 10 dias',
          'Intratecal: 10–20 mg/dose a cada 24–72 h',
          'Colite pseudomembranosa: Oral 125 mg/dose 4 vezes ao dia por 10 a 14 dias. Até 500 mg em casos graves',
          'Peritonite CAPD: Dose inicial 30 mg/kg, depois 15 mg/kg cada banho',
        ]
      },
      preparo: 'Diluir para 50 mg/mL em ABD e depois rediluir para 2,5-5 mg/mL em SF ou SGI. Infundir em 30–60 min. Doses > 1 g em 2 horas. Reduzir velocidade se hiperemia de pele/pescoço',
      ajusteRenal: [
        'ClCr 30–50 mL/min: 50% da dose diária',
        'ClCr 10–29 mL/min: 50% da dose a cada 24 h',
        'ClCr < 10 mL/min ou diálise: ajustar para manter nível sérico 15-20 µg/mL',
      ],
      sensibilidade: {
        sensivel: ['S. aureus', 'S. epidermidis resistentes', 'S. pneumoniae inclusive resistentes', 'S. pyogenes', 'S. bovis', 'S. viridans', 'Clostridium difficile', 'Corynebacterium', 'E. faecium algumas', 'E. faecalis maioria', 'Anaeróbios', 'Peptococcus', 'Peptostreptococcus'],
        resistente: ['Algumas cepas Enterococcus', 'Micobactérias', 'Gram-negativos (Pseudomonas, Proteus, Enterobacter, Klebsiella)'],
      },
      caracteristicas: 'Apesar de penetração liquórica não ser boa, é eficaz em meningite com níveis séricos em torno de 30 µg/mL',
      efeitosColaterais: ['Síndrome do homem vermelho', 'Prurido', 'Febre', 'Calafrios', 'Ototoxicidade', 'Nefrotoxicidade rara', 'Flebite', 'Leucopenia', 'Aumento transaminases'],
      interacoes: 'Aminoglicosídeos, anfotericina ou furosemida piora nefrotoxicidade',
    }
  ]
};