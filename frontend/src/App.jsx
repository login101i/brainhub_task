import { ThemeProvider } from 'styled-components';
import { appTheme } from './infrasctructure/theme';
import { MainContainer, Container } from './App.styles';
import { CircularProgress } from './components/index';
import { useEventContext } from './appState/event.context';
import { EventForm } from './infrasctructure/eventForm/EventForm';

export const App = () => {
  const { loading } = useEventContext();

  return (
    <ThemeProvider theme={appTheme}>
      <MainContainer>{loading ? <CircularProgress /> : <EventForm />}</MainContainer>
    </ThemeProvider>
  );
};
