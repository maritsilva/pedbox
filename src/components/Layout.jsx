import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, BookOpen, Calculator, Microscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileHeader from './MobileHeader';
import PullToRefresh from './PullToRefresh';

const menuCategories = [
  {
    id: 'inicio',
    label: 'Menu',
    items: [
      { to: '/', label: 'Início' },
    ],
  },
  {
    id: 'referencias',
    label: '📚 Referências',
    items: [
      { to: '/guia', label: 'Guia de Doses' },
      { to: '/protocolos', label: 'Protocolos Clínicos' },
      { to: '/pesquisa', label: '🔬 PedResearch' },
    ],
  },
  {
    id: 'calculadoras',
    label: '🔢 Calculadoras',
    items: [
      { to: '/hidratacao', label: 'Hidratação Venosa' },
      { to: '/imc', label: 'IMC Pediátrico' },
      { to: '/pressao-arterial', label: 'PA Pediátrica' },
      { to: '/perimetro-cefalico', label: 'Perímetro Cefálico' },
      { to: '/alvo-parental', label: 'Alvo Parental' },
      { to: '/idade-gestacional-corrigida', label: 'IG Corrigida' },
      { to: '/centor-mcisaac', label: 'Centor/McIsaac' },
      { to: '/wood-downes', label: 'Wood-Downes (Bronquiolite)' },
    ],
  },
  {
    id: 'saude-infantil',
    label: '💉 Saúde Infantil',
    items: [
      { to: '/desenvolvimento', label: 'Marcos do Desenvolvimento' },
      { to: '/vacinas', label: 'Vacinas' },
    ],
  },
  {
    id: 'comunidade',
    label: '💬 Comunidade',
    items: [
      { to: '/about', label: 'Sobre o PedBox' },
      { to: '/contact', label: 'Contato & Colaboração' },
    ],
  },
];

const MOBILE_NAV = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/guia', label: 'Guia', icon: BookOpen },
  { to: '/calculadoras', label: 'Calc.', icon: Calculator },
  { to: '/pesquisa', label: 'Pesq.', icon: Microscope },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(new Set(['inicio', 'referencias', 'calculadoras']));
  const [tabStates, setTabStates] = useState({
    '/': { scrollPos: 0 },
    '/guia': { scrollPos: 0 },
    '/calculadoras': { scrollPos: 0 },
    '/pesquisa': { scrollPos: 0 },
    '/settings': { scrollPos: 0 },
  });
  const location = useLocation();
  const mainRef = React.useRef(null);

  const toggleCategory = (id) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedCategories(newSet);
  };

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
      {/* DESKTOP NAVBAR (hidden on mobile) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69ecb71457668abac5516abd/5237c8a2e_ChatGPTImage17demai-remove-bg-io3.png"
              alt="PedBox"
              className="h-8 w-auto"
            />
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-all ${
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Início
            </Link>
            {menuCategories.slice(1).map(category => (
              <div key={category.id} className="relative group">
                <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-all flex items-center gap-1">
                  {category.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 py-2">
                  {category.items.map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-4 py-2 text-sm transition-all ${
                        location.pathname === item.to
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-white dark:bg-slate-800 px-4 py-3 flex flex-col gap-2 max-h-96 overflow-y-auto">
            {menuCategories.map(category => (
              <div key={category.id}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary rounded-lg transition-all select-none"
                >
                  {category.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedCategories.has(category.id) ? 'rotate-180' : ''}`} />
                </button>
                {expandedCategories.has(category.id) && (
                  <div className="pl-2 space-y-1">
                    {category.items.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-2 rounded-lg text-sm transition-all select-none ${
                          location.pathname === item.to
                            ? 'bg-primary text-white font-semibold'
                            : 'text-muted-foreground hover:bg-secondary'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

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
          {MOBILE_NAV.filter(item => item.to !== '/settings').map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center w-full h-16 transition-all select-none touch-none ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{
                  WebkitTouchCallout: 'none',
                  userSelect: 'none',
                }}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1 font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}