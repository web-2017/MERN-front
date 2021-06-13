import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { BACK_URL } from '../config';
import { Loader } from '../components/Loader';
import { List } from '../components/List';

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		setLoading(true);
		fetch(`${BACK_URL}/posts`)
			.then((json) => json.json())
			.then((data) => {
				console.log('posts', data);
				setPosts(data);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	};

	// delete post
	const removePostHandler = (id) => {
		setLoading(true);
		fetch(`${BACK_URL}/post-delete/${id}`, {
			method: 'delete',
		})
			.then((json) => json.json())
			.then((data) => {
				console.log(data);
				fetchPosts();
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	};

	return (
		<Grid item xs={5}>
			<Loader open={loading} />
			<List posts={posts} removePostHandler={removePostHandler} />
		</Grid>
	);
}
