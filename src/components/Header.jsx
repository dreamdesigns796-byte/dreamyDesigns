// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeMainCategory, setActiveMainCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setActiveMainCategory(null);
  };

  const toggleProductsDropdown = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    if (!isProductsDropdownOpen) {
      setActiveMainCategory(null);
    }
  };

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
        setActiveMainCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle click on Products link - don't navigate, just open dropdown
  const handleProductsClick = (e) => {
    e.preventDefault();
    toggleProductsDropdown(e);
  };

  // Handle click on dropdown item
  const handleCategoryClick = (path) => {
    navigate(path);
    closeMenu();
    setIsProductsDropdownOpen(false);
  };

  // Handle click on main category
  const handleMainCategoryClick = (categoryKey, e) => {
    e.stopPropagation();

    if (activeMainCategory === categoryKey) {
      // If clicking the same category, close it
      setActiveMainCategory(null);
    } else {
      // Open the clicked category
      setActiveMainCategory(categoryKey);
    }
  };

  // Toggle mobile categories visibility
  const toggleMobileCategories = (e) => {
    e.stopPropagation();
    const categoriesSection = e.target
      .closest(".mobile-dropdown")
      .querySelector(".mobile-categories-section");
    categoriesSection.classList.toggle("visible");

    const arrowBtn = e.target.closest(".mobile-dropdown-arrow-btn");
    const arrow = arrowBtn.querySelector(".mobile-arrow");
    arrow.classList.toggle("rotated");
  };

  // Handle mobile main category click
  const handleMobileMainCategoryClick = (categoryKey, e) => {
    e.stopPropagation();

    if (activeMainCategory === categoryKey) {
      // If clicking the same category, close it
      setActiveMainCategory(null);
    } else {
      // Open the clicked category
      setActiveMainCategory(categoryKey);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const mainCategories = [
    {
      name: "Horn Products",
      key: "horn",
      subcategories: [
        { name: "Horn Buttons", path: "/products/horn-buttons" },
        { name: "Horn Mugs", path: "/products/horn-mugs" },
        { name: "Viking Horns", path: "/products/viking-horns" },
        // { name: "Horn Combs", path: "/products/horn-combs" },
        { name: "Horn Jewelry", path: "/products/horn-jewelry" },
        { name: "Horn Plates", path: "/products/horn-plates" },
      ],
    },
    {
      name: "Handicraft Items",
      key: "handicraft",
      subcategories: [
        // { name: "Horn Jewelry", path: "/products/horn-jewelry" },
        { name: "Wooden and Resin Frames", path: "/products/horn-frames" },
        { name: "Cutlery", path: "/products/cutlery" },
      ],
    },
    {
      name: "Hardware Items",
      key: "hardware",
      subcategories: [
        { name: "Handles", path: "/products/handles" },
        { name: "Knobs", path: "/products/knobs" },
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`header ${isMenuOpen ? "menu-open" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        {/* Logo Text - Left */}
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo-container">
            <div className="logo-text">DREAMY DESIGNS</div>
          </div>
        </NavLink>

        {/* Desktop Navigation - Center */}
        <nav className="nav-links desktop-nav center-nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            About
          </NavLink>

          {/* Products with Dropdown - Arrow Click Only */}
          <div className="nav-dropdown" ref={dropdownRef}>
            <div className="dropdown-trigger-container">
              <button
                className={`nav-link ${isProductsDropdownOpen ? "active" : ""}`}
                onClick={handleProductsClick}
              >
                Products
              </button>

              <button
                className={`dropdown-toggle-btn ${
                  isProductsDropdownOpen ? "active" : ""
                }`}
                onClick={toggleProductsDropdown}
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
                aria-label="Toggle products dropdown"
              >
                <span
                  className={`dropdown-arrow ${
                    isProductsDropdownOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </div>

            <div
              className={`dropdown-menu ${
                isProductsDropdownOpen ? "open" : ""
              }`}
              onMouseEnter={() =>
                window.innerWidth > 900 && setIsProductsDropdownOpen(true)
              }
              onMouseLeave={() => {
                if (window.innerWidth > 900) {
                  setIsProductsDropdownOpen(false);
                  setActiveMainCategory(null);
                }
              }}
            >
              <div className="dropdown-header">
                <h3>Browse Products</h3>
                <button
                  className="close-dropdown-btn"
                  onClick={() => {
                    setIsProductsDropdownOpen(false);
                    setActiveMainCategory(null);
                  }}
                  aria-label="Close dropdown"
                >
                  ×
                </button>
              </div>
              <div className="dropdown-items">
                {mainCategories.map((mainCategory) => (
                  <div key={mainCategory.key} className="main-category-section">
                    <button
                      className={`main-category-btn ${
                        activeMainCategory === mainCategory.key ? "active" : ""
                      }`}
                      onClick={(e) =>
                        handleMainCategoryClick(mainCategory.key, e)
                      }
                    >
                      <span className="main-category-text">
                        {mainCategory.name}
                      </span>
                      <span
                        className={`main-category-arrow ${
                          activeMainCategory === mainCategory.key
                            ? "rotated"
                            : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <div
                      className={`subcategory-list ${
                        activeMainCategory === mainCategory.key ? "visible" : ""
                      }`}
                    >
                      {mainCategory.subcategories.map((subcategory) => (
                        <NavLink
                          key={subcategory.path}
                          to={subcategory.path}
                          className={({ isActive }) =>
                            `dropdown-item subcategory-item ${
                              isActive ? "active" : ""
                            }`
                          }
                          onClick={() => {
                            closeMenu();
                            setIsProductsDropdownOpen(false);
                          }}
                        >
                          <span className="dropdown-item-text">
                            {subcategory.name}
                          </span>
                          <span className="dropdown-item-arrow">→</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Request Quote Button - Right */}
        <div className="header-right">
          <NavLink to="/quote" className="quote-btn" onClick={closeMenu}>
            Request Quote
          </NavLink>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger-btn ${isMenuOpen ? "active" : ""}`}
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

      {/* Header Spacer - Updated to match larger header */}
      <div className="header-spacer"></div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="overlay-backdrop" onClick={closeMenu}></div>
        <nav className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
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
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
              end
            >
              <span className="link-text">Home</span>
              <span className="link-arrow">→</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
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
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileCategories(e);
                  }}
                >
                  <span className="link-text">Products</span>
                  <span className="link-arrow">▼</span>
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
                  <h4>Browse Products</h4>
                </div>
                <div className="mobile-categories">
                  {mainCategories.map((mainCategory) => (
                    <div
                      key={mainCategory.key}
                      className="mobile-main-category"
                    >
                      <button
                        className={`mobile-main-category-btn ${
                          activeMainCategory === mainCategory.key
                            ? "active"
                            : ""
                        }`}
                        onClick={(e) =>
                          handleMobileMainCategoryClick(mainCategory.key, e)
                        }
                      >
                        <span className="main-category-text">
                          {mainCategory.name}
                        </span>
                        <span
                          className={`main-category-arrow ${
                            activeMainCategory === mainCategory.key
                              ? "rotated"
                              : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      <div
                        className={`mobile-subcategory-list ${
                          activeMainCategory === mainCategory.key
                            ? "visible"
                            : ""
                        }`}
                      >
                        {mainCategory.subcategories.map((subcategory) => (
                          <NavLink
                            key={subcategory.path}
                            to={subcategory.path}
                            className={({ isActive }) =>
                              `mobile-category-item mobile-subcategory-item ${
                                isActive ? "active" : ""
                              }`
                            }
                            onClick={() => closeMenu()}
                          >
                            <span className="category-item-text">
                              {subcategory.name}
                            </span>
                            <span className="category-item-arrow">→</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
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
              <div className="mobile-logo-text">DREAMY DESIGNS</div>
            </div>
            <p className="mobile-tagline">
              Timeless Creations, Handcrafted with Soul
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;