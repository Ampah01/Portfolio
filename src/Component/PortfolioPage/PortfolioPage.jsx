import React, { useState } from "react";

const PortfolioPage = () => {
  
  const projects = [
    {
      id: 1,
      title: "Kick Kingdom",
      description:
        "",
      githubUrl: "https://github.com/Ampah01/Project-E-commerce",
      demoUrl: "https://demo-url.com/project1",
      more_details:"Explore our sleek sneaker shop, crafted with React and Tailwind CSS for a seamless user experience. Browse a curated collection of stylish footwear, from classics to limited editions, all designed to elevate your style effortlessly. Shop with confidence and ease, navigating through intuitive React routes for quick access to product details and checkout.",
      imageUrl: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/your-username/project2",
      more_details:"",
      demoUrl: "https://demo-url.com/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/your-username/project3",
      more_details:"",
      demoUrl: "https://demo-url.com/project3",
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
              <p className="text-gray-700 mb-4">{project.description}</p>
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
                  <p>
                  {project.more_details}
                  </p>
                  
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
