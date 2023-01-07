import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { getEventsFromLocaleStorage } from '../utils/getEventsFromLocaleStorage';
import { actionTypes } from './eventActionTypes';
import axios from 'axios';

const EventReducer = (state, action) => {
  const newEvent = action.payload?.newEvent;
  switch (action.type) {
    case actionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload.eventsList
      };
    case actionTypes.NEW_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.NEW_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, newEvent],
        loading: false
      };
    case actionTypes.CREATE_EVENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

const EventContext = createContext(getEventsFromLocaleStorage());

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EventReducer, getEventsFromLocaleStorage());

  const getEvents = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:4000/api/v1/events');
      dispatch({ type: actionTypes.SET_EVENTS, payload: data });
    } catch (err) {
      getEventsFromLocaleStorage();
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (state.events.length) {
      // eslint-disable-next-line no-undef
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
