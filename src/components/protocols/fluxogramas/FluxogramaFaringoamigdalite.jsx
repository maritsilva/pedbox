import React from 'react';

function Arrow({ label }) {
  return (
    <div className="flex flex-col items-center py-0.5">
      <div className="w-0.5 h-4 bg-gray-400" />
      {label && <span className="text-xs text-gray-500 font-medium text-center">{label}</span>}
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
    </div>
  );
}

export default function FluxogramaFaringoamigdalite() {
  return (
    <div className="space-y-1 text-xs min-w-[340px]">
      <div className="bg-orange-500 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        🦠 Faringoamigdalite — Avaliação<br />
        <span className="font-normal text-orange-100">Dor de garganta · Febre · Exsudato</span>
      </div>

      <Arrow label="Aplicar escore Centor/McIsaac" />

      {/* Centor */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
        <p className="font-bold text-blue-800 text-xs mb-2">🎯 Escore de McIsaac</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            ['Exsudato amigdaliano', '+1'],
            ['Adenopatia cervical anterior dolorosa', '+1'],
            ['Ausência de tosse', '+1'],
            ['Febre > 38°C', '+1'],
            ['Idade 3–14 anos', '+1'],
            ['Idade > 45 anos', '-1'],
          ].map(([item, pts], i) => (
            <div key={i} className="flex justify-between items-center bg-white rounded-lg px-2 py-1 text-xs border border-blue-100">
              <span className="text-gray-700">{item}</span>
              <span className="font-bold text-blue-600 ml-2">{pts}</span>
            </div>
          ))}
        </div>
      </div>

      <Arrow />

      {/* Score branches */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '0–1 pontos', hd: 'bg-emerald-500', bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-800', action: 'VIRAL', items: ['Sem antibiótico', 'Analgesia/antipirético', 'Alta com orientação', 'Retorno se piora'] },
          { label: '2–3 pontos', hd: 'bg-amber-500', bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800', action: 'TESTAR', items: ['TRS para Estreptococo', 'Antibiótico se positivo', 'Amoxicilina 50 mg/kg/dia × 10d', 'Penicilina G benzatina IM'] },
          { label: '4–5 pontos', hd: 'bg-red-500', bg: 'bg-red-50 border-red-200', text: 'text-red-800', action: 'TRATAR', items: ['Alta probabilidade bacteriana', 'Antibiótico empírico', 'Amoxicilina 50 mg/kg/dia × 10d', 'Penicilina G benzatina IM'] },
        ].map(col => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${col.bg}`}>
            <div className={`${col.hd} text-white text-center font-bold py-1.5 text-xs`}>{col.label}</div>
            <div className={`text-center font-bold py-1 text-xs ${col.text}`}>{col.action}</div>
            <ul className="p-2 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className={`flex gap-1 text-xs ${col.text}`}><span>•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="Atenção" />

      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3">
        <p className="font-bold text-red-800 text-xs mb-2">🚨 Sinais de complicação → Internação</p>
        <div className="flex flex-wrap gap-1.5">
          {['Abscesso periamigdaliano', 'Disfagia grave', 'Trismo', 'Stridor', 'Toxemia', 'Imunossupressão'].map((s, i) => (
            <span key={i} className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}