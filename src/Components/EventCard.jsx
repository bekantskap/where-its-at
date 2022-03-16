import { useContext, useState } from 'react';
import { ConcertContext } from '../App';
import { Link } from 'react-router-dom';

export default function EventCard(props) {
  let c = props.concert;

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
            props.returnChosenConcert(c);
          }}
        ></input>
      </Link>
    </article>
  );
}
