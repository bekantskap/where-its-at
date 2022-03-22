import { useContext, useState } from 'react';
import EventCard from '../Components/EventCard';
import { ConcertContext } from '../App';
import Footer from '../Components/Footer';

export default function Events(props) {
  let c = useContext(ConcertContext);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = c.concerts.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(c.concerts);
    }
  };

  return (
    <section className="container">
      <div>
        <h2 className="event-header">Events</h2>
        <input
          className="event-search"
          icon="search"
          placeholder="Sök..."
          onChange={e => searchItems(e.target.value)}
        ></input>
        {searchInput.length > 1
          ? filteredResults.map((concert, index) => {
              return <EventCard concert={concert} key={index} />;
            })
          : c.concerts.map((concert, index) => (
              <EventCard concert={concert} key={index} />
            ))}
        <Footer />
      </div>
    </section>
  );
}
