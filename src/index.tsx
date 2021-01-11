import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import Frogger from './components/frogger/frogger';

import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Frogger />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
