import React, { useState } from 'react';
import { CustomButton, SingleEvent, StateInput, ErrorMessage } from '../../components';
import { useEventContext } from '../../appState/event.context';
import { formatDate } from '../../utils/getCurrentDate';
import axios from 'axios';
import { required, emailValidator, dateValidator } from '../../utils/validators';
import { actionTypes } from '../../appState/eventActionTypes';
import { beautifyError } from '../../utils/beautifyError';
export const EventForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', eventDate: formatDate() });
  const { events, error, dispatch } = useEventContext();

  const handleForm = (name) => (value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      dispatch({ type: actionTypes.NEW_EVENT_REQUEST });
      const { data } = await axios.post('http://127.0.0.1:4000/api/v1/event/new', formData);

      dispatch({ type: actionTypes.NEW_EVENT_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: actionTypes.CREATE_EVENT_FAIL,
        payload: err.response.data.errMessage
      });
    }
  };

  return (
    <>
      <StateInput label="Your first name" value={formData.firstName} onChange={handleForm('firstName')} validator={required} />
      <StateInput
        label="Your last name"
        value={formData.lastName}
        onChange={handleForm('lastName')}
        onBlur={handleForm('firstName')}
        validator={required}
      />
      <StateInput label="Your Email" value={formData.email} onChange={handleForm('email')} validator={emailValidator} />
      <StateInput stateless value={formData.eventDate} type="date" onChange={handleForm('eventDate')} validator={dateValidator} />
      <CustomButton onClick={handleSave} label="Save" disabled={error} />
      {error && error.split(',').map((err) => <ErrorMessage key={err}>{beautifyError(err)}</ErrorMessage>)}
      {events.length > 0 && events.map((event) => <SingleEvent key={event.email} event={event} />)}
    </>
  );
};
