import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

import { CATEGORIES, PORTFOLIO_DATA } from '../../constans/portfolio';
import { PortfolioTabs } from '../../features/portfolioTabs/portfolioTabs';
import { PortfolioCard } from '../../shared/portfolioCard/portfolioCard';
import { HeaderSecondary } from '../../shared/headerSecondary/headerSecondary';
import { Paragraph } from '../../shared/paragraph/paragraph';

import './portfolio.css';

export const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO_DATA);
    const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

    useEffect(() => {
        handleTabClick(CATEGORIES[0]);
    }, []);

    const renderCards = (data) => {
        return data.map((item) => (
            <PortfolioCard 
                data={item} 
                key={item.id} 
            />
        ));
    }

    const handleTabClick = (category) => {
        setActiveTab(category);

        if (category === CATEGORIES[0]) {
            setPortfolioData(PORTFOLIO_DATA);
        } else {
            const newData = PORTFOLIO_DATA.filter(
                (item) => item.category === category
            );
            
            setPortfolioData(newData);
        }
    };

    return (
        <Element 
            className="portfolio" 
            name="portfolio">
            <div className="portfolio-header">
                <HeaderSecondary 
                    align="center" 
                    header="Portfolio" 
                />
                <Paragraph 
                    align="center" 
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" 
                />
            </div>
            <PortfolioTabs 
                activeTab={activeTab} 
                onClick={handleTabClick} 
            />
            <div className="portfolio-wrapper">
                {renderCards(portfolioData)}
            </div>
        </Element>
    );
}
