import React from "react";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

function BooksList() {
  return (
    <div>
      <h2>Latest Books</h2>
      <Pagination />
      <BookCard />
    </div>
  );
}

export default BooksList;
