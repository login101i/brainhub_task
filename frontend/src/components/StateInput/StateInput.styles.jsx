import styled from 'styled-components';

export const InputWrapper = styled.div`
	position: relative;
	width:400px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-height: 65px;
	overflow: hidden;
	height: inherit;
`;

export const ScaleLabel = styled.div`
	pointer-events: none;
	position: absolute;
	top: ${props => (props.labelRaised ? '-3px' : '25px')};
	left: 10px;
	color: ${props => (props.errorMessage ? 'red' : 'grey')};
	font-size: 14px;
	transition: all 0.2s;
`;

export const SecondWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 15px;
	margin-bottom: 15px;
	min-height: 30px;
	width: 100%;
	height: calc(100% - 30px);
	border: 1px solid #c7cad3;
	border: ${props => (props.errorMessage ? '3px solid red' : '1px solid grey')};
	overflow: hidden;
	border-radius: 5px;
	border-left: 5px solid green;
`;
export const ErrorMessage = styled.div`
	position: absolute;
	bottom: 0px;
	color: green;
	fontsize: 11px;
	left: 10px;
	whitespace: nowrap;
`;
export const InfoMessage = styled.div`
	position: absolute;
	bottom: 0px;
	color: green;
	font-size: 11px;
	left: 10px;
	whitespace: nowrap;
`;
export const Input = styled.input`
	padding: 0px 7px;
	border: none;
	height: 40px;
	min-height: 30px;
	resize: none;
	font-size: 14px;
	width: 100%;
	&:focus: {
		outline: none;
	}
`;
