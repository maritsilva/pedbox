import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Menu, Star } from 'lucide-react';
import { usePageFavorites, ALL_PAGES } from '@/hooks/usePageFavorites.jsx';

export default function MobileHeader({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === '/';
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const currentPath = location.pathname;
  const isFavoritablePage = ALL_PAGES.some(p => p.path === currentPath);
  const fav = isFavorite(currentPath);

  // Map routes to readable titles
  const routeTitles = {
    '/guia': 'Guia de medicamentos',
    '/biblioteca': 'Biblioteca',
    '/admin': 'Administração',
    '/calculadoras': 'Calculadoras',
    '/pesquisa': 'SophIA — IA Pediátrica',
    '/settings': 'Configurações',
    '/protocolos': 'Protocolos',
    '/hidratacao': 'Hidratação Venosa',
    '/imc': 'IMC Pediátrico',
    '/pressao-arterial': 'PA Pediátrica',
    '/perimetro-cefalico': 'Perímetro Cefálico',
    '/alvo-parental': 'Alvo Parental',
    '/ictericia': 'Icterícia neonatal',
    '/horas-de-vida': 'Horas de vida',
    '/idade-gestacional': 'Idade gestacional',
    '/idade-gestacional-corrigida': 'IG Corrigida',
    '/centor-mcisaac': 'Centor/McIsaac',
    '/desenvolvimento': 'Desenvolvimento',
    '/vacinas': 'Vacinas',
    '/about': 'Sobre o Pedbox',
    '/contact': 'Contato',
    '/ferramentas': 'Explorar Ferramentas',
    '/favoritos': 'Favoritos',
    '/dosagens': 'Dosagens',
    '/resumos': 'Resumos Clínicos',
    '/drogas-emergencia': 'Drogas na Emergência',
    '/calculadoras-hub': 'Calculadoras Clínicas',
    '/wood-downes': 'Wood-Downes',
    '/pram': 'PRAM — Asma',
    '/apgar': 'APGAR',
    '/glasgow-pediatrico': 'Glasgow Pediátrico',
    '/pews': 'PEWS',
    '/sipa': 'SIPA',
    '/silverman-anderson': 'Silverman-Anderson',
    '/rodwell': 'Escore de Rodwell',
    '/pas-asma': 'PAS — Asma',
  };

  const currentTitle = routeTitles[location.pathname] || 'PedBox';

  const handleBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate('/');
  };

  return (
    <header className="app-header sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border shadow-sm xl:hidden">
      <div className="h-16 px-4 flex items-center justify-between">
        {isRoot ? (
          <>
            <Link to="/" className="flex items-center">
              <img
                src="/assets/pedbox-mobile.png"
                alt="PedBox"
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-1">
              <Link to="/favoritos" className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Favoritos">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Abrir menu" aria-expanded={menuOpen}
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleBack}
              className="icon-action flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <p className="flex-1 text-center text-sm font-bold text-foreground truncate px-4">
              {currentTitle}
            </p>
            {isFavoritablePage ? (
              <button
                onClick={() => toggleFavorite(currentPath)}
                className="icon-action"
                title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                <Star className={`w-5 h-5 transition-colors ${fav ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              </button>
            ) : (
              <div className="w-10" />
            )}
          </>
        )}
      </div>
    </header>
  );
}