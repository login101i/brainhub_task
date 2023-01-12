import React, { useState } from 'react';
import { Container, Message, ClickMe } from './HiddenMessage.styles';

export const HiddenMessage = () => {
  const [isMessageVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
  };
  return (
    <Container>
      {isMessageVisible ? (
        <Message> Is it possible to join your team as a junior dev to gain more experience about node, typescript and testing? </Message>
      ) : (
        <ClickMe onClick={handleVisibility}>Click me :)</ClickMe>
      )}
    </Container>
  );
};
