import React from 'react';
import ReactDOM from 'react-dom/client';
import GoogleFontLoader from 'react-google-font-loader';

import './styles/index.css';
import './styles/variables.css';

import { HomePage } from './pages/homePage/homePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GoogleFontLoader
            fonts = {[
                {
                    font: 'Inter',
                    weights: [
                        400, 
                        500, 
                        700,
                    ],
                },
            ]}
        />
        <HomePage />
    </React.StrictMode>
);
