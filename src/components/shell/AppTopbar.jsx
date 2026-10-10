import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, X, WifiOff, LogIn, Settings, User } from 'lucide-react';
import { ROUTE_TITLES } from '@/lib/navigation';
import { universalSearch as doUniversalSearch } from '@/lib/universalSearch';
import { useAuth } from '@/lib/AuthContext';
import { services } from '@/api/services';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppTopbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isOnline = useOnlineStatus();

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [userDropdown, setUserDropdown] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const results = query.trim().length > 1 ? doUniversalSearch(query, 8) : [];

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setSearchOpen(false);
  };

  // Breadcrumbs generator
  const currentTitle = ROUTE_TITLES[location.pathname] || 'Consulta';
  const isHome = location.pathname === '/';

  return (
    <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Breadcrumb path */}
      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
        {!isHome && (
          <>
            <Link to="/" className="hover:text-brand-navy transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </>
        )}
        <span className="font-bold text-slate-800 text-sm">{currentTitle}</span>
      </div>

      {/* Right controls: Search, Offline badge & User Menu */}
      <div className="flex items-center gap-4">
        {!isOnline && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
            <WifiOff className="w-3.5 h-3.5" /> Offline
          </span>
        )}

        {/* Universal Search Trigger */}
        <div className="relative">
          {!searchOpen ? (
            <button
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all text-xs"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Buscar medicamento, calculadora...</span>
              <kbd className="hidden sm:inline-block text-[10px] bg-white border border-slate-200 rounded px-1.5 py-0.5 font-mono text-slate-500 shadow-2xs">
                ⌘K
              </kbd>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Digite sua busca..."
                  className="w-72 sm:w-80 pl-9 pr-4 py-1.5 rounded-xl bg-white border border-brand-teal text-sm focus:outline-none shadow-sm"
                  onBlur={() => {
                    if (!query) setSearchOpen(false);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setQuery('');
                }}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Search Dropdown */}
          <AnimatePresence>
            {results.length > 0 && searchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50 divide-y divide-slate-100"
              >
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(r.path)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-brand-sky/50 transition-colors"
                  >
                    <span className="text-base w-6 text-center shrink-0">{r.icon || '🔍'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate">{r.label}</p>
                      {r.desc && (
                        <p className="text-[11px] text-slate-500 truncate">{r.desc}</p>
                      )}
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User avatar & dropdown */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setUserDropdown((v) => !v)}
              className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
            >
              <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center">
                {user.full_name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span className="text-xs font-semibold text-slate-700 hidden md:inline">
                Olá, {user.full_name?.split(' ')[0] || 'Dra.'}
              </span>
            </button>

            <AnimatePresence>
              {userDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserDropdown(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 top-full mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-slate-100"
                  >
                    <div className="px-4 py-3 bg-slate-50/70">
                      <p className="text-xs font-bold text-slate-800 truncate">{user.full_name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/perfil"
                      onClick={() => setUserDropdown(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      <User className="w-3.5 h-3.5 text-brand-teal" />
                      Meu Perfil & Senha
                    </Link>
                    {(user.email === 'marina@pedbox.app' || user.id === 'local-developer') && (
                      <Link
                        to="/admin"
                        onClick={() => setUserDropdown(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50"
                      >
                        <Settings className="w-3.5 h-3.5 text-slate-500" />
                        Administração
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        services.auth.logout();
                        setUserDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 font-medium"
                    >
                      Sair
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <button
            onClick={() => services.auth.redirectToLogin()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-navy text-white text-xs font-semibold hover:bg-brand-blue transition-colors"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Entrar</span>
          </button>
        )}
      </div>
    </header>
  );
}
