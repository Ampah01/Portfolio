import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>
          &copy; {new Date().getFullYear()} Samuel Ampah. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/in/samuel-ampah-55aa71239"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="text-white hover:text-blue-400"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
