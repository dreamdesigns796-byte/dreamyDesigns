import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import woodResinFrameProducts from "../../data/hornFramesData";

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

const WoodResinFrames = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = woodResinFrameProducts.map(product => ({
    ...product,
    description: product.description || "Handcrafted wood and resin photo frame featuring a unique blend of natural wood grain with vibrant resin colors. Each piece is a one-of-a-kind work of art for displaying your cherished memories.",
    price: product.price || "Contact for Price",
    featured: product.featured || false
  }));

  // Filter and sort products
  const getSortedProducts = () => {
    let sorted = [...enhancedProducts];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "price-high":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "featured":
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
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
    <div className="wood-resin-frames-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Wood & Resin Photo Frames</span>
          </div>

          <h1 className="page-title">Wood & Resin Photo Frames</h1>
          <p className="page-description">
            Discover our exquisite collection of handcrafted wood and resin photo frames. 
            Each frame combines the natural beauty of wood grain with vibrant, colored resin 
            to create unique, artistic pieces that transform your photographs into stunning 
            display art. Perfect for home decor, offices, gifts, and as statement pieces 
            that blend natural elements with contemporary design.
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
            <h2 className="banner-title">Artistic Wood & Resin Photo Frames</h2>
            <p className="banner-text">
              Each photo frame is meticulously crafted from sustainably sourced wood and 
              high-quality resin, creating mesmerizing patterns and color combinations. 
              Transform your photographs into gallery-worthy art with these unique frames 
              that capture the perfect harmony between nature and craftsmanship.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">🖼️</span>
                <span className="feature-text">Unique Resin Patterns</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span className="feature-text">Natural Wood Grain</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Custom Color Options</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <span className="feature-text">Sustainable Materials</span>
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
          <h2 className="types-title">Our Wood & Resin Frame Collection</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3 className="type-name">River-Resin Frames</h3>
              <p className="type-description">
                Features a beautiful "river" of colored resin flowing through natural wood, 
                creating a stunning visual effect reminiscent of flowing water through a forest.
              </p>
              <div className="type-features">
                <span>Blue/green resin rivers</span>
                <span>Natural wood banks</span>
                <span>Epoxy resin finish</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Geometric Resin Frames</h3>
              <p className="type-description">
                Modern frames with geometric resin inlays, perfect for contemporary 
                interiors and adding artistic flair to any space.
              </p>
              <div className="type-features">
                <span>Geometric patterns</span>
                <span>Color blocking</span>
                <span>Modern aesthetic</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Natural Edge Frames</h3>
              <p className="type-description">
                Showcases the natural edge of the wood with resin filling, 
                preserving the organic shape while adding vibrant color accents.
              </p>
              <div className="type-features">
                <span>Live edge wood</span>
                <span>Resin-filled voids</span>
                <span>Organic shapes</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Multi-Panel Frames</h3>
              <p className="type-description">
                Multiple photo panels connected with resin elements, perfect for 
                creating photo collages and multi-image displays.
              </p>
              <div className="type-features">
                <span>2-4 photo panels</span>
                <span>Resin connectors</span>
                <span>Gallery style</span>
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
              <h2 className="solutions-title">Custom Wood & Resin Frames</h2>
              <p className="solutions-description">
                Create personalized wood and resin photo frames with custom wood types, 
                resin colors, sizes, and designs. Perfect for matching specific decor 
                themes, corporate branding, weddings, anniversaries, and unique gifts.
              </p>
              <ul className="solutions-features">
                <li>Choice of wood species (walnut, maple, oak, etc.)</li>
                <li>Custom resin color matching</li>
                <li>Personalized dimensions</li>
                <li>Engraving options</li>
                <li>Bulk orders for events & businesses</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="solutions-image">
              <div className="image-placeholder">
                <span className="image-text">Custom Frame Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Information */}
      <section className="material-info section-border">
        <div className="container">
          <h2 className="info-title">Material & Craftsmanship</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Wood Selection</h3>
              <p className="info-card-text">Walnut, Maple, Oak</p>
              <p className="info-card-subtext">Sustainably sourced hardwoods</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Resin Types</h3>
              <p className="info-card-text">Epoxy & UV Resins</p>
              <p className="info-card-subtext">Crystal clear, colored options</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish Options</h3>
              <p className="info-card-text">Matte, Gloss, Satin</p>
              <p className="info-card-subtext">Food-safe finishes available</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Construction</h3>
              <p className="info-card-text">Handcrafted Joinery</p>
              <p className="info-card-subtext">Precision woodworking</p>
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
              <p>Dust with soft, dry cloth. For resin surfaces, use mild soap and water if needed.</p>
            </div>
            <div className="care-card">
              <h3>☀️ Sun Protection</h3>
              <p>Avoid prolonged direct sunlight to prevent resin yellowing and wood fading.</p>
            </div>
            <div className="care-card">
              <h3>🌡️ Temperature</h3>
              <p>Keep in stable temperatures. Avoid extreme heat or cold which can affect resin.</p>
            </div>
            <div className="care-card">
              <h3>💧 Moisture Control</h3>
              <p>Wipe spills immediately. Avoid humid environments to preserve wood integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Products</h2>
          <div className="categories-grid">
            <Link to="/products/wood-resin-home-decor" className="category-card">
              <h3 className="category-name">Wood & Resin Decor</h3>
              <p className="category-description">
                Artistic home accessories
              </p>
            </Link>
            <Link to="/products/custom-furniture" className="category-card">
              <h3 className="category-name">Custom Furniture</h3>
              <p className="category-description">
                Wood & resin tables, shelves
              </p>
            </Link>
            <Link to="/products/artisanal-gifts" className="category-card">
              <h3 className="category-name">Artisanal Gifts</h3>
              <p className="category-description">Handcrafted unique gifts</p>
            </Link>
            <Link to="/products/office-art" className="category-card">
              <h3 className="category-name">Office Art</h3>
              <p className="category-description">
                Professional decor pieces
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WoodResinFrames;