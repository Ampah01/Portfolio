import React from 'react';

const PortfolioPage = () => {
  // Replace with actual project data or dynamic rendering logic
  const projects = [
    { 
      id: 1, 
      title: 'Project 1', 
      description: 'Description of Project 1', 
      imageUrl: 'https://via.placeholder.com/300', 
      githubUrl: 'https://github.com/your-username/project1', 
      demoUrl: 'https://demo-url.com/project1' 
    },
    { 
      id: 2, 
      title: 'Project 2', 
      description: 'Description of Project 2', 
      imageUrl: 'https://via.placeholder.com/300', 
      githubUrl: 'https://github.com/your-username/project2', 
      demoUrl: 'https://demo-url.com/project2' 
    },
    { 
      id: 3, 
      title: 'Project 3', 
      description: 'Description of Project 3', 
      imageUrl: 'https://via.placeholder.com/300', 
      githubUrl: 'https://github.com/your-username/project3', 
      demoUrl: 'https://demo-url.com/project3' 
    },
  ];

  return (
    <section className='container mx-auto py-8'>
      <h2 className='text-3xl font-bold mb-8'>Portfolio</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(project => (
          <div key={project.id} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img src={project.imageUrl} alt={project.title} className='w-full h-40 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-700 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>GitHub</a>
                <a href={project.demoUrl} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
