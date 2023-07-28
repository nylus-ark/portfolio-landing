import React from 'react';

import { InformationProfile } from '../../features/informationProfile/informationProfile';
import { InformationAbout } from '../../shared/informationAbout/informationAbout';
import { InformationProgress } from '../../shared/informationLanguages/informationProgress';
import { InformationExtraSkills } from '../../shared/informationExtraSkills/informationExtraSkills';
import { Button } from '../../features/button/button';
import { LANGUAGES, SKILLS } from '../../constans/informationProgress';

import './information.css';
import '../../styles/utils.css';

export const Information = () => {
    return (
        <div className="information">
            <h2 className="visually-hidden">Information</h2>
            <InformationProfile />
            <InformationAbout />
            <InformationProgress 
                data={LANGUAGES} 
                title="Languages" 
            />
            <InformationProgress 
                data={SKILLS} 
                title="Skills" 
            />
            <InformationExtraSkills />
            <Button 
                icon="icon" 
                type="button" 
                text="Download CV" 
            />
        </div>
    );
}
