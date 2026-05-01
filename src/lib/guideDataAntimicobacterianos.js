export const ANTIMICOBACTERIANOS_CATEGORY = {
  id: "antimicobacterianos",
  label: "Antimicobacterianos",
  icon: "🦠",
  color: "orange",
  drugs: [
    {
      id: "estreptomicina",
      name: "Estreptomicina — S",
      category: "antimicobacterianos",
      catIcon: "🦠",
      catLabel: "Antimicobacterianos",
      suffix: "Aminoglicosídeo",
      
      presentations: [
        "Estreptomicina — Frasco-ampola 200 mg/mL e 1000 mg"
      ],
      
      observation: "Aminoglicosídeo de primeira linha para tuberculose. Não penetra bem no SNC. Se o paciente já tomou estreptomicina antes, substituir por amicacina.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual",
              doses: ["20 a 40 mg/kg/dia", "Máximo: 1 g/dose e 2 g/dia"]
            },
            {
              condition: "Tuberculose",
              doses: ["15 a 20 mg/kg/dia, 1 vez ao dia"]
            },
            {
              condition: "Endocardite (alternativa à gentamicina)",
              doses: ["20 a 30 mg/kg/dia, dividido em 2 doses"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual IM",
              doses: ["15 a 30 mg/kg/dia, dividido em 1 a 2 doses"]
            },
            {
              condition: "Tuberculose",
              doses: ["15 mg/kg/dia"]
            },
            {
              condition: "Máximo",
              doses: ["1 g/dia em idosos"]
            },
            {
              condition: "Endocardite",
              doses: ["2 g/dia, dividido em 2 doses, por 2 semanas", "Depois 1 g/dia por 4 semanas"]
            },
            {
              condition: "Brucelose",
              doses: ["500 mg/dose, 2 vezes ao dia, por 14 a 21 dias (associar doxiciclina)"]
            }
          ]
        }
      },
      
      renalAdjustment: [
        "ClCr 10–50 mL/min: 1 dose a cada 24–72 h",
        "ClCr < 10 mL/min: 1 dose a cada 72–96 h"
      ],
      
      sideEffects: [
        "Vômito, anorexia, náusea, dor abdominal",
        "Cefaleia, confusão",
        "Hiperuricemia",
        "Alergia, erupção cutânea, anafilaxia",
        "Neurite óptica (SUSPENDER se ocorrer)"
      ]
    },
    
    {
      id: "etambutol",
      name: "Etambutol — E",
      category: "antimicobacterianos",
      catIcon: "🦠",
      catLabel: "Antimicobacterianos",
      suffix: "Tuberculostático",
      
      presentations: [
        "Etambutol — Comprimido revestido 400 mg, Solução oral 125 mg/5 mL"
      ],
      
      observation: "Tuberculostático usado na meningite.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["25 mg/kg/dia em associação"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["1200 mg/dia"]
            },
            {
              condition: "Micobactéria atípica",
              doses: ["15 mg/kg/dia associado à claritromicina e rifampicina ou isoniazida"]
            }
          ]
        }
      },
      
      orientation: "Tomar todas as drogas juntas em dose única diária sob supervisão se possível. Associar piridoxina se houver risco de neuropatia.",
      
      renalAdjustment: [
        "ClCr 10–29 mL/min: 15 a 25 mg/kg a cada 36 h",
        "ClCr < 10 mL/min: 15 a 25 mg/kg a cada 48 h"
      ],
      
      sideEffects: [
        "Vômito, anorexia, náusea, dor abdominal",
        "Cefaleia, confusão",
        "Hiperuricemia",
        "Alergia, erupção cutânea, anafilaxia",
        "Neurite óptica (SUSPENDER se ocorrer)"
      ]
    },
    
    {
      id: "isoniazida",
      name: "Isoniazida — H",
      category: "antimicobacterianos",
      catIcon: "🦠",
      catLabel: "Antimicobacterianos",
      suffix: "Tuberculostático",
      
      presentations: [
        "Isoniazida — Comprimido 100 mg"
      ],
      
      observation: "Tuberculostático muito eficaz e menos tóxico. Único usado isoladamente nas fases de consolidação do tratamento.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["7 a 15 mg/kg/dia", "Máximo: 300 mg/dia"]
            },
            {
              condition: "Tuberculose latente",
              doses: ["10 a 15 mg/kg/dia ou 20 a 40 mg/kg, 2 vezes por semana, por 9 meses", "Máximo: 300 mg/dia"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["10 mg/kg/dia", "Máximo: 300 mg/dia"]
            },
            {
              condition: "Tuberculose latente",
              doses: ["5–10 mg/kg/dia, por 9 meses", "Máximo: 300 mg/dia"]
            },
            {
              condition: "Micobactéria atípica",
              doses: ["5 mg/kg/dia, associada a etambutol e rifampicina"]
            }
          ]
        }
      },
      
      orientation: "Alertar para retornar se houver sinais de hepatite.",
      
      renalAdjustment: "Insuficiência renal: não exige ajuste. Hemodialisável: 50–100%",
      
      sideEffects: [
        "Hepatite (raramente fatal)",
        "Fadiga, sonolência, fraqueza, anorexia, mal-estar",
        "Náusea, vômito, hemólise",
        "Deficiência de piridoxina",
        "Ginecomastia, acidose, febre, icterícia, convulsão, neurite",
        "Hepatotoxicidade (SUSPENDER se importante)"
      ]
    },
    
    {
      id: "pirazinamida",
      name: "Pirazinamida — Z",
      category: "antimicobacterianos",
      catIcon: "🦠",
      catLabel: "Antimicobacterianos",
      suffix: "Tuberculostático",
      
      presentations: [
        "Pirazinamida — Comprimido 500 mg, Suspensão oral 150 mg/5 mL"
      ],
      
      observation: "Tuberculostático bactericida, com ação intracelular para uso em terapia combinada.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["25 a 35 mg/kg/dia", "Máximo: 2 g/dia", "Usada nos primeiros 2 meses"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["1000 a 2000 mg/dia"]
            },
            {
              condition: "Quimioprofilaxia na AIDS",
              doses: ["300 mg/dia"]
            }
          ]
        }
      },
      
      orientation: "Tomar as drogas juntas em dose única diária.",
      
      renalAdjustment: [
        "ClCr < 10 mL/min: 1 dose 3 vezes por semana"
      ],
      
      sideEffects: [
        "Hepatotoxicidade, dermatomegalia, icterícia, hepatite fulminante",
        "Nefrite intersticial, hiperuricemia, porfiria",
        "Febre, disúria, trombocitopenia",
        "Anorexia, náusea, vômito, mal-estar",
        "Artralgia, mialgia"
      ]
    },
    
    {
      id: "rifampicina",
      name: "Rifampicina — R",
      category: "antimicobacterianos",
      catIcon: "🦠",
      catLabel: "Antimicobacterianos",
      suffix: "Tuberculostático",
      
      presentations: [
        "Rifaldin / Rifampicina — Cápsula 300 mg, Suspensão oral 100 mg/5 mL",
        "Combinações: Rifampicina + Isoniazida + Pirazinamida + Etambutol (150+75+400+275 mg)",
        "Combinações: Rifampicina + Isoniazida (150+75 mg e 300+200 mg)"
      ],
      
      observation: "Reservada para tuberculostático e profilaxia de contato de meningite. Eficaz contra M. leprae, micobactérias atípicas, vários Gram-positivos e Gram-negativos. Útil em associação em infecções envolvendo próteses.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual",
              doses: ["10 a 15 mg/kg/dia, 1 a 2 vezes ao dia", "Máximo: 600 mg/dia"]
            },
            {
              condition: "Tuberculose",
              doses: ["10 a 20 mg/kg/dia"]
            },
            {
              condition: "Endocardite bacteriana / prótese valvar",
              doses: ["15 a 20 mg/kg/dia, associado a gentamicina ou vancomicina", "Máximo: 900 mg/dia"]
            },
            {
              condition: "Hanseníase",
              doses: ["10 mg/kg/dose, 1 vez por mês", "Após 1 mês, usar como dose plena"]
            },
            {
              condition: "Profilaxia de meningite meningocócica ou Haemophilus B",
              doses: ["Meningocócica: 20 mg/kg/dia, 2 vezes ao dia", "Haemophilus B: 20 mg/kg/dia, 1 vez ao dia, por 4 dias", "Em < 1 mês: usar metade das doses"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Tuberculose",
              doses: ["450 a 600 mg/dia"]
            },
            {
              condition: "Meningococo",
              doses: ["600 mg/dose, 2 vezes ao dia, por 2 dias"]
            },
            {
              condition: "Hanseníase",
              doses: ["600 mg/dose mensal, descanso ou associada"]
            },
            {
              condition: "Pneumonia",
              doses: ["10 mg/kg/dia"]
            },
            {
              condition: "Prurido intenso por colestase",
              doses: ["150 a 300 mg/dose, 1 a 2 vezes ao dia"]
            },
            {
              condition: "Profilaxia de meningite",
              doses: ["600 mg/dose a cada 24 h, por 4 dias (Haemophilus)", "A cada 12 h, por 2 dias (meningococo)"]
            },
            {
              condition: "Associada em endocardite ou bactérias multirresistentes",
              doses: ["300 mg/dose, por 6 semanas"]
            }
          ]
        }
      },
      
      orientation: "Todas as drogas devem ser tomadas juntas em dose única diária. Tomar longe das refeições.",
      
      sideEffects: [
        "Anorexia, náusea, vômito, cólica, pancreatite",
        "Mal-estar, dor abdominal, dor muscular, dor articular, fraqueza, cefaleia",
        "Alteração de comportamento",
        "Leucopenia, eosinofilia",
        "Erupção cutânea, eritrodermia difusa, edema, urticária",
        "Conjuntivite, alteração de visão",
        "Hepatite, icterícia (SUSPENDER em qualquer sinal)",
        "Cor avermelhada na urina, suor, fezes, lácrimas, escarro, lentes de contato",
        "Checar hemograma e função hepática periodicamente"
      ],
      
      interactions: "Reduz efeito de contraceptivos e varfarina, exigindo ajuste. Evitar em gestantes."
    }
  ]
};