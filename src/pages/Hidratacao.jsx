import React, { useState, useRef } from 'react';
import { Droplets, Calculator, AlertCircle, Star } from 'lucide-react';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

function round(value, decimals) {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}

function calcularExpansao(peso, tipo) {
  if (tipo === 'menor5') {
    const SF = Math.round(peso * 20);
    return {
      title: 'Fase de Expansão (< 5 anos)',
      subtitle: 'Reposição volêmica rápida imediata',
      steps: [
        { num: 1, label: 'Dieta zero imediata' },
        {
          num: 2,
          label: 'Soro Fisiológico 0,9%',
          value: `${SF} mL, EV, em 30 minutos`,
          note: 'Reavaliar após cada expansão e repetir se necessário.',
        },
        { num: 3, label: 'Oxigenoterapia', value: '2 L/min em cateter nasal', note: 'Se SaO₂ < 95%.' },
      ],
      alerts: ['Após cada expansão, atentar para sinais de EAP (crepitações) e IC (hepatomegalia).'],
    };
  } else {
    const SF = Math.round(peso * 30);
    const RL = Math.round(peso * 70);
    return {
      title: 'Fase de Expansão (> 5 anos)',
      subtitle: 'Reposição volêmica rápida combinada',
      steps: [
        { num: 1, label: 'Dieta zero imediata' },
        { num: 2, label: 'Soro Fisiológico 0,9%', value: `${SF} mL, EV, em 30 minutos` },
        { num: 3, label: 'Soro Ringer Lactato', value: `${RL} mL, EV, em 2h30min` },
        { num: 4, label: 'Oxigenoterapia', value: '2 L/min em cateter nasal', note: 'Se SaO₂ < 95%.' },
      ],
      alerts: ['Após cada expansão, atentar para sinais de EAP (crepitações) e IC (hepatomegalia).'],
    };
  }
}

// Holliday-Segar: volume diário + taxa contínua mL/h + detalhamento
function calcularManutencao(peso) {
  let dailyVol;
  let detalhePrimeiros = 0;
  let detalheProximos = 0;
  let detalheRestante = 0;

  if (peso <= 10) {
    dailyVol = 100 * peso;
    detalhePrimeiros = dailyVol;
  } else if (peso <= 20) {
    detalhePrimeiros = 1000;
    detalheProximos = 50 * (peso - 10);
    dailyVol = detalhePrimeiros + detalheProximos;
  } else {
    detalhePrimeiros = 1000;
    detalheProximos = 500;
    detalheRestante = Math.min(20 * (peso - 20), 900);
    dailyVol = Math.min(detalhePrimeiros + detalheProximos + detalheRestante, 2400);
  }

  dailyVol = round(dailyVol, 0);
  const ratePerHour = round(dailyVol / 24, 1);
  const ratePerMin = round(dailyVol / 1440, 2);

  let formula;
  if (peso <= 10) formula = `100 mL/kg/dia × ${peso} kg = ${dailyVol} mL/dia`;
  else if (peso <= 20)
    formula = `1000 mL + 50 mL/kg × ${peso - 10} kg (excesso de 10) = ${dailyVol} mL/dia`;
  else {
    const excessoAcima20 = round(Math.min(peso - 20, 45), 1);
    formula = `1500 mL + 20 mL/kg × ${excessoAcima20} kg (excesso acima de 20 kg) = ${dailyVol} mL/dia`;
  }

  return {
    title: 'Manutenção de Fluidos',
    subtitle: 'Método de Holliday-Segar (Manutenção fisiológica)',
    dailyVol,
    ratePerHour,
    ratePerMin,
    formula,
    detalhamento: {
      primeiros10: peso >= 10 ? 1000 : peso * 100,
      proximos10: peso > 10 ? Math.min(peso - 10, 10) * 50 : 0,
      acima20: peso > 20 ? detalheRestante : 0,
    },
    steps: [
      { num: 1, label: 'Volume diário total', value: `${dailyVol} mL/dia` },
      { num: 2, label: 'Taxa de infusão contínua', value: `${ratePerHour} mL/h` },
      { num: 3, label: 'Equivalente em gotas', value: `${ratePerMin} mL/min (microgotas)` },
    ],
    alerts: [
      'Não aplicável a recém-nascidos nos primeiros dias de vida.',
      'Para pacientes com > 20 kg, o volume máximo diário recomendado é 2.400 mL/dia.',
      'Ajuste o volume conforme condição clínica, perdas anormais e comorbidades.',
    ],
  };
}

