import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './infrasctructure/theme';
import { MainContainer, Container } from './App.styles';
import { StateInput } from './components/StateInput/StateInput';
import { CustomButton } from './components';
import { SingleEvent, CircularProgress } from './components/index';
import { useEventContext } from './appState/event.context';
import axios from 'axios';
import moment from 'moment';

export const App = () => {
  const [formData, setFormData] = useState({});
  const { events, dispatch, loading } = useEventContext();

  const dateValidator = (value) => (moment(value).isAfter(formData.eventDate) ? 'Od > Do' : false);

  const handleForm = (name) => (value) => {
    const currFilter = { ...formData, [name]: value };
    setFormData(currFilter);
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
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <MainContainer>
        {loading ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <>
            <StateInput label="Your first name" value={formData.firstName} onChange={handleForm('firstName')} />
            <StateInput label="Your last name" value={formData.lastName} onChange={handleForm('lastName')} />
            <StateInput label="Email" value={formData.email} onChange={handleForm('email')} />
            <StateInput stateless value={formData.eventDate} type="date" onChange={handleForm('eventDate')} validator={dateValidator} />
            {events.map((event) => (
              <SingleEvent key={event.email} event={event} />
            ))}
            <CustomButton onClick={handleSave} label="Save" />
          </>
        )}
      </MainContainer>
    </ThemeProvider>
  );
};
