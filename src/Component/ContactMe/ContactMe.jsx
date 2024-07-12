import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Message sent successfully!");
  };

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
              Have a project in mind or just want to say hello? Send me a
              message using the form below, and I'll get back to you as soon as
              possible.
            </p>
            <p className="mb-4 text-gray-700">
              Email:{" "}
              <a
                href="mailto:samampah01@gmail.com"
                className="text-gray-700 hover:underline"
              >
                samampah01@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-gray-700 hover:underline"
              >
                +233 (200) 484-457
              </a>
            </p>
          </div>
          <div className="md:w-1/2 animate-fadeInUp delay-200">
            <form
              className="bg-white shadow-md rounded-lg p-6"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
