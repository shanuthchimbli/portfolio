import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: 'Apr 2023',
      logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      link: 'https://www.credly.com'
    },
    {
      title: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: 'Oct 2022',
      logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      link: 'https://www.credly.com'
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Jun 2022',
      logo: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg',
      link: 'https://www.credly.com'
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: 'Jan 2022',
      logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      link: 'https://www.credly.com'
    },
    {
      title: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      date: 'Jul 2021',
      logo: 'https://images.pexels.com/photos/11035521/pexels-photo-11035521.jpeg',
      link: 'https://www.credly.com'
    },
    {
      title: 'Google Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'Mar 2021',
      logo: 'https://images.pexels.com/photos/11035531/pexels-photo-11035531.jpeg',
      link: 'https://www.credly.com'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Professional certifications that validate my technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-1 text-slate-900">{cert.title}</h3>
              <p className="text-slate-600 text-sm mb-2">{cert.issuer}</p>
              <p className="text-slate-500 text-xs mb-3">Issued {cert.date}</p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View Credential</span>
                <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;