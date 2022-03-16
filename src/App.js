import { createContext, useEffect, useState } from 'react';
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

  const [chosenConcerts, setChosenConcerts] = useState({
    name: '',
    price: null,
    where: '',
    when: {
      date: '',
      from: '',
      to: '',
    },
  });

  const returnChosenConcert = c => {
    setChosenConcerts(name => c.name);
    console.log(chosenConcerts);
  };

  return (
    <ConcertContext.Provider value={concerts}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route
              path="/events"
              element={<Events returnChosenConcert={returnChosenConcert} />}
            ></Route>
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
