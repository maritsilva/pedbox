import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'fr',
    label: 'Frequência Respiratória',
    subtitle: 'Avaliada em repouso por 1 minuto completo conforme a faixa etária',
    icon: '🫁',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Normal para idade', desc: '≤30 (<6m), ≤25 (6–12m), ≤20 (1–5a), ≤15 (>5a)', value: 1 },
      { label: 'Taquipneia leve a moderada', desc: '31–45 (<6m), 26–40 (6–12m), 21–35 (1–5a), 16–30 (>5a)', value: 2 },
      { label: 'Taquipneia acentuada', desc: '>45 (<6m), >40 (6–12m), >35 (1–5a), >30 (>5a)', value: 3 },
    ],
  },
  {
    id: 'sat',
    label: 'Saturação de O₂ (ar ambiente)',
    subtitle: 'Oximetria estável de pulso antes da oxigenoterapia',
    icon: '💨',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: '≥ 95% em ar ambiente', desc: 'Oxigenação adequada e troca gasosa preservada', value: 1 },
      { label: '90% a 94% em ar ambiente', desc: 'Hipoxemia leve a moderada', value: 2 },
      { label: '< 90% em ar ambiente', desc: 'Hipoxemia grave com necessidade imediata de O₂ suplementar', value: 3 },
    ],
  },
  {
    id: 'ausculta',
    label: 'Ausculta Pulmonar (Sibilos)',
    subtitle: 'Tempo e intensidade da sibilância durante o ciclo respiratório',
    icon: '🔊',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Normal ou sibilos expiratórios terminais', desc: 'Sibilos discretos ou ausentes, murmúrio vesicular universal', value: 1 },
      { label: 'Sibilos expiratórios difusos', desc: 'Sibilância em toda a fase expiratória em múltiplos campos', value: 2 },
      { label: 'Sibilos inspiratórios e expiratórios OU MV diminuído', desc: 'Sibilância bifásica ou "tórax silencioso" por hipoventilação grave', value: 3 },
    ],
  },
  {
    id: 'retracao',
    label: 'Uso de Musculatura Acessória / Retrações',
    subtitle: 'Presença e localização das tiragens e esforços dinâmicos',
    icon: '💪',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Ausente ou intercostal discreta', desc: 'Sem esforço acessório ou mínima tiragem intercostal baixa', value: 1 },
      { label: 'Intercostal e subcostal evidentes', desc: 'Retrações moderadas em mais de um sítio anatômico', value: 2 },
      { label: 'Retrações graves (supraclavicular / fúrcula / BAN)', desc: 'Tiragem de fúrcula, supraclavicular ou batimento de asa nasal', value: 3 },
    ],
  },
  {
    id: 'dispneia',
    label: 'Dispneia / Padrão de Fala e Choro',
    subtitle: 'Capacidade de completar frases ou chorar vigorosamente',
    icon: '🗣️',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Frases completas / Choro vigoroso contínuo', desc: 'Consegue falar sentenças inteiras sem interrupção por falta de ar', value: 1 },
      { label: 'Frases curtas / Choro entrecortado', desc: 'Dispneia ao falar, pausas frequentes para respirar', value: 2 },
      { label: 'Monossílabos / Incapaz de falar / Gemência', desc: 'Fala apenas palavras soltas ou incapaz de articular pela dispneia', value: 3 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Crise Asmática Leve',
    range: '5 a 7 pontos',
    desc: 'Boa ventilação basal. Responde rapidamente ao broncodilatador inalatório.',
    status: 'normal',
  },
  {
    label: 'Crise Asmática Moderada',
    range: '8 a 11 pontos',
    desc: 'Obstrução moderada ao fluxo. Necessidade de corticoide sistêmico e ciclos repetidos de beta-2.',
    status: 'warning',
  },
  {
    label: 'Crise Asmática Grave',
    range: '12 a 15 pontos',
    desc: 'Risco de exaustão respiratória. Indicação de terapia intensiva, MgSO₄ IV e suporte avançado.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'O PAS (Pediatric Asthma Score) varia de 5 a 15 pontos e deve ser repetido após cada ciclo de broncodilatador (a cada 20 a 30 minutos).',
  'A falha em melhorar a pontuação após a primeira hora de tratamento com salbutamol e corticoide oral é o principal indicador de necessidade de internação.',
  'Cuidado com a ausculta silenciosa: a redução abrupta dos sibilos acompanhada de piora do esforço e sonolência indica fadiga muscular grave e falência ventilatória iminente.',
];

function getClassification(total) {
  if (total <= 7) {
    return {
      label: 'Crise Leve (PAS ' + total + ')',
      status: 'normal',
      description: 'Obstrução brônquica discreta com padrão respiratório estável.',
      conduta: 'Salbutamol spray 4 a 8 jatos com espaçador a cada 20–30 min (até 3 ciclos). Reavaliar.',
    };
  }
  if (total <= 11) {
    return {
      label: 'Crise Moderada (PAS ' + total + ')',
      status: 'warning',
      description: 'Obstrução brônquica importante com sobrecarga mecânica.',
      conduta: 'Salbutamol + Brometo de Ipratrópio (3 ciclos) + Prednisolona 1–2 mg/kg VO precoce. O₂ suplementar para alvo SatO₂ 93–95%. Observar por 4–6 horas.',
    };
  }
  return {
    label: 'Crise Grave / Ameaçadora (PAS ' + total + ')',
    status: 'danger',
    description: 'Crise grave de asma com iminência de insuficiência respiratória aguda.',
    conduta: 'Emergência/UTI. Salbutamol contínuo + ipratrópio + Corticoide IV (Metilprednisolona 1–2 mg/kg). Considerar Sulfato de Magnésio 50 mg/kg IV em 30 min. Avaliar VNI.',
  };
}

export default function PASAsma() {
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
      title="PAS — Pediatric Asthma Score"
      eyebrow="Score Respiratório • Crise de Asma"
      subtitle="Classificação objetiva da gravidade da exacerbação asmática aguda e avaliação da resposta aos broncodilatadores"
      icon3d="🫁"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={15}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Qureshi F et al. Multicenter evaluation of a clinical pathway for children with asthma. Pediatr Pulmonol 2005; GINA Guidelines 2024."
    />
  );
}