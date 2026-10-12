import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, ArrowRight } from 'lucide-react';
import { CALCULATORS, normalizeSearch } from '@/lib/calculatorRegistry';
import { usePageFavorites } from '@/hooks/usePageFavorites';

export default function CalculadorasHub() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas');
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const categories = ['Todas', ...new Set(CALCULATORS.map((c) => c.category))];

  const filtered = CALCULATORS.filter(
    (c) =>
      (category === 'Todas' || c.category === category) &&
      normalizeSearch(`${c.label} ${c.desc}`).includes(normalizeSearch(query))
  );

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">
      <PageHeader
        kind="calculator"
        eyebrow="Ferramentas Clínicas Pediátricas"
        title="Calculadoras e Escores"
        description="Encontre pelo nome, sigla ou área clínica. Consulte a população aplicável e as referências em cada ferramenta."
      />

      {/* FILTER & SEARCH TOOLBAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                category === c
                  ? 'bg-brand-navy text-white shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72 shrink-0">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar calculadora ou escore..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs focus:bg-white focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>
      </div>

      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
        {filtered.length} {filtered.length === 1 ? 'ferramenta disponível' : 'ferramentas disponíveis'}
      </p>

      {/* CALCULATOR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filtered.map((c) => (
          <Link
            key={c.id}
            to={c.path}
            className="group bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-brand-teal hover:shadow-xs transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-brand-sky text-brand-navy">
                  {c.category}
                </span>
                <button
                  type="button"
                  className="icon-action -mr-1 -mt-1 relative z-10"
                  aria-label={`Favoritar ${c.label}`}
                  aria-pressed={isFavorite(c.path)}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(c.path);
                  }}
                >
                  <Star
                    className={`w-4 h-4 transition-colors ${
                      isFavorite(c.path) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                    }`}
                  />
                </button>
              </div>

              <h2 className="text-sm font-bold text-slate-800 group-hover:text-brand-navy transition-colors">
                {c.label}
              </h2>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{c.desc}</p>
              {c.status === 'blocked' && (
                <p className="text-[11px] font-medium text-amber-700 mt-2">
                  Em revisão · cálculo desativado
                </p>
              )}
            </div>

            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-brand-teal group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                {c.status === 'blocked' ? 'Ver detalhes' : 'Calcular'}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {!filtered.length && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-700">Nenhuma calculadora encontrada.</p>
          <button
            onClick={() => {
              setQuery('');
              setCategory('Todas');
            }}
            className="text-xs font-bold text-brand-teal hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
