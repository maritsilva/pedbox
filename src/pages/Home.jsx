import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, ChevronRight, AlertTriangle,
  BookOpen, FlaskConical, Microscope, Zap,
  Calculator, Droplets, Activity, Scale,
  Syringe, Baby, Shield, RefreshCw, Heart, X } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { universalSearch, TYPE_BADGE } from '@/lib/universalSearch';

// Quick category shortcuts
const QUICK_CATS = [
{ label: 'Doses', icon: '💊', path: '/dosagens' },
{ label: 'Emergência', icon: '🚨', path: '/drogas-emergencia' },
{ label: 'Hidratação', icon: '💧', path: '/hidratacao' },
{ label: 'Escores', icon: '📊', path: '/calculadoras-hub' },
{ label: 'Vacinas', icon: '💉', path: '/vacinas' },
{ label: 'Crescimento', icon: '📈', path: '/imc' },
{ label: 'Curvas', icon: '📈', path: '/curvas-crescimento' }];


// Main feature cards
const MAIN_CARDS = [
{
  label: 'Calculadora de Doses',
  desc: 'Calculadora pediátrica com doses precisas, conversões e apresentações medicamentosas.',
  path: '/dosagens',
  icon: BookOpen,
  gradient: 'from-blue-500 to-blue-700',
  shadow: 'shadow-blue-200'
},
{
  label: 'Favoritos',
  desc: 'Ferramentas e medicamentos que você marcou como favoritos.',
  path: '/favoritos',
  icon: FlaskConical,
  gradient: 'from-violet-500 to-purple-700',
  shadow: 'shadow-purple-200'
},
{
  label: 'Biblioteca',
  desc: 'Resumos clínicos e protocolos em um só lugar.',
  path: '/biblioteca',
  icon: BookOpen,
  gradient: 'from-cyan-500 to-blue-600',
  shadow: 'shadow-cyan-200'
},
{
  label: 'SophIA — IA Pediátrica',
  desc: 'Inteligência artificial — evidências e diretrizes clínicas.',
  path: '/pesquisa',
  icon: Microscope,
  gradient: 'from-emerald-500 to-teal-600',
  shadow: 'shadow-emerald-200'
}];


// Quick access shortcuts
const QUICK_ACCESS = [
{ label: 'Calculadoras', desc: 'Ferramentas clínicas: escores, crescimento, hidratação e mais.', icon: '🧮', path: '/calculadoras-hub' },
{ label: 'Doses', desc: 'Calculadora pediátrica de doses com conversões e apresentações.', icon: '💊', path: '/dosagens' },
{ label: 'Escalas e Escores', desc: 'Avaliações clínicas validadas.', icon: '⭐', path: '/calculadoras-hub' },
{ label: 'Hidratação', desc: 'Volumes, soluções e velocidades.', icon: '💧', path: '/hidratacao' },
{ label: 'Sinais Vitais', desc: 'Valores de referência e parâmetros.', icon: '📋', path: '/sinais-vitais' },
{ label: 'Entrar em Contato', desc: 'Fale conosco e compartilhe feedback.', icon: '📧', path: '/contato' }];




export default function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchResults = universalSearch(search, 14);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

      {/* ── HERO ── */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <img
          src="https://media.base44.com/images/public/69ecb71457668abac5516abd/7c6e2b506_montage.png"
          alt="PedBox"
          className="h-48 w-auto mx-auto" />
        
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight tracking-tight hidden">
            Doses, Protocolos e Cálculos<br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hidden">
              Essenciais no Plantão
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Calculadoras pediátricas de doses, protocolos e cálculos clínicos para o seu plantão

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
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-border rounded-2xl pl-12 pr-4 py-3.5 text-sm md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
        
        {search &&
        <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        }
        <AnimatePresence>
          {searchResults.length > 0 &&
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-30">
              {searchResults.map((r, i) => {
              const badge = TYPE_BADGE[r.type] || TYPE_BADGE.tool;
              return (
                <button key={i} onClick={() => {navigate(r.path);setSearch('');}}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-secondary transition-colors border-b border-border last:border-0">
                    <div className="text-lg flex-shrink-0 w-7 text-center">{r.icon || '🔍'}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-foreground truncate">{r.label}</p>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${badge.color} flex-shrink-0`}>{badge.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{r.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </button>);

            })}
            </motion.div>
          }
        </AnimatePresence>
        {search.trim().length > 1 && searchResults.length === 0 &&
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg px-4 py-3 z-30">
            <p className="text-sm text-muted-foreground">Nenhum resultado para "<strong>{search}</strong>"</p>
          </div>
        }
      </motion.div>

      {/* ── CATEGORY CHIPS ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}
      className="flex flex-wrap justify-center gap-2">
        {QUICK_CATS.map((cat) =>
        <Link key={cat.path} to={cat.path}>
            <motion.div whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border rounded-full text-sm font-semibold text-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </motion.div>
          </Link>
        )}
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
              </Link>);

          })}
        </div>
      </motion.div>

      {/* ── QUICK ACCESS ── */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="text-base font-extrabold text-foreground mb-4">Acessos rápidos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {QUICK_ACCESS.map((item) =>
          <Link key={item.path + item.label} to={item.path}>
              <motion.div whileTap={{ scale: 0.96 }}
            className="bg-white border border-border rounded-2xl p-4 flex flex-col gap-2 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                <span className="text-2xl">{item.icon}</span>
                <p className="font-bold text-xs text-foreground leading-snug">{item.label}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mt-auto" />
              </motion.div>
            </Link>
          )}
        </div>
      </motion.div>

      {/* ── FOOTER TRUST BAR ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}
      className="flex flex-wrap justify-center gap-6 py-5 border-t border-border text-xs text-muted-foreground hidden">
        <span className="flex items-center gap-1.5 hidden"><Shield className="w-3.5 h-3.5 text-primary" /> Conteúdo baseado em evidências e diretrizes atualizadas</span>
        <span className="flex items-center gap-1.5 hidden"><RefreshCw className="w-3.5 h-3.5 text-primary" /> Atualizações frequentes</span>
        <span className="flex items-center gap-1.5 hidden"><Heart className="w-3.5 h-3.5 text-primary" /> Feito para o plantão pediátrico</span>
      </motion.div>

    </div>);

}