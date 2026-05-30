import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, ChevronRight, AlertTriangle,
  BookOpen, FlaskConical, Microscope, Zap,
  Calculator, Droplets, Activity, Scale,
  Syringe, Baby, Shield, RefreshCw, Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllGuideDrugs } from '@/lib/guideData';
import { searchDrugs } from '@/lib/searchDrugs';
import { getAllDosagens } from '@/lib/dosagensData';

// Quick category shortcuts
const QUICK_CATS = [
  { label: 'Doses',      icon: '💊', path: '/dosagens' },
  { label: 'Emergência', icon: '🚨', path: '/drogas-emergencia' },
  { label: 'Hidratação', icon: '💧', path: '/hidratacao' },
  { label: 'Escores',    icon: '📊', path: '/calculadoras-hub' },
  { label: 'Vacinas',    icon: '💉', path: '/vacinas' },
  { label: 'Crescimento',icon: '📈', path: '/imc' },
  { label: 'Curvas',     icon: '📈', path: '/crescimento' },
];

// Main feature cards
const MAIN_CARDS = [
  {
    label: 'Guia de Medicamentos',
    desc: 'Doses, administração e apresentações organizadas por princípio ativo.',
    path: '/guia',
    icon: BookOpen,
    gradient: 'from-blue-500 to-blue-700',
    shadow: 'shadow-blue-200',
  },
  {
    label: 'Favoritos',
    desc: 'Ferramentas e medicamentos que você marcou como favoritos.',
    path: '/favoritos',
    icon: FlaskConical,
    gradient: 'from-violet-500 to-purple-700',
    shadow: 'shadow-purple-200',
  },
  {
    label: 'Biblioteca',
    desc: 'Resumos clínicos e protocolos em um só lugar.',
    path: '/biblioteca',
    icon: BookOpen,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-200',
  },
  {
    label: 'SophIA — IA Pediátrica',
    desc: 'Inteligência artificial — evidências e diretrizes clínicas.',
    path: '/pesquisa',
    icon: Microscope,
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-200',
  },
];

// Quick access shortcuts
const QUICK_ACCESS = [
  { label: 'Calculadoras', desc: 'IMC, superfície corporal, medicações e mais.', icon: '🧮', path: '/calculadoras-hub' },
  { label: 'Cálculos',     desc: 'Fórmulas e cálculos pediátricos essenciais.', icon: '➕', path: '/dosagens' },
  { label: 'Escalas e Escores', desc: 'Avaliações clínicas validadas.', icon: '⭐', path: '/calculadoras-hub' },
  { label: 'Hidratação',   desc: 'Volumes, soluções e velocidades.', icon: '💧', path: '/hidratacao' },
  { label: 'Sinais Vitais', desc: 'Valores de referência e parâmetros.', icon: '📋', path: '/sinais-vitais' },
  { label: 'Entrar em Contato', desc: 'Fale conosco e compartilhe feedback.', icon: '📧', path: '/contato' },
];

