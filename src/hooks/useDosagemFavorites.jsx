import { createContext, useContext } from 'react';
import { useFavoriteCollection } from './useFavoriteCollection';
const DosagemFavoritesContext = createContext(null);
export function DosagemFavoritesProvider({ children }) {
  const value = useFavoriteCollection('dosagem');
  return <DosagemFavoritesContext.Provider value={value}>{children}</DosagemFavoritesContext.Provider>;
}
export function useDosagemFavorites() { return useContext(DosagemFavoritesContext); }
