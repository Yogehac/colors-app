import { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles/Navbar.css';

class Navbar extends Component {
	render() {
		const { level, handleChange } = this.props;

		return (
			<nav className="Navbar">
				<div className="logo">
					<a href="#">Color Palette</a>
				</div>
				<div className="slide-container">
					<span>Level : {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={handleChange} />
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
