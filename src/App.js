import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Events from "./pages/Events";
import Start from "./pages/Start";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </main>

      <footer>
        <nav>
          <Link to="/">Start</Link>
          <Link to="/events">Events</Link>
          <Link to="/receipt">Receipt</Link>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
