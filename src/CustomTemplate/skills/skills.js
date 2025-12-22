import './skills.css';
import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React JS', level: 95, years: '5+' },
      { name: 'Angular', level: 95, years: '5+' },
      { name: 'TypeScript', level: 90, years: '5+' },
      { name: 'Vue JS', level: 85, years: '3+' },
      { name: 'HTML/CSS', level: 95, years: '8+' },
      { name: 'Redux', level: 85, years: '4+' },
    ]
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, years: '5+' },
      { name: '.NET Core', level: 75, years: '3+' },
      { name: 'Java Spring', level: 70, years: '2+' },
      { name: 'Python', level: 60, years: '2+' },
    ]
  },
  {
    name: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 75, years: '5+' },
      { name: 'SQL Server', level: 80, years: '5+' },
      { name: 'MongoDB', level: 70, years: '3+' },
      { name: 'PostgreSQL', level: 65, years: '2+' },
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 75, years: '3+' },
      { name: 'Azure', level: 80, years: '4+' },
      { name: 'Docker', level: 70, years: '3+' },
      { name: 'CI/CD', level: 75, years: '4+' },
    ]
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className='skills' id='skills'>
      <div className='skills-container'>
        <header className='skills-header'>
          <span className='skills-eyebrow'>Tech Stack</span>
          <h2 className='skills-title'>Skills & Expertise</h2>
          <p className='skills-description'>
            Over 10 years of experience building scalable web applications with modern technologies.
            Specialized in full-stack development with a focus on React, Angular, .Net Core, and Node.js ecosystems.
          </p>
        </header>

        <div className='skills-grid'>
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={`skill-category ${activeCategory === catIndex ? 'active' : ''}`}
              onMouseEnter={() => setActiveCategory(catIndex)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className='category-header'>
                <span className='category-icon' role='img' aria-label={category.name}>{category.icon}</span>
                <h3 className='category-name'>{category.name}</h3>
                <span className='skill-count'>{category.skills.length} skills</span>
              </div>
              
              <div className='category-skills'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className='skill-item'>
                    <div className='skill-header'>
                      <span className='skill-name'>{skill.name}</span>
                      <div className='skill-meta'>
                        <span className='skill-years'>{skill.years}</span>
                        <span className='skill-percent'>{skill.level}%</span>
                      </div>
                    </div>
                    <div className='skill-bar'>
                      <div 
                        className='skill-fill' 
                        style={{ width: `${skill.level}%` }}
                        role='progressbar'
                        aria-valuenow={skill.level}
                        aria-valuemin='0'
                        aria-valuemax='100'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='skills-stats'>
          <div className='stat-item'>
            <span className='stat-number'>10+</span>
            <span className='stat-label'>Years Experience</span>
          </div>
          <div className='stat-item'>
            <span className='stat-number'>50+</span>
            <span className='stat-label'>Projects Delivered</span>
          </div>
          <div className='stat-item'>
            <span className='stat-number'>15+</span>
            <span className='stat-label'>Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};
