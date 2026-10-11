import React, { useState } from 'react';
import ScoreCalculatorLayout from '@/components/calculators/ScoreCalculatorLayout';

const CRITERIA = [
  {
    id: 'idade',
    label: 'Faixa Etária (Ajuste de McIsaac)',
    subtitle: 'Fator etário correlacionado à incidência de Streptococcus pyogenes',
    icon: '👤',
    iconBg: 'bg-indigo-50 text-indigo-600',
    options: [
      { label: '3 a 14 anos', desc: 'Pico de incidência de SBHGA na infância e idade escolar', value: 1 },
      { label: '15 a 44 anos', desc: 'Adolescentes e adultos jovens', value: 0 },
      { label: '≥ 45 anos', desc: 'Incidência de faringite bacteriana acentuadamente menor', value: -1 },
    ],
  },
  {
    id: 'temperatura',
    label: 'Temperatura Axilar / Febre',
    subtitle: 'Histórico de febre relatada ou temperatura mensurada > 38°C',
    icon: '🌡️',
    iconBg: 'bg-rose-50 text-rose-600',
    options: [
      { label: 'Ausente (≤ 38,0°C)', desc: 'Afebril ou temperatura normal', value: 0 },
      { label: 'Presente (> 38,0°C)', desc: 'Pico febril documentado ou febre referida persistente', value: 1 },
    ],
  },
  {
    id: 'tosse',
    label: 'Ausência de Tosse',
    subtitle: 'Tosse presente é forte sugestivo de etiologia viral',
    icon: '😮‍💨',
    iconBg: 'bg-sky-50 text-sky-600',
    options: [
      { label: 'Tosse presente', desc: 'Sugere fortemente infecção viral de vias aéreas superiores', value: 0 },
      { label: 'Tosse ausente', desc: 'Aumenta a probabilidade de etiologia estreptocócica', value: 1 },
    ],
  },
  {
    id: 'nodulos',
    label: 'Linfadenomegalia Cervical Anterior Dolorosa',
    subtitle: 'Palpação de gânglios aumentados e sensíveis no triângulo anterior',
    icon: '🔍',
    iconBg: 'bg-amber-50 text-amber-600',
    options: [
      { label: 'Ausente', desc: 'Sem linfonodos cervicais anteriores aumentados ou dolorosos', value: 0 },
      { label: 'Presente', desc: 'Linfonodomegalia dolorosa à palpação na cadeia cervical anterior', value: 1 },
    ],
  },
  {
    id: 'amigdalas',
    label: 'Exsudato Amigdaliano ou Edema Acentuado',
    subtitle: 'Hipertrofia importante ou placas esbranquiçadas nas amígdalas',
    icon: '👅',
    iconBg: 'bg-teal-50 text-teal-600',
    options: [
      { label: 'Ausente', desc: 'Amígdalas sem exsudato purulento ou hipertrofia importante', value: 0 },
      { label: 'Presente', desc: 'Placas purulentas, exsudato confluente ou eritema marcante', value: 1 },
    ],
  },
];

const REFERENCE_TABLE = [
  {
    label: 'Muito Baixo Risco',
    range: '-1 a 0 ponto',
    desc: 'Probabilidade de infecção estreptocócica < 3%. Não testar; apenas sintomáticos.',
    status: 'normal',
  },
  {
    label: 'Baixo Risco',
    range: '1 ponto',
    desc: 'Probabilidade de ~5% a 10%. Sem indicação de teste rápido ou antibiótico.',
    status: 'normal',
  },
  {
    label: 'Risco Intermediário',
    range: '2 a 3 pontos',
    desc: 'Probabilidade de 11% a 28%. Recomenda-se teste rápido (TR) ou cultura de orofaringe.',
    status: 'warning',
  },
  {
    label: 'Alto Risco',
    range: '4 a 5 pontos',
    desc: 'Probabilidade de 51% a 53%. Indicação de teste rápido confirmatório ou tratamento empírico.',
    status: 'danger',
  },
];

const CLINICAL_NOTES = [
  'O escore de Centor modificado por McIsaac é o modelo mais utilizado para racionalizar o uso de antibióticos e testes diagnósticos em faringoamigdalites agudas.',
  'Crianças menores de 3 anos de idade raramente desenvolvem infecção por Streptococcus pyogenes (SBHGA) e apresentam risco virtualmente nulo de febre reumática.',
  'Sintomas virais típicos (coriza hialina, tosse, rouquidão, conjuntivite ou estomatite) descartam a necessidade de antibióticos na imensa maioria dos casos.',
];

function getClassification(total) {
  if (total <= 0) {
    return {
      label: 'Risco Muito Baixo (Escore ' + total + ' pt)',
      status: 'normal',
      description: 'Probabilidade de faringite estreptocócica inferior a 3%.',
      conduta: 'Não realizar teste diagnóstico nem prescrever antibióticos. Tratamento sintomático com analgésicos e hidratação.',
    };
  }
  if (total === 1) {
    return {
      label: 'Risco Baixo (Escore 1 pt)',
      status: 'normal',
      description: 'Probabilidade estimada de estreptococo entre 5% e 10%.',
      conduta: 'Tratamento exclusivamente sintomático. Não há indicação rotineira de teste antigênico rápido.',
    };
  }
  if (total <= 3) {
    return {
      label: 'Risco Intermediário (Escore ' + total + ' pts)',
      status: 'warning',
      description: 'Probabilidade estimada entre 11% e 28% de etiologia bacteriana.',
      conduta: 'Coletar Teste Rápido Molecular/Antigênico (TR) ou cultura. Iniciar Amoxicilina ou Penicilina apenas se o teste for positivo.',
    };
  }
  return {
    label: 'Alto Risco (Escore ' + total + ' pts)',
    status: 'danger',
    description: 'Probabilidade estimada de SBHGA de aproximadamente 51% a 53%.',
    conduta: 'Realizar Teste Rápido confirmatório ou iniciar antibioticoterapia empírica: Amoxicilina 50 mg/kg/dia por 10 dias ou Penicilina Benzatina IM dose única.',
  };
}

export default function CentorMcIsaac() {
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
      title="Critérios de Centor-McIsaac"
      eyebrow="Infectologia • Faringite Aguda"
      subtitle="Estratificação de probabilidade de faringoamigdalite por Streptococcus pyogenes (SBHGA) e indicação racional de antibióticos"
      icon3d="🔬"
      criteria={CRITERIA}
      scores={scores}
      onSelectOption={handleSelectOption}
      maxScore={5}
      classification={classification}
      referenceTable={REFERENCE_TABLE}
      clinicalNotes={CLINICAL_NOTES}
      onReset={handleReset}
      referenceSource="McIsaac WJ et al. A clinical score to reduce unnecessary antibiotic use in patients with sore throat. CMAJ. 1998; Fine AM et al. Ann Intern Med 2012."
    />
  );
}