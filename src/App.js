import { Component } from 'react';

import Palette from './Palette';
import seedColor from './seedColor';
import { generatePalette } from './colorHelpers';

import './styles/App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Palette palette={generatePalette(seedColor[1])} />
			</div>
		);
	}
}

export default App;
