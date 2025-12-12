// src/components/FAQSection.jsx
import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Are your horn and bone products sustainable?",
      answer: "Absolutely! Dreamy Designs is committed to sustainability, using natural by-products and eco-friendly materials in our crafting process. We source materials ethically and ensure minimal environmental impact throughout our production."
    },
    {
      id: 2,
      question: "What is the shipping time for international orders?",
      answer: "We utilize global shipping partners like DHL, FedEx, and UPS. International orders typically take 7-14 business days for delivery. You'll receive tracking information as soon as your order ships."
    },
    {
      id: 3,
      question: "Can I customize my order?",
      answer: "Yes! We offer customization options for many of our products. From personal engravings to bespoke designs, our artisans can create unique pieces tailored to your preferences. Contact our design team for custom orders."
    },
    {
      id: 4,
      question: "How do I care for my horn and bone products?",
      answer: "Use a soft, dry cloth for regular cleaning. Avoid exposure to extreme temperatures, direct sunlight, and harsh chemicals. For deeper cleaning, use a damp cloth with mild soap. Apply natural oil occasionally to maintain luster."
    },
    {
      id: 5,
      question: "What makes your craftsmanship unique?",
      answer: "Our artisans use centuries-old techniques passed down through generations. Each piece is handcrafted with attention to detail, combining traditional methods with contemporary design sensibilities."
    },
    {
      id: 6,
      question: "Do you offer wholesale pricing?",
      answer: "Yes, we offer competitive wholesale pricing for retailers and businesses. Contact our sales team for wholesale inquiries and customized bulk order options."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find answers to common questions about our products, services, and policies.
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {faqs.slice(0, 3).map((faq, index) => (
              <div 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                key={faq.id}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="toggle-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-column">
            {faqs.slice(3).map((faq, index) => (
              <div 
                className={`faq-item ${activeIndex === index + 3 ? 'active' : ''}`} 
                key={faq.id}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index + 3)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="toggle-icon">
                    {activeIndex === index + 3 ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-footer">
          <div className="footer-decoration">
            <div className="footer-line"></div>
            <div className="footer-dot"></div>
            <div className="footer-line"></div>
          </div>
          
          <p className="footer-text">
            Still have questions? <a href="#contact" className="contact-link">Contact our team</a> for personalized assistance.
          </p>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="faq-border-top"></div>
      <div className="faq-border-bottom"></div>
      <div className="faq-corner top-left"></div>
      <div className="faq-corner top-right"></div>
      <div className="faq-corner bottom-left"></div>
      <div className="faq-corner bottom-right"></div>
    </section>
  );
};

export default FAQSection;