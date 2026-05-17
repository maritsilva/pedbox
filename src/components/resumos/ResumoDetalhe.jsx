import React from 'react';
import { ChevronLeft, BookMarked, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIA_COLORS = {
  'Infectologia': { bg: 'from-orange-500 to-orange-600', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800 border-orange-200' },
  'Nutrição': { bg: 'from-green-500 to-green-600', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100 text-green-800 border-green-200' },
  'Gastroenterologia': { bg: 'from-teal-500 to-teal-600', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-800 border-teal-200' },
  'Neurodesenvolvimento': { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800 border-purple-200' },
  'Respiratório': { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
  'Endocrinologia': { bg: 'from-yellow-500 to-amber-500', light: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  'Neurologia': { bg: 'from-indigo-500 to-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  'Nefrologia': { bg: 'from-cyan-500 to-cyan-600', light: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  'Emergência': { bg: 'from-red-500 to-red-600', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-800 border-red-200' },
  'Social': { bg: 'from-pink-500 to-pink-600', light: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', badge: 'bg-pink-100 text-pink-800 border-pink-200' },
};

const SECTION_HEADER_COLORS = {
  blue: 'bg-blue-600 text-white',
  red: 'bg-red-600 text-white',
  green: 'bg-green-600 text-white',
  amber: 'bg-amber-500 text-white',
  purple: 'bg-purple-600 text-white',
  orange: 'bg-orange-500 text-white',
  pink: 'bg-pink-500 text-white',
  indigo: 'bg-indigo-600 text-white',
  teal: 'bg-teal-600 text-white',
  gray: 'bg-gray-500 text-white',
  cyan: 'bg-cyan-600 text-white',
};

const SECTION_BODY_COLORS = {
  blue: 'bg-blue-50 border-blue-100',
  red: 'bg-red-50 border-red-100',
  green: 'bg-green-50 border-green-100',
  amber: 'bg-amber-50 border-amber-100',
  purple: 'bg-purple-50 border-purple-100',
  orange: 'bg-orange-50 border-orange-100',
  pink: 'bg-pink-50 border-pink-100',
  indigo: 'bg-indigo-50 border-indigo-100',
  teal: 'bg-teal-50 border-teal-100',
  gray: 'bg-gray-50 border-gray-100',
  cyan: 'bg-cyan-50 border-cyan-100',
};

export default function ResumoDetalhe({ resumo, onBack }) {
  const catMeta = CATEGORIA_COLORS[resumo.categoria] || CATEGORIA_COLORS['Infectologia'];

  return (
    <div className="max-w-3xl mx-auto px-4 pb-12 pt-4">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Todos os Resumos
      </button>

      {/* Hero header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-br ${catMeta.bg} rounded-2xl p-6 text-white mb-6 shadow-lg`}
      >
        <div className="flex items-start gap-4">
          <span className="text-5xl">{resumo.emoji}</span>
          <div className="flex-1 min-w-0">
            <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 mb-2">
              {resumo.categoria}
            </span>
            <h1 className="text-2xl font-extrabold leading-tight">{resumo.titulo}</h1>
            <p className="text-white/80 text-sm mt-1">{resumo.subtitulo}</p>
            <p className="text-white/60 text-xs mt-3 border-t border-white/20 pt-3">
              {resumo.seções.length} {resumo.seções.length === 1 ? 'seção' : 'seções'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-4">
        {resumo.seções.map((seção, idx) => {
          const headerClass = SECTION_HEADER_COLORS[seção.color] || SECTION_HEADER_COLORS.blue;
          const bodyClass = SECTION_BODY_COLORS[seção.color] || SECTION_BODY_COLORS.blue;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Section header */}
              <div className={`px-4 py-3 ${headerClass}`}>
                <p className="font-bold text-sm">{seção.nome}</p>
              </div>
              {/* Section body */}
              <div className={`px-4 py-4 ${bodyClass} border-t`}>
                <p className="text-sm text-gray-800 leading-relaxed">{seção.conteudo}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* References */}
      {resumo.referencia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-4"
        >
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-1">Referências</p>
              <p className="text-xs text-muted-foreground italic leading-relaxed">{resumo.referencia}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}