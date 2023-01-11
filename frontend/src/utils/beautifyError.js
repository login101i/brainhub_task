export const beautifyError = (error) => {
  let errorString = 'Operation `events.insertOne()` buffering timed out after 10000ms';
  if (error.includes('firstName')) {
    error = error.replace('firstName', 'first name');
    return error.split('.');
  } else if (error.includes('lastName')) {
    error = error.replace('lastName', 'last name');
    return error.split('.');
  } else if (error === errorString) {
    error = 'Event was not added. Please check your internet connection';
    return error.split('.');
  }

  return error;
};
