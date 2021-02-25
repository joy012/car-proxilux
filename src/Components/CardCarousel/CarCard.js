import React from 'react';
import './CarCard.css'

const CarCard = (props) => {
  const img = props.img;
  return (
    <div className='car-detail'>
      <img src={img} className='w-100' alt="image" />
      <div className='card-text text-white'>
        <div class="row">
          <div class="col-9 main-text">
            <h5 className='text-white name'>Lamborghini Aventado</h5>
            <p>(160 Trips)</p>
          </div>
          <div class="col-3 rate price-text">
            <h6 className='text-white price'>$325/Day</h6>
            <a className='text-white' href="#">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;