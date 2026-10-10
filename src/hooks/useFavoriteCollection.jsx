import { useEffect, useRef, useState } from 'react';
import { services } from '@/api/services';
import { useAuth } from '@/lib/AuthContext';
import { toast } from 'sonner';

export function useFavoriteCollection(tipo) {
  const { user, isLoadingAuth } = useAuth();
  const [favorites, setFavorites] = useState([]), [loaded, setLoaded] = useState(false);
  const pending = useRef(new Set());
  const generation = useRef(0);
  useEffect(() => {
    const version = ++generation.current;
    setFavorites([]); setLoaded(false); pending.current.clear();
    if (isLoadingAuth) return;
    if (!user) { setLoaded(true); return; }
    services.favorites.filter({ tipo }).then(rows => {
      if (version === generation.current) setFavorites(rows.map(row => row.chave));
    }).catch(e => { if (version === generation.current) toast.error(e.message); })
      .finally(() => { if (version === generation.current) setLoaded(true); });
    return () => { generation.current++; };
  }, [user?.id, isLoadingAuth, tipo]);
  const toggleFavorite = async chave => {
    if (!user) { services.auth.redirectToLogin(); return; }
    if (!loaded || pending.current.has(chave)) return;
    const version = generation.current, exists = favorites.includes(chave);
    pending.current.add(chave);
    try {
      if (exists) await services.favorites.remove(tipo, chave);
      else await services.favorites.create({ tipo, chave });
      if (version === generation.current) setFavorites(prev => exists ? prev.filter(k => k !== chave) : [...new Set([...prev, chave])]);
    } catch (e) { if (version === generation.current) toast.error(e.message); }
    finally { if (version === generation.current) pending.current.delete(chave); }
  };
  return { favorites, loaded, isFavorite: chave => favorites.includes(chave), toggleFavorite };
}
