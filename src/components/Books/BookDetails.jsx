import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookList, getStoredBookList } from "../../utility/localstorage";
import { saveWhishList, getStoredWhishList } from "../../utility/localstorageWhistlist";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = Number(id);
  const book = books.find((book) => book.id == idInt);
  const {
    bookName,
    image,
    author,
    tags,
    rating,
    category,
    review,
    publisher,
    yearOfPublishing,
    totalPages,
  } = book;

  const handleReadClick = () => {
    const storedBookList = getStoredBookList();

    if (storedBookList.includes(idInt)) {
      toast.error('Already added Read list!');
    } else {
      saveBookList(idInt);
      toast.success('Successfully added to Read List!');
    }
  };

  const handleWishlistClick = () => {
    const storedBookList = getStoredBookList();
    const storedWhishListIds = getStoredWhishList();

    if (storedBookList.includes(idInt)) {
      toast.error(`Already added wish list!`);
    } else if (storedWhishListIds.includes(idInt)) {
      toast.error(`Already added wish list!`);
    } else {
      saveWhishList(idInt);
      toast.success('Successfully added to Wishlist!');
    }
  };

  return (
    <div className="container mx-auto grid md:grid-cols-2">
      <div className="bg-slate-100 p-20 rounded-lg">
        <img src={image} className="w-[400px]" />
      </div>
      {/* right side content */}
      <div className="">
        <div className=" bg-base-100 p-6 border-slate-200 ">
          <div className="card-body">
            <h2 className="md:text-5xl font-bold py-2">{bookName}</h2>
            <p className="md:text-xl font-normal py-2">By : {author}</p>
            <p className="border-y-2 border-dotted py-5 border-slate-200">
              {category}
            </p>
            <p className="border-b-2 border-dotted py-5 border-slate-200">
              <b>Review : </b>
              {review}
            </p>
            <div className="border-b-2 border-dotted py-5 border-slate-200">
              <b>Tags : </b>
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn btn-sm btn-outline border-teal-300 mr-2 mb-2 bg-green-50 text-[#22be0a]"
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="md:text-xl font-normal py-2">
              <b>Number of Pages: </b>
              {totalPages}
            </p>
            <p className="md:text-xl font-normal py-2">
              <b>Publisher: </b>
              {publisher}
            </p>
            <p className="md:text-xl font-normal py-2">
              <b>Year of Publishing: </b>
              {yearOfPublishing}
            </p>
            <p className="md:text-xl font-normal py-2">
              <b>Rating: </b>
              {rating}
            </p>
            <div>
              <button onClick={handleReadClick} className="btn btn-outline outline-slate-200 mr-2 px-8">Read</button>
              <button onClick={handleWishlistClick} className="btn hover:bg-black bg-[#59C6D2] text-white px-8">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
