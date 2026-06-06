import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageLightbox({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setScale(s => Math.min(s + 0.25, 4));
      if (e.key === '-') setScale(s => Math.max(s - 0.25, 0.5));
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex flex-col"
        onClick={onClose}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={e => e.stopPropagation()}>
          <p className="text-white/70 text-xs truncate max-w-xs">{alt}</p>
          <div className="flex items-center gap-2">
            <button onClick={() => setScale(s => Math.max(s - 0.25, 0.5))} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-white text-xs font-mono w-12 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.min(s + 0.25, 4))} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
              <ZoomIn className="w-4 h-4" />
            </button>
            <button onClick={() => setScale(1)} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image container */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
          <motion.img
            src={src}
            alt={alt}
            animate={{ scale }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="max-w-none rounded-lg shadow-2xl cursor-zoom-in select-none"
            style={{ maxWidth: scale === 1 ? '100%' : 'none', maxHeight: scale === 1 ? '100%' : 'none' }}
            onClick={() => setScale(s => s === 1 ? 2 : 1)}
            draggable={false}
          />
        </div>

        <p className="text-white/40 text-xs text-center pb-3 flex-shrink-0">
          Clique na imagem para ampliar · ESC para fechar · +/- para zoom
        </p>
      </motion.div>
    </AnimatePresence>
  );
}