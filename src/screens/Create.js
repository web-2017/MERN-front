import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { InputFields } from '../components/InputFields';
import { Loader } from '../components/Loader';
import { BACK_URL } from '../config';

export default function Create() {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const createPostHandler = async () => {
		if (!title.trim() || !text.trim()) {
			alert('Все поля обязательны для заполнения');
			return console.error('Все поля обязательны для заполнения');
		}

		try {
			setLoading(true);
			const response = await fetch(`${BACK_URL}/create`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ title, text }),
			});

			const data = await response.json();

			if (response.status !== 200) {
				console.error(data);
				return setLoading(false);
			}

			setTitle('');
			setText('');

			console.log('Success', data);
			setLoading(false);

			history.push('/');
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	return (
		<div>
			<Loader open={loading} />
			<InputFields title={title} setTitle={setTitle} text={text} setText={setText} titlePage='Создание поста' />
			<Button onClick={createPostHandler} style={{ margin: '20px 0' }} variant='contained' color='primary'>
				Создать
			</Button>
		</div>
	);
}
