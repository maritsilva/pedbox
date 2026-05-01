export const ANTIFUNGICOS_AZOLICOS_CATEGORY = {
  id: "antifungicos-azolicos",
  label: "Antifúngicos Azólicos",
  icon: "🍄",
  color: "green",
  drugs: [
    {
      id: "cetoconazol",
      name: "Cetoconazol",
      category: "antifungicos-azolicos",
      catIcon: "🍄",
      catLabel: "Antifúngicos Azólicos",
      suffix: "Imidazólico",
      
      presentations: [
        "Cetoconazol — Comprimido 200 mg"
      ],
      
      observation: "Antifúngico imidazólico. Para uso oral, há outros medicamentos mais potentes e menos hepatotóxicos. Não usar em dermatofitoses devido à toxicidade maior que outras drogas eficazes.",
      
      dosageByAge: {
        children: {
          title: "Crianças > 2 anos",
          groups: [
            {
              condition: "Dose usual",
              doses: [
                "3 a 7 mg/kg/dia, 1 vez ao dia",
                "Dose máxima: 400 mg/dia",
                "< 20 kg: 50 mg/dia",
                "20–40 kg: 100 mg/dia",
                "> 40 kg: 200 mg/dia"
              ]
            },
            {
              condition: "Blastomicose, histoplasmose, candidíase sistêmica",
              doses: ["3 a 15 mg/kg/dia, por 3 a 6 semanas"]
            },
            {
              condition: "Paracoccidioidomicose",
              doses: ["3 a 8 mg/kg/dia, por 6 meses (iniciar com doses baixas)"]
            },
            {
              condition: "Profilaxia de candidíase na AIDS",
              doses: ["5 a 10 mg/kg/dia, por 2 meses", "Máximo: 400 mg/dia"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual",
              doses: ["200 mg/dose, 1 vez ao dia", "Em casos graves: 400 mg/dia"]
            },
            {
              condition: "Candidíase mucocutânea crônica",
              doses: ["400 mg/dia, por 3 a 9 meses"]
            },
            {
              condition: "Blastomicose",
              doses: ["Iniciar 200 mg/dia, aumentar para 400 mg/dia se preciso", "Por 6 meses ou mais"]
            },
            {
              condition: "Candidíase orofaríngea e esofágica",
              doses: ["200 a 400 mg/dia, por 14 dias"]
            },
            {
              condition: "Candidíase vaginal",
              doses: ["200 a 400 mg/dia, por 5 dias"]
            },
            {
              condition: "Histoplasmose",
              doses: ["400 mg/dia, por 6 meses (até 12 meses na forma cavitária)"]
            },
            {
              condition: "Paracoccidioidomicose",
              doses: ["200 a 400 mg/dia, por 6 a 18 meses"]
            }
          ]
        }
      },
      
      orientation: "Por via oral, absorvido melhor com sucos ácidos ou refrigerantes de cola perto das refeições.",
      
      renalAdjustment: "Não exige ajuste",
      
      sideEffects: [
        "Cefaleia, tontura, insônia, nervosismo, parestesia",
        "Febre, hipotensão ortostática, edema periférico",
        "Náusea, vômito, dor abdominal, diarreia, anorexia",
        "A pior entre os antifúngicos azólicos para GI",
        "Arritmia cardíaca, prolongamento QT, torsades de pointes",
        "Urticária, erupção cutânea, pele seca, anafilaxia",
        "Hemólise, leucopenia, trombocitopenia",
        "Aumento de transaminases, hepatotoxicidade",
        "Doses altas: deficiência de testosterona, redução libido, impotência, oligospermia, ginecomastia",
        "Principal risco: hepatotoxicidade em uso > 2 semanas"
      ],
      
      interactions: "NÃO associar com: terfenadina, aripiprazol, lovastatina, domperidona, solifenacina, trazodona, donepezila, meloxicam. Risco de arritmia cardíaca pode ser FATAL.",
      
      contraindications: "Doença hepática, uso concomitante com inibidores do CYP450"
    },
    
    {
      id: "fluconazol",
      name: "Fluconazol",
      category: "antifungicos-azolicos",
      catIcon: "🍄",
      catLabel: "Antifúngicos Azólicos",
      suffix: "Triazólico",
      
      presentations: [
        "Zoltec / Fluconazol — Cápsula 100 mg e 150 mg, Solução injetável 2 mg/mL"
      ],
      
      observation: "Antifúngico triazólico de primeira geração, baixa toxicidade. Eficaz para maioria de Candida albicans, C. tropicalis, C. parapsilosis. Ineficaz para C. krusei e C. glabrata resistentes. Boa penetrabilidade no SNC e vias urinárias. Pouco eficaz em neutropênicos e AIDS. Evitar uso empírico se azólico usado nos últimos 3 meses. Remover cateter se sepse fúngica relacionada a cateter.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual oral ou EV",
              doses: [
                "Inicial: 6 a 12 mg/kg/dose",
                "Manutenção: 3 a 12 mg/kg/dia",
                "Dose máxima: 600 mg/dia"
              ]
            },
            {
              condition: "Candidíase orofaríngea e esofágica",
              doses: ["3 mg/kg/dia, por 1 a 14 dias"]
            },
            {
              condition: "Candidíase sistêmica",
              doses: ["EV: 12 mg/kg/dia", "Máximo: 600 mg/dia"]
            },
            {
              condition: "Coccidioidomicose sistêmica e meningite",
              doses: ["5 a 6 mg/kg/dose, 2 vezes ao dia", "Máximo: 400 mg/dia"]
            },
            {
              condition: "Sepse fúngica",
              doses: ["12 mg/kg/dia"]
            },
            {
              condition: "Meningite criptocócica",
              doses: ["5 a 6 mg/kg/dose, 2 vezes ao dia", "Máximo: 800 mg/dia", "Depois 6 mg/kg/dia por 6 a 12 meses"]
            },
            {
              condition: "Profilaxia de histoplasmose",
              doses: ["3 a 6 mg/kg/dia", "Máximo: 200 mg/dia"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual oral ou EV",
              doses: [
                "150 mg/dose, 1 vez por semana",
                "Em casos graves: até 800 mg/dia",
                "Pode dobrar a primeira dose"
              ]
            },
            {
              condition: "Candidíase orofaríngea moderada a grave",
              doses: ["Oral: 100 a 200 mg/dia, por 7 a 14 dias"]
            },
            {
              condition: "Candidíase esofágica",
              doses: ["200 a 400 mg/dia, por 14 dias após melhora (ou 7 a 14 dias)"]
            },
            {
              condition: "Candidíase vaginal",
              doses: ["150 mg em dose única"]
            },
            {
              condition: "Casos resistentes ou recorrentes",
              doses: ["150 mg/dia, por 5 a 10 dias", "Depois profilaxia com 150 mg/semana por 6 meses"]
            },
            {
              condition: "Candidíase sistêmica",
              doses: ["Ataque: 800 mg/dose EV, depois 400 mg/dia", "Por até 2 semanas após melhora clínica"]
            },
            {
              condition: "Endocardite, osteomielite, artrite ou endoftalmite por Candida",
              doses: ["Após anfotericina B: 400 mg/dia por 6 a 12 meses", "Pode necessitar 800 mg/dia"]
            },
            {
              condition: "Cistite por Candida",
              doses: ["200 mg/dia por 14 dias", "Primeira dose dobrada"]
            },
            {
              condition: "Coccidioidomicose sistêmica e meningite",
              doses: ["400 a 800 mg/dia", "Pode chegar a 1000 mg/dia em formas graves"]
            },
            {
              condition: "Coccidioidomicose pulmonar",
              doses: ["400 mg/dia, por 3 a 12 meses"]
            },
            {
              condition: "Meningite criptocócica",
              doses: ["400 a 800 mg/dia, por 8 semanas na consolidação", "Depois 200 mg/dia na manutenção"]
            },
            {
              condition: "Criptococose",
              doses: ["400 mg/dia, por até 12 meses"]
            },
            {
              condition: "HIV — supressão",
              doses: ["200 mg/dia (interromper se CD4 > 100/mm³)"]
            },
            {
              condition: "Histoplasmose",
              doses: ["600 mg 1º dia, depois 400 mg/dia", "Manutenção: 400 mg/dia"]
            },
            {
              condition: "Esporotricose cutânea ou linfocutânea",
              doses: ["400 a 800 mg/dia, por 3 a 6 meses"]
            },
            {
              condition: "Micose de unhas",
              doses: ["150 a 300 mg/dose, 1 vez por semana, por 3 a 6 semanas"]
            },
            {
              condition: "Tinha do couro cabeludo",
              doses: ["150 mg/dose, 1 vez por semana, por 8 a 12 semanas"]
            }
          ]
        }
      },
      
      preparation: "EV: infundir devagar (1 hora para cada 200 mg). Máxima concentração: 2 mg/mL. Velocidade máxima: 200 mg/hora. Não infundir se solução ficar turva ou precipitar.",
      
      renalAdjustment: [
        "ClCr 10–50 mL/min: 50% da dose",
        "ClCr < 10 mL/min: 50% da dose a cada 48 h",
        "Hemodiálise: dose normal após cada sessão"
      ],
      
      sideEffects: [
        "Cefaleia, convulsões, tontura",
        "Náusea, vômito, dor abdominal, diarreia, flatulência, alteração do paladar",
        "Dermatite, erupção cutânea",
        "Síndrome de Stevens-Johnson, alopecia (couro cabeludo e púbica)",
        "Hepatotoxicidade, hepatite, colestase",
        "Aumento de enzimas hepáticas, eosinofilia",
        "Trombocitopenia, leucopenia, hipopotassemia, dislipidemia",
        "Anafilaxia",
        "Malformação fetal em altas doses (≥ 400 mg)",
        "Azólicos podem aumentar QTc, sobretudo em dose alta com outras drogas"
      ],
      
      interactions: "Evitar com: artemeter, clopidogrel, pimozida, tioridazina, quinazina.",
      
      contraindications: "Disfunção hepática. Dosar transaminases, fosfatase alcalina e função renal periodicamente em tratamento prolongado."
    },
    
    {
      id: "miconazol",
      name: "Miconazol",
      category: "antifungicos-azolicos",
      catIcon: "🍄",
      catLabel: "Antifúngicos Azólicos",
      suffix: "Imidazólico",
      
      presentations: [
        "Daktarin oral gel — Gel oral 20 mg/g"
      ],
      
      observation: "Antifúngico imidazólico para Candida albicans. Primeira escolha em lesões localizadas como glossite romboidal mediana e queilite angular.",
      
      dosageByAge: {
        children: {
          title: "Adultos e crianças > 6 meses",
          groups: [
            {
              condition: "Candidíase orofaríngea",
              doses: [
                "Aplicar pequena quantidade no local afetado",
                "4 vezes ao dia, por 3 a 7 dias após desaparecimento dos sintomas"
              ]
            }
          ]
        }
      },
      
      orientation: "Aplicar após refeição e após escovação dos dentes. Pode ser aplicado com dedo ou cotonete. Orientar para manter gel na boca o maior tempo possível sem engolir. NÃO comer, beber ou lavar boca por pelo menos 30 minutos após aplicação. Higiene comedida, principalmente em crianças pequenas.",
      
      sideEffects: {
        local: [
          "Glossalgia, desconforto, dor, prurido, ardor, edema"
        ],
        systemic: [
          "Cefaleia, fadiga, diarreia",
          "Náusea, vômito, boca seca",
          "Alteração ou perda do paladar"
        ]
      }
    }
  ]
};