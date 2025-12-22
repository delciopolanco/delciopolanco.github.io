import './experience.css';
import { useState } from 'react';

const experiences = [
  {
    id: 1,
    company: 'Zagalabs',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 - Feb 2025',
    duration: '6 months',
    description: 'Collaborated on a React monorepo application for a US-based housing services client, migrating a legacy Angular platform to React while ensuring smooth transition and stability.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Node.js', 'Jest', 'Redux Toolkit', 'Zustand', 'Angular', 'Tailwind CSS', 'Storybook'],
    achievements: [
      'Successfully migrated legacy Angular platform to React',
      'Designed and implemented project architecture from scratch',
      'Provided ongoing production support and defect resolution',
      'Collaborated on React monorepo application for housing services'
    ]
  },
  {
    id: 2,
    company: 'Full Stack Labs',
    role: 'Senior Software Engineer',
    period: 'Jan 2024 - Sep 2024',
    duration: '9 months',
    description: 'Focused on accessibility improvements and production support, collaborating closely with UI/UX teams to enhance usability and delivering full-stack solutions independently.',
    technologies: ['Angular', 'JavaScript', 'TypeScript', 'Jest', 'Azure DevOps', 'WCAG'],
    achievements: [
      'Enhanced application accessibility following WCAG standards',
      'Collaborated closely with UI/UX teams to improve usability',
      'Independently delivered full-stack solutions',
      'Wrote comprehensive unit tests to validate functionality'
    ]
  },
  {
    id: 3,
    company: 'Jobsity',
    role: 'Angular Developer',
    period: 'Feb 2023 - Sep 2023',
    duration: '8 months',
    description: 'Developed and maintained hybrid Angular applications for education platforms, enhancing accessibility and usability for students and instructors.',
    technologies: ['Angular', 'TypeScript', 'Karma', 'AWS', 'WCAG', 'Figma'],
    achievements: [
      'Developed hybrid Angular applications for education platforms',
      'Enhanced accessibility for students and instructors',
      'Implemented unit and E2E testing',
      'Improved platform usability through UI/UX collaboration'
    ]
  },
  {
    id: 4,
    company: 'Quantum IT',
    role: 'Frontend Developer',
    period: 'Nov 2023 - Jan 2024',
    duration: '3 months',
    description: 'Developed a hybrid Ionic/Angular mobile application, resolving production issues while improving accessibility and application stability.',
    technologies: ['Ionic', 'Angular', 'JavaScript', 'Jest', 'WCAG'],
    achievements: [
      'Built hybrid Ionic/Angular mobile application',
      'Resolved production and non-production issues',
      'Improved accessibility and application stability',
      'Participated in Scrum ceremonies and collaborated with UI/UX'
    ]
  },
  {
    id: 5,
    company: 'BairesDev',
    role: 'Senior Software Engineer',
    period: 'Nov 2022 - Nov 2023',
    duration: '1 year',
    description: 'Developed a B2B React application for suppliers and providers, delivering pixel-perfect UI implementations while improving performance and interaction quality.',
    technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'Material UI', 'Azure B2C'],
    achievements: [
      'Built B2B React application for supplier-provider intermediation',
      'Delivered pixel-perfect UI implementations',
      'Improved application performance and interaction quality',
      'Implemented Azure B2C authentication'
    ]
  },
  {
    id: 6,
    company: 'Nexton',
    role: 'Senior Full Stack Engineer',
    period: 'Jan 2021 - Nov 2022',
    duration: '1 year 11 months',
    description: 'Developed React solutions for IPSY, a subscription-based e-commerce platform, implementing and maintaining GraphQL services while creating reusable components.',
    technologies: ['React', 'Redux', 'GraphQL', 'Node.js', 'Styled Components', 'Datadog'],
    achievements: [
      'Built React solutions for subscription e-commerce platform',
      'Implemented and maintained GraphQL services',
      'Created technical documentation and reusable components',
      'Participated in Agile/Scrum ceremonies'
    ]
  },
  {
    id: 7,
    company: 'Banco BHD León',
    role: 'Frontend Developer Lead',
    period: 'Jan 2017 - Nov 2020',
    duration: '3 years 11 months',
    description: 'Led migration of internet and mobile banking platforms, developing financial features like transfers and payments while mentoring developers and conducting technical interviews.',
    technologies: ['React', 'Angular', 'Ionic', '.NET Framework', 'Java', 'IBM Db2', 'SQL Server'],
    achievements: [
      'Migrated internet and mobile banking platforms',
      'Led deployments and CI/CD processes',
      'Mentored developers and conducted technical interviews',
      'Received Team Transcendence awards in 2017 and 2018'
    ]
  },
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='experience' id='experience'>
      <div className='experience-container'>
        <header className='experience-header'>
          <span className='experience-eyebrow'>Career Journey</span>
          <h2 className='experience-title'>Work Experience</h2>
          <p className='experience-description'>
            10+ years of professional software development experience across fintech, e-commerce,
            healthcare, and enterprise applications. Proven track record of delivering high-impact solutions and leading technical teams.
          </p>
        </header>

        <div className='experience-content'>
          <div className='timeline-nav'>
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className='timeline-marker' />
                <div className='timeline-info'>
                  <h4 className='timeline-company'>{exp.company}</h4>
                  <span className='timeline-period'>{exp.period}</span>
                </div>
              </button>
            ))}
          </div>

          <div className='experience-details'>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`detail-card ${activeIndex === index ? 'active' : ''}`}
              >
                <div className='detail-header'>
                  <div>
                    <h3 className='detail-role'>{exp.role}</h3>
                    <div className='detail-meta'>
                      <span className='detail-company'>{exp.company}</span>
                      <span className='detail-separator'>•</span>
                      <span className='detail-duration'>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p className='detail-description'>{exp.description}</p>

                <div className='detail-achievements'>
                  <h4>Key Achievements</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className='detail-tech'>
                  <h4>Technologies</h4>
                  <div className='tech-tags'>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className='tech-tag'>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
