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
    tech: ['React JS', 'HTML', 'CSS', 'Typescript', 'Node Js'],
  },
  {
    url: slide5,
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
    tech: ['Angular', 'Redux', 'HTML', 'CSS', '.Net Core', 'Typescript'],
  },
];

export const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [techGroup, setTechGroup] = useState(new Set());

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

  useEffect(() => {
    // Group all tech from different images into a single array
    const allTech = images.reduce((techArray, image) => {
      techArray.push(...image.tech);
      return techArray;
    }, []);

    // Store unique tech values in the techGroup state
    setTechGroup(new Set(allTech));
  }, []);

  return (
    <section className='projects' id='projects'>
      <div className='title'>
        <h3>Projects</h3>
        <p>
          Some of the latest projects I have worked on encompass a diverse range
          of innovative endeavors that have allowed me to hone my skills and
          contribute to various domains. These projects reflect my commitment to
          staying at the forefront of technology and my passion for crafting
          solutions that cater to modern challenges.
        </p>
        <div className='tech-pills-container'>
          <ul className='tech-pills'>
            {[...techGroup].map((tech, index) => (
              <li
                key={index}
                className={`tech-pill ${
                  images[currentImageIndex].tech.includes(tech) ? 'active' : ''
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className='slider-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='slider'>
          <button className='slider-button prev' onClick={handlePrevSlide}>
            <i className='icon-left'></i>
          </button>
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            >
              <img src={image.url} alt={`Slide ${index}`} />
            </div>
          ))}
          <button className='slider-button next' onClick={handleNextSlide}>
            <i className='icon-right'></i>
          </button>
        </div>
      </div>
    </section>
  );
};
