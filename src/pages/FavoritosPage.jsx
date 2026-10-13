import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Search,
  X,
  LayoutGrid,
  List as ListIcon,
  BookOpen,
  Link as LinkIcon,
  StickyNote,
  FlaskConical,
  Pill,
  Calculator,
  Plus,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Share2,
  FileText,
} from 'lucide-react';
import { toast } from 'sonner';
import { usePageFavorites, ALL_PAGES } from '@/hooks/usePageFavorites.jsx';
import { useDosagemFavorites } from '@/hooks/useDosagemFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';
import { services } from '@/api/services';
import { useAuth } from '@/lib/AuthContext';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import { cleanClinicalText } from '@/lib/clinicalTextCleaner';
import { detectGoogleDriveType } from '@/lib/driveDocumentsData';

// Protocol metadata (matching Biblioteca)
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
  { id: 'itu', title: 'Infecção do Trato Urinário', icon: '💧', tag: 'Infectologia' },
];

const NOTE_COLORS = {
  yellow: { bg: 'bg-amber-50/90', border: 'border-amber-200', text: 'text-amber-950', badge: 'bg-amber-100 text-amber-800' },
  blue: { bg: 'bg-sky-50/90', border: 'border-sky-200', text: 'text-sky-950', badge: 'bg-sky-100 text-sky-800' },
  green: { bg: 'bg-emerald-50/90', border: 'border-emerald-200', text: 'text-emerald-950', badge: 'bg-emerald-100 text-emerald-800' },
  purple: { bg: 'bg-purple-50/90', border: 'border-purple-200', text: 'text-purple-950', badge: 'bg-purple-100 text-purple-800' },
};

function isDocItem(item) {
  const cat = (item.categoria || '').toLowerCase();
  const url = (item.url || '').toLowerCase();
  return (
    cat === 'documentos' ||
    cat === 'diretrizes' ||
    cat === 'protocolos' ||
    cat === 'tabelas' ||
    cat === 'rotinas' ||
    cat === 'impressos' ||
    cat === 'artigos' ||
    cat === 'pastas' ||
    url.includes('drive.google.com') ||
    url.includes('docs.google.com') ||
    url.endsWith('.pdf')
  );
}

