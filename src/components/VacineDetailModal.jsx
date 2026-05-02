import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VacineDetailModal({ vacina, isOpen, onClose }) {
  if (!isOpen || !vacina) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{vacina.nome}</h2>
              <p className="text-blue-100 text-sm mt-1">💉 {vacina.idade}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* O que Previne */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                🛡️ O que Previne
              </h3>
              <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.previne}</p>
            </div>

            {/* Composição */}
            {vacina.composicao && (
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  🔬 Do que é Feita
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.composicao}</p>
              </div>
            )}

            {/* Indicação */}
            {vacina.indicacao && (
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  ✅ Indicação
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.indicacao}</p>
              </div>
            )}

            {/* Contraindicação */}
            {vacina.contraindicacao && (
              <div>
                <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                  ⚠️ Contraindicação
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.contraindicacao}</p>
              </div>
            )}

            {/* Esquema */}
            {vacina.esquema && (
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  📋 Esquema
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.esquema}</p>
              </div>
            )}

            {/* Via */}
            {vacina.via && (
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  💉 Via de Administração
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.via}</p>
              </div>
            )}

            {/* Efeitos Adversos */}
            {vacina.efeitosAdversos && (
              <div>
                <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                  ⚡ Efeitos Adversos
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.efeitosAdversos}</p>
              </div>
            )}

            {/* Onde Encontrar */}
            {vacina.ondeEncontrar && (
              <div>
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                  📍 Onde Encontrar
                </h3>
                <p className="text-foreground dark:text-slate-300 leading-relaxed">{vacina.ondeEncontrar}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 dark:bg-slate-700 px-6 py-4 border-t border-slate-200 dark:border-slate-600">
            <button
              onClick={onClose}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}