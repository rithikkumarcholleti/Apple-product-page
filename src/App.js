import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';
import Cart from './components/Cart'; // Assuming you have this component created
import Favorites from './components/Favorites'; // Assuming you have this component created
import productData from './data/productData.json'; // Import your product data
import './styles.css';

const App = () => {
  const product = productData.product; // Access the product data

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Default route for the product page */}
          <Route path="/" element={<ProductPage product={product} />} />

          {/* Route for the Cart page */}
          <Route path="/cart" element={<Cart />} />

          {/* Route for the Favorites page */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        {/* Include related products and footer in all pages */}
        <RelatedProducts />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
