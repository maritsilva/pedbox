import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, ChevronRight, ChevronLeft, LayoutGrid, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import MarkdownRenderer from '@/components/condutas/MarkdownRenderer';
import { base44 } from '@/api/base44Client';

const COLOR_MAP = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'bg-blue-100', header: 'from-blue-500 to-blue-700', badge: 'bg-blue-100 text-blue-700' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', icon: 'bg-cyan-100', header: 'from-cyan-500 to-blue-600', badge: 'bg-cyan-100 text-cyan-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'bg-purple-100', header: 'from-purple-500 to-purple-700', badge: 'bg-purple-100 text-purple-700' },
  red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'bg-red-100', header: 'from-red-500 to-red-700', badge: 'bg-red-100 text-red-700' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: 'bg-teal-100', header: 'from-teal-500 to-teal-700', badge: 'bg-teal-100 text-teal-700' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'bg-green-100', header: 'from-green-500 to-green-700', badge: 'bg-green-100 text-green-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'bg-orange-100', header: 'from-orange-500 to-orange-700', badge: 'bg-orange-100 text-orange-700' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: 'bg-amber-100', header: 'from-amber-500 to-orange-600', badge: 'bg-amber-100 text-amber-700' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'bg-yellow-100', header: 'from-yellow-500 to-amber-600', badge: 'bg-yellow-100 text-yellow-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', icon: 'bg-indigo-100', header: 'from-indigo-500 to-indigo-700', badge: 'bg-indigo-100 text-indigo-700' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: 'bg-pink-100', header: 'from-pink-500 to-rose-600', badge: 'bg-pink-100 text-pink-700' }
};

function getC(color) {
  return COLOR_MAP[color] || COLOR_MAP.blue;
}

// ── Topic Detail View ─────────────────────────────────────────────────────────
function TopicoDetail({ topico, categoria, subcategoria, onBack }) {
  const c = getC(categoria.color);
  const hasContent = topico.conteudo && topico.conteudo.trim().length > 0;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl mx-auto">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar às Condutas
      </button>

      {/* Header */}
      <div className={`bg-gradient-to-br ${c.header} text-white rounded-2xl p-5 mb-5 shadow`}>
        <div className="flex items-center gap-2 mb-1 text-white/70 text-xs">
          <span>{categoria.icon}</span>
          <span>{categoria.label}</span>
          <span>›</span>
          <span>{subcategoria.label}</span>
        </div>
        <h1 className="text-xl font-bold leading-tight">{topico.label}</h1>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-border shadow-sm">
        {hasContent ?
        <div className="p-5 sm:p-7">
            <MarkdownRenderer content={topico.conteudo} />
          </div> :

        <div className="flex flex-col items-center justify-center py-16 text-center px-6">
            <span className="text-5xl mb-4">🚧</span>
            <p className="text-base font-bold text-foreground mb-2">Conteúdo em desenvolvimento</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Este tópico ainda não possui conteúdo cadastrado.
            </p>
          </div>
        }
      </div>
    </motion.div>);

}

