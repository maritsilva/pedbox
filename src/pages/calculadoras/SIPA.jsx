import React, { useState } from 'react';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// SIPA cutoffs by age group
const AGE_GROUPS = [
  { label: '< 1 ano', min: 0, max: 1, cutoff: 1.22 },
  { label: '1–2 anos', min: 1, max: 2, cutoff: 1.22 },
  { label: '2–4 anos', min: 2, max: 4, cutoff: 1.0 },
  { label: '4–6 anos', min: 4, max: 6, cutoff: 1.0 },
  { label: '6–12 anos', min: 6, max: 12, cutoff: 0.9 },
  { label: '> 12 anos', min: 12, max: 999, cutoff: 0.9 },
];

function getAgeGroup(age) {
  return AGE_GROUPS.find(g => age >= g.min && age < g.max) || AGE_GROUPS[AGE_GROUPS.length - 1];
}

export default function SIPA() {
  const [idade, setIdade] = useState('');
  const [fc, setFc] = useState('');
  const [pas, setPas] = useState('');
  const navigate = useNavigate();

  const idadeNum = parseFloat(idade);
  const fcNum = parseFloat(fc);
  const pasNum = parseFloat(pas);

  const canCalc = !isNaN(idadeNum) && !isNaN(fcNum) && !isNaN(pasNum) && pasNum > 0 && fcNum > 0 && idadeNum >= 0;
  const sipa = canCalc ? (fcNum / pasNum) : null;
  const ageGroup = canCalc ? getAgeGroup(idadeNum) : null;
  const isElevated = sipa !== null && ageGroup ? sipa >= ageGroup.cutoff : false;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
      <button onClick={() => navigate('/calculadoras-hub')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Calculadoras
      </button>

      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-rose-700 rounded-3xl p-6 text-white mb-8 shadow-lg">
        <p className="text-red-200 text-xs font-bold mb-1">Score de Choque · Emergência</p>
        <h1 className="text-3xl font-extrabold">SIPA</h1>
        <p className="text-red-100 text-sm mt-1">Shock Index Pediatric Age-adjusted — FC / PAS</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800 mb-6">
        <strong>Uso:</strong> PS, trauma, choque. SIPA elevado associa-se a maior mortalidade e necessidade de transfusão.
      </div>

      {/* Inputs */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-6 space-y-4">
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Idade (anos)</label>
          <input type="number" min="0" max="18" step="0.5" value={idade} onChange={e => setIdade(e.target.value)} placeholder="Ex: 3" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Frequência Cardíaca (bpm)</label>
          <input type="number" min="0" max="300" value={fc} onChange={e => setFc(e.target.value)} placeholder="Ex: 140" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1.5 block">PA Sistólica (mmHg)</label>
          <input type="number" min="0" max="300" value={pas} onChange={e => setPas(e.target.value)} placeholder="Ex: 100" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all" />
        </div>
      </div>

      {/* Result */}
      <AnimatePresence>
        {canCalc && sipa !== null && ageGroup && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border-2 p-5 mb-6 ${isElevated ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Resultado — {ageGroup.label}</p>
            <div className="flex items-center gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-500">SIPA = FC / PAS</p>
                <p className={`text-5xl font-extrabold ${isElevated ? 'text-red-600' : 'text-green-600'}`}>{sipa.toFixed(2)}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">Ponto de corte para esta idade</p>
                <p className="text-2xl font-bold text-gray-800">≥ {ageGroup.cutoff}</p>
              </div>
            </div>
            <div className={`px-4 py-3 rounded-xl font-bold text-sm ${isElevated ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {isElevated ? '⚠️ SIPA ELEVADO — Choque/Hipoperfusão provável. Considerar ressuscitação imediata.' : '✅ SIPA Normal para a idade. Monitorar clinicamente.'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reference table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-6">
        <div className="bg-gray-700 text-white px-4 py-3">
          <p className="font-bold text-sm">Valores de Corte por Idade</p>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b border-gray-100"><th className="text-left px-4 py-2 text-xs font-bold text-gray-500">Faixa etária</th><th className="text-center px-4 py-2 text-xs font-bold text-gray-500">SIPA elevado (≥)</th></tr></thead>
          <tbody className="divide-y divide-gray-50">
            {AGE_GROUPS.map((g, i) => (
              <tr key={i} className={ageGroup?.label === g.label ? 'bg-red-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className={`px-4 py-2.5 font-medium ${ageGroup?.label === g.label ? 'text-red-700 font-bold' : 'text-gray-700'}`}>{g.label}</td>
                <td className={`px-4 py-2.5 text-center font-bold ${ageGroup?.label === g.label ? 'text-red-700' : 'text-gray-600'}`}>{g.cutoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-gray-400 px-1">
        <p className="font-semibold text-gray-500 mb-1">Referência</p>
        <p>Acker SN et al. Shock index, pediatric age-adjusted (SIPA) is more accurate than age-adjusted hypotension. J Surg Res. 2017.</p>
      </div>
    </div>
  );
}