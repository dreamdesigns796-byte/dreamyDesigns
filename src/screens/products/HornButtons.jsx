import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./HornButtons.css";
import VideoGallery from "../../components/VideoGallery";
import hornButtonProducts from "../../data/hornButtonsData";

const hornButtonVideos = [
  {
    publicId: "horn1_oyvxb6",
    title: "Horn Button Manufacturing",
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

const HornButtons = () => {
     const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const productsPerPage = 20;

    const handleButtonClick = () => {
    navigate("/quote");
  };

  // Filter and sort products
  const getSortedProducts = () => {
    let sorted = [...hornButtonProducts];

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
            <span>Horn Buttons</span>
          </div>

          <h1 className="page-title">Horn Buttons</h1>
          <p className="page-description">
            Elevate your apparel with our premium natural horn buttons, crafted
            from ethically sourced buffalo horn. Known for their exceptional
            durability, smooth finish, and unique natural patterns, these horn
            buttons add timeless elegance to garments. Ideal for luxury fashion
            brands, clothing manufacturers, tailors, and designers seeking
            sustainable and high-quality fashion accessories. We offer custom
            horn buttons in various sizes, shapes, and finishes to meet your
            design requirements. Contact us today for bespoke horn button
            solutions.
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
            <h2 className="banner-title">Premium Horn Button Blanks</h2>
            <p className="banner-text">
              Available in multiple colors and multiple sizes. All products made from
              100% natural, ethically sourced water buffalo horns.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">12+ Color Options</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Multiple Sizes</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Ethically Sourced</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span className="feature-text">Bulk Discounts</span>
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

                  {/* Description */}
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
        videos={hornButtonVideos}
        cloudName="dnhqjli6k" // REQUIRED
        title="Horn Button Videos"
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
              />
            </div>
            <div className="modal-image-caption">
              <h3>{selectedImage.title}</h3>
              {selectedImage.description && <p>{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Custom Solutions CTA */}
      <section className="custom-solutions section-border">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2 className="solutions-title">Need Custom Horn Buttons?</h2>
              <p className="solutions-description">
                We specialize in custom horn button manufacturing for fashion
                brands and designers. From unique shapes to specific color
                matching, we can create exactly what you need.
              </p>
              <ul className="solutions-features">
                <li>Custom shapes and sizes</li>
                <li>Color matching services</li>
                <li>Minimum order: 1000 pieces</li>
                <li>Private labeling available</li>
                <li>Worldwide shipping</li>
              </ul>
              <button className="solutions-btn" onClick={handleButtonClick}>
                Request Custom Quote <span className="btn-arrow">→</span>
              </button>
            </div>

            <div className="solutions-image">
              <div className="image-placeholder">
                <span className="image-text">Custom Button Samples</span>
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
              <p className="info-card-text">100% Natural Water Buffalo Horn</p>
              <p className="info-card-subtext">
                Ethically sourced, no synthetic materials
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Sizes Available</h3>
              <p className="info-card-text">15mm, 18mm, 22mm, 25mm</p>
              <p className="info-card-subtext">
                Custom sizes available on request
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Colors</h3>
              <p className="info-card-text">12 Standard Colors</p>
              <p className="info-card-subtext">
                From Light White to Dark Pattern
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish</h3>
              <p className="info-card-text">Natural Polished Finish</p>
              <p className="info-card-subtext">
                Can be custom finished as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="related-categories">
        <div className="container">
          <h2 className="related-title">Browse Related Categories</h2>
          <div className="categories-grid">
            <Link to="/products/horn-plates" className="category-card">
              <h3 className="category-name">Horn Plates</h3>
              <p className="category-description">
                For eyewear and decorative uses
              </p>
            </Link>
            <Link to="/products/horn-jewelry" className="category-card">
              <h3 className="category-name">Horn Jewelry</h3>
              <p className="category-description">
                Necklaces, bangles, earrings
              </p>
            </Link>
            <Link to="/products/horn-combs" className="category-card">
              <h3 className="category-name">Horn Combs</h3>
              <p className="category-description">Hair and beard combs</p>
            </Link>
            <Link to="/products/horn-cutlery" className="category-card">
              <h3 className="category-name">Horn Cutlery</h3>
              <p className="category-description">
                Spoons, knives, servingware
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornButtons;
