import styled from 'styled-components';

export const ErrorMessageContainer = styled.div`
  width: 400px;
  height: 50px;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.error}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 460px) {
    width: 300px;
  }
`;

export const Error = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
