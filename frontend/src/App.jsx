import { ThemeProvider } from 'styled-components';
import { appTheme } from './infrasctructure/theme';
import { MainContainer } from './App.styles';
import { EventsList, HiddenMessage } from './components/index';
import { EventForm } from './infrasctructure/eventForm/EventForm';

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <MainContainer>
        <EventForm />
        <EventsList />
        <HiddenMessage />
      </MainContainer>
    </ThemeProvider>
  );
};
