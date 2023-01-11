import { useState } from 'react';
import { InputWrapper, ScaleLabel, SecondWrapper, ErrorMessage, Input, DateInput } from './StateInput.styles';
import PropTypes from 'prop-types';
import { useEventContext } from '../../appState/event.context';
import { actionTypes } from '../../appState/eventActionTypes';

export const StateInput = ({ label, value, onChange = () => {}, type, validator, inputProps }) => {
  const [isLabelRaised, setLabelRaised] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(false);
  const { dispatch, error } = useEventContext();

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

  const handleBlur = () => {
    !value && setLabelRaised(false);
    if (validator && value && !validator(value).valid) {
      getMessage(value);
    } else {
      setErrorMessage(false);
      dispatch({
        type: actionTypes.CLEAR_INPUT_ERROR
      });
    }
  };

  return (
    <InputWrapper type={type}>
      <ScaleLabel isLabelRaised={isLabelRaised} isErrorMessage={isErrorMessage}>
        {label}
      </ScaleLabel>
      <SecondWrapper isErrorMessage={isErrorMessage}>
        {type === 'date' ? (
          <DateInput type={type} value={value} onChange={handleChange} onBlur={handleBlur} {...inputProps} data-testid="stateInputDate" />
        ) : (
          <Input
            onFocus={() => {
              setLabelRaised(true);
            }}
            onBlur={handleBlur}
            type={type}
            value={value}
            onChange={handleChange}
            data-testid="stateInput"
            autocomplete="off"
            {...inputProps}
          />
        )}
        {isErrorMessage && <ErrorMessage data-testid="errorMessage">{validator(value).message}</ErrorMessage>}
      </SecondWrapper>
    </InputWrapper>
  );
};

StateInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  validator: PropTypes.func,
  inputProps: PropTypes.string
};
