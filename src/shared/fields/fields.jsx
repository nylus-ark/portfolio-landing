import React from 'react';

import './fields.css';

export const Input = ({ id, type, name, value, label, onChange, error }) => {
    const errorInput = error ? 'error' : '';

    return (
        <div className="field-container">
            <label 
                className="field-label" 
                htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={`field input ${errorInput}`}   
            />
            {error && <span className="field-error">{error}</span>}
        </div>
    );
};

export const Textarea = ({ id, name, value, label, onChange }) => {
    return (
        <div className="field-container">
            <label 
                className="field-label" 
                htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="field textarea"
            />
        </div>
    );
};
