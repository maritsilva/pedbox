import { createContext, useContext, useEffect, useState } from 'react';
import { services } from '@/api/services';
import { queryClientInstance } from '@/lib/query-client';

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoadingAuth, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let active = true;
    services.auth.me().then(value => { if (active) setUser(value); }).catch(err => {
      if (active && err.status !== 401) setError(err.message);
    }).finally(() => { if (active) setLoading(false); });
    const invalidate = () => { setUser(null); queryClientInstance.clear(); };
    window.addEventListener('pedbox:session-ended', invalidate);
    return () => { active = false; window.removeEventListener('pedbox:session-ended', invalidate); };
  }, []);

  const refreshUser = async () => {
    try {
      const value = await services.auth.me();
      setUser(value);
      return value;
    } catch {
      return null;
    }
  };

  return <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), isLoadingAuth,
    authChecked: !isLoadingAuth, error, logout: services.auth.logout, navigateToLogin: services.auth.redirectToLogin, refreshUser }}>
    {children}
  </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthProvider ausente');
  return context;
}
