import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ALL_CATEGORIES } from '@/lib/drugData';
import { Droplets, Calculator, AlertTriangle, Search, Activity, Scale, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TOOLS = [
  { label: 'Calculadora de Doses', desc: 'Doses de medicamentos pediátricos por peso', path: '/calculadora', icon: <Calculator className="w-5 h-5" />, keywords: ['calculadora', 'doses', 'medicamentos', 'drogas', 'remédios'] },
  { label: 'Hidratação Venosa', desc: 'Expansão volêmica e manutenção (Holliday-Segar)', path: '/hidratacao', icon: <Droplets className="w-5 h-5" />, keywords: ['hidratação', 'hidratacao', 'venosa', 'expansão', 'soro', 'manutencao', 'holliday'] },
  { label: 'IMC Pediátrico', desc: 'Índice de massa corporal e curvas de crescimento', path: '/imc', icon: <Scale className="w-5 h-5" />, keywords: ['imc', 'índice', 'massa', 'corporal', 'crescimento', 'peso', 'altura'] },
  { label: 'PA Pediátrica', desc: 'Pressão arterial e percentis por idade e sexo', path: '/pressao-arterial', icon: <Activity className="w-5 h-5" />, keywords: ['pressão', 'pressao', 'arterial', 'hipertensão', 'pa'] },
];

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
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchResults = search.trim().length > 0
    ? [
        ...TOOLS.filter(t =>
          t.label.toLowerCase().includes(search.toLowerCase()) ||
          t.keywords.some(k => k.includes(search.toLowerCase()))
        ),
        ...ALL_CATEGORIES
          .filter(c => c.label.toLowerCase().includes(search.toLowerCase()))
          .map(c => ({ label: c.label, desc: `${c.drugs.length} medicamentos`, path: `/calculadora?categoria=${c.id}`, icon: <span className="text-lg">{c.icon}</span>, keywords: [] })),
        ...ALL_CATEGORIES.flatMap(cat =>
          cat.drugs
            .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
            .map(d => ({ label: d.name, desc: cat.label, path: `/calculadora?categoria=${cat.id}&drug=${d.id}`, icon: <span className="text-lg">{cat.icon}</span>, keywords: [] }))
        ).slice(0, 8),
      ]
    : [];

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
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">PedBox</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          Calculadora de doses pediátricas, hidratação venosa, IMC e pressão arterial para profissionais de saúde.
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

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative mb-8"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar ferramenta... (ex: IMC, Hidratação, Pressão)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-border rounded-2xl pl-11 pr-4 py-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-2xl shadow-lg overflow-hidden z-30"
            >
              {searchResults.map((r, i) => (
                <button
                  key={i}
                  onClick={() => { navigate(r.path); setSearch(''); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-0"
                >
                  <div className="text-primary flex-shrink-0">{r.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.label}</p>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {search.trim().length > 0 && searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-2xl shadow-lg px-4 py-3 z-30">
            <p className="text-sm text-muted-foreground">Nenhum resultado para "<strong>{search}</strong>"</p>
          </div>
        )}
      </motion.div>

      {/* Quick access cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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