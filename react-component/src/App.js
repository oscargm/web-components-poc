import React from 'react';
import './App.css';
import { ToDo } from './web-components/to-do';

const todos = [
	{ text: 'Native WC', checked: true },
	{ text: 'React WC', checked: true },
	{ text: 'VueJS WC', checked: false },
	{ text: 'Svelte WC', checked: false },
	{ text: 'Angular WC', checked: false }
];

function App() {
	return (
		<div className="App">
			<ToDo todos={todos} />
		</div>
	);
}

export default App;
