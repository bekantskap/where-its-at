import { useEffect } from 'react';
import CartConcertCard from '../Components/CartConcertCard';

export default function Cart(props) {
  const c = props.concertToCart;

  function UpdatePrice() {
    useEffect();
  }
  return (
    <section>
      <h2>Order</h2>
      {c.map((concert, index) => (
        <CartConcertCard
          updatePrice={UpdatePrice}
          concert={concert}
          key={index}
        />
      ))}
      <p>Totalt värde på din order</p>
      <h3></h3>

      <input type="button" value="Skicka din order"></input>
    </section>
  );
}
