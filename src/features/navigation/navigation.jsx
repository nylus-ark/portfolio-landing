import React from 'react';
import { Link } from 'react-scroll';
import HomeIcon from './images/home.svg';
import CVIcon from './images/cv.svg';
import PortfolioIcon from './images/portfolio.svg';
import ContactIcon from './images/contact.svg';

import './navigation.css';

export const Navigation = () => {
    return (
        <nav className="navigation">
            <Link 
                className="item"
                activeClass="active" 
                to="home" 
                smooth={true} 
                duration={500}>
                <img src={HomeIcon} alt="Home Icon" />
            </Link>
            <Link 
                className="item"
                activeClass="active" 
                to="education" 
                smooth={true} 
                duration={500}>
                <img src={CVIcon} alt="CV Icon" />
            </Link>
            <Link 
                className="item"
                activeClass="active" 
                to="portfolio" 
                smooth={true} 
                duration={500}>
                <img src={PortfolioIcon} alt="Portfolio Icon" />
            </Link>
            <Link 
                className="item"
                activeClass="active" 
                to="contacts" 
                smooth={true} 
                duration={500}>
                <img src={ContactIcon} alt="Contact Icon" />
            </Link>
        </nav>
    );
}
