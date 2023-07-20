import React from 'react';
import { Element } from 'react-scroll';
import { Form } from '../../features/form/form';

import './contacts.css';

export const Contacts = () => {
    return (
        <Element 
            className="contacts" 
            name="contacts">
            <Form />
        </Element>
    );
}
