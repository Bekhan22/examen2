import './card.css';

function Card({ mah }) {
  return (

    <div>
      <div className="cards">
        <div className="card">
          <img src={mah.image} alt={mah.name} />

          <h2>{mah.title}</h2>
          <button className='btn'>{mah.category}</button>
          <h2>Price: ${mah.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;

