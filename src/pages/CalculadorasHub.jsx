import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, Scale, Activity, Ruler, TrendingUp, Calendar,
  Microscope, Wind, ChevronRight, Search, X, Star, ChevronDown, ChevronUp, Calculator
} from 'lucide-react';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

const CATEGORIES = [
  {
    id: 'neonatologia',
    label: 'Neonatologia',
    icon: '🍼',
    color: 'amber',
    tools: [
      { label: 'APGAR',              desc: 'Vitalidade do recém-nascido (0–10)',                path: '/apgar',                       Icon: Activity,  badge: 'Score',     badgeColor: 'bg-amber-100 text-amber-700'   },
      { label: 'Silverman-Anderson', desc: 'Desconforto respiratório em RN (0–10)',             path: '/silverman-anderson',          Icon: Wind,      badge: 'Score',     badgeColor: 'bg-cyan-100 text-cyan-700'     },
      { label: 'Escore de Rodwell',  desc: 'Probabilidade de sepse neonatal',                   path: '/rodwell',                     Icon: Microscope,badge: 'Score',     badgeColor: 'bg-rose-100 text-rose-700'     },
      { label: 'IG Corrigida',       desc: 'Idade gestacional ajustada para prematuros',        path: '/idade-gestacional-corrigida', Icon: Calendar,  badge: 'Cálculo',   badgeColor: 'bg-lime-100 text-lime-700'     },
    ],
  },
  {
    id: 'emergencia',
    label: 'Emergência / UTI',
    icon: '🚨',
    color: 'red',
    tools: [
      { label: 'Glasgow Pediátrica', desc: 'Avaliação do nível de consciência',                 path: '/glasgow-pediatrico',          Icon: Activity,  badge: 'Score',     badgeColor: 'bg-indigo-100 text-indigo-700' },
      { label: 'PEWS',               desc: 'Pediatric Early Warning Score',                     path: '/pews',                        Icon: Activity,  badge: 'Score',     badgeColor: 'bg-teal-100 text-teal-700'     },
      { label: 'PRAM',               desc: 'Índice de risco para parada cardiorrespiratória',   path: '/pram',                        Icon: Wind,      badge: 'Score',     badgeColor: 'bg-blue-100 text-blue-700'     },
      { label: 'Wood-Downes',        desc: 'Classificação de choque pediátrico',                path: '/wood-downes',                 Icon: Wind,      badge: 'Score',     badgeColor: 'bg-red-100 text-red-700'       },
    ],
  },
  {
    id: 'respiratorio',
    label: 'Respiratório',
    icon: '🫁',
    color: 'blue',
    tools: [
      { label: 'PAS — Asma',         desc: 'Gravidade da crise asmática em PS (5–15)',          path: '/pas-asma',                    Icon: Wind,      badge: 'Score',     badgeColor: 'bg-sky-100 text-sky-700'       },
      { label: 'SIPA',               desc: 'Shock Index ajustado por idade pediátrica',         path: '/sipa',                        Icon: Activity,  badge: 'Índice',    badgeColor: 'bg-red-100 text-red-700'       },
    ],
  },
  {
    id: 'crescimento',
    label: 'Crescimento',
    icon: '📏',
    color: 'green',
    tools: [
      { label: 'IMC Pediátrico',        desc: 'Curvas de crescimento CDC 2000 (0–20 anos)',     path: '/imc',                         Icon: Scale,     badge: 'Percentil', badgeColor: 'bg-green-100 text-green-700'   },
      { label: 'Perímetro Cefálico',    desc: 'Avaliação do crescimento craniano (0–36 meses)', path: '/perimetro-cefalico',          Icon: Ruler,     badge: 'Percentil', badgeColor: 'bg-teal-100 text-teal-700'     },
      { label: 'Alvo Parental',         desc: 'Estatura esperada com base na altura dos pais',  path: '/alvo-parental',               Icon: TrendingUp,badge: 'Cálculo',   badgeColor: 'bg-emerald-100 text-emerald-700'},
    ],
  },
  {
    id: 'hemodinamica',
    label: 'Hemodinâmica',
    icon: '💧',
    color: 'cyan',
    tools: [
      { label: 'Hidratação Venosa',        desc: 'Expansão volêmica e manutenção (Holliday-Segar)',      path: '/hidratacao',      Icon: Droplets, badge: 'Cálculo',   badgeColor: 'bg-cyan-100 text-cyan-700'   },
      { label: 'Pressão Arterial Pediátrica', desc: 'Percentis de PA por sexo, idade e estatura (AAP)', path: '/pressao-arterial',Icon: Activity, badge: 'Percentil',badgeColor: 'bg-red-100 text-red-700'     },
    ],
  },
  {
    id: 'infectologia',
    label: 'Infectologia',
    icon: '🦠',
    color: 'purple',
    tools: [
      { label: 'Centor / McIsaac', desc: 'Probabilidade de faringoamigdalite estreptocócica',   path: '/centor-mcisaac',              Icon: Microscope,badge: 'Score',    badgeColor: 'bg-purple-100 text-purple-700' },
    ],
  },
];

