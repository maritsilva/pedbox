import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Menu, Home, LayoutGrid, BookOpen, Star, Info, Search, X, ChevronRight, User, LogIn } from 'lucide-react';
import { universalSearch as doUniversalSearch } from '@/lib/universalSearch';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import MobileHeader from './MobileHeader';
import PullToRefresh from './PullToRefresh';

const DESKTOP_NAV = [
  { to: '/',            label: 'Início',        Icon: Home },
  { to: '/ferramentas', label: 'Ferramentas',   Icon: LayoutGrid },
  { to: '/guia',        label: 'Bulas',         Icon: BookOpen },
  { to: '/biblioteca',  label: 'Biblioteca',    Icon: BookOpen },
  { to: '/favoritos',   label: 'Favoritos',     Icon: Star },
  { to: '/contato',     label: 'Sobre o Pedbox',Icon: Info },
];

const DRAWER_CATS = [
  { label: 'Principal', items: [
    { to: '/',            label: '🏠 Início' },
    { to: '/ferramentas', label: '🧰 Explorar Ferramentas' },
    { to: '/favoritos',   label: '⭐ Favoritos' },
  ]},
  { label: 'Referências', items: [
    { to: '/guia',       label: '📖 Guia de Medicamentos' },
    { to: '/dosagens',   label: '⚡ Dosagens — Cálculo Rápido' },
    { to: '/biblioteca', label: '📋 Condutas e Manejos' },
    { to: '/biblioteca', label: '🧪 Protocolos Clínicos' },
    { to: '/pesquisa',   label: '🔬 SophIA' },
  ]},
  { label: 'Ferramentas', items: [
    { to: '/hidratacao',        label: '💧 Hidratação Venosa' },
    { to: '/drogas-emergencia', label: '🚨 Drogas na Emergência' },
    { to: '/calculadoras-hub',  label: '🧮 Calculadoras Clínicas' },
    { to: '/desenvolvimento',   label: '🌱 Desenvolvimento Infantil' },
    { to: '/vacinas',           label: '💉 Vacinas' },
  ]},
  { label: 'Sobre', items: [
    { to: '/contato', label: 'Sobre o Pedbox & Contato' },
  ]},
];

const MOBILE_NAV = [
  { to: '/',            label: 'Home',        icon: Home },
  { to: '/ferramentas', label: 'Ferramentas', icon: LayoutGrid },
  { to: '/biblioteca',  label: 'Biblioteca',  icon: BookOpen },
  { to: '/favoritos',   label: 'Favoritos',   icon: Star },
];

export const ALL_SEARCH_TOOLS = [
  { label: 'Condutas e Manejos', path: '/biblioteca',          icon: '📋' },
  { label: 'Dosagens',           path: '/dosagens',          icon: '⚡' },
  { label: 'Guia de Medicamentos', path: '/guia',            icon: '📖' },
  { label: 'Protocolos Clínicos', path: '/biblioteca',        icon: '🧪' },
  { label: 'SophIA',  path: '/pesquisa',     icon: '🔬' },
  { label: 'Hidratação Venosa',  path: '/hidratacao',        icon: '💧' },
  { label: 'Drogas na Emergência', path: '/drogas-emergencia', icon: '🚨' },
  { label: 'Calculadoras Clínicas', path: '/calculadoras-hub', icon: '🧮' },
  { label: 'Vacinas',            path: '/vacinas',           icon: '💉' },
  { label: 'IMC Pediátrico',     path: '/imc',               icon: '📊' },
  { label: 'PA Pediátrica',      path: '/pressao-arterial',  icon: '❤️' },
  { label: 'APGAR',              path: '/apgar',             icon: '👶' },
  { label: 'Glasgow Pediátrico', path: '/glasgow-pediatrico', icon: '🧠' },
  { label: 'PEWS',               path: '/pews',              icon: '⚠️' },
  { label: 'SIPA',               path: '/sipa',              icon: '💓' },
  { label: 'PRAM',               path: '/pram',              icon: '💨' },
  { label: 'Wood-Downes',        path: '/wood-downes',       icon: '🫁' },
  { label: 'Silverman-Anderson', path: '/silverman-anderson', icon: '🫂' },
  { label: 'Escore de Rodwell',  path: '/rodwell',           icon: '🧬' },
  { label: 'Centor / McIsaac',   path: '/centor-mcisaac',    icon: '🦠' },
  { label: 'Desenvolvimento Infantil', path: '/desenvolvimento', icon: '🌱' },
];

