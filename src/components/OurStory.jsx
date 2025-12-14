// src/components/OurStory.jsx - Alternative using Link
import React from 'react';
import { Link } from 'react-router-dom';
import './OurStory.css';
import image1 from '../assets/images/homeAbout.png';

const OurStory = () => {
  return (
    <section className="our-story-section" id="story">
      <div className="story-container">
        <div className="story-content">
          <h2 className="section-title">OUR STORY</h2>
          <h3 className="story-heading">
            Where Sustainability Meets Artistry
          </h3>
          
          <div className="story-text">
            <p>
              Welcome to Dreamy Designs — a place where old traditions meet
              quality craftsmanship. Founded in 2016, we began our journey by
              serving the Indian market before expanding successfully into
              international exports.
            </p>
            
            <p>
              Based in Sambhal, Uttar Pradesh, India, we are a major exporter of
              high-quality horn and bone handicrafts. Our work reflects a deep
              respect for traditional skills, cultural heritage, and responsible
              use of natural resources.
            </p>
            
            <p>
              Every creation tells a meaningful story — of skilled artisans
              using techniques passed down through generations, of ethical
              sourcing and sustainable practices, and of transforming raw
              materials into objects of beauty and everyday use.
            </p>
          </div>
          
          <Link to="/about" className="read-more-btn">
            READ MORE
            <span className="btn-arrow">→</span>
          </Link>
        </div>
        
        <div className="story-image-container">
          <div className="image-wrapper">
            <img
              src={image1}
              alt="Handcrafted horn and bone craftsmanship"
              className="story-image"
            />
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
