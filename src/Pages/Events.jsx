import { useEffect, useState } from 'react';
import EventCard from '../Components/EventCard';

export default function Events() {
  let [concerts, setConcerts] = useState([]);

  const url = 'https://whereitsat.zocom.workers.dev/events';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setConcerts(data.events));
  }, []);

  return (
    <section className="Events-container">
      <h2>events: </h2>
      {concerts.map((concert, index) => (
        <EventCard concert={concert} key={index} />
      ))}
    </section>
  );
}
