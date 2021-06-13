import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Loader } from '../components/Loader';
import { InputFields } from '../components/InputFields';

import { BACK_URL } from '../config';

export default function Post() {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	useEffect(() => {
		setLoading(true);
		fetch(`${BACK_URL}/post/${id}`)
			.then((json) => json.json())
			.then((data) => {
				console.log(data);
				setTitle(data.title);
				setText(data.text);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, [id]);

	const editPostHandler = async () => {
		try {
			setLoading(true);

			const response = await fetch(`${BACK_URL}/post-update`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ title, text, postId: id }),
			});

			const data = await response.json();

			if (response.status !== 200) {
				return console.error(data);
			}

			console.log(data);

			setLoading(false);

			history.push('/');
		} catch (e) {
			console.error(e);
			setLoading(false);
		}
	};

	console.log(id);
	return (
		<div>
			<Loader open={loading} />
			<InputFields title={title} setTitle={setTitle} text={text} setText={setText} titlePage='Редактирование поста' />
			<Button onClick={editPostHandler} style={{ margin: '20px 0' }} variant='contained' color='primary'>
				Изменить
			</Button>
		</div>
	);
}
