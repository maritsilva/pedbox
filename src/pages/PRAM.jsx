import React, { useState } from 'react';
import { Wind, CheckCircle2, Circle, RefreshCw, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CRITERIA = [
  {
    id: 'o2sat',
    label: 'Saturação de O₂',
    hint: 'Em ar ambiente, sem O₂ suplementar',
    icon: '🫁',
    options: [
      { label: '≥ 95%', value: 0 },
      { label: '92 – 94%', value: 1 },
      { label: '< 92%', value: 3 },
    ],
  },
  {
    id: 'suprasternal',
    label: 'Retração supraesternal',
    hint: 'Depressão visível na fúrcula esternal durante inspiração',
    icon: '🔍',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Presente', value: 2 },
    ],
  },
  {
    id: 'scalene',
    label: 'Contração do músculo escaleno',
    hint: 'Palpação ou visibilização do escaleno durante respiração',
    icon: '💪',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Presente', value: 2 },
    ],
  },
  {
    id: 'airentry',
    label: 'Entrada de ar',
    hint: 'Avaliar no pulmão mais afetado à ausculta',
    icon: '👂',
    options: [
      { label: 'Normal', value: 0 },
      { label: 'Diminuída', value: 1 },
      { label: 'Muito diminuída / ausente', value: 2 },
    ],
  },
  {
    id: 'wheezing',
    label: 'Sibilância',
    hint: 'Avaliar no pulmão mais afetado à ausculta',
    icon: '🌬️',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Expiratória apenas', value: 1 },
      { label: 'Inspiratória e expiratória', value: 2 },
      { label: 'Audível sem estetoscópio / silêncio', value: 3 },
    ],
  },
];

const CLASSIFICATIONS = [
  {
    label: 'Leve',
    range: '0 – 3',
    min: 0, max: 3,
    bg: 'bg-emerald-50',
    border: 'border-emerald-400',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800',
    bar: 'bg-emerald-400',
    emoji: '🟢',
    conduta: [
      'Salbutamol inalatório (2–4 puffs) conforme necessário',
      'Observação por 1–2h no PS',
      'Alta com plano de ação por escrito',
      'Corticosteroide oral se histórico de crise grave',
    ],
  },
  {
    label: 'Moderada',
    range: '4 – 7',
    min: 4, max: 7,
    bg: 'bg-amber-50',
    border: 'border-amber-400',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
    bar: 'bg-amber-400',
    emoji: '🟡',
    conduta: [
      'Salbutamol 2,5–5 mg a cada 20 min × 3 doses (nebulização ou MDI)',
      'Corticosteroide sistêmico: prednisolona 1–2 mg/kg/dia VO',
      'Oxigênio se SpO₂ < 94%',
      'Reavaliação com score após tratamento',
      'Internar se sem melhora após 1–2h',
    ],
  },
  {
    label: 'Grave',
    range: '8 – 12',
    min: 8, max: 12,
    bg: 'bg-red-50',
    border: 'border-red-400',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-800',
    bar: 'bg-red-500',
    emoji: '🔴',
    conduta: [
      'Oxigênio suplementar para SpO₂ ≥ 95%',
      'Salbutamol contínuo (nebulização contínua 0,5 mg/kg/h)',
      'Ipratrópio 250–500 mcg a cada 20 min × 3 doses',
      'Prednisolona/metilprednisolona IV/VO imediata',
      'Considerar sulfato de magnésio IV (50 mg/kg)',
      'Internação em UTI pediátrica',
    ],
  },
];

function getClassification(score) {
  return CLASSIFICATIONS.find(c => score >= c.min && score <= c.max) || CLASSIFICATIONS[2];
}

