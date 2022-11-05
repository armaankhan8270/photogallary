import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white shadow-md m-3 h-16 dark:bg-gray-800">
        <div class="text-black flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/Nav"
            class="text-black transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </Link>

          <Link
            to="/Ma"
            class="border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Photo
          </Link>

          <Link
            to="/Contact"
            class="border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Contact
          </Link>

          <Link
            to="/About"
            class="border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            About
          </Link>

          <Link
            to="/Rec"
            class="border-b-2 border-transparent hover:text-black transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            recipe
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
