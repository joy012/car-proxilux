import React from 'react';
import ReactCardCarousel from 'react-card-carousel'
import './CardCarousel.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import CarCard from './CarCard';


const CardCarousel = () => {
  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <>
    <section className='container py-3'>
    <h1 className='text-center display-5'>You Might Like</h1>
      <div className='containerStyle'>
        <div className=" w-100 d-block mx-auto">
        <ReactCardCarousel autoplay={true} autoplay_speed={2500000}>
          {
            imgArray.map(image => <CarCard  className='cardStyle' img={image}/>)
          }
        </ReactCardCarousel>
        </div>
      </div>
      </section>
    </>
  );
};

export default CardCarousel;