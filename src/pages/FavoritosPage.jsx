import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  Link as LinkIcon,
  StickyNote,
  FileText,
  Plus,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Share2,
  FolderOpen,
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/lib/AuthContext';
import { services } from '@/api/services';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import {
  getGoogleDriveEmbedUrl,
  detectGoogleDriveType,
} from '@/lib/driveDocumentsData';
import { cleanClinicalText } from '@/lib/clinicalTextCleaner';

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

  // Search & Filter State
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Todos'); // 'Todos' | 'Anotações' | 'Links' | 'Documentos'
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
  const [newDocDesc, setNewDocDesc] = useState('');

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
          console.error('Falha ao carregar anotações:', err);
        });

      services.userLinks.list('-created_date')
        .then((remoteLinks) => {
          if (Array.isArray(remoteLinks)) setLocalRawLinks(remoteLinks);
        })
        .catch((err) => {
          console.error('Falha ao carregar links e documentos:', err);
        });
    } else {
      setLocalNotes([]);
      setLocalRawLinks([]);
    }
  }, [user?.id]);

  const q = normalizeSearch(search);

  // Separate links and documents
  const allLinks = useMemo(() => localRawLinks.filter((l) => !isDocItem(l)), [localRawLinks]);
  const allDocs = useMemo(() => localRawLinks.filter((l) => isDocItem(l)), [localRawLinks]);

  // Filtered lists
  const filteredNotes = useMemo(() => {
    return localNotes.filter(
      (n) =>
        !q ||
        normalizeSearch(cleanClinicalText(n.titulo)).includes(q) ||
        normalizeSearch(cleanClinicalText(n.conteudo || '')).includes(q)
    );
  }, [localNotes, q]);

  const filteredLinks = useMemo(() => {
    return allLinks.filter(
      (l) =>
        !q ||
        normalizeSearch(cleanClinicalText(l.titulo)).includes(q) ||
        normalizeSearch(l.url).includes(q) ||
        normalizeSearch(l.categoria || '').includes(q)
    );
  }, [allLinks, q]);

  const filteredDocs = useMemo(() => {
    return allDocs.filter(
      (d) =>
        !q ||
        normalizeSearch(cleanClinicalText(d.titulo)).includes(q) ||
        normalizeSearch(d.url).includes(q) ||
        normalizeSearch(d.descricao || '').includes(q) ||
        normalizeSearch(d.categoria || '').includes(q)
    );
  }, [allDocs, q]);

  // Counts
  const totalItemsCount = localNotes.length + allLinks.length + allDocs.length;
  const isTotalEmpty = totalItemsCount === 0;

  // Intercept paste in modal note textarea to clean Google Docs HTML
  const handlePasteContent = (e) => {
    const htmlData = e.clipboardData?.getData('text/html');
    const plainData = e.clipboardData?.getData('text/plain') || '';
    const rawData = htmlData || plainData;
    if (rawData && (rawData.includes('<') || rawData.includes('&') || rawData.includes('docs-internal-guid'))) {
      e.preventDefault();
      const cleaned = cleanClinicalText(rawData);
      const target = e.target;
      const start = target.selectionStart || 0;
      const end = target.selectionEnd || 0;
      const val = newNoteContent;
      const next = val.substring(0, start) + cleaned + val.substring(end);
      setNewNoteContent(next);
      toast.success('Formatação do Google Docs/HTML limpa automaticamente!');
    }
  };

  // Add Note handler
  const handleSaveNote = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Faça login para salvar anotações no servidor.');
      return;
    }

    const cleanTitle = cleanClinicalText(newNoteTitle) || 'Anotação sem título';
    const cleanContent = cleanClinicalText(newNoteContent);

    if (!cleanTitle.trim() && !cleanContent.trim()) {
      toast.error('Informe pelo menos um título ou conteúdo para a anotação.');
      return;
    }

    try {
      const created = await services.notes.create({
        titulo: cleanTitle,
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
    if (!newLinkTitle.trim() || !newLinkUrl.trim()) {
      toast.error('Informe o título e a URL do link.');
      return;
    }

    let url = newLinkUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    try {
      const created = await services.userLinks.create({
        titulo: cleanClinicalText(newLinkTitle),
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

  // Add Document handler
  const handleSaveDoc = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Faça login para salvar documentos no servidor.');
      return;
    }
    if (!newDocTitle.trim() || !newDocUrl.trim()) {
      toast.error('Informe o título e o link do documento.');
      return;
    }

    let url = newDocUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    const detectedType = detectGoogleDriveType(url);
    const category = newDocCategory.trim() || (detectedType === 'folder' ? 'Pastas' : 'Documentos');

    try {
      const created = await services.userLinks.create({
        titulo: cleanClinicalText(newDocTitle),
        url,
        descricao: newDocDesc.trim() || (detectedType === 'folder' ? 'Pasta do Google Drive vinculada.' : 'Documento clínico vinculado.'),
        categoria: category,
        icone: detectedType === 'folder' ? '📁' : detectedType === 'sheet' ? '📊' : '📄',
      });
      setLocalRawLinks((prev) => [created, ...prev]);
      setNewDocTitle('');
      setNewDocUrl('');
      setNewDocDesc('');
      setNewDocCategory('Diretrizes');
      setShowAddModal(false);
      toast.success('Documento salvo no banco de dados do servidor!');
    } catch (err) {
      toast.error(err.message || 'Erro ao salvar documento.');
    }
  };

  // Delete note
  const handleDeleteNote = async (id) => {
    try {
      await services.notes.delete(id);
      setLocalNotes((prev) => prev.filter((n) => n.id !== id));
      toast.success('Anotação removida do servidor.');
    } catch (err) {
      toast.error(err.message || 'Erro ao remover anotação.');
    }
  };

  // Delete link or doc
  const handleDeleteLinkOrDoc = async (id) => {
    try {
      await services.userLinks.delete(id);
      setLocalRawLinks((prev) => prev.filter((l) => l.id !== id));
      toast.success('Item removido do servidor.');
    } catch (err) {
      toast.error(err.message || 'Erro ao remover item.');
    }
  };

  // Copy note text cleanly
  const handleCopyNoteText = (n) => {
    const textToCopy = cleanClinicalText(n.conteudo || n.titulo || '');
    if (!textToCopy) {
      toast.error('A anotação está vazia.');
      return;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(n.id);
    toast.success('Texto da anotação copiado para a área de transferência!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Copy generic text (e.g. URL)
  const handleCopyText = (text, id, msg = 'Copiado para a área de transferência!') => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success(msg);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export / Share summary
  const handleShareSummary = () => {
    let summary = `📋 *PedBox — Meu Espaço Favorito*\n`;
    if (localNotes.length > 0) {
      summary += `\n*Anotações (${localNotes.length}):*\n`;
      localNotes.forEach((n) => (summary += `• ${cleanClinicalText(n.titulo)}: ${cleanClinicalText(n.conteudo || '')}\n`));
    }
    if (allLinks.length > 0) {
      summary += `\n*Links Salvos (${allLinks.length}):*\n`;
      allLinks.forEach((l) => (summary += `• ${cleanClinicalText(l.titulo)}: ${l.url}\n`));
    }
    if (allDocs.length > 0) {
      summary += `\n*Documentos (${allDocs.length}):*\n`;
      allDocs.forEach((d) => (summary += `• ${cleanClinicalText(d.titulo)}: ${d.url}\n`));
    }

    if (navigator.share) {
      navigator.share({ title: 'PedBox — Meu Espaço Favorito', text: summary }).catch(() => {});
    } else {
      handleCopyText(summary, 'all', 'Resumo do Meu Espaço copiado com sucesso!');
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

  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-brand-teal">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Espaço Clínico Individual</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
              Meu Espaço Favorito
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Suas anotações personalizadas do plantão, links favoritos e documentos clínicos prioritários reunidos em um só painel de alta velocidade.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-teal hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Registro</span>
            </button>
            <button
              type="button"
              onClick={handleShareSummary}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs backdrop-blur-md transition-colors"
              title="Compartilhar ou copiar resumo"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
          </div>
        </div>

        {/* HERO STATS CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
          {/* Total */}
          <button
            type="button"
            onClick={() => setActiveTab('Todos')}
            className={`p-3 sm:p-4 rounded-2xl text-left transition-all ${
              activeTab === 'Todos'
                ? 'bg-white/15 border border-white/30 shadow-inner'
                : 'bg-white/5 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {totalItemsCount}
              </span>
              <span className="p-2 rounded-xl bg-white/10 text-amber-400">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
            <p className="text-xs font-bold mt-2 text-slate-200">
              Total de Itens
            </p>
            <p className="text-[10px] text-slate-300">
              Painel completo
            </p>
          </button>

          {/* Anotações */}
          <button
            type="button"
            onClick={() => setActiveTab('Anotações')}
            className={`p-3 sm:p-4 rounded-2xl text-left transition-all ${
              activeTab === 'Anotações'
                ? 'bg-white/15 border border-white/30 shadow-inner'
                : 'bg-white/5 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {localNotes.length}
              </span>
              <span className="p-2 rounded-xl bg-white/10 text-amber-400">
                <StickyNote className="w-4 h-4" />
              </span>
            </div>
            <p className="text-xs font-bold mt-2 text-slate-200">
              Anotações
            </p>
            <p className="text-[10px] text-slate-300">
              Notas e condutas rápidas
            </p>
          </button>

          {/* Links */}
          <button
            type="button"
            onClick={() => setActiveTab('Links')}
            className={`p-3 sm:p-4 rounded-2xl text-left transition-all ${
              activeTab === 'Links'
                ? 'bg-white/15 border border-white/30 shadow-inner'
                : 'bg-white/5 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {allLinks.length}
              </span>
              <span className="p-2 rounded-xl bg-white/10 text-brand-teal">
                <LinkIcon className="w-4 h-4" />
              </span>
            </div>
            <p className="text-xs font-bold mt-2 text-slate-200">
              Links Salvos
            </p>
            <p className="text-[10px] text-slate-300">
              Diretrizes e atalhos web
            </p>
          </button>

          {/* Documentos */}
          <button
            type="button"
            onClick={() => setActiveTab('Documentos')}
            className={`p-3 sm:p-4 rounded-2xl text-left transition-all ${
              activeTab === 'Documentos'
                ? 'bg-white/15 border border-white/30 shadow-inner'
                : 'bg-white/5 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {allDocs.length}
              </span>
              <span className="p-2 rounded-xl bg-white/10 text-indigo-400">
                <FileText className="w-4 h-4" />
              </span>
            </div>
            <p className="text-xs font-bold mt-2 text-slate-200">
              Documentos
            </p>
            <p className="text-[10px] text-slate-300">
              Google Drive e PDFs
            </p>
          </button>
        </div>
      </section>

      {/* CONTROLS BAR: SEARCH & TABS */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar em anotações, links ou documentos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-teal focus:bg-white transition-all text-slate-800 placeholder-slate-400"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4 text-brand-teal" />
            <span>Adicionar Novo</span>
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'Todos', label: 'Todos os Favoritos', count: totalItemsCount },
            { id: 'Anotações', label: 'Anotações', count: localNotes.length },
            { id: 'Links', label: 'Links Salvos', count: allLinks.length },
            { id: 'Documentos', label: 'Documentos', count: allDocs.length },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                  activeTab === tab.id
                    ? 'bg-brand-teal text-white'
                    : 'bg-slate-200/70 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT LISTINGS */}
      {isTotalEmpty ? (
        <div className="bg-white border border-slate-200/90 rounded-3xl p-10 sm:p-14 text-center space-y-4 shadow-sm max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 mx-auto flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-brand-navy">Nenhum item salvo no seu espaço</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Crie suas anotações pessoais, salve links de diretrizes ou vincule documentos clínicos e arquivos do Google Drive.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4 text-brand-teal" />
              <span>Criar Primeira Anotação, Link ou Documento</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* SECTION 1: ANOTAÇÕES */}
          {(activeTab === 'Todos' || activeTab === 'Anotações') && filteredNotes.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <StickyNote className="w-4 h-4 text-amber-500" />
                  <span>Anotações Pessoais do Plantão ({filteredNotes.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('note');
                    setShowAddModal(true);
                  }}
                  className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Nova Nota</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredNotes.map((n) => {
                  const colorTheme = NOTE_COLORS[n.cor] || NOTE_COLORS.yellow;
                  const displayTitle = cleanClinicalText(n.titulo) || 'Anotação sem título';
                  const displayContent = cleanClinicalText(n.conteudo);

                  return (
                    <div
                      key={n.id}
                      className={`${colorTheme.bg} ${colorTheme.border} border rounded-2xl p-4 shadow-2xs flex flex-col justify-between space-y-3 transition-all overflow-hidden break-words [word-break:break-word]`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900 leading-snug break-words [word-break:break-word]">
                            {displayTitle}
                          </h4>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleDeleteNote(n.id)}
                              className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                              title="Excluir anotação"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {displayContent && (
                          <p className="text-xs text-slate-700 whitespace-pre-wrap break-words [word-break:break-word] leading-relaxed font-normal">
                            {displayContent}
                          </p>
                        )}
                      </div>

                      <div className="pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopyNoteText(n)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-[11px] font-bold text-slate-700 shadow-2xs hover:shadow-xs transition-all shrink-0"
                          title="Copiar texto da anotação"
                        >
                          {copiedId === n.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Texto copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Copiar texto</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium ml-auto">
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

          {/* SECTION 2: LINKS SALVOS */}
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
                  className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Novo Link</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredLinks.map((link) => (
                  <div
                    key={link.id}
                    className="bg-white border border-slate-200/90 hover:border-brand-teal rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3 overflow-hidden break-words [word-break:break-word]"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-xs font-bold text-slate-900 leading-snug break-words [word-break:break-word]">
                              {cleanClinicalText(link.titulo)}
                            </h4>
                            <p className="text-[11px] text-slate-400 truncate">
                              {getDomain(link.url)}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteLinkOrDoc(link.id)}
                          className="p-1.5 text-slate-300 hover:text-rose-600 transition-colors shrink-0"
                          title="Excluir link"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {link.categoria && (
                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {link.categoria}
                        </span>
                      )}
                    </div>

                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyText(link.url, link.id, 'Link copiado para a área de transferência!')}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-medium transition-colors"
                      >
                        {copiedId === link.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-400" />
                            <span>Copiar link</span>
                          </>
                        )}
                      </button>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-brand-navy hover:bg-slate-800 text-white text-[11px] font-bold shadow-2xs transition-colors"
                      >
                        <span>Abrir</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: DOCUMENTOS */}
          {(activeTab === 'Todos' || activeTab === 'Documentos') && filteredDocs.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-500" />
                  <span>Documentos & Arquivos ({filteredDocs.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setModalTab('doc');
                    setShowAddModal(true);
                  }}
                  className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Novo Documento</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredDocs.map((doc) => {
                  const detectedType = detectGoogleDriveType(doc.url);
                  const isFolder = detectedType === 'folder';
                  return (
                    <div
                      key={doc.id}
                      className="bg-white border border-slate-200/90 hover:border-indigo-300 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3 overflow-hidden break-words [word-break:break-word]"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                              {isFolder ? <FolderOpen className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-xs font-bold text-slate-900 leading-snug break-words [word-break:break-word]">
                                {cleanClinicalText(doc.titulo)}
                              </h4>
                              <p className="text-[11px] text-slate-400 truncate">
                                {getDomain(doc.url)}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteLinkOrDoc(doc.id)}
                            className="p-1.5 text-slate-300 hover:text-rose-600 transition-colors shrink-0"
                            title="Excluir documento"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {doc.descricao && (
                          <p className="text-xs text-slate-600 break-words [word-break:break-word]">
                            {cleanClinicalText(doc.descricao)}
                          </p>
                        )}

                        <div className="flex items-center gap-1.5 pt-1">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                            {detectedType.toUpperCase()}
                          </span>
                          {doc.categoria && (
                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                              {doc.categoria}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopyText(doc.url, doc.id, 'Link do documento copiado!')}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-medium transition-colors"
                        >
                          {copiedId === doc.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-slate-400" />
                              <span>Copiar link</span>
                            </>
                          )}
                        </button>

                        <a
                          href={getGoogleDriveEmbedUrl(doc.url) || doc.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold shadow-2xs transition-colors"
                        >
                          <span>Abrir</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty search results message */}
          {q && filteredNotes.length === 0 && filteredLinks.length === 0 && filteredDocs.length === 0 && (
            <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <Search className="w-6 h-6 mx-auto text-slate-400" />
              <p className="font-bold text-slate-700 text-sm">Nenhum resultado encontrado para &quot;{search}&quot;</p>
              <p className="text-xs text-slate-500">Tente buscar por outras palavras-chave ou limpe o campo de busca.</p>
            </div>
          )}
        </div>
      )}

      {/* MODAL: ADD NOTE, LINK OR DOCUMENT */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Adicionar ao Meu Espaço</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setModalTab('note')}
                className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                  modalTab === 'note'
                    ? 'bg-white text-brand-navy shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Anotação
              </button>
              <button
                type="button"
                onClick={() => setModalTab('link')}
                className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                  modalTab === 'link'
                    ? 'bg-white text-brand-navy shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Link Web
              </button>
              <button
                type="button"
                onClick={() => setModalTab('doc')}
                className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                  modalTab === 'doc'
                    ? 'bg-white text-brand-navy shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Documento
              </button>
            </div>

            {/* Modal Form: Note */}
            {modalTab === 'note' && (
              <form onSubmit={handleSaveNote} className="space-y-3 pt-1">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título da Anotação
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Contatos da UTI Neonatal / Evolução Modelo"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Conteúdo / Texto da Nota
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Digite lembretes, condutas, telefones ou cole do Google Docs (a formatação HTML será limpa automaticamente)..."
                    value={newNoteContent}
                    onChange={(e) => setNewNoteContent(e.target.value)}
                    onPaste={handlePasteContent}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-teal leading-relaxed font-sans"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">Cor:</span>
                    {Object.keys(NOTE_COLORS).map((colorKey) => (
                      <button
                        key={colorKey}
                        type="button"
                        onClick={() => setNewNoteColor(colorKey)}
                        className={`w-5 h-5 rounded-full border-2 transition-transform ${
                          colorKey === 'yellow' ? 'bg-amber-300' :
                          colorKey === 'blue' ? 'bg-sky-300' :
                          colorKey === 'green' ? 'bg-emerald-300' : 'bg-purple-300'
                        } ${newNoteColor === colorKey ? 'scale-125 border-slate-800' : 'border-white hover:scale-110'}`}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    Salvar Anotação
                  </button>
                </div>
              </form>
            )}

            {/* Modal Form: Link */}
            {modalTab === 'link' && (
              <form onSubmit={handleSaveLink} className="space-y-3 pt-1">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título do Link
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Diretriz SBP 2026"
                    value={newLinkTitle}
                    onChange={(e) => setNewLinkTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Categoria
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Infectologia / Hospital / Artigo"
                    value={newLinkCategory}
                    onChange={(e) => setNewLinkCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    URL Web
                  </label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={newLinkUrl}
                    onChange={(e) => setNewLinkUrl(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    Salvar Link
                  </button>
                </div>
              </form>
            )}

            {/* Modal Form: Document */}
            {modalTab === 'doc' && (
              <form onSubmit={handleSaveDoc} className="space-y-3 pt-1">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título do Documento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Protocolo de Sepse Neonatal 2026"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Categoria do Documento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Diretrizes / Protocolos / Pastas"
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Link do Google Drive / PDF
                  </label>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/..."
                    value={newDocUrl}
                    onChange={(e) => setNewDocUrl(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Descrição (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Versão atualizada com tabela de diluição"
                    value={newDocDesc}
                    onChange={(e) => setNewDocDesc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
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