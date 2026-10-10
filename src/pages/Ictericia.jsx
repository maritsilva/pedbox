import React, { useState } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AlertTriangle, Plus, Trash2, RotateCcw } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { BILI_SOURCE, NEURO_RISKS, evaluateBilirubin, thresholds } from '@/lib/bilirubin';
import { localDate, localTime } from '@/lib/timeCalculators';

const fresh = () => ({
  date: localDate(),
  time: localTime(),
  total: '',
  direct: '',
  weight: '',
  type: 'serum',
});

const initial = () => ({
  birthDate: '',
  birthTime: '',
  weeks: '38',
  days: '0',
  birthWeight: '',
});

const labels = {
  exchange: 'Limiar de exsanguineotransfusão atingido',
  escalation: 'Limiar de escalonamento atingido',
  photo: 'Limiar de fototerapia atingido',
  below: 'Abaixo do limiar de fototerapia',
  screening: 'Medição transcutânea: triagem',
};

const number = (n, d = 1) => n.toLocaleString('pt-BR', { maximumFractionDigits: d, minimumFractionDigits: d });

export default function Ictericia() {
  const [form, setForm] = useState(initial);
  const [readings, setReadings] = useState([fresh()]);
  const [riskChoice, setRiskChoice] = useState('');
  const [risks, setRisks] = useState([]);
  const [context, setContext] = useState([]);
  const [result, setResult] = useState(null);
  const [rising, setRising] = useState(false);

  const clear = () => setResult(null);

  const set = (key, value) => {
    setForm(f => ({ ...f, [key]: value }));
    clear();
  };

  const edit = (index, key, value) => {
    setReadings(rows => rows.map((r, i) => (i === index ? { ...r, [key]: value } : r)));
    clear();
  };

  const toggle = (value, list, setList) => {
    setList(list.includes(value) ? list.filter(x => x !== value) : [...list, value]);
    clear();
  };

  const calculate = e => {
    e.preventDefault();
    if (riskChoice === 'yes' && !risks.length) {
      setResult({ error: 'Selecione ao menos um fator de neurotoxicidade.' });
      return;
    }
    setResult(
      evaluateBilirubin({
        ...form,
        unit: 'mg/dL',
        risk: riskChoice === '' ? null : riskChoice === 'yes',
        readings,
        risingUnderPhoto: rising,
      })
    );
  };

  const latest = result && !result.error ? result.results.at(-1) : null;
  const chart = latest
    ? Array.from({ length: 336 }, (_, i) => ({
        hours: i + 1,
        ...thresholds(result.weeks, i + 1, result.risk, rising),
      }))
    : [];

  return (
    <main className="clinical-page max-w-5xl mx-auto px-4 pb-16 space-y-6">
      <PageHeader
        kind="calculator"
        eyebrow="Neonatologia · Diretriz AAP 2022"
        title="Icterícia Neonatal"
        description="Avaliação de bilirrubina por horas de vida e comparação com os limiares de fototerapia e exsanguineotransfusão (≥ 35 semanas)."
      />

      {/* Clinical Guidance Box */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm space-y-2 text-amber-900">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p>
              <strong>Atenção:</strong> Utilizar a <strong>Bilirrubina Total</strong> para as curvas da AAP (não subtrair a fração direta).
              A idade gestacional define a curva correspondente.
            </p>
            <p className="text-xs text-amber-800">
              Sinais de alarme (letargia acentuada, recusa alimentar importante, hipotonia ou hipertonia, choro estridente, apneia ou convulsão) exigem avaliação médica emergencial imediata, independentemente do valor da bilirrubina.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={calculate} className="space-y-6">
        {/* 1. Dados de Nascimento */}
        <section className="clinical-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-[#164B73]">1. Nascimento e Idade Gestacional</h2>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              ≥ 35 semanas
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="field-label">
              Data de nascimento *
              <input
                required
                type="date"
                value={form.birthDate}
                onChange={e => set('birthDate', e.target.value)}
              />
            </label>
            <label className="field-label">
              Hora de nascimento *
              <input
                required
                type="time"
                value={form.birthTime}
                onChange={e => set('birthTime', e.target.value)}
              />
            </label>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <label className="field-label">
              Idade Gestacional: Semanas *
              <select
                aria-label="IG: semanas"
                value={form.weeks}
                onChange={e => set('weeks', e.target.value)}
              >
                {[35, 36, 37, 38, 39, 40, 41, 42].map(w => (
                  <option key={w} value={w}>
                    {w} semanas
                  </option>
                ))}
              </select>
            </label>

            <label className="field-label">
              Dias adicionais
              <select
                aria-label="IG: dias"
                value={form.days}
                onChange={e => set('days', e.target.value)}
              >
                {[0, 1, 2, 3, 4, 5, 6].map(d => (
                  <option key={d} value={d}>
                    {d} dias
                  </option>
                ))}
              </select>
            </label>

            <label className="field-label">
              Peso de nascimento (g, opcional)
              <input
                type="number"
                min="0"
                placeholder="Ex.: 3200"
                value={form.birthWeight}
                onChange={e => set('birthWeight', e.target.value)}
              />
            </label>
          </div>
        </section>

        {/* 2. Exames de Bilirrubina (Simplificado) */}
        <section className="clinical-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-[#164B73]">2. Exame de Bilirrubina</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Informe o valor da Bilirrubina Total em mg/dL (data e hora da coleta preenchidas automaticamente)
              </p>
            </div>
            <span className="text-xs font-semibold text-[#164B73] bg-[#EAF4FA] px-2.5 py-1 rounded-full">
              mg/dL
            </span>
          </div>

          <div className="space-y-4">
            {readings.map((row, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-[#164B73]">
                    {readings.length === 1 ? 'Dosagem de Bilirrubina' : `Coleta ${index + 1}`}
                  </span>
                  {readings.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setReadings(rows => rows.filter((_, i) => i !== index));
                        clear();
                      }}
                      className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 hover:underline"
                    >
                      <Trash2 size={13} /> Remover
                    </button>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-3 items-end">
                  <div className="sm:col-span-1">
                    <label className="field-label">
                      Bilirrubina Total (mg/dL) *
                      <input
                        required
                        type="text"
                        inputMode="decimal"
                        placeholder="Ex.: 12.5"
                        value={row.total}
                        onChange={e => edit(index, 'total', e.target.value)}
                        className="text-base font-bold text-slate-800"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="field-label">
                      Data da coleta
                      <input
                        type="date"
                        value={row.date}
                        onChange={e => edit(index, 'date', e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="field-label">
                      Hora da coleta
                      <input
                        type="time"
                        value={row.time}
                        onChange={e => edit(index, 'time', e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-2">
            <button
              type="button"
              disabled={readings.length >= 10}
              onClick={() => {
                setReadings(rows => [...rows, fresh()]);
                clear();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#164B73] bg-[#EAF4FA] hover:bg-[#d6eaf5] transition-colors"
            >
              <Plus size={14} /> Adicionar outra coleta seriada
            </button>
            <span className="text-[11px] text-slate-400">
              Horas de vida calculadas a partir da data/hora de nascimento
            </span>
          </div>
        </section>

        {/* 3. Fatores de Neurotoxicidade */}
        <section className="clinical-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-[#164B73]">3. Fatores de Risco de Neurotoxicidade</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Critérios da AAP 2022 que reduzem o limiar de fototerapia e exsanguineotransfusão
            </p>
          </div>

          <label className="field-label">
            Há fatores de risco de neurotoxicidade identificados? *
            <select
              required
              value={riskChoice}
              onChange={e => {
                setRiskChoice(e.target.value);
                setRisks([]);
                clear();
              }}
            >
              <option value="">Selecione após avaliação clínica</option>
              <option value="no">Não identificados (Risco habitual)</option>
              <option value="yes">Sim, há fatores de risco (Curva de maior risco)</option>
            </select>
          </label>

          {riskChoice === 'yes' && (
            <div className="space-y-2.5 p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl">
              <span className="text-xs font-bold text-rose-800 block mb-1">
                Selecione os fatores presentes:
              </span>
              {NEURO_RISKS.map(([id, label]) => (
                <label key={id} className="flex items-start gap-2.5 text-xs text-rose-900 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={risks.includes(id)}
                    onChange={() => toggle(id, risks, setRisks)}
                    className="mt-0.5 accent-[#164B73]"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          )}

          <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={rising}
              onChange={e => {
                setRising(e.target.checked);
                clear();
              }}
              className="mt-0.5 accent-[#164B73]"
            />
            <span>
              Bilirrubina aumentando a despeito da fototerapia intensiva (usar curva de escalonamento com risco).
            </span>
          </label>

          <details className="pt-2 text-xs">
            <summary className="cursor-pointer font-medium text-slate-600 hover:text-[#164B73]">
              Contexto clínico e aleitamento (opcional)
            </summary>
            <div className="space-y-2 mt-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200">
              {[
                'Dificuldade de aleitamento / perda ponderal acentuada',
                'Cefalo-hematoma ou equimoses extensas',
                'Irmão prévio com necessidade de fototerapia',
                'Pequeno para a Idade Gestacional (PIG)',
              ].map(item => (
                <label key={item} className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={context.includes(item)}
                    onChange={() => toggle(item, context, setContext)}
                    className="mt-0.5 accent-[#164B73]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </details>
        </section>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#164B73] hover:bg-[#20A6A6] text-white font-bold text-sm shadow-sm transition-all"
          >
            Avaliar e Calcular Limiares
          </button>
          <button
            type="button"
            onClick={() => {
              setForm(initial());
              setReadings([fresh()]);
              setRiskChoice('');
              setRisks([]);
              setContext([]);
              setRising(false);
              clear();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-semibold text-sm transition-colors"
          >
            <RotateCcw size={15} /> Limpar
          </button>
        </div>
      </form>

      {/* Error message */}
      {result?.error && (
        <div role="alert" className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-semibold">
          {result.error}
        </div>
      )}

      {/* Results Section */}
      {latest && (
        <section aria-label="Resultado da bilirrubina" className="space-y-6 pt-4">
          <div
            className={`clinical-card p-5 sm:p-6 rounded-2xl border shadow-sm ${
              ['exchange', 'escalation'].includes(latest.status)
                ? 'border-red-400 bg-red-50/80 text-red-900'
                : latest.status === 'photo'
                ? 'border-amber-400 bg-amber-50/70 text-amber-900'
                : 'border-emerald-300 bg-emerald-50/60 text-emerald-950'
            }`}
          >
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-semibold">
              <span>Última coleta · {number(latest.hours, 1)} horas de vida</span>
              <span className="uppercase tracking-wider">AAP 2022</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-2">{labels[latest.status]}</h2>

            {latest.status === 'exchange' || latest.status === 'escalation' ? (
              <p className="text-sm text-red-800 font-semibold mt-2.5">
                Emergência neonatal: indicação imediata de fototerapia intensiva máxima, avaliação em UTI neonatal e preparo para escalonamento / exsanguineotransfusão.
              </p>
            ) : latest.status === 'photo' ? (
              <p className="text-sm mt-2.5">
                A bilirrubina total atingiu o limiar formal da Academia Americana de Pediatria (AAP 2022) para início de <strong>Fototerapia Intensiva</strong>.
              </p>
            ) : (
              <p className="text-sm mt-2.5">
                Valor abaixo do limiar de fototerapia. Margem de segurança: <strong>{number(latest.delta)} mg/dL</strong> até o limiar de tratamento.
              </p>
            )}

            {/* Thresholds Cards */}
            <div className="grid sm:grid-cols-3 gap-3.5 mt-5">
              <div className="bg-white/90 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Limiar de Fototerapia</p>
                <p className="text-lg font-bold text-[#164B73] mt-0.5">{number(Number(latest.photo))} mg/dL</p>
              </div>
              <div className="bg-white/90 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Escalonamento de Cuidados</p>
                <p className="text-lg font-bold text-amber-600 mt-0.5">{number(Number(latest.escalation))} mg/dL</p>
              </div>
              <div className="bg-white/90 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <p className="text-xs text-slate-500 font-medium">Exsanguineotransfusão</p>
                <p className="text-lg font-bold text-red-600 mt-0.5">{number(Number(latest.exchange))} mg/dL</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-3.5">
              Comparação baseada em {result.weeks} semanas de IG para {number(latest.hours, 1)}h de vida.
            </p>
          </div>

          {/* AAP Curves Chart */}
          <div className="clinical-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-[#164B73]">Curvas de Tratamento (AAP 2022)</h3>
            <div role="img" aria-label="Gráfico de bilirrubina por horas de vida" className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chart} margin={{ top: 10, right: 15, bottom: 15, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hours" type="number" domain={[0, 168]} name="Horas de vida" />
                  <YAxis domain={[0, 'auto']} unit=" mg/dL" width={65} />
                  <Tooltip formatter={val => `${val} mg/dL`} labelFormatter={h => `${h} horas de vida`} />
                  <Legend />
                  <Line isAnimationActive={false} dataKey="photo" name="Fototerapia" dot={false} stroke="#2563eb" strokeWidth={2} />
                  <Line isAnimationActive={false} dataKey="escalation" name="Escalonamento" dot={false} stroke="#d97706" strokeWidth={1.8} strokeDasharray="4 4" />
                  <Line isAnimationActive={false} dataKey="exchange" name="Exsanguineotransfusão" dot={false} stroke="#dc2626" strokeWidth={2} />
                  <Scatter isAnimationActive={false} data={result.results} dataKey="bt" name="Dosagem do Paciente" fill="#0f766e" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      )}

      {/* References Footer */}
      <footer className="text-xs text-slate-400 space-y-1.5 pt-4 border-t border-slate-200">
        <p>
          <strong>Referência clínica:</strong> American Academy of Pediatrics (AAP 2022).{' '}
          <a className="underline hover:text-slate-600" href={BILI_SOURCE} target="_blank" rel="noreferrer">
            Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation
          </a>.
        </p>
        <p>
          A ferramenta aplica estritamente os limiares tabelados pela AAP. Decisões clínicas de alta, internação ou terapêutica dependem de avaliação médica individualizada.
        </p>
      </footer>
    </main>
  );
}
