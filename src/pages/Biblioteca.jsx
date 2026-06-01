import React, { useState, useMemo, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Search, Clock, ChevronRight, Flame, BookOpen, FlaskConical, X, LayoutGrid, GitBranch, ChevronLeft, Star, TrendingUp, Copy, Stethoscope, Link as LinkIcon, StickyNote, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { RESUMOS } from '@/lib/resumosData';
import CondutasTab from '@/components/biblioteca/CondutasTab';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import LinksTab from '@/components/biblioteca/LinksTab';
import AnotacoesTab from '@/components/biblioteca/AnotacoesTab';
import ProtocolosPage from './Protocolos';

// ── Protocols list (duplicated metadata only) ──────────────────────────────
const PROTOCOLS = [
  { id: 'crise-asmatica',      title: 'Crise Asmática',                subtitle: 'em Crianças e Adolescentes',                  icon: '🫁', tag: 'Respiratório',      source: 'Albert Einstein · Jun/2024' },
  { id: 'bronquiolite',        title: 'Bronquiolite',                  subtitle: 'em Crianças < 2 anos',                        icon: '🫧', tag: 'Respiratório',      source: 'Albert Einstein · Jul/2024' },
  { id: 'convulsao-febril',    title: 'Convulsão Febril Benigna',      subtitle: '6 meses a 5 anos',                            icon: '⚡', tag: 'Neurologia',        source: 'Albert Einstein · Jun/2025' },
  { id: 'diarreia-aguda',      title: 'Diarreia Aguda',                subtitle: 'em Crianças e Adolescentes',                  icon: '💧', tag: 'Gastroenterologia', source: 'Albert Einstein · Jun/2025' },
  { id: 'faringoamigdalite',   title: 'Faringoamigdalite',             subtitle: 'em Crianças e Adolescentes',                  icon: '🦠', tag: 'Infectologia',      source: 'Albert Einstein · Jun/2024' },
  { id: 'febre-sem-sinais',    title: 'Febre sem Sinais Localizatórios', subtitle: 'até 36 meses',                              icon: '🌡️', tag: 'Infectologia',      source: 'Albert Einstein · Jun/2025' },
  { id: 'laringite',           title: 'Laringite (Crupe)',             subtitle: 'em Crianças e Adolescentes',                  icon: '🗣️', tag: 'Respiratório',      source: 'Albert Einstein · Jun/2024' },
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
  const mins = estimateTime(resumo);
  const [selectedSection, setSelectedSection] = useState(0);
  const [readingMode, setReadingMode] = useState(false);
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const sectionRefs = React.useRef({});
  
  const handleSectionClick = (index) => {
    setSelectedSection(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCopy = () => {
    const text = resumo.seções?.map((s, i) => `${i + 1}. ${s.nome}\n${s.conteudo}`).join('\n\n') || '';
    navigator.clipboard.writeText(text);
  };

  const pontosChaave = [
    'Identificar características clínicas principais da condição',
    'Reconhecer sinais de alerta e gravidade',
    'Aplicar critérios diagnósticos padronizados',
    'Conhecer opções terapêuticas baseadas em evidências',
  ];
  
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-7xl mx-auto px-4 py-8">
      {/* Back button */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar à Biblioteca
      </button>

      <div className="flex gap-6">
        {/* ── LEFT SIDEBAR ── */}
        <div className="lg:w-72 flex-shrink-0 hidden lg:block">
          <div className="bg-white border border-border rounded-2xl p-4 shadow-sm sticky top-20">
            <p className="font-bold text-sm text-foreground mb-3">Neste resumo</p>
            <div className="space-y-1.5 max-h-96 overflow-y-auto">
              <button 
                onClick={() => setSelectedSection(-1)}
                className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  selectedSection === -1 
                    ? 'bg-blue-50 border-l-2 border-primary text-primary text-sm font-semibold' 
                    : 'text-muted-foreground text-xs font-medium hover:bg-secondary/60 hover:text-foreground'
                }`}>
                <BookOpen className="w-4 h-4" />
                Visão geral
              </button>
              {resumo.seções?.map((sec, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSectionClick(i)}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    selectedSection === i 
                      ? 'bg-blue-50 border-l-2 border-primary text-primary text-xs font-semibold' 
                      : 'text-muted-foreground text-xs font-medium hover:bg-secondary/60 hover:text-foreground'
                  }`}>
                  <span className="text-[10px] font-bold flex-shrink-0">{i + 1}</span>
                  <span className="truncate">{sec.nome}</span>
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-border">
                <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-muted-foreground text-xs font-medium hover:bg-secondary/60 hover:text-foreground rounded-lg transition-colors">
                  <LayoutGrid className="w-4 h-4" />
                  Tabela comparativa
                </button>
                <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-muted-foreground text-xs font-medium hover:bg-secondary/60 hover:text-foreground rounded-lg transition-colors">
                  <GitBranch className="w-4 h-4" />
                  Referências
                </button>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-[10px] font-semibold text-blue-700 flex items-center gap-1.5 mb-1">
                <span>💡</span> Dica
              </p>
              <p className="text-[10px] text-blue-600 leading-relaxed">Use o sumário para navegar entre as seções do resumo.</p>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 min-w-0">
          {/* Action buttons */}
          <div className="flex items-center gap-2 mb-6 flex-wrap justify-end">
            <button 
              onClick={() => toggleFavorite(`resumo-${resumo.id}`)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-lg transition-colors ${
                isFavorite(`resumo-${resumo.id}`)
                  ? 'bg-yellow-50 border-yellow-300 text-yellow-700'
                  : 'text-foreground border-border hover:bg-secondary'
              }`}>
              <Star className={`w-4 h-4 ${isFavorite(`resumo-${resumo.id}`) ? 'fill-yellow-400' : ''}`} />
              Favoritar
            </button>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-foreground border border-border rounded-lg hover:bg-secondary transition-colors">
              <Copy className="w-4 h-4" />
              Copiar
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-foreground border border-border rounded-lg hover:bg-secondary transition-colors">
              <BookOpen className="w-4 h-4" />
              PDF
            </button>
            <button 
              onClick={() => setReadingMode(!readingMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-lg transition-colors ${
                readingMode
                  ? 'bg-primary/10 border-primary text-primary'
                  : 'text-foreground border-border hover:bg-secondary'
              }`}>
              <LayoutGrid className="w-4 h-4" />
              Modo leitura
            </button>
          </div>

          {/* Header */}
          <div className="bg-white border border-border rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl w-16 h-16 flex items-center justify-center bg-secondary/40 rounded-2xl flex-shrink-0">{resumo.emoji}</div>
              <div className="flex-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} inline-block mb-2`}>{badge.label}</span>
                <h1 className="text-2xl font-extrabold text-foreground leading-tight">{resumo.titulo}</h1>
                <p className="text-sm text-muted-foreground mt-1">{resumo.subtitulo}</p>
              </div>
            </div>
            {resumo.referencia && (
              <p className="text-[11px] text-muted-foreground pt-4 border-t border-border leading-relaxed">📚 {resumo.referencia}</p>
            )}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">⏱️ Leitura: {mins} min</span>
              <span>Atualizado: Jun/2024</span>
            </div>
          </div>

          {/* Pontos-chave section */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <h2 className="text-base font-extrabold text-blue-900 mb-4 flex items-center gap-2">
              <span className="text-lg">📍</span>
              Pontos-chave
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pontosChaave.map((point, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">✓</div>
                  <p className="text-sm text-blue-900">{point}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-white border border-blue-300 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              🏥 Modo plantão
            </button>
          </div>

          {/* Seções */}
          <div className={`space-y-4 ${readingMode ? 'max-w-2xl mx-auto text-lg leading-relaxed' : ''}`}>
            {resumo.seções?.map((sec, i) => {
              const colorClass = SECTION_COLORS[sec.color] || SECTION_COLORS.blue;
              return (
                <motion.div 
                  key={i} 
                  ref={el => { sectionRefs.current[i] = el; }}
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-2xl border p-5 ${colorClass}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-white/60 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className={`flex-1 ${readingMode ? 'text-lg font-bold' : 'font-bold text-sm'}`}>{sec.nome}</p>
                  </div>
                  <p className={`leading-relaxed whitespace-pre-line ${readingMode ? 'text-base' : 'text-xs'}`}>{sec.conteudo}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <p className="text-center text-[10px] text-muted-foreground/50 mt-8">
            Este conteúdo é baseado em evidências e diretrizes atualizadas. Sempre valide com protocolos institucionais.
          </p>
        </div>
      </div>
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
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const favKey = `protocolo-${protocol.id}`;
  const badge = TAG_BADGE[protocol.tag] || { bg: 'bg-gray-100', text: 'text-gray-700' };
  return (
    <motion.div whileHover={{ y: -1 }}
      className="bg-white border border-border rounded-2xl p-4 flex gap-4 cursor-pointer hover:shadow-md transition-all group relative"
      onClick={() => navigate(`/protocolos?id=${protocol.id}`)}>
      <button
        onClick={e => { e.stopPropagation(); toggleFavorite(favKey); }}
        className="absolute top-3 right-3 p-1 z-10"
      >
        <Star className={`w-4 h-4 transition-colors ${isFavorite(favKey) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`} />
      </button>
      <div className="text-3xl w-14 h-14 flex items-center justify-center bg-secondary/40 rounded-xl flex-shrink-0">{protocol.icon}</div>
      <div className="flex-1 min-w-0 pr-6">
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

// ── Search results across protocolos + condutas + links ───────────────────
function GlobalSearchResults({ q, setSearch }) {
  const navigate = useNavigate();

  const filteredProtocols = PROTOCOLS.filter(p =>
    p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
  ).slice(0, 6);

  const filteredCondutas = useMemo(() => {
    const results = [];
    CONDUTAS_CATEGORIAS.forEach(cat => {
      cat.subcategorias.forEach(sub => {
        sub.topicos.forEach(top => {
          if (
            top.label.toLowerCase().includes(q) ||
            cat.label.toLowerCase().includes(q) ||
            sub.label.toLowerCase().includes(q)
          ) {
            results.push({ topico: top, categoria: cat, subcategoria: sub });
          }
        });
      });
    });
    return results.slice(0, 8);
  }, [q]);

  const [links, setLinks] = useState([]);
  useEffect(() => {
    base44.entities.LinkBiblioteca.list().then(setLinks).catch(() => {});
  }, []);
  const filteredLinks = links.filter(l =>
    l.titulo.toLowerCase().includes(q) || (l.descricao || '').toLowerCase().includes(q) || (l.categoria || '').toLowerCase().includes(q)
  ).slice(0, 6);

  const total = filteredProtocols.length + filteredCondutas.length + filteredLinks.length;

  return (
    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
      <p className="text-xs text-muted-foreground mb-3">{total} resultado{total !== 1 ? 's' : ''} para "<strong>{q}</strong>"</p>
      {filteredProtocols.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Protocolos</p>
          <div className="space-y-2">
            {filteredProtocols.map(p => {
              const badge = TAG_BADGE[p.tag] || { bg: 'bg-gray-100', text: 'text-gray-700' };
              return (
                <button key={p.id} onClick={() => navigate(`/protocolos?id=${p.id}`)}
                  className="w-full text-left bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-md transition-all group">
                  <span className="text-xl">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} flex-shrink-0`}>{p.tag}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      )}
      {filteredCondutas.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Condutas</p>
          <div className="space-y-2">
            {filteredCondutas.map(({ topico, categoria, subcategoria }) => (
              <button key={topico.id} onClick={() => { setSearch(''); localStorage.setItem('selectedConduta', JSON.stringify({ topico, categoria, subcategoria })); }}
                className="w-full text-left bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-md transition-all group">
                <span className="text-xl">{categoria.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary">{topico.label}</p>
                  <p className="text-xs text-muted-foreground">{categoria.label} › {subcategoria.label}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}
      {filteredLinks.length > 0 && (
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Links</p>
          <div className="space-y-2">
            {filteredLinks.map(l => (
              <a key={l.id} href={l.url} target="_blank" rel="noopener noreferrer"
                className="block bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-md transition-all group">
                <span className="text-xl">{l.icone || '🔗'}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary">{l.titulo}</p>
                  {l.descricao && <p className="text-xs text-muted-foreground">{l.descricao}</p>}
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}
      {total === 0 && (
        <div className="py-12 text-center bg-white border border-border rounded-2xl">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-foreground">Nenhum resultado encontrado</p>
        </div>
      )}
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

const TABS = [
  { id: 'protocolos', label: 'Protocolos',  icon: FlaskConical },
  { id: 'condutas',   label: 'Condutas',    icon: Stethoscope },
  { id: 'links',      label: 'Links',       icon: LinkIcon },
  { id: 'anotacoes',  label: 'Anotações',   icon: StickyNote },
];

export default function Biblioteca() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('protocolos');

  const q = search.toLowerCase().trim();
  const isSearching = q.length > 1;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── HEADER ── */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-foreground">Biblioteca</h1>
        <p className="text-muted-foreground text-sm mt-1.5 max-w-lg">
          Protocolos, condutas, links e anotações para a prática pediátrica.
        </p>
      </div>

      {/* ── SEARCH ── */}
      <div className="relative max-w-2xl mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar protocolo, conduta ou link..."
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

      {/* ── GLOBAL SEARCH RESULTS ── */}
      {isSearching && <GlobalSearchResults q={q} setSearch={setSearch} />}

      {/* ── TABS ── */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
              }`}>
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'condutas'   && <CondutasTab externalSearch={search} />}
      {activeTab === 'protocolos' && <ProtocolosPage />}
      {activeTab === 'links'      && <LinksTab />}
      {activeTab === 'anotacoes'  && <AnotacoesTab />}
    </div>
  );
}