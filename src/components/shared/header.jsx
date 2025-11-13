import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-4 fixed w-full z-20">
      {/* Logo */}
      <Link to={"/dashboard"} className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl tracking-tight">LOGO</span>
      </Link>

      {/* Hamburger button - visible on md and below */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-500 hover:border-blue-500"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm md:flex-grow md:flex md:justify-between">
          <Link to={"/dashboard"} className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-400 mr-4">
            Home
          </Link>
          <Link to={"/statistics"} className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-400 mr-4">
            Statistics
          </Link>

          {/* Dropdown - can be toggled individually if needed */}
          <div className="relative inline-block text-left mt-4 md:mt-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center w-full text-white hover:text-blue-400"
            >
              More
              <svg
                className="ml-1 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              } origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div className="py-1 text-gray-700">
                <Link
                  to={"/profile"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to={"/enquiries"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Enquiries
                </Link>
                <Link
                  to={"/faqs"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Faqs
                </Link>
                <Link
                  to={"/login"}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
