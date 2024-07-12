import React from "react";
import { Link } from 'react-scroll';
import photo from "../../../public/samuel_photo.jpg";

const Header = () => {
  return (
    <div id="home" className='bg-gray-100 min-h-screen p-6'>
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 mx-auto p-8 animate-fadeIn">
      <div className="max-w-lg text-center text-gray-600 md:text-left animate-fadeInUp">
        <h3 className="text-lg font-medium mb-2">Hey, I'm Samuel</h3>
        <h1 className=" text-red-500 font-bold text-3xl md:text-4xl mb-4">
          <span className="text-gray-700">Frontend</span><br /> Developer
        </h1>
        <p className="text-base text-gray-600 mb-4">
          Passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. Dedicated to creating engaging, responsive, and user-friendly web applications. Constantly learning and adapting to new technologies to deliver top-notch solutions.
        </p>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
          className="bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 transition duration-300 cursor-pointer animate-fadeInUp delay-300"
        >
          Get in touch
        </Link>
      </div>
      <div className="w-full md:w-[40%] flex justify-center mt-6 md:mt-0 animate-zoomIn">
        <img src={photo} alt="Samuel Photo" className="w-[80%] md:w-full rounded-lg shadow-lg" />
      </div>
    </div>
    </div>
  );
};

export default Header;
