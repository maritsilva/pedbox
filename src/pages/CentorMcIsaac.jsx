import React, { useState } from 'react';
import { Stethoscope, Info, RefreshCw, CheckCircle, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CRITERIA = [
  {
    id: 'tosse',
    label: 'Ausência de tosse',
    hint: 'Pontua quando o paciente NÃO apresenta tosse',
    icon: '🤧',
    options: [
      { label: 'Tosse presente', value: 0 },
      { label: 'Sem tosse', value: 1 },
    ],
  },
  {
    id: 'nodulos',
    label: 'Linfonodos cervicais anteriores dolorosos',
    hint: 'Adenomegalia cervical anterior dolorosa à palpação',
    icon: '🔵',
    options: [
      { label: 'Ausentes', value: 0 },
      { label: 'Presentes', value: 1 },
    ],
  },
  {
    id: 'edema',
    label: 'Edema amigdaliano ou exsudato',
    hint: 'Hipertrofia ou exsudato purulento nas amígdalas',
    icon: '👄',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Presente', value: 1 },
    ],
  },
  {
    id: 'temperatura',
    label: 'Temperatura > 38°C',
    hint: 'Febre axilar > 38°C no momento da avaliação',
    icon: '🌡️',
    options: [
      { label: 'Temperatura ≤ 38°C', value: 0 },
      { label: 'Temperatura > 38°C', value: 1 },
    ],
  },
  {
    id: 'idade',
    label: 'Faixa etária',
    hint: 'Fator de ajuste por idade (McIsaac)',
    icon: '👤',
    options: [
      { label: '3–14 anos (+1 pt)', value: 1 },
      { label: '15–44 anos (0 pt)', value: 0 },
      { label: '≥ 45 anos (−1 pt)', value: -1 },
    ],
  },
];

const CLASSIFICATIONS = [
  {
    score: '≤ 0',
    min: -2, max: 0,
    risco: 'Muito Baixo',
    probabilidade: '2–3%',
    recomendacao: 'Sem cultura ou antibiótico',
    bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', badge: 'bg-green-100 text-green-800',
    emoji: '🟢',
  },
  {
    score: '1',
    min: 1, max: 1,
    risco: 'Baixo',
    probabilidade: '4–6%',
    recomendacao: 'Sem cultura ou antibiótico',
    bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800',
    emoji: '🟢',
  },
  {
    score: '2–3',
    min: 2, max: 3,
    risco: 'Moderado',
    probabilidade: '10–28%',
    recomendacao: 'Cultura; tratar se positivo',
    bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800',
    emoji: '🟡',
  },
  {
    score: '≥ 4',
    min: 4, max: 99,
    risco: 'Alto',
    probabilidade: '38–63%',
    recomendacao: 'Tratar empiricamente ou cultura',
    bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', badge: 'bg-red-100 text-red-800',
    emoji: '🔴',
  },
];

function getClassification(score) {
  return CLASSIFICATIONS.find(c => score >= c.min && score <= c.max) || CLASSIFICATIONS[0];
}

function ScoreBar({ score }) {
  // score range -1 to 5, display 0–5 for bar purposes
  const pct = Math.min(Math.max(((score + 1) / 6) * 100, 0), 100);
  const color = score <= 0 ? 'bg-green-400' : score <= 1 ? 'bg-emerald-400' : score <= 3 ? 'bg-amber-400' : 'bg-red-500';
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-400 mb-1 font-medium">
        <span>≤0</span><span>1</span><span>2–3</span><span>≥4</span>
      </div>
      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[16%] bg-green-100 rounded-l-full" />
        <div className="absolute inset-y-0 left-[16%] w-[16%] bg-emerald-100" />
        <div className="absolute inset-y-0 left-[32%] w-[35%] bg-amber-100" />
        <div className="absolute inset-y-0 left-[67%] right-0 bg-red-100 rounded-r-full" />
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between text-xs mt-1 font-semibold">
        <span className="text-green-600">Muito Baixo</span>
        <span className="text-amber-600">Moderado</span>
        <span className="text-red-600">Alto</span>
      </div>
    </div>
  );
}

