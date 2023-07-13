import React from 'react';
import { Element } from 'react-scroll';

import { HeaderSecondary } from '../../shared/headerSecondary/headerSecondary';
import { Paragraph } from '../../shared/paragraph/paragraph';
import { WorkCard } from '../../features/workCard/workCard';

import './workHistory.css';

export const WorkHistory = ({ name, data }) => {
    const mainInfo = data.history.map((work) => {
        return (
            <WorkCard 
                data={work} 
                key={work.id} 
            />
        );
    });

    return (
        <Element 
            className="work-history"
            name={name}>
            <div className="title-info">
                <HeaderSecondary header={data.header} />
                <Paragraph align="center" text={data.summary} />
            </div>
            
            <div className="main-info">{mainInfo}</div>
        </Element>
    );
}
