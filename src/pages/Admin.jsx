import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Edit3, Trash2, Upload, Image, Save, X, ChevronDown, ChevronRight, AlertTriangle, Check, FileText, FolderOpen, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Constants ────────────────────────────────────────────────────────────────
const ICONS = ['📋','🏥','💊','🧬','❤️','🧠','🫁','🩸','🫘','🌡️','⚕️','🔬','👶','🌱','🦠','🧪','🩺','🚑','💉','🔪','🫃','🧴','💛','🧒','🫀'];
const COLORS = [
  { id: 'blue', cls: 'bg-blue-500' }, { id: 'cyan', cls: 'bg-cyan-500' },
  { id: 'green', cls: 'bg-green-500' }, { id: 'teal', cls: 'bg-teal-500' },
  { id: 'purple', cls: 'bg-purple-500' }, { id: 'red', cls: 'bg-red-500' },
  { id: 'orange', cls: 'bg-orange-500' }, { id: 'amber', cls: 'bg-amber-500' },
  { id: 'indigo', cls: 'bg-indigo-500' }, { id: 'pink', cls: 'bg-pink-500' },
];

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
}

// ─── Toast helper ─────────────────────────────────────────────────────────────
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

// ─── Section: Categorias ──────────────────────────────────────────────────────
function CategoriasSection({ categorias, onSaved }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ label: '', icon: '📋', color: 'blue', subcategorias: [] });
  const [newSubLabel, setNewSubLabel] = useState('');
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState(null);
  const { toast, show } = useToast();

  const startEdit = (cat) => {
    setForm({ label: cat.label, icon: cat.icon, color: cat.color, subcategorias: cat.subcategorias || [] });
    setEditId(cat.id);
    setShowForm(true);
  };

  const addSub = () => {
    if (!newSubLabel.trim()) return;
    setForm(f => ({ ...f, subcategorias: [...f.subcategorias, { id: slugify(newSubLabel), label: newSubLabel.trim() }] }));
    setNewSubLabel('');
  };

  const removeSub = (idx) => setForm(f => ({ ...f, subcategorias: f.subcategorias.filter((_, i) => i !== idx) }));

  const handleSave = async () => {
    if (!form.label.trim()) return;
    setSaving(true);
    try {
      const data = {
        label: form.label.trim(),
        icon: form.icon,
        color: form.color,
        categoria_id: slugify(form.label),
        subcategorias: form.subcategorias,
      };
      if (editId) {
        await base44.entities.CategoriaCustom.update(editId, data);
        show('Categoria atualizada!');
      } else {
        await base44.entities.CategoriaCustom.create(data);
        show('Categoria criada!');
      }
      setShowForm(false);
      setForm({ label: '', icon: '📋', color: 'blue', subcategorias: [] });
      setEditId(null);
      onSaved();
    } catch {
      show('Erro ao salvar', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Excluir esta categoria?')) return;
    await base44.entities.CategoriaCustom.delete(id);
    show('Excluída!');
    onSaved();
  };

  return (
    <div>
      <Toast toast={toast} />
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2"><FolderOpen className="w-4 h-4 text-primary" /> Categorias Personalizadas</h2>
        <button onClick={() => { setShowForm(true); setEditId(null); setForm({ label: '', icon: '📋', color: 'blue', subcategorias: [] }); }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all">
          <Plus className="w-3.5 h-3.5" /> Nova Categoria
        </button>
      </div>

      {/* List */}
      {categorias.length === 0 && !showForm && (
        <p className="text-sm text-muted-foreground text-center py-8">Nenhuma categoria personalizada ainda.</p>
      )}
      <div className="space-y-2 mb-4">
        {categorias.map(cat => (
          <div key={cat.id} className="flex items-center justify-between bg-white border border-border rounded-xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">{cat.icon}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{cat.label}</p>
                <p className="text-xs text-muted-foreground">{(cat.subcategorias || []).length} subcategoria(s)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(cat)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(cat.id)} className="p-2 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-secondary/30 border border-border rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold">{editId ? 'Editar Categoria' : 'Nova Categoria'}</h3>
              <button onClick={() => setShowForm(false)}><X className="w-4 h-4 text-muted-foreground" /></button>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Nome</label>
              <input value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))}
                placeholder="Ex: Ortopedia Pediátrica"
                className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Ícone</label>
              <div className="flex flex-wrap gap-1.5">
                {ICONS.map(ic => (
                  <button key={ic} onClick={() => setForm(f => ({ ...f, icon: ic }))}
                    className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center transition-all ${form.icon === ic ? 'bg-primary ring-2 ring-primary ring-offset-1' : 'bg-white border border-border hover:bg-secondary'}`}>
                    {ic}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Cor</label>
              <div className="flex flex-wrap gap-2">
                {COLORS.map(c => (
                  <button key={c.id} onClick={() => setForm(f => ({ ...f, color: c.id }))}
                    className={`w-8 h-8 rounded-full ${c.cls} flex items-center justify-center transition-all ${form.color === c.id ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : 'opacity-60 hover:opacity-100'}`}>
                    {form.color === c.id && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Subcategorias</label>
              <div className="space-y-1.5 mb-2">
                {form.subcategorias.map((sub, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border border-border rounded-lg px-3 py-2">
                    <span className="text-sm text-foreground">{sub.label}</span>
                    <button onClick={() => removeSub(i)} className="text-muted-foreground hover:text-red-500 transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={newSubLabel} onChange={e => setNewSubLabel(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && addSub()}
                  placeholder="Nome da subcategoria"
                  className="flex-1 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <button onClick={addSub} className="px-3 py-2 rounded-xl bg-secondary hover:bg-border text-sm font-semibold transition-all">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button onClick={handleSave} disabled={saving || !form.label.trim()}
              className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2">
              {saving ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
              {editId ? 'Atualizar' : 'Criar Categoria'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Section: Condutas ────────────────────────────────────────────────────────
function CondutasSection({ condutas, categorias, onSaved }) {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const { toast, show } = useToast();

  const emptyForm = { categoria_label: '', categoria_icon: '📋', categoria_color: 'blue', subcategoria_label: '', topico_label: '', conteudo: '', imagens: [], is_custom: true };
  const [form, setForm] = useState(emptyForm);

  const allCatOptions = [
    ...categorias.map(c => ({ id: c.categoria_id || slugify(c.label), label: c.label, icon: c.icon, color: c.color, subcategorias: c.subcategorias || [] })),
  ];

  const selectedCat = allCatOptions.find(c => c.label === form.categoria_label);

  const startEdit = (c) => {
    setForm({
      categoria_label: c.categoria_label || '',
      categoria_icon: c.categoria_icon || '📋',
      categoria_color: c.categoria_color || 'blue',
      subcategoria_label: c.subcategoria_label || '',
      topico_label: c.topico_label || '',
      conteudo: c.conteudo || '',
      imagens: c.imagens || [],
      is_custom: true,
    });
    setEditId(c.id);
    setShowForm(true);
  };

  const handleMdFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setForm(f => ({ ...f, conteudo: ev.target.result }));
    reader.readAsText(file);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingImg(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setForm(f => ({ ...f, imagens: [...(f.imagens || []), file_url], conteudo: f.conteudo + `\n![${file.name}](${file_url})\n` }));
      show('Imagem anexada!');
    } catch {
      show('Erro ao enviar imagem', 'error');
    } finally {
      setUploadingImg(false);
    }
  };

  const removeImage = (url) => {
    setForm(f => ({ ...f, imagens: f.imagens.filter(u => u !== url) }));
  };

  const handleSave = async () => {
    if (!form.topico_label.trim() || !form.categoria_label.trim()) return;
    setSaving(true);
    try {
      const cat = allCatOptions.find(c => c.label === form.categoria_label);
      const data = {
        ...form,
        categoria_id: cat ? (cat.categoria_id || slugify(cat.label)) : slugify(form.categoria_label),
        categoria_icon: cat?.icon || form.categoria_icon,
        categoria_color: cat?.color || form.categoria_color,
        subcategoria_id: form.subcategoria_label ? slugify(form.subcategoria_label) : '',
        topico_id: slugify(form.topico_label),
      };
      if (editId) {
        await base44.entities.Conduta.update(editId, data);
        show('Conduta atualizada!');
      } else {
        await base44.entities.Conduta.create(data);
        show('Conduta criada!');
      }
      setShowForm(false);
      setForm(emptyForm);
      setEditId(null);
      onSaved();
    } catch {
      show('Erro ao salvar', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Excluir esta conduta?')) return;
    await base44.entities.Conduta.delete(id);
    show('Excluída!');
    onSaved();
  };

  return (
    <div>
      <Toast toast={toast} />
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> Condutas / Tópicos</h2>
        <button onClick={() => { setShowForm(true); setEditId(null); setForm(emptyForm); }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all">
          <Plus className="w-3.5 h-3.5" /> Nova Conduta
        </button>
      </div>

      {/* List */}
      {condutas.length === 0 && !showForm && (
        <p className="text-sm text-muted-foreground text-center py-8">Nenhuma conduta cadastrada ainda.</p>
      )}
      <div className="space-y-2 mb-4">
        {condutas.map(c => (
          <div key={c.id} className="flex items-center justify-between bg-white border border-border rounded-xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-lg">{c.categoria_icon || '📋'}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{c.topico_label}</p>
                <p className="text-xs text-muted-foreground">{c.categoria_label}{c.subcategoria_label ? ` › ${c.subcategoria_label}` : ''}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {c.conteudo && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✓ MD</span>}
              {c.imagens?.length > 0 && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.imagens.length} img</span>}
              <button onClick={() => startEdit(c)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(c.id)} className="p-2 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-secondary/30 border border-border rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold">{editId ? 'Editar Conduta' : 'Nova Conduta'}</h3>
              <button onClick={() => setShowForm(false)}><X className="w-4 h-4 text-muted-foreground" /></button>
            </div>

            {/* Categoria */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Categoria *</label>
              {allCatOptions.length > 0 ? (
                <select value={form.categoria_label}
                  onChange={e => {
                    const cat = allCatOptions.find(c => c.label === e.target.value);
                    setForm(f => ({ ...f, categoria_label: e.target.value, categoria_icon: cat?.icon || '📋', categoria_color: cat?.color || 'blue', subcategoria_label: '' }));
                  }}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                  <option value="">— Selecionar categoria —</option>
                  {allCatOptions.map(c => <option key={c.id || c.label} value={c.label}>{c.icon} {c.label}</option>)}
                </select>
              ) : (
                <input value={form.categoria_label} onChange={e => setForm(f => ({ ...f, categoria_label: e.target.value }))}
                  placeholder="Nome da categoria"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              )}
              {allCatOptions.length > 0 && !form.categoria_label && (
                <input value={form.categoria_label} onChange={e => setForm(f => ({ ...f, categoria_label: e.target.value }))}
                  placeholder="Ou digite o nome manualmente"
                  className="mt-2 w-full border border-dashed border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-muted-foreground" />
              )}
            </div>

            {/* Subcategoria */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Subcategoria</label>
              {selectedCat?.subcategorias?.length > 0 ? (
                <select value={form.subcategoria_label}
                  onChange={e => setForm(f => ({ ...f, subcategoria_label: e.target.value }))}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                  <option value="">— Sem subcategoria —</option>
                  {selectedCat.subcategorias.map(s => <option key={s.id} value={s.label}>{s.label}</option>)}
                </select>
              ) : (
                <input value={form.subcategoria_label} onChange={e => setForm(f => ({ ...f, subcategoria_label: e.target.value }))}
                  placeholder="Nome da subcategoria (opcional)"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              )}
            </div>

            {/* Tópico */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Tópico / Título *</label>
              <input value={form.topico_label} onChange={e => setForm(f => ({ ...f, topico_label: e.target.value }))}
                placeholder="Ex: Pneumonia Adquirida na Comunidade"
                className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>

            {/* Upload MD */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Arquivo Markdown (.md)</label>
              <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer transition-all text-sm text-muted-foreground hover:text-primary font-medium">
                <FileText className="w-4 h-4" />
                Carregar arquivo .md
                <input type="file" accept=".md,.txt" onChange={handleMdFile} className="hidden" />
              </label>
            </div>

            {/* Conteúdo MD */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Conteúdo Markdown</label>
              <textarea value={form.conteudo} onChange={e => setForm(f => ({ ...f, conteudo: e.target.value }))}
                rows={8}
                placeholder="## Título&#10;&#10;Conteúdo em Markdown...&#10;&#10;| Col 1 | Col 2 |&#10;|---|---|&#10;| Valor | Valor |"
                className="w-full border border-border rounded-xl px-3 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none bg-white leading-relaxed" />
              <p className="text-xs text-muted-foreground mt-1">{form.conteudo.length} caracteres</p>
            </div>

            {/* Upload Imagem */}
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Imagens</label>
              <label className={`flex items-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer transition-all text-sm text-muted-foreground hover:text-primary font-medium ${uploadingImg ? 'opacity-50 pointer-events-none' : ''}`}>
                {uploadingImg
                  ? <><div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" /> Enviando...</>
                  : <><Image className="w-4 h-4" /> Adicionar imagem (JPG, PNG, GIF)</>
                }
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploadingImg} />
              </label>
              {form.imagens?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.imagens.map((url, i) => (
                    <div key={i} className="relative group">
                      <img src={url} alt="" className="w-20 h-20 object-cover rounded-lg border border-border" />
                      <button onClick={() => removeImage(url)}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleSave} disabled={saving || !form.topico_label.trim() || !form.categoria_label.trim()}
              className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2">
              {saving ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
              {editId ? 'Atualizar Conduta' : 'Salvar Conduta'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────
export default function Admin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('condutas');
  const [categorias, setCategorias] = useState([]);
  const [condutas, setCondutas] = useState([]);

  useEffect(() => {
    base44.auth.me().then(u => { setUser(u); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const loadData = async () => {
    const [cats, conds] = await Promise.all([
      base44.entities.CategoriaCustom.list(),
      base44.entities.Conduta.list(),
    ]);
    setCategorias(cats);
    setCondutas(conds);
  };

  useEffect(() => { loadData(); }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4 text-center px-6">
        <AlertTriangle className="w-10 h-10 text-amber-500" />
        <p className="text-base font-bold text-foreground">Acesso Restrito</p>
        <p className="text-sm text-muted-foreground">Esta área é exclusiva para administradores.</p>
        <button onClick={() => base44.auth.redirectToLogin()} className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold">Entrar como Admin</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-2xl p-6 mb-6 shadow-lg">
        <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Painel de Administração</p>
        <h1 className="text-2xl font-extrabold">Condutas e Manejos</h1>
        <p className="text-white/60 text-sm mt-1">Gerencie categorias e conteúdo clínico</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-extrabold text-primary">{categorias.length}</p>
          <p className="text-xs text-muted-foreground mt-1">Categorias criadas</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-extrabold text-primary">{condutas.length}</p>
          <p className="text-xs text-muted-foreground mt-1">Condutas cadastradas</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-secondary/40 p-1 rounded-xl">
        {[
          { id: 'condutas', label: 'Condutas', icon: BookOpen },
          { id: 'categorias', label: 'Categorias', icon: FolderOpen },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === t.id ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
              <Icon className="w-4 h-4" /> {t.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {tab === 'categorias' && (
          <motion.div key="cats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CategoriasSection categorias={categorias} onSaved={loadData} />
          </motion.div>
        )}
        {tab === 'condutas' && (
          <motion.div key="conds" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CondutasSection condutas={condutas} categorias={categorias} onSaved={loadData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}