import React, { useState, useRef } from 'react';
import { Droplets, RotateCcw, Calculator, AlertCircle, Info } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function calcularExpansao(peso, tipo) {
  if (tipo === 'menor5') {
    const SF = Math.round(peso * 20);
    return {
      title: 'Fase de Expansão (< 5 anos)',
      subtitle: 'Reposição volêmica rápida',
      steps: [
        { num: 1, label: 'Dieta zero.' },
        { num: 2, label: `Soro Fisiológico 0,9%`, value: `${SF} mL, EV, em 30 minutos`, note: 'Reavaliar após cada expansão e repetir se necessário.' },
        { num: 3, label: 'Oxigênio', value: '2 L/min, cateter nasal', note: 'Se SaO₂ < 95%.' },
      ],
      alerts: ['Após cada expansão, atentar para sinais de EAP (crepitações) e IC (hepatomegalia).'],
    };
  } else {
    const SF = Math.round(peso * 30);
    const RL = Math.round(peso * 70);
    return {
      title: 'Fase de Expansão (> 5 anos)',
      subtitle: 'Reposição volêmica rápida',
      steps: [
        { num: 1, label: 'Dieta zero.' },
        { num: 2, label: `Soro Fisiológico 0,9%`, value: `${SF} mL, EV, em 30 minutos` },
        { num: 3, label: 'Soro Ringer Lactato', value: `${RL} mL, EV, em 2h30min` },
        { num: 4, label: 'Oxigênio', value: '2 L/min, cateter nasal', note: 'Se SaO₂ < 95%.' },
      ],
      alerts: ['Após cada expansão, atentar para sinais de EAP (crepitações) e IC (hepatomegalia).'],
    };
  }
}

// Holliday-Segar (Merck): volume diário + taxa contínua mL/h
function calcularManutencao(peso) {
  let dailyVol;
  if (peso <= 10) {
    dailyVol = 100 * peso;
  } else if (peso <= 20) {
    dailyVol = 1000 + 50 * (peso - 10);
  } else {
    dailyVol = Math.min(1500 + 20 * (peso - 20), 2400);
  }
  dailyVol = round(dailyVol, 0);
  const ratePerHour = round(dailyVol / 24, 1);
  const ratePerMin = round(dailyVol / 1440, 2);

  let formula;
  if (peso <= 10) formula = `100 mL/kg/dia × ${peso} kg = ${dailyVol} mL/dia`;
  else if (peso <= 20) formula = `1000 mL + 50 mL/kg × ${peso - 10} kg (excesso de 10) = ${dailyVol} mL/dia`;
  else formula = `1500 mL + 20 mL/kg × ${Math.min(peso - 20, 20)} kg (excesso de 20) = ${dailyVol} mL/dia`;

  return {
    title: 'Hidratação de Manutenção',
    subtitle: 'Fórmula de Holliday-Segar (Merck Manuals)',
    dailyVol,
    ratePerHour,
    ratePerMin,
    formula,
    steps: [
      { num: 1, label: 'Volume diário total', value: `${dailyVol} mL/dia` },
      { num: 2, label: 'Taxa de infusão contínua', value: `${ratePerHour} mL/h` },
      { num: 3, label: 'Equivalente em gotas', value: `${ratePerMin} mL/min` },
    ],
    alerts: [
      'Não aplicável a recém-nascidos (0–28 dias após termo).',
      'Para pacientes com > 20 kg, volume máximo é 2400 mL/dia.',
      'Monitorar débito urinário, eletrólitos e sinais clínicos de hiper/hipo-hidratação.',
    ],
  };
}

