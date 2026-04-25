import React, { useState } from 'react';
import { r } from '@/lib/drugData';
import { Pencil, CheckCircle } from 'lucide-react';

function calcMl(mgPerDose, mgPerMl) {
  if (!mgPerMl || !mgPerDose) return null;
  return r(mgPerDose / mgPerMl, 2);
}

function computeDose(doseOption, peso) {
  const { mgPerKgPerDay, mgPerKgPerDose, maxMgPerDay, maxMgPerDose, interval, fixedNote, mlPerKgPerDay, maxMlPerDay } = doseOption;

  if (mlPerKgPerDay) {
    const mlPerDay = r(Math.min(peso * mlPerKgPerDay, maxMlPerDay || 9999), 1);
    const mlPerDose = interval ? r(mlPerDay / interval, 1) : mlPerDay;
    return { mgPerDay: null, mgPerDose: null, mlPerDay, mlPerDose, isFixed: false, isMlBased: true };
  }

  if (fixedNote) {
    return { mgPerDay: null, mgPerDose: null, isFixed: true, fixedNote };
  }

  if (mgPerKgPerDose) {
    const raw = peso * mgPerKgPerDose;
    const mgPerDose = maxMgPerDose ? r(Math.min(raw, maxMgPerDose), 2) : r(raw, 2);
    return { mgPerDay: null, mgPerDose, isFixed: false, isByDose: true };
  }

  if (mgPerKgPerDay) {
    const raw = peso * mgPerKgPerDay;
    const mgPerDay = maxMgPerDay ? r(Math.min(raw, maxMgPerDay), 1) : r(raw, 1);
    const mgPerDose = interval ? r(mgPerDay / interval, 2) : null;
    return { mgPerDay, mgPerDose, isFixed: false };
  }

  return { isFixed: true, fixedNote: 'Ver bula / protocolo' };
}

export default function DrugResult({ drug, peso, colors, selectedDoseIdx }) {
  const [customMgKgDay, setCustomMgKgDay] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [appliedCustomMgKgDay, setAppliedCustomMgKgDay] = useState(null);

  if (!drug || !drug.doses || drug.doses.length === 0) return null;

  const safeIdx = selectedDoseIdx < drug.doses.length ? selectedDoseIdx : 0;
  const doseOption = drug.doses[safeIdx];
  const computed = computeDose(doseOption, peso);

  // Custom dose: user enters mg/kg/dia, we compute mg/dose from it
  const customMgPerDay = appliedCustomMgKgDay !== null ? r(appliedCustomMgKgDay * peso, 2) : null;
  const customMgPerDose = appliedCustomMgKgDay !== null && doseOption.interval
    ? r(customMgPerDay / doseOption.interval, 2)
    : appliedCustomMgKgDay !== null ? customMgPerDay : null;

  const effectiveMgPerDose = customMgPerDose !== null ? customMgPerDose : computed.mgPerDose;
  const effectiveMgPerDay = customMgPerDay !== null ? customMgPerDay : computed.mgPerDay;

  const handleApplyCustom = () => {
    const v = parseFloat(customMgKgDay);
    if (!isNaN(v) && v > 0) setAppliedCustomMgKgDay(v);
  };

  const handleResetCustom = () => {
    setShowCustom(false);
    setAppliedCustomMgKgDay(null);
    setCustomMgKgDay('');
  };

  return (
    <div className="space-y-4 animate-fade-in">
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
            {effectiveMgPerDay && (
              <div className={`${colors.bg} rounded-xl p-3 flex justify-between items-center`}>
                <span className="text-sm text-muted-foreground">
                  Dose total/dia
                  {appliedCustomMgKgDay !== null && <span className="ml-1 text-xs text-amber-600">(personalizada)</span>}
                </span>
                <span className={`font-bold text-lg ${colors.text}`}>{effectiveMgPerDay} mg/dia</span>
              </div>
            )}
            {effectiveMgPerDose && (
              <div className={`${colors.bg} border ${colors.border} rounded-xl p-3 flex justify-between items-center`}>
                <span className="text-sm text-muted-foreground">
                  Dose por tomada
                  {appliedCustomMgKgDay !== null && <span className="ml-1 text-xs text-amber-600">(personalizada)</span>}
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
        {!computed.isFixed && !computed.isMlBased && (
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
                <p className="text-xs font-semibold text-amber-800 mb-2">Dose personalizada (mg/kg/dia)</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Ex: 50"
                    value={customMgKgDay}
                    onChange={e => { setCustomMgKgDay(e.target.value); setAppliedCustomMgKgDay(null); }}
                    className="flex-1 border border-amber-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <button
                    onClick={handleApplyCustom}
                    className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-amber-600 transition-colors flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3" /> Aplicar
                  </button>
                  <button
                    onClick={handleResetCustom}
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

      {/* Volume por Apresentação */}
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
                    {effectiveMgPerDay && doseOption.interval && (
                      <p className="text-xs text-muted-foreground">{r(ml * doseOption.interval, 2)} mL/dia total</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}