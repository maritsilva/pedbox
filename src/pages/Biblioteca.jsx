import React, { useState, useMemo } from 'react';
import { Search, Clock, ChevronRight, Flame, BookOpen, FlaskConical, X, LayoutGrid, GitBranch, ChevronLeft, Star, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RESUMOS } from '@/lib/resumosData';

// ── Protocols list (duplicated metadata only) ──────────────────────────────
const PROTOCOLS = [
  { id: 'crise-asmatica',      title: 'Crise Asmática',                subtitle: 'em Crianças e Adolescentes',                  icon: '🫁', tag: 'Respiratório',      source: 'Albert Einstein · Jun/2024' },
  { id: 'bronquiolite',        title: 'Bronquiolite',                  subtitle: 'em Crianças < 2 anos',                        icon: '🫧', tag: 'Respiratório',      source: 'Albert Einstein · Jul/2024' },
  { id: 'convulsao-febril',    title: 'Convulsão Febril Benigna',      subtitle: '6 meses a 5 anos',                            icon: '⚡', tag: 'Neurologia',        source: 'Albert Einstein · Jun/2025' },
  { id: 'diarreia-aguda',      title: 'Diarreia Aguda',                subtitle: 'em Crianças e Adolescentes',                  icon: '💧', tag: 'Gastroenterologia', source: 'Albert Einstein · Jun/2025' },
  { id: 'faringoamigdalite',   title: 'Faringoamigdalite',             subtitle: 'em Crianças e Adolescentes',                  icon: '🦠', tag: 'Infectologia',      source: 'Albert Einstein · Jun/2024' },
  { id: 'febre-sem-sinais',    title: 'Febre sem Sinais Localizatórios', subtitle: 'até 36 meses',                              icon: '🌡️', tag: 'Infectologia',      source: 'Albert Einstein · Jun/2025' },
  { id: 'pneumonia-complicada',title: 'PAC Complicada',                subtitle: 'Pneumonia Adquirida na Comunidade',            icon: '🫁', tag: 'Respiratório',      source: 'SBP · 2024' },
  { id: 'anemia-ferropriva',   title: 'Anemia Ferropriva',             subtitle: 'Deficiência de Ferro em Lactentes',           icon: '🩸', tag: 'Hematologia',       source: 'SBP · Diretriz Nº 32 · 2026' },
  { id: 'meningite-bacteriana',title: 'Meningite Aguda Bacteriana',    subtitle: 'em Lactentes, Crianças e Adolescentes',       icon: '🧠', tag: 'Infectologia',      source: 'SCIP · SPP' },
  { id: 'itu',                 title: 'Infecção do Trato Urinário',    subtitle: 'em Crianças e Adolescentes',                  icon: '💧', tag: 'Infectologia',      source: 'Albert Einstein · Set/2025' },
];

const TAG_BADGE = {
  'Respiratório':      { bg: 'bg-blue-100',   text: 'text-blue-700' },
  'Neurologia':        { bg: 'bg-purple-100', text: 'text-purple-700' },
  'Gastroenterologia': { bg: 'bg-teal-100',   text: 'text-teal-700' },
  'Infectologia':      { bg: 'bg-orange-100', text: 'text-orange-700' },
  'Hematologia':       { bg: 'bg-red-100',    text: 'text-red-700' },
};

