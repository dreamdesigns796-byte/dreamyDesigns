// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const categories = [
    { name: "Viking Horns", href: "/products/viking-horns" },
    { name: "Horn Buttons", href: "/products/horn-buttons" },
    { name: "Horn Plates", href: "/products/horn-plates" },
    { name: "Horn Eyeglasses", href: "/products/horn-eyeglasses" },
    { name: "Horn Combs", href: "/products/horn-combs" },
    { name: "Horn Jewelry", href: "/products/horn-jewelry" },
    { name: "Horn Cutlery", href: "/products/horn-cutlery" },
    { name: "Bone Inlay", href: "/products/bone-inlay" }
  ];

  const companyLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Products", href: "/products" },
    { text: "Request Quote", href: "/quote" },
    { text: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Sitemap", href: "/sitemap" }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-column brand-column">
            <div className="brand-info">
              <h3 className="brand-title">DREAMY DESIGNS</h3>
              <p className="brand-tagline">Premium Horn Handicrafts</p>
            </div>
            
            <div className="contact-section">
              <h4 className="contact-title">Contact Information</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-text">+91-702193008</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-text">sales@dreamdesigns.com</span>
                  </div>
                </div>
                <div className="contact-item address">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <span className="contact-label">Address</span>
                    <span className="contact-text">
                      40/1 Building, Hanjer Nagar,<br />
                      Andheri East, Mumbai,<br />
                      Maharashtra, India 400093
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links Column */}
          <div className="footer-column">
            <h4 className="column-title">Quick Links</h4>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    <span className="link-arrow">→</span>
                    <span className="link-text">{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="footer-column">
            <h4 className="column-title">Product Categories</h4>
            <ul className="footer-links">
              {categories.map((category, index) => (
                <li key={index} className="footer-link-item">
                  <a href={category.href} className="footer-link">
                    <span className="link-arrow">→</span>
                    <span className="link-text">{category.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="copyright-section">
          <div className="copyright-content">
            <div className="copyright-info">
              <p className="copyright-text">
                Copyright © 2025 Dreamy Designs | AL-MASHA INTERNATIONAL All Rights Reserved
              </p>
              <div className="product-link">
                <a 
                  href="https://dreamdesigns.com/products-category" 
                  className="external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dreamdesigns.com/products-category
                </a>
              </div>
            </div>
            
            <div className="copyright-links">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a href={link.href} className="copyright-link">{link.text}</a>
                  {index < legalLinks.length - 1 && <span className="link-divider">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative border elements */}
        <div className="footer-border-top"></div>
        <div className="footer-border-bottom"></div>
        <div className="footer-corner top-left"></div>
        <div className="footer-corner top-right"></div>
        <div className="footer-corner bottom-left"></div>
        <div className="footer-corner bottom-right"></div>
      </div>
    </footer>
  );
};

export default Footer;