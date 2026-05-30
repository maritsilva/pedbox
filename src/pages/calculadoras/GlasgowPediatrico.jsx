import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CRITERIA = [
  {
    id: 'ocular',
    label: 'Abertura Ocular',
    icon: '👁️',
    options: [
      { label: 'Espontânea', value: 4 },
      { label: 'Ao chamado / som', value: 3 },
      { label: 'Estímulo álgico', value: 2 },
      { label: 'Não responde', value: 1 },
    ],
  },
  {
    id: 'motora',
    label: 'Melhor Resposta Motora',
    icon: '🤚',
    options: [
      { label: 'Movimentos com propósito', value: 6 },
      { label: 'Localiza dor', value: 5 },
      { label: 'Retira membros à dor', value: 4 },
      { label: 'Flexão anormal (decorticação)', value: 3 },
      { label: 'Extensão anormal (descerebração)', value: 2 },
      { label: 'Não responde', value: 1 },
    ],
  },
  {
    id: 'verbal',
    label: 'Melhor Resposta Verbal',
    icon: '💬',
    hint: 'Adaptada para lactentes/crianças',
    options: [
      { label: 'Lalação / sons próprios da idade', value: 5 },
      { label: 'Choro consolável', value: 4 },
      { label: 'Choro inconsolável', value: 3 },
      { label: 'Grunidos / gemência à dor', value: 2 },
      { label: 'Não responde', value: 1 },
    ],
  },
];

function getClassification(score) {
  if (score >= 13) return { label: 'Normal / Leve', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-300', conduta: 'Alteração leve. Monitorar continuamente.' };
  if (score >= 9) return { label: 'Moderada', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-300', conduta: 'Investigação e observação intensiva necessárias.' };
  return { label: 'Grave (Coma)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-300', conduta: 'Glasgow ≤8: indicação clássica de proteção de via aérea / intubação.' };
}

export default function GlasgowPediatrico() {
  const [scores, setScores] = useState({});
  const navigate = useNavigate();

  const answered = CRITERIA.filter(c => scores[c.id] !== undefined).length;
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const allAnswered = answered === CRITERIA.length;
  const classification = allAnswered ? getClassification(total) : null;
  const maxScore = 15;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
      <button onClick={() => navigate('/calculadoras-hub')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Calculadoras
      </button>

      {/* Header card */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-500 to-purple-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden mb-8"
      >
        <div className="absolute top-4 right-6 opacity-20">
          <div className="text-6xl">🧠</div>
        </div>

        <div className="relative z-10">
          <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">
            Score Neurológico · Emergência
          </span>
          <h1 className="text-3xl font-extrabold mb-1">Glasgow Pediátrica</h1>
          <p className="text-sm font-medium opacity-90 mb-6">Nível de consciência em crianças</p>
          
          <div className="border-t border-white/20 pt-4">
            <p className="text-4xl font-extrabold">{allAnswered ? total : '—'}</p>
            <p className="text-sm opacity-90 mt-1">/ {maxScore} pontos</p>
          </div>
        </div>
      </motion.div>

      {/* Criteria */}
      <div className="space-y-3 mb-6">
        {CRITERIA.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
              <span>{c.icon}</span>
              <div>
                <p className="font-bold text-sm text-gray-800">{c.label}</p>
                {c.hint && <p className="text-xs text-gray-400">{c.hint}</p>}
              </div>
              {scores[c.id] !== undefined && <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">{scores[c.id]} pt</span>}
            </div>
            <div className="p-3 space-y-2">
              {c.options.map(opt => {
                const selected = scores[c.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setScores(prev => ({ ...prev, [c.id]: opt.value }))}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${selected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50'}`}
                  >
                    <span>{opt.label}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{opt.value}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <AnimatePresence>
        {allAnswered && classification && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-5 mb-4`}>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Resultado</p>
            <p className={`text-3xl font-extrabold ${classification.color}`}>{total}/{maxScore} — {classification.label}</p>
            <p className="text-sm text-gray-700 mt-2">{classification.conduta}</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              {[{ range: '13–15', label: 'Leve', bg: 'bg-green-100 text-green-700' }, { range: '9–12', label: 'Moderada', bg: 'bg-yellow-100 text-yellow-700' }, { range: '3–8', label: 'Grave', bg: 'bg-red-100 text-red-700' }].map(r => (
                <div key={r.range} className={`${r.bg} rounded-xl p-2 text-center`}>
                  <p className="font-bold">{r.range}</p><p>{r.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {answered > 0 && (
        <button onClick={() => setScores({})} className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-all">
          <RefreshCw className="w-4 h-4" /> Nova avaliação
        </button>
      )}

      <div className="mt-8 text-xs text-gray-400 px-1">
        <p className="font-semibold text-gray-500 mb-1">Referência</p>
        <p>Bauru. SMS. Protocolo de Classificação de Risco Pediatria. 2020. Adaptado da escala original de Teasdale & Jennett, 1974.</p>
      </div>
    </div>
  );
}