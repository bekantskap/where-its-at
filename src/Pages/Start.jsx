import Footer from '../Components/Footer';

export default function Start() {
  return (
    <article className="start container">
      <section>
        <section className="start-page">
          <img className="start-img" src="../img/logo.png" alt="partaaay"></img>
          <section className="start-text">
            <h2>Where It's @</h2>
            <p>Ticketing made easy</p>
          </section>
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </article>
  );
}
