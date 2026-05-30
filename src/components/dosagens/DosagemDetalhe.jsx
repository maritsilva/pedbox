import React, { useState, useMemo } from 'react';
import { ChevronLeft, AlertTriangle, RefreshCw, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', grad: 'from-orange-500 to-orange-600', badge: 'bg-orange-100 text-orange-800 border-orange-200' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    grad: 'from-red-500 to-red-700',       badge: 'bg-red-100 text-red-800 border-red-200' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', grad: 'from-purple-500 to-purple-700', badge: 'bg-purple-100 text-purple-800 border-purple-200' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   grad: 'from-blue-500 to-blue-700',     badge: 'bg-blue-100 text-blue-800 border-blue-200' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', grad: 'from-yellow-400 to-amber-500',  badge: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  grad: 'from-green-500 to-green-700',   badge: 'bg-green-100 text-green-800 border-green-200' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   grad: 'from-teal-500 to-teal-700',     badge: 'bg-teal-100 text-teal-800 border-teal-200' },
};

function calcDose(drug, peso, doseKey = 'mid') {
  const dosePerKg = doseKey === 'min' ? drug.dose_min : doseKey === 'max' ? drug.dose_max : (drug.dose_min + drug.dose_max) / 2;
  let dose = dosePerKg * peso;
  if (drug.dose_max_abs) dose = Math.min(dose, drug.dose_max_abs);
  return dose;
}

function calcApresentacao(dose, apres) {
  if (!apres || !apres.conc) return null;
  if (apres.tipo === 'gotas') {
    // gotas: conc = mg/mL, 1 gota = 0.05 mL (padrão)
    const mLneeded = dose / apres.conc;
    const gotas = mLneeded / (apres.mL_por_unidade || 0.05);
    return { valor: gotas, unidade: 'gotas' };
  }
  if (apres.tipo === 'mL') {
    return { valor: dose / apres.conc, unidade: 'mL' };
  }
  if (apres.tipo === 'comprimido') {
    return { valor: dose / apres.conc, unidade: 'comprimido(s)' };
  }
  if (apres.tipo === 'frasco') {
    return { valor: dose / apres.conc, unidade: 'frasco(s)' };
  }
  if (apres.tipo === 'jatos') {
    return { valor: Math.round(dose / apres.conc), unidade: 'jatos' };
  }
  return null;
}

function formatNum(n) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  if (n < 0.01) return n.toFixed(3);
  if (n < 1) return n.toFixed(2);
  if (n < 10) return n.toFixed(1);
  return Math.round(n).toString();
}

