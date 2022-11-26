import { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';

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
				{/* Navbar Component */}
				<Navbar level={level} handleChange={this.handleChange} />

				<div className="Palette-colors">{colorBoxes}</div>
				{/* Footer Component */}
			</div>
		);
	}
}

export default Palette;
