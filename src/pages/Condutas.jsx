import React, { useState, useMemo, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Search, BookOpen, X, Upload, Plus, Edit3, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import MarkdownRenderer from '@/components/condutas/MarkdownRenderer';
import UploadCondutaModal from '@/components/condutas/UploadCondutaModal';
import NovaCategoriaModal from '@/components/condutas/NovaCategoriaModal';
import { base44 } from '@/api/base44Client';

const COLOR_MAP = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   icon: 'bg-blue-100',   badge: 'bg-blue-100 text-blue-700',   header: 'from-blue-500 to-blue-700' },
  cyan:   { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700',   icon: 'bg-cyan-100',   badge: 'bg-cyan-100 text-cyan-700',   header: 'from-cyan-500 to-blue-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'bg-purple-100', badge: 'bg-purple-100 text-purple-700', header: 'from-purple-500 to-purple-700' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    icon: 'bg-red-100',    badge: 'bg-red-100 text-red-700',    header: 'from-red-500 to-red-700' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   icon: 'bg-teal-100',   badge: 'bg-teal-100 text-teal-700',   header: 'from-teal-500 to-teal-700' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  icon: 'bg-green-100',  badge: 'bg-green-100 text-green-700',  header: 'from-green-500 to-green-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'bg-orange-100', badge: 'bg-orange-100 text-orange-700', header: 'from-orange-500 to-orange-700' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  icon: 'bg-amber-100',  badge: 'bg-amber-100 text-amber-700',  header: 'from-amber-500 to-orange-600' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'bg-yellow-100', badge: 'bg-yellow-100 text-yellow-700', header: 'from-yellow-500 to-amber-600' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', icon: 'bg-indigo-100', badge: 'bg-indigo-100 text-indigo-700', header: 'from-indigo-500 to-indigo-700' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-700',   icon: 'bg-pink-100',   badge: 'bg-pink-100 text-pink-700',   header: 'from-pink-500 to-rose-600' },
};

function getColor(color) {
  return COLOR_MAP[color] || COLOR_MAP.blue;
}

