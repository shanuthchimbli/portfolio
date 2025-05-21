import React from 'react';
import profilePic from './mine.jpeg';
import { ArrowRight, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile Image - Left */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full overflow-hidden">
              <img
  src={profilePic}
  alt="Profile"
  className="w-full h-full object-cover"
/>

              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <div className="flex space-x-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:example@email.com" 
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text Content - Right */}
        <div className="w-full md:w-3/5 md:pl-16">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">Shanuth Chimbli</h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-4">Cloud & DevOps Engineer</h2>
            <p className="text-slate-600 text-lg mb-8">
              I'm a passionate Cloud & DevOps Engineer with expertise in designing and implementing scalable cloud infrastructure. 
              Specializing in AWS, Terraform, and CI/CD pipelines to deliver efficient and reliable solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium text-center hover:bg-blue-700 transition-colors"
              >
                Contact Me
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-medium text-center hover:bg-blue-50 transition-colors"
              >
                View Projects
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;