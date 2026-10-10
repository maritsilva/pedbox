import { normalizeSearch } from '@/lib/calculatorRegistry';
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Search, X, ChevronRight, LayoutGrid, BookOpen, Link as LinkIcon, StickyNote, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';
import { services } from '@/api/services';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';

// Protocol metadata (same as Biblioteca)
const PROTOCOLS = [
{ id: 'crise-asmatica', title: 'Crise Asmática', icon: '🫁', tag: 'Respiratório' },
{ id: 'bronquiolite', title: 'Bronquiolite', icon: '🫧', tag: 'Respiratório' },
{ id: 'convulsao-febril', title: 'Convulsão Febril Benigna', icon: '⚡', tag: 'Neurologia' },
{ id: 'diarreia-aguda', title: 'Diarreia Aguda', icon: '💧', tag: 'Gastroenterologia' },
{ id: 'faringoamigdalite', title: 'Faringoamigdalite', icon: '🦠', tag: 'Infectologia' },
{ id: 'febre-sem-sinais', title: 'Febre sem Sinais Localizatórios', icon: '🌡️', tag: 'Infectologia' },
{ id: 'pneumonia-complicada', title: 'PAC Complicada', icon: '🫁', tag: 'Respiratório' },
{ id: 'anemia-ferropriva', title: 'Anemia Ferropriva', icon: '🩸', tag: 'Hematologia' },
{ id: 'meningite-bacteriana', title: 'Meningite Aguda Bacteriana', icon: '🧠', tag: 'Infectologia' },
{ id: 'itu', title: 'Infecção do Trato Urinário', icon: '💧', tag: 'Infectologia' }];


const FILTER_TABS = ['Todos', 'Medicamentos', 'Ferramentas', 'Protocolos', 'Condutas', 'Links', 'Anotações'];

function FavCard({ label, desc, badge, onOpen, onRemove }) {
  return <article className="resource-item bg-white border rounded-xl">
    <button onClick={onOpen} className="resource-row text-left flex-1 min-w-0">
      <div><h2 className="font-semibold">{label}</h2><p className="text-sm text-muted-foreground mt-1">{desc}</p><p className="text-xs text-muted-foreground mt-2">{badge}</p></div>
      <ChevronRight size={18} className="shrink-0" />
    </button>
    <button onClick={onRemove} className="icon-action mr-2 text-primary" aria-label={`Remover ${label} dos favoritos`}><Star size={18} fill="currentColor" /></button>
  </article>;
}

