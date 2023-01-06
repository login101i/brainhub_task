import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { EventContextProvider } from './appState/event.context';

ReactDOM.render(
	<React.StrictMode>
		<EventContextProvider>
			<App />
		</EventContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
