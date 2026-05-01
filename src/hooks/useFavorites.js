import React, { useState, useEffect } from 'react';

const KEY = 'pedbox_favorites';

export function useFavorites() {
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

  return { favorites, isFavorite, toggleFavorite };
}