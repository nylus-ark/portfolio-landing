import React from 'react';

import { HeaderSecondary } from '../../shared/headerSecondary/headerSecondary';
import { ContactCard } from '../../shared/contactCard/contactCard';

import './contactInfo.css';

export const ContactInfo = ({ data }) => {
    const contactCards = Object.entries(data).map(([key, { data, icon }]) => (
        <ContactCard 
            key={key} 
            data={data} 
            icon={icon} 
        />
    ));

    return (
        <div className="contact-info">
            <HeaderSecondary 
                header="Contact information" 
                margin="bottom-2x" 
            />
            {contactCards}
        </div>
    );
};
