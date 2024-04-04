import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWhishList } from "../utility/localstorageWhistlist";

const WhishListBooks = ({books}) => {
  const [whishListed, setWhishListed] = useState([]);

  useEffect(() => {
    const storedWhishListIds = getStoredWhishList();

    if (books.length > 0 && storedWhishListIds.length > 0) {

      const filteredBooks = books.filter((whishList) =>
        storedWhishListIds.includes(Number(whishList.id))
      );
      setWhishListed(filteredBooks);
      console.log(filteredBooks);
    }
  }, [books]);

  return (
    <div>
      <ul>
        {whishListed.map((whishListed) => (
          <div className="mt-3" key={whishListed.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5 w-full border-2 border-slate-200">
              <figure className="bg-slate-200 w-60 rounded-lg">
                <img className="p-8" src={whishListed.image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{whishListed.bookName}</h2>
                <p>By : {whishListed.author}</p>
                <div className="flex justify-normal gap-5">
                  <span>
                    Tag :
                    <button className="btn btn-sm btn-outline border-teal-300 mr-2 mb-2 bg-green-50 text-[#22be0a]">
                      #Young Adult
                    </button>
                    <button className="btn btn-sm btn-outline border-teal-300 mr-2 mb-2 bg-green-50 text-[#22be0a]">
                      #Identity
                    </button>
                  </span>
                  <span>Total Pages: {whishListed.totalPages}</span>
                </div>
                <div className="flex justify-normal gap-5">
                  <span>Publisher: {whishListed.publisher}</span>
                  <span>Total Pages: {whishListed.totalPages}</span>
                </div>
                <hr />
                <div className="flex justify-normal gap-5">
                  <span>
                    <button className="btn btn-md btn-outline border-teal-300 mr-2 mb-2 bg-cyan-200 text-[#22be0a]">
                      Category: {whishListed.category}
                    </button>
                    <button className="btn btn-md btn-outline border-amber-200 mr-2 mb-2 bg-amber-200 text-amber-400">
                      Rating: {whishListed.rating}
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

export default WhishListBooks;
