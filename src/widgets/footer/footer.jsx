import React from 'react';

import './footer.css';

export const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className="footer">
            <div className="footer-rights">
                {getCurrentYear()} All Rights Reserved. Ojjomedia
            </div>
        </div>
    );
}
