import React from 'react';

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Skills & Achievements</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Core Competencies</h3>
                    <ul className="skill-list">
                        <li>Client Relationship Management</li>
                        <li>Property Valuation & Market Analysis</li>
                        <li>B2B & B2C Sales Strategies</li>
                        <li>Negotiation & Deal Closure</li>
                        <li>Channel Partner Development</li>
                        <li>CRM Software (Salesforce, Zoho)</li>
                    </ul>
                </div>
                
                <div className="skill-category">
                    <h3>Industry Knowledge</h3>
                    <ul className="skill-list">
                        <li>Residential & Commercial Real Estate</li>
                        <li>REITs & Real Estate Investment</li>
                        <li>Property Laws & Regulations</li>
                        <li>Market Trends & Forecasting</li>
                        <li>Project Marketing & Branding</li>
                    </ul>
                </div>
                
                <div className="skill-category">
                    <h3>Professional Achievements</h3>
                    <ul className="awards-list">
                        <li>"Top Performer" Award - ANAROCK (2022, 2023)</li>
                        <li>Exceeded annual sales target by 40% for 3 consecutive years</li>
                        <li>Recognized for "Client Excellence" by InfraMantra (2025)</li>
                        <li>Featured speaker at Delhi Real Estate Summit 2024</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}