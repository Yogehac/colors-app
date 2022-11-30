import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		'&:hover svg': {
			opacity: '1'
		}
	},
	color: {
		backgroundColor: '#dae1e4',
		width: '100%',
		height: '100px',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alognItems: 'center',
		positon: 'relative',
		magin: '0',
		paddingTop: '0.5rem',
		fontSize: '1rem'
		// border: '1px solid black'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1rem',
		marginTop: '0'
		// border: '1px solid black'
	},
	miniColor: {
		width: '20%',
		height: '25%',
		display: 'inline-block',
		// float: 'left',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4px'
	},
	deleteIcon: {
		color: 'white',
		backgroundColor: '#eb3d30',
		width: '20px',
		height: '20px',
		position: 'absolute',
		right: '0',
		top: '0',
		padding: '5px',
		zIndex: '10',
		opacity: '0'
	}
};

class MiniPalette extends Component {
	constructor(props) {
		super(props);
		this.deletePalette = this.deletePalette.bind(this);
	}

	deletePalette(e) {
		e.stopPropagation();
		this.props.handleDelete(this.props.id);
	}

	render() {
		const { classes, paletteName, emoji, colors, handleClick } = this.props;
		const miniColorBoxes = colors.map((color) => (
			<div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name} />
		));

		return (
			<div className={classes.root} onClick={handleClick}>
				<DeleteIcon
					className={classes.deleteIcon}
					style={{ transition: 'all 0.5s ease-in-out' }}
					onClick={this.deletePalette}
				/>
				<div className={classes.color}>{miniColorBoxes}</div>
				<div className={classes.title}>
					{paletteName}
					<span className={classes.emoji}>{emoji}</span>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
