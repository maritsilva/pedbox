import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'ocular',
    label: 'Abertura Ocular',
    subtitle: 'Avaliação da resposta aos estímulos ambientais e álgicos',
    icon: '👁️',
    iconBg: 'bg-blue-50 text-blue-600',
    options: [
      { label: 'Espontânea', desc: 'Olhos abertos espontaneamente, contato visual', value: 4 },
      { label: 'Ao estímulo verbal / chamada', desc: 'Abre os olhos quando chamado pelo nome ou voz alta', value: 3 },
      { label: 'Ao estímulo doloroso / pressão', desc: 'Abre os olhos somente após estímulo tátil firme ou dor', value: 2 },
      { label: 'Nenhuma resposta', desc: 'Não abre os olhos a nenhum estímulo', value: 1 },
    ],
  },
  {
    id: 'verbal',
    label: 'Melhor Resposta Verbal',
    subtitle: 'Adaptada para idade e desenvolvimento neuropsicomotor',
    icon: '💬',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Balbucia, sorri, palavras apropriadas / orientado', desc: 'Lalação normal, sorri, interage socialmente ou fala orientada', value: 5 },
      { label: 'Choro consolável, interação inadequada / confuso', desc: 'Chora mas acalma no colo da mãe/cuidador; desorientado', value: 4 },
      { label: 'Choro persistente inadequado ou gemência / palavras soltas', desc: 'Inconsolável, agitado, uso isolado de palavras desconexas', value: 3 },
      { label: 'Sons incompreensíveis, grunhidos à dor', desc: 'Grunhidos inespecíficos ou gemidos reflexos', value: 2 },
      { label: 'Nenhuma resposta verbal', desc: 'Ausência total de emissão vocal mesmo à dor', value: 1 },
    ],
  },
  {
    id: 'motora',
    label: 'Melhor Resposta Motora',
    subtitle: 'Avalia a integridade do neuroeixo e resposta cortical',
    icon: '🤚',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Movimentos espontâneos ou obedece comandos', desc: 'Movimentação normal dos 4 membros, alcança brinquedos', value: 6 },
      { label: 'Localiza dor ou retira ao toque', desc: 'Tenta afastar o estímulo doloroso propositalmente', value: 5 },
      { label: 'Retirada inespecífica à dor (flexão normal)', desc: 'Flexiona o membro rapidamente para fugir da dor', value: 4 },
      { label: 'Decorticação (flexão anormal à dor)', desc: 'Postura de flexão com adução dos braços e punhos cerrados', value: 3 },
      { label: 'Descerebração (extensão anormal à dor)', desc: 'Extensão rígida e pronação dos membros superiores', value: 2 },
      { label: 'Nenhuma resposta motora (flacidez)', desc: 'Flacidez muscular completa, sem resposta reflexa motora', value: 1 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'TCE Leve',
    range: '13 a 15 pontos',
    desc: 'Baixo risco neurológico. Vigilância clínica, critérios PECARN para TC.',
    status: 'normal',
  },
  {
    label: 'TCE Moderado',
    range: '9 a 12 pontos',
    desc: 'Risco intermediário. Tomografia de crânio recomendada e observação.',
    status: 'warning',
  },
  {
    label: 'TCE Grave / Coma',
    range: '3 a 8 pontos',
    desc: 'Indicação clássica de via aérea definitiva (IOT) e internação em UTI.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'Sempre pontuar a melhor resposta obtida em cada item avaliado.',
  'Para lactentes pré-verbais (< 2 anos), utilize prioritariamente os equivalentes de choro consolável e interação apropriada.',
  'Em pacientes sob sedação ou com intubação orotraqueal, registrar verbal como "1T" ou não avaliável.',
  'Escore ≤ 8 define coma e indica proteção imediata de via aérea com intubação em sequência rápida.',
];

function getClassification(total) {
  if (total >= 13) {
    return {
      label: 'TCE Leve (Glasgow ' + total + ')',
      status: 'normal',
      description: 'Baixo risco de lesão cerebral traumática clinicamente relevante.',
      conduta: 'Observação clínica vigilante. Aplicar regras PECARN para indicação de neuroimagem se indicado.',
    };
  }
  if (total >= 9) {
    return {
      label: 'TCE Moderado (Glasgow ' + total + ')',
      status: 'warning',
      description: 'Risco moderado com potencial deterioração rápida do sensório.',
      conduta: 'Indicação de TC de crânio urgente, acesso venoso, jejum e avaliação neurocirúrgica.',
    };
  }
  return {
    label: 'TCE Grave / Coma (Glasgow ' + total + ')',
    status: 'danger',
    description: 'Comprometimento grave da consciência e reflexos de proteção.',
    conduta: 'Proteção imediata de via aérea (IOT), ventilação protetora, suporte hemodinâmico e UTI imediata.',
  };
}

export default function GlasgowPediatrico() {
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
      title="Escala de Coma de Glasgow Pediátrica"
      eyebrow="Escore Neurológico • Emergência"
      subtitle="Avaliação do nível de consciência e gravidade do traumatismo cranioencefálico (TCE) em crianças e lactentes"
      icon3d="🧠"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={15}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Teasdale G, Jennett B. Assessment of coma and impaired consciousness. Lancet. 1974; PECARN Traumatic Brain Injury, 2009."
    />
  );
}