import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              I am an undergraduate student of Computer Science who loves to create scalable and user friendly web applications. I am fond of working with Java, databases, and modern frontend technologies in order to develop end-to-end solutions.My emphasis is on the real-world project development and real-life implementation to enhance my practical skills of development. I want to develop as a Full Stack Developer who will be able to create secure, efficient, and impactful applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;