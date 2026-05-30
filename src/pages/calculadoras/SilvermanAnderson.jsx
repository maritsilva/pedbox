import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CRITERIA = [
  {
    id: 'sincronia',
    label: 'Sincronia toracoabdominal',
    icon: '🫀',
    options: [
      { label: 'Movimento sincrônico', desc: 'Tórax e abdome movem-se juntos de forma coordenada', value: 0 },
      { label: 'Atraso inspiratório', desc: 'Pequeno atraso entre o movimento do abdome e do tórax', value: 1 },
      { label: 'Movimento paradoxal', desc: 'Tórax afunda enquanto abdome expande (gangorra)', value: 2 },
    ],
  },
  {
    id: 'intercostal',
    label: 'Tiragem intercostal',
    icon: '🔍',
    options: [
      { label: 'Ausente', desc: 'Sem retração visível dos espaços intercostais', value: 0 },
      { label: 'Discreta', desc: 'Retração leve, visível apenas com atenção', value: 1 },
      { label: 'Acentuada', desc: 'Retração marcante e facilmente identificável', value: 2 },
    ],
  },
  {
    id: 'xifoide',
    label: 'Retração xifoide',
    icon: '📍',
    options: [
      { label: 'Ausente', desc: 'Sem afundamento da região xifoide', value: 0 },
      { label: 'Discreta', desc: 'Leve depressão do apêndice xifoide na inspiração', value: 1 },
      { label: 'Acentuada', desc: 'Afundamento pronunciado do xifoide', value: 2 },
    ],
  },
  {
    id: 'nasal',
    label: 'Batimento de asa nasal',
    icon: '👃',
    options: [
      { label: 'Ausente', desc: 'Narinas estáveis durante a respiração', value: 0 },
      { label: 'Discreto', desc: 'Dilatação leve das narinas na inspiração', value: 1 },
      { label: 'Acentuado', desc: 'Abertura ampla e contínua das narinas', value: 2 },
    ],
  },
  {
    id: 'gemido',
    label: 'Gemido expiratório',
    icon: '🔊',
    options: [
      { label: 'Ausente', desc: 'Sem gemido durante a expiração', value: 0 },
      { label: 'Audível ao estetoscópio', desc: 'Gemido detectável apenas na ausculta', value: 1 },
      { label: 'Audível a distância', desc: 'Gemido audível sem estetoscópio', value: 2 },
    ],
  },
];

function getClassification(score) {
  if (score === 0) return { label: 'Sem desconforto', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-300', conduta: 'Observação clínica. Sem suporte adicional necessário.' };
  if (score <= 3) return { label: 'Leve', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-300', conduta: 'Monitorização. O₂ por cateter ou hood se necessário.' };
  if (score <= 6) return { label: 'Moderado', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-300', conduta: 'Considerar CPAP nasal (5–6 cmH₂O). O₂ para manter SatO₂ 91–95%.' };
  return { label: 'Grave', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-300', conduta: 'Considerar intubação e ventilação mecânica se sem resposta ao CPAP ou com apneias/acidose.' };
}

export default function SilvermanAnderson() {
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
      <div className="bg-gradient-to-br from-cyan-500 to-teal-700 rounded-3xl p-6 text-white mb-8 shadow-lg">
        <p className="text-cyan-200 text-xs font-bold mb-1">Score Neonatal · Respiratório</p>
        <h1 className="text-3xl font-extrabold">Silverman-Anderson</h1>
        <p className="text-cyan-100 text-sm mt-1">Desconforto respiratório em RN (0–10)</p>
        <div className="flex items-end gap-4 mt-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-cyan-200 text-xs">Score atual</p>
            <p className="text-5xl font-extrabold">{total}</p>
          </div>
          <p className="text-cyan-200 text-sm mb-2">/ 10 · {answered}/{CRITERIA.length} parâmetros</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-xs text-blue-800 mb-6">
        <strong>Uso:</strong> Sala de parto, alojamento conjunto e UTI neonatal. Quanto maior o escore, mais grave o desconforto.
      </div>

      {/* Criteria */}
      <div className="space-y-3 mb-6">
        {CRITERIA.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
              <span>{c.icon}</span>
              <p className="font-bold text-sm text-gray-800">{c.label}</p>
              {scores[c.id] !== undefined && <span className="ml-auto text-xs bg-cyan-100 text-cyan-700 font-bold px-2 py-0.5 rounded-full">+{scores[c.id]}</span>}
            </div>
            <div className="p-3 space-y-2">
              {c.options.map(opt => {
                const selected = scores[c.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setScores(prev => ({ ...prev, [c.id]: opt.value }))}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-left gap-3 ${selected ? 'border-cyan-500 bg-cyan-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-cyan-300 hover:bg-cyan-50/50'}`}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{opt.label}</p>
                      <p className={`text-xs mt-0.5 ${selected ? 'text-cyan-100' : 'text-gray-400'}`}>{opt.desc}</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{opt.value} pt{opt.value !== 1 ? 's' : ''}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4 text-xs text-center">
        {[{ r: '0', l: 'Sem desconforto', c: 'bg-green-100 text-green-700' }, { r: '1–3', l: 'Leve', c: 'bg-yellow-100 text-yellow-700' }, { r: '4–6', l: 'Moderado', c: 'bg-orange-100 text-orange-700' }, { r: '7–10', l: 'Grave', c: 'bg-red-100 text-red-700' }].map(l => (
          <div key={l.r} className={`${l.c} rounded-xl p-2`}><p className="font-bold">{l.r}</p><p>{l.l}</p></div>
        ))}
      </div>

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
        <p>Silverman WA, Andersen DH. A controlled clinical trial of effects of water mist on obstructive respiratory signs. Pediatrics. 1956;17(1):1-10.</p>
      </div>
    </div>
  );
}