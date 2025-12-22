import React from 'react';
import './separator.css';

export const Separator = ({ style = 'wave' }) => {
  return (
    <div className={`separator separator-${style}`} aria-hidden='true'>
      {/* Wave SVG — decorative only */}
      <svg viewBox='0 0 1440 80' preserveAspectRatio='none' className='separator-svg' role='img' aria-hidden='true'>
        <defs>
          <linearGradient id='sepGrad' x1='0' x2='1'>
            <stop offset='0' stopColor='var(--accent)' />
            <stop offset='1' stopColor='var(--accent-2)' />
          </linearGradient>
        </defs>
        <path d='M0,32 C360,112 1080,-48 1440,32 L1440,80 L0,80 Z' fill='url(#sepGrad)' />
      </svg>
    </div>
  );
};
