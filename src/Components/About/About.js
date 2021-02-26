import React from 'react';
import brand from '../../images/branding.JPG'
import './About.css';
 
const About = () => {
    return (
        <div className='container py-4'>
            <div class="row align-items-center justify-content-center">
                <div class="learn col-6 d-block  my-5">
                    <h1 className="us">Learn About Us</h1>
                    <p>Get to know on how we operate? </p>
                    <button className='btn view-btn'>Learn More</button>
                </div>
                <div class="col-6">
                <img src={brand} alt="" className="w-100 d-block mx-auto"/>
                </div>
            </div>
        </div>
    );
};
 
export default About;