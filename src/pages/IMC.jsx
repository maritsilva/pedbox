import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RotateCcw, AlertTriangle, Info, TrendingUp, Weight, Ruler, Star, Baby } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites.jsx';
import IMCInfante from './IMCInfante';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
  ReferenceDot, ResponsiveContainer, Legend,
} from 'recharts';
import {
  calcPercentile, generateCurveData, getBMICategory,
} from '@/lib/cdcGrowthData';

// ─── helpers ──────────────────────────────────────────────────────────────────
function calcAgeMonths(birthDate, measureDate) {
  const b = new Date(birthDate);
  const m = new Date(measureDate);
  return (m.getFullYear() - b.getFullYear()) * 12 + (m.getMonth() - b.getMonth())
    + (m.getDate() >= b.getDate() ? 0 : -1);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

// ─── Chart component ──────────────────────────────────────────────────────────
function GrowthChart({ type, sex, ageYears, value, label, unit, yLabel }) {
  const bmiPercentiles = [5, 25, 50, 75, 85, 95];
  const otherPercentiles = [3, 10, 25, 50, 75, 90, 97];
  const percentiles = type === 'bmi' ? bmiPercentiles : otherPercentiles;

  const curveData = useMemo(() => generateCurveData(type, sex, percentiles), [type, sex]);

  const colors =
    type === 'bmi'
      ? { 5: '#ef4444', 25: '#f97316', 50: '#22c55e', 75: '#3b82f6', 85: '#f59e0b', 95: '#ef4444' }
      : { 3: '#ef4444', 10: '#f97316', 25: '#eab308', 50: '#22c55e', 75: '#eab308', 90: '#f97316', 97: '#ef4444' };

  const subjectPoint = curveData.find(d => Math.abs(d.age - ageYears) < 0.6) || curveData[Math.floor(curveData.length / 2)];

  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
        {label}
      </h3>
      <p className="text-xs text-muted-foreground mb-4">Percentis por sexo/idade (CDC 2000)</p>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={curveData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="age"
            type="number"
            domain={[2, 20]}
            ticks={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
            tickFormatter={v => `${v}`}
            label={{ value: 'Idade (anos)', position: 'insideBottom', offset: -4, style: { fontSize: 10 } }}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 8, style: { fontSize: 10 } }}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            formatter={(val, name) => [`${Number(val).toFixed(1)} ${unit}`, name]}
            labelFormatter={v => `${Number(v).toFixed(1)} anos`}
            contentStyle={{ fontSize: 11, borderRadius: 8 }}
          />
          {percentiles.map(p => (
            <Line
              key={p}
              type="monotone"
              dataKey={`p${p}`}
              stroke={colors[p]}
              strokeWidth={p === 50 ? 2 : 1.2}
              dot={false}
              name={`P${p}`}
              strokeDasharray={p === 85 || p === 95 ? '4 2' : undefined}
            />
          ))}
          {value != null && (
            <ReferenceLine x={ageYears} stroke="#6366f1" strokeDasharray="4 2" strokeWidth={1.5} />
          )}
          {value != null && subjectPoint && (
            <ReferenceDot
              x={ageYears}
              y={value}
              r={6}
              fill="#6366f1"
              stroke="white"
              strokeWidth={2}
              label={{ value: `${Number(value).toFixed(1)}`, position: 'right', style: { fontSize: 10, fill: '#6366f1', fontWeight: 700 } }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-2 mt-2">
        {percentiles.map(p => (
          <span key={p} className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: colors[p] }} />
            P{p}
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

// ─── Result badge ─────────────────────────────────────────────────────────────
function ResultCard({ icon: Icon, title, z, percentile, category }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-4 shadow-sm flex items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-indigo-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground font-medium mb-1">{title}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg font-bold text-foreground">
            {percentile != null ? `P${percentile}` : '—'}
          </span>
          {z != null && (
            <span className="text-xs text-muted-foreground">Z: {z > 0 ? '+' : ''}{z}</span>
          )}
          {category && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${category.bg}`}>
              {category.label}
            </span>
          )}
        </div>
        {percentile != null && (
          <div className="mt-2 w-full bg-secondary rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-indigo-500 transition-all duration-700"
              style={{ width: `${Math.min(percentile, 100)}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function IMC() {
  const [tab, setTab] = useState('child'); // 'infant' | 'child'
   const [form, setForm] = useState({
     birthDate: '',
     measureDate: today(),
     sex: 'M',
     height: '',
     weight: '',
   });
   const [result, setResult] = useState(null);
   const [error, setError] = useState('');
   const { toggleFavorite, isFavorite } = useFavorites();

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setResult(null); setError(''); };

  const handleCalc = (e) => {
    e.preventDefault();
    setError('');

    if (!form.birthDate || !form.measureDate || !form.height || !form.weight) {
      setError('Preencha todos os campos para calcular.');
      return;
    }

    const ageMonths = calcAgeMonths(form.birthDate, form.measureDate);
    if (ageMonths < 24 || ageMonths > 240) {
      setError('Idade deve estar entre 2 e 20 anos.');
      return;
    }

    const h = parseFloat(form.height);
    const w = parseFloat(form.weight);
    if (h < 50 || h > 230 || w < 3 || w > 200) {
      setError('Valores de altura ou peso fora do intervalo esperado.');
      return;
    }

    const bmi = w / ((h / 100) ** 2);
    const bmiR = calcPercentile('bmi', form.sex, ageMonths, bmi);
    const heightR = calcPercentile('height', form.sex, ageMonths, h);
    const weightR = calcPercentile('weight', form.sex, ageMonths, w);

    setResult({
      ageMonths,
      ageYears: ageMonths / 12,
      bmi: Math.round(bmi * 10) / 10,
      bmiR, heightR, weightR,
      h, w,
      sex: form.sex,
    });
  };

  const handleReset = () => {
    setForm({ birthDate: '', measureDate: today(), sex: 'M', height: '', weight: '' });
    setResult(null);
    setError('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-foreground mb-1">Crescimento Pediátrico</h1>
          <p className="text-sm text-muted-foreground">
            Curvas de crescimento por faixa etária — referência CDC 2000
          </p>
        </div>
        <button
          onClick={() => toggleFavorite('/imc')}
          className="p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
        >
          <Star className={`w-5 h-5 ${isFavorite('/imc') ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
        </button>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2 mb-6 bg-secondary rounded-2xl p-1.5">
        <button
          onClick={() => setTab('infant')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 'infant' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <Baby className="w-4 h-4" />
          0–36 meses
        </button>
        <button
          onClick={() => setTab('child')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 'child' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
        >
          <TrendingUp className="w-4 h-4" />
          2–20 anos (IMC)
        </button>
      </div>

      {/* Infant tab */}
      {tab === 'infant' && <IMCInfante />}

      {/* Child tab */}
      {tab === 'child' && <>
      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 mb-6">
        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed">
          Esta ferramenta é de uso exclusivo para profissionais de saúde. O IMC é uma ferramenta de triagem, não diagnóstico. Valores acima do percentil 85 devem ser avaliados por um profissional.
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
                <input
                  type="date"
                  value={form.birthDate}
                  onChange={e => set('birthDate', e.target.value)}
                  max={today()}
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Data da Medição</label>
                <input
                  type="date"
                  value={form.measureDate}
                  onChange={e => set('measureDate', e.target.value)}
                  max={today()}
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Sexo</label>
                <div className="flex gap-2">
                  {[{ v: 'M', l: 'Masculino' }, { v: 'F', l: 'Feminino' }].map(({ v, l }) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => set('sex', v)}
                      className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                        form.sex === v
                          ? 'bg-primary text-white'
                          : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Altura (cm)</label>
                <input
                  type="number"
                  placeholder="Ex: 120"
                  value={form.height}
                  onChange={e => set('height', e.target.value)}
                  step="0.1"
                  min="50"
                  max="230"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Peso (kg)</label>
                <input
                  type="number"
                  placeholder="Ex: 25"
                  value={form.weight}
                  onChange={e => set('weight', e.target.value)}
                  step="0.1"
                  min="3"
                  max="200"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              {error && (
                <p className="text-xs text-destructive bg-red-50 rounded-xl px-3 py-2">{error}</p>
              )}

              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm shadow-sm shadow-primary/30"
                >
                  <Calculator className="w-4 h-4" />
                  Calcular
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-border text-muted-foreground hover:bg-secondary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" /> Classificação IMC (Percentil)
            </p>
            <div className="space-y-1.5">
              {[
                { label: 'Baixo Peso', range: '< P5', color: 'bg-blue-500' },
                { label: 'Peso Saudável', range: 'P5 – P84', color: 'bg-green-500' },
                { label: 'Sobrepeso', range: 'P85 – P94', color: 'bg-yellow-400' },
                { label: 'Obesidade', range: '≥ P95', color: 'bg-red-500' },
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
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Summary */}
                <div className={`rounded-2xl p-5 border-2 ${getBMICategory(result.bmiR.percentile).bg.includes('green') ? 'bg-green-50 border-green-200' : getBMICategory(result.bmiR.percentile).bg.includes('yellow') ? 'bg-yellow-50 border-yellow-200' : getBMICategory(result.bmiR.percentile).bg.includes('red') ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'}`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">IMC calculado</p>
                      <p className="text-3xl font-extrabold text-foreground">{result.bmi} <span className="text-base font-normal">kg/m²</span></p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Idade: {Math.floor(result.ageMonths / 12)} a {result.ageMonths % 12} m
                        {' · '}Sexo: {result.sex === 'M' ? 'Masculino' : 'Feminino'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${getBMICategory(result.bmiR.percentile).bg}`}>
                        {getBMICategory(result.bmiR.percentile).label}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2">Percentil {result.bmiR.percentile}</p>
                    </div>
                  </div>
                </div>

                {/* Result cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <ResultCard
                    icon={TrendingUp}
                    title="IMC para Idade"
                    z={result.bmiR.z}
                    percentile={result.bmiR.percentile}
                    category={getBMICategory(result.bmiR.percentile)}
                  />
                  <ResultCard
                    icon={Ruler}
                    title="Estatura para Idade"
                    z={result.heightR.z}
                    percentile={result.heightR.percentile}
                  />
                  <ResultCard
                    icon={Weight}
                    title="Peso para Idade"
                    z={result.weightR.z}
                    percentile={result.weightR.percentile}
                  />
                </div>

                {/* Charts */}
                <GrowthChart
                  type="bmi"
                  sex={result.sex}
                  ageYears={result.ageYears}
                  value={result.bmi}
                  label="Gráfico de IMC por Idade"
                  unit="kg/m²"
                  yLabel="IMC"
                />
                <GrowthChart
                  type="height"
                  sex={result.sex}
                  ageYears={result.ageYears}
                  value={result.h}
                  label="Gráfico de Estatura por Idade"
                  unit="cm"
                  yLabel="Altura (cm)"
                />
                <GrowthChart
                  type="weight"
                  sex={result.sex}
                  ageYears={result.ageYears}
                  value={result.w}
                  label="Gráfico de Peso por Idade"
                  unit="kg"
                  yLabel="Peso (kg)"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {!result && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-400" />
              </div>
              <p className="text-sm font-medium text-foreground">Preencha os dados e clique em Calcular</p>
              <p className="text-xs text-muted-foreground mt-1">Os gráficos de crescimento aparecerão aqui</p>
            </div>
          )}
        </div>
      </div>
      </>}
    </div>
  );
}