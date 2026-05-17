import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, Search, X, BookMarked, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUMOS } from '@/lib/resumosData';

const CATEGORIA_COLORS = {
  'Infectologia': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500' },
  'Nutrição': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', dot: 'bg-green-500' },
  'Gastroenterologia': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', dot: 'bg-teal-500' },
  'Neurodesenvolvimento': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' },
  'Respiratório': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
  'Endocrinologia': { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', dot: 'bg-yellow-500' },
  'Neurologia': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', dot: 'bg-indigo-500' },
  'Nefrologia': { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', dot: 'bg-cyan-500' },
  'Emergência': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', dot: 'bg-red-500' },
  'Social': { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', dot: 'bg-pink-500' },
};

const SECTION_COLORS = {
  blue: 'bg-blue-50 border-blue-200 text-blue-800',
  red: 'bg-red-50 border-red-200 text-red-800',
  green: 'bg-green-50 border-green-200 text-green-800',
  amber: 'bg-amber-50 border-amber-200 text-amber-800',
  purple: 'bg-purple-50 border-purple-200 text-purple-800',
  orange: 'bg-orange-50 border-orange-200 text-orange-800',
  pink: 'bg-pink-50 border-pink-200 text-pink-800',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
  teal: 'bg-teal-50 border-teal-200 text-teal-800',
  gray: 'bg-gray-50 border-gray-200 text-gray-800',
  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-800',
};

function ResumoCard({ resumo, expanded, onToggle }) {
  const catMeta = CATEGORIA_COLORS[resumo.categoria] || CATEGORIA_COLORS['Infectologia'];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => onToggle(resumo.id)}
        className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50/80 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-2xl flex-shrink-0">{resumo.emoji}</span>
          <div className="text-left min-w-0 flex-1">
            <p className="font-bold text-foreground text-sm truncate">{resumo.titulo}</p>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{resumo.subtitulo}</p>
            <span className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${catMeta.bg} ${catMeta.border} ${catMeta.text}`}>
              {resumo.categoria}
            </span>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${expanded ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 divide-y divide-gray-100">
              {resumo.seções.map((seção, idx) => {
                const colorClass = SECTION_COLORS[seção.color] || SECTION_COLORS.blue;
                return (
                  <div key={idx} className="px-4 py-3">
                    <div className={`inline-flex items-center gap-1.5 mb-2 px-2.5 py-1 rounded-lg border text-xs font-bold ${colorClass}`}>
                      {seção.nome}
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{seção.conteudo}</p>
                  </div>
                );
              })}
              {resumo.referencia && (
                <div className="px-4 py-3 bg-gray-50/70">
                  <div className="flex items-start gap-1.5">
                    <BookMarked className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-foreground italic leading-relaxed">{resumo.referencia}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Resumos() {
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState('');
  const [activeCategoria, setActiveCategoria] = useState(null);

  const categorias = useMemo(() => [...new Set(RESUMOS.map(r => r.categoria))], []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return RESUMOS.filter(r => {
      const matchesSearch = !q || [r.titulo, r.subtitulo, r.categoria, ...r.seções.map(s => s.nome), ...r.seções.map(s => s.conteudo)].some(s => s.toLowerCase().includes(q));
      const matchesCat = !activeCategoria || r.categoria === activeCategoria;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategoria]);

  const toggleExpand = (id) => setExpandedId(prev => prev === id ? null : id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Resumos Clínicos</h1>
        <p className="text-muted-foreground text-sm">Sínteses baseadas em evidências para consulta rápida · {RESUMOS.length} resumos</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar (ex: sarampo, varicela, otite…)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setActiveCategoria(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${!activeCategoria ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/50'}`}
        >
          Todas
        </button>
        {categorias.map(cat => {
          const meta = CATEGORIA_COLORS[cat] || {};
          const isActive = activeCategoria === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategoria(isActive ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${isActive ? `${meta.bg} ${meta.text} ${meta.border}` : 'bg-white text-muted-foreground border-border hover:border-primary/50'}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-foreground">Nenhum resumo encontrado</p>
          <p className="text-sm text-muted-foreground mt-1">Tente outros termos de busca</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(resumo => (
            <ResumoCard
              key={resumo.id}
              resumo={resumo}
              expanded={expandedId === resumo.id}
              onToggle={toggleExpand}
            />
          ))}
        </div>
      )}

      {/* Info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900">
        <p className="font-semibold mb-1">📚 Referências</p>
        <p>Os resumos são baseados em diretrizes do Ministério da Saúde, SBP, OMS, AAP e outros órgãos de referência. As referências específicas aparecem ao expandir cada resumo.</p>
      </div>
    </div>
  );
}