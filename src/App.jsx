import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  const [toggle, setToggle] = useState('Astronomy Picture Of The Day');

  return (
    <div id="App" className="ah-app">
      <Header 
        link={{ href: 'https://www.nasa.gov/', target: '_blank', rel: 'noopener noreferrer' }}
        img={{
          src: '/src/assets/nasa-logo.png',
          alt: 'NASA Logo',
        }}
        title='NASA Imagery Browser App'
        subtitle={toggle}
        handleChange={() => {
          toggle === 'Astronomy Picture Of The Day' ? setToggle('MARS Exploration Rovers') : setToggle('Astronomy Picture Of The Day');
        }}
      />
      <Footer
         rs1={{
          href: 'https://github.com/infinitidevs',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: '/src/assets/icons/github.png',
          alt: 'Github',
        }}
        rs2={{
          href: 'https://www.linkedin.com/in/infinitidevs',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: '/src/assets/icons/linkedin.png',
          alt: 'Linkedin',
        }}
        rs3={{
          href: 'https://api.whatsapp.com/send?phone=34613385257',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: '/src/assets/icons/whatsapp.png',
          alt: 'WhatsApp',
        }}
        rs4={{
          href: 'mailto:infinitidevs@gmail.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: '/src/assets/icons/email.png',
          alt: 'email',
        }}
      />
    </div>
  );
};

export default App;
