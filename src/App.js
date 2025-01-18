import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

import './index.css';
import './components/NavBar/NavBar.css';
import texture from '../src/assets/texture.png'
import noiseTexture from '../src/assets/Noise.png'

function App() {
  return (
    <div className='main'>
      <img className="texture" src={texture} alt="Textura" />,
      <img className="texture" src={noiseTexture} alt="noiseTexture" />,
      <NavBar />,
      <Banner />,
      <About />,
      <Skills />,
      <Works/>,
      <Certifications/>,
      <Footer/>,
    </div>
  );
}

export default App;
