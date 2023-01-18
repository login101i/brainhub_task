import React, { useEffect, useState } from 'react';
import { CustomButton, StateInput, ErrorMessage, CircularProgress } from '../../components';
import { useEventContext } from '../../appState/event.context';
import { formatDate } from '../../utils/getCurrentDate';
import axios from 'axios';
import { required, emailValidator, dateValidator } from '../../utils/validators';
import { actionTypes } from '../../appState/eventActionTypes';
import { beautifyError } from '../../utils/beautifyError';
import { FormEventContainer } from './EventForm.styles';

export const EventForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', eventDate: formatDate() });

  const { error, dispatch, loading } = useEventContext();

  const handleForm = (name) => (value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      dispatch({ type: actionTypes.NEW_EVENT_REQUEST });
      const { data } = await axios.post('http://127.0.0.1:4000/api/v1/event/new', formData);
      dispatch({ type: actionTypes.NEW_EVENT_SUCCESS, payload: data });
      setFormData({ firstName: '', lastName: '', email: '', eventDate: formatDate() });
    } catch (err) {
      dispatch({
        type: actionTypes.CREATE_EVENT_FAIL,
        payload: err.response.data
      });
    }
  };

  return (
    <FormEventContainer>
      <StateInput label="Your first name" value={formData.firstName} onChange={handleForm('firstName')} validator={required} />
      <StateInput
        label="Your last name"
        value={formData.lastName}
        onChange={handleForm('lastName')}
        onBlur={handleForm('firstName')}
        validator={required}
      />
      <StateInput stateless value={formData.eventDate} type="date" onChange={handleForm('eventDate')} validator={dateValidator} />
      <StateInput label="Your Email" value={formData.email} onChange={handleForm('email')} validator={emailValidator} type="email"/>

      {loading ? <CircularProgress /> : <CustomButton onClick={handleSave} label="Save" />}
      {error && <ErrorMessage>{beautifyError(error)}</ErrorMessage>}
    </FormEventContainer>
  );
};
