import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		'&:hover': {
			cursor: 'pointer'
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
	}
};

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props;
	const miniColorBoxes = colors.map((color) => (
		<div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name} />
	));

	return (
		<div className={classes.root}>
			<div className={classes.color}>{miniColorBoxes}</div>
			<div className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</div>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
