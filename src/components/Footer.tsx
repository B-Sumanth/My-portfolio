import React from 'react';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sumanth Bopparaju</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Passionate software developer dedicated to creating innovative solutions and continuously learning new technologies.
            </p>
            
            {/* Contact Links */}
            <div className="space-y-3">
              <a
                href="mailto:bsumanth333@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5 mr-3" />
                bsumanth333@gmail.com
              </a>
              <a
                href="tel:+916303101478"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5 mr-3" />
                +91-6303101478
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://linkedin.com/in/sumanth-bopparaju"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/B-Sumanth"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            <div>
              <a
                href="/Sumanth_CV.pdf"
                download>Download Resume (PDF)</a>
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Sumanth Bopparaju
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;