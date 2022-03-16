import { useContext, useState } from 'react';
import EventCard from '../Components/EventCard';
import { ConcertContext } from '../App';

export default function Events(props) {
  const [chosenConcerts, setChosenConcerts] = useState({
    name: '',
    price: null,
    where: '',
    when: {
      date: '',
      from: '',
      to: '',
    },
  });

  let concerts = useContext(ConcertContext);
  // let concert = events.find(c => c.name === props.concert);

  return (
    <section>
      <h2>Events</h2>
      <input type="text"></input>
      {concerts.map((concert, index) => (
        <EventCard
          concert={concert}
          returnChosenConcert={props.returnChosenConcert}
          key={index}
        />
      ))}
    </section>
  );
}
