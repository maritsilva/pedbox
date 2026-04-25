import React from 'react';
import { CheckCircle, AlertTriangle, Pill, FlaskConical } from 'lucide-react';

export default function DrugInfo({ drug, colors, selectedDoseIdx, onSelectDose }) {
  if (!drug) return null;

  return (
    <div className="space-y-4">

      {/* Doses disponíveis */}
      <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${colors.pill}`}></span>
          Doses Recomendadas
        </h3>
        <div className="space-y-2">
          {drug.doses.map((d, i) => {
            const isSelected = selectedDoseIdx === i;
            const doseDesc = d.fixedNote
              ? d.fixedNote
              : d.mgPerKgPerDose
              ? `${d.mgPerKgPerDose} mg/kg/dose${d.maxMgPerDose ? ` (máx ${d.maxMgPerDose} mg)` : ''}`
              : d.mgPerKgPerDay
              ? `${d.mgPerKgPerDay} mg/kg/dia${d.maxMgPerDay ? ` (máx ${d.maxMgPerDay} mg/dia)` : ''}${d.interval ? ` ÷ ${d.interval}x/dia` : ''}`
              : d.mlPerKgPerDay
              ? `${d.mlPerKgPerDay} mL/kg/dia${d.maxMlPerDay ? ` (máx ${d.maxMlPerDay} mL)` : ''}`
              : '—';

            return (
              <button
                key={i}
                onClick={() => onSelectDose(i)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                  isSelected
                    ? `${colors.bg} ${colors.border} border-2`
                    : 'border-border hover:bg-secondary'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${isSelected ? colors.text : 'text-foreground'}`}>
                      {d.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{doseDesc}</p>
                    {d.via && <p className="text-xs text-muted-foreground">{d.via}</p>}
                  </div>
                  {isSelected && (
                    <span className={`text-xs font-bold ${colors.text} mt-0.5 flex-shrink-0`}>✓ Selecionada</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Apresentações */}
      {drug.presentations && drug.presentations.length > 0 && (
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-blue-500" />
            Apresentações Disponíveis
          </h3>
          <div className="space-y-2">
            {drug.presentations.map((pres, i) => (
              <div key={i} className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5">
                <Pill className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-foreground">{pres.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Indicações */}
      {drug.indications && drug.indications.length > 0 && (
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Indicações Clínicas
          </h3>
          <ul className="space-y-1.5">
            {drug.indications.map((ind, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                {ind}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notas */}
      {drug.notes && drug.notes.length > 0 && (
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
      )}
    </div>
  );
}