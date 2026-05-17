import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RotateCcw, AlertTriangle, Info, TrendingUp, Weight, Ruler, Activity } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
  ReferenceDot, ResponsiveContainer,
} from 'recharts';
import {
  calcInfantPercentile,
  generateInfantCurveData,
} from '@/lib/cdcInfantData';

function calcAgeMonths(birthDate, measureDate) {
  const b = new Date(birthDate);
  const m = new Date(measureDate);
  return (m.getFullYear() - b.getFullYear()) * 12 + (m.getMonth() - b.getMonth())
    + (m.getDate() >= b.getDate() ? 0 : -1);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

const PERCENTILES = [3, 10, 25, 50, 75, 90, 97];
const P_COLORS = { 3: '#ef4444', 10: '#f97316', 25: '#eab308', 50: '#22c55e', 75: '#eab308', 90: '#f97316', 97: '#ef4444' };

function InfantChart({ type, sex, ageMon, value, label, unit, yLabel }) {
  const curveData = useMemo(() => generateInfantCurveData(type, sex, PERCENTILES), [type, sex]);

  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-1">{label}</h3>
      <p className="text-xs text-muted-foreground mb-4">Percentis por sexo/idade (CDC 2000)</p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={curveData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="age"
            type="number"
            domain={[0, 36]}
            ticks={[0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]}
            tickFormatter={v => `${v}`}
            label={{ value: 'Idade (meses)', position: 'insideBottom', offset: -4, style: { fontSize: 10 } }}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 8, style: { fontSize: 10 } }}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            formatter={(val, name) => [`${Number(val).toFixed(1)} ${unit}`, name]}
            labelFormatter={v => `${v} meses`}
            contentStyle={{ fontSize: 11, borderRadius: 8 }}
          />
          {PERCENTILES.map(p => (
            <Line
              key={p}
              type="monotone"
              dataKey={`p${p}`}
              stroke={P_COLORS[p]}
              strokeWidth={p === 50 ? 2 : 1.2}
              dot={false}
              name={`P${p}`}
            />
          ))}
          {value != null && ageMon != null && (
            <ReferenceLine x={ageMon} stroke="#6366f1" strokeDasharray="4 2" strokeWidth={1.5} />
          )}
          {value != null && ageMon != null && (
            <ReferenceDot
              x={ageMon}
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
        {PERCENTILES.map(p => (
          <span key={p} className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="w-3 h-0.5 inline-block rounded" style={{ backgroundColor: P_COLORS[p] }} />
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

function getWeightCategory(percentile) {
  if (percentile < 3) return { label: 'Muito Baixo Peso', bg: 'bg-red-100 text-red-800' };
  if (percentile < 10) return { label: 'Baixo Peso', bg: 'bg-orange-100 text-orange-800' };
  if (percentile <= 90) return { label: 'Peso Adequado', bg: 'bg-green-100 text-green-800' };
  if (percentile <= 97) return { label: 'Peso Elevado', bg: 'bg-yellow-100 text-yellow-800' };
  return { label: 'Muito Elevado', bg: 'bg-red-100 text-red-800' };
}

export default function IMCInfante() {
  const [form, setForm] = useState({
    birthDate: '',
    measureDate: today(),
    sex: 'M',
    length: '',
    weight: '',
    hc: '',
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setResult(null); setError(''); };

  const handleCalc = (e) => {
    e.preventDefault();
    setError('');

    if (!form.birthDate || !form.measureDate || !form.length || !form.weight) {
      setError('Preencha os campos obrigatórios: nascimento, medição, comprimento e peso.');
      return;
    }

    const ageMonths = calcAgeMonths(form.birthDate, form.measureDate);
    if (ageMonths < 0 || ageMonths > 36) {
      setError('Idade deve estar entre 0 e 36 meses para esta calculadora.');
      return;
    }

    const len = parseFloat(form.length);
    const w = parseFloat(form.weight);
    const hc = form.hc ? parseFloat(form.hc) : null;

    if (len < 40 || len > 110) { setError('Comprimento fora do intervalo esperado (40–110 cm).'); return; }
    if (w < 1 || w > 25) { setError('Peso fora do intervalo esperado (1–25 kg).'); return; }
    if (hc && (hc < 25 || hc > 60)) { setError('Perímetro cefálico fora do intervalo esperado.'); return; }

    const lengthR = calcInfantPercentile('length', form.sex, ageMonths, len);
    const weightR = calcInfantPercentile('weight', form.sex, ageMonths, w);
    const hcR = hc ? calcInfantPercentile('hc', form.sex, ageMonths, hc) : null;
    const wflR = calcInfantPercentile('wfl', form.sex, len, w);

    setResult({ ageMonths, len, w, hc, sex: form.sex, lengthR, weightR, hcR, wflR });
  };

  const handleReset = () => {
    setForm({ birthDate: '', measureDate: today(), sex: 'M', length: '', weight: '', hc: '' });
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-blue-800 leading-relaxed">
          Referência CDC 2000 para lactentes de <strong>0 a 36 meses</strong>. Inclui Comprimento/Idade, Peso/Idade, Perímetro Cefálico/Idade e Peso/Comprimento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground mb-4">Dados do Lactente</p>
            <form onSubmit={handleCalc} className="space-y-3">

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Data de Nascimento</label>
                <input type="date" value={form.birthDate} onChange={e => set('birthDate', e.target.value)} max={today()}
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Data da Medição</label>
                <input type="date" value={form.measureDate} onChange={e => set('measureDate', e.target.value)} max={today()}
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
                <label className="text-xs font-medium text-muted-foreground block mb-1">Comprimento (cm) <span className="text-red-400">*</span></label>
                <input type="number" placeholder="Ex: 70" value={form.length} onChange={e => set('length', e.target.value)}
                  step="0.1" min="40" max="110"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Peso (kg) <span className="text-red-400">*</span></label>
                <input type="number" placeholder="Ex: 8.5" value={form.weight} onChange={e => set('weight', e.target.value)}
                  step="0.01" min="1" max="25"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">Perímetro Cefálico (cm) <span className="text-muted-foreground text-xs">(opcional)</span></label>
                <input type="number" placeholder="Ex: 44" value={form.hc} onChange={e => set('hc', e.target.value)}
                  step="0.1" min="25" max="60"
                  className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>

              {error && <p className="text-xs text-destructive bg-red-50 rounded-xl px-3 py-2">{error}</p>}

              <div className="flex gap-2 pt-1">
                <button type="submit"
                  className="flex-1 bg-primary text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm shadow-sm shadow-primary/30">
                  <Calculator className="w-4 h-4" />
                  Calcular
                </button>
                <button type="button" onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-border text-muted-foreground hover:bg-secondary transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" /> Interpretação (Percentil)
            </p>
            <div className="space-y-1.5">
              {[
                { label: 'Muito abaixo', range: '< P3', color: 'bg-red-500' },
                { label: 'Abaixo', range: 'P3 – P9', color: 'bg-orange-400' },
                { label: 'Normal', range: 'P10 – P90', color: 'bg-green-500' },
                { label: 'Acima', range: 'P91 – P97', color: 'bg-yellow-400' },
                { label: 'Muito acima', range: '> P97', color: 'bg-red-500' },
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

        {/* Results */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {result && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">

                {/* Summary */}
                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Lactente avaliado</p>
                      <p className="text-2xl font-extrabold text-foreground">
                        {result.ageMonths} <span className="text-base font-normal">meses</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {result.len} cm · {result.w} kg{result.hc ? ` · PC: ${result.hc} cm` : ''}
                        {' · '}{result.sex === 'M' ? 'Masculino' : 'Feminino'}
                      </p>
                    </div>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${getWeightCategory(result.weightR.percentile).bg}`}>
                      {getWeightCategory(result.weightR.percentile).label}
                    </span>
                  </div>
                </div>

                {/* Result cards */}
                <div className={`grid grid-cols-1 sm:grid-cols-${result.hcR ? '4' : '3'} gap-3`}>
                  <ResultCard icon={Ruler} title="Comprimento/Idade" z={result.lengthR.z} percentile={result.lengthR.percentile} />
                  <ResultCard icon={Weight} title="Peso/Idade" z={result.weightR.z} percentile={result.weightR.percentile} category={getWeightCategory(result.weightR.percentile)} />
                  <ResultCard icon={TrendingUp} title="Peso/Comprimento" z={result.wflR.z} percentile={result.wflR.percentile} />
                  {result.hcR && <ResultCard icon={Activity} title="PC/Idade" z={result.hcR.z} percentile={result.hcR.percentile} />}
                </div>

                {/* Charts */}
                <InfantChart type="length" sex={result.sex} ageMon={result.ageMonths} value={result.len} label="Comprimento por Idade" unit="cm" yLabel="Comp. (cm)" />
                <InfantChart type="weight" sex={result.sex} ageMon={result.ageMonths} value={result.w} label="Peso por Idade" unit="kg" yLabel="Peso (kg)" />
                {result.hcR && <InfantChart type="hc" sex={result.sex} ageMon={result.ageMonths} value={result.hc} label="Perímetro Cefálico por Idade" unit="cm" yLabel="PC (cm)" />}
              </motion.div>
            )}
          </AnimatePresence>

          {!result && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-400" />
              </div>
              <p className="text-sm font-medium text-foreground">Preencha os dados e clique em Calcular</p>
              <p className="text-xs text-muted-foreground mt-1">Comprimento, Peso e Perímetro Cefálico (0–36 meses)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}