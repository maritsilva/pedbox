import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, X, Check, Save, Link as LinkIcon, ExternalLink, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';

function useToast() {
  const [toast, setToast] = useState(null);
  const show = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };
  return { toast, show };
}

function Toast({ toast }) {
  if (!toast) return null;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-xl text-white text-sm font-semibold flex items-center gap-2 ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
      {toast.type === 'error' ? <AlertTriangle className="w-4 h-4" /> : <Check className="w-4 h-4" />}
      {toast.msg}
    </motion.div>
  );
}

const EMPTY_FORM = { titulo: '', url: '', descricao: '', categoria: '', icone: '🔗' };

export default function LinksAdminSection() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const { toast, show } = useToast();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await base44.entities.LinkBiblioteca.list('-created_date');
    setLinks(data);
    setLoading(false);
  };

  const openNew = () => {
    setForm(EMPTY_FORM);
    setEditId(null);
    setShowForm(true);
  };

  const openEdit = (link) => {
    setForm({ titulo: link.titulo, url: link.url, descricao: link.descricao || '', categoria: link.categoria || '', icone: link.icone || '🔗' });
    setEditId(link.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!form.titulo.trim() || !form.url.trim()) return;
    setSaving(true);
    try {
      if (editId) {
        await base44.entities.LinkBiblioteca.update(editId, form);
        setLinks(prev => prev.map(l => l.id === editId ? { ...l, ...form } : l));
        show('Link atualizado!');
      } else {
        const created = await base44.entities.LinkBiblioteca.create(form);
        setLinks(prev => [created, ...prev]);
        show('Link criado!');
      }
      setShowForm(false);
      setEditId(null);
    } catch { show('Erro ao salvar', 'error'); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Excluir este link?')) return;
    await base44.entities.LinkBiblioteca.delete(id);
    setLinks(prev => prev.filter(l => l.id !== id));
    show('Link excluído!');
  };

  const q = search.toLowerCase().trim();
  const filtered = links.filter(l =>
    !q || l.titulo.toLowerCase().includes(q) || (l.categoria || '').toLowerCase().includes(q)
  );

  // Group by category
  const grouped = filtered.reduce((acc, link) => {
    const cat = link.categoria || 'Geral';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(link);
    return acc;
  }, {});

  if (loading) return <div className="py-10 text-center text-muted-foreground text-sm">Carregando...</div>;

  return (
    <div>
      <Toast toast={toast} />

      {/* Header + actions */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <LinkIcon className="w-4 h-4 text-primary" /> Links da Biblioteca
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">{links.length} links cadastrados</p>
        </div>
        <button onClick={openNew}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all">
          <Plus className="w-3.5 h-3.5" /> Novo link
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Buscar links..."
          className="w-full pl-4 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
        />
      </div>

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white border border-primary/30 rounded-2xl p-5 mb-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold">{editId ? 'Editar link' : 'Novo link'}</h3>
              <button onClick={() => setShowForm(false)}><X className="w-4 h-4 text-muted-foreground" /></button>
            </div>

            <div className="flex gap-2">
              <div className="w-16">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Ícone</label>
                <input value={form.icone} onChange={e => setForm(f => ({ ...f, icone: e.target.value }))}
                  className="w-full border border-border rounded-xl px-2 py-2.5 text-center text-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                  maxLength={2} />
              </div>
              <div className="flex-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Título *</label>
                <input value={form.titulo} onChange={e => setForm(f => ({ ...f, titulo: e.target.value }))} required
                  placeholder="Ex: Diretriz SBP 2025"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">URL *</label>
              <input value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} required
                placeholder="https://..."
                className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Categoria</label>
                <input value={form.categoria} onChange={e => setForm(f => ({ ...f, categoria: e.target.value }))}
                  placeholder="Ex: Infectologia"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">Descrição</label>
                <input value={form.descricao} onChange={e => setForm(f => ({ ...f, descricao: e.target.value }))}
                  placeholder="Breve descrição"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>

            <button onClick={handleSave} disabled={saving || !form.titulo.trim() || !form.url.trim()}
              className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2">
              {saving ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
              {editId ? 'Atualizar' : 'Salvar link'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Links list grouped by category */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-white border border-border rounded-2xl">
          <LinkIcon className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">Nenhum link encontrado</p>
        </div>
      ) : (
        <div className="space-y-5">
          {Object.entries(grouped).map(([cat, catLinks]) => (
            <div key={cat}>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span className="w-5 h-px bg-border flex-1" />
                {cat}
                <span className="w-5 h-px bg-border flex-1" />
              </p>
              <div className="space-y-2">
                {catLinks.map(link => (
                  <motion.div key={link.id} layout
                    className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-sm group hover:border-primary/30 transition-all">
                    <span className="text-xl flex-shrink-0">{link.icone || '🔗'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{link.titulo}</p>
                      {link.descricao && <p className="text-xs text-muted-foreground truncate">{link.descricao}</p>}
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <a href={link.url} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-blue-50 text-muted-foreground hover:text-blue-600 transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button onClick={() => openEdit(link)}
                        className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDelete(link.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}