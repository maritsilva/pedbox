import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { CALCULATORS } from '@/lib/calculatorRegistry';
import { CLINICAL_DEFINITIONS, evaluateClinical } from '@/lib/clinicalCalculators';
import { CLINICAL_PENDING } from '@/lib/clinicalPending';
import { usePageFavorites } from '@/hooks/usePageFavorites';
import {
  ChevronLeft,
  Calculator,
  RotateCcw,
  Star,
  ExternalLink,
  BookOpen,
  AlertTriangle,
  Activity,
} from 'lucide-react';

export default function ClinicalCalculator() {
  const { id } = useParams();
  const calculator = CALCULATORS.find(c => c.id === id);
  const definition = CLINICAL_DEFINITIONS[id];
  const pending = CLINICAL_PENDING[id];
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const currentPath = `/calculadoras/${id}`;

  if (!calculator) {
    return (
      <div className="clinical-page max-w-4xl mx-auto py-12 px-4 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Calculadora não encontrada</h1>
        <p className="text-sm text-slate-500">
          A ferramenta solicitada não foi localizada no catálogo clínico.
        </p>
        <Link
          to="/calculadoras"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-navy/90 transition-all shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" /> Ver catálogo de calculadoras
        </Link>
      </div>
    );
  }

  return (
    <div className="clinical-page max-w-5xl mx-auto px-4 pb-16 space-y-6">
      {/* BREADCRUMB & FAVORITE */}
      <div className="flex items-center justify-between">
        <Link
          to="/calculadoras"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-navy transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Todas as calculadoras
        </Link>

        <button
          type="button"
          onClick={() => toggleFavorite(currentPath)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors shadow-2xs"
          aria-label={isFavorite(currentPath) ? 'Remover dos favoritos' : 'Favoritar calculadora'}
        >
          <Star
            className={`w-4 h-4 transition-colors ${
              isFavorite(currentPath) ? 'fill-amber-400 text-amber-400' : 'text-slate-400'
            }`}
          />
          {isFavorite(currentPath) ? 'Favoritada' : 'Favoritar'}
        </button>
      </div>

      {/* HEADER */}
      <PageHeader
        kind="calculator"
        eyebrow={calculator.category}
        title={calculator.label}
        description={calculator.desc}
      />

      {definition ? (
        <div className="space-y-6">
          {/* CALCULATOR FORM & RESULT */}
          <CalculatorInteractiveSection definition={definition} label={calculator.label} />

          {/* CLINICAL CONTEXT & REFERENCES */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* População e Fórmula */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Activity className="w-4 h-4 text-brand-teal" />
                <span>Aplicabilidade e Parâmetros</span>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                <p>
                  <strong className="text-slate-700">População-alvo:</strong> {definition.population}
                </p>
                <p>
                  <strong className="text-slate-700">Fórmula / Critérios:</strong> {definition.formula}
                </p>
              </div>
            </div>

            {/* Referências Bibliográficas */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-brand-navy" />
                <span>Diretrizes e Referências</span>
              </div>
              <div className="space-y-2 text-xs">
                {definition.references.map(([refLabel, url]) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start justify-between gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-brand-navy hover:text-brand-teal transition-colors border border-slate-100"
                  >
                    <span className="line-clamp-2 font-medium">{refLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400 mt-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-amber-200 p-6 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>Ferramenta em Preparação</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            {pending?.reason ||
              'Aguardando consolidação de fontes primárias e critérios de referência oficiais antes da disponibilização clínica.'}
          </p>
          {pending?.links?.length > 0 && (
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold text-amber-900 block">Links oficiais:</span>
              {pending.links.map(([refLabel, url]) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-navy hover:text-brand-teal underline mr-4"
                >
                  {refLabel} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CalculatorInteractiveSection({ definition, label }) {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const evaluated = evaluateClinical(definition, values);
    setResult(evaluated);
  };

  const handleReset = () => {
    setValues({});
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-6"
      >
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-bold text-slate-800">Parâmetros de Avaliação</h2>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
            {definition.fields.length} itens requeridos
          </span>
        </div>

        {/* FIELDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {definition.fields.map(field => {
            const hasOptions = !!field.options;
            return (
              <div
                key={field.id}
                className={field.options?.length > 2 ? 'sm:col-span-2 space-y-1.5' : 'space-y-1.5'}
              >
                <label className="block text-xs font-semibold text-slate-700 leading-snug">
                  {field.label}
                </label>
                {hasOptions ? (
                  <select
                    value={values[field.id] ?? ''}
                    onChange={e => {
                      setValues({ ...values, [field.id]: e.target.value });
                      setResult(null);
                    }}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all"
                  >
                    <option value="">Selecione uma opção...</option>
                    {field.options.map(([optVal, optLabel]) => (
                      <option key={optVal} value={optVal}>
                        {optLabel}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    step={field.step || 'any'}
                    min={field.min}
                    max={field.max}
                    placeholder={`Ex: entre ${field.min} e ${field.max}`}
                    value={values[field.id] ?? ''}
                    onChange={e => {
                      setValues({ ...values, [field.id]: e.target.value });
                      setResult(null);
                    }}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy/90 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all"
          >
            <Calculator className="w-4 h-4 text-brand-sky" />
            Calcular {label}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs sm:text-sm font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            Limpar
          </button>
        </div>
      </form>

      {/* RESULT CARD */}
      {result && (
        <div
          role="status"
          className={`rounded-2xl p-5 sm:p-6 border shadow-xs transition-all animate-in fade-in-50 duration-200 ${
            result.error
              ? 'bg-rose-50/80 border-rose-200 text-rose-950'
              : result.status === 'danger'
              ? 'bg-rose-50/90 border-rose-300 text-rose-950'
              : result.status === 'warning'
              ? 'bg-amber-50/90 border-amber-300 text-amber-950'
              : 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
          }`}
        >
          {result.error ? (
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm text-rose-900">Atenção ao preenchimento</h3>
                <p className="text-xs text-rose-800 mt-1 leading-relaxed">{result.error}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-3">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold opacity-70">
                    Resultado Clínico
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">
                      {typeof result.value === 'number'
                        ? new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(result.value)
                        : result.value}
                    </span>
                    <span className="text-sm sm:text-base font-semibold opacity-80">{result.unit}</span>
                  </div>
                </div>

                {result.classification && (
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                      result.status === 'danger'
                        ? 'bg-rose-100 text-rose-800 border-rose-300'
                        : result.status === 'warning'
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    }`}
                  >
                    {result.classification}
                  </span>
                )}
              </div>

              {result.interpretation && (
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                    Interpretação e Conduta Recomendada:
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {result.interpretation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
