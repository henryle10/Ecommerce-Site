import React from 'react'
import { Link } from "react-router-dom";


const Footer = props => {
    return (
        <div className="footer"  >
            <div className="">
                <div className="row text-center text-xs-center text-lg-center text-sm-left text-md-left text-lg-left">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <h5>Recent updates</h5>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>FAQ</li>
                            <li>Get Started</li>
                            <li>Videos</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <h5>Who We Are</h5>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>FAQ</li>
                            <li>Get Started</li>
                            <li>Videos</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <h5>Need Help?</h5>
                        <ul>
                            <li>Contact Us</li>
                            <li>Store</li>
                            <li>Commercial Support</li>
                            <li>Product Registration</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black"><p className="mt-5"><u><Link to="/">ZEUS</Link></u> is a ECommerce platform that was inspired by ASUS. All rights reserved by Henry Le</p></div>
                </div>
            </div>
        </div >
    )
}

export default Footer;
