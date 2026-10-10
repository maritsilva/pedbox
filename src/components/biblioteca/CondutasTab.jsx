import { useSearchParams } from 'react-router-dom';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Star,
  Search,
  Stethoscope,
  Filter,
  CheckCircle2,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import MarkdownRenderer from '@/components/condutas/MarkdownRenderer';
import { services } from '@/api/services';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

// ── Topic Detail View ─────────────────────────────────────────────────────────
function TopicoDetail({ topico, categoria, subcategoria, onBack }) {
  const hasContent = topico.conteudo && topico.conteudo.trim().length > 0;
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const favKey = `conduta-${topico.id || topico.label}`;
  const isFav = isFavorite(favKey);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy transition-colors cursor-pointer group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar para a lista de condutas
      </button>

      {/* Header Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs relative">
        <button
          aria-label="Favoritar conduta"
          aria-pressed={isFav}
          onClick={() => toggleFavorite(favKey)}
          className="absolute top-5 right-5 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <Star className={`w-5 h-5 transition-colors ${isFav ? 'fill-amber-400 text-amber-400' : 'text-slate-300 hover:text-slate-400'}`} />
        </button>

        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500">
          <span className="text-base">{categoria.icon || '🩺'}</span>
          <span>{categoria.label}</span>
          <span className="text-slate-300">›</span>
          <span className="text-brand-teal font-bold">{subcategoria.label}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy leading-tight pr-12">
          {topico.label}
        </h1>
      </div>

      {/* Review Notes / Draft Warning */}
      {topico.publication_status === 'draft' && (
        <div role="status" className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Rascunho — não publicado</strong>
            <p className="mt-0.5 text-amber-800">Pesquisa e revisão profissional pendentes. Esta prévia não altera a versão pública.</p>
          </div>
        </div>
      )}

      {topico.review_sources && (
        <details className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700">
          <summary className="font-bold text-slate-800 cursor-pointer">Fontes e pendências da revisão</summary>
          <p className="mt-2 whitespace-pre-wrap leading-relaxed text-slate-600">{topico.review_sources}</p>
        </details>
      )}

      {/* Content Area */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
        {hasContent ? (
          <div className="p-6 sm:p-8 prose prose-slate max-w-none">
            <MarkdownRenderer content={topico.conteudo} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center px-6 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl">
              🚧
            </div>
            <p className="text-base font-bold text-brand-navy">Conteúdo em desenvolvimento</p>
            <p className="text-xs text-slate-500 max-w-sm">
              Este tópico clínico está sendo estruturado por nossa equipe médica segundo as últimas diretrizes da SBP e Ministério da Saúde.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main CondutasTab ──────────────────────────────────────────────────────────
export default function CondutasTab({ externalSearch = '', isAdmin = false }) {
  const [categorias, setCategorias] = useState(CONDUTAS_CATEGORIAS);
  const [search, setSearch] = useState('');
  const [activeCategoria, setActiveCategoria] = useState(null);
  const [params, setParams] = useSearchParams();
  const selectedId = params.get('topico');

  const setSelectedTopico = (item) => {
    const next = new URLSearchParams(params);
    next.set('tab', 'condutas');
    if (item) next.set('topico', item.topico.id || item.topico.label);
    else next.delete('topico');
    setParams(next);
  };

  // Load DB overrides
  useEffect(() => {
    Promise.all([
      services.categories.list(),
      services.contents.list('-updated_date')
    ])
      .then(([customCats, dbCondutas]) => {
        dbCondutas = dbCondutas.filter((c) => isAdmin || c.publication_status !== 'draft').reverse();
        if (isAdmin) {
          dbCondutas.sort((a, b) => Number(a.publication_status === 'draft') - Number(b.publication_status === 'draft'));
        }
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
                  sub.topicos[topIdx] = {
                    ...sub.topicos[topIdx],
                    conteudo: cond.conteudo ?? '',
                    publication_status: cond.publication_status,
                    review_sources: cond.review_sources
                  };
                } else if (cond.is_custom) {
                  sub.topicos.push({
                    id: cond.topico_id || cond.id,
                    label: cond.topico_label,
                    conteudo: cond.conteudo || '',
                    publication_status: cond.publication_status,
                    review_sources: cond.review_sources
                  });
                }
              }
            }
          });

          customCats.forEach((customCat) => {
            const exists = merged.find((c) => c.id === customCat.categoria_id || c.label === customCat.label);
            if (!exists) {
              const subs = (customCat.subcategorias || []).map((s) => ({
                id: s.id,
                label: s.label,
                topicos: dbCondutas
                  .filter((d) => d.categoria_label === customCat.label && d.subcategoria_label === s.label)
                  .map((d) => ({
                    id: d.topico_id || d.id,
                    label: d.topico_label,
                    conteudo: d.conteudo || '',
                    publication_status: d.publication_status,
                    review_sources: d.review_sources
                  }))
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
      })
      .catch(() => {});
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

  const selectedTopico = allTopicos.find((item) => (item.topico.id || item.topico.label) === selectedId);
  const q = normalizeSearch(externalSearch || search);

  const filteredTopicos = useMemo(() => {
    return allTopicos.filter(({ topico, categoria, subcategoria }) => {
      const matchSearch =
        !q ||
        normalizeSearch(topico.label).includes(q) ||
        normalizeSearch(categoria.label).includes(q) ||
        normalizeSearch(subcategoria.label).includes(q) ||
        normalizeSearch(topico.conteudo || '').includes(q);
      const matchCat = !activeCategoria || categoria.id === activeCategoria;
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

  // ── Detail view ──
  if (selectedTopico) {
    return (
      <TopicoDetail
        topico={selectedTopico.topico}
        categoria={selectedTopico.categoria}
        subcategoria={selectedTopico.subcategoria}
        onBack={() => setSelectedTopico(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* ── TOOLBAR: Filter by category & search ── */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              aria-label="Buscar conduta"
              placeholder="Buscar tema, diagnóstico ou conduta clínica..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all text-slate-800"
            />
            {search && (
              <button
                aria-label="Limpar busca de conduta"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative sm:w-64">
            <select
              aria-label="Categoria de condutas"
              value={activeCategoria || ''}
              onChange={(e) => setActiveCategoria(e.target.value || null)}
              className="w-full appearance-none pl-3.5 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all cursor-pointer"
            >
              <option value="">Todas as categorias</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon || '🩺'} {cat.label}
                </option>
              ))}
            </select>
            <ChevronRight className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setActiveCategoria(null)}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategoria === null
                ? 'bg-brand-navy text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            Todas ({filteredTopicos.length})
          </button>
          {categorias.map((cat) => {
            const count = allTopicos.filter((t) => t.categoria.id === cat.id && (isAdmin || !!t.topico.conteudo?.trim())).length;
            if (count === 0 && !isAdmin) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoria(activeCategoria === cat.id ? null : cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategoria === cat.id
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                <span>{cat.icon || '🩺'}</span>
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeCategoria === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── TOPICS LISTING BY CATEGORY ── */}
      <div className="space-y-8">
        {grouped.map(({ categoria, items }) => (
          <section key={categoria.id} className="space-y-3">
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
              <div className="flex items-center gap-2.5">
                <span className="text-xl p-2 rounded-xl bg-slate-100 border border-slate-200/80">
                  {categoria.icon || '🩺'}
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-display font-extrabold text-brand-navy">
                    {categoria.label}
                  </h2>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {items.length} {items.length === 1 ? 'tópico disponível' : 'tópicos disponíveis'}
                  </p>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {items.map((item) => {
                const hasBody = !!item.topico.conteudo?.trim();
                return (
                  <article
                    key={item.topico.id || item.topico.label}
                    onClick={() => setSelectedTopico(item)}
                    className="group bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-md hover:border-brand-teal/50 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[180px]">
                          {item.subcategoria.label}
                        </span>
                        {!hasBody && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-1.5 py-0.5 rounded-md">
                            Em elaboração
                          </span>
                        )}
                        {hasBody && (
                          <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200/70 px-1.5 py-0.5 rounded-md flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Revisado
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-2">
                        {item.topico.label}
                      </h3>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-brand-teal font-semibold">
                      <span>Ver conduta</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {/* Empty state */}
        {!filteredTopicos.length && (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-10 text-center space-y-3 max-w-md mx-auto shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 mx-auto flex items-center justify-center text-xl">
              🔍
            </div>
            <h3 className="text-base font-bold text-brand-navy">Nenhuma conduta encontrada</h3>
            <p className="text-xs text-slate-500">
              Não encontramos tópicos com os termos pesquisados. Tente outras palavras ou limpe os filtros.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategoria(null);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
