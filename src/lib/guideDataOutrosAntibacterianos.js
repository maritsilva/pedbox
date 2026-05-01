export const OUTROS_ANTIBACTERIANOS_CATEGORY = {
  id: 'outros-antibacterianos',
  name: 'Outros Antibacterianos',
  icon: '💉',
  drugs: [
    {
      id: 'colistina',
      name: 'Colistina / Polimixina E',
      suffix: '(Colistimetato sódico)',
      apresentacao: ['Frasco-ampola: 150 mg', 'Frasco-ampola: 1.000.000 UI'],
      observacao: 'Polimixina para infecção Gram-negativos multirresistentes. Não usar como monoterapia; associar carbapenêmicos para retardar resistência. Equivalência: 1 mg colistina base ≈ 30.000 UI colistimetato',
      dosePediatrica: {
        descricao: '2,5 a 5 mg/kg/dia dividido em 2 a 4 doses',
        detalhes: ['Intratecal meningite: 1 a 4,2 mg/dia', 'Fibrose cística EV: 3 a 5 mg/kg/dia dividido em 3 doses. Máximo: 100 mg/dose', 'Pneumonia inalatória: 30 a 150 mg ou 900.000 a 4,5 milhões UI/dose 2 vezes ao dia']
      },
      doseAdulta: {
        descricao: '2,5 a 5 mg/kg/dia dividido em 2 a 4 doses. Evitar > 300 mg/dia',
        detalhes: ['Casos graves: ataque 300 mg EV, manutenção 150 mg/dose 2 vezes ao dia', 'Meningite intratecal: 4,2 mg/dia', 'Fibrose cística EV: 3 mg/kg/dia dividido em 3 doses', 'P. aeruginosa/Acinetobacter: ataque 5 mg/kg, após 24h manutenção + uso inalatório']
      },
      administracao: 'Reconstituir em 2 mL ABD, diluir em SF ou glicosado, infundir em 30 min ou 3 h a cada 8 h',
      ajusteRenal: [
        'ClCr 50–80 mL/min: 2,5–3,5 mg/kg/dia ÷ 2 doses',
        'ClCr 30–50 mL/min: 2,5 mg/kg/dia ÷ 1 a 2 doses',
        'ClCr 10–29 mL/min: 1,5 mg/kg a cada 36 h',
      ],
      sensibilidade: {
        sensivel: ['P. aeruginosa multirresistente', 'A. baumannii', 'Klebsiella', 'E. coli resistentes', 'Haemophilus', 'B. pertussis', 'Citrobacter'],
        resistente: ['Proteus', 'Burkholderia', 'Serratia', 'Neisseria'],
      },
      efeitosColaterais: ['Parestesia perioral', 'Formigamentos', 'Vertigem', 'Ataxia', 'Confusão', 'Convulsão', 'Nefrotoxicidade', 'Miastenia'],
    },
    {
      id: 'daptomicina',
      name: 'Daptomicina',
      suffix: '(Cubicin)',
      apresentacao: ['Frasco-ampola: 500 mg'],
      observacao: 'Lipopeptídeo para Staphylococcus resistentes e enterococo/Streptococcus resistentes à vancomicina. Não usar em pneumonias (inativada por surfactante)',
      dosePediatrica: {
        descricao: '4 a 6 mg/kg/dia',
        detalhes: ['Endocardite estafilococo resistente: < 6 anos: 10 mg/kg/dia; ≥ 6 anos: 6 mg/kg/dia', 'Infecções pele: 7 a 10 mg/kg/dia por 14 dias']
      },
      doseAdulta: {
        descricao: 'Infecções pele: 4 mg/kg/dia por 7 a 14 dias',
        detalhes: ['Endocardite/bacteremia estafilocócica: 8 a 10 mg/kg/dia por 1 a 6 semanas. Máximo: 12 mg/kg/dia', 'Osteomielite: 6 a 8 mg/kg/dia por 6 semanas', 'Artrite séptica: 6 mg/kg/dia por 3 a 4 semanas']
      },
      administracao: 'Infundir em 2 a 30 min. Interromper se miopatia ou CPK > 5x normal. Refrigerar 2-8°C',
      ajusteRenal: ['ClCr < 30 mL/min ou diálise: 1 dose a cada 48 h'],
      efeitosColaterais: ['Cefaleia', 'Ansiedade', 'Tremor', 'Tontura', 'Diarreia', 'Hipotensão', 'Aumento CPK', 'Proteinúria'],
      interacoes: 'Suspender estatinas durante uso',
    },
    {
      id: 'fosfomicina',
      name: 'Fosfomicina',
      suffix: '(Monuril)',
      apresentacao: ['Sachê: 3 g'],
      observacao: 'Único do grupo. Usado em infecção urinária de adultos',
      dosePediatrica: {
        descricao: '100 a 400 mg/kg/dia dividido em 2 a 4 doses (parenteral em multirresistentes)'
      },
      doseAdulta: {
        descricao: 'Infecção urinária/cistite/uretrite',
        detalhes: ['Mulher: 3 g dose única', 'Homem: 3 g/dose a cada 2 a 3 dias por 3 doses (21 dias prostatite)']
      },
      sensibilidade: {
        sensivel: ['E. coli inclusive resistente', 'Enterobactérias', 'Pseudomonas', 'S. aureus', 'Pneumococo'],
        resistente: ['Acinetobacter', 'B. fragilis', 'Anaeróbios'],
      },
      efeitosColaterais: ['Cefaleia', 'Tontura', 'Diarreia', 'Náusea', 'Vômito', 'Hipopotassemia'],
      interacoes: 'Evitar com metoclopramida',
    },
    {
      id: 'metronidazol',
      name: 'Metronidazol',
      suffix: '(Flagyl)',
      apresentacao: ['Comprimido: 250 mg', 'Comprimido: 400 mg', 'Suspensão: 200 mg/5 mL', 'Solução injetável: 5 mg/mL'],
      observacao: 'Imidazólico anaerobicida primeira escolha. Amebicida, giardicida, tricomonocida. Boa concentração em líquor e abscessos. Muito eficaz por via oral',
      dosePediatrica: {
        descricao: 'Anaerobicida: 30 a 50 mg/kg/dia ÷ 3 doses. Máximo: 2250 mg/dia',
        detalhes: ['Amebíase/giardíase: 35 a 50 mg/kg/dia ÷ 3 por 5 a 10 dias. Máximo: 750 mg/dose', 'Giardíase: 15 a 30 mg/kg/dia ÷ 2 a 3 por 7 a 10 dias. Máximo: 250 mg/dose', 'H. pylori: 20 mg/kg/dia ÷ 2 por 10 a 14 dias em esquema']
      },
      doseAdulta: {
        descricao: 'Anaerobicida: 7,5 mg/kg/dose a cada 4h ou 500 mg a cada 8h. Casos graves: ataque 15 mg/kg. Máximo: 4000 mg/dia',
        detalhes: ['Amebíase: 500 a 750 mg/dose 3x ao dia por 10 dias', 'C. difficile: 500 mg/dose 3x ao dia por 14 dias', 'Giardíase: 250 a 500 mg/dose 3x ao dia por 5 a 10 dias', 'Tricomoníase: 2 g dose única ou 250 mg 3x ao dia por 7 dias', 'Vaginose: 500 mg/dose 2x ao dia por 7 dias']
      },
      administracao: 'EV: < 8 mg/mL em SF ou SGI. Máxima infusão: 5 mL/min. Não ingerir álcool até 4 dias após',
      ajusteRenal: ['ClCr < 10 mL/min: 50% dose 4x ao dia'],
      sensibilidade: {
        sensivel: ['Bacteroides', 'Peptococcus', 'Peptostreptococcus', 'Clostridium difficile', 'Prevotella', 'Fusobacterium', 'H. pylori'],
        resistente: ['Todas bactérias aeróbicas', 'Eubacterium', 'Propionibacterium'],
      },
      efeitosColaterais: ['Gosto metálico', 'Náusea', 'Vômito', 'Diarreia', 'Urina vermelho-escura', 'Neuropatia periférica em dose alta prolongada'],
      interacoes: 'Álcool (efeito dissulfiram-like: vômitos intensos, convulsão)',
    },
    {
      id: 'linezolida',
      name: 'Linezolida',
      suffix: '(Zyvox)',
      apresentacao: ['Comprimido: 600 mg', 'Solução injetável: 2 mg/mL'],
      observacao: 'Oxazolidinona. Única opção oral para Staphylococcus resistentes à oxacilina. Equivalência oral/venosa boa. Bacteriostático',
      dosePediatrica: {
        descricao: '30 mg/kg/dia ÷ 3. Máximo: 600 mg/dose',
        detalhes: ['Fibrose cística EV: 30 mg/kg/dia ÷ 3 até 2 semanas', 'Endocardite enterococo resistente EV/oral: 30 mg/kg/dia ÷ 3 por 8 semanas', 'TB multirresistente: 20 a 24 mg/kg/dia ÷ 2']
      },
      doseAdulta: {
        descricao: '600 mg/dose 2x ao dia por 10 a 14 dias',
        detalhes: ['Pneumonia/infecções graves: 600 mg/dose 2x ao dia por 7 a 21 dias', 'TB multirresistente: 600 mg/dose 1 a 2x ao dia até 4 meses']
      },
      administracao: 'EV: 2 mg/mL correr em 30 a 120 min. Nível sérico > 20 mg/L aumenta toxicidade',
      sensibilidade: {
        sensivel: ['Todos Gram-positivos', 'Staphylococcus resistentes', 'Streptococcus A,B,C,G', 'Pneumococo resistentes', 'Enterococo resistente vancomicina'],
        resistente: ['Todos Gram-negativos'],
      },
      efeitosColaterais: ['Tontura', 'Insônia', 'Náusea', 'Diarreia', 'Colite', 'Neuropatia', 'Neurite óptica', 'Monitorar hemograma semanalmente'],
      interacoes: 'Evitar com inibidor recaptação serotonina',
    },
    {
      id: 'nitrofurantoina',
      name: 'Nitrofurantoína',
      suffix: '(Macrodantina)',
      apresentacao: ['Cápsula: 100 mg'],
      observacao: 'Derivado nitrofurânico. Antibacteriano restrito às infecções urinárias, sobretudo ITU baixa',
      dosePediatrica: {
        descricao: '5 a 7 mg/kg/dia ÷ 4 doses por 3 a 7 dias',
        tabela: {
          '7 a 10 kg': '12,5 mg/dose x 4',
          '11 a 20 kg': '25 mg/dose x 4',
          '21 a 30 kg': '37,5 mg/dose x 4',
          '31 a 40 kg': '50 mg/dose x 4',
          '> 40 kg': '50 a 100 mg/dose x 4',
        },
        detalhes: ['Máximo: 100 mg/dose ou 400 mg/dia', 'Profilaxia: 1 a 2 mg/kg/dose 1x ao dia. Máximo: 100 mg/dia']
      },
      doseAdulta: {
        descricao: '50 a 100 mg/dose 4x ao dia por 3 a 7 dias',
        detalhes: ['Profilaxia ITU recorrente: 50 a 100 mg/dose 1x ao deitar']
      },
      orientacoes: 'Para crianças pequenas formular suspensão 25 mg/5 mL. Não funciona com ClCr < 40 mL/min',
      ajusteRenal: ['ClCr < 60 mL/min: uso contraindicado'],
      sensibilidade: {
        sensivel: ['E. coli', 'Klebsiella', 'Enterobacter', 'Enterococcus'],
        resistente: ['S. aureus', 'Serratia', 'Pseudomonas'],
      },
      efeitosColaterais: ['Tontura', 'Cefaleia', 'Neuropatia', 'Náusea', 'Pneumonite', 'Fibrose pulmonar intersticial'],
      contraindicacoes: ['Neonatos', 'Gestantes termo', 'Anúria/oligúria'],
    }
  ]
};