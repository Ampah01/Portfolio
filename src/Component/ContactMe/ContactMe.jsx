import React from "react";
import { FiMail, FiPhone } from "react-icons/fi"; 
import Form from "./Form";

const ContactMe = () => {
  return (
    <div id="contact" className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6 animate-fadeInUp">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-700">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-6 animate-fadeInUp delay-100">
            <h2 className="text-2xl font-bold mb-2 text-gray-700">
              Get in Touch
            </h2>
            <p className="mb-4 text-gray-700">
              If you have a project in mind or would just like to say hello,
              please feel free to send me a message using the form below. I'll
              respond to you as promptly as possible. Looking forward to hearing
              from you!
            </p>
            <p className="mb-4 text-gray-700">
              <span className="flex items-center">
                <FiMail className="mr-2" />
                <a
                  href="mailto:samampah01@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  samampah01@gmail.com
                </a>
              </span>
            </p>
            <p className="text-gray-700">
              <span className="flex items-center">
                <FiPhone className="mr-2" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:underline"
                >
                  +233 (200) 484-457
                </a>
              </span>
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