export default function FavoritosPage() {
  const { favPages, favorites, toggleFavorite: togglePage } = usePageFavorites();
  const { favorites: favDrugIds, toggleFavorite: toggleDrug } = useDosagemFavorites();
  const allDrugs = useMemo(() => getAllDosagens(), []);
  const favDrugs = useMemo(() => favDrugIds.map((id) => allDrugs.find((d) => d.id === id)).filter(Boolean), [favDrugIds, allDrugs]);
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Todos');
  const [links, setLinks] = useState([]);
  const [anotacoes, setAnotacoes] = useState([]);

  useEffect(() => {
    services.libraryLinks.list().then(setLinks).catch(() => {});
    services.auth.me().then((u) => {
      if (u) services.notes.filter({ created_by_id: u.id }).then(setAnotacoes).catch(() => {});
    }).catch(() => {});
  }, []);

  const q = normalizeSearch(search);

  // Favorited protocols
  const favProtocols = useMemo(() => favorites.
  filter((k) => k.startsWith('protocolo-')).
  map((k) => PROTOCOLS.find((p) => `protocolo-${p.id}` === k)).
  filter(Boolean).
  filter(() => activeTab === 'Todos' || activeTab === 'Protocolos').
  filter((p) => !q || normalizeSearch(p.title).includes(q)), [favorites, q, activeTab]);

  // Favorited condutas (need to match from condutasData)
  const allTopicos = useMemo(() => {
    const list = [];
    CONDUTAS_CATEGORIAS.forEach((cat) => cat.subcategorias.forEach((sub) => sub.topicos.forEach((top) => list.push({ topico: top, cat, sub }))));
    return list;
  }, []);
  const favCondutas = useMemo(() => favorites.
  filter((k) => k.startsWith('conduta-')).
  map((k) => {
    const id = k.replace('conduta-', '');
    return allTopicos.find(({ topico }) => topico.id === id || topico.label === id);
  }).
  filter(Boolean).
  filter(() => activeTab === 'Todos' || activeTab === 'Condutas').
  filter(({ topico }) => !q || normalizeSearch(topico.label).includes(q)), [favorites, allTopicos, q, activeTab]);

  // Favorited links
  const favLinks = useMemo(() => favorites.
  filter((k) => k.startsWith('link-')).
  map((k) => links.find((l) => `link-${l.id}` === k)).
  filter(Boolean).
  filter(() => activeTab === 'Todos' || activeTab === 'Links').
  filter((l) => !q || normalizeSearch(l.titulo).includes(q)), [favorites, links, q, activeTab]);

  // Favorited anotações
  const favAnotacoes = useMemo(() => favorites.
  filter((k) => k.startsWith('anotacao-')).
  map((k) => anotacoes.find((a) => `anotacao-${a.id}` === k)).
  filter(Boolean).
  filter(() => activeTab === 'Todos' || activeTab === 'Anotações').
  filter((a) => !q || normalizeSearch(a.titulo).includes(q)), [favorites, anotacoes, q, activeTab]);

  const filteredPages = favPages.filter(() => activeTab === 'Todos' || activeTab === 'Ferramentas').filter((p) => !q || normalizeSearch(p.label).includes(q) || normalizeSearch(p.desc || '').includes(q));
  const filteredDrugs = favDrugs.filter(() => activeTab === 'Todos' || activeTab === 'Medicamentos').filter((d) => !q || normalizeSearch(d.name).includes(q));

  const isEmpty = favorites.length === 0 && favDrugIds.length === 0;

  return (
    <div className="page-surface max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="page-heading flex items-start justify-between gap-4 mb-6">
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
          className="hidden md:flex items-center gap-2 border border-border rounded-xl px-4 py-3 bg-white shadow-sm hover:shadow-md transition-all flex-shrink-0">
          
          <LayoutGrid className="w-4 h-4 text-primary" />
          <div className="text-left">
            <p className="text-xs font-bold text-primary">Explorar ferramentas</p>
            <p className="text-[10px] text-muted-foreground">Descubra e adicione novos favoritos</p>
          </div>
        </Link>
      </div>

      {/* Empty state */}
      <AnimatePresence>
        {isEmpty &&
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
        }
      </AnimatePresence>

      {!isEmpty &&
      <>
          {/* Search */}
          <div className="relative mb-5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
            type="search"
            aria-label="Buscar favoritos"
            placeholder="Buscar nos seus favoritos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
          
            {search &&
          <button onClick={() => setSearch('')} aria-label="Limpar busca" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
          }
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {FILTER_TABS.map((tab) =>
          <button
            key={tab}
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
            activeTab === tab ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`
            }>
            
                {tab}
              </button>
          )}
          </div>

          {/* Pages grid */}
          {filteredPages.length > 0 &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {filteredPages.map((page) =>
          <FavCard
            key={page.path}

            label={page.label}
            desc={page.desc}
            badge="Ferramenta"

            onOpen={() => navigate(page.path)}
            onRemove={() => togglePage(page.path)} />

          )}
            </div>
        }

          {/* Drug dosages grid */}
          {filteredDrugs.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Medicamentos — Dosagem Rápida ({filteredDrugs.length})</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {filteredDrugs.map((drug) =>
            <FavCard
              key={drug.id}

              label={drug.name}
              desc={drug.catLabel}
              badge="Medicamento"

              onOpen={() => navigate(`/dosagens?drug=${drug.id}`)}
              onRemove={() => toggleDrug(drug.id)} />

            )}
              </div>
            </>
        }

          {/* Protocols */}
          {favProtocols.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5"><FlaskConical className="w-3.5 h-3.5" /> Protocolos ({favProtocols.length})</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {favProtocols.map((p) =>
            <FavCard
              key={p.id}

              label={p.title}
              desc={p.tag}
              badge="Protocolo"

              onOpen={() => navigate(`/biblioteca?tab=protocolos&id=${p.id}`)}
              onRemove={() => togglePage(`protocolo-${p.id}`)} />

            )}
              </div>
            </>
        }

          {/* Condutas */}
          {favCondutas.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Condutas ({favCondutas.length})</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {favCondutas.map(({ topico, cat }) =>
            <FavCard
              key={topico.id || topico.label}

              label={topico.label}
              desc={cat.label}
              badge="Conduta"

              onOpen={() => navigate(`/biblioteca?tab=condutas&topico=${encodeURIComponent(topico.id || topico.label)}`)}
              onRemove={() => togglePage(`conduta-${topico.id || topico.label}`)} />

            )}
              </div>
            </>
        }

          {/* Links */}
          {favLinks.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5"><LinkIcon className="w-3.5 h-3.5" /> Links ({favLinks.length})</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {favLinks.map((l) =>
            <FavCard
              key={l.id}

              label={l.titulo}
              desc={l.descricao || l.categoria || ''}
              badge="Link"

              onOpen={() => window.open(l.url, '_blank')}
              onRemove={() => togglePage(`link-${l.id}`)} />

            )}
              </div>
            </>
        }

          {/* Anotações */}
          {favAnotacoes.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5"><StickyNote className="w-3.5 h-3.5" /> Anotações ({favAnotacoes.length})</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {favAnotacoes.map((a) =>
            <FavCard
              key={a.id}

              label={a.titulo}
              desc={a.conteudo ? a.conteudo.replace(/<[^>]+>/g, '').slice(0, 80) : ''}
              badge="Anotação"

              onOpen={() => navigate('/biblioteca?tab=anotacoes')}
              onRemove={() => togglePage(`anotacao-${a.id}`)} />

            )}
              </div>
            </>
        }

          {filteredPages.length === 0 && filteredDrugs.length === 0 && favProtocols.length === 0 && favCondutas.length === 0 && favLinks.length === 0 && favAnotacoes.length === 0 &&
        <div className="text-center py-10 text-muted-foreground text-sm">
              Nenhum favorito corresponde aos filtros.
              <button className="block mx-auto text-primary mt-3" onClick={() => { setSearch(''); setActiveTab('Todos'); }}>Limpar filtros</button>
            </div>
        }

        </>
      }

      {/* Footer trust bar */}
      




      
      

      
    </div>);

}