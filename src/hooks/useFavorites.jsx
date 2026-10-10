import { createContext, useContext } from 'react';
import { useFavoriteCollection } from './useFavoriteCollection';
const FavoritesContext = createContext(null);
export function FavoritesProvider({ children }) {
  const value = useFavoriteCollection('medicamento');
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
export function useFavorites() { return useContext(FavoritesContext); }
