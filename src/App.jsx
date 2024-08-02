import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { useState } from 'react';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className='container'>
        <Title subTitle="OUR PROGRAM" Title="What we offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALLERY" Title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" Title="What Students say" />
        <Testimonials />
        <Title subTitle="CONTACT US" Title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
