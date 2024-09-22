import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import Redux hooks
import { addToCart, addToFavorites } from '../slices/productSlice'; // Import actions
import productData from '../data/productData.json';
import '../styles.css';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState("/images/iphone15.jpg");
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [selectedSize, setSelectedSize] = useState(null); // New state for selected size

  const dispatch = useDispatch(); // Use dispatch to trigger actions in Redux

  const handleMouseMove = (e) => {
    const imageElement = e.target;
    const { left, top, width, height } = imageElement.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  const product = productData.product; // Accessing product data directly

  // Handle adding the product to the cart using Redux
  const handleAddToCart = () => {
    const productToCart = {
      ...product,
      size: selectedSize // Add the selected size
    };
    dispatch(addToCart(productToCart));
  };

  // Handle adding the product to favorites using Redux
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <div
          className="main-image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={selectedImage} alt={product.name} className="product-main-img" />
          <div className="zoom-image" style={{ backgroundImage: `url(${selectedImage})`, ...zoomStyle }}></div>
        </div>
        <div className="small-images">
          {['/images/iphone15.jpg', '/images/iphone15back.jpg', '/images/iphone15camera.jpg', '/images/iphone15colors.jpg', '/images/iphone15charger.jpg'].map((img, index) => (
            <img key={index} src={img} alt={`iPhone 15 ${index}`} onClick={() => setSelectedImage(img)} />
          ))}
        </div>
      </div>

      <div className="product-details">
        <h1>{product.name}</h1>
        <div className="ratings">
          <span>{product.ratings} ({product.ratingsCount})</span>
          <div className="star-rating">
            <span className="filled">★</span>
            <span className="filled">★</span>
            <span className="filled">★</span>
            <span className="filled">★</span>
            <span className="half">★</span>
          </div>
        </div>
        <h2>
          <span className="price">{product.price}</span>
        </h2>
        <h3>Availability: {product.availability}</h3>

        <h2>Offers:</h2>
        <ul>
          {product.offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>

        <h2>Features:</h2>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h2>About this item:</h2>
        <p>{product.description}</p>

        <h2>Colors:</h2>
        <div className="color-options">
          {product.colors.map((color, index) => (
            <button key={index} className="color-btn">{color}</button>
          ))}
        </div>

        <h2>Size:</h2>
        <div className="size-options">
          {['128GB', '256GB', '512GB'].map((size, index) => (
            <button 
              key={index} 
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`} 
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Buttons for adding to favorites and cart */}
        <div className="buttons">
          <button className="favorite-btn" onClick={handleAddToFavorites}>
            Add to Favorites
          </button>
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

        <h2>Reviews:</h2>
        {product.reviews.map((review, index) => (
          <div key={index}>
            <strong>{review.user}:</strong> {review.comment} ({review.rating} stars)
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
