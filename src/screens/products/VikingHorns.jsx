import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import vikingHornProducts from "../../data/vikingHornsData";
import img1 from "../../assets/vikinghorns/image3.jpeg";


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

const VikingHorns = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = vikingHornProducts.map(product => ({
    ...product,
    description: product.description || "Authentic Viking drinking horn made from natural ox or buffalo horn. Traditional craftsmanship with modern food-safe finish.",
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
            <span>Viking Horns</span>
          </div>

          <h1 className="page-title">Viking Drinking Horns</h1>
          <p className="page-description">
            Discover our collection of authentic Viking drinking horns, handcrafted from natural 
            buffalo and ox horn. Each horn features unique traditional designs, runic engravings, 
            and historical accuracy. Perfect for reenactments, LARP events, medieval festivals, 
            and as unique decorative pieces.
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
            <h2 className="banner-title">Authentic Viking Drinking Horns</h2>
            <p className="banner-text">
              Handcrafted using traditional techniques passed down through generations. 
              Each horn is unique, featuring natural grain patterns and historical designs 
              inspired by Norse culture and mythology.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">⚔️</span>
                <span className="feature-text">Traditional Norse Designs</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🛡️</span>
                <span className="feature-text">Food-Safe Sealed Interior</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🏺</span>
                <span className="feature-text">Historical Accuracy</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚒️</span>
                <span className="feature-text">Handcrafted Details</span>
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
              <h2 className="solutions-title">Custom Viking Horns</h2>
              <p className="solutions-description">
                Create your own unique Viking drinking horns with custom runic engravings, 
                clan symbols, or personalized designs. Perfect for LARP groups, reenactment 
                societies, weddings, and special events.
              </p>
              <ul className="solutions-features">
                <li>Custom runic engravings</li>
                <li>Clan symbols & family crests</li>
                <li>Leather straps & stands included</li>
                <li>Bulk orders for events & groups</li>
                <li>Worldwide shipping</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="solutions-image">
              <img src={img1} alt="Custom Horn Button Samples" />
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
              <h3 className="info-card-title">Material</h3>
              <p className="info-card-text">Natural Ox / Buffalo Horn</p>
              <p className="info-card-subtext">Ethically sourced, no animals harmed</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Capacity</h3>
              <p className="info-card-text">500ml – 1500ml</p>
              <p className="info-card-subtext">Various sizes available</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish</h3>
              <p className="info-card-text">Natural / Polished / Antique</p>
              <p className="info-card-subtext">Food-safe epoxy resin interior</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Accessories</h3>
              <p className="info-card-text">Leather straps & stands</p>
              <p className="info-card-subtext">Optional display options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="care-instructions section-border">
        <div className="container">
          <h2 className="care-title">Viking Horn Care Instructions</h2>
          <div className="care-grid">
            <div className="care-card">
              <h3>🫧 Cleaning</h3>
              <p>Hand wash with mild soap and warm water only. Never use dishwasher or harsh chemicals.</p>
            </div>
            <div className="care-card">
              <h3>🌡️ Temperature</h3>
              <p>Avoid extreme temperatures. Do not freeze or expose to direct heat sources.</p>
            </div>
            <div className="care-card">
              <h3>🛡️ Storage</h3>
              <p>Store upright on provided stand. Keep away from direct sunlight when not in use.</p>
            </div>
            <div className="care-card">
              <h3>🍺 Usage</h3>
              <p>Suitable for mead, beer, ale, and non-alcoholic beverages. Not for hot liquids.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Products</h2>
          <div className="categories-grid">
            <Link to="/products/horn-mugs" className="category-card">
              <h3 className="category-name">Horn Mugs</h3>
              <p className="category-description">
                Traditional drinking vessels with handles
              </p>
            </Link>
            <Link to="/products/viking-accessories" className="category-card">
              <h3 className="category-name">Viking Accessories</h3>
              <p className="category-description">
                Belts, jewelry, and armor pieces
              </p>
            </Link>
            <Link to="/products/medieval-tableware" className="category-card">
              <h3 className="category-name">Medieval Tableware</h3>
              <p className="category-description">Complete feasting sets</p>
            </Link>
            <Link to="/products/leather-horn-carriers" className="category-card">
              <h3 className="category-name">Leather Carriers</h3>
              <p className="category-description">
                Horn carriers & display stands
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VikingHorns;