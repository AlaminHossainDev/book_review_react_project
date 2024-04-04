import { useEffect, useState } from "react";
import Book from "./Book";

const FeatureBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container mx-auto my-12 ">
      <h2 className="text-5xl font-bold text-center py-16">Books</h2>
      {/* feature jobs */}
      <div className="grid md:grid-cols-3 gap-6">
        {
            books.map(book => <Book key={book.id} book = {book} ></Book>)
        }
      </div>
    </div>
  );
};

export default FeatureBooks;
