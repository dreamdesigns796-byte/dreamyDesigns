import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HornButtons.css";
import hornMugProducts from "../../data/hornMugsData";
import VideoGallery from "../../components/VideoGallery";

const hornMugVideos = [
  {
    publicId: "hornmug4_zmvgrs",
    title: "Horn Mug Manufacturing",
    description: "Watch our premium horn buttons being crafted",
  },
  {
    publicId: "hornmug1_iar7rw",
    title: "Horn Mug Manufacturing",
    description: "Watch our premium horn buttons being crafted",
  },
  {
    publicId: "hornmug2_t28azv",
    title: "Horn Mug Manufacturing",
    description: "Watch our premium horn buttons being crafted",
  },
  {
    publicId: "hornmug3_drpihn",
    title: "Horn Mug Manufacturing",
    description: "Watch our premium horn buttons being crafted",
  },
];

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

const HornMugs = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

  // Add default properties to products that don't have them
  const enhancedProducts = hornMugProducts.map((product) => ({
    ...product,
    description:
      product.description ||
      "Handcrafted horn mug made from natural buffalo or ox horn. Unique grain patterns and polished finish.",
    price: product.price || "Contact for Price",
    featured: product.featured || false,
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
            <span>Horn Mugs</span>
          </div>

          <h1 className="page-title">Horn Mugs</h1>
          <p className="page-description">
            Discover our handcrafted horn mugs made from natural buffalo and ox
            horn. Each mug features unique grain patterns, polished finishes,
            and traditional craftsmanship. Ideal for beer, mead, ale, gifting,
            reenactments, and hospitality use.
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
            <h2 className="banner-title">Authentic Handmade Horn Mugs</h2>
            <p className="banner-text">
              Crafted from ethically sourced natural horn. Each piece is unique,
              food-safe, and finished by skilled artisans.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Natural Horn Material</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Food-Safe Coating</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Unique Grain Patterns</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Custom Branding Available</span>
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
                  onClick={() =>
                    handleImageClick(
                      product.image,
                      product.title,
                      product.description
                    )
                  }
                  style={{ cursor: "pointer" }}
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

      <VideoGallery
        videos={hornMugVideos}
        cloudName="dnhqjli6k"
        title="Horn Mug Videos"
        description="Watch our horn button manufacturing process"
      />

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image-container">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="modal-image"
                style={{ objectFit: "contain" }}
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
              <h2 className="solutions-title">Custom Horn Mugs</h2>
              <p className="solutions-description">
                We offer private-label horn mugs with custom sizes, engravings,
                handles, and finishes. Perfect for breweries, events, and
                brands.
              </p>
              <ul className="solutions-features">
                <li>Custom logo engraving</li>
                <li>Different sizes & shapes</li>
                <li>Food-safe interior coating</li>
                <li>Bulk & wholesale orders</li>
                <li>Worldwide shipping</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>

            <div className="solutions-image">
              <div className="image-placeholder">
                <span className="image-text">Custom Horn Mug Samples</span>
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
              <h3 className="info-card-title">Material</h3>
              <p className="info-card-text">Natural Buffalo / Ox Horn</p>
              <p className="info-card-subtext">Ethically sourced</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Capacity</h3>
              <p className="info-card-text">300ml – 700ml</p>
              <p className="info-card-subtext">Custom sizes available</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish</h3>
              <p className="info-card-text">Polished / Matte / Natural</p>
              <p className="info-card-subtext">Multiple finish options</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Care Instructions</h3>
              <p className="info-card-text">Hand wash only</p>
              <p className="info-card-subtext">Food-safe coating included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Products</h2>
          <div className="categories-grid">
            <Link to="/products/horn-bowls" className="category-card">
              <h3 className="category-name">Horn Bowls</h3>
              <p className="category-description">
                Handcrafted natural horn bowls
              </p>
            </Link>
            <Link to="/products/horn-spoons" className="category-card">
              <h3 className="category-name">Horn Spoons</h3>
              <p className="category-description">Traditional horn utensils</p>
            </Link>
            <Link to="/products/drinking-horns" className="category-card">
              <h3 className="category-name">Drinking Horns</h3>
              <p className="category-description">
                Traditional drinking vessels
              </p>
            </Link>
            <Link to="/products/horn-gifts" className="category-card">
              <h3 className="category-name">Horn Gift Items</h3>
              <p className="category-description">
                Complete horn product collection
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornMugs;
