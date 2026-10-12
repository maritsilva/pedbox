import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function ProtectedRoute({ admin = false }) {
  const { user, isLoadingAuth, error } = useAuth();
  const location = useLocation();
  if (isLoadingAuth) return <p className="p-8">Carregando…</p>;
  if (error) return <p className="p-8" role="alert">{error}</p>;
  if (!user) return <Navigate replace to={'/login?returnTo=' + encodeURIComponent(location.pathname + location.search)} />;
  if (admin && user?.role !== 'admin') {
    return (
      <div className="clinical-page max-w-md mx-auto py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto text-xl font-bold">
          ✕
        </div>
        <h1 className="text-xl font-display font-extrabold text-brand-navy">Acesso restrito</h1>
        <p className="text-xs text-slate-500">
          Esta área é restrita exclusivamente aos administradores da plataforma.
        </p>
      </div>
    );
  }
  return <Outlet />;
}
