import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Search, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';

const CAT_COLORS = {
  'Doses':      'bg-blue-100 text-blue-700',
  'Emergência': 'bg-red-100 text-red-700',
  'Hidratação': 'bg-cyan-100 text-cyan-700',
  'Escores':    'bg-purple-100 text-purple-700',
  'Vacinas':    'bg-green-100 text-green-700',
  'Crescimento':'bg-pink-100 text-pink-700',
  'Neonatal':   'bg-amber-100 text-amber-700',
  'Protocolos': 'bg-violet-100 text-violet-700',
  'Tabelas':    'bg-teal-100 text-teal-700',
  'Pesquisa':   'bg-emerald-100 text-emerald-700',
};

export default function FavoritosPage() {
  const { favPages, toggleFavorite: togglePage } = usePageFavorites();
  const { favorites: favDrugIds, toggleFavorite: toggleDrug } = useDosagemFavorites();
  const allDrugs = useMemo(() => getAllDosagens(), []);
  const favDrugs = useMemo(() => favDrugIds.map(id => allDrugs.find(d => d.id === id)).filter(Boolean), [favDrugIds, allDrugs]);
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const q = search.toLowerCase().trim();

  const filteredPages = favPages.filter(p => !q || p.label.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q));
  const filteredDrugs = favDrugs.filter(d => !q || d.name.toLowerCase().includes(q));

  const isEmpty = favPages.length === 0 && favDrugs.length === 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl shadow">
          <Star className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Favoritos</h1>
          <p className="text-sm text-muted-foreground">Acesse rapidamente as ferramentas que você mais usa no plantão.</p>
        </div>
      </div>

      {/* Empty state */}
      <AnimatePresence>
        {isEmpty && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-5xl mb-4">⭐</p>
            <p className="font-bold text-foreground text-lg">Você ainda não adicionou ferramentas aos favoritos.</p>
            <p className="text-muted-foreground mt-2 text-sm max-w-xs mx-auto">
              Favorite ferramentas na página "Explorar ferramentas" para montar seus atalhos personalizados.
            </p>
            <Link
              to="/ferramentas"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Explorar ferramentas →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {!isEmpty && (
        <>
          {/* Search */}
          <div className="relative my-5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Filtrar favoritos..."
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

          {/* Pages / Tools */}
          {filteredPages.length > 0 && (
            <section className="mb-7">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Ferramentas ({filteredPages.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredPages.map((page, i) => (
                  <motion.div
                    key={page.path}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-white border border-border rounded-2xl shadow-sm p-4 flex gap-3 hover:shadow-md transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{page.icon}</span>
                    <div className="flex-1 min-w-0">
                      <button onClick={() => navigate(page.path)} className="text-left w-full">
                        <p className="font-bold text-sm text-foreground">{page.label}</p>
                        <p className="text-xs text-muted-foreground truncate">{page.desc}</p>
                      </button>
                    </div>
                    <div className="flex flex-col items-end justify-between gap-1 flex-shrink-0">
                      <button onClick={() => togglePage(page.path)} title="Remover dos favoritos">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:text-red-400 transition-colors" />
                      </button>
                      <button onClick={() => navigate(page.path)}>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Drug dosages */}
          {filteredDrugs.length > 0 && (
            <section className="mb-7">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Medicamentos — Dosagem Rápida ({filteredDrugs.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredDrugs.map((drug, i) => (
                  <motion.div
                    key={drug.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-white border border-border rounded-2xl shadow-sm p-4 flex gap-3 hover:shadow-md transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{drug.catIcon}</span>
                    <div className="flex-1 min-w-0">
                      <button onClick={() => navigate(`/dosagens?drug=${drug.id}`)} className="text-left w-full">
                        <p className="font-bold text-sm text-foreground">{drug.name}</p>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CAT_COLORS['Doses'] || 'bg-gray-100 text-gray-600'}`}>
                          {drug.catLabel}
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col items-end justify-between gap-1 flex-shrink-0">
                      <button onClick={() => toggleDrug(drug.id)} title="Remover dos favoritos">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:text-red-400 transition-colors" />
                      </button>
                      <button onClick={() => navigate(`/dosagens?drug=${drug.id}`)}>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {filteredPages.length === 0 && filteredDrugs.length === 0 && (
            <div className="text-center py-10 text-muted-foreground text-sm">Nenhum favorito encontrado para "<strong>{search}</strong>"</div>
          )}

          <div className="text-center mt-4">
            <Link to="/ferramentas" className="text-sm font-semibold text-primary hover:underline">
              + Explorar mais ferramentas
            </Link>
          </div>
        </>
      )}
    </div>
  );
}