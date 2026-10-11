import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'sibilancias',
    label: 'Sibilâncias',
    subtitle: 'Intensidade e fase respiratória da ausculta de sibilos',
    icon: '🌬️',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Sem sibilâncias', desc: 'Murmúrio vesicular limpo sem ruídos adventícios', value: 0 },
      { label: 'Final da expiração', desc: 'Sibilos discretos audíveis apenas no final da expiração', value: 1 },
      { label: 'Toda a expiração', desc: 'Sibilância em toda a fase expiratória ao estetoscópio', value: 2 },
      { label: 'Inspiratórios e expiratórios / Audíveis a distância', desc: 'Sibilos bifásicos ou audíveis sem estetoscópio', value: 3 },
    ],
  },
  {
    id: 'retracoes',
    label: 'Retrações / Tiragens',
    subtitle: 'Recrutamento de musculatura acessória da respiração',
    icon: '💪',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Sem retrações', desc: 'Respiração normal sem tiragem visível', value: 0 },
      { label: 'Intercostais leves', desc: 'Tiragem intercostal baixa discreta', value: 1 },
      { label: 'Intercostais + Subcostais', desc: 'Retrações moderadas em múltiplos sítios', value: 2 },
      { label: 'Intercostais + Subcostais + Supraesternais / Fúrcula', desc: 'Esforço respiratório intenso e generalizado', value: 3 },
    ],
  },
  {
    id: 'entrada_ar',
    label: 'Entrada de Ar (Murmúrio Vesicular)',
    subtitle: 'Simetria e volume da ventilação pulmonar',
    icon: '🫁',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Normal / Simétrica', desc: 'Boa expansibilidade e murmúrio fisiológico bilateral', value: 0 },
      { label: 'Discreta diminuição', desc: 'Redução leve da ventilação basal', value: 1 },
      { label: 'Importante diminuição', desc: 'Hipoventilação acentuada difusa', value: 2 },
      { label: 'Ausente / Mínima ("Tórax silencioso")', desc: 'Passagem aérea quase nula por broncoespasmo grave ou exaustão', value: 3 },
    ],
  },
  {
    id: 'cianose',
    label: 'Cianose',
    subtitle: 'Sinal de hipoxemia tecidual e insuficiência da troca gasosa',
    icon: '🎨',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Sem cianose (Rosado)', desc: 'Coloração cutaneomucosa normal em ar ambiente', value: 0 },
      { label: 'Perioral em repouso', desc: 'Cianose circunscrita ao redor dos lábios', value: 1 },
      { label: 'Generalizada em repouso', desc: 'Cianose central de lábios, língua e tronco', value: 2 },
    ],
  },
  {
    id: 'fr',
    label: 'Frequência Respiratória',
    subtitle: 'Incursões por minuto contadas por 60 segundos',
    icon: '⏱️',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: '≤ 30 ipm', desc: 'Eupneia ou frequência basal', value: 0 },
      { label: '31 a 45 ipm', desc: 'Taquipneia leve', value: 1 },
      { label: '46 a 60 ipm', desc: 'Taquipneia moderada a acentuada', value: 2 },
      { label: '> 60 ipm', desc: 'Taquipneia grave com sobrecarga ventilatória', value: 3 },
    ],
  },
  {
    id: 'fc',
    label: 'Frequência Cardíaca',
    subtitle: 'Avaliação da resposta simpática ao estresse respiratório',
    icon: '❤️',
    iconBg: 'bg-red-50 text-red-600',
    options: [
      { label: '≤ 120 bpm', desc: 'Frequência cardíaca basal para lactentes', value: 0 },
      { label: '121 a 140 bpm', desc: 'Taquicardia compensatória discreta', value: 1 },
      { label: '> 140 bpm', desc: 'Taquicardia sustentada por hipóxia ou estresse', value: 2 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Desconforto Leve',
    range: '0 a 3 pontos',
    desc: 'Tratamento ambulatorial/suporte domiciliar, vigilância clínica e lavagem nasal.',
    status: 'normal',
  },
  {
    label: 'Desconforto Moderado',
    range: '4 a 6 pontos',
    desc: 'Observação hospitalar/internação, O₂ suplementar se SatO₂ < 94%, hidratação.',
    status: 'warning',
  },
  {
    label: 'Desconforto Grave',
    range: '7 a 9 pontos',
    desc: 'Internação hospitalar imediata, considerar suporte não-invasivo (CNAF/CPAP).',
    status: 'warning',
  },
  {
    label: 'Muito Grave / Falência',
    range: '10 a 16 pontos',
    desc: 'Insuficiência respiratória iminente. Indicação de UTI pediátrica e suporte ventilatório.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'A Escala de Wood-Downes modificada por Ferrés é amplamente utilizada para estratificar gravidade na Bronquiolite Viral Aguda (BVA) e crises de sibilância em lactentes.',
  'A monitorização contínua da saturação de oxigênio (alvo ≥ 92–94%) e estado de hidratação são pilares fundamentais.',
  'Reavaliações seriadas são mandatórias para identificar precocemente necessidade de suporte respiratório não-invasivo (CNAF).',
];

function getClassification(total) {
  if (total <= 3) {
    return {
      label: 'Desconforto Leve (' + total + ' pts)',
      status: 'normal',
      description: 'Quadro respiratório brando com estabilidade da troca gasosa.',
      conduta: 'Suporte domiciliar com cabeceira elevada 30°, lavagem nasal frequente com SF 0,9%, aleitamento mantido e orientação de sinais de alarme.',
    };
  }
  if (total <= 6) {
    return {
      label: 'Desconforto Moderado (' + total + ' pts)',
      status: 'warning',
      description: 'Obstrução de vias aéreas médias/baixas com aumento do trabalho respiratório.',
      conduta: 'Internação em enfermaria para observação, oxigênio suplementar se SatO₂ < 94%, higiene nasal rigorosa, hidratação oral fracionada ou venosa e monitorização de SpO₂/FC.',
    };
  }
  if (total <= 9) {
    return {
      label: 'Desconforto Grave (' + total + ' pts)',
      status: 'warning',
      description: 'Trabalho respiratório intenso com risco de exaustão muscular diafragmática.',
      conduta: 'Internação imediata, oxigenoterapia em alto fluxo (CNAF) ou CPAP, acesso venoso, jejum/hidratação venosa e considerar vaga em UTI pediátrica.',
    };
  }
  return {
    label: 'Muito Grave / Risco de Falência (' + total + ' pts)',
    status: 'danger',
    description: 'Insuficiência respiratória manifesta com risco imediato de parada respiratória.',
    conduta: 'Transferência imediata para UTI Pediátrica, suporte com VNI ou Intubação Orotraqueal em sequência rápida, monitorização multiparamétrica contínua.',
  };
}

export default function WoodDownes() {
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
      title="Escore de Wood-Downes Modificado"
      eyebrow="Score Respiratório • Bronquiolite / Asma"
      subtitle="Avaliação da gravidade do desconforto respiratório agudo em lactentes com Bronquiolite Viral Aguda (Ferrés et al.)"
      icon3d="🫁"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={16}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Wood DW et al. Am J Dis Child. 1972; Ferrés J et al. An Esp Pediatr. 1980; Diretrizes SBP para Bronquiolite Viral Aguda."
    />
  );
}