import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Search, X, ChevronRight, LayoutGrid, Shield, RefreshCw, Heart, Lock, BookOpen, Link as LinkIcon, StickyNote, FlaskConical, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';
import { base44 } from '@/api/base44Client';
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


const CAT_COLORS = {
  'Doses': 'bg-blue-100 text-blue-700',
  'Emergência': 'bg-red-100 text-red-700',
  'Hidratação': 'bg-cyan-100 text-cyan-700',
  'Escores': 'bg-purple-100 text-purple-700',
  'Vacinas': 'bg-green-100 text-green-700',
  'Crescimento': 'bg-pink-100 text-pink-700',
  'Neonatal': 'bg-amber-100 text-amber-700',
  'Protocolos': 'bg-violet-100 text-violet-700',
  'Tabelas': 'bg-teal-100 text-teal-700',
  'Pesquisa': 'bg-emerald-100 text-emerald-700',
  'Biblioteca': 'bg-blue-100 text-blue-700',
  'Ferramenta': 'bg-gray-100 text-gray-700'
};

const FILTER_TABS = ['Todos', 'Ferramentas', 'Protocolos', 'Condutas', 'Links', 'Anotações'];

function FavCard({ icon, label, desc, badge, badgeColor, onOpen, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-border rounded-2xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-all">
      
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
      {badge &&
      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full w-fit ${badgeColor || 'bg-gray-100 text-gray-700'}`}>
          {badge}
        </span>
      }
      <button
        onClick={onOpen}
        className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-all w-full justify-center">
        
        Abrir <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>);

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
    base44.entities.LinkBiblioteca.list().then(setLinks).catch(() => {});
    base44.auth.me().then((u) => {
      if (u) base44.entities.Anotacao.filter({ created_by_id: u.id }).then(setAnotacoes).catch(() => {});
    }).catch(() => {});
  }, []);

  const q = search.toLowerCase().trim();

  // Favorited protocols
  const favProtocols = useMemo(() => favorites.
  filter((k) => k.startsWith('protocolo-')).
  map((k) => PROTOCOLS.find((p) => `protocolo-${p.id}` === k)).
  filter(Boolean).
  filter((p) => !q || p.title.toLowerCase().includes(q)), [favorites, q]);

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
  filter(({ topico }) => !q || topico.label.toLowerCase().includes(q)), [favorites, allTopicos, q]);

  // Favorited links
  const favLinks = useMemo(() => favorites.
  filter((k) => k.startsWith('link-')).
  map((k) => links.find((l) => `link-${l.id}` === k)).
  filter(Boolean).
  filter((l) => !q || l.titulo.toLowerCase().includes(q)), [favorites, links, q]);

  // Favorited anotações
  const favAnotacoes = useMemo(() => favorites.
  filter((k) => k.startsWith('anotacao-')).
  map((k) => anotacoes.find((a) => `anotacao-${a.id}` === k)).
  filter(Boolean).
  filter((a) => !q || a.titulo.toLowerCase().includes(q)), [favorites, anotacoes, q]);

  const filteredPages = favPages.filter((p) => !q || p.label.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q));
  const filteredDrugs = favDrugs.filter((d) => !q || d.name.toLowerCase().includes(q));

  const isEmpty = favPages.length === 0 && favDrugs.length === 0 && favProtocols.length === 0 && favCondutas.length === 0 && favLinks.length === 0 && favAnotacoes.length === 0;

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
            type="text"
            placeholder="Buscar nos seus favoritos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
          
            {search &&
          <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
          }
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {FILTER_TABS.map((tab) =>
          <button
            key={tab}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {filteredPages.map((page) =>
          <FavCard
            key={page.path}
            icon={page.icon}
            label={page.label}
            desc={page.desc}
            badge="Ferramenta"
            badgeColor={CAT_COLORS['Ferramenta']}
            onOpen={() => navigate(page.path)}
            onRemove={() => togglePage(page.path)} />

          )}
            </div>
        }

          {/* Drug dosages grid */}
          {filteredDrugs.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Medicamentos — Dosagem Rápida ({filteredDrugs.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {filteredDrugs.map((drug) =>
            <FavCard
              key={drug.id}
              icon={drug.catIcon}
              label={drug.name}
              desc={drug.catLabel}
              badge="Medicamento"
              badgeColor={CAT_COLORS['Doses']}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {favProtocols.map((p) =>
            <FavCard
              key={p.id}
              icon={p.icon}
              label={p.title}
              desc={p.tag}
              badge="Protocolo"
              badgeColor={CAT_COLORS['Protocolos']}
              onOpen={() => navigate(`/biblioteca?protocolo=${p.id}`)}
              onRemove={() => togglePage(`protocolo-${p.id}`)} />

            )}
              </div>
            </>
        }

          {/* Condutas */}
          {favCondutas.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Condutas ({favCondutas.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {favCondutas.map(({ topico, cat }) =>
            <FavCard
              key={topico.id || topico.label}
              icon={cat.icon}
              label={topico.label}
              desc={cat.label}
              badge="Conduta"
              badgeColor="bg-violet-100 text-violet-700"
              onOpen={() => navigate('/biblioteca?tab=condutas')}
              onRemove={() => togglePage(`conduta-${topico.id || topico.label}`)} />

            )}
              </div>
            </>
        }

          {/* Links */}
          {favLinks.length > 0 &&
        <>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5"><LinkIcon className="w-3.5 h-3.5" /> Links ({favLinks.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {favLinks.map((l) =>
            <FavCard
              key={l.id}
              icon={l.icone || '🔗'}
              label={l.titulo}
              desc={l.descricao || l.categoria || ''}
              badge="Link"
              badgeColor="bg-teal-100 text-teal-700"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {favAnotacoes.map((a) =>
            <FavCard
              key={a.id}
              icon="📝"
              label={a.titulo}
              desc={a.conteudo ? a.conteudo.replace(/<[^>]+>/g, '').slice(0, 80) : ''}
              badge="Anotação"
              badgeColor="bg-yellow-100 text-yellow-700"
              onOpen={() => navigate('/biblioteca?tab=anotacoes')}
              onRemove={() => togglePage(`anotacao-${a.id}`)} />

            )}
              </div>
            </>
        }

          {filteredPages.length === 0 && filteredDrugs.length === 0 && favProtocols.length === 0 && favCondutas.length === 0 && favLinks.length === 0 && favAnotacoes.length === 0 &&
        <div className="text-center py-10 text-muted-foreground text-sm">
              Nenhum favorito encontrado para "<strong>{search}</strong>"
            </div>
        }

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
      }

      {/* Footer trust bar */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 pt-6 border-t border-border text-xs text-muted-foreground hidden">
        <span className="flex items-center gap-1.5 hidden"><Shield className="w-3.5 h-3.5 text-primary" /> Conteúdo baseado em evidências e diretrizes atualizadas</span>
        <span className="flex items-center gap-1.5 hidden"><RefreshCw className="w-3.5 h-3.5 text-primary" /> Atualizações frequentes</span>
        <span className="flex items-center gap-1.5 hidden"><Heart className="w-3.5 h-3.5 text-primary" /> Feito para o plantão pediátrico</span>
        <span className="flex items-center gap-1.5 hidden"><Lock className="w-3.5 h-3.5 text-primary" /> Privacidade e segurança</span>
      </div>
      <p className="text-center text-[10px] text-muted-foreground/50 mt-4">
        Pedbox.app não substitui o julgamento clínico. Sempre considere o contexto individual de cada paciente.
      </p>
    </div>);

}