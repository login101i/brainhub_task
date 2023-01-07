import { Button } from './CustomButton.styles';
import { InputWrapper } from '../StateInput/StateInput.styles';

export const CustomButton = ({ onClick, label }) => {
  return (
    <InputWrapper>
      <Button onClick={onClick}>
        {label}
      </Button>
    </InputWrapper>
  );
};
