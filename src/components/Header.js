import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import { Link } from 'react-router-dom'; // Import Link for navigation to cart and favorites pages
import '../styles.css';

const Header = () => {
  const cart = useSelector(state => state.product.cart); // Get cart items from Redux store
  const favorites = useSelector(state => state.product.favorites); // Get favorites items from Redux store

  return (
    <header className="header">
      <img src="/images/apple.png" alt="Apple Logo" className="logo" />

      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
        <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      <div className="icons">
        {/* Link to favorites page with count */}
        <Link to="/favorites" className="icon">
          <FontAwesomeIcon icon={faHeart} />
          <span className="badge">{favorites.length}</span>
        </Link>

        {/* Link to cart page with count */}
        <Link to="/cart" className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="badge">{cart.length}</span>
        </Link>

        {/* User icon */}
        <span className="icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </header>
  );
};

export default Header;
