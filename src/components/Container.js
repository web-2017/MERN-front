import { Grid } from '@material-ui/core';

import React from 'react';

export const Container = ({ children }) => {
	return (
		<Grid container direction='row' justify='center' spacing={3} style={{ padding: '50px 0' }}>
			{children}
		</Grid>
	);
};
