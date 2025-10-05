import { createContext, useState, useContext } from "react";
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function toggleFavourite(id) {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  }

  return (
    <FavoritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
export function useFavourites() {
  return useContext(FavoritesContext);
}

