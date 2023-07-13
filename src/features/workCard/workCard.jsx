import React from 'react';
import { Paragraph } from '../../shared/paragraph/paragraph';

import './workCard.css';

export const WorkCard = ({ data }) => {
    return (
        <article className="work-card">
            <div className="work-card-info">
                <h3 className="work-card-title">{data.title}</h3>
                <div className="work-card-details">
                    <span className="work-card-position">{data.position}</span>
                    <time className="work-card-date">{data.date}</time>
                </div>
            </div>
            <div className="work-card-description">
                <h4 className="work-card-title">{data.certificate}</h4>
                <Paragraph text={data.description} />
            </div>  
        </article>
    );
}
