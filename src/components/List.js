import { Grid } from '@material-ui/core';
import { ListItem } from './ListItem';
export const List = ({ posts, removePostHandler }) => {
	return (
		<Grid item xs={12}>
			{posts.map((post) => (
				<ListItem post={post} key={post._id} removePostHandler={removePostHandler} />
			))}
		</Grid>
	);
};
