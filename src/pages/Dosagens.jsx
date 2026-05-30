import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOSAGENS_CATEGORIAS, getAllDosagens } from '@/lib/dosagensData';
import DosagemDetalhe from '@/components/dosagens/DosagemDetalhe';

const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500', header: 'bg-orange-500', badge: 'bg-orange-100 text-orange-800' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    dot: 'bg-red-500',    header: 'bg-red-600',    badge: 'bg-red-100 text-red-800' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500', header: 'bg-purple-600', badge: 'bg-purple-100 text-purple-800' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   dot: 'bg-blue-500',   header: 'bg-blue-600',   badge: 'bg-blue-100 text-blue-800' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', dot: 'bg-yellow-500', header: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  dot: 'bg-green-500',  header: 'bg-green-600',  badge: 'bg-green-100 text-green-800' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   dot: 'bg-teal-500',   header: 'bg-teal-600',   badge: 'bg-teal-100 text-teal-800' },
  cyan:   { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700',   dot: 'bg-cyan-500',   header: 'bg-cyan-600',   badge: 'bg-cyan-100 text-cyan-800' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  dot: 'bg-amber-500',  header: 'bg-amber-500',  badge: 'bg-amber-100 text-amber-800' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-700',   dot: 'bg-pink-500',   header: 'bg-pink-600',   badge: 'bg-pink-100 text-pink-800' },
  lime:   { bg: 'bg-lime-50',   border: 'border-lime-200',   text: 'text-lime-700',   dot: 'bg-lime-500',   header: 'bg-lime-600',   badge: 'bg-lime-100 text-lime-800' },
};

function DrugCard({ drug, catColor, onClick }) {
  const meta = COLOR_MAP[catColor] || COLOR_MAP.blue;
  return (
    <motion.button
      onClick={() => onClick(drug)}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all overflow-hidden group"
    >
      <div className={`h-1 ${meta.header}`} />
      <div className="p-4 flex items-center gap-3">
        <div className={`w-11 h-11 rounded-xl ${meta.bg} border ${meta.border} flex items-center justify-center flex-shrink-0`}>
          <span className="text-xl">{drug.catIcon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-foreground leading-snug">{drug.name}</p>
          {drug.sinonimo && <p className="text-xs text-muted-foreground">{drug.sinonimo}</p>}
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${meta.badge} border-transparent`}>{drug.via}</span>
            <span className="text-[10px] text-muted-foreground">{drug.dose_min}–{drug.dose_max} {drug.unidade}</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0" />
      </div>
    </motion.button>
  );
}

export default function Dosagens() {
  const allDrugs = useMemo(() => getAllDosagens(), []);

  // Support ?drug=id deep link from search
  const initialDrug = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const drugId = params.get('drug');
    return drugId ? allDrugs.find(d => d.id === drugId) || null : null;
  }, [allDrugs]);

  const [selected, setSelected] = useState(initialDrug);
  const [search, setSearch] = useState('');
  const [activeCategoria, setActiveCategoria] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allDrugs.filter(d => {
      const matchSearch = !q || [d.name, d.sinonimo, d.marcas, d.catLabel].filter(Boolean).some(s => s.toLowerCase().includes(q));
      const matchCat = !activeCategoria || d.catId === activeCategoria;
      return matchSearch && matchCat;
    });
  }, [search, activeCategoria, allDrugs]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach(d => {
      if (!g[d.catId]) g[d.catId] = { label: d.catLabel, color: d.catColor, icon: d.catIcon, drugs: [] };
      g[d.catId].drugs.push(d);
    });
    return g;
  }, [filtered]);

  if (selected) {
    return (
      <AnimatePresence mode="wait">
        <motion.div key="detalhe" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}>
          <DosagemDetalhe drug={selected} onBack={() => setSelected(null)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div key="lista" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md">
            <span className="text-2xl">⚡</span>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Dosagens</h1>
            <p className="text-sm text-muted-foreground font-medium">Cálculo Rápido</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mt-2 ml-14">
          Insira o peso do paciente e calcule a dose automaticamente · <span className="font-semibold text-foreground">{allDrugs.length} medicamentos</span>
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar medicamento (ex: amoxicilina, ibuprofeno…)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-border rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-7">
        <button
          onClick={() => setActiveCategoria(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${!activeCategoria ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}
        >
          Todas
        </button>
        {DOSAGENS_CATEGORIAS.map(cat => {
          const meta = COLOR_MAP[cat.color] || COLOR_MAP.blue;
          const isActive = activeCategoria === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoria(isActive ? null : cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${isActive ? `${meta.bg} ${meta.text} ${meta.border}` : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}
            >
              {cat.icon} {cat.label}
            </button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-bold text-foreground text-lg">Nenhum medicamento encontrado</p>
          <p className="text-muted-foreground mt-1">Tente outros termos</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([catId, cat]) => {
            const meta = COLOR_MAP[cat.color] || COLOR_MAP.blue;
            return (
              <div key={catId}>
                <div className={`flex items-center gap-3 mb-3 px-4 py-2.5 rounded-xl border-2 ${meta.bg} ${meta.border}`}>
                  <span className="text-base">{cat.icon}</span>
                  <span className={`text-sm font-bold ${meta.text}`}>{cat.label}</span>
                  <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${meta.badge} border border-transparent`}>{cat.drugs.length}</span>
                </div>
                <div className="space-y-2">
                  {cat.drugs.map(drug => (
                    <DrugCard key={drug.id} drug={drug} catColor={cat.color} onClick={setSelected} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground/60 mt-12">
        Ferramenta de suporte à decisão clínica. Sempre valide com protocolos institucionais.
      </p>
    </motion.div>
  );
}