// ── Main CondutasTab ──────────────────────────────────────────────────────────
export default function CondutasTab() {
  const [categorias, setCategorias] = useState(CONDUTAS_CATEGORIAS);
  const [search, setSearch] = useState('');
  const [activeCategoria, setActiveCategoria] = useState(null); // filter by category id
  const [selectedTopico, setSelectedTopico] = useState(null); // { topico, categoria, subcategoria }

  // Load DB overrides
  useEffect(() => {
    Promise.all([
    base44.entities.CategoriaCustom.list(),
    base44.entities.Conduta.list()]
    ).then(([customCats, dbCondutas]) => {
      setCategorias((prev) => {
        let merged = prev.map((cat) => ({
          ...cat,
          subcategorias: cat.subcategorias.map((sub) => ({
            ...sub,
            topicos: sub.topicos.map((t) => ({ ...t }))
          }))
        }));

        dbCondutas.forEach((cond) => {
          const cat = merged.find((c) => c.id === cond.categoria_id || c.label === cond.categoria_label);
          if (cat) {
            const sub = cat.subcategorias.find((s) => s.id === cond.subcategoria_id || s.label === cond.subcategoria_label);
            if (sub) {
              const topIdx = sub.topicos.findIndex((t) => t.id === cond.topico_id || t.label === cond.topico_label);
              if (topIdx >= 0) {
                sub.topicos[topIdx] = { ...sub.topicos[topIdx], conteudo: cond.conteudo || sub.topicos[topIdx].conteudo };
              } else if (cond.is_custom) {
                sub.topicos.push({ id: cond.topico_id || cond.id, label: cond.topico_label, conteudo: cond.conteudo || '' });
              }
            }
          }
        });

        customCats.forEach((customCat) => {
          const exists = merged.find((c) => c.id === customCat.categoria_id || c.label === customCat.label);
          if (!exists) {
            const subs = (customCat.subcategorias || []).map((s) => ({
              id: s.id, label: s.label,
              topicos: dbCondutas.
              filter((d) => d.categoria_label === customCat.label && d.subcategoria_label === s.label).
              map((d) => ({ id: d.topico_id || d.id, label: d.topico_label, conteudo: d.conteudo || '' }))
            }));
            merged.push({
              id: customCat.categoria_id || customCat.id,
              label: customCat.label,
              icon: customCat.icon,
              color: customCat.color,
              subcategorias: subs
            });
          }
        });

        return merged;
      });
    }).catch(() => {});
  }, []);

  // Flatten all topicos for search
  const allTopicos = useMemo(() => {
    const list = [];
    categorias.forEach((cat) => {
      cat.subcategorias.forEach((sub) => {
        sub.topicos.forEach((top) => {
          list.push({ topico: top, categoria: cat, subcategoria: sub });
        });
      });
    });
    return list;
  }, [categorias]);

  const q = search.toLowerCase().trim();

  const filteredTopicos = useMemo(() => {
    return allTopicos.filter(({ topico, categoria, subcategoria }) => {
      const matchSearch = !q ||
      topico.label.toLowerCase().includes(q) ||
      categoria.label.toLowerCase().includes(q) ||
      subcategoria.label.toLowerCase().includes(q) ||
      (topico.conteudo || '').toLowerCase().includes(q);
      const matchCat = !activeCategoria || categoria.id === activeCategoria;
      return matchSearch && matchCat;
    });
  }, [allTopicos, q, activeCategoria]);

  // Group filtered topicos by category
  const grouped = useMemo(() => {
    const groups = {};
    filteredTopicos.forEach((item) => {
      if (!groups[item.categoria.id]) {
        groups[item.categoria.id] = { categoria: item.categoria, items: [] };
      }
      groups[item.categoria.id].items.push(item);
    });
    return Object.values(groups);
  }, [filteredTopicos]);

  const totalTopicos = allTopicos.length;
  const comConteudo = allTopicos.filter(({ topico }) => topico.conteudo?.trim()).length;

  // ── Detail view ──
  if (selectedTopico) {
    return (
      <TopicoDetail
        topico={selectedTopico.topico}
        categoria={selectedTopico.categoria}
        subcategoria={selectedTopico.subcategoria}
        onBack={() => setSelectedTopico(null)} />);


  }

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-2xl mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground hidden" />
        <input
          type="text"
          placeholder="Buscar conduta, patologia ou tópico..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-border rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all hidden" />
        
        {search &&
        <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        }
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategoria(null)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
          !activeCategoria ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`
          }>
          
          Todas
        </button>
        {categorias.map((cat) => {
          const c = getC(cat.color);
          const isActive = activeCategoria === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoria(isActive ? null : cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              isActive ? `${c.badge} border-current` : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`
              }>
              
              <span>{cat.icon}</span> {cat.label}
            </button>);

        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── LEFT: Main content ── */}
        <div className="flex-1 min-w-0 space-y-4">
          {q &&
          <p className="text-xs text-muted-foreground">
              {filteredTopicos.length} resultado{filteredTopicos.length !== 1 ? 's' : ''} para "<strong>{search}</strong>"
            </p>
          }

          {filteredTopicos.length === 0 ?
          <div className="text-center py-16 bg-white border border-border rounded-2xl">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold text-foreground">Nenhum resultado encontrado</p>
              <p className="text-sm text-muted-foreground mt-1">Tente outros termos como "sepse", "asma" ou "crupe".</p>
            </div> :

          grouped.map(({ categoria, items }) => {
            const c = getC(categoria.color);
            // Group items by subcategoria
            const bySubcat = {};
            items.forEach((item) => {
              if (!bySubcat[item.subcategoria.id]) {
                bySubcat[item.subcategoria.id] = { subcategoria: item.subcategoria, topicos: [] };
              }
              bySubcat[item.subcategoria.id].topicos.push(item);
            });

            return (
              <div key={categoria.id} className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
                  {/* Category header */}
                  <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b border-border`}>
                    <span className="text-xl">{categoria.icon}</span>
                    <span className={`text-base font-extrabold ${c.text}`}>{categoria.label}</span>
                    <span className={`ml-auto text-xs font-semibold px-2.5 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                      {items.length} tópico{items.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Subcategories + topics */}
                  {Object.values(bySubcat).map(({ subcategoria, topicos: subcatTopicos }) =>
                <div key={subcategoria.id}>
                      {/* Subcategory label */}
                      <div className={`px-5 py-2 ${c.bg} border-b border-border/50`}>
                        <p className={`text-xs font-bold ${c.text}`}>{subcategoria.label}</p>
                      </div>
                      {/* Topics */}
                      <div className="divide-y divide-border/60">
                        {subcatTopicos.map(({ topico }) => {
                      const hasContent = topico.conteudo?.trim();
                      return (
                        <button
                          key={topico.id}
                          onClick={() => setSelectedTopico({ topico, categoria, subcategoria })}
                          className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-secondary/30 transition-all group">
                          
                              <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center text-lg flex-shrink-0`}>
                                {hasContent ? <CheckCircle className={`w-5 h-5 ${c.text}`} /> : <BookOpen className={`w-4 h-4 ${c.text} opacity-40`} />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-foreground">{topico.label}</p>
                                {!hasContent && <p className="text-xs text-muted-foreground">Em desenvolvimento</p>}
                              </div>
                              <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                                {hasContent &&
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">✓ conteúdo</span>
                            }
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                            </button>);

                    })}
                      </div>
                    </div>
                )}
                </div>);

          })
          }

          {!q && !activeCategoria &&
          <div className="bg-secondary/60 border border-border rounded-2xl p-5 text-center">
              <BookOpen className="w-7 h-7 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">Mais condutas em breve</p>
              <p className="text-xs text-muted-foreground mt-1">Conteúdos sendo adicionados continuamente.</p>
            </div>
          }
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">
          {/* Counter */}
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary leading-none">{totalTopicos}</p>
              <p className="text-sm font-semibold text-foreground">tópicos indexados</p>
            </div>
          </div>

          {/* Categorias rápidas */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <LayoutGrid className="w-4 h-4 text-primary" />
              <p className="font-bold text-sm text-foreground">Categorias</p>
            </div>
            <div className="divide-y divide-border/60">
              {categorias.map((cat) => {
                const c = getC(cat.color);
                const total = cat.subcategorias.reduce((acc, s) => acc + s.topicos.length, 0);
                const withContent = cat.subcategorias.reduce(
                  (acc, s) => acc + s.topicos.filter((t) => t.conteudo?.trim()).length, 0
                );
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoria(activeCategoria === cat.id ? null : cat.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3 hover:bg-secondary/40 transition-colors group text-left ${activeCategoria === cat.id ? c.bg : ''}`}>
                    
                    <span className="text-lg flex-shrink-0">{cat.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate ${activeCategoria === cat.id ? c.text : 'text-foreground'}`}>{cat.label}</p>
                      <p className="text-xs text-muted-foreground">{total} tópico{total !== 1 ? 's' : ''}</p>
                    </div>
                  </button>);

              })}
            </div>
          </div>
        </div>
      </div>
    </div>);

}