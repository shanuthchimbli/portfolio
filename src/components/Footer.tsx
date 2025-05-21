import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">Portfolio</a>
            <p className="text-slate-400 mt-2">Cloud & DevOps Engineer</p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Experience', 'Projects'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">More</h4>
              <ul className="space-y-2">
                {['Skills', 'Certifications', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> in React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;