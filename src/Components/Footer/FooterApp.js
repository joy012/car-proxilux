import React from 'react';
import './FooterApp.css'
import allianz from '../../images/allianz.png'
import apple from '../../images/apple.png'
import play from '../../images/playstore.png';

const FooterApp = () => {
    return (
        <section className='footerBar'>
<div className='mx-5 py-3'>
            <div class="row text-white justify-content-center align-items-center">
                <div class="col-3">
                    <span className='mx-2'><i class="fas fa-globe"></i> English <i class="fas fa-angle-down"></i></span>
                    <span><i class="fas fa-map-marker-alt"></i> Location <i class="fas fa-angle-down"></i></span>
                </div>
                <div class="col-3">
                    <button className='btn footer-btn'>
                        <div class="row align-items-center">
                            <div class="col-7 px-0 text-white">Insurance Provider</div>
                            <div class="col-5 px-0"> <img src={allianz} className='w-75' alt="" /></div>
                        </div>
                    </button>
                </div>
                <div class="col-3">
                    <img src={apple} className='w-50 d-inline-block' alt="" />
                    <img src={play} className='play w-50 d-inline-block' alt="" />
                </div>
                <div class="col-3 mt-3">
                    <div className='social-icon'>
                        <ul>
                            <li> <i class="fab fa-facebook"></i></li>
                            <li>   <i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram-square"></i></li>
                            <li>  <i class="fab fa-youtube"></i></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        </section>
        
    );
};

export default FooterApp;