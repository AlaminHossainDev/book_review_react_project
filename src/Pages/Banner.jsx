import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero md:h-[550px] bg-slate-100 container mx-auto rounded-lg mt-6 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/k07MCXV/book1.png"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h2 className="md:text-5xl font-bold">
            Literary Haven - Your Destination for Books Galore!
          </h2>
          <p className="py-6">
            Welcome to Literary Haven, where avid readers and book enthusiasts
            unite! Dive into our expansive collection of captivating titles
            spanning various genres.our curated selection guarantees something
            for every reader. Start your journey with us today
          </p>
          <button className="btn bg-[#23BE0A] text-white px-16 text-base">
          <NavLink to= "/listedbooks">Listed Books</NavLink>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
