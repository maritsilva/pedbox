export const ANTIMICOBACTERIANOS_CATEGORY = {
  id: 'antimicobacterianos',
  name: 'Antimicobacterianos Tuberculostáticos',
  icon: '🫁',
  drugs: [
    {
      id: 'estreptomicina',
      name: 'Estreptomicina — S',
      apresentacao: ['Frasco-ampola: 200 mg/mL', 'Solução injetável: 1000 mg'],
      observacao: 'Aminoglicosídeo primeira linha para tuberculose. Não penetra bem SNC. Se paciente já tomou, substituir por amicacina',
      dosePediatrica: {
        titulo: 'Crianças',
        descricao: 'TB: 15 a 20 mg/kg/dia 1x ao dia. Máximo: 1 g/dia'
      },
      doseAdulta: {
        titulo: 'Adultos',
        descricao: 'TB: 15 mg/kg/dia IM. Máximo: 1 g/dia em idosos',
        detalhes: ['Endocardite: 2 g/dia ÷ 2 doses por 2 semanas, depois 1 g/dia por 4 semanas', 'Brucelose: 500 mg/dose 2x ao dia por 14 a 21 dias + doxiciclina']
      },
      ajusteRenal: [
        'ClCr 10–50 mL/min: 1 dose a cada 24–72 h',
        'ClCr < 10 mL/min: 1 dose a cada 72–96 h',
      ],
      efeitosColaterais: ['Vômito', 'Anorexia', 'Cefaleia', 'Hiperuricemia', 'Neurite óptica (suspender se ocorrer)'],
    },
    {
      id: 'etambutol',
      name: 'Etambutol — E',
      apresentacao: ['Comprimido: 400 mg', 'Suspensão: 125 mg/5 mL'],
      observacao: 'Tuberculostático usado em meningite',
      dosePediatrica: {
        descricao: 'TB: 25 mg/kg/dia em associação'
      },
      doseAdulta: {
        descricao: 'TB: 1200 mg/dia',
        detalhes: ['Micobactéria atípica: 15 mg/kg/dia + claritromicina + rifampicina']
      },
      orientacoes: 'Tomar drogas juntas dose única diária. Associar piridoxina se risco neuropatia',
      ajusteRenal: [
        'ClCr 10–29 mL/min: 15 a 25 mg/kg a cada 36 h',
        'ClCr < 10 mL/min: 15 a 25 mg/kg a cada 48 h',
      ],
      efeitosColaterais: ['Neurite óptica (suspender se ocorrer)', 'Hiperuricemia', 'Alergia'],
    },
    {
      id: 'isoniazida',
      name: 'Isoniazida — H',
      apresentacao: ['Comprimido: 100 mg'],
      observacao: 'Tuberculostático muito eficaz e menos tóxico. Único usado isoladamente nas fases consolidação',
      dosePediatrica: {
        descricao: 'TB: 7 a 15 mg/kg/dia. Máximo: 300 mg/dia',
        detalhes: ['TB latente: 10 a 15 mg/kg/dia ou 20 a 40 mg/kg 2x por semana por 9 meses. Máximo: 300 mg/dia']
      },
      doseAdulta: {
        descricao: 'TB: 10 mg/kg/dia. Máximo: 300 mg/dia',
        detalhes: ['TB latente: 5–10 mg/kg/dia por 9 meses. Máximo: 300 mg/dia', 'Micobactéria atípica: 5 mg/kg/dia + etambutol + rifampicina']
      },
      orientacoes: 'Alertar para retornar se sinais hepatite. Hemodialisável: 50–100%',
      efeitosColaterais: ['Hepatite raramente fatal', 'Deficiência piridoxina', 'Ginecomastia', 'Acidose', 'Neurite'],
    },
    {
      id: 'pirazinamida',
      name: 'Pirazinamida — Z',
      apresentacao: ['Comprimido: 500 mg', 'Suspensão: 150 mg/5 mL'],
      observacao: 'Tuberculostático bactericida com ação intracelular para terapia combinada',
      dosePediatrica: {
        descricao: 'TB: 25 a 35 mg/kg/dia. Máximo: 2 g/dia. Usada primeiros 2 meses'
      },
      doseAdulta: {
        descricao: 'TB: 1000 a 2000 mg/dia',
        detalhes: ['Quimioprofilaxia AIDS: 300 mg/dia']
      },
      orientacoes: 'Tomar drogas juntas dose única diária',
      ajusteRenal: ['ClCr < 10 mL/min: 1 dose 3x por semana'],
      efeitosColaterais: ['Hepatotoxicidade', 'Icterícia', 'Hiperuricemia', 'Febre', 'Artralgia', 'Mialgia'],
    },
    {
      id: 'rifampicina',
      name: 'Rifampicina — R',
      apresentacao: [
        'Cápsula: 300 mg',
        'Suspensão: 100 mg/5 mL',
        'Combinada com isoniazida + pirazinamida + etambutol: 150 + 75 + 400 + 275 mg',
      ],
      observacao: 'Reservada para TB e profilaxia meningite. Eficaz contra M. leprae, micobactérias atípicas, Gram-positivos/negativos. Útil em infecções próteses',
      dosePediatrica: {
        descricao: '10 a 15 mg/kg/dia. Máximo: 600 mg/dia',
        detalhes: [
          'TB: 10 a 20 mg/kg/dia',
          'Endocardite/prótese: 15 a 20 mg/kg/dia + gentamicina/vancomicina. Máximo: 900 mg/dia',
          'Hanseníase: 10 mg/kg/dose 1x por mês, após 1 mês dose plena',
          'Profilaxia meningite: 20 mg/kg/dia 2x ao dia (meningococo) ou 1x ao dia por 4 dias (Haemophilus, < 1 mês: metade)',
        ]
      },
      doseAdulta: {
        descricao: 'TB: 450 a 600 mg/dia',
        detalhes: [
          'Meningococo: 600 mg/dose 2x ao dia por 2 dias',
          'Hanseníase: 600 mg/dose mensal',
          'Haemophilus B profilaxia: 600 mg/dose a cada 24 h por 4 dias',
          'Meningococo profilaxia: 600 mg/dose a cada 12 h por 2 dias',
        ]
      },
      orientacoes: 'Tomar longe refeições. Todas drogas TB juntas dose única diária. Cor avermelhada urina/suor/fezes/lágrimas',
      efeitosColaterais: ['Anorexia', 'Náusea', 'Vômito', 'Mal-estar', 'Hepatite', 'Icterícia', 'Leucopenia', 'Erupção cutânea'],
      interacoes: 'Reduz efeito contraceptivos (usar métodos alternativos). Reduz varfarina (ajustar)',
    }
  ]
};

