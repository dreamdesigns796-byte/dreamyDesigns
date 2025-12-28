import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import hornFrameProducts from "../../data/hornFramesData";

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

const HornFrames = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = hornFrameProducts.map(product => ({
    ...product,
    description: product.description || "Handcrafted horn photo frame made from natural buffalo or ox horn. Unique grain patterns and elegant finish for displaying your cherished memories.",
    price: product.price || "Contact for Price",
    featured: product.featured || false
  }));

  // Filter and sort products
  const getSortedProducts = () => {
    let sorted = [...enhancedProducts];

    switch (sortBy) {
      case "price-low":
        // Since we don't have actual prices, sort by SKU or title
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "price-high":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "featured":
        // Since we don't have featured property, sort by ID
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        // Default: sort by ID
        sorted.sort((a, b) => a.id - b.id);
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
            <span>Horn Photo Frames</span>
          </div>

          <h1 className="page-title">Horn Photo Frames</h1>
          <p className="page-description">
            Discover our exquisite collection of handcrafted horn photo frames made from natural 
            buffalo and ox horn. Each frame is uniquely designed to showcase your cherished 
            memories with elegance and natural beauty. Perfect for home decor, offices, gifting, 
            and as statement pieces that blend traditional craftsmanship with contemporary design.
          </p>

          <div className="page-stats">
            <p className="results-count">
              Showing {indexOfFirstProduct + 1}–
              {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
              {sortedProducts.length} results
            </p>

            <div className="sorting-options">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="default">Default sorting</option>
                <option value="name">Sort by name</option>
                <option value="price-low">Sort by SKU: low to high</option>
                <option value="price-high">Sort by SKU: high to low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="featured-banner section-border">
        <div className="container">
          <div className="banner-content">
            <h2 className="banner-title">Exquisite Handcrafted Horn Photo Frames</h2>
            <p className="banner-text">
              Each photo frame is meticulously crafted from ethically sourced natural horn, 
              showcasing the material's unique patterns and textures. Transform your photographs 
              into works of art with these sustainable and elegant frames.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">🖼️</span>
                <span className="feature-text">Multiple Photo Sizes</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span className="feature-text">Elegant Display Stands</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Customizable Designs</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <span className="feature-text">Sustainable Material</span>
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

                  {/* Description - Always show default description */}
                  <p className="product-description minimal">
                    {product.description}
                  </p>
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
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Frame Types Section */}
      <section className="frame-types section-border">
        <div className="container">
          <h2 className="types-title">Our Horn Frame Collection</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3 className="type-name">Tabletop Frames</h3>
              <p className="type-description">
                Elegant standing frames perfect for desks, shelves, and mantels. 
                Available in various angles and heights for optimal display.
              </p>
              <div className="type-features">
                <span>Adjustable stands</span>
                <span>Multi-angle viewing</span>
                <span>Non-slip base</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Wall-Mounted Frames</h3>
              <p className="type-description">
                Traditional wall frames with secure hanging mechanisms. 
                Perfect for creating gallery walls and decorative displays.
              </p>
              <div className="type-features">
                <span>Secure hooks included</span>
                <span>Easy to install</span>
                <span>Lightweight design</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Multi-Photo Frames</h3>
              <p className="type-description">
                Frames designed to hold multiple photographs. Perfect for 
                family collages, wedding memories, or event photographs.
              </p>
              <div className="type-features">
                <span>2-8 photo capacity</span>
                <span>Adjustable inserts</span>
                <span>Collage layouts</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Mini Frames</h3>
              <p className="type-description">
                Compact frames ideal for small spaces, travel, or as 
                decorative accents. Perfect for wallet-sized photos.
              </p>
              <div className="type-features">
                <span>Portable size</span>
                <span>Travel-friendly</span>
                <span>Gift-ready packaging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="custom-solutions section-border">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2 className="solutions-title">Custom Horn Photo Frames</h2>
              <p className="solutions-description">
                Create personalized horn photo frames with custom sizes, shapes, 
                engravings, and finishes. Perfect for corporate gifts, weddings, 
                anniversaries, hotels, and interior design projects.
              </p>
              <ul className="solutions-features">
                <li>Custom photo sizes</li>
                <li>Personalized engravings</li>
                <li>Brand logo incorporation</li>
                <li>Bulk orders for events</li>
                <li>Hotel & restaurant decor</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="solutions-image">
              <div className="image-placeholder">
                <span className="image-text">Custom Frame Samples</span>
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
              <h3 className="info-card-title">Photo Sizes</h3>
              <p className="info-card-text">4x6" to 8x10"</p>
              <p className="info-card-subtext">Custom sizes available</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Frame Thickness</h3>
              <p className="info-card-text">15mm – 25mm</p>
              <p className="info-card-subtext">Solid horn construction</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Backing Material</h3>
              <p className="info-card-text">Cardboard or MDF</p>
              <p className="info-card-subtext">Easy photo replacement</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Display Options</h3>
              <p className="info-card-text">Tabletop & Wall Mount</p>
              <p className="info-card-subtext">Stand/hardware included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="care-instructions section-border">
        <div className="container">
          <h2 className="care-title">Frame Care & Maintenance</h2>
          <div className="care-grid">
            <div className="care-card">
              <h3>🧹 Cleaning</h3>
              <p>Gently dust with soft, dry cloth. Avoid wet cleaning or chemical cleaners.</p>
            </div>
            <div className="care-card">
              <h3>☀️ Sunlight</h3>
              <p>Avoid direct sunlight exposure to prevent fading of both frame and photos.</p>
            </div>
            <div className="care-card">
              <h3>💧 Humidity</h3>
              <p>Keep in dry areas. Avoid bathrooms or humid environments.</p>
            </div>
            <div className="care-card">
              <h3>📸 Photo Handling</h3>
              <p>Use clean hands when changing photos to prevent oil transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Products</h2>
          <div className="categories-grid">
            <Link to="/products/horn-home-decor" className="category-card">
              <h3 className="category-name">Home Decor</h3>
              <p className="category-description">
                Horn decor & accessories
              </p>
            </Link>
            <Link to="/products/horn-jewelries" className="category-card">
              <h3 className="category-name">Horn Jewelry</h3>
              <p className="category-description">
                Handcrafted horn accessories
              </p>
            </Link>
            <Link to="/products/horn-gifts" className="category-card">
              <h3 className="category-name">Gift Items</h3>
              <p className="category-description">Special occasion gifts</p>
            </Link>
            <Link to="/products/horn-office-accessories" className="category-card">
              <h3 className="category-name">Office Decor</h3>
              <p className="category-description">
                Professional horn items
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornFrames;