import { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles/Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex',
			open: false
		};
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({
			format: e.target.value,
			open: true
		});
		this.props.changeFormat(e.target.value);
	}

	closeSnackbar() {
		this.setState({
			open: false
		});
	}

	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;

		return (
			<nav className="Navbar">
				<div className="logo">
					<a href="#">Color Palette</a>
				</div>
				<div className="slide-container">
					<span>Level : {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
					</div>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">Hex - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(1,1,1)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(1,1,1,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					onClose={this.closeSnackbar}
					action={[
						<IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}

export default Navbar;
