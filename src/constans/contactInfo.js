import { ReactComponent as LocationIcon } from './icons/location.svg';
import { ReactComponent as MailIcon } from './icons/mail.svg';
import { ReactComponent as MobileIcon } from './icons/mobile.svg';

export const CONTACTS = {
    location: {
        data: {
            country: 'Bangladesh',
            city: 'Dhaka',
            street: '35 vhatara, Badda',
        },
        icon: <LocationIcon />,
    },
    socials: {
        data: {
            email: 'youremail@gmail.com',
            skype: '@yourusername',
            telegram: '@yourusername',
        },
        icon: <MailIcon />,
    },
    phones: {
        data: {
            supportServices: '15369',
            office: '+58 (021)356 587 235',
            personal: '+58 (021)356 587 235',
        },
        icon: <MobileIcon />,
    },
};
