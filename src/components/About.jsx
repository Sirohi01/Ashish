import React from 'react';
import profile from '../assets/ashish.jpg'
export default function About() {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <img 
                    src={profile}
                    alt="Ashish Sharma" 
                    className="about-image" 
                />
                <div className="about-text">
                    <p>
                        I am a dedicated Property Consultant with over 8 years of experience in the real estate industry, 
                        specializing in residential and commercial properties across Delhi NCR. My passion for real estate 
                        goes beyond transactions - I focus on building lasting relationships and delivering exceptional 
                        value to my clients.
                    </p>
                    <p>
                        With a proven track record at leading firms like ANAROCK and InfraMantra, I bring a unique 
                        combination of market knowledge, negotiation skills, and client-focused service. My approach 
                        combines data-driven insights with personalized attention to help clients make informed 
                        property decisions.
                    </p>
                    <p>
                        What sets me apart is my commitment to transparency, ethical practices, and going the extra 
                        mile to ensure client satisfaction. Whether you're a first-time homebuyer or a seasoned 
                        investor, I provide tailored solutions to meet your real estate goals.
                    </p>
                </div>
            </div>
        </section>
    );
}