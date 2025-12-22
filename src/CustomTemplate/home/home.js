import './home.css';
import foto from '../../assets/foto-3.png';
import Typewriter from 'typewriter-effect';
import { useCallback } from 'react';

export const Home = () => {
  const scrollToProjects = useCallback(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // create a ripple element at mouse position (or center for keyboard)
  const createRipple = useCallback((event) => {
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    if (event.type.startsWith('mouse') || event.clientX) {
      const x = (event.clientX || 0) - rect.left - size / 2;
      const y = (event.clientY || 0) - rect.top - size / 2;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    } else {
      // keyboard activation: center
      ripple.style.left = `${rect.width / 2 - size / 2}px`;
      ripple.style.top = `${rect.height / 2 - size / 2}px`;
    }

    ripple.style.width = ripple.style.height = `${size}px`;
    btn.appendChild(ripple);

    // remove after animation
    setTimeout(() => {
      ripple.remove();
    }, 650);
  }, []);

  const handleKeyDownRipple = useCallback((e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      // space triggers click by default on buttons, but we add ripple visual
      createRipple(e);
    }
  }, [createRipple]);

  return (
    <section className='home' id='home' aria-label='Home'>
      <div className='hero'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Hey, <span className='visually-hidden'>— welcome to my portfolio —</span>
            <br />
            I'm <span className='name'>Delcio</span>
          </h1>

          <div className='hero-subtitle' role='status' aria-live='polite'>
            <span className='typewriter'>
              <Typewriter
                options={{
                  strings: [
                    'Senior React.js and Angular Developer.',
                    'FullStack Developer.',
                    'Gym Enthusiastic.',
                    'Gamer.',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <div className='hero-cta' role='group' aria-label='Primary actions'>
            <button
              className='btn btn-primary'
              onClick={scrollToProjects}
              onMouseDown={createRipple}
              onKeyDown={handleKeyDownRipple}
              aria-label='See my work (scroll to projects)'
            >
              See my work
              <span className='btn-arrow' aria-hidden='true'>→</span>
            </button>

            <a
              className='btn btn-secondary'
              href='/cv.json'
              download='cv.json'
              aria-label='Download my CV as JSON'
            >
              Download CV
            </a>
          </div>

          <div className='social' aria-hidden='false'>
            <a
              href='https://www.linkedin.com/in/delciopolanco/'
              target='_blank'
              rel='noreferrer'
              className='home_social-icon'
              aria-label='LinkedIn (opens in new tab)'
            >
              <i className='icon-linkedin'></i>
            </a>
            <a
              href='https://github.com/delciopolanco'
              target='_blank'
              rel='noreferrer'
              className='home_social-icon'
              aria-label='GitHub (opens in new tab)'
            >
              <i className='icon-github'></i>
            </a>
          </div>
        </div>

        <div className='hero-image' aria-hidden='true'>
          <img alt='Portrait of Delcio' src={foto} loading='lazy' />
        </div>
      </div>
    </section>
  );
};
