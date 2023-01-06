import styled from 'styled-components';

export const Button = styled.div`
	border: 1px solid #c7cad3;
	border-left: 5px solid green;
	background-color: white;
	border-radius: 5px;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: green;
	outline: none;
	padding: 0px 20px;
	transition: 0.2s all ease-in-out;

	&:hover {
		background-color: #f0f0f0;
		cursor: pointer;
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 400px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-height: 65px;
	overflow: hidden;
	height: inherit;
`;
