import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConcertContext } from '../App';
import Button from '../Components/Button';

export default function ChosenEvent() {
  let x = useContext(ConcertContext);
  let [numberOfTickets, setNumberOfTickets] = useState(1);

  function addTicketToCart() {
    const newCartItem = [...x.concertsToCart];
    const concert = { ...x.chosenConcert };
    concert.price = x.chosenConcert.price;
    concert.tickets = numberOfTickets;
    newCartItem.push(concert);
    x.setConcertsToCart(newCartItem);
  }

  function decreaseTickets() {
    let realPrice = x.chosenConcert.price / numberOfTickets;

    if (numberOfTickets > 1) {
      numberOfTickets--;
      x.chosenConcert.price -= realPrice;
      console.log(numberOfTickets);
      setNumberOfTickets(numberOfTickets);
    }
  }

  function increaseTickets() {
    let realPrice = x.chosenConcert.price / numberOfTickets;
    if (numberOfTickets < 10) {
      numberOfTickets++;
      x.chosenConcert.price += realPrice;
      setNumberOfTickets(numberOfTickets);
      console.log(numberOfTickets);
    }
  }

  return (
    <article className="chosen-event container">
      <section>
        <h1 className="chosen-event__title">Event</h1>
        <p>
          You are about to score
          <br /> some tickets to
        </p>
        <section className="chosen-event__info">
          <h2 className="chosen-event__artist">{x.chosenConcert.name}</h2>
          <section className="chosen-event__date">
            <p className="chosen-event__month">{x.chosenConcert.when.date}</p>
            <p>{'kl ' + x.chosenConcert.when.from}</p>
            <p>{'-' + x.chosenConcert.when.to}</p>
          </section>
          <p>{'@' + x.chosenConcert.where}</p>
        </section>

        <section className="chosen-event__tickets">
          <p className="chosen-event__price">
            {x.chosenConcert.price + ' sek'}
          </p>
          <section className="chosen-event__btns">
            <Button value="-" func={decreaseTickets} />
            <p>{numberOfTickets}</p>
            <Button value="+" func={increaseTickets} />
          </section>
        </section>
        <section className="green-btn event-btn">
          <Link to="/events">
            <Button value={'Lägg i varukorgen'} func={addTicketToCart} />
          </Link>
        </section>
      </section>
    </article>
  );
}
