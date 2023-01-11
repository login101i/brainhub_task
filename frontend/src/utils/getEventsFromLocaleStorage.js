export const getEventsFromLocaleStorage = () => {
  const events = JSON.parse(localStorage.getItem('events'));
  return {
    events: events || [],
    loading: false,
    error: false,
    dispatch: null
  };
};