const CAT_META = {
  amber:  { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   dot: 'bg-amber-400',   pill: 'bg-amber-100 text-amber-700'   },
  red:    { bg: 'bg-red-50',     border: 'border-red-200',     text: 'text-red-700',     dot: 'bg-red-500',     pill: 'bg-red-100 text-red-700'       },
  blue:   { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    dot: 'bg-blue-500',    pill: 'bg-blue-100 text-blue-700'     },
  green:  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-500', pill: 'bg-emerald-100 text-emerald-700'},
  cyan:   { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    dot: 'bg-cyan-500',    pill: 'bg-cyan-100 text-cyan-700'     },
  purple: { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-700',  dot: 'bg-purple-500',  pill: 'bg-purple-100 text-purple-700' },
};

const ALL_TOOLS = CATEGORIES.flatMap(c => c.tools.map(t => ({ ...t, catLabel: c.label, catIcon: c.icon, catColor: c.color })));
const TOTAL = ALL_TOOLS.length;

const ALL_CATS = CATEGORIES.map(c => c.label);

export default function CalculadorasHub() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState(null);
  const [collapsed, setCollapsed] = useState({});
  const { isFavorite, toggleFavorite } = usePageFavorites();

  const q = search.toLowerCase().trim();

  const filtered = useMemo(() => {
    if (!q && !activeCat) return null;
    return ALL_TOOLS.filter(t => {
      const matchSearch = !q || t.label.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
      const matchCat = !activeCat || t.catLabel === activeCat;
      return matchSearch && matchCat;
    });
  }, [q, activeCat]);

  const favTools = ALL_TOOLS.filter(t => isFavorite(t.path));

  const toggleCollapse = (id) => setCollapsed(p => ({ ...p, [id]: !p[id] }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── HEADER ── */}
      <div className="text-center mb-7">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-foreground">Calculadoras Clínicas</h1>
        <p className="text-muted-foreground text-sm mt-1">Ferramentas rápidas para avaliação no atendimento pediátrico</p>
      </div>

      {/* ── SEARCH ── */}
      <div className="relative max-w-xl mx-auto mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar calculadora..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── CATEGORY FILTER CHIPS ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button onClick={() => setActiveCat(null)}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${!activeCat ? 'bg-primary text-white border-primary' : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}>
          Todas
        </button>
        {CATEGORIES.map(cat => {
          const meta = CAT_META[cat.color];
          const isActive = activeCat === cat.label;
          return (
            <button key={cat.id} onClick={() => setActiveCat(isActive ? null : cat.label)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${isActive ? `${meta.bg} ${meta.text} ${meta.border}` : 'bg-white text-muted-foreground border-border hover:border-primary/40'}`}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: 'currentColor', opacity: 0.6 }} />
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* ── LEFT: Main content ── */}
        <div className="flex-1 min-w-0 space-y-5">

          {/* Search / filter results */}
          {filtered && (
            <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
              <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
                <p className="font-bold text-sm text-foreground">{filtered.length} resultado{filtered.length !== 1 ? 's' : ''}</p>
                <button onClick={() => { setSearch(''); setActiveCat(null); }} className="text-xs text-muted-foreground hover:text-foreground transition-colors">Limpar filtros</button>
              </div>
              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-3xl mb-2">🔍</p>
                  <p className="font-semibold text-foreground text-sm">Nenhuma calculadora encontrada</p>
                </div>
              ) : (
                <div className="divide-y divide-border/60">
                  {filtered.map(tool => <ToolRow key={tool.path} tool={tool} isFav={isFavorite(tool.path)} onFav={() => toggleFavorite(tool.path)} />)}
                </div>
              )}
            </div>
          )}

          {/* Category sections */}
          {!filtered && (
            <div className="space-y-4">
              {CATEGORIES.map((cat, ci) => {
                const meta = CAT_META[cat.color];
                const isCollapsed = collapsed[cat.id];
                return (
                  <motion.div key={cat.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.05 }}
                    className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <button onClick={() => toggleCollapse(cat.id)} className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-secondary/20 transition-colors">
                      <span className="text-xl">{cat.icon}</span>
                      <span className={`text-base font-extrabold ${meta.text}`}>{cat.label}</span>
                      <span className={`ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full ${meta.pill}`}>
                        {cat.tools.length} calculadora{cat.tools.length !== 1 ? 's' : ''}
                      </span>
                      {isCollapsed ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronUp className="w-4 h-4 text-muted-foreground" />}
                    </button>
                    {/* Tools */}
                    <AnimatePresence initial={false}>
                      {!isCollapsed && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <div className="divide-y divide-border/60 border-t border-border">
                            {cat.tools.map(tool => (
                              <ToolRow key={tool.path} tool={tool} isFav={isFavorite(tool.path)} onFav={() => toggleFavorite(tool.path)} catMeta={meta} />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}

          <p className="text-center text-xs text-muted-foreground/60 mt-4 pb-4">
            Ferramentas de suporte à decisão clínica · Não substituem avaliação médica individualizada
          </p>
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">

          {/* Counter card */}
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary leading-none">{TOTAL}</p>
              <p className="text-sm font-semibold text-foreground">calculadoras disponíveis</p>
              <p className="text-xs text-muted-foreground mt-0.5">Atualizadas e validadas para uso clínico pediátrico.</p>
            </div>
          </div>

          {/* Favoritos sidebar */}
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <p className="font-bold text-sm text-foreground">Favoritos</p>
              <Link to="/favoritos" className="ml-auto text-xs font-semibold text-primary hover:underline">Ver todos</Link>
            </div>
            {favTools.length === 0 ? (
              <div className="px-5 py-6 text-center">
                <p className="text-sm text-muted-foreground">Nenhuma calculadora favoritada ainda.</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Toque em ⭐ em qualquer ferramenta para salvar aqui.</p>
              </div>
            ) : (
              <div className="divide-y divide-border/60">
                {favTools.slice(0, 5).map(tool => {
                  const cat = CATEGORIES.find(c => c.tools.some(t => t.path === tool.path));
                  const meta = CAT_META[cat?.color || 'blue'];
                  return (
                    <Link key={tool.path} to={tool.path}>
                      <div className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/40 transition-colors">
                        <div className={`w-8 h-8 rounded-lg ${meta.bg} flex items-center justify-center flex-shrink-0`}>
                          <tool.Icon className={`w-4 h-4 ${meta.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">{tool.label}</p>
                          <p className={`text-xs ${meta.text} truncate`}>{tool.catLabel || cat?.label}</p>
                        </div>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
            <div className="px-5 py-3 border-t border-border">
              <Link to="/favoritos" className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Gerenciar favoritos <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolRow({ tool, isFav, onFav, catMeta }) {
  const meta = catMeta || CAT_META['blue'];
  return (
    <div className="flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/30 transition-colors group">
      <Link to={tool.path} className="flex items-center gap-4 flex-1 min-w-0">
        <div className={`w-9 h-9 rounded-xl ${meta.bg} flex items-center justify-center flex-shrink-0`}>
          <tool.Icon className={`w-4 h-4 ${meta.text}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-foreground">{tool.label}</p>
          <p className="text-xs text-muted-foreground truncate">{tool.desc}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full hidden sm:inline ${tool.badgeColor}`}>{tool.badge}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </Link>
      <button onClick={e => { e.preventDefault(); onFav(); }} className="p-1 flex-shrink-0" title={isFav ? 'Remover favorito' : 'Favoritar'}>
        <Star className={`w-4 h-4 transition-colors ${isFav ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`} />
      </button>
    </div>
  );
}