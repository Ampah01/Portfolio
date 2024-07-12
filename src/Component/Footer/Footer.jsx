import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white p-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
        <p>&copy; 2024 Samuel Ampah. All rights reserved.</p>
        <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
          <a href='/privacy' className='hover:underline'>Privacy Policy</a>
          <a href='/terms' className='hover:underline'>Terms of Service</a>
          <a href='/contact' className='hover:underline'>Contact</a>
          <div className='flex space-x-2 mt-4 md:mt-0'>
            <a href='https://twitter.com/samuelampah' target='_blank' rel='noopener noreferrer'>
              <svg className='w-6 h-6 fill-current text-white hover:text-blue-500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M22.46 5.88c-.82.37-1.7.62-2.62.73.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.83-.9-2.02-1.46-3.33-1.46-2.52 0-4.57 2.05-4.57 4.57 0 .36.04.7.1 1.03-3.8-.2-7.16-2.02-9.4-4.8-.39.67-.62 1.45-.62 2.28 0 1.58.81 2.98 2.03 3.8-.75-.02-1.46-.23-2.08-.57v.06c0 2.2 1.56 4.03 3.63 4.44-.38.1-.78.16-1.19.16-.29 0-.58-.03-.86-.08.58 1.8 2.27 3.11 4.27 3.14-1.56 1.25-3.54 1.99-5.69 1.99-.37 0-.74-.02-1.1-.06 2.03 1.3 4.43 2.06 7.02 2.06 8.42 0 13.03-6.98 13.03-13.02 0-.2 0-.4-.02-.6.9-.66 1.7-1.48 2.32-2.42z'/>
              </svg>
            </a>
            <a href='https://linkedin.com/in/samuelampah' target='_blank' rel='noopener noreferrer'>
              <svg className='w-6 h-6 fill-current text-white hover:text-blue-500' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12 2.5 2.5S8.86 6 7.48 6s-2.5-1.12-2.5-2.5zM1 23h5V8H1v15zm7.08 0H13V15.4c0-2.06-1.64-3.75-3.68-3.75h-.1c-2.07 0-3.72 1.7-3.72 3.75V23h5v-7.6c0-.96.72-1.7 1.6-1.7s1.6.74 1.6 1.7V23h5V14.6c0-3.21-2.53-5.7-5.6-5.7h-.1c-3.07 0-5.6 2.49-5.6 5.7V23h5v-7.6c0-.96.72-1.7 1.6-1.7s1.6.74 1.6 1.7V23z'/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
