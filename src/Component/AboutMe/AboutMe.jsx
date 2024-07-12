import React from "react";
import sam_photo from "../../../public/sam_photo.jpg"; // Ensure this path is correct

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center mb-6 animate-fadeInUp text-gray-700">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 animate-zoomIn">
            <img
              src={sam_photo}
              alt="Profile" // Ensure alt text is descriptive
              className="rounded-full shadow-lg w-3/4 md:w-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-6 text-center md:text-left text-lg text-gray-700">
            <p className="mb-6 animate-fadeInUp">
              Hello! I'm <strong className="text-gray-700">Samuel Ampah</strong>,
              a passionate frontend developer with a keen interest in creating
              engaging and interactive user experiences.
            </p>
            <p className="mb-6 animate-fadeInUp">
              I have recently completed a comprehensive frontend development course on Udemy,
              where I honed my skills in:
            </p>
            <ul className="mb-6 list-disc list-inside animate-fadeInUp">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js for building dynamic web applications</li>
              <li>Tailwind CSS for rapid and modern UI development</li>
              <li>Axios for making asynchronous HTTP requests to REST APIs</li>
            </ul>
            <p className="mb-6 animate-fadeInUp">
              My journey into web development began from curiosity and quickly
              evolved into a deep-seated passion. I thrive on the challenge of
              simplifying complex problems into intuitive and visually appealing
              designs.
            </p>
            <p className="mb-6 animate-fadeInUp">
              Outside of coding, I actively contribute to open-source projects,
              write about emerging tech trends, and explore new tools and
              frameworks. When I'm not at my desk, you'll find me immersed in a
              good book, hiking trails, or enjoying quality time with loved
              ones.
            </p>
            <p className="animate-fadeInUp">
              Feel free to browse through my portfolio to view some of my recent
              projects. I'm enthusiastic about collaborating on new and exciting
              ventures. Let's embark on a journey to create something remarkable
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
