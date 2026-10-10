import { CALCULATORS } from '@/lib/calculatorRegistry';
import { useAuth } from '@/lib/AuthContext';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Menu, Home, LayoutGrid, BookOpen, Star, Search, X, ChevronRight, LogIn, WifiOff } from 'lucide-react';
import { universalSearch as doUniversalSearch } from '@/lib/universalSearch';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/api/services';
import MobileHeader from './MobileHeader';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import OfflineBanner from './OfflineBanner';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const DESKTOP_NAV = [
  { to: '/',            label: 'Início',        Icon: Home },
  { to: '/dosagens', label: 'Dosagens', Icon: LayoutGrid },
  { to: '/calculadoras', label: 'Calculadoras', Icon: LayoutGrid },
  { to: '/guia',        label: 'Bulas',         Icon: BookOpen },
  { to: '/biblioteca',  label: 'Biblioteca',    Icon: BookOpen },
  { to: '/favoritos',   label: 'Favoritos',     Icon: Star },
];

const DRAWER_CATS = [
  { label: 'Principal', items: [
    { to: '/',            label: 'Início' },
    { to: '/ferramentas', label: 'Explorar Ferramentas' },
    { to: '/favoritos',   label: 'Favoritos' },
  ]},
  { label: 'Referências', items: [
    { to: '/guia',       label: 'Guia de Medicamentos' },
    { to: '/dosagens',   label: 'Dosagens — Cálculo Rápido' },
    { to: '/biblioteca?tab=condutas', label: 'Condutas' },
    { to: '/biblioteca?tab=protocolos', label: 'Protocolos' },
    { to: '/pesquisa',   label: 'SophIA' },
  ]},
  { label: 'Ferramentas', items: [
    { to: '/hidratacao',        label: 'Hidratação Venosa' },
    { to: '/drogas-emergencia', label: 'Drogas na Emergência' },
    { to: '/calculadoras-hub',  label: 'Calculadoras Clínicas' },
    { to: '/desenvolvimento',   label: 'Desenvolvimento Infantil' },
    { to: '/vacinas',           label: 'Vacinas' },
  ]},
  { label: 'Sobre', items: [
    { to: '/contato', label: 'Sobre o Pedbox & Contato' },
  ]},
];

const MOBILE_NAV = [
  { to: '/',            label: 'Início',        icon: Home },
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
  useEffect(() => {
    const onKey = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(true); setTimeout(() => inputRef.current?.focus(), 0); }
      if (event.key === 'Escape') { setOpen(false); setQuery(''); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
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
  const { user, isLoadingAuth } = useAuth();
  const loaded = !isLoadingAuth;
  const [dropOpen, setDropOpen] = useState(false);

  if (!loaded) return <div className="w-8 h-8 rounded-full bg-secondary animate-pulse" />;

  if (!user) {
    return (
      <button
        onClick={() => services.auth.redirectToLogin()}
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
                onClick={() => { services.auth.logout(); setDropOpen(false); }}
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
  const clinicalTool = CALCULATORS.find(tool => tool.path === location.pathname);
  const isOnline = useOnlineStatus();

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
    <div className="app-shell min-h-screen bg-background flex flex-col font-inter">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:p-3">Ir para o conteúdo</a>
      {/* Offline Banner */}
      {!isOnline && <OfflineBanner />}

      {/* Mobile Header */}
      <MobileHeader menuOpen={open} setMenuOpen={setOpen} />

      {/* DESKTOP NAVBAR */}
      <header className="app-header sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm hidden xl:flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 h-16 flex items-center gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/assets/pedbox-logo.png"
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
                  className={`flex items-center gap-1.5 px-2 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all relative group ${
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
            {!isOnline && (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                <WifiOff className="w-3.5 h-3.5" /> Offline
              </span>
            )}
            <NavSearch />
            <UserMenu />
          </div>
        </div>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="overflow-y-auto bg-white">
          <SheetTitle>Menu</SheetTitle><SheetDescription>Ferramentas e referências do PedBox.</SheetDescription>
          <nav className="space-y-6 mt-6" aria-label="Menu principal">
            {DRAWER_CATS.map(cat => <section key={cat.label}><h2 className="text-xs font-semibold text-muted-foreground mb-2">{cat.label}</h2><div className="space-y-1">{cat.items.map(item => <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm hover:bg-secondary" aria-current={location.pathname + location.search === item.to ? 'page' : undefined}>{item.label}</Link>)}</div></section>)}
          </nav>
        </SheetContent>
      </Sheet>

      {/* MAIN CONTENT */}
      <main id="main-content" ref={mainRef} className="app-content flex-1 pb-24 xl:pb-0">
        <div>
          <div key={location.pathname}>
              {clinicalTool?.status === 'blocked' ? <section className="clinical-page"><header className="clinical-heading"><h1>{clinicalTool.label}</h1></header><div className="review-note"><strong>Em revisão — cálculo desativado</strong><p className="mt-2">{clinicalTool.blockedReason}</p></div><Link to="/calculadoras" className="text-primary underline">Voltar às calculadoras</Link></section> : <>{clinicalTool?.status === 'available' && <div className="max-w-6xl mx-auto px-4 pt-4"><p className="text-xs text-amber-900">Revisão clínica pendente · consulte a referência e a população aplicável.</p></div>}<Outlet /></>}
          </div>
        </div>
      </main>

      {/* DESKTOP FOOTER */}
      <footer className="hidden xl:block bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-5 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PedBox · Para uso por profissionais de saúde habilitados</p>
          <p className="mt-1">Este conteúdo serve como orientação clínica. Sempre valide com protocolos institucionais.</p>
        </div>
      </footer>

      {/* MOBILE BOTTOM TAB BAR */}
      <nav className="bottom-navigation fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-border xl:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
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