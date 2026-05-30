import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CRITERIA = [
  {
    id: 'comportamento',
    label: 'Comportamento',
    icon: '🧠',
    options: [
      { label: 'Brincando/Apropriado', desc: 'Alerta, interativo, atividade normal para idade', value: 0 },
      { label: 'Dormindo', desc: 'Sonolento mas despertável, responde normalmente', value: 1 },
      { label: 'Irritável', desc: 'Irritável, choroso, difícil de consolar', value: 2 },
      { label: 'Letárgico/Confuso', desc: 'Resposta reduzida a estímulos, confuso', value: 3 },
      { label: 'Não responsivo', desc: 'Responde apenas a dor ou não responde', value: 4 },
    ],
  },
  {
    id: 'cardiovascular',
    label: 'Cardiovascular',
    icon: '❤️',
    options: [
      { label: 'Rosado, TEC < 3s', desc: 'Cor normal, perfusão adequada', value: 0 },
      { label: 'Pálido OU TEC 3s', desc: 'Palidez leve ou perfusão levemente prolongada', value: 1 },
      { label: 'Acinzentado OU TEC 4s', desc: 'Coloração acinzentada ou perfusão moderada', value: 2 },
      { label: 'Cinza/Moteado OU TEC ≥ 5s', desc: 'Má perfusão, pele moteada', value: 3 },
    ],
  },
  {
    id: 'respiratorio',
    label: 'Respiratório',
    icon: '🫁',
    options: [
      { label: 'Normal', desc: 'FR normal para idade, sem esforço', value: 0 },
      { label: 'FR > 10 acima do normal', desc: 'Taquipneia leve, sem tiragens', value: 1 },
      { label: 'FR > 20 acima OU musculatura acessória', desc: 'Taquipneia moderada ou tiragens leves', value: 2 },
      { label: 'FR < 5 abaixo OU tiragens intensas', desc: 'Bradipneia ou desconforto importante', value: 3 },
      { label: 'FR ≥ 5 abaixo OU gemido/estridor', desc: 'Bradipneia significativa ou obstrução grave', value: 4 },
    ],
  },
  {
    id: 'o2',
    label: 'Necessidade de O₂',
    icon: '💨',
    options: [
      { label: 'Ar ambiente', desc: 'SpO₂ > 94% em ar ambiente', value: 0 },
      { label: 'Qualquer O₂ suplementar', desc: 'Necessita oxigênio para manter SpO₂', value: 2 },
      { label: 'O₂ ≥ 6L/min ou FiO₂ ≥ 50%', desc: 'Alto fluxo de oxigênio', value: 3 },
    ],
  },
  {
    id: 'nebulizacao',
    label: 'Nebulização (últimas 4h)',
    icon: '💊',
    options: [
      { label: 'Nenhuma', desc: 'Sem necessidade de nebulização', value: 0 },
      { label: '1 nebulização', desc: 'Uma nebulização nas últimas 4 horas', value: 1 },
      { label: '≥ 2 nebulizações', desc: 'Duas ou mais nebulizações nas últimas 4 horas', value: 2 },
    ],
  },
  {
    id: 'vomitos',
    label: 'Vômitos (pós-cirúrgico)',
    icon: '🏥',
    options: [
      { label: 'Não ou N/A', desc: 'Sem vômitos ou paciente não cirúrgico', value: 0 },
      { label: 'Vômitos persistentes', desc: 'Vômitos persistentes após cirurgia', value: 2 },
    ],
  },
];

function getClassification(score) {
  if (score <= 2) return { label: 'Verde — Baixo Risco', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-300', conduta: 'Avaliação a cada 4–8h. Cuidados de rotina.' };
  if (score <= 4) return { label: 'Amarelo — Risco Moderado', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-300', conduta: 'Avaliação a cada 2–4h. Comunicar enfermeiro responsável. Considerar avaliação médica.' };
  if (score <= 6) return { label: 'Laranja — Risco Alto', color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-300', conduta: 'Avaliação a cada 1–2h. Comunicar médico imediatamente. Considerar transferência para UTI.' };
  return { label: 'Vermelho — Emergência', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-300', conduta: 'Acionar Time de Resposta Rápida. Avaliação contínua. Preparar transferência imediata para UTI.' };
}

export default function PEWS() {
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

      {/* Header card */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-teal-500 to-cyan-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden mb-8"
      >
        <div className="absolute top-4 right-6 opacity-20">
          <div className="text-6xl">⚠️</div>
        </div>

        <div className="relative z-10">
          <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">
            Score de Alerta · Enfermaria
          </span>
          <h1 className="text-3xl font-extrabold mb-1">PEWS</h1>
          <p className="text-sm font-medium opacity-90 mb-6">Alerta precoce de deterioração pediátrica</p>
          
          <div className="border-t border-white/20 pt-4">
            <p className="text-4xl font-extrabold">{total}</p>
            <p className="text-sm opacity-90 mt-1">/ {CRITERIA.length} parâmetros</p>
          </div>
        </div>
      </motion.div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800 mb-6">
        <strong>Uso:</strong> Crianças hospitalizadas em enfermaria. Reavaliar a cada turno ou conforme protocolo institucional.
      </div>

      {/* Criteria */}
      <div className="space-y-3 mb-6">
        {CRITERIA.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
              <span>{c.icon}</span>
              <p className="font-bold text-sm text-gray-800">{c.label}</p>
              {scores[c.id] !== undefined && <span className="ml-auto text-xs bg-teal-100 text-teal-700 font-bold px-2 py-0.5 rounded-full">+{scores[c.id]}</span>}
            </div>
            <div className="p-3 space-y-2">
              {c.options.map(opt => {
                const selected = scores[c.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setScores(prev => ({ ...prev, [c.id]: opt.value }))}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-left gap-2 ${selected ? 'border-teal-500 bg-teal-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:bg-teal-50/50'}`}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{opt.label}</p>
                      {opt.desc && <p className={`text-xs mt-0.5 ${selected ? 'text-teal-100' : 'text-gray-400'}`}>{opt.desc}</p>}
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>+{opt.value}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Levels legend */}
      <div className="grid grid-cols-4 gap-2 mb-4 text-xs text-center">
        {[{ r: '0–2', l: 'Verde', c: 'bg-green-100 text-green-700' }, { r: '3–4', l: 'Amarelo', c: 'bg-yellow-100 text-yellow-700' }, { r: '5–6', l: 'Laranja', c: 'bg-orange-100 text-orange-700' }, { r: '≥7', l: 'Vermelho', c: 'bg-red-100 text-red-700' }].map(l => (
          <div key={l.r} className={`${l.c} rounded-xl p-2`}><p className="font-bold">{l.r}</p><p>{l.l}</p></div>
        ))}
      </div>

      {/* Result */}
      <AnimatePresence>
        {allAnswered && classification && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-5 mb-4`}>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Nível de Alerta</p>
            <p className={`text-2xl font-extrabold ${classification.color}`}>{total} pts — {classification.label}</p>
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
        <p>Monaghan A. Detecting and managing deterioration in children. Paediatr Nurs. 2005;17(1):32-35.</p>
      </div>
    </div>
  );
}