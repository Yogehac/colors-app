import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrrap: 'wrap'
	},
	nav: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white'
	},
	create: {
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gap: '5%'
	}
};

class PaletteList extends Component {
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	render() {
		const { palettes, classes, deletePalette } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React colors</h1>
						<Link to="/palette/new" className={classes.create}>
							Create Palette
						</Link>
					</nav>
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							<MiniPalette
								{...palette}
								handleClick={() => this.goToPalette(palette.id)}
								handleDelete={deletePalette}
								key={palette.id}
								id={palette.id}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
