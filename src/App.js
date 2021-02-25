
import './App.css';
import CardCarousel from './Components/CardCarousel/CardCarousel';
import CityCarousel from './Components/CityCarousel/CityCarousel';
import Header from './Components/Header/Header';
import ImageSlider1 from './Components/ImageSlider1/ImageSlider1'

function App() {
  return (
    <div>
      <Header />
      <ImageSlider1 />
      <CardCarousel />
      <CityCarousel />

      {/* <Fieldnote /> */}
      {/* {/* <Becomepartner />
        <Footer2 />

        <FooterContainer /> */}
    </div>
  );
}

export default App;
