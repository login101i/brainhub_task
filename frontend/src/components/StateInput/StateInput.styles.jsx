import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 65px;
  overflow: hidden;
  height: 70px;
`;

export const ScaleLabel = styled.div`
  pointer-events: none;
  position: absolute;
  top: ${(props) => (props.isLabelRaised ? '-3px' : '25px')};
  left: 10px;
  color: ${(props) => (props.isErrorMessage ? 'red' : 'grey')};
  font-size: 14px;
  transition: all 0.2s;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  min-height: 30px;
  width: 100%;
  height: calc(100% - 30px);
  border: 1px solid #c7cad3;
  border: ${(props) => (props.isErrorMessage ? `3px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.secondary}`)};
  overflow: hidden;
  border-radius: 5px;
  border-left: ${(props) => `5px solid ${props.theme.colors.success}`};
`;
export const ErrorMessage = styled.div`
  position: absolute;
  bottom: 0px;
  color: ${(props) => props.theme.colors.error};
  fontsize: 11px;
  left: 10px;
  whitespace: nowrap;
`;
export const InfoMessage = styled.div`
  position: absolute;
  bottom: 0px;
  color: ${(props) => props.theme.colors.success};
  font-size: 11px;
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
