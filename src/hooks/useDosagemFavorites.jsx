import { useState, useEffect, useContext, createContext } from 'react';
import { base44 } from '@/api/base44Client';

const DosagemFavoritesContext = createContext(null);

export function DosagemFavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Carregar favoritos do servidor ao montar
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const user = await base44.auth.me();
        if (user) {
          const favoritos = await base44.entities.Favorito.list();
          setFavorites(favoritos.map(f => f.chave));
        }
      } catch (e) {
        console.error('Erro ao carregar favoritos:', e);
      }
      setLoaded(true);
    };
    loadFavorites();
  }, []);

  const isFavorite = (drugId) => favorites.includes(drugId);

  const toggleFavorite = async (drugId) => {
    try {
      const isFav = favorites.includes(drugId);
      
      if (isFav) {
        // Remover do servidor
        const existing = await base44.entities.Favorito.filter({ chave: drugId });
        if (existing.length > 0) {
          await base44.entities.Favorito.delete(existing[0].id);
        }
        setFavorites(prev => prev.filter(id => id !== drugId));
      } else {
        // Adicionar ao servidor
        await base44.entities.Favorito.create({ chave: drugId, tipo: 'dosagem' });
        setFavorites(prev => [...prev, drugId]);
      }
    } catch (e) {
      console.error('Erro ao salvar favorito:', e);
    }
  };

  return (
    <DosagemFavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, loaded }}>
      {children}
    </DosagemFavoritesContext.Provider>
  );
}

export function useDosagemFavorites() {
  return useContext(DosagemFavoritesContext);
}