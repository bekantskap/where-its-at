import { useContext, useEffect, useState } from 'react';
import { ConcertContext } from '../App';
import Button from './Button';

export default function CartConcertCard(props) {
  const c = props.concert;
  const x = useContext(ConcertContext);
  let [numberOfTickets, setNumberOfTickets] = useState(c.tickets);

  function increaseTickets() {
    let realPrice = c.price / numberOfTickets;
    if (numberOfTickets < 10) {
      numberOfTickets++;
      c.price += realPrice;
      updateTickets();
    }
  }
  function decreaseTickets() {
    let realPrice = c.price / numberOfTickets;
    if (numberOfTickets > 1) {
      numberOfTickets--;
      c.price -= realPrice;
      updateTickets();
    }
  }

  function updateTickets() {
    setNumberOfTickets(numberOfTickets);
    c.tickets = numberOfTickets;
    props.returnConcerts(c);
  }

  useEffect(() => {
    const total = x.concertsToCart.reduce(
      (total, curr) => (total = total + curr.price),
      0
    );
    x.totalSum = total;
    x.setTotalSum(total);
  }, [x]);

  return (
    <article>
      <section className="cart-card">
        <section className="cart-card__box">
          <section className="cart-card__info">
            <h1 className="cart-card__artist">{c.name}</h1>
            <section className="cart-card__dates">
              <p>{c.when.date}</p>
              <p>{'kl  ' + c.when.from}</p>
              <p>{'-' + c.when.to}</p>
            </section>
          </section>
        </section>
        <section className="cart-card__ticketBtns">
          <Button value={'-'} func={decreaseTickets} />
          <p>{numberOfTickets}</p>
          <Button value={'+'} func={increaseTickets} />
        </section>
      </section>
    </article>
  );
}
