export const OUTROS_ANTIBACTERIANOS_CATEGORY = {
  id: "outros-antibacterianos",
  label: "Outros Antibacterianos",
  icon: "🧬",
  color: "purple",
  drugs: [
    {
      id: "colistina",
      name: "Colistina / Polimixina E",
      category: "outros-antibacterianos",
      catIcon: "🧬",
      catLabel: "Outros Antibacterianos",
      suffix: "Polimixina",
      
      presentations: [
        "Colis-tek / Colomycin — Frasco-ampola 150 mg e 1.000.000 UI"
      ],
      
      observation: "Polimixina usada na infecção por Gram-negativos multirresistentes. Não usar como monoterapia; associar carbapenêmicos para retardar resistência. Nos alérgicos a carbapenêmicos, associar rifampicina. Equivalência: 1 mg de colistina base ≈ 30.000 UI de colistimetato.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual",
              doses: ["2,5 a 5 mg/kg/dia, dividido em 2 a 4 doses"]
            },
            {
              condition: "Intratecal na meningite",
              doses: ["1 a 4,2 mg/dia"]
            },
            {
              condition: "Fibrose cística EV",
              doses: ["3 a 5 mg/kg/dia, dividido em 3 doses", "Máximo: 100 mg/dose"]
            },
            {
              condition: "Pneumonia inalatória",
              doses: ["30 a 150 mg ou 900.000 a 4,5 milhões UI/dose, 2 vezes ao dia"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual EV ou IM",
              doses: ["2,5 a 5 mg/kg/dia, dividido em 2 a 4 doses"]
            },
            {
              condition: "Casos graves",
              doses: ["EV: ataque de 300 mg", "Manutenção: 150 mg/dose, 2 vezes ao dia"]
            },
            {
              condition: "Intratecal na meningite",
              doses: ["4,2 mg/dia"]
            },
            {
              condition: "Pneumonia por P. aeruginosa / Acinetobacter",
              doses: ["EV: ataque de 5 mg/kg", "Após 24 h, iniciar manutenção", "Associar uso inalatório"]
            }
          ]
        }
      },
      
      administration: "Para uso EV: reconstituir frasco em 2 mL de ABD, diluir em SF ou SGI, infundir em 30 minutos ou infuso em 3 h a cada 8 h. Evitar doses > 300 mg/dia em adultos.",
      
      renalAdjustment: [
        "ClCr 50–80 mL/min: 2,5–3,5 mg/kg/dia, dividido em 2 doses",
        "ClCr 30–50 mL/min: 2,5 mg/kg/dia, dividido em 1 a 2 doses",
        "ClCr 10–29 mL/min: 1,5 mg/kg a cada 36 h"
      ],
      
      sensible: [
        "Cepas multirresistentes de P. aeruginosa",
        "A. baumannii",
        "Klebsiella",
        "E. coli resistentes a todos os antimicrobianos",
        "Enterobacter, Salmonella, Shigella",
        "Haemophilus, B. pertussis, Pasteurella",
        "Citrobacter, Acinetobacter"
      ],
      
      resistant: [
        "Proteus",
        "Burkholderia",
        "Serratia",
        "Neisseria",
        "Providencia",
        "Moraxella",
        "Morganella"
      ],
      
      sideEffects: [
        "Neurotoxicidade reversível: parestesia perioral, formigamentos, vertigem, ataxia, confusão, convulsão",
        "Disartria, fala arrastada, sinais meníngeos, miastenia, paralisia, apneia",
        "Prurido, exantema, urticária, eosinofilia, leucopenia, broncoespasmo, tosse",
        "Nefrotoxicidade: insuficiência renal aguda (vigiar função renal)",
        "Potencia efeito de curares, sobretudo se associada a aminoglicosídeo"
      ]
    },
    
    {
      id: "daptomicina",
      name: "Daptomicina",
      category: "outros-antibacterianos",
      catIcon: "🧬",
      catLabel: "Outros Antibacterianos",
      suffix: "Lipopeptídeo",
      
      presentations: [
        "Cubicin — Frasco-ampola 500 mg"
      ],
      
      observation: "Lipopeptídeo para Staphylococcus resistentes à oxacilina ou linezolida, enterococo ou Streptococcus resistentes à vancomicina. Usado em pacientes que não toleram vancomicina.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose de referência",
              doses: ["4 a 6 mg/kg/dia"]
            },
            {
              condition: "Endocardite por estafilococos resistente",
              doses: ["< 6 anos: 10 mg/kg/dia", "≥ 6 anos: 6 mg/kg/dia"]
            },
            {
              condition: "Infecções de pele",
              doses: ["7 a 10 mg/kg/dia por 14 dias"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Infecções de pele, subcutâneo, queimadura, ferida cirúrgica",
              doses: ["4 mg/kg/dia por 7 a 14 dias"]
            },
            {
              condition: "Endocardite / bacteremia estafilocócica",
              doses: ["8 a 10 mg/kg/dia por 1 a 6 semanas", "Dose máxima: 12 mg/kg/dia"]
            },
            {
              condition: "Osteomielite",
              doses: ["6 a 8 mg/kg/dia por 6 semanas"]
            },
            {
              condition: "Artrite séptica",
              doses: ["6 mg/kg/dia por 3 a 4 semanas"]
            }
          ]
        }
      },
      
      administration: "Infundir em 2 a 30 minutos. Interromper se surgirem sinais de miopatia ou CPK > 5x o normal. Armazenar sob refrigeração entre 2 e 8 ºC.",
      
      renalAdjustment: [
        "ClCr < 30 mL/min ou diálise: 1 dose a cada 48 h"
      ],
      
      sensible: "Todos os Gram-positivos, inclusive estafilococos e enterococos resistentes. Resistente à linezolida e vancomicina.",
      
      resistant: "Não usar em pneumonias (inativada por surfactante). Cepas de Staphylococcus e vancomicina podem se tornar resistentes, retornando sensibilidade a outros antimicrobianos.",
      
      sideEffects: [
        "Cefaleia, ansiedade, fraqueza, tremor, tontura, cansaço",
        "Diarreia, hipotensão, edema, arritmia, flebite",
        "Dispneia, tosse, pneumonite",
        "Náusea, vômito, anemia, trombocitose",
        "Erupção cutânea, prurido, reação local, alergia grave",
        "Eosinofilia pulmonar, aumento de CPK, disfunção renal, proteinúria"
      ],
      
      interactions: "Suspender estatinas durante o uso."
    },
    
    {
      id: "fosfomicina",
      name: "Fosfomicina",
      category: "outros-antibacterianos",
      catIcon: "🧬",
      catLabel: "Outros Antibacterianos",
      suffix: "Antifúngico",
      
      presentations: [
        "Monuril — Sachê 3 g"
      ],
      
      observation: "Único do grupo. Usado em infecção urinária de adultos.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose parenteral em bactérias multirresistentes",
              doses: ["100 a 400 mg/kg/dia, dividido em 2 a 4 doses"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Infecção urinária — cistite, uretrite, pós-operatório",
              doses: ["Mulher: 3 g em dose única", "Homem: 3 g/dose, a cada 2 a 3 dias, por 3 doses (21 dias na prostatite)"]
            }
          ]
        }
      },
      
      sensible: [
        "E. coli (inclusive resistente a alternativas habituais)",
        "Outras enterobactérias",
        "Pseudomonas",
        "S. aureus",
        "Pneumococo",
        "Alguns estreptococos"
      ],
      
      resistant: [
        "Acinetobacter",
        "B. fragilis",
        "Anaeróbios"
      ],
      
      sideEffects: [
        "Cefaleia, tontura, fadiga",
        "Diarreia, náusea, vômito, pirose, dor abdominal",
        "Queimação anal, vaginite, dismenorreia",
        "Erupção cutânea, neutropenia, hipopotassemia"
      ],
      
      interactions: "Evitar associar com metoclopramida."
    },
    
    {
      id: "metronidazol",
      name: "Metronidazol",
      category: "outros-antibacterianos",
      catIcon: "🧬",
      catLabel: "Outros Antibacterianos",
      suffix: "Imidazólico",
      
      presentations: [
        "Flagyl / Metronidazol — Comprimido 250 mg e 400 mg, Suspensão 200 mg/5 mL, Solução injetável 5 mg/mL",
        "Metronidazol genérico — Comprimido 250 e 400 mg, Solução oral 200 mg/5 mL, Solução injetável 5 mg/mL"
      ],
      
      observation: "Imidazólico anaerobicida de primeira escolha. Amebicida, giardicida e tricomonocida. Boa concentração no líquor e em abscessos. Eficaz por via oral. Suspensão oral é de benzoilmetronidazol.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual anaerobicida",
              doses: ["Oral: 30 a 50 mg/kg/dia, dividido em 3 doses (máximo: 2250 mg/dia)", "EV: 22,5 a 40 mg/kg/dia, dividido em 3 doses (máximo: 1500 mg/dia)"]
            },
            {
              condition: "Amebíase, balantidíase, blastocistose",
              doses: ["35 a 50 mg/kg/dia, dividido em 3 doses, por 5 a 10 dias (máximo: 750 mg/dose)"]
            },
            {
              condition: "Giardíase",
              doses: ["Oral: 15 a 30 mg/kg/dia, dividido em 2 a 3 doses, por 7 a 10 dias (máximo: 250 mg/dose)"]
            },
            {
              condition: "Helicobacter pylori",
              doses: ["Oral: 20 mg/kg/dia, dividido em 2 doses, por 10 a 14 dias (associado ao esquema)"]
            },
            {
              condition: "Diarreia por Clostridium difficile",
              doses: ["30 mg/kg/dia, por 10 dias ou mais (máximo: 2 g/dia)"]
            },
            {
              condition: "Tricomoníase",
              doses: ["Oral: 45 mg/kg/dia, dividido em 2 a 3 doses, por 7 dias (máximo: 2 g/dia)"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual anaerobicida",
              doses: ["EV/oral: 7,5 mg/kg/dose a cada 4 h ou 500 mg/dose a cada 8 h", "Casos graves: ataque de 15 mg/kg/dose EV", "Dose máxima: 4000 mg/dia"]
            },
            {
              condition: "Peritonite fecal e apendicite complicada",
              doses: ["EV: 500 mg/dose a cada 6 h (primeira dose dobrada)"]
            },
            {
              condition: "Doença inflamatória pélvica",
              doses: ["500 mg/dose, 2 vezes ao dia, por 14 dias (associar ceftriaxona e doxiciclina)"]
            },
            {
              condition: "Amebíase",
              doses: ["Oral: 500 a 750 mg/dose, 3 vezes ao dia, por 10 dias"]
            },
            {
              condition: "Colite pseudomembranosa por C. difficile",
              doses: ["Oral: 500 mg/dose, 3 vezes ao dia, por 14 dias"]
            },
            {
              condition: "Tricomoníase",
              doses: ["Oral: 2 g em dose única ou 250 mg/dose, 3x ao dia, ou 500 mg/dose, 2x ao dia, por 7 dias"]
            },
            {
              condition: "Vaginose bacteriana",
              doses: ["500 mg/dose, 2 vezes ao dia, por 7 dias"]
            }
          ]
        }
      },
      
      preparation: "EV: diluição < 8 mg/mL em SF ou SGI. Velocidade máxima: 5 mL/minuto ou 0,25 mg/kg/hora.",
      
      renalAdjustment: [
        "ClCr < 10 mL/min: 50% da dose, 4 vezes ao dia",
        "Hemodialisável: 50 a 100%"
      ],
      
      sensible: [
        "Bacteroides spp., B. fragilis",
        "Peptococcus, Peptostreptococcus",
        "Veillonella, Clostridium spp.",
        "Clostridium difficile",
        "Prevotella melaninogenica",
        "Fusobacterium, Gardnerella vaginalis",
        "H. pylori, Campylobacter fetus"
      ],
      
      resistant: [
        "Todas as bactérias aeróbicas Gram-positivas e Gram-negativas",
        "Anaeróbios: Eubacterium, Propionibacterium, Lactobacillus, Actinomyces",
        "Raras cepas de Bacteroides"
      ],
      
      sideEffects: [
        "Cefaleia, tontura, ataxia, confusão, alucinação, insônia, parestesia, neuropatia",
        "Náusea, vômito, anorexia, gosto metálico, estomatite, boca seca",
        "Diarreia, dor abdominal, pancreatite",
        "Flebite, tromboembolismo",
        "Urina vermelho-escura, ardor uretral, dismenorreia, candidíase vaginal",
        "Leucopenia, neutropenia",
        "Efeito dissulfiram-like com álcool (vômitos intensos, congestão, confusão mental)",
        "Dose alta prolongada: neuropatia periférica",
        "Cada grama contém 28 mEq de sódio"
      ],
      
      interactions: "Álcool. Aumenta níveis de ciclosporina, lítio, lidocaína, fenobarbital, carbamazepina, anticoagulantes orais."
    },
    
    {
      id: "linezolida",
      name: "Linezolida",
      category: "outros-antibacterianos",
      catIcon: "🧬",
      catLabel: "Outros Antibacterianos",
      suffix: "Oxazolidinona",
      
      presentations: [
        "Zyvox / Linezolida — Comprimido revestido 600 mg, Solução injetável 2 mg/mL"
      ],
      
      observation: "Oxazolidinona. Única opção oral para Staphylococcus resistentes à oxacilina. Boa equivalência entre via oral e venosa. Bacteriostático para Staphylococcus.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Dose usual",
              doses: ["30 mg/kg/dia, dividido em 3 doses (máximo: 600 mg/dose)"]
            },
            {
              condition: "Fibrose cística",
              doses: ["EV: 30 mg/kg/dia, dividido em 3 doses, por até 2 semanas"]
            },
            {
              condition: "Endocardite por enterococo resistente",
              doses: ["EV/oral: 30 mg/kg/dia, dividido em 3 doses, por 8 semanas"]
            },
            {
              condition: "Tuberculose multirresistente (reforço)",
              doses: ["Oral: 20 a 24 mg/kg/dia, dividido em 2 doses (máximo: 600 mg/dose)"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Dose usual",
              doses: ["EV/oral: 600 mg/dose, 2 vezes ao dia, por 10 a 14 dias"]
            },
            {
              condition: "Pneumonia hospitalar e infecções graves",
              doses: ["600 mg/dose, 2 vezes ao dia, por 7 a 21 dias"]
            },
            {
              condition: "Tuberculose multirresistente (reforço)",
              doses: ["600 mg/dose, 1 a 2 vezes ao dia, por até 4 meses", "Depois reduzir pela metade por até 18 meses"]
            },
            {
              condition: "Endocardite por enterococo resistente",
              doses: ["600 mg/dose, 2 vezes ao dia, por 6 semanas ou mais"]
            }
          ]
        }
      },
      
      administration: "Para uso EV, usar diluição de 2 mg/mL e correr em 30 a 120 minutos. Nível sérico > 20 mg/L aumenta risco de toxicidade.",
      
      renalAdjustment: "Não exige ajuste",
      
      sensible: [
        "Staphylococcus resistentes à oxacilina",
        "Streptococcus A, B, C, G",
        "Pneumococo (inclusive resistentes à penicilina)",
        "Enterococos resistentes à vancomicina",
        "Clostridium (não difficile)",
        "Peptostreptococcus"
      ],
      
      resistant: [
        "Todos os Gram-negativos, exceto ação fraca para:",
        "Haemophilus, Moraxella"
      ],
      
      sideEffects: [
        "Tontura, insônia, parestesia, cefaleia",
        "Náusea, diarreia, vômitos, dor abdominal, colite, constipação",
        "Monilíase, descoloração da língua",
        "Calafrios, febre, flebite, dermatite, erupção cutânea",
        "Hipertensão, trombocitopenia, anemia, leucopenia",
        "Monitorar hemograma cada semana",
        "Neuropatia, neurite óptica",
        "Aumento de transaminases, glicemia, lipase, amilase, bilirrubinas",
        "Acidose lática, língua negra pilosa",
        "Risco de mielossupressão maior em tratamentos > 14 dias ou insuficiência renal"
      ],
      
      interactions: "Evitar com inibidor de recaptação de serotonina."
    },
    
    {
      id: "nitrofurantoina",
      name: "Nitrofurantoína",
      category: "outros-antibacterianos",
      catIcon: "🧬",
      catLabel: "Outros Antibacterianos",
      suffix: "Nitrofurânico",
      
      presentations: [
        "Macrodantina / Nitrofurantoína — Cápsulas 100 mg"
      ],
      
      observation: "Derivado nitrofurânico. Antibacteriano de uso restrito às infecções urinárias. Não funciona com clearance de creatinina < 40 mL/min.",
      
      dosageByAge: {
        children: {
          title: "Crianças",
          groups: [
            {
              condition: "Infecção urinária",
              doses: [
                "5 a 7 mg/kg/dia, dividido em 4 doses, por 3 a 7 dias (com refeições)",
                "7-10 kg: 12,5 mg/dose x 4",
                "11-20 kg: 25 mg/dose x 4",
                "21-30 kg: 37,5 mg/dose x 4",
                "31-40 kg: 50 mg/dose x 4",
                "> 40 kg: 50 a 100 mg/dose x 4",
                "Máximo: 100 mg/dose ou 400 mg/dia"
              ]
            },
            {
              condition: "Profilaxia de infecção urinária",
              doses: ["1 a 2 mg/kg/dose, 1 vez ao dia (máximo: 100 mg/dia)"]
            }
          ]
        },
        adults: {
          title: "Adultos",
          groups: [
            {
              condition: "Infecção urinária baixa",
              doses: ["50 a 100 mg/dose, 4 vezes ao dia, por 3 a 7 dias"]
            },
            {
              condition: "Profilaxia de infecção urinária recorrente",
              doses: ["50 a 100 mg/dose, 1 vez ao dia, ao deitar"]
            }
          ]
        }
      },
      
      sensible: [
        "E. coli",
        "Shigella",
        "Klebsiella",
        "Enterobacter",
        "Salmonella",
        "Enterococcus",
        "Proteus"
      ],
      
      resistant: [
        "S. aureus",
        "Serratia",
        "Proteus (maioria)",
        "Pseudomonas"
      ],
      
      sideEffects: [
        "Tontura, cefaleia, calafrios, febre, vertigem, neuropatia",
        "Alergia, erupção cutânea",
        "Náusea, anorexia, pancreatite, colite, dor abdominal, colestase",
        "Urina escura",
        "Leucopenia, eosinofilia, anemia megaloblástica, trombocitopenia",
        "Pneumonite, fibrose intersticial pulmonar"
      ],
      
      contraindications: [
        "Anúria, oligúria",
        "Gestantes a termo",
        "Menores de 38 semanas",
        "Neonatos"
      ]
    }
  ]
};