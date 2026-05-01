export const ANTIFUNGICOS_AZOLICOS_CATEGORY = {
  id: 'antifungicos-azolicos',
  name: 'Antifúngicos Sistêmicos — Azólicos',
  icon: '🍄',
  drugs: [
    {
      id: 'cetoconazol',
      name: 'Cetoconazol',
      apresentacao: ['Comprimido: 200 mg'],
      observacao: 'Antifúngico imidazólico. Há outras drogas mais potentes e menos hepatotóxicas, mas mais caras. Não usar em dermatofitoses',
      dosePediatrica: {
        titulo: 'Crianças > 2 anos',
        descricao: '3 a 7 mg/kg/dia 1x ao dia. Máximo: 400 mg/dia',
        tabela: {
          '< 20 kg': '50 mg/dia',
          '20–40 kg': '100 mg/dia',
          '> 40 kg': '200 mg/dia',
        },
        detalhes: ['Blastomicose/histoplasmose/candidíase: 3 a 15 mg/kg/dia por 3 a 6 semanas', 'Paracoccidioidomicose: 3 a 8 mg/kg/dia por 6 meses']
      },
      doseAdulta: {
        titulo: 'Adultos',
        descricao: '200 mg/dose 1x ao dia. Graves: 400 mg/dia',
        detalhes: [
          'Candidíase crônica: 400 mg/dia por 3 a 9 meses',
          'Blastomicose: iniciar 200 mg/dia, até 400 mg/dia por 6 meses+',
          'Candidíase orofaríngea/esofágica: 200 a 400 mg/dia por 14 dias',
          'Histoplasmose: 400 mg/dia por 6 meses',
          'Paracoccidioidomicose: 200 a 400 mg/dia por 6 a 18 meses',
          'Pitiríase versicolor: 200 mg/dia por 7 a 10 dias',
        ]
      },
      orientacoes: 'Melhor absorvido com sucos ácidos ou refrigerantes cola próximo refeições',
      efeitosColaterais: [
        'Cefaleia', 'Tontura', 'Náusea', 'Vômito', 'Dor abdominal', 'Diarreia',
        'Arritmia cardíaca', 'Prolongamento QT', 'Aumento transaminases',
        'Hepatotoxicidade (principal risco > 2 semanas)',
        'Doses altas: deficiência testosterona, impotência, ginecomastia',
        'ÚNICO antifúngico com efeito antiandrogênico',
      ],
      interacoes: 'Evitar com terfenadina, aripiprazol, lovastatina, domperidona. Risco cardíaco por prolongamento QT',
      contraindicacoes: ['Doença hepática', 'Uso com inibidores CYP450'],
    },
    {
      id: 'fluconazol',
      name: 'Fluconazol',
      apresentacao: ['Cápsula: 100 mg', 'Cápsula: 150 mg', 'Solução injetável: 2 mg/mL'],
      observacao: 'Antifúngico triazólico primeira geração. Baixa toxicidade vs demais. Ineficaz para Candida krusei e algumas C. glabrata. Boa penetração SNC e vias urinárias',
      dosePediatrica: {
        titulo: 'Crianças',
        descricao: 'Inicial: 6 a 12 mg/kg/dose. Manutenção: 3 a 12 mg/kg/dia. Máximo: 600 mg/dia',
        detalhes: [
          'Candidíase orofaríngea/esofágica: 3 mg/kg/dia por 1 a 14 dias',
          'Candidíase sistêmica: EV 12 mg/kg/dia. Máximo: 600 mg/dia',
          'Coccidioidomicose/meningite: 5 a 6 mg/kg/dose 2x ao dia',
          'Meningite criptocócica: 5 a 6 mg/kg/dose 2x ao dia, máximo 800 mg/dia',
          'Profilaxia histoplasmose: 3 a 6 mg/kg/dia. Máximo: 200 mg/dia',
        ]
      },
      doseAdulta: {
        titulo: 'Adultos',
        descricao: 'Candida: 150 mg/dose 1x semana a 800 mg/dia conforme gravidade',
        detalhes: [
          'Orofaríngea moderada/grave: 100 a 200 mg/dia por 7 a 14 dias',
          'Esofágica: 200 a 400 mg/dia por 14 dias após melhora',
          'Vaginal: 150 mg dose única',
          'Sistêmica: ataque 800 mg, depois 400 mg/dia',
          'Endocardite/osteomielite/artrite: após anfotericina, manter 400 mg/dia por 6 a 12 meses',
          'Meningite criptocócica: 400 a 800 mg/dia por 8 semanas, depois 200 mg/dia manutenção',
          'Coccidioidomicose: 400 a 800 mg/dia, até 1000 mg/dia formas graves',
          'Paracoccidioidomicose imunodeprimido: 600 mg 1º dia, depois 400 mg/dia',
          'Esporotricose: 400 a 800 mg/dia por 3 a 6 meses',
        ]
      },
      preparo: 'EV: 1h para 200 mg. Máxima concentração: 2 mg/mL. Máxima velocidade: 200 mg/h',
      ajusteRenal: [
        'ClCr 10–50 mL/min: 50% dose',
        'ClCr < 10 mL/min: 50% dose a cada 48 h',
        'Hemodiálise: dose normal após sessão',
      ],
      efeitosColaterais: ['Cefaleia', 'Convulsões', 'Tontura', 'Náusea', 'Vômito', 'Dor abdominal', 'Hepatotoxicidade', 'Síndrome Stevens-Johnson'],
      interacoes: 'Evitar com artemeter, clopidogrel, pimozida, tioridazina',
    },
    {
      id: 'miconazol',
      name: 'Miconazol',
      apresentacao: ['Gel oral: 20 mg/g (Daktarin)'],
      observacao: 'Imidazólico para Candida albicans. Primeira escolha para lesões localizadas (glossite romboidal, queilite angular)',
      dosePediatrica: {
        titulo: 'Crianças > 6 meses',
        descricao: 'Candidíase orofaríngea: aplicar quantidade pequena local 4x ao dia por 3 a 7 dias após desaparecimento sintomas'
      },
      orientacoes: 'Aplicar após refeição e escovação. Manter na boca sem engolir. Não comer/beber/enxaguar 30 min após',
      efeitosColaterais: ['Glossalgia', 'Desconforto local', 'Cefaleia', 'Diarreia', 'Náusea', 'Alteração paladar'],
    }
  ]
};