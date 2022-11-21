import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './styles/ColorBox.css';

class ColorBox extends Component {
	render() {
		const { color, name } = this.props;

		return (
			<CopyToClipboard text={color}>
				<div style={{ background: color }} className="ColorBox">
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-btn">Copy</button>
					</div>
					<span className="see-more">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
