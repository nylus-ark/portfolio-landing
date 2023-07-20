import React, { useState } from 'react';

import { validateForm } from '../../shared/helpers/validateForm';
import { Input, Textarea } from '../../shared/fields/fields';
import { Button } from '../button/button';

import './form.css';

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const validationsErrors = validateForm(formData);

        setErrors(validationsErrors);

        if (Object.keys(validationsErrors).length === 0) {
            console.log('The form is valid, and the data is ready to submitted to the server');

            Object.entries(formData).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        } else {
            console.error('The form is not valid. It contains values that do not match the required format');

            Object.entries(validationsErrors).forEach(([key, value]) => {
                console.error(`${key}: ${value}`);
            });
        }
    }

    return (
        <form 
            className="contact-form"
            onSubmit={handleSubmit}>
            <Input 
                id="inputName"
                type="text"
                name="name" 
                value={formData.name}
                onChange={handleChange}   
                error={errors.name} 
                label="Your Full Name ( Required)"
            />
            <Input 
                id="inputEmail"
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}   
                error={errors.email} 
                label="Your Email ( Required)"
            />
            <Input 
                id="inputSubject"
                type="text"
                name="subject" 
                value={formData.subject}
                onChange={handleChange}   
                label="Subject"
            />
            <Textarea
                id="textareaMessage"
                name="message" 
                value={formData.message}
                onChange={handleChange}   
                label="Your Message"    
            />
            <Button 
                type="submit" 
                text="Send message" 
            />
        </form> 
    );
};
