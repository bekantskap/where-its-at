import { useContext, useState } from 'react';
import { ConcertContext } from '../App';
import Button from '../Components/Button';

export default function ChosenEvent(props) {
  let concert = useContext(ConcertContext);

  // console.log(props.chosenConcert.name);
  let c = props.chosenConcert;

  // function decreaseTickets() {
  //   const newTicket = { ...numberOfTickets };
  //   if (numberOfTickets.tickets > 1) {
  //     newTicket.tickets--;
  //     newTicket.price -= c.price;
  //     setNumberOfTickets(newTicket);
  //   }
  // }
  // function increaseTickets() {
  //   const newTicket = { ...numberOfTickets };
  //   console.log(numberOfTickets.tickets);
  //   if (numberOfTickets.tickets < 10) {
  //     newTicket.tickets++;
  //     newTicket.price += c.price;
  //     setNumberOfTickets(newTicket);
  //   }
  // }

  return (
    <article>
      <h1>Event</h1>
      <p>You are about to score some tickets to</p>
      <h2>{c.name}</h2>
      <p>{c.when.date}</p>
      <p>{c.when.from}</p>
      <p>{c.when.to}</p>
      <p>{'@' + c.where}</p>

      {/* <p>{numberOfTickets.price}</p>
      <Button value="-" func={decreaseTickets} />
      <p>{numberOfTickets.tickets}</p>
      <Button value="+" func={increaseTickets} /> */}

      <input
        type="button"
        value="Lägg i varukorgen"
        // onClick={() => {
        //   props.returnTicketPrice(numberOfTickets);
        // }}
      ></input>
    </article>
  );
}
