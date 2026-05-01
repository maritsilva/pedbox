import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets, AlertTriangle, Search, Activity, Scale, ChevronRight, BookOpen, FlaskConical, Microscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs } from '@/lib/guideData';

const CALCULATORS = [
  { label: 'Hidratação Venosa', desc: 'Expansão volêmica e manutenção', path: '/hidratacao', Icon: Droplets, keywords: ['hidratação', 'venosa', 'soro', 'holliday'] },
  { label: 'IMC Pediátrico', desc: 'Curvas de crescimento e percentis', path: '/imc', Icon: Scale, keywords: ['imc', 'massa', 'corporal', 'peso', 'altura'] },
  { label: 'PA Pediátrica', desc: 'Pressão arterial por idade e sexo', path: '/pressao-arterial', Icon: Activity, keywords: ['pressão', 'arterial', 'hipertensão'] },
];

const ALL_SEARCH = [
  { label: 'Guia de Medicamentos', desc: 'Doses, preparo e apresentações', path: '/guia', Icon: BookOpen, keywords: ['guia', 'doses', 'medicamentos', 'antibióticos', 'drogas'] },
  { label: 'Protocolos Clínicos', desc: 'Diretrizes por condição', path: '/protocolos', Icon: FlaskConical, keywords: ['protocolo', 'asma', 'bronquiolite', 'febre', 'diarreia', 'faringoamigdalite'] },
  { label: 'PedResearch', desc: 'Pesquisa e evidências científicas', path: '/pesquisa', Icon: Microscope, keywords: ['pesquisa', 'evidência', 'estudo', 'guideline', 'publicação', 'artigo'] },
  ...CALCULATORS,
];

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchResults = search.trim().length > 1
    ? [
        ...ALL_SEARCH.filter(t =>
          t.label.toLowerCase().includes(search.toLowerCase()) ||
          t.keywords.some(k => k.includes(search.toLowerCase()))
        ).map(t => ({ ...t, type: 'tool' })),
        ...getAllGuideDrugs()
          .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
          .slice(0, 6)
          .map(d => ({ label: d.name, desc: d.catLabel, path: `/guia?drug=${d.id}`, catIcon: d.catIcon, type: 'drug' })),
      ]
    : [];

  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-7">

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <img
          src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
          alt="PedBox"
          className="h-16 w-auto mx-auto mb-3"
        />
        <p className="text-muted-foreground text-sm">Referência clínica rápida para o plantão pediátrico.</p>
        <span className="mt-3 inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
          🩺 Feito de residente para residente
        </span>
      </motion.div>

      {/* Disclaimer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }}
        className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p>Conteúdo desenvolvido por médicos em formação, revisado por pediatras e baseado nas principais referências da área.</p>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar medicamento, protocolo ou ferramenta..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-border rounded-xl pl-10 pr-4 py-3 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-30">
              {searchResults.map((r, i) => (
                <button key={i} onClick={() => { navigate(r.path); setSearch(''); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-0">
                  <div className="text-primary flex-shrink-0">
                    {r.type === 'drug' ? <span className="text-lg">{r.catIcon}</span> : r.Icon ? <r.Icon className="w-4 h-4" /> : null}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{r.label}</p>
                    <p className="text-xs text-muted-foreground truncate">{r.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {search.trim().length > 1 && searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg px-4 py-3 z-30">
            <p className="text-sm text-muted-foreground">Nenhum resultado para "<strong>{search}</strong>"</p>
          </div>
        )}
      </motion.div>

      {/* Main References — destacadas */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Referências Clínicas</p>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/guia">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-4 text-white shadow-lg shadow-blue-200 flex flex-col gap-3 h-full cursor-pointer">
              <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Guia de Medicamentos</p>
                <p className="text-blue-100 text-xs mt-1 leading-snug">Doses, preparo e apresentações por categoria</p>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                Acessar <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          </Link>

          <Link to="/protocolos">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl p-4 text-white shadow-lg shadow-purple-200 flex flex-col gap-3 h-full cursor-pointer">
              <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Protocolos Clínicos</p>
                <p className="text-violet-100 text-xs mt-1 leading-snug">Diretrizes e fluxogramas por condição</p>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                Acessar <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          </Link>
        </div>

        <Link to="/pesquisa">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="mt-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 text-white shadow-lg shadow-emerald-100 flex items-center gap-4 cursor-pointer">
            <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base leading-tight">PedResearch IA</p>
              <p className="text-emerald-100 text-xs mt-0.5 leading-snug">Busque evidências, guidelines e estudos recentes</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Calculators */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Calculadoras</p>
        <div className="space-y-2">
          {CALCULATORS.map((tool, i) => (
            <Link to={tool.path} key={tool.path}>
              <div className="bg-white border border-border rounded-xl px-4 py-3.5 flex items-center gap-3 hover:shadow-sm hover:border-primary/30 transition-all group">
                <div className="text-primary bg-primary/10 rounded-lg p-2 flex-shrink-0">
                  <tool.Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{tool.label}</p>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

    </div>
  );
}