import React from "react";

// Reusable card component for both Books and Favourites
const BookCard = ({ book, onAction, iconClass }) => {
  return (
    <div className="card h-100 custom-shadow mb-4">
      <div className="card-body d-flex flex-column h-100">
        
        {/* Top section */}
        <div>
          <h6 className="text-muted">{book.author}</h6>
          <h5>{book.title}</h5>
          <p className="text-muted">{book.pages}</p>
          <div style={{ height: "150px" }}>
            <img
              src={book.imageLink}
              alt={book.title}
              className="img-fluid"
              style={{ maxHeight: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Bottom row with buttons  */}
        <div className="d-flex align-items-center gap-4 mt-auto pt-3">
          <button className="btn p-0">READ MORE</button>
          <button
            className="btn p-0 border-0 bg-transparent"
            onClick={() => onAction(book)}
          >
            <i className={iconClass}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
