import {useEffect} from "react";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>

          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">
              Back to Multiplex
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
