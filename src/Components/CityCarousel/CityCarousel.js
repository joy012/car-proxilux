import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import city1 from '../../images/london.jpg';
import city2 from '../../images/los-angeles.jpg';
import city3 from '../../images/miami.jpg';
import city4 from '../../images/dubai.jpg';
import city5 from '../../images/Eiffel-Tower.jpg'
import './CityCarousel.css'

const CityCarousel = () => {
    return (
        <section className='carousel-container p-5 mb-5'>
            <div class="blur">
            </div>
            <div>
                <h1 className='text-center display-4 text-white'>Top Destination</h1>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode
                itemClass="carousel-item-padding"
                containerClass="multi-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 10
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass="react-multi-carousel-track"
                slidesToSlide={1}
                swipeable={true}
            >
                <div className=' city-container'>
                    <div className='image-container'>
                        <img src={city1} className='w-100' alt="" />
                    </div>

                    <div className='city-name py-2'>
                        <h6 className='text-center text-white'>London</h6>
                    </div>
                    <div className='rounded-circle circle'></div>
                </div>

                <div className=' city-container'>
                    <img src={city2} className='w-100' alt="" />
                    <div className='city-name py-2'>
                        <h6 className='text-center text-white'>Los-Angeles</h6>
                    </div>
                    <div className='rounded-circle circle'></div>

                </div>

                <div className=' city-container'>
                    <img src={city3} className='w-100' alt="" />
                    <div className='city-name py-2'>
                        <h6 className='text-center text-white'>Miami</h6>
                    </div>
                    <div className='rounded-circle circle'></div>

                </div>

                <div className=' city-container'>
                    <img src={city4} className='w-100' alt="" />
                    <div className='city-name py-2'>
                        <h6 className='text-center text-white'>Dubai</h6>
                    </div>
                    <div className='rounded-circle circle'></div>

                </div>

                <div className=' city-container'>
                    <img src={city5} className='w-100' alt="" />
                    <div className='city-name py-2'>
                        <h6 className='text-center text-white'>Eiffel Tower</h6>
                    </div>
                    <div className='rounded-circle circle'></div>

                </div>

            </Carousel>
        </section>
    );
};

export default CityCarousel;