/* eslint-disable no-undef */
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../infrasctructure/theme';
import { CircularProgress, CustomButton, EventsList, StateInput } from '../components';
import { EventForm } from '../infrasctructure/eventForm/EventForm';

afterEach(() => {
  cleanup();
});

const randomEvent = { fistName: 'firstName', lastName: 'lastName', email: 'abc@wdp.pl', eventDate: '2023-01-22' };

describe('Should render components', () => {
  test('it render CircularProgress component', () => {
    render(<CircularProgress />);
    const CircularProgressElement = screen.getByTestId('circularProgress');
    expect(CircularProgressElement).toBeInTheDocument();
  });

  test('it renders disabled/not disabled CustomButton in EventForm properly', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EventForm />
      </ThemeProvider>
    );
    const CustomButtonElement = screen.getByTestId('customButton');
    expect(CustomButtonElement).toBeInTheDocument();
    expect(CustomButtonElement).toBeDisabled();
    expect(CustomButtonElement).toHaveTextContent(/save/i);
    const addInputValue = (strings) => {
      const StateInputElements = screen.getAllByTestId('stateInput');
      strings.forEach((string, index) => {
        fireEvent.change(StateInputElements[index], { target: { value: string } });
      });
    };
    addInputValue(['firstName1', 'secondName2', 'emailEvent@wp.pl']);
    expect(CustomButtonElement).not.toBeDisabled();
  });

  test('it calculate all CustomInputs in eventForm component', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EventForm />
      </ThemeProvider>
    );

    const StateInputElements = screen.getAllByTestId('stateInput');
    expect(StateInputElements.length).toEqual(3);
    const StateInputDateElements = screen.getAllByTestId('stateInputDate');
    expect(StateInputDateElements.length).toEqual(1);
  });

  test('it shows StateInput component on screen', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <StateInput event={randomEvent} />
      </ThemeProvider>
    );

    const StateInputElement = screen.getByTestId('stateInput');
    expect(StateInputElement).toBeInTheDocument();
  });
  test('it shows error under stateInput when only one character is typed in', async () => {
    const handleBlur = jest.fn();

    render(
      <ThemeProvider theme={appTheme}>
        <StateInput dispatch={handleBlur} />
      </ThemeProvider>
    );

    const StateInputElement = screen.getByTestId('stateInput');
    expect(StateInputElement).toBeInTheDocument();
    fireEvent.click(StateInputElement);
    fireEvent.change(StateInputElement, {
      target: { value: 'a' }
    });
    expect(StateInputElement.value).toBe('a');
  });
});

describe('It it possible to do actions on components', () => {
  test('it is possible to type click in button and fire event', async () => {
    const mockedOnClick = jest.fn();
    cleanup();

    render(
      <ThemeProvider theme={appTheme}>
        <CustomButton onClick={mockedOnClick} disable={false} />
      </ThemeProvider>
    );
    const CustomButtonElement = screen.getByTestId('customButton');
    expect(CustomButtonElement).toBeInTheDocument();
    fireEvent.click(CustomButtonElement);
  });
});

describe('API displays correctly data from backend', () => {
  test('get events from backend', async () => {
    render(<EventsList />);
    const SingleEventElement = await screen.findAllByTestId('singleEvent');
    expect(SingleEventElement).toHaveLength(3);
  });
});
