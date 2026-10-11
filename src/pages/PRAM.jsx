import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'o2sat',
    label: 'Saturação de O₂ (ar ambiente)',
    subtitle: 'Oximetria de pulso estável antes de administrar oxigênio suplementar',
    icon: '🫁',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: '≥ 95% em ar ambiente', desc: 'Troca gasosa preservada sem hipoxemia', value: 0 },
      { label: '92% a 94% em ar ambiente', desc: 'Hipoxemia leve a moderada', value: 1 },
      { label: '< 92% em ar ambiente', desc: 'Hipoxemia importante com necessidade de suporte de oxigênio', value: 3 },
    ],
  },
  {
    id: 'suprasternal',
    label: 'Retração Supraesternal',
    subtitle: 'Depressão visível na fúrcula esternal durante a inspiração',
    icon: '🔍',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: 'Ausente', desc: 'Sem afundamento supraesternal inspiratório', value: 0 },
      { label: 'Presente', desc: 'Retração nítida da fúrcula com uso de musculatura acessória', value: 2 },
    ],
  },
  {
    id: 'scalene',
    label: 'Contração do Músculo Escaleno',
    subtitle: 'Palpação firme ou visibilização do escaleno na inspiração',
    icon: '💪',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Ausente', desc: 'Músculo escaleno relaxado durante todo o ciclo ventilatório', value: 0 },
      { label: 'Presente', desc: 'Tensão ou contração palpável do escaleno a cada incursão', value: 2 },
    ],
  },
  {
    id: 'airentry',
    label: 'Entrada de Ar (Ausculta)',
    subtitle: 'Avaliar no hemitórax mais comprometido',
    icon: '👂',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Normal', desc: 'Murmúrio vesicular fisiológico e simétrico', value: 0 },
      { label: 'Diminuída nas bases', desc: 'Redução localizada nos campos inferiores pulmonares', value: 1 },
      { label: 'Diminuída difusamente', desc: 'Hipoventilação generalizada em ambos os hemitórax', value: 2 },
      { label: 'Mínima ou ausente', desc: '"Tórax silencioso" por broncoespasmo crítico ou exaustão', value: 3 },
    ],
  },
  {
    id: 'wheezing',
    label: 'Sibilância',
    subtitle: 'Tempo e localização auscultatória dos sibilos',
    icon: '🌬️',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Ausente', desc: 'Sem sibilos durante a ausculta torácica', value: 0 },
      { label: 'Expiratória apenas', desc: 'Sibilos restritos à fase de expiração', value: 1 },
      { label: 'Inspiratória e expiratória', desc: 'Sibilância bifásica generalizada', value: 2 },
      { label: 'Audível sem estetoscópio ou silêncio respiratório', desc: 'Sibilância à distância ou murmúrio inaudível por obstrução severa', value: 3 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Crise Leve',
    range: '0 a 3 pontos',
    desc: 'Obstrução brônquica discreta. Salbutamol inalatório e observação curta.',
    status: 'normal',
  },
  {
    label: 'Crise Moderada',
    range: '4 a 7 pontos',
    desc: 'Esforço respiratório evidente. Broncodilatador repetido, corticoide sistêmico e O₂.',
    status: 'warning',
  },
  {
    label: 'Crise Grave',
    range: '8 a 12 pontos',
    desc: 'Alto risco de insuficiência respiratória. Terapia intensiva, sulfato de magnésio e IOT se necessário.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'O PRAM (Preschool Respiratory Assessment Measure) é validado internacionalmente para crianças e adolescentes com exacerbação asmática.',
  'O score avaliado no momento da admissão e 1 a 2 horas após a conduta inicial prediz com excelente sensibilidade o desfecho de alta versus internação hospitalar.',
  'Pontuações ≥ 8 após tratamento broncodilatador inicial indicam alta taxa de falha clínica e justificam internação em ambiente de cuidados intensivos.',
];

function getClassification(total) {
  if (total <= 3) {
    return {
      label: 'Crise Leve (PRAM ' + total + ')',
      status: 'normal',
      description: 'Quadro respiratório brando com boa troca gasosa.',
      conduta: 'Salbutamol aerossol dosimetrado (MDI) 2–4 jatos com espaçador. Observação por 1–2h no pronto-socorro. Alta com plano de ação por escrito se estabilizado.',
    };
  }
  if (total <= 7) {
    return {
      label: 'Crise Moderada (PRAM ' + total + ')',
      status: 'warning',
      description: 'Obstrução importante das vias aéreas com sobrecarga da musculatura.',
      conduta: 'Salbutamol 4–8 jatos a cada 20 min (3 doses) + Corticoide sistêmico (Prednisolona 1–2 mg/kg VO). Suporte de oxigênio se SpO₂ < 94%. Reavaliar após ciclo.',
    };
  }
  return {
    label: 'Crise Grave (PRAM ' + total + ')',
    status: 'danger',
    description: 'Crise de asma grave com iminência de falência muscular respiratória.',
    conduta: 'Oxigênio para SpO₂ ≥ 95%. Salbutamol contínuo + Brometo de Ipratrópio. Corticoide IV (Metilprednisolona). Considerar Sulfato de Magnésio 50 mg/kg IV em 30 min. Avaliar vaga de UTI.',
  };
}

export default function PRAM() {
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
      title="Escore PRAM — Avaliação de Asma Pediátrica"
      eyebrow="Score Respiratório • Crise Asmática"
      subtitle="Preschool Respiratory Assessment Measure — Instrumento padronizado para graduação da gravidade da exacerbação de asma em crianças"
      icon3d="🫁"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={12}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="Chalut DS et al. The Preschool Respiratory Assessment Measure (PRAM). J Pediatr. 2000; Ducharme FM et al. J Pediatr 2008."
    />
  );
}