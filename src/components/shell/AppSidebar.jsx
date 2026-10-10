import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PedBoxLogo from '@/components/brand/PedBoxLogo';
import { MAIN_NAV_ITEMS, SECONDARY_NAV_ITEMS } from '@/lib/navigation';
import { useAuth } from '@/lib/AuthContext';
import { LogIn, Settings } from 'lucide-react';
import { services } from '@/api/services';

export default function AppSidebar() {
  const location = useLocation();
  const { user } = useAuth();
  const fullPath = location.pathname + location.search;

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col shrink-0 min-h-screen sticky top-0 h-screen select-none z-30">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <Link to="/" className="inline-block transition-transform hover:scale-[1.02]">
          <PedBoxLogo variant="full" />
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Menu Principal
        </div>
        {MAIN_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            fullPath === item.to ||
            (item.to === '/' && location.pathname === '/') ||
            (item.to !== '/' && !item.to.includes('?') && location.pathname.startsWith(item.to)) ||
            (item.matchBase && location.pathname.startsWith(item.matchBase));

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-brand-sky text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive ? 'text-brand-teal' : 'text-slate-400 group-hover:text-brand-navy'
                }`}
              />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}

        <div className="pt-5 px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Mais Recursos
        </div>
        {SECONDARY_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-brand-sky text-brand-navy'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}

        {user?.role === 'admin' && (
          <Link
            to="/admin"
            className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50"
          >
            <Settings className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            <span>Administração</span>
          </Link>
        )}
      </div>

      {/* User profile / Login Footer */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50">
        {user ? (
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center text-white text-xs font-bold shrink-0">
              {user.full_name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-800 truncate leading-tight">
                {user.full_name || 'Profissional'}
              </p>
              <p className="text-[10px] text-brand-teal font-medium">Médico Pediátrico</p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => services.auth.redirectToLogin()}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Entrar / Cadastrar</span>
          </button>
        )}
      </div>
    </aside>
  );
}
