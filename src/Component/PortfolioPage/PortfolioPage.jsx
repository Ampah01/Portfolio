import React, { useState } from "react";
import ecommerce from "./../../../public/ecommerce-website.png";
import gamehub from "./../../../public/game-hub.png";
import weather from "./../../../public/weather.jpg";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce-Website",
      description:
        "This sneaker e-commerce website, built with React, Tailwind CSS, and React Router, offers smooth navigation across pages. It features dynamic animations with Framer Motion and a sleek product slider using React Slick.",
      githubUrl: "https://github.com/Ampah01/Project-E-commerce",
      demoUrl:
        " https://ecommerce-website-gku7n4q66-samuel-ampahs-projects.vercel.app",
      more_details:
        "Explore our sleek sneaker shop, crafted with React and Tailwind CSS for a seamless user experience. Browse a curated collection of stylish footwear, from classics to limited editions, all designed to elevate your style effortlessly. Shop with confidence and ease, navigating through intuitive React routes for quick access to product details and checkout.",
      imageUrl: ecommerce,
    },
    {
      id: 2,
      title: "Game hub",
      description:
        "I integrated Axios to fetch gaming data from the RAWG API, ensuring real-time updates and dynamic content for an engaging user experience. Tailwind CSS was instrumental in quickly designing and implementing both dark and light themes, enhancing visual appeal and usability across the application.",
      imageUrl: gamehub,
      githubUrl: "https://github.com/Ampah01/Game-hub",
      more_details:
        "I utilized Axios to fetch dynamic data from the RAWG API, allowing seamless integration of game information into the application. React Slick was integrated to create an engaging carousel for showcasing featured content, providing a dynamic and interactive browsing experience for users.",
      demoUrl: "https://game-34kgj3bx1-samuel-ampahs-projects.vercel.app",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "This project is a Weather and To-Do application that integrates real-time weather data and task management into a single interface using React and Tailwind CSS. It features current weather information, a 7-day forecast from the OpenWeatherMap API, and a to-do list with functionalities to add, delete, and rearrange tasks.",
      imageUrl: weather,
      githubUrl: "https://github.com/Ampah01/Weather-App",
      more_details:
        "It offers a seamless user experience by displaying weather data and task management tools side by side. With a visually appealing interface, it allows users to stay informed about the weath+er while keeping track of their daily tasks. The application also includes features such as search functionality for weather updates based on location and animated transitions for a more engaging user interaction.",
      demoUrl: "https://weather-app-eight-omega-81.vercel.app/",
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <section id="portfolio" className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover cursor-pointer"
              onClick={() => toggleProject(project.id)}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-gray-700">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Demo
                </a>
              </div>
              {expandedProject === project.id && (
                <div className="mt-4">
                  <p className="text-gray-600">{project.more_details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
