import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Search, X, ChevronRight, LayoutGrid, Shield, RefreshCw, Heart, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';

const CAT_COLORS = {
  'Doses':       'bg-blue-100 text-blue-700',
  'Emergência':  'bg-red-100 text-red-700',
  'Hidratação':  'bg-cyan-100 text-cyan-700',
  'Escores':     'bg-purple-100 text-purple-700',
  'Vacinas':     'bg-green-100 text-green-700',
  'Crescimento': 'bg-pink-100 text-pink-700',
  'Neonatal':    'bg-amber-100 text-amber-700',
  'Protocolos':  'bg-violet-100 text-violet-700',
  'Tabelas':     'bg-teal-100 text-teal-700',
  'Pesquisa':    'bg-emerald-100 text-emerald-700',
  'Biblioteca':  'bg-blue-100 text-blue-700',
  'Ferramenta':  'bg-gray-100 text-gray-700',
};

const FILTER_TABS = ['Todos', 'Ferramentas', 'Biblioteca', 'Protocolos', 'Recentes'];

function FavCard({ icon, label, desc, badge, badgeColor, onOpen, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-border rounded-2xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl flex-shrink-0">
          {icon}
        </div>
        <button onClick={onRemove} title="Remover dos favoritos">
          <Star className="w-5 h-5 fill-blue-500 text-blue-500 hover:text-red-400 transition-colors" />
        </button>
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm text-foreground leading-snug">{label}</p>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
      {badge && (
        <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full w-fit ${badgeColor || 'bg-gray-100 text-gray-700'}`}>
          {badge}
        </span>
      )}
      <button
        onClick={onOpen}
        className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-all w-full justify-center"
      >
        Abrir <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}

export default function FavoritosPage() {
  const { favPages, toggleFavorite: togglePage } = usePageFavorites();
  const { favorites: favDrugIds, toggleFavorite: toggleDrug } = useDosagemFavorites();
  const allDrugs = useMemo(() => getAllDosagens(), []);
  const favDrugs = useMemo(() => favDrugIds.map(id => allDrugs.find(d => d.id === id)).filter(Boolean), [favDrugIds, allDrugs]);
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Todos');
  const q = search.toLowerCase().trim();

  const filteredPages = favPages.filter(p => !q || p.label.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q));
  const filteredDrugs = favDrugs.filter(d => !q || d.name.toLowerCase().includes(q));

  const isEmpty = favPages.length === 0 && favDrugs.length === 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Star className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">Favoritos</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Acesse rapidamente as ferramentas e conteúdos que você mais usa no plantão.</p>
          </div>
        </div>
        <Link
          to="/ferramentas"
          className="hidden md:flex items-center gap-2 border border-border rounded-xl px-4 py-3 bg-white shadow-sm hover:shadow-md transition-all flex-shrink-0"
        >
          <LayoutGrid className="w-4 h-4 text-primary" />
          <div className="text-left">
            <p className="text-xs font-bold text-primary">Explorar ferramentas</p>
            <p className="text-[10px] text-muted-foreground">Descubra e adicione novos favoritos</p>
          </div>
        </Link>
      </div>

      {/* Empty state */}
      <AnimatePresence>
        {isEmpty && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-20">
            <p className="text-6xl mb-4">⭐</p>
            <p className="font-bold text-foreground text-xl">Nenhum favorito ainda</p>
            <p className="text-muted-foreground mt-2 text-sm max-w-xs mx-auto">
              Favorite ferramentas na página "Explorar ferramentas" para montar seus atalhos personalizados.
            </p>
            <Link to="/ferramentas"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
              <LayoutGrid className="w-4 h-4" />
              Explorar ferramentas
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {!isEmpty && (
        <>
          {/* Search */}
          <div className="relative mb-5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar nos seus favoritos..."
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

          {/* Filter tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeTab === tab ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pages grid */}
          {filteredPages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {filteredPages.map(page => (
                <FavCard
                  key={page.path}
                  icon={page.icon}
                  label={page.label}
                  desc={page.desc}
                  badge="Ferramenta"
                  badgeColor={CAT_COLORS['Ferramenta']}
                  onOpen={() => navigate(page.path)}
                  onRemove={() => togglePage(page.path)}
                />
              ))}
            </div>
          )}

          {/* Drug dosages grid */}
          {filteredDrugs.length > 0 && (
            <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Medicamentos — Dosagem Rápida ({filteredDrugs.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {filteredDrugs.map(drug => (
                  <FavCard
                    key={drug.id}
                    icon={drug.catIcon}
                    label={drug.name}
                    desc={drug.catLabel}
                    badge="Medicamento"
                    badgeColor={CAT_COLORS['Doses']}
                    onOpen={() => navigate(`/dosagens?drug=${drug.id}`)}
                    onRemove={() => toggleDrug(drug.id)}
                  />
                ))}
              </div>
            </>
          )}

          {filteredPages.length === 0 && filteredDrugs.length === 0 && (
            <div className="text-center py-10 text-muted-foreground text-sm">
              Nenhum favorito encontrado para "<strong>{search}</strong>"
            </div>
          )}

          {/* CTA add more */}
          <div className="bg-secondary/50 border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl opacity-30">⭐</div>
              <div>
                <p className="font-bold text-foreground">Adicione mais favoritos para montar seus atalhos personalizados.</p>
                <p className="text-sm text-muted-foreground mt-0.5">Quanto mais você usa, mais o Pedbox.app se adapta ao seu jeito de trabalhar.</p>
              </div>
            </div>
            <Link to="/ferramentas"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors flex-shrink-0">
              <LayoutGrid className="w-4 h-4" />
              Explorar ferramentas
            </Link>
          </div>
        </>
      )}

      {/* Footer trust bar */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Conteúdo baseado em evidências e diretrizes atualizadas</span>
        <span className="flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5 text-primary" /> Atualizações frequentes</span>
        <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-primary" /> Feito para o plantão pediátrico</span>
        <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary" /> Privacidade e segurança</span>
      </div>
      <p className="text-center text-[10px] text-muted-foreground/50 mt-4">
        Pedbox.app não substitui o julgamento clínico. Sempre considere o contexto individual de cada paciente.
      </p>
    </div>
  );
}