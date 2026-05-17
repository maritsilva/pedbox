import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, Menu } from 'lucide-react';

export default function MobileHeader({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === '/';

  // Map routes to readable titles
  const routeTitles = {
    '/guia': 'Guia de Doses',
    '/calculadoras': 'Calculadoras',
    '/pesquisa': 'PedResearch',
    '/settings': 'Configurações',
    '/protocolos': 'Protocolos',
    '/hidratacao': 'Hidratação',
    '/imc': 'IMC Pediátrico',
    '/pressao-arterial': 'PA Pediátrica',
    '/perimetro-cefalico': 'Perímetro Cefálico',
    '/alvo-parental': 'Alvo Parental',
    '/idade-gestacional-corrigida': 'IG Corrigida',
    '/centor-mcisaac': 'Centor/McIsaac',
    '/desenvolvimento': 'Desenvolvimento',
    '/vacinas': 'Vacinas',
    '/about': 'Sobre',
    '/contact': 'Contato',
  };

  const currentTitle = routeTitles[location.pathname] || 'PedBox';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border shadow-sm md:hidden">
      <div className="h-16 px-4 flex items-center justify-between">
        {isRoot ? (
          <>
            <Link to="/" className="flex items-center">
              <img
                src="https://media.base44.com/images/public/69ecb71457668abac5516abd/5237c8a2e_ChatGPTImage17demai-remove-bg-io3.png"
                alt="PedBox"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="flex-1 text-center text-sm font-bold text-foreground truncate px-4">
              {currentTitle}
            </h1>
            <div className="w-10" />
          </>
        )}
      </div>
    </header>
  );
}