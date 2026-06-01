import React, { useState } from 'react';
import { Edit3, Eye, FlaskConical, ExternalLink, Search, ChevronRight, Tag, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PROTOCOLS = [
  { id: 'crise-asmatica',       title: 'Crise Asmática',                   subtitle: 'em Crianças e Adolescentes',            icon: '🫁', tag: 'Respiratório',      source: 'Albert Einstein · Jun/2024' },
  { id: 'bronquiolite',         title: 'Bronquiolite',                     subtitle: 'em Crianças < 2 anos',                  icon: '🫧', tag: 'Respiratório',      source: 'Albert Einstein · Jul/2024' },
  { id: 'convulsao-febril',     title: 'Convulsão Febril Benigna',         subtitle: '6 meses a 5 anos',                      icon: '⚡', tag: 'Neurologia',        source: 'Albert Einstein · Jun/2025' },
  { id: 'diarreia-aguda',       title: 'Diarreia Aguda',                   subtitle: 'em Crianças e Adolescentes',            icon: '💧', tag: 'Gastroenterologia', source: 'Albert Einstein · Jun/2025' },
  { id: 'faringoamigdalite',    title: 'Faringoamigdalite',                subtitle: 'em Crianças e Adolescentes',            icon: '🦠', tag: 'Infectologia',      source: 'Albert Einstein · Jun/2024' },
  { id: 'febre-sem-sinais',     title: 'Febre sem Sinais Localizatórios',  subtitle: 'até 36 meses',                         icon: '🌡️', tag: 'Infectologia',      source: 'Albert Einstein · Jun/2025' },
  { id: 'pneumonia-complicada', title: 'PAC Complicada',                   subtitle: 'Pneumonia Adquirida na Comunidade',     icon: '🫁', tag: 'Respiratório',      source: 'SBP · 2024' },
  { id: 'anemia-ferropriva',    title: 'Anemia Ferropriva',                subtitle: 'Deficiência de Ferro em Lactentes',     icon: '🩸', tag: 'Hematologia',       source: 'SBP · Diretriz Nº 32 · 2026' },
  { id: 'meningite-bacteriana', title: 'Meningite Aguda Bacteriana',       subtitle: 'em Lactentes, Crianças e Adolescentes', icon: '🧠', tag: 'Infectologia',      source: 'SCIP · SPP' },
  { id: 'itu',                  title: 'Infecção do Trato Urinário',       subtitle: 'em Crianças e Adolescentes',            icon: '💧', tag: 'Infectologia',      source: 'Albert Einstein · Set/2025' },
];

const TAG_BADGE = {
  'Respiratório':      { bg: 'bg-blue-100',   text: 'text-blue-700' },
  'Neurologia':        { bg: 'bg-purple-100', text: 'text-purple-700' },
  'Gastroenterologia': { bg: 'bg-teal-100',   text: 'text-teal-700' },
  'Infectologia':      { bg: 'bg-orange-100', text: 'text-orange-700' },
  'Hematologia':       { bg: 'bg-red-100',    text: 'text-red-700' },
};

export default function ProtocolosAdminSection() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const q = search.toLowerCase().trim();
  const filtered = PROTOCOLS.filter(p =>
    !q || p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q)
  );

  const grouped = filtered.reduce((acc, p) => {
    if (!acc[p.tag]) acc[p.tag] = [];
    acc[p.tag].push(p);
    return acc;
  }, {});

  return (
    <div>
      {/* Info banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-5 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-blue-800">Protocolos são gerenciados via código</p>
          <p className="text-xs text-blue-700 mt-0.5 leading-relaxed">
            Os protocolos clínicos são definidos em arquivos de componente. Para adicionar ou editar um protocolo, atualize os arquivos em <code className="bg-blue-100 px-1 rounded">components/protocols/</code>. Aqui você pode visualizar e navegar para cada protocolo.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-primary" /> Protocolos Clínicos
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">{PROTOCOLS.length} protocolos indexados</p>
        </div>
        <button
          onClick={() => navigate('/biblioteca')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
          <Eye className="w-3.5 h-3.5" /> Ver na Biblioteca
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Buscar protocolo..."
          className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
        />
      </div>

      {/* Stats by tag */}
      <div className="flex flex-wrap gap-2 mb-5">
        {Object.entries(TAG_BADGE).map(([tag, style]) => {
          const count = PROTOCOLS.filter(p => p.tag === tag).length;
          if (!count) return null;
          return (
            <span key={tag} className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text}`}>
              <Tag className="w-3 h-3" />{tag} <span className="opacity-70">({count})</span>
            </span>
          );
        })}
      </div>

      {/* Protocol list */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-white border border-border rounded-2xl">
          <FlaskConical className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">Nenhum protocolo encontrado</p>
        </div>
      ) : (
        <div className="space-y-5">
          {Object.entries(grouped).map(([tag, protos]) => {
            const badge = TAG_BADGE[tag] || { bg: 'bg-gray-100', text: 'text-gray-700' };
            return (
              <div key={tag}>
                <p className={`text-xs font-extrabold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3 ${badge.bg} ${badge.text}`}>
                  {tag} ({protos.length})
                </p>
                <div className="space-y-2">
                  {protos.map(p => (
                    <div key={p.id}
                      className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3.5 shadow-sm group hover:border-primary/30 hover:shadow-md transition-all">
                      <span className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary/50 rounded-xl">{p.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-foreground truncate">{p.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{p.subtitle}</p>
                        <p className="text-[10px] text-muted-foreground/70 mt-0.5">{p.source}</p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => navigate(`/biblioteca`)}
                          className="flex items-center gap-1 text-xs font-semibold text-primary px-2.5 py-1.5 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all">
                          <Eye className="w-3.5 h-3.5" /> Ver
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}