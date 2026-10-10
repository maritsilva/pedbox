import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, Star, TrendingUp, RotateCcw, Info, Activity, CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';
import { CartesianGrid, Line, ReferenceLine, ResponsiveContainer, Scatter, ComposedChart, Tooltip, XAxis, YAxis } from 'recharts';
import PageHeader from '@/components/PageHeader';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { request } from '@/api/services';
import { GROWTH_REFERENCES, GROWTH_FORMATS, BONE_AGE_METHODS, referenceLabel, specialistAllowed } from '@/lib/growthOptions';
import { chartSeries } from '@/lib/rcpchGrowth';
import { localDate } from '@/lib/growthMeasurements';

function getBirthDateFromAge(years, months, measureDate) {
  const y = parseInt(years, 10) || 0;
  const m = parseInt(months, 10) || 0;
  if (!years && !months && y === 0 && m === 0) return '';
  const refDate = measureDate ? new Date(`${measureDate}T12:00:00Z`) : new Date();
  const d = new Date(refDate);
  d.setUTCFullYear(d.getUTCFullYear() - y);
  d.setUTCMonth(d.getUTCMonth() - m);
  return d.toISOString().slice(0, 10);
}

function getAgeFromBirthDate(birthDate, measureDate) {
  if (!birthDate) return null;
  const start = new Date(`${birthDate}T12:00:00Z`);
  const end = measureDate ? new Date(`${measureDate}T12:00:00Z`) : new Date();
  if (start > end || isNaN(start.getTime()) || isNaN(end.getTime())) return null;

  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let months = end.getUTCMonth() - start.getUTCMonth();
  let days = end.getUTCDate() - start.getUTCDate();

  if (days < 0) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years: Math.max(0, years), months: Math.max(0, months) };
}

const TYPES = {
  height: { label: 'Estatura', unit: 'cm' },
  weight: { label: 'Peso', unit: 'kg' },
  bmi: { label: 'IMC', unit: 'kg/m²' },
  ofc: { label: 'Perímetro cefálico', unit: 'cm' },
};

const format = value => value == null ? '—' : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value);
const initialForm = () => ({
  birthDate: '',
  measureDate: localDate(),
  sex: 'M',
  height: '',
  weight: '',
  gestationWeeks: 40,
  gestationDays: 0,
  measurement: 'combined',
  value: '',
  diagnosis: 'none',
  boneAge: '',
  boneAgeType: '',
});
const displayDate = value => value ? value.split('-').reverse().join('/') : '—';

