const existing = [
  ['ictericia', 'Icterícia neonatal (Nomograma AAP)', 'Neonatologia', 'Bilirrubina, exames seriados e nomogramas AAP 2022'],
  ['horas-de-vida', 'Horas de vida', 'Neonatologia', 'Tempo desde o nascimento até agora ou até um horário escolhido'],
  ['idade-gestacional', 'Idade gestacional', 'Gestação', 'DUM, ultrassom, DPP e transferência embrionária'],
  ['apgar', 'APGAR', 'Neonatologia', 'Vitalidade do recém-nascido'],
  ['silverman-anderson', 'Silverman-Anderson', 'Neonatologia', 'Desconforto respiratório neonatal'],
  ['rodwell', 'Escore de Rodwell', 'Neonatologia', 'Escore hematológico neonatal'],
  ['idade-gestacional-corrigida', 'Idade corrigida', 'Neonatologia', 'Idade ajustada para prematuridade'],
  ['glasgow-pediatrico', 'Glasgow pediátrico', 'Urgência e UTI', 'Avaliação do nível de consciência'],
  ['pews', 'PEWS', 'Urgência e UTI', 'Alerta precoce de deterioração'],
  ['sipa', 'SIPA', 'Urgência e UTI', 'Índice de choque ajustado por idade'],
  ['pram', 'PRAM', 'Respiratório', 'Pediatric Respiratory Assessment Measure — asma'],
  ['wood-downes', 'Wood-Downes', 'Respiratório', 'Gravidade do desconforto respiratório'],
  ['pas-asma', 'PAS — Asma', 'Respiratório', 'Pediatric Asthma Score'],
  ['imc', 'IMC pediátrico', 'Crescimento', 'Índice de massa corporal e referência por idade'],
  ['perimetro-cefalico', 'Perímetro cefálico', 'Crescimento', 'Avaliação do crescimento craniano'],
  ['alvo-parental', 'Alvo parental', 'Crescimento', 'Estimativa da estatura-alvo familiar'],
  ['pressao-arterial', 'Pressão arterial pediátrica', 'Crescimento', 'Referências por idade, sexo e estatura'],
  ['hidratacao', 'Hidratação venosa', 'Outras ferramentas', 'Manutenção e expansão: avaliação individual necessária'],
  ['centor-mcisaac', 'Centor / McIsaac', 'Outras ferramentas', 'Escore para faringoamigdalite'],
];

const additions = [
  ['superficie-corporal', 'Superfície corporal', 'Crescimento', 'Mosteller e Haycock'],
  ['tfg-pediatrica', 'TFG pediátrica', 'Rim', 'Schwartz e CKiD U25 — creatinina'],
  ['pas-apendicite', 'PAS — Apendicite', 'Gastro e dermatologia', 'Pediatric Appendicitis Score de Samuel'],
  ['pts', 'Pediatric Trauma Score', 'Urgência e UTI', 'Escore de trauma pediátrico'],
  ['rdai', 'RDAI', 'Respiratório', 'Sibilância e retrações'],
  ['gina', 'Controle da asma (GINA 2026)', 'Respiratório', 'Critérios GINA 2026 para controle dos sintomas nas últimas 4 semanas'],
  ['sirs-sepsis', 'SIRS e Sepse Pediátrica', 'Urgência e UTI', 'Critérios de SIRS (Goldstein) e Phoenix Sepsis Score 2024'],
  ['capurro', 'Capurro somático', 'Neonatologia', 'Estimativa de idade gestacional somática'],
  ['capurro-neuro', 'Capurro neurológico', 'Neonatologia', 'Estimativa de idade gestacional somatoneurológica'],
  ['finnegan', 'Escala de Finnegan', 'Neonatologia', 'Avaliação da síndrome de abstinência neonatal'],
  ['downes', 'Escore de Downes', 'Neonatologia', 'Avaliação do desconforto respiratório neonatal'],
  ['new-ballard', 'New Ballard Score', 'Neonatologia', 'Maturidade física e neuromuscular (20 a 44 semanas)'],
  ['snappe-ii', 'SNAPPE-II', 'Neonatologia', 'Gravidade neonatal e risco de mortalidade em UTI'],
  ['estatura-segmentar', 'Estatura por medida segmentar', 'Crescimento', 'Estimativa por altura de joelho (Stevenson/Chumlea) ou tíbia'],
  ['roma-iv', 'Critérios de Roma IV', 'Gastro e dermatologia', 'Constipação funcional e transtornos gastrointestinais pediátricos'],
  ['scorad', 'SCORAD', 'Gastro e dermatologia', 'Gravidade da dermatite atópica'],
  ['cdlqi', 'CDLQI', 'Gastro e dermatologia', 'Qualidade de vida em dermatologia pediátrica'],
];

export const CALCULATORS = [
  ...existing.map(([id, label, category, desc]) => ({
    id,
    label,
    category,
    desc,
    path: `/${id}`,
    status: 'available',
    clinicalReview: 'reviewed',
    icon: '🧮',
  })),
  ...additions.map(([id, label, category, desc]) => ({
    id,
    label,
    category,
    desc,
    path: `/calculadoras/${id}`,
    status: 'available',
    clinicalReview: 'reviewed',
    icon: '🧮',
  })),
];

// Proven classification defect; retain original implementation for audit only.
const bloodPressure = CALCULATORS.find(tool => tool.id === 'pressao-arterial');
if (bloodPressure) {
  Object.assign(bloodPressure, {
    status: 'blocked',
    blockedReason:
      'A classificação anterior podia reduzir valores de hipertensão à categoria “pressão elevada” e confundia 12 mmHg acima do P95 com pontos percentuais. Cálculo suspenso até corrigir a classificação e conferir as tabelas por idade, sexo e estatura.',
  });
}

export const normalizeSearch = text =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
