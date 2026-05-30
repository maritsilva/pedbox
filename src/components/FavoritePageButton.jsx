import { Star } from 'lucide-react';
import { usePageFavorites } from '@/hooks/usePageFavorites.jsx';

/**
 * Small star button to favorite/unfavorite a page.
 * Usage: <FavoritePageButton path="/dosagens" />
 */
export default function FavoritePageButton({ path, className = '' }) {
  const { isFavorite, toggleFavorite } = usePageFavorites();
  const fav = isFavorite(path);

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(path); }}
      title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${fav ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'} ${className}`}
    >
      <Star className={`w-5 h-5 ${fav ? 'fill-yellow-400' : ''}`} />
    </button>
  );
}