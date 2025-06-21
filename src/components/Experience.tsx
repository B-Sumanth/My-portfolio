import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AICTE Google AIML Virtual Internship',
      period: 'Jan 2024',
      type: 'Virtual Internship'
    },
    {
      title: 'AWS Virtual Internship',
      period: 'Jul–Sep 2024',
      type: 'Virtual Internship'
    },
    {
      title: 'Logicwhile Python Internship',
      period: 'Dec 2024',
      type: 'Internship'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-sm rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;