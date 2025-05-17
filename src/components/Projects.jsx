import React from 'react';

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Notable Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <img 
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="DLF Crest" 
                        className="project-image" 
                    />
                    <div className="project-info">
                        <h3>DLF Crest</h3>
                        <p>Luxury residential project in Gurugram. Sold 85 units worth ₹425 crore.</p>
                    </div>
                </div>
                
                <div className="project-card">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="SS Luxury Towers" 
                        className="project-image" 
                    />
                    <div className="project-info">
                        <h3>SS Luxury Towers</h3>
                        <p>High-end commercial complex in Delhi. Achieved 100% occupancy within 6 months.</p>
                    </div>
                </div>
                
                <div className="project-card">
                    <img 
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="InfraMantra Greens" 
                        className="project-image" 
                    />
                    <div className="project-info">
                        <h3>InfraMantra Greens</h3>
                        <p>Integrated township project. Led sales for phase 1 (₹320 crore).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}