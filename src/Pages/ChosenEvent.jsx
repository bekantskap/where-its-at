import { useContext } from 'react';
import { ConcertContext } from './Events';

export default function ChosenEvent(state) {
  let events = useContext(ConcertContext);
  console.log(state);
  return (
    <article>
      <h1>Event</h1>
      <p>You are about to score some tickets to</p>
      <h2>Lasse</h2>
      <p>tid osv</p>
    </article>
  );
}
