import { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import ColorBox from './ColorBox';

import './styles/Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			level: e
		});
	}

	render() {
		let { colors } = this.props.palette;
		let { level } = this.state;
		const colorBoxes = colors[level].map((color) => <ColorBox {...color} key={color.id} />);

		return (
			<div className="Palette">
				<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.handleChange} />
				{/* Navbar Component */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* Footer Component */}
			</div>
		);
	}
}

export default Palette;
