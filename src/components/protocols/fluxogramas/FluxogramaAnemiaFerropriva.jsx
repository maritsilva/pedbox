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

export default function FluxogramaAnemiaFerropriva() {
  return (
    <div className="space-y-2 text-xs">
      {/* Header */}
      <div className="bg-rose-600 text-white rounded-xl px-4 py-3 text-center font-bold text-sm">
        Criança lactente — suspeita de anemia ferropriva
      </div>

      <Arrow label="avaliar fatores de risco" />

      {/* Risk check */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-50 border border-green-200 rounded-xl p-3">
          <p className="font-bold text-green-700 mb-1">SEM fatores de risco</p>
          <ul className="space-y-0.5 text-green-900">
            <li>• Lactente saudável</li>
            <li>• Crescimento adequado</li>
            <li>• Alimentação adequada</li>
            <li className="font-semibold mt-1">→ Não investigar rotineiramente</li>
            <li>→ Suplementação profilática conforme faixa etária</li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="font-bold text-amber-700 mb-1">COM fatores de risco</p>
          <ul className="space-y-0.5 text-amber-900">
            <li>• Prematuridade / BPN</li>
            <li>• Falha na suplementação</li>
            <li>• Alimentação pobre em ferro</li>
            <li>• Crescimento inadequado</li>
            <li className="font-semibold mt-1">→ Hemograma + Ferritina + PCR (9–12 meses)</li>
          </ul>
        </div>
      </div>

      <Arrow label="resultado laboratorial" />

      {/* Lab results */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'NORMAL', bg: 'bg-green-50 border-green-300', header: 'bg-green-500',
            items: ['Hb normal', 'Ferritina normal', '→ Manter suplementação profilática', '→ Reavaliar em 6 meses'],
          },
          {
            label: 'DEFICIÊNCIA DE FERRO (sem anemia)', bg: 'bg-yellow-50 border-yellow-300', header: 'bg-yellow-500',
            items: ['Ferritina baixa', 'Hb ainda normal', '→ Corrigir fator etiológico', '→ Iniciar ferro terapêutico', '→ Rever alimentação'],
          },
          {
            label: 'ANEMIA FERROPRIVA', bg: 'bg-red-50 border-red-300', header: 'bg-red-500',
            items: ['Hb abaixo do ponto de corte', 'Ferritina baixa', 'VCM ↓, RDW ↑', '→ Ferro oral 3–6 mg/kg/dia', '→ Controle em 30–45 dias'],
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

      <Arrow label="controle em 30–45 dias" />

      {/* Treatment response */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-50 border border-green-300 rounded-xl overflow-hidden">
          <div className="bg-green-500 text-white text-center font-bold py-1.5 text-xs">BOA RESPOSTA (↑ Hb ≥ 1 g/dL)</div>
          <ul className="p-2.5 space-y-1">
            <li className="flex gap-1"><span>•</span><span>Manter ferro oral por 3–6 meses no total</span></li>
            <li className="flex gap-1"><span>•</span><span>Até normalizar Hb + ferritina + VCM</span></li>
            <li className="flex gap-1"><span>•</span><span>Orientar alimentação complementar</span></li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-300 rounded-xl overflow-hidden">
          <div className="bg-red-500 text-white text-center font-bold py-1.5 text-xs">SEM RESPOSTA ADEQUADA</div>
          <ul className="p-2.5 space-y-1">
            {['Investigar: adesão, dose inadequada, fator causal persistente', 'Diagnóstico incorreto? Talassemias, IRIDA', 'Presença de inflamação crônica?', '→ Encaminhar ao especialista'].map((item, i) => (
              <li key={i} className="flex gap-1"><span>•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prophylaxis summary */}
      <div className="bg-rose-600 text-white rounded-xl p-3.5 mt-1">
        <p className="font-bold mb-1.5">Suplementação Profilática (PNSF/MS 2022)</p>
        <ul className="space-y-0.5">
          {[
            'A termo / peso adequado: 10–12,5 mg/dia dos 6 aos 24 meses (2 ciclos de 3 meses)',
            'Prematuro 1500–2500g: 2 mg/kg/dia a partir dos 30 dias',
            'Prematuro 1000–1500g: 3 mg/kg/dia a partir dos 30 dias',
            'Prematuro < 1000g: 4 mg/kg/dia a partir dos 30 dias',
            '12–24 meses (RNPT): 1 mg/kg/dia contínuo',
          ].map((item, i) => (
            <li key={i} className="flex gap-1.5"><span>•</span><span>{item}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}