const ALL_SEARCH_TOOLS = [
  // Main sections
  { label: 'Dosagens — Cálculo Rápido', desc: 'Calcule doses por peso instantaneamente · 30+ medicamentos', path: '/dosagens', keywords: ['dosagem', 'dose', 'calculo', 'peso', 'paracetamol', 'ibuprofeno', 'amoxicilina', 'dipirona', 'cetirizina', 'omeprazol', 'salbutamol'] },
  { label: 'Guia de Medicamentos', desc: 'Doses, preparo e apresentações · 100+ fármacos', path: '/guia', keywords: ['guia', 'doses', 'medicamentos', 'antibióticos', 'bula', 'fármaco', 'princípio ativo'] },
  { label: 'Protocolos Clínicos', desc: 'Diretrizes passo a passo · Fluxogramas', path: '/protocolos', keywords: ['protocolo', 'asma', 'bronquiolite', 'febre', 'diarreia', 'meningite', 'convulsão', 'pneumonia', 'faringoamigdalite', 'anemia', 'itu'] },
  { label: 'Resumos Clínicos', desc: 'Sínteses baseadas em evidências · 25+ tópicos', path: '/resumos', keywords: ['resumo', 'varicela', 'sarampo', 'diarreia', 'exantema', 'coqueluche', 'covid', 'aleitamento'] },
  { label: 'Biblioteca', desc: 'Resumos e protocolos em um só lugar', path: '/biblioteca', keywords: ['biblioteca', 'conteúdo', 'busca'] },
  { label: 'Explorar Ferramentas', desc: 'Descobra todas as 25+ ferramentas disponíveis', path: '/ferramentas', keywords: ['ferramentas', 'explorar', 'ver tudo', 'todas'] },
  { label: 'SophIA — IA Pediátrica', desc: 'Inteligência artificial · Busca inteligente de evidências', path: '/pesquisa', keywords: ['pesquisa', 'evidência', 'guideline', 'sophia', 'ia', 'inteligência', 'artificial'] },
  
  // Calculadoras & Escores
  { label: 'Calculadoras', desc: 'IMC, superfície corporal e cálculos pediátricos', path: '/calculadoras-hub', keywords: ['calculadora', 'imc', 'superfície', 'corporal', 'cálculo'] },
  { label: 'APGAR', desc: 'Avaliação da vitalidade neonatal', path: '/apgar', keywords: ['apgar', 'recém-nascido', 'rn', 'neonatal', 'score', 'vitalidade'] },
  { label: 'Escore de Rodwell', desc: 'Probabilidade de sepse neonatal', path: '/rodwell', keywords: ['rodwell', 'sepse', 'neonatal', 'hemograma', 'score'] },
  { label: 'Glasgow Pediátrica', desc: 'Nível de consciência em crianças', path: '/glasgow-pediatrico', keywords: ['glasgow', 'consciência', 'coma', 'neurológico', 'score'] },
  { label: 'PEWS', desc: 'Alerta precoce de deterioração pediátrica', path: '/pews', keywords: ['pews', 'alerta', 'deterioração', 'enfermaria', 'score'] },
  { label: 'SIPA', desc: 'Shock Index pediatric age-adjusted', path: '/sipa', keywords: ['sipa', 'choque', 'shock', 'índice', 'emergência'] },
  { label: 'Silverman-Anderson', desc: 'Desconforto respiratório neonatal', path: '/silverman-anderson', keywords: ['silverman', 'anderson', 'desconforto', 'respiratório', 'rn'] },
  { label: 'Centor/McIsaac', desc: 'Probabilidade de faringoamigdalite estreptocócica', path: '/centor-mcisaac', keywords: ['centor', 'mcisaac', 'faringoamigdalite', 'garganta', 'streptococo'] },
  
  // Tools & References
  { label: 'Hidratação Venosa', desc: 'Volumes, soluções e velocidades', path: '/hidratacao', keywords: ['hidratação', 'venosa', 'soro', 'holliday', 'fluidos', 'iv'] },
  { label: 'Drogas na Emergência', desc: 'Bolus e infusão contínua com Broselow', path: '/drogas-emergencia', keywords: ['emergência', 'drogas', 'broselow', 'infusão', 'bolus', 'reanimação'] },
  { label: 'Vacinas', desc: 'Calendário vacinal e informações detalhadas', path: '/vacinas', keywords: ['vacina', 'imunização', 'calendário', 'doses'] },
  { label: 'Pressão Arterial Pediátrica', desc: 'Valores de referência por percentil', path: '/pressao-arterial', keywords: ['pressão', 'pa', 'arterial', 'hipertensão', 'valores'] },
  { label: 'Perímetro Cefálico', desc: 'Percentis e avaliação do crescimento', path: '/perimetro-cefalico', keywords: ['perímetro', 'cefálico', 'cabeça', 'crescimento', 'percentil'] },
  { label: 'IMC Pediátrico', desc: 'Índice de massa corporal para crianças', path: '/imc', keywords: ['imc', 'índice', 'massa', 'corporal', 'peso'] },
  { label: 'Alvo Parental', desc: 'Estimativa da altura adulta esperada', path: '/alvo-parental', keywords: ['alvo', 'parental', 'altura', 'genética', 'crescimento'] },
  { label: 'Idade Gestacional Corrigida', desc: 'Cálculo para prematuros', path: '/idade-gestacional-corrigida', keywords: ['idade', 'gestacional', 'corrigida', 'prematuro', 'ajuste'] },
  { label: 'Desenvolvimento Infantil', desc: 'Marcos dos 2 meses aos 5 anos', path: '/desenvolvimento', keywords: ['desenvolvimento', 'marco', 'neurodesenvolvimento', 'infância'] },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchResults = search.trim().length > 1
    ? [
        ...ALL_SEARCH_TOOLS.filter(t =>
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
          desc: `${d.catLabel} · ${d.indicacoes?.length ?? 1} indicação`,
          path: `/dosagens?drug=${d.id}`,
          type: 'dosagem',
        })),
        ...searchDrugs(search, 4).map(d => ({
          label: d.name, desc: d.catLabel, path: `/guia?drug=${d.id}`, catIcon: d.catIcon, type: 'drug'
        })),
      ]
    : [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

      {/* ── HERO ── */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <img
          src="https://media.base44.com/images/public/69ecb71457668abac5516abd/349814975_ChatGPTImage17demai-remove-bg-io3.png"
          alt="PedBox"
          className="h-28 w-auto mx-auto"
        />
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight tracking-tight">
            Doses, Protocolos e Cálculos<br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Essenciais no Plantão
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Acesso rápido, confiável e baseado em evidências para decisões clínicas seguras em pediatria.
          </p>
        </div>
      </motion.div>

      {/* ── SEARCH ── */}
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar medicamento, protocolo ou ferramenta..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-border rounded-2xl pl-12 pr-4 py-3.5 text-sm md:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-30">
              {searchResults.map((r, i) => (
                <button key={i} onClick={() => { navigate(r.path); setSearch(''); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-0">
                  <div className="text-primary flex-shrink-0 text-lg">
                    {r.type === 'drug' ? r.catIcon : r.type === 'dosagem' ? '⚡' : '🔍'}
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

      {/* ── CATEGORY CHIPS ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}
        className="flex flex-wrap justify-center gap-2">
        {QUICK_CATS.map(cat => (
          <Link key={cat.path} to={cat.path}>
            <motion.div whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border rounded-full text-sm font-semibold text-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* ── BETA DISCLAIMER ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14 }}
        className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 max-w-3xl mx-auto">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Versão Beta — em desenvolvimento:</strong> Esta ferramenta está em fase beta e erros podem ocorrer.{' '}
          Sempre valide todas as informações com protocolos institucionais, literatura oficial e supervisão médica antes de qualquer decisão clínica.{' '}
          <strong>Destinada exclusivamente a profissionais de saúde habilitados.</strong>
        </p>
      </motion.div>

      {/* ── MAIN CARDS ── */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MAIN_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.path} to={card.path}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-5 text-white shadow-lg ${card.shadow} flex flex-col gap-3 h-full min-h-[180px] cursor-pointer`}>
                  <div className="bg-white/20 rounded-xl p-2.5 w-fit">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base leading-tight">{card.label}</p>
                    <p className="text-white/75 text-xs mt-1.5 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-white/70 text-xs font-semibold">
                    Acessar <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* ── QUICK ACCESS ── */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="text-base font-extrabold text-foreground mb-4">Acessos rápidos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {QUICK_ACCESS.map((item) => (
            <Link key={item.path + item.label} to={item.path}>
              <motion.div whileTap={{ scale: 0.96 }}
                className="bg-white border border-border rounded-2xl p-4 flex flex-col gap-2 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                <span className="text-2xl">{item.icon}</span>
                <p className="font-bold text-xs text-foreground leading-snug">{item.label}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mt-auto" />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── FOOTER TRUST BAR ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}
        className="flex flex-wrap justify-center gap-6 py-5 border-t border-border text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Conteúdo baseado em evidências e diretrizes atualizadas</span>
        <span className="flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5 text-primary" /> Atualizações frequentes</span>
        <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-primary" /> Feito para o plantão pediátrico</span>
      </motion.div>

    </div>
  );
}