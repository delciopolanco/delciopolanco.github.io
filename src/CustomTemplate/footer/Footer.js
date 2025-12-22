import React from 'react';
import './footer.css';

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className='site-footer' role='contentinfo'>
      <div className='footer-inner'>
        <div className='footer-left'>
          <div className='brand'>
            <span className='brand-logo' aria-hidden='true'>DP</span>
            <span className='brand-text'>Delcio</span>
          </div>
          <small className='copyright'>© {new Date().getFullYear()} Delcio Polanco. All rights reserved.</small>
        </div>

        <div className='footer-right'>
          <div className='footer-socials'>
            <a href='https://github.com/delciopolanco' target='_blank' rel='noreferrer' aria-label='GitHub'>
              <i className='icon-github' />
            </a>
            <a href='https://www.linkedin.com/in/delciopolanco/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
              <i className='icon-linkedin' />
            </a>
          </div>

          <button className='btn btn-ghost back-to-top' onClick={scrollTop} aria-label='Back to top'>Back to top</button>
        </div>
      </div>
    </footer>
  );
};
