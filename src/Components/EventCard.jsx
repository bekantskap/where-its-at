import { useContext, useState } from 'react';
import { ConcertContext } from '../App';
import { Link } from 'react-router-dom';

export default function EventCard(props) {
  const x = useContext(ConcertContext);

  let c = props.concert;

  function catchConcert() {
    console.log(c);
    const newConcert = [...x.chosenConcerts];
    newConcert.name = c.name;
    newConcert.price = c.price;
    newConcert.where = c.where;
    newConcert.when.date = c.when.date;
    newConcert.when.from = c.when.from;
    newConcert.when.to = c.when.to;
    // x.setChosenConcerts(x.chosenConcerts, [...x.chosenConcerts, newConcert]);
    this.x.setChosenConcert({ name: c.name, price: c.price, where: c.where, { ...this.state.when, to: c.to} });
  }

  return (
    <article>
      <h1>Concerts</h1>
      <p>{c.when.date}</p>
      <h2>{c.name}</h2>
      <p>{c.where}</p>
      <Link to="/chosenevent" className="btn-price">
        <input
          type="button"
          value={c.price + ' sek'}
          onClick={() => {
            catchConcert();
          }}
        ></input>
      </Link>
    </article>
  );
}
