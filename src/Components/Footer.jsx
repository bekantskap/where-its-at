import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="navbar">
        <ul>
          <Link to="/events">
            <li></li>
          </Link>
          <Link to="/cart">
            <li></li>
          </Link>
          <Link to="/bookedconcerts">
            <li></li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}
