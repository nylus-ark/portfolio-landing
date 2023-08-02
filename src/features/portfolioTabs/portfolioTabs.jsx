import React from 'react';
import { CATEGORIES } from '../../constans/portfolio';

import './portfolioTabs.css';

export const PortfolioTabs = ({ activeTab, onClick }) => {
    const tabs = CATEGORIES.map((item) => (
        <div 
            className={`portfolio-tab ${activeTab === item ? 'active' : ''}`} 
            key={item} 
            onClick={() => {
                onClick(item);
            }}
        >
            {item}
        </div>
    ));

    return (
        <div className="portfolio-tabs">{tabs}</div>
    );
};
