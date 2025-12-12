// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* image is already a processed URL from Vite */}
        <img 
          src={image} 
          alt={title} 
          className="product-image"
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <button className="details-btn">
          View Products
        </button>
      </div>
    </div>
  );
};

export default ProductCard;