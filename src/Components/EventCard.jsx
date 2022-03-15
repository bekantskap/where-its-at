import { useContext } from 'react';
import { ConcertContext } from '../Pages/Events';
import ChosenEvent from '../Pages/ChosenEvent';
import { Link } from 'react-router-dom';

export default function EventCard(props) {
  let events = useContext(ConcertContext);
  let concert = events.find(c => c.name === props.concert);

  function bookEventForward() {
    console.log(concert.name);
  }

  return (
    <article>
      <h1>Concerts</h1>
      <p>{concert.when.date}</p>
      <h2>{concert.name}</h2>
      <p>{concert.where}</p>
      <Link to="/chosenevent" className="btn-price" state={concert.name}>
        {concert.price + ' sek'}
      </Link>
      {/* <input
        type="button"
        value={concert.price + ' sek'}
        onClick={bookEventForward}
      ></input> */}
    </article>
  );
}
