import { Component } from 'react';

import Palette from './Palette';
import seedColor from './seedColor';

class App extends Component {
	render() {
		return (
			<div>
				<Palette {...seedColor[0]} />
			</div>
		);
	}
}

export default App;
