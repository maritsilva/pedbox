import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUMOS } from '@/lib/resumosData';
import ResumoDetalhe from '@/components/resumos/ResumoDetalhe';

const CATEGORIA_COLORS = {
  'Infectologia':      { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500', from: 'from-orange-500' },
  'Nutrição':          { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  dot: 'bg-green-500',  from: 'from-green-500' },
  'Gastroenterologia': { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   dot: 'bg-teal-500',   from: 'from-teal-500' },
  'Neurodesenvolvimento': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500', from: 'from-purple-500' },
  'Respiratório':      { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   dot: 'bg-blue-500',   from: 'from-blue-500' },
  'Endocrinologia':    { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', dot: 'bg-yellow-500', from: 'from-yellow-500' },
  'Neurologia':        { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', dot: 'bg-indigo-500', from: 'from-indigo-500' },
  'Nefrologia':        { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700',   dot: 'bg-cyan-500',   from: 'from-cyan-500' },
  'Emergência':        { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    dot: 'bg-red-500',    from: 'from-red-500' },
  'Social':            { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-700',   dot: 'bg-pink-500',   from: 'from-pink-500' },
};

function ResumoCard({ resumo, onClick }) {
  const catMeta = CATEGORIA_COLORS[resumo.categoria] || CATEGORIA_COLORS['Infectologia'];

  return (
    <motion.button
      onClick={() => onClick(resumo)}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all overflow-hidden group"
    >
      <div className={`h-1 bg-gradient-to-r ${catMeta.from} to-transparent`} />
      <div className="p-4 flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl ${catMeta.bg} border ${catMeta.border} flex items-center justify-center flex-shrink-0`}>
          <span className="text-2xl">{resumo.emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-sm leading-snug">{resumo.titulo}</p>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{resumo.subtitulo}</p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${catMeta.bg} ${catMeta.border} ${catMeta.text}`}>
              {resumo.categoria}
            </span>
            <span className="text-[10px] text-muted-foreground/70">{resumo.seções.length} seções</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </div>
    </motion.button>
  );
}

export default function Resumos() {
  const [selectedResumo, setSelectedResumo] = useState(null);
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

  // Group by category
  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach(r => {
      if (!groups[r.categoria]) groups[r.categoria] = [];
      groups[r.categoria].push(r);
    });
    return groups;
  }, [filtered]);

  if (selectedResumo) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="detalhe"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
        >
          <ResumoDetalhe resumo={selectedResumo} onBack={() => setSelectedResumo(null)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      key="lista"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 py-8"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-extrabold text-foreground">Resumos Clínicos</h1>
        </div>
        <p className="text-muted-foreground text-sm">Sínteses baseadas em evidências · {RESUMOS.length} resumos disponíveis</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar resumo (ex: varicela, diarreia, puberdade…)"
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
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategoria(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${!activeCategoria ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}
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
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${isActive ? `${meta.bg} ${meta.text} ${meta.border}` : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results count when filtering */}
      {(search || activeCategoria) && (
        <p className="text-xs text-muted-foreground mb-4">
          {filtered.length === 0 ? 'Nenhum resumo encontrado' : `${filtered.length} resumo${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`}
        </p>
      )}

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-14">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-foreground">Nenhum resumo encontrado</p>
          <p className="text-sm text-muted-foreground mt-1">Tente outros termos de busca</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([categoria, resumos]) => {
            const meta = CATEGORIA_COLORS[categoria] || {};
            return (
              <div key={categoria}>
                {/* Category header */}
                <div className={`flex items-center gap-2 mb-3 px-3 py-2 rounded-xl ${meta.bg} border ${meta.border}`}>
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${meta.dot}`} />
                  <span className={`text-sm font-bold ${meta.text}`}>{categoria}</span>
                  <span className={`ml-auto text-xs font-semibold ${meta.text} opacity-70`}>
                    {resumos.length} resumo{resumos.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="space-y-2">
                  {resumos.map(resumo => (
                    <ResumoCard key={resumo.id} resumo={resumo} onClick={setSelectedResumo} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}