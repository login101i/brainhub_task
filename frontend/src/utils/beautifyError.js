export const beautifyError = (error) => {
  if (error.includes('firstName')) {
    error = error.replace('firstName', 'first name');
    return error.split('.');
  } else if (error.includes('lastName')) {
    error = error.replace('lastName', 'last name');
    return error.split('.');
  }
  return error;
};