export default function Hidratacao() {
  const [peso, setPeso] = useState('12');
  const [fase, setFase] = useState('manut');
  const [resultado, setResultado] = useState(/** @type {*} */ (calcularManutencao(12)));
  const resultRef = useRef(null);
  const { toggleFavorite, isFavorite } = usePageFavorites();

  const handleCalcular = (e) => {
    if (e) e.preventDefault();
    const p = parseFloat(peso);
    if (!p || p < 3) return;
    if (fase === 'manut') {
      setResultado(calcularManutencao(p));
    } else {
      setResultado(calcularExpansao(p, fase));
    }
  };

  const switchFase = (f) => {
    setFase(f);
    const p = parseFloat(peso);
    if (p && p >= 3) {
      if (f === 'manut') {
        setResultado(calcularManutencao(p));
      } else {
        setResultado(calcularExpansao(p, f));
      }
    }
  };

  const reset = () => {
    setPeso('');
    setResultado(null);
  };

  return (
    <div className="clinical-page max-w-5xl mx-auto space-y-6">
      {/* BREADCRUMB / TITLE BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
              Hidratação pediátrica
            </h1>
            <button
              onClick={() => toggleFavorite('/hidratacao')}
              className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              title="Favoritar"
            >
              <Star
                className={`w-5 h-5 ${
                  isFavorite('/hidratacao')
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-300 hover:text-slate-400'
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">
            Calcule o volume de fluidos para pacientes pediátricos (Holliday-Segar e Expansão).
          </p>
        </div>

        {/* Phase switcher pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/80 self-start sm:self-auto">
          {[
            { id: 'manut', label: 'Manutenção' },
            { id: 'menor5', label: 'Expansão < 5a' },
            { id: 'maior5', label: 'Expansão > 5a' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchFase(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                fase === tab.id
                  ? 'bg-white text-brand-navy shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TWO COLUMN WORKSPACE (Input on Left, Results on Right - Mockup 3) */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Dados do Paciente */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs space-y-5">
          <h2 className="text-base font-bold text-brand-navy border-b border-slate-100 pb-3">
            Dados do paciente
          </h2>

          <form onSubmit={handleCalcular} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Peso da criança
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  min="3"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  placeholder="Ex: 12"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-base font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 pointer-events-none">
                  kg
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Peso mínimo: 3 kg.</p>
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-brand-teal hover:bg-teal-600 text-white font-bold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                Calcular
              </button>
              <button
                type="button"
                onClick={reset}
                className="py-3 px-4 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors"
                title="Limpar formulário"
              >
                Limpar
              </button>
            </div>
          </form>

          {/* Important note */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs space-y-1 text-amber-900">
            <div className="flex items-center gap-1.5 font-bold text-amber-800">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>Importante</span>
            </div>
            <p className="leading-relaxed">
              Ajuste o volume conforme a condição clínica, perdas adicionais e comorbidades. Em situações de urgência ou UTI, individualize a prescrição.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Resultado em Destaque */}
        <div className="lg:col-span-7 space-y-5" ref={resultRef}>
          {resultado ? (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal">
                    Resultado
                  </span>
                  <h2 className="text-base font-bold text-brand-navy">{resultado.title}</h2>
                </div>
                <span className="text-xs text-slate-400">{resultado.subtitle}</span>
              </div>

              {/* Big Highlight Box (matching mockup: 1.100 mL/dia | 46 mL/hora) */}
              {resultado.dailyVol != null && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-sky/60 to-teal-50/40 border border-brand-teal/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-brand-teal flex items-center justify-center shrink-0 shadow-xs border border-brand-teal/20">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
                        {resultado.dailyVol.toLocaleString('pt-BR')} mL/dia
                      </span>
                      <p className="text-xs font-semibold text-brand-teal mt-0.5">
                        {resultado.ratePerHour} mL/hora contínuo
                      </p>
                    </div>
                  </div>
                  <div className="text-right sm:border-l sm:border-slate-200/60 sm:pl-4">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                      Microgotas
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {resultado.ratePerMin} gts/min
                    </span>
                  </div>
                </div>
              )}

              {/* Detalhamento do Cálculo Holliday-Segar */}
              {fase === 'manut' && resultado.detalhamento && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Cálculo detalhado (Holliday-Segar)
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between items-center py-0.5">
                      <span>Para os primeiros 10 kg</span>
                      <span className="font-mono font-semibold">100 mL/kg = 1.000 mL</span>
                    </div>
                    {parseFloat(peso) > 10 && (
                      <div className="flex justify-between items-center py-0.5 border-t border-slate-200/60 pt-1.5">
                        <span>Para os próximos {Math.min(parseFloat(peso) - 10, 10)} kg</span>
                        <span className="font-mono font-semibold">
                          50 mL/kg = {resultado.detalhamento.proximos10} mL
                        </span>
                      </div>
                    )}
                    {parseFloat(peso) > 20 && (
                      <div className="flex justify-between items-center py-0.5 border-t border-slate-200/60 pt-1.5">
                        <span>Acima de 20 kg ({parseFloat(peso) - 20} kg)</span>
                        <span className="font-mono font-semibold">
                          20 mL/kg = {resultado.detalhamento.acima20} mL
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-2 border-t border-slate-300 font-bold text-brand-navy">
                      <span>Total</span>
                      <span>
                        {resultado.dailyVol} mL/dia ({resultado.ratePerHour} mL/h)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Steps (para fases de expansão ou detalhes adicionais) */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Conduta prescrita
                </h3>
                <div className="space-y-2">
                  {resultado.steps.map((st) => (
                    <div
                      key={st.num}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {st.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-800">{st.label}</p>
                        {st.value && (
                          <p className="font-semibold text-brand-teal mt-0.5">{st.value}</p>
                        )}
                        {st.note && <p className="text-slate-400 mt-0.5">{st.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 text-center text-slate-400">
              Insira o peso do paciente ao lado para visualizar o cálculo.
            </div>
          )}

          {/* References Footer */}
          <div className="text-[11px] text-slate-400 space-y-1 px-1">
            <p className="font-bold text-slate-500 uppercase tracking-wider">Referências Clínicas</p>
            <p>
              • Holliday MA, Segar WE. The maintenance need for water in parenteral fluid therapy.{' '}
              <em>Pediatrics</em> 1957;19(5):823-32.
            </p>
            <p>
              • Sociedade Brasileira de Pediatria (SBP). Manual de Terapia de Reidratação Oral. 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}