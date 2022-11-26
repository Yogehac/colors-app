import { Component } from 'react';

import Palette from './Palette';
import seedColor from './seedColor';
import { generatePalette } from './colorHelpers';

import './styles/App.css';

class App extends Component {
	render() {
		console.log(generatePalette(seedColor[2]));
		return (
			<div>
				<Palette palette={generatePalette(seedColor[2])} />
			</div>
		);
	}
}

export default App;
