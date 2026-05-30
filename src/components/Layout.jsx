import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, Home, BookOpen, Calculator, Microscope, Star, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileHeader from './MobileHeader';
import PullToRefresh from './PullToRefresh';

// Desktop nav items
const DESKTOP_NAV = [
  { to: '/',            label: 'Início' },
  { to: '/ferramentas', label: 'Ferramentas' },
  { to: '/protocolos',  label: 'Protocolos' },
  { to: '/guia',        label: 'Biblioteca' },
  { to: '/favoritos',   label: 'Favoritos' },
  { to: '/about',       label: 'Sobre o Pedbox' },
];

// Mobile drawer categories (for hamburger)
const DRAWER_CATS = [
  { label: 'Principal', items: [
    { to: '/',            label: '🏠 Início' },
    { to: '/ferramentas', label: '🧰 Explorar Ferramentas' },
    { to: '/favoritos',   label: '⭐ Favoritos' },
  ]},
  { label: 'Referências', items: [
    { to: '/guia',      label: '📖 Guia de Medicamentos' },
    { to: '/dosagens',  label: '⚡ Dosagens — Cálculo Rápido' },
    { to: '/protocolos',label: '🧪 Protocolos Clínicos' },
    { to: '/resumos',   label: '📝 Resumos Clínicos' },
    { to: '/pesquisa',  label: '🔬 PedResearch IA' },
  ]},
  { label: 'Ferramentas', items: [
    { to: '/hidratacao',          label: '💧 Hidratação Venosa' },
    { to: '/drogas-emergencia',   label: '🚨 Drogas na Emergência' },
    { to: '/calculadoras-hub',    label: '🧮 Calculadoras Clínicas' },
    { to: '/desenvolvimento',     label: '🌱 Desenvolvimento Infantil' },
    { to: '/vacinas',             label: '💉 Vacinas' },
  ]},
  { label: 'Sobre', items: [
    { to: '/about',   label: 'Sobre o Pedbox' },
    { to: '/contact', label: 'Contato & Colaboração' },
  ]},
];

const MOBILE_NAV = [
  { to: '/',            label: 'Home',      icon: Home },
  { to: '/ferramentas', label: 'Ferramentas', icon: Calculator },
  { to: '/protocolos',  label: 'Protocolos', icon: BookOpen },
  { to: '/favoritos',   label: 'Favoritos', icon: Star },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [tabStates, setTabStates] = useState({
    '/': { scrollPos: 0 },
    '/guia': { scrollPos: 0 },
    '/calculadoras': { scrollPos: 0 },
    '/pesquisa': { scrollPos: 0 },
    '/settings': { scrollPos: 0 },
  });
  const location = useLocation();
  const mainRef = React.useRef(null);

  // Save scroll position when navigating away
  useEffect(() => {
    return () => {
      if (mainRef.current) {
        setTabStates((prev) => ({
          ...prev,
          [location.pathname]: { scrollPos: mainRef.current.scrollTop },
        }));
      }
    };
  }, [location.pathname]);

  // Restore scroll position when entering a route
  useEffect(() => {
    if (mainRef.current && tabStates[location.pathname]) {
      mainRef.current.scrollTop = tabStates[location.pathname].scrollPos;
    }
  }, [location.pathname, tabStates]);

  return (
    <div className="min-h-screen bg-background flex flex-col font-inter overflow-hidden">
      {/* Mobile Header */}
      <MobileHeader menuOpen={open} setMenuOpen={setOpen} />
      {/* DESKTOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/69ecb71457668abac5516abd/349814975_ChatGPTImage17demai-remove-bg-io3.png"
              alt="PedBox"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-6 flex-1">
            {DESKTOP_NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-semibold whitespace-nowrap transition-all ${
                  location.pathname === item.to
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/about" title="Sobre o Pedbox" className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors">
            <Info className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="px-5 pt-5 pb-8 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <img src="https://media.base44.com/images/public/69ecb71457668abac5516abd/349814975_ChatGPTImage17demai-remove-bg-io3.png" alt="PedBox" className="h-7 w-auto" />
                  <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <span className="text-xl leading-none">✕</span>
                  </button>
                </div>
                {DRAWER_CATS.map(cat => (
                  <div key={cat.label}>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">{cat.label}</p>
                    <div className="space-y-0.5">
                      {cat.items.map(item => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-all select-none ${
                            location.pathname === item.to
                              ? 'bg-primary text-white font-semibold'
                              : 'text-foreground hover:bg-secondary'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main ref={mainRef} className="flex-1 pb-20 md:pb-0 overflow-y-auto">
        <PullToRefresh onRefresh={async () => {
          // Refresh logic can be added here
          await new Promise((resolve) => setTimeout(resolve, 500));
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </PullToRefresh>
      </main>

      {/* DESKTOP FOOTER */}
      <footer className="hidden md:block bg-white dark:bg-slate-900 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 PedBox · Para uso por profissionais de saúde</p>
          <p className="mt-1 text-xs">Este conteúdo serve como orientação para tomadas de decisão médica. Sempre valide com protocolos institucionais.</p>
        </div>
      </footer>

      {/* MOBILE BOTTOM TAB BAR */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-border md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex items-center justify-around h-16">
          {MOBILE_NAV.map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center w-full h-16 transition-all select-none touch-none ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
              >
                <Icon className={`w-6 h-6 ${isActive && item.to === '/favoritos' ? 'fill-primary' : ''}`} />
                <span className="text-xs mt-1 font-semibold">{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col items-center justify-center w-full h-16 text-muted-foreground select-none"
          >
            <Menu className="w-6 h-6" />
            <span className="text-xs mt-1 font-semibold">Mais</span>
          </button>
        </div>
      </nav>
    </div>
  );
}