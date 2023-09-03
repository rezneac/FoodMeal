import {createContext, ReactNode, useState} from 'react';

interface iProp {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

interface FavoritesContextProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext<iProp>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

function FavoritesContextProvider({children}: FavoritesContextProviderProps) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds(currentFavIds => currentFavIds.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
