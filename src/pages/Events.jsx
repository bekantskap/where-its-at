import { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

function Events() {

  let [event, setEvents] = useState([]);


  const url = "https://whereitsat.zocom.workers.dev/events.json";

  useEffect(() => {
    // Här fetchar vi
    fetch(url, {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => setEvents(data.events))
  }, []);

  return ( 
    <section>
      <h1>Events:</h1>
      {event.map((event, index) => (
         <EventCard event={event} key={index}/>
       ))}
      
    </section>
   );
}

export default Events;