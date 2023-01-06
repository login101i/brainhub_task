import styled from 'styled-components';

export const MainContainer = styled.div`
      max-width: 1300px;
      background-color: ${(props) => props.theme.colors.white};
      border: 4px solid green;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-height: 100vh;
      margin: 0 auto;
`;

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      align-items: ${(props) => (props.isMobile ? 'auto' : 'center')};
      justify-content: center;
      max-width: ${(props) => (props.isMobile ? 'auto' : 'auto')};
`;
