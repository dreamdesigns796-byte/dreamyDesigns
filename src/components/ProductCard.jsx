// src/components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, image, path }) => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate(path);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title} 
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <button
          className="details-btn"
          onClick={handleViewProducts}
        >
          View Products
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
