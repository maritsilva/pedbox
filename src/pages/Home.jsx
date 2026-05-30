import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets, AlertTriangle, Search, Activity, Scale, ChevronRight, BookOpen, FlaskConical, Microscope, Star, Calculator, Zap, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs } from '@/lib/guideData';
import { searchDrugs } from '@/lib/searchDrugs';
import { useFavorites } from '@/hooks/useFavorites.jsx';
import { getAllDosagens } from '@/lib/dosagensData';

const CALCULATORS = [
  { label: 'Hidratação Venosa', desc: 'Cálculo rápido de volumes e velocidades', path: '/hidratacao', Icon: Droplets, keywords: ['hidratação', 'venosa', 'soro', 'holliday'] },
  { label: 'IMC Pediátrico', desc: 'Avaliação de crescimento e percentis', path: '/imc', Icon: Scale, keywords: ['imc', 'massa', 'corporal', 'peso', 'altura'] },
  { label: 'PA Pediátrica', desc: 'Classificação por idade, sexo e altura', path: '/pressao-arterial', Icon: Activity, keywords: ['pressão', 'arterial', 'hipertensão'] },
];

const ALL_SEARCH = [
  { label: 'Dosagens — Cálculo Rápido', desc: 'Calcule doses por peso instantaneamente', path: '/dosagens', Icon: Zap, keywords: ['dosagem', 'dose', 'calculo', 'peso', 'paracetamol', 'ibuprofeno', 'amoxicilina', 'dipirona', 'ceftriaxona', 'antibiotico'] },
  { label: 'Guia de Medicamentos', desc: 'Doses, preparo e apresentações', path: '/guia', Icon: BookOpen, keywords: ['guia', 'doses', 'medicamentos', 'antibióticos', 'drogas'] },
  { label: 'Protocolos Clínicos', desc: 'Diretrizes por condição', path: '/protocolos', Icon: FlaskConical, keywords: ['protocolo', 'asma', 'bronquiolite', 'febre', 'diarreia', 'faringoamigdalite'] },
  { label: 'Resumos Clínicos', desc: 'Sínteses de tópicos pediátricos essenciais', path: '/resumos', Icon: BookOpen, keywords: ['resumo', 'varicela', 'sarampo', 'diarreia', 'aleitamento', 'desenvolvimento', 'puberdade'] },
  { label: 'PedResearch', desc: 'Pesquisa e evidências científicas', path: '/pesquisa', Icon: Microscope, keywords: ['pesquisa', 'evidência', 'estudo', 'guideline', 'publicação', 'artigo'] },
  ...CALCULATORS,
];

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const searchResults = search.trim().length > 1
    ? [
        ...ALL_SEARCH.filter(t =>
          t.label.toLowerCase().includes(search.toLowerCase()) ||
          t.keywords.some(k => k.includes(search.toLowerCase()))
        ).map(t => ({ ...t, type: 'tool' })),
        ...getAllDosagens().filter(d => {
          const q = search.toLowerCase();
          return d.name.toLowerCase().includes(q) ||
            (d.sinonimo && d.sinonimo.toLowerCase().includes(q)) ||
            (d.marcas && d.marcas.toLowerCase().includes(q));
        }).slice(0, 5).map(d => ({
          label: `Cálculo dose — ${d.name}`,
          desc: `${d.catLabel} · ${d.dose_min}–${d.dose_max} ${d.unidade}`,
          path: `/dosagens?drug=${d.id}`,
          catIcon: '⚡',
          type: 'dosagem',
          Icon: Zap,
        })),
        ...searchDrugs(search, 4)
          .map(d => ({ label: d.name, desc: d.catLabel, path: `/guia?drug=${d.id}`, catIcon: d.catIcon, type: 'drug' })),
      ]
    : [];

  return (
    <div className="max-w-2xl md:max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6 md:space-y-8">

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <img
          src="https://media.base44.com/images/public/69ecb71457668abac5516abd/349814975_ChatGPTImage17demai-remove-bg-io3.png"
          alt="PedBox"
          className="h-28 w-auto mx-auto mb-4"
        />
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">Acesso imediato a doses, protocolos e cálculos pediátricos essenciais no plantão</p>
        <span className="mt-4 inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs md:text-sm font-semibold px-3 py-2 rounded-full border border-primary/20">
          🩺 Por médicos em formação, para médicos em plantão
        </span>
      </motion.div>

      {/* Disclaimer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }}
        className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3 md:p-4 text-xs md:text-sm text-amber-800">
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p><strong>⚠️ Versão Beta — em desenvolvimento:</strong> Esta ferramenta está em fase beta e erros podem ocorrer. Sempre valide todas as informações com protocolos institucionais, literatura oficial e supervisão médica antes de qualquer decisão clínica. <strong>Destinada exclusivamente a profissionais de saúde habilitados.</strong></p>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar medicamento, protocolo ou ferramenta..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-border rounded-xl pl-10 md:pl-11 pr-4 py-3 md:py-3.5 text-sm md:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
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

      {/* Favoritos Tab */}
      {(() => {
        const favCalcs = CALCULATORS.filter(c => isFavorite(c.path));
        const favDrugs = getAllGuideDrugs().filter(d => isFavorite(d.id));
        const hasFavorites = favCalcs.length > 0 || favDrugs.length > 0;
        
        return hasFavorites && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Meus Favoritos ({favCalcs.length + favDrugs.length})</p>
            </div>
            <div className="space-y-2">
              {favCalcs.map((tool, i) => (
                <Link to={tool.path} key={tool.path}>
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-xl px-4 py-3 md:py-3.5 flex items-center gap-3 hover:shadow-md transition-all group">
                    <div className="text-yellow-600 bg-yellow-100 rounded-lg p-2 flex-shrink-0">
                      <tool.Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-semibold text-foreground">{tool.label}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(tool.path);
                      }}
                      className="flex-shrink-0 ml-2"
                    >
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400 transition-all" />
                    </button>
                  </motion.div>
                </Link>
              ))}
              {favDrugs.map((drug, i) => (
                <Link to={`/guia?drug=${drug.id}`} key={drug.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (favCalcs.length + i) * 0.03 }}
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-xl px-4 py-3 md:py-3.5 flex items-center gap-3 hover:shadow-md transition-all group">
                    <div className="text-yellow-600 bg-yellow-100 rounded-lg p-2 flex-shrink-0">
                      <span className="text-lg">{drug.catIcon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-semibold text-foreground">{drug.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{drug.catLabel}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(drug.id);
                      }}
                      className="flex-shrink-0 ml-2"
                    >
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400 transition-all" />
                    </button>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        );
      })()}

      {/* Main References — destacadas */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Referências Clínicas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
          <Link to="/guia">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-blue-200 flex flex-col gap-3 h-full cursor-pointer">
              <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-base md:text-lg leading-tight">Guia de Medicamentos</p>
                <p className="text-blue-100 text-xs md:text-sm mt-1 leading-snug">Doses, administração e apresentações organizadas</p>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                Acessar <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          </Link>

          <Link to="/protocolos">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-violet-500 to-purple-700 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-purple-200 flex flex-col gap-3 h-full cursor-pointer">
              <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-base md:text-lg leading-tight">Protocolos Clínicos</p>
                <p className="text-violet-100 text-xs md:text-sm mt-1 leading-snug">Fluxogramas passo a passo para situações urgentes</p>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                Acessar <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          </Link>

          <Link to="/resumos">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-cyan-200 flex flex-col gap-3 h-full cursor-pointer">
              <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-base md:text-lg leading-tight">Resumos Clínicos</p>
                <p className="text-cyan-100 text-xs md:text-sm mt-1 leading-snug">Sínteses baseadas em evidências de 25+ tópicos</p>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs mt-auto">
                Acessar <ChevronRight className="w-3 h-3" />
              </div>
            </motion.div>
          </Link>
        </div>

        <Link to="/pesquisa">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-emerald-100 flex items-center gap-4 cursor-pointer">
            <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg leading-tight">PedResearch IA</p>
              <p className="text-emerald-100 text-xs md:text-sm mt-0.5 leading-snug">Pesquisa inteligente de evidências e diretrizes</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Dosagens — Cálculo Rápido */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.17 }}>
        <Link to="/dosagens">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-indigo-200 flex items-center gap-4 cursor-pointer">
            <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg leading-tight">Dosagens — Cálculo Rápido</p>
              <p className="text-indigo-100 text-xs md:text-sm mt-1 leading-snug">Insira o peso e calcule a dose automaticamente · 30+ medicamentos</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Drogas na Emergência — destacado logo após Referências Clínicas */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
        <Link to="/drogas-emergencia">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-red-200 flex items-center gap-4 cursor-pointer">
            <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg leading-tight">Drogas na Emergência</p>
              <p className="text-red-100 text-xs md:text-sm mt-1 leading-snug">Doses em bolus, infusão contínua e equipamentos — Fita de Broselow</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Desenvolvimento */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.19 }}>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Acompanhamento Clínico</p>
        <Link to="/desenvolvimento">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-pink-200 flex items-center gap-4 cursor-pointer">
            <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0 hidden sm:flex">
              <span className="text-3xl">📊</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg leading-tight">Cartilha de Desenvolvimento Infantil</p>
              <p className="text-rose-100 text-xs md:text-sm mt-1 leading-snug">Marcos 2 meses a 5 anos, sinais de alerta e orientações</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
          </motion.div>
        </Link>
      </motion.div>



      {/* Calculadoras Hub */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20 }}>
        <Link to="/calculadoras-hub">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-5 md:p-6 text-white shadow-lg shadow-blue-200 flex items-center gap-4 cursor-pointer">
            <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0 text-xl">🧮</div>
            <div className="flex-1">
              <p className="font-bold text-base md:text-lg leading-tight">Calculadoras Clínicas</p>
              <p className="text-blue-100 text-xs md:text-sm mt-1 leading-snug">Scores, percentis e cálculos pediátricos reunidos em um só lugar</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
          </motion.div>
        </Link>
      </motion.div>



    </div>
  );
}