import React from 'react';
import { LoaderContainer, Loader } from './CircularProgress.styles.jsx';

export const CircularProgress = props => {
	return (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	);
};
