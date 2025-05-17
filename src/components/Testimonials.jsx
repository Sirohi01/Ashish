import React from 'react';

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <h2 className="section-title">Client Testimonials</h2>
            <div className="testimonial-grid">
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        Ashish's market knowledge and honest advice helped us find our dream home. 
                        He went above and beyond to ensure every detail was perfect.
                    </div>
                    <div className="testimonial-author">- Rajiv Mehta, Client</div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        Working with Ashish on our commercial property investment was a game-changer. 
                        His insights saved us 15% on our acquisition cost.
                    </div>
                    <div className="testimonial-author">- Neha Gupta, Investor</div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        As a channel partner, I've worked with many consultants. Ashish stands out 
                        for his professionalism and commitment to mutual success.
                    </div>
                    <div className="testimonial-author">- Sanjay Kumar, Broker</div>
                </div>
            </div>
        </section>
    );
}