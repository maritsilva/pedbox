import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets, AlertTriangle, Search, Activity, Scale, ChevronRight, BookOpen, FlaskConical, Microscope, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs } from '@/lib/guideData';
import { useFavorites } from '@/hooks/useFavorites.jsx';

const CALCULATORS = [
  { label: 'Hidratação Venosa', desc: 'Cálculo rápido de volumes e velocidades', path: '/hidratacao', Icon: Droplets, keywords: ['hidratação', 'venosa', 'soro'] },
  { label: 'IMC Pediátrico', desc: 'Avaliação de crescimento e percentis', path: '/imc', Icon: Scale, keywords: ['imc', 'massa', 'corporal', 'peso'] },
  { label: 'PA Pediátrica', desc: 'Classificação por idade, sexo e altura', path: '/pressao-arterial', Icon: Activity, keywords: ['pressão', 'arterial', 'hipertensão'] },
];

const ALL_SEARCH = [
  { label: 'Guia de Medicamentos', desc: 'Doses, preparo e apresentações', path: '/guia', Icon: BookOpen, keywords: ['guia', 'doses', 'medicamentos'] },
  { label: 'Protocolos Clínicos', desc: 'Diretrizes por condição', path: '/protocolos', Icon: FlaskConical, keywords: ['protocolo', 'asma', 'bronquiolite'] },
  { label: 'PedResearch', desc: 'Pesquisa e evidências científicas', path: '/pesquisa', Icon: Microscope, keywords: ['pesquisa', 'evidência', 'estudo'] },
  ...CALCULATORS,
];

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState('inicio');

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

  const favoritedCalcs = CALCULATORS.filter(c => isFavorite(c.path));

  return (
    <div className="min-h-screen bg-background flex flex-col font-inter">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 px-4 sm:py-16 md:py-20 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <img
            src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
            alt="PedBox"
            className="h-16 w-auto mx-auto mb-4 md:mb-6"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 md:mb-4">PedBox</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Acesso imediato a doses, protocolos, cálculos e marcos do desenvolvimento infantil essenciais no plantão
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs sm:text-sm font-semibold px-3 py-2 rounded-full border border-primary/20">
            🩺 Por médicos em formação, para médicos em plantão
          </span>
        </div>
      </motion.section>

      {/* Disclaimer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }}
        className="max-w-4xl mx-auto px-4 mb-8 w-full"
      >
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-800">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p><strong>Ferramenta de apoio:</strong> Sempre valide informações com protocolos institucionais e supervisão. Destinado a profissionais de saúde.</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 flex-1 w-full space-y-8 pb-8">
        
        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar medicamento, protocolo ou ferramenta..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-border rounded-2xl pl-11 pr-4 py-3.5 text-sm md:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          <AnimatePresence>
            {searchResults.length > 0 && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-30 max-h-96 overflow-y-auto">
                {searchResults.map((r, i) => (
                  <button key={i} onClick={() => { navigate(r.path); setSearch(''); }}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-secondary transition-colors border-b border-border last:border-0">
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
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14 }} className="flex gap-3">
          <button
            onClick={() => setActiveTab('inicio')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'inicio'
                ? 'bg-primary text-white shadow'
                : 'bg-white border border-border text-muted-foreground hover:border-primary/40'
            }`}
          >
            Tudo
          </button>
          <button
            onClick={() => setActiveTab('favoritos')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'favoritos'
                ? 'bg-yellow-400 text-yellow-900 shadow'
                : 'bg-white border border-border text-muted-foreground hover:border-yellow-300'
            }`}
          >
            <Star className={`w-4 h-4 ${activeTab === 'favoritos' ? 'fill-yellow-900' : ''}`} />
            Favoritos
            {favoritedCalcs.length > 0 && (
              <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${activeTab === 'favoritos' ? 'bg-yellow-900/20 text-yellow-900' : 'bg-yellow-100 text-yellow-700'}`}>
                {favoritedCalcs.length}
              </span>
            )}
          </button>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'inicio' && (
            <motion.div key="inicio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              
              {/* Referências */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Referências Clínicas</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/guia">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 sm:p-6 text-white shadow-lg shadow-blue-200 flex flex-col gap-3 h-full cursor-pointer">
                      <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg sm:text-base leading-tight">Guia de Medicamentos</p>
                        <p className="text-blue-100 text-xs sm:text-sm mt-1 leading-snug">Doses, administração e apresentações organizadas</p>
                      </div>
                      <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                        Acessar <ChevronRight className="w-3 h-3" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/protocolos">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl p-5 sm:p-6 text-white shadow-lg shadow-purple-200 flex flex-col gap-3 h-full cursor-pointer">
                      <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                        <FlaskConical className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg sm:text-base leading-tight">Protocolos Clínicos</p>
                        <p className="text-violet-100 text-xs sm:text-sm mt-1 leading-snug">Fluxogramas passo a passo para situações urgentes</p>
                      </div>
                      <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                        Acessar <ChevronRight className="w-3 h-3" />
                      </div>
                    </motion.div>
                  </Link>
                </div>

                <Link to="/pesquisa">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 sm:p-6 text-white shadow-lg shadow-emerald-100 flex items-center gap-4 cursor-pointer">
                    <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0">
                      <Microscope className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-base sm:text-lg leading-tight">PedResearch IA</p>
                      <p className="text-emerald-100 text-xs sm:text-sm mt-0.5 leading-snug">Pesquisa inteligente de evidências e diretrizes</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desenvolvimento */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20 }}>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Acompanhamento</p>
                <Link to="/desenvolvimento">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-5 sm:p-6 text-white shadow-lg shadow-pink-200 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">📊</span>
                      <div>
                        <p className="font-bold text-lg sm:text-xl leading-tight mb-2">Cartilha de Desenvolvimento</p>
                        <p className="text-pink-100 text-xs sm:text-sm leading-snug">Marcos de 2 meses a 5 anos. Vigilância, sinais de alerta e orientações</p>
                        <div className="flex items-center gap-1 text-white/70 text-xs mt-3">
                          Acessar <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Calculadoras */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Calculadoras</p>
                <div className="space-y-3">
                  {CALCULATORS.map((tool, i) => (
                    <Link to={tool.path} key={tool.path}>
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="bg-white border border-border rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-primary/40 hover:shadow-sm transition-all group justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="text-primary bg-primary/10 rounded-lg p-2 flex-shrink-0 group-hover:bg-primary/20 transition">
                            <tool.Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground">{tool.label}</p>
                            <p className="text-xs text-muted-foreground">{tool.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(tool.path);
                          }}
                          className="flex-shrink-0 ml-2 p-1"
                        >
                          <Star className={`w-5 h-5 transition-all ${isFavorite(tool.path) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'}`} />
                        </button>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'favoritos' && (
            <motion.div key="favoritos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {favoritedCalcs.length === 0 ? (
                <div className="text-center py-16">
                  <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300 opacity-50" />
                  <p className="font-semibold text-foreground">Nenhum favorito ainda</p>
                  <p className="text-sm text-muted-foreground mt-1">Clique na estrela ao lado de uma calculadora para salvá-la aqui</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {favoritedCalcs.map((tool, i) => (
                    <Link to={tool.path} key={tool.path}>
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="bg-white border-2 border-yellow-300 rounded-xl px-4 py-3.5 flex items-center gap-3 hover:shadow-sm transition-all group justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="text-yellow-600 bg-yellow-50 rounded-lg p-2 flex-shrink-0">
                            <tool.Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground">{tool.label}</p>
                            <p className="text-xs text-muted-foreground">{tool.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(tool.path);
                          }}
                          className="flex-shrink-0 ml-2 p-1"
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </button>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}