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

function calcularManutencao(peso, comPerdas) {
  let solucao, SF, SG, hora;

  if (peso <= 10) {
    solucao = Math.min(100 * peso, 2400);
    let potassio = Math.trunc(solucao / 100) * 2 / 4;
    solucao = solucao / 5;
    SF = solucao;
    SG = solucao * 4;
    if (comPerdas) {
      const rep = (50 * peso) / 2;
      SF += rep;
      SG += rep;
    }
    potassio = Math.trunc((SF + SG) / 100) * 2 / 4;
    SF = round(SF / 4, 0);
    SG = round(SG / 4, 0);
    hora = '6/6';
    var K = potassio;
  } else if (peso <= 20) {
    solucao = Math.min(1000 + 50 * (peso - 10), 2400);
    let potassio = solucao / 100;
    solucao = solucao / 5;
    SF = solucao;
    SG = solucao * 4;
    if (comPerdas) {
      const rep = (50 * peso) / 2;
      SF += rep;
      SG += rep;
    }
    if ((SF + SG) <= 2000) {
      hora = '6/6';
      potassio = (potassio * 2) / 4;
      SF = round(SF / 4, 0);
      SG = round(SG / 4, 0);
    } else {
      hora = '4/4';
      potassio = (potassio * 2) / 6;
      SF = round(SF / 6, 0);
      SG = round(SG / 6, 0);
    }
    var K = Math.trunc(potassio);
  } else {
    solucao = Math.min(1500 + 20 * (peso - 20), 2400);
    let potassio = solucao / 100;
    solucao = solucao / 5;
    SF = solucao;
    SG = solucao * 4;
    if (comPerdas) {
      const rep = (50 * peso) / 2;
      SF += rep;
      SG += rep;
    }
    const total = SF + SG;
    if (total <= 2000) {
      hora = '6/6';
      potassio = (potassio * 2) / 4;
      SF = round(SF / 4, 0);
      SG = round(SG / 4, 0);
    } else if (total <= 3000) {
      hora = '4/4';
      potassio = (potassio * 2) / 6;
      SF = round(SF / 6, 0);
      SG = round(SG / 6, 0);
    } else {
      hora = '2/2';
      potassio = (potassio * 2) / 12;
      SF = round(SF / 12, 0);
      SG = round(SG / 12, 0);
    }
    var K = Math.trunc(potassio);
  }

  const Kest = round(((SF + SG) / 100 * 3) / 2.56, 1);
  let kLabel;
  if (K === 0) kLabel = 'Não é necessário adicionar potássio para este peso.';
  else kLabel = `Cloreto de Potássio 10% — ${K} mL`;

  let infusao = (SF + SG + K) / (parseInt(hora.split('/')[0]) * 3);
  infusao = round(infusao, 0);

  return {
    title: 'Fase de Manutenção',
    subtitle: comPerdas ? 'Regra de Holliday-Segar + Reposição (50 mL/kg/dia)' : 'Regra de Holliday-Segar',
    steps: [
      { num: 1, label: 'Soro Fisiológico 0,9%', value: `${SF} mL` },
      { num: 2, label: 'Soro Glicosado 5%', value: `${SG} mL` },
      { num: 3, label: 'Cloreto de Potássio', value: kLabel },
      { num: 4, label: 'Intervalo de infusão', value: `A cada ${hora}h (${infusao} gotas/min), EV` },
    ],
    alerts: [
      'Monitorar peso, débito urinário, densidade urinária e eletrólitos.',
      'Quando o paciente puder beber (2–3h após início), iniciar SRO mantendo hidratação EV.',
      'Interromper EV quando o paciente puder ingerir SRO em quantidade suficiente.',
    ],
  };
}

export default function Hidratacao() {
  const [peso, setPeso] = useState('');
  const [fase, setFase] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [showPerdas, setShowPerdas] = useState(false);
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
      setShowPerdas(false);
    } else {
      setFase('manut');
      setShowPerdas(true);
    }
  };

  const handlePerdas = (comPerdas) => {
    const p = parseFloat(peso);
    setShowPerdas(false);
    setResultado(calcularManutencao(p, comPerdas));
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

      {/* Perdas modal */}
      <AnimatePresence>
        {showPerdas && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPerdas(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-cyan-500" />
                <h3 className="font-bold text-foreground">Estimativa de Perdas</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                A criança apresenta algum tipo de perda de líquido importante (diarreia, sudorese, hiperventilação ou febre)?
              </p>
              <div className="flex gap-3">
                <button onClick={() => handlePerdas(false)} className="flex-1 border border-border rounded-xl py-2.5 text-sm font-semibold hover:bg-secondary transition-colors">
                  Não
                </button>
                <button onClick={() => handlePerdas(true)} className="flex-1 bg-cyan-500 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-cyan-600 transition-colors">
                  Sim
                </button>
              </div>
            </motion.div>
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
          <li>• <strong>Manutenção:</strong> Regra de Holliday-Segar (solução 1:4 — SF+SG)</li>
          <li>• Peso mínimo para cálculo: 3 kg</li>
        </ul>
      </div>
    </div>
  );
}