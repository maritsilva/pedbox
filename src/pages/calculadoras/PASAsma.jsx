import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CRITERIA = [
  {
    id: 'fr',
    label: 'Frequência Respiratória',
    icon: '🫁',
    options: [
      { label: 'Normal para idade', desc: '≤30 (<6m), ≤25 (6–12m), ≤20 (1–5a), ≤15 (>5a)', value: 1 },
      { label: 'Aumentada', desc: 'Taquipneia leve a moderada', value: 2 },
      { label: 'Muito aumentada', desc: 'Taquipneia significativa para a idade', value: 3 },
    ],
  },
  {
    id: 'sat',
    label: 'Saturação de O₂ (ar ambiente)',
    icon: '💨',
    options: [
      { label: '≥ 95%', desc: 'Oxigenação adequada', value: 1 },
      { label: '90–94%', desc: 'Hipoxemia leve', value: 2 },
      { label: '< 90%', desc: 'Hipoxemia significativa', value: 3 },
    ],
  },
  {
    id: 'ausculta',
    label: 'Ausculta (sibilos)',
    icon: '🔊',
    options: [
      { label: 'Normal / Sibilos expiratórios finais', desc: 'Sibilos ausentes ou mínimos', value: 1 },
      { label: 'Sibilos expiratórios', desc: 'Sibilância expiratória difusa', value: 2 },
      { label: 'Sibilos ins/expiratórios ou MV diminuído', desc: 'Sibilos bifásicos ou hipoventilação', value: 3 },
    ],
  },
  {
    id: 'retracao',
    label: 'Uso de musculatura acessória / Retrações',
    icon: '💪',
    options: [
      { label: 'Nenhuma ou intercostal leve', desc: 'Sem tiragens ou apenas intercostais discretas', value: 1 },
      { label: 'Intercostal e subcostal', desc: 'Retrações moderadas em múltiplos locais', value: 2 },
      { label: 'Intercostal, subcostal e supraesternal', desc: 'Retrações graves, batimento de asa nasal', value: 3 },
    ],
  },
  {
    id: 'dispneia',
    label: 'Dispneia (fala / choro)',
    icon: '🗣️',
    options: [
      { label: 'Fala frases completas / Choro normal', desc: 'Sem limitação na fala', value: 1 },
      { label: 'Fala frases curtas / Choro curto', desc: 'Dispneia moderada ao falar', value: 2 },
      { label: 'Fala palavras / Gemido / Incapaz de falar', desc: 'Dispneia grave, fala entrecortada', value: 3 },
    ],
  },
];

function getClassification(score) {
  if (score <= 7) return { label: 'Leve', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-300', conduta: 'Salbutamol 4–8 jatos + espaçador a cada 20–30 min × 3 doses. Reavaliar após cada ciclo.' };
  if (score <= 11) return { label: 'Moderada', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-300', conduta: 'Salbutamol contínuo ou a cada 20 min + ipratrópio + prednisolona 1–2 mg/kg VO. O₂ para SatO₂ ≥ 92%. Observar 4–6h.' };
  return { label: 'Grave', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-300', conduta: 'Emergência/UTI. Salbutamol contínuo + ipratrópio + corticoide IV. Considerar MgSO₄ 50 mg/kg IV. Avaliar VNI ou IOT.' };
}

export default function PASAsma() {
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
      <div className="bg-gradient-to-br from-blue-500 to-sky-700 rounded-3xl p-6 text-white mb-8 shadow-lg">
        <p className="text-blue-200 text-xs font-bold mb-1">Score Respiratório · Emergência</p>
        <h1 className="text-3xl font-extrabold">PAS — Asma</h1>
        <p className="text-blue-100 text-sm mt-1">Pediatric Asthma Score — Gravidade da crise (5–15)</p>
        <div className="flex items-end gap-4 mt-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-blue-200 text-xs">Score atual</p>
            <p className="text-5xl font-extrabold">{total || '—'}</p>
          </div>
          <p className="text-blue-200 text-sm mb-2">/ 15 · {answered}/{CRITERIA.length} parâmetros</p>
        </div>
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 text-xs text-sky-800 mb-6">
        <strong>Uso:</strong> Crianças em crise asmática no PS. Reavaliar após cada ciclo de broncodilatador.
      </div>

      {/* Criteria */}
      <div className="space-y-3 mb-6">
        {CRITERIA.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
              <span>{c.icon}</span>
              <p className="font-bold text-sm text-gray-800">{c.label}</p>
              {scores[c.id] !== undefined && <span className="ml-auto text-xs bg-sky-100 text-sky-700 font-bold px-2 py-0.5 rounded-full">{scores[c.id]} pt</span>}
            </div>
            <div className="p-3 space-y-2">
              {c.options.map(opt => {
                const selected = scores[c.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setScores(prev => ({ ...prev, [c.id]: opt.value }))}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-left gap-3 ${selected ? 'border-sky-500 bg-sky-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-sky-300 hover:bg-sky-50/50'}`}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{opt.label}</p>
                      <p className={`text-xs mt-0.5 ${selected ? 'text-sky-100' : 'text-gray-400'}`}>{opt.desc}</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{opt.value} pt</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-center">
        {[{ r: '5–7', l: 'Leve', c: 'bg-green-100 text-green-700' }, { r: '8–11', l: 'Moderada', c: 'bg-yellow-100 text-yellow-700' }, { r: '12–15', l: 'Grave', c: 'bg-red-100 text-red-700' }].map(l => (
          <div key={l.r} className={`${l.c} rounded-xl p-2`}><p className="font-bold">{l.r}</p><p>{l.l}</p></div>
        ))}
      </div>

      <AnimatePresence>
        {allAnswered && classification && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-5 mb-4`}>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Resultado</p>
            <p className={`text-3xl font-extrabold ${classification.color}`}>{total}/15 — {classification.label}</p>
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
        <p>Kelly CS et al. Improved outcomes for hospitalized asthmatic children using a clinical pathway. Ann Allergy Asthma Immunol. 2000;84(5):509-16.</p>
      </div>
    </div>
  );
}