export default function DosagemDetalhe({ drug, onBack }) {
  const [peso, setPeso] = useState('');
  const [apresentacaoIdx, setApresentacaoIdx] = useState(0);
  const meta = COLOR_MAP[drug.catColor] || COLOR_MAP.blue;

  const pesoNum = parseFloat(peso);
  const pesoValido = !isNaN(pesoNum) && pesoNum > 0 && pesoNum <= 200;

  const { doseMin, doseMid, doseMax } = useMemo(() => {
    if (!pesoValido) return {};
    return {
      doseMin: calcDose(drug, pesoNum, 'min'),
      doseMid: calcDose(drug, pesoNum, 'mid'),
      doseMax: calcDose(drug, pesoNum, 'max'),
    };
  }, [pesoNum, drug, pesoValido]);

  const apresAtual = drug.apresentacoes?.[apresentacaoIdx];
  const calcAtual = pesoValido && apresAtual ? calcApresentacao(doseMid, apresAtual) : null;
  const calcMin = pesoValido && apresAtual ? calcApresentacao(doseMin, apresAtual) : null;
  const calcMax = pesoValido && apresAtual ? calcApresentacao(doseMax, apresAtual) : null;

  const freqLabel = drug.freq ? (drug.freq === 24 ? '1×/dia' : drug.freq === 12 ? '2×/dia' : drug.freq === 8 ? '3×/dia' : drug.freq === 6 ? '4×/dia' : drug.freq === 4 ? '6×/dia' : `a cada ${drug.freq}h`) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-20">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Dosagens
      </button>

      {/* Hero */}
      <div className={`bg-gradient-to-br ${meta.grad} rounded-3xl p-6 text-white mb-6 shadow-lg`}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">{drug.catIcon}</div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold opacity-75 uppercase tracking-wide">{drug.catLabel}</span>
            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mt-0.5">{drug.name}</h1>
            {drug.sinonimo && <p className="text-white/80 text-sm mt-0.5">{drug.sinonimo}</p>}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-semibold">📍 {drug.via}</span>
              {freqLabel && <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-semibold">🕐 {freqLabel}</span>}
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-semibold">⚖️ {drug.dose_min}–{drug.dose_max} {drug.unidade}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerta */}
      {drug.alerta && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl px-4 py-3 flex gap-2 items-start mb-5 text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
          <p>{drug.alerta}</p>
        </div>
      )}

      {/* Cálculo por peso */}
      <div className="bg-white border-2 border-primary/20 rounded-2xl p-5 shadow-sm mb-5">
        <h2 className="font-extrabold text-base text-foreground mb-3 flex items-center gap-2">
          ⚡ Cálculo Rápido por Peso
        </h2>
        <div className="flex gap-3 items-end mb-4">
          <div className="flex-1">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Peso do paciente (kg)</label>
            <input
              type="number"
              min="0.5"
              max="200"
              step="0.5"
              value={peso}
              onChange={e => setPeso(e.target.value)}
              placeholder="Ex: 15"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-bold focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          {peso && (
            <button onClick={() => setPeso('')} className="p-3 rounded-xl border-2 border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all">
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Apresentação */}
        {drug.apresentacoes?.length > 0 && (
          <div className="mb-4">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5 block">Apresentação disponível</label>
            <div className="flex flex-wrap gap-2">
              {drug.apresentacoes.map((ap, i) => (
                <button
                  key={i}
                  onClick={() => setApresentacaoIdx(i)}
                  className={`text-xs px-3 py-2 rounded-xl border-2 font-semibold transition-all ${apresentacaoIdx === i ? 'border-primary bg-primary text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-primary/40'}`}
                >
                  {ap.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Resultado */}
        <AnimatePresence>
          {pesoValido && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              {/* Dose em mg */}
              <div className={`rounded-2xl border-2 ${meta.border} ${meta.bg} p-4`}>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Dose calculada ({pesoNum} kg)</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Mínima</p>
                    <p className={`text-xl font-extrabold ${meta.text}`}>{formatNum(doseMin)}</p>
                    <p className="text-xs text-muted-foreground">mg/dose</p>
                  </div>
                  <div className="border-x border-gray-200">
                    <p className="text-xs text-muted-foreground mb-0.5">Média ⭐</p>
                    <p className={`text-2xl font-extrabold ${meta.text}`}>{formatNum(doseMid)}</p>
                    <p className="text-xs text-muted-foreground">mg/dose</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Máxima</p>
                    <p className={`text-xl font-extrabold ${meta.text}`}>{formatNum(doseMax)}</p>
                    <p className="text-xs text-muted-foreground">mg/dose</p>
                  </div>
                </div>
                {drug.dose_max_abs && doseMax >= drug.dose_max_abs && (
                  <p className="text-xs text-center mt-2 text-amber-600 font-semibold">⚠️ Limitado ao máximo absoluto de {drug.dose_max_abs} mg/dose</p>
                )}
              </div>

              {/* Volume/gotas/comprimidos */}
              {calcAtual && (
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Volume / Quantidade — {apresAtual.label}</p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Mín</p>
                      <p className="text-lg font-extrabold text-gray-700">{formatNum(calcMin?.valor)}</p>
                      <p className="text-xs text-muted-foreground">{calcMin?.unidade}</p>
                    </div>
                    <div className="border-x border-gray-100">
                      <p className="text-xs text-muted-foreground mb-0.5">Méd ⭐</p>
                      <p className="text-2xl font-extrabold text-gray-900">{formatNum(calcAtual?.valor)}</p>
                      <p className="text-xs text-muted-foreground">{calcAtual?.unidade}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Máx</p>
                      <p className="text-lg font-extrabold text-gray-700">{formatNum(calcMax?.valor)}</p>
                      <p className="text-xs text-muted-foreground">{calcMax?.unidade}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Frequência */}
              {freqLabel && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className="text-base">🕐</span>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Frequência</p>
                    <p className="text-sm font-bold text-foreground">{freqLabel} — a cada {drug.freq}h</p>
                  </div>
                  {drug.doses_por_dia && (
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Dose/dia total</p>
                      <p className="text-sm font-bold text-foreground">{formatNum(doseMid * drug.doses_por_dia)} mg/dia</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!pesoValido && (
          <div className="text-center py-6 text-muted-foreground">
            <p className="text-3xl mb-2">⚖️</p>
            <p className="text-sm">Informe o peso para calcular a dose</p>
          </div>
        )}
      </div>

      {/* Obs clínica */}
      {drug.obs && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl px-4 py-4 mb-4 flex gap-3">
          <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 leading-relaxed">{drug.obs}</p>
        </div>
      )}

      {/* Marcas */}
      {drug.marcas && (
        <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 mb-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Marcas Comerciais</p>
          <p className="text-sm text-gray-700">{drug.marcas}</p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground/60 leading-relaxed">
          Ferramenta de suporte à decisão. Sempre valide com protocolos institucionais e supervisão médica.
        </p>
      </div>
    </div>
  );
}