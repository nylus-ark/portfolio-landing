import React from 'react';
import { Element } from 'react-scroll';

import './workHistory.css';

export const WorkHistory = ({ name }) => {
    return (
        <Element 
            className="work-history"
            name={name}>
            Work History
        </Element>
    );
}
