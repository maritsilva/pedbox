import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { calculateDose, intervalOptions, numberInput, presentationAmount } from '@/lib/doseEngine';

const fmt = value => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 3 }).format(value);
export default function DosagemDetalhe({ drug, onBack }) {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [ageUnit, setAgeUnit] = useState('meses');
  const [indIndex, setIndIndex] = useState(0);
  const [apIndex, setApIndex] = useState(0);
  const [chosenInterval, setInterval] = useState('');
  const { isFavorite, toggleFavorite } = useDosagemFavorites();
  const indication = drug.indicacoes[indIndex];
  const intervals = intervalOptions(indication?.freq);
  const interval = chosenInterval ? Number(chosenInterval) : intervals.length === 1 ? intervals[0] : null;
  const result = calculateDose(indication, numberInput(weight), interval);
  const ap = indication?.apresentacoes?.[apIndex];
  const context = { ageMonths: numberInput(age) * (ageUnit === 'anos' ? 12 : 1), weight: numberInput(weight) };
  const min = !result.error ? presentationAmount(ap, result.min, result.unit, context) : null;
  const max = !result.error ? presentationAmount(ap, result.max, result.unit, context) : null;
  const range = (a, b, unit) => `${fmt(a)}${a !== b ? `–${fmt(b)}` : ''} ${unit}`;
  return (
    <div className="clinical-page max-w-5xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#164B73] hover:text-[#20A6A6] bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-3.5 py-2 rounded-xl transition-all shadow-xs"
        >
          <ArrowLeft size={16} /> Voltar aos Medicamentos
        </button>
        <button
          type="button"
          onClick={() => toggleFavorite(drug.id)}
          aria-pressed={isFavorite(drug.id)}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-xl transition-all shadow-xs border ${
            isFavorite(drug.id)
              ? 'bg-amber-50 text-amber-700 border-amber-300'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          <Star
            size={16}
            className={isFavorite(drug.id) ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}
          />
          {isFavorite(drug.id) ? 'Favoritado' : 'Favoritar'}
        </button>
      </div>
      <PageHeader
        kind="doses"
        eyebrow={drug.catLabel}
        title={drug.name}
        description={drug.descricao}
      >
        {drug.marcas && <p className="text-sm mt-3 text-slate-500"><strong>Marcas de referência:</strong> {drug.marcas}</p>}
      </PageHeader>
      <div className="review-note">
        Revisão clínica pendente. A conferência aritmética não valida a indicação, a dose nem a apresentação para um paciente específico.
      </div>
      {drug.alerta && <div className="review-note">{drug.alerta}</div>}
    <div className="grid lg:grid-cols-2 gap-6">
      <section className="clinical-card space-y-5"><h2>Dados para o cálculo</h2>
        <label className="field-label">Indicação<select value={indIndex} onChange={e => {setIndIndex(Number(e.target.value)); setApIndex(0); setInterval('');}}>{drug.indicacoes.map((i,index) => <option key={i.id} value={index}>{i.label}</option>)}</select></label>
        <div className="grid grid-cols-2 gap-4"><label className="field-label">Peso (kg)<input inputMode="decimal" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Ex.: 15" /></label><label className="field-label">Idade<input inputMode="decimal" value={age} onChange={e => setAge(e.target.value)} placeholder="Informe a idade" /></label></div>
        <label className="field-label">Unidade da idade<select value={ageUnit} onChange={e => setAgeUnit(e.target.value)}><option>meses</option><option>anos</option></select></label>
        <label className="field-label">Intervalo cadastrado<select value={interval || ''} onChange={e => setInterval(e.target.value)}><option value="">{intervals.length ? 'Selecione o intervalo' : 'Esquema específico — consulte a observação'}</option>{intervals.map(n => <option key={n} value={n}>A cada {n} horas</option>)}</select></label>
        <label className="field-label">Apresentação<select value={apIndex} onChange={e => setApIndex(Number(e.target.value))}>{indication?.apresentacoes?.map((p,index) => <option key={index} value={index}>{p.label}</option>)}</select></label>
      </section>
      <section className="clinical-card space-y-5" aria-live="polite"><h2>Resultado por administração</h2>
        {!weight ? <p>Preencha os dados para calcular. Não são usados valores de paciente predefinidos.</p> : result.error ? <div role="status" className="review-note">{result.error}</div> : <>
          <div className="clinical-result"><p className="eyebrow">Faixa calculada</p><strong>{range(result.min, result.max, result.unit)}</strong><p>por tomada {interval ? `· a cada ${interval} horas` : '· frequência conforme o esquema'}</p></div>
          {result.capped && <p>Limite cadastrado aplicado à dose e à conversão.</p>}
          {result.dailyMax != null && <p>Total em 24 horas: {range(result.dailyMin, result.dailyMax, result.unit)}.</p>}
          {min?.error || max?.error ? <div className="review-note">{min?.error || max?.error}</div> : <div className="clinical-result"><strong>{range(min.value, max.value, min.unit)}</strong><p>{ap.label}</p>{(min.theoretical || max.theoretical) && <p>Conversão teórica: gotas fracionadas não são administráveis. Escolha outra apresentação ou uma dose clinicamente validada em gotas inteiras.</p>}</div>}
        </>}
        <details open><summary>Dados do cadastro e limites</summary><p className="mt-3">{indication?.dose_min}–{indication?.dose_max} {indication?.unidade} · {indication?.freq}</p><p className="mt-2">{indication?.obs}</p>{indication?.dose_max_abs && <p className="mt-2">Teto cadastrado: {indication.dose_max_abs} {indication.unidade?.split('/')[0]} ({indication.maxScope === 'day' ? 'por dia' : indication.maxScope === 'dose' || /\/dose/.test(indication.unidade) ? 'por tomada' : 'escopo pendente de revisão'}).</p>}</details>
        {indication?.references?.map(reference => (
          <a
            className="block text-[#164B73] hover:text-[#20A6A6] underline text-sm transition-colors"
            key={reference.url}
            href={reference.url}
            target="_blank"
            rel="noreferrer"
          >
            {reference.title}
          </a>
        ))}
        <div className="pt-2 border-t border-slate-100">
          <Link
            to={`/guia?drug=${drug.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#164B73] hover:text-[#20A6A6] transition-colors"
          >
            Consultar guia completo do medicamento →
          </Link>
        </div>
      </section>
    </div>
  </div>
  );
}
