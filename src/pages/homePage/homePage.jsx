import React from 'react';

import { Information } from '../../widgets/information/information';
import { Header } from '../../widgets/header/header';
import { WorkHistory } from '../../widgets/workHistory/workHistory';
import { Portfolio } from '../../widgets/portfolio/portfolio';
import { Contacts } from '../../widgets/contacts/contacts';
import { Footer } from '../../widgets/footer/footer';
import { RightPanel } from '../../widgets/rightPanel/rightPanel';
import { EDUCATION, WORK } from '../../constans/workHistory';

import './homePage.css';

export const HomePage = () => {
    return (
        <div className="wrapper">
            <Information />
            <div className="inner">
                <Header />
                <WorkHistory name="education" data={EDUCATION} />
                <WorkHistory name="work" data={WORK} />
                <Portfolio />
                <Contacts />
                <Footer />
            </div>
            <RightPanel />
        </div>
    );
}
