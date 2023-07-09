import React from 'react';
import { Element } from 'react-scroll';

import AvatarImage from './images/avatar-full@1x.png';
import AvatarImage2x from './images/avatar-full@2x.png';
import AvatarImageWebp from './images/avatar-full@1x.webp';
import AvatarImageWebp2x from './images/avatar-full@2x.webp';

import './header.css';

import { HireButton } from '../../features/hireButton/hireButton';

export const Header = () => {
    return (
        <Element 
            className="header"
            name="home">
            <div className="header-info">
                <h1 className="header-title">
                    I’m Rayan Adlrdard <span className="header-title-yellow">Front-end </span> Developer
                </h1>
                <p className="header-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Et, volutpat feugiat placerat lobortis. 
                    Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <HireButton />
            </div>

            <div className="header-img">
                <picture>
                    <source 
                        srcSet={`${AvatarImageWebp} 1x, ${AvatarImageWebp2x} 2x`}
                        type="image/webp" 
                    />
                    <source 
                        srcSet={`${AvatarImage} 1x, ${AvatarImage2x} 2x`}
                        type="image/png" 
                    />
                    <img 
                        src={AvatarImage}
                        width="325"
                        height="459"
                        loading="lazy"
                        decoding="async"
                        alt="" 
                    />
                </picture>
            </div>

            <div className="header-bg">
                <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#FFB400" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>

                <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#05FF00" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>

                <svg className="header-icon" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <rect x="7.92406" y="1.99676" width="14" height="14" transform="rotate(26.0517 7.92406 1.99676)" stroke="#FFB400" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>

                <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#05FF00" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>

                <svg className="header-icon" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <rect x="8.28929" y="1.33758" width="14" height="14" transform="rotate(26.0517 8.28929 1.33758)" stroke="#0047FF" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>

                <svg className="header-icon" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.86133" cy="8.96387" r="7" stroke="#FFB400" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>

                <svg className="header-icon" width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M1.80385 11L7 2L12.1962 11H1.80385Z" stroke="#FF2E00" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>
            </div>
        </Element>
    );
}
