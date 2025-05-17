import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <h3>Ashish Sharma</h3>
            <p>Real Estate Consultant | Gurugram, Haryana</p>
            
            <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>
            
            <p>&copy; {new Date().getFullYear()} Ashish Sharma. All rights reserved.</p>
        </footer>
    );
}