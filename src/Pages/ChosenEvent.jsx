import { useContext } from 'react';
import { ConcertContext } from '../App';

export default function ChosenEvent(concert) {
  let concerts = useContext(ConcertContext);
  return (
    <article>
      <h1>Event</h1>
      <p>You are about to score some tickets to</p>
      <h2>Lasse</h2>
      <p>tid osv</p>
    </article>
  );
}
