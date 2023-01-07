import React, { useState } from 'react';
import { CustomButton, SingleEvent, StateInput } from '../../components';
import { useEventContext } from '../../appState/event.context';
import axios from 'axios';
import moment from 'moment';

export const EventForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', eventDate: '' });
  const { events, dispatch } = useEventContext();

  const dateValidator = (value) => (moment(value).isAfter(formData.eventDate) ? 'From > To' : false);

  const handleForm = (name) => (value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      dispatch({ type: 'NEW_EVENT_REQUEST' });
      const { data } = await axios.post('http://127.0.0.1:4000/api/v1/event/new', formData);
      dispatch({ type: 'NEW_EVENT_SUCCESS', payload: data });
    } catch (err) {
      dispatch({
        type: 'CREATE_EVENT_FAIL',
        payload: err
      });
    }
  };
  return (
    <>
      <StateInput label="Your first name" value={formData.firstName} onChange={handleForm('firstName')} />
      <StateInput label="Your last name" value={formData.lastName} onChange={handleForm('lastName')} />
      <StateInput label="Your Email" value={formData.email} onChange={handleForm('email')} />
      <StateInput stateless value={formData.eventDate} type="date" onChange={handleForm('eventDate')} validator={dateValidator} />
      <CustomButton onClick={handleSave} label="Save" />
      {events.length > 0 && events.map((event) => <SingleEvent key={event.email} event={event} />)}
    </>
  );
};
