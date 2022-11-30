import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

import seedColor from './seedColor';
import { generatePalette } from './colorHelpers';

import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			palettes: seedColor
		};
		this.savePalette = this.savePalette.bind(this);
	}

	savePalette(newPalette) {
		this.setState({
			palettes: [ ...this.state.palettes, newPalette ]
		});
	}

	findPalette(id) {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/palette/new"
					render={(routeProps) => (
						<NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />
					)}
				/>
				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={(routeProps) => (
						<SingleColorPalette
							color={routeProps.match.params.colorId}
							palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
						/>
					)}
				/>
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route
					exact
					path="/"
					render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />}
				/>
			</Switch>

			// <div>
			// 	<Palette palette={generatePalette(seedColor[1])} />
			// </div>
		);
	}
}

export default App;