export const TUBERCULOSE_ESQUEMAS = {
  adultos: {
    titulo: 'Adultos e crianças > 10 anos',
    faseIntensiva: {
      titulo: 'Fase intensiva — 2 meses RHZE',
      tabela: [
        { peso: '20–35 kg', regime: 'R 150 + H 75 + Z 400 + E 275 mg' },
        { peso: '36–50 kg', regime: 'R 300 + H 150 + Z 1000 + E 550 mg' },
        { peso: '> 50 kg', regime: 'R 600 + H 300 + Z 1600 + E 1100 mg' },
      ]
    },
    faseManutencao: {
      titulo: 'Fase manutenção — 4 meses RH',
      tabela: [
        { peso: '20–35 kg', regime: 'RH 150/75 — 2 comprimidos/dia' },
        { peso: '36–50 kg', regime: 'RH 150/75 — 3 comprimidos/dia' },
        { peso: '> 50 kg', regime: 'RH 150/75 — 4 comprimidos/dia' },
      ]
    }
  },
  criancas: {
    titulo: 'Crianças até 10 anos',
    faseIntensiva: {
      titulo: 'Fase intensiva — 2 meses RHZ',
      tabela: [
        { peso: '20–35 kg', regime: 'R 300 + H 200 + Z 1000 mg' },
        { peso: '36–45 kg', regime: 'R 450 + H 300 + Z 1500 mg' },
        { peso: '> 45 kg', regime: 'R 600 + H 400 + Z 1500 mg' },
      ]
    },
    faseManutencao: {
      titulo: 'Fase manutenção — 4 meses RH',
      tabela: [
        { peso: '20–35 kg', regime: 'R 300 + H 200 mg' },
        { peso: '36–45 kg', regime: 'R 450 + H 300 mg' },
        { peso: '> 45 kg', regime: 'R 600 + H 400 mg' },
      ]
    },
    observacao: 'TB meningoencefálica/osteoarticular: fase manutenção 10 meses + prednisona/dexametasona',
  }
};