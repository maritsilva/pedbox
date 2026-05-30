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
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button onClick={() => navigate('/calculadoras-hub')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Calculadoras
        </button>

        {/* Header card */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden mb-8"
        >
          <div className="absolute top-4 right-6 opacity-20">
            <div className="text-6xl">👶</div>
          </div>

          <div className="relative z-10">
            <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">
              Score Neonatal
            </span>
            <h1 className="text-3xl font-extrabold mb-1">Escore de APGAR</h1>
            <p className="text-sm font-medium opacity-90 mb-6">Vitalidade do recém-nascido (0–10)</p>
            
            <div className="border-t border-white/20 pt-4">
              <p className="text-4xl font-extrabold">{total}</p>
              <p className="text-sm opacity-90 mt-1">/ 10 pontos</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT — Criteria */}
          <div className="lg:col-span-2 space-y-3">
            {CRITERIA.map((c, idx) => (
              <motion.div 
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
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
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${selected ? 'border-sky-500 bg-sky-500 text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-sky-300 hover:bg-sky-50/50'}`}
                      >
                        <span>{opt.label}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{opt.value} pt{opt.value !== 1 ? 's' : ''}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {/* Instruction alert */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-4"
            >
              <span className="text-xl">ℹ️</span>
              <p className="text-xs text-blue-800 leading-relaxed">Avalie cada parâmetro 1 minuto após o nascimento e repita aos 5 minutos.</p>
            </motion.div>
          </div>

          {/* RIGHT — Sidebar */}
          <div className="space-y-4">

            {/* Result */}
            <AnimatePresence>
              {allAnswered && classification && (
                <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }} className={`rounded-2xl border-2 ${classification.border} ${classification.bg} p-5 sticky top-20`}>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Resultado</p>
                  <p className={`text-4xl font-extrabold ${classification.color}`}>{total}</p>
                  <p className={`text-sm font-bold ${classification.color} mt-1 mb-3`}>{classification.label}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{classification.conduta}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Classification reference */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">Classificação</p>
              <div className="space-y-2">
                {[
                  { range: '7–10', label: 'Normal', bg: 'bg-green-50 border-green-200 text-green-700' },
                  { range: '4–6', label: 'Moderada', bg: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
                  { range: '0–3', label: 'Grave', bg: 'bg-red-50 border-red-200 text-red-700' }
                ].map(r => (
                  <div key={r.range} className={`border ${r.bg} rounded-xl p-3`}>
                    <p className="text-xs font-bold">{r.label}</p>
                    <p className="text-[10px]">{r.range}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {answered > 0 && (
          <button onClick={() => setScores({})} className="w-full py-3 mt-6 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-all">
            <RefreshCw className="w-4 h-4" /> Nova avaliação
          </button>
        )}

        <div className="mt-8 text-xs text-gray-400 px-1">
          <p className="font-semibold text-gray-500 mb-1">Referência</p>
          <p>Paraná. SESA-PR. Caderno de Atenção à Saúde da Criança: RN de Risco. 2020.</p>
        </div>
      </div>
    </div>
  );
}