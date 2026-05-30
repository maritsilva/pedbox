import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, ChevronDown, ChevronUp, Star, Flame, Filter, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOSAGENS_CATEGORIAS, getAllDosagens } from '@/lib/dosagensData';
import DosagemDetalhe from '@/components/dosagens/DosagemDetalhe';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';

// Most used drugs (ordered by usage frequency)
const MAIS_USADOS_IDS = ['paracetamol', 'ibuprofeno', 'dipirona', 'ondansetrona', 'amoxicilina', 'azitromicina', 'dexametasona'];

const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500', header: 'bg-orange-500', badge: 'bg-orange-100 text-orange-800', chip: 'bg-orange-100 text-orange-700 border-orange-200' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    dot: 'bg-red-500',    header: 'bg-red-600',    badge: 'bg-red-100 text-red-800',    chip: 'bg-red-100 text-red-700 border-red-200' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500', header: 'bg-purple-600', badge: 'bg-purple-100 text-purple-800', chip: 'bg-purple-100 text-purple-700 border-purple-200' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   dot: 'bg-blue-500',   header: 'bg-blue-600',   badge: 'bg-blue-100 text-blue-800',   chip: 'bg-blue-100 text-blue-700 border-blue-200' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', dot: 'bg-yellow-500', header: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800', chip: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  dot: 'bg-green-500',  header: 'bg-green-600',  badge: 'bg-green-100 text-green-800',  chip: 'bg-green-100 text-green-700 border-green-200' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   dot: 'bg-teal-500',   header: 'bg-teal-600',   badge: 'bg-teal-100 text-teal-800',   chip: 'bg-teal-100 text-teal-700 border-teal-200' },
  cyan:   { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700',   dot: 'bg-cyan-500',   header: 'bg-cyan-600',   badge: 'bg-cyan-100 text-cyan-800',   chip: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  dot: 'bg-amber-500',  header: 'bg-amber-500',  badge: 'bg-amber-100 text-amber-800', chip: 'bg-amber-100 text-amber-700 border-amber-200' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-700',   dot: 'bg-pink-500',   header: 'bg-pink-600',   badge: 'bg-pink-100 text-pink-800',   chip: 'bg-pink-100 text-pink-700 border-pink-200' },
  lime:   { bg: 'bg-lime-50',   border: 'border-lime-200',   text: 'text-lime-700',   dot: 'bg-lime-500',   header: 'bg-lime-600',   badge: 'bg-lime-100 text-lime-800',   chip: 'bg-lime-100 text-lime-700 border-lime-200' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', dot: 'bg-indigo-500', header: 'bg-indigo-600', badge: 'bg-indigo-100 text-indigo-800', chip: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
};

