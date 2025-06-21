import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    'Software Development Enthusiast',
    'Programmer',
    'Quick Learner'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">

          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="main.JPG"
                    alt="Sumanth Bopparaju"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Name, Role, and CTA */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sumanth Bopparaju
              </span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-16 flex items-center justify-center">
              <p
                className={`text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {texts[currentText]}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => {
                  const element = document.querySelector('#about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More About Me
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;