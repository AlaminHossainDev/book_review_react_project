import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../utility/localstorage";
import ListedBooks from "./ListedBooks";

const ReadBooks = ({books}) => {
  const [booksListed, setBooksListed] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBookList();
    if (books.length > 0) {
      const filteredBooks = books.filter((book) =>
        storedBookIds.includes(Number(book.id))
      );
      setBooksListed(filteredBooks);
    }
  }, [books]);

  return (
    <div>
      <ul>
        {booksListed.map((book) => (
          <div className="mt-3" key={book.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5 w-full border-2 border-slate-200">
              <figure className="bg-slate-200 w-60 rounded-lg">
                <img className="p-8" src={book.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                <p>By : {book.author}</p>
                <div className="flex justify-normal gap-5">
                  <span>
                    Tag : {' '}
                    <span>
                      {book?.tags?.map((item) => (
                        <button
                          key={item}
                          className="btn btn-sm btn-outline border-teal-300 mr-2 mb-2 bg-green-50 text-[#22be0a]"
                        >
                          {item}
                        </button>
                      ))}
                    </span>
                  </span>

                  <span>Total Pages: {book.totalPages}</span>
                </div>
                <div className="flex justify-normal gap-5">
                  <span>Publisher: {book.publisher}</span>
                  <span>Total Pages: {book.totalPages}</span>
                </div>
                <hr />
                <div className="flex justify-normal gap-5">
                  <span>
                    <button className="btn btn-md btn-outline border-teal-300 mr-2 mb-2 bg-cyan-200 text-[#22be0a]">
                      Category: {book.category}
                    </button>
                    <button className="btn btn-md btn-outline border-amber-200 mr-2 mb-2 bg-amber-200 text-amber-400">
                      Rating: {book.rating}
                    </button>
                    <button className="btn btn-md btn-outline border-teal-300 mr-2 mb-2 bg-green-500 text-white">
                      View Details
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReadBooks;
