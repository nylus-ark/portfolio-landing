import React from 'react';

import './socialMediaLink.css';

export const SocialMediaLink = ({ href, icon: Icon, target }) => {
    return (
        <li>
            <a 
                className="social-link"
                href={href} 
                target={target}>
                <Icon />
            </a>
        </li>
    );
};
