import React from "react";
import "./Header.css";
import logo from '../../images/branding1.JPG'
import car1 from '../../images/car1.jpg';
import car2 from '../../images/car2.jpg';



function Header() {

  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light">
        <img className='image d-block mx-md-auto mr-auto' src={logo} alt="logo" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">BECOME PATNER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LEARN MORE</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                VEHICLES TYPE
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Suv</a>
                <a class="dropdown-item" href="#">Luxuary Van</a>
                <a class="dropdown-item" href="#">Sports Car</a>
              </div>
            </li>
          </ul>
          <div>
          <button className='btn btn-sign signUp'>Sign Up</button>
          <button className='btn btn-sign signIn'>Sign In</button>
        </div>
        </div>

      </nav>

      <div className='banner'>
        <section className="container py-5 slider">
          {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel"> */}
            <div class="carousel-inner d-block mx-auto">
              <div class="carousel-item carousel-bg active">
                {/* <img src={car1} class="d-block w-75 mx-auto" alt="..." /> */}
              </div>
              <div class="carousel-item carousel-bg">
                {/* <img src={car2} class="d-block w-75 mx-auto" alt="..." /> */}
              </div>
            </div>
          {/* </div> */}
        </section>
        <div className='floating'>
          <h1 className='display-4 text-white text-center'>Rent your luxury car, anywhere</h1>
          <p className='banner-p text-center'>Certified Professionals at your service</p>
        </div>
      </div>
    </>

  );
}

export default Header;


