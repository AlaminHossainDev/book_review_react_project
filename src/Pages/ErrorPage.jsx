import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" />
          <h1 className="text-6xl font-bold mt-[-65px]">OPP! 404</h1>
          <p className="py-6 text-2xl">
           Page Not Found
          </p>
          <Link to= '/'><button className="btn btn-warning text-xl font-bold border-b-green-500 border-b-4 px-10">Go Back Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
