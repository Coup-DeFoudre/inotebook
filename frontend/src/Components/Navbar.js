import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/contact';
  }

  return (
    <nav className="bg-[#85888F] p-4 sticky-top">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">iNotebook</div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:bg-blue-600 px-2 py-1 rounded"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M20 10.15c0 .365-.144.724-.42.99a1.347 1.347 0 0 1-.98.41h-17a1.354 1.354 0 0 1-1.409-1.4c0-.367.146-.727.41-.99a1.335 1.335 0 0 1 .979-.41h17c.367 0 .725.145.99.41.277.265.42.625.42.99zm0 4.65c0 .365-.144.723-.42.99a1.35 1.35 0 0 1-1.41.41h-17a1.352 1.352 0 0 1-1.41-1.4c0-.367.147-.727.41-.99a1.347 1.347 0 0 1 .98-.41h17c.367 0 .725.144.99.41.276.267.42.625.42.99zm0-9.3c0 .368-.144.726-.42.99-.266.265-.624.41-.99.41h-17c-.365 0-.724-.145-.98-.41a1.35 1.35 0 0 1-.41-.99c0-.367.146-.727.41-.99.265-.266.625-.41.99-.41h17c.366 0 .724.144.99.41.276.265.42.625.42.99z"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-200 focus-within:font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Notes"
                className="text-white hover:text-blue-200 focus-within:font-bold"
              >
                All Notes
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-white hover:text-blue-200 focus-within:font-bold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-200 focus-within:font-bold"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Login */}
        {!localStorage.getItem('token')? <div className="hidden md:block space-x-4">
        <Link to='/login'>
              <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold">
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-bold">
                Signup
              </button>
            </Link>
        </div>:<button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-bold hidden md:block" onClick={handleLogout}>Logout</button>
            }
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-blue-200 block">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Notes"
                className="text-white hover:text-blue-200 block"
              >
                All Notes
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-white hover:text-blue-200 block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-200 block"
              >
                Reviews
              </Link>
            </li>
           {!localStorage.getItem('token')? <div className="flex gap-2">
            <Link to="/login">
              <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold">
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-bold">
                Signup
              </button>
            </Link>
            </div>:<button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-bold" onClick={handleLogout}>Logout</button>
            }

            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
