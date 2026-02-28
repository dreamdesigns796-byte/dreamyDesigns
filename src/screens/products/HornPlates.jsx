import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import hornPlatesProducts from "../../data/hornPlatesData";
import img1 from "../../assets/horn-plate/image2.jpeg";


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

const HornPlates = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = hornPlatesProducts.map(product => ({
    ...product,
    description: product.description || "Handcrafted horn plate made from natural buffalo or ox horn. Elegant serving piece with unique natural patterns and polished finish.",
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
    <div className="horn-buttons-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Horn Plates</span>
          </div>

          <h1 className="page-title">Horn Plate Collection</h1>
          <p className="page-description">
            Discover our exquisite collection of handcrafted horn plates and serving dishes 
            made from natural buffalo and ox horn. Each piece features unique grain patterns, 
            polished finishes, and elegant designs. Perfect for serving appetizers, desserts, 
            cheese, fruits, and as decorative centerpieces for dining tables and special events.
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
            <h2 className="banner-title">Exquisite Handcrafted Horn Plates</h2>
            <p className="banner-text">
              Each horn plate is meticulously crafted from ethically sourced natural horn, 
              showcasing the material's unique patterns and natural beauty. Lightweight, 
              durable, and perfect for both everyday use and special occasions.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">🍽️</span>
                <span className="feature-text">Perfect for Serving</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span className="feature-text">Natural & Elegant</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Unique Patterns</span>
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
              <h2 className="solutions-title">Custom Horn Plate Designs</h2>
              <p className="solutions-description">
                Create your own unique horn plates with custom sizes, shapes, 
                engravings, or combination with other materials. Perfect for 
                restaurants, hotels, catering services, weddings, and special events.
              </p>
              <ul className="solutions-features">
                <li>Custom sizes & shapes</li>
                <li>Personalized engravings</li>
                <li>Combination with wood/metal stands</li>
                <li>Bulk orders for businesses</li>
                <li>Private labeling available</li>
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

      {/* Plate Types */}
      <section className="jewelry-types section-border">
        <div className="container">
          <h2 className="types-title">Our Horn Plate Collection</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3 className="type-name">Appetizer Plates</h3>
              <p className="type-description">
                Small plates perfect for serving appetizers, canapés, 
                and hors d'oeuvres. Elegant presentation for parties.
              </p>
              <div className="type-features">
                <span>4-6 inch diameter</span>
                <span>Polished finish</span>
                <span>Lightweight</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Dessert Plates</h3>
              <p className="type-description">
                Medium-sized plates ideal for serving desserts, 
                cakes, pastries, and sweet treats.
              </p>
              <div className="type-features">
                <span>6-8 inch diameter</span>
                <span>Elegant design</span>
                <span>Perfect for display</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Cheese & Fruit Boards</h3>
              <p className="type-description">
                Larger plates and boards for serving cheese assortments, 
                fruit platters, and charcuterie.
              </p>
              <div className="type-features">
                <span>10-14 inch diameter</span>
                <span>Natural patterns</span>
                <span>Centerpiece quality</span>
              </div>
            </div>
            <div className="type-card">
              <h3 className="type-name">Decorative Plates</h3>
              <p className="type-description">
                Ornamental plates designed for wall display or 
                as decorative centerpieces.
              </p>
              <div className="type-features">
                <span>Various sizes</span>
                <span>Artistic designs</span>
                <span>Wall mounting options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="care-instructions section-border">
        <div className="container">
          <h2 className="care-title">Horn Plate Care Guide</h2>
          <div className="care-grid">
            <div className="care-card">
              <h3>🧼 Cleaning</h3>
              <p>Hand wash gently with mild soap and soft cloth. Avoid dishwasher, harsh detergents, or abrasive cleaners.</p>
            </div>
            <div className="care-card">
              <h3>💧 Drying</h3>
              <p>Immediately dry with soft cloth after washing. Do not soak in water for extended periods.</p>
            </div>
            <div className="care-card">
              <h3>🔥 Temperature</h3>
              <p>Avoid extreme temperatures. Do not place in oven, microwave, or expose to direct heat sources.</p>
            </div>
            <div className="care-card">
              <h3>📦 Storage</h3>
              <p>Store in dry place, separated by soft cloth to prevent scratches. Avoid stacking without protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Collections</h2>
          <div className="categories-grid">
            <Link to="/products/horn-bowls" className="category-card">
              <h3 className="category-name">Horn Bowls</h3>
              <p className="category-description">
                Deep serving bowls
              </p>
            </Link>
            <Link to="/products/horn-mugs" className="category-card">
              <h3 className="category-name">Horn Mugs</h3>
              <p className="category-description">
                Traditional drinking vessels
              </p>
            </Link>
            <Link to="/products/horn-home-decor" className="category-card">
              <h3 className="category-name">Home Decor</h3>
              <p className="category-description">Horn decor items</p>
            </Link>
            <Link to="/products/horn-utensils" className="category-card">
              <h3 className="category-name">Utensils</h3>
              <p className="category-description">
                Horn spoons and serving sets
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornPlates;