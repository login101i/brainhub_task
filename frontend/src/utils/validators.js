import moment from 'moment';

export const required = (val) => ({ valid: !!val && val.length > 1, message: 'Please enter a value with minimum two characters' });

export const emailValidator = (val) => ({
  valid:
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    ),
  message: 'Your email has invalid format!'
});

export const dateValidator = (value) => ({
  valid: moment(value).isSameOrAfter(new Date(), 'day'),
  message: 'Please pick today or day after tomorrow'
});
