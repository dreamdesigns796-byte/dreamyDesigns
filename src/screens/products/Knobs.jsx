import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import knobProducts from "../../data/knobsData";

// SVG Zoom Icon Component
const ZoomIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="zoom-icon"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const Knobs = () => {
    const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Filter and sort products
  const getSortedProducts = () => {
    let sorted = [...knobProducts];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => {
          if (a.price === "Contact") return 1;
          if (b.price === "Contact") return -1;
          return a.price - b.price;
        });
        break;
      case "price-high":
        sorted.sort((a, b) => {
          if (a.price === "Contact") return -1;
          if (b.price === "Contact") return 1;
          return b.price - a.price;
        });
        break;
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "featured":
        sorted.sort((a, b) => b.featured - a.featured);
        break;
      default:
        // Default: featured first, then by id
        sorted.sort((a, b) => b.featured - a.featured || a.id - b.id);
        break;
    }

    return sorted;
  };

  const sortedProducts = getSortedProducts();

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

      const handleButtonClick = () => {
    navigate("/quote");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  // Handle image click to show larger version
  const handleImageClick = (image, title, description) => {
    setSelectedImage({ image, title, description });
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="horn-buttons-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Knobs</span>
          </div>

          <h1 className="page-title">Knobs</h1>
          <p className="page-description">
            Explore our collection of high-quality knobs designed for cabinets,
            drawers, wardrobes, doors, and furniture. Suitable for residential,
            commercial, and hospitality interiors, our knobs are available in
            various shapes, sizes, finishes, and materials to match modern and
            classic design styles. Ideal for furniture manufacturers, interior
            designers, hardware brands, and custom projects.
          </p>

          <div className="page-stats">
            <p className="results-count">
              Showing {indexOfFirstProduct + 1}–
              {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
              {sortedProducts.length} results
            </p>

            {/* <div className="sorting-options">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="default">Default sorting</option>
                <option value="featured">Featured</option>
                <option value="name">Sort by name</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="featured-banner section-border">
        <div className="container">
          <div className="banner-content">
            <h2 className="banner-title">Premium Furniture & Cabinet Knobs</h2>
            <p className="banner-text">
              Available in various materials, finishes, and designs. All products made from
              high-quality materials with precise manufacturing.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Multiple Materials</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Various Finishes</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Custom Sizes</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Bulk Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section section-border">
        <div className="container">
          <div className="products-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card minimal">
                {/* Product Image with Zoom Icon */}
                <div 
                  className="product-image-container minimal clickable"
                  onClick={() => handleImageClick(product.image, product.title, product.description)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  
                  {/* Zoom Icon Overlay */}
                  <div className="zoom-indicator">
                    <ZoomIcon />
                  </div>
                </div>

                {/* Product Content */}
                <div className="product-content minimal">
                  {/* SKU */}
                  <span className="product-sku minimal">{product.sku}</span>

                  {/* Title */}
                  <h3 className="product-title minimal">{product.title}</h3>

                  {/* Description */}
                  {product.description && (
                    <p className="product-description minimal">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn prev-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <div className="page-numbers">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (currentPage <= 3) pageNum = i + 1;
                  else if (currentPage >= totalPages - 2)
                    pageNum = totalPages - 4 + i;
                  else pageNum = currentPage - 2 + i;

                  return (
                    <button
                      key={pageNum}
                      className={`page-number ${
                        currentPage === pageNum ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="page-dots">...</span>
                    <button
                      className="page-number"
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                className="pagination-btn next-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image-container">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="modal-image"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="modal-image-caption">
              <h3>{selectedImage.title}</h3>
              {selectedImage.description && (
                <p>{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Solutions CTA */}
      <section className="custom-solutions section-border">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2 className="solutions-title">Need Custom Knobs?</h2>
              <p className="solutions-description">
                We specialize in custom knob manufacturing for furniture brands, 
                interior designers, and hardware manufacturers. From unique shapes 
                to specific finishes, we can create exactly what you need.
              </p>
              <ul className="solutions-features">
                <li>Custom shapes and sizes</li>
                <li>Multiple finish options</li>
                <li>Material selection</li>
                <li>Private labeling available</li>
                <li>Worldwide shipping</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="solutions-image">
              <div className="image-placeholder">
                <span className="image-text">Custom Knob Samples</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="technical-info section-border">
        <div className="container">
          <h2 className="info-title">Technical Specifications</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Application</h3>
              <p className="info-card-text">Cabinets, Drawers, Furniture</p>
              <p className="info-card-subtext">Residential & commercial use</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Diameter Range</h3>
              <p className="info-card-text">25mm – 45mm</p>
              <p className="info-card-subtext">Custom sizes available on request</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Mounting</h3>
              <p className="info-card-text">Standard Screw Fitting</p>
              <p className="info-card-subtext">Universal M4 or M5 thread</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish Options</h3>
              <p className="info-card-text">10+ Standard Finishes</p>
              <p className="info-card-subtext">Polished, matte, brushed, textured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Categories</h2>
          <div className="categories-grid">
            <Link to="/products/handles" className="category-card">
              <h3 className="category-name">Handles</h3>
              <p className="category-description">
                Cabinet and drawer handles
              </p>
            </Link>
            <Link to="/products/hooks" className="category-card">
              <h3 className="category-name">Hooks</h3>
              <p className="category-description">
                Wall and door hooks
              </p>
            </Link>
            <Link to="/products/pulls" className="category-card">
              <h3 className="category-name">Drawer Pulls</h3>
              <p className="category-description">Long drawer pulls</p>
            </Link>
            <Link to="/products/furniture-accessories" className="category-card">
              <h3 className="category-name">Furniture Accessories</h3>
              <p className="category-description">
                Complete hardware solutions
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Knobs;