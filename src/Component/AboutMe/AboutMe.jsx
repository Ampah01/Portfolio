import React from "react";
import sam_photo from "../../../public/sam_photo.jpg";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center mb-6 animate-fadeInUp text-gray-700">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 animate-zoomIn">
            <img
              src={sam_photo}
              alt="Samuel's Photo"
              className="rounded-full shadow-lg w-3/4 md:w-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-6 text-center md:text-left text-lg text-gray-700">
            <p className="mb-6 animate-fadeInUp">
              Hello! I'm <strong className="text-gray-700">Samuel Ampah</strong>
              , a passionate frontend developer with a keen interest in creating
              engaging and interactive user experiences.
            </p>
            <p className="mb-6 animate-fadeInUp">
              I have completed a comprehensive frontend development
              course on Udemy, where I honed my skills in HTML, CSS, JavaScript,
              React.js, Redux, and Redux Toolkit (RTK). I've also gained
              valuable insights from YouTube channels like freeCodeCamp. My
              journey has been enriched through self-directed learning via
              online courses, tutorials, and practical projects.
            </p>

            <p className="mb-6 animate-fadeInUp">
              I have built several projects to apply my skills and continue
              learning. These projects have further enhanced my ability to
              create intuitive and visually appealing designs.
            </p>
            <Skills />
            <p className="mt-6 animate-fadeInUp">
              My journey into web development began from curiosity and quickly
              evolved into a deep-seated passion. I thrive on the challenge of
              simplifying complex problems into intuitive and visually appealing
              designs.
            </p>
            <p className="mt-6 animate-fadeInUp">
              Outside of coding, I actively contribute to open-source projects
              and explore new tools and frameworks. When I'm not at my desk,
              you'll find me immersed in a good book or enjoying quality time
              with loved ones.
            </p>
            <p className="mt-6 animate-fadeInUp">
              Feel free to browse through my portfolio to view some of my recent
              projects. I'm enthusiastic about collaborating on new and exciting
              ventures. Let's embark on a journey to create something remarkable
              together!
            </p>
            <div className="flex justify-center mt-6 animate-fadeInUp">
              <a
                href="https://github.com/Ampah01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
              >
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
