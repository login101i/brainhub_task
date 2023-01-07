import { useEffect, useState } from 'react';
import { InputWrapper, ScaleLabel, SecondWrapper, ErrorMessage, InfoMessage, Input, DateInput } from './StateInput.styles';

export const StateInput = ({ label, value, onChange, type, validator, inputProps }) => {
  const [isLabelRaised, setLabelRaised] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(false);
  const [isInfoMessage, setIsInfoMessage] = useState(false);

  const getMessage = (value) => {
    const payload = validator(value);
    if (!payload.valid && payload.message) {
      setErrorMessage(payload.message);
    }
  };

  const handleChange = (event) => {
    const { target } = event;
    let { value } = target;
    onChange(value);
  };

  useEffect(() => {
    if (validator && value && !validator(value).valid) {
      getMessage(value);
    } else {
      setErrorMessage(false);
    }
  }, [value]);

  const renderAdditionalMessage = () => {
    if (isErrorMessage) {
      return <ErrorMessage>{validator(value).message}</ErrorMessage>;
    }
    if (isInfoMessage) {
      return <InfoMessage>info message</InfoMessage>;
    }
    return null;
  };

  return (
    <InputWrapper type={type}>
      <ScaleLabel isLabelRaised={isLabelRaised} isErrorMessage={isErrorMessage}>
        {label}
      </ScaleLabel>
      <SecondWrapper isErrorMessage={isErrorMessage}>
        {type === 'date' ? (
          <DateInput type={type} value={value} onChange={handleChange} {...inputProps} />
        ) : (
          <Input
            onFocus={() => {
              setLabelRaised(true);
            }}
            onBlur={() => !value && setLabelRaised(false)}
            type={type}
            value={value}
            onChange={handleChange}
            {...inputProps}
          />
        )}
        {renderAdditionalMessage()}
      </SecondWrapper>
    </InputWrapper>
  );
};
