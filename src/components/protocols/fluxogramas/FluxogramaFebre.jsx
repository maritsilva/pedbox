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

export default function FluxogramaFebre() {
  return (
    <div className="space-y-1 text-xs min-w-[340px]">
      <div className="bg-red-500 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        🌡️ Febre sem Sinais Localizatórios<br />
        <span className="font-normal text-red-100">Temperatura ≥ 38°C · até 36 meses</span>
      </div>

      <Arrow label="Estratificar por idade" />

      {/* Age stratification */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '< 1 mês', hd: 'bg-red-600', bg: 'bg-red-50 border-red-300', text: 'text-red-800', items: ['Neonato — ALTO RISCO', 'Triagem infecciosa completa', 'Punção liquórica', 'Internação + Antibiótico EV'] },
          { label: '1–3 meses', hd: 'bg-orange-500', bg: 'bg-orange-50 border-orange-300', text: 'text-orange-800', items: ['Avaliar vacinação', 'Hemograma + PCR/PCT', 'EQU + urocultura', 'Considerar PL'] },
          { label: '3–36 meses', hd: 'bg-amber-500', bg: 'bg-amber-50 border-amber-300', text: 'text-amber-800', items: ['Avaliar aparência geral', 'T > 39°C: EQU', 'Vacinação completa?', 'Observação vs. investigação'] },
        ].map(col => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${col.bg}`}>
            <div className={`${col.hd} text-white text-center font-bold py-1.5`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className={`flex gap-1 ${col.text}`}><span>•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="Aparência da criança" />

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <p className="font-bold text-emerald-800 text-xs mb-2">😊 Bom estado geral</p>
          <ul className="space-y-1 text-emerald-700 text-xs">
            {['Ativo, responsivo', 'Boa perfusão', 'SEM foco infeccioso', 'Vacinação completa', '→ Observação / Alta com retorno'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>•</span>{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="font-bold text-red-800 text-xs mb-2">😰 Toxemiado / Mal estado</p>
          <ul className="space-y-1 text-red-700 text-xs">
            {['Letargia / irritabilidade extrema', 'Má perfusão', 'Petéquias / purpura', 'Fontanela abaulada', '→ Internação + Antibiótico EV'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>!</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <Arrow label="Resultados dos exames" />

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="font-bold text-blue-800 text-xs mb-2">🔬 Exames alterados</p>
          <ul className="space-y-1 text-blue-700 text-xs">
            {['Leucócitos > 15.000 ou < 5.000', 'PCR > 20 mg/L', 'PCT > 0,5 ng/mL', 'EQU alterado (ITU)'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>•</span>{i}</li>
            ))}
          </ul>
          <p className="text-blue-700 font-bold text-xs mt-2">→ Investigar / Tratar</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
          <p className="font-bold text-gray-700 text-xs mb-2">✅ Exames normais</p>
          <ul className="space-y-1 text-gray-600 text-xs">
            {['Baixo risco de IBI', 'Antipirético conforto', 'Observação em casa', 'Retorno se febre > 48h ou piora'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>•</span>{i}</li>
            ))}
          </ul>
          <p className="text-gray-700 font-bold text-xs mt-2">→ Alta com orientação</p>
        </div>
      </div>
    </div>
  );
}