// Category row — expandable with drug list
function CategorySection({ cat, drugs, onSelect, favorites, isFavorite }) {
  const [expanded, setExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const meta = COLOR_MAP[cat.color] || COLOR_MAP.blue;
  const PREVIEW = 5;
  const visible = showAll ? drugs : drugs.slice(0, PREVIEW);

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
      {/* Category header */}
      <button
        onClick={() => setExpanded(v => !v)}
        className={`w-full flex items-center gap-3 px-5 py-4 ${meta.bg} border-b ${meta.border} hover:opacity-90 transition-opacity`}
      >
        <div className={`w-10 h-10 rounded-xl ${meta.bg} border ${meta.border} flex items-center justify-center text-xl flex-shrink-0 shadow-sm`}>
          {cat.icon}
        </div>
        <div className="flex-1 text-left">
          <p className={`font-bold text-sm ${meta.text}`}>{cat.label}</p>
          {cat.desc && <p className="text-xs text-muted-foreground mt-0.5">{cat.desc}</p>}
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${meta.badge}`}>
          {drugs.length} medicamentos
        </span>
        {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </button>

      {/* Drug list */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="divide-y divide-border/60">
              {visible.map(drug => (
                <DrugRow key={drug.id} drug={drug} onSelect={onSelect} isFav={isFavorite(drug.id)} />
              ))}
            </div>

            {drugs.length > PREVIEW && (
              <button
                onClick={() => setShowAll(v => !v)}
                className={`w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold ${meta.text} hover:${meta.bg} transition-colors border-t ${meta.border}`}
              >
                {showAll ? (
                  <><ChevronUp className="w-3.5 h-3.5" /> Mostrar menos</>
                ) : (
                  <><ChevronDown className="w-3.5 h-3.5" /> Ver todos os {drugs.length} medicamentos</>
                )}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Single drug row
function DrugRow({ drug, onSelect, isFav }) {
  return (
    <button
      onClick={() => onSelect(drug)}
      className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/40 transition-colors group text-left"
    >
      <div className="w-9 h-9 rounded-lg bg-secondary/60 flex items-center justify-center text-base flex-shrink-0">
        {drug.catIcon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-foreground">{drug.name}</p>
        {drug.sinonimo && <p className="text-xs text-muted-foreground">{drug.sinonimo}</p>}
      </div>
      {isFav && <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 flex-shrink-0" />}
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
    </button>
  );
}

export default function Dosagens() {
  const allDrugs = useMemo(() => getAllDosagens(), []);
  const { favorites, isFavorite, toggleFavorite } = useDosagemFavorites();

  const initialDrug = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const drugId = params.get('drug');
    return drugId ? allDrugs.find(d => d.id === drugId) || null : null;
  }, [allDrugs]);

  const [selected, setSelected] = useState(initialDrug);
  const [search, setSearch] = useState('');
  const [activeCategoria, setActiveCategoria] = useState(null);
  const [showMoreCats, setShowMoreCats] = useState(false);

  const CATS_PREVIEW = 5;

  const favDrugs = useMemo(
    () => favorites.map(id => allDrugs.find(d => d.id === id)).filter(Boolean),
    [favorites, allDrugs]
  );

  const maisUsados = useMemo(
    () => MAIS_USADOS_IDS.map(id => allDrugs.find(d => d.id === id)).filter(Boolean),
    [allDrugs]
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allDrugs.filter(d => {
      const searchFields = [d.name, d.sinonimo, d.marcas, d.catLabel,
        ...(d.indicacoes?.map(i => i.label) ?? [])].filter(Boolean);
      const matchSearch = !q || searchFields.some(s => s.toLowerCase().includes(q));
      const matchCat = !activeCategoria || d.catId === activeCategoria;
      return matchSearch && matchCat;
    });
  }, [search, activeCategoria, allDrugs]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach(d => {
      if (!g[d.catId]) g[d.catId] = { drugs: [] };
      g[d.catId].drugs.push(d);
    });
    return g;
  }, [filtered]);

  if (selected) {
    return (
      <AnimatePresence mode="wait">
        <motion.div key="detalhe" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <DosagemDetalhe drug={selected} onBack={() => setSelected(null)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  const visibleCats = showMoreCats ? DOSAGENS_CATEGORIAS : DOSAGENS_CATEGORIAS.slice(0, CATS_PREVIEW);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── TOP HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-3xl">⚡</span>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Dosagens</h1>
            <p className="text-sm font-medium text-muted-foreground">Cálculo rápido</p>
            <p className="text-xs text-muted-foreground mt-0.5">Insira o peso do paciente e calcule a dose automaticamente.</p>
          </div>
        </div>

        {/* Stats card */}
        <div className="flex items-center gap-4 bg-white border border-border rounded-2xl px-5 py-4 shadow-sm min-w-[220px]">
          <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-2xl flex-shrink-0">
            💊
          </div>
          <div>
            <p className="text-2xl font-extrabold text-foreground">{allDrugs.length}</p>
            <p className="text-xs font-bold text-foreground">medicamentos disponíveis</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Doses baseadas em diretrizes pediátricas atualizadas.</p>
          </div>
        </div>
      </div>

      {/* ── SEARCH ── */}
      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar medicamento (ex: amoxicilina, ibuprofeno…)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button className="p-3 bg-white border border-border rounded-xl shadow-sm hover:bg-secondary transition-colors flex-shrink-0">
          <Filter className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* ── CATEGORY CHIPS ── */}
      <div className="flex flex-wrap items-center gap-2 mb-7">
        <button
          onClick={() => setActiveCategoria(null)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
            !activeCategoria
              ? 'bg-primary text-white border-primary shadow-sm'
              : 'bg-white text-muted-foreground border-border hover:border-primary/40'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          Todas
        </button>
        {visibleCats.map(cat => {
          const meta = COLOR_MAP[cat.color] || COLOR_MAP.blue;
          const isActive = activeCategoria === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoria(isActive ? null : cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isActive
                  ? `${meta.chip} border-opacity-100`
                  : 'bg-white text-muted-foreground border-border hover:border-primary/40'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => setShowMoreCats(v => !v)}
          className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold border border-border bg-white text-muted-foreground hover:border-primary/40 transition-all"
        >
          {showMoreCats ? 'Menos categorias' : 'Mais categorias'}
          {showMoreCats ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* ── TWO COLUMN LAYOUT ── */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">

        {/* LEFT — Drug categories */}
        <div className="flex-1 min-w-0 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white border border-border rounded-2xl">
              <p className="text-5xl mb-4">🔍</p>
              <p className="font-bold text-foreground text-lg">Nenhum medicamento encontrado</p>
              <p className="text-muted-foreground mt-1 text-sm">Tente outros termos de busca</p>
            </div>
          ) : (
            DOSAGENS_CATEGORIAS
              .filter(cat => grouped[cat.id]?.drugs.length > 0)
              .map(cat => (
                <CategorySection
                  key={cat.id}
                  cat={cat}
                  drugs={grouped[cat.id]?.drugs || []}
                  onSelect={setSelected}
                  isFavorite={isFavorite}
                />
              ))
          )}
        </div>

        {/* RIGHT — Sidebar */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">

          {/* Mais usados */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-border">
              <Flame className="w-4 h-4 text-orange-500" />
              <p className="font-bold text-sm text-foreground">Mais usados</p>
            </div>
            <div className="divide-y divide-border/60">
              {maisUsados.slice(0, 5).map((drug, i) => (
                <button
                  key={drug.id}
                  onClick={() => setSelected(drug)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/40 transition-colors group text-left"
                >
                  <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{drug.name}</p>
                    {drug.sinonimo && <p className="text-xs text-muted-foreground truncate">{drug.sinonimo}</p>}
                  </div>
                  <Star
                    className={`w-3.5 h-3.5 flex-shrink-0 cursor-pointer ${isFavorite(drug.id) ? 'fill-yellow-400 text-yellow-400' : 'text-border hover:text-yellow-300'}`}
                    onClick={e => { e.stopPropagation(); toggleFavorite(drug.id); }}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => {}}
              className="w-full py-3 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors border-t border-border"
            >
              Ver todos os mais usados
            </button>
          </div>

          {/* Favoritos */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-border">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <p className="font-bold text-sm text-foreground">Favoritos</p>
            </div>

            {favDrugs.length === 0 ? (
              <div className="px-4 py-5 text-center">
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Marque medicamentos com ⭐ para acessá-los rapidamente aqui.
                </p>
                <button
                  onClick={() => setActiveCategoria(null)}
                  className="text-xs font-semibold text-primary border border-primary/30 rounded-xl px-4 py-2 hover:bg-primary/5 transition-colors w-full"
                >
                  Explorar medicamentos
                </button>
              </div>
            ) : (
              <div className="divide-y divide-border/60">
                {favDrugs.slice(0, 5).map(drug => (
                  <button
                    key={drug.id}
                    onClick={() => setSelected(drug)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/40 transition-colors group text-left"
                  >
                    <span className="text-base flex-shrink-0">{drug.catIcon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{drug.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{drug.catLabel}</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="mt-10 flex items-center justify-between text-[11px] text-muted-foreground/60 border-t border-border pt-4">
        <span className="flex items-center gap-1.5">ℹ️ As dosagens são referências gerais. Confirme sempre com protocolos locais e avaliação clínica.</span>
        <span className="hidden md:block">Atualizado em 24/05/2024</span>
      </div>
    </div>
  );
}