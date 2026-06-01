import React, { useState, useEffect, useMemo } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Edit3, Trash2, Upload, Image, Save, X, AlertTriangle, Check, FileText, FolderOpen, BookOpen, BarChart2, Search, ChevronDown, ChevronRight, Eye, EyeOff, Link as LinkIcon, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONDUTAS_CATEGORIAS } from '@/lib/condutasData';
import CondutasTab from '@/components/biblioteca/CondutasTab';
import LinksAdminSection from '@/components/admin/LinksAdminSection';
import ProtocolosAdminSection from '@/components/admin/ProtocolosAdminSection';

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

// ─── Section: Índice de Condutas ──────────────────────────────────────────────
function IndiceSection({ condutas, categorias, onEditConduta }) {
  const [search, setSearch] = useState('');
  const [openCat, setOpenCat] = useState(null);

  // Build merged map of all topicos with their DB content status
  const dbMap = useMemo(() => {
    const m = {};
    condutas.forEach(c => {
      const key = `${slugify(c.categoria_label || '')}::${slugify(c.topico_label || '')}`;
      m[key] = c;
    });
    return m;
  }, [condutas]);

  const q = search.toLowerCase().trim();

  const allCats = useMemo(() => {
    return CONDUTAS_CATEGORIAS.map(cat => ({
      ...cat,
      subcategorias: cat.subcategorias.map(sub => ({
        ...sub,
        topicos: sub.topicos.map(top => {
          const key = `${cat.id}::${top.id}`;
          const keyLabel = `${slugify(cat.label)}::${slugify(top.label)}`;
          const dbEntry = dbMap[key] || dbMap[keyLabel];
          return { ...top, dbEntry, hasContent: !!(dbEntry?.conteudo?.trim() || top.conteudo?.trim()) };
        }),
      })),
    }));
  }, [dbMap]);

  const totalTopicos = allCats.reduce((acc, cat) => acc + cat.subcategorias.reduce((a, s) => a + s.topicos.length, 0), 0);
  const withContent = allCats.reduce((acc, cat) => acc + cat.subcategorias.reduce((a, s) => a + s.topicos.filter(t => t.hasContent).length, 0), 0);
  const pct = totalTopicos ? Math.round((withContent / totalTopicos) * 100) : 0;

  return (
    <div>
      {/* Progress bar */}
      <div className="bg-white border border-border rounded-2xl p-4 mb-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-foreground">Cobertura de Conteúdo</p>
          <span className="text-sm font-extrabold text-primary">{pct}%</span>
        </div>
        <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">{withContent} de {totalTopicos} tópicos com conteúdo</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Buscar tópico..."
          className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
        />
      </div>

      <div className="space-y-2">
        {allCats.map(cat => {
          const filtered = cat.subcategorias.flatMap(sub =>
            sub.topicos.filter(t =>
              !q || t.label.toLowerCase().includes(q) || sub.label.toLowerCase().includes(q)
            ).map(t => ({ ...t, subLabel: sub.label }))
          );
          if (filtered.length === 0) return null;
          const catTotal = cat.subcategorias.reduce((a, s) => a + s.topicos.length, 0);
          const catWithContent = cat.subcategorias.reduce((a, s) => a + s.topicos.filter(t => t.hasContent).length, 0);
          const isOpen = openCat === cat.id || !!q;

          return (
            <div key={cat.id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenCat(isOpen && !q ? null : cat.id)}
                className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-secondary/30 transition-colors"
              >
                <span className="text-xl flex-shrink-0">{cat.icon}</span>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm text-foreground">{cat.label}</p>
                  <p className="text-xs text-muted-foreground">{catWithContent}/{catTotal} com conteúdo</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${catTotal ? (catWithContent/catTotal)*100 : 0}%` }} />
                  </div>
                  {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="border-t border-border divide-y divide-border/50">
                      {filtered.map(top => (
                        <div key={top.id} className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/20 transition-colors group">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${top.hasContent ? 'bg-green-400' : 'bg-border'}`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground">{top.label}</p>
                            <p className="text-xs text-muted-foreground">{top.subLabel}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {top.hasContent
                              ? <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">✓ indexado</span>
                              : <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">pendente</span>
                            }
                            <button
                              onClick={() => onEditConduta(top, cat)}
                              className="opacity-0 group-hover:opacity-100 text-xs font-semibold text-primary px-2.5 py-1 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all"
                            >
                              {top.hasContent ? 'Editar' : '+ Conteúdo'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
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
      const data = { label: form.label.trim(), icon: form.icon, color: form.color, categoria_id: slugify(form.label), subcategorias: form.subcategorias };
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
    } catch { show('Erro ao salvar', 'error'); }
    finally { setSaving(false); }
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
          <Plus className="w-3.5 h-3.5" /> Nova
        </button>
      </div>

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
              <button onClick={() => startEdit(cat)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"><Edit3 className="w-3.5 h-3.5" /></button>
              <button onClick={() => handleDelete(cat.id)} className="p-2 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>

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
              <input value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} placeholder="Ex: Ortopedia Pediátrica"
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
                    <button onClick={() => removeSub(i)} className="text-muted-foreground hover:text-red-500 transition-colors"><X className="w-3.5 h-3.5" /></button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={newSubLabel} onChange={e => setNewSubLabel(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSub()}
                  placeholder="Nome da subcategoria"
                  className="flex-1 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <button onClick={addSub} className="px-3 py-2 rounded-xl bg-secondary hover:bg-border text-sm font-semibold transition-all"><Plus className="w-4 h-4" /></button>
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

// ─── Section: Condutas (form) ─────────────────────────────────────────────────
function CondutasSection({ condutas, categorias, onSaved, prefill }) {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const { toast, show } = useToast();

  const emptyForm = { categoria_label: '', categoria_icon: '📋', categoria_color: 'blue', subcategoria_label: '', topico_label: '', conteudo: '', imagens: [], is_custom: true };
  const [form, setForm] = useState(emptyForm);

  // Open form with prefill from Índice
  useEffect(() => {
    if (prefill) {
      const cat = prefill.cat;
      // Find existing DB entry
      const existing = condutas.find(c =>
        slugify(c.topico_label || '') === slugify(prefill.topico.label) &&
        slugify(c.categoria_label || '') === slugify(cat.label)
      );
      if (existing) {
        startEdit(existing);
      } else {
        setForm({
          ...emptyForm,
          categoria_label: cat.label,
          categoria_icon: cat.icon,
          categoria_color: cat.color,
          topico_label: prefill.topico.label,
          subcategoria_label: prefill.topico.subLabel || '',
        });
        setEditId(null);
        setShowForm(true);
      }
    }
  }, [prefill]);

  // Merge static condutas categories + custom DB categories
  const allCatOptions = useMemo(() => {
    const staticCats = CONDUTAS_CATEGORIAS.map(c => ({ id: c.id, label: c.label, icon: c.icon, color: c.color, subcategorias: c.subcategorias.map(s => ({ id: s.id, label: s.label })) }));
    const dbCats = categorias.map(c => ({ id: c.categoria_id || slugify(c.label), label: c.label, icon: c.icon, color: c.color, subcategorias: c.subcategorias || [] }));
    const merged = [...staticCats];
    dbCats.forEach(dc => { if (!merged.find(m => m.label === dc.label)) merged.push(dc); });
    return merged;
  }, [categorias]);
  const selectedCat = allCatOptions.find(c => c.label === form.categoria_label);

  const startEdit = (c) => {
    setForm({ categoria_label: c.categoria_label || '', categoria_icon: c.categoria_icon || '📋', categoria_color: c.categoria_color || 'blue', subcategoria_label: c.subcategoria_label || '', topico_label: c.topico_label || '', conteudo: c.conteudo || '', imagens: c.imagens || [], is_custom: true });
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
    } catch { show('Erro ao enviar imagem', 'error'); }
    finally { setUploadingImg(false); }
  };

  const removeImage = (url) => setForm(f => ({ ...f, imagens: f.imagens.filter(u => u !== url) }));

  const handleSave = async () => {
    if (!form.topico_label.trim() || !form.categoria_label.trim()) return;
    setSaving(true);
    try {
      const cat = allCatOptions.find(c => c.label === form.categoria_label);
      const data = { ...form, categoria_id: cat ? (cat.categoria_id || slugify(cat.label)) : slugify(form.categoria_label), categoria_icon: cat?.icon || form.categoria_icon, categoria_color: cat?.color || form.categoria_color, subcategoria_id: form.subcategoria_label ? slugify(form.subcategoria_label) : '', topico_id: slugify(form.topico_label) };
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
    } catch { show('Erro ao salvar', 'error'); }
    finally { setSaving(false); }
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
        <h2 className="text-base font-bold text-foreground flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> Condutas Cadastradas</h2>
        <button onClick={() => { setShowForm(true); setEditId(null); setForm(emptyForm); }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all">
          <Plus className="w-3.5 h-3.5" /> Nova
        </button>
      </div>

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
            <div className="flex items-center gap-2">
              {c.conteudo && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✓ MD</span>}
              {c.imagens?.length > 0 && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.imagens.length} img</span>}
              <button onClick={() => startEdit(c)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"><Edit3 className="w-3.5 h-3.5" /></button>
              <button onClick={() => handleDelete(c.id)} className="p-2 rounded-lg hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-secondary/30 border border-border rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold">{editId ? 'Editar Conduta' : 'Nova Conduta'}</h3>
              <button onClick={() => setShowForm(false)}><X className="w-4 h-4 text-muted-foreground" /></button>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Categoria *</label>
              {allCatOptions.length > 0 ? (
                <select value={form.categoria_label}
                  onChange={e => { const cat = allCatOptions.find(c => c.label === e.target.value); setForm(f => ({ ...f, categoria_label: e.target.value, categoria_icon: cat?.icon || '📋', categoria_color: cat?.color || 'blue', subcategoria_label: '' })); }}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                  <option value="">— Selecionar —</option>
                  {allCatOptions.map(c => <option key={c.id || c.label} value={c.label}>{c.icon} {c.label}</option>)}
                </select>
              ) : (
                <input value={form.categoria_label} onChange={e => setForm(f => ({ ...f, categoria_label: e.target.value }))} placeholder="Nome da categoria"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Subcategoria</label>
              {selectedCat?.subcategorias?.length > 0 ? (
                <select value={form.subcategoria_label} onChange={e => setForm(f => ({ ...f, subcategoria_label: e.target.value }))}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                  <option value="">— Sem subcategoria —</option>
                  {selectedCat.subcategorias.map(s => <option key={s.id} value={s.label}>{s.label}</option>)}
                </select>
              ) : (
                <input value={form.subcategoria_label} onChange={e => setForm(f => ({ ...f, subcategoria_label: e.target.value }))} placeholder="Subcategoria (opcional)"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Tópico / Título *</label>
              <input value={form.topico_label} onChange={e => setForm(f => ({ ...f, topico_label: e.target.value }))} placeholder="Ex: Pneumonia Adquirida na Comunidade"
                className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Arquivo Markdown (.md)</label>
              <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer transition-all text-sm text-muted-foreground hover:text-primary font-medium">
                <FileText className="w-4 h-4" /> Carregar arquivo .md
                <input type="file" accept=".md,.txt" onChange={handleMdFile} className="hidden" />
              </label>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Conteúdo Markdown</label>
                <span className="text-xs text-muted-foreground">{form.conteudo.length} chars</span>
              </div>
              <textarea value={form.conteudo} onChange={e => setForm(f => ({ ...f, conteudo: e.target.value }))}
                rows={10}
                placeholder={"## Título\n\nConteúdo em Markdown...\n\n| Col 1 | Col 2 |\n|---|---|\n| Valor | Valor |"}
                className="w-full border border-border rounded-xl px-3 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y bg-white leading-relaxed" />
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Imagens</label>
              <label className={`flex items-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer transition-all text-sm text-muted-foreground hover:text-primary font-medium ${uploadingImg ? 'opacity-50 pointer-events-none' : ''}`}>
                {uploadingImg ? <><div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" /> Enviando...</> : <><Image className="w-4 h-4" /> Adicionar imagem</>}
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploadingImg} />
              </label>
              {form.imagens?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.imagens.map((url, i) => (
                    <div key={i} className="relative group">
                      <img src={url} alt="" className="w-20 h-20 object-cover rounded-lg border border-border" />
                      <button onClick={() => removeImage(url)} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
  const [tab, setTab] = useState('indice');
  const [categorias, setCategorias] = useState([]);
  const [condutas, setCondutas] = useState([]);
  const [condutasPrefill, setCondutasPrefill] = useState(null);

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

  const handleEditFromIndice = (topico, cat) => {
    setCondutasPrefill({ topico, cat });
    setTab('condutas');
  };

  if (loading) return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;

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

  const totalTopicos = CONDUTAS_CATEGORIAS.reduce((acc, cat) => acc + cat.subcategorias.reduce((a, s) => a + s.topicos.length, 0), 0);
  const withContent = condutas.filter(c => c.conteudo?.trim()).length;

  const TABS = [
    { id: 'indice',     label: 'Índice',       icon: BarChart2 },
    { id: 'condutas',   label: 'Condutas',     icon: BookOpen },
    { id: 'protocolos', label: 'Protocolos',   icon: FlaskConical },
    { id: 'links',      label: 'Links',        icon: LinkIcon },
    { id: 'preview',    label: 'Preview',      icon: Eye },
    { id: 'categorias', label: 'Categorias',   icon: FolderOpen },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-slate-800 to-slate-950 text-white rounded-2xl p-6 mb-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1.5">Painel de Controle</p>
          <h1 className="text-2xl font-extrabold">Administração · PedBox</h1>
          <p className="text-white/50 text-sm mt-1">Gerencie protocolos, condutas, links e categorias</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              { label: 'Condutas', val: condutas.length, color: 'bg-blue-500/20 text-blue-300' },
              { label: 'Com conteúdo', val: withContent, color: 'bg-green-500/20 text-green-300' },
              { label: 'Categorias', val: categorias.length, color: 'bg-purple-500/20 text-purple-300' },
            ].map(s => (
              <span key={s.label} className={`text-xs font-bold px-3 py-1 rounded-full ${s.color}`}>
                {s.val} {s.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-extrabold text-primary">{categorias.length}</p>
          <p className="text-xs text-muted-foreground mt-1">Categorias</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-extrabold text-primary">{condutas.length}</p>
          <p className="text-xs text-muted-foreground mt-1">Condutas DB</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-extrabold text-green-600">{withContent}</p>
          <p className="text-xs text-muted-foreground mt-1">Com conteúdo</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-extrabold text-amber-500">{totalTopicos - withContent}</p>
          <p className="text-xs text-muted-foreground mt-1">Pendentes</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 mb-6 bg-secondary/40 p-1 rounded-xl flex-wrap">
        {TABS.map(t => {
          const Icon = t.icon;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all min-w-fit ${tab === t.id ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
              <Icon className="w-3.5 h-3.5" /> {t.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {tab === 'indice' && (
          <motion.div key="indice" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <IndiceSection condutas={condutas} categorias={categorias} onEditConduta={handleEditFromIndice} />
          </motion.div>
        )}
        {tab === 'condutas' && (
          <motion.div key="conds" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CondutasSection condutas={condutas} categorias={categorias} onSaved={loadData} prefill={condutasPrefill} />
          </motion.div>
        )}
        {tab === 'preview' && (
          <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <p className="text-xs text-amber-800 font-medium">Modo admin — todos os tópicos visíveis, incluindo sem conteúdo.</p>
            </div>
            <CondutasTab isAdmin={true} />
          </motion.div>
        )}
        {tab === 'protocolos' && (
          <motion.div key="protos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProtocolosAdminSection />
          </motion.div>
        )}
        {tab === 'links' && (
          <motion.div key="links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LinksAdminSection />
          </motion.div>
        )}
        {tab === 'categorias' && (
          <motion.div key="cats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CategoriasSection categorias={categorias} onSaved={loadData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}