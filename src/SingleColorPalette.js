import { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.generateShades(props.palette, props.color);
		this.state = { format: 'hex' };
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeFormat(e) {
		this.setState({
			format: e
		});
	}

	generateShades(palette, colorFilterBy) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((col) => col.id === colorFilterBy));
		}

		return shades.slice(1);
	}

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox name={color.name} color={color[format]} key={color.name} showLink={false} />
		));

		return (
			<div className="SingleColorPalette Palette">
				<Navbar changeFormat={this.changeFormat} showLevel={false} />
				<div className="Palette-colors">
					{colorBoxes}
					<div className="go-back ColorBox ">
						<Link to={`/palette/${id}`} className="back-btn">
							Go Back
						</Link>
					</div>
				</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default SingleColorPalette;
