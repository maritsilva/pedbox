import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      { to: '/desenvolvimento', label: 'Desenvolvimento Infantil' },
      { to: '/contato', label: 'Contato & Colaboração' },
    ],
  },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(new Set(['inicio', 'referencias', 'calculadoras']));
  const location = useLocation();

  const toggleCategory = (id) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedCategories(newSet);
  };

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
          <nav className="hidden md:flex items-center gap-6">
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

          {/* Mobile burger */}
          <button className="md:hidden p-2 rounded-lg hover:bg-secondary" onClick={() => setOpen(o => !o)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-white px-4 py-3 flex flex-col gap-2 max-h-96 overflow-y-auto">
            {menuCategories.map(category => (
              <div key={category.id}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary rounded-lg transition-all"
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
                        className={`block px-4 py-2 rounded-lg text-sm transition-all ${
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

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 PedBox · Para uso por profissionais de saúde</p>
          <p className="mt-1 text-xs">Este conteúdo serve como orientação para tomadas de decisão médica. Sempre valide com protocolos institucionais.</p>
        </div>
      </footer>
    </div>
  );
}