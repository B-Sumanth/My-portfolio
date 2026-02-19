import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sensor based parking assistant system',
      description: 'Designed the smart parking assistant system to detect obstacles in parking through the application of ultrasonic sensors and incorporate IoT to guide drivers during the parking process. The system displays distance feedback in real time, which is beneficial to young learners and older users. Majority oriented towards the integration of hardware, sensor calibration and precise distance determination.',
      github: 'https://github.com/B-Sumanth/Capstone-Project'
    },
     {
      title: 'Voice Assistant',
      description: 'Developed a Python voice assistant with support of speech recognition and Wikipedia API. The assistant is able to answer voice commands, provide real time information, and has the ability to perform simple automated functions. Introduced interactive user experience via natural language processing and audio input processing.',
      github: 'https://github.com/B-Sumanth/Voice_Assist'
    },
    {
      title: 'Playfair Simulation & Steganography',
      description: 'Built a cryptography application, which further involves the Playfair encryption algorithm to encrypt messages and employs steganography to safely conceal the encrypted message within the files of media. The project reflects the practice of the classical theories of encryption and the concept of safe transmission of data.',
      github: 'https://github.com/B-Sumanth/Playfair-simulation-and-Steganography'
    },
    {
      title: 'Agribot',
      description: 'Developed an agricultural automation system that assists the farmers in monitoring their crops and managing their fields. The system is a system that incorporates sensor-based data gathering to enhance irrigation management and optimization of the resources to make farming operations more efficient.',
      github: 'https://github.com/B-Sumanth/Agribot'
    },
    {
      title: 'Netflix Clone',
      description: 'Created a web-based application using Netflix as inspiration, with a modern user interface design and dynamic layout of the content. Introduced reusable elements and page navigation according to the principles of a streaming platform to duplicate its core interface.',
      github: 'https://github.com/B-Sumanth/Netflix'
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