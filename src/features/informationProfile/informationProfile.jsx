import React from 'react';

import ProfileAvatar from './images/profile-avatar.png';
import { SocialMediaLink } from '../../features/socialMediaLink/socialMediaLink';
import { HeaderTertiary } from '../../shared/headerTertiary/headerTertiary';
import { ReactComponent as DribbbleIcon } from './icons/dribbble.svg';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';

import './informationProfile.css';

export const InformationProfile = () => {
    return (
        <div className="information-profile information-container">
            <HeaderTertiary text="Profile" hidden />
            <div className="information-profile-avatar available">
                <img src={ProfileAvatar} alt="Profile Avatar" />
            </div>
            <div className="information-profile-title">Rayan Adlardard</div>
            <div className="information-profile-position">Front-end Developer</div>
            <div className="information-profile-social">
                <ul className="information-profile-links">
                    <SocialMediaLink href="/" target="_blank" icon={FacebookIcon} />
                    <SocialMediaLink href="/" target="_blank" icon={InstagramIcon} />
                    <SocialMediaLink href="/" target="_blank" icon={TwitterIcon} />
                    <SocialMediaLink href="/" target="_blank" icon={LinkedinIcon} />
                    <SocialMediaLink href="/" target="_blank" icon={YoutubeIcon} />
                    <SocialMediaLink href="/" target="_blank" icon={DribbbleIcon} />
                </ul>
            </div>
        </div>
    );
}
