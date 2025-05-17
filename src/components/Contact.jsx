import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-info">
                <div className="contact-card">
                    <FaEnvelope />
                    <h3>Email</h3>
                    <a href="mailto:ashishsharmaaug1994@gmail.com">ashishsharmaaug1994@gmail.com</a>
                </div>
                <div className="contact-card">
                    <FaPhone />
                    <h3>Phone</h3>
                    <a href="tel:+919958189932">+91 9958189932</a>
                </div>
                <div className="contact-card">
                    <FaMapMarkerAlt />
                    <h3>Location</h3>
                    <p>Najafgarh, Delhi, India</p>
                </div>
                <div className="contact-card">
                    <FaLinkedin />
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/ashish-sharma-357027129/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/ashish-sharma
                    </a>
                </div>
            </div>
        </section>
    );
}