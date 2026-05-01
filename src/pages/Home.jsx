import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplets, AlertTriangle, Search, Activity, Scale, ChevronRight, BookOpen, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs } from '@/lib/guideData';

const SECTIONS = [
  {
    label: 'Referências Clínicas',
    items: [
      {
        label: 'Guia de Doses',
        desc: 'Medicamentos pediátricos e adultos por categoria',
        path: '/guia',
        Icon: BookOpen,
        gradient: 'from-blue-500 to-blue-700',
        shadow: 'shadow-blue-200',
        keywords: ['guia', 'doses', 'medicamentos', 'drogas', 'remédios', 'antibióticos'],
      },
      {
        label: 'Protocolos Clínicos',
        desc: 'Diretrizes baseadas em evidências por condição',
        path: '/protocolos',
        Icon: FlaskConical,
        gradient: 'from-violet-500 to-purple-700',
        shadow: 'shadow-purple-200',
        keywords: ['protocolos', 'diretrizes', 'asma', 'bronquiolite', 'febre', 'diarreia'],
      },
    ],
  },
  {
    label: 'Calculadoras',
    items: [
      {
        label: 'Hidratação Venosa',
        desc: 'Expansão volêmica e manutenção (Holliday-Segar)',
        path: '/hidratacao',
        Icon: Droplets,
        gradient: 'from-cyan-500 to-teal-600',
        shadow: 'shadow-cyan-200',
        keywords: ['hidratação', 'hidratacao', 'venosa', 'expansão', 'soro', 'manutencao', 'holliday'],
      },
      {
        label: 'IMC Pediátrico',
        desc: 'Índice de massa corporal e curvas de crescimento',
        path: '/imc',
        Icon: Scale,
        gradient: 'from-green-500 to-emerald-600',
        shadow: 'shadow-green-200',
        keywords: ['imc', 'índice', 'massa', 'corporal', 'crescimento', 'peso', 'altura'],
      },
      {
        label: 'PA Pediátrica',
        desc: 'Pressão arterial e percentis por idade e sexo',
        path: '/pressao-arterial',
        Icon: Activity,
        gradient: 'from-rose-500 to-red-600',
        shadow: 'shadow-rose-200',
        keywords: ['pressão', 'pressao', 'arterial', 'hipertensão', 'pa'],
      },
    ],
  },
];

const ALL_TOOLS = SECTIONS.flatMap(s => s.items);

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchResults = search.trim().length > 1
    ? [
        ...ALL_TOOLS.filter(t =>
          t.label.toLowerCase().includes(search.toLowerCase()) ||
          t.keywords.some(k => k.includes(search.toLowerCase()))
        ).map(t => ({ ...t, type: 'tool' })),
        ...getAllGuideDrugs()
          .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
          .slice(0, 6)
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
    <div className="max-w-2xl mx-auto px-4 py-8">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-8"
      >
        <img
          src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
          alt="PedBox"
          className="h-20 w-auto mx-auto mb-4"
        />
        <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
          Referência clínica rápida para o plantão pediátrico — doses, protocolos e calculadoras.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-semibold px-4 py-2 rounded-full border border-primary/20">
          <span>🩺</span> Feito de residente para residente
        </div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-7 text-xs text-amber-800"
      >
        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p>Conteúdo desenvolvido por médicos em formação, revisado por pediatras e baseado nas principais referências da área. Criado para agilizar decisões clínicas no plantão.</p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative mb-8"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar medicamento, ferramenta ou protocolo..."
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
                    {r.type === 'drug'
                      ? <span className="text-lg">{r.catIcon}</span>
                      : r.Icon ? <r.Icon className="w-5 h-5" /> : null}
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
        {search.trim().length > 1 && searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-2xl shadow-lg px-4 py-3 z-30">
            <p className="text-sm text-muted-foreground">Nenhum resultado para "<strong>{search}</strong>"</p>
          </div>
        )}
      </motion.div>

      {/* Sections */}
      {SECTIONS.map((section, si) => (
        <motion.div
          key={section.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 + si * 0.08 }}
          className="mb-7"
        >
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">
            {section.label}
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {section.items.map((tool) => (
              <Link to={tool.path} key={tool.path}>
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className={`bg-gradient-to-r ${tool.gradient} rounded-2xl p-4 text-white shadow-md ${tool.shadow} flex items-center justify-between gap-4 cursor-pointer`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="bg-white/20 rounded-xl p-2.5 flex-shrink-0">
                      <tool.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-tight">{tool.label}</p>
                      <p className="text-white/75 text-xs mt-0.5">{tool.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/60 flex-shrink-0" />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}