import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Calculator,
  Pill,
  FileText,
  Syringe,
  Activity,
  BookOpen,
  X,
  Droplets,
  ShieldAlert,
  Thermometer,
  Zap,
} from 'lucide-react';
import { universalSearch } from '@/lib/universalSearch';

const CATEGORIES = [
  {
    name: 'Calculadoras',
    desc: 'Cálculos e escores clínicos',
    path: '/calculadoras',
    icon: Calculator,
    iconBg: 'bg-blue-50 text-brand-navy',
  },
  {
    name: 'Medicamentos',
    desc: 'Doses, bulas e interações',
    path: '/guia',
    icon: Pill,
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    name: 'Protocolos',
    desc: 'Condutas e guias clínicos',
    path: '/biblioteca?tab=protocolos',
    icon: FileText,
    iconBg: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Vacinas',
    desc: 'Calendário e esquemas',
    path: '/vacinas',
    icon: Syringe,
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Sinais Vitais',
    desc: 'Referência por idade',
    path: '/sinais-vitais',
    icon: Activity,
    iconBg: 'bg-teal-50 text-brand-teal',
  },
  {
    name: 'Biblioteca',
    desc: 'Artigos, guias e materiais',
    path: '/biblioteca',
    icon: BookOpen,
    iconBg: 'bg-indigo-50 text-indigo-600',
  },
];

const QUICK_ACCESS = [
  { label: 'Hidratação pediátrica', path: '/hidratacao', icon: Droplets },
  { label: 'Antibióticos', path: '/guia', icon: Pill },
  { label: 'Esquema vacinal', path: '/vacinas', icon: Syringe },
  { label: 'Febre sem foco', path: '/biblioteca?tab=protocolos', icon: Thermometer },
  { label: 'Dosagens rápidas', path: '/dosagens', icon: Zap },
  { label: 'Drogas emergência', path: '/drogas-emergencia', icon: ShieldAlert },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const results = universalSearch(query, 8);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].path);
    }
  };

  return (
    <div className="clinical-page home-page max-w-6xl mx-auto space-y-8">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative rounded-3xl bg-gradient-to-r from-[#EBF4FA] via-[#F4F9FD] to-white border border-slate-200/90 shadow-sm z-30">
        <div className="grid lg:grid-cols-12 items-center min-h-[340px]">
          {/* Left Text & Search */}
          <div className="lg:col-span-7 p-6 sm:p-10 z-20 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-teal">
                Plataforma Pediátrica Livre
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-brand-navy leading-tight tracking-tight">
                Conhecimento <br className="hidden sm:inline" />
                médico deve ser{' '}
                <span className="text-brand-teal underline decoration-brand-teal/40 underline-offset-4">
                  livre.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
                Protocolos, calculadoras, doses, vacinas e muito mais. Tudo em um só lugar, para apoiar sua prática clínica pediátrica.
              </p>
            </div>

            {/* Main Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-slate-400 pointer-events-none" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Busque por doenças, medicamentos, calculadoras, protocolos..."
                  className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-14 py-3.5 text-sm sm:text-base shadow-sm focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/15 transition-all text-slate-800"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-12 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : null}
                <button
                  type="submit"
                  aria-label="Buscar"
                  className="absolute right-2.5 w-9 h-9 rounded-xl bg-brand-teal hover:bg-teal-600 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Floating Live Results Dropdown (Unclipped, elevated above hero) */}
              {query.trim().length > 1 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden z-50 divide-y divide-slate-100 max-h-96 overflow-y-auto ring-1 ring-slate-900/5">
                  <div className="p-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Resultados da busca rápida</span>
                    <span>{results.length} encontrados</span>
                  </div>
                  {results.length > 0 ? (
                    results.map((r, i) => (
                      <Link
                        key={i}
                        to={r.path}
                        onClick={() => setQuery('')}
                        className="flex items-center gap-3.5 px-4 py-3 hover:bg-slate-50 transition-colors text-left group"
                      >
                        <span className="text-xl w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {r.icon || '🔍'}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-brand-navy truncate group-hover:text-brand-teal transition-colors">
                            {r.label}
                          </p>
                          {r.desc && (
                            <p className="text-[11px] text-slate-500 truncate">{r.desc}</p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500">
                      Nenhum resultado encontrado para "{query}".
                    </div>
                  )}
                </div>
              )}
            </form>

            {/* Quick search terms */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <span className="font-semibold text-slate-400">Exemplos:</span>
              {['paracetamol', 'bronquiolite', 'escore de apgar', 'febre', 'reidratação'].map(
                (term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="hover:text-brand-navy hover:underline cursor-pointer"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Image Container (contained and rounded) */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[340px] overflow-hidden rounded-r-3xl">
            <img
              src="/assets/hero-pediatra.jpg"
              alt="Pediatra cuidando de bebê"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Gradient feather on the left edge of image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F9FD] via-transparent to-transparent w-28 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 6 MAIN CATEGORY TILES (matching mockup 1 & 2) */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Módulos Principais
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                to={cat.path}
                className="group p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-brand-teal hover:shadow-md transition-all flex flex-col justify-between min-h-[140px]"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-3 transition-transform group-hover:scale-105 ${cat.iconBg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-brand-navy transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ACESSO RÁPIDO (Chips) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Acesso Rápido
          </h2>
          <Link
            to="/ferramentas"
            className="text-xs font-bold text-brand-teal hover:text-teal-700 flex items-center gap-1"
          >
            Ver todas as ferramentas <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {QUICK_ACCESS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-brand-teal hover:text-brand-navy hover:bg-brand-sky/30 transition-all shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-brand-teal" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
