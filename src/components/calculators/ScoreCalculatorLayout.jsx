import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  RefreshCw,
  Activity,
  List as ListIcon,
  BookOpen,
  Info,
} from 'lucide-react';

export default function ScoreCalculatorLayout({
  title,
  eyebrow,
  subtitle,
  icon3d = '🧠',
  criteria = [],
  scores = {},
  onSelectOption,
  maxScore = 15,
  classification = null,
  referenceTable = [],
  clinicalNotes = null,
  onReset,
  referenceSource,
  scoreUnit = 'pontos',
}) {
  const navigate = useNavigate();

  const answeredCount = criteria.filter((c) => scores[c.id] !== undefined).length;
  const isComplete = answeredCount === criteria.length;
  const currentTotal = Object.values(scores).reduce((a, b) => a + Number(b), 0);

  // Status color styles helper
  const getStatusBadgeStyles = (status) => {
    switch (status) {
      case 'danger':
      case 'red':
        return {
          pill: 'bg-rose-50 text-rose-950 border-rose-200',
          dot: 'bg-rose-500',
          text: 'text-rose-700',
        };
      case 'warning':
      case 'yellow':
      case 'orange':
        return {
          pill: 'bg-amber-50 text-amber-950 border-amber-200',
          dot: 'bg-amber-500',
          text: 'text-amber-700',
        };
      case 'normal':
      case 'success':
      case 'green':
      default:
        return {
          pill: 'bg-emerald-50 text-emerald-950 border-emerald-200',
          dot: 'bg-emerald-500',
          text: 'text-emerald-700',
        };
    }
  };

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6 pb-14">
      {/* BREADCRUMB / BACK LINK */}
      <div>
        <Link
          to="/calculadoras"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Calculadoras</span>
        </Link>
      </div>

      {/* TOP HERO BANNER (MATCHING MOCKUP) */}
      <section className="relative rounded-3xl bg-gradient-to-r from-[#0C385C] via-[#104870] to-[#145684] text-white p-6 sm:p-8 shadow-md overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 right-32 w-48 h-48 rounded-full bg-brand-teal/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Title & Info */}
          <div className="space-y-2 max-w-xl">
            {eyebrow && (
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white/90 text-[11px] font-extrabold uppercase tracking-wider">
                {eyebrow}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Header Stats & 3D Illustration */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 border-t lg:border-t-0 lg:border-l border-white/20 pt-4 lg:pt-0 lg:pl-6">
            {/* Score Block */}
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/70 block">
                PONTUAÇÃO TOTAL
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                  {isComplete ? currentTotal : currentTotal > 0 ? currentTotal : '—'}
                </span>
                <span className="text-xs sm:text-sm text-white/80 font-medium">
                  / {maxScore} {scoreUnit}
                </span>
              </div>
            </div>

            {/* Live Result Pill Badge on Header */}
            {classification && (
              <div
                className={`rounded-2xl border px-3.5 py-2.5 shadow-sm max-w-xs transition-all ${
                  getStatusBadgeStyles(classification.status).pill
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      getStatusBadgeStyles(classification.status).dot
                    }`}
                  />
                  <span className="text-xs font-bold leading-tight">
                    {classification.label}
                  </span>
                </div>
                {classification.description && (
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-snug line-clamp-2">
                    {classification.description}
                  </p>
                )}
              </div>
            )}

            {/* 3D Decorative Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-4xl sm:text-5xl shadow-lg shrink-0 select-none">
              {icon3d}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN 2-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: CRITERIA CARDS (lg:col-span-7 or 8) */}
        <div className="lg:col-span-8 space-y-4">
          {criteria.map((c, idx) => {
            const currentSelected = scores[c.id];
            const hasSelection = currentSelected !== undefined;

            return (
              <div
                key={c.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3.5"
              >
                {/* Criterion Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-base ${
                        c.iconBg || 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      {c.icon || '📋'}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {c.label}
                      </h3>
                      {c.subtitle && (
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          {c.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Score pill for criterion */}
                  {hasSelection ? (
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg shrink-0">
                      {currentSelected} pt
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                      Pendente
                    </span>
                  )}
                </div>

                {/* Options Radio List */}
                <div className="space-y-2 pt-1">
                  {c.options.map((opt) => {
                    const isSelected = currentSelected === opt.value;

                    return (
                      <button
                        key={opt.label + opt.value}
                        type="button"
                        onClick={() => onSelectOption(c.id, opt.value)}
                        className={`w-full p-3 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/80 border-blue-500 text-blue-950 font-bold shadow-2xs ring-1 ring-blue-500/20'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-700 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Radio circle */}
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? 'border-blue-600 bg-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-blue-600" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <span className="text-xs leading-snug">{opt.label}</span>
                            {opt.desc && (
                              <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                                {opt.desc}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Points badge on right */}
                        <span
                          className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full shrink-0 ml-3 transition-colors ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {opt.value}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Reset button */}
          {answeredCount > 0 && onReset && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onReset}
                className="w-full py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                <span>Limpar e Iniciar Nova Avaliação</span>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: SIDEBAR RESULTS & REFERENCES (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
          {/* CARD 1: RESULTADO */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Resultado</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-extrabold text-emerald-600">
                {isComplete ? currentTotal : currentTotal > 0 ? currentTotal : '—'}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                / {maxScore} {scoreUnit}
              </span>
            </div>

            {classification ? (
              <div
                className={`rounded-2xl border p-3.5 transition-all ${
                  getStatusBadgeStyles(classification.status).pill
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      getStatusBadgeStyles(classification.status).dot
                    }`}
                  />
                  <h4 className="text-xs font-bold">{classification.label}</h4>
                </div>
                {classification.description && (
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {classification.description}
                  </p>
                )}
                {classification.conduta && (
                  <div className="mt-2 pt-2 border-t border-slate-200/60 text-[11px] font-semibold text-slate-700">
                    <span className="text-slate-400 uppercase tracking-wider text-[9px] block">
                      Conduta sugerida:
                    </span>
                    {classification.conduta}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-slate-400">
                Preencha todos os {criteria.length} critérios ao lado para calcular o escore e conduta clínica.
              </p>
            )}
          </div>

          {/* CARD 2: CLASSIFICAÇÃO / TABELA DE REFERÊNCIA */}
          {referenceTable && referenceTable.length > 0 && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <ListIcon className="w-4 h-4 text-brand-teal" />
                <span>Classificação do Escore</span>
              </div>

              <div className="space-y-2">
                {referenceTable.map((row, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border p-3 text-xs flex flex-col justify-between gap-1 transition-all ${
                      getStatusBadgeStyles(row.status).pill
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{row.label}</span>
                      <span className="text-[11px] font-extrabold opacity-80">
                        {row.range}
                      </span>
                    </div>
                    {row.desc && (
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        {row.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CARD 3: NOTA CLÍNICA */}
          {clinicalNotes && (
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Nota Clínica</span>
              </div>

              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 space-y-2 text-xs text-blue-950 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-1.5 font-normal">
                    {Array.isArray(clinicalNotes) ? (
                      clinicalNotes.map((note, i) => <p key={i}>{note}</p>)
                    ) : (
                      <p>{clinicalNotes}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REFERENCE SOURCE FOOTER */}
          {referenceSource && (
            <p className="text-[10px] text-slate-400 px-1 leading-relaxed">
              <span className="font-semibold text-slate-500">Fonte:</span>{' '}
              {referenceSource}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
