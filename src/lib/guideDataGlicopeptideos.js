export const GLICOPEPTIDEOS_CATEGORY = {
  id: "glicopeptideos",
  label: "Glicopeptídeos",
  icon: "💊",
  color: "blue",
  drugs: [
    {
      id: "teicoplanina",
      name: "Teicoplanina",
      category: "glicopeptideos",
      catIcon: "💊",
      catLabel: "Glicopeptídeos",
      suffix: "Glycopeptide antibiotic",
      
      presentations: [
        "Targocid / Koplan / Teiconin / Teicoston — Frasco-ampola 200 mg e 400 mg",
        "Teicoplanina genérica — Frasco-ampola 200 mg e 400 mg"
      ],
      
      observation: "Glicopeptídeo antiestafilococo resistente. Mesmo espectro da vancomicina, com vantagem de poder ser administrado por via intramuscular. Penetra pouco no SNC, não usar em meningites.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual",
              doses: [
                "0 a 2 meses: iniciar com 16 mg/kg/dose EV, seguido de 8 mg/kg/dia",
                "> 2 meses: iniciar com 10 mg/kg/dose a cada 12 h, por 3 doses; depois 6 a 10 mg/kg/dia"
              ]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual",
              doses: [
                "Ataque: 400 mg/dose, a cada 12 h, por 2 a 3 doses",
                "Ou 800 mg/dose, a cada 12 h, por 3 a 8 doses",
                "Manutenção EV ou IM: 400 a 800 mg/dia ou 6 a 12 mg/kg/dia"
              ]
            },
            {
              condition: "Artrite séptica",
              doses: [
                "12 mg/kg/dose EV, por 3 a 5 doses",
                "Depois 12 mg/kg/dia EV ou IM por até 4 meses",
                "Manter nível sérico acima de 20 mg/L"
              ]
            },
            {
              condition: "Endocardite estafilocócica",
              doses: [
                "12 mg/kg/dose EV, por 3 a 5 doses",
                "Depois 12 mg/kg/dia EV ou IM por 2 dias",
                "Manter nível sérico acima de 30 mg/L"
              ]
            },
            {
              condition: "Peritonite na diálise peritoneal",
              doses: [
                "Dose inicial intraperitoneal: 400 mg, seguido de 20 mg/L no dialisato",
                "Misturar na bolsa na 1ª semana e em bolsas alternadas na 2ª semana"
              ]
            }
          ]
        }
      },
      
      administration: "Após reconstituição, pode ser usado por até 24 horas se conservado a 5 ºC. Não misturar com aminoglicosídeo, exceto em solução de diálise peritoneal. Administrar EV em bolus de 3 a 5 minutos ou infusão de 30 minutos.",
      
      renalAdjustment: [
        "ClCr 30–60 mL/min: 1 dose a cada 48 h",
        "ClCr < 30 mL/min ou diálise: 1 dose a cada 72 h",
        "Reduzir a dose após o 4º dia de tratamento"
      ],
      
      sensible: [
        "S. aureus resistente à oxacilina",
        "S. epidermidis (maioria das cepas)",
        "S. pyogenes",
        "S. pneumoniae",
        "S. viridans",
        "S. bovis",
        "Clostridium difficile",
        "Corynebacterium spp.",
        "E. faecalis (maioria)",
        "E. faecium (alguns)"
      ],
      
      resistant: [
        "Todos os Gram-negativos",
        "Todas as micobactérias",
        "Algumas cepas de Enterococcus",
        "Algumas cepas de S. epidermidis",
        "S. aureus sensível à vancomicina pode ser resistente à teicoplanina"
      ],
      
      sideEffects: [
        "Exantema, prurido, broncoespasmo, anafilaxia",
        "Febre medicamentosa, calafrios, cefaleia, tontura",
        "Náusea, vômito, diarreia",
        "Trombocitopenia, trombocitose, anemia, neutropenia transitória, eosinofilia",
        "Dor local, flebite, abscesso no local da injeção IM",
        "Epidermólise, Síndrome de Stevens-Johnson",
        "Síndrome do homem vermelho (semelhante à vancomicina)",
        "Nefrotoxicidade e ototoxicidade (menos frequentes que vancomicina)"
      ],
      
      interactions: "Potencial nefrotoxicidade de aminoglicosídeos, anfotericina e outras drogas nefrotóxicas."
    },
    
    {
      id: "vancomicina",
      name: "Vancomicina",
      category: "glicopeptideos",
      catIcon: "💊",
      catLabel: "Glicopeptídeos",
      suffix: "Glycopeptide antibiotic",
      
      presentations: [
        "Vancocina / Vancoson / Vancotrat — Frasco-ampola 500 mg e 1.000 mg",
        "Cloridrato de vancomicina — Frasco-ampola 500 mg"
      ],
      
      observation: "Betalactâmico glicopeptídeo de uso restrito para Staphylococcus aureus e S. epidermidis resistentes à oxacilina. Útil contra Clostridium difficile e infecções graves por estafilococos em alérgicos à penicilina e cefalosporinas. Uso crescente para pneumococo resistente. Para colite por C. difficile, é primeira escolha na administração oral.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual EV",
              doses: ["40 a 45 mg/kg/dia, dividido em 3 a 4 doses"]
            },
            {
              condition: "Casos graves",
              doses: ["45 a 60 mg/kg/dia, dividido em 3 a 4 doses"]
            },
            {
              condition: "Dose máxima",
              doses: ["2 g/dia"]
            },
            {
              condition: "Meningoencefalite / meningite (> 1 mês)",
              doses: ["60 mg/kg/dia, dividido em 4 doses", "Ajustar para obter nível sérico entre 15 e 20 µg/mL"]
            },
            {
              condition: "Pneumonia",
              doses: ["40 a 60 mg/kg/dia, dividido em 3 a 4 doses, por 7 a 21 dias"]
            },
            {
              condition: "Endocardite",
              doses: ["30 a 60 mg/kg/dia, dividido em 2 a 3 doses, por 4 a 6 semanas"]
            },
            {
              condition: "Profilaxia de endocardite",
              doses: ["15 a 20 mg/kg/dose, 1 a 2 horas antes do procedimento", "Associar gentamicina"]
            },
            {
              condition: "Colite pseudomembranosa / enterocolite",
              doses: ["Oral: 40 mg/kg/dia, dividido em 4 doses", "Associar EV nos casos muito graves", "Máximo: 2 g/dia"]
            },
            {
              condition: "Intratecal",
              doses: ["5 a 20 mg/dia", "Máximo: 10 mg/dia em neonatos"]
            },
            {
              condition: "Fibrose cística",
              doses: ["60 mg/kg/dia, dividido em 4 doses"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual",
              doses: ["15 a 20 mg/kg/dose a cada 2 a 3 doses", "Manter nível sérico antes da próxima dose entre 15 e 20 µg/mL", "Máximo: 2 g/dose"]
            },
            {
              condition: "Casos graves",
              doses: ["Ataque de 25 a 30 mg/kg"]
            },
            {
              condition: "Endocardite",
              doses: ["15 mg/kg/dose, 2 vezes ao dia, por 4 a 6 semanas"]
            },
            {
              condition: "Celulite, infecções de pele e feridas",
              doses: ["1000 mg/dose, 2 vezes ao dia", "Ou 15 mg/kg/dose, 2 vezes ao dia, por 10 dias"]
            },
            {
              condition: "Intratecal",
              doses: ["10–20 mg/dose, a cada 24–72 h"]
            },
            {
              condition: "Colite pseudomembranosa",
              doses: ["Oral: 125 mg/dose, 4 vezes ao dia, por 10 a 14 dias", "Até 500 mg/dose em casos graves"]
            },
            {
              condition: "Peritonite em CAPD",
              doses: ["Na diálise, dose inicial de 30 mg/kg", "Depois 15 mg/kg a cada banho"]
            },
            {
              condition: "Profilaxia de doença perinatal por estreptococo B",
              doses: ["Alternativa: 20 mg/kg a cada 8 h até o parto"]
            }
          ]
        }
      },
      
      preparation: "Diluir para 50 mg/mL em ABD e depois rediluir para 2,5 a 5 mg/mL em SF ou SGI. Infundir em 30–60 minutos. Nas doses acima de 1 g, infundir em 2 horas. Pode ser irritante. Reduzir velocidade de infusão se ocorrer hiperemia da pele, pescoço ou exantema. Evitar uso IM, pois causa dor local intensa. Para uso oral, em colite por C. difficile, misturar formulação EV em leite ou xarope.",
      
      renalAdjustment: [
        "ClCr 30–50 mL/min: 50% da dose diária",
        "ClCr 10–29 mL/min: 50% da dose a cada 24 h",
        "ClCr < 10 mL/min ou diálise: ajustar para manter nível sérico de 15 a 20 µg/mL"
      ],
      
      sensible: [
        "S. aureus",
        "S. epidermidis resistentes à oxacilina ou meticilina",
        "S. pneumoniae (inclusive cepas resistentes à penicilina)",
        "S. pyogenes",
        "S. bovis",
        "S. viridans",
        "Clostridium difficile",
        "Corynebacterium spp.",
        "E. faecium (algumas cepas)",
        "E. faecalis (maioria)",
        "Anaeróbios: Peptococcus, Peptostreptococcus",
        "Clostridium (inclusive C. difficile)"
      ],
      
      resistant: [
        "Algumas cepas de Enterococcus",
        "Micobactérias, Rickettsias",
        "Bacteroides fragilis",
        "B. melaninogenicus",
        "Fusobacterium",
        "Raros casos de S. aureus com sensibilidade reduzida ou resistência"
      ],
      
      characteristics: "Apesar de penetração liquórica não ser boa, é eficaz na meningite quando usada em dose para obter níveis séricos em torno de 30 µg/mL.",
      
      sideEffects: [
        "Alergia cutânea, erupção cutânea, eritema multiforme",
        "Febre, calafrios durante infusão",
        "Síndrome do homem vermelho: prurido, calor difuso, dor no pescoço",
        "Náusea, ototoxicidade",
        "Nefrotoxicidade (rara)",
        "Bloqueio neuromuscular, flebite",
        "Hipotensão por infusão rápida, parada cardíaca (rara)",
        "Leucopenia, neutropenia, trombocitopenia, eosinofilia",
        "Aumento de transaminases",
        "Não infundir acima de 1 g/1,5 h",
        "Níveis > 30 µg/mL aumentam risco de nefrotoxicidade e ototoxicidade"
      ],
      
      interactions: "Associação com aminoglicosídeos, anfotericina ou furosemida piora nefrotoxicidade."
    }
  ]
};