import './App.css';

import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import APOD from './pages/APOD/APOD';
import Rover from './pages/MarsRover/Rover';

const App = () => {
  const [toggle, setToggle] = useState('Astronomy Picture Of The Day');

  return (
    <div id="App" className="ah-app">
      <Header
        link={{
          href: 'https://www.nasa.gov/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
        img={{
          src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-nasa-app@main/src/assets/icons/nasa-motion.gif',
          alt: 'NASA Logo',
        }}
        title="NASA Imagery Browser App"
        subtitle={toggle}
        handleChange={() => {
          toggle === 'Astronomy Picture Of The Day'
            ? setToggle('MARS Exploration Rovers')
            : setToggle('Astronomy Picture Of The Day');
        }}
      />
      {toggle === 'Astronomy Picture Of The Day' ? <APOD /> : <Rover />}
      <Footer
        rs1={{
          href: 'https://github.com/infinitidevs',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-nasa-app@main/src/assets/icons/github.png',
          alt: 'Github',
        }}
        rs2={{
          href: 'https://www.linkedin.com/in/infinitidevs',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-nasa-app@main/src/assets/icons/linkedin.png',
          alt: 'Linkedin',
        }}
        rs3={{
          href: 'mailto:infinitidevs@gmail.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-nasa-app@main/src/assets/icons/email.png',
          alt: 'email',
        }}
      />
    </div>
  );
};

export default App;
