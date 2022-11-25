import React from 'react';
import { Link } from 'react-router-dom';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import { FaEnvelope } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer my-12 p-10 bg-orange-300 text-black">
            <div>
                <span className="footer-title text-xl text-black">Our Brances</span>
                <Link className="link link-hover"><FaMapMarkerAlt/>Japan</Link>
                <Link className="link link-hover"><FaMapMarkerAlt/>France</Link>
                <Link className="link link-hover"><FaMapMarkerAlt/>Russia</Link>
                <Link className="link link-hover"><FaMapMarkerAlt/>Australia</Link>
            </div>
            <div className='text-center'>
                <span className="footer-title text-xl text-black">Quick Links</span>
                <Link className="link link-hover"><FaArrowRight/>Home</Link>
                <Link className="link link-hover"><FaArrowRight/>Vehicles</Link>
                <Link className="link link-hover"><FaArrowRight/>Services</Link>
                <Link className="link link-hover"><FaArrowRight/>About</Link>
                <Link className="link link-hover"><FaArrowRight/>Blog</Link>
            </div>
            <div>
                <span className="footer-title text-xl text-black">Contact Info</span>
                <ul>
                    <li className='mb-3'><FaPhone/>+1122 - 2222 122</li>
                    <li className='mb-3'><FaEnvelope/>mybagladesh@gmail.com</li>
                    <li><FaMapMarkerAlt/>Mirpur, Bangladesh, Dhaka</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;