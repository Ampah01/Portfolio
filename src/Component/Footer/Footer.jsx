import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <p>&copy; 2024 Samuel Ampah. All rights reserved.</p>
        <div className='flex space-x-4'>
          <a href='/privacy' className='hover:underline'>Privacy Policy</a>
          <a href='/terms' className='hover:underline'>Terms of Service</a>
          <a href='/contact' className='hover:underline'>Contact</a>
          <div className='flex space-x-2'>
            <a href='https://twitter.com/samuelampah' target='_blank' rel='noopener noreferrer'>
              <svg className='w-6 h-6 fill-current text-white hover:text-blue-500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M22.46 5.88c-.82.37-1.7.62-2.62.73.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.83-.9-2.02-1.46-3.33-1.46-2.52 0-4.57 2.05-4.57 4.57 0 .36.04.7.1 1.03-3.8-.2-7.16-2.02-9.4-4.8-.39.67-.62 1.45-.62 2.28 0 1.58.81 2.98 2.03 3.8-.75-.02-1.46-.23-2.08-.57v.06c0 2.2 1.56 4.03 3.63 4.44-.38.1-.78.16-1.19.16-.29 0-.58-.03-.86-.08.58 1.8 2.27 3.11 4.27 3.14-1.56 1.25-3.54 1.99-5.69 1.99-.37 0-.74-.02-1.1-.06 2.03 1.3 4.43 2.06 7.02 2.06 8.42 0 13.03-6.98 13.03-13.02 0-.2 0-.4-.02-.6.9-.66 1.7-1.48 2.32-2.42z'/>
              </svg>
            </a>
            <a href='https://linkedin.com/in/samuelampah' target='_blank' rel='noopener noreferrer'>
              <svg className='w-6 h-6 fill-current text-white hover:text-blue-500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5 21h-4v-14h4v14zm-2-16c-.552 0-1 .447-1 1s.448 1 1 1 1-.447 1-1-.448-1-1-1zm18 7.284v8.716h-4v-8.31c0-1.744-.622-2.934-2.176-2.934-1.184 0-1.888.796-2.192 1.566-.112.274-.138.662-.138 1.048v8.63h-4s.052-10.293 0-11h4l.36 5.43h.053l1.897-5.43h3.305l-1.937 5.586h3.18l1.912-5.587h3l-.005 6.002h-3.853zm-15-7.284c-.552 0-1 .447-1 1s.448 1 1 1 1-.447 1-1-.448-1-1-1z'/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
