// src/components/FeaturedProducts.jsx
import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Genuine Corozo Buttons – Natural Dark Brown Color – Ethically Sourced",
      description: "Classic Design with a Sustainable Edge – Available in 4 Sizes",
      category: "Classic Button Collection",
      image: "src/assets/images/featureProductHome/image3.png",
      link: "#"
    },
    {
      id: 2,
      title: "Genuine Buffalo Horn Buttons – Polished Black Finish – Premium Quality",
      description: "Elegant and Durable for Fine Tailoring",
      category: "Luxury Button Series",
      image: "src/assets/images/featureProductHome/image2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Genuine Mother of Pearl Buttons – Iridescent White – Hand-Carved",
      description: "A Timeless Touch of Shine",
      category: "Signature Trims",
      image: "src/assets/images/featureProductHome/image1.png",
      link: "#"
    }
  ];

  // Note: I'm using the first product from the list for the main feature area
  const mainProduct = featuredProducts[0];

  return (
    <section className="featured-products-section" id="featured">
      <div className="featured-container">
        <div className="section-header">
          <h2 className="section-title">Featured Buttons & Trims</h2>
          <p className="section-subtitle">
            Discover our finest collection of natural and handcrafted luxury buttons
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="featured-main-product">
          <div className="main-product-content">
            <span className="product-category">Genuine Horn Buttons</span>
            <h3 className="product-title">
              Polished Buffalo Horn Blazer Buttons – Available In 3 Finishes
            </h3>
            <p className="product-description">
              The Ultimate Touch of Quality for Your Tailored Garments
            </p>
            <a href="#" className="read-more-link">
              Explore Our Horn
              <span className="link-arrow">→</span>
            </a>
          </div>
          
          <div className="main-product-image">
            <img src="src/assets/images/featureProductHome/image3.png" alt="Buffalo Horn Buttons" className="product-image" />
          </div>
        </div>

        <div className="featured-grid">
          {featuredProducts.slice(1).map((product) => (
            <div className="featured-product-card" key={product.id}>
              <div className="product-card-content">
                <span className="product-card-category">{product.category}</span>
                <h4 className="product-card-title">{product.title}</h4>
                <p className="product-card-description">{product.description}</p>
                <a href={product.link} className="product-card-link">
                  View Details
                  <span className="card-arrow">→</span>
                </a>
              </div>
              
              <div className="product-card-image">
                <img src={product.image} alt={product.title} className="card-image" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="#products" className="view-all-btn">
            VIEW ALL PRODUCTS
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="featured-border-top"></div>
      <div className="featured-border-bottom"></div>
      <div className="featured-corner top-left"></div>
      <div className="featured-corner top-right"></div>
      <div className="featured-corner bottom-left"></div>
      <div className="featured-corner bottom-right"></div>
    </section>
  );
};

export default FeaturedProducts;