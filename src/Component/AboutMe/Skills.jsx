import React from "react";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp">
        <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
        <ul className="list-none space-y-2 text-gray-700 text-lg">
          {[
            "HTML, CSS, JavaScript",
            "React.js for building dynamic web applications",
            "Redux for state management in React applications",
            "Redux Toolkit (RTK) for simplifying Redux setup and usage",
            "jQuery for simplified DOM manipulation and event handling",
            "Tailwind CSS for rapid and modern UI development",
            "Axios for making asynchronous HTTP requests to REST APIs",
          ].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp">
        <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
        <ul className="list-none space-y-2 text-gray-700 text-lg">
          {[
            "Community Management",
            "Public Speaking and Presentations",
            "Social Media Management",
            "Customer Relationship Management (CRM)",
          ].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
