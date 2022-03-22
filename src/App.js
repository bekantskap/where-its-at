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

  const [concertsToCart, setConcertsToCart] = useState([]);

  const [totalSum, setTotalSum] = useState();

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
    }),
    [concerts, chosenConcert, concertsToCart, totalSum]
  );

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
      </Router>
    </ConcertContext.Provider>
  );
}

export default App;
