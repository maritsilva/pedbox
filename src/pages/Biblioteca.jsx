import PageHeader from '@/components/PageHeader';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import React, { useState, useMemo, useEffect } from 'react';
import { services } from '@/api/services';
import { Search, ChevronRight, FlaskConical, X, Stethoscope, Link as LinkIcon, StickyNote, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CondutasTab from '@/components/biblioteca/CondutasTab';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import DocumentosTab from '@/components/biblioteca/DocumentosTab';
import LinksTab from '@/components/biblioteca/LinksTab';
import AnotacoesTab from '@/components/biblioteca/AnotacoesTab';
import ProtocolosPage from './Protocolos';
import { DEFAULT_DOCUMENTS } from '@/lib/driveDocumentsData';

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

// ── Search results across protocolos + condutas + links ───────────────────
function GlobalSearchResults({ q, setSearch }) {
  const navigate = useNavigate();

  const filteredProtocols = PROTOCOLS.filter(p =>
    normalizeSearch(p.title).includes(q) || normalizeSearch(p.subtitle).includes(q) || normalizeSearch(p.tag).includes(q)
  ).slice(0, 6);

  const filteredCondutas = useMemo(() => {
    const results = [];
    CONDUTAS_CATEGORIAS.forEach(cat => {
      cat.subcategorias.forEach(sub => {
        sub.topicos.forEach(top => {
          if (
            normalizeSearch(top.label).includes(q) ||
            normalizeSearch(cat.label).includes(q) ||
            normalizeSearch(sub.label).includes(q)
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
    services.libraryLinks.list().then(setLinks).catch((err) => {
      console.error('Falha ao carregar links da biblioteca:', err);
    });
  }, []);

  const allDocuments = DEFAULT_DOCUMENTS;

  const filteredDocs = allDocuments.filter(d =>
    normalizeSearch(d.titulo).includes(q) ||
    normalizeSearch(d.descricao || '').includes(q) ||
    normalizeSearch(d.categoria || '').includes(q) ||
    (d.tags && d.tags.some(t => normalizeSearch(t).includes(q)))
  ).slice(0, 6);

  const filteredLinks = links.filter(l =>
    normalizeSearch(l.titulo).includes(q) || normalizeSearch((l.descricao || '')).includes(q) || normalizeSearch((l.categoria || '')).includes(q)
  ).slice(0, 6);

  const total = filteredProtocols.length + filteredCondutas.length + filteredDocs.length + filteredLinks.length;

  return (
    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
      <p className="text-xs text-muted-foreground mb-3">{total} resultado{total !== 1 ? 's' : ''} para "<strong>{q}</strong>"</p>

      {/* Protocolos */}
      {filteredProtocols.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Protocolos</p>
          <div className="space-y-2">
            {filteredProtocols.map(p => {
              const badge = TAG_BADGE[p.tag] || { bg: 'bg-gray-100', text: 'text-gray-700' };
              return (
                <button key={p.id} onClick={() => { setSearch(''); navigate(`/biblioteca?tab=protocolos&id=${p.id}`); }}
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

      {/* Condutas */}
      {filteredCondutas.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Condutas</p>
          <div className="space-y-2">
            {filteredCondutas.map(({ topico, categoria, subcategoria }) => (
              <button key={topico.id} onClick={() => { setSearch(''); navigate(`/biblioteca?tab=condutas&topico=${encodeURIComponent(topico.id || topico.label)}`); }}
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

      {/* Documentos Google Drive */}
      {filteredDocs.length > 0 && (
        <div className="mb-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Documentos do Google Drive</p>
          <div className="space-y-2">
            {filteredDocs.map(d => (
              <button key={d.id} onClick={() => { setSearch(''); navigate(`/biblioteca?tab=documentos&doc=${d.id}`); }}
                className="w-full text-left bg-white border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-md transition-all group">
                <span className="text-xl">{d.tipo === 'sheet' ? '📊' : d.tipo === 'folder' ? '📁' : d.tipo === 'slide' ? '📽️' : '📄'}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary">{d.titulo}</p>
                  <p className="text-xs text-muted-foreground">{d.categoria} · {d.fonte || 'Google Drive'}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 flex-shrink-0">Visualizador</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
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
  { id: 'documentos', label: 'Documentos',  icon: FileText },
  { id: 'links',      label: 'Links',       icon: LinkIcon },
  { id: 'anotacoes',  label: 'Anotações',   icon: StickyNote },
];

export default function Biblioteca() {
  const [search, setSearch] = useState('');
  const [tabParams, setTabParams] = useSearchParams();
  const VALID_TABS = ['protocolos', 'condutas', 'documentos', 'links', 'anotacoes'];
  const activeTab = VALID_TABS.includes(tabParams.get('tab')) ? tabParams.get('tab') : 'protocolos';
  const setActiveTab = tab => { setSearch(''); setTabParams({tab}); };

  const q = normalizeSearch(search).trim();
  const isSearching = q.length > 1;

  return (
    <div className="clinical-page max-w-6xl mx-auto space-y-6">

      {/* ── HEADER ── */}
      <PageHeader
        kind="library"
        eyebrow="Espaço de Evidências Clínicas"
        title="Biblioteca Pediátrica"
        description="Protocolos assistenciais, condutas estruturadas, documentos integrados ao Google Drive, diretrizes e links úteis organizados para consulta rápida."
      />

      {/* ── SEARCH ── */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          aria-label="Buscar na biblioteca"
          placeholder="Buscar protocolos, condutas por doença, documentos ou links..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm shadow-2xs focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/15 transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} aria-label="Limpar busca" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── GLOBAL SEARCH RESULTS ── */}
      {isSearching && <GlobalSearchResults q={q} setSearch={setSearch} />}

      {/* ── TABS ── */}
      <div className="library-navigation">
        {TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button key={tab.id} aria-pressed={!isSearching && activeTab === tab.id} onClick={() => setActiveTab(tab.id)}
              className="library-tab">
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {!isSearching && activeTab === 'condutas'   && <CondutasTab externalSearch={search} />}
      {!isSearching && activeTab === 'protocolos' && <ProtocolosPage />}
      {!isSearching && activeTab === 'documentos' && <DocumentosTab externalSearch={search} />}
      {!isSearching && activeTab === 'links'      && <LinksTab />}
      {!isSearching && activeTab === 'anotacoes'  && <AnotacoesTab />}
    </div>
  );
}