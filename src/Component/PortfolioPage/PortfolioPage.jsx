import React, { useState } from "react";


const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-University Website",
      description:
        "The E-University platform is designed to facilitate seamless online learning. Built with React and Tailwind CSS, it offers a user-friendly interface for students to access courses, view schedules, and interact with instructors.",
      imageUrl: "/e_university.png",
      githubUrl: "https://github.com/Ampah01/E_University",
      more_details:
        "This project integrates modern design principles to create an intuitive platform for both students and faculty. Users can browse courses and manage their schedules. React ensures a smooth, responsive interface, while Tailwind CSS enhances the site's scalability and performance.",
      demoUrl: "https://e-university.vercel.app/",
    },
    {
      id: 2,
      title: "BurgerHaven",
      description:
        "This burgerHaven website, built with React and Bootstrap, provides a seamless and responsive user experience. It features smooth navigation, stylish UI components, and an intuitive layout for browsing delicious burger options effortlessly.",
      githubUrl: "https://github.com/Ampah01/BurgerHaven",
      demoUrl: "https://burger-haven-theta.vercel.app/",
      more_details:
        "Experience BurgerHaven, a dynamic burger website built with React and Bootstrap for a seamless and responsive experience. Browse our delicious menu in a PDF format and easily place orders through the dedicated order page. With smooth navigation powered by React, you can explore our handcrafted burgers, customize your meal, and complete your order effortlessly.",
        imageUrl: "/burgerhaven.png",
    },
    {
      id: 3,
      title: "Ecommerce-Website",
      description:
        "This sneaker e-commerce website, built with React, Tailwind CSS, and React Router, offers smooth navigation across pages. It features dynamic animations with Framer Motion and a sleek product slider using React Slick.",
      githubUrl: "https://github.com/Ampah01/Project-E-commerce",
      demoUrl: "https://ecommerce-website-eight-zeta.vercel.app/",
      more_details:
        "Explore our sleek sneaker shop, crafted with React and Tailwind CSS for a seamless user experience. Browse a curated collection of stylish footwear, from classics to limited editions, all designed to elevate your style effortlessly. Shop with confidence and ease, navigating through intuitive React routes for quick access to product details and checkout.",
      imageUrl: "./ecommerce-website.png",
    },
    {
      id: 4,
      title: "Game hub",
      description:
        "The dynamic game discovery platform utilizes React, Tailwind CSS, and Axios to offer a responsive grid layout, real-time search functionality, and expandable game cards for enhanced user engagement.",
      imageUrl: "/game-hub.png",
      githubUrl: "https://github.com/Ampah01/Game-hub",
      more_details:
        "This project combines React hooks and modern UI/UX principles to deliver a streamlined game browsing experience. It features a responsive design that adjusts seamlessly across devices, with interactive elements that improve user engagement. The search functionality is powered by React hooks for real-time filtering, while expandable game cards provide detailed information in a focused view. Tailwind CSS ensures a modern and scalable interface, enhancing overall usability and visual appeal.",
      demoUrl: "https://game-hub-cyan-phi.vercel.app/",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "This project is a Weather and To-Do application that integrates real-time weather data and task management into a single interface using React and Tailwind CSS. It features current weather information, a 7-day forecast from the OpenWeatherMap API, and a to-do list with functionalities to add, delete, and rearrange tasks.",
      imageUrl: "/weather.jpg",
      githubUrl: "https://github.com/Ampah01/Weather-App",
      more_details:
        "It offers a seamless user experience by displaying weather data and task management tools side by side. With a visually appealing interface, it allows users to stay informed about the weather while keeping track of their daily tasks. The application also includes features such as search functionality for weather updates based on location and animated transitions for a more engaging user interaction.",
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
            <div className="p-4" onClick={() => toggleProject(project.id)}>
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