// ── Tópico View ─────────────────────────────────────────────────────────────
function TopicoView({ topico, categoria, onBack, onEdit, isAdmin }) {
  const c = getColor(categoria.color);
  const hasContent = topico.conteudo && topico.conteudo.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-screen pb-8"
    >
      {/* Header */}
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-4 shadow`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium mb-3 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Voltar
        </button>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{categoria.icon}</span>
              <span className="text-white/70 text-xs">{categoria.label}</span>
            </div>
            <h1 className="text-xl font-bold leading-tight">{topico.label}</h1>
          </div>
          {isAdmin && (
            <button
              onClick={onEdit}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-all flex-shrink-0"
            >
              <Edit3 className="w-3.5 h-3.5" />
              {hasContent ? 'Editar' : 'Adicionar'}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-border flex-1">
        {hasContent ? (
          <div className="p-5 sm:p-7">
            <MarkdownRenderer content={topico.conteudo} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center px-6">
            <span className="text-5xl mb-4">🚧</span>
            <p className="text-base font-bold text-foreground mb-2">Conteúdo em desenvolvimento</p>
            <p className="text-sm text-muted-foreground max-w-xs mb-5">
              {isAdmin ? 'Este tópico ainda não possui conteúdo. Clique abaixo para adicionar.' : 'Este tópico ainda não possui conteúdo disponível.'}
            </p>
            {isAdmin && (
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all"
              >
                <Upload className="w-4 h-4" /> Adicionar Conteúdo
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Subcategoria View ────────────────────────────────────────────────────────
function SubcategoriaView({ subcategoria, categoria, onSelectTopico, onBack }) {
  const c = getColor(categoria.color);
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-4 shadow`}>
        <button onClick={onBack} className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium mb-3 transition-colors">
          <ChevronLeft className="w-3.5 h-3.5" /> {categoria.label}
        </button>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{categoria.icon}</span>
          <h1 className="text-xl font-bold">{subcategoria.label}</h1>
        </div>
        <p className="text-white/70 text-xs mt-1">{subcategoria.topicos.length} tópico{subcategoria.topicos.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="space-y-2">
        {subcategoria.topicos.map((topico) => {
          const hasContent = topico.conteudo && topico.conteudo.trim().length > 0;
          return (
            <motion.button
              key={topico.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTopico(topico)}
              className={`w-full flex items-center justify-between p-4 rounded-xl bg-white border ${c.border} hover:${c.bg} transition-all text-left shadow-sm`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${c.icon} flex items-center justify-center flex-shrink-0`}>
                  {hasContent
                    ? <CheckCircle className={`w-4 h-4 ${c.text}`} />
                    : <BookOpen className={`w-4 h-4 ${c.text} opacity-50`} />
                  }
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">{topico.label}</span>
                  {!hasContent && <span className="block text-xs text-muted-foreground">Em desenvolvimento</span>}
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── Categoria View ───────────────────────────────────────────────────────────
function CategoriaView({ categoria, onSelectSubcat, onBack }) {
  const c = getColor(categoria.color);
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-4 shadow`}>
        <button onClick={onBack} className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium mb-3 transition-colors">
          <ChevronLeft className="w-3.5 h-3.5" /> Condutas
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{categoria.icon}</span>
          <div>
            <h1 className="text-xl font-bold">{categoria.label}</h1>
            <p className="text-white/70 text-xs mt-0.5">
              {categoria.subcategorias.length} subcategoria{categoria.subcategorias.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {categoria.subcategorias.length > 0 ? (
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
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <span className="text-4xl mb-3 block">📂</span>
          <p className="text-sm">Nenhuma subcategoria ainda.</p>
        </div>
      )}
    </motion.div>
  );
}

// ── Home View ────────────────────────────────────────────────────────────────
function HomeView({ categorias, onSelectCategoria, searchQuery, onSearchChange, onNovaCat }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-5 shadow-lg"
      >
        <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Condutas Pediátricas</p>
        <h1 className="text-2xl font-extrabold mb-1">Condutas e Manejos</h1>
        <p className="text-white/70 text-sm">Protocolos e condutas organizados por categoria</p>
      </motion.div>

      {/* Busca */}
      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar por categoria, tópico, sintoma..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full border border-border rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {searchQuery && (
          <button onClick={() => onSearchChange('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Grid de categorias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {categorias.map((cat, i) => {
          const c = getColor(cat.color);
          const totalTopicos = cat.subcategorias.reduce((acc, s) => acc + s.topicos.length, 0);
          const comConteudo = cat.subcategorias.reduce((acc, s) => acc + s.topicos.filter(t => t.conteudo?.trim()).length, 0);
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
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {totalTopicos} tópico{totalTopicos !== 1 ? 's' : ''}
                    {comConteudo > 0 && <span className={`ml-2 font-semibold ${c.text}`}>• {comConteudo} com conteúdo</span>}
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
            </motion.button>
          );
        })}
      </div>

      {/* Botão nova categoria */}
      <button
        onClick={onNovaCat}
        className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 text-sm text-muted-foreground hover:text-primary font-semibold transition-all"
      >
        <Plus className="w-4 h-4" /> Criar nova categoria
      </button>
    </div>
  );
}

// ── Search Results ───────────────────────────────────────────────────────────
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
      <p className="text-xs text-muted-foreground font-medium mb-3">{results.length} resultado{results.length !== 1 ? 's' : ''}</p>
      {results.map((r, i) => {
        const c = getColor(r.categoria.color);
        const hasContent = r.topico.conteudo?.trim();
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
            <div className="flex items-center gap-2">
              {hasContent && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✓ conteúdo</span>}
              <ChevronRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function Condutas() {
  const [view, setView] = useState('home');
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null);
  const [selectedTopico, setSelectedTopico] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showNovaCatModal, setShowNovaCatModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Local override of categorias (includes user-created + edited content)
  const [categorias, setCategorias] = useState(CONDUTAS_CATEGORIAS);

  // Check if user is admin
  useEffect(() => {
    base44.auth.me().then(user => {
      if (user) setIsAdmin(user.role === 'admin');
    }).catch(() => {});
  }, []);

  // Load DB condutas and merge into categories
  useEffect(() => {
    Promise.all([
      base44.entities.CategoriaCustom.list(),
      base44.entities.Conduta.list(),
    ]).then(([customCats, dbCondutas]) => {
      setCategorias(prev => {
        // Start with static data
        let merged = prev.map(cat => ({ ...cat, subcategorias: cat.subcategorias.map(sub => ({ ...sub, topicos: sub.topicos.map(t => ({ ...t })) })) }));

        // Override/inject content from DB into existing static topics
        dbCondutas.forEach(cond => {
          const cat = merged.find(c => c.id === cond.categoria_id || c.label === cond.categoria_label);
          if (cat) {
            const sub = cat.subcategorias.find(s => s.id === cond.subcategoria_id || s.label === cond.subcategoria_label);
            if (sub) {
              const topIdx = sub.topicos.findIndex(t => t.id === cond.topico_id || t.label === cond.topico_label);
              if (topIdx >= 0) {
                sub.topicos[topIdx] = { ...sub.topicos[topIdx], conteudo: cond.conteudo || sub.topicos[topIdx].conteudo };
              } else if (cond.is_custom) {
                sub.topicos.push({ id: cond.topico_id || cond.id, label: cond.topico_label, conteudo: cond.conteudo || '' });
              }
            } else if (cond.is_custom) {
              const subId = cond.subcategoria_id || cond.id + '-sub';
              let newSub = cat.subcategorias.find(s => s.id === subId);
              if (!newSub) {
                newSub = { id: subId, label: cond.subcategoria_label || 'Geral', topicos: [] };
                cat.subcategorias.push(newSub);
              }
              newSub.topicos.push({ id: cond.topico_id || cond.id, label: cond.topico_label, conteudo: cond.conteudo || '' });
            }
          }
        });

        // Add fully custom categories from DB
        customCats.forEach(customCat => {
          const exists = merged.find(c => c.id === customCat.categoria_id || c.label === customCat.label);
          if (!exists) {
            const subs = (customCat.subcategorias || []).map(s => ({
              id: s.id, label: s.label,
              topicos: dbCondutas.filter(d => d.categoria_label === customCat.label && d.subcategoria_label === s.label)
                .map(d => ({ id: d.topico_id || d.id, label: d.topico_label, conteudo: d.conteudo || '' })),
            }));
            // Also add condutas without a subcategoria
            const noSubCondutas = dbCondutas.filter(d => d.categoria_label === customCat.label && !d.subcategoria_label);
            if (noSubCondutas.length > 0) {
              subs.push({ id: 'geral', label: 'Geral', topicos: noSubCondutas.map(d => ({ id: d.topico_id || d.id, label: d.topico_label, conteudo: d.conteudo || '' })) });
            }
            merged.push({ id: customCat.categoria_id || customCat.id, label: customCat.label, icon: customCat.icon, color: customCat.color, subcategorias: subs });
          }
        });

        return merged;
      });
    }).catch(() => {});
  }, []);

  // Busca global
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    const results = [];
    categorias.forEach((cat) => {
      cat.subcategorias.forEach((sub) => {
        sub.topicos.forEach((top) => {
          if (
            top.label.toLowerCase().includes(q) ||
            cat.label.toLowerCase().includes(q) ||
            sub.label.toLowerCase().includes(q) ||
            (top.conteudo || '').toLowerCase().includes(q)
          ) {
            results.push({ categoria: cat, subcategoria: sub, topico: top });
          }
        });
      });
    });
    return results.slice(0, 20);
  }, [searchQuery, categorias]);

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
    else { setView('home'); setSelectedCategoria(null); setSelectedSubcategoria(null); }
  };

  // Update topico content in-memory
  const handleContentUpdate = (newContent) => {
    setCategorias(prev => prev.map(cat => {
      if (cat.id !== selectedCategoria.id) return cat;
      return {
        ...cat,
        subcategorias: cat.subcategorias.map(sub => {
          if (sub.id !== selectedSubcategoria.id) return sub;
          return {
            ...sub,
            topicos: sub.topicos.map(top => {
              if (top.id !== selectedTopico.id) return top;
              const updated = { ...top, conteudo: newContent };
              setSelectedTopico(updated);
              return updated;
            }),
          };
        }),
      };
    }));
  };

  // Add new categoria
  const handleAddCategoria = (novaCat) => {
    setCategorias(prev => [...prev, novaCat]);
  };

  const isSearching = searchQuery.trim().length >= 2;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <AnimatePresence mode="wait">
        {view === 'home' && !isSearching && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HomeView
              categorias={categorias}
              onSelectCategoria={handleSelectCategoria}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onNovaCat={() => setShowNovaCatModal(true)}
            />
          </motion.div>
        )}

        {view === 'home' && isSearching && (
          <motion.div key="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-5 shadow-lg">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Condutas Pediátricas</p>
              <h1 className="text-2xl font-extrabold mb-1">Condutas e Manejos</h1>
            </div>
            <div className="relative mb-5">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input type="text" placeholder="Buscar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-border rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
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
              onEdit={() => setShowUploadModal(true)}
              isAdmin={isAdmin}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && selectedTopico && (
          <UploadCondutaModal
            topico={selectedTopico}
            onClose={() => setShowUploadModal(false)}
            onContentUpdate={handleContentUpdate}
          />
        )}
      </AnimatePresence>

      {/* Nova Categoria Modal */}
      <AnimatePresence>
        {showNovaCatModal && (
          <NovaCategoriaModal
            onClose={() => setShowNovaCatModal(false)}
            onAdd={handleAddCategoria}
          />
        )}
      </AnimatePresence>
    </div>
  );
}