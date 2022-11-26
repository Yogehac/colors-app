import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedColor from './seedColor';
import { generatePalette } from './colorHelpers';

import './styles/App.css';

class App extends Component {
	findPalette(id) {
		return seedColor.find(function(palette) {
			return palette.id == id;
		});
	}

	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <h1>Palette Lists</h1>} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
			</Switch>

			// <div>
			// 	<Palette palette={generatePalette(seedColor[1])} />
			// </div>
		);
	}
}

export default App;
