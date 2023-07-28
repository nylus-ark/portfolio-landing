import React from 'react';

import './informationAbout.css';

export const InformationAbout = () => {
    return (
        <div className="information-about information-container">
            <h3 className="visually-hidden">About</h3>
            <div className="information-about-item">
                <span className="information-about-label">Age:</span>
                <span className="information-about-value">24</span>
            </div>
            <div className="information-about-item">
                <span className="information-about-label">Residence:</span>
                <span className="information-about-value">BD</span>
            </div>
            <div className="information-about-item">
                <span className="information-about-label">Freelance:</span>
                <span className="information-about-value available">Available</span>
            </div>
            <div className="information-about-item">
                <span className="information-about-label">Address:</span>
                <span className="information-about-value">Dhaka,Bangladesh</span>
            </div>
        </div>
    );
};
