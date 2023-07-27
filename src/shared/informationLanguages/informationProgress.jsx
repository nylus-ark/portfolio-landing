import React from 'react';

import { HeaderTertiary } from '../headerTertiary/headerTertiary';
import { SkillsProgress } from '../skillsProgress/skillsProgress';

import './informationProgress.css';

export const InformationProgress = ({ title, data }) => {
    const progressBars = data.map((item) => (
        <SkillsProgress 
            label={item.name} 
            value={item.progress}
            key={item.id}
        />
    ));

    return (
        <div className="information-progress information-container">
            <HeaderTertiary text={title} />
            {progressBars}
        </div>
    );
};
