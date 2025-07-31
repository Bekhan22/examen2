import { Link } from 'react-router-dom';
import data from '../../data';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import './home.css';

function Home() {
  return (
    <div>
      <Header />

      <section className="container hero">
        {data.map((m, i) => (
          <Link to={`/product/${m.id}`} state={m} key={i}>
            <Card mah={m} />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
