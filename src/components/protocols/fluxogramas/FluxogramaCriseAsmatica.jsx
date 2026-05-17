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
        🫁 Crise Asmática — Avaliação Inicial (GINA 2026)<br />
        <span className="font-normal text-blue-100">Sinais vitais · Oximetria · PRAM (&lt; 5 anos) · Exame físico</span>
      </Box>

      <Arrow />

      {/* Severity grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: 'LEVE',
            color: 'green',
            sat: 'Sat ≥ 94%',
            items: [
              'Salbutamol 4 jatos MDI + espaçador',
              'Repetir após 30–60 min se necessário',
              '≥ 6 anos: opção ICS-formoterol (budesonida 160 µg + formoterol 4,5 µg) × 2 jatos em vez de SABA',
              'Corticoide VO se sem melhora após SABA',
            ],
          },
          {
            label: 'MODERADA',
            color: 'yellow',
            sat: 'Sat 92–94%',
            items: [
              'O₂ alvo 92–95% (≥ 92% se < 5 anos)',
              'Salbutamol 4–8 jatos MDI + espaçador ou 2,5 mg nebulizado, a cada 20–30 min × 3',
              'Ipratrópio 4 jatos (20 µg/puff) ou 0,25 mg neb, a cada 20–30 min × 3',
              'Corticoide VO: Prednisolona 1–2 mg/kg (máx 40 mg)',
            ],
          },
          {
            label: 'GRAVE / RISCO DE VIDA',
            color: 'red',
            sat: 'Sat < 92%',
            items: [
              'O₂ imediato — alvo 92–95%',
              'Salbutamol 6–10 jatos MDI + espaçador ou 5 mg neb, a cada 20 min',
              'Ipratrópio 4–8 jatos ou 0,5 mg neb, nas 3 primeiras doses de SABA',
              'Corticoide sistêmico: Prednisolona VO ou Metilprednisolona EV',
              'MgSO₄ EV 50 mg/kg (máx 2 g) em 20 min',
            ],
          },
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
                  <span className="mt-0.5 flex-shrink-0">•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow label="Reavaliação 1h — sinais vitais, Sat, PEF/PRAM" />

      {/* Response grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: '✅ BOA RESPOSTA',
            bg: 'bg-emerald-50 border-emerald-200',
            hd: 'bg-emerald-100 text-emerald-800',
            items: ['Sat ≥ 95% (≥ 94% se < 5 anos)', 'Sem desconforto / musculatura acessória', 'PEF > 70% ou PRAM ≤ 3', 'Última dose SABA > 60 min', '→ ALTA com plano de ação + ICS'],
          },
          {
            label: '⚠️ RESP. INCOMPLETA',
            bg: 'bg-amber-50 border-amber-200',
            hd: 'bg-amber-100 text-amber-800',
            items: ['Observação 4–6h', 'Salbutamol a cada 30–60 min', 'Corticoide se não feito', 'Considerar MgSO₄', 'Reavaliar internação'],
          },
          {
            label: '🚨 SEM RESPOSTA',
            bg: 'bg-red-50 border-red-200',
            hd: 'bg-red-100 text-red-800',
            items: ['Confusão / sonolência / cianose', 'Sat < 92% persistente', 'Silêncio torácico', '→ UTI / SALA DE EMERGÊNCIA'],
          },
        ].map((col) => (
          <div key={col.label} className={`rounded-xl border-2 overflow-hidden ${col.bg}`}>
            <div className={`text-center text-xs font-bold py-1.5 ${col.hd}`}>{col.label}</div>
            <ul className="p-2.5 space-y-1">
              {col.items.map((item, i) => (
                <li key={i} className="flex gap-1 text-xs text-gray-700"><span className="flex-shrink-0">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Arrow />

      <Box color="red-dark" className="font-bold">
        🏥 UTI / SALA DE EMERGÊNCIA<br />
        <span className="font-normal text-red-200 text-xs">Salbutamol EV · MgSO₄ · Heliox · CNAF · VNI / IOT se deterioração</span>
      </Box>

      {/* ICS note */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 mt-2">
        <p className="font-bold text-violet-700 text-xs mb-1">📋 GINA 2026 — ICS na alta (obrigatório)</p>
        <ul className="space-y-1 text-xs text-violet-900">
          <li>• <strong>Track 1 (≥ 6 anos):</strong> ICS-formoterol MART — budesonida 160 µg + formoterol 4,5 µg: 1 jato 2×/dia + doses extra conforme necessidade (máx 8 jatos/dia em 6–11 anos; 12 jatos/dia em adolescentes)</li>
          <li>• <strong>Track 2:</strong> ICS + SABA conforme necessidade — budesonida 200–400 µg após cada sessão de salbutamol; continuar 7–10 dias após alta</li>
          <li>• <strong>Reavaliação:</strong> 2–3 dias (crianças &lt; 6 anos) · 2–7 dias (maiores)</li>
        </ul>
      </div>
    </div>
  );
}