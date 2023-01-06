import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const LoaderContainer = styled.div`
	position: fixed;
	z-index: 10000;
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:black;
`;

export const Loader = styled(CircularProgress)`
	position: fixed;
	z-index: 10000;
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
`;
