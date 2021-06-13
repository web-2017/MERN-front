import { TextField } from '@material-ui/core';
import { Title } from './Title';
export const InputFields = ({ title, text, titlePage, setTitle, setText }) => {
	return (
		<>
			<Title title={titlePage} />
			<TextField
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				fullWidth
				label='Заголовок'
				variant='outlined'
				style={{ marginBottom: '30px' }}
			/>
			<TextField
				value={text}
				onChange={(e) => setText(e.target.value)}
				fullWidth
				multiline
				rows={4}
				label='Тескт'
				variant='outlined'
			/>
		</>
	);
};