function ScoreGauge({ score, max = 12 }) {
  const pct = Math.min((score / max) * 100, 100);
  const color = score <= 3 ? 'bg-emerald-400' : score <= 7 ? 'bg-amber-400' : 'bg-red-500';

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-400 mb-1 font-medium">
        <span>0</span>
        <span>3</span>
        <span>7</span>
        <span>12</span>
      </div>
      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
        {/* Zone markers */}
        <div className="absolute inset-y-0 left-0 w-[25%] bg-emerald-100 rounded-l-full" />
        <div className="absolute inset-y-0 left-[25%] w-[33.3%] bg-amber-100" />
        <div className="absolute inset-y-0 left-[58.3%] right-0 bg-red-100 rounded-r-full" />
        {/* Progress */}
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between text-xs mt-1 font-semibold">
        <span className="text-emerald-600">Leve</span>
        <span className="text-amber-600">Moderada</span>
        <span className="text-red-600">Grave</span>
      </div>
    </div>
  );
}

export default function PRAM() {
  const [scores, setScores] = useState({});

  const handleSelect = (criteriaId, value) => {
    setScores(prev => ({ ...prev, [criteriaId]: value }));
  };

  const handleReset = () => setScores({});

  const answeredCount = CRITERIA.filter(c => scores[c.id] !== undefined).length;
  const allAnswered = answeredCount === CRITERIA.length;
  const partialScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const total = allAnswered ? partialScore : null;
  const classification = total !== null ? getClassification(total) : null;
  const progressPct = (answeredCount / CRITERIA.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 pb-16">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-lg mb-4">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Score PRAM</h1>
          <p className="text-gray-500 mt-1 text-sm">Pediatric Respiratory Assessment Measure · 2–17 anos</p>
        </motion.div>

        {/* Progress header card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">
                {allAnswered ? 'Avaliação completa' : `${answeredCount} / ${CRITERIA.length} critérios`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-blue-600">{partialScore}</span>
              <span className="text-sm text-gray-400 font-medium">/ 12 pts</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Score gauge — always visible */}
          <ScoreGauge score={partialScore} />
        </motion.div>

        {/* Criteria */}
        <div className="space-y-3 mb-6">
          {CRITERIA.map((criterion, idx) => {
            const answered = scores[criterion.id] !== undefined;
            return (
              <motion.div
                key={criterion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition-all ${
                  answered ? 'border-blue-200' : 'border-gray-200'
                }`}
              >
                <div className={`px-5 py-3 flex items-center justify-between border-b ${answered ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{criterion.icon}</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{criterion.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{criterion.hint}</p>
                    </div>
                  </div>
                  {answered
                    ? <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    : <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  }
                </div>
                <div className="p-3 grid gap-2">
                  {criterion.options.map((opt) => {
                    const selected = scores[criterion.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(criterion.id, opt.value)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${
                          selected
                            ? 'border-blue-500 bg-blue-500 text-white shadow-md'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/60'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {opt.value} {opt.value === 1 ? 'pt' : 'pts'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Result */}
        <AnimatePresence>
          {allAnswered && classification && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`rounded-2xl border-2 ${classification.border} ${classification.bg} overflow-hidden mb-5`}
            >
              {/* Score header */}
              <div className={`px-6 py-5 flex items-center justify-between border-b ${classification.border}`}>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Score PRAM</p>
                  <p className={`text-6xl font-extrabold ${classification.text}`}>
                    {total}
                    <span className="text-xl font-medium ml-1 opacity-60">/ 12</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-4xl">{classification.emoji}</span>
                  <p className={`text-xl font-extrabold mt-1 ${classification.text}`}>{classification.label}</p>
                </div>
              </div>


            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset */}
        {answeredCount > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleReset}
            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-8"
          >
            <RefreshCw className="w-4 h-4" />
            Nova avaliação
          </motion.button>
        )}

        {/* Reference table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <p className="font-bold text-gray-700 text-sm">Classificação de Gravidade</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Score</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Gravidade</th>

              </tr>
            </thead>
            <tbody>
              {CLASSIFICATIONS.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 font-mono font-bold text-gray-700">{row.range}</td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.badge}`}>{row.emoji} {row.label}</span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* References */}
        <div className="mt-6 text-xs text-gray-400 space-y-1 px-1">
          <p className="font-semibold text-gray-500">Referências</p>
          <p>Chalut DS, et al. <em>J Pediatrics</em> 2000; 137(6):762-8.</p>
          <p>Ducharme FM, et al. <em>J Pediatrics</em> 2008; 152(4):476-80.</p>
        </div>
      </div>
    </div>
  );
}