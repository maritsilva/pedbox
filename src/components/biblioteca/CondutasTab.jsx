import { useSearchParams } from 'react-router-dom';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import React, { useState, useMemo, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import MarkdownRenderer from '@/components/condutas/MarkdownRenderer';
import { services } from '@/api/services';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

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
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const favKey = `conduta-${topico.id || topico.label}`;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar às Condutas
      </button>

      {/* Header */}
      <div className="topic-heading border-b pb-5 mb-5 relative">
        <button
          aria-label="Favoritar conduta" aria-pressed={isFavorite(favKey)} onClick={() => toggleFavorite(favKey)}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-secondary transition-colors"
        >
          <Star className={`w-4 h-4 ${isFavorite(favKey) ? 'fill-yellow-300 text-yellow-300' : 'text-muted-foreground'}`} />
        </button>
        <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs">
          <span>{categoria.icon}</span>
          <span>{categoria.label}</span>
          <span>›</span>
          <span>{subcategoria.label}</span>
        </div>
        <h1 className="text-xl font-bold leading-tight pr-10">{topico.label}</h1>
      </div>

      {/* Content */}
      {topico.publication_status === 'draft' && <div role="status" className="review-note mb-4"><strong>Rascunho — não publicado</strong><p>Pesquisa e revisão profissional pendentes. Esta prévia não altera a versão pública.</p></div>}
      {topico.review_sources && <details className="mb-4 border rounded-xl p-4"><summary>Fontes e pendências da revisão</summary><p className="text-sm whitespace-pre-wrap mt-3">{topico.review_sources}</p></details>}
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
export default function CondutasTab({ externalSearch = '', isAdmin = false }) {
  const [categorias, setCategorias] = useState(CONDUTAS_CATEGORIAS);
  const [search, setSearch] = useState('');
  const [activeCategoria, setActiveCategoria] = useState(null); // filter by category id
  const [params, setParams] = useSearchParams();
  const selectedId = params.get('topico');
  const setSelectedTopico = item => {
    const next = new URLSearchParams(params); next.set('tab', 'condutas');
    if (item) next.set('topico', item.topico.id || item.topico.label); else next.delete('topico');
    setParams(next);
  };

  // Load DB overrides
  useEffect(() => {
    Promise.all([
    services.categories.list(),
    services.contents.list('-updated_date')]
    ).then(([customCats, dbCondutas]) => {
      dbCondutas = dbCondutas.filter(c => isAdmin || c.publication_status !== 'draft').reverse();
      if (isAdmin) dbCondutas.sort((a,b) => Number(a.publication_status === 'draft') - Number(b.publication_status === 'draft'));
      setCategorias(() => {
        let merged = CONDUTAS_CATEGORIAS.map((cat) => ({
          ...cat,
          subcategorias: cat.subcategorias.map((sub) => ({
            ...sub,
            topicos: sub.topicos.map((t) => ({ ...t, publication_status: undefined, review_sources: undefined }))
          }))
        }));

        dbCondutas.forEach((cond) => {
          const cat = merged.find((c) => c.id === cond.categoria_id || c.label === cond.categoria_label);
          if (cat) {
            const sub = cat.subcategorias.find((s) => s.id === cond.subcategoria_id || s.label === cond.subcategoria_label);
            if (sub) {
              const topIdx = sub.topicos.findIndex((t) => t.id === cond.topico_id || t.label === cond.topico_label);
              if (topIdx >= 0) {
                sub.topicos[topIdx] = { ...sub.topicos[topIdx], conteudo: cond.conteudo ?? '', publication_status: cond.publication_status, review_sources: cond.review_sources };
              } else if (cond.is_custom) {
                sub.topicos.push({ id: cond.topico_id || cond.id, label: cond.topico_label, conteudo: cond.conteudo || '', publication_status: cond.publication_status, review_sources: cond.review_sources });
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
              map((d) => ({ id: d.topico_id || d.id, label: d.topico_label, conteudo: d.conteudo || '', publication_status: d.publication_status, review_sources: d.review_sources }))
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
  }, [isAdmin]);

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

  const selectedTopico = allTopicos.find(item => (item.topico.id || item.topico.label) === selectedId);
  const q = normalizeSearch(externalSearch || search);

  const filteredTopicos = useMemo(() => {
    return allTopicos.filter(({ topico, categoria, subcategoria }) => {
      const matchSearch = !q ||
        normalizeSearch(topico.label).includes(q) ||
        normalizeSearch(categoria.label).includes(q) ||
        normalizeSearch(subcategoria.label).includes(q) ||
        normalizeSearch((topico.conteudo || '')).includes(q);
      const matchCat = !activeCategoria || categoria.id === activeCategoria;
      // Se não for admin, mostrar apenas tópicos com conteúdo indexado
      const matchContent = isAdmin || !!topico.conteudo?.trim();
      return matchSearch && matchCat && matchContent;
    });
  }, [allTopicos, q, activeCategoria, isAdmin]);

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

  return <div className="condutas-catalogue">
    <div className="catalogue-toolbar">
      <div className="catalogue-search"><BookOpen size={18}/><input aria-label="Buscar conduta" placeholder="Buscar tema ou condição" value={search} onChange={e=>setSearch(e.target.value)}/>{search&&<button aria-label="Limpar busca de conduta" onClick={()=>setSearch('')}><X size={18}/></button>}</div>
      <select aria-label="Categoria de condutas" value={activeCategoria||''} onChange={e=>setActiveCategoria(e.target.value||null)}><option value="">Todas as categorias</option>{categorias.map(cat=><option key={cat.id} value={cat.id}>{cat.label}</option>)}</select>
    </div>
    <p className="catalogue-count" role="status">{filteredTopicos.length} tópicos disponíveis</p>
    <div className="catalogue-columns">{grouped.map(({categoria,items})=><section key={categoria.id} className="catalogue-group"><header><h2>{categoria.label}</h2><span>{items.length}</span></header>{items.map(item=><article key={item.topico.id||item.topico.label} className="catalogue-item"><button className="catalogue-open" onClick={()=>setSelectedTopico(item)}><span><strong>{item.topico.label}</strong><small>{item.subcategoria.label}{!item.topico.conteudo?.trim()?' · Em desenvolvimento':''}</small></span><ChevronRight size={17}/></button></article>)}</section>)}</div>
    {!filteredTopicos.length&&<div className="catalogue-empty"><h2>Nenhuma conduta encontrada</h2><p>Tente outro termo ou categoria.</p><button onClick={()=>{setSearch('');setActiveCategoria(null);}}>Limpar filtros</button></div>}
  </div>;
}
