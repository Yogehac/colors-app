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
		backgroundColor: 'Grey'
	},
	title: {
		display: 'flex',
		alognItems: 'center',
		justifyContent: 'space-between',
		positon: 'relative',
		magin: '0',
		paddingTop: '0.5rem',
		fontSize: '1rem'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.5rem'
	}
};

function MiniPalette(props) {
	const { classes, paletteName, emoji } = props;
	return (
		<div className={classes.root}>
			<div className={classes.color} />
			<div className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</div>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
