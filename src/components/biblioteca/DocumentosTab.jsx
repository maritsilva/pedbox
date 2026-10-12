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
  FolderOpen,
  UploadCloud,
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
  const { user } = useAuth() || {};
  const [documents, setDocuments] = useState([]);
  const [selectedCat, setSelectedCat] = useState('Todas');
  const [activeDoc, setActiveDoc] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Form states for new document or folder
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

  // Load custom documents and folders added by the user from server DB (user_links)
  useEffect(() => {
    if (user?.id) {
      services.userLinks.list('-created_date')
        .then((links) => {
          const docLinks = (links || [])
            .filter((l) => (
              l.categoria === 'Documentos' ||
              l.categoria === 'Diretrizes' ||
              l.categoria === 'Protocolos' ||
              l.categoria === 'Tabelas' ||
              l.categoria === 'Rotinas' ||
              l.categoria === 'Impressos' ||
              l.categoria === 'Artigos' ||
              l.categoria === 'Pastas' ||
              l.url?.includes('drive.google.com') ||
              l.url?.includes('docs.google.com')
            ))
            .map((l) => {
              const detectedType = detectGoogleDriveType(l.url);
              return {
                id: l.id,
                titulo: l.titulo,
                descricao: l.descricao || (detectedType === 'folder' ? 'Pasta do Google Drive vinculada.' : 'Documento clínico do Google Drive.'),
                categoria: l.categoria || (detectedType === 'folder' ? 'Pastas' : 'Diretrizes'),
                tipo: detectedType,
                driveUrl: l.url,
                embedUrl: getGoogleDriveEmbedUrl(l.url),
                fonte: 'Meu Google Drive',
                tags: [l.titulo.toLowerCase()],
                destaque: false,
              };
            });

          setDocuments(docLinks);
        })
        .catch(() => {});
    } else {
      setDocuments([]);
    }
  }, [user?.id]);

  // Handle Add Document or Folder in server DB
  const handleSaveNewDoc = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) {
      toast.error('Informe o título e o link do Google Drive.');
      return;
    }

    if (!user) {
      toast.error('Faça login para salvar documentos na sua conta.');
      return;
    }

    const urlTrimmed = newUrl.trim();
    const embedUrl = getGoogleDriveEmbedUrl(urlTrimmed);
    const detectedType = detectGoogleDriveType(urlTrimmed);
    const finalCategory = newCategory === 'Pastas' || detectedType === 'folder' ? 'Pastas' : newCategory;

    try {
      const created = await services.userLinks.create({
        titulo: newTitle.trim(),
        url: urlTrimmed,
        descricao: newDesc.trim() || (finalCategory === 'Pastas' ? 'Pasta do Google Drive vinculada.' : 'Documento clínico vinculado ao Google Drive.'),
        categoria: finalCategory,
        icone: detectedType === 'sheet' ? '📊' : detectedType === 'folder' ? '📁' : detectedType === 'slide' ? '📽️' : '📄',
      });

      const newDoc = {
        id: created.id,
        titulo: created.titulo,
        descricao: created.descricao || 'Documento clínico vinculado ao Google Drive.',
        categoria: created.categoria || 'Diretrizes',
        tipo: detectedType,
        driveUrl: created.url,
        embedUrl: embedUrl,
        fonte: newSource.trim() || 'Meu Google Drive',
        tags: [newTitle.toLowerCase()],
        destaque: false,
      };

      setDocuments((prev) => [newDoc, ...prev]);
      setShowAddModal(false);
      setNewTitle('');
      setNewUrl('');
      setNewDesc('');
      setNewSource('');
      toast.success(finalCategory === 'Pastas' ? 'Pasta adicionada com sucesso!' : 'Documento adicionado com sucesso!');
      setActiveDoc(newDoc);
    } catch (err) {
      toast.error(err.message || 'Erro ao salvar documento no servidor.');
    }
  };

  // Delete Document or Folder in server DB
  const handleDeleteDoc = async (id) => {
    try {
      await services.userLinks.delete(id);
      setDocuments((prev) => prev.filter((d) => d.id !== id));
      if (activeDoc?.id === id) setActiveDoc(null);
      toast.success('Item removido da sua conta.');
    } catch (err) {
      toast.error(err.message || 'Erro ao remover item.');
    }
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
              <UploadCloud className="w-4 h-4 text-brand-teal" />
              <span>Enviar Documento</span>
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
          <h3 className="text-base font-bold text-slate-800">Nenhum documento ou pasta encontrado</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Não encontramos nenhum arquivo no filtro selecionado. Adicione seus próprios arquivos ou pastas do Google Drive.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-opacity-90 shadow-xs transition-all cursor-pointer"
          >
            <UploadCloud className="w-4 h-4 text-teal-300" />
            <span>Enviar Documento ou Pasta</span>
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
                    className="absolute top-4 right-4 p-1 rounded-lg text-slate-300 hover:text-amber-500 hover:bg-amber-50/80 transition-colors z-10 cursor-pointer"
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
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
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

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDoc(doc.id);
                      }}
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title={doc.tipo === 'folder' ? 'Remover pasta' : 'Remover documento'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── MODAL: ENVIAR DOCUMENTO DO GOOGLE DRIVE ── */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-scaleUp max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-teal-50 text-brand-teal">
                  <UploadCloud className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Enviar Documento ou Pasta</h3>
                  <p className="text-xs text-slate-500">Cadastre um arquivo ou pasta com link do Google Drive para visualização integrada</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Aviso de compartilhamento recomendado */}
            <div className="bg-sky-50 border border-sky-200/90 rounded-2xl p-4 text-xs space-y-1.5 text-sky-950">
              <div className="flex items-center gap-2 font-bold text-sky-900">
                <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Recomendação de Compartilhamento no Google Drive</span>
              </div>
              <p className="leading-relaxed text-sky-800">
                É <strong>recomendado compartilhar apenas para quem tem o link</strong> no Google Drive (configuração: <em>"Qualquer pessoa com o link pode ler"</em>). Dessa forma, o visualizador integrado do PedBox renderizará o documento instantaneamente sem bloqueios ou solicitações de permissão.
              </p>
            </div>

            <form onSubmit={handleSaveNewDoc} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Nome do Documento ou Pasta *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex: Pasta de Protocolos da UTI ou Diretriz de Asma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Categoria *</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white"
                >
                  <option value="Diretrizes">Diretrizes & Manuais</option>
                  <option value="Protocolos">Protocolos Clínicos</option>
                  <option value="Rotinas">Rotinas & Plantão</option>
                  <option value="Tabelas">Tabelas & Diluições</option>
                  <option value="Impressos">Impressos & Modelos</option>
                  <option value="Artigos">Artigos & Referências</option>
                  <option value="Pastas">Pastas do Drive</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Link do Google Drive *</label>
                <input
                  type="url"
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/... ou drive.google.com/drive/folders/..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all font-mono"
                />
                <p className="text-[11px] text-amber-800 bg-amber-50/90 border border-amber-200/80 rounded-xl p-2.5 mt-1.5 leading-relaxed">
                  💡 <strong>Recomendação:</strong> No Google Drive, deixe configurado como <strong>"Qualquer pessoa com o link"</strong> (recomendado compartilhar apenas para quem tem o link). Suporta arquivos individuais (PDF, Google Docs, Planilhas, Slides) e pastas inteiras com navegação direta de arquivos no visualizador.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Fonte / Instituição (Opcional)</label>
                <input
                  type="text"
                  value={newSource}
                  onChange={(e) => setNewSource(e.target.value)}
                  placeholder="Ex: SBP, Hospital Infantil, Residência Médica"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Descrição (Opcional)</label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Resumo dos tópicos, indicações clínicas ou versão..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold bg-[#164B73] hover:bg-[#113a5a] text-white rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <UploadCloud className="w-4 h-4 text-teal-300" />
                  <span>Enviar Documento ou Pasta</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
