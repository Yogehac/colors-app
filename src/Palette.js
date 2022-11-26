import { Component } from 'react';

import ColorBox from './ColorBox';

import './styles/Palette.css';

class Palette extends Component {
	render() {
		const colorBoxes = this.props.palette.colors[300].map((color) => <ColorBox {...color} key={color.id} />);

		return (
			<div className="Palette">
				{/* Navbar Component */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* Footer Component */}
			</div>
		);
	}
}

export default Palette;
