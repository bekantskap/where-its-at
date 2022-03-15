import { createContext, useEffect, useState } from 'react';
import EventCard from '../Components/EventCard';

export const ConcertContext = createContext();

export default function Events() {
  let [concerts, setConcerts] = useState([]);

  const url = 'https://my-json-server.typicode.com/majazocom/events/events';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setConcerts(data));
  }, []);

  return (
    <ConcertContext.Provider value={concerts}>
      <section>
        <h2>Events</h2>
        <input type="text"></input>
        {concerts.map((concert, index) => (
          <EventCard concert={concert.name} key={index} />
        ))}
      </section>
    </ConcertContext.Provider>
  );
}
