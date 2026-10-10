import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Menu, Star } from 'lucide-react';
import { usePageFavorites, ALL_PAGES } from '@/hooks/usePageFavorites.jsx';
import PedBoxLogo from '@/components/brand/PedBoxLogo';
import { ROUTE_TITLES } from '@/lib/navigation';

export default function MobileHeader({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === '/';
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const currentPath = location.pathname;
  const isFavoritablePage = ALL_PAGES.some((p) => p.path === currentPath);
  const fav = isFavorite(currentPath);

  const currentTitle = ROUTE_TITLES[location.pathname] || 'PedBox';

  const handleBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate('/');
  };

  return (
    <header className="app-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs lg:hidden">
      <div className="h-14 px-4 flex items-center justify-between">
        {isRoot ? (
          <>
            <Link to="/" className="flex items-center">
              <PedBoxLogo variant="full" iconClassName="w-7 h-7" className="text-xl" />
            </Link>
            <div className="flex items-center gap-1">
              <Link
                to="/favoritos"
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Favoritos"
              >
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-700"
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleBack}
              className="p-2 -ml-2 text-brand-navy hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <p className="flex-1 text-center text-sm font-bold text-slate-800 truncate px-2">
              {currentTitle}
            </p>
            {isFavoritablePage ? (
              <button
                onClick={() => toggleFavorite(currentPath)}
                className="p-2 -mr-2"
                title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                <Star
                  className={`w-5 h-5 transition-colors ${
                    fav ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                  }`}
                />
              </button>
            ) : (
              <div className="w-8" />
            )}
          </>
        )}
      </div>
    </header>
  );
}