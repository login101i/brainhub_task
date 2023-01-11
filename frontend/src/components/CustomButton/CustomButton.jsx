import { Button } from './CustomButton.styles';
import { InputWrapper } from '../StateInput/StateInput.styles';
import PropTypes from 'prop-types';

export const CustomButton = ({ onClick, label = 'Save', disabled = true }) => {
  return (
    <InputWrapper>
      <Button onClick={onClick} data-testid="customButton" disabled={disabled}>
        {label}
      </Button>
    </InputWrapper>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};
