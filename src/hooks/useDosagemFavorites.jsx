import { useState, useEffect, useContext, createContext } from 'react';

const KEY = 'pedbox_dosagem_favorites';

const DosagemFavoritesContext = createContext(null);

export function DosagemFavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (drugId) => favorites.includes(drugId);

  const toggleFavorite = (drugId) => {
    setFavorites(prev =>
      prev.includes(drugId) ? prev.filter(id => id !== drugId) : [...prev, drugId]
    );
  };

  return (
    <DosagemFavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </DosagemFavoritesContext.Provider>
  );
}

export function useDosagemFavorites() {
  return useContext(DosagemFavoritesContext);
}