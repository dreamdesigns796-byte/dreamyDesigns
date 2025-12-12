// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "24/7 Customer Support",
      description: "Our customer support ensures prompt solutions and peace of mind for both before and after Sales.",
      highlight: "Premium Craftsmanship, Sustainable Practices, Unmatched Value. Choose Dreamy Designs For Excellence."
    },
    {
      id: 2,
      title: "Fast Shipping",
      description: "We utilize shipping partners like DHL, FedEx, UPS to ensure timely delivery of your goods.",
      highlight: "Global Shipping Network"
    },
    {
      id: 3,
      title: "Competitive Price",
      description: "Enjoy competitive pricing for high-quality products, ensuring value and affordability for our customers.",
      highlight: "Value & Affordability"
    }
  ];

  return (
    <section className="why-choose-us-section" id="why-us">
      <div className="why-choose-container">
        <div className="section-header">
          <h2 className="section-title">Why Dreamy Designs?</h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-header">
                <h3 className="feature-title">{feature.title}</h3>
              </div>
              
              <div className="feature-highlight">
                {feature.highlight}
              </div>
              
              <p className="feature-description">{feature.description}</p>
              
              <div className="feature-footer">
                <div className="feature-line"></div>
                <div className="feature-dot"></div>
                <div className="feature-line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose-footer">
          <div className="footer-decoration">
            <div className="footer-line"></div>
            <div className="footer-dot"></div>
            <div className="footer-line"></div>
          </div>
          
          <p className="footer-text">
            Experience the perfect blend of traditional craftsmanship and modern excellence.
          </p>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="why-border-top"></div>
      <div className="why-border-bottom"></div>
      <div className="why-corner top-left"></div>
      <div className="why-corner top-right"></div>
      <div className="why-corner bottom-left"></div>
      <div className="why-corner bottom-right"></div>
    </section>
  );
};

export default WhyChooseUs;