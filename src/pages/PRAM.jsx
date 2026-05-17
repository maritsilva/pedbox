import React, { useState } from 'react';
import { Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CRITERIA = [
  {
    id: 'o2sat',
    label: 'Saturação de O₂',
    options: [
      { label: '≥ 95%', value: 0 },
      { label: '92–94%', value: 1 },
      { label: '< 92%', value: 3 },
    ],
  },
  {
    id: 'suprasternal',
    label: 'Retração supraesternal',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Presente', value: 2 },
    ],
  },
  {
    id: 'scalene',
    label: 'Contração do músculo escaleno',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Presente', value: 2 },
    ],
  },
  {
    id: 'airentry',
    label: 'Entrada de ar (pulmão mais afetado)',
    options: [
      { label: 'Normal', value: 0 },
      { label: 'Diminuída', value: 1 },
      { label: 'Muito diminuída / ausente', value: 2 },
    ],
  },
  {
    id: 'wheezing',
    label: 'Sibilância (pulmão mais afetado)',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Expiratória apenas', value: 1 },
      { label: 'Inspiratória e expiratória', value: 2 },
      { label: 'Audível sem estetoscópio / silêncio', value: 3 },
    ],
  },
];

function getClassification(score) {
  if (score <= 3) return {
    label: 'Leve',
    color: 'green',
    bg: 'bg-green-50',
    border: 'border-green-400',
    text: 'text-green-700',
    badge: 'bg-green-100 text-green-800',
    conduta: 'Broncodilatador de curta duração (salbutamol) conforme necessário. Reavaliação clínica. Alta com plano de ação.',
  };
  if (score <= 7) return {
    label: 'Moderada',
    color: 'yellow',
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    text: 'text-yellow-700',
    badge: 'bg-yellow-100 text-yellow-800',
    conduta: 'Broncodilatador a cada 20 min × 3 doses. Corticosteroide sistêmico. Monitorização contínua. Considerar internação se sem melhora.',
  };
  return {
    label: 'Grave',
    color: 'red',
    bg: 'bg-red-50',
    border: 'border-red-400',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-800',
    conduta: 'Oxigênio suplementar. Broncodilatador contínuo. Corticosteroide sistêmico IV/VO. Considerar ipratrópio, sulfato de magnésio. Internação / UTI.',
  };
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 pb-12">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-lg mb-4">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Score PRAM</h1>
          <p className="text-gray-500 mt-1 text-sm">Gravidade da crise asmática pediátrica · 2–17 anos</p>
        </motion.div>

        {/* Progress bar */}
        {answeredCount > 0 && !allAnswered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl border border-gray-200 px-5 py-3 mb-5 flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">{answeredCount} de {CRITERIA.length} critérios respondidos</span>
            <span className="text-sm font-bold text-blue-600">Parcial: {partialScore} pts</span>
          </motion.div>
        )}

        {/* Criteria */}
        <div className="space-y-4 mb-6">
          {CRITERIA.map((criterion, idx) => (
            <motion.div
              key={criterion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="px-5 py-4 bg-gradient-to-r from-sky-50 to-blue-50 border-b border-gray-100">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Critério {idx + 1}</span>
                <p className="font-semibold text-gray-800 mt-0.5">{criterion.label}</p>
              </div>
              <div className="p-4 space-y-2">
                {criterion.options.map((opt) => {
                  const selected = scores[criterion.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(criterion.id, opt.value)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm ${
                        selected
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/50'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${selected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {opt.value} pt{opt.value !== 1 ? 's' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result */}
        <AnimatePresence>
          {allAnswered && classification && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-6 mb-6`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Score total</p>
                  <p className={`text-5xl font-extrabold ${classification.text}`}>{total}<span className="text-lg font-medium ml-1">/ 12</span></p>
                </div>
                <span className={`px-4 py-2 rounded-full text-base font-bold ${classification.badge}`}>
                  {classification.label}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Conduta sugerida</p>
                <p className={`text-sm font-medium ${classification.text}`}>{classification.conduta}</p>
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
            className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:bg-gray-100 transition-all"
          >
            Limpar / Nova avaliação
          </motion.button>
        )}

        {/* Reference table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <p className="font-bold text-gray-700 text-sm">Interpretação do Score PRAM</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 text-gray-500 font-semibold">Score</th>
                <th className="text-left px-5 py-3 text-gray-500 font-semibold">Gravidade</th>
              </tr>
            </thead>
            <tbody>
              {[
                { range: '0 – 3', label: 'Leve', badge: 'bg-green-100 text-green-800' },
                { range: '4 – 7', label: 'Moderada', badge: 'bg-yellow-100 text-yellow-800' },
                { range: '8 – 12', label: 'Grave', badge: 'bg-red-100 text-red-800' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 font-mono font-bold text-gray-700">{row.range}</td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.badge}`}>{row.label}</span>
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