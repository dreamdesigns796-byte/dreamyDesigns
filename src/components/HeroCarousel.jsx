// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

// Assume carousel images are available (you will replace these paths)
import carouselImage1 from '../assets/images/homeCarole/homecrosl1.png';
import carouselImage2 from '../assets/images/homeCarole/horn-mug.png';
import carouselImage3 from '../assets/images/homeCarole/homecrosl.png';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: carouselImage1,
      title: 'Timeless Creations,',
      subtitle: 'Handcrafted with Soul',
      linkText: 'EXPLORE DESIGNS',
      linkUrl: '#products-section'
    },
    {
      id: 2,
      image: carouselImage2,
      title: 'Discover the Art of Bone Inlay',
      subtitle: 'Exquisite Craftsmanship from India',
      linkText: 'VIEW BONE INLAY',
      linkUrl: '/products/bone-inlay'
    },
    {
      id: 3,
      image: carouselImage3,
      title: 'Ethically Sourced Horn Products',
      subtitle: 'Sustainable, Unique, and Hand-Polished',
      linkText: 'BROWSE CATEGORIES',
      linkUrl: '/products'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 2000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-carousel-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-overlay">
            <div className="carousel-content">
              <h2 className="carousel-title">
                <span className="hero-line">{slide.title}</span>
                <span className="hero-line">{slide.subtitle}</span>
              </h2>
              <a href={slide.linkUrl} className="explore-btn">
                {slide.linkText}
              </a>
            </div>

            {/* Decorative element from the old Hero section, kept for style */}
            <div className="hero-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
        &#10095;
      </button>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
      
      {/* Border elements (Replicating the original hero look) */}
      <div className="hero-border-top"></div>
      <div className="hero-border-right"></div>
      <div className="hero-border-bottom"></div>
      <div className="hero-border-left"></div>
      
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>

    </section>
  );
};

export default HeroCarousel;