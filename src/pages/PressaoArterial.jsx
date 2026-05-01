import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RotateCcw, AlertTriangle, Info, Activity, Ruler, Star } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites.jsx';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ReferenceLine, ReferenceDot, ResponsiveContainer, Legend,
} from 'recharts';
import { calcPercentile } from '@/lib/cdcGrowthData';
import { getBPPercentile, generateBPCurve, getBPCategory } from '@/lib/bpData';

// ─── helpers ──────────────────────────────────────────────────────────────────
function calcAgeYears(birthDate, measureDate) {
  const b = new Date(birthDate);
  const m = new Date(measureDate);
  const months = (m.getFullYear() - b.getFullYear()) * 12 + (m.getMonth() - b.getMonth())
    + (m.getDate() >= b.getDate() ? 0 : -1);
  return { ageMonths: months, ageYears: months / 12 };
}

function today() { return new Date().toISOString().slice(0, 10); }

// ─── BP Chart ─────────────────────────────────────────────────────────────────
function BPChart({ type, sex, heightP, ageYears, value, title }) {
  const curveData = useMemo(
    () => generateBPCurve(type, sex, heightP),
    [type, sex, heightP]
  );

  const colors = { p50: '#22c55e', p90: '#3b82f6', p95: '#f59e0b', p99: '#ef4444' };
  const yLabel = type === 'sys' ? 'PAS (mmHg)' : 'PAD (mmHg)';

  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground mb-4">Percentis por sexo/idade (AAP 2017 · altura P{Math.round(heightP)})</p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={curveData} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="age"
            type="number"
            domain={[1, 17]}
            ticks={[1, 2, 4, 6, 8, 10, 12, 14, 16, 17]}
            label={{ value: 'Idade (anos)', position: 'insideBottom', offset: -4, style: { fontSize: 10 } }}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 8, style: { fontSize: 10 } }}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            formatter={(val, name) => [`${val} mmHg`, name]}
            labelFormatter={v => `${v} anos`}
            contentStyle={{ fontSize: 11, borderRadius: 8 }}
          />
          {['p50', 'p90', 'p95', 'p99'].map(k => (
            <Line
              key={k}
              type="monotone"
              dataKey={k}
              stroke={colors[k]}
              strokeWidth={k === 'p50' ? 2 : 1.5}
              dot={false}
              name={k.replace('p', 'P')}
              strokeDasharray={k === 'p95' || k === 'p99' ? '4 2' : undefined}
            />
          ))}
          {value != null && (
            <ReferenceLine x={Math.round(ageYears)} stroke="#6366f1" strokeDasharray="4 2" strokeWidth={1.5} />
          )}
          {value != null && (
            <ReferenceDot
              x={Math.round(ageYears)}
              y={value}
              r={6}
              fill="#6366f1"
              stroke="white"
              strokeWidth={2}
              label={{ value: `${value}`, position: 'right', style: { fontSize: 10, fill: '#6366f1', fontWeight: 700 } }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-3 mt-2">
        {[['p50','P50','#22c55e'],['p90','P90','#3b82f6'],['p95','P95','#f59e0b'],['p99','P99','#ef4444']].map(([,lbl,clr]) => (
          <span key={lbl} className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: clr }} />
            {lbl}
          </span>
        ))}
        <span className="flex items-center gap-1 text-xs text-indigo-500 font-semibold">
          <span className="w-3 h-0.5 inline-block rounded bg-indigo-500" />
          Paciente
        </span>
      </div>
    </div>
  );
}

