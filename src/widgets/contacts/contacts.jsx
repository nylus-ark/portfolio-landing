import React from 'react';
import { Element } from 'react-scroll';
import { HeaderSecondary } from '../../shared/headerSecondary/headerSecondary';
import { Form } from '../../features/form/form';

import './contacts.css';

export const Contacts = () => {
    return (
        <Element 
            className="contacts" 
            name="contacts">
            <div className="form-container">
                <HeaderSecondary header="Leave us your info" />
                <Form />
            </div>
        </Element>
    );
}
