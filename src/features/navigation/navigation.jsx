import React from 'react';
import { Link } from 'react-scroll';
import { Tooltip } from 'react-tooltip';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as CVIcon } from './icons/cv.svg';
import { ReactComponent as PortfolioIcon } from './icons/portfolio.svg';
import { ReactComponent as ContactIcon } from './icons/contact.svg';

import './navigation.css';
import 'react-tooltip/dist/react-tooltip.css'

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
                duration={500}
                data-tooltip-id="tooltip-home"
                data-tooltip-content="Home">
                <HomeIcon className="navigation-icon" />
                <Tooltip id="tooltip-home" />
            </Link>
            <Link 
                className="item"
                to="education"
                activeClass="active"
                smooth={true}
                offset={0}
                spy={true}
                duration={500}
                data-tooltip-id="tooltip-education"
                data-tooltip-content="Education">
                <CVIcon className="navigation-icon" />
                <Tooltip id="tooltip-education" />
            </Link>
            <Link 
                className="item"
                to="portfolio"
                activeClass="active"
                smooth={true}
                offset={-300}
                spy={true}
                duration={500}
                data-tooltip-id="tooltip-portfolio"
                data-tooltip-content="Portfolio">
                <PortfolioIcon className="navigation-icon" />
                <Tooltip id="tooltip-portfolio" />
            </Link>
            <Link 
                className="item"
                to="contacts"
                activeClass="active"
                smooth={true}
                offset={-200}
                spy={true}
                duration={500}
                data-tooltip-id="tooltip-contacts"
                data-tooltip-content="Contacts">
                <ContactIcon className="navigation-icon" />
                <Tooltip id="tooltip-contacts" />
            </Link>
        </nav>
    );
}
