import React from 'react';
import { Typography } from '@material-ui/core';

export const Title = ({ title }) => {
	return (
		<Typography style={{ margin: '20px 0' }} component='h2' variant='h2'>
			{title}
		</Typography>
	);
};
