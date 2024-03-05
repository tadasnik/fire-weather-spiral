import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const fetchEvents = async () => {
    const dbUrl =
      'https://activefire-2e9a0-default-rtdb.europe-west1.firebasedatabase.app/fire_weather.json';
    const eventsResult = await fetch(dbUrl);
    const eventsData = await eventsResult.json();
    return eventsData;
  };

  const fetchFireCounts = async () => {
    const { data, error } = await supabase.rpc('region_daily_detections', { region_id: "South-west" })
    // const { data, error } = await supabase.from('detections').select('*').eq('event', 23768100)
    console.log("page data", data, error)
  }


  return {
    events: fetchEvents(),
    fireCounts: fetchFireCounts(),
  };
};
