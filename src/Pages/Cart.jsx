import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConcertContext } from '../App';
import Button from '../Components/Button';
import CartConcertCard from '../Components/CartConcertCard';

export default function Cart() {
  const x = useContext(ConcertContext);

  function returnConcerts() {
    const total = x.concertsToCart.reduce(
      (total, curr) => (total = total + curr.price),
      0
    );
    x.totalSum = total;
    x.setTotalSum(total);
    console.log(x.concertsToCart);
  }

  return (
    <section className="cart container">
      <section>
        <h2 className="cart-title">Order</h2>
        {x.concertsToCart.map((concert, index) => (
          <CartConcertCard
            returnConcerts={returnConcerts}
            concert={concert}
            key={index}
          />
        ))}
        <section>
          <p>Totalt värde på din order</p>
          <h3 className="cart-totalSum">
            {x.totalSum ? x.totalSum + ' sek' : 'Här var det tomt'}
          </h3>
        </section>
        <section className="green-btn cart-btn">
          <Link to="/bookedconcerts">
            <Button
              value={x.totalSum ? 'Skicka order' : 'Inget i kundkorgen'}
            />
          </Link>
        </section>
      </section>
    </section>
  );
}
