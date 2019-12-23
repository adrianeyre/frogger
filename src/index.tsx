import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import Frogger from './components/frogger/frogger';

import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Frogger />, document.getElementById('root'));
serviceWorker.unregister();
