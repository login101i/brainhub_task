import React, { useState } from 'react';
import { InputWrapper, ScaleLabel, SecondWrapper, ErrorMessage, InfoMessage, Input } from './StateInput.styles';

export const StateInput = props => {
	const { label, value, onChange = () => {}, type, validator, inputProps } = props;
	const [labelRaised, setLabelRaised] = useState(false);
	const [errorMessage, setError] = useState(false);
	const [infoMessage, setInfo] = useState(false);

	const handleChange = event => {
		const { target } = event;
		let { value } = target;
		onChange(value);
	};

	const renderAdditionalMessage = () => {
		if (errorMessage) {
			return <ErrorMessage>error message</ErrorMessage>;
		}
		if (infoMessage) {
			return <InfoMessage>info message</InfoMessage>;
		}
		return null;
	};

	return (
		<InputWrapper>
			<ScaleLabel labelRaised={labelRaised} errorMessage={errorMessage}>
				{label}
			</ScaleLabel>
			<SecondWrapper errorMessage={errorMessage}>
				<Input
					onFocus={() => {
						setLabelRaised(true);
					}}
					onBlur={() => {
						!value && setLabelRaised(false);
					}}
					type={type}
					value={value}
					onChange={handleChange}
					{...inputProps}
				/>
			</SecondWrapper>
			{renderAdditionalMessage()}
		</InputWrapper>
	);
};
