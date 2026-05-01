import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets, AlertTriangle, Search, Activity, Scale, ChevronRight, BookOpen, FlaskConical, Microscope, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs } from '@/lib/guideData';
import { useFavorites } from '@/hooks/useFavorites.jsx';

const CALCULATORS = [
  { label: 'Hidratação Venosa', desc: 'Cálculo rápido de volumes', path: '/hidratacao', Icon: Droplets, keywords: ['hidratação', 'venosa', 'soro'] },
  { label: 'IMC Pediátrico', desc: 'Avaliação de crescimento', path: '/imc', Icon: Scale, keywords: ['imc', 'massa', 'peso'] },
  { label: 'PA Pediátrica', desc: 'Classificação por idade', path: '/pressao-arterial', Icon: Activity, keywords: ['pressão', 'arterial'] },
];

const ALL_SEARCH = [
  { label: 'Guia de Medicamentos', desc: 'Doses, preparo e apresentações', path: '/guia', Icon: BookOpen, keywords: ['guia', 'doses', 'medicamentos'] },
  { label: 'Protocolos Clínicos', desc: 'Diretrizes por condição', path: '/protocolos', Icon: FlaskConical, keywords: ['protocolo', 'asma', 'bronquiolite'] },
  { label: 'PedResearch', desc: 'Pesquisa e evidências', path: '/pesquisa', Icon: Microscope, keywords: ['pesquisa', 'evidência'] },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
              alt="PedBox"
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-primary hover:text-primary/80 transition">Início</Link>
            <Link to="/desenvolvimento" className="text-muted-foreground hover:text-foreground transition">Desenvolvimento</Link>
            <Link to="/guia" className="text-muted-foreground hover:text-foreground transition">Guia</Link>
            <Link to="/protocolos" className="text-muted-foreground hover:text-foreground transition">Protocolos</Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <img
                src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
                alt="PedBox"
                className="h-16 w-auto mb-6"
              />
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">PedBox</h1>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl leading-relaxed">
                Acesso imediato a doses, protocolos, cálculos e marcos do desenvolvimento infantil — essencial para plantões pediátricos
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full border border-white/30 text-sm font-semibold">
                🩺 Por médicos em formação, para profissionais em plantão
              </div>
            </div>
            <div className="hidden lg:block flex-1">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <AlertTriangle className="w-16 h-16 mb-4 text-amber-200" />
                <p className="text-sm text-blue-100 leading-relaxed">
                  <strong>Ferramenta educacional:</strong> Sempre valide com protocolos institucionais e supervisão profissional
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* DISCLAIMER MOBILE */}
        <motion.div className="lg:hidden">
          <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p><strong>Ferramenta educacional:</strong> Sempre valide com protocolos institucionais. Destinado a profissionais de saúde.</p>
          </div>
        </motion.div>

        {/* SEARCH */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar medicamento, protocolo, calculadora ou ferramenta..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full border border-border rounded-2xl pl-12 pr-4 py-4 text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
            />
            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white border border-border rounded-2xl shadow-lg overflow-hidden z-30 max-h-96 overflow-y-auto"
                >
                  {searchResults.map((r, i) => (
                    <button key={i} onClick={() => { navigate(r.path); setSearch(''); }}
                      className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-blue-50 transition-colors border-b border-border last:border-0">
                      <div className="text-primary flex-shrink-0">
                        {r.type === 'drug' ? <span className="text-lg">{r.catIcon}</span> : r.Icon ? <r.Icon className="w-5 h-5" /> : null}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{r.label}</p>
                        <p className="text-xs text-muted-foreground truncate">{r.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* TABS */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab('inicio')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'inicio'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-muted-foreground border border-border hover:border-blue-300'
            }`}
          >
            Tudo
          </button>
          <button
            onClick={() => setActiveTab('favoritos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'favoritos'
                ? 'bg-yellow-400 text-yellow-900 shadow-lg'
                : 'bg-white text-muted-foreground border border-border hover:border-yellow-300'
            }`}
          >
            <Star className={`w-4 h-4 ${activeTab === 'favoritos' ? 'fill-yellow-900' : ''}`} />
            Favoritos
            {favoritedCalcs.length > 0 && (
              <span className={`text-xs rounded-full px-2 py-0.5 font-bold ${activeTab === 'favoritos' ? 'bg-yellow-900/20 text-yellow-900' : 'bg-yellow-100 text-yellow-700'}`}>
                {favoritedCalcs.length}
              </span>
            )}
          </button>
        </div>

        {/* CONTEÚDO ABAS */}
        <AnimatePresence mode="wait">
          {activeTab === 'inicio' && (
            <motion.div key="inicio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
              
              {/* CARDS PRINCIPAIS */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Referências Clínicas Essenciais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link to="/guia">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all h-full flex flex-col cursor-pointer">
                      <div className="bg-white/20 rounded-xl p-3 w-fit mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight mb-2">Guia de Medicamentos</h3>
                      <p className="text-blue-100 text-sm leading-relaxed mb-4 flex-1">Doses, administração, apresentações e bulas organizadas por categoria farmacológica</p>
                      <div className="flex items-center gap-1 text-white/80 text-sm font-semibold mt-auto">
                        Acessar <ChevronRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/protocolos">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all h-full flex flex-col cursor-pointer">
                      <div className="bg-white/20 rounded-xl p-3 w-fit mb-4">
                        <FlaskConical className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight mb-2">Protocolos Clínicos</h3>
                      <p className="text-violet-100 text-sm leading-relaxed mb-4 flex-1">Fluxogramas, diretrizes e manejo de condições pediátricas agudas e crônicas</p>
                      <div className="flex items-center gap-1 text-white/80 text-sm font-semibold mt-auto">
                        Acessar <ChevronRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/pesquisa">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all h-full flex flex-col cursor-pointer">
                      <div className="bg-white/20 rounded-xl p-3 w-fit mb-4">
                        <Microscope className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold leading-tight mb-2">PedResearch IA</h3>
                      <p className="text-emerald-100 text-sm leading-relaxed mb-4 flex-1">Busca inteligente de evidências, guidelines e pesquisas médicas em tempo real</p>
                      <div className="flex items-center gap-1 text-white/80 text-sm font-semibold mt-auto">
                        Acessar <ChevronRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* DESENVOLVIMENTO INFANTIL DESTAQUE */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Acompanhamento Clínico</h2>
                <Link to="/desenvolvimento">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 rounded-xl p-4 flex-shrink-0">
                        <span className="text-4xl">📊</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Cartilha de Desenvolvimento Infantil</h3>
                        <p className="text-rose-100 text-base leading-relaxed mb-3">Marcos do desenvolvimento de 2 meses a 5 anos. Vigilância clínica, sinais de alerta e orientações para cuidadores</p>
                        <div className="flex items-center gap-1 text-white/90 text-sm font-semibold">
                          Acessar ferramenta <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* CALCULADORAS */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Calculadoras Pediátricas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CALCULATORS.map((calc, i) => (
                    <Link key={calc.path} to={calc.path}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white border border-border rounded-xl px-4 py-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all group h-full cursor-pointer"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="text-blue-600 bg-blue-50 rounded-lg p-2.5 flex-shrink-0 group-hover:bg-blue-100 transition">
                            <calc.Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-foreground">{calc.label}</p>
                            <p className="text-xs text-muted-foreground">{calc.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(calc.path);
                          }}
                          className="flex-shrink-0 ml-2"
                        >
                          <Star className={`w-5 h-5 transition-all ${isFavorite(calc.path) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'}`} />
                        </button>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'favoritos' && (
            <motion.div key="favoritos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {favoritedCalcs.length === 0 ? (
                <div className="text-center py-16">
                  <Star className="w-16 h-16 mx-auto mb-4 text-yellow-300 opacity-50" />
                  <p className="text-lg font-semibold text-foreground mb-2">Nenhum favorito ainda</p>
                  <p className="text-muted-foreground text-sm">Clique na estrela ao lado de uma calculadora para salvá-la aqui</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favoritedCalcs.map((calc, i) => (
                    <Link key={calc.path} to={calc.path}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white border-2 border-yellow-300 rounded-xl px-4 py-4 flex items-center justify-between hover:shadow-md transition-all group h-full cursor-pointer"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="text-yellow-600 bg-yellow-50 rounded-lg p-2.5 flex-shrink-0">
                            <calc.Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-foreground">{calc.label}</p>
                            <p className="text-xs text-muted-foreground">{calc.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(calc.path);
                          }}
                          className="flex-shrink-0 ml-2"
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

      {/* FOOTER */}
      <footer className="bg-white border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 PedBox · Ferramenta educacional para profissionais de saúde</p>
        </div>
      </footer>
    </div>
  );
}