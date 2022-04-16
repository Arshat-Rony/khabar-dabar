import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../images/others/logo2.png"
import './Footer.css'
const today = new Date()


const Footer = () => {
    return (
        <footer className='footer-container '>
            <div className="container">
                <div className="footer d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <img style={{ width: "150px" }} src={img} alt="" />
                    <div className="links text-start mt-5 mt-md-0 d-flex flex-column">
                        <small className='mt-2'>About Online Food</small>
                        <small className='mt-2'>Read Our Blog</small>
                        <small className='mt-2'>Sign Up to Deliver</small>
                        <small className='mt-2'>Add Your Restaurent</small>
                    </div>
                    <div className="mt-5 mt-md-0 links text-start d-flex flex-column">
                        <small className='mt-2'>Get Help</small>
                        <small className='mt-2'>Read FAQs</small>
                        <small className='mt-2'>View All Others</small>
                        <small className='mt-2'>Restaurents near me</small>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center text-start mt-5 '>
                    <small>Copyright restricted {today.getFullYear()} Online food </small>
                    <div>
                        <Link to='/home' className="text-decoration-none text-white ms-3"><small>Privacy Policy</small></Link>
                        <Link to='/home' className="text-decoration-none text-white ms-3"><small>Terms and Conditons</small></Link>
                        <Link to='/home' className="text-decoration-none text-white ms-3"><small>Pricing</small></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;