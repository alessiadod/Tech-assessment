import { createContext, useContext, useState, useEffect} from "react";

// Create the context
const FavouritesContext = createContext();

// Custom hook to access the context in components
export const useFavourites = () => useContext(FavouritesContext);

// Provider component
export const FavouritesProvider = ({ children }) => {
  // Load initial state from localStorage or set to an empty array
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // Synch favourites with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Add a book to favourites, if it's not already there
  const addToFavourites = (book) => {
    if (!favourites.some((fav) => fav.title === book.title)) {
      setFavourites([...favourites, book]);
    }
  };

  // Remove a book from favourites, checking if it exists
  const removeFromFavourites = (bookToRemove) => {
    setFavourites(favourites.filter((book) => book.title !== bookToRemove.title));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
