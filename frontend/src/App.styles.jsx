import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1300px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;
