import { useState } from 'react';
import './header.css';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);


  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
    const section = document.getElementById(link);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header'>
      <nav className={`top-nav ${menuOpen ? 'open' : ''}`} aria-label='Main navigation'>
        <a className='brand' href='#home' onClick={() => handleNavLinkClick('home') } aria-label="Home">
          <span className='brand-text'>Delcio Polanco</span>
        </a>

        <div className='controls'></div>

        <ul className='menu' role='menubar'>
          <li
            role='menuitem'
            tabIndex={0}
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('home')}
            onKeyDown={(e) => e.key === 'Enter' && handleNavLinkClick('home')}
          >
            Home
          </li>

          <li
            role='menuitem'
            tabIndex={0}
            className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('skills')}
            onKeyDown={(e) => e.key === 'Enter' && handleNavLinkClick('skills')}
          >
            Skills
          </li>

          <li
            role='menuitem'
            tabIndex={0}
            className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('experience')}
            onKeyDown={(e) => e.key === 'Enter' && handleNavLinkClick('experience')}
          >
            Experience
          </li>

          <li
            role='menuitem'
            tabIndex={0}
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('projects')}
            onKeyDown={(e) => e.key === 'Enter' && handleNavLinkClick('projects')}
          >
            Projects
          </li>

          <li className='menu-cta'>
            <a 
              className='btn btn-ghost' 
              href='mailto:delciopolanco@gmail.com?subject=Hiring%20Inquiry%20-%20Senior%20Software%20Engineer&body=Hi%20Delcio,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity.%0D%0A%0D%0A[Please%20share%20details%20about%20the%20role%20and%20your%20company]%0D%0A%0D%0ABest%20regards,' 
              aria-label='Contact via email to discuss opportunities'
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* overlay for mobile when menu is open */}
        <div className={`mobile-overlay ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden='true' />
      </nav>
    </header>
  );
};