/** Classificação Nutricional Pediátrica (OMS / SISVAN / SBP) */
function getNutritionalDiagnosis({ type, age, z, percentile }) {
  if (z == null && percentile == null) return null;

  if (type === 'bmi') {
    // 0 a 5 anos (menores de 60 meses)
    if (age != null && age < 5) {
      if (z != null) {
        if (z < -3) return { label: 'Magreza acentuada', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Investigar desnutrição primária ou secundária grave. Avaliar perdas, técnica alimentar e suporte nutricional imediato.' };
        if (z < -2) return { label: 'Magreza', zScore: z, badge: 'bg-amber-50 text-amber-700 border-amber-200', conduta: 'Avaliar curva de ganho de peso, aceitação alimentar e investigar infecções de repetição ou má absorção.' };
        if (z <= 1) return { label: 'Eutrofia (Peso adequado)', zScore: z, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', conduta: 'Estado nutricional normal. Manter incentivo ao aleitamento/alimentação saudável e puericultura de rotina.' };
        if (z <= 2) return { label: 'Risco de sobrepeso', zScore: z, badge: 'bg-amber-50 text-amber-700 border-amber-200', conduta: 'Atenção a hábitos alimentares da família, ultraprocessados e incentivo a brincadeiras ativas e movimento livre.' };
        if (z <= 3) return { label: 'Sobrepeso', zScore: z, badge: 'bg-orange-50 text-orange-700 border-orange-200', conduta: 'Reeducação alimentar familiar, evitar bebidas açucaradas, restringir tempo de tela (< 2 anos: zero; 2–5 anos: máx. 1h/dia).' };
        return { label: 'Obesidade', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Rastrear comorbidades associadas, avaliar histórico gestacional e familiar, acompanhamento multidisciplinar pediátrico.' };
      }
    }

    // 5 a 19 anos
    if (z != null) {
      if (z < -3) return { label: 'Magreza acentuada', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Investigar transtornos alimentares, doenças consumptivas crônicas ou desnutrição grave. Encaminhar para acompanhamento intensivo.' };
      if (z < -2) return { label: 'Magreza', zScore: z, badge: 'bg-amber-50 text-amber-700 border-amber-200', conduta: 'Avaliar ingestão calórica e de micronutrientes, hábitos familiares e descartar comorbidades de base.' };
      if (z <= 1) return { label: 'Eutrofia (Peso adequado)', zScore: z, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', conduta: 'Estado nutricional adequado. Incentivar manutenção de estilo de vida ativo e dieta balanceada in natura.' };
      if (z <= 2) return { label: 'Sobrepeso', zScore: z, badge: 'bg-orange-50 text-orange-700 border-orange-200', conduta: 'Estimular alimentação baseada em alimentos in natura. Meta de 60 min diários de atividade física moderada a vigorosa. Telas ≤ 2h/dia.' };
      if (z <= 3) return { label: 'Obesidade', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Rastreio clínico e laboratorial: perfil lipídico, glicemia de jejum, transaminases e aferição de PA. Plano familiar de mudança de hábitos.' };
      return { label: 'Obesidade grave', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Rastreio completo de síndrome metabólica, esteatose hepática e risco cardiovascular. Acompanhamento conjunto com endocrinologia/nutrição.' };
    }

    // Fallback por percentil
    if (percentile != null) {
      if (percentile < 3) return { label: 'Baixo Peso (P < 3)', badge: 'bg-amber-50 text-amber-700 border-amber-200', conduta: 'Avaliar ingesta calórica e investigar causas secundárias.' };
      if (percentile <= 85) return { label: 'Eutrofia (P3 a P85)', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', conduta: 'Peso adequado para a estatura e idade.' };
      if (percentile <= 97) return { label: 'Sobrepeso (P85 a P97)', badge: 'bg-orange-50 text-orange-700 border-orange-200', conduta: 'Orientar hábitos saudáveis e redução de sedentarismo.' };
      return { label: 'Obesidade (P > 97)', badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Investigar comorbidades e iniciar conduta multidisciplinar.' };
    }
  }

  if (type === 'height') {
    if (z != null) {
      if (z < -3) return { label: 'Muito baixa estatura para a idade', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Investigar causas endócrinas, genéticas (ex.: Turner), doenças crônicas ou retardo constitucional. Calcular altura-alvo.' };
      if (z < -2) return { label: 'Baixa estatura para a idade', zScore: z, badge: 'bg-amber-50 text-amber-700 border-amber-200', conduta: 'Calcular velocidade de crescimento, avaliar canal de crescimento familiar e idade óssea.' };
      return { label: 'Estatura adequada para a idade', zScore: z, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', conduta: 'Crescimento estatural dentro da faixa de normalidade para idade e sexo.' };
    }
  }

  if (type === 'weight') {
    if (z != null) {
      if (z < -3) return { label: 'Muito baixo peso para a idade', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Investigação clínica de desnutrição e acompanhamento próximo do ganho ponderal.' };
      if (z < -2) return { label: 'Baixo peso para a idade', zScore: z, badge: 'bg-amber-50 text-amber-700 border-amber-200', conduta: 'Avaliar histórico alimentar e curva de crescimento prévia.' };
      if (z <= 2) return { label: 'Peso adequado para a idade', zScore: z, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', conduta: 'Peso dentro do esperado para a faixa etária.' };
      return { label: 'Peso elevado para a idade', zScore: z, badge: 'bg-orange-50 text-orange-700 border-orange-200', conduta: 'Avaliar IMC para estatura para confirmação de sobrepeso/obesidade.' };
    }
  }

  if (type === 'ofc') {
    if (z != null) {
      if (z < -2) return { label: 'Microcefalia (PC < -2 Z)', zScore: z, badge: 'bg-rose-50 text-rose-700 border-rose-200', conduta: 'Avaliar fechamento prematuro de suturas (craniossinostose), infecções congênitas e marco do neurodesenvolvimento.' };
      if (z <= 2) return { label: 'Normocefalia (PC adequado)', zScore: z, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', conduta: 'Perímetro cefálico adequado para a idade.' };
      return { label: 'Macrocefalia (PC > +2 Z)', zScore: z, badge: 'bg-orange-50 text-orange-700 border-orange-200', conduta: 'Avaliar histórico familiar (macrocefalia benigna), sinais de hipertensão intracraniana e fontanela.' };
    }
  }

  return null;
}

function GrowthPlot({ rows, type, sex, reference, diagnosis, formatChoice, custom, isSds, mode, zoom, monochrome }) {
  const [loaded, setLoaded] = useState({ key: '', series: [], error: '' });
  const key = `${reference}/${sex}/${type}/${diagnosis}/${formatChoice}/${custom}/${isSds}`;

  useEffect(() => {
    const controller = new AbortController();
    request(`/growth/charts?reference=${reference}&sex=${sex}&type=${type}&diagnosis=${diagnosis}&format=${formatChoice}&custom=${encodeURIComponent(custom)}&isSds=${isSds}`, { signal: controller.signal })
      .then(data => { if (!controller.signal.aborted) setLoaded({ key, series: chartSeries(data, sex, type), error: '' }); })
      .catch(e => { if (!controller.signal.aborted) setLoaded({ key, series: [], error: e.message }); });
    return () => controller.abort();
  }, [key, reference, sex, type, diagnosis, formatChoice, custom, isSds]);

  const series = loaded.key === key ? loaded.series : [];
  const points = rows.filter(r => r.scores?.[type]?.z != null).map(r => ({ age: r.age, value: mode === 'z' ? r.scores[type].z : r[type] }));
  const allAges = [...series.flatMap(c => c.data.map(p => p.age)), ...points.map(p => p.age)];
  const low = allAges.length ? Math.min(...allAges) : 0, high = allAges.length ? Math.max(...allAges) : (reference === 'who' ? 19 : 20);
  const domain = zoom && points.length ? [Math.max(low, Math.min(...points.map(p => p.age)) - 1), Math.max(...points.map(p => p.age)) + 1] : [low, high];
  const vals = mode === 'z' ? [-3, 3, ...points.map(p => p.value)] : [...series.flatMap(c => c.data.map(p => p.value)), ...points.map(p => p.value)];
  const min = vals.length ? Math.min(...vals) : 0, max = vals.length ? Math.max(...vals) : 1, pad = Math.max((max - min) * 0.08, 0.5);

  if (loaded.key !== key) {
    return (
      <div className="growth-empty flex flex-col items-center justify-center min-h-[360px]" role="status">
        <div className="w-8 h-8 border-3 border-primary/20 border-t-primary rounded-full animate-spin mb-3" />
        <p className="font-semibold text-primary">Carregando curvas de {reference === 'who' ? 'OMS/WHO' : 'CDC'}…</p>
        <span className="text-xs text-muted-foreground mt-1">Sincronizando coordenadas com o motor digital RCPCH</span>
      </div>
    );
  }

  if (loaded.error) {
    return (
      <div className="growth-empty border-red-200 bg-red-50 text-red-800" role="alert">
        <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-red-500" />
        <p className="font-semibold">{loaded.error}</p>
        <p className="text-xs mt-1 text-red-700">As curvas não foram substituídas por outra referência.</p>
      </div>
    );
  }

  if (!series.length) {
    return (
      <div className="growth-empty">
        <Info className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
        <p>Não há curvas para esta medida na referência selecionada.</p>
      </div>
    );
  }

  return (
    <div className="growth-plot" role="img" aria-label={`Gráfico de ${TYPES[type].label}, ${mode === 'z' ? 'escore Z' : 'percentis'} ${reference.toUpperCase()}. ${rows.length} medições. Valores na tabela abaixo.`}>
      <ResponsiveContainer width="100%" height={410}>
        <ComposedChart margin={{ top: 20, right: 20, bottom: 25, left: 0 }}>
          <CartesianGrid stroke="#e7edf4" strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="age"
            domain={domain}
            allowDataOverflow
            tick={{ fontSize: 11 }}
            tickFormatter={format}
            label={{ value: 'Idade corrigida (anos)', position: 'insideBottom', offset: -5, fontSize: 11 }}
          />
          <YAxis
            type="number"
            dataKey="value"
            domain={[Math.floor(min - pad), Math.ceil(max + pad)]}
            width={48}
            tick={{ fontSize: 11 }}
            label={{ value: mode === 'z' ? 'Escore Z (SDS)' : TYPES[type].unit, angle: -90, position: 'insideLeft', fontSize: 11 }}
          />
          <Tooltip
            formatter={(v, n) => [format(Number(v)), n]}
            labelFormatter={v => `${format(Number(v))} anos`}
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', border: '1px solid #CBD5E1', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
          />
          {mode === 'z'
            ? [-3, -2, -1, 0, 1, 2, 3].map(z => (
                <ReferenceLine
                  key={z}
                  y={z}
                  stroke={z === 0 ? '#164B73' : z === -2 || z === 2 ? '#E11D48' : '#c7d4e2'}
                  strokeDasharray={z === 0 ? '' : '4 4'}
                  strokeWidth={z === 0 ? 1.5 : 1}
                />
              ))
            : series.map(c => (
                <Line
                  key={c.id}
                  data={c.data}
                  dataKey="value"
                  name={isSds ? `${c.sds} Z` : `P${c.centile}`}
                  type="linear"
                  dot={false}
                  stroke={monochrome ? '#617080' : c.centile === 50 ? '#164B73' : '#91adcb'}
                  strokeWidth={c.centile === 50 ? 2.5 : 1.2}
                  strokeDasharray={c.centile === 50 ? '' : '5 3'}
                  isAnimationActive={false}
                />
              ))}
          <Scatter data={points} name="Medições" fill="#20A6A6" isAnimationActive={false} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="growth-legend">
        {mode === 'centiles' && [...new Set(series.map(c => isSds ? `${c.sds} Z` : `P${c.centile}`))].map(label => (
          <span key={label}>{label}</span>
        ))}
        <strong className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#20A6A6] inline-block" />● Medições</strong>
      </div>
    </div>
  );
}

export default function IMC() {
  const [reference, setReference] = useState('who');
  const [formatChoice, setFormatChoice] = useState('three-percent-centiles');
  const [customInput, setCustomInput] = useState('3;10;25;50;75;90;97');
  const [custom, setCustom] = useState('3;10;25;50;75;90;97');
  const [isSds, setIsSds] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [ageMode, setAgeMode] = useState('age'); // 'age' | 'birthDate'
  const [ageYears, setAgeYears] = useState('');
  const [ageMonths, setAgeMonths] = useState('');
  const [rows, setRows] = useState([]);
  const [type, setType] = useState('bmi');
  const [mode, setMode] = useState('centiles');
  const [zoom, setZoom] = useState(false);
  const [monochrome, setMonochrome] = useState(false);
  const [error, setError] = useState('');
  const [resetPending, setResetPending] = useState(false);
  const { isFavorite, toggleFavorite } = usePageFavorites();

  const sorted = [...rows].sort((a, b) => a.age - b.age);
  const last = sorted.filter(row => row.scores?.[type]?.z != null).at(-1);

  const set = (key, value) => {
    setForm(f => ({ ...f, [key]: value }));
    setError('');
  };

  // Preview dinâmico de IMC quando peso e altura são digitados
  const liveBmiPreview = useMemo(() => {
    if (form.measurement !== 'combined') return null;
    const h = Number(String(form.height).replace(',', '.'));
    const w = Number(String(form.weight).replace(',', '.'));
    if (h > 30 && h < 250 && w > 0.5 && w < 300) {
      const bmiVal = w / ((h / 100) ** 2);
      return bmiVal.toFixed(2);
    }
    return null;
  }, [form.measurement, form.height, form.weight]);

  async function submit(event) {
    event.preventDefault();
    try {
      let birthDateToUse = form.birthDate;
      if (ageMode === 'age') {
        const y = parseInt(ageYears, 10);
        const m = parseInt(ageMonths, 10);
        if (isNaN(y) && isNaN(m)) {
          throw new Error('Informe a idade do paciente (anos e/ou meses).');
        }
        birthDateToUse = getBirthDateFromAge(ageYears, ageMonths, form.measureDate);
        if (!birthDateToUse) {
          throw new Error('Informe uma idade válida para o paciente.');
        }
      } else {
        if (!birthDateToUse) throw new Error('Informe a data de nascimento do paciente.');
      }

      if (!form.measureDate) throw new Error('Informe a data da medição.');
      if (form.measureDate < birthDateToUse) throw new Error('A data da medição deve ser posterior à data de nascimento.');
      if (rows.some(r => r.date === form.measureDate && (r.measurement || 'combined') === form.measurement)) {
        throw new Error('Já existe uma medição nesta data. Remova a anterior para substituí-la.');
      }
      setBusy(true);
      const number = value => /^\d+(?:[.,]\d+)?$/.test(String(value).trim()) ? Number(String(value).trim().replace(',', '.')) : NaN;
      const height = number(form.height), weight = number(form.weight);
      if (form.measurement === 'combined' && (!Number.isFinite(height) || !Number.isFinite(weight))) {
        throw new Error('Informe peso e altura válidos.');
      }
      const body = {
        reference,
        sex: form.sex,
        birthDate: birthDateToUse,
        measureDate: form.measureDate,
        gestationWeeks: form.gestationWeeks,
        gestationDays: form.gestationDays,
        measurement: form.measurement,
        diagnosis: form.diagnosis,
        ...(form.measurement === 'combined' ? { height, weight } : { value: number(form.value) }),
        ...(form.boneAge ? { boneAge: number(form.boneAge), boneAgeType: form.boneAgeType } : {}),
      };
      const result = await request('/growth/measurements', { method: 'POST', body });
      set('birthDate', birthDateToUse);
      setType(form.measurement === 'combined' ? 'bmi' : form.measurement);
      setRows(previous => [...previous, result]);
      setError('');
      setResetPending(false);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    if (rows.length && !resetPending) {
      setResetPending(true);
      return;
    }
    setRows([]);
    setForm(initialForm());
    setAgeYears('');
    setAgeMonths('');
    setError('');
    setResetPending(false);
  }

  // Diagnóstico nutricional calculado da última medição
  const diagnosisInfo = useMemo(() => {
    if (!last || !last.scores?.[type]) return null;
    return getNutritionalDiagnosis({
      type,
      age: last.age,
      z: last.scores[type].z,
      percentile: last.scores[type].percentile,
      reference,
    });
  }, [last, type, reference]);

  return (
    <div className="clinical-page growth-workspace">
      <PageHeader
        kind="calculator"
        eyebrow="Acompanhamento do crescimento"
        title="IMC e curvas de crescimento"
        description="Avalie o estado nutricional infantil, calcule escore Z e acompanhe a evolução de estatura, peso e IMC com as curvas oficiais OMS e CDC."
      >
        <button
          className="growth-favorite"
          aria-label="Favoritar IMC"
          aria-pressed={isFavorite('/imc')}
          onClick={() => toggleFavorite('/imc')}
        >
          <Star size={16} fill={isFavorite('/imc') ? 'currentColor' : 'none'} />
          Favoritos
        </button>
      </PageHeader>

      <div className="review-note mb-5 flex items-start gap-3 bg-sky-50/70 border border-sky-200 text-sky-900 rounded-xl p-3.5">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              Cálculos e percentis oficiais sincronizados via motor digital RCPCH (OMS 2006/2007 e CDC 2000).
              Privacidade estrita: nenhuma informação identificável é enviada; medições mantidas apenas durante a sessão atual.
            </p>
          </div>

          <div className="growth-workbench">
            <aside className="growth-entry clinical-card">
              <div className="growth-panel-title">
                <div>
                  <h2>Nova medição</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Parâmetros antropométricos</p>
                </div>
                <TrendingUp size={22} className="text-[#20A6A6]" />
              </div>

              <form onSubmit={submit} noValidate>
                <fieldset disabled={busy} className="space-y-4">
                  <label className="field-label">
                    Diagnóstico para curvas específicas
                    <select
                      value={form.diagnosis}
                      disabled={rows.length > 0}
                      onChange={e => {
                        set('diagnosis', e.target.value);
                        if (!specialistAllowed(reference, e.target.value)) {
                          setReference('cdc');
                        }
                      }}
                    >
                      <option value="none">Sem diagnóstico específico informado</option>
                      <option value="turner">Turner — diagnóstico confirmado</option>
                      <option value="trisomy-21">Trissomia 21 — diagnóstico confirmado</option>
                    </select>
                  </label>

                  <label className="field-label">
                    Referência
                    <select
                      aria-label="Referência de crescimento"
                      value={reference}
                      disabled={rows.length > 0}
                      onChange={e => {
                        const ref = e.target.value;
                        setReference(ref);
                        setError('');
                        if (ref === 'turner') {
                          setForm(f => ({ ...f, sex: 'F', measurement: 'height' }));
                          setType('height');
                        }
                      }}
                    >
                      {GROWTH_REFERENCES.map(([value, label]) => (
                        <option key={value} value={value} disabled={!specialistAllowed(value, form.diagnosis)}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/90 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#164B73]">Idade do Paciente</span>
                      <div className="inline-flex p-0.5 bg-slate-200/80 rounded-lg text-xs font-semibold">
                        <button
                          type="button"
                          disabled={rows.length > 0}
                          onClick={() => {
                            setAgeMode('age');
                            if (form.birthDate) {
                              const a = getAgeFromBirthDate(form.birthDate, form.measureDate);
                              if (a) {
                                setAgeYears(String(a.years));
                                setAgeMonths(String(a.months));
                              }
                            }
                          }}
                          className={`px-2.5 py-1 rounded-md transition-all ${
                            ageMode === 'age'
                              ? 'bg-white text-[#164B73] shadow-xs font-bold'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          Por Idade
                        </button>
                        <button
                          type="button"
                          disabled={rows.length > 0}
                          onClick={() => {
                            setAgeMode('birthDate');
                            if ((ageYears || ageMonths) && !form.birthDate) {
                              const b = getBirthDateFromAge(ageYears, ageMonths, form.measureDate);
                              set('birthDate', b);
                            }
                          }}
                          className={`px-2.5 py-1 rounded-md transition-all ${
                            ageMode === 'birthDate'
                              ? 'bg-white text-[#164B73] shadow-xs font-bold'
                              : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          Por Data de Nasc.
                        </button>
                      </div>
                    </div>

                    {ageMode === 'age' ? (
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2.5">
                          <div>
                            <label className="text-[11px] font-medium text-slate-500 block mb-1">
                              Anos
                            </label>
                            <input
                              type="number"
                              min="0"
                              max="20"
                              placeholder="Ex.: 5"
                              value={ageYears}
                              disabled={rows.length > 0}
                              onChange={e => {
                                const y = e.target.value;
                                setAgeYears(y);
                                const b = getBirthDateFromAge(y, ageMonths, form.measureDate);
                                set('birthDate', b);
                              }}
                              className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#20A6A6]"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-medium text-slate-500 block mb-1">
                              Meses (0 a 11)
                            </label>
                            <input
                              type="number"
                              min="0"
                              max="11"
                              placeholder="Ex.: 4"
                              value={ageMonths}
                              disabled={rows.length > 0}
                              onChange={e => {
                                const m = e.target.value;
                                setAgeMonths(m);
                                const b = getBirthDateFromAge(ageYears, m, form.measureDate);
                                set('birthDate', b);
                              }}
                              className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#20A6A6]"
                            />
                          </div>
                        </div>
                        {form.birthDate && (
                          <p className="text-[11px] text-slate-500 flex items-center gap-1">
                            <span>Data estimada de nascimento:</span>
                            <strong className="text-slate-700">{displayDate(form.birthDate)}</strong>
                          </p>
                        )}
                      </div>
                    ) : (
                      <div>
                        <label className="field-label mb-1">
                          Data de nascimento
                          <input
                            type="date"
                            value={form.birthDate}
                            max={localDate()}
                            disabled={rows.length > 0}
                            onChange={e => {
                              const b = e.target.value;
                              set('birthDate', b);
                              const a = getAgeFromBirthDate(b, form.measureDate);
                              if (a) {
                                setAgeYears(String(a.years));
                                setAgeMonths(String(a.months));
                              }
                            }}
                          />
                        </label>
                        {form.birthDate && (
                          <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                            <span>Idade calculada:</span>
                            <strong className="text-slate-700">
                              {(() => {
                                const a = getAgeFromBirthDate(form.birthDate, form.measureDate);
                                if (!a) return '—';
                                return `${a.years} ${a.years === 1 ? 'ano' : 'anos'} e ${a.months} ${a.months === 1 ? 'mês' : 'meses'}`;
                              })()}
                            </strong>
                          </p>
                        )}
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-200/80">
                      <label className="field-label">
                        Data da medição
                        <input
                          type="date"
                          value={form.measureDate}
                          max={localDate()}
                          onChange={e => {
                            const mDate = e.target.value;
                            set('measureDate', mDate);
                            if (ageMode === 'age' && (ageYears || ageMonths)) {
                              const b = getBirthDateFromAge(ageYears, ageMonths, mDate);
                              set('birthDate', b);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <label className="field-label">
                    Sexo da referência
                    <select
                      value={form.sex}
                      disabled={rows.length > 0}
                      onChange={e => set('sex', e.target.value)}
                    >
                      <option value="M" disabled={reference === 'turner'}>Masculino</option>
                      <option value="F">Feminino</option>
                    </select>
                  </label>

                  {rows.length > 0 && (
                    <p className="text-xs text-muted-foreground bg-slate-50 p-2 rounded border border-slate-200">
                      Referência, nascimento e sexo fixados para não misturar curvas. Use “Novo acompanhamento” para trocar de paciente.
                    </p>
                  )}

                  <div className="growth-form-pair">
                    <label className="field-label">
                      Gestação (semanas)
                      <input
                        type="number"
                        min="22"
                        max="44"
                        value={form.gestationWeeks}
                        disabled={rows.length > 0}
                        onChange={e => set('gestationWeeks', Number(e.target.value))}
                      />
                    </label>
                    <label className="field-label">
                      Dias adicionais
                      <input
                        type="number"
                        min="0"
                        max="6"
                        value={form.gestationDays}
                        disabled={rows.length > 0}
                        onChange={e => set('gestationDays', Number(e.target.value))}
                      />
                    </label>
                  </div>

                  <label className="field-label">
                    Tipo de medição
                    <select
                      value={form.measurement}
                      onChange={e => {
                        set('measurement', e.target.value);
                        setType(e.target.value === 'combined' ? 'bmi' : e.target.value);
                      }}
                    >
                      <option value="combined" disabled={reference === 'turner'}>Peso + altura → IMC calculado</option>
                      {Object.entries(TYPES).map(([key, item]) => (
                        <option key={key} value={key} disabled={reference === 'turner' && key !== 'height'}>
                          {item.label} ({item.unit})
                        </option>
                      ))}
                    </select>
                  </label>

                  {form.measurement === 'combined' ? (
                    <div>
                      <div className="growth-form-pair">
                        <label className="field-label">
                          Altura (cm)
                          <input
                            inputMode="decimal"
                            placeholder="Ex.: 120"
                            value={form.height}
                            onChange={e => set('height', e.target.value)}
                          />
                        </label>
                        <label className="field-label">
                          Peso (kg)
                          <input
                            inputMode="decimal"
                            placeholder="Ex.: 25,5"
                            value={form.weight}
                            onChange={e => set('weight', e.target.value)}
                          />
                        </label>
                      </div>
                      {liveBmiPreview && (
                        <div className="mt-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                          <span>IMC instantâneo:</span>
                          <span className="font-bold">{liveBmiPreview} kg/m²</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <label className="field-label">
                      Valor ({TYPES[form.measurement]?.unit})
                      <input
                        inputMode="decimal"
                        value={form.value}
                        onChange={e => set('value', e.target.value)}
                      />
                    </label>
                  )}

                  <details className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <summary className="text-sm font-semibold text-primary cursor-pointer hover:underline">
                      Idade óssea (opcional)
                    </summary>
                    <div className="space-y-3 mt-3 pt-2 border-t border-slate-200">
                      <label className="field-label">
                        Idade óssea (anos)
                        <input
                          inputMode="decimal"
                          value={form.boneAge}
                          onChange={e => set('boneAge', e.target.value)}
                        />
                      </label>
                      <label className="field-label">
                        Método da idade óssea
                        <select
                          value={form.boneAgeType}
                          onChange={e => set('boneAgeType', e.target.value)}
                        >
                          <option value="">Selecione</option>
                          {BONE_AGE_METHODS.map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </details>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comprimento deitado recomendado antes de 2 anos e estatura em pé a partir de 2 anos.
                  </p>

                  {error && (
                    <p role="alert" className="text-sm font-medium text-red-800 bg-red-50 border border-red-200 rounded-lg p-3">
                      {error}
                    </p>
                  )}

                  <button className="growth-primary" type="submit">
                    <Plus size={17} />
                    {busy ? 'Calculando…' : 'Calcular e adicionar ao gráfico'}
                  </button>

                  <button className="growth-reset" type="button" onClick={reset}>
                    <RotateCcw size={15} />
                    {resetPending ? 'Confirmar: apagar medições' : 'Novo acompanhamento'}
                  </button>

                  {resetPending && (
                    <button
                      type="button"
                      className="text-sm text-primary font-semibold hover:underline block text-center w-full"
                      onClick={() => setResetPending(false)}
                    >
                      Cancelar limpeza
                    </button>
                  )}
                </fieldset>
              </form>

              <div className="growth-help">
                <strong>Outras avaliações e calculadoras</strong>
                <Link to="/alvo-parental">Altura-alvo parental →</Link>
                <Link to="/perimetro-cefalico">Perímetro cefálico →</Link>
                <Link to="/sinais-vitais">Sinais vitais pediátricos →</Link>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  OMS/WHO é a referência padrão adotada pelo Ministério da Saúde e SBP no Brasil. CDC recomendada para acompanhamento longitudinal a partir de 2 anos.
                </p>
              </div>
            </aside>

            <section className="growth-chart-panel clinical-card">
              <div className="growth-chart-tabs" aria-label="Medida do gráfico">
                {Object.entries(TYPES).map(([key, item]) => (
                  <button
                    key={key}
                    disabled={reference === 'turner' && key !== 'height'}
                    aria-pressed={type === key}
                    onClick={() => setType(key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="growth-chart-heading">
                <div>
                  <p className="eyebrow">{referenceLabel(reference)} · {form.sex === 'M' ? 'Masculino' : 'Feminino'}</p>
                  <h2>{TYPES[type].label} por idade</h2>
                </div>
                <span className="growth-session-count">{rows.length} medições</span>
              </div>

              <div className="growth-form-pair mb-4">
                <label className="field-label">
                  Formato das curvas
                  <select
                    value={formatChoice}
                    onChange={e => {
                      setFormatChoice(e.target.value);
                      setIsSds(false);
                    }}
                  >
                    {GROWTH_FORMATS.map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </label>

                {formatChoice === 'custom' && (
                  <label className="field-label">
                    Unidade dos valores
                    <select
                      value={isSds ? 'z' : 'p'}
                      onChange={e => {
                        setIsSds(e.target.value === 'z');
                        const v = e.target.value === 'z' ? '-3;-2;-1;0;1;2;3' : '3;10;25;50;75;90;97';
                        setCustom(v);
                        setCustomInput(v);
                      }}
                    >
                      <option value="p">Percentis</option>
                      <option value="z">Escore Z / SDS</option>
                    </select>
                  </label>
                )}
              </div>

              {formatChoice === 'custom' && (
                <div className="flex gap-2 mb-4">
                  <label className="field-label flex-1">
                    Valores separados por ;
                    <input value={customInput} onChange={e => setCustomInput(e.target.value)} />
                  </label>
                  <button className="filter-toggle self-end" onClick={() => setCustom(customInput)}>
                    Aplicar
                  </button>
                </div>
              )}

              <div className="growth-chart-controls">
                <button aria-pressed={mode === 'centiles'} onClick={() => setMode('centiles')}>
                  Percentis
                </button>
                <button aria-pressed={mode === 'z'} onClick={() => setMode('z')}>
                  Escore Z / SDS
                </button>
                <label>
                  <input
                    type="checkbox"
                    checked={monochrome}
                    onChange={e => setMonochrome(e.target.checked)}
                  />
                  Monocromático
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={zoom}
                    onChange={e => setZoom(e.target.checked)}
                  />
                  Aproximar medições
                </label>
              </div>

              <GrowthPlot
                diagnosis={form.diagnosis}
                formatChoice={formatChoice}
                custom={custom}
                isSds={isSds}
                reference={reference}
                rows={sorted}
                type={type}
                sex={form.sex}
                mode={mode}
                zoom={zoom}
                monochrome={monochrome}
              />

              {!last && (
                <p className="growth-empty">
                  Adicione uma medição no formulário ao lado para plotar o ponto e visualizar o laudo nutricional.
                </p>
              )}

              {last && (
                <div className="space-y-3 mt-4">
                  <div className="growth-summary" role="status">
                    <div>
                      <small>Última medição · {displayDate(last.date)}</small>
                      <strong>{format(last[type])} {TYPES[type].unit}</strong>
                    </div>
                    <div>
                      <small>Percentil</small>
                      <strong>{last.scores[type]?.percentile == null ? '—' : `P${format(last.scores[type].percentile)}`}</strong>
                    </div>
                    <div>
                      <small>Escore Z</small>
                      <strong>{format(last.scores[type]?.z)}</strong>
                    </div>
                  </div>

                  {diagnosisInfo && (
                    <div className="p-4 rounded-xl border bg-card shadow-sm space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-primary" />
                          <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                            Classificação Nutricional Pediátrica
                          </span>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${diagnosisInfo.badge}`}>
                          {diagnosisInfo.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Conduta recomendada: </strong>
                        {diagnosisInfo.conduta}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Percentis e escore Z calculados para a idade decimal e corrigida segundo a referência selecionada ({referenceLabel(reference)}).
              </p>
            </section>
          </div>

          <section className="clinical-card mt-6">
            <div className="growth-panel-title">
              <div>
                <h2>Medições do acompanhamento</h2>
                <span className="text-xs text-muted-foreground">Histórico da sessão atual</span>
              </div>
              <span className="text-xs font-medium text-muted-foreground bg-slate-100 px-2.5 py-1 rounded-full">
                {rows.length} {rows.length === 1 ? 'registro' : 'registros'}
              </span>
            </div>

            {rows.length ? (
              <div className="growth-table-scroll">
                <table className="growth-table">
                  <caption className="sr-only">Valores e percentis de {TYPES[type].label} por data</caption>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Idade (anos)</th>
                      <th>Altura (cm)</th>
                      <th>Peso (kg)</th>
                      <th>IMC (kg/m²)</th>
                      <th>PC (cm)</th>
                      <th>Percentil · {TYPES[type].label}</th>
                      <th>Z</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map(row => (
                      <tr key={row.date + (row.measurement || 'combined')}>
                        <td>{displayDate(row.date)}</td>
                        <td>{format(row.age)}</td>
                        <td>{format(row.height)}</td>
                        <td>{format(row.weight)}</td>
                        <td>{format(row.bmi)}</td>
                        <td>{format(row.ofc)}</td>
                        <td>
                          {row.scores?.[type]?.percentile == null
                            ? '—'
                            : `P${format(row.scores[type].percentile)}`}
                        </td>
                        <td>{format(row.scores?.[type]?.z)}</td>
                        <td>
                          <button
                            className="icon-action text-red-500 hover:text-red-700 hover:bg-red-50"
                            aria-label={`Remover medição de ${displayDate(row.date)}${row.measurement && row.measurement !== 'combined' ? ' · ' + TYPES[row.measurement].label : ''}`}
                            disabled={busy}
                            onClick={() => {
                              setRows(previous => previous.filter(r => r !== row));
                              setResetPending(false);
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground py-4 text-center">
                Nenhuma medição adicionada ainda. Preencha os dados e clique em Calcular.
              </p>
            )}
          </section>

          {/* Guia de Referência Rápida OMS / SISVAN */}
          <section className="clinical-card mt-6 bg-slate-50/70">
            <h3 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Tabela de Referência Rápida: Critérios de Classificação do IMC (OMS / Ministério da Saúde)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                <p className="font-bold text-foreground">Crianças de 0 a 5 anos</p>
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>Escore Z &lt; -3</span><strong className="text-rose-600">Magreza acentuada</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>-3 ≤ Z &lt; -2</span><strong className="text-amber-600">Magreza</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>-2 ≤ Z ≤ +1</span><strong className="text-emerald-600">Eutrofia</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>+1 &lt; Z ≤ +2</span><strong className="text-amber-600">Risco de sobrepeso</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>+2 &lt; Z ≤ +3</span><strong className="text-orange-600">Sobrepeso</strong></div>
                  <div className="flex justify-between py-0.5"><span>Escore Z &gt; +3</span><strong className="text-rose-600">Obesidade</strong></div>
                </div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                <p className="font-bold text-foreground">Crianças e Adolescentes de 5 a 19 anos</p>
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>Escore Z &lt; -3</span><strong className="text-rose-600">Magreza acentuada</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>-3 ≤ Z &lt; -2</span><strong className="text-amber-600">Magreza</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>-2 ≤ Z ≤ +1</span><strong className="text-emerald-600">Eutrofia</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>+1 &lt; Z ≤ +2</span><strong className="text-orange-600">Sobrepeso</strong></div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100"><span>+2 &lt; Z ≤ +3</span><strong className="text-rose-600">Obesidade</strong></div>
                  <div className="flex justify-between py-0.5"><span>Escore Z &gt; +3</span><strong className="text-rose-700">Obesidade grave</strong></div>
                </div>
              </div>
            </div>
          </section>

      <footer className="growth-sources">
        <strong>Referência e método de cálculo</strong>
        <p>
          Cálculos integrados aos padrões internacionais via{' '}
          <a href="https://growth.rcpch.ac.uk/integrator/making-api-calls/" target="_blank" rel="noreferrer">
            RCPCH Digital Growth Charts
          </a>. A referência OMS utiliza as curvas Multicentre Growth Reference Study (2006) e WHO Reference 2007 conforme a idade.
        </p>
        <p>
          As versões e respostas completas são mantidas durante a sessão. A integração não implica certificação individual pelo RCPCH.
        </p>
        {last && (
          <details>
            <summary className="text-xs text-primary font-medium cursor-pointer">
              Ver proveniência e detalhes da última medição
            </summary>
            <pre className="text-xs whitespace-pre-wrap break-all mt-2 p-3 bg-white rounded border border-slate-200">
              {JSON.stringify(Object.values(last.raw || {})[0]?.provenance, null, 2)}
            </pre>
          </details>
        )}
      </footer>
    </div>
  );
}
