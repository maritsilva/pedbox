import React from 'react';

function Box({ children, color = 'blue', className = '' }) {
  const colors = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-emerald-500 text-white',
    yellow: 'bg-amber-400 text-white',
    red: 'bg-red-500 text-white',
    gray: 'bg-gray-100 text-gray-700 border border-gray-300',
    'red-dark': 'bg-red-700 text-white',
  };
  return (
    <div className={`rounded-xl px-4 py-3 text-xs font-semibold text-center ${colors[color]} ${className}`}>
      {children}
    </div>
  );
}

function Arrow({ label }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-0.5 h-4 bg-gray-400" />
      {label && <span className="text-xs text-gray-500 font-medium -mt-1">{label}</span>}
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
    </div>
  );
}

export default function FluxogramaCriseAsmatica() {
  return (
    <div className="space-y-1 text-xs min-w-[340px]">
      <Box color="blue" className="text-sm font-bold">
        🫁 Crise Asmática — Avaliação Inicial<br />
        <span className="font-normal text-blue-100">Sinais vitais · Oximetria · Exame físico</span>
      </Box>

      <Arrow />

      {/* Severity grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'LEVE', color: 'green', sat: 'Sat > 95%', items: ['Salbutamol 4–10 jatos MDI × 3 (a cada 20\')', 'Corticoide VO se > 6 anos'] },
          { label: 'MODERADA', color: 'yellow', sat: 'Sat 91–95%', items: ['O₂ para Sat > 94%', 'Salbutamol 4–10 jatos × 3 (a cada 20\')', 'Ipratrópio 4 jatos × 3 (a cada 20\')', 'Corticoide VO'] },
          { label: 'GRAVE', color: 'red', sat: 'Sat ≤ 90%', items: ['O₂ alto fluxo / CNAF', 'Salbutamol 4–10 jatos × 3 (a cada 20\')', 'Ipratrópio × 3', 'Corticoide VO/EV/IM', 'MgSO₄ 50–75 mg/kg EV'] },
        ].map((col) => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${
            col.color === 'green' ? 'border-emerald-300 bg-emerald-50' :
            col.color === 'yellow' ? 'border-amber-300 bg-amber-50' : 'border-red-300 bg-red-50'
          }`}>
            <div className={`text-white text-center font-bold py-1.5 text-xs ${
              col.color === 'green' ? 'bg-emerald-500' :
              col.color === 'yellow' ? 'bg-amber-500' : 'bg-red-500'
            }`}>{col.label}</div>
            <div className={`text-center text-xs py-1 font-medium ${
              col.color === 'green' ? 'text-emerald-700' :
              col.color === 'yellow' ? 'text-amber-700' : 'text-red-700'
            }`}>{col.sat}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className={`flex gap-1 text-xs ${
                  col.color === 'green' ? 'text-emerald-800' :
                  col.color === 'yellow' ? 'text-amber-800' : 'text-red-800'
                }`}>
                  <span className="mt-0.5">•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="Reavaliação após tratamento inicial" />

      {/* Response grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '✅ BOA RESPOSTA', bg: 'bg-emerald-50 border-emerald-200', hd: 'bg-emerald-100 text-emerald-800', items: ['Sat > 94%', 'Sem desconforto', '→ ALTA com plano de ação'] },
          { label: '⚠️ RESP. INCOMPLETA', bg: 'bg-amber-50 border-amber-200', hd: 'bg-amber-100 text-amber-800', items: ['Observação 4h', 'Salbutamol a cada 30–60\'', 'Corticoide se não feito', 'Considerar MgSO₄'] },
          { label: '🚨 SEM RESPOSTA', bg: 'bg-red-50 border-red-200', hd: 'bg-red-100 text-red-800', items: ['Confusão / sonolência', 'Sat < 90%', '→ UTI / EMERGÊNCIA'] },
        ].map((col) => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${col.bg}`}>
            <div className={`text-center text-xs font-bold py-1.5 ${col.hd}`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className="flex gap-1 text-xs text-gray-700"><span>•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow />

      <Box color="red-dark" className="font-bold">
        🏥 UTI / SALA DE EMERGÊNCIA<br />
        <span className="font-normal text-red-200 text-xs">Salbutamol EV · MgSO₄ · Heliox · CNAF · VNI / IOT</span>
      </Box>
    </div>
  );
}