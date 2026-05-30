import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, AlertTriangle, Info, Pill } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Color palette ────────────────────────────────────────────────────────────
const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', header: 'from-orange-500 to-amber-500', badge: 'bg-orange-100 text-orange-800', dot: 'bg-orange-500', result: 'bg-orange-50 border-orange-200 text-orange-900' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    header: 'from-red-500 to-rose-500',    badge: 'bg-red-100 text-red-800',    dot: 'bg-red-500',    result: 'bg-red-50 border-red-200 text-red-900' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', header: 'from-purple-500 to-violet-500', badge: 'bg-purple-100 text-purple-800', dot: 'bg-purple-500', result: 'bg-purple-50 border-purple-200 text-purple-900' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   header: 'from-blue-500 to-indigo-500',   badge: 'bg-blue-100 text-blue-800',   dot: 'bg-blue-500',   result: 'bg-blue-50 border-blue-200 text-blue-900' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', header: 'from-yellow-500 to-amber-500', badge: 'bg-yellow-100 text-yellow-800', dot: 'bg-yellow-500', result: 'bg-yellow-50 border-yellow-200 text-yellow-900' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  header: 'from-green-500 to-teal-500',   badge: 'bg-green-100 text-green-800',  dot: 'bg-green-500',  result: 'bg-green-50 border-green-200 text-green-900' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   header: 'from-teal-500 to-cyan-500',    badge: 'bg-teal-100 text-teal-800',   dot: 'bg-teal-500',   result: 'bg-teal-50 border-teal-200 text-teal-900' },
  cyan:   { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700',   header: 'from-cyan-500 to-blue-500',    badge: 'bg-cyan-100 text-cyan-800',   dot: 'bg-cyan-500',   result: 'bg-cyan-50 border-cyan-200 text-cyan-900' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  header: 'from-amber-500 to-orange-500', badge: 'bg-amber-100 text-amber-800', dot: 'bg-amber-500',  result: 'bg-amber-50 border-amber-200 text-amber-900' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-700',   header: 'from-pink-500 to-rose-500',    badge: 'bg-pink-100 text-pink-800',   dot: 'bg-pink-500',   result: 'bg-pink-50 border-pink-200 text-pink-900' },
  lime:   { bg: 'bg-lime-50',   border: 'border-lime-200',   text: 'text-lime-700',   header: 'from-lime-500 to-green-500',   badge: 'bg-lime-100 text-lime-800',   dot: 'bg-lime-500',   result: 'bg-lime-50 border-lime-200 text-lime-900' },
};

// ─── Formatting helpers ───────────────────────────────────────────────────────
function fmt(n, decimals = 2) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  const fixed = parseFloat(n.toFixed(decimals));
  return fixed % 1 === 0 ? fixed.toFixed(0) : fixed.toFixed(decimals).replace(/\.?0+$/, '');
}

function fmtDose(mg) {
  // Display in g if ≥ 1000 mg
  if (mg >= 1000) return `${fmt(mg / 1000, 2)} g`;
  return `${fmt(mg, 1)} mg`;
}

function fmtVol(mL) {
  if (mL >= 100) return `${fmt(mL, 0)} mL`;
  if (mL >= 10) return `${fmt(mL, 1)} mL`;
  return `${fmt(mL, 2)} mL`;
}

