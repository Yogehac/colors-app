import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

import './styles/ColorBox.css';

const styles = {
	darkText: {
		color: (props) => (chroma(props.color).luminance() >= 0.55 ? 'rgba(0,0,0,0.5)' : 'white')
	},
	lightText: {
		color: (props) => (chroma(props.color).luminance() <= 0.09 ? 'white' : 'black')
	}
};

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}

	render() {
		const { color, name, moreUrl, showLink, classes } = this.props;
		const { copied } = this.state;

		return (
			<CopyToClipboard text={color} onCopy={this.changeCopyState}>
				<div style={{ background: color }} className="ColorBox">
					<div style={{ background: color }} className={`copy-overlay ${copied && 'show'}`} />
					<div className={`copy-msg ${copied && 'show'} ${classes.darkText}`}>
						<h1>Copied!</h1>
						<p>{color}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={classes.lightText}>{name}</span>
						</div>
						<button className={`copy-btn ${classes.darkText}`}>Copy</button>
					</div>
					{showLink && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={`see-more ${classes.darkText}`}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
