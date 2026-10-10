import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function ProtectedRoute({ admin = false }) {
  const { user, isLoadingAuth, error } = useAuth();
  const location = useLocation();
  if (isLoadingAuth) return <p className="p-8">Carregando…</p>;
  if (error) return <p className="p-8" role="alert">{error}</p>;
  if (!user) return <Navigate replace to={'/login?returnTo=' + encodeURIComponent(location.pathname + location.search)} />;
  if (admin && user.role !== 'admin') return <p className="p-8" role="alert">Acesso restrito ao administrador.</p>;
  return <Outlet />;
}
