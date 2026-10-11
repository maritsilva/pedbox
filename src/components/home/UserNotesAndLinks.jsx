import React, { useState, useEffect } from 'react';
import { 
  StickyNote, 
  Link as LinkIcon, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  Tag, 
  Sparkles,
  ChevronDown,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { services } from '@/api/services';
import { useAuth } from '@/lib/AuthContext';

const NOTE_COLORS = {
  yellow: { bg: 'bg-amber-50/80', border: 'border-amber-200', text: 'text-amber-900', badge: 'bg-amber-100 text-amber-800' },
  blue: { bg: 'bg-sky-50/80', border: 'border-sky-200', text: 'text-sky-950', badge: 'bg-sky-100 text-sky-800' },
  green: { bg: 'bg-emerald-50/80', border: 'border-emerald-200', text: 'text-emerald-950', badge: 'bg-emerald-100 text-emerald-800' },
  purple: { bg: 'bg-purple-50/80', border: 'border-purple-200', text: 'text-purple-950', badge: 'bg-purple-100 text-purple-800' },
};

export default function UserNotesAndLinks() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'links'
  const [notes, setNotes] = useState([]);
  const [links, setLinks] = useState([]);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddLink, setShowAddLink] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Form states for note
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteColor, setNoteColor] = useState('yellow');

  // Form states for link
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkCategory, setLinkCategory] = useState('');

  // Load from localStorage and backend
  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem('pedbox_saved_notes');
      if (storedNotes) setNotes(JSON.parse(storedNotes));
      const storedLinks = localStorage.getItem('pedbox_saved_links');
      if (storedLinks) setLinks(JSON.parse(storedLinks));
    } catch {
      // fallback
    }

    // If user is authenticated, sync with server
    if (user?.id) {
      services.notes.filter({ created_by_id: user.id })
        .then((remoteNotes) => {
          if (Array.isArray(remoteNotes) && remoteNotes.length > 0) {
            setNotes((prev) => {
              const combined = [...remoteNotes];
              prev.forEach((local) => {
                if (!combined.some((r) => r.id === local.id || r.titulo === local.titulo)) {
                  combined.push(local);
                }
              });
              localStorage.setItem('pedbox_saved_notes', JSON.stringify(combined));
              return combined;
            });
          }
        })
        .catch(() => {});
    }
  }, [user?.id]);

  // Persist notes helper
  const persistNotes = (updated) => {
    setNotes(updated);
    try {
      localStorage.setItem('pedbox_saved_notes', JSON.stringify(updated));
    } catch {}
  };

  // Persist links helper
  const persistLinks = (updated) => {
    setLinks(updated);
    try {
      localStorage.setItem('pedbox_saved_links', JSON.stringify(updated));
    } catch {}
  };

  // Handle create note
  const handleSaveNote = async (e) => {
    e.preventDefault();
    if (!noteTitle.trim() && !noteContent.trim()) {
      toast.error('Informe pelo menos um título ou conteúdo para a anotação.');
      return;
    }

    const newNote = {
      id: 'note_' + Date.now(),
      titulo: noteTitle.trim() || 'Anotação sem título',
      conteudo: noteContent.trim(),
      cor: noteColor,
      created_date: new Date().toISOString(),
    };

    const updated = [newNote, ...notes];
    persistNotes(updated);

    // Sync to backend if authenticated
    if (user?.id) {
      services.notes.create({
        titulo: newNote.titulo,
        conteudo: newNote.conteudo,
        cor: newNote.cor,
      }).catch(() => {});
    }

    setNoteTitle('');
    setNoteContent('');
    setShowAddNote(false);
    toast.success('Anotação salva com sucesso!');
  };

  // Handle delete note
  const handleDeleteNote = (id) => {
    const updated = notes.filter((n) => n.id !== id);
    persistNotes(updated);
    if (user?.id && !id.startsWith('note_')) {
      services.notes.delete(id).catch(() => {});
    }
    toast.success('Anotação removida.');
  };

  // Handle copy note
  const handleCopyNote = (n) => {
    const textToCopy = `${n.titulo}\n\n${n.conteudo || ''}`.trim();
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(n.id);
    toast.success('Anotação copiada para a área de transferência!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle create link
  const handleSaveLink = (e) => {
    e.preventDefault();
    if (!linkTitle.trim() || !linkUrl.trim()) {
      toast.error('Informe o título e a URL do link.');
      return;
    }

    let formattedUrl = linkUrl.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const newLink = {
      id: 'link_' + Date.now(),
      titulo: linkTitle.trim(),
      url: formattedUrl,
      categoria: linkCategory.trim() || 'Geral',
      created_date: new Date().toISOString(),
    };

    const updated = [newLink, ...links];
    persistLinks(updated);

    setLinkTitle('');
    setLinkUrl('');
    setLinkCategory('');
    setShowAddLink(false);
    toast.success('Link salvo com sucesso!');
  };

  // Handle delete link
  const handleDeleteLink = (id) => {
    const updated = links.filter((l) => l.id !== id);
    persistLinks(updated);
    toast.success('Link removido.');
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
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-5">
      {/* SECTION HEADER & TABS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span>Meu Espaço Clínico: Anotações & Links</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Suas anotações do plantão e links favoritos ficam salvos automaticamente no sistema.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'notes'
                ? 'bg-white text-brand-navy shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <StickyNote className="w-3.5 h-3.5 text-amber-500" />
            <span>Anotações ({notes.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('links')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'links'
                ? 'bg-white text-brand-navy shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5 text-brand-teal" />
            <span>Links Salvos ({links.length})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ANOTAÇÕES */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">
              Lembretes, condutas e notas do plantão
            </span>
            <button
              type="button"
              onClick={() => setShowAddNote(!showAddNote)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-teal-700 bg-teal-50 hover:bg-teal-100/70 border border-teal-200/80 px-3 py-1.5 rounded-xl transition-all"
            >
              {showAddNote ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{showAddNote ? 'Cancelar' : 'Nova Anotação'}</span>
            </button>
          </div>

          {/* Form to add note */}
          {showAddNote && (
            <form onSubmit={handleSaveNote} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Título da Anotação
                </label>
                <input
                  type="text"
                  placeholder="Ex: Contatos UTI / Lembrete Plantão / Conduta CRIE"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Conteúdo / Observação
                </label>
                <textarea
                  rows={3}
                  placeholder="Digite aqui telefones úteis, protocolos específicos, condutas ou lembretes clínicos..."
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-teal leading-relaxed"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-slate-500 mr-1">Cor:</span>
                  {Object.keys(NOTE_COLORS).map((colorKey) => (
                    <button
                      key={colorKey}
                      type="button"
                      onClick={() => setNoteColor(colorKey)}
                      className={`w-5 h-5 rounded-full border-2 transition-transform ${
                        colorKey === 'yellow' ? 'bg-amber-300' :
                        colorKey === 'blue' ? 'bg-sky-300' :
                        colorKey === 'green' ? 'bg-emerald-300' : 'bg-purple-300'
                      } ${noteColor === colorKey ? 'scale-125 border-slate-800' : 'border-white hover:scale-110'}`}
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

          {/* Notes Grid */}
          {notes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {notes.map((n) => {
                const colorTheme = NOTE_COLORS[n.cor] || NOTE_COLORS.yellow;
                return (
                  <div
                    key={n.id}
                    className={`${colorTheme.bg} ${colorTheme.border} border rounded-2xl p-4 shadow-2xs flex flex-col justify-between space-y-2.5 transition-all`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-slate-900 leading-snug">
                          {n.titulo}
                        </h4>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleCopyNote(n)}
                            className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                            title="Copiar anotação"
                          >
                            {copiedId === n.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
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

                      {n.conteudo && (
                        <p className="text-xs text-slate-700 whitespace-pre-wrap mt-1.5 leading-relaxed font-normal">
                          {n.conteudo}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                      <span>{formatDate(n.created_date)}</span>
                      <span className="text-emerald-700 font-semibold">✓ Salvo</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-1 text-xs text-slate-500">
              <StickyNote className="w-6 h-6 mx-auto text-slate-400 mb-1" />
              <p className="font-semibold text-slate-700">Nenhuma anotação salva ainda.</p>
              <p>Adicione lembretes, telefones ou condutas rápidas para consultar no seu plantão.</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: LINKS SALVOS */}
      {activeTab === 'links' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">
              Atalhos para diretrizes externas, hospitais e referências
            </span>
            <button
              type="button"
              onClick={() => setShowAddLink(!showAddLink)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:text-teal-700 bg-teal-50 hover:bg-teal-100/70 border border-teal-200/80 px-3 py-1.5 rounded-xl transition-all"
            >
              {showAddLink ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{showAddLink ? 'Cancelar' : 'Salvar Novo Link'}</span>
            </button>
          </div>

          {/* Form to add link */}
          {showAddLink && (
            <form onSubmit={handleSaveLink} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Título do Link
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Diretriz Asma SBP 2026"
                    value={linkTitle}
                    onChange={(e) => setLinkTitle(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Categoria ou Especialidade
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Pneumologia / Hospital / Artigo"
                    value={linkCategory}
                    onChange={(e) => setLinkCategory(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  URL / Endereço Web
                </label>
                <input
                  type="text"
                  placeholder="https://www.sbp.com.br/..."
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  Salvar Link
                </button>
              </div>
            </form>
          )}

          {/* Links Grid */}
          {links.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="bg-white border border-slate-200/90 hover:border-brand-teal rounded-2xl p-3.5 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
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
                          {link.titulo}
                        </h4>
                        <span className="text-[10px] text-emerald-700 font-semibold shrink-0">✓ Salvo</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">
                        {getDomain(link.url)}
                      </p>
                      {link.categoria && (
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {link.categoria}
                        </span>
                      )}
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleDeleteLink(link.id)}
                    className="p-1.5 text-slate-300 hover:text-rose-600 transition-colors shrink-0"
                    title="Excluir link"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-1 text-xs text-slate-500">
              <LinkIcon className="w-6 h-6 mx-auto text-slate-400 mb-1" />
              <p className="font-semibold text-slate-700">Nenhum link salvo ainda.</p>
              <p>Guarde links de diretrizes, hospitais ou calculadoras externas para abrir em 1 clique.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
