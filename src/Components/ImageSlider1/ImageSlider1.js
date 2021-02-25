import React from "react";
import "./ImageSlider1.css";
import compact from '../../images/compact.png'
import convertable from '../../images/convertable.png';
import luxuary from '../../images//Luxuary.png';
import van from '../../images/luxury_van.png';
import suv from '../../images/SUV.png';
import sport from '../../images/sports.png';


function ImageSlider1() {
    return (

        <>
            <section className='topSlider'>
                <div className='container pt-5'>
                    <h1 className='text-center w-50 d-block mx-auto display-5 text-black'>Choose The Car That Suits Your Personality</h1>
                    <button className='btn view-btn d-block mx-auto my-5'>View The Fleet</button>
                </div>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">Compact</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">Convertable</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">Luxuary</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3">Van</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4">Sports</li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5">SUV</li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active mb-5">
                            <img src={compact} class="d-block w-50 mx-auto" alt="Product 2" />
                        </div>
                        <div class="carousel-item mb-5">
                            <img src={convertable} class="d-block w-50 mx-auto" alt="Product 2" />
                        </div>
                        <div class="carousel-item mb-5">
                            <img src={luxuary} class="d-block w-50 mx-auto" alt="Product 2" />
                        </div>
                        <div class="carousel-item mb-5">
                            <img src={van} class="d-block w-50 mx-auto" alt="Product 2" />
                        </div>
                        <div class="carousel-item mb-5">
                            <img src={sport} class="d-block w-50 mx-auto" alt="Product 2" />
                        </div>
                        <div class="carousel-item mb-5">
                            <img src={suv} class="d-block w-50 mx-auto" alt="Product 2" />
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ImageSlider1;
