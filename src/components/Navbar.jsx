import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>Ashish Sharma</h1>
            <ul>
                <li><a href="#about"><FaUser /> About</a></li>
                <li><a href="#experience"><FaBriefcase /> Experience</a></li>
                <li><a href="#skills"><FaCode /> Skills</a></li>
                <li><a href="#contact"><FaEnvelope /> Contact</a></li>
            </ul>
        </nav>
    );
}