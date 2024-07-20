import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md fixed w-full">
      <div className="container mx-auto flex justify-between items-center relative">
        <h2 className="text-2xl font-bold text-red-500 cursor-pointer">
          <Link
            to="home"
            spy={true}cd my-portfo
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            className="hover:text-red-500"
          >
            Samuel Ampah
          </Link>
        </h2>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-500">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`fixed md:absolute top-0 right-0 h-[60%] w-full bg-gray-100 md:bg-white backdrop-blur-2xl flex flex-col items-center transition-all duration-300 ${
            isOpen
              ? "transform translate-y-0 shadow-lg"
              : "transform -translate-y-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-red-500 md:hidden"
          >
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col  md:flex-row gap-6 items-center mt-20 md:mt-[33px] font-semibold text-[17px]">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="text-gray-800 hover:text-red-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="text-gray-800 hover:text-red-500 cursor-pointer"
            >
              About Me
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="text-gray-800 hover:text-red-500 cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 cursor-pointer md:hidden"
            >
              Contact me
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
