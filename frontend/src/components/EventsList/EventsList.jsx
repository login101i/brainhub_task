import { SingleEvent } from '..';
import { EventsContainer, EventsTitle } from './EventsList.styles';
import { useEventContext } from '../../appState/event.context';

export const EventsList = () => {
  const { events } = useEventContext();

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
