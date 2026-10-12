import { CALCULATORS } from '@/lib/calculatorRegistry';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileHeader from './MobileHeader';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import OfflineBanner from './OfflineBanner';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import AppSidebar from './shell/AppSidebar';
import AppTopbar from './shell/AppTopbar';
import { MAIN_NAV_ITEMS, SECONDARY_NAV_ITEMS, MOBILE_BOTTOM_NAV } from '@/lib/navigation';

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [tabStates, setTabStates] = useState({});
  const location = useLocation();
  const mainRef = useRef(null);
  const clinicalTool = CALCULATORS.find((tool) => tool.path === location.pathname);
  const isOnline = useOnlineStatus();

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

  useEffect(() => {
    if (mainRef.current && tabStates[location.pathname]) {
      mainRef.current.scrollTop = tabStates[location.pathname].scrollPos;
    }
  }, [location.pathname]);

  return (
    <div className="app-shell min-h-screen bg-[#F3F8FC] flex text-[#243447]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:p-3">
        Ir para o conteúdo
      </a>

      {/* DESKTOP SIDEBAR (visible on lg and up) */}
      <div className="hidden lg:block">
        <AppSidebar />
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0">
        {!isOnline && <OfflineBanner />}

        {/* MOBILE HEADER (visible on screens below lg) */}
        <MobileHeader menuOpen={open} setMenuOpen={setOpen} />

        {/* DESKTOP TOPBAR */}
        <div className="hidden lg:block">
          <AppTopbar />
        </div>

        {/* DRAWER MENU FOR MOBILE */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent className="overflow-y-auto bg-white p-6">
            <SheetTitle className="text-brand-navy font-display text-lg font-bold">
              Menu PedBox
            </SheetTitle>
            <SheetDescription className="text-slate-500 text-xs">
              Ferramentas e referências clínicas pediátricas.
            </SheetDescription>
            <nav className="space-y-6 mt-6" aria-label="Menu principal">
              <section>
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Navegação Principal
                </h2>
                <div className="space-y-1">
                  {MAIN_NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-brand-sky hover:text-brand-navy transition-colors"
                      >
                        <Icon className="w-4 h-4 text-brand-teal" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Outras opções
                </h2>
                <div className="space-y-1">
                  {SECONDARY_NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            </nav>
          </SheetContent>
        </Sheet>

        {/* MAIN CONTENT AREA */}
        <main id="main-content" ref={mainRef} className="app-content flex-1 pb-20 lg:pb-8">
          <div>
            <div key={location.pathname}>
              {clinicalTool?.status === 'blocked' ? (
                <section className="clinical-page">
                  <header className="clinical-heading">
                    <h1>{clinicalTool.label}</h1>
                  </header>
                  <div className="review-note">
                    <strong>Em revisão — cálculo desativado</strong>
                    <p className="mt-2">{clinicalTool.blockedReason}</p>
                  </div>
                  <Link to="/calculadoras" className="text-brand-teal font-semibold underline">
                    Voltar às calculadoras
                  </Link>
                </section>
              ) : (
                <>
                  {clinicalTool?.status === 'available' && (
                    <div className="max-w-6xl mx-auto px-4 pt-4">
                      <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                        Revisão clínica pendente · consulte a referência e a população aplicável.
                      </p>
                    </div>
                  )}
                  <Outlet />
                </>
              )}
            </div>
          </div>
        </main>

        {/* DESKTOP FOOTER */}
        <footer className="hidden lg:block bg-white border-t border-slate-200/80 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <p className="font-medium">
              © {new Date().getFullYear()} PedBox · Plataforma gratuita de referência clínica em pediatria
            </p>
            <p className="text-slate-400">
              Prática pediátrica baseada em evidências científicas.
            </p>
          </div>
        </footer>

        {/* MOBILE BOTTOM TAB BAR (visible below lg) */}
        <nav
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-center justify-around h-15">
            {MOBILE_BOTTOM_NAV.map((item) => {
              const isActive = location.pathname === item.to;
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex flex-col items-center justify-center w-full h-full transition-all ${
                    isActive ? 'text-brand-navy' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive && item.to === '/favoritos'
                        ? 'fill-brand-navy text-brand-navy'
                        : ''
                    }`}
                  />
                  <span
                    className={`text-[11px] mt-1 ${
                      isActive ? 'font-bold text-brand-navy' : 'font-medium'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-slate-600"
            >
              <Menu className="w-5 h-5" />
              <span className="text-[11px] mt-1 font-medium">Mais</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}