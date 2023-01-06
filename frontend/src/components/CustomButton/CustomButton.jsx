import React from 'react';
import { Button } from './CustomButton.styles';
import { InputWrapper } from '../StateInput/StateInput.styles';

export const CustomButton = ({ onClick = () => {}, label }) => {
  const text = 'text';
  const handleClick = () => {
    onClick();
  };
  return (
    <InputWrapper>
      <Button onClick={handleClick}>{label}</Button>
    </InputWrapper>
  );
};
