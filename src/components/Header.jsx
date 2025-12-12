// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/icon/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle click on Products link - navigate to products page
  const handleProductsClick = (e) => {
    e.preventDefault();
    navigate('/products');
    closeMenu();
  };

  // Handle click on dropdown item
  const handleCategoryClick = (path) => {
    navigate(path);
    closeMenu();
    setIsProductsDropdownOpen(false);
  };

  // Toggle mobile categories visibility
  const toggleMobileCategories = (e) => {
    e.stopPropagation();
    const categoriesSection = e.target.closest('.mobile-dropdown').querySelector('.mobile-categories-section');
    categoriesSection.classList.toggle('visible');
    
    const arrowBtn = e.target.closest('.mobile-dropdown-arrow-btn');
    const arrow = arrowBtn.querySelector('.mobile-arrow');
    arrow.classList.toggle('rotated');
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const productCategories = [
     { name: 'Horn Buttons', path: '/products/horn-buttons' },
    { name: 'Viking Horns', path: '/products/viking-horns' },
    { name: 'Horn Plates', path: '/products/horn-plates' },
    { name: 'Horn Combs', path: '/products/horn-combs' },
    { name: 'Horn Jewelry', path: '/products/horn-jewelry' },
    { name: 'Horn Cutlery', path: '/products/horn-cutlery' },
  ];

  return (
    <>
      {/* Header */}
      <header className={`header ${isMenuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo - Left */}
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Dreamy Designs Logo" 
              className="header-logo-icon" 
              onError={(e) => {
                e.target.style.display = 'none';
                const logoContainer = e.target.closest('.logo-container');
                if (logoContainer) {
                  const fallbackLogo = document.createElement('div');
                  fallbackLogo.className = 'logo-fallback';
                  fallbackLogo.innerHTML = 'DD';
                  fallbackLogo.style.cssText = `
                    width: 3.5rem;
                    height: 3.5rem;
                    background: #B86B4D;
                    color: #FAF9F6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Georgia', serif;
                    font-size: 1.8rem;
                    font-weight: bold;
                    border-radius: 50%;
                  `;
                  logoContainer.insertBefore(fallbackLogo, logoContainer.firstChild);
                }
              }}
            /> 
            <h1 className="logo-text">DREAMY DESIGNS</h1>
          </div>
        </NavLink>
        
        {/* Desktop Navigation - Center */}
        <nav className="nav-links desktop-nav center-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          
          {/* Products with Dropdown - Arrow Click Only */}
          <div 
            className="nav-dropdown" 
            ref={dropdownRef}
          >
            <div className="dropdown-trigger-container">
              <NavLink 
                to="/products"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={handleProductsClick}
              >
                Products
              </NavLink>
              
              <button 
                className={`dropdown-toggle-btn ${isProductsDropdownOpen ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleProductsDropdown();
                }}
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
                aria-label="Toggle products dropdown"
              >
                <span className={`dropdown-arrow ${isProductsDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
            </div>
            
            <div 
              className={`dropdown-menu ${isProductsDropdownOpen ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 900 && setIsProductsDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 900 && setIsProductsDropdownOpen(false)}
            >
              <div className="dropdown-header">
                <h3>Product Categories</h3>
                <button 
                  className="close-dropdown-btn"
                  onClick={() => setIsProductsDropdownOpen(false)}
                  aria-label="Close dropdown"
                >
                  ×
                </button>
              </div>
              <div className="dropdown-items">
                {productCategories.map((category) => (
                  <button
                    key={category.path}
                    className="dropdown-item"
                    onClick={() => handleCategoryClick(category.path)}
                  >
                    <span className="dropdown-item-text">{category.name}</span>
                    <span className="dropdown-item-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
        
        {/* Request Quote Button - Right */}
        <div className="header-right">
          <NavLink 
            to="/quote" 
            className="quote-btn"
            onClick={closeMenu}
          >
            Request Quote
          </NavLink>
          
          {/* Mobile Hamburger Button */}
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>
      
      {/* Header Spacer - Minimal space after fixed header */}
      <div className="header-spacer"></div>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay-backdrop" onClick={closeMenu}></div>
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <h2 className="mobile-nav-title">Menu</h2>
            <button 
              className="close-menu-btn" 
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          <div className="mobile-nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
              end
            >
              <span className="link-text">Home</span>
              <span className="link-arrow">→</span>
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="link-text">About</span>
              <span className="link-arrow">→</span>
            </NavLink>
            
            {/* Mobile Products Section with Toggle Arrow */}
            <div className="mobile-dropdown">
              <div className="mobile-products-header">
                <button 
                  className="mobile-dropdown-toggle"
                  onClick={() => {
                    navigate('/products');
                    closeMenu();
                  }}
                >
                  <span className="link-text">Products</span>
                  <span className="link-arrow">→</span>
                </button>
                
                <button 
                  className="mobile-dropdown-arrow-btn"
                  onClick={toggleMobileCategories}
                  aria-label="Toggle categories"
                >
                  <span className="mobile-arrow">▼</span>
                </button>
              </div>
              
              <div className="mobile-categories-section">
                <div className="mobile-categories-header">
                  <h4>Browse Categories</h4>
                </div>
                <div className="mobile-categories">
                  {productCategories.map((category) => (
                    <button
                      key={category.path}
                      className="mobile-category-item"
                      onClick={() => handleCategoryClick(category.path)}
                    >
                      <span className="category-item-text">{category.name}</span>
                      <span className="category-item-arrow">→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <NavLink 
              to="/quote" 
              className="mobile-nav-link quote-link"
              onClick={closeMenu}
            >
              <span className="link-text">Request Quote</span>
              <span className="link-arrow">→</span>
            </NavLink>
          </div>
          
          <div className="mobile-nav-footer">
            <div className="mobile-brand">
              <img 
                src="/src/assets/icon/logo.png" 
                alt="Dreamy Designs Logo" 
                className="mobile-logo-icon" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  const mobileBrand = e.target.closest('.mobile-brand');
                  if (mobileBrand) {
                    const fallbackLogo = document.createElement('div');
                    fallbackLogo.className = 'mobile-logo-fallback';
                    fallbackLogo.innerHTML = 'DD';
                    fallbackLogo.style.cssText = `
                      width: 3rem;
                      height: 3rem;
                      background: #B86B4D;
                      color: #FAF9F6;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-family: 'Georgia', serif;
                      font-size: 1.5rem;
                      font-weight: bold;
                      border-radius: 50%;
                    `;
                    mobileBrand.insertBefore(fallbackLogo, mobileBrand.firstChild);
                  }
                }}
              />
              <p className="mobile-brand-text">DREAMY DESIGNS</p>
            </div>
            <p className="mobile-tagline">Timeless Creations, Handcrafted with Soul</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;