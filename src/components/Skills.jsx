import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Azure', level: 75 },
        { name: 'Google Cloud', level: 65 },
        { name: 'Terraform', level: 85 },
        { name: 'CloudFormation', level: 80 },
      ]
    },
    {
      title: 'DevOps & Automation',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'GitLab CI/CD', level: 85 },
        { name: 'GitHub Actions', level: 75 },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Go', level: 65 },
        { name: 'Bash/Shell', level: 90 },
        { name: 'YAML', level: 95 },
      ]
    },
    {
      title: 'Monitoring & Security',
      skills: [
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 85 },
        { name: 'ELK Stack', level: 75 },
        { name: 'AWS Security', level: 80 },
        { name: 'Network Security', level: 70 },
      ]
    }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs font-medium text-slate-600">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-blue-600">{category.title}</h3>
            {category.skills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} />
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-6">Additional Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Ansible', 'Load Balancing', 'Redis', 'MongoDB', 'PostgreSQL', 'Microservices', 
            'RESTful APIs', 'CI/CD', 'Git', 'Linux Administration', 'Networking', 'Agile',
            'VPC', 'IAM', 'S3', 'EC2', 'Lambda'].map((skill, i) => (
            <span 
              key={i} 
              className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;