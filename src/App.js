
import './App.css';
import About from './Components/About/About';
import BottomCarousel from './Components/BottomCarousel/BottomCarousel';
import CardCarousel from './Components/CardCarousel/CardCarousel';
import CityCarousel from './Components/CityCarousel/CityCarousel';
import Footer from './Components/Footer/Footer';
import FooterApp from './Components/Footer/FooterApp';
import Header from './Components/Header/Header';
import ImageSlider1 from './Components/ImageSlider1/ImageSlider1'
import Partner from './Components/Partner/Partner';

function App() {
  return (
    <div>
      <Header />
      <ImageSlider1 />
      <CardCarousel />
      <CityCarousel />
      <About/>
      <BottomCarousel/>
      <Partner/>
      <FooterApp/>
      <Footer/>
    </div>
  );
}

export default App;
