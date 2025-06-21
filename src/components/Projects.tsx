import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Playfair Simulation & Steganography',
      description: 'A cryptographic project implementing Playfair cipher simulation with steganography techniques.',
      github: 'https://github.com/B-Sumanth'
    },
    {
      title: 'Agribot',
      description: 'An agricultural automation bot designed to assist farmers with crop monitoring and management.',
      github: 'https://github.com/B-Sumanth'
    },
    {
      title: 'Netflix Clone',
      description: 'A full-featured Netflix clone with modern UI/UX and streaming capabilities.',
      github: 'https://github.com/B-Sumanth'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Folder className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group cursor-pointer"
              onClick={() => window.open(project.github, '_blank')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Folder className="h-6 w-6" />
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github className="h-4 w-4" />
                  </div>
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;