const CAT_BADGE = {
  'Infectologia':         { bg: 'bg-blue-100',   text: 'text-blue-700',   label: 'Infectologia' },
  'Respiratório':         { bg: 'bg-cyan-100',   text: 'text-cyan-700',   label: 'Respiratório' },
  'Gastroenterologia':    { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Gastroenterologia' },
  'Endocrinologia':       { bg: 'bg-green-100',  text: 'text-green-700',  label: 'Endocrinologia' },
  'Emergência':           { bg: 'bg-red-100',    text: 'text-red-700',    label: 'Urgências' },
  'Neurologia':           { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Neurologia' },
  'Nefrologia':           { bg: 'bg-teal-100',   text: 'text-teal-700',   label: 'Nefrologia' },
  'Nutrição':             { bg: 'bg-lime-100',   text: 'text-lime-700',   label: 'Nutrição' },
  'Neurodesenvolvimento': { bg: 'bg-indigo-100', text: 'text-indigo-700', label: 'Neurodesenv.' },
  'Social':               { bg: 'bg-pink-100',   text: 'text-pink-700',   label: 'Social' },
};

const SECTION_COLORS = {
  blue: 'bg-blue-50 border-blue-200 text-blue-900',
  red: 'bg-red-50 border-red-200 text-red-900',
  green: 'bg-green-50 border-green-200 text-green-900',
  amber: 'bg-amber-50 border-amber-200 text-amber-900',
  purple: 'bg-purple-50 border-purple-200 text-purple-900',
  orange: 'bg-orange-50 border-orange-200 text-orange-900',
  teal: 'bg-teal-50 border-teal-200 text-teal-900',
  pink: 'bg-pink-50 border-pink-200 text-pink-900',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900',
  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-900',
};

function estimateTime(resumo) {
  const chars = resumo.seções?.reduce((acc, s) => acc + (s.conteudo?.length || 0), 0) || 0;
  return Math.max(3, Math.ceil(chars / 800));
}

// ── Resumo Detail ──────────────────────────────────────────────────────────
function ResumoDetail({ resumo, onBack }) {
  const badge = CAT_BADGE[resumo.categoria] || { bg: 'bg-gray-100', text: 'text-gray-700', label: resumo.categoria };
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl mx-auto px-4 py-8">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar à Biblioteca
      </button>
      <div className="bg-white border border-border rounded-2xl p-6 mb-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="text-5xl w-16 h-16 flex items-center justify-center bg-secondary/40 rounded-2xl flex-shrink-0">{resumo.emoji}</div>
          <div className="flex-1">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} inline-block mb-2`}>{badge.label}</span>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight">{resumo.titulo}</h1>
            <p className="text-sm text-muted-foreground mt-1">{resumo.subtitulo}</p>
          </div>
        </div>
        {resumo.referencia && (
          <p className="text-[11px] text-muted-foreground mt-4 pt-4 border-t border-border leading-relaxed">📚 {resumo.referencia}</p>
        )}
      </div>
      <div className="space-y-4">
        {resumo.seções?.map((sec, i) => {
          const colorClass = SECTION_COLORS[sec.color] || SECTION_COLORS.blue;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className={`rounded-2xl border p-5 ${colorClass}`}>
              <p className="font-bold text-sm mb-2">{sec.nome}</p>
              <p className="text-xs leading-relaxed whitespace-pre-line">{sec.conteudo}</p>
            </motion.div>
          );
        })}
      </div>
      <p className="text-center text-[10px] text-muted-foreground/50 mt-8">
        Este conteúdo é baseado em evidências e diretrizes atualizadas. Sempre valide com protocolos institucionais.
      </p>
    </motion.div>
  );
}

// ── Resumo Card ────────────────────────────────────────────────────────────
function ResumoCard({ resumo, onOpen }) {
  const badge = CAT_BADGE[resumo.categoria] || { bg: 'bg-gray-100', text: 'text-gray-700', label: resumo.categoria };
  const mins = estimateTime(resumo);
  return (
    <motion.div whileHover={{ y: -1 }} onClick={() => onOpen(resumo)}
      className="bg-white border border-border rounded-2xl p-4 flex gap-4 cursor-pointer hover:shadow-md transition-all group">
      <div className="text-3xl w-14 h-14 flex items-center justify-center bg-secondary/40 rounded-xl flex-shrink-0">{resumo.emoji}</div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">{resumo.titulo}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{resumo.subtitulo}</p>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>{badge.label}</span>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground ml-auto">
            <Clock className="w-3 h-3" /> {mins} min
          </span>
        </div>
        <div className="mt-2 flex items-center justify-end">
          <span className="text-[10px] font-semibold text-primary group-hover:underline flex items-center gap-1">
            Ler resumo <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Protocol Card ──────────────────────────────────────────────────────────
function ProtocolCard({ protocol }) {
  const navigate = useNavigate();
  const badge = TAG_BADGE[protocol.tag] || { bg: 'bg-gray-100', text: 'text-gray-700' };
  return (
    <motion.div whileHover={{ y: -1 }}
      onClick={() => navigate(`/protocolos?id=${protocol.id}`)}
      className="bg-white border border-border rounded-2xl p-4 flex gap-4 cursor-pointer hover:shadow-md transition-all group">
      <div className="text-3xl w-14 h-14 flex items-center justify-center bg-secondary/40 rounded-xl flex-shrink-0">{protocol.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">{protocol.title}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{protocol.subtitle}</p>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>{protocol.tag}</span>
          <span className="text-[10px] text-muted-foreground/60 ml-auto">{protocol.source}</span>
        </div>
        <div className="mt-2 flex items-center justify-end">
          <span className="text-[10px] font-semibold text-primary group-hover:underline flex items-center gap-1">
            Ver protocolo <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
const TABS = [
  { id: 'todos',      label: 'Todos',             icon: LayoutGrid },
  { id: 'resumos',    label: 'Resumos Clínicos',  icon: BookOpen },
  { id: 'protocolos', label: 'Protocolos Clínicos', icon: FlaskConical },
];

export default function Biblioteca() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('todos');
  const [selectedResumo, setSelectedResumo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todas');

  const q = search.toLowerCase().trim();
  
  // Get all categories from resumos and protocolos
  const allCategories = useMemo(() => {
    const resumosCats = [...new Set(RESUMOS.map(r => r.categoria).filter(Boolean))];
    const protocolsCats = [...new Set(PROTOCOLS.map(p => p.tag).filter(Boolean))];
    return ['Todas', ...new Set([...resumosCats, ...protocolsCats])].sort();
  }, []);

  const filteredResumos = useMemo(() => RESUMOS.filter(r => {
    const matchSearch = !q || r.titulo.toLowerCase().includes(q) || r.subtitulo?.toLowerCase().includes(q) ||
      r.categoria?.toLowerCase().includes(q) || r.seções?.some(s => s.nome.toLowerCase().includes(q) || s.conteudo.toLowerCase().includes(q));
    const matchCat = activeCategory === 'Todas' || r.categoria === activeCategory;
    return matchSearch && matchCat;
  }), [q, activeCategory]);

  const filteredProtocols = useMemo(() => PROTOCOLS.filter(p => {
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
    const matchCat = activeCategory === 'Todas' || p.tag === activeCategory;
    return matchSearch && matchCat;
  }), [q, activeCategory]);

  const showResumos = activeTab === 'todos' || activeTab === 'resumos';
  const showProtocols = activeTab === 'todos' || activeTab === 'protocolos';

  if (selectedResumo) {
    return <ResumoDetail resumo={selectedResumo} onBack={() => setSelectedResumo(null)} />;
  }

  const totalResults = (showResumos ? filteredResumos.length : 0) + (showProtocols ? filteredProtocols.length : 0);

  const maisAcessados = [...filteredResumos.slice(0, 2), ...filteredProtocols.slice(0, 3)].slice(0, 5);
  const totalContent = filteredResumos.length + filteredProtocols.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── HEADER ── */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-foreground">Biblioteca</h1>
        <p className="text-muted-foreground text-sm mt-1.5 max-w-lg">
          Resumos clínicos e protocolos baseados em evidências para a prática pediátrica.
        </p>
      </div>

      {/* ── SEARCH ── */}
      <div className="relative max-w-2xl mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar tema, resumo ou protocolo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-border rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── TABS ── */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {TABS.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isActive ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
              }`}>
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── CATEGORY FILTERS ── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeCategory === cat
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-muted-foreground border-border hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── LEFT: Main content ── */}
        <div className="flex-1 min-w-0">
          {/* ── SEARCH RESULT COUNT ── */}
          {q && (
            <p className="text-xs text-muted-foreground mb-4">
              {totalResults} resultado{totalResults !== 1 ? 's' : ''} para "<strong>{search}</strong>"
            </p>
          )}

          {/* ── CONTENT ── */}
          {totalResults === 0 && q ? (
            <div className="text-center py-16 bg-white border border-border rounded-2xl">
              <p className="text-4xl mb-3">📚</p>
              <p className="font-bold text-foreground text-lg">Nenhum conteúdo encontrado</p>
              <p className="text-muted-foreground mt-1 text-sm">Tente outros termos de busca</p>
            </div>
          ) : (
            <div className="space-y-6">

              {/* Resumos section */}
              {showResumos && filteredResumos.length > 0 && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-extrabold text-foreground">Resumos Clínicos</h2>
                      <p className="text-xs text-muted-foreground">{filteredResumos.length} resumo{filteredResumos.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {filteredResumos.map((r, i) => (
                      <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                        <ResumoCard resumo={r} onOpen={setSelectedResumo} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Protocols section */}
              {showProtocols && filteredProtocols.length > 0 && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center">
                      <FlaskConical className="w-4 h-4 text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-extrabold text-foreground">Protocolos Clínicos</h2>
                      <p className="text-xs text-muted-foreground">{filteredProtocols.length} protocolo{filteredProtocols.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {filteredProtocols.map((p, i) => (
                      <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                        <ProtocolCard protocol={p} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {/* ── FOOTER ── */}
          <div className="mt-10 pt-6 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', text: 'Baseado em evidências' },
              { icon: '🔄', text: 'Revisado por especialistas' },
              { icon: '👨‍⚕️', text: 'Prático e rápido' },
              { icon: '❤️', text: 'Foco no cuidado' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <p className="text-[10px] text-muted-foreground leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">
          {/* Counter card */}
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary leading-none">26</p>
              <p className="text-sm font-semibold text-foreground">conteúdos disponíveis</p>
              <p className="text-xs text-muted-foreground mt-0.5">Resumos e protocolos atualizados</p>
            </div>
          </div>

          {/* Mais acessados sidebar */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="font-bold text-sm text-foreground">Mais acessados</p>
            </div>
            {maisAcessados.length === 0 ? (
              <div className="px-5 py-6 text-center">
                <p className="text-sm text-muted-foreground">Nenhum conteúdo acessado ainda.</p>
              </div>
            ) : (
              <div className="divide-y divide-border/60">
                {maisAcessados.map((item, i) => {
                  const isResumo = item.titulo !== undefined;
                  return (
                    <button
                      key={isResumo ? item.id : item.id}
                      onClick={() => isResumo ? setSelectedResumo(item) : null}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-secondary/40 transition-colors text-left group"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[11px] font-bold text-primary flex-shrink-0">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{isResumo ? item.titulo : item.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{isResumo ? item.categoria : item.tag}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}