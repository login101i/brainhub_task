/* eslint-disable no-undef */
import { render, screen, cleanup, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../infrasctructure/theme';
import { CircularProgress, CustomButton, EventsList, StateInput } from '../components';
import { EventForm } from '../infrasctructure/eventForm/EventForm';
import { required, emailValidator } from '../utils/validators';
import { EventContext } from '../appState/event.context';

afterEach(() => {
  cleanup();
});

const randomEvent = { fistName: 'firstName', lastName: 'lastName', eventDate: '2023-01-22', email: 'abc@wdp.pl' };

describe('Should render components', () => {
  test('it render CircularProgress component', () => {
    render(<CircularProgress />);
    const CircularProgressElement = screen.getByTestId('circularProgress');
    expect(CircularProgressElement).toBeInTheDocument();
  });

  test('it renders inputs in EventForm properly', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EventForm />
      </ThemeProvider>
    );
    const inputsText = Object.values(randomEvent);
    const CustomButtonElement = screen.getByTestId('customButton');
    const FirstNameInputElement = screen.getByTestId('Your first name');
    const LastNameInputElement = screen.getByTestId('Your last name');
    const DataInputElement = screen.getByTestId('stateInputDate');
    const EmailInputElement = screen.getByTestId('Your Email');
    const InputElements = [FirstNameInputElement, LastNameInputElement, DataInputElement, EmailInputElement];

    expect(CustomButtonElement).toBeInTheDocument();
    expect(CustomButtonElement).not.toBeDisabled();
    expect(CustomButtonElement).toHaveTextContent(/save/i);

    function addInputValue(strings) {
      strings.forEach((string, index) => {
        fireEvent.change(InputElements[index], { target: { value: string } });
      });
    }

    addInputValue(inputsText);
    InputElements.map((element, index) => expect(element.value).toBe(inputsText[index]));
    expect(CustomButtonElement).not.toBeDisabled();
  });

  test('it shows StateInput component on screen', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <StateInput />
      </ThemeProvider>
    );

    const StateInputElement = screen.getByRole('textbox');
    expect(StateInputElement).toBeInTheDocument();
  });
  test('it shows error under stateInput when only one character is typed in', async () => {
    const handleBlur = jest.fn();

    render(
      <ThemeProvider theme={appTheme}>
        <EventForm />
      </ThemeProvider>
    );

    const StateInputElements = screen.getAllByRole('textbox');
    const firstStateInput = StateInputElements[0];

    expect(StateInputElements[0]).toBeInTheDocument();
    fireEvent.click(firstStateInput);
    fireEvent.change(firstStateInput, {
      target: { value: 'a' }
    });
    expect(firstStateInput.value).toBe('a');
    fireEvent.blur(firstStateInput);
    const ErrorMessageElement = screen.getByText('Please enter a value with minimum two characters');
    expect(ErrorMessageElement).toBeTruthy();
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

describe('Events is', () => {
  test('events is not shown when context api not provide value', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EventsList />
      </ThemeProvider>
    );
    expect(screen.queryByTestId('singleEvent')).toBeNull();
  });

  const customRender = (component, { providerProps, ...renderOptions }) => {
    return render(<EventContext.Provider {...providerProps}>{component}</EventContext.Provider>, renderOptions);
  };

  test('EventsListConsumer shows value from provider', () => {
    const providerProps = {
      value: {
        events: [
          {
            email: 'mc2@gmail.com',
            eventDate: '2023-01-11T00:00:00.000Z',
            firstName: 'maciej',
            lastName: 'krus'
          },
          {
            email: 'mck@gmail.com',
            eventDate: '2023-01-12T00:00:00.000Z',
            firstName: 'maciej2',
            lastName: 'krus2'
          }
        ]
      }
    };
    customRender(<EventsList />, { providerProps });
    expect(screen.getAllByTestId('singleEvent')).toHaveLength(providerProps.value.events.length);
  });
});

describe('correct validate inputs', () => {
  test('validate name input and last name  as it should ', () => {
    const text = 'maciej';
    expect(required(text).valid).toBe(true);
  });
  test('validate name input and last name  as it should ', () => {
    const text = 'a';
    expect(required(text).valid).toBe(false);
  });

  test('validate name input as it should be', () => {
    const text = 'mk@wp.pl';
    expect(emailValidator(text).valid).toBe(true);
  });

  test('validate name input should fail on incorrect input', () => {
    const text = 'mkwp.pl';
    expect(emailValidator(text).valid).not.toBe(true);
  });

  test.skip('email input should have label', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <StateInput label="Your Email" />
      </ThemeProvider>
    );
    const emailInputNode = screen.getByText(/Your Email/i);
    expect(emailInputNode.getAttribute('name')).toBe('email');
  });

  test('email should accept text', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <EventForm />
      </ThemeProvider>
    );
    const EmailInputElement = screen.getByTestId('Your Email');
    expect(EmailInputElement.value).toBe('');

    fireEvent.change(EmailInputElement, { target: { value: 'emailText' } });
    expect(EmailInputElement.value).toBe('emailText');
    fireEvent.blur(EmailInputElement);
    const ErrorMessageElement = screen.getByText('Your email has invalid format');
    expect(ErrorMessageElement).toBeInTheDocument();

    // fireEvent.click(EmailInputElement);
    // fireEvent.change(EmailInputElement, { target: { value: 'emailText@wp.pl' } });
    // fireEvent.blur(EmailInputElement);
    // expect(ErrorMessageElement).not.toBeInTheDocument();
  });

  test('should submit form', () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={appTheme}>
        <CustomButton onClick={mockFn} />
      </ThemeProvider>
    );
    const CustomButtonElement = screen.getByTestId('customButton');
    expect(CustomButtonElement).toBeInTheDocument();
    fireEvent.click(CustomButtonElement);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should submit form with provided values', () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={appTheme}>
        <CustomButton onClick={mockFn} />
      </ThemeProvider>
    );
    const CustomButtonElement = screen.getByTestId('customButton');
    expect(CustomButtonElement).toBeInTheDocument();
    fireEvent.click(CustomButtonElement);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
