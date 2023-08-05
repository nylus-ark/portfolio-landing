import React, { useState, useEffect } from 'react';

import './skillsProgress.css';

export const SkillsProgress = ({ label, value }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < value) {
                setProgress((prevProgress) => prevProgress + 10);
            }
        }, value);

        return () => {
            clearInterval(timer);
        };
    }, [progress, value]);

    return (
        <div className="progress">
            <label className="progress-label" htmlFor="progress-bar-html">{label}</label>
            <span className="progress-value">{progress}%</span>
            <progress 
                id="progress-bar-html"
                className="progress-bar" 
                value={progress} 
                max="100">
            </progress>
        </div>
    );
};
