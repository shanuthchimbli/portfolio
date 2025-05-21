import React from 'react';
import { Briefcase, Award, BookOpen, Code } from 'lucide-react';

const Summary = () => {
  const summaryItems = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      value: '5+',
      label: 'Years Experience',
      description: 'Working with enterprise solutions'
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      value: '10+',
      label: 'Certifications',
      description: 'From AWS, Azure, and GCP'
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      value: '20+',
      label: 'Projects',
      description: 'Delivered across various industries'
    },
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      value: '15+',
      label: 'Technologies',
      description: 'Mastered for efficient development'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Summary</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          A quick overview of my professional journey and technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {summaryItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">{item.value}</h3>
            <p className="text-blue-600 font-medium mb-2">{item.label}</p>
            <p className="text-slate-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;