import React from "react";
import sam from "../../../public/sam_photo.jpg";

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img src={sam} alt="Profile" z />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="mb-4">
              Hello! I'm <strong>Samuel Ampah</strong>, a passionate frontend
              developer with a keen interest in creating engaging and
              interactive user experiences. I have recently completed a
              comprehensive frontend development course on Udemy, where I honed
              my skills in HTML, CSS, JavaScript, and React.js.
            </p>
            <p className="mb-4">
              My journey into web development began from curiosity and quickly
              evolved into a deep-seated passion. I thrive on the challenge of
              simplifying complex problems into intuitive and visually appealing
              designs. I'm committed to continuous learning, staying abreast of
              the latest web technologies to deliver innovative solutions to
              clients and employers.
            </p>
            <p className="mb-4">
              Outside of coding, I actively contribute to open-source projects,
              write about emerging tech trends, and explore new tools and
              frameworks. When I'm not at my desk, you'll find me immersed in a
              good book, hiking trails, or enjoying quality time with loved
              ones.
            </p>
            <p>
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
