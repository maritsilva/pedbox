import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

const TOOLS = [
  // Doses
  { path: '/dosagens',          label: 'Dosagens — Cálculo Rápido', icon: '⚡', desc: 'Calcule doses por peso instantaneamente',             cat: 'Doses' },
  { path: '/guia',              label: 'Guia de Medicamentos',       icon: '📖', desc: 'Doses, preparo e apresentações completas',            cat: 'Doses' },
  // Emergência
  { path: '/drogas-emergencia', label: 'Drogas na Emergência',       icon: '🚨', desc: 'Bolus, infusão contínua e Fita de Broselow',         cat: 'Emergência' },
  // Hidratação
  { path: '/hidratacao',        label: 'Hidratação Venosa',          icon: '💧', desc: 'Cálculo de volumes e velocidades de infusão',         cat: 'Hidratação' },
  // Escores
  { path: '/calculadoras-hub',  label: 'Calculadoras Clínicas',      icon: '🧮', desc: 'Hub de scores e calculadoras pediátricas',            cat: 'Escores' },
  { path: '/apgar',             label: 'APGAR',                      icon: '👶', desc: 'Avaliação do recém-nascido ao nascer',                cat: 'Escores' },
  { path: '/glasgow-pediatrico',label: 'Glasgow Pediátrico',         icon: '🧠', desc: 'Escala de coma adaptada para crianças',               cat: 'Escores' },
  { path: '/pews',              label: 'PEWS',                       icon: '⚠️', desc: 'Pediatric Early Warning Score',                       cat: 'Escores' },
  { path: '/sipa',              label: 'SIPA',                       icon: '💓', desc: 'Shock Index Pediátrico Ajustado por Idade',           cat: 'Escores' },
  { path: '/pram',              label: 'PRAM — Asma',                icon: '💨', desc: 'Score de gravidade da crise asmática',                cat: 'Escores' },
  { path: '/wood-downes',       label: 'Wood-Downes',                icon: '🫁', desc: 'Score de gravidade da bronquiolite',                  cat: 'Escores' },
  { path: '/pas-asma',          label: 'PAS — Asma',                 icon: '🌬️', desc: 'Pediatric Asthma Score — emergência',                cat: 'Escores' },
  { path: '/centor-mcisaac',    label: 'Centor / McIsaac',           icon: '🦠', desc: 'Probabilidade de faringoamigdalite estreptocócica',  cat: 'Escores' },
  // Vacinas
  { path: '/vacinas',           label: 'Vacinas',                    icon: '💉', desc: 'Calendário vacinal e informações detalhadas',         cat: 'Vacinas' },
  // Crescimento
  { path: '/imc',               label: 'IMC Pediátrico',             icon: '📊', desc: 'Avaliação de crescimento e percentis',                cat: 'Crescimento' },
  { path: '/perimetro-cefalico',label: 'Perímetro Cefálico',         icon: '🔵', desc: 'Avaliação do crescimento craniano por percentil',     cat: 'Crescimento' },
  { path: '/alvo-parental',     label: 'Alvo Parental',              icon: '📐', desc: 'Estatura alvo genética para crianças',                cat: 'Crescimento' },
  { path: '/pressao-arterial',  label: 'PA Pediátrica',              icon: '❤️', desc: 'Classificação de PA por idade, sexo e altura',       cat: 'Crescimento' },
  { path: '/desenvolvimento',   label: 'Marcos do Desenvolvimento',  icon: '🌱', desc: 'Milestones dos 2 meses aos 5 anos',                   cat: 'Crescimento' },
  // Neonatal
  { path: '/silverman-anderson',label: 'Silverman-Anderson',         icon: '🫂', desc: 'Score de desconforto respiratório neonatal',          cat: 'Neonatal' },
  { path: '/rodwell',           label: 'Escore de Rodwell',          icon: '🧬', desc: 'Probabilidade de sepse neonatal',                     cat: 'Neonatal' },
  { path: '/idade-gestacional-corrigida', label: 'IG Corrigida',    icon: '🍼', desc: 'Cálculo da idade gestacional corrigida',              cat: 'Neonatal' },
  // Protocolos / Tabelas
  { path: '/protocolos',        label: 'Protocolos Clínicos',        icon: '🧪', desc: 'Fluxogramas passo a passo por condição',              cat: 'Protocolos' },
  { path: '/resumos',           label: 'Resumos Clínicos',           icon: '📝', desc: 'Sínteses baseadas em evidências de 25+ tópicos',      cat: 'Tabelas' },
  // Pesquisa
  { path: '/pesquisa',          label: 'PedResearch IA',             icon: '🔬', desc: 'Pesquisa inteligente de evidências e diretrizes',     cat: 'Pesquisa' },
];

const CATS = ['Todas', 'Doses', 'Emergência', 'Hidratação', 'Escores', 'Vacinas', 'Crescimento', 'Neonatal', 'Protocolos', 'Tabelas', 'Pesquisa'];

const CAT_COLORS = {
  'Doses':      'bg-blue-100 text-blue-700 border-blue-200',
  'Emergência': 'bg-red-100 text-red-700 border-red-200',
  'Hidratação': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Escores':    'bg-purple-100 text-purple-700 border-purple-200',
  'Vacinas':    'bg-green-100 text-green-700 border-green-200',
  'Crescimento':'bg-pink-100 text-pink-700 border-pink-200',
  'Neonatal':   'bg-amber-100 text-amber-700 border-amber-200',
  'Protocolos': 'bg-violet-100 text-violet-700 border-violet-200',
  'Tabelas':    'bg-teal-100 text-teal-700 border-teal-200',
  'Pesquisa':   'bg-emerald-100 text-emerald-700 border-emerald-200',
};

function ToolCard({ tool }) {
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const fav = isFavorite(tool.path);
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col p-4 gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-2xl flex-shrink-0">{tool.icon}</span>
        <button
          onClick={() => toggleFavorite(tool.path)}
          className="flex-shrink-0 mt-0.5"
          title={fav ? 'Remover dos favoritos' : 'Favoritar'}
        >
          <Star className={`w-5 h-5 transition-colors ${fav ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`} />
        </button>
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm text-foreground leading-snug">{tool.label}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{tool.desc}</p>
      </div>
      <div className="flex items-center justify-between gap-2 mt-auto">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${CAT_COLORS[tool.cat] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
          {tool.cat}
        </span>
        <Link
          to={tool.path}
          className="text-xs font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Abrir →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ExplorarFerramentas() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('Todas');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return TOOLS.filter(t => {
      const matchSearch = !q || t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q);
      const matchCat = activeCat === 'Todas' || t.cat === activeCat;
      return matchSearch && matchCat;
    });
  }, [search, activeCat]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-foreground">Explorar Ferramentas</h1>
        <p className="text-sm text-muted-foreground mt-1">Todas as ferramentas do Pedbox em um só lugar</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar ferramenta..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeCat === cat ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-bold text-foreground">Nenhuma ferramenta encontrada</p>
          <p className="text-sm text-muted-foreground mt-1">Tente outros termos ou categorias</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(tool => <ToolCard key={tool.path} tool={tool} />)}
        </div>
      )}
    </div>
  );
}