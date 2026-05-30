import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CRITERIA = [
  { id: 'leucocitos', label: 'Leucocitose ou Leucopenia', desc: '≥ 25.000 ao nascer / ≥ 30.000 às 12–24h / ≥ 21.000 após 48h ou ≤ 5.000/mm³', icon: '🔬' },
  { id: 'neutrofilos', label: 'Neutrofilia ou Neutropenia', desc: 'Valores variam conforme a idade em horas (ver referência)', icon: '🧫' },
  { id: 'imaturos', label: 'Elevação de Neutrófilos Imaturos', desc: '≥ 1.440/mm³ até 60h ou 500–600/mm³ após 60h', icon: '📊' },
  { id: 'indice', label: 'Índice Neutrofílico Aumentado (I/T)', desc: '≥ 0,16 (24h) / ≥ 0,13 (24–60h) / ≥ 0,12 (> 60h)', icon: '📐' },
  { id: 'razao', label: 'Razão I/T Aumentada (imaturos/totais)', desc: 'Razão dos neutrófilos imaturos/totais ≥ 0,3', icon: '⚖️' },
  { id: 'degeneracao', label: 'Alterações Degenerativas nos Neutrófilos', desc: 'Vacuolização ou granulação tóxica', icon: '🔭' },
  { id: 'plaquetas', label: 'Plaquetopenia', desc: '≤ 150.000/mm³', icon: '🩸' },
  { id: 'citoplasma', label: 'Alterações Citoplasmáticas', desc: 'Corpúsculos de Döhle, granulações tóxicas ou vacuolização', icon: '🧬' },
];

function getClassification(score) {
  if (score <= 2) return { label: 'Sepse Improvável', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-300', conduta: 'VPN ~99%. Observação clínica sem antibióticos se paciente estável.' };
  if (score <= 4) return { label: 'Sepse Possível', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-300', conduta: 'Investigação adicional (culturas, PCR, procalcitonina). Considerar antibioticoterapia empírica.' };
  return { label: 'Sepse Provável', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-300', conduta: 'Alta especificidade. Iniciar antibioticoterapia empírica imediata após coleta de culturas.' };
}

export default function EscoreRodwell() {
  const [checked, setChecked] = useState({});
  const navigate = useNavigate();

  const total = Object.values(checked).filter(Boolean).length;
  const answeredCount = Object.keys(checked).length;
  const allAnswered = answeredCount === CRITERIA.length;
  const classification = allAnswered || total > 0 ? getClassification(total) : null;

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
      <button onClick={() => navigate('/calculadoras-hub')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Calculadoras
      </button>

      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-red-700 rounded-3xl p-6 text-white mb-8 shadow-lg">
        <p className="text-rose-200 text-xs font-bold mb-1">Score Neonatal · Infectologia</p>
        <h1 className="text-3xl font-extrabold">Escore de Rodwell</h1>
        <p className="text-rose-100 text-sm mt-1">Probabilidade de sepse neonatal (0–8)</p>
        <div className="flex items-end gap-4 mt-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-rose-200 text-xs">Critérios positivos</p>
            <p className="text-5xl font-extrabold">{total}</p>
          </div>
          <p className="text-rose-200 text-sm mb-2">/ 8 critérios</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800 mb-6">
        <strong>Instruções:</strong> Marque cada critério presente no hemograma do recém-nascido. Cada critério positivo = 1 ponto.
      </div>

      {/* Criteria checkboxes */}
      <div className="space-y-2 mb-6">
        {CRITERIA.map((c) => {
          const isChecked = !!checked[c.id];
          return (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl border-2 transition-all text-left ${isChecked ? 'border-rose-400 bg-rose-50' : 'border-gray-200 bg-white hover:border-rose-200 hover:bg-rose-50/30'}`}
            >
              <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${isChecked ? 'bg-rose-500 border-rose-500' : 'border-gray-300 bg-white'}`}>
                {isChecked && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-bold ${isChecked ? 'text-rose-800' : 'text-gray-800'}`}>{c.icon} {c.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{c.desc}</p>
              </div>
              {isChecked && <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full flex-shrink-0">+1</span>}
            </button>
          );
        })}
      </div>

      {/* Interpretation table */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-center">
        {[{ r: '0–2', l: 'Improvável', c: 'bg-green-100 text-green-700' }, { r: '3–4', l: 'Possível', c: 'bg-yellow-100 text-yellow-700' }, { r: '≥5', l: 'Provável', c: 'bg-red-100 text-red-700' }].map(l => (
          <div key={l.r} className={`${l.c} rounded-xl p-2`}><p className="font-bold">{l.r} pts</p><p>{l.l}</p></div>
        ))}
      </div>

      <AnimatePresence>
        {classification && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-5 mb-4`}>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Resultado</p>
            <p className={`text-2xl font-extrabold ${classification.color}`}>{total}/8 — {classification.label}</p>
            <p className="text-sm text-gray-700 mt-2">{classification.conduta}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {Object.keys(checked).length > 0 && (
        <button onClick={() => setChecked({})} className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-all">
          <RefreshCw className="w-4 h-4" /> Nova avaliação
        </button>
      )}

      <div className="mt-8 text-xs text-gray-400 px-1">
        <p className="font-semibold text-gray-500 mb-1">Referência</p>
        <p>SBP. Sepse neonatal precoce e a abordagem do RN de risco. Documento Científico SBP.</p>
        <p className="mt-1">Rodwell RL et al. Hematologic scoring system in early diagnosis of sepsis in neonates. Pediatr Infect Dis J. 1993;12(5):372-376.</p>
      </div>
    </div>
  );
}