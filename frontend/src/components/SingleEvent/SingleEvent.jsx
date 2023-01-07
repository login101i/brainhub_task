import React from 'react';
import { EventContainer, EventCell } from './SingleEvent.styles';

export const SingleEvent = ({ event }) => {
  const { firstName, lastName, email, eventDate } = event;

  return (
    <EventContainer>
      <EventCell>{firstName}</EventCell>
      <EventCell>{lastName}</EventCell>
      <EventCell>{email}</EventCell>
      <EventCell>{eventDate?.toString().slice(0, 10)}</EventCell>
    </EventContainer>
  );
};
