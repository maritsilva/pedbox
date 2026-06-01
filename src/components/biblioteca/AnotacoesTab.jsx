import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, StickyNote, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const COR_STYLES = {
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900', dot: 'bg-yellow-400', label: 'Amarelo' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-900',   dot: 'bg-blue-400',   label: 'Azul' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-900',  dot: 'bg-green-400',  label: 'Verde' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-900',   dot: 'bg-pink-400',   label: 'Rosa' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-900', dot: 'bg-purple-400', label: 'Roxo' },
};

function AnotacaoForm({ initial, onSave, onCancel }) {
  const [titulo, setTitulo] = useState(initial?.titulo || '');
  const [conteudo, setConteudo] = useState(initial?.conteudo || '');
  const [cor, setCor] = useState(initial?.cor || 'yellow');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    onSave({ titulo, conteudo, cor });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white border border-primary/30 rounded-2xl p-5 mb-5 shadow-sm space-y-3"
    >
      <p className="font-bold text-sm text-foreground">{initial ? 'Editar anotação' : 'Nova anotação'}</p>
      <input
        value={titulo} onChange={e => setTitulo(e.target.value)}
        placeholder="Título *"
        className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        required
      />
      <textarea
        value={conteudo} onChange={e => setConteudo(e.target.value)}
        placeholder="Conteúdo da anotação..."
        rows={4}
        className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
      />
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground font-medium">Cor:</span>
        {Object.entries(COR_STYLES).map(([key, style]) => (
          <button
            key={key} type="button"
            onClick={() => setCor(key)}
            className={`w-6 h-6 rounded-full ${style.dot} transition-all ${cor === key ? 'ring-2 ring-offset-2 ring-primary scale-110' : 'opacity-70 hover:opacity-100'}`}
          />
        ))}
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

export default function AnotacoesTab() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    base44.auth.me().then(u => {
      setUser(u);
      if (u) {
        base44.entities.Anotacao.filter({ created_by_id: u.id }, '-created_date').then(data => {
          setAnotacoes(data);
          setLoading(false);
        }).catch(() => setLoading(false));
      } else {
        setLoading(false);
      }
    }).catch(() => setLoading(false));
  }, []);

  const handleSave = async (data) => {
    if (editing) {
      await base44.entities.Anotacao.update(editing.id, data);
      setAnotacoes(prev => prev.map(a => a.id === editing.id ? { ...a, ...data } : a));
      setEditing(null);
    } else {
      const created = await base44.entities.Anotacao.create(data);
      setAnotacoes(prev => [created, ...prev]);
      setShowForm(false);
    }
  };

  const handleDelete = async (id) => {
    await base44.entities.Anotacao.delete(id);
    setAnotacoes(prev => prev.filter(a => a.id !== id));
  };

  if (loading) return <div className="py-16 text-center text-muted-foreground text-sm">Carregando...</div>;

  if (!user) {
    return (
      <div className="py-16 text-center bg-white border border-border rounded-2xl">
        <StickyNote className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
        <p className="font-semibold text-foreground">Faça login para ver suas anotações</p>
        <button onClick={() => base44.auth.redirectToLogin()} className="mt-4 px-5 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5">
        {showForm ? (
          <AnotacaoForm onSave={handleSave} onCancel={() => setShowForm(false)} />
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> Nova anotação
          </button>
        )}
      </div>

      {editing && (
        <AnotacaoForm initial={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
      )}

      {anotacoes.length === 0 ? (
        <div className="py-16 text-center bg-white border border-border rounded-2xl">
          <StickyNote className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="font-semibold text-foreground">Nenhuma anotação ainda</p>
          <p className="text-sm text-muted-foreground mt-1">Clique em "Nova anotação" para começar.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {anotacoes.map(a => {
              const style = COR_STYLES[a.cor] || COR_STYLES.yellow;
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  className={`${style.bg} ${style.border} border rounded-2xl p-4 flex flex-col gap-2 group relative shadow-sm`}
                >
                  <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => { setEditing(a); setShowForm(false); }} className="p-1.5 rounded-lg hover:bg-white/70 transition-colors">
                      <Edit2 className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                    <button onClick={() => handleDelete(a.id)} className="p-1.5 rounded-lg hover:bg-white/70 transition-colors">
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                    </button>
                  </div>
                  <p className={`font-bold text-sm ${style.text} pr-14`}>{a.titulo}</p>
                  {a.conteudo && (
                    <p className={`text-xs ${style.text} opacity-80 leading-relaxed whitespace-pre-line`}>{a.conteudo}</p>
                  )}
                  <p className="text-[10px] text-muted-foreground mt-auto pt-2 border-t border-current/10">
                    {new Date(a.created_date).toLocaleDateString('pt-BR')}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}