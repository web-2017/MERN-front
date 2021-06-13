import { Backdrop, CircularProgress } from '@material-ui/core';

export const Loader = ({ open = false }) => {
	return (
		<Backdrop style={{ zIndex: 100 }} open={open}>
			<CircularProgress color='secondary' />
		</Backdrop>
	);
};
