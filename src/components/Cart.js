import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="cart-item">
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

export default Cart;