// ─── Calculate volumes for each presentation ────────────────────────────────
function calcApresentacao(ap, doseMg) {
  if (doseMg === null || doseMg === undefined || doseMg <= 0) return null;

  if (ap.tipo === 'mL') {
    const vol = doseMg / ap.conc;
    return { vol: fmtVol(vol), unit: 'mL' };
  }
  if (ap.tipo === 'gotas') {
    const mLpg = ap.mL_por_gota ?? 0.05;
    const mgPerGota = ap.conc * mLpg;
    const gotas = doseMg / mgPerGota;
    return { vol: `${fmt(gotas, 1)} gotas`, unit: 'gotas' };
  }
  if (ap.tipo === 'comprimido') {
    const comp = doseMg / ap.conc;
    return { vol: `${fmt(comp, 2)} comprimido(s)`, unit: 'comp' };
  }
  if (ap.tipo === 'frasco') {
    return { vol: `${fmtDose(doseMg)}`, unit: 'frasco' };
  }
  if (ap.tipo === 'jatos') {
    const jatos = doseMg / ap.conc;
    return { vol: `${fmt(jatos, 0)} jato(s)`, unit: 'jatos' };
  }
  return null;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DosagemDetalhe({ drug, onBack }) {
  const meta = COLOR_MAP[drug.catColor] || COLOR_MAP.blue;

  const [peso, setPeso] = useState('');
  const [indicacaoId, setIndicacaoId] = useState(drug.indicacoes[0]?.id ?? '');

  // Support URL param ?drug=id pre-selection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const drugParam = params.get('drug');
    if (!drugParam) return;
    // reset on drug change
    setIndicacaoId(drug.indicacoes[0]?.id ?? '');
    setPeso('');
  }, [drug.id]);

  const indicacao = drug.indicacoes.find(i => i.id === indicacaoId) ?? drug.indicacoes[0];
  const pesoNum = parseFloat(peso);
  const pesoValido = !isNaN(pesoNum) && pesoNum > 0 && pesoNum <= 200;

  // ── Dose calculation ──────────────────────────────────────────────────────
  // dose_min / dose_max may be in mg/kg or fixed mg (large numbers = fixed)
  // We treat values >= 100 with unidade containing 'mg —' as fixed doses
  const isFixedDose = indicacao?.unidade?.includes('mg —') || indicacao?.unidade?.includes('UI/dia') || indicacao?.unidade?.includes('mg/dia');

  let doseMinMg = null, doseMedMg = null, doseMaxMg = null;
  let doseMinKg = null, doseMaxKg = null; // per kg values

  if (pesoValido && indicacao) {
    if (isFixedDose) {
      doseMinMg = indicacao.dose_min;
      doseMaxMg = indicacao.dose_max;
      doseMedMg = (doseMinMg + doseMaxMg) / 2;
    } else {
      // mg/kg based
      doseMinKg = indicacao.dose_min;   // mg/kg
      doseMaxKg = indicacao.dose_max;   // mg/kg
      const rawMin = doseMinKg * pesoNum;
      const rawMax = doseMaxKg * pesoNum;
      doseMinMg = indicacao.dose_max_abs ? Math.min(rawMin, indicacao.dose_max_abs) : rawMin;
      doseMaxMg = indicacao.dose_max_abs ? Math.min(rawMax, indicacao.dose_max_abs) : rawMax;
      doseMedMg = (doseMinMg + doseMaxMg) / 2;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-2xl mx-auto px-4 py-6"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar
      </button>

      {/* Header card */}
      <div className={`bg-gradient-to-br ${meta.header} rounded-2xl p-5 text-white mb-5 shadow-lg`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold opacity-80 uppercase tracking-widest mb-1">{drug.catLabel}</p>
            <h1 className="text-2xl font-extrabold leading-tight">{drug.name}</h1>
            {drug.sinonimo && <p className="text-sm opacity-80 mt-0.5">{drug.sinonimo}</p>}
            {drug.marcas && <p className="text-xs opacity-60 mt-1">{drug.marcas}</p>}
          </div>
          <div className="text-3xl flex-shrink-0">{drug.catIcon}</div>
        </div>
        {drug.descricao && (
          <p className="text-xs text-white/80 mt-3 leading-relaxed border-t border-white/20 pt-3">{drug.descricao}</p>
        )}
      </div>

      {/* Alert */}
      {drug.alerta && (
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="leading-snug">{drug.alerta}</p>
        </div>
      )}

      {/* Indicação selector */}
      {drug.indicacoes.length > 1 && (
        <div className="mb-4">
          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
            Selecione uma indicação
          </label>
          <div className="relative">
            <select
              value={indicacaoId}
              onChange={e => setIndicacaoId(e.target.value)}
              className="w-full appearance-none bg-white border border-border rounded-xl px-4 py-3 pr-10 text-sm font-semibold text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all cursor-pointer"
            >
              {drug.indicacoes.map(ind => (
                <option key={ind.id} value={ind.id}>{ind.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      )}

      {/* Indicação single label */}
      {drug.indicacoes.length === 1 && (
        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${meta.bg} border ${meta.border} mb-4`}>
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${meta.dot}`} />
          <span className={`text-sm font-semibold ${meta.text}`}>{indicacao.label}</span>
        </div>
      )}

      {/* Dose info strip */}
      {indicacao && (
        <div className="bg-white border border-border rounded-xl px-4 py-3 mb-4 flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-muted-foreground">
          <span><strong className="text-foreground">Dose:</strong> {indicacao.dose_min === indicacao.dose_max ? `${indicacao.dose_min}` : `${indicacao.dose_min}–${indicacao.dose_max}`} {indicacao.unidade}</span>
          <span><strong className="text-foreground">Freq.:</strong> {indicacao.freq}</span>
          {indicacao.dose_max_abs && (
            <span className="font-semibold text-foreground">Dose máxima: {fmtDose(indicacao.dose_max_abs)}/dose</span>
          )}
        </div>
      )}

      {/* Weight input */}
      <div className="bg-white border border-border rounded-2xl p-5 mb-4 shadow-sm">
        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Peso do Paciente
        </label>
        <div className="relative">
          <input
            type="number"
            inputMode="decimal"
            placeholder="Ex: 15"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            className="w-full border border-border rounded-xl px-4 py-3 pr-12 text-lg font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-secondary/30"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">kg</span>
        </div>
        {peso && !pesoValido && (
          <p className="text-xs text-red-500 mt-1.5">Peso inválido. Insira entre 0,5 e 200 kg.</p>
        )}
      </div>

      {/* Results */}
      <AnimatePresence>
        {pesoValido && indicacao && doseMinMg !== null && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-3 mb-4"
          >
            {/* Dose summary */}
            <div className={`rounded-2xl border-2 ${meta.border} ${meta.bg} p-4`}>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Resultado para {pesoNum} kg
              </p>

              {/* Min / Avg / Max dose cards */}
              <div className={`grid ${doseMinMg !== doseMaxMg ? 'grid-cols-3' : 'grid-cols-1'} gap-2 mb-4`}>
                {doseMinMg !== doseMaxMg ? (
                  <>
                    <DoseCard label="Dose Mínima" doseMg={doseMinMg} doseKg={isFixedDose ? null : doseMinKg} color="text-blue-600" />
                    <DoseCard label="Dose Média" doseMg={doseMedMg} doseKg={isFixedDose ? null : (doseMinKg + doseMaxKg) / 2} color="text-primary" highlight />
                    <DoseCard label="Dose Máxima" doseMg={doseMaxMg} doseKg={isFixedDose ? null : doseMaxKg} color="text-orange-600" />
                  </>
                ) : (
                  <DoseCard label="Dose" doseMg={doseMinMg} doseKg={isFixedDose ? null : doseMinKg} color="text-primary" highlight />
                )}
              </div>

              {/* Dose máxima absoluta */}
              {indicacao.dose_max_abs && (
                <div className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2 text-xs text-muted-foreground border border-border/50">
                  <Info className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                  <span>Dose máxima: <strong className="text-foreground">{fmtDose(indicacao.dose_max_abs)}/dose</strong>
                  {doseMaxMg >= indicacao.dose_max_abs && <span className="text-amber-600 font-semibold ml-1">(teto aplicado)</span>}
                  </span>
                </div>
              )}
            </div>

            {/* Presentations */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Apresentações disponíveis</p>
              {indicacao.apresentacoes.map((ap, i) => {
                // Use median dose for display
                const calcMin = calcApresentacao(ap, doseMinMg);
                const calcMed = calcApresentacao(ap, doseMedMg);
                const calcMax = doseMinMg !== doseMaxMg ? calcApresentacao(ap, doseMaxMg) : null;

                const hasAgeMin = ap.idade_min && !isNaN(ap.idade_min);
                const hasPesoMin = ap.peso_min && !isNaN(ap.peso_min);
                const isRestricted = (hasAgeMin || hasPesoMin);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`bg-white rounded-xl border ${isRestricted ? 'border-amber-200 bg-amber-50/50' : 'border-border'} p-4 shadow-sm`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <Pill className={`w-4 h-4 flex-shrink-0 mt-0.5 ${meta.text}`} />
                      <p className="text-sm font-bold text-foreground leading-snug">{ap.label}</p>
                    </div>

                    {isRestricted && (
                      <p className="text-xs text-amber-700 bg-amber-100 rounded-lg px-2 py-1 mb-2 font-medium">
                        {hasAgeMin ? `Indicado ≥ ${ap.idade_min} anos` : `Indicado ≥ ${ap.peso_min} kg`}
                      </p>
                    )}

                    {calcMed ? (
                      <div className={`rounded-xl ${meta.bg} border ${meta.border} px-3 py-2.5`}>
                        {/* Main result */}
                        <p className={`text-base font-extrabold ${meta.text}`}>
                          {doseMinMg !== doseMaxMg && calcMin && calcMax
                            ? `${calcMin.vol} a ${calcMax.vol}`
                            : calcMed.vol}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          via {drug.via ?? 'oral'} · {indicacao.freq}
                        </p>

                        {/* Per-kg breakdown for each step */}
                        {!isFixedDose && doseMinMg !== doseMaxMg && (
                          <div className="mt-2 pt-2 border-t border-border/40 grid grid-cols-3 gap-1 text-[10px] text-muted-foreground">
                            <span className="text-center">
                              <span className="block text-foreground font-bold">{calcMin?.vol}</span>
                              mín ({doseMinKg} mg/kg)
                            </span>
                            <span className="text-center">
                              <span className={`block font-extrabold ${meta.text}`}>{calcMed?.vol}</span>
                              médio
                            </span>
                            <span className="text-center">
                              <span className="block text-foreground font-bold">{calcMax?.vol}</span>
                              máx ({doseMaxKg} mg/kg)
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground italic">Não calculável para esta apresentação.</p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Obs */}
            {indicacao.obs && (
              <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800">
                <Info className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{indicacao.obs}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Empty state */}
        {!peso && (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <p className="text-3xl mb-2">⚖️</p>
            <p className="text-sm text-muted-foreground">Insira o peso do paciente para calcular a dose</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Disclaimer */}
      <p className="text-center text-[10px] text-muted-foreground/50 mt-6 px-4 leading-relaxed">
        Ferramenta de suporte à decisão clínica. Sempre valide com protocolos institucionais e supervisão médica.
      </p>
    </motion.div>
  );
}

// ─── Dose card sub-component ─────────────────────────────────────────────────
function DoseCard({ label, doseMg, doseKg, color, highlight }) {
  return (
    <div className={`rounded-xl p-3 text-center ${highlight ? 'bg-white border-2 border-primary/20 shadow-sm' : 'bg-white/60 border border-border/40'}`}>
      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-base font-extrabold ${color || 'text-foreground'} leading-tight`}>{fmtDose(doseMg)}</p>
      {doseKg !== null && doseKg !== undefined && (
        <p className="text-[10px] text-muted-foreground mt-0.5">{fmt(doseKg, 2)} mg/kg</p>
      )}
    </div>
  );
}