import PageHeader from '@/components/PageHeader';
import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronRight, Star, X, Tag } from 'lucide-react';
import { DOSAGENS_CATEGORIAS, getAllDosagens } from '@/lib/dosagensData';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import DosagemDetalhe from '@/components/dosagens/DosagemDetalhe';

export default function Dosagens() {
  const drugs = useMemo(() => getAllDosagens(), []);
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const { isFavorite, toggleFavorite, favorites = [] } = useDosagemFavorites();

  const selected = drugs.find(d => d.id === params.get('drug'));
  const select = drug => {
    const next = new URLSearchParams(params);
    if (drug) next.set('drug', drug.id);
    else next.delete('drug');
    setParams(next);
  };

  const q = normalizeSearch(search);
  const filtered = drugs.filter(d =>
    (!category || d.catId === category) &&
    (!onlyFavorites || isFavorite(d.id)) &&
    (!q || [d.name, d.sinonimo, d.marcas, d.catLabel, ...(d.indicacoes?.map(i => i.label) || [])].filter(Boolean).some(s => normalizeSearch(s).includes(q)))
  );

  // Top highlight categories for quick pills
  const topCategories = useMemo(() => {
    return DOSAGENS_CATEGORIAS.filter(c => c.drugs.length >= 4).slice(0, 8);
  }, []);

  if (selected) return <DosagemDetalhe key={selected.id} drug={selected} onBack={() => select(null)} />;

  const hasActiveFilters = Boolean(search || category || onlyFavorites);
  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setOnlyFavorites(false);
  };

  return (
    <div className="page-surface catalogue-page mx-auto px-4 max-w-7xl pb-16">
      <PageHeader
        kind="doses"
        eyebrow="Guia Farmacológico & Posologia"
        title="Dosagens Pediátricas"
        description="Encontre o medicamento para calcular doses precisas por peso e idade, consultar diluições e apresentações."
      />

      {/* Main Search & Filter Toolbar */}
      <div className="catalogue-toolbar bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-xs mb-4 flex flex-col md:flex-row gap-2.5">
        {/* Search Input */}
        <div className="catalogue-search flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 py-2.5 focus-within:bg-white focus-within:border-[#20A6A6] focus-within:ring-2 focus-within:ring-[#20A6A6]/20 transition-all">
          <Search size={18} className="text-[#20A6A6] shrink-0" />
          <input
            type="search"
            aria-label="Buscar medicamento"
            placeholder="Buscar por medicamento, princípio ativo, marcas ou indicações..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-slate-800 placeholder-slate-400 text-sm"
          />
          {search && (
            <button
              type="button"
              aria-label="Limpar busca de medicamento"
              onClick={() => setSearch('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Category Dropdown */}
          <select
            aria-label="Categoria de medicamentos"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="catalogue-select px-3 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl text-xs sm:text-sm font-medium text-slate-700 outline-none focus:border-[#20A6A6] focus:bg-white transition-all cursor-pointer min-w-[180px]"
          >
            <option value="">Todas as categorias ({drugs.length})</option>
            {DOSAGENS_CATEGORIAS.map(c => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.label} ({c.drugs.length})
              </option>
            ))}
          </select>

          {/* Favorites Filter Button */}
          <button
            type="button"
            className={`filter-toggle inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border shrink-0 ${
              onlyFavorites
                ? 'bg-amber-50 text-amber-700 border-amber-300 shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/90'
            }`}
            aria-pressed={onlyFavorites}
            onClick={() => setOnlyFavorites(!onlyFavorites)}
          >
            <Star
              size={15}
              className={onlyFavorites ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}
            />
            <span>Favoritos</span>
            {favorites?.length > 0 && (
              <span
                className={`ml-0.5 text-xs px-1.5 py-0.2 rounded-full font-bold ${
                  onlyFavorites ? 'bg-amber-200/80 text-amber-800' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {favorites.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Quick Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none text-xs">
        <button
          type="button"
          onClick={() => setCategory('')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border ${
            !category
              ? 'bg-[#164B73] text-white border-[#164B73] shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          Todas ({drugs.length})
        </button>
        {topCategories.map(cat => {
          const isSelected = category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(isSelected ? '' : cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-[#164B73] text-white border-[#164B73] shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {cat.drugs.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result Status Bar */}
      <div className="flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 font-medium mb-5 px-1">
        <p className="catalogue-count" role="status">
          Exibindo <strong className="text-slate-800">{filtered.length}</strong> {filtered.length === 1 ? 'medicamento' : 'medicamentos'}
          {onlyFavorites ? ' nos favoritos' : ''}
          {category ? ` na categoria selecionada` : ''}
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-[#164B73] hover:text-[#20A6A6] font-semibold underline transition-colors"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Categories & Drug Cards Grid */}
      <div className="catalogue-columns space-y-8">
        {DOSAGENS_CATEGORIAS.map(cat => {
          const items = filtered.filter(d => d.catId === cat.id);
          if (!items.length) return null;
          return (
            <section key={cat.id} className="catalogue-group">
              {/* Category Header */}
              <header className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-xl" role="img" aria-label={cat.label}>
                    {cat.icon}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#164B73] tracking-tight">
                    {cat.label}
                  </h2>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF4FA] text-[#164B73] border border-[#D6E7F2]">
                  {items.length} {items.length === 1 ? 'item' : 'itens'}
                </span>
              </header>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {items.map(drug => (
                  <article
                    key={drug.id}
                    onClick={() => select(drug)}
                    className="catalogue-item group relative bg-white rounded-2xl border border-slate-200/80 hover:border-[#20A6A6] hover:shadow-md transition-all duration-200 p-4 flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-[#20A6A6]/30"
                  >
                    <div>
                      {/* Title & Favorite Row */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-base text-slate-800 group-hover:text-[#164B73] transition-colors leading-snug">
                          {drug.name}
                        </h3>
                        <button
                          type="button"
                          className="icon-action p-1.5 -mr-1.5 -mt-1.5 rounded-lg text-slate-300 hover:text-amber-500 hover:bg-amber-50 transition-colors shrink-0"
                          aria-label={`Favoritar ${drug.name}`}
                          aria-pressed={isFavorite(drug.id)}
                          onClick={e => {
                            e.stopPropagation();
                            toggleFavorite(drug.id);
                          }}
                        >
                          <Star
                            size={18}
                            className={
                              isFavorite(drug.id)
                                ? 'text-amber-500 fill-amber-500'
                                : 'hover:text-amber-500'
                            }
                          />
                        </button>
                      </div>

                      {/* Synonym Badge */}
                      {drug.sinonimo && (
                        <div className="mt-1">
                          <span className="inline-block text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            Sinônimo: {drug.sinonimo}
                          </span>
                        </div>
                      )}

                      {/* Brand Names (Marcas) */}
                      {drug.marcas && (
                        <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5 truncate">
                          <Tag size={12} className="text-[#20A6A6] shrink-0" />
                          <span className="truncate">{drug.marcas}</span>
                        </div>
                      )}

                      {/* Description */}
                      {drug.descricao && (
                        <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {drug.descricao}
                        </p>
                      )}
                    </div>

                    {/* Card Footer: Indications count & Action */}
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">
                        {drug.indicacoes?.length || 1}{' '}
                        {drug.indicacoes?.length === 1 ? 'indicação' : 'indicações'}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#164B73] group-hover:text-[#20A6A6] group-hover:translate-x-0.5 transition-all">
                        Calcular <ChevronRight size={14} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Empty State */}
      {!filtered.length && (
        <div className="catalogue-empty text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-300 mt-6 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Search size={24} />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800">
            Nenhum medicamento encontrado
          </h2>
          <p className="text-sm text-slate-500 mt-1.5 max-w-md mx-auto">
            Não encontramos nenhum medicamento correspondente aos termos ou filtros selecionados.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#164B73] hover:bg-[#20A6A6] transition-colors shadow-xs"
          >
            Limpar filtros e ver todos
          </button>
        </div>
      )}
    </div>
  );
}
