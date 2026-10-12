import { numberInput } from './doseEngine.js';

const numeric = (id, label, min, max, step) => ({ id, label, min, max, step });
const choice = (id, label, options) => ({ id, label, options });
const yesNo = (id, label, points = 1) => choice(id, label, [['0', 'Não'], [String(points), 'Sim']]);
const sum = values => Object.values(values).reduce((a, b) => a + Number(b), 0);

const niddk =
  'https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/children-adolescents-young-adults';

export const CLINICAL_DEFINITIONS = {
  rdai: {
    population:
      'Avaliação de sibilância e retrações em lactentes com bronquiolite. A pontuação descreve achados respiratórios; não é um critério isolado de internação, alta ou escolha de tratamento.',
    fields: [
      choice('expiration', 'Sibilância durante a expiração', [
        ['0', 'Ausente'],
        ['1', 'Somente ao final'],
        ['2', 'Em metade da fase expiratória'],
        ['3', 'Em três quartos da fase expiratória'],
        ['4', 'Durante toda a expiração'],
      ]),
      choice('inspiration', 'Sibilância durante a inspiração', [
        ['0', 'Ausente'],
        ['1', 'Em parte da inspiração'],
        ['2', 'Durante toda a inspiração'],
      ]),
      choice('fields', 'Distribuição da sibilância', [
        ['0', 'Nenhum campo pulmonar'],
        ['1', 'Um ou dois dos quatro campos'],
        ['2', 'Três ou quatro campos'],
      ]),
      ...['Supraclaviculares', 'Intercostais', 'Subcostais'].map((label, i) =>
        choice(`retraction${i}`, `Retrações ${label.toLowerCase()}`, [
          ['0', 'Ausentes'],
          ['1', 'Leves'],
          ['2', 'Moderadas'],
          ['3', 'Intensas'],
        ])
      ),
    ],
    formula:
      'Sibilância: até 8 pontos. Retrações: até 9. Soma de 0 a 17. Não inclui frequência respiratória e não corresponde ao RACS ou a versões modificadas.',
    references: [
      ['Kim et al., 2011 — tabela 1, RDAI', 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/1107654'],
      ['Nonoyama et al., 2019 — tabela 1, página 17; consulta em 08/10/2026', 'https://cjrt.ca/article/81397.pdf'],
    ],
    calculate: v => {
      const val = sum(v);
      let interpretation = 'Desconforto respiratório leve (0–4 pontos).';
      let status = 'normal';
      if (val >= 9) {
        interpretation = 'Desconforto respiratório grave (9–17 pontos). Avaliar suporte ventilatório/oxigenoterapia imediato.';
        status = 'danger';
      } else if (val >= 5) {
        interpretation = 'Desconforto respiratório moderado (5–8 pontos). Monitorar de perto.';
        status = 'warning';
      }
      return { value: val, unit: '/ 17 pontos', interpretation, status };
    },
  },

  pts: {
    population:
      'Crianças com trauma. Escore histórico de avaliação inicial; não substitui a abordagem do trauma nem determina isoladamente alta, transferência ou necessidade de imagem.',
    fields: [
      numeric('weight', 'Peso (kg)', 0.1, 200),
      numeric('pressure', 'Pressão arterial sistólica (mmHg)', 0, 300),
      choice('airway', 'Via aérea', [
        ['2', 'Normal, sem suporte'],
        ['1', 'Mantida com suporte'],
        ['-1', 'Não pode ser mantida'],
      ]),
      choice('consciousness', 'Estado neurológico', [
        ['2', 'Alerta'],
        ['1', 'Consciência rebaixada, sem coma'],
        ['-1', 'Coma'],
      ]),
      choice('wounds', 'Feridas abertas', [
        ['2', 'Ausentes'],
        ['1', 'Pequenas'],
        ['-1', 'Extensas ou penetrantes'],
      ]),
      choice('fractures', 'Fraturas', [
        ['2', 'Ausentes'],
        ['1', 'Fechada isolada'],
        ['-1', 'Exposta ou múltiplas'],
      ]),
    ],
    formula:
      'Seis componentes, cada um com −1, +1 ou +2 pontos. Peso: <10 / 10–20 / >20 kg. PAS: <50 / 50–90 / >90 mmHg. Total: −6 a +12; menor pontuação corresponde a maior gravidade. Campos vazios não equivalem a zero.',
    references: [
      ['Tepas et al., 1987 — estudo original', 'https://pubmed.ncbi.nlm.nih.gov/3102714/'],
      [
        'Pediatric Prevention Network — Pediatric Trauma, tabela 3; consulta em 08/10/2026',
        'https://learn.pedspandemicnetwork.org/mod/book/view.php?chapterid=379&id=2785',
      ],
    ],
    calculate: v => {
      const val =
        (v.weight < 10 ? -1 : v.weight <= 20 ? 1 : 2) +
        (v.pressure < 50 ? -1 : v.pressure <= 90 ? 1 : 2) +
        Number(v.airway) +
        Number(v.consciousness) +
        Number(v.wounds) +
        Number(v.fractures);
      let interpretation = 'PTS > 8: Risco menor de mortalidade/morbidade maior. Manter avaliação secundária detalhada.';
      let status = 'normal';
      if (val <= 0) {
        interpretation = 'PTS ≤ 0: Trauma gravíssimo com alto risco de mortalidade iminente (> 50%). Suporte avançado de vida e centro de trauma nível 1 imediatos.';
        status = 'danger';
      } else if (val <= 8) {
        interpretation = 'PTS ≤ 8: Trauma potencialmente grave. Indicação formal de transferência para Centro de Trauma Pediátrico / UTI.';
        status = 'warning';
      }
      return { value: val, unit: 'pontos (intervalo: −6 a +12)', interpretation, status };
    },
  },

  scorad: {
    population:
      'Dermatite atópica. Extensão deve considerar lesões inflamatórias e proporções corporais apropriadas à idade. Pontuação não prescreve tratamento.',
    fields: [
      numeric('extent', 'Área inflamada (%)', 0, 100),
      ...['Eritema', 'Edema / pápulas', 'Exsudação / crostas', 'Escoriações', 'Liquenificação', 'Ressecamento'].map((label, i) =>
        choice(`sign${i}`, label, [
          ['0', 'Ausente'],
          ['1', 'Leve'],
          ['2', 'Moderado'],
          ['3', 'Intenso'],
        ])
      ),
      numeric('itch', 'Prurido (0–10)', 0, 10),
      numeric('sleep', 'Perda de sono (0–10)', 0, 10),
    ],
    formula: 'SCORAD = área/5 + 3,5 × soma dos seis sinais + prurido + perda de sono. Máximo: 103.',
    references: [
      ['Société Française de Dermatologie — SCORAD', 'https://www.sfdermato.org/upload/scores/scorad-3b22aebdbbf650c338531006542f5838.pdf'],
    ],
    calculate: v => {
      const val =
        v.extent / 5 +
        3.5 * sum(Object.fromEntries(Object.entries(v).filter(([k]) => k.startsWith('sign')))) +
        v.itch +
        v.sleep;
      let interpretation = 'SCORAD < 25: Dermatite atópica leve.';
      let status = 'normal';
      if (val > 50) {
        interpretation = 'SCORAD > 50: Dermatite atópica grave. Avaliar imunossupressão sistêmica / imunobiológicos e seguimento conjunto com dermatologia/alergopediatria.';
        status = 'danger';
      } else if (val >= 25) {
        interpretation = 'SCORAD 25–50: Dermatite atópica moderada. Otimizar emolientes, corticoterapia tópica ou inibidores de calcineurina tópicos.';
        status = 'warning';
      }
      return { value: val, unit: '/ 103 pontos', interpretation, status };
    },
  },

  capurro: {
    population:
      'Estimativa somática de idade gestacional. Examinar o recém-nascido e confrontar com a história obstétrica; não extrapolar a prematuros extremos.',
    fields: [
      choice('nipple', 'Mamilo / aréola', [
        ['0', 'Mamilo pouco visível, sem aréola'],
        ['5', 'Aréola lisa menor que 0,75 cm'],
        ['10', 'Aréola maior que 0,75 cm, borda plana'],
        ['15', 'Aréola maior que 0,75 cm, borda elevada'],
      ]),
      choice('skin', 'Pele', [
        ['0', 'Gelatinosa'],
        ['5', 'Fina e lisa'],
        ['10', 'Descamação superficial discreta'],
        ['15', 'Espessa, sulcos superficiais'],
        ['20', 'Apergaminhada, sulcos profundos'],
      ]),
      choice('ear', 'Pavilhão auricular', [
        ['0', 'Sem curvatura'],
        ['8', 'Curvatura parcial da borda'],
        ['16', 'Toda a borda superior encurvada'],
        ['24', 'Totalmente encurvado'],
      ]),
      choice('breast', 'Glândula mamária', [
        ['0', 'Não palpável'],
        ['5', 'Menor que 0,5 cm'],
        ['10', '0,5 a 1 cm'],
        ['15', 'Maior que 1 cm'],
      ]),
      choice('sole', 'Planta do pé', [
        ['0', 'Sem sulcos'],
        ['5', 'Marcas pouco definidas anteriormente'],
        ['10', 'Marcas anteriores e sulcos no terço anterior'],
        ['15', 'Sulcos na metade anterior'],
        ['20', 'Sulcos ultrapassam a metade anterior'],
      ]),
    ],
    formula: 'Idade gestacional em dias = soma + 204. Dividir por 7 para obter semanas.',
    references: [
      [
        'SES-SP, Manual de Neonatologia, 2015, página PDF 18',
        'https://www.saude.sp.gov.br/resources/ses/perfil/gestor/homepage/programa-de-fortalecimento-da-gestao-da-saude-no-estado-de-sao-paulo/consultas-publicas/manual_de_neonatologia.pdf',
      ],
    ],
    calculate: v => {
      const days = sum(v) + 204;
      const weeks = Math.floor(days / 7);
      const rem = days % 7;
      let interpretation = `Idade gestacional somática estimada em ${weeks} semanas e ${rem} dias (${days} dias).`;
      if (weeks < 37) interpretation += ' Recém-nascido prematuro.';
      else if (weeks >= 42) interpretation += ' Recém-nascido pós-termo.';
      else interpretation += ' Recém-nascido a termo.';
      return { value: weeks, unit: `semanas e ${rem} dias`, interpretation, status: weeks < 37 ? 'warning' : 'normal' };
    },
  },

  'capurro-neuro': {
    population:
      'Estimativa somatoneurológica de idade gestacional (4 critérios somáticos + 2 neurológicos). Indicado para recém-nascidos vigentes e sem depressão neurológica.',
    fields: [
      choice('nipple', 'Mamilo / aréola', [
        ['0', 'Mamilo pouco visível, sem aréola'],
        ['5', 'Aréola lisa menor que 0,75 cm'],
        ['10', 'Aréola maior que 0,75 cm, borda plana'],
        ['15', 'Aréola maior que 0,75 cm, borda elevada'],
      ]),
      choice('skin', 'Textura da pele', [
        ['0', 'Gelatinosa'],
        ['5', 'Fina e lisa'],
        ['10', 'Descamação superficial discreta'],
        ['15', 'Espessa, sulcos superficiais'],
        ['20', 'Apergaminhada, sulcos profundos'],
      ]),
      choice('ear', 'Pavilhão auricular', [
        ['0', 'Sem curvatura'],
        ['8', 'Curvatura parcial da borda'],
        ['16', 'Toda a borda superior encurvada'],
        ['24', 'Totalmente encurvado'],
      ]),
      choice('sole', 'Planta do pé', [
        ['0', 'Sem sulcos'],
        ['5', 'Marcas pouco definidas anteriormente'],
        ['10', 'Marcas anteriores e sulcos no terço anterior'],
        ['15', 'Sulcos na metade anterior'],
        ['20', 'Sulcos ultrapassam a metade anterior'],
      ]),
      choice('scarf', 'Sinal do xale (cotovelo)', [
        ['0', 'Passa facilmente da linha axilar contralateral'],
        ['6', 'Passa da linha média mas não da linha axilar'],
        ['12', 'Fica sobre a linha média'],
        ['18', 'Não alcança a linha média'],
      ]),
      choice('head', 'Queda / sustentação da cabeça ao tracionar', [
        ['0', 'Cai totalmente para trás, sem resistência'],
        ['4', 'Deflexão com esboço de sustentação'],
        ['8', 'Sustenta a cabeça por alguns instantes'],
        ['12', 'Mantém a cabeça alinhada ao tronco'],
      ]),
    ],
    formula: 'Idade gestacional em dias = soma + 200. Dividir por 7 para obter semanas.',
    references: [
      ['Capurro et al., 1978 — estudo original somatoneurológico', 'https://pubmed.ncbi.nlm.nih.gov/722290/'],
      ['Sociedade Brasileira de Pediatria — Tratado de Pediatria 5ª Edição', 'https://www.sbp.com.br'],
    ],
    calculate: v => {
      const days = sum(v) + 200;
      const weeks = Math.floor(days / 7);
      const rem = days % 7;
      let interpretation = `Idade gestacional somatoneurológica estimada em ${weeks} semanas e ${rem} dias (${days} dias).`;
      if (weeks < 37) interpretation += ' Recém-nascido prematuro.';
      else if (weeks >= 42) interpretation += ' Recém-nascido pós-termo.';
      else interpretation += ' Recém-nascido a termo.';
      return { value: weeks, unit: `semanas e ${rem} dias`, interpretation, status: weeks < 37 ? 'warning' : 'normal' };
    },
  },

  downes: {
    population:
      'Escore respiratório neonatal, conforme tabela do HC-UFMG, versão 02 (2024). Não deve determinar isoladamente suporte respiratório.',
    fields: [
      choice('rate', 'Frequência respiratória', [
        ['0', '40 a menos de 60/min'],
        ['1', '60 a 80/min'],
        ['2', 'Acima de 80/min'],
      ]),
      choice('retractions', 'Retrações', [
        ['0', 'Ausentes'],
        ['1', 'Intercostal e/ou subcostal'],
        ['2', 'Intercostal, subcostal e esternal'],
      ]),
      choice('grunting', 'Gemido', [
        ['0', 'Ausente'],
        ['1', 'Audível na ausculta'],
        ['2', 'Audível sem estetoscópio'],
      ]),
      choice('air', 'Murmúrio vesicular', [
        ['0', 'Facilmente audível'],
        ['1', 'Reduzido'],
        ['2', 'Quase inaudível'],
      ]),
      choice('cyanosis', 'Cianose', [
        ['0', 'Ausente'],
        ['1', 'Melhora com oxigênio'],
        ['2', 'Persiste com oxigênio'],
      ]),
    ],
    formula:
      'Soma de cinco critérios de 0 a 2. FR abaixo de 40/min, apneia e outros achados fora das opções exigem avaliação independente; não classificar como zero.',
    references: [
      [
        'HC-UFMG — protocolo de surfactante, tabela 2',
        'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sudeste/hc-ufmg/saude/protocolos-assistenciais-hc-ufmg-ebserh/PRT_UTIN_105_Terapia_reposicao_surfactante_neonatologia_V02.pdf',
      ],
    ],
    calculate: v => {
      const val = sum(v);
      let interpretation = '0–3 pontos: Desconforto respiratório leve. Monitorar saturação e sinais vitais.';
      let status = 'normal';
      if (val >= 8) {
        interpretation = '8–10 pontos: Desconforto respiratório grave / iminência de falência respiratória. Suporte ventilatório invasivo e UTIN imediatos.';
        status = 'danger';
      } else if (val >= 4) {
        interpretation = '4–7 pontos: Desconforto respiratório moderado. Considerar CPAP nasal e avaliação de surfactante.';
        status = 'warning';
      }
      return { value: val, unit: '/ 10 pontos', interpretation, status };
    },
  },

  'superficie-corporal': {
    population: 'Estimativa por peso e estatura. Não determina, por si só, doses de medicamentos.',
    fields: [
      numeric('weight', 'Peso (kg)', 0.1, 300),
      numeric('height', 'Estatura (cm)', 20, 250),
      choice('method', 'Método', [
        ['mosteller', 'Mosteller'],
        ['haycock', 'Haycock'],
      ]),
    ],
    formula: 'Mosteller: √(peso × estatura / 3600). Haycock: 0,024265 × peso^0,5378 × estatura^0,3964.',
    references: [
      ['Haycock et al., 1978', 'https://pubmed.ncbi.nlm.nih.gov/650346/'],
      ['Comparação das fórmulas em crianças, 2022', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9489993/'],
    ],
    calculate: v => {
      const val =
        v.method === 'mosteller'
          ? Math.sqrt((v.weight * v.height) / 3600)
          : 0.024265 * v.weight ** 0.5378 * v.height ** 0.3964;
      return {
        value: val,
        unit: 'm²',
        interpretation: `Superfície corporal estimada em ${val.toFixed(2)} m² pelo método de ${v.method === 'mosteller' ? 'Mosteller' : 'Haycock'}.`,
        status: 'normal',
      };
    },
  },

  'tfg-pediatrica': {
    population:
      'CKiD U25: 1–25 anos, especialmente doença renal crônica leve a moderada. Bedside: estimativa pediátrica rápida; derivação principalmente em 8–15 anos. Neonatal: nascidos a termo até 28 dias. Creatinina padronizada; interpretação requer contexto e tendência.',
    fields: [
      choice('method', 'Equação', [
        ['u25', 'CKiD U25 — creatinina'],
        ['bedside', 'Schwartz bedside 2009'],
        ['neonatal', 'Neonatal a termo'],
      ]),
      numeric('height', 'Comprimento / estatura (cm)', 20, 250),
      numeric('creatinine', 'Creatinina sérica', 0.01, 2000),
      choice('creatinineUnit', 'Unidade da creatinina', [
        ['mgdl', 'mg/dL'],
        ['umol', 'µmol/L'],
      ]),
      numeric('age', 'Idade (anos; neonatal: dias)', 0, 28),
      choice('sex', 'Sexo usado na equação', [
        ['female', 'Feminino'],
        ['male', 'Masculino'],
      ]),
      choice('term', 'Nasceu a termo?', [
        ['yes', 'Sim'],
        ['no', 'Não'],
      ]),
    ],
    formula: 'Bedside: 0,413 × cm / creatinina (mg/dL). U25: κ(idade, sexo) × estatura (m) / creatinina. Neonatal: 0,31 × cm / creatinina.',
    references: [['NIDDK — equações pediátricas', niddk]],
    calculate: v => {
      const cr = v.creatinine / (v.creatinineUnit === 'umol' ? 88.4 : 1);
      if (v.method === 'neonatal') {
        if (v.age > 28 || v.term !== 'yes') return { error: 'Equação neonatal restrita a nascidos a termo com até 28 dias.' };
        const val = (0.31 * v.height) / cr;
        return { value: val, unit: 'mL/min/1,73 m²', interpretation: `TFG estimada neonatal: ${val.toFixed(1)} mL/min/1,73 m².`, status: val < 30 ? 'warning' : 'normal' };
      }
      if (v.method === 'bedside') {
        if (v.age < 1 || v.age >= 18) return { error: 'Use uma equação adequada à faixa etária; esta implementação bedside está restrita a 1–17 anos.' };
        const val = (0.413 * v.height) / cr;
        return { value: val, unit: 'mL/min/1,73 m²', interpretation: `TFG estimada (Schwartz Bedside): ${val.toFixed(1)} mL/min/1,73 m². ${val < 60 ? 'Atenção para disfunção renal (TFG < 60).' : 'Função renal glomerular estimada normal (≥ 60).'}` , status: val < 60 ? 'warning' : 'normal' };
      }
      if (v.age < 1 || v.age > 25) return { error: 'CKiD U25 requer idade de 1 a 25 anos.' };
      const female = v.sex === 'female';
      const k = v.age >= 18 ? (female ? 41.4 : 50.8) : (female ? 36.1 : 39) * (v.age < 12 ? 1.008 : female ? 1.023 : 1.045) ** (v.age - 12);
      const val = (k * (v.height / 100)) / cr;
      return { value: val, unit: 'mL/min/1,73 m²', interpretation: `TFG estimada (CKiD U25): ${val.toFixed(1)} mL/min/1,73 m². ${val < 60 ? 'TFG reduzida (< 60 mL/min/1,73 m²).' : 'TFG normal/adequada.'}`, status: val < 60 ? 'warning' : 'normal' };
    },
  },

  'pas-apendicite': {
    population:
      'Estudo original em crianças de 4–15 anos com suspeita de apendicite. Pontuação isolada não confirma nem exclui diagnóstico e não determina alta ou cirurgia.',
    fields: [
      yesNo('migration', 'Dor migrou para a fossa ilíaca direita?'),
      yesNo('anorexia', 'Perda de apetite?'),
      yesNo('vomiting', 'Náuseas ou vômitos?'),
      yesNo('fever', 'Febre?'),
      yesNo('tenderness', 'Dor à palpação na fossa ilíaca direita?', 2),
      yesNo('movement', 'Dor nessa região ao tossir, percutir ou saltar?', 2),
      yesNo('leukocytes', 'Leucócitos acima de 10.000/mm³?'),
      yesNo('neutrophils', 'Neutrófilos acima de 7.500/mm³?'),
    ],
    formula: 'Soma de oito critérios: palpação e movimento valem 2 pontos cada; os demais, 1. Total: 0–10.',
    references: [['Samuel, 2002 — estudo original', 'https://pubmed.ncbi.nlm.nih.gov/12037754/']],
    calculate: v => {
      const val = sum(v);
      let interpretation = '0–4 pontos: Apendicite improvável. Considerar outros diagnósticos e orientar sinais de alerta.';
      let status = 'normal';
      if (val >= 7) {
        interpretation = '7–10 pontos: Alta probabilidade de apendicite aguda. Avaliação cirúrgica pediátrica imediata recomendada.';
        status = 'danger';
      } else if (val >= 5) {
        interpretation = '5–6 pontos: Suspeita intermediária de apendicite. Recomenda-se ultrassonografia de abdome e observação clínica.';
        status = 'warning';
      }
      return { value: val, unit: '/ 10 pontos', interpretation, status };
    },
  },

  gina: {
    population:
      'Avaliação do controle dos sintomas de asma nas últimas 4 semanas em crianças, adolescentes e adultos, conforme a diretriz GINA 2026.',
    fields: [
      choice('ageGroup', 'Faixa etária do paciente', [
        ['over5', 'Crianças ≥ 6 anos, adolescentes e adultos (GINA 2026 Box 2-2)'],
        ['under6', 'Crianças ≤ 5 anos (GINA 2026 Box 6-3)'],
      ]),
      yesNo('daySymptoms', 'Sintomas diurnos mais de 2x/semana (ou > 1x/semana se ≤ 5 anos)?'),
      yesNo('nightAwakening', 'Algum despertar noturno ou tosse noturna devido à asma?'),
      yesNo('relieverUse', 'Uso de medicação de alívio mais de 2x/semana (ou > 1x/semana se ≤ 5 anos)?'),
      yesNo('activityLimitation', 'Qualquer limitação de atividade física ou brincadeiras devido à asma?'),
    ],
    formula:
      'Quatro perguntas-chave de controle dos sintomas nas últimas 4 semanas (GINA 2026). Cada resposta positiva soma 1 ponto (0 a 4).',
    references: [
      ['Global Initiative for Asthma (GINA) 2026 Strategy Report', 'https://ginasthma.org'],
      ['Sociedade Brasileira de Pediatria — Guia de Manejo da Asma Pediátrica', 'https://www.sbp.com.br'],
    ],
    calculate: v => {
      const positiveCount =
        Number(v.daySymptoms) + Number(v.nightAwakening) + Number(v.relieverUse) + Number(v.activityLimitation);
      let classification = '';
      let interpretation = '';
      let status = 'normal';

      if (positiveCount === 0) {
        classification = 'Asma Bem Controlada (0 critérios positivos)';
        interpretation =
          'Sintomas sob controle adequado nas últimas 4 semanas. Manter tratamento de manutenção atual. Se o controle se mantiver estável por 3 meses com técnica adequada e sem exacerbações, considerar step-down gradual.';
        status = 'normal';
      } else if (positiveCount <= 2) {
        classification = `Asma Parcialmente Controlada (${positiveCount} critério${positiveCount > 1 ? 's' : ''} positivo${positiveCount > 1 ? 's' : ''})`;
        interpretation =
          'Controle parcial dos sintomas. Verificar: 1) técnica inalatória e adesão; 2) exposição a gatilhos e tabagismo passivo; 3) comorbidades (rinite alérgica, refluxo gastroesofágico, obesidade). Se a técnica e a adesão estiverem adequadas, considerar avanço de etapa (step-up) no tratamento de manutenção (preferencialmente com ICS-Formoterol MART em ≥ 6 anos conforme GINA 2026 Track 1).';
        status = 'warning';
      } else {
        classification = `Asma Não Controlada (${positiveCount} critérios positivos)`;
        interpretation =
          'Risco elevado de exacerbação grave e declínio funcional. Revisar técnica, adesão e comorbidades imediatamente. Intensificar o tratamento de manutenção (step-up) e reavaliar em 1 a 2 semanas. Investigar histórico de exacerbações recentes e visitas ao pronto-socorro.';
        status = 'danger';
      }

      return {
        value: positiveCount,
        unit: 'critérios positivos (de 4)',
        classification,
        interpretation,
        status,
      };
    },
  },

  'new-ballard': {
    population:
      'Avaliação da maturidade gestacional física e neuromuscular do recém-nascido entre 20 e 44 semanas de idade gestacional.',
    fields: [
      choice('posture', 'Postura (0 a 4)', [
        ['0', '0: Membros estendidos'],
        ['1', '1: Leve flexão de quadris e joelhos'],
        ['2', '2: Flexão moderada de quadris e joelhos'],
        ['3', '3: Flexão de quadris e joelhos com braços estendidos'],
        ['4', '4: Flexão total de todos os quatro membros'],
      ]),
      choice('squareWindow', 'Janela quadrada / flexão de punho (-1 a 4)', [
        ['-1', '-1: Ângulo > 90°'],
        ['0', '0: Ângulo de 90°'],
        ['1', '1: Ângulo de 60°'],
        ['2', '2: Ângulo de 45°'],
        ['3', '3: Ângulo de 30°'],
        ['4', '4: Ângulo de 0° (punho toca antebraço)'],
      ]),
      choice('armRecoil', 'Recuo do braço (0 a 4)', [
        ['0', '0: Sem recuo (180°)'],
        ['1', '1: Recuo discreto (140°–180°)'],
        ['2', '2: Recuo moderado (110°–140°)'],
        ['3', '3: Recuo rápido (90°–110°)'],
        ['4', '4: Recuo completo e imediato (< 90°)'],
      ]),
      choice('poplitealAngle', 'Ângulo poplíteo (-1 a 5)', [
        ['-1', '-1: Ângulo de 180°'],
        ['0', '0: Ângulo de 160°'],
        ['1', '1: Ângulo de 140°'],
        ['2', '2: Ângulo de 120°'],
        ['3', '3: Ângulo de 100°'],
        ['4', '4: Ângulo de 90°'],
        ['5', '5: Ângulo < 90°'],
      ]),
      choice('scarfSign', 'Sinal do xale (-1 a 4)', [
        ['-1', '-1: Cotovelo cruza a linha média completamente'],
        ['0', '0: Cotovelo cruza a linha média'],
        ['1', '1: Cotovelo na linha axilar anterior ipsilateral'],
        ['2', '2: Cotovelo na linha mamária ipsilateral'],
        ['3', '3: Cotovelo não alcança a linha média'],
        ['4', '4: Cotovelo não passa da linha axilar anterior ipsilateral'],
      ]),
      choice('heelToEar', 'Calcanhar à orelha (-1 a 4)', [
        ['-1', '-1: Alcança com facilidade total'],
        ['0', '0: Alcança a orelha'],
        ['1', '1: Ângulo de 45° com tronco'],
        ['2', '2: Ângulo de 90° com tronco'],
        ['3', '3: Ângulo de 120° com tronco'],
        ['4', '4: Grande resistência, perna não sobe'],
      ]),
      choice('skin', 'Pele (-1 a 5)', [
        ['-1', '-1: Pegajosa, friável, transparente'],
        ['0', '0: Vermelha gelatinosa, translúcida'],
        ['1', '1: Lisa e rosada, vasos visíveis'],
        ['2', '2: Descamação superficial e/ou eritema, poucos vasos'],
        ['3', '3: Rachaduras pálidas, raras veias visíveis'],
        ['4', '4: Pergaminho, rachaduras profundas, sem vasos'],
        ['5', '5: Couro rachado, enrugado'],
      ]),
      choice('lanugo', 'Lanugem (-1 a 4)', [
        ['-1', '-1: Ausente'],
        ['0', '0: Rara'],
        ['1', '1: Abundante'],
        ['2', '2: Afilando'],
        ['3', '3: Áreas desprovidas'],
        ['4', '4: Quase sem lanugem'],
      ]),
      choice('plantarSurface', 'Superfície plantar (-1 a 4)', [
        ['-1', '-1: Calcanhar-dedo 40–50 mm (-1) ou < 40 mm (-2)'],
        ['0', '0: > 50 mm, sem pregas'],
        ['1', '1: Marcas vermelhas tenues'],
        ['2', '2: Sulcos transversos apenas anteriores'],
        ['3', '3: Sulcos nos 2/3 anteriores'],
        ['4', '4: Sulcos em toda a planta'],
      ]),
      choice('breast', 'Mamas / aréola (-1 a 4)', [
        ['-1', '-1: Imperceptíveis'],
        ['0', '0: Aréola pouco visível, sem nódulo'],
        ['1', '1: Aréola plana, nódulo de 1–2 mm'],
        ['2', '2: Aréola ponteada, nódulo de 3–4 mm'],
        ['3', '3: Aréola elevada, nódulo de 5–10 mm'],
        ['4', '4: Aréola completa, nódulo > 10 mm'],
      ]),
      choice('eyeEar', 'Olhos e orelhas (-1 a 4)', [
        ['-1', '-1: Pálpebras fundidas frouxas ou fortemente (-1)'],
        ['0', '0: Pálpebras abertas, pavilhão plano que permanece dobrado'],
        ['1', '1: Pavilhão levemente encurvado, retorno lento'],
        ['2', '2: Pavilhão bem encurvado, retorno elástico rápido'],
        ['3', '3: Pavilhão formado e firme, retorno instantâneo'],
        ['4', '4: Cartilagem espessa, orelha rígida'],
      ]),
      choice('genitals', 'Genitália masculina ou feminina (-1 a 4)', [
        ['-1', '-1: Escroto plano liso / clitóris proeminente, lábios planos'],
        ['0', '0: Escroto vazio, poucas rugas / clitóris proeminente, pequenos lábios pequenos'],
        ['1', '1: Testículos no canal inguinal superior / clitóris proeminente, pequenos lábios crescendo'],
        ['2', '2: Testículos descendo, poucas rugas / grandes e pequenos lábios igualmente proeminentes'],
        ['3', '3: Testículos descidos, boas rugas / grandes lábios grandes, pequenos lábios cobertos'],
        ['4', '4: Testículos pêndulos, rugas profundas / grandes lábios cobrem completamente clitóris e pequenos lábios'],
      ]),
    ],
    formula: 'Idade gestacional (semanas) = (2 × pontuação total + 120) / 5. Varia de -10 (20 semanas) a 50 (44 semanas).',
    references: [['Ballard JL et al., 1991 — New Ballard Score original', 'https://pubmed.ncbi.nlm.nih.gov/1886701/']],
    calculate: v => {
      const score = sum(v);
      const weeks = Math.round(((2 * score + 120) / 5) * 10) / 10;
      let interpretation = `Escore total: ${score} pontos. Idade gestacional estimada: ${weeks} semanas.`;
      if (weeks < 37) interpretation += ' Recém-nascido pré-termo.';
      else if (weeks >= 42) interpretation += ' Recém-nascido pós-termo.';
      else interpretation += ' Recém-nascido a termo.';
      return { value: weeks, unit: `semanas (pontuação: ${score})`, interpretation, status: weeks < 37 ? 'warning' : 'normal' };
    },
  },

  finnegan: {
    population:
      'Avaliação da síndrome de abstinência neonatal (NAS/NOWS) em recém-nascidos com exposição intrauterina a opioides ou substâncias.',
    fields: [
      choice('crying', 'Choro', [
        ['0', 'Normal'],
        ['2', 'Excessivo e agudo ao ser manipulado'],
        ['3', 'Agudo e inconsolável contínuo'],
      ]),
      choice('sleep', 'Sono após a mamada', [
        ['0', 'Dorme > 3 horas'],
        ['1', 'Dorme < 3 horas'],
        ['2', 'Dorme < 2 horas'],
        ['3', 'Dorme < 1 hora'],
      ]),
      choice('moro', 'Reflexo de Moro', [
        ['0', 'Normal'],
        ['2', 'Hiperativo'],
        ['3', 'Hiperativo com clônus prolongado'],
      ]),
      choice('tremors', 'Tremores de extremidades', [
        ['0', 'Ausentes'],
        ['1', 'Leves, apenas com manipulação'],
        ['2', 'Moderados/graves com manipulação ou espontâneos leves'],
        ['4', 'Espontâneos intensos e frequentes'],
      ]),
      choice('tone', 'Tônus muscular', [
        ['0', 'Normal'],
        ['2', 'Hipertonia'],
      ]),
      choice('myoclonus', 'Mioclonias ou abalos musculares', [
        ['0', 'Ausentes'],
        ['3', 'Abalos mioclônicos presentes'],
        ['5', 'Convulsões clínicas'],
      ]),
      choice('sweatingFever', 'Instabilidade térmica e autonômica', [
        ['0', 'Ausente'],
        ['1', 'Sudorese, febre leve ou bocejos frequentes (> 3 a 4x)'],
      ]),
      choice('respiratory', 'Sintomas respiratórios', [
        ['0', 'Normal'],
        ['2', 'Taquipneia (> 60/min), congestão nasal ou retrações'],
      ]),
      choice('feeding', 'Alimentação e sucção', [
        ['0', 'Sucção coordenada, sem regurgitação'],
        ['2', 'Sucção desorganizada voraz ou regurgitações frequentes'],
        ['3', 'Vômitos em jato ou recusa alimentar'],
      ]),
      choice('stools', 'Aspecto das fezes', [
        ['0', 'Fezes normais'],
        ['2', 'Fezes amolecidas frequentes'],
        ['3', 'Diarreia líquida profusa com assaduras'],
      ]),
    ],
    formula:
      'Soma dos critérios de Finnegan. Escore < 8: conduta não farmacológica. Escore ≥ 8 em 3 avaliações consecutivas ou média ≥ 12 em 2 avaliações: indicação de farmacoterapia.',
    references: [
      ['Finnegan LP et al., 1975 — Neonatal abstinence score', 'https://pubmed.ncbi.nlm.nih.gov/1148135/'],
      ['American Academy of Pediatrics — Clinical Report on Neonatal Opioid Withdrawal', 'https://publications.aap.org'],
    ],
    calculate: v => {
      const val = sum(v);
      let interpretation = 'Escore < 8: Abstinência leve. Manter medidas não farmacológicas (ambiente calmo, luz suave, dieta fracionada, contenção e sucção não nutritiva).';
      let status = 'normal';
      if (val >= 12) {
        interpretation = 'Escore ≥ 12: Abstinência grave. Critério para avaliação e início imediato de farmacoterapia (ex.: morfina oral padronizada) em leito de monitorização.';
        status = 'danger';
      } else if (val >= 8) {
        interpretation = 'Escore 8–11: Abstinência moderada a significativa. Repetir avaliação em 2 a 4 horas. Se mantido ≥ 8 em 3 aferições consecutivas, iniciar farmacoterapia.';
        status = 'warning';
      }
      return { value: val, unit: '/ 30 pontos (Finnegan)', interpretation, status };
    },
  },

  'snappe-ii': {
    population:
      'Avaliação da gravidade clínica e predição de mortalidade neonatal nas primeiras 12 horas de admissão na UTI Neonatal.',
    fields: [
      choice('map', 'Pressão arterial média mais baixa nas 12h (PAM)', [
        ['0', '> 30 mmHg (0 pontos)'],
        ['9', '20 a 29 mmHg (9 pontos)'],
        ['19', '< 20 mmHg (19 pontos)'],
      ]),
      choice('temp', 'Menor temperatura corporal nas 12h', [
        ['0', '> 35,6 °C (0 pontos)'],
        ['8', '35,0 a 35,6 °C (8 pontos)'],
        ['15', '< 35,0 °C (15 pontos)'],
      ]),
      choice('pao2fio2', 'Menor relação PaO2 / FiO2 nas 12h', [
        ['0', '> 2,5 ou > 250 (0 pontos)'],
        ['5', '1,0 a 2,49 ou 100–249 (5 pontos)'],
        ['16', '< 1,0 ou < 100 (16 pontos)'],
      ]),
      choice('ph', 'Menor pH sérico nas 12h', [
        ['0', '> 7,20 (0 pontos)'],
        ['7', '7,10 a 7,20 (7 pontos)'],
        ['16', '< 7,10 (16 pontos)'],
      ]),
      choice('seizures', 'Convulsões clínicas múltiplas nas primeiras 12h', [
        ['0', 'Não (0 pontos)'],
        ['19', 'Sim (19 pontos)'],
      ]),
      choice('urine', 'Menor débito urinário nas 12h', [
        ['0', '> 1,0 mL/kg/h (0 pontos)'],
        ['5', '0,1 a 0,9 mL/kg/h (5 pontos)'],
        ['18', '< 0,1 mL/kg/h (18 pontos)'],
      ]),
    ],
    formula:
      'SNAPPE-II avalia 6 variáveis fisiológicas objetivas coletadas nas primeiras 12 horas pós-admissão. Pontuação varia de 0 a 103 pontos.',
    references: [
      [
        'Richardson DK et al., 2001 — SNAP-II and SNAPPE-II in newborns',
        'https://www.jpeds.com/article/S0022-3476(01)90013-X/fulltext',
      ],
    ],
    calculate: v => {
      const val = sum(v);
      let interpretation = 'SNAPPE-II 0–9: Risco muito baixo de mortalidade intra-hospitalar (< 2%).';
      let status = 'normal';
      if (val >= 40) {
        interpretation = 'SNAPPE-II ≥ 40: Risco muito elevado de mortalidade neonatal (> 40–50%). Suporte intensivo máximo e vigilância contínua.';
        status = 'danger';
      } else if (val >= 30) {
        interpretation = 'SNAPPE-II 30–39: Gravidade elevada / risco de mortalidade entre 20% e 30%.';
        status = 'warning';
      } else if (val >= 10) {
        interpretation = 'SNAPPE-II 10–29: Gravidade moderada / risco de mortalidade entre 5% e 15%.';
        status = 'warning';
      }
      return { value: val, unit: 'pontos SNAPPE-II', interpretation, status };
    },
  },

  'estatura-segmentar': {
    population:
      'Estimativa de estatura para crianças e adolescentes (2 a 18 anos) com paralisia cerebral, contraturas ou impossibilidade de medição ortostática.',
    fields: [
      choice('method', 'Equação de estimativa', [
        ['knee_stevenson', 'Altura do Joelho — Stevenson 1995 (Paralisia Cerebral)'],
        ['knee_chumlea', 'Altura do Joelho — Chumlea 1994 (Geral)'],
        ['tibia_gauld', 'Comprimento da Tíbia — Gauld 2004'],
      ]),
      numeric('segment', 'Medida do segmento ósseo (cm)', 5, 80),
      choice('sex', 'Sexo biológico', [
        ['male', 'Masculino'],
        ['female', 'Feminino'],
      ]),
      numeric('age', 'Idade (anos completos, entre 2 e 18)', 2, 18),
    ],
    formula:
      'Stevenson: Estatura = (2,69 × joelho) + 24,2. Chumlea masc: (2,15 × joelho) + (0,07 × idade) + 40,54; fem: (2,02 × joelho) + (0,15 × idade) + 43,21. Gauld tíbia masc: (3,26 × tíbia) + 30,8; fem: (3,29 × tíbia) + 29,2.',
    references: [
      ['Stevenson RD. Segmental measures to estimate stature in children with CP. J Pediatr 1995', 'https://pubmed.ncbi.nlm.nih.gov/7562137/'],
      ['Chumlea WC et al. Estimating stature from knee height in children. 1994', 'https://pubmed.ncbi.nlm.nih.gov/7998679/'],
      ['Gauld LM et al. Height estimation from tibial length in children. 2004', 'https://pubmed.ncbi.nlm.nih.gov/15234937/'],
    ],
    calculate: v => {
      let est = 0;
      if (v.method === 'knee_stevenson') {
        est = 2.69 * v.segment + 24.2;
      } else if (v.method === 'knee_chumlea') {
        est = v.sex === 'male' ? 2.15 * v.segment + 0.07 * v.age + 40.54 : 2.02 * v.segment + 0.15 * v.age + 43.21;
      } else {
        est = v.sex === 'male' ? 3.26 * v.segment + 30.8 : 3.29 * v.segment + 29.2;
      }
      const val = Math.round(est * 10) / 10;
      return {
        value: val,
        unit: 'cm de estatura estimada',
        interpretation: `Estatura predita: ${val} cm (${(val / 100).toFixed(2)} m). Utilize esta estimativa para cálculo do IMC e dosagens baseadas na superfície corporal.`,
        status: 'normal',
      };
    },
  },

  'sirs-sepsis': {
    population:
      'Lactentes e crianças com suspeita de infecção, febre ou deterioração clínica. Avalia critérios de SIRS (Goldstein 2005) e novos critérios Phoenix 2024 de disfunção orgânica (JAMA 2024).',
    fields: [
      yesNo('tempSirs', 'Temperatura anormal: axilar < 36,0 °C ou > 38,5 °C (retal < 36,0 °C ou > 38,0 °C)?'),
      yesNo('heartRateSirs', 'FC anormal: taquicardia persistente para idade (ou bradicardia em lactentes < 1 ano)?'),
      yesNo('respRateSirs', 'FR anormal: taquipneia persistente para a idade ou necessidade de suporte ventilatório?'),
      yesNo('leukoSirs', 'Leucograma: leucocitose/leucopenia para a idade ou > 10% de bastonetes/formas jovens?'),
      choice('respDysfunction', 'Disfunção Respiratória (Phoenix)', [
        ['0', '0: Normal (sem suporte de O2 ou cânula com SpO2 normal)'],
        ['1', '1: Necessidade de oxigenoterapia, cânula de alto fluxo, CPAP ou VNI'],
        ['2', '2: Ventilação Mecânica Invasiva (VMI)'],
      ]),
      choice('cvDysfunction', 'Disfunção Cardiovascular (Phoenix)', [
        ['0', '0: Normal (sem vasoativos, PAM normal e lactato < 5 mmol/L)'],
        ['1', '1: Uma droga vasoativa contínua, lactato ≥ 5 mmol/L ou PAM < percentil 5'],
        ['2', '2: Duas ou mais drogas vasoativas em infusão contínua'],
      ]),
      choice('coagDysfunction', 'Disfunção de Coagulação (Phoenix)', [
        ['0', '0: Normal'],
        ['1', '1: Plaquetas < 100.000/mm³, INR > 1,4 ou Fibrinogênio < 100 mg/dL'],
      ]),
      choice('neuroDysfunction', 'Disfunção Neurológica (Phoenix)', [
        ['0', '0: Normal (Glasgow 11–15, pupilas reativas)'],
        ['1', '1: Glasgow ≤ 10 ou uma pupila não reativa'],
        ['2', '2: Glasgow ≤ 10 com pupilas fixas bilateralmente'],
      ]),
    ],
    formula:
      'SIRS: ≥ 2 critérios (sendo obrigatório temperatura ou leucograma). Sepse (Phoenix 2024): escore Phoenix ≥ 2 pontos na vigência de infecção confirmada ou suspeita. Choque séptico: sepse Phoenix com disfunção cardiovascular (vasoativos).',
    references: [
      [
        'Schlapbach LJ et al. International Consensus Criteria for Pediatric Sepsis (Phoenix Criteria). JAMA 2024',
        'https://jamanetwork.com/journals/jama/fullarticle/2814297',
      ],
      ['Goldstein B et al. International pediatric sepsis consensus conference. Pediatr Crit Care Med 2005', 'https://pubmed.ncbi.nlm.nih.gov/15636651/'],
    ],
    calculate: v => {
      const sirsCount = Number(v.tempSirs) + Number(v.heartRateSirs) + Number(v.respRateSirs) + Number(v.leukoSirs);
      const sirsPositive = sirsCount >= 2 && (Number(v.tempSirs) === 1 || Number(v.leukoSirs) === 1);
      const phoenixScore =
        Number(v.respDysfunction) + Number(v.cvDysfunction) + Number(v.coagDysfunction) + Number(v.neuroDysfunction);

      let classification = '';
      let interpretation = '';
      let status = 'normal';

      if (phoenixScore >= 2 && Number(v.cvDysfunction) >= 1) {
        classification = `CHOQUE SÉPTICO PEDIÁTRICO (Phoenix: ${phoenixScore} pts)`;
        interpretation =
          'CRÍTICO: Presença de infecção com disfunção cardiovascular com necessidade de vasoativos ou hipoperfusão grave. Iniciar imediatamente: acesso venoso/intraósseo, ressuscitação volêmica cautelosa, antibioticoterapia de largo espectro na PRIMEIRA HORA e suporte em UTI pediátrica.';
        status = 'danger';
      } else if (phoenixScore >= 2) {
        classification = `SEPSE PEDIÁTRICA CONFIRMADA (Phoenix: ${phoenixScore} pts)`;
        interpretation =
          'ALERTA GRAVE: Escore Phoenix ≥ 2 indica disfunção orgânica potencialmente fatal decorrente de resposta desregulada à infecção. Abrir protocolo de sepse: colher hemoculturas e exames, iniciar antibioticoterapia empírica imediata e monitorar débito urinário e perfusão.';
        status = 'danger';
      } else if (sirsPositive) {
        classification = 'SIRS Presente (Sem disfunção Phoenix)';
        interpretation =
          'Critérios de SIRS preenchidos conforme consenso pediátrico. Sem evidência de disfunção orgânica pelo escore Phoenix no momento. Investigar ativamente o foco infeccioso e manter vigilância rigorosa de sinais vitais.';
        status = 'warning';
      } else {
        classification = 'Sem critérios de SIRS e escore Phoenix < 2';
        interpretation =
          'Parâmetros fisiológicos não indicam disfunção orgânica ou resposta inflamatória sistêmica no momento da avaliação.';
        status = 'normal';
      }

      return {
        value: phoenixScore,
        unit: `pontos Phoenix (${sirsPositive ? 'SIRS Presente' : 'SIRS Ausente'})`,
        classification,
        interpretation,
        status,
      };
    },
  },

  'roma-iv': {
    population:
      'Critérios diagnósticos formais de Roma IV para Constipação Intestinal Funcional em lactentes e crianças.',
    fields: [
      choice('ageGroup', 'Faixa etária do paciente', [
        ['under4', 'Lactentes e crianças até 4 anos de idade'],
        ['over4', 'Crianças ≥ 4 anos e adolescentes'],
      ]),
      yesNo('bowelFreq', 'Duas ou menos evacuações por semana?'),
      yesNo('incontinence', 'Pelo menos 1 episódio de escape/incontinência fecal por semana (se já desfraldada)?'),
      yesNo('retentive', 'Histórico de postura retentiva excessiva ou retenção voluntária de fezes?'),
      yesNo('painful', 'Histórico de evacuações dolorosas ou fezes duras/em cíbalos (Bristol tipos 1 ou 2)?'),
      yesNo('fecalMass', 'Presença de grande massa fecal no abdome ou reto na palpação/toque retal?'),
      yesNo('largeStool', 'Histórico de fezes de grande diâmetro que chegam a obstruir o vaso sanitário?'),
    ],
    formula:
      'Pelo menos 2 dos 6 critérios presentes durante pelo menos 1 mês, sem evidência de causas orgânicas (Roma IV).',
    references: [
      [
        'Hyams JS et al. Functional Disorders: Children and Adolescents. Gastroenterology 2016 (Rome IV)',
        'https://www.gastrojournal.org/article/S0016-5085(16)00181-5/fulltext',
      ],
      ['Sociedade Brasileira de Pediatria — Manual de Constipação Intestinal na Infância', 'https://www.sbp.com.br'],
    ],
    calculate: v => {
      const positiveCount =
        Number(v.bowelFreq) +
        Number(v.incontinence) +
        Number(v.retentive) +
        Number(v.painful) +
        Number(v.fecalMass) +
        Number(v.largeStool);
      const isPositive = positiveCount >= 2;
      let classification = '';
      let interpretation = '';
      let status = 'normal';

      if (isPositive) {
        classification = `Critérios preenchidos para Constipação Funcional (${positiveCount}/6 critérios)`;
        interpretation =
          'Diagnóstico clínico de Constipação Intestinal Funcional confirmado pelos critérios de Roma IV (≥ 2 critérios presentes). Pilares do tratamento: 1) Desimpactação fecal inicial se houver fecaloma (PEG 4000 em dose alta por 3–5 dias ou enema); 2) Manutenção laxativa (PEG 4000 0,5–1 g/kg/dia por no mínimo 2 a 3 meses); 3) Reeducação do hábito evacuatório pós-refeições; 4) Aumento progressivo de fibras e hidratação adequada.';
        status = 'warning';
      } else {
        classification = `Critérios insuficientes (${positiveCount}/6 critérios)`;
        interpretation =
          'Menos de 2 critérios preenchidos. Não preenche a definição formal de constipação funcional pelos critérios de Roma IV. Investigar padrão dietético, rotina evacuatória e possíveis fatores desencadeantes.';
        status = 'normal';
      }

      return {
        value: positiveCount,
        unit: 'critérios de Roma IV (de 6)',
        classification,
        interpretation,
        status,
      };
    },
  },

  cdlqi: {
    population:
      'Children’s Dermatology Life Quality Index (CDLQI): questionário validado para avaliar o impacto de afecções dermatológicas (dermatite atópica, psoríase, vitiligo, alopécia) na qualidade de vida de crianças e adolescentes de 4 a 16 anos.',
    fields: [
      choice('q1', '1. Quanta coceira, dor, ardor ou queimação sua pele teve na última semana?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q2', '2. Quanto você se sentiu envergonhado, tímido ou chateado por causa da sua pele?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q3', '3. Quanto sua pele atrapalhou suas amizades ou relacionamentos?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q4', '4. Quanto você teve que mudar as roupas ou calçados que usou por causa da pele?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q5', '5. Quanto sua pele atrapalhou suas brincadeiras, saídas ou esportes?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q6', '6. Você evitou nadar ou praticar outras atividades por causa da sua pele?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q7', '7. Quanto sua pele atrapalhou seus estudos ou faltou à escola/creche?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q8', '8. Quanto os tratamentos (pomadas, cremes, remédios) foram um incômodo?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q9', '9. Quanto sua pele atrapalhou seu sono na última semana?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
      choice('q10', '10. Quanto sua pele atrapalhou passeios ou férias na última semana?', [
        ['3', 'Muito (3)'],
        ['2', 'Bastante (2)'],
        ['1', 'Um pouco (1)'],
        ['0', 'Nada (0)'],
      ]),
    ],
    formula:
      'Soma de 10 perguntas respondidas sobre a última semana (0 a 30 pontos). Quanto maior a pontuação, maior o impacto na qualidade de vida da criança.',
    references: [
      [
        'Lewis-Jones MS, Finlay AY. The Children’s Dermatology Life Quality Index (CDLQI). Br J Dermatol 1995',
        'https://pubmed.ncbi.nlm.nih.gov/7547142/',
      ],
    ],
    calculate: v => {
      const val = sum(v);
      let classification = '';
      let interpretation = '';
      let status = 'normal';

      if (val >= 19) {
        classification = `Efeito EXTREMAMENTE GRANDE na vida da criança (${val}/30 pts)`;
        interpretation =
          'Impacto severo na qualidade de vida global, bem-estar emocional, sono e sociabilização. Forte indicação de escalonamento do tratamento dermatológico e suporte psicossocial.';
        status = 'danger';
      } else if (val >= 13) {
        classification = `Efeito MUITO GRANDE na vida da criança (${val}/30 pts)`;
        interpretation =
          'Impacto muito significativo. Avaliar necessidade de revisão do plano terapêutico e controle de sintomas como prurido e perturbação do sono.';
        status = 'danger';
      } else if (val >= 7) {
        classification = `Efeito MODERADO na vida da criança (${val}/30 pts)`;
        interpretation =
          'Impacto moderado nas atividades diárias e no humor. Otimizar tratamento tópico e hidratantes de barreira.';
        status = 'warning';
      } else if (val >= 2) {
        classification = `PEQUENO EFEITO na vida da criança (${val}/30 pts)`;
        interpretation = 'Impacto leve na qualidade de vida. Manter controle ambulatorial.';
        status = 'normal';
      } else {
        classification = `SEM EFEITO na vida da criança (${val}/30 pts)`;
        interpretation = 'Doença cutânea com impacto imperceptível ou nulo na qualidade de vida no período avaliado.';
        status = 'normal';
      }

      return {
        value: val,
        unit: '/ 30 pontos (CDLQI)',
        classification,
        interpretation,
        status,
      };
    },
  },
};

export function evaluateClinical(definition, raw) {
  const values = {};
  for (const field of definition.fields) {
    if (raw[field.id] == null || String(raw[field.id]).trim() === '') {
      return { error: 'Preencha todos os critérios. Campos vazios não contam como ausência de sintomas.' };
    }
    if (field.options) {
      if (!field.options.some(([value]) => String(value) === String(raw[field.id]))) {
        return { error: `Valor inválido: ${field.label}.` };
      }
      values[field.id] = raw[field.id];
    } else {
      const n = numberInput(raw[field.id]);
      if (!Number.isFinite(n) || n < field.min || n > field.max) {
        return { error: `${field.label}: informe um valor entre ${field.min} e ${field.max}.` };
      }
      values[field.id] = n;
    }
  }
  return definition.calculate(values);
}
