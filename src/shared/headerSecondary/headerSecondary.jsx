import React from 'react';

import './headerSecondary.css';

export const HeaderSecondary = ({ header, align }) => {
    const textAlign = align === 'center' ? 'header-center' : '';

    return (
        <h2 className={`header-secondary ${textAlign}`}>{header}</h2>
    );
}
