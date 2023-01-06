import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Container = styled(TextField)`
	border: 1px solid lightGrey;
	padding: 5px;
	margin: 5px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border: '1px solid lightGrey';
	border-height: 1px;
	border-radius: ${props => (props.borderRadius ? props.borderRadius + 'px' : 'none')};
	height: auto;
	max-width: ${props => (props.width ? props.width : '100%')};
`;
