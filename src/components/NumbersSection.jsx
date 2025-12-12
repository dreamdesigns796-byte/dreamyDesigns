// src/components/NumbersSection.jsx
import React from 'react';
import './NumbersSection.css';

const NumbersSection = () => {
  const stats = [
    {
      id: 1,
      number: "500+",
      title: "Products",
      description: "Unique handcrafted designs"
    },
    {
      id: 2,
      number: "150",
      title: "Serving Countries",
      description: "Global reach and impact"
    },
    {
      id: 3,
      number: "30+",
      title: "Year Experience",
      description: "Craftsmanship heritage"
    },
    {
      id: 4,
      number: "100%",
      title: "Eco-Friendly",
      description: "Sustainable practices"
    }
  ];

  return (
    <section className="numbers-section" id="numbers">
      <div className="numbers-container">
        <div className="numbers-header">
          <h2 className="numbers-title">Numbers Speak</h2>
          <p className="numbers-subtitle">
            Our Numbers Tell The Story Of Our Excellence, Dedication, 
            And Commitment To Quality.
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-number">
                {stat.number}
                <div className="number-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dot"></div>
                </div>
              </div>
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="numbers-decoration">
          <div className="long-line"></div>
          <div className="small-dot"></div>
          <div className="long-line"></div>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="numbers-border-top"></div>
      <div className="numbers-border-bottom"></div>
      <div className="numbers-corner top-left"></div>
      <div className="numbers-corner top-right"></div>
      <div className="numbers-corner bottom-left"></div>
      <div className="numbers-corner bottom-right"></div>
    </section>
  );
};

export default NumbersSection;