export default function CentorMcIsaac() {
  const [scores, setScores] = useState({});

  const handleSelect = (id, value) => setScores(prev => ({ ...prev, [id]: value }));
  const handleReset = () => setScores({});

  const answeredCount = CRITERIA.filter(c => scores[c.id] !== undefined).length;
  const allAnswered = answeredCount === CRITERIA.length;
  const total = allAnswered ? Object.values(scores).reduce((a, b) => a + b, 0) : null;
  const classification = total !== null ? getClassification(total) : null;
  const partialScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const progressPct = (answeredCount / CRITERIA.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 pb-12">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">Centor / McIsaac</h1>
          </div>
          <p className="text-gray-600 text-base">Faringite por Streptococcus pyogenes</p>
          <p className="text-xs text-gray-400 mt-1">Crianças ≥ 3 anos e adultos</p>
        </motion.div>

        {/* Progress card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">
              {allAnswered ? 'Avaliação completa' : `${answeredCount} / ${CRITERIA.length} critérios`}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold text-orange-600">{partialScore}</span>
              <span className="text-sm text-gray-400 font-medium">pts</span>
            </div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-orange-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <ScoreBar score={partialScore} />
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
                className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition-all ${answered ? 'border-orange-200' : 'border-gray-200'}`}
              >
                <div className={`px-5 py-3 flex items-center justify-between border-b ${answered ? 'bg-orange-50 border-orange-100' : 'bg-gray-50 border-gray-100'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{criterion.icon}</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{criterion.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{criterion.hint}</p>
                    </div>
                  </div>
                  {answered
                    ? <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
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
                            ? 'border-orange-500 bg-orange-500 text-white shadow-md'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50/60'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {opt.value > 0 ? `+${opt.value}` : opt.value} {Math.abs(opt.value) === 1 ? 'pt' : 'pts'}
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
              <div className={`px-6 py-5 flex items-center justify-between border-b ${classification.border}`}>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Score McIsaac</p>
                  <p className={`text-6xl font-extrabold ${classification.text}`}>
                    {total}
                    <span className="text-xl font-medium ml-1 opacity-60">pts</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-4xl">{classification.emoji}</span>
                  <p className={`text-xl font-extrabold mt-1 ${classification.text}`}>{classification.risco}</p>
                </div>
              </div>
              <div className="px-6 py-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Probabilidade de GABHS</span>
                  <span className={`font-bold ${classification.text}`}>{classification.probabilidade}</span>
                </div>
                <div className={`rounded-xl border p-3 ${classification.bg} border-current/20`}>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Conduta sugerida</p>
                  <p className={`text-sm font-semibold ${classification.text}`}>{classification.recomendacao}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset */}
        {answeredCount > 0 && (
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={handleReset}
            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-8"
          >
            <RefreshCw className="w-4 h-4" /> Nova avaliação
          </motion.button>
        )}

        {/* Reference table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <p className="font-bold text-gray-700 text-sm">Classificação de Risco</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Score</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Risco</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Probabilidade</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase">Conduta</th>
              </tr>
            </thead>
            <tbody>
              {CLASSIFICATIONS.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 font-mono font-bold text-gray-700">{row.score}</td>
                  <td className="px-5 py-3"><span className={`px-3 py-1 rounded-full text-xs font-bold ${row.badge}`}>{row.emoji} {row.risco}</span></td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{row.probabilidade}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{row.recomendacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Info */}
        <div className="text-xs text-gray-400 space-y-1 px-1">
          <p className="font-semibold text-gray-500">Referências</p>
          <p>Centor RM et al. <em>Med Decis Making</em> 1981;1(3):239-46.</p>
          <p>McIsaac WJ et al. <em>CMAJ</em> 1998;158(1):75-83.</p>
        </div>
      </div>
    </div>
  );
}