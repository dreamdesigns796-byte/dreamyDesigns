// src/components/IndiaHeritage.jsx
import React from 'react';
import './IndiaHeritage.css';

const IndiaHeritage = () => {
  const heritagePoints = [
    {
      id: 1,
      title: "Cultural Heritage",
      description: "Centuries-old Tradition"
    },
    {
      id: 2,
      title: "Handcrafted Excellence",
      description: "Global Recognition"
    },
    {
      id: 3,
      title: "Natural Materials",
      description: "Sustainable Tradition"
    },
    {
      id: 4,
      title: "Artisan Livelihoods",
      description: "5M+ Artisans Supported"
    },
    {
      id: 5,
      title: "Thriving Exports",
      description: "$100M+ Annual Exports"
    }
  ];

  return (
    <section className="india-heritage-section" id="heritage">
      <div className="heritage-container">
        <div className="heritage-header">
          <div className="country-badge">
            <span className="country-flag">🇮🇳</span>
            <span className="country-name">INDIA</span>
          </div>
          <h2 className="heritage-title">
            India's Horn & Bone Handicraft Heritage
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="heritage-content">
          <div className="heritage-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              India, The Land Of Exquisite Handmade Crafts And Sustainable Traditions.
            </p>
            <div className="quote-author">— Traditional Artisan Proverb</div>
          </div>

          <div className="heritage-description">
            <p>
              India's horn and bone handicraft heritage blends tradition with 
              artistry, offering unique designs and sustainable practices. These 
              treasures provide livelihoods for artisans, enrich communities, and 
              captivate global audiences with their timeless beauty.
            </p>
            
            <div className="heritage-stats">
              <div className="stat-item">
                <div className="stat-number">5M+</div>
                <div className="stat-label">Artisans Supported</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">$100M+</div>
                <div className="stat-label">Annual Exports</div>
              </div>
            </div>
          </div>
        </div>

        <div className="heritage-grid">
          {heritagePoints.map((point) => (
            <div className="heritage-point" key={point.id}>
              <div className="point-icon">
                <div className="icon-circle">
                  <span className="icon">✦</span>
                </div>
              </div>
              <div className="point-content">
                <h4 className="point-title">{point.title}</h4>
                <p className="point-description">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="heritage-footer">
          <div className="heritage-line"></div>
          <div className="heritage-dot"></div>
          <div className="heritage-line"></div>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="heritage-border-top"></div>
      <div className="heritage-border-bottom"></div>
      <div className="heritage-corner top-left"></div>
      <div className="heritage-corner top-right"></div>
      <div className="heritage-corner bottom-left"></div>
      <div className="heritage-corner bottom-right"></div>
    </section>
  );
};

export default IndiaHeritage;