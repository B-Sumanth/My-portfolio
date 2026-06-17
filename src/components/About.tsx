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
              Hello! I'm **Sumanth Bopparaju**, a Computer Science Engineering graduate from SR University with a passion for technology, innovation, and problem-solving. I have experience working with Java, Python, C, SQL, HTML, and CSS, along with practical exposure to Artificial Intelligence, Cloud Computing, and Software Development. Through internships and projects, including an AI-powered emotional support chatbot, voice assistant, and smart automation systems, I have developed a strong foundation in building technology-driven solutions.

Beyond technical expertise, I enjoy taking on leadership roles and collaborating with teams to achieve meaningful outcomes. My experiences in hackathons, event management, and Model United Nations conferences have strengthened my communication, teamwork, and organizational skills. I am always eager to learn emerging technologies, contribute to impactful projects, and grow as a developer while creating solutions that make a real difference.

**Best regards,**
**Sumanth Bopparaju**
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;