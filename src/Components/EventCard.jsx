import { useContext, useState } from 'react';
import { ConcertContext } from '../App';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function EventCard(props) {
  const x = useContext(ConcertContext);

  let c = props.concert;

  function catchConcert() {
    x.chosenConcert.name = c.name;
    x.chosenConcert.price = c.price;
    x.chosenConcert.where = c.where;
    x.chosenConcert.when.date = c.when.date;
    x.chosenConcert.when.from = c.when.from;
    x.chosenConcert.when.to = c.when.to;

    x.setChosenConcert(x.chosenConcert);
  }

  return (
    <article className="event-card">
      <section className="event-card__date">
        <p>{c.when.date}</p>
      </section>
      <section className="event-card__info">
        <h2>{c.name}</h2>
        <p>{c.where}</p>
        <section className="event-card__bottom-info">
          <section className="event-card__time">
            <p>{c.when.from}</p>
            <p>-</p>
            <p>{c.when.to}</p>
          </section>
          <section className="event-card__price">
            <Link to="/chosenevent" className="btn-price">
              <input
                className="event-card__btn"
                type="button"
                value={c.price + ' sek'}
                onClick={catchConcert}
              ></input>
            </Link>
          </section>
        </section>
        <div className="event-card__line"></div>
      </section>
    </article>
  );
}
