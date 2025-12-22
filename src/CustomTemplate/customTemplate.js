import './customTemplate.css';
import React, { useEffect } from 'react';
import { Header } from './header/header';
import { Home } from './home/home';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Separator } from './shared/Separator';

export const CustomTemplate = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  return (
    <main className='custom-template'>
      <Header />
      <Home />
      <Skills />
      <Separator />
      <Projects />
    </main>
  );
};

export default CustomTemplate;
