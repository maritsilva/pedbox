import React, { useState } from 'react';
import { Microscope, RefreshCw, AlertTriangle, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CRITERIA = [
  {
    id: 'idade',
    label: 'Faixa Etária',
    hint: 'Fator de ajuste de McIsaac por idade',
    icon: '👤',
    options: [
      { label: '3–14 anos', value: 1 },
      { label: '15–44 anos', value: 0 },
      { label: '≥ 45 anos', value: -1 },
    ],
  },
  {
    id: 'temperatura',
    label: 'Temperatura',
    hint: 'Temperatura axilar ou oral',
    icon: '🌡️',
    options: [
      { label: '≤ 38°C', value: 0 },
      { label: '> 38°C', value: 1 },
    ],
  },
  {
    id: 'tosse',
    label: 'Tosse',
    hint: 'Presença de tosse como sintoma principal',
    icon: '😮‍💨',
    options: [
      { label: 'Presente (sem pontuação)', value: 0 },
      { label: 'Ausente', value: 1 },
    ],
  },
  {
    id: 'nodulos',
    label: 'Linfonodos cervicais anteriores dolorosos',
    hint: 'Palpação de adenopatia cervical anterior',
    icon: '🔍',
    options: [
      { label: 'Ausentes', value: 0 },
      { label: 'Presentes', value: 1 },
    ],
  },
  {
    id: 'amigdalas',
    label: 'Edema ou exsudato amigdaliano',
    hint: 'Amígdalas aumentadas, hiperemiadas ou com exsudato',
    icon: '👅',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Presente', value: 1 },
    ],
  },
];

const CLASSIFICATIONS = [
  {
    min: -1, max: 0,
    label: 'Muito Baixo / Baixo',
    prob: '2–6%',
    conduta: 'Sem indicação de teste ou antibiótico. Tratamento sintomático.',
    emoji: '🟢',
    bg: 'bg-emerald-50', border: 'border-emerald-400', text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800', bar: 'bg-emerald-400',
  },
  {
    min: 1, max: 1,
    label: 'Baixo',
    prob: '4–6%',
    conduta: 'Sem indicação de teste ou antibiótico. Observação clínica.',
    emoji: '🟢',
    bg: 'bg-emerald-50', border: 'border-emerald-400', text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800', bar: 'bg-emerald-400',
  },
  {
    min: 2, max: 3,
    label: 'Moderado',
    prob: '10–28%',
    conduta: 'Considerar teste rápido para SBHGA. Tratar se positivo.',
    emoji: '🟡',
    bg: 'bg-amber-50', border: 'border-amber-400', text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800', bar: 'bg-amber-400',
  },
  {
    min: 4, max: 5,
    label: 'Alto',
    prob: '38–63%',
    conduta: 'Tratar empiricamente ou confirmar com teste rápido. Penicilina V ou amoxicilina 10 dias.',
    emoji: '🔴',
    bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-700',
    badge: 'bg-red-100 text-red-800', bar: 'bg-red-500',
  },
];

function getClassification(score) {
  return CLASSIFICATIONS.find(c => score >= c.min && score <= c.max) || CLASSIFICATIONS[0];
}

export default function CentorMcIsaac() {
  const [scores, setScores] = useState({});

  const handleSelect = (id, value) => setScores(prev => ({ ...prev, [id]: value }));
  const handleReset = () => setScores({});

  const answeredCount = CRITERIA.filter(c => scores[c.id] !== undefined).length;
  const allAnswered = answeredCount === CRITERIA.length;
  const partialScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const total = allAnswered ? partialScore : null;
  const classification = total !== null ? getClassification(total) : null;
  const progressPct = (answeredCount / CRITERIA.length) * 100;
  const maxScore = 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pb-16">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg mb-4">
            <Microscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Centor / McIsaac</h1>
          <p className="text-gray-500 mt-1 text-sm">Probabilidade de faringoamigdalite por SBHGA</p>
        </motion.div>

        {/* Progress card */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">
              {allAnswered ? 'Avaliação completa' : `${answeredCount} / ${CRITERIA.length} critérios`}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold text-purple-600">{partialScore}</span>
              <span className="text-sm text-gray-400 font-medium">/ {maxScore} pts</span>
            </div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div className="h-full bg-purple-400 rounded-full" initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }} transition={{ duration: 0.3 }} />
          </div>
        </motion.div>

        {/* Criteria */}
        <div className="space-y-3 mb-6">
          {CRITERIA.map((criterion, idx) => {
            const answered = scores[criterion.id] !== undefined;
            return (
              <motion.div key={criterion.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition-all ${answered ? 'border-purple-200' : 'border-gray-200'}`}>
                <div className={`px-5 py-3 flex items-center justify-between border-b ${answered ? 'bg-purple-50 border-purple-100' : 'bg-gray-50 border-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{criterion.icon}</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{criterion.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{criterion.hint}</p>
                    </div>
                  </div>
                  {answered ? <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    : <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />}
                </div>
                <div className="p-3 grid gap-2">
                  {criterion.options.map((opt) => {
                    const selected = scores[criterion.id] === opt.value;
                    return (
                      <button key={opt.value} onClick={() => handleSelect(criterion.id, opt.value)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${
                          selected ? 'border-purple-500 bg-purple-500 text-white shadow-md'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50/60'}`}>
                        <span>{opt.label}</span>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {opt.value > 0 ? `+${opt.value}` : opt.value} pt{Math.abs(opt.value) !== 1 ? 's' : ''}
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
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }}
              className={`rounded-2xl border-2 ${classification.border} ${classification.bg} overflow-hidden mb-5`}>
              <div className={`px-6 py-5 flex items-center justify-between border-b ${classification.border}`}>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Score Centor / McIsaac</p>
                  <p className={`text-6xl font-extrabold ${classification.text}`}>
                    {total}
                    <span className="text-xl font-medium ml-1 opacity-60">/ {maxScore}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-4xl">{classification.emoji}</span>
                  <p className={`text-xl font-extrabold mt-1 ${classification.text}`}>{classification.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Prob. SBHGA: {classification.prob}</p>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className={`w-4 h-4 ${classification.text}`} />
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Conduta sugerida</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{classification.conduta}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset */}
        {answeredCount > 0 && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleReset}
            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-8">
            <RefreshCw className="w-4 h-4" /> Nova avaliação
          </motion.button>
        )}

        {/* Reference table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <p className="font-bold text-gray-700 text-sm">Interpretação do Score</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Score</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Risco</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Prob. SBHGA</th>
              </tr>
            </thead>
            <tbody>
              {CLASSIFICATIONS.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 font-mono font-bold text-gray-700">
                    {row.min === row.max ? row.min : `${row.min} a ${row.max}`}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.badge}`}>
                      {row.emoji} {row.label}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{row.prob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-6 text-xs text-gray-400 space-y-1 px-1">
          <p className="font-semibold text-gray-500">Referências</p>
          <p>Centor RM, et al. <em>Med Decis Making</em> 1981;1(3):239-46.</p>
          <p>McIsaac WJ, et al. <em>CMAJ</em> 1998;158(1):75-83.</p>
        </div>
      </div>
    </div>
  );
}