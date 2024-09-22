import React from 'react';
import productData from '../data/productData.json';

const RelatedProducts = () => {
  const relatedProducts = productData.relatedProducts;

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="carousel">
        {relatedProducts.map((product, index) => (
          <div key={index} className="related-product">
            <img src={product.image} alt={product.description} />
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
