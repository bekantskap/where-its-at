import { useContext } from 'react';
import { ConcertContext } from '../App';
import BookedConcertCard from '../Components/BookedConcertCard';

export default function BookedConcerts() {
  const x = useContext(ConcertContext);

  return (
    <section className="booked-concert">
      {x.concertsToCart.map((concert, index) => (
        <BookedConcertCard concert={concert} key={index} />
      ))}
    </section>
  );
}
