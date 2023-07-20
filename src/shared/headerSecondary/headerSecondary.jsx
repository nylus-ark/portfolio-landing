import React from 'react';

import './headerSecondary.css';

export const HeaderSecondary = ({ header, align, margin }) => {
    const textAlign = align === 'center' ? 'header-center' : '';
    const marginBottom = margin === 'bottom-2x' ? 'header-mb-2x' : '';

    return (
        <h2 className={`header-secondary ${textAlign} ${marginBottom}`}>{header}</h2>
    );
}
