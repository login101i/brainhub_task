import React from 'react';
import { ErrorMessageContainer, Error } from './ErrorMessage.styles';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ children }) => {
  return (
    <ErrorMessageContainer>
      <Error>{children}</Error>
    </ErrorMessageContainer>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node
};
