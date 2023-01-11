import { createContext, useContext, useEffect, useReducer, useMemo } from 'react';
import { getEventsFromLocaleStorage } from '../utils/getEventsFromLocaleStorage';
import { actionTypes } from './eventActionTypes';
import { utilsStrings } from '../utils/utilsString';
import axios from 'axios';
import PropTypes from 'prop-types';

const EventReducer = (state, action) => {
  const newEvent = action.payload?.newEvent;
  switch (action.type) {
    case actionTypes.GET_EVENTS:
      return {
        ...state,
        events: action.payload.eventsList,
        error: false
      };
    case actionTypes.NEW_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.NEW_EVENT_SUCCESS:
      return {
        ...state,
        events: [newEvent, ...state.events],
        loading: false,
        error: false
      };
    case actionTypes.CREATE_EVENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case actionTypes.CLEAR_INPUT_ERROR:
      return {
        ...state,
        error: false
      };
    case actionTypes.CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const EventContext = createContext(getEventsFromLocaleStorage());

export const useEventContext = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error('Events App must be used with an EventContextProvider');
  }
  return context;
};

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EventReducer, getEventsFromLocaleStorage());

  const getEvents = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:4000/api/v1/events');
      dispatch({ type: actionTypes.GET_EVENTS, payload: data });
    } catch (err) {
      dispatch({ type: actionTypes.CONNECTION_ERROR, payload: utilsStrings.connectionError });
      getEventsFromLocaleStorage();
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (state.events?.length) {
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

EventContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
