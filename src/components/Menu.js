import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color: '#fff',
		textDecoration: 'none',
	},
}));

export const Menu = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography component={Link} to={'/'} variant='h6' className={classes.title}>
						Главная
					</Typography>
					<Button color='inherit' component={Link} to={'/create'}>
						Создать
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};
