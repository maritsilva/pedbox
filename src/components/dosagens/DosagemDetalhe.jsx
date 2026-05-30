import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, AlertTriangle, Info, Pill, Star } from 'lucide-react';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
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
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', header: 'from-indigo-500 to-purple-500', badge: 'bg-indigo-100 text-indigo-800', dot: 'bg-indigo-500', result: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
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
  const { isFavorite, toggleFavorite } = useDosagemFavorites();
  const fav = isFavorite(drug.id);

  const [peso, setPeso] = useState('');
  const [indicacaoId, setIndicacaoId] = useState(drug.indicacoes[0]?.id ?? '');
  const [apIndex, setApIndex] = useState(0);

  // Support URL param ?drug=id pre-selection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const drugParam = params.get('drug');
    if (!drugParam) return;
    // reset on drug change
    setIndicacaoId(drug.indicacoes[0]?.id ?? '');
    setApIndex(0);
    setPeso('');
  }, [drug.id]);

  const indicacao = drug.indicacoes.find(i => i.id === indicacaoId) ?? drug.indicacoes[0];

  // Reset apresentação ao mudar indicação
  useEffect(() => { setApIndex(0); }, [indicacaoId]);
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
      className="max-w-5xl mx-auto px-4 py-8"
    >
      {/* Back + Favorite */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Voltar
        </button>
        <button
          onClick={() => toggleFavorite(drug.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
            fav 
              ? 'bg-yellow-50 border-yellow-300 text-yellow-700' 
              : 'bg-white border-border text-muted-foreground hover:bg-secondary'
          }`}
        >
          <Star className={`w-4 h-4 ${fav ? 'fill-yellow-400' : ''}`} />
          {fav ? 'Favorito' : 'Favoritar'}
        </button>
      </div>

      {/* Header with left orange border */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border-l-4 border-orange-500 flex items-start gap-6">
        <div className="flex-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-orange-600 mb-2">{drug.catLabel}</p>
          <h1 className="text-3xl font-extrabold text-foreground mb-1">{drug.name}</h1>
          {drug.sinonimo && <p className="text-sm text-muted-foreground">{drug.sinonimo}</p>}
          {drug.marcas && <p className="text-xs text-muted-foreground mt-0.5">{drug.marcas}</p>}
          {drug.descricao && <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{drug.descricao}</p>}
        </div>
        <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-4xl flex-shrink-0">
          {drug.catIcon}
        </div>
      </div>

      {/* Alert */}
      {drug.alerta && (
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-sm text-amber-800">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="leading-snug">{drug.alerta}</p>
        </div>
      )}

      {/* Section 1 + Dose info side by side */}
      <div className="mb-6 grid md:grid-cols-3 gap-4">
        {/* Left: Indicação selector */}
        <div>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
            1. SELECIONE UMA INDICAÇÃO
          </p>
          {drug.indicacoes.length > 1 ? (
            <div className="relative">
              <select
                value={indicacaoId}
                onChange={e => setIndicacaoId(e.target.value)}
                className="w-full appearance-none bg-white border border-orange-300 rounded-xl px-3 py-2.5 pr-9 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
              >
                {drug.indicacoes.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-orange-300">
              <span className="text-lg">❤️</span>
              <span className="text-sm font-semibold text-foreground">{indicacao.label}</span>
            </div>
          )}
        </div>

        {/* Right: Dose info cards */}
        {indicacao && (
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
              DOSE, FREQUÊNCIA E DOSE MÁXIMA
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-border rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Dose</p>
                <p className="text-base font-bold text-foreground">{indicacao.dose_min === indicacao.dose_max ? `${indicacao.dose_min}` : `${indicacao.dose_min}–${indicacao.dose_max}`}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{indicacao.unidade}</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Freq.</p>
                <p className="text-base font-bold text-foreground">{indicacao.freq}</p>
              </div>
              {indicacao.dose_max_abs && (
                <div className="bg-white border border-border rounded-xl p-3 text-center">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Dose máxima</p>
                  <p className="text-base font-bold text-foreground">{fmtDose(indicacao.dose_max_abs)}</p>
                  <p className="text-[10px] text-muted-foreground">/dose</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Section 2: Weight */}
      <div className="mb-6">
        <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
          2. PESO DO PACIENTE
        </p>
        <div className="relative">
          <Pill className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500 pointer-events-none" />
          <input
            type="number"
            inputMode="decimal"
            placeholder="Ex: 13"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            className={`w-full border-2 rounded-2xl px-12 py-4 text-3xl font-bold focus:outline-none transition-all ${
              peso && !pesoValido ? 'border-red-300 bg-red-50' : `border-orange-300 bg-orange-50`
            }`}
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">kg</span>
        </div>
        {peso && !pesoValido && (
          <p className="text-xs text-red-500 mt-2">Peso inválido. Insira entre 0,5 e 200 kg.</p>
        )}
      </div>

      {/* Section 3: Results */}
      <AnimatePresence>
        {pesoValido && indicacao && doseMinMg !== null && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Section 3: Resultado */}
            <div>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">
                3. RESULTADO PARA {pesoNum} KG
              </p>

              {/* Min / Avg / Max dose cards */}
              <div className={`grid ${doseMinMg !== doseMaxMg ? 'grid-cols-3' : 'grid-cols-1'} gap-3 mb-4`}>
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
                <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2.5 text-xs text-blue-800">
                  <Info className="w-3.5 h-3.5 flex-shrink-0 text-blue-500 mt-0.5" />
                  <span>Dose máxima: <strong className="text-blue-900">{fmtDose(indicacao.dose_max_abs)}/dose</strong>
                  {doseMaxMg >= indicacao.dose_max_abs && <span className="text-amber-600 font-semibold ml-1">(teto aplicado)</span>}
                  </span>
                </div>
              )}
            </div>

            {/* Section 4: Apresentação */}
            {(() => {
               const ap = indicacao.apresentacoes[apIndex];
               const calcMin = calcApresentacao(ap, doseMinMg);
               const calcMed = calcApresentacao(ap, doseMedMg);
               const calcMax = doseMinMg !== doseMaxMg ? calcApresentacao(ap, doseMaxMg) : null;
               const hasAgeMin = ap?.idade_min && !isNaN(ap.idade_min);
               const hasPesoMin = ap?.peso_min && !isNaN(ap.peso_min);
               const isRestricted = hasAgeMin || hasPesoMin;

               return (
                 <div>
                   <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
                     4. APRESENTAÇÃO DISPONÍVEL
                   </p>
                   <div className="relative mb-3">
                     <Pill className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500 pointer-events-none" />
                     <select
                       value={apIndex}
                       onChange={e => setApIndex(Number(e.target.value))}
                       className="w-full appearance-none bg-white border border-orange-300 rounded-2xl pl-11 pr-10 py-3 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
                     >
                       {indicacao.apresentacoes.map((a, i) => (
                         <option key={i} value={i}>{a.label}</option>
                       ))}
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                   </div>

                   {isRestricted && (
                     <p className="text-xs text-amber-700 bg-amber-100 rounded-lg px-3 py-1.5 font-medium mb-3">
                       {hasAgeMin ? `⚠️ Indicado ≥ ${ap.idade_min} anos` : `⚠️ Indicado ≥ ${ap.peso_min} kg`}
                     </p>
                   )}

                   {calcMed ? (
                     <div>
                       <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
                         5. RESULTADO EM {ap.tipo.toUpperCase()}
                       </p>
                       <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl px-5 py-4 mb-3">
                         <p className="text-3xl font-extrabold text-orange-600">
                           {doseMinMg !== doseMaxMg && calcMin && calcMax
                             ? `${calcMin.vol} a ${calcMax.vol}`
                             : calcMed.vol}
                         </p>
                         <p className="text-sm text-muted-foreground mt-2">
                           via {drug.via ?? 'oral'} · {indicacao.freq}
                         </p>
                       </div>
                       
                       {/* Cards para min/médio/máx */}
                       <div className="grid grid-cols-3 gap-3">
                         {doseMinMg !== doseMaxMg && calcMin && calcMax ? (
                           <>
                             <div className="bg-white border border-border rounded-xl p-3 text-center">
                               <p className="text-base font-bold text-foreground">{calcMin?.vol}</p>
                               <p className="text-[10px] text-muted-foreground mt-1">mín (5 mg/kg)</p>
                             </div>
                             <div className="bg-white border border-border rounded-xl p-3 text-center">
                               <p className="text-base font-bold text-foreground">{calcMed?.vol}</p>
                               <p className="text-[10px] text-muted-foreground mt-1">médio</p>
                             </div>
                             <div className="bg-white border border-border rounded-xl p-3 text-center">
                               <p className="text-base font-bold text-orange-600">{calcMax?.vol}</p>
                               <p className="text-[10px] text-muted-foreground mt-1">máx (10 mg/kg)</p>
                             </div>
                           </>
                         ) : (
                           <div className="col-span-3 bg-white border border-border rounded-xl p-3 text-center">
                             <p className="text-base font-bold text-foreground">{calcMed?.vol}</p>
                           </div>
                         )}
                       </div>
                     </div>
                   ) : (
                     <p className="text-xs text-muted-foreground italic">Não calculável para esta apresentação.</p>
                   )}
                 </div>
               );
             })()}

            {/* Obs */}
             {indicacao.obs && (
               <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-800">
                 <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
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