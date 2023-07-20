import React from 'react';

import { ReactComponent as DownoladIcon } from './icons/download.svg';

import './button.css';

export const Button = ({ type, icon, text }) => {
    return (
        <button type={type} className="button">
            {text}
            {icon && <DownoladIcon className="button-icon" />}
        </button>
    );
};
