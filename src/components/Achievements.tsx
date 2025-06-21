import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Led LokSabha as Scribe at SRUMUN\'24',
      description: 'Recognized for exceptional leadership and organizational skills',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: '4th place in SR University Hackathon',
      description: 'Blockchain-based project showcasing innovative solutions',
      icon: <Medal className="h-6 w-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
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

export default Achievements;