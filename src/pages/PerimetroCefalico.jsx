import React, { useState } from 'react';
import { Ruler, RefreshCw, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HEAD_DATA = {
  male: {
    0:  { p3: 32.0, p10: 33.2, p50: 35.6, p90: 37.6, p97: 38.6 },
    1:  { p3: 34.8, p10: 36.1, p50: 38.7, p90: 40.9, p97: 42.0 },
    2:  { p3: 36.7, p10: 38.1, p50: 40.8, p90: 43.1, p97: 44.1 },
    3:  { p3: 37.9, p10: 39.3, p50: 42.0, p90: 44.3, p97: 45.3 },
    4:  { p3: 38.8, p10: 40.2, p50: 42.9, p90: 45.2, p97: 46.2 },
    5:  { p3: 39.4, p10: 40.9, p50: 43.5, p90: 45.8, p97: 46.8 },
    6:  { p3: 39.9, p10: 41.4, p50: 44.0, p90: 46.3, p97: 47.3 },
    12: { p3: 42.2, p10: 43.8, p50: 46.6, p90: 49.2, p97: 50.2 },
    24: { p3: 43.8, p10: 45.4, p50: 48.3, p90: 50.9, p97: 52.0 },
    36: { p3: 44.4, p10: 46.0, p50: 49.0, p90: 51.6, p97: 52.7 },
  },
  female: {
    0:  { p3: 31.2, p10: 32.4, p50: 34.7, p90: 36.6, p97: 37.6 },
    1:  { p3: 33.9, p10: 35.1, p50: 37.6, p90: 39.6, p97: 40.6 },
    2:  { p3: 35.7, p10: 37.0, p50: 39.5, p90: 41.5, p97: 42.5 },
    3:  { p3: 36.9, p10: 38.2, p50: 40.7, p90: 42.7, p97: 43.7 },
    4:  { p3: 37.7, p10: 39.0, p50: 41.5, p90: 43.5, p97: 44.5 },
    5:  { p3: 38.2, p10: 39.5, p50: 42.0, p90: 44.0, p97: 45.0 },
    6:  { p3: 38.6, p10: 39.9, p50: 42.4, p90: 44.4, p97: 45.4 },
    12: { p3: 40.6, p10: 42.0, p50: 44.5, p90: 46.6, p97: 47.6 },
    24: { p3: 42.0, p10: 43.4, p50: 46.0, p90: 48.1, p97: 49.1 },
    36: { p3: 42.6, p10: 44.0, p50: 46.6, p90: 48.7, p97: 49.7 },
  },
};

function getClosestKey(months) {
  const keys = [0,1,2,3,4,5,6,12,24,36];
  if (months <= 0) return 0;
  if (months >= 36) return 36;
  return keys.reduce((prev, curr) =>
    Math.abs(curr - months) < Math.abs(prev - months) ? curr : prev
  );
}

function getClassify(val, refs) {
  if (val < refs.p3)  return { label: 'Microcefalia',  emoji: '🔴', bg: 'bg-red-50',    border: 'border-red-400',    text: 'text-red-700',    badge: 'bg-red-100 text-red-800',    bar: 'bg-red-500' };
  if (val > refs.p97) return { label: 'Macrocefalia',  emoji: '🟠', bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800', bar: 'bg-orange-400' };
  return              { label: 'Normal',        emoji: '🟢', bg: 'bg-emerald-50', border: 'border-emerald-400', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800', bar: 'bg-emerald-400' };
}

function getPercBand(val, refs) {
  const entries = [['P3',refs.p3],['P10',refs.p10],['P50',refs.p50],['P90',refs.p90],['P97',refs.p97]];
  for (let i = 0; i < entries.length; i++) {
    if (val <= entries[i][1]) {
      if (i === 0) return `< ${entries[0][0]}`;
      return `${entries[i-1][0]} – ${entries[i][0]}`;
    }
  }
  return `> P97`;
}

export default function PerimetroCefalico() {
  const [pc, setPc] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(null);

  const handleCalc = () => {
    const val = parseFloat(pc);
    if (!val || !birthDate) return;
    const birth = new Date(birthDate);
    const now = new Date();
    const months = Math.floor((now - birth) / (1000*60*60*24*30.4375));
    if (months < 0 || months > 36) return;
    const key = getClosestKey(months);
    const refs = HEAD_DATA[sex][key];
    const classify = getClassify(val, refs);
    const band = getPercBand(val, refs);
    const years = Math.floor(months / 12);
    const rem = months % 12;
    const ageText = years > 0 ? `${years}a ${rem}m` : `${months} mês${months !== 1 ? 'es' : ''}`;
    setResult({ val, months, ageText, refs, classify, band });
  };

  const handleReset = () => { setPc(''); setBirthDate(''); setResult(null); };

  const pct = result ? Math.min(((result.val - result.refs.p3) / (result.refs.p97 - result.refs.p3)) * 100, 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pb-16">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-lg mb-4">
            <Ruler className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Perímetro Cefálico</h1>
          <p className="text-gray-500 mt-1 text-sm">Avaliação do crescimento craniano · 0–36 meses · OMS/CDC</p>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-6 mb-6 space-y-4">

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Perímetro Cefálico (cm)</label>
            <input type="number" step="0.1" value={pc} onChange={e => setResult(null) || setPc(e.target.value)}
              placeholder="Ex: 35.5"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 transition text-sm" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Data de Nascimento</label>
            <input type="date" value={birthDate} onChange={e => { setResult(null); setBirthDate(e.target.value); }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 transition text-sm" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Sexo</label>
            <div className="flex gap-2">
              {[{ v: 'male', l: 'Masculino' }, { v: 'female', l: 'Feminino' }].map(({ v, l }) => (
                <button key={v} onClick={() => { setSex(v); setResult(null); }}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${sex === v ? 'bg-teal-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-teal-50'}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleCalc} disabled={!pc || !birthDate}
            className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-40 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm">
            Calcular
          </button>
        </motion.div>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }}
              className={`rounded-2xl border-2 ${result.classify.border} ${result.classify.bg} overflow-hidden mb-5`}>
              {/* Score header */}
              <div className={`px-6 py-5 flex items-center justify-between border-b ${result.classify.border}`}>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Perímetro Cefálico</p>
                  <p className={`text-5xl font-extrabold ${result.classify.text}`}>
                    {result.val}
                    <span className="text-xl font-medium ml-1 opacity-60">cm</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Idade: {result.ageText}</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl">{result.classify.emoji}</span>
                  <p className={`text-xl font-extrabold mt-1 ${result.classify.text}`}>{result.classify.label}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${result.classify.badge}`}>
                    {result.band}
                  </span>
                </div>
              </div>
              {/* Bar */}
              <div className="px-6 py-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Posição no canal de percentis</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }}
                    className={`h-3 rounded-full ${result.classify.bar}`} />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>P3 — {result.refs.p3}</span>
                  <span>P50 — {result.refs.p50}</span>
                  <span>P97 — {result.refs.p97}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset */}
        {result && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleReset}
            className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-8">
            <RefreshCw className="w-4 h-4" /> Nova avaliação
          </motion.button>
        )}

        {/* Reference table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
            <p className="font-bold text-gray-700 text-sm">Interpretação</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {[
                { label: 'Microcefalia', range: '< P3', badge: 'bg-red-100 text-red-800', emoji: '🔴' },
                { label: 'Normal', range: 'P3 – P97', badge: 'bg-emerald-100 text-emerald-800', emoji: '🟢' },
                { label: 'Macrocefalia', range: '> P97', badge: 'bg-orange-100 text-orange-800', emoji: '🟠' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 font-mono font-bold text-gray-700">{row.range}</td>
                  <td className="px-5 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.badge}`}>{row.emoji} {row.label}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3">
          <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">Baseado em curvas OMS/CDC. Faixa etária suportada: 0–36 meses. Microcefalia congênita requer avaliação clínica e por imagem.</p>
        </div>
      </div>
    </div>
  );
}