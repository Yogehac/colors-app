import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedColor from './seedColor';
import { generatePalette } from './colorHelpers';

import './styles/App.css';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <h1>Palette Lists</h1>} />
				<Route exact path="/palette/:id" render={() => <h1>Inidvdual Component</h1>} />
			</Switch>

			// <div>
			// 	<Palette palette={generatePalette(seedColor[1])} />
			// </div>
		);
	}
}

export default App;
