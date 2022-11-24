import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer my-12 p-10 bg-orange-300 text-black">
            <div>
                <span className="footer-title text-xl text-black">Our Brances</span>
                <Link className="link link-hover">Japan</Link>
                <Link className="link link-hover">France</Link>
                <Link className="link link-hover">Russia</Link>
                <Link className="link link-hover">Australia</Link>
            </div>
            <div className='text-center'>
                <span className="footer-title text-xl text-black">Quick Links</span>
                <Link className="link link-hover">Home</Link>
                <Link className="link link-hover">Vehicles</Link>
                <Link className="link link-hover">Services</Link>
                <Link className="link link-hover">About</Link>
                <Link className="link link-hover">Blog</Link>
            </div>
            <div>
                <span className="footer-title text-xl text-black">Contact Info</span>
                <ul>
                    <li>+1122 - 2222 122</li>
                    <li>mybagladesh@gmail.com</li>
                    <li>Mirpur, Bangladesh, Dhaka</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;