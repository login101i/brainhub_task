import styled from 'styled-components';

export const EventContainer = styled.div`
  width: 95%;
  height: 100px;
  border-bottom: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EventCell = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
