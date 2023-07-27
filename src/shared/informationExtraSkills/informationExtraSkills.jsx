import React from 'react';

import { HeaderTertiary } from '../headerTertiary/headerTertiary';
import SquaresIcaon from './icons/squares.svg';

import './informationExtraSkills.css';

export const InformationExtraSkills = () => {
    return (
        <div className="information-extra-skills information-container">
            <HeaderTertiary text="Extra-skills" />
            <ul className="extra-skills-list">
                <li className="extra-skills-item">
                    <img className="extra-skills-img" src={SquaresIcaon} alt="" />
                    <span>Bootstrap, Materialize</span>
                </li>
                <li className="extra-skills-item">
                    <img className="extra-skills-img" src={SquaresIcaon} alt="" />
                    <span>Stylus, Sass, Less</span>
                </li>
                <li className="extra-skills-item">
                    <img className="extra-skills-img" src={SquaresIcaon} alt="" />
                    <span>Gulp, Webpack, Grunt</span>
                </li>
                <li className="extra-skills-item">
                    <img className="extra-skills-img" src={SquaresIcaon} alt="" />
                    <span>GIT Knowledge</span>
                </li>
            </ul>
        </div>
    );
};
