import React from 'react';
import { render } from 'react-dom';
import App from './App';

const element = document.createElement('div');
document.body.appendChild(element);

render(
	// React.StrictMode causes double renders in development
	// https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	element,
);
