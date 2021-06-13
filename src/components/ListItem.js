import { Typography, Box, makeStyles, Tooltip } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	title: {
		color: '#777',
		display: 'flex',
		justifyContent: 'space-between',
		cursor: 'pointer',
	},
	text: {
		color: '#444',
	},
}));

export const ListItem = ({ post, removePostHandler }) => {
	const classes = useStyles();
	return (
		<Box mb={3}>
			<Typography className={classes.title} variant='h3' component='h3'>
				{post.title}
				<Box>
					<Box component={Link} to={`/post/${post._id}`}>
						<Tooltip title='Изменить'>
							<EditIcon color='primary' />
						</Tooltip>
					</Box>
					<Tooltip title='Удалить'>
						<DeleteOutlineIcon color='secondary' onClick={() => removePostHandler(post._id)} />
					</Tooltip>
				</Box>
			</Typography>

			<Typography>{post.text}</Typography>
		</Box>
	);
};
