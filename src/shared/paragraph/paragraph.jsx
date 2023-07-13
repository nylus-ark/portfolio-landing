import React from 'react';

import './paragraph.css';

export const Paragraph = ({ text, align }) => {
    const textAlign = align === 'center' ? 'paragraphCenter' : '';

    return (
        <p className={`paragraph ${textAlign}`}>{text}</p>
    );
}
