import React from 'react';
import { createRoot } from 'react-dom/client';

import Frogger from './components/frogger/frogger';
import reportWebVitals from './reportWebVitals';

import './index.scss';

// React 19 removed `ReactDOM.render`; a root is created once and rendered into.
const container = document.getElementById('root');

if (!container) throw new Error('No #root element to mount Frogger into.');

createRoot(container).render(
	<React.StrictMode>
		<Frogger />
	</React.StrictMode>,
);

reportWebVitals();
