import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechInnovate Inc.',
      duration: 'Jan 2020 - Present',
      responsibilities: [
        'Lead a team of 5 DevOps engineers in implementing CI/CD pipelines using GitLab and Jenkins',
        'Architected and managed AWS infrastructure using Terraform, reducing deployment time by 70%',
        'Implemented Kubernetes clusters for microservices architecture, improving scalability and reliability',
        'Designed and implemented robust monitoring solutions using Prometheus and Grafana',
        'Reduced infrastructure costs by 35% through optimization and proper resource allocation'
      ]
    },
    {
      title: 'Cloud Infrastructure Engineer',
      company: 'CloudSolutions LLC',
      duration: 'Mar 2018 - Dec 2019',
      responsibilities: [
        'Migrated legacy applications to AWS cloud, reducing operational costs by 40%',
        'Implemented infrastructure as code using CloudFormation and Terraform',
        'Developed automated backup and disaster recovery solutions',
        'Collaborated with development teams to implement microservices architecture',
        'Optimized database performance and implemented caching solutions'
      ]
    },
    {
      title: 'Systems Administrator',
      company: 'DataCore Systems',
      duration: 'Jun 2015 - Feb 2018',
      responsibilities: [
        'Maintained and managed Linux and Windows server environments',
        'Implemented automation scripts to streamline routine maintenance tasks',
        'Managed network infrastructure and security policies',
        'Provided technical support for critical production systems',
        'Implemented virtualization using VMware and reduced hardware costs by 25%'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          My journey through various roles and companies that have shaped my expertise
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`relative mb-12 ${
              index < experiences.length - 1 
                ? 'pb-12 border-b border-slate-200' 
                : ''
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                <p className="text-lg font-medium text-slate-800">{exp.company}</p>
                <p className="text-sm text-slate-600">{exp.duration}</p>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-lg font-semibold mb-3 text-slate-800">Responsibilities & Achievements</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-slate-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;