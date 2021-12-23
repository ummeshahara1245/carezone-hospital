import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>CareZone<span>Hospital</span></h3>

                    <p className="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">Pricing</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">CareZone Hospital &copy; 2021</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>21 Revolution Street</span> Dhaka, Bangladesh</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1 555 123456</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">contact@carezonehospital.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the hospital</span>
                        CareZone Hospital is a most popular hospital in bangladesh for our best services
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Footer;