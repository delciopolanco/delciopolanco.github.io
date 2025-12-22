import './home.css';
import foto from '../../assets/foto-3.png';
import Typewriter from 'typewriter-effect';

export const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='title'>
        <div className='title_info'>
          <h1>
            Hey, <br />
            I'm <span className='name'>Delcio</span>
          </h1>

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
        </div>
        <div className='title_image'>
          <img alt={'me'} src={foto} />
        </div>
      </div>
      <div className='social'>
        <a
          href='https://www.linkedin.com/in/delciopolanco/'
          target='_blank'
          rel='noreferrer'
          className='home_social-icon'
          data-sr-id='7'
        >
          <i className='icon-linkedin'></i>
        </a>
        <a
          href='https://github.com/delciopolanco'
          target='_blank'
          rel='noreferrer'
          className='home_social-icon'
          data-sr-id='8'
        >
          <i className='icon-github'></i>
        </a>
      </div>
    </section>
  );
};
