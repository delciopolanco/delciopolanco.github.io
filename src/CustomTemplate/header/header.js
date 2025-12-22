import { useState, useEffect } from 'react';
import './header.css';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
    const section = document.getElementById(link);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => setMenuOpen((s) => !s);
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className='header'>
      <nav className={`top-nav ${menuOpen ? 'open' : ''}`} aria-label='Main navigation'>
        <a className='brand' href='#home' onClick={() => handleNavLinkClick('home') } aria-label="Home">
          <span className='brand-logo' aria-hidden='true'>DP</span>
          <span className='brand-text'>Delcio</span>
        </a>

        <div className='controls'>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title='Toggle theme'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
              <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' fill='currentColor' />
            </svg>
          </button>

          <input
            id='menu-toggle'
            type='checkbox'
            checked={menuOpen}
            onChange={toggleMenu}
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
          />
          <label className='menu-button-container' htmlFor='menu-toggle' aria-hidden='true'>
            <div className='menu-button'></div>
          </label>
        </div>

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
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('projects')}
            onKeyDown={(e) => e.key === 'Enter' && handleNavLinkClick('projects')}
          >
            Projects
          </li>

          <li className='menu-cta'>
            <a className='btn btn-ghost' href='mailto:hello@delciopolanco.com' aria-label='Contact via email'>Email</a>
          </li>
        </ul>

        {/* overlay for mobile when menu is open */}
        <div className={`mobile-overlay ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden='true' />
      </nav>
    </header>
  );
};
