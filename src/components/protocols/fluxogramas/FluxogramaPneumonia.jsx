import React from 'react';

function Arrow({ label }) {
  return (
    <div className="flex flex-col items-center my-1">
      <div className="w-0.5 h-4 bg-slate-400" />
      {label && <span className="text-xs text-slate-500 bg-slate-100 px-2 rounded">{label}</span>}
      <div className="w-0.5 h-4 bg-slate-400" />
      <div className="border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-400 w-0" />
    </div>
  );
}

export default function FluxogramaPneumonia() {
  return (
    <div className="space-y-2 text-xs">
      {/* Header */}
      <div className="bg-blue-600 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        Criança com PAC — suspeita de complicação
      </div>

      <Arrow label="avaliação inicial" />

      {/* Exams */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="font-bold text-blue-700 mb-1">Exames laboratoriais</p>
          <ul className="space-y-0.5 text-blue-900">
            <li>• Hemoculturas (sempre)</li>
            <li>• PCR / VHS (monitoramento)</li>
            <li>• Líquido pleural se significativo</li>
          </ul>
        </div>
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-3">
          <p className="font-bold text-cyan-700 mb-1">Exames de imagem</p>
          <ul className="space-y-0.5 text-cyan-900">
            <li>• RXT (1ª linha)</li>
            <li>• US tórax (preferido para DP)</li>
            <li>• TC c/ contraste (pneumonia necrosante)</li>
          </ul>
        </div>
      </div>

      <Arrow label="classificar gravidade" />

      {/* Severity */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'PACC COM DP', bg: 'bg-green-50 border-green-300', header: 'bg-green-500',
            items: ['Boas condições clínicas', 'Penicilina cristalina ou Ampicilina', '+ abordagem cirúrgica', 'Atípicos: + macrolídeo'],
          },
          {
            label: 'PACC GRAVE', bg: 'bg-yellow-50 border-yellow-300', header: 'bg-yellow-500',
            items: ['Ceftriaxona ou Cefotaxima', 'Área com MRSA: + Vancomicina', 'Alternativa: Linezolida / Ceftarolina'],
          },
          {
            label: 'PACC MUITO GRAVE (UTI)', bg: 'bg-red-50 border-red-300', header: 'bg-red-500',
            items: ['Vancomicina +', 'Ceftriaxona/Cefotaxima +', 'Azitromicina', '+ Oseltamivir (influenza)'],
          },
        ].map((col) => (
          <div key={col.label} className={`rounded-xl border ${col.bg} overflow-hidden`}>
            <div className={`${col.header} text-white text-center font-bold py-1.5 text-xs`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => <li key={i} className="flex gap-1"><span>•</span><span>{item}</span></li>)}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="72h sem melhora?" />

      {/* Failure */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-50 border border-green-300 rounded-xl overflow-hidden">
          <div className="bg-green-500 text-white text-center font-bold py-1.5 text-xs">MELHORA CLÍNICA</div>
          <ul className="p-2.5 space-y-1">
            <li className="flex gap-1"><span>•</span><span>Manter antibioticoterapia EV (3–4 semanas)</span></li>
            <li className="flex gap-1"><span>•</span><span>Critérios para retirada de dreno: débito ≤ 40–60 mL/24h</span></li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-300 rounded-xl overflow-hidden">
          <div className="bg-red-500 text-white text-center font-bold py-1.5 text-xs">FALHA DO TRATAMENTO</div>
          <ul className="p-2.5 space-y-1">
            {['Considerar fibrinolíticos (uroquinase)', 'Falha → VTCA', 'Necrose extensa, fístula → VTCA / Toracotomia', 'TC de tórax para reavaliação'].map((item, i) => (
              <li key={i} className="flex gap-1"><span>•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </div>

      {/* VTCA box */}
      <div className="bg-amber-600 text-white rounded-xl p-3.5 mt-1">
        <p className="font-bold mb-1.5">VTCA — Indicações</p>
        <ul className="space-y-0.5">
          {['Derrame massivo + falha de drenagem + fibrinolíticos', 'Fístula bronco-pleural não resolvida', 'Necrose extensa'].map((item, i) => (
            <li key={i} className="flex gap-1.5"><span>•</span><span>{item}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}