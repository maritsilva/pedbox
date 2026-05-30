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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button onClick={() => navigate('/calculadoras-hub')} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ChevronLeft className="w-4 h-4" />
        Calculadoras
      </button>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left column */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Header card */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-rose-500 to-red-700 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-6 opacity-20">
              <div className="text-6xl">🩸</div>
            </div>

            <div className="relative z-10">
              <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">
                Score Neonatal · Infectologia
              </span>
              <h1 className="text-3xl font-extrabold mb-1">Escore de Rodwell</h1>
              <p className="text-sm font-medium opacity-90 mb-6">Probabilidade de sepse neonatal (0–8)</p>
              
              <div className="border-t border-white/20 pt-4">
                <p className="text-4xl font-extrabold">{total}</p>
                <p className="text-sm opacity-90 mt-1">/ 8 critérios</p>
              </div>

              <p className="text-xs mt-4 opacity-85 leading-relaxed">
                Ferramenta para estimar probabilidade de sepse neonatal com base no hemograma.
              </p>
            </div>
          </motion.div>

          {/* Instruction alert */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4"
          >
            <span className="text-xl">⚠️</span>
            <p className="text-xs text-amber-800 leading-relaxed">Marque cada critério presente no hemograma do recém-nascido. Cada critério positivo = 1 ponto.</p>
          </motion.div>

          {/* Criteria grid */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CRITERIA.map((criterion, idx) => (
                <motion.div
                  key={criterion.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="flex gap-3 p-4 bg-white border border-border rounded-xl hover:border-rose-300 hover:shadow-sm transition-all cursor-pointer"
                  onClick={() => toggle(criterion.id)}
                >
                  <input
                    type="checkbox"
                    id={criterion.id}
                    checked={!!checked[criterion.id]}
                    onChange={() => toggle(criterion.id)}
                    className="w-5 h-5 mt-0.5 cursor-pointer"
                  />
                  <label htmlFor={criterion.id} className="flex-1 cursor-pointer">
                    <p className="font-semibold text-sm text-foreground">{criterion.icon} {criterion.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {criterion.desc}
                    </p>
                  </label>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reference */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-border rounded-2xl p-5"
          >
            <p className="font-bold text-sm text-foreground mb-3">Referência</p>
            <div className="text-xs text-muted-foreground space-y-1.5">
              <p>• SBP. Sepse neonatal precoce e a abordagem do RN de risco. Documento Científico SBP.</p>
              <p>• Rodwell RL et al. Hematologic scoring system in early diagnosis of sepsis in neonates. Pediatr Infect Dis J. 1993;12(5):372-376.</p>
            </div>
          </motion.div>
        </div>

        {/* Right sidebar */}
        <div className="lg:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">
          {/* Score card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-border rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                📊
              </div>
              <p className="font-bold text-sm text-foreground">Pontuação atual</p>
            </div>

            <p className="text-4xl font-extrabold text-center text-rose-600 mb-3">
              {total}
            </p>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
              <div 
                className="bg-rose-500 h-2 rounded-full transition-all"
                style={{ width: `${8 ? (total / 8 * 100) : 0}%` }}
              />
            </div>

            <p className="text-xs text-muted-foreground text-center">
              {total} de 8 critérios
            </p>
          </motion.div>

          {/* Results */}
          {classification && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`rounded-2xl p-4 border ${classification.bg} ${classification.border}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">
                  {total <= 2 ? '🟢' : total <= 4 ? '🟡' : '🔴'}
                </span>
                <div className="flex-1">
                  <p className={`font-bold text-sm ${classification.color}`}>{classification.label}</p>
                  <p className={`text-xs mt-1 ${classification.color} opacity-80 leading-relaxed`}>
                    {classification.conduta}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Info box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-4"
          >
            <p className="text-xs font-semibold text-blue-900 mb-2">💡 Ferramenta de apoio</p>
            <p className="text-xs text-blue-800 leading-relaxed">
              Correlacionar com clínica e protocolos institucionais. Sempre valide com avaliação clínica.
            </p>
          </motion.div>
        </div>
      </div>

      {answeredCount > 0 && (
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setChecked({})}
          className="w-full mt-6 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-all"
        >
          <RefreshCw className="w-4 h-4" /> Nova avaliação
        </motion.button>
      )}
    </div>
  );
}