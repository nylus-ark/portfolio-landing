import React from 'react';

import './contactCard.css';

export const ContactCard = ({ data, icon }) => {
    const contacts = Object.entries(data).map(([key, value]) => (
        <div className="contact-container" key={key}>
            <span className="contact-key">{key}:</span>
            <span className="contact-value">{value}</span>
        </div>
    ));
  
    return <div className="contact-card">
        <div className="contact-icon">{icon}</div>
        {contacts}
    </div>;
};
