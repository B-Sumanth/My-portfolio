import React from 'react';
import { AlignCenterVertical as Certificate, Award, Shield, Cloud } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Microsoft Azure AI Fundamentals',
      provider: 'Microsoft',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Networking Essentials',
      provider: 'Cisco',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Cybersecurity Essentials',
      provider: 'Cisco',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Wireless Essentials',
      provider: 'Cisco',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'AWS Cloud Foundations',
      provider: 'AWS',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'AWS Data Engineering',
      provider: 'AWS',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Theory of Computation',
      provider: 'NPTEL',
      icon: <Certificate className="h-6 w-6" />
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
            <Certificate className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {cert.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                    {cert.provider}
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

export default Certifications;