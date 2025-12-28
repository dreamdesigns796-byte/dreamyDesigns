import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import hornJewelryProducts from "../../data/hornJewelriesData";

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

const HornJewelries = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = hornJewelryProducts.map(product => ({
    ...product,
    description: product.description || "Handcrafted horn jewelry piece made from natural buffalo or ox horn. Unique patterns and polished finish for elegant wear.",
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
            <span>Horn Jewelries</span>
          </div>

          <h1 className="page-title">Horn Jewelry Collection</h1>
          <p className="page-description">
            Discover our exquisite collection of handcrafted horn jewelry made from natural 
            buffalo and ox horn. Each piece features unique grain patterns, polished finishes, 
            and contemporary designs. Perfect for everyday wear, special occasions, gifting, 
            and as statement pieces that combine nature's beauty with artisanal craftsmanship.
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
            <h2 className="banner-title">Exquisite Handcrafted Horn Jewelry</h2>
            <p className="banner-text">
              Each jewelry piece is meticulously crafted from ethically sourced natural horn, 
              showcasing the material's unique patterns and textures. Lightweight, durable, 
              and hypoallergenic—perfect for sensitive skin.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">💎</span>
                <span className="feature-text">Unique Natural Patterns</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span className="feature-text">Hypoallergenic & Lightweight</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Contemporary Designs</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚒️</span>
                <span className="feature-text">Hand Polished Finish</span>
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

      {/* Custom Solutions CTA */}
      <section className="custom-solutions section-border">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2 className="solutions-title">Custom Horn Jewelry Designs</h2>
              <p className="solutions-description">
                Create your own unique horn jewelry pieces with custom designs, 
                engravings, or combination with other materials. Perfect for 
                fashion brands, boutique stores, weddings, and special events.
              </p>
              <ul className="solutions-features">
                <li>Custom design & patterns</li>
                <li>Personalized engravings</li>
                <li>Combination with metals/stones</li>
                <li>Bulk orders for retailers</li>
                <li>Private labeling available</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="solutions-image">
              <div className="image-placeholder">
                <span className="image-text">Custom Jewelry Samples</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewelry Types */}
      <section className="jewelry-types section-border">
        <div className="container">
          <h2 className="types-title">Our Horn Jewelry Collection</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3 className="type-name">Necklaces & Pendants</h3>
              <p className="type-description">
                Statement necklaces featuring horn pendants with unique patterns. 
                Available in various lengths and chain materials.
              </p>
              <div className="type-features">
                <span>Adjustable chains</span>
                <span>Silver/brass fittings</span>
                <span>Various sizes</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Earrings</h3>
              <p className="type-description">
                Lightweight horn earrings including studs, drops, and danglers. 
                Hypoallergenic hooks for sensitive ears.
              </p>
              <div className="type-features">
                <span>Studs & danglers</span>
                <span>Hypoallergenic</span>
                <span>Gold/silver posts</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Bracelets & Bangles</h3>
              <p className="type-description">
                Horn bracelets and bangles that combine natural beauty with 
                contemporary design. Adjustable and comfortable fit.
              </p>
              <div className="type-features">
                <span>Adjustable sizing</span>
                <span>Elastic/metal bands</span>
                <span>Stackable designs</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Rings</h3>
              <p className="type-description">
                Handcrafted horn rings in various styles and sizes. 
                Lightweight and comfortable for everyday wear.
              </p>
              <div className="type-features">
                <span>Sizes 4-12</span>
                <span>Polished finish</span>
                <span>Contemporary designs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="care-instructions section-border">
        <div className="container">
          <h2 className="care-title">Horn Jewelry Care Guide</h2>
          <div className="care-grid">
            <div className="care-card">
              <h3>🧼 Cleaning</h3>
              <p>Gently wipe with soft, damp cloth. Avoid harsh chemicals, perfumes, or lotions.</p>
            </div>
            <div className="care-card">
              <h3>💧 Moisture</h3>
              <p>Remove before swimming, bathing, or exercising to prevent moisture damage.</p>
            </div>
            <div className="care-card">
              <h3>📦 Storage</h3>
              <p>Store in soft pouch or jewelry box. Keep separate from other jewelry to avoid scratches.</p>
            </div>
            <div className="care-card">
              <h3>🌞 Protection</h3>
              <p>Avoid prolonged exposure to direct sunlight to prevent fading or drying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Collections</h2>
          <div className="categories-grid">
            <Link to="/products/horn-mugs" className="category-card">
              <h3 className="category-name">Horn Mugs</h3>
              <p className="category-description">
                Traditional drinking vessels
              </p>
            </Link>
            <Link to="/products/viking-horns" className="category-card">
              <h3 className="category-name">Viking Horns</h3>
              <p className="category-description">
                Historical drinking horns
              </p>
            </Link>
            <Link to="/products/horn-home-decor" className="category-card">
              <h3 className="category-name">Home Decor</h3>
              <p className="category-description">Horn decor items</p>
            </Link>
            <Link to="/products/horn-gifts" className="category-card">
              <h3 className="category-name">Gift Items</h3>
              <p className="category-description">
                Special occasion gifts
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornJewelries;