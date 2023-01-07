import { useEffect, useState } from 'react';
import { InputWrapper, ScaleLabel, SecondWrapper, ErrorMessage, InfoMessage, Input } from './StateInput.styles';

export const StateInput = (props) => {
  const { label, value, onChange, type, validator, inputProps } = props;
  const [isLabelRaised, setLabelRaised] = useState(false);
  const [isErrorMessage, setError] = useState(false);
  const [isInfoMessage, setIsInfo] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    let { value } = target;
    onChange(value);
  };

  // useEffect(() => {}, [value]);

  const renderAdditionalMessage = () => {
    if (isErrorMessage) {
      return <ErrorMessage>error message</ErrorMessage>;
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
      </SecondWrapper>
      {renderAdditionalMessage()}
    </InputWrapper>
  );
};
