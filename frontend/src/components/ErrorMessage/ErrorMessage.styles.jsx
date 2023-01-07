import styled from 'styled-components';

export const ErrorMessageContainer = styled.div`
  width: 400px;
  height: 30px;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.error}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
