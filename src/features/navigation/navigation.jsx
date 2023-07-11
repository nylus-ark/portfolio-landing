import React from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as CVIcon } from './icons/cv.svg';
import { ReactComponent as PortfolioIcon } from './icons/portfolio.svg';
import { ReactComponent as ContactIcon } from './icons/contact.svg';

import './navigation.css';

export const Navigation = () => {
    return (
        <nav className="navigation">
            <Link 
                className="item"
                to="home"
                activeClass="active"
                smooth={true}
                offset={0}
                spy={true}
                duration={500}>
                <HomeIcon className="navigation-icon" />
            </Link>
            <Link 
                className="item"
                to="education"
                activeClass="active"
                smooth={true}
                offset={0}
                spy={true}
                duration={500}>
                <CVIcon className="navigation-icon" />
            </Link>
            <Link 
                className="item"
                to="portfolio"
                activeClass="active"
                smooth={true}
                offset={-300}
                spy={true}
                duration={500}>
                <PortfolioIcon className="navigation-icon" />
            </Link>
            <Link 
                className="item"
                to="contacts"
                activeClass="active"
                smooth={true}
                offset={-200}
                spy={true}
                duration={500}>
                <ContactIcon className="navigation-icon" />
            </Link>
        </nav>
    );
}
