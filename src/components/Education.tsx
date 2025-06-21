import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'SR University',
      degree: 'Bachelor of Technology in Computer Science',
      grade: 'GPA: 8.98',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      institution: 'Alphores Junior College',
      degree: 'Intermediate',
      grade: '90.5%',
      icon: <Award className="h-6 w-6" />
    },
    {
      institution: 'Saketha High School',
      degree: 'SSC',
      grade: '10 GPA',
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
            <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {edu.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;