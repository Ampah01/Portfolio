import React from 'react';

const ContactMe = () => {
  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <div className='container mx-auto bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-4xl font-bold text-center mb-6'>Contact Me</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 md:pr-6'>
            <h2 className='text-2xl font-bold mb-2'>Get in Touch</h2>
            <p className='mb-4'>
              Have a project in mind or just want to say hello? Send me a message using the form below, and I'll get back to you as soon as possible.
            </p>
            <p className='mb-4'>
              Email: <a href='mailto:samampah01@gmail.com' className='text-blue-500 hover:underline'>samampah01@gmail.com</a>
            </p>
            <p>
              Phone: <a href='tel:+1234567890' className='text-blue-500 hover:underline'>+1 (234) 567-890</a>
            </p>
          </div>
          <div className='md:w-1/2'>
            <form className='bg-white shadow-md rounded-lg p-6'>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Name:</label>
                <input type='text' id='name' name='name' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email:</label>
                <input type='email' id='email' name='email' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>Message:</label>
                <textarea id='message' name='message' rows='4' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'></textarea>
              </div>
              <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
