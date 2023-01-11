import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 90vw;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  margin: 50px auto;
  -webkit-box-shadow: -3px 16px 62px -15px rgba(66, 68, 90, 1);
  -moz-box-shadow: -3px 16px 62px -15px rgba(66, 68, 90, 1);
  box-shadow: -3px 16px 62px -15px rgba(66, 68, 90, 1);
  @media (max-width: 500px) {
    max-width: 100%;
  }
  @media (max-width: 300px) {
    display: none;
  }
  @media (min-width: 1300px) {
    max-width: 1300px;
  }
`;
