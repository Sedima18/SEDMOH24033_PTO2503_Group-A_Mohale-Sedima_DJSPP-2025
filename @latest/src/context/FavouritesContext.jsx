import { createContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    loadFromStorage("favourites", [])
  );

  useEffect(() => {
    saveToStorage("favourites", favourites);
  }, [favourites]);

  const toggleFavourite = (episode) => {
    setFavourites((prev) =>
      prev.some((f) => f.id === episode.id)
        ? prev.filter((f) => f.id !== episode.id)
        : [...prev, { ...episode, addedAt: new Date().toISOString() }]
    );
  };

  const isFavourite = (id) =>
    favourites.some((fav) => fav.id === id);

  return (
    <FavouritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};