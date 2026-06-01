import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Star, Shield, Users, Heart, TrendingUp, LayoutGrid, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

const TOOLS = [
  // Puericultura
  { path: '/vacinas',             label: 'Vacinas',                    icon: '💉', desc: 'Calendário vacinal e informações detalhadas por imunobiológico.',      cat: 'Puericultura', color: 'bg-green-50 border-green-200',  iconBg: 'bg-green-100' },
  { path: '/desenvolvimento',     label: 'Desenvolvimento Infantil',   icon: '🌱', desc: 'Marcos dos 2 meses aos 5 anos com sinais de alerta.',                  cat: 'Puericultura', color: 'bg-lime-50 border-lime-200',    iconBg: 'bg-lime-100' },
  { path: '/curvas-crescimento',  label: 'Curvas de Crescimento',      icon: '📈', desc: 'Curvas de crescimento OMS, CDC e SBP para download.',                 cat: 'Puericultura', color: 'bg-teal-50 border-teal-200',    iconBg: 'bg-teal-100' },
  { path: '/imc',                 label: 'IMC Pediátrico',             icon: '📊', desc: 'Cálculo do índice de massa corporal para crianças e adolescentes.',   cat: 'Puericultura', color: 'bg-green-50 border-green-200',  iconBg: 'bg-green-100' },
  { path: '/perimetro-cefalico',  label: 'Perímetro Cefálico',         icon: '🔵', desc: 'Avaliação e percentis do perímetro cefálico por idade e sexo.',       cat: 'Puericultura', color: 'bg-blue-50 border-blue-200',    iconBg: 'bg-blue-100' },
  { path: '/alvo-parental',       label: 'Alvo Parental',              icon: '📐', desc: 'Estimativa da altura alvo adulta baseada na estatura parental.',       cat: 'Puericultura', color: 'bg-lime-50 border-lime-200',    iconBg: 'bg-lime-100' },
  { path: '/sinais-vitais',       label: 'Sinais Vitais Pediátricos',  icon: '📋', desc: 'Valores de referência de FC, FR e PA por faixa etária.',              cat: 'Puericultura', color: 'bg-sky-50 border-sky-200',      iconBg: 'bg-sky-100' },
  // Doses
  { path: '/dosagens',            label: 'Dosagens — Cálculo Rápido',  icon: '⚡', desc: 'Calcule doses por peso instantaneamente · 30+ medicamentos.',          cat: 'Doses',        color: 'bg-yellow-50 border-yellow-200',iconBg: 'bg-yellow-100' },
  { path: '/guia',                label: 'Guia de Medicamentos',       icon: '📖', desc: 'Doses, preparo e apresentações completas por princípio ativo.',        cat: 'Doses',        color: 'bg-blue-50 border-blue-200',    iconBg: 'bg-blue-100' },
  { path: '/hidratacao',          label: 'Hidratação Venosa',          icon: '💧', desc: 'Cálculo de fluidos e manutenção para hidratação venosa.',              cat: 'Doses',        color: 'bg-cyan-50 border-cyan-200',    iconBg: 'bg-cyan-100' },
  // Emergência
  { path: '/pressao-arterial',    label: 'PA Pediátrica',              icon: '❤️', desc: 'Estimativa de pressão arterial por faixa etária e percentil.',        cat: 'Emergência',   color: 'bg-red-50 border-red-200',      iconBg: 'bg-red-100' },
  { path: '/glasgow-pediatrico',  label: 'Glasgow Pediátrico',         icon: '🧠', desc: 'Avaliação do nível de consciência em pacientes pediátricos.',          cat: 'Emergência',   color: 'bg-purple-50 border-purple-200',iconBg: 'bg-purple-100' },
  { path: '/pews',                label: 'PEWS',                       icon: '⚠️', desc: 'Pontuação de alerta precoce em pediatria.',                            cat: 'Emergência',   color: 'bg-red-50 border-red-200',      iconBg: 'bg-red-100' },
  { path: '/sipa',                label: 'SIPA',                       icon: '💓', desc: 'Shock Index pediátrico ajustado por faixa etária.',                   cat: 'Emergência',   color: 'bg-rose-50 border-rose-200',    iconBg: 'bg-rose-100' },
  { path: '/drogas-emergencia',   label: 'Drogas na Emergência',       icon: '🚨', desc: 'Guias rápidos de drogas para situações de emergência.',                cat: 'Emergência',   color: 'bg-red-50 border-red-200',      iconBg: 'bg-red-100' },
  // Escores
  { path: '/centor-mcisaac',      label: 'Centor / McIsaac',           icon: '🦠', desc: 'Probabilidade de faringoamigdalite estreptocócica.',                  cat: 'Escores',      color: 'bg-teal-50 border-teal-200',    iconBg: 'bg-teal-100' },
  { path: '/pas-asma',            label: 'PAS — Asma',                 icon: '🌬️', desc: 'Pediatric Asthma Score para triagem na emergência.',                 cat: 'Escores',      color: 'bg-sky-50 border-sky-200',      iconBg: 'bg-sky-100' },
  { path: '/pram',                label: 'PRAM',                       icon: '💨', desc: 'Pontuação de risco em asma pediátrica (2–17 anos).',                  cat: 'Escores',      color: 'bg-orange-50 border-orange-200',iconBg: 'bg-orange-100' },
  { path: '/wood-downes',         label: 'Wood-Downes',                icon: '🫁', desc: 'Classificação de gravidade da bronquiolite.',                          cat: 'Escores',      color: 'bg-sky-50 border-sky-200',      iconBg: 'bg-sky-100' },
  // Neonatal
  { path: '/apgar',               label: 'APGAR',                      icon: '👶', desc: 'Avaliação rápida da vitalidade do recém-nascido.',                    cat: 'Neonatal',     color: 'bg-pink-50 border-pink-200',    iconBg: 'bg-pink-100' },
  { path: '/silverman-anderson',  label: 'Silverman-Anderson',         icon: '🫂', desc: 'Avaliação da gravidade da síndrome do desconforto respiratório.',     cat: 'Neonatal',     color: 'bg-indigo-50 border-indigo-200',iconBg: 'bg-indigo-100' },
  { path: '/rodwell',             label: 'Escore de Rodwell',          icon: '🧬', desc: 'Probabilidade de sepse neonatal.',                                    cat: 'Neonatal',     color: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100' },
  { path: '/idade-gestacional-corrigida', label: 'IG Corrigida',       icon: '🍼', desc: 'Cálculo da idade gestacional corrigida para prematuros.',             cat: 'Neonatal',     color: 'bg-amber-50 border-amber-200',  iconBg: 'bg-amber-100' },
  // Calculadoras
  { path: '/calculadoras-hub',    label: 'Calculadoras Clínicas',      icon: '🧮', desc: 'Conjunto de calculadoras clínicas para o dia a dia do plantão.',      cat: 'Calculadoras', color: 'bg-blue-50 border-blue-200',    iconBg: 'bg-blue-100' },
  // Biblioteca
  { path: '/biblioteca',          label: 'Protocolos Clínicos',        icon: '🧪', desc: 'Fluxogramas passo a passo por condição clínica.',                     cat: 'Biblioteca',   color: 'bg-violet-50 border-violet-200',iconBg: 'bg-violet-100' },
  { path: '/biblioteca',          label: 'Condutas Clínicas',          icon: '🩺', desc: 'Manejos e condutas estruturadas por categoria.',                      cat: 'Biblioteca',   color: 'bg-violet-50 border-violet-200',iconBg: 'bg-violet-100' },
  { path: '/biblioteca',          label: 'Biblioteca',                 icon: '📚', desc: 'Protocolos, condutas, links e anotações pediátricas.',                cat: 'Biblioteca',   color: 'bg-indigo-50 border-indigo-200',iconBg: 'bg-indigo-100' },
  // Pesquisa
  { path: '/pesquisa',            label: 'SophIA',                     icon: '🔬', desc: 'Pesquisa inteligente de evidências e diretrizes clínicas com IA.',    cat: 'Pesquisa',     color: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100' },
];

const CATS = ['Todas', 'Puericultura', 'Doses', 'Emergência', 'Escores', 'Neonatal', 'Calculadoras', 'Biblioteca', 'Pesquisa'];

const CAT_COLORS = {
  'Puericultura': 'bg-green-100 text-green-700 border-green-200',
  'Doses':        'bg-blue-100 text-blue-700 border-blue-200',
  'Emergência':   'bg-red-100 text-red-700 border-red-200',
  'Escores':      'bg-purple-100 text-purple-700 border-purple-200',
  'Neonatal':     'bg-amber-100 text-amber-700 border-amber-200',
  'Calculadoras': 'bg-blue-100 text-blue-700 border-blue-200',
  'Biblioteca':   'bg-violet-100 text-violet-700 border-violet-200',
  'Pesquisa':     'bg-emerald-100 text-emerald-700 border-emerald-200',
};

const MAIS_USADAS = ['Hidratação Venosa', 'IMC Pediátrico', 'APGAR', 'PEWS', 'Vacinas'];

function ToolCard({ tool }) {
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const fav = isFavorite(tool.path);

  return (
    <Link to={tool.path} className="block">
      <motion.div
        whileTap={{ scale: 0.97 }}
        className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col p-4 gap-3 cursor-pointer group ${fav ? 'border-yellow-300' : 'border-border'}`}
      >
        {/* Header: icon + star */}
        <div className="flex items-start justify-between">
          <div className={`w-11 h-11 rounded-xl ${tool.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
            {tool.icon}
          </div>
          <button
            onClick={e => { e.preventDefault(); toggleFavorite(tool.path); }}
            className="p-1 -mr-1 -mt-1"
            title={fav ? 'Remover dos favoritos' : 'Favoritar'}
          >
            <Star className={`w-5 h-5 transition-colors ${fav ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="font-bold text-sm text-foreground leading-snug">{tool.label}</p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tool.desc}</p>
        </div>

        {/* Footer: badge + link */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-border/50">
          <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${CAT_COLORS[tool.cat] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
            {tool.cat}
          </span>
          <span className="text-xs font-bold text-primary flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            Abrir <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ExplorarFerramentas() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('Todas');
  const { isFavorite } = usePageFavorites();

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return TOOLS.filter(t => {
      const matchSearch = !q || t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q);
      const matchCat = activeCat === 'Todas' || t.cat === activeCat;
      return matchSearch && matchCat;
    });
  }, [search, activeCat]);

  const maisUsadas = MAIS_USADAS.map(name => TOOLS.find(t => t.label === name)).filter(Boolean);
  const favTools = TOOLS.filter(t => isFavorite(t.path));
  const totalTools = TOOLS.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── HEADER ── */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-foreground">Explorar ferramentas</h1>
        <p className="text-sm text-muted-foreground mt-1.5 max-w-lg">
          Encontre rapidamente calculadoras, escores, doses, protocolos e recursos pediátricos.
        </p>
      </div>

      {/* ── SEARCH ── */}
      <div className="relative max-w-2xl mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar medicamento, protocolo ou ferramenta..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-border rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── CATEGORY FILTER CHIPS ── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeCat === cat
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-muted-foreground border-border hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── LEFT: Main content ── */}
        <div className="flex-1 min-w-0 space-y-6">

          {/* Mais usadas strip */}
          {activeCat === 'Todas' && !search && (
            <div className="bg-white border border-border rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <p className="font-bold text-sm text-foreground">Mais usadas no plantão</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {maisUsadas.map(tool => (
                  <Link key={tool.path} to={tool.path}>
                    <div className="flex flex-col items-center gap-2 px-3 py-3 bg-secondary/60 hover:bg-secondary border border-border rounded-xl transition-all cursor-pointer group text-center">
                      <span className="text-2xl">{tool.icon}</span>
                      <p className="font-bold text-xs text-foreground leading-tight line-clamp-2">{tool.label}</p>
                      <p className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${CAT_COLORS[tool.cat] || 'bg-gray-100 text-gray-600'}`}>
                        {tool.cat}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Grid of tools */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white border border-border rounded-2xl">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-bold text-foreground">Nenhuma ferramenta encontrada</p>
              <p className="text-sm text-muted-foreground mt-1">Tente outros termos ou categorias</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((tool, i) => (
                <motion.div key={tool.path + tool.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                  <ToolCard tool={tool} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Footer trust bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-6 border-t border-border text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Conteúdo atualizado por especialistas</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-primary" /> Ferramentas para o plantão pediátrico</span>
            <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-primary" /> Uso profissional e responsável</span>
          </div>
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">

          {/* Counter card */}
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
              <LayoutGrid className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary leading-none">{totalTools}</p>
              <p className="text-sm font-semibold text-foreground">ferramentas disponíveis</p>
              <p className="text-xs text-muted-foreground mt-0.5">Atualizadas e validadas para uso clínico pediátrico.</p>
            </div>
          </div>

          {/* Favoritos sidebar */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <p className="font-bold text-sm text-foreground">Favoritos</p>
              {favTools.length > 0 && (
                <span className="ml-auto text-xs font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">{favTools.length}</span>
              )}
            </div>
            {favTools.length === 0 ? (
              <div className="px-5 py-6 text-center">
                <p className="text-sm text-muted-foreground">Nenhuma ferramenta favoritada ainda.</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Toque em ⭐ em qualquer ferramenta para salvá-la aqui.</p>
              </div>
            ) : (
              <div className="divide-y divide-border/60 max-h-96 overflow-y-auto">
                {favTools.slice(0, 5).map(tool => (
                  <Link key={tool.path} to={tool.path}>
                    <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-secondary/40 transition-colors">
                      <div className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center flex-shrink-0`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{tool.label}</p>
                        <p className={`text-xs text-muted-foreground truncate`}>{tool.cat}</p>
                      </div>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {favTools.length > 0 && (
              <div className="px-5 py-3 border-t border-border">
                <Link to="/favoritos" className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  Ver todos <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}