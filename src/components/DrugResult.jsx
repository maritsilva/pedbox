import React, { useState } from 'react';
import { r } from '@/lib/drugData';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, CheckCircle, Info, AlertTriangle } from 'lucide-react';

// Calculate mL per dose from mg/dose and presentation
function calcMl(mgPerDose, mgPerMl) {
  if (!mgPerMl || !mgPerDose) return null;
  const ml = mgPerDose / mgPerMl;
  return r(ml, 2);
}

// For a dose option, compute mgPerDay, mgPerDose, and mL per presentation
function computeDose(doseOption, peso) {
  const { mgPerKgPerDay, mgPerKgPerDose, maxMgPerDay, maxMgPerDose, interval, fixedNote, mlPerKgPerDay, maxMlPerDay } = doseOption;

  // mL-based drug (e.g. lactulose)
  if (mlPerKgPerDay) {
    const mlPerDay = r(Math.min(peso * mlPerKgPerDay, maxMlPerDay || 9999), 1);
    const mlPerDose = interval ? r(mlPerDay / interval, 1) : mlPerDay;
    return { mgPerDay: null, mgPerDose: null, mlPerDay, mlPerDose, isFixed: false, isMlBased: true };
  }

  // fixed note (UI, or non-weight-based)
  if (fixedNote) {
    return { mgPerDay: null, mgPerDose: null, isFixed: true, fixedNote };
  }

  // Per-dose drug
  if (mgPerKgPerDose) {
    const raw = peso * mgPerKgPerDose;
    const mgPerDose = maxMgPerDose ? r(Math.min(raw, maxMgPerDose), 2) : r(raw, 2);
    return { mgPerDay: null, mgPerDose, isFixed: false, isByDose: true };
  }

  // Per-day drug
  if (mgPerKgPerDay) {
    const raw = peso * mgPerKgPerDay;
    const mgPerDay = maxMgPerDay ? r(Math.min(raw, maxMgPerDay), 1) : r(raw, 1);
    const mgPerDose = interval ? r(mgPerDay / interval, 2) : null;
    return { mgPerDay, mgPerDose, isFixed: false };
  }

  return { isFixed: true, fixedNote: 'Ver bula / protocolo' };
}

