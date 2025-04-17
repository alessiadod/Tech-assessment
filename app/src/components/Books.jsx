import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useFavourites } from "./FavouritesContext";

// Books component to fetch and display the first 20 books
const Books = () => {
  const [books, setBooks] = useState([]);
  const { addToFavourites } = useFavourites();

// Fetch books from the JSON file
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/books.json");
        const data = await response.json();
        setBooks(data.slice(0, 20)); // Get first 6 books for the moment
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="row">
      {books.map((book, index) => (
        <div className="col-md-4 mb-4" key={index}>
            <BookCard 
            book={book}
            onAction = {addToFavourites}
            iconClass="bi bi-plus-circle-fill text-success fs-5"
            />
        </div>
      ))}
    </div>
  );
};

export default Books;
