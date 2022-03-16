import { useContext } from 'react';
import { ConcertContext } from '../App';

export default function ChosenEvent(props) {
  let concerts = useContext(ConcertContext);
  console.log(props.chosenConcert.name);
  let c = props.chosenConcert;
  return (
    <article>
      <h1>Event</h1>
      <p>You are about to score some tickets to</p>
      <h2>{c.name}</h2>
      <p>{c.where}</p>
      <p>{c.price}</p>
      <p>{c.when.date}</p>
      <p>{c.when.from}</p>
      <p>{c.when.to}</p>
      <input type="button"></input>
    </article>
  );
}
