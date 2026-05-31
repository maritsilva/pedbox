import React, { useState, useMemo } from 'react';
import { ChevronRight, ChevronLeft, Search, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';

const COLOR_MAP = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'bg-blue-100', badge: 'bg-blue-100 text-blue-700', header: 'from-blue-500 to-blue-700' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', icon: 'bg-cyan-100', badge: 'bg-cyan-100 text-cyan-700', header: 'from-cyan-500 to-blue-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'bg-purple-100', badge: 'bg-purple-100 text-purple-700', header: 'from-purple-500 to-purple-700' },
  red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'bg-red-100', badge: 'bg-red-100 text-red-700', header: 'from-red-500 to-red-700' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: 'bg-teal-100', badge: 'bg-teal-100 text-teal-700', header: 'from-teal-500 to-teal-700' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'bg-green-100', badge: 'bg-green-100 text-green-700', header: 'from-green-500 to-green-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'bg-orange-100', badge: 'bg-orange-100 text-orange-700', header: 'from-orange-500 to-orange-700' },
};

function getColor(color) {
  return COLOR_MAP[color] || COLOR_MAP.blue;
}

// Vista de conteúdo do tópico
function TopicoView({ topico, categoria, onBack }) {
  const c = getColor(categoria.color);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-4 shadow`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium mb-3 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Voltar
        </button>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{categoria.icon}</span>
          <span className="text-white/70 text-xs">{categoria.label}</span>
        </div>
        <h1 className="text-xl font-bold leading-tight">{topico.label}</h1>
      </div>

      {/* Conteúdo */}
      <div className="bg-white rounded-2xl border border-border p-5 flex-1 overflow-auto">
        <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-h2:text-base prose-h2:font-bold prose-h2:mt-5 prose-h2:mb-2 prose-h3:text-sm prose-h3:font-semibold prose-h3:mt-3 prose-h3:mb-1 prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm prose-table:text-xs prose-th:bg-secondary prose-th:p-2 prose-td:p-2 prose-td:border prose-th:border">
          <ReactMarkdown>{topico.conteudo}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}

// Vista de subcategoria (lista de tópicos)
function SubcategoriaView({ subcategoria, categoria, onSelectTopico, onBack }) {
  const c = getColor(categoria.color);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-4 shadow`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium mb-3 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> {categoria.label}
        </button>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{categoria.icon}</span>
          <h1 className="text-xl font-bold">{subcategoria.label}</h1>
        </div>
        <p className="text-white/70 text-xs mt-1">{subcategoria.topicos.length} tópico{subcategoria.topicos.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="space-y-2">
        {subcategoria.topicos.map((topico) => (
          <motion.button
            key={topico.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectTopico(topico)}
            className={`w-full flex items-center justify-between p-4 rounded-xl bg-white border ${c.border} hover:${c.bg} transition-all text-left shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${c.icon} flex items-center justify-center flex-shrink-0`}>
                <BookOpen className={`w-4 h-4 ${c.text}`} />
              </div>
              <span className="text-sm font-semibold text-foreground">{topico.label}</span>
            </div>
            <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

// Vista de categoria (lista de subcategorias)
function CategoriaView({ categoria, onSelectSubcat, onBack }) {
  const c = getColor(categoria.color);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-4 shadow`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium mb-3 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Condutas
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{categoria.icon}</span>
          <div>
            <h1 className="text-xl font-bold">{categoria.label}</h1>
            <p className="text-white/70 text-xs mt-0.5">{categoria.subcategorias.length} subcategoria{categoria.subcategorias.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {categoria.subcategorias.map((sub) => (
          <motion.button
            key={sub.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectSubcat(sub)}
            className={`w-full flex items-center justify-between p-4 rounded-xl bg-white border ${c.border} hover:${c.bg} transition-all text-left shadow-sm`}
          >
            <div>
              <p className="text-sm font-semibold text-foreground">{sub.label}</p>
              <p className={`text-xs ${c.text} mt-0.5`}>{sub.topicos.length} tópico{sub.topicos.length !== 1 ? 's' : ''}</p>
            </div>
            <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

// Lista principal de categorias
function HomeView({ categorias, onSelectCategoria, searchQuery, onSearchChange }) {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-5 shadow-lg"
      >
        <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Condutas Pediátricas</p>
        <h1 className="text-2xl font-extrabold mb-1">Condutas e Manejos</h1>
        <p className="text-white/70 text-sm">Protocolos e condutas organizados por categoria para auxiliar na prática clínica</p>
      </motion.div>

      {/* Busca */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar por categoria, tópico, sintoma ou indicação..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full border border-border rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Grid de categorias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {categorias.map((cat, i) => {
          const c = getColor(cat.color);
          const totalTopicos = cat.subcategorias.reduce((acc, s) => acc + s.topicos.length, 0);
          return (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectCategoria(cat)}
              className={`flex items-center justify-between p-4 rounded-xl bg-white border-2 ${c.border} hover:${c.bg} transition-all text-left shadow-sm`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center text-xl flex-shrink-0`}>
                  {cat.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight">{cat.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{totalTopicos} tópico{totalTopicos !== 1 ? 's' : ''}</p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Resultados de busca
function SearchResults({ results, onSelectResult }) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
        <p className="text-sm">Nenhum resultado encontrado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground font-medium mb-3">{results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}</p>
      {results.map((r, i) => {
        const c = getColor(r.categoria.color);
        return (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectResult(r)}
            className={`w-full flex items-center justify-between p-4 rounded-xl bg-white border ${c.border} hover:${c.bg} transition-all text-left shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{r.categoria.icon}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{r.topico.label}</p>
                <p className={`text-xs ${c.text} mt-0.5`}>{r.categoria.label} › {r.subcategoria.label}</p>
              </div>
            </div>
            <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
          </motion.button>
        );
      })}
    </div>
  );
}

export default function Condutas() {
  const [view, setView] = useState('home'); // 'home' | 'categoria' | 'subcategoria' | 'topico'
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null);
  const [selectedTopico, setSelectedTopico] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Busca global
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    const results = [];
    CONDUTAS_CATEGORIAS.forEach((cat) => {
      cat.subcategorias.forEach((sub) => {
        sub.topicos.forEach((top) => {
          if (
            top.label.toLowerCase().includes(q) ||
            cat.label.toLowerCase().includes(q) ||
            sub.label.toLowerCase().includes(q) ||
            top.conteudo.toLowerCase().includes(q)
          ) {
            results.push({ categoria: cat, subcategoria: sub, topico: top });
          }
        });
      });
    });
    return results.slice(0, 20);
  }, [searchQuery]);

  const handleSelectCategoria = (cat) => {
    setSelectedCategoria(cat);
    setView('categoria');
  };

  const handleSelectSubcategoria = (sub) => {
    setSelectedSubcategoria(sub);
    setView('subcategoria');
  };

  const handleSelectTopico = (top) => {
    setSelectedTopico(top);
    setView('topico');
  };

  const handleSearchResultSelect = (r) => {
    setSelectedCategoria(r.categoria);
    setSelectedSubcategoria(r.subcategoria);
    setSelectedTopico(r.topico);
    setView('topico');
    setSearchQuery('');
  };

  const handleBack = () => {
    if (view === 'topico') setView('subcategoria');
    else if (view === 'subcategoria') setView('categoria');
    else {
      setView('home');
      setSelectedCategoria(null);
      setSelectedSubcategoria(null);
    }
  };

  const isSearching = searchQuery.trim().length >= 2;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <AnimatePresence mode="wait">
        {view === 'home' && !isSearching && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HomeView
              categorias={CONDUTAS_CATEGORIAS}
              onSelectCategoria={handleSelectCategoria}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>
        )}

        {view === 'home' && isSearching && (
          <motion.div key="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Header com busca */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-5 shadow-lg">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Condutas Pediátricas</p>
              <h1 className="text-2xl font-extrabold mb-1">Condutas e Manejos</h1>
              <p className="text-white/70 text-sm">Protocolos e condutas organizados por categoria</p>
            </div>
            <div className="relative mb-5">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar por categoria, tópico, sintoma ou indicação..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-border rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <SearchResults results={searchResults} onSelectResult={handleSearchResultSelect} />
          </motion.div>
        )}

        {view === 'categoria' && selectedCategoria && (
          <motion.div key="categoria" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CategoriaView
              categoria={selectedCategoria}
              onSelectSubcat={handleSelectSubcategoria}
              onBack={() => { setView('home'); setSelectedCategoria(null); }}
            />
          </motion.div>
        )}

        {view === 'subcategoria' && selectedSubcategoria && selectedCategoria && (
          <motion.div key="subcategoria" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubcategoriaView
              subcategoria={selectedSubcategoria}
              categoria={selectedCategoria}
              onSelectTopico={handleSelectTopico}
              onBack={() => setView('categoria')}
            />
          </motion.div>
        )}

        {view === 'topico' && selectedTopico && selectedCategoria && (
          <motion.div key="topico" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TopicoView
              topico={selectedTopico}
              categoria={selectedCategoria}
              onBack={handleBack}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}