export default function FavoritosPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Favorite hooks for platform content
  const { favPages = [], favorites = [], toggleFavorite: togglePage } = usePageFavorites() || {};
  const { favorites: favDrugIds = [], toggleFavorite: toggleDrug } = useDosagemFavorites() || {};
  
  const allDrugs = useMemo(() => getAllDosagens(), []);
  const favDrugs = useMemo(
    () => favDrugIds.map((id) => allDrugs.find((d) => d.id === id)).filter(Boolean),
    [favDrugIds, allDrugs]
  );

  // Search & Filter State
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Todos'); // 'Todos' | 'Medicamentos' | 'Ferramentas' | 'Protocolos' | 'Condutas' | 'Anotações' | 'Links' | 'Documentos'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('recent'); // 'recent' | 'az'
  const [copiedId, setCopiedId] = useState(null);

  // Modal / Creator State
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalTab, setModalTab] = useState('note'); // 'note' | 'link' | 'doc'

  // New Note Form
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteColor, setNewNoteColor] = useState('yellow');

  // New Link Form
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [newLinkCategory, setNewLinkCategory] = useState('');

  // New Document Form
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocUrl, setNewDocUrl] = useState('');
  const [newDocCategory, setNewDocCategory] = useState('Diretrizes');

  // Persistent Notes & Links from Server DB
  const [localNotes, setLocalNotes] = useState([]);
  const [localRawLinks, setLocalRawLinks] = useState([]);

  // Load notes & links directly from server DB
  useEffect(() => {
    if (user?.id) {
      services.notes.list('-created_date')
        .then((remoteNotes) => {
          if (Array.isArray(remoteNotes)) setLocalNotes(remoteNotes);
        })
        .catch((err) => {
          console.error('Falha ao carregar anotações do usuário:', err);
        });

      services.userLinks.list('-created_date')
        .then((remoteLinks) => {
          if (Array.isArray(remoteLinks)) setLocalRawLinks(remoteLinks);
        })
        .catch((err) => {
          console.error('Falha ao carregar links favoritos do usuário:', err);
        });
    } else {
      setLocalNotes([]);
      setLocalRawLinks([]);
    }
  }, [user?.id]);

  // Separate web links from documents
  const localLinks = useMemo(() => localRawLinks.filter((l) => !isDocItem(l)), [localRawLinks]);
  const localDocs = useMemo(() => localRawLinks.filter((l) => isDocItem(l)), [localRawLinks]);

  const q = normalizeSearch(search);

  // Protocols favorited
  const favProtocols = useMemo(() => {
    return favorites
      .filter((k) => k.startsWith('protocolo-'))
      .map((k) => PROTOCOLS.find((p) => `protocolo-${p.id}` === k))
      .filter(Boolean)
      .filter((p) => !q || normalizeSearch(p.title).includes(q) || normalizeSearch(p.tag).includes(q));
  }, [favorites, q]);

  // Condutas favorited
  const allTopicos = useMemo(() => {
    const list = [];
    CONDUTAS_CATEGORIAS.forEach((cat) =>
      cat.subcategorias.forEach((sub) =>
        sub.topicos.forEach((top) => list.push({ topico: top, cat, sub }))
      )
    );
    return list;
  }, []);

  const favCondutas = useMemo(() => {
    return favorites
      .filter((k) => k.startsWith('conduta-'))
      .map((k) => {
        const id = k.replace('conduta-', '');
        return allTopicos.find(({ topico }) => topico.id === id || topico.label === id);
      })
      .filter(Boolean)
      .filter(({ topico, cat }) => !q || normalizeSearch(topico.label).includes(q) || normalizeSearch(cat.label).includes(q));
  }, [favorites, allTopicos, q]);

  // Filtered pages / tools
  const filteredPages = useMemo(() => {
    return favPages.filter(
      (p) => !q || normalizeSearch(p.label).includes(q) || normalizeSearch(p.desc || '').includes(q)
    );
  }, [favPages, q]);

  // Filtered drugs
  const filteredDrugs = useMemo(() => {
    return favDrugs.filter(
      (d) =>
        !q ||
        normalizeSearch(d.name).includes(q) ||
        normalizeSearch(d.catLabel || '').includes(q) ||
        (d.marcas && normalizeSearch(d.marcas).includes(q))
    );
  }, [favDrugs, q]);

  // Filtered notes
  const filteredNotes = useMemo(() => {
    return localNotes.filter(
      (n) => !q || normalizeSearch(n.titulo).includes(q) || normalizeSearch(n.conteudo || '').includes(q)
    );
  }, [localNotes, q]);

  // Filtered links
  const filteredLinks = useMemo(() => {
    return localLinks.filter(
      (l) =>
        !q ||
        normalizeSearch(l.titulo).includes(q) ||
        normalizeSearch(l.url).includes(q) ||
        normalizeSearch(l.categoria || '').includes(q)
    );
  }, [localLinks, q]);

  // Filtered docs
  const filteredDocs = useMemo(() => {
    return localDocs.filter(
      (d) =>
        !q ||
        normalizeSearch(d.titulo).includes(q) ||
        normalizeSearch(d.url).includes(q) ||
        normalizeSearch(d.categoria || '').includes(q)
    );
  }, [localDocs, q]);

  // Counts
  const totalItemsCount =
    favPages.length +
    favDrugs.length +
    favProtocols.length +
    favCondutas.length +
    localNotes.length +
    localLinks.length +
    localDocs.length;

  const isTotalEmpty = totalItemsCount === 0;

  // Add Note handler
  const handleSaveNote = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Faça login para salvar anotações no servidor.');
      return;
    }
    const cleanTitle = cleanClinicalText(newNoteTitle).trim();
    const cleanContent = cleanClinicalText(newNoteContent).trim();

    if (!cleanTitle && !cleanContent) {
      toast.error('Informe pelo menos um título ou conteúdo para a anotação.');
      return;
    }

    try {
      const created = await services.notes.create({
        titulo: cleanTitle || 'Anotação sem título',
        conteudo: cleanContent,
        cor: newNoteColor,
      });
      setLocalNotes((prev) => [created, ...prev]);
      setNewNoteTitle('');
      setNewNoteContent('');
      setShowAddModal(false);
      toast.success('Anotação salva no banco de dados do servidor!');
    } catch (err) {
      toast.error(err.message || 'Erro ao salvar anotação.');
    }
  };

  // Add Link handler
  const handleSaveLink = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Faça login para salvar links no servidor.');
      return;
    }
    const cleanTitle = cleanClinicalText(newLinkTitle).trim();
    if (!cleanTitle || !newLinkUrl.trim()) {
      toast.error('Informe o título e a URL do link.');
      return;
    }

    let url = newLinkUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    try {
      const created = await services.userLinks.create({
        titulo: cleanTitle,
        url,
        categoria: newLinkCategory.trim() || 'Geral',
        icone: '🔗',
      });
      setLocalRawLinks((prev) => [created, ...prev]);
      setNewLinkTitle('');
      setNewLinkUrl('');
      setNewLinkCategory('');
      setShowAddModal(false);
      toast.success('Link salvo no banco de dados do servidor!');
    } catch (err) {
      toast.error(err.message || 'Erro ao salvar link.');
    }
  };

  // Add Doc handler
  const handleSaveDoc = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Faça login para salvar documentos no servidor.');
      return;
    }
    const cleanTitle = cleanClinicalText(newDocTitle).trim();
    if (!cleanTitle || !newDocUrl.trim()) {
      toast.error('Informe o título e a URL do documento.');
      return;
    }

    let url = newDocUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    try {
      const created = await services.userLinks.create({
        titulo: cleanTitle,
        url,
        categoria: newDocCategory.trim() || 'Diretrizes',
        icone: '📄',
      });
      setLocalRawLinks((prev) => [created, ...prev]);
      setNewDocTitle('');
      setNewDocUrl('');
      setNewDocCategory('Diretrizes');
      setShowAddModal(false);
      toast.success('Documento salvo no banco de dados do servidor!');
    } catch (err) {
      toast.error(err.message || 'Erro ao salvar documento.');
    }
  };

  // Delete Note
  const handleDeleteNote = async (id) => {
    try {
      await services.notes.delete(id);
      setLocalNotes((prev) => prev.filter((n) => n.id !== id));
      toast.success('Anotação removida do servidor.');
    } catch (err) {
      toast.error(err.message || 'Erro ao remover anotação.');
    }
  };

  // Delete Link / Doc
  const handleDeleteLinkOrDoc = async (id) => {
    try {
      await services.userLinks.delete(id);
      setLocalRawLinks((prev) => prev.filter((l) => l.id !== id));
      toast.success('Item removido do servidor.');
    } catch (err) {
      toast.error(err.message || 'Erro ao remover item.');
    }
  };

  // Copy Note / Text helper
  const handleCopyText = (text, id, message = 'Copiado para a área de transferência!') => {
    const clean = cleanClinicalText(text);
    navigator.clipboard.writeText(clean);
    setCopiedId(id);
    toast.success(message);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Copy full summary of favorites (for handover / passoff)
  const handleCopySummary = () => {
    let summary = `📋 *MEUS FAVORITOS PEDBOX*\n\n`;
    if (favDrugs.length > 0) {
      summary += `💊 *Medicamentos (${favDrugs.length}):*\n`;
      favDrugs.forEach((d) => (summary += `• ${d.name} (${d.catLabel || 'Dose'})\n`));
      summary += `\n`;
    }
    if (favPages.length > 0) {
      summary += `🧮 *Ferramentas & Calculadoras (${favPages.length}):*\n`;
      favPages.forEach((p) => (summary += `• ${p.label}\n`));
      summary += `\n`;
    }
    if (localNotes.length > 0) {
      summary += `📝 *Anotações (${localNotes.length}):*\n`;
      localNotes.forEach((n) => (summary += `• ${cleanClinicalText(n.titulo)}: ${cleanClinicalText(n.conteudo || '')}\n`));
      summary += `\n`;
    }
    if (localLinks.length > 0) {
      summary += `🔗 *Links Salvos (${localLinks.length}):*\n`;
      localLinks.forEach((l) => (summary += `• ${l.titulo}: ${l.url}\n`));
      summary += `\n`;
    }
    if (localDocs.length > 0) {
      summary += `📄 *Documentos Salvos (${localDocs.length}):*\n`;
      localDocs.forEach((d) => (summary += `• ${d.titulo}: ${d.url}\n`));
      summary += `\n`;
    }
    handleCopyText(summary, 'all_summary', 'Resumo de favoritos copiado com sucesso!');
  };

  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).format(d);
    } catch {
      return '';
    }
  };

  // Recommended additions for user
  const suggestions = useMemo(() => {
    return ALL_PAGES.filter((p) => !favPages.some((f) => f.path === p.path)).slice(0, 6);
  }, [favPages]);

  return (
    <div className="clinical-page favoritos-page max-w-6xl mx-auto space-y-7 pb-12">
      {/* HERO SECTION */}
      <section className="relative rounded-3xl bg-gradient-to-r from-[#EBF4FA] via-[#F4F9FD] to-white border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Espaço Clínico & Favoritos</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
              Seus Atalhos & Notas de Plantão
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tudo o que você mais utiliza organizado em um só local. Acesse doses, calculadoras clínicas, condutas, links externos, documentos e anotações instantaneamente.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                setModalTab('note');
                setShowAddModal(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-brand-teal" />
              <span>Nova Anotação ou Link</span>
            </button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 text-xs font-bold shadow-2xs transition-all cursor-pointer"
              title="Copiar lista de favoritos para passagem de plantão"
            >
              {copiedId === 'all_summary' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4 text-brand-teal" />
              )}
              <span>Copiar Lista</span>
            </button>

            <Link
              to="/ferramentas"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100/80 border border-teal-200 text-brand-teal text-xs font-bold transition-all"
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Explorar Ferramentas</span>
            </Link>
          </div>
        </div>
      </section>

      {/* KPI METRIC CARDS / CATEGORY JUMP */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => setActiveTab('Todos')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeTab === 'Todos'
              ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-teal/20'
              : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`p-2 rounded-xl ${activeTab === 'Todos' ? 'bg-white/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
              <Star className="w-4 h-4 fill-current" />
            </span>
            <span className={`text-xl sm:text-2xl font-display font-extrabold ${activeTab === 'Todos' ? 'text-white' : 'text-brand-navy'}`}>
              {totalItemsCount}
            </span>
          </div>
          <p className={`text-xs font-bold mt-2 ${activeTab === 'Todos' ? 'text-slate-200' : 'text-slate-700'}`}>
            Total Salvos
          </p>
          <p className={`text-[10px] ${activeTab === 'Todos' ? 'text-slate-300' : 'text-slate-400'}`}>
            Todos os itens reunidos
          </p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('Medicamentos')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeTab === 'Medicamentos'
              ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-teal/20'
              : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`p-2 rounded-xl ${activeTab === 'Medicamentos' ? 'bg-white/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
              <Pill className="w-4 h-4" />
            </span>
            <span className={`text-xl sm:text-2xl font-display font-extrabold ${activeTab === 'Medicamentos' ? 'text-white' : 'text-brand-navy'}`}>
              {favDrugs.length}
            </span>
          </div>
          <p className={`text-xs font-bold mt-2 ${activeTab === 'Medicamentos' ? 'text-slate-200' : 'text-slate-700'}`}>
            Medicamentos
          </p>
          <p className={`text-[10px] ${activeTab === 'Medicamentos' ? 'text-slate-300' : 'text-slate-400'}`}>
            Dosagens rápidas
          </p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('Ferramentas')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeTab === 'Ferramentas'
              ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-teal/20'
              : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`p-2 rounded-xl ${activeTab === 'Ferramentas' ? 'bg-white/10 text-brand-teal' : 'bg-teal-50 text-brand-teal'}`}>
              <Calculator className="w-4 h-4" />
            </span>
            <span className={`text-xl sm:text-2xl font-display font-extrabold ${activeTab === 'Ferramentas' ? 'text-white' : 'text-brand-navy'}`}>
              {favPages.length}
            </span>
          </div>
          <p className={`text-xs font-bold mt-2 ${activeTab === 'Ferramentas' ? 'text-slate-200' : 'text-slate-700'}`}>
            Ferramentas
          </p>
          <p className={`text-[10px] ${activeTab === 'Ferramentas' ? 'text-slate-300' : 'text-slate-400'}`}>
            Calculadoras & Scores
          </p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('Anotações')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeTab === 'Anotações'
              ? 'bg-brand-navy text-white border-brand-navy shadow-md ring-2 ring-brand-teal/20'
              : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`p-2 rounded-xl ${activeTab === 'Anotações' ? 'bg-white/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
              <StickyNote className="w-4 h-4" />
            </span>
            <span className={`text-xl sm:text-2xl font-display font-extrabold ${activeTab === 'Anotações' ? 'text-white' : 'text-brand-navy'}`}>
              {localNotes.length + localLinks.length + localDocs.length}
            </span>
          </div>
          <p className={`text-xs font-bold mt-2 ${activeTab === 'Anotações' ? 'text-slate-200' : 'text-slate-700'}`}>
            Notas & Links
          </p>
          <p className={`text-[10px] ${activeTab === 'Anotações' ? 'text-slate-300' : 'text-slate-400'}`}>
            Anotações, Links & Docs
          </p>
        </button>
      </section>

      {/* CONTROLS BAR: SEARCH, TABS, VIEW MODE */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filtrar favoritos por nome, categoria, especialidade..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:bg-white transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort & View Mode controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => setSortBy('recent')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  sortBy === 'recent' ? 'bg-white text-brand-navy shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                Recentes
              </button>
              <button
                type="button"
                onClick={() => setSortBy('az')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  sortBy === 'az' ? 'bg-white text-brand-navy shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                A-Z
              </button>
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-slate-600">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-brand-navy shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Visualização em Grade"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list' ? 'bg-white text-brand-navy shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Visualização em Lista"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Pills with item counts */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin text-xs">
          {[
            { id: 'Todos', label: 'Todos', count: totalItemsCount },
            { id: 'Medicamentos', label: 'Medicamentos', count: favDrugs.length },
            { id: 'Ferramentas', label: 'Ferramentas', count: favPages.length },
            { id: 'Protocolos', label: 'Protocolos', count: favProtocols.length },
            { id: 'Condutas', label: 'Condutas', count: favCondutas.length },
            { id: 'Anotações', label: 'Anotações', count: localNotes.length },
            { id: 'Links', label: 'Links Salvos', count: localLinks.length },
            { id: 'Documentos', label: 'Documentos', count: localDocs.length },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200/70 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT LISTING OR EMPTY STATE */}
      {isTotalEmpty ? (
        <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 mx-auto flex items-center justify-center">
            <Star className="w-8 h-8 fill-current" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Nenhum item salvo nos favoritos ainda
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Clique no ícone de estrela nas calculadoras, dosagens e condutas, ou crie suas próprias anotações e links clínicos para fixá-los aqui.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setModalTab('note');
                setShowAddModal(true);
              }}
              className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Criar primeira anotação
            </button>
            <Link
              to="/guia-drogas"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
            >
              Ver Medicamentos
            </Link>
          </div>
        </section>
      ) : (
        <div className="space-y-6">
          {/* SECTION 1: MEDICAMENTOS */}
          {(activeTab === 'Todos' || activeTab === 'Medicamentos') && filteredDrugs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Pill className="w-4 h-4 text-emerald-600" />
                <span>Medicamentos & Doses Favoritas ({filteredDrugs.length})</span>
              </h3>

              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
                    : 'flex flex-col gap-2'
                }
              >
                {filteredDrugs.map((drug) => (
                  <div
                    key={drug.id}
                    className="bg-white border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                  >
                    <div
                      onClick={() => navigate(`/guia-drogas?id=${drug.id}`)}
                      className="min-w-0 flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Pill className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-brand-navy group-hover:text-emerald-700 truncate">
                          {drug.name}
                        </h4>
                        <span className="inline-block mt-0.5 text-[9px] font-bold text-slate-500">
                          {drug.catLabel || 'Dose Pediátrica'}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleDrug(drug.id)}
                      className="p-1.5 text-amber-500 hover:text-slate-400 transition-colors shrink-0 cursor-pointer"
                      title="Remover dos favoritos"
                    >
                      <Star className="w-4 h-4 fill-amber-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: FERRAMENTAS & CALCULADORAS */}
          {(activeTab === 'Todos' || activeTab === 'Ferramentas') && filteredPages.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-brand-teal" />
                <span>Calculadoras & Ferramentas ({filteredPages.length})</span>
              </h3>

              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
                    : 'flex flex-col gap-2'
                }
              >
                {filteredPages.map((page) => (
                  <div
                    key={page.path}
                    className="bg-white border border-slate-200/90 hover:border-brand-teal rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                  >
                    <div
                      onClick={() => navigate(page.path)}
                      className="min-w-0 flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {page.icon || '🧮'}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-teal truncate">
                          {page.label}
                        </h4>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {page.desc || 'Calculadora clínica'}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => togglePage(page.path)}
                      className="p-1.5 text-amber-500 hover:text-slate-400 transition-colors shrink-0 cursor-pointer"
                      title="Remover dos favoritos"
                    >
                      <Star className="w-4 h-4 fill-amber-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: PROTOCOLOS */}
          {(activeTab === 'Todos' || activeTab === 'Protocolos') && favProtocols.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-rose-500" />
                <span>Protocolos de Emergência ({favProtocols.length})</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {favProtocols.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border border-slate-200/90 hover:border-rose-300 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                  >
                    <div
                      onClick={() => navigate(`/protocolos?id=${p.id}`)}
                      className="min-w-0 flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <span className="text-xl shrink-0">{p.icon}</span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-brand-navy group-hover:text-rose-600 truncate">
                          {p.title}
                        </h4>
                        <span className="inline-block mt-0.5 text-[9px] font-bold text-slate-500">
                          {p.tag}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => togglePage(`protocolo-${p.id}`)}
                      className="p-1.5 text-amber-500 hover:text-slate-400 transition-colors shrink-0 cursor-pointer"
                    >
                      <Star className="w-4 h-4 fill-amber-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 4: CONDUTAS */}
          {(activeTab === 'Todos' || activeTab === 'Condutas') && favCondutas.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Condutas Rápidas ({favCondutas.length})</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {favCondutas.map(({ topico, cat }) => (
                  <div
                    key={topico.id || topico.label}
                    className="bg-white border border-slate-200/90 hover:border-indigo-300 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                  >
                    <div
                      onClick={() =>
                        navigate(
                          `/biblioteca?tab=condutas&topico=${encodeURIComponent(topico.id || topico.label)}`
                        )
                      }
                      className="min-w-0 flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-brand-navy group-hover:text-indigo-700 truncate">
                          {topico.label}
                        </h4>
                        <span className="inline-block mt-0.5 text-[9px] font-bold text-slate-500">
                          {cat.label}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => togglePage(`conduta-${topico.id || topico.label}`)}
                      className="p-1.5 text-amber-500 hover:text-slate-400 transition-colors shrink-0 cursor-pointer"
                    >
                      <Star className="w-4 h-4 fill-amber-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 5: ANOTAÇÕES */}
          {(activeTab === 'Todos' || activeTab === 'Anotações') && filteredNotes.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <StickyNote className="w-4 h-4 text-amber-500" />
                  <span>Anotações & Lembretes Salvos ({filteredNotes.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('note');
                    setShowAddModal(true);
                  }}
                  className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Nova nota
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredNotes.map((n) => {
                  const colorTheme = NOTE_COLORS[n.cor] || NOTE_COLORS.yellow;
                  const cleanTitle = cleanClinicalText(n.titulo);
                  const cleanContent = cleanClinicalText(n.conteudo || '');
                  const fullCopyText = cleanTitle ? `${cleanTitle}\n\n${cleanContent}`.trim() : cleanContent;

                  return (
                    <div
                      key={n.id}
                      className={`${colorTheme.bg} ${colorTheme.border} border rounded-2xl p-4 shadow-2xs flex flex-col justify-between space-y-3 transition-all`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900 leading-snug break-words [word-break:break-word]">
                            {cleanTitle}
                          </h4>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleDeleteNote(n.id)}
                              className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                              title="Excluir anotação"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {cleanContent && (
                          <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed break-words [word-break:break-word] overflow-hidden max-h-48 overflow-y-auto pr-1">
                            {cleanContent}
                          </p>
                        )}
                      </div>

                      {/* COPY BUTTON & FOOTER */}
                      <div className="pt-2 border-t border-slate-200/60 space-y-2">
                        <button
                          type="button"
                          onClick={() => handleCopyText(fullCopyText, n.id, 'Texto da anotação copiado!')}
                          className={`w-full py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs ${
                            copiedId === n.id
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {copiedId === n.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>Copiar texto da anotação</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>{formatDate(n.created_date)}</span>
                          <span className="text-emerald-700 font-semibold">✓ Salvo</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 6: LINKS SALVOS */}
          {(activeTab === 'Todos' || activeTab === 'Links') && filteredLinks.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-brand-teal" />
                  <span>Links & Diretrizes Salvas ({filteredLinks.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('link');
                    setShowAddModal(true);
                  }}
                  className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Novo link
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredLinks.map((link) => (
                  <div
                    key={link.id}
                    className="bg-white border border-slate-200/90 hover:border-brand-teal rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="min-w-0 flex-1 flex items-start gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-navy truncate">
                            {cleanClinicalText(link.titulo)}
                          </h4>
                          <span className="text-[10px] text-emerald-700 font-semibold shrink-0">✓ Salvo</span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {getDomain(link.url)}
                        </p>
                        {link.categoria && (
                          <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            {link.categoria}
                          </span>
                        )}
                      </div>
                    </a>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopyText(link.url, link.id, 'Link copiado!')}
                        className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                        title="Copiar URL"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteLinkOrDoc(link.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                        title="Excluir link"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 7: DOCUMENTOS SALVOS */}
          {(activeTab === 'Todos' || activeTab === 'Documentos') && filteredDocs.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span>Documentos & Manuais Salvos ({filteredDocs.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('doc');
                    setShowAddModal(true);
                  }}
                  className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Novo documento
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredDocs.map((doc) => {
                  const driveMeta = detectGoogleDriveType(doc.url);
                  return (
                    <div
                      key={doc.id}
                      className="bg-white border border-slate-200/90 hover:border-indigo-300 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                    >
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="min-w-0 flex-1 flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-sm">
                          {driveMeta.icon || '📄'}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-navy truncate">
                              {cleanClinicalText(doc.titulo)}
                            </h4>
                            <span className="text-[10px] text-emerald-700 font-semibold shrink-0">✓ Salvo</span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {driveMeta.label || getDomain(doc.url)}
                          </p>
                          {doc.categoria && (
                            <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                              {doc.categoria}
                            </span>
                          )}
                        </div>
                      </a>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopyText(doc.url, doc.id, 'Link do documento copiado!')}
                          className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                          title="Copiar URL"
                        >
                          {copiedId === doc.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteLinkOrDoc(doc.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Excluir documento"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* NO RESULTS FOR SEARCH FILTER */}
          {filteredDrugs.length === 0 &&
            filteredPages.length === 0 &&
            favProtocols.length === 0 &&
            favCondutas.length === 0 &&
            filteredNotes.length === 0 &&
            filteredLinks.length === 0 &&
            filteredDocs.length === 0 && (
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 text-center space-y-2">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-bold text-slate-700">
                  Nenhum favorito encontrado para "{search}" nesta categoria.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setActiveTab('Todos');
                  }}
                  className="text-xs font-bold text-brand-teal hover:underline pt-1 inline-block cursor-pointer"
                >
                  Limpar busca e filtros
                </button>
              </div>
            )}
        </div>
      )}

      {/* RECOMMENDED / QUICK ADD SECTION */}
      {suggestions.length > 0 && (
        <section className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Recomendados para o seu Plantão</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Toque na estrela para adicionar diretamente aos seus favoritos.
              </p>
            </div>
            <Link
              to="/ferramentas"
              className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
            >
              Ver todas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {suggestions.map((p) => (
              <div
                key={p.path}
                className="bg-white border border-slate-200/80 hover:border-brand-teal/60 rounded-2xl p-3.5 shadow-2xs flex items-center justify-between gap-3 group transition-all"
              >
                <div
                  onClick={() => navigate(p.path)}
                  className="min-w-0 flex items-center gap-2.5 cursor-pointer flex-1"
                >
                  <span className="text-xl shrink-0">{p.icon || '🧮'}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 group-hover:text-brand-navy truncate">
                      {p.label}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">{p.desc || 'Ferramenta clínica'}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    togglePage(p.path);
                    toast.success(`${p.label} adicionado aos favoritos!`);
                  }}
                  className="p-1.5 text-slate-300 hover:text-amber-500 transition-colors shrink-0 cursor-pointer"
                  title="Adicionar aos favoritos"
                >
                  <Star className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MODAL: ADD NOTE, LINK OR DOC */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setModalTab('note')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    modalTab === 'note'
                      ? 'bg-white text-brand-navy shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <StickyNote className="w-3.5 h-3.5 text-amber-500" />
                  <span>Anotação</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('link')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    modalTab === 'link'
                      ? 'bg-white text-brand-navy shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('doc')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    modalTab === 'doc'
                      ? 'bg-white text-brand-navy shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Documento</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalTab === 'note' && (
              <form onSubmit={handleSaveNote} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título da Anotação
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Condutas Plantão / Ramais Emergência"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(cleanClinicalText(e.target.value))}
                    onPaste={(e) => {
                      const pasted = e.clipboardData.getData('text/plain') || e.clipboardData.getData('text/html');
                      if (pasted) {
                        e.preventDefault();
                        const cleaned = cleanClinicalText(pasted);
                        setNewNoteTitle((prev) => prev + cleaned);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Conteúdo
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Digite detalhes, telefones, doses ou condutas (você pode colar direto do Google Docs sem tags)..."
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(cleanClinicalText(e.target.value))}
                    onPaste={(e) => {
                      const pasted = e.clipboardData.getData('text/plain') || e.clipboardData.getData('text/html');
                      if (pasted) {
                        e.preventDefault();
                        const cleaned = cleanClinicalText(pasted);
                        setNewNoteContent((prev) => prev + cleaned);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">Cor:</span>
                    {Object.keys(NOTE_COLORS).map((colorKey) => (
                      <button
                        key={colorKey}
                        type="button"
                        onClick={() => setNewNoteColor(colorKey)}
                        className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer ${
                          colorKey === 'yellow'
                            ? 'bg-amber-300'
                            : colorKey === 'blue'
                            ? 'bg-sky-300'
                            : colorKey === 'green'
                            ? 'bg-emerald-300'
                            : 'bg-purple-300'
                        } ${
                          newNoteColor === colorKey
                            ? 'scale-125 border-slate-800'
                            : 'border-white hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Salvar nos Favoritos
                  </button>
                </div>
              </form>
            )}

            {modalTab === 'link' && (
              <form onSubmit={handleSaveLink} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título do Link
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Diretriz Bronquiolite SBP 2026"
                    value={newLinkTitle}
                    onChange={(e) => setNewLinkTitle(cleanClinicalText(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Categoria ou Especialidade
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Pneumologia / Hospital / Calculadora Externa"
                    value={newLinkCategory}
                    onChange={(e) => setNewLinkCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    URL / Endereço Web
                  </label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={newLinkUrl}
                    onChange={(e) => setNewLinkUrl(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Salvar Link
                  </button>
                </div>
              </form>
            )}

            {modalTab === 'doc' && (
              <form onSubmit={handleSaveDoc} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título do Documento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Manual de Condutas Pediátricas 2026"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(cleanClinicalText(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Categoria do Documento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Diretrizes / Protocolos / Artigos / Tabelas"
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Link do Arquivo (Google Drive, Docs, Sheets ou PDF)
                  </label>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/... ou https://..."
                    value={newDocUrl}
                    onChange={(e) => setNewDocUrl(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white"
                  />
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Salvar Documento
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
