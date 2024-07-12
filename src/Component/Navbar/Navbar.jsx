import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white p-4'>
      <div className='container mx-auto flex flex-wrap justify-between items-center'>
        <h2 className='text-2xl font-bold mr-4'>Samuel Ampah</h2>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='/' className='hover:underline cursor-pointer'>Home</a>
          <a href='/portfolio' className='hover:underline cursor-pointer'>Portfolio</a>
          <a href='/about' className='hover:underline cursor-pointer'>About me</a>
          <a href='/testimonials' className='hover:underline cursor-pointer'>Testimonials</a>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0'>
          Contact me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
