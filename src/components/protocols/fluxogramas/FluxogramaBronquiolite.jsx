import React from 'react';

function Arrow({ label }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-0.5 h-4 bg-gray-400" />
      {label && <span className="text-xs text-gray-500 font-medium text-center">{label}</span>}
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
    </div>
  );
}

export default function FluxogramaBronquiolite() {
  return (
    <div className="space-y-1 text-xs min-w-[340px]">
      {/* Start */}
      <div className="bg-cyan-600 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        🫧 Bronquiolite — Avaliação Inicial<br />
        <span className="font-normal text-cyan-100">FR · FC · Sat O₂ · Esforço respiratório · Alimentação</span>
      </div>

      <Arrow />

      {/* Severity */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'LEVE', hd: 'bg-emerald-500', bg: 'bg-emerald-50 border-emerald-300', text: 'text-emerald-800',
            sat: 'Sat > 92%',
            items: ['Eupneico ou taquipneico leve', 'Boa aceitação oral', 'Sem apneia'],
          },
          {
            label: 'MODERADO', hd: 'bg-amber-500', bg: 'bg-amber-50 border-amber-300', text: 'text-amber-800',
            sat: 'Sat < 92%',
            items: ['Taquipneia', 'Tiragem intercostal', 'Dificuldade alimentar', 'Irritabilidade'],
          },
          {
            label: 'GRAVE', hd: 'bg-red-500', bg: 'bg-red-50 border-red-300', text: 'text-red-800',
            sat: 'Sat < 92%',
            items: ['Taquipneia intensa', 'Tiragem intensa + gemência', 'Apneia', 'Incapaz de se alimentar', 'Sonolência'],
          },
        ].map(col => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${col.bg}`}>
            <div className={`${col.hd} text-white text-center font-bold py-1.5`}>{col.label}</div>
            <div className={`text-center py-1 text-xs font-semibold ${col.text}`}>{col.sat}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className={`flex gap-1 ${col.text}`}><span>•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow />

      {/* Disposition */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '🏠 ALTA', bg: 'bg-emerald-100 text-emerald-800', items: ['Inalação com SF 0,9%', 'Orientar piora 3º–5º dia', 'Sinais de alarme'] },
          { label: '🏥 INTERNAÇÃO', bg: 'bg-amber-100 text-amber-800', items: ['O₂ se Sat < 92%', 'Inalação SF', 'Monitorização', 'Avaliar hidratação'] },
          { label: '🚨 EMERGÊNCIA', bg: 'bg-red-100 text-red-800', items: ['O₂ alto fluxo', 'Monitorização contínua', 'SOG + Pausa VO', 'CNAF / CPAP / IOT', 'Considerar broncodilatador*'] },
        ].map(col => (
          <div key={col.label} className={`rounded-xl p-3 ${col.bg}`}>
            <p className="font-bold text-xs text-center mb-2">{col.label}</p>
            <ul className="space-y-1">
              {col.items.map((item, i) => <li key={i} className="flex gap-1 text-xs"><span>•</span>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Criteria */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mt-2">
        <p className="font-bold text-xs text-gray-600 mb-2">📋 Critérios de Internação Obrigatória</p>
        <div className="flex flex-wrap gap-1.5">
          {['< 3 meses', 'Apneia', 'Sat < 92%', 'FR > 70 ipm', 'Desidratação', 'Prematuridade', 'Cardiopatia', 'Imunodeficiência'].map((c, i) => (
            <span key={i} className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">{c}</span>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-1">* Suspender broncodilatador se sem resposta clara.</div>
    </div>
  );
}