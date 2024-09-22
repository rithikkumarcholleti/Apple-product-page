import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector((state) => state.product.favorites);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No items in your favorites list.</p>
      ) : (
        favorites.map((product, index) => (
          <div key={index} className="favorite-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
