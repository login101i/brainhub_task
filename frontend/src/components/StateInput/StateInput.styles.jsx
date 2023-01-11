import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 65px;
  overflow: hidden;
  height: 70px;
  margin: 2px 0px;
  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const ScaleLabel = styled.div`
  pointer-events: none;
  position: absolute;
  top: ${(props) => (props.isLabelRaised ? '-3px' : '25px')};
  left: 10px;
  color: ${(props) => (props.isErrorMessage ? props.theme.colors.error : 'gray')};
  font-size: 14px;
  transition: all 0.2s;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 20px;
  min-height: 30px;
  width: 100%;
  height: calc(100% - 30px);
  border: 1px solid #c7cad3;
  border: ${(props) => `1px solid ${props.theme.colors.secondary}`};
  overflow: hidden;
  border-radius: 5px;
  border-left: ${(props) => (props.isErrorMessage ? `5px solid ${props.theme.colors.error}` : `5px solid ${props.theme.colors.success}`)};
`;
export const ErrorMessage = styled.div`
  position: absolute;
  bottom: 0px;
  color: ${(props) => props.theme.colors.error};
  font-size: 13px;
  left: 10px;
  whitespace: nowrap;
`;
export const InfoMessage = styled.div`
  position: absolute;
  bottom: -2px;
  color: ${(props) => props.theme.colors.success};
  font-size: 13px;
  left: 10px;
  whitespace: nowrap;
`;
export const Input = styled.input`
  padding: 0px 7px;
  border: none;
  height: 40px;
  min-height: 30px;
  resize: none;
  font-size: 14px;
  width: 100%;
  &:focus: {
    outline: none;
    border: none;
  }
`;
export const DateInput = styled.input.attrs({ type: 'date' })`
  padding: 0px 7px;
  border: none;
  height: 40px;
  min-height: 30px;
  resize: none;
  font-size: 14px;
  width: 100%;
  &::-webkit-calendar-picker-indicator {
    padding-left: 70%;
    background-color: transparent;
  }
  &:active {
    background-color: ${(props) => props.theme.colors.white};
  }
`;
