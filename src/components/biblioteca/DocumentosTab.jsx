import React, { useState, useEffect, useMemo } from 'react';
import {
  FileText,
  Plus,
  ExternalLink,
  Trash2,
  Copy,
  Check,
  Star,
  Search,
  X,
  Maximize2,
  Minimize2,
  Folder,
  FileSpreadsheet,
  Presentation,
  BookOpen,
  Sparkles,
  Link as LinkIcon,
  HelpCircle,
  Eye,
  FolderOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';
import { useAuth } from '@/lib/AuthContext';
import { services } from '@/api/services';
import { normalizeSearch } from '@/lib/calculatorRegistry';
import {
  DEFAULT_DOCUMENTS,
  CATEGORIAS_DOCUMENTOS,
  getGoogleDriveEmbedUrl,
  detectGoogleDriveType,
} from '@/lib/driveDocumentsData';

// Visual styles for document types
const TYPE_CONFIG = {
  pdf: {
    label: 'PDF',
    color: 'bg-rose-50 text-rose-700 border-rose-200/80',
    icon: FileText,
    badgeBg: 'bg-rose-100 text-rose-800'
  },
  doc: {
    label: 'Google Docs',
    color: 'bg-blue-50 text-blue-700 border-blue-200/80',
    icon: FileText,
    badgeBg: 'bg-blue-100 text-blue-800'
  },
  sheet: {
    label: 'Google Sheets',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    icon: FileSpreadsheet,
    badgeBg: 'bg-emerald-100 text-emerald-800'
  },
  slide: {
    label: 'Google Slides',
    color: 'bg-amber-50 text-amber-700 border-amber-200/80',
    icon: Presentation,
    badgeBg: 'bg-amber-100 text-amber-800'
  },
  folder: {
    label: 'Pasta Drive',
    color: 'bg-purple-50 text-purple-700 border-purple-200/80',
    icon: Folder,
    badgeBg: 'bg-purple-100 text-purple-800'
  },
};

export default function DocumentosTab({ externalSearch = '' }) {
  const { user, refreshUser } = useAuth() || {};
  const [documents, setDocuments] = useState([]);
  const [selectedCat, setSelectedCat] = useState('Todas');
  const [activeDoc, setActiveDoc] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [teamFolderUrl, setTeamFolderUrl] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Form states for new document
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newCategory, setNewCategory] = useState('Diretrizes');
  const [newDesc, setNewDesc] = useState('');
  const [newSource, setNewSource] = useState('');

  const [searchParams] = useSearchParams();
  const { isFavorite, toggleFavorite } = usePageFavorites() || {
    isFavorite: () => false,
    toggleFavorite: () => {}
  };

  // Auto-select document from URL param if present
  useEffect(() => {
    const docId = searchParams.get('doc');
    if (docId && documents.length > 0) {
      const found = documents.find((d) => d.id === docId);
      if (found) {
        setActiveDoc(found);
        setTimeout(() => {
          document.getElementById('drive-viewer-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams, documents]);

  // Load documents and user's Google Drive folder from user account + default clinical docs
  useEffect(() => {
    const userFolder = (user?.drive_folder_url || '').trim();

    if (userFolder) {
      setTeamFolderUrl(userFolder);
    }

    let combined = [...DEFAULT_DOCUMENTS];

    if (userFolder) {
      const folderEmbed = getGoogleDriveEmbedUrl(userFolder);
      const folderDoc = {
        id: 'doc_team_drive_custom',
        titulo: 'Pasta Vinculada da Equipe (Google Drive)',
        descricao: 'Pasta oficial vinculada às configurações da sua conta PedBox no servidor.',
        categoria: 'Pastas',
        tipo: 'folder',
        driveUrl: userFolder,
        embedUrl: folderEmbed,
        fonte: 'Google Drive Vinculado',
        tags: ['drive', 'pasta', 'equipe', 'serviço'],
        destaque: true,
      };
      combined = [folderDoc, ...combined.filter((d) => d.id !== 'doc_team_drive_custom')];
      // Automatically open the linked folder in viewer if no specific document is requested
      if (!searchParams.get('doc')) {
        setActiveDoc(folderDoc);
      }
    }

    setDocuments(combined);
  }, [user?.drive_folder_url, searchParams]);

  // Update in-memory documents list
  const persistDocuments = (updatedDocs) => {
    setDocuments(updatedDocs);
  };

  // Save custom Team Google Drive Folder to user settings in server DB
  const handleSaveTeamFolder = async (e) => {
    e.preventDefault();
    const url = teamFolderUrl.trim();
    if (!url) return;

    try {
      if (user) {
        await services.auth.updateProfile({ drive_folder_url: url });
        if (typeof refreshUser === 'function') await refreshUser();
      }

      const folderEmbed = getGoogleDriveEmbedUrl(url);
      const folderDoc = {
        id: 'doc_team_drive_custom',
        titulo: 'Pasta Vinculada da Equipe (Google Drive)',
        descricao: 'Pasta oficial vinculada às configurações da sua conta PedBox no servidor.',
        categoria: 'Pastas',
        tipo: 'folder',
        driveUrl: url,
        embedUrl: folderEmbed,
        fonte: 'Google Drive Vinculado',
        tags: ['drive', 'pasta', 'equipe', 'serviço'],
        destaque: true,
      };

      const updated = [folderDoc, ...documents.filter((d) => d.id !== 'doc_team_drive_custom')];
      setDocuments(updated);
      setShowFolderModal(false);
      toast.success('Pasta vinculada às configurações da sua conta com sucesso!');
      setActiveDoc(folderDoc);
    } catch (err) {
      toast.error(err.message || 'Erro ao vincular pasta nas configurações.');
    }
  };

  // Handle Add Document
  const handleSaveNewDoc = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) {
      toast.error('Informe o título e o link do Google Drive.');
      return;
    }

    const embedUrl = getGoogleDriveEmbedUrl(newUrl.trim());
    const detectedType = detectGoogleDriveType(newUrl.trim());

    const newDoc = {
      id: 'doc_' + Date.now(),
      titulo: newTitle.trim(),
      descricao: newDesc.trim() || 'Documento clínico vinculado ao Google Drive.',
      categoria: newCategory || 'Diretrizes',
      tipo: detectedType,
      driveUrl: newUrl.trim(),
      embedUrl: embedUrl,
      fonte: newSource.trim() || 'Arquivo do Google Drive',
      tags: [newTitle.toLowerCase(), newCategory.toLowerCase()],
      destaque: false,
    };

    const updated = [newDoc, ...documents];
    persistDocuments(updated);
    setShowAddModal(false);
    setNewTitle('');
    setNewUrl('');
    setNewDesc('');
    setNewSource('');
    toast.success('Documento adicionado ao visualizador!');
    setActiveDoc(newDoc);
  };

  // Delete Document
  const handleDeleteDoc = (id) => {
    const updated = documents.filter((d) => d.id !== id);
    persistDocuments(updated);
    if (activeDoc?.id === id) setActiveDoc(null);
    toast.success('Documento removido.');
  };

  // Copy Link
  const handleCopyLink = (doc) => {
    navigator.clipboard?.writeText(doc.driveUrl);
    setCopiedId(doc.id);
    toast.success('Link do Google Drive copiado!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered documents
  const q = normalizeSearch(externalSearch);
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchCat = selectedCat === 'Todas' || doc.categoria === selectedCat;
      if (!matchCat) return false;

      if (!q) return true;
      const searchable = normalizeSearch(
        `${doc.titulo} ${doc.descricao || ''} ${doc.categoria || ''} ${doc.fonte || ''} ${(doc.tags || []).join(' ')}`
      );
      return searchable.includes(q);
    });
  }, [documents, selectedCat, q]);

  return (
    <div className="space-y-6">
      {/* ── TOP HERO BANNER: GOOGLE DRIVE INTEGRATION ── */}
      <div className="bg-gradient-to-r from-[#164B73] via-[#1B5784] to-[#206394] text-white rounded-3xl p-6 sm:p-7 shadow-md relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 right-32 w-48 h-48 rounded-full bg-teal-400/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <FolderOpen className="w-3.5 h-3.5 text-teal-300" />
              Repositório Clínico & Nuvem
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
              Documentos & Google Drive
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
              Vincule manuais, diretrizes, planilhas de diluição e rotinas do Google Drive. Visualize os arquivos diretamente no PedBox sem precisar sair do plantão.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-brand-navy hover:bg-slate-100 shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-brand-teal" />
              <span>Adicionar Documento</span>
            </button>

            <button
              onClick={() => setShowFolderModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors cursor-pointer"
              title="Vincular pasta compartilhada do Google Drive"
            >
              <Folder className="w-4 h-4 text-teal-300" />
              <span>{teamFolderUrl ? 'Alterar Pasta nas Configurações' : 'Vincular Pasta nas Configurações'}</span>
            </button>

            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/80 hover:text-white transition-colors"
            >
              <span>Abrir Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── BANNER: STATUS DA PASTA VINCULADA ── */}
      {teamFolderUrl ? (
        <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-2 rounded-xl bg-purple-100 text-purple-700 shrink-0">
              <FolderOpen className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-purple-950">Pasta Vinculada nas Configurações do Usuário</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Ativa & Conectada
                </span>
              </div>
              <p className="text-slate-500 truncate mt-0.5 font-mono text-[11px]">
                {teamFolderUrl}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowFolderModal(true)}
              className="px-3 py-1.5 rounded-xl border border-purple-200 bg-white hover:bg-purple-100/60 text-purple-800 font-semibold text-xs transition-colors"
            >
              Alterar Link
            </button>
            <a
              href={teamFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs shadow-2xs transition-colors"
            >
              <span>Abrir no Drive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <span className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <FolderOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-sm text-amber-950">Nenhuma pasta vinculada nas configurações da sua conta</h3>
              <p className="text-amber-800/90 mt-1 leading-relaxed">
                Vincule o link de compartilhamento da pasta do Google Drive da sua equipe ou serviço pediátrico para visualizar e acessar facilmente todos os protocolos e arquivos diretamente aqui no PedBox.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowFolderModal(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
          >
            <Folder className="w-4 h-4" />
            <span>Vincular Pasta Agora</span>
          </button>
        </div>
      )}

      {/* ── INTEGRATED VIEWER (WHEN A DOCUMENT IS SELECTED) ── */}
      {activeDoc && (
        <div
          id="drive-viewer-section"
          className={`bg-white border-2 border-brand-teal/40 rounded-3xl p-4 sm:p-5 shadow-lg space-y-3 transition-all ${
            isFullscreen ? 'fixed inset-4 z-50 overflow-hidden flex flex-col' : ''
          }`}
        >
          {/* Viewer Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className={`p-2 rounded-xl border shrink-0 ${TYPE_CONFIG[activeDoc.tipo]?.color || 'bg-slate-50'}`}>
                {(() => {
                  const Icon = TYPE_CONFIG[activeDoc.tipo]?.icon || FileText;
                  return <Icon className="w-5 h-5" />;
                })()}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 truncate">
                    {activeDoc.titulo}
                  </h3>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-slate-100 text-slate-700">
                    {activeDoc.categoria}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {activeDoc.fonte || 'Google Drive'} · {activeDoc.descricao}
                </p>
              </div>
            </div>

            {/* Viewer Action Controls */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => handleCopyLink(activeDoc)}
                className="p-2 rounded-xl text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-colors"
                title="Copiar link"
              >
                {copiedId === activeDoc.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>

              <a
                href={activeDoc.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Abrir no Google Drive em nova aba"
              >
                <span>Abrir no Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-xl text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-colors"
                title={isFullscreen ? 'Reduzir' : 'Modo Tela Cheia'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  setActiveDoc(null);
                  setIsFullscreen(false);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title="Fechar visualizador"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Viewer Iframe */}
          <div className={`relative bg-slate-900 rounded-2xl overflow-hidden shadow-inner ${isFullscreen ? 'flex-1 h-full' : 'h-[600px]'}`}>
            <iframe
              src={activeDoc.embedUrl || activeDoc.driveUrl}
              title={activeDoc.titulo}
              className="w-full h-full border-0 rounded-2xl"
              allow="autoplay; fullscreen"
              loading="lazy"
            />
          </div>

          {/* Quick Note about permissions */}
          <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Visualização segura via Google Drive. Certifique-se de que o arquivo esteja compartilhado com o link ou que você esteja logado na conta com acesso.
            </span>
          </p>
        </div>
      )}

      {/* ── CATEGORY PILLS ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {CATEGORIAS_DOCUMENTOS.map((cat) => {
          const isSelected = selectedCat === cat.id;
          const count = cat.id === 'Todas' ? documents.length : documents.filter((d) => d.categoria === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-brand-navy text-white shadow-xs font-bold'
                  : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── DOCUMENTS GRID ── */}
      {filteredDocuments.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">Nenhum documento encontrado</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Não encontramos nenhum arquivo no filtro selecionado. Adicione seus próprios arquivos ou pastas do Google Drive.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-opacity-90 transition-all"
          >
            Adicionar Documento
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocuments.map((doc) => {
            const typeConfig = TYPE_CONFIG[doc.tipo] || TYPE_CONFIG.doc;
            const Icon = typeConfig.icon;
            const favKey = `documento-${doc.id}`;
            const favorited = isFavorite(favKey);
            const isActive = activeDoc?.id === doc.id;

            return (
              <div
                key={doc.id}
                onClick={() => {
                  setActiveDoc(doc);
                  const viewerEl = document.getElementById('drive-viewer-section');
                  if (viewerEl) {
                    viewerEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`bg-white border rounded-2xl p-4.5 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group relative select-none ${
                  isActive
                    ? 'border-brand-teal ring-2 ring-brand-teal/20'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  {/* Card Header: Type Badge & Favorite Button */}
                  <div className="flex items-center justify-between gap-2 pr-7">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border ${typeConfig.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{typeConfig.label}</span>
                    </span>

                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {doc.categoria}
                    </span>
                  </div>

                  {/* Favorite Star Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(favKey);
                      toast.success(favorited ? 'Removido dos favoritos' : 'Adicionado aos favoritos!');
                    }}
                    className="absolute top-4 right-4 p-1 rounded-lg text-slate-300 hover:text-amber-500 hover:bg-amber-50/80 transition-colors z-10"
                    title={favorited ? 'Remover dos favoritos' : 'Favoritar documento'}
                  >
                    <Star className={`w-4 h-4 ${favorited ? 'fill-amber-400 text-amber-500' : 'text-slate-300'}`} />
                  </button>

                  {/* Title and Description */}
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-brand-navy transition-colors line-clamp-2 leading-snug">
                      {doc.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-3 leading-relaxed">
                      {doc.descricao}
                    </p>
                  </div>
                </div>

                {/* Card Footer: View Button & Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-brand-teal group-hover:underline flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visualizar</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyLink(doc);
                      }}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                      title="Copiar link do Google Drive"
                    >
                      {copiedId === doc.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>

                    <a
                      href={doc.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-100 transition-colors"
                      title="Abrir no Google Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {doc.id.startsWith('doc_') && !DEFAULT_DOCUMENTS.some((d) => d.id === doc.id) && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteDoc(doc.id);
                        }}
                        className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Remover documento"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── MODAL: ADICIONAR DOCUMENTO DO GOOGLE DRIVE ── */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-teal-50 text-brand-teal">
                  <FileText className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Adicionar Documento do Google Drive</h3>
                  <p className="text-xs text-slate-500">Vincule um arquivo para visualização integrada no PedBox</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNewDoc} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Título do Documento *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex: Diretriz de Sepse Pediátrica 2026"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Link de Compartilhamento do Google Drive *</label>
                <input
                  type="url"
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/... ou docs.google.com/..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Suporta arquivos PDF, Google Docs, Planilhas (Sheets), Apresentações (Slides) e Pastas do Drive.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Categoria</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  >
                    <option value="Diretrizes">Diretrizes & Manuais</option>
                    <option value="Rotinas">Rotinas & Plantão</option>
                    <option value="Tabelas">Tabelas & Diluições</option>
                    <option value="Impressos">Impressos & Modelos</option>
                    <option value="Pastas">Pastas do Drive</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Fonte / Instituição</label>
                  <input
                    type="text"
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    placeholder="Ex: SBP, HU, MS"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Descrição Breve (Opcional)</label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Resumo dos tópicos abordados no arquivo..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-[#164B73] hover:bg-[#113a5a] text-white rounded-xl shadow-xs transition-colors"
                >
                  Salvar Documento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: VINCULAR PASTA RAIZ DO DRIVE ── */}
      {showFolderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setShowFolderModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-50 text-purple-700">
                  <Folder className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-base text-slate-900">Vincular Pasta às Configurações</h3>
              </div>
              <button onClick={() => setShowFolderModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Cole o link de compartilhamento da pasta no Google Drive. Ele será salvo permanentemente nas <strong>configurações da sua conta de usuário</strong> e todos os arquivos e protocolos da pasta serão exibidos no visualizador integrado para fácil acesso.
            </p>

            <form onSubmit={handleSaveTeamFolder} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Link da Pasta do Google Drive *</label>
                <input
                  type="url"
                  required
                  value={teamFolderUrl}
                  onChange={(e) => setTeamFolderUrl(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowFolderModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-[#164B73] hover:bg-[#113a5a] text-white rounded-xl shadow-xs transition-colors"
                >
                  Salvar nas Configurações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