export default function DrugResult({ drug, peso, colors }) {
  const [selectedDoseIdx, setSelectedDoseIdx] = useState(0);
  const [customDose, setCustomDose] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [appliedCustom, setAppliedCustom] = useState(null);

  const doseOption = drug.doses[selectedDoseIdx];
  const computed = computeDose(doseOption, peso);

  // Effective mgPerDose to use for mL calculation
  const effectiveMgPerDose = appliedCustom !== null
    ? appliedCustom
    : computed.mgPerDose;

  const handleApplyCustom = () => {
    const v = parseFloat(customDose);
    if (!isNaN(v) && v > 0) setAppliedCustom(v);
  };

  const handleDoseChange = (idx) => {
    setSelectedDoseIdx(idx);
    setAppliedCustom(null);
    setCustomDose('');
    setShowCustom(false);
  };

  return (
    <div className="space-y-4 animate-fade-in">

      {/* Dose selector */}
      {drug.doses.length > 1 && (
        <div className="bg-white border border-border rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Selecionar Dose</p>
          <div className="flex flex-col gap-2">
            {drug.doses.map((d, i) => (
              <button
                key={i}
                onClick={() => handleDoseChange(i)}
                className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${
                  selectedDoseIdx === i
                    ? `${colors.bg} ${colors.border} ${colors.text} font-semibold border`
                    : 'border-border text-muted-foreground hover:bg-secondary'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main result card */}
      <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${colors.pill}`}></span>
            Doses Calculadas
          </h3>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {peso} kg
          </span>
        </div>

        {computed.isFixed ? (
          <div className={`${colors.bg} rounded-xl p-4`}>
            <p className={`text-sm font-bold ${colors.text}`}>{computed.fixedNote}</p>
            <p className="text-xs text-muted-foreground mt-1">{doseOption.via}</p>
          </div>
        ) : computed.isMlBased ? (
          <div className="space-y-2">
            <div className={`${colors.bg} rounded-xl p-3 flex justify-between items-center`}>
              <span className="text-sm text-muted-foreground">Volume/dia</span>
              <span className={`font-bold text-lg ${colors.text}`}>{computed.mlPerDay} mL/dia</span>
            </div>
            {computed.mlPerDose && doseOption.interval > 1 && (
              <div className={`${colors.bg} rounded-xl p-3 flex justify-between items-center`}>
                <span className="text-sm text-muted-foreground">Por dose ({doseOption.interval}x/dia)</span>
                <span className={`font-bold text-lg ${colors.text}`}>{computed.mlPerDose} mL/dose</span>
              </div>
            )}
            <div className="rounded-xl p-3 bg-secondary flex justify-between">
              <span className="text-sm text-muted-foreground">Via</span>
              <span className="text-sm font-medium">{doseOption.via}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {computed.mgPerDay && (
              <div className={`${colors.bg} rounded-xl p-3 flex justify-between items-center`}>
                <span className="text-sm text-muted-foreground">Dose total/dia</span>
                <span className={`font-bold text-lg ${colors.text}`}>{computed.mgPerDay} mg/dia</span>
              </div>
            )}
            {effectiveMgPerDose && (
              <div className={`${colors.bg} border ${colors.border} rounded-xl p-3 flex justify-between items-center`}>
                <span className="text-sm text-muted-foreground">
                  Dose por tomada
                  {appliedCustom !== null && <span className="ml-1 text-xs text-amber-600">(personalizada)</span>}
                </span>
                <span className={`font-bold text-xl ${colors.text}`}>{effectiveMgPerDose} mg/dose</span>
              </div>
            )}
            <div className="rounded-xl p-3 bg-secondary flex justify-between">
              <span className="text-sm text-muted-foreground">Frequência / Via</span>
              <span className="text-sm font-medium text-right">{doseOption.via}</span>
            </div>
          </div>
        )}

        {/* Dose personalizada */}
        {!computed.isFixed && !computed.isMlBased && effectiveMgPerDose && (
          <div className="mt-3">
            {!showCustom ? (
              <button
                onClick={() => setShowCustom(true)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
              >
                <Pencil className="w-3 h-3" />
                Usar dose personalizada
              </button>
            ) : (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-xs font-semibold text-amber-800 mb-2">Dose personalizada (mg/dose)</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Ex: 250"
                    value={customDose}
                    onChange={e => { setCustomDose(e.target.value); setAppliedCustom(null); }}
                    className="flex-1 border border-amber-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <button
                    onClick={handleApplyCustom}
                    className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-amber-600 transition-colors flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3" /> Aplicar
                  </button>
                  <button
                    onClick={() => { setShowCustom(false); setAppliedCustom(null); setCustomDose(''); }}
                    className="text-xs text-muted-foreground hover:text-foreground px-2"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Apresentações em mL */}
      {drug.presentations && drug.presentations.some(p => p.mgPerMl) && effectiveMgPerDose && !computed.isFixed && !computed.isMlBased && (
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Volume por Apresentação
          </h3>
          <div className="space-y-2">
            {drug.presentations.map((pres, i) => {
              if (!pres.mgPerMl) return null;
              const ml = calcMl(effectiveMgPerDose, pres.mgPerMl);
              if (!ml) return null;
              return (
                <div key={i} className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{pres.label}</p>
                    <p className="text-xs text-muted-foreground">por dose</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600">{ml} mL</p>
                    {computed.mgPerDay && doseOption.interval && (
                      <p className="text-xs text-muted-foreground">{r(ml * doseOption.interval, 2)} mL/dia total</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Apresentações sólidas */}
      {drug.presentations && drug.presentations.some(p => p.fixedMg) && (
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Apresentações Disponíveis
          </h3>
          <div className="space-y-2">
            {drug.presentations.filter(p => p.fixedMg).map((pres, i) => (
              <div key={i} className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-xl px-4 py-3">
                <p className="text-sm font-medium">{pres.label}</p>
                {effectiveMgPerDose && pres.fixedMg && (
                  <p className="text-xs text-muted-foreground">
                    ≈ {r(effectiveMgPerDose / pres.fixedMg, 1)} comp./dose
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Indicações */}
      <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Indicações Clínicas
        </h3>
        <ul className="space-y-1.5">
          {drug.indications.map((ind, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> {ind}
            </li>
          ))}
        </ul>
      </div>

      {/* Notas */}
      <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          Orientações
        </h3>
        <ul className="space-y-1.5">
          {drug.notes.map((note, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span> {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}