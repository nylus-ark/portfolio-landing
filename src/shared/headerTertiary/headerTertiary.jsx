import React from 'react';

import './headerTertiary.css';

export const HeaderTertiary = ({ text, hidden }) => {
    const hiddenTitle = hidden ? 'visually-hidden' : '';

    return (
        <h3 className={`header-tertiary ${hiddenTitle}`}>{text}</h3>
    );
};
