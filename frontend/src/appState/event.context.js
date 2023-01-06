import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
  events: JSON.parse(localStorage.getItem('events')) || [],
  loading: false,
  error: false,
  dispatch: null
};

const EventReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload.eventsList
      };
    case 'NEW_EVENT_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'NEW_EVENT_SUCCESS':
      const newEvent = action.payload.newEvent;
      return {
        ...state,
        events: [...state.events, newEvent],
        loading: false
      };
    case 'CREATE_EVENT_FAIL':
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export const EventContext = createContext(INITIAL_STATE);

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EventReducer, INITIAL_STATE);

  const getEvents = async () => {
    const { data } = await axios.get('http://127.0.0.1:4000/api/v1/events');
    dispatch({ type: 'SET_EVENTS', payload: data });
    console.log('pobieram');
  };
  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (state.events.length) {
      localStorage.setItem('events', JSON.stringify(state.events));
    }
  }, [state.events]);

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
