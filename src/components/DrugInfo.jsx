import React, { useState } from 'react';
import { AlertTriangle, FlaskConical, ShieldAlert, ChevronDown, ChevronUp, Info, Tag, Syringe, X } from 'lucide-react';

export default function DrugInfo({ drug, colors, selectedDoseIdx, onSelectDose }) {
  const [showSensitivity, setShowSensitivity] = useState(false);
  const [showSideEffects, setShowSideEffects] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  if (!drug) return null;

  const getDoseBadge = (d) => {
    if (d.fixedNote) return d.fixedNote.split(',')[0];
    if (d.mgPerKgPerDose) return `${d.mgPerKgPerDose} mg/kg/dose`;
    if (d.mgPerKgPerDay) return `${d.mgPerKgPerDay} mg/kg/dia`;
    if (d.mlPerKgPerDay) return `${d.mlPerKgPerDay} mL/kg/dia`;
    return null;
  };

  return (
    <div className="space-y-4">

      {/* Observações clínicas */}
      {drug.observations && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 leading-relaxed">{drug.observations}</p>
        </div>
      )}

      {/* Two-column: Apresentações | Indicações + Doses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* LEFT – Apresentações */}
        {drug.presentations && drug.presentations.length > 0 && (
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
            <h3 className="text-base font-semibold text-foreground text-center mb-4 flex items-center justify-center gap-2">
              <FlaskConical className="w-4 h-4 text-blue-400" />
              Apresentações Disponíveis
            </h3>
            <div className="space-y-3">
              {drug.presentations.map((pres, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Syringe className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{pres.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RIGHT – Doses (indicações) */}
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="text-base font-semibold text-foreground text-center mb-4">
            Indicações Clínicas
          </h3>
          <div className="space-y-2">
            {drug.doses.map((d, i) => {
              const isSelected = selectedDoseIdx === i;
              const badge = getDoseBadge(d);
              return (
                <button
                  key={i}
                  onClick={() => onSelectDose(i)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                    isSelected
                      ? `${colors.bg} border-2 ${colors.border}`
                      : 'hover:bg-secondary border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      isSelected ? `${colors.border} ${colors.text}` : 'border-muted-foreground/40'
                    }`}>
                      {isSelected && <div className={`w-2 h-2 rounded-full ${colors.pill}`} />}
                    </div>
                    <span className={`text-sm font-medium truncate ${isSelected ? colors.text : 'text-foreground'}`}>
                      {d.label}
                    </span>
                  </div>
                  {badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${
                      isSelected
                        ? `${colors.pill} text-white`
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Orientações */}
      {drug.notes && drug.notes.length > 0 && (
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="text-base font-semibold text-foreground text-center mb-4 flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Orientações
          </h3>
          <ul className="space-y-2">
            {drug.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Efeitos colaterais (colapsável) */}
      {drug.sideEffects && drug.sideEffects.length > 0 && (
        <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={() => setShowSideEffects(v => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/50 transition-colors"
          >
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Efeitos Colaterais
            </h3>
            {showSideEffects ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          {showSideEffects && (
            <div className="px-5 pb-5">
              <ul className="space-y-2">
                {drug.sideEffects.map((ef, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <X className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ef}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Sensibilidade (colapsável) */}
      {drug.sensitivity && (
        <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={() => setShowSensitivity(v => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/50 transition-colors"
          >
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              Sensibilidade / Resistências
            </h3>
            {showSensitivity ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          {showSensitivity && (
            <div className="px-5 pb-5 space-y-3">
              {drug.sensitivity.resistant && (
                <div>
                  <p className="text-xs font-semibold text-red-600 uppercase mb-2">Resistentes</p>
                  <ul className="space-y-1.5">
                    {drug.sensitivity.resistant.map((r, i) => (
                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {drug.sensitivity.warning && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="text-xs text-amber-800 leading-relaxed">{drug.sensitivity.warning}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Marcas comerciais (colapsável) */}
      {drug.brands && drug.brands.length > 0 && (
        <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={() => setShowBrands(v => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/50 transition-colors"
          >
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Tag className="w-4 h-4 text-purple-500" />
              Marcas Comerciais
            </h3>
            {showBrands ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          {showBrands && (
            <div className="px-5 pb-5">
              <ul className="space-y-1.5">
                {drug.brands.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-purple-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}