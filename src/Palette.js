import { Component } from 'react';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

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
		let { colors, paletteName, emoji, id } = this.props.palette;
		let { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				color={color[format]}
				name={color.name}
				moreUrl={`/palette/${id}/${color.id}`}
				key={color.id}
				showLink
			/>
		));

		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showLevel />

				<div className="Palette-colors">{colorBoxes}</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default Palette;
