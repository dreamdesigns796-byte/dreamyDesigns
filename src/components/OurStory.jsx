// src/components/OurStory.jsx - Alternative using Link
import React from 'react';
import { Link } from 'react-router-dom';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story-section" id="story">
      <div className="story-container">
        <div className="story-content">
          <h2 className="section-title">OUR STORY</h2>
          <h3 className="story-heading">
            Sustainable Horn & Bone Handicrafts
          </h3>
          
          <div className="story-text">
            <p>
              Welcome to Dreamy Designs – where tradition meets craftsmanship, 
              and sustainability blends with artistry. We are a unit under 
              Al-Masha International, a leading exporter of premium materials 
              based in Mumbai, the heart of India.
            </p>
            
            <p>
              At Dreamy Designs, we've embarked on a journey that transforms 
              by-products of our material production into exquisite handicrafts. 
              Our story is one of innovation, cultural appreciation, and a 
              commitment to sustainability.
            </p>
            
            <p>
              Each piece in our collection tells a story – a story of skilled 
              artisans preserving centuries-old techniques, a story of ethical 
              sourcing and sustainable practices, and a story of transforming 
              raw materials into objects of beauty and utility.
            </p>
          </div>
          
          <Link to="/about" className="read-more-btn">
            READ MORE
            <span className="btn-arrow">→</span>
          </Link>
        </div>
        
        <div className="story-image-container">
          <div className="image-wrapper">
            <img src="src/assets/images/homeAbout.png" alt="Handicraft craftsmanship" className="story-image" />
          </div>
          
          <div className="image-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="story-border-top"></div>
      <div className="story-border-bottom"></div>
      <div className="story-corner top-left"></div>
      <div className="story-corner top-right"></div>
      <div className="story-corner bottom-left"></div>
      <div className="story-corner bottom-right"></div>
    </section>
  );
};

export default OurStory;