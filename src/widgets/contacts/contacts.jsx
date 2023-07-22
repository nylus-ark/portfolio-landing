import React from 'react';
import { Element } from 'react-scroll';

import { Form } from '../../features/form/form';
import { ContactInfo } from '../../features/contactInfo/contactInfo';
import { CONTACTS } from '../../constans/contactInfo';

import './contacts.css';

export const Contacts = () => {
    return (
        <Element 
            className="contacts" 
            name="contacts">
            <Form />
            <ContactInfo data={CONTACTS} />
        </Element>
    );
}
