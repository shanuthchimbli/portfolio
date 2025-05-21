import React, { useState } from 'react';
import { ExternalLink, Github, MoreHorizontal } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'Cloud Migration Framework',
      description: 'A comprehensive framework for migrating legacy applications to AWS cloud with minimal downtime.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      technologies: ['AWS', 'Terraform', 'Python', 'Docker'],
      category: 'devops',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Kubernetes Monitoring Solution',
      description: 'A custom monitoring solution for Kubernetes clusters using Prometheus, Grafana, and Alertmanager.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Go'],
      category: 'devops',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'CI/CD Pipeline Generator',
      description: 'A tool that automatically generates CI/CD pipelines based on project structure and requirements.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      technologies: ['Jenkins', 'GitLab CI', 'YAML', 'Shell'],
      category: 'devops',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Infrastructure Cost Optimizer',
      description: 'An automated solution for analyzing and optimizing cloud infrastructure costs.',
      image: 'https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg',
      technologies: ['AWS', 'Python', 'React', 'Lambda'],
      category: 'cloud',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Serverless Data Pipeline',
      description: 'A fully serverless data pipeline for processing and analyzing large datasets.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      technologies: ['AWS Lambda', 'S3', 'DynamoDB', 'Kinesis'],
      category: 'cloud',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Personal Blog',
      description: 'A tech blog built with React and a headless CMS, featuring articles on cloud and DevOps.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
      technologies: ['React', 'Tailwind CSS', 'Contentful', 'Netlify'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'devops', label: 'DevOps' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-8">
          Explore some of my recent work and technical projects
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-6 pb-6 flex justify-between items-center mt-auto">
              <div className="flex space-x-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span className="text-sm">Code</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
              <button
                className="p-1 text-slate-400 hover:text-slate-700 transition-colors rounded-full"
                aria-label="More options"
              >
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;