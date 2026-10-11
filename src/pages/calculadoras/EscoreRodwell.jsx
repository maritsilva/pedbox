import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'leucocitos',
    label: 'Leucocitose ou Leucopenia',
    subtitle: '≥ 25.000 ao nascer, ≥ 30.000 (12–24h), ≥ 21.000 (> 48h) ou ≤ 5.000/mm³',
    icon: '🔬',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Normal para a idade pós-natal', desc: 'Contagem total dentro da faixa esperada', value: 0 },
      { label: 'Leucocitose ou Leucopenia acentuada', desc: 'Valores anormais conforme o tempo de vida em horas', value: 1 },
    ],
  },
  {
    id: 'neutrofilos',
    label: 'Neutrofilia ou Neutropenia Absoluta',
    subtitle: 'Neutrófilos totais fora dos percentis normais de Manroe / Mouzinho',
    icon: '🧫',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Neutrófilos normais', desc: 'Dentro dos limites da curva de neutrófilos neonatais', value: 0 },
      { label: 'Neutrofilia ou Neutropenia', desc: 'Contagem absoluta de neutrófilos alterada para as horas de vida', value: 1 },
    ],
  },
  {
    id: 'imaturos',
    label: 'Neutrófilos Imaturos Elevados (Bastonetes / Metamielócitos)',
    subtitle: '≥ 1.440/mm³ nas primeiras 60h ou ≥ 600/mm³ após 60h',
    icon: '📊',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Formas jovens normais', desc: 'Sem desvio relevante à esquerda no hemograma', value: 0 },
      { label: 'Elevação de formas jovens / imaturas', desc: 'Contagem absoluta de bastonetes ou formas jovens acima do corte', value: 1 },
    ],
  },
  {
    id: 'indice',
    label: 'Índice Neutrofílico Aumentado (Razão I/T)',
    subtitle: 'Razão imaturos / totais: ≥ 0,16 (24h), ≥ 0,13 (24–60h) ou ≥ 0,12 (> 60h)',
    icon: '📐',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Razão I/T normal', desc: 'Proporção equilibrada de neutrófilos maduros', value: 0 },
      { label: 'Razão I/T aumentada', desc: 'Desvio importante em favor dos precursores medulares', value: 1 },
    ],
  },
  {
    id: 'razao',
    label: 'Razão Imaturos / Maduros (I/M) Aumentada',
    subtitle: 'Razão entre neutrófilos imaturos e segmentados ≥ 0,3',
    icon: '⚖️',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Razão I/M < 0,3', desc: 'Proporção aceitável de segmentados maduros', value: 0 },
      { label: 'Razão I/M ≥ 0,3', desc: 'Aumento expressivo da liberação de formas imaturas', value: 1 },
    ],
  },
  {
    id: 'degeneracao',
    label: 'Alterações Degenerativas nos Neutrófilos',
    subtitle: 'Presença de vacuolização citoplasmática em neutrófilos',
    icon: '🔭',
    iconBg: 'bg-purple-50 text-purple-600',
    options: [
      { label: 'Ausente', desc: 'Morfologia leucocitária habitual', value: 0 },
      { label: 'Presente (vacuolização)', desc: 'Vacúolos citoplasmáticos tóxicos visíveis na hematoscopia', value: 1 },
    ],
  },
  {
    id: 'plaquetas',
    label: 'Plaquetopenia Neonatal',
    subtitle: 'Plaquetas ≤ 150.000/mm³ no período neonatal',
    icon: '🩸',
    iconBg: 'bg-red-50 text-red-600',
    options: [
      { label: '> 150.000 /mm³', desc: 'Contagem de plaquetas preservada', value: 0 },
      { label: '≤ 150.000 /mm³', desc: 'Trombocitopenia neonatal documentada', value: 1 },
    ],
  },
  {
    id: 'citoplasma',
    label: 'Corpúsculos de Döhle / Granulações Tóxicas',
    subtitle: 'Sinais citoplasmáticos de ativação inflamatória grave',
    icon: '🧬',
    iconBg: 'bg-blue-50 text-blue-600',
    options: [
      { label: 'Ausente', desc: 'Sem grânulos grosseiros ou inclusões de Döhle', value: 0 },
      { label: 'Presente', desc: 'Granulações tóxicas acentuadas ou corpos de Döhle detectados', value: 1 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Sepse Improvável',
    range: '0 a 2 pontos',
    desc: 'Valor Preditivo Negativo de ~99%. Baixíssima probabilidade de sepse confirmada se assintomático.',
    status: 'normal',
  },
  {
    label: 'Sepse Possível',
    range: '3 a 4 pontos',
    desc: 'Probabilidade intermediária. Coletar culturas, PCR seriada e reavaliar clínica com cautela.',
    status: 'warning',
  },
  {
    label: 'Sepse Altamente Provável',
    range: '5 a 8 pontos',
    desc: 'Sensibilidade e especificidade elevadas. Indicação formal de antibioticoterapia imediata.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'O escore hematológico de Rodwell apresenta excelente Valor Preditivo Negativo (VPN ~99%) quando ≤ 2 em recém-nascidos sem fatores de risco maiores.',
  'A sensibilidade é significativamente maior quando o hemograma é coletado entre 4 a 12 horas após o parto, em comparação ao sangue de cordão umbilical.',
  'Critérios laboratoriais devem sempre ser interpretados em conjunto com história gestacional materna (GBS, febre, bolsa rota) e exame físico do RN.',
];

function getClassification(total) {
  if (total <= 2) {
    return {
      label: 'Sepse Improvável (Rodwell ' + total + ')',
      status: 'normal',
      description: 'Baixo risco de infecção bacteriana neonatal (VPN ~99%).',
      conduta: 'Vigilância clínica de sinais de infecção. Não há indicação de antibioticoterapia na ausência de sintomas clínicos ou fatores de risco maiores.',
    };
  }
  if (total <= 4) {
    return {
      label: 'Sepse Possível (Rodwell ' + total + ')',
      status: 'warning',
      description: 'Alterações hematológicas suspeitas com probabilidade intermediária.',
      conduta: 'Investigação laboratorial adicional (hemoculturas, líquor se indicado, PCR ultrassensível). Manter sob observação estrita e considerar início de ampicilina + gentamicina.',
    };
  }
  return {
    label: 'Sepse Provável (Rodwell ' + total + ')',
    status: 'danger',
    description: 'Forte probabilidade hematológica de sepse bacteriana neonatal precoce.',
    conduta: 'Iniciar imediatamente antibioticoterapia empírica parenteral (ex: Ampicilina + Gentamicina) após coleta de hemocultura. Monitorização contínua em UTI neonatal.',
  };
}

export default function EscoreRodwell() {
  const [scores, setScores] = useState({});

  const handleSelectOption = (criterionId, value) => {
    setScores((prev) => ({
      ...prev,
      [criterionId]: value,
    }));
  };

  const handleReset = () => {
    setScores({});
  };

  const allAnswered = CRITERIA.every((c) => scores[c.id] !== undefined);
  const total = Object.values(scores).reduce((a, b) => a + Number(b), 0);
  const classification = allAnswered ? getClassification(total) : null;

  return (
    <ScoreCalculatorLayout
      title="Escore de Rodwell"
      eyebrow="Score Neonatal • Infectologia"
      subtitle="Escore hematológico para estimativa da probabilidade diagnóstica de sepse bacteriana neonatal precoce"
      icon3d="🩸"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={8}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Rodwell RL et al. Hematologic scoring system in early diagnosis of sepsis in neonates. Pediatr Infect Dis J. 1993; Documento Científico SBP Sepse Neonatal Precoce."
    />
  );
}