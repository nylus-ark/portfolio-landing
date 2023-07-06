import React from 'react';
import './rightPanel.css';
import { Navigation } from '../../features/navigation/navigation';

export const RightPanel = () => {
    return (
        <div className="right-panel">
            <Navigation />
        </div>
    );
}
