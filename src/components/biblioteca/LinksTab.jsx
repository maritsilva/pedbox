import React, { useState, useEffect } from 'react';
import { Plus, ExternalLink, Trash2, Edit2, X, Check, Link as LinkIcon, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

function LinkForm({ initial, onSave, onCancel }) {
  const [titulo, setTitulo] = useState(initial?.titulo || '');
  const [url, setUrl] = useState(initial?.url || '');
  const [descricao, setDescricao] = useState(initial?.descricao || '');
  const [categoria, setCategoria] = useState(initial?.categoria || '');
  const [icone, setIcone] = useState(initial?.icone || '🔗');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !url.trim()) return;
    onSave({ titulo, url, descricao, categoria, icone });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white border border-primary/30 rounded-2xl p-5 mb-5 shadow-sm space-y-3"
    >
      <p className="font-bold text-sm text-foreground mb-1">{initial ? 'Editar link' : 'Novo link'}</p>
      <div className="flex gap-2">
        <input
          value={icone} onChange={e => setIcone(e.target.value)}
          className="w-14 border border-border rounded-xl px-2 py-2 text-center text-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
          maxLength={2}
        />
        <input
          value={titulo} onChange={e => setTitulo(e.target.value)}
          placeholder="Título *"
          className="flex-1 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          required
        />
      </div>
      <input
        value={url} onChange={e => setUrl(e.target.value)}
        placeholder="URL ou link do arquivo *"
        className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        required
      />
      <div className="flex gap-2">
        <input
          value={categoria} onChange={e => setCategoria(e.target.value)}
          placeholder="Categoria (ex: Cardiologia)"
          className="flex-1 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          value={descricao} onChange={e => setDescricao(e.target.value)}
          placeholder="Descrição breve"
          className="flex-1 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-sm text-muted-foreground border border-border rounded-xl hover:bg-secondary transition-colors">Cancelar</button>
        <button type="submit" className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Check className="w-4 h-4" /> Salvar
        </button>
      </div>
    </motion.form>
  );
}

export default function LinksTab({ search = '' }) {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const { isFavorite, toggleFavorite } = usePageFavorites();

  useEffect(() => {
    base44.auth.me().then(u => { if (u?.role === 'admin') setIsAdmin(true); }).catch(() => {});
    base44.entities.LinkBiblioteca.list('-created_date').then(data => {
      setLinks(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleSave = async (data) => {
    if (editing) {
      const updated = await base44.entities.LinkBiblioteca.update(editing.id, data);
      setLinks(prev => prev.map(l => l.id === editing.id ? { ...l, ...data } : l));
      setEditing(null);
    } else {
      const created = await base44.entities.LinkBiblioteca.create(data);
      setLinks(prev => [created, ...prev]);
      setShowForm(false);
    }
  };

  const handleDelete = async (id) => {
    await base44.entities.LinkBiblioteca.delete(id);
    setLinks(prev => prev.filter(l => l.id !== id));
  };

  const q = search.toLowerCase().trim();
  const filtered = links.filter(l =>
    !q ||
    l.titulo.toLowerCase().includes(q) ||
    (l.descricao || '').toLowerCase().includes(q) ||
    (l.categoria || '').toLowerCase().includes(q)
  );

  // Group by category
  const grouped = filtered.reduce((acc, link) => {
    const cat = link.categoria || 'Geral';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(link);
    return acc;
  }, {});

  if (loading) return <div className="py-16 text-center text-muted-foreground text-sm">Carregando...</div>;

  return (
    <div>
      {isAdmin && (
        <div className="mb-5">
          {showForm ? (
            <LinkForm onSave={handleSave} onCancel={() => setShowForm(false)} />
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" /> Adicionar link
            </button>
          )}
        </div>
      )}

      {editing && (
        <AnimatePresence>
          <LinkForm initial={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
        </AnimatePresence>
      )}

      {filtered.length === 0 ? (
        <div className="py-16 text-center bg-white border border-border rounded-2xl">
          <LinkIcon className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="font-semibold text-foreground">Nenhum link cadastrado</p>
          {isAdmin && <p className="text-sm text-muted-foreground mt-1">Clique em "Adicionar link" para começar.</p>}
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([cat, catLinks]) => (
            <div key={cat}>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">{cat}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catLinks.map(link => (
                  <motion.div
                    key={link.id}
                    whileHover={{ y: -1 }}
                    className="bg-white border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-2 group relative"
                  >
                    <div className="absolute top-3 right-3 flex gap-1">
                      <button
                        onClick={() => toggleFavorite(`link-${link.id}`)}
                        className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Star className={`w-3.5 h-3.5 transition-colors ${isFavorite(`link-${link.id}`) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`} />
                      </button>
                      {isAdmin && (
                        <>
                          <button onClick={() => setEditing(link)} className="p-1.5 rounded-lg hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                            <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                          <button onClick={() => handleDelete(link.id)} className="p-1.5 rounded-lg hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100">
                            <Trash2 className="w-3.5 h-3.5 text-red-500" />
                          </button>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{link.icone || '🔗'}</span>
                      <p className="font-bold text-sm text-foreground leading-snug flex-1 pr-16">{link.titulo}</p>
                    </div>
                    {link.descricao && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{link.descricao}</p>
                    )}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Abrir link
                    </a>
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