import React, { useState } from 'react';
import { X, Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ICONS = ['📋', '🏥', '💊', '🧬', '❤️', '🧠', '🫁', '🩸', '🫘', '🌡️', '⚕️', '🔬', '👶', '🌱', '🦠', '🧪', '🩺', '🚑', '💉', '🔪'];
const COLORS = [
  { id: 'blue', label: 'Azul', cls: 'bg-blue-500' },
  { id: 'cyan', label: 'Ciano', cls: 'bg-cyan-500' },
  { id: 'green', label: 'Verde', cls: 'bg-green-500' },
  { id: 'teal', label: 'Verde-azulado', cls: 'bg-teal-500' },
  { id: 'purple', label: 'Roxo', cls: 'bg-purple-500' },
  { id: 'red', label: 'Vermelho', cls: 'bg-red-500' },
  { id: 'orange', label: 'Laranja', cls: 'bg-orange-500' },
];

export default function NovaCategoriaModal({ onClose, onAdd }) {
  const [label, setLabel] = useState('');
  const [icon, setIcon] = useState('📋');
  const [color, setColor] = useState('blue');

  const handleAdd = () => {
    if (!label.trim()) return;
    onAdd({
      id: label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      label: label.trim(),
      icon,
      color,
      subcategorias: [],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm"
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-base font-bold text-foreground">Nova Categoria</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Nome</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Ex: Ortopedia Pediátrica"
              className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Ícone</label>
            <div className="flex flex-wrap gap-2">
              {ICONS.map((ic) => (
                <button
                  key={ic}
                  onClick={() => setIcon(ic)}
                  className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center transition-all ${icon === ic ? 'bg-primary ring-2 ring-primary ring-offset-1' : 'bg-secondary hover:bg-secondary/80'}`}
                >
                  {ic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Cor</label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  title={c.label}
                  className={`w-8 h-8 rounded-full ${c.cls} transition-all flex items-center justify-center ${color === c.id ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : 'opacity-70 hover:opacity-100'}`}
                >
                  {color === c.id && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-secondary/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-2">Prévia:</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-xl">
                {icon}
              </div>
              <p className="text-sm font-bold text-foreground">{label || 'Nome da Categoria'}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 p-5 border-t border-border">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-secondary">
            Cancelar
          </button>
          <button
            onClick={handleAdd}
            disabled={!label.trim()}
            className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Criar
          </button>
        </div>
      </motion.div>
    </div>
  );
}