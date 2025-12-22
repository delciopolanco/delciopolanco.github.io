import { useEffect } from 'react';
import './customTemplate.css';
import { Experience } from './experience/experience';
import { Header } from './header/header';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';

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
      <Projects />
      <Experience />
    </main>
  );
};

export default CustomTemplate;
