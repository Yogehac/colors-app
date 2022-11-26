import { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './styles/Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(e) {
		this.setState({
			level: e
		});
	}
	changeFormat(e) {
		this.setState({
			format: e
		});
	}

	render() {
		let { colors } = this.props.palette;
		let { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox color={color[format]} name={color.name} key={color.id} />
		));

		return (
			<div className="Palette">
				{/* Navbar Component */}
				<Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />

				<div className="Palette-colors">{colorBoxes}</div>
				{/* Footer Component */}
			</div>
		);
	}
}

export default Palette;
