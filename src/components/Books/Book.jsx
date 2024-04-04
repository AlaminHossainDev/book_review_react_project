import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, author, tags, rating, category, id } = book;
  return (
    <Link to={`/book/${id}`}>
      <div className="card w-full bg-base-100 shadow-xl p-6 border-slate-200 border-2">
        <figure className="bg-slate-100 py-16 rounded-lg">
          <img src={image} />
        </figure>
        <div className="card-body">
          <div>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm btn-outline border-teal-300 mr-2 mb-2 bg-green-50 text-[#22be0a]"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="card-actions border-t-2 border-dashed border-slate-100 flex justify-between pt-2">
            <div>{category}</div>
            <div>
              {rating}
              <img
                className="inline-block mb-2 ml-[2px]"
                src="https://i.ibb.co/hWsRY6B/Frame-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
