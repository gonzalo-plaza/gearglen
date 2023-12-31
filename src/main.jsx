import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import './main.scss';

import { gearGlenASCIIEscaped } from './constants/commonConstants.js';

import { BrowserRouter } from 'react-router-dom';

console.log(gearGlenASCIIEscaped);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
