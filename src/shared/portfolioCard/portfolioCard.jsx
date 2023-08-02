import React from 'react';

import './portfolioCard.css';

export const PortfolioCard = ({ data }) => {
    return (
        <div className="portfolio-card">
            <a href={data.link}>
                <img src={data.img} alt="" />
            </a>
        </div>
    );
};
