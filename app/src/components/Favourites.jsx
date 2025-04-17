import React from "react";
import BookCard from "./BookCard";
import { useFavourites } from "../components/FavouritesContext.jsx";

// Favourites component to display the list of favourite books
const Favourites = () => {
  const { favourites, removeFromFavourites } = useFavourites();
  return (
    <div className="row">
      {favourites.length === 0 ? (
        <p className="text-muted">No favourites yet.</p>
      ) : (
        favourites.map((book, index) => (
          <div className="col-12 mb-3" key={index}>
            <BookCard
              book={book}
              onAction={removeFromFavourites}
              iconClass="bi bi-dash-circle-fill text-danger fs-5"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Favourites;
