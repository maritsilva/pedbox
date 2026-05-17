import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplets, Scale, Activity, Ruler, TrendingUp, Calendar,
  Microscope, Wind, ChevronRight, Search, X
} from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Escores Respiratórios',
    color: 'blue',
    icon: '🫁',
    tools: [
      {
        label: 'Wood-Downes-Ferrés',
        desc: 'Gravidade da bronquiolite em lactentes',
        path: '/wood-downes',
        Icon: Wind,
        badge: 'Score',
        badgeColor: 'bg-blue-100 text-blue-700',
      },
      {
        label: 'Score PRAM',
        desc: 'Gravidade da crise asmática (2–17 anos)',
        path: '/pram',
        Icon: Wind,
        badge: 'Score',
        badgeColor: 'bg-sky-100 text-sky-700',
      },
    ],
  },
  {
    label: 'Crescimento e Desenvolvimento',
    color: 'green',
    icon: '📏',
    tools: [
      {
        label: 'IMC Pediátrico',
        desc: 'Curvas de crescimento CDC 2000 (0–20 anos)',
        path: '/imc',
        Icon: Scale,
        badge: 'Percentil',
        badgeColor: 'bg-green-100 text-green-700',
      },
      {
        label: 'Perímetro Cefálico',
        desc: 'Avaliação do crescimento craniano (0–36 meses)',
        path: '/perimetro-cefalico',
        Icon: Ruler,
        badge: 'Percentil',
        badgeColor: 'bg-teal-100 text-teal-700',
      },
      {
        label: 'Alvo Parental',
        desc: 'Estatura esperada com base na altura dos pais',
        path: '/alvo-parental',
        Icon: TrendingUp,
        badge: 'Cálculo',
        badgeColor: 'bg-emerald-100 text-emerald-700',
      },
      {
        label: 'IG Corrigida',
        desc: 'Idade gestacional ajustada para prematuros',
        path: '/idade-gestacional-corrigida',
        Icon: Calendar,
        badge: 'Cálculo',
        badgeColor: 'bg-lime-100 text-lime-700',
      },
    ],
  },
  {
    label: 'Hemodinâmica e Fluidos',
    color: 'cyan',
    icon: '💧',
    tools: [
      {
        label: 'Hidratação Venosa',
        desc: 'Expansão volêmica e manutenção (Holliday-Segar)',
        path: '/hidratacao',
        Icon: Droplets,
        badge: 'Cálculo',
        badgeColor: 'bg-cyan-100 text-cyan-700',
      },
      {
        label: 'Pressão Arterial Pediátrica',
        desc: 'Percentis de PA por sexo, idade e estatura (AAP 2017)',
        path: '/pressao-arterial',
        Icon: Activity,
        badge: 'Percentil',
        badgeColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'Infectologia',
    color: 'purple',
    icon: '🦠',
    tools: [
      {
        label: 'Centor / McIsaac',
        desc: 'Probabilidade de faringoamigdalite estreptocócica',
        path: '/centor-mcisaac',
        Icon: Microscope,
        badge: 'Score',
        badgeColor: 'bg-purple-100 text-purple-700',
      },
    ],
  },
];

const ALL_TOOLS = CATEGORIES.flatMap(c => c.tools);

const catMeta = {
  blue:   { header: 'bg-blue-600',   light: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700'   },
  green:  { header: 'bg-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  cyan:   { header: 'bg-cyan-600',   light: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700'   },
  purple: { header: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
};

export default function CalculadorasHub() {
  const [search, setSearch] = useState('');

  const q = search.toLowerCase().trim();
  const filtered = q
    ? ALL_TOOLS.filter(t =>
        t.label.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q)
      )
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pb-16">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">🧮</span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Calculadoras Clínicas</h1>
          <p className="text-gray-500 text-sm mt-1">Ferramentas rápidas para avaliação no atendimento pediátrico</p>
        </motion.div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar calculadora…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-10 py-3.5 bg-white border-2 border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-400 transition-all shadow-sm"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>

        {/* Search results */}
        {filtered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 mb-8">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-4xl mb-2">🔍</p>
                <p className="font-semibold text-gray-600">Nenhuma calculadora encontrada</p>
              </div>
            ) : (
              filtered.map(tool => <ToolCard key={tool.path} tool={tool} />)
            )}
          </motion.div>
        )}

        {/* Categories */}
        {!filtered && (
          <div className="space-y-6">
            {CATEGORIES.map((cat, ci) => {
              const meta = catMeta[cat.color];
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ci * 0.08 }}
                  className={`bg-white rounded-2xl border-2 ${meta.border} overflow-hidden shadow-sm`}
                >
                  {/* Category header */}
                  <div className={`${meta.header} text-white px-5 py-3 flex items-center gap-2`}>
                    <span className="text-lg">{cat.icon}</span>
                    <span className="font-bold text-sm">{cat.label}</span>
                    <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      {cat.tools.length} {cat.tools.length === 1 ? 'calculadora' : 'calculadoras'}
                    </span>
                  </div>
                  {/* Tools */}
                  <div className="divide-y divide-gray-100">
                    {cat.tools.map(tool => <ToolCard key={tool.path} tool={tool} compact />)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-10">
          Ferramentas de suporte à decisão clínica · Não substituem avaliação médica individualizada
        </p>
      </div>
    </div>
  );
}

function ToolCard({ tool, compact = false }) {
  return (
    <Link to={tool.path}>
      <motion.div
        whileHover={{ backgroundColor: '#f8faff' }}
        whileTap={{ scale: 0.99 }}
        className={`flex items-center gap-4 px-5 py-4 cursor-pointer transition-colors ${!compact ? 'bg-white rounded-2xl border-2 border-gray-100 shadow-sm' : ''}`}
      >
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
          <tool.Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-800 text-sm">{tool.label}</p>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{tool.desc}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:inline ${tool.badgeColor}`}>
            {tool.badge}
          </span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>
    </Link>
  );
}