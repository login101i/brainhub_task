export const getEventsFromLocaleStorage = () => {
  // eslint-disable-next-line no-undef
  const events = JSON.parse(localStorage.getItem('events'));
  return {
    events: events || [],
    loading: false,
    error: false,
    dispatch: null
  };
};
