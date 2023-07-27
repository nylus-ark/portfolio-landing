import React from 'react';

import './skillsProgress.css';

export const SkillsProgress = ({ label, value }) => {
    return (
        <div className="progress">
            <label className="progress-label" htmlFor="progress-bar-html">{label}</label>
            <span className="progress-value">{value}%</span>
            <progress className="progress-bar" id="progress-bar-html" value={value} max="100"></progress>
        </div>
    );
};
