export default function BookedConcertCard(props) {
  const c = props.concert;
  function rng() {
    return Math.floor(Math.random() * 4000);
  }

  function sectionRng() {
    let section = Math.floor(Math.random() * 5);
    switch (section) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
      case 4:
        return 'E';
      default:
    }
  }

  return (
    <article className="booked-concert__container">
      <section className="booked-concert__card">
        <section className="booked-concert__artist">
          <p>WHAT</p>
          <h2>{c.name}</h2>
        </section>
        <section className="booked-concert__venue">
          <p>WHERE</p>
          <h3>{c.where}</h3>
        </section>
        <section className="booked-concert__date">
          <section className="booked-concert__when">
            <p>WHEN</p>
            <h4>{c.when.date}</h4>
          </section>
          <section className="booked-concert__when">
            <p>FROM</p>
            <h4>{c.when.from}</h4>
          </section>
          <section className="booked-concert__when">
            <p>TO</p>
            <h4>{c.when.to}</h4>
          </section>
        </section>
        <p>INFO</p>
        <p>Tickets: {c.tickets}</p>
        <section className="booked-concert__info">
          <p>Section: {sectionRng()}</p>
          <p>Seat: {rng()}</p>
        </section>
        <section className="barcode">
          <img src="../img/barcod.jpg" alt="barcode"></img>
        </section>
      </section>
    </article>
  );
}
