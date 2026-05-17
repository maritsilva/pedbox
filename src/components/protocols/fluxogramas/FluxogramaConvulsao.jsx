import React from 'react';

function Arrow({ label, branch = false }) {
  return (
    <div className="flex flex-col items-center py-0.5">
      <div className="w-0.5 h-4 bg-gray-400" />
      {label && <span className="text-xs text-gray-500 font-medium text-center px-1">{label}</span>}
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
    </div>
  );
}

export default function FluxogramaConvulsao() {
  return (
    <div className="space-y-1 text-xs min-w-[340px]">
      <div className="bg-purple-600 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        ⚡ Convulsão Febril — Chegada ao PS<br />
        <span className="font-normal text-purple-200">6 meses a 5 anos · Febre ≥ 38°C</span>
      </div>

      <Arrow label="Estabilização ABC" />

      {/* Crisis types */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl overflow-hidden">
          <div className="bg-blue-500 text-white text-center font-bold py-1.5">SIMPLES</div>
          <ul className="p-3 space-y-1 text-blue-800">
            {['Tônico-clônica generalizada', 'Duração < 15 min', 'Recuperação completa', '1 crise em 24h'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>✓</span>{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl overflow-hidden">
          <div className="bg-orange-500 text-white text-center font-bold py-1.5">COMPLEXA</div>
          <ul className="p-3 space-y-1 text-orange-800">
            {['Duração > 15 min', 'Pós-ictal prolongado', 'Recorrência em < 24h', 'Focal'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>!</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <Arrow label="Investigar causa da febre" />

      {/* Decision */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3">
        <p className="font-bold text-amber-800 text-xs mb-2">⚠️ Sinais de alarme — investigar meningite</p>
        <div className="flex flex-wrap gap-1.5">
          {['Rigidez de nuca', 'Petéquias', 'Fontanela abaulada', 'Letargia', 'Irritabilidade extrema', '< 12 meses sem vacinação'].map((s, i) => (
            <span key={i} className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">{s}</span>
          ))}
        </div>
      </div>

      <Arrow />

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-50 border border-green-200 rounded-xl p-3">
          <p className="font-bold text-green-800 text-xs mb-2">✅ Sem alarme → ALTA</p>
          <ul className="space-y-1 text-green-700 text-xs">
            {['Criança desperta e ativa', 'Sem déficit neurológico', 'Orientar família sobre recorrência', 'Seguimento com pediatra'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>•</span>{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="font-bold text-red-800 text-xs mb-2">🚨 Com alarme → INVESTIGAR</p>
          <ul className="space-y-1 text-red-700 text-xs">
            {['Punção liquórica se suspeita SNC', 'Internação para observação', 'Estado de mal → UTI', 'Anticonvulsivante se status'].map((i, k) => (
              <li key={k} className="flex gap-1"><span>•</span>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-600">
        <p className="font-bold text-xs mb-1">🔴 NÃO realizar rotineiramente:</p>
        <div className="flex flex-wrap gap-1.5">
          {['EEG', 'Eletrólitos', 'Hemograma', 'Neuroimagem'].map((i, k) => (
            <span key={k} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs line-through">{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}