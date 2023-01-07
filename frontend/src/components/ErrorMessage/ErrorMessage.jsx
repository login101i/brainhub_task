import React from 'react';
import { ErrorMessageContainer, Error } from './ErrorMessage.styles';
import { beautifyError } from '../../utils/beautifyError';

export const ErrorMessage = ({ children }) => {
  return (
    <ErrorMessageContainer>
      <Error>{children}</Error>
    </ErrorMessageContainer>
  );
};
