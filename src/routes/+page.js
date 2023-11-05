/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const fetchEvents = async () => {
    const dbUrl =
      'https://activefire-2e9a0-default-rtdb.europe-west1.firebasedatabase.app/fire_weather.json';
    const eventsResult = await fetch(dbUrl);
    const eventsData = await eventsResult.json();
    return eventsData;
  };

  return {
    events: fetchEvents()
  };
};
