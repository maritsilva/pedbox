import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageFavorites, ALL_PAGES } from '@/hooks/usePageFavorites.jsx';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';
import { useNavigate } from 'react-router-dom';

export default function Favoritos() {
  const { favPages, toggleFavorite: togglePage } = usePageFavorites();
  const { favorites: favDrugIds, toggleFavorite: toggleDrug } = useDosagemFavorites();
  const allDrugs = useMemo(() => getAllDosagens(), []);
  const favDrugs = favDrugIds.map(id => allDrugs.find(d => d.id === id)).filter(Boolean);
  const navigate = useNavigate();

  const isEmpty = favPages.length === 0 && favDrugs.length === 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow-md">
          <Star className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Meus Favoritos</h1>
          <p className="text-sm text-muted-foreground">Acesso rápido às suas ferramentas preferidas</p>
        </div>
      </div>

      <AnimatePresence>
        {isEmpty && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-5xl mb-4">⭐</p>
            <p className="font-bold text-foreground text-lg">Nenhum favorito ainda</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Toque na estrela (⭐) em qualquer tela para salvar aqui
            </p>
            <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              Voltar ao início →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Páginas / Ferramentas */}
      {favPages.length > 0 && (
        <section className="mb-8">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
            Ferramentas & Calculadoras ({favPages.length})
          </p>
          <div className="space-y-2">
            {favPages.map((page, i) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-white border border-border rounded-2xl shadow-sm flex items-center gap-3 px-4 py-3 hover:shadow-md transition-all group"
              >
                <span className="text-xl flex-shrink-0">{page.icon}</span>
                <button onClick={() => navigate(page.path)} className="flex-1 text-left min-w-0">
                  <p className="font-bold text-sm text-foreground">{page.label}</p>
                  <p className="text-xs text-muted-foreground truncate">{page.desc}</p>
                </button>
                <button
                  onClick={() => togglePage(page.path)}
                  className="flex-shrink-0 text-yellow-400 hover:text-red-400 transition-colors"
                  title="Remover favorito"
                >
                  <Star className="w-4 h-4 fill-yellow-400" />
                </button>
                <ChevronRight
                  onClick={() => navigate(page.path)}
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Medicamentos */}
      {favDrugs.length > 0 && (
        <section className="mb-8">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
            Medicamentos — Dosagem Rápida ({favDrugs.length})
          </p>
          <div className="space-y-2">
            {favDrugs.map((drug, i) => (
              <motion.div
                key={drug.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-white border border-border rounded-2xl shadow-sm flex items-center gap-3 px-4 py-3 hover:shadow-md transition-all group"
              >
                <span className="text-xl flex-shrink-0">{drug.catIcon}</span>
                <button onClick={() => navigate(`/dosagens?drug=${drug.id}`)} className="flex-1 text-left min-w-0">
                  <p className="font-bold text-sm text-foreground">{drug.name}</p>
                  <p className="text-xs text-muted-foreground">{drug.catLabel}</p>
                </button>
                <button
                  onClick={() => toggleDrug(drug.id)}
                  className="flex-shrink-0 text-yellow-400 hover:text-red-400 transition-colors"
                  title="Remover favorito"
                >
                  <Star className="w-4 h-4 fill-yellow-400" />
                </button>
                <ChevronRight
                  onClick={() => navigate(`/dosagens?drug=${drug.id}`)}
                  className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Adicionar mais */}
      {!isEmpty && (
        <section>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
            Adicionar mais favoritos
          </p>
          <div className="space-y-1.5">
            {ALL_PAGES.filter(p => !favPages.find(f => f.path === p.path)).map(page => (
              <div
                key={page.path}
                className="bg-secondary/40 border border-border/60 rounded-xl flex items-center gap-3 px-4 py-2.5"
              >
                <span className="text-base flex-shrink-0">{page.icon}</span>
                <Link to={page.path} className="flex-1 text-sm font-medium text-foreground hover:text-primary truncate">
                  {page.label}
                </Link>
                <button
                  onClick={() => togglePage(page.path)}
                  className="flex-shrink-0 text-gray-300 hover:text-yellow-400 transition-colors"
                  title="Adicionar favorito"
                >
                  <Star className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}