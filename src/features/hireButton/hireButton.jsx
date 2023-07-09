import React, { useState } from 'react';

import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as ArrowHoverIcon } from './icons/arrow-hover.svg';

import './hireButton.css';

export const HireButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            className={`hire-me-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        Hire me
        <span className="icon-container">
            <ArrowIcon className={`icon arrow ${isHovered ? 'hidden' : 'visible'}`} />
            <ArrowHoverIcon className={`icon arrow-hover ${isHovered ? 'visible' : 'hidden'}`} />
        </span>
        </button>
    );
}
