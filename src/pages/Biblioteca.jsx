import React, { useState, useMemo } from 'react';
import { Search, Clock, ChevronRight, Flame, BookOpen, FlaskConical, Pill, Syringe, Zap, Baby, BookMarked, LayoutGrid, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RESUMOS } from '@/lib/resumosData';

// ── Category filter config ─────────────────────────────────────────────────
const CATEGORIAS = [
  { id: 'todos',         label: 'Todos',           Icon: LayoutGrid },
  { id: 'Infectologia',  label: 'Resumos clínicos', Icon: BookOpen },
  { id: 'Respiratório',  label: 'Protocolos',       Icon: FlaskConical },
  { id: 'Gastroenterologia', label: 'Medicamentos', Icon: Pill },
  { id: 'Endocrinologia','label': 'Vacinas',        Icon: Syringe },
  { id: 'Emergência',    label: 'Urgências',        Icon: Zap },
  { id: 'Neurologia',    label: 'Neonatal',         Icon: Baby },
  { id: 'Nefrologia',    label: 'Diretrizes',       Icon: BookMarked },
];

// Map category → badge style
const CAT_BADGE = {
  'Infectologia':      { bg: 'bg-blue-100',   text: 'text-blue-700',   label: 'Resumos clínicos' },
  'Respiratório':      { bg: 'bg-cyan-100',    text: 'text-cyan-700',   label: 'Protocolos' },
  'Gastroenterologia': { bg: 'bg-orange-100',  text: 'text-orange-700', label: 'Gastrologia' },
  'Endocrinologia':    { bg: 'bg-green-100',   text: 'text-green-700',  label: 'Endocrinologia' },
  'Emergência':        { bg: 'bg-red-100',     text: 'text-red-700',    label: 'Urgências' },
  'Neurologia':        { bg: 'bg-purple-100',  text: 'text-purple-700', label: 'Neurologia' },
  'Nefrologia':        { bg: 'bg-teal-100',    text: 'text-teal-700',   label: 'Nefrologia' },
  'Nutrição':          { bg: 'bg-lime-100',    text: 'text-lime-700',   label: 'Nutrição' },
  'Neurodesenvolvimento': { bg: 'bg-indigo-100', text: 'text-indigo-700', label: 'Neurodesenv.' },
  'Social':            { bg: 'bg-pink-100',    text: 'text-pink-700',   label: 'Social' },
};

// Estimated reading time (based on content length of sections)
function estimateTime(resumo) {
  const chars = resumo.seções?.reduce((acc, s) => acc + (s.conteudo?.length || 0), 0) || 0;
  return Math.max(3, Math.ceil(chars / 800));
}

// Featured / "Mais acessados"
const FEATURED_IDS = ['bronquiolite-coqueluche', 'fssl', 'exantemáticas'];

// ── Featured card (horizontal) ─────────────────────────────────────────────
function FeaturedCard({ resumo, onOpen }) {
  const badge = CAT_BADGE[resumo.categoria] || { bg: 'bg-gray-100', text: 'text-gray-700', label: resumo.categoria };
  const mins = estimateTime(resumo);
  return (
    <motion.div
      whileHover={{ y: -2 }}
      onClick={() => onOpen(resumo)}
      className="bg-white border border-border rounded-2xl p-5 flex flex-col gap-3 cursor-pointer hover:shadow-md transition-all group"
    >
      {/* Emoji large */}
      <div className="text-5xl w-16 h-16 flex items-center justify-center bg-secondary/40 rounded-2xl flex-shrink-0">
        {resumo.emoji}
      </div>
      <div className="flex-1">
        <p className="font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
          {resumo.titulo}
        </p>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
          {resumo.subtitulo}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>
            {badge.label}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Clock className="w-3 h-3" /> {mins} min
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </motion.div>
  );
}

