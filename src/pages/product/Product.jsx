import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../../data';
import Header from '../../components/header/Header';
import './product.css';

function Product() {
  const { id } = useParams();
  const [mah, setMah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const item = data.find(m => m.id == id);
      setMah(item);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: 'center', marginTop: "250px" }}>Loading...</h2>;
  }

  if (!mah) {
    return <h2 style={{ textAlign: 'center' }}>Product not found</h2>;
  }

  return (
    <div>
      <Header />
      <a className='aa' href="/"><i className="fa-solid fa-angle-left"></i> Back to Products</a>
      <div className="ota container">
        <img src={mah.image} alt={mah.name} />
        <div className="text">
          <h1>{mah.title}</h1>
          <button className='btn'>{mah.category}</button>
          <h2>${mah.price}</h2>
          <p>{mah.description}</p>
          <p>Count: {mah.count}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

