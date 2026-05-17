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

export default function FluxogramaDiarreia() {
  return (
    <div className="space-y-1 text-xs min-w-[340px]">
      <div className="bg-teal-600 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        💧 Diarreia Aguda — Avaliação Inicial<br />
        <span className="font-normal text-teal-200">Frequência · Sangue · Grau de desidratação</span>
      </div>

      <Arrow label="Classificar desidratação (OMS/AIDPI)" />

      {/* Dehydration levels */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'SEM DESIDR.', hd: 'bg-emerald-500', bg: 'bg-emerald-50 border-emerald-300', text: 'text-emerald-800',
            items: ['Mucosas úmidas', 'Olhos normais', 'Sinal da prega negativo', 'Choro com lágrimas'],
          },
          {
            label: 'DESIDR. LEVE/MOD', hd: 'bg-amber-500', bg: 'bg-amber-50 border-amber-300', text: 'text-amber-800',
            items: ['Mucosas secas', 'Olhos fundos', 'Sede aumentada', 'Sinal da prega < 2s'],
          },
          {
            label: 'DESIDR. GRAVE', hd: 'bg-red-500', bg: 'bg-red-50 border-red-300', text: 'text-red-800',
            items: ['Taquicardia', 'Hipotensão', 'Letargia / coma', 'Sinal prega > 2s', 'Oligúria'],
          },
        ].map(col => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${col.bg}`}>
            <div className={`${col.hd} text-white text-center font-bold py-1.5 text-xs`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className={`flex gap-1 ${col.text}`}><span>•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="Conduta por grau" />

      {/* Treatment */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Plano A', bg: 'bg-emerald-100 text-emerald-800', items: ['TRO domiciliar', 'SRO 10 mL/kg/evacuação', 'Alimentação normal', 'Zinco 10–20 mg/dia × 14 dias', '→ Alta com orientação'] },
          { label: 'Plano B', bg: 'bg-amber-100 text-amber-800', items: ['TRO supervisionada', 'SRO 75 mL/kg em 4h', 'Reavaliação contínua', 'Se vômito: sondagem', '→ Alta se melhora'] },
          { label: 'Plano C', bg: 'bg-red-100 text-red-800', items: ['Hidratação EV imediata', 'SF 0,9% 20 mL/kg/dose', 'Monitorização contínua', 'Correção distúrbios', '→ Internação'] },
        ].map(col => (
          <div key={col.label} className={`rounded-xl p-3 ${col.bg}`}>
            <p className="font-bold text-xs text-center mb-2">{col.label}</p>
            <ul className="space-y-1">
              {col.items.map((item, i) => <li key={i} className="flex gap-1 text-xs"><span>•</span>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="Sinais de alarme?" />

      {/* Alarm signs */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
        <p className="font-bold text-red-800 text-xs mb-2">🚨 Internação obrigatória se:</p>
        <div className="flex flex-wrap gap-1.5">
          {['Diarreia sanguinolenta', 'Vômitos incoercíveis', 'Distensão abdominal', 'Febre alta', 'Letargia', '< 3 meses', 'Desidratação grave'].map((s, i) => (
            <span key={i} className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}