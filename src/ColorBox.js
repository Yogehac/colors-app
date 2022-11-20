import { Component } from 'react';

import './styles/ColorBox.css';

class ColorBox extends Component {
	render() {
		const { color, name } = this.props;

		return (
			<div style={{ backgroundColor: color }} className="ColorBox">
				<span>{name}</span>
				<span>More</span>
			</div>
		);
	}
}

export default ColorBox;
