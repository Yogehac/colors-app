import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import bg from './styles/bg.svg';

const styles = {
	root: {
		backgroundColor: 'blue',
		padding: '10px',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#1e8feb',
		backgroundImage: `url(${bg})`
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrrap: 'wrap',
		'@media(max-width: 991px)': {
			width: '80%'
		},
		'@media(max-width: 576px)': {
			width: '80%'
		}
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
		gap: '1.5rem',
		'@media(max-width: 576px)': {
			gridTemplateColumns: 'repeat(1, 100%)',
			gap: '1rem'
			// width: '100%'
		}
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
