import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'fc',
    label: 'Frequência Cardíaca',
    subtitle: 'Avaliação da ausculta cardíaca apical ou palpação de cordão',
    icon: '❤️',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Ausente', desc: 'Sem batimentos cardíacos detectáveis', value: 0 },
      { label: '< 100 bpm', desc: 'Frequência cardíaca lenta, bradicardia neonatal', value: 1 },
      { label: '≥ 100 bpm', desc: 'Frequência cardíaca adequada para transição', value: 2 },
    ],
  },
  {
    id: 'resp',
    label: 'Esforço Respiratório',
    subtitle: 'Ritmo, profundidade e presença de choro vigoroso',
    icon: '🫁',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Ausente', desc: 'Sem movimentos respiratórios / apneia', value: 0 },
      { label: 'Fraca / Irregular', desc: 'Respiração superficial ou irregular, gemência', value: 1 },
      { label: 'Forte / Choro Vigoroso', desc: 'Boa expansão torácica, choro forte e contínuo', value: 2 },
    ],
  },
  {
    id: 'tonus',
    label: 'Tônus Muscular',
    subtitle: 'Postura, resistência aos movimentos e flexão de membros',
    icon: '💪',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Flácido', desc: 'Ausência total de tônus, atonia completa', value: 0 },
      { label: 'Alguma flexão de membros', desc: 'Flexão fraca de extremidades, discreta resistência', value: 1 },
      { label: 'Movimentos ativos / Boa flexão', desc: 'Postura fletida ativa e movimentos vigorosos', value: 2 },
    ],
  },
  {
    id: 'reflexo',
    label: 'Irritabilidade Reflexa',
    subtitle: 'Resposta ao estímulo tátil / aspiração de vias aéreas',
    icon: '⚡',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Ausente', desc: 'Nenhuma resposta ao estímulo', value: 0 },
      { label: 'Algum movimento / Careta', desc: 'Caretas faciais ou discreto movimento de esquiva', value: 1 },
      { label: 'Choro vigoroso / Espirro / Tosse', desc: 'Reação imediata com espirro, tosse ou choro', value: 2 },
    ],
  },
  {
    id: 'cor',
    label: 'Cor da Pele',
    subtitle: 'Oxigenação tecidual periférica e central',
    icon: '🎨',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Cianose central ou Palidez', desc: 'Pele totalmente pálida ou cianótica centralmente', value: 0 },
      { label: 'Acrocianose', desc: 'Corpo rosado com cianose isolada de extremidades', value: 1 },
      { label: 'Completamente rosado', desc: 'Tronco e extremidades rosados uniformemente', value: 2 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Tranquilizadora (Normal)',
    range: '7 a 10 pontos',
    desc: 'Boa adaptação à vida extrauterina. Cuidados de rotina e contato pele a pele.',
    status: 'normal',
  },
  {
    label: 'Moderadamente Anormal',
    range: '4 a 6 pontos',
    desc: 'Dificuldade moderada de transição. Necessidade de suporte ventilatório / VPP.',
    status: 'warning',
  },
  {
    label: 'Depressão Grave',
    range: '0 a 3 pontos',
    desc: 'Comprometimento grave. Reanimação neonatal imediata conforme protocolo.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'O escore deve ser registrado no 1º e no 5º minuto de vida. Se permanecer < 7 aos 5 min, avaliar a cada 5 min até 20 minutos.',
  'IMPORTANTE: Não atrase o início da reanimação neonatal para calcular o Apgar! Manobras de estabilização térmica, posicionamento e VPP devem ocorrer no "minuto de ouro".',
  'O Apgar descreve a vitalidade e resposta à transição, mas NÃO prevê isoladamente morbidade ou prognóstico neurológico tardio.',
];

function getClassification(total) {
  if (total >= 7) {
    return {
      label: 'Vitalidade Adequada (APGAR ' + total + ')',
      status: 'normal',
      description: 'Adaptação neonatal adequada sem sinais de depressão respiratória ou circulatória.',
      conduta: 'Cuidados habituais na sala de parto, contato pele a pele precoce e estímulo à amamentação na primeira hora.',
    };
  }
  if (total >= 4) {
    return {
      label: 'Depressão Moderada (APGAR ' + total + ')',
      status: 'warning',
      description: 'Dificuldade transitória de adaptação extrauterina.',
      conduta: 'Prover calor, secar, posicionar vias aéreas, avaliar FC e respiração; instituir VPP com máscara se FC < 100 ou apneia.',
    };
  }
  return {
    label: 'Depressão Grave (APGAR ' + total + ')',
    status: 'danger',
    description: 'Depressão grave com risco iminente de asfixia perinatal.',
    conduta: 'Reanimação neonatal avançada imediata: VPP eficaz com monitorização de FC e oximetria; considerar intubação e massagem.',
  };
}

export default function APGAR() {
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
      title="Escore de APGAR"
      eyebrow="Score Neonatal • Sala de Parto"
      subtitle="Avaliação rápida da vitalidade do recém-nascido e resposta à transição da vida intra para extrauterina"
      icon3d="👶"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={10}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="AAP / ACOG Committee Opinion No. 644 (Reaffirmed 2020); Programa de Reanimação Neonatal da SBP (2022)."
    />
  );
}