// ── Content card (grid) ────────────────────────────────────────────────────
function ContentCard({ resumo, onOpen }) {
  const badge = CAT_BADGE[resumo.categoria] || { bg: 'bg-gray-100', text: 'text-gray-700', label: resumo.categoria };
  const mins = estimateTime(resumo);
  const isQuick = mins <= 4;
  return (
    <motion.div
      whileHover={{ y: -1 }}
      onClick={() => onOpen(resumo)}
      className="bg-white border border-border rounded-2xl p-4 flex gap-4 cursor-pointer hover:shadow-md transition-all group"
    >
      {/* Icon */}
      <div className="text-3xl w-14 h-14 flex items-center justify-center bg-secondary/40 rounded-xl flex-shrink-0">
        {resumo.emoji}
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
          {resumo.titulo}
        </p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
          {resumo.subtitulo}
        </p>
        <div className="flex items-center gap-2 mt-2.5 flex-wrap">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>
            {badge.label}
          </span>
          {isQuick && (
            <span className="text-[10px] font-semibold text-amber-600 flex items-center gap-0.5">
              ⚡ Leitura rápida
            </span>
          )}
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

// ── Detail view ────────────────────────────────────────────────────────────
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

function ResumoDetail({ resumo, onBack }) {
  const badge = CAT_BADGE[resumo.categoria] || { bg: 'bg-gray-100', text: 'text-gray-700', label: resumo.categoria };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-3xl mx-auto px-4 py-8"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group"
      >
        <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
        Voltar à Biblioteca
      </button>

      {/* Header */}
      <div className="bg-white border border-border rounded-2xl p-6 mb-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="text-5xl w-16 h-16 flex items-center justify-center bg-secondary/40 rounded-2xl flex-shrink-0">
            {resumo.emoji}
          </div>
          <div className="flex-1">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} inline-block mb-2`}>
              {badge.label}
            </span>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight">{resumo.titulo}</h1>
            <p className="text-sm text-muted-foreground mt-1">{resumo.subtitulo}</p>
          </div>
        </div>
        {resumo.referencia && (
          <p className="text-[11px] text-muted-foreground mt-4 pt-4 border-t border-border leading-relaxed">
            📚 {resumo.referencia}
          </p>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {resumo.seções?.map((sec, i) => {
          const colorClass = SECTION_COLORS[sec.color] || SECTION_COLORS.blue;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`rounded-2xl border p-5 ${colorClass}`}
            >
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

// ── Main page ──────────────────────────────────────────────────────────────
export default function Biblioteca() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('todos');
  const [selected, setSelected] = useState(null);

  const featured = useMemo(
    () => FEATURED_IDS.map(id => RESUMOS.find(r => r.id === id)).filter(Boolean),
    []
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return RESUMOS.filter(r => {
      const matchCat = activeCat === 'todos' || r.categoria === activeCat;
      const matchSearch = !q ||
        r.titulo.toLowerCase().includes(q) ||
        r.subtitulo?.toLowerCase().includes(q) ||
        r.categoria?.toLowerCase().includes(q) ||
        r.seções?.some(s => s.nome.toLowerCase().includes(q) || s.conteudo.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [search, activeCat]);

  const showFeatured = activeCat === 'todos' && !search.trim();

  if (selected) {
    return <ResumoDetail resumo={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-foreground leading-tight">Biblioteca</h1>
          <p className="text-muted-foreground text-sm mt-1.5 max-w-md">
            Acesse referências, resumos e conteúdos organizados para a prática pediátrica.
          </p>
        </div>

        {/* Search */}
        <div className="relative md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar tema, resumo, protocolo ou referência..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-white border border-border rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] bg-secondary border border-border rounded px-1.5 py-0.5 font-mono text-muted-foreground hidden md:block pointer-events-none">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* ── CATEGORY CHIPS ── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIAS.map(cat => {
          const Icon = cat.Icon;
          const isActive = activeCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isActive
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ── MAIS ACESSADOS ── */}
      <AnimatePresence>
        {showFeatured && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-extrabold text-foreground">Mais acessados</h2>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Os conteúdos mais consultados pela comunidade pediátrica.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featured.map(r => (
                <FeaturedCard key={r.id} resumo={r} onOpen={setSelected} />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── ALL CONTENT ── */}
      <section>
        {showFeatured && (
          <h2 className="text-lg font-extrabold text-foreground mb-5">Todos os conteúdos</h2>
        )}
        {!showFeatured && search.trim() && (
          <p className="text-sm text-muted-foreground mb-5">
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} para "<strong>{search}</strong>"
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-border rounded-2xl">
            <p className="text-5xl mb-3">📚</p>
            <p className="font-bold text-foreground text-lg">Nenhum conteúdo encontrado</p>
            <p className="text-muted-foreground mt-1 text-sm">Tente outros termos de busca</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <ContentCard resumo={r} onOpen={setSelected} />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ── FOOTER TRUST BAR ── */}
      <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: '🛡️', text: 'Baseado em evidências e diretrizes atualizadas' },
          { icon: '🔄', text: 'Conteúdo revisado por especialistas em pediatria' },
          { icon: '👨‍⚕️', text: 'Feito para o plantão e para o dia a dia clínico' },
          { icon: '❤️', text: 'Foco no que realmente importa: a criança' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-[11px] text-muted-foreground leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}