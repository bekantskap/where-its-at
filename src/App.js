import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BookedConcerts from './Pages/BookedConcerts';
import Cart from './Pages/Cart';
import ChosenEvent from './Pages/ChosenEvent';
import Events from './Pages/Events';
import Start from './Pages/Start';

function App() {
  return (
    <Router>
      <main>
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
  );
}

export default App;
