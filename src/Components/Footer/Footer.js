import React from 'react';
import './Footer.css'
import lastLogo from '../../images/branding3.png'

const Footer = () => {
    return (

        <footer>
            <div class="last py-5 container">
                <div class="row">
                    <div class="col-3">
                        <img src={lastLogo} alt="" className="w-50" />
                        <p className="proxilus">The Proxilux Seed Initiave empowers historically disenfranchised entrepreneurs with access wealth-building opportunities,so anyone</p>
                    </div>
                    <div class="col-2">
                        <h5 className="use pb-2">Useful Links</h5>
                        <p>About</p>
                        <p>Team</p>
                        <p>Vehicle Types</p>
                        <p>Policies</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div class="col-2 ">
                        <h5 className="use  pb-2">Top Cities</h5>
                        <p>Paris</p>
                        <p>London</p>
                        <p>Dubai</p>
                        <p>Los angeless</p>
                        <p>Miami</p>
                    </div>
                    <div class="col-3 ">
                        <h5 className="use  pb-2">Learn More</h5>
                        <p>How to Work</p>
                        <p>Become a Partner</p>
                        <p>Trust & Safety</p>
                        <p>Faqs</p>
                        <p>Get Help</p>
                        <p>Insurance & Protection</p>
                    </div>
                    <div class="col-2 ">
                        <h5 className="use  pb-2">Car Type</h5>
                        <p>Compact</p>
                        <p>Convertible</p>
                        <p>Luxury</p>
                        <p>SUV Sports</p>
                        <p>Luxury Van</p>
                    </div>
                </div>
                <div class="line"></div>
                <div class="row align-items-end">
                    <div class="col-8">
                        <small className='text-white'>Copyright &copy;{new Date().getFullYear()} <span className='golden'>Proxilus</span> ,All Right Reserved</small>
                    </div>
                    <div class="col-4 text-white">
                        <small class="term">Terms & Services <span class="privacy">Privacy Policy</span> Sitemap</small>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;