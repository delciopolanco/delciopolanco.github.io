import './projects.css';
import { useState, useEffect, useCallback } from 'react';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slider2.jpeg';
import slide3 from '../../assets/slider3.jpeg';
import slide4 from '../../assets/slider4.gif';
import slide5 from '../../assets/slider5.png';
import slide6 from '../../assets/slider6.png';

const images = [
  {
    url: slide1,
    title: 'Enterprise Banking Platform',
    description: 'Full-stack banking solution with real-time transactions, secure authentication, and comprehensive financial management tools.',
    category: 'FinTech',
    tech: [
      'React JS',
      'Redux',
      'HTML',
      'CSS',
      'Recoil',
      'Azure',
      '.Net Core',
      'Typescript',
    ],
  },
  {
    url: slide2,
    title: 'Healthcare Communication System',
    description: 'HIPAA-compliant telehealth platform enabling secure video consultations and patient messaging with Twilio integration.',
    category: 'Healthcare',
    tech: [
      'React JS',
      'Redux',
      'HTML',
      'CSS',
      'Node JS',
      'AWS',
      'Twillo SDK',
      'Typescript',
    ],
  },
  {
    url: slide3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Machine learning platform for data visualization and predictive analytics with Python backend processing.',
    category: 'AI/ML',
    tech: [
      'Python',
      'React JS',
      'HTML',
      'CSS',
      'Typescript',
      'Node Js',
      'Azure',
    ],
  },
  {
    url: slide4,
    title: 'E-Commerce Platform',
    description: 'Modern online shopping experience with real-time inventory, payment processing, and personalized recommendations.',
    category: 'E-Commerce',
    tech: ['React JS', 'HTML', 'CSS', 'Typescript', 'Node Js'],
  },
  {
    url: slide5,
    title: 'Project Management Suite',
    description: 'Collaborative workspace with task tracking, team communication, and advanced reporting capabilities.',
    category: 'SaaS',
    tech: [
      'React JS',
      'Redux',
      'HTML',
      'CSS',
      'Recoil',
      'Azure',
      '.Net Core',
      'Typescript',
    ],
  },
  {
    url: slide6,
    title: 'Corporate CRM System',
    description: 'Customer relationship management platform with sales pipeline tracking and automated workflow management.',
    category: 'Enterprise',
    tech: ['Angular', 'Redux', 'HTML', 'CSS', '.Net Core', 'Typescript'],
  },
];

export const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  

  const handleNextSlide = useCallback(() => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex]);

  const handlePrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    let autoPlay;

    if (!isHovered) {
      autoPlay = setInterval(handleNextSlide, 5000); // Autoplay every 3 seconds
    }

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentImageIndex, handleNextSlide, isHovered]);


  return (
    <section className='projects' id='projects'>
      <div className='projects-container'>
        <header className='projects-header'>
          <span className='projects-eyebrow'>Portfolio</span>
          <h2 className='projects-title'>Featured Projects</h2>
          <p className='projects-description'>
            A selection of recent projects demonstrating expertise across full-stack development,
            modern frameworks, and cloud technologies. Each project solved unique challenges
            and delivered measurable business value.
          </p>
        </header>

        {/* Project Showcase */}
        <div
          className='project-showcase'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className='nav-btn nav-prev' 
            onClick={handlePrevSlide}
            aria-label='Previous project'
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path d='M15 18L9 12L15 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </button>

          <div className='project-slider'>
            {images.map((image, index) => (
              <div
                key={index}
                className={`project-card ${index === currentImageIndex ? 'active' : ''}`}
              >
                <div className='project-content-grid'>
                  <div className='project-image-wrapper'>
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className='project-image'
                    />
                    <div className='project-overlay' />
                    <span className='project-category'>{image.category}</span>
                  </div>
                  
                  <div className='project-details'>
                    <div className='project-info'>
                      <h3 className='project-title'>{image.title}</h3>
                      <p className='project-description'>{image.description}</p>
                      
                      <div className='project-tech-stack'>
                        <h4 className='tech-stack-label'>Technologies Used</h4>
                        <div className='tech-tags'>
                          {image.tech.map((tech, techIndex) => (
                            <span key={techIndex} className='tech-tag'>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className='nav-btn nav-next' 
            onClick={handleNextSlide}
            aria-label='Next project'
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path d='M9 18L15 12L9 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className='project-indicators'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