export function NavSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const results = query.trim().length > 1
    ? doUniversalSearch(query, 10)
    : [];

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setOpen(false);
  };

  return (
    <div className="relative">
      {!open ? (
        <button
          onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/60 border border-border text-sm text-muted-foreground hover:bg-secondary transition-all"
        >
          <Search className="w-4 h-4" />
          <span className="hidden lg:block text-xs">Buscar...</span>
          <kbd className="hidden lg:block text-[10px] bg-white border border-border rounded px-1 py-0.5 font-mono">⌘K</kbd>
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar medicamento, protocolo ou ferramenta..."
              className="w-72 pl-9 pr-4 py-1.5 rounded-lg bg-white border border-primary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              onBlur={() => { if (!query) { setOpen(false); } }}
            />
          </div>
          <button onClick={() => { setOpen(false); setQuery(''); }}>
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      )}
      <AnimatePresence>
        {results.length > 0 && open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white border border-border rounded-xl shadow-xl overflow-hidden z-50"
          >
            {results.map((r, i) => (
              <button key={i} onClick={() => handleSelect(r.path)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-secondary transition-colors border-b border-border last:border-0">
                <span className="text-lg w-6 text-center flex-shrink-0">{r.icon || '🔍'}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{r.label}</p>
                  {r.desc && <p className="text-xs text-muted-foreground truncate">{r.desc}</p>}
                </div>
                <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto flex-shrink-0" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function UserMenu() {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    base44.auth.me().then(u => { setUser(u); setLoaded(true); }).catch(() => setLoaded(true));
  }, []);

  if (!loaded) return <div className="w-8 h-8 rounded-full bg-secondary animate-pulse" />;

  if (!user) {
    return (
      <button
        onClick={() => base44.auth.redirectToLogin()}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
      >
        <LogIn className="w-4 h-4" />
        <span>Entrar</span>
      </button>
    );
  }

  const initials = user.full_name?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'U';

  return (
    <div className="relative">
      <button
        onClick={() => setDropOpen(v => !v)}
        className="flex items-center gap-2 rounded-full border border-border bg-white shadow-sm hover:shadow-md transition-all px-2 py-1"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white text-xs font-bold">
          {initials}
        </div>
        <ChevronRight className="w-3 h-3 text-muted-foreground rotate-90" />
      </button>
      <AnimatePresence>
        {dropOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setDropOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-xl shadow-xl z-50 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-border">
                <p className="text-sm font-bold text-foreground truncate">{user.full_name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  onClick={() => setDropOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors border-b border-border"
                >
                  <Settings className="w-4 h-4" />
                  Admin
                </Link>
              )}
              <button
                onClick={() => { base44.auth.logout(); setDropOpen(false); }}
                className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Sair
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [tabStates, setTabStates] = useState({});
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    return () => {
      if (mainRef.current) {
        setTabStates(prev => ({ ...prev, [location.pathname]: { scrollPos: mainRef.current.scrollTop } }));
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    if (mainRef.current && tabStates[location.pathname]) {
      mainRef.current.scrollTop = tabStates[location.pathname].scrollPos;
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col font-inter overflow-hidden">
      {/* Mobile Header */}
      <MobileHeader menuOpen={open} setMenuOpen={setOpen} />

      {/* DESKTOP NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm hidden md:flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 h-14 flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/69ecb71457668abac5516abd/7c6e2b506_montage.png"
              alt="PedBox"
              className="h-8 w-auto"
            />
          </Link>

          {/* Nav - centered */}
          <nav className="flex items-center gap-1 flex-1 justify-center">
            {DESKTOP_NAV.map(item => {
              const Icon = item.Icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all relative group ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: search + user */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <NavSearch />
            <UserMenu />
          </div>
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
                  <img src="https://media.base44.com/images/public/69ecb71457668abac5516abd/7c6e2b506_montage.png" alt="PedBox" className="h-7 w-auto" />
                  <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <X className="w-5 h-5 text-foreground" />
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
        <PullToRefresh onRefresh={async () => { await new Promise(r => setTimeout(r, 500)); }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </PullToRefresh>
      </main>

      {/* DESKTOP FOOTER */}
      <footer className="hidden md:block bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-5 text-center text-xs text-muted-foreground">
          <p>© 2025 PedBox · Para uso por profissionais de saúde habilitados</p>
          <p className="mt-1">Este conteúdo serve como orientação clínica. Sempre valide com protocolos institucionais.</p>
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
                className={`flex flex-col items-center justify-center w-full h-16 transition-all select-none ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
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