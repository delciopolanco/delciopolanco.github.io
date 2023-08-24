import { useState } from 'react';
import './header.css';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <nav className='top-nav'>
        <div>Hey, I'm Delcio</div>
        <input id='menu-toggle' type='checkbox' />
        <label className='menu-button-container' htmlFor='menu-toggle'>
          <div className='menu-button'></div>
        </label>
        <ul className='menu'>
          <li
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('home')}
          >
            Home
          </li>
          <li
            className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('skills')}
          >
            Skills
          </li>
          <li
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('projects')}
          >
            Projects
          </li>
        </ul>
      </nav>
    </div>
  );
};
