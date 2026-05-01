import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/guia', label: 'Guia de Doses' },
  { to: '/hidratacao', label: 'Hidratação Venosa' },
  { to: '/imc', label: 'IMC Pediátrico' },
  { to: '/pressao-arterial', label: 'PA Pediátrica' },
  { to: '/pesquisa', label: '🔬 PedResearch' },
  { to: '/perimetro-cefalico', label: '📏 Perímetro Cefálico' },
  { to: '/alvo-parental', label: '📈 Alvo Parental' },
  { to: '/idade-gestacional-corrigida', label: '👶 IG Corrigida' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col font-inter">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69ecb71457668abac5516abd/f3370f5fd_Gemini_Generated_Image_curo51curo51curo1.png"
              alt="PedBox"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  location.pathname === l.to
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button className="md:hidden p-2 rounded-lg hover:bg-secondary" onClick={() => setOpen(o => !o)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-white px-4 py-3 flex flex-col gap-1">
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === l.to
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:bg-secondary'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 PedBox · Conteúdo revisado por pediatras · Para uso por profissionais de saúde</p>
          <p className="mt-1 text-xs">Este conteúdo serve como orientação para tomadas de decisão médica. Sempre valide com protocolos institucionais.</p>
        </div>
      </footer>
    </div>
  );
}