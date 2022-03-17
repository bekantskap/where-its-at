import { useContext } from 'react';
import { ConcertContext } from '../App';
import Button from './Button';

export default function CartConcertCard(props) {
  const c = props.concert;
  let concerts = useContext(ConcertContext);

  function increaseTickets() {
    let realPrice = c.price / c.tickets;
    if (c.tickets < 10) {
      c.tickets++;
      c.price += realPrice;
      console.log(c.tickets);
      console.log(c.price);
    }
  }
  function decreaseTickets() {
    let realPrice = c.price / c.tickets;
    if (c.tickets > 1) {
      c.tickets--;
      c.price -= realPrice;
      console.log(c.tickets);
      console.log(c.price);
    }
  }
  return (
    <article>
      <section>
        <h1>{c.name}</h1>
        {/* <p>{c.when.date}</p>
        <p>{c.when.from}</p>
        <p>{c.when.to}</p> */}
        <Button value={'-'} func={decreaseTickets} />
        <h4>{c.tickets}</h4>
        <Button value={'+'} func={increaseTickets} />
      </section>
    </article>
  );
}