export default function Hidratacao() {
  const [peso, setPeso] = useState('');
  const [fase, setFase] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [showPerdas, setShowPerdas] = useState(false); // kept for compat
  const resultRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = parseFloat(peso);
    if (!p || p < 3) return;
    setFase('menor5');
    setResultado(calcularExpansao(p, 'menor5'));
    setShowPerdas(false);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const switchFase = (f) => {
    const p = parseFloat(peso);
    if (!p) return;
    if (f === 'menor5' || f === 'maior5') {
      setFase(f);
      setResultado(calcularExpansao(p, f));
    } else {
      setFase('manut');
      setResultado(calcularManutencao(p));
    }
    setShowPerdas(false);
  };

  const reset = () => {
    setPeso('');
    setResultado(null);
    setFase(null);
    setShowPerdas(false);
  };

  const tabs = [
    { id: 'menor5', label: 'Expansão\n< 5 anos' },
    { id: 'maior5', label: 'Expansão\n> 5 anos' },
    { id: 'manut', label: 'Manutenção' },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 text-white mb-8 shadow-lg shadow-cyan-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 rounded-xl p-2">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <p className="text-cyan-100 text-sm">Ferramenta Pediátrica</p>
            <h1 className="text-2xl font-bold">Hidratação Venosa</h1>
          </div>
        </div>
        <p className="text-cyan-100 text-sm">Calcula expansão volêmica e manutenção pela Regra de Holliday-Segar</p>
      </div>

      {/* Peso input */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <input
            type="number"
            placeholder="Peso da criança (kg)"
            value={peso}
            onChange={e => { setPeso(e.target.value); reset(); setTimeout(() => {}, 0); setPeso(e.target.value); }}
            step="0.1"
            min="3"
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 transition-all"
          />
        </div>
        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-sm">
          <Calculator className="w-4 h-4" /> Calcular
        </button>
        {resultado && (
          <button type="button" onClick={reset} className="bg-secondary text-foreground px-3 py-3 rounded-xl hover:bg-border transition-colors">
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </form>

      <AnimatePresence>
        {resultado && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {/* Phase tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {tabs.map(t => (
                <button
                  key={t.id}
                  onClick={() => switchFase(t.id)}
                  className={`flex-1 min-w-[100px] text-xs font-semibold py-2 px-3 rounded-xl transition-all whitespace-pre-line text-center leading-tight ${
                    fase === t.id
                      ? 'bg-cyan-500 text-white shadow'
                      : 'bg-white border border-border text-muted-foreground hover:border-cyan-300'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Resultado card */}
            <div ref={resultRef} className="bg-white border border-border rounded-2xl p-5 shadow-sm mb-4">
              <div className="mb-4">
                <h2 className="font-bold text-foreground text-lg">{resultado.title}</h2>
                {resultado.subtitle && <p className="text-sm text-muted-foreground mt-0.5">{resultado.subtitle}</p>}
              </div>

              {resultado.dailyVol != null && (
                <div className="mb-4 space-y-2">
                  <div className="bg-cyan-50 border border-cyan-200 rounded-xl px-4 py-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-cyan-700">Volume diário total</span>
                    <span className="text-2xl font-extrabold text-cyan-600">{resultado.dailyVol} mL/dia</span>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-teal-700">Taxa de infusão contínua</span>
                    <span className="text-2xl font-extrabold text-teal-600">{resultado.ratePerHour} mL/h</span>
                  </div>
                  {resultado.formula && (
                    <div className="bg-secondary rounded-xl px-4 py-2">
                      <p className="text-xs text-muted-foreground font-medium">{resultado.formula}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-3">
                {resultado.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-600 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{step.label}</p>
                      {step.value && <p className="text-sm text-cyan-600 font-medium">{step.value}</p>}
                      {step.note && <p className="text-xs text-muted-foreground mt-0.5">{step.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            {resultado.alerts?.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <p className="text-sm font-semibold text-amber-800">Orientações</p>
                </div>
                <ul className="space-y-1.5">
                  {resultado.alerts.map((a, i) => (
                    <li key={i} className="text-sm text-amber-700 flex items-start gap-1.5">
                      <span className="mt-0.5">•</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-4 h-4 text-blue-500" />
          <p className="text-sm font-semibold text-blue-800">Sobre os Cálculos</p>
        </div>
        <ul className="space-y-1 text-xs text-blue-700">
          <li>• <strong>Expansão &lt; 5 anos:</strong> SF 0,9% — 20 mL/kg em 30 min</li>
          <li>• <strong>Expansão &gt; 5 anos:</strong> SF 30 mL/kg (30 min) + Ringer Lactato 70 mL/kg (2h30)</li>
          <li>• <strong>Manutenção (≤ 10 kg):</strong> 100 mL/kg/dia</li>
          <li>• <strong>Manutenção (11–20 kg):</strong> 1000 mL + 50 mL/kg acima de 10</li>
          <li>• <strong>Manutenção (&gt; 20 kg):</strong> 1500 mL + 20 mL/kg acima de 20 (máx. 2400 mL/dia)</li>
          <li>• Taxa contínua = Volume diário ÷ 24h — Holliday MA, Segar WE. Pediatrics, 1957</li>
        </ul>
      </div>
    </div>
  );
}