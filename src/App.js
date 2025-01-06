import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
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
      <Banner />
    </div>
  );
}

export default App;
