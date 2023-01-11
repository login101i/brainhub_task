import React, { useState, useEffect } from 'react';
import { SingleEvent } from '..';
import { EventsContainer, EventsTitle } from './EventsList.styles';
import PropTypes from 'prop-types';
import { useEventContext } from '../../appState/event.context';
import axios from 'axios';

export const EventsList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:4000/api/v1/events');
      setEvents(data.eventsList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <EventsTitle>Events List:</EventsTitle>
      <EventsContainer>
        {events.map((event) => (
          <SingleEvent key={event.email} event={event} data-testid="singleEvent" />
        ))}
      </EventsContainer>
    </>
  );
};
