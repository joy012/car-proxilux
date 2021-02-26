import React from 'react';
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import './BottomCarousel.css'

const BottomCarousel = () => {

    return (
        <div className='py-5 my-5 bottom-slider'>
            <div className='text-center w-50 d-block mx-auto my-5'>
                <h6>Proxilux Blog</h6>
                <h2>Field Notes</h2>
                <h6>Notes From the roads and beyong</h6>
            </div>

            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={f1} class="d-block w-50 mx-auto" alt="..." />
                        <div class="carousel-caption d-none d-md-block px-3">
                            <p className='mt-5'>On February 01, 2021</p>
                            <h5>Learn About COVID Protocols</h5>
                            <p>This protocl is a population-based, age-startified prospective study for assessing SARS-CoV-2 infection.</p>
                            <a class='link' href="#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={f2} class="d-block w-50 mx-auto" alt="..." />
                        <div class="carousel-caption d-none d-md-block px-3">
                            <p className='mt-5'>On February 01, 2021</p>
                            <h5>Learn About COVID Protocols</h5>
                            <p>This protocl is a population-based, age-startified prospective study for assessing SARS-CoV-2 infection.</p>
                            <a class='link' href="#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={f3} class="d-block w-50 mx-auto" alt="..." />
                        <div class="carousel-caption d-none d-md-block px-3">
                            <p className='mt-5'>On February 01, 2021</p>
                            <h5>Learn About COVID Protocols</h5>
                            <p>This protocl is a population-based, age-startified prospective study for assessing SARS-CoV-2 infection.</p>
                            <a class='link' href="#">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default BottomCarousel;