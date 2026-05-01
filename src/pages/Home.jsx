import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets, AlertTriangle, Search, Activity, Scale, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs, GUIDE_CATEGORIES } from '@/lib/guideData';

const TOOLS = [
  { label: 'Guia de Doses', desc: 'Guia clínico de medicamentos pediátricos', path: '/guia', Icon: BookOpen, keywords: ['guia', 'doses', 'medicamentos', 'drogas', 'remédios', 'antibióticos'] },
  { label: 'Hidratação Venosa', desc: 'Expansão volêmica e manutenção (Holliday-Segar)', path: '/hidratacao', Icon: Droplets, keywords: ['hidratação', 'hidratacao', 'venosa', 'expansão', 'soro', 'manutencao', 'holliday'] },
  { label: 'IMC Pediátrico', desc: 'Índice de massa corporal e curvas de crescimento', path: '/imc', Icon: Scale, keywords: ['imc', 'índice', 'massa', 'corporal', 'crescimento', 'peso', 'altura'] },
  { label: 'PA Pediátrica', desc: 'Pressão arterial e percentis por idade e sexo', path: '/pressao-arterial', Icon: Activity, keywords: ['pressão', 'pressao', 'arterial', 'hipertensão', 'pa'] },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchResults = search.trim().length > 1
    ? [
        ...TOOLS.filter(t =>
          t.label.toLowerCase().includes(search.toLowerCase()) ||
          t.keywords.some(k => k.includes(search.toLowerCase()))
        ).map(t => ({ ...t, icon: null, type: 'tool' })),
        ...getAllGuideDrugs()
          .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
          .slice(0, 8)
          .map(d => ({
            label: d.name,
            desc: d.catLabel,
            path: `/guia?drug=${d.id}`,
            catIcon: d.catIcon,
            type: 'drug',
          })),
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
        <img
          src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
          alt="PedBox"
          className="h-20 w-auto mx-auto mb-4"
        />
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          Guia clínico de medicamentos, hidratação venosa, IMC e pressão arterial para profissionais de saúde.
        </p>
      </motion.div>

      {/* Aviso */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="text-center mb-6"
      >
        <span className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-semibold px-4 py-2 rounded-full border border-primary/20">
          <span>🩺</span> Feito de residente para residente
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-sm text-amber-800"
      >
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p>
          <strong>De residentes para residentes:</strong> Conteúdo desenvolvido por médicos em formação, revisado por pediatras e baseado nas principais referências da área. Criado para agilizar decisões clínicas na correria do plantão.
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
                  <div className="text-primary flex-shrink-0">
                    {r.type === 'drug' ? <span className="text-lg">{r.catIcon}</span> : r.Icon ? <r.Icon className="w-5 h-5" /> : null}
                  </div>
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
        <Link to="/guia">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-200 flex items-center justify-between cursor-pointer"
          >
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Ferramenta</p>
              <h2 className="text-xl font-bold">Guia de Doses</h2>
              <p className="text-blue-100 text-sm mt-1">Medicamentos e protocolos clínicos</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3">
              <BookOpen className="w-7 h-7 text-white" />
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

      {/* Tools grid */}
      <h2 className="text-lg font-bold text-foreground mb-4">Ferramentas Disponíveis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.path}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Link to={tool.path}>
              <div className="bg-white border border-border rounded-2xl p-4 flex items-center gap-3 hover:shadow-md hover:border-primary/30 transition-all group">
                <div className="text-primary bg-primary/10 rounded-xl p-2 flex-shrink-0"><tool.Icon className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{tool.label}</p>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}