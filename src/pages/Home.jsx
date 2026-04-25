import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_CATEGORIES } from '@/lib/drugData';
import { Droplets, Calculator, ChevronRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryColorMap = {
  'red-500': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-500', grad: 'from-red-500' },
  'purple-500': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-500', grad: 'from-purple-500' },
  'orange-500': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-500', grad: 'from-orange-500' },
  'green-500': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-500', grad: 'from-green-500' },
  'cyan-500': { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-500', grad: 'from-cyan-500' },
  'lime-500': { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-500', grad: 'from-lime-500' },
  'yellow-500': { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-500', grad: 'from-yellow-500' },
  'red-400': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-400', grad: 'from-red-400' },
  'teal-600': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', grad: 'from-teal-600' },
  'blue-500': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-500', grad: 'from-blue-500' },
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <span>👶</span> Pediátricas
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
          Quando eles chegarem:<br />
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">PedAjuda!</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          Calculadora de doses pediátricas e hidratação venosa para médicos e profissionais de saúde.
        </p>
      </motion.div>

      {/* Aviso */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-sm text-amber-800"
      >
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Uso profissional:</strong> Este conteúdo foi desenvolvido por estudantes de medicina, revisado por pediatras, baseado nas principais referências da área. Não deve ser utilizado por leigos.
        </p>
      </motion.div>

      {/* Quick access cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Link to="/calculadora">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-200 flex items-center justify-between cursor-pointer"
          >
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Ferramenta</p>
              <h2 className="text-xl font-bold">Calculadora de Doses</h2>
              <p className="text-blue-100 text-sm mt-1">{ALL_CATEGORIES.reduce((acc, c) => acc + c.drugs.length, 0)} medicamentos</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3">
              <Calculator className="w-7 h-7 text-white" />
            </div>
          </motion.div>
        </Link>

        <Link to="/hidratacao">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-5 text-white shadow-lg shadow-cyan-200 flex items-center justify-between cursor-pointer"
          >
            <div>
              <p className="text-cyan-100 text-sm font-medium mb-1">Ferramenta</p>
              <h2 className="text-xl font-bold">Hidratação Venosa</h2>
              <p className="text-cyan-100 text-sm mt-1">Expansão + Manutenção</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3">
              <Droplets className="w-7 h-7 text-white" />
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Categories grid */}
      <h2 className="text-lg font-bold text-foreground mb-4">Categorias de Medicamentos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {ALL_CATEGORIES.map((cat, i) => {
          const colors = categoryColorMap[cat.color] || categoryColorMap['blue-500'];
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link to={`/calculadora?categoria=${cat.id}`}>
                <div className={`${colors.bg} ${colors.border} border rounded-2xl p-4 flex flex-col items-center gap-2 text-center cursor-pointer hover:shadow-md transition-all group`}>
                  <span className="text-2xl">{cat.icon}</span>
                  <p className={`text-xs font-semibold ${colors.text} leading-tight`}>{cat.label.toUpperCase()}</p>
                  <span className="text-xs text-muted-foreground">{cat.drugs.length} med.</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}