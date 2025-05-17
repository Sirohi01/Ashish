import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <h3>Ashish Sharma</h3>
            <p>Real Estate Consultant | Gurugram, Haryana</p>
            
            <p>&copy; {new Date().getFullYear()} Ashish Sharma. All rights reserved.</p>
        </footer>
    );
}