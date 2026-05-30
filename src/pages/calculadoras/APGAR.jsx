import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CRITERIA = [
  {
    id: 'fc',
    label: 'Frequência Cardíaca',
    icon: '❤️',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Menor que 100/minuto', value: 1 },
      { label: 'Maior que 100/minuto', value: 2 },
    ],
  },
  {
    id: 'resp',
    label: 'Respiração',
    icon: '🫁',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Fraca/Irregular', value: 1 },
      { label: 'Forte/Choro', value: 2 },
    ],
  },
  {
    id: 'tonus',
    label: 'Tônus Muscular',
    icon: '💪',
    options: [
      { label: 'Flácido', value: 0 },
      { label: 'Flexão de pernas e braços', value: 1 },
      { label: 'Movimento ativo/Boa flexão', value: 2 },
    ],
  },
  {
    id: 'cor',
    label: 'Cor da Pele',
    icon: '🎨',
    options: [
      { label: 'Cianótico/Pálido', value: 0 },
      { label: 'Cianose de extremidades', value: 1 },
      { label: 'Rosado', value: 2 },
    ],
  },
  {
    id: 'reflexo',
    label: 'Irritabilidade Reflexa',
    icon: '⚡',
    options: [
      { label: 'Ausente', value: 0 },
      { label: 'Algum movimento', value: 1 },
      { label: 'Espirros/Choro', value: 2 },
    ],
  },
];

function getClassification(score) {
  if (score >= 7) return { label: 'Normal', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-300', conduta: 'Cuidados de rotina — secar, aquecer, avaliar.' };
  if (score >= 4) return { label: 'Depressão Moderada', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-300', conduta: 'Estimulação tátil, aspiração, oxigênio e VPP se necessário.' };
  return { label: 'Depressão Grave / Crítico', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-300', conduta: 'Reanimação avançada imediata: VPP, IOT, massagem cardíaca, medicações.' };
}

export default function APGAR() {
  const [scores, setScores] = useState({});
  const navigate = useNavigate();

  const answered = CRITERIA.filter(c => scores[c.id] !== undefined).length;
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const allAnswered = answered === CRITERIA.length;
  const classification = allAnswered ? getClassification(total) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
      <button onClick={() => navigate('/calculadoras-hub')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Calculadoras
      </button>

      {/* Header */}
      <div className="bg-gradient-to-br from-sky-500 to-blue-700 rounded-3xl p-6 text-white mb-8 shadow-lg">
        <p className="text-sky-200 text-xs font-bold mb-1">Score Neonatal</p>
        <h1 className="text-3xl font-extrabold">Escore de APGAR</h1>
        <p className="text-sky-100 text-sm mt-1">Vitalidade do recém-nascido (0–10)</p>
        <div className="flex items-end gap-4 mt-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-sky-200 text-xs">Score atual</p>
            <p className="text-5xl font-extrabold">{total}</p>
          </div>
          <p className="text-sky-200 text-sm mb-2">/ 10 · {answered}/{CRITERIA.length} itens</p>
        </div>
      </div>

      {/* Criteria */}
      <div className="space-y-3 mb-6">
        {CRITERIA.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
              <span>{c.icon}</span>
              <p className="font-bold text-sm text-gray-800">{c.label}</p>
              {scores[c.id] !== undefined && <span className="ml-auto text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">+{scores[c.id]}</span>}
            </div>
            <div className="p-3 space-y-2">
              {c.options.map(opt => {
                const selected = scores[c.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setScores(prev => ({ ...prev, [c.id]: opt.value }))}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${selected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  >
                    <span>{opt.label}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{opt.value} pt{opt.value !== 1 ? 's' : ''}</span>
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
            <p className={`text-3xl font-extrabold ${classification.color}`}>{total}/10 — {classification.label}</p>
            <p className="text-sm text-gray-700 mt-2">{classification.conduta}</p>
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
        <p>Paraná. SESA-PR. Caderno de Atenção à Saúde da Criança: RN de Risco. 2020.</p>
      </div>
    </div>
  );
}