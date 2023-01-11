import React from 'react';
import { EventContainer, EventCell } from './SingleEvent.styles';
import PropTypes from 'prop-types';

export const SingleEvent = ({ event = {} }) => {
  const { firstName, lastName, email, eventDate } = event;

  return (
    <EventContainer data-testid="singleEvent">
      <EventCell>
        <b>FirstName</b>: {firstName}
      </EventCell>
      <EventCell>
        <b>LastName: </b>
        {lastName}
      </EventCell>
      <EventCell>
        <b>Email:</b> {email}
      </EventCell>
      <EventCell>
        <b>Event date:</b> {eventDate?.toString().slice(0, 10)}
      </EventCell>
    </EventContainer>
  );
};

SingleEvent.propTypes = {
  event: PropTypes.object
};
