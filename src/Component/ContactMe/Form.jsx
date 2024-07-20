import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields before submitting.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    const serviceId = "service_ydpelg1";
    const templateId = "template_axd78fw";
    const publicKey = "lSYNdxcePHDMhu_IY";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Samuel Ampah",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccessMessage("Your message has been sent successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        setErrorMessage("");
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        setErrorMessage("Failed to send the message. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="md:w-1/2 animate-fadeInUp delay-200">
      <form
        className="bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
        {errorMessage && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
