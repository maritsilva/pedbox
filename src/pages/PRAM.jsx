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

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header card */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden mb-8"
        >
          <div className="absolute top-4 right-6 opacity-20">
            <div className="text-6xl">{CLASSIFICATIONS[0].emoji}</div>
          </div>

          <div className="relative z-10">
            <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">
              Score Respiratório · Pediátrico
            </span>
            <h1 className="text-3xl font-extrabold mb-1">PRAM</h1>
            <p className="text-sm font-medium opacity-90 mb-6">Pediatric Respiratory Assessment Measure (2–17 anos)</p>
            
            <div className="border-t border-white/20 pt-4">
              <p className="text-4xl font-extrabold">{partialScore}</p>
              <p className="text-sm opacity-90 mt-1">/ 12 pontos</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT — Criteria */}
          <div className="lg:col-span-2 space-y-3">
            {CRITERIA.map((criterion, idx) => {
              const answered = scores[criterion.id] !== undefined;
              return (
                <motion.div
                  key={criterion.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
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
                              ? 'border-sky-500 bg-sky-500 text-white shadow-md'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-sky-300 hover:bg-sky-50/60'
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

          {/* RIGHT — Sidebar */}
          <div className="space-y-4">

            {/* Resultado */}
            <AnimatePresence>
              {allAnswered && classification && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-5 sticky top-20`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{classification.emoji}</span>
                    <span className={`text-3xl font-extrabold ${classification.text}`}>{total}</span>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${classification.text} mb-1`}>Pontuação</p>
                  <p className={`text-lg font-extrabold ${classification.text} mb-3`}>{classification.label}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{CLASSIFICATIONS.find(c => c.min <= total && c.max >= total)?.conduta?.[0] || ''}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Classification reference */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">Classificação</p>
              <div className="space-y-2">
                {CLASSIFICATIONS.map((row, i) => (
                  <div key={i} className={`rounded-xl p-3 ${row.bg} border border-gray-200`}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{row.emoji}</span>
                      <div className="flex-1">
                        <p className={`text-xs font-bold ${row.text}`}>{row.label}</p>
                        <p className="text-[10px] text-gray-600">{row.range}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Reset */}
        {answeredCount > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleReset}
            className="w-full py-3 mt-6 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Nova avaliação
          </motion.button>
        )}

        {/* References */}
        <div className="mt-8 text-xs text-gray-400 px-1">
          <p className="font-semibold text-gray-500 mb-1">Referências</p>
          <p>Chalut DS, et al. <em>J Pediatrics</em> 2000; 137(6):762-8.</p>
          <p>Ducharme FM, et al. <em>J Pediatrics</em> 2008; 152(4):476-80.</p>
        </div>
      </div>
    </div>
  );
}