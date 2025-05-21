import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              I'm a Cloud & DevOps Engineer with a passion for building and optimizing scalable, resilient infrastructure. 
              My journey began with a background in traditional system administration before transitioning into the cloud era.
            </p>
            <p>
              After completing my degree in Computer Science, I worked as a System Administrator for 2 years where I gained 
              hands-on experience with Linux systems and networking. This foundation proved invaluable when I pivoted to 
              cloud technologies and DevOps methodologies.
            </p>
            <p>
              My career vision is centered around bridging the gap between development and operations, creating efficient 
              automated pipelines, and implementing infrastructure as code practices that enable organizations to deploy 
              faster and with greater reliability.
            </p>
            <p>
              I'm particularly passionate about containerization, Kubernetes, and the entire DevOps ecosystem. When I'm not 
              working, I enjoy contributing to open-source projects and staying current with emerging technologies.
            </p>
          </div>
        </div>
        
        {/* Journey/Timeline */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">My Journey</h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2.5 top-1">
                <div className="w-5 h-5 rounded-full bg-blue-600"></div>
              </div>
              <div className="mb-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2020 - Present</span>
              </div>
              <h4 className="text-lg font-semibold">DevOps Transformation</h4>
              <p className="text-slate-600 text-sm">Mastering Kubernetes, GitOps, and modern CI/CD practices</p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2.5 top-1">
                <div className="w-5 h-5 rounded-full bg-blue-600"></div>
              </div>
              <div className="mb-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2018 - 2020</span>
              </div>
              <h4 className="text-lg font-semibold">Cloud Migration Specialist</h4>
              <p className="text-slate-600 text-sm">Helping businesses migrate to AWS and implement cloud-native solutions</p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2.5 top-1">
                <div className="w-5 h-5 rounded-full bg-blue-600"></div>
              </div>
              <div className="mb-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2015 - 2018</span>
              </div>
              <h4 className="text-lg font-semibold">System Administrator</h4>
              <p className="text-slate-600 text-sm">Managing enterprise infrastructure and automating system processes</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-1">
                <div className="w-5 h-5 rounded-full bg-blue-600"></div>
              </div>
              <div className="mb-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2015</span>
              </div>
              <h4 className="text-lg font-semibold">Computer Science Degree</h4>
              <p className="text-slate-600 text-sm">Graduated with honors, specializing in distributed systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;