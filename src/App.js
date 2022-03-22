import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BookedConcerts from './Pages/BookedConcerts';
import Cart from './Pages/Cart';
import ChosenEvent from './Pages/ChosenEvent';
import Events from './Pages/Events';
import Start from './Pages/Start';

export const ConcertContext = createContext();

function App() {
  let [concerts, setConcerts] = useState([]);

  const url = 'https://my-json-server.typicode.com/majazocom/events/events';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setConcerts(data));
  }, []);

  const [chosenConcert, setChosenConcert] = useState({
    name: '',
    price: null,
    where: '',
    when: {
      date: '',
      from: '',
      to: '',
    },
  });

  const [concertsToCart, setConcertsToCart] = useState([
    // {
    //   name: '',
    //   price: null,
    //   tickets: null,
    //   where: '',
    //   when: {
    //     date: '',
    //     from: '',
    //     to: '',
    //   },
    // },
  ]);

  const [totalSum, setTotalSum] = useState();

  const [concertTickets, setConcertTickets] = useState([]);

  const providerValue = React.useMemo(
    () => ({
      concerts,
      setConcerts,
      chosenConcert,
      setChosenConcert,
      concertsToCart,
      setConcertsToCart,
      totalSum,
      setTotalSum,
      concertTickets,
      setConcertTickets,
    }),
    [concerts, chosenConcert, concertsToCart, totalSum, concertTickets]
  );

  // const returnChosenConcert = c => {
  //   const newConcert = { ...chosenConcerts };
  //   newConcert.name = c.name;
  //   newConcert.price = c.price;
  //   newConcert.where = c.where;
  //   newConcert.when.date = c.when.date;
  //   newConcert.when.from = c.when.from;
  //   newConcert.when.to = c.when.to;
  //   setChosenConcerts(newConcert);
  // };

  // const returnTicketPrice = t => {
  //   const newConcert = [...concertToCart];
  //   newConcert.name = chosenConcerts.name;
  //   newConcert.price = t.price;
  //   newConcert.tickets = t.tickets;
  //   // newConcert.where = chosenConcerts.where;
  //   // newConcert.when.date = chosenConcerts.when.date;
  //   // newConcert.from = chosenConcerts.when.from;
  //   newConcert.to = chosenConcerts.when.to;
  //   setConcertToCart(concertToCart => [...concertToCart, newConcert]);
  //   console.log(concertToCart);
  // };

  return (
    <ConcertContext.Provider value={providerValue}>
      <Router>
        <main className="App">
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/chosenevent" element={<ChosenEvent />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/bookedconcerts" element={<BookedConcerts />}></Route>
          </Routes>
        </main>

        <footer>
          <nav>
            <ul>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/bookedconcerts">Booked Concerts</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </Router>
    </ConcertContext.Provider>
  );
}

export default App;
