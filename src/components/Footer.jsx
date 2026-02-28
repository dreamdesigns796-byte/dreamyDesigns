// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import logoImage from "../assets/icon/logo.png";

const Footer = () => {
  const productCategories = [
    {
      category: "Horn Products",
      items: [
        { name: "Horn Buttons", href: "/products/horn-buttons" },
        { name: "Horn Mugs", href: "/products/horn-mugs" },
        { name: "Viking Horns", href: "/products/viking-horns" },
        { name: "Horn Plates", href: "/products/horn-plates" },
        { name: "Horn Combs", href: "/products/horn-combs" },
        { name: "Horn Jewelry", href: "/products/horn-jewelry" },
        { name: "Horn Cutlery", href: "/products/horn-cutlery" },
      ],
    },
    {
      category: "Handicraft Items",
      items: [
        { name: "Horn Jewelry", href: "/products/horn-jewelry" },
        { name: "Horn Frames", href: "/products/horn-frames" },
        { name: "Cutlery", href: "/products/cutlery" },
      ],
    },
    {
      category: "Hardware Items",
      items: [
        { name: "Handles", href: "/products/handles" },
        { name: "Knobs", href: "/products/knobs" },
      ],
    },
  ];

  const companyLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    // { text: "Products", href: "/products" },
    { text: "Request Quote", href: "/quote" },
    { text: "Contact", href: "/contact" },
  ];

  // const legalLinks = [
  //   { text: "Privacy Policy", href: "/privacy" },
  //   { text: "Terms of Service", href: "/terms" },
  //   { text: "Sitemap", href: "/sitemap" },
  // ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Decorative top border */}
        <div className="border-decoration top-border">
          <div className="border-line"></div>
          <div className="corner left"></div>
          <div className="corner right"></div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-column brand-column">
            <div className="contact-section">
              <h4 className="contact-title">Contact Information</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-text">
                      +91-9528271574,+91-8800948459
                    </span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-text">
                      info@dreamydesignss.com
                    </span>
                  </div>
                </div>
                <div className="contact-item address">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <span className="contact-label">Address</span>
                    <span className="contact-text">
                      48, Abbas colony,Peela khadana,
                      <br />
                      Saraitareen,Sambhal
                      <br />
                      Uttar Pradesh, India 244302
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand-info">
              {/* Replace text with logo image */}
              <img
                src={logoImage}
                alt="Dreamy Designs Logo"
                className="brand-logo"
              />
              <p className="brand-tagline">Premium Horn Handicrafts</p>
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

          {/* Product Categories Column */}
          <div className="footer-column product-categories-column">
            <h4 className="column-title">Product Categories</h4>
            <div className="category-groups">
              {productCategories.map((categoryGroup, index) => (
                <div key={index} className="category-group">
                  <h5 className="category-group-title">
                    {categoryGroup.category}
                  </h5>
                  <ul className="category-group-links">
                    {categoryGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="category-group-item">
                        <a href={item.href} className="footer-link">
                          <span className="link-arrow">→</span>
                          <span className="link-text">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative middle border */}
        <div className="border-decoration middle-border">
          <div className="border-line"></div>
          <div className="corner left"></div>
          <div className="corner right"></div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="copyright-section">
          <div className="copyright-content">
            <div className="copyright-info">
              <p className="copyright-text">
                Copyright © 2025 Dreamy Designs All Rights Reserved
              </p>
            </div>

            {/* <div className="copyright-links">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a href={link.href} className="copyright-link">
                    {link.text}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="link-divider">|</span>
                  )}
                </React.Fragment>
              ))}
            </div> */}
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="border-decoration bottom-border">
          <div className="border-line"></div>
          <div className="corner left"></div>
          <div className="corner right"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