// ─── Percentile bar ───────────────────────────────────────────────────────────
function PercBar({ label, percentile, refValues }) {
  const color =
    percentile < 90 ? '#22c55e' :
    percentile < 95 ? '#3b82f6' :
    percentile < 99 ? '#f59e0b' : '#ef4444';

  return (
    <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <span className="text-lg font-bold text-foreground">P{percentile}</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 mb-3">
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{ width: `${Math.min(percentile, 100)}%`, backgroundColor: color }}
        />
      </div>
      {refValues && (
        <div className="grid grid-cols-4 gap-1 text-center">
          {[['P50', refValues.p50], ['P90', refValues.p90], ['P95', refValues.p95], ['P99', refValues.p99]].map(([lbl, val]) => (
            <div key={lbl} className="bg-secondary/60 rounded-lg py-1">
              <p className="text-xs text-muted-foreground">{lbl}</p>
              <p className="text-xs font-bold text-foreground">{val}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function PressaoArterial() {
   const [form, setForm] = useState({
     birthDate: '',
     measureDate: today(),
     sex: 'M',
     height: '',
     systolic: '',
     diastolic: '',
   });
   const [result, setResult] = useState(null);
   const [error, setError] = useState('');
   const { toggleFavorite, isFavorite } = useFavorites();

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setResult(null); setError(''); };

  const handleCalc = (e) => {
    e.preventDefault();
    setError('');

    if (!form.birthDate || !form.measureDate || !form.height || !form.systolic || !form.diastolic) {
      setError('Preencha todos os campos para calcular.');
      return;
    }

    const { ageMonths, ageYears } = calcAgeYears(form.birthDate, form.measureDate);
    const ageInt = Math.floor(ageYears);

    if (ageInt < 1 || ageInt > 17) {
      setError('Idade deve estar entre 1 e 17 anos para cálculo de PA pediátrica.');
      return;
    }

    const h = parseFloat(form.height);
    const sys = parseFloat(form.systolic);
    const dias = parseFloat(form.diastolic);

    if (h < 50 || h > 230) { setError('Altura inválida.'); return; }
    if (sys < 50 || sys > 250) { setError('PAS inválida.'); return; }
    if (dias < 20 || dias > 200) { setError('PAD inválida.'); return; }

    // Height percentile using CDC tables
    const heightR = calcPercentile('height', form.sex, ageMonths, h);
    const heightP = heightR.percentile;

    // BP percentiles
    const sysR = getBPPercentile('sys', form.sex, ageInt, heightP, sys);
    const diasR = getBPPercentile('dias', form.sex, ageInt, heightP, dias);

    const category = getBPCategory(sysR.percentile, diasR.percentile, ageInt < 13, sys, dias);

    setResult({ ageYears, ageInt, h, sys, dias, heightP, heightR, sysR, diasR, category, sex: form.sex });
  };

  const handleReset = () => {
    setForm({ birthDate: '', measureDate: today(), sex: 'M', height: '', systolic: '', diastolic: '' });
    setResult(null);
    setError('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-foreground mb-1">Pressão Arterial Pediátrica</h1>
          <p className="text-sm text-muted-foreground">
            Percentis de PA sistólica e diastólica ajustados por sexo, idade e estatura (AAP 2017 · Flynn et al.)
          </p>
        </div>
        <button
          onClick={() => toggleFavorite('/pressao-arterial')}
          className="p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
        >
          <Star className={`w-5 h-5 ${isFavorite('/pressao-arterial') ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
        </button>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 mb-6">
        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed">
          Ferramenta de triagem exclusiva para profissionais de saúde. PA elevada deve ser confirmada em múltiplas aferições em dias diferentes. Faixa etária: <strong>1–17 anos</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Form ── */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground mb-4">Dados do Paciente</p>
            <form onSubmit={handleCalc} className="space-y-3">

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Data de Nascimento</label>
                <input type="date" value={form.birthDate} onChange={e => set('birthDate', e.target.value)}
                  max={today()}
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Data da Aferição</label>
                <input type="date" value={form.measureDate} onChange={e => set('measureDate', e.target.value)}
                  max={today()}
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Sexo</label>
                <div className="flex gap-2">
                  {[{ v: 'M', l: 'Masculino' }, { v: 'F', l: 'Feminino' }].map(({ v, l }) => (
                    <button key={v} type="button" onClick={() => set('sex', v)}
                      className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${form.sex === v ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Altura (cm)</label>
                <input type="number" placeholder="Ex: 120" value={form.height}
                  onChange={e => set('height', e.target.value)} step="0.1" min="50" max="230"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">PA Sistólica (mmHg)</label>
                <input type="number" placeholder="Ex: 110" value={form.systolic}
                  onChange={e => set('systolic', e.target.value)} step="1" min="50" max="250"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">PA Diastólica (mmHg)</label>
                <input type="number" placeholder="Ex: 70" value={form.diastolic}
                  onChange={e => set('diastolic', e.target.value)} step="1" min="20" max="200"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              {error && <p className="text-xs text-destructive bg-red-50 rounded-xl px-3 py-2">{error}</p>}

              <div className="flex gap-2 pt-1">
                <button type="submit"
                  className="flex-1 bg-primary text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm shadow-sm shadow-primary/30">
                  <Calculator className="w-4 h-4" /> Calcular
                </button>
                <button type="button" onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-border text-muted-foreground hover:bg-secondary transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Classification info */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" /> Classificação (AAP 2017)
            </p>
            <div className="space-y-1.5">
              {[
                { label: 'Normal', range: '< P90', color: 'bg-green-500' },
                { label: 'Pressão Elevada', range: 'P90 – P94', color: 'bg-yellow-400' },
                { label: 'HAS Estágio 1', range: 'P95 – P95+12', color: 'bg-orange-500' },
                { label: 'HAS Estágio 2', range: '> P95+12 ou ≥140/90', color: 'bg-red-500' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.color}`} />
                  <span className="text-xs text-blue-800">{c.label}</span>
                  <span className="text-xs text-blue-600 ml-auto">{c.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {result && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                {/* Summary card */}
                <div className={`rounded-2xl p-5 border-2 ${
                  result.category.bg.includes('green') ? 'bg-green-50 border-green-200' :
                  result.category.bg.includes('yellow') ? 'bg-yellow-50 border-yellow-200' :
                  result.category.bg.includes('orange') ? 'bg-orange-50 border-orange-200' :
                  'bg-red-50 border-red-200'}`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">PA aferida</p>
                      <p className="text-3xl font-extrabold text-foreground">
                        {result.sys}/{result.dias} <span className="text-base font-normal">mmHg</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {Math.floor(result.ageYears)} a {Math.round((result.ageYears % 1) * 12)} m
                        {' · '}{result.sex === 'M' ? 'Masculino' : 'Feminino'}
                        {' · '}Estatura P{Math.round(result.heightP)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${result.category.bg}`}>
                        {result.category.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Height + BP cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white border border-border rounded-xl p-4 shadow-sm flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Ruler className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Estatura para Idade</p>
                      <p className="text-lg font-bold">P{result.heightR.percentile}</p>
                      <p className="text-xs text-muted-foreground">Z: {result.heightR.z > 0 ? '+' : ''}{result.heightR.z}</p>
                    </div>
                  </div>
                  <PercBar
                    label="PA Sistólica"
                    percentile={result.sysR.percentile}
                    refValues={result.sysR.ref}
                  />
                  <PercBar
                    label="PA Diastólica"
                    percentile={result.diasR.percentile}
                    refValues={result.diasR.ref}
                  />
                </div>

                {/* Charts */}
                <BPChart
                  type="sys"
                  sex={result.sex}
                  heightP={result.heightP}
                  ageYears={result.ageInt}
                  value={result.sys}
                  title="Gráfico de PAS por Idade"
                />
                <BPChart
                  type="dias"
                  sex={result.sex}
                  heightP={result.heightP}
                  ageYears={result.ageInt}
                  value={result.dias}
                  title="Gráfico de PAD por Idade"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {!result && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-sm font-medium text-foreground">Preencha os dados e clique em Calcular</p>
              <p className="text-xs text-muted-foreground mt-1">Os gráficos de PA aparecerão aqui</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}