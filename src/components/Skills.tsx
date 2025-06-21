import React from 'react';
import { Code, Users, Lightbulb, MessageCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    'C', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'MySQL', 'Visual Studio'
  ];

  const softSkills = [
    { name: 'Communication', icon: <MessageCircle className="h-5 w-5" /> },
    { name: 'Teamwork', icon: <Users className="h-5 w-5" /> },
    { name: 'Leadership', icon: <Users className="h-5 w-5" /> },
    { name: 'Blog Writing', icon: <MessageCircle className="h-5 w-5" /> },
    { name: 'Analytical Thinking', icon: <Lightbulb className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
            <Code className="h-8 w-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="h-6 w-6 text-orange-600 dark:text-orange-400 mr-3" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              Soft Skills
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-3">
                    {skill.icon}
                  </span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;