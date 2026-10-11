import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'sincronia',
    label: 'Sincronia Toracoabdominal',
    subtitle: 'Coordenação entre os movimentos da caixa torácica e abdome',
    icon: '🫀',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Movimento sincrônico', desc: 'Tórax e abdome expandem-se juntos harmonicamente', value: 0 },
      { label: 'Atraso inspiratório', desc: 'Pequeno atraso entre a expansão abdominal e a elevação torácica', value: 1 },
      { label: 'Movimento paradoxal ("gangorra")', desc: 'Tórax afunda enquanto o abdome expande na inspiração', value: 2 },
    ],
  },
  {
    id: 'intercostal',
    label: 'Tiragem Intercostal',
    subtitle: 'Depressão visível entre os arcos costais durante o esforço',
    icon: '🔍',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Ausente', desc: 'Sem retração perceptível nos espaços intercostais', value: 0 },
      { label: 'Discreta', desc: 'Retração intercostal leve, visível apenas com inspeção atenta', value: 1 },
      { label: 'Acentuada', desc: 'Retração funda e nítida em múltiplos espaços intercostais', value: 2 },
    ],
  },
  {
    id: 'xifoide',
    label: 'Retração Xifoidiana',
    subtitle: 'Afundamento da ponta do esterno / apêndice xifoide',
    icon: '📍',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Ausente', desc: 'Sem depressão do apêndice xifoide na inspiração', value: 0 },
      { label: 'Discreta', desc: 'Leve retração da ponta do apêndice xifoide', value: 1 },
      { label: 'Acentuada', desc: 'Afundamento xifoidiano proeminente e constante', value: 2 },
    ],
  },
  {
    id: 'nasal',
    label: 'Batimento de Asa de Nariz',
    subtitle: 'Dilatação reflexa das narinas para reduzir resistência aérea',
    icon: '👃',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Ausente', desc: 'Abertura estável das narinas durante todo o ciclo', value: 0 },
      { label: 'Discreto', desc: 'Alargamento leve e intermitente das asas nasais na inspiração', value: 1 },
      { label: 'Acentuado', desc: 'Dilatação nítida, ampla e contínua a cada incursão respiratória', value: 2 },
    ],
  },
  {
    id: 'gemido',
    label: 'Gemido Expiratório',
    subtitle: 'Mecanismo de aumento fisiológico de PEEP por fechamento parcial de glote',
    icon: '🔊',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Ausente', desc: 'Expiração livre e silenciosa sem ruídos audíveis', value: 0 },
      { label: 'Audível ao estetoscópio', desc: 'Ruído expiratório abafado, captado apenas à ausculta direta', value: 1 },
      { label: 'Audível a distância', desc: 'Gemido contínuo e alto, perfeitamente audível sem estetoscópio', value: 2 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Sem Desconforto',
    range: '0 ponto',
    desc: 'Padrão respiratório fisiológico normal. Manter vigilância de rotina.',
    status: 'normal',
  },
  {
    label: 'Desconforto Leve',
    range: '1 a 3 pontos',
    desc: 'Disfunção respiratória inicial. Monitorização contínua e oxigenoterapia se SatO₂ < 91%.',
    status: 'warning',
  },
  {
    label: 'Desconforto Moderado',
    range: '4 a 6 pontos',
    desc: 'Sobrecarga respiratória importante. Indicação de CPAP nasal precoce.',
    status: 'warning',
  },
  {
    label: 'Desconforto Grave',
    range: '7 a 10 pontos',
    desc: 'Insuficiência respiratória com iminência de fadiga. Indicação de suporte invasivo / IOT.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'Ao contrário de outros escores, no Silverman-Andersen maior pontuação significa pior gravidade: 0 é o padrão normal e 10 é a falência respiratória máxima.',
  'Avaliar o recém-nascido preferencialmente em repouso térmico e calmo; o choro intenso pode falsear tiragem e batimento de asa nasal.',
  'O gemido expiratório reflete fechamento parcial da glote como tentativa biológica de reter volume pulmonar (auto-PEEP); sua presença indica gravidade.',
  'Reavaliações seriadas são essenciais para monitorar resposta ao CPAP nasal ou necessidade de intubação e surfactante.',
];

function getClassification(total) {
  if (total === 0) {
    return {
      label: 'Sem Desconforto Respiratório (0 pt)',
      status: 'normal',
      description: 'Padrão ventilatório totalmente sincrônico e livre de sinais de esforço.',
      conduta: 'Cuidados habituais de transição ou alojamento conjunto. Vigilância de sinais vitais de rotina.',
    };
  }
  if (total <= 3) {
    return {
      label: 'Desconforto Respiratório Leve (' + total + ' pts)',
      status: 'warning',
      description: 'Sinais leves de sobrecarga respiratória sem falência biomecânica.',
      conduta: 'Desobstrução de vias aéreas superiores, manter aquecimento neutro, oximetria de pulso contínua; O₂ suplementar se SatO₂ < 91%.',
    };
  }
  if (total <= 6) {
    return {
      label: 'Desconforto Respiratório Moderado (' + total + ' pts)',
      status: 'warning',
      description: 'Esforço muscular evidente com risco de fadiga do diafragma neonatal.',
      conduta: 'Iniciar suporte com CPAP nasal (pressão 5–6 cmH₂O), gasometria arterial e Rx de tórax. Alvo SatO₂ 91–95%.',
    };
  }
  return {
    label: 'Desconforto Respiratório Grave (' + total + ' pts)',
    status: 'danger',
    description: 'Falência respiratória manifesta com dissociação toracoabdominal grave e/ou gemência contínua.',
    conduta: 'Indicação de intubação orotraqueal em sequência rápida e ventilação mecânica invasiva. Investigar SDR / SAM / sepse neonatal.',
  };
}

export default function SilvermanAnderson() {
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
      title="Boletim de Silverman-Andersen"
      eyebrow="Score Neonatal • Desconforto Respiratório"
      subtitle="Avaliação objetiva e seriada da gravidade da dificuldade respiratória no recém-nascido em sala de parto e UTI neonatal"
      icon3d="🫁"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={10}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Silverman WA, Andersen DH. A controlled clinical trial of effects of water mist on obstructive respiratory signs. Pediatrics. 1956;17(1):1-10; SBP Neonatologia (2022)."
    />
  );
}