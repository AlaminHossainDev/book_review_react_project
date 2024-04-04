import { useLoaderData } from "react-router-dom";
import ReadBooks from "./ReadBooks";
import WhishListBooks from "./WhishListBooks";
import { useState } from "react";

const ListedBooks = () => {
  const books = useLoaderData();
  const [displayBooks, setDisplayBooks] = useState(books);
  const [selectedSort, setSelectedSort] = useState("all");

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedSort(selectedOption);
    handleBooksFilter(selectedOption);
  };
  const handleBooksFilter = (filter) => {
    if (filter === "all") {
      setDisplayBooks(books);
    } else if (filter === "rating") {
      const ratingBooks = books.slice().sort((a, b) => b.rating - a.rating);
      setDisplayBooks(ratingBooks);
    } else if (filter === "category") {
      const categoryBooks = books.slice().sort((a, b) => {
        const categoryA = a.category.toLowerCase();
        const categoryB = b.category.toLowerCase();
        if (categoryA < categoryB) {
          return 1; 
        }
        if (categoryA > categoryB) {
          return -1; 
        }
        return 0;
      });
      setDisplayBooks(categoryBooks);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="bg-slate-200 p-20 rounded-lg mt-4">
        <h3 className="text-5xl font-bold text-center">Books</h3>
      </div>
      <div className="text-center pt-10 pb-20">
        <select
          className="select select-success bg-green-400 text-white w-full max-w-xs"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="all">All</option>
          <option value="rating">Rating</option>
          <option value="category">Categories</option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-sm font-bold"
          aria-label="Read List"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadBooks books={displayBooks}></ReadBooks>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab md:text-sm font-bold p-4"
          aria-label="Whish List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <WhishListBooks books={displayBooks}></WhishListBooks>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
