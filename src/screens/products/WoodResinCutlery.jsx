import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import cutleryProducts from "../../data/cutleryProducts";
import img1 from "../../assets/cutlery/image8.jpeg";


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

const WoodResinCutlery = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = cutleryProducts.map(product => ({
    ...product,
    description: product.description || "Handcrafted wood and resin cutlery item combining natural wood grain with vibrant resin colors. Each piece is a unique work of functional art.",
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
    <div className="wood-resin-cutlery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Wood & Resin Cutlery</span>
          </div>

          <h1 className="page-title">Wood & Resin Cutlery</h1>
          <p className="page-description">
            Discover our exquisite collection of handcrafted wood and resin cutlery. 
            Each piece combines the natural beauty of wood grain with vibrant, colored resin 
            to create unique, functional art for your dining table. Perfect for home use, 
            restaurants, hotels, and as luxurious gifts that elevate everyday dining into 
            a special experience.
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
            <h2 className="banner-title">Artistic Wood & Resin Cutlery Collection</h2>
            <p className="banner-text">
              Each cutlery piece is meticulously crafted from sustainably sourced wood and 
              high-quality resin, creating mesmerizing patterns and color combinations. 
              Transform your dining experience with these unique, functional art pieces that 
              blend natural elegance with modern design.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">🍴</span>
                <span className="feature-text">Full Cutlery Sets</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span className="feature-text">Unique Resin Patterns</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Custom Color Options</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <span className="feature-text">Food-Safe Finishes</span>
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

      {/* Cutlery Types Section */}
      <section className="cutlery-types section-border">
        <div className="container">
          <h2 className="types-title">Our Wood & Resin Cutlery Collection</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3 className="type-name">Complete Cutlery Sets</h3>
              <p className="type-description">
                Full dining sets including knives, forks, spoons, and specialty pieces. 
                Perfect for creating a cohesive table setting with artistic flair.
              </p>
              <div className="type-features">
                <span>6-24 piece sets</span>
                <span>Matching designs</span>
                <span>Gift packaging</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Individual Pieces</h3>
              <p className="type-description">
                Single cutlery items for mixing and matching or replacing pieces. 
                Create your own unique combination of wood and resin designs.
              </p>
              <div className="type-features">
                <span>Knives, forks, spoons</span>
                <span>Salad servers</span>
                <span>Serving utensils</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Specialty Cutlery</h3>
              <p className="type-description">
                Unique pieces for specific uses including steak knives, butter knives, 
                cake servers, and cheese knives with specialized designs.
              </p>
              <div className="type-features">
                <span>Serrated steak knives</span>
                <span>Spreading knives</span>
                <span>Serving utensils</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Utensil Sets</h3>
              <p className="type-description">
                Kitchen utensil sets including spatulas, spoons, and turners. 
                Perfect for both cooking and serving with artistic elegance.
              </p>
              <div className="type-features">
                <span>Heat-resistant</span>
                <span>Non-scratch surfaces</span>
                <span>Ergonomic handles</span>
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
              <h2 className="solutions-title">Custom Wood & Resin Cutlery</h2>
              <p className="solutions-description">
                Create personalized wood and resin cutlery with custom designs, 
                colors, and wood types. Perfect for restaurants, hotels, weddings, 
                corporate gifts, and luxury dining experiences.
              </p>
              <ul className="solutions-features">
                <li>Custom resin color matching</li>
                <li>Choice of wood species (walnut, maple, oak, etc.)</li>
                <li>Brand logo engraving</li>
                <li>Bulk orders for restaurants & hotels</li>
                <li>Special event cutlery</li>
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

      {/* Material & Care Information */}
      <section className="material-care-info section-border">
        <div className="container">
          <h2 className="info-title">Material & Care Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Wood Selection</h3>
              <p className="info-card-text">Walnut, Maple, Cherry</p>
              <p className="info-card-subtext">Sustainably sourced hardwoods</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Resin Type</h3>
              <p className="info-card-text">Food-Safe Epoxy</p>
              <p className="info-card-subtext">FDA-approved, non-toxic</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish</h3>
              <p className="info-card-text">Food-Safe Oil Finish</p>
              <p className="info-card-subtext">Water-resistant, natural look</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Care Instructions</h3>
              <p className="info-card-text">Hand Wash Only</p>
              <p className="info-card-subtext">No dishwasher, dry immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Recommendations */}
      <section className="usage-recommendations section-border">
        <div className="container">
          <h2 className="recommendations-title">Perfect For</h2>
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <h3>🏨 Hotels & Restaurants</h3>
              <p>Elevate your dining experience with unique, artistic cutlery that impresses guests.</p>
            </div>
            <div className="recommendation-card">
              <h3>🎁 Luxury Gifts</h3>
              <p>Perfect for weddings, anniversaries, housewarmings, and corporate gifts.</p>
            </div>
            <div className="recommendation-card">
              <h3>🏠 Home Dining</h3>
              <p>Transform everyday meals into special occasions with artistic tableware.</p>
            </div>
            <div className="recommendation-card">
              <h3>📸 Food Photography</h3>
              <p>Create stunning food presentations for blogs, menus, and social media.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Products</h2>
          <div className="categories-grid">
            <Link to="/products/wood-resin-frames" className="category-card">
              <h3 className="category-name">Wood & Resin Frames</h3>
              <p className="category-description">
                Artistic photo frames
              </p>
            </Link>
            <Link to="/products/wood-resin-home-decor" className="category-card">
              <h3 className="category-name">Home Decor</h3>
              <p className="category-description">
                Wood & resin home accessories
              </p>
            </Link>
            <Link to="/products/wood-resin-jewelry" className="category-card">
              <h3 className="category-name">Jewelry</h3>
              <p className="category-description">Wood & resin accessories</p>
            </Link>
            <Link to="/products/custom-tableware" className="category-card">
              <h3 className="category-name">Tableware</h3>
              <p className="category-description">
                Complete dining sets
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WoodResinCutlery;