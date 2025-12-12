// src/screens/products/HornButtons.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HornButtons.css';

const HornButtons = () => {
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Horn Button products based on your screenshots
  const hornButtonProducts = [
    {
      id: 1,
      title: 'Horn Button Blanks – Color No. 8',
      sku: 'HB-008',
      price: 12.99,
      originalPrice: 15.99,
      sale: true,
      description: 'Premium buffalo horn button blanks in color no. 8 pattern. Perfect for high-end fashion applications.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Natural Brown', 'Light Pattern'],
      sizes: ['15mm', '18mm', '22mm'],
      stock: 'In Stock',
      featured: true
    },
    {
      id: 2,
      title: 'Horn Button Blanks – Color No. 8 A',
      sku: 'HB-008A',
      price: 13.99,
      originalPrice: 16.99,
      sale: true,
      description: 'Premium buffalo horn button blanks in color no. 8A pattern. Ethically sourced materials.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Medium Brown', 'Dark Pattern'],
      sizes: ['15mm', '18mm', '22mm', '25mm'],
      stock: 'In Stock',
      featured: true
    },
    {
      id: 3,
      title: 'Horn Button Blanks – Color No. 8 B, C',
      sku: 'HB-008BC',
      price: 14.99,
      description: 'Mixed set of horn button blanks in colors no. 8B and 8C patterns.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Mixed Patterns'],
      sizes: ['15mm', '18mm'],
      stock: 'Low Stock',
      featured: true
    },
    {
      id: 4,
      title: 'Horn Button Blanks – Color No. 8 B',
      sku: 'HB-008B',
      price: 13.50,
      description: 'Premium buffalo horn button blanks in color no. 8B pattern.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Dark Brown'],
      sizes: ['18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 5,
      title: 'Horn Button Blanks – Color No. 8 C',
      sku: 'HB-008C',
      price: 13.50,
      description: 'Premium buffalo horn button blanks in color no. 8C pattern.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Light Pattern'],
      sizes: ['15mm', '18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 6,
      title: 'Horn Button Blanks – Color No. 8-A, B, C, 9, 9, 10, 11, 12',
      sku: 'HB-ASSORTED-1',
      price: 45.99,
      originalPrice: 55.99,
      sale: true,
      description: 'Complete assortment of horn button blanks in all colors from 8A to 12. Perfect for designers.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Assorted Colors'],
      sizes: ['Mixed Sizes'],
      stock: 'In Stock',
      featured: true
    },
    {
      id: 7,
      title: 'Horn Button Blanks – Color No. 8-B, 10, 11, 12',
      sku: 'HB-ASSORTED-2',
      price: 32.99,
      description: 'Selected assortment of premium horn button blanks in darker color patterns.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Dark Patterns'],
      sizes: ['18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 8,
      title: 'Horn Button Blanks – Color No. 8-B, 9, 10, 11, 12',
      sku: 'HB-ASSORTED-3',
      price: 38.99,
      description: 'Premium assortment of horn button blanks for luxury garment applications.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Mixed Premium'],
      sizes: ['15mm', '18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 9,
      title: 'Horn Button Blanks – Color No. 1 (Light White)',
      sku: 'HB-001',
      price: 11.99,
      description: 'Light white horn button blanks for delicate fabric applications.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Light White'],
      sizes: ['15mm', '18mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 10,
      title: 'Horn Button Blanks – Color No. 2 (Light Brown)',
      sku: 'HB-002',
      price: 11.99,
      description: 'Light brown horn button blanks with natural grain patterns.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Light Brown'],
      sizes: ['15mm', '18mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 11,
      title: 'Horn Button Blanks – Color No. 3 (Brown)',
      sku: 'HB-003',
      price: 11.99,
      description: 'Classic brown horn button blanks for traditional garments.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Brown'],
      sizes: ['15mm', '18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 12,
      title: 'Horn Button Blanks – Color No. 4 (Medium Brown)',
      sku: 'HB-004',
      price: 12.50,
      description: 'Medium brown horn button blanks with consistent color.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Medium Brown'],
      sizes: ['18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 13,
      title: 'Horn Button Blanks – Color No. 5 (Dark Brown)',
      sku: 'HB-005',
      price: 12.50,
      description: 'Dark brown horn button blanks for contrast applications.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Dark Brown'],
      sizes: ['15mm', '18mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 14,
      title: 'Horn Button Blanks – Color No. 6 (Mixed Pattern)',
      sku: 'HB-006',
      price: 13.99,
      description: 'Mixed pattern horn button blanks for unique designs.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Mixed Pattern'],
      sizes: ['15mm', '18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 15,
      title: 'Horn Button Blanks – Color No. 9',
      sku: 'HB-009',
      price: 13.50,
      description: 'Premium horn button blanks in color no. 9 pattern.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Pattern 9'],
      sizes: ['18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 16,
      title: 'Horn Button Blanks – Color No. 10',
      sku: 'HB-010',
      price: 13.50,
      description: 'Premium horn button blanks in color no. 10 pattern.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Pattern 10'],
      sizes: ['18mm', '22mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 17,
      title: 'Horn Button Blanks – Color No. 11',
      sku: 'HB-011',
      price: 14.50,
      description: 'Premium horn button blanks in color no. 11 pattern.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Pattern 11'],
      sizes: ['15mm', '18mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 18,
      title: 'Horn Button Blanks – Color No. 12',
      sku: 'HB-012',
      price: 14.50,
      description: 'Premium horn button blanks in color no. 12 pattern.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Pattern 12'],
      sizes: ['15mm', '18mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 19,
      title: 'Finished Horn Buttons – Color Assortment',
      sku: 'HB-FINISHED-1',
      price: 29.99,
      description: 'Ready-to-use finished horn buttons in various colors and sizes.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Assorted'],
      sizes: ['15mm', '18mm'],
      stock: 'In Stock',
      featured: false
    },
    {
      id: 20,
      title: 'Custom Horn Buttons – Bulk Order',
      sku: 'HB-CUSTOM',
      price: 'Contact',
      description: 'Custom horn buttons made to your specifications. Minimum order 1000 pieces.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['Custom'],
      sizes: ['Custom'],
      stock: 'Made to Order',
      featured: false
    },
    {
      id: 21,
      title: 'Horn Button Sample Pack',
      sku: 'HB-SAMPLE',
      price: 9.99,
      description: 'Sample pack with one of each color for testing and design.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      colors: ['All Colors'],
      sizes: ['15mm'],
      stock: 'In Stock',
      featured: false
    }
  ];

  // Filter and sort products
  const getSortedProducts = () => {
    let sorted = [...hornButtonProducts];
    
    switch(sortBy) {
      case 'price-low':
        sorted.sort((a, b) => {
          if (a.price === 'Contact') return 1;
          if (b.price === 'Contact') return -1;
          return a.price - b.price;
        });
        break;
      case 'price-high':
        sorted.sort((a, b) => {
          if (a.price === 'Contact') return -1;
          if (b.price === 'Contact') return 1;
          return b.price - a.price;
        });
        break;
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        sorted.sort((a, b) => b.featured - a.featured);
        break;
      default:
        // Default: featured first, then by id
        sorted.sort((a, b) => (b.featured - a.featured) || (a.id - b.id));
        break;
    }
    
    return sorted;
  };

  const sortedProducts = getSortedProducts();
  
  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
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
            Elevate your designs with our premium buffalo horn buttons blanks. Crafted from ethically 
            sourced water buffalo horns, these blanks offer durability, natural beauty, and customization 
            options. Perfect for high-end fashion brands, garment manufacturers, and artisans. 
            Contact us for bespoke solutions.
          </p>
          
          <div className="page-stats">
            <p className="results-count">
              Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} results
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
                <option value="featured">Featured</option>
                <option value="name">Sort by name</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="featured-banner section-border">
        <div className="container">
          <div className="banner-content">
            <h2 className="banner-title">Premium Horn Button Blanks</h2>
            <p className="banner-text">
              Available in 12+ colors and multiple sizes. All products made from 100% natural, 
              ethically sourced water buffalo horns.
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
      {currentProducts.map(product => (
        <div key={product.id} className="product-card minimal">

          {/* Image */}
          <div className="product-image-container minimal">
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-image" 
            />
          </div>

          {/* Content */}
          <div className="product-content minimal">
            <span className="product-sku minimal">{product.sku}</span>
            <h3 className="product-title minimal">{product.title}</h3>

            <Link 
              to={`/products/horn-buttons/${product.id}`} 
              className="read-more-btn-single"
            >
              Read More →
            </Link>
          </div>

        </div>
      ))}
    </div>

    {/* Pagination (unchanged) */}
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
            else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
            else pageNum = currentPage - 2 + i;

            return (
              <button
                key={pageNum}
                className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
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


      {/* Custom Solutions CTA */}
      <section className="custom-solutions section-border">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2 className="solutions-title">Need Custom Horn Buttons?</h2>
              <p className="solutions-description">
                We specialize in custom horn button manufacturing for fashion brands and designers. 
                From unique shapes to specific color matching, we can create exactly what you need.
              </p>
              <ul className="solutions-features">
                <li>Custom shapes and sizes</li>
                <li>Color matching services</li>
                <li>Minimum order: 1000 pieces</li>
                <li>Private labeling available</li>
                <li>Worldwide shipping</li>
              </ul>
              <button className="solutions-btn">
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
              <p className="info-card-subtext">Ethically sourced, no synthetic materials</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Sizes Available</h3>
              <p className="info-card-text">15mm, 18mm, 22mm, 25mm</p>
              <p className="info-card-subtext">Custom sizes available on request</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Colors</h3>
              <p className="info-card-text">12 Standard Colors</p>
              <p className="info-card-subtext">From Light White to Dark Pattern</p>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Finish</h3>
              <p className="info-card-text">Natural Polished Finish</p>
              <p className="info-card-subtext">Can be custom finished as needed</p>
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
              <p className="category-description">For eyewear and decorative uses</p>
            </Link>
            <Link to="/products/horn-jewelry" className="category-card">
              <h3 className="category-name">Horn Jewelry</h3>
              <p className="category-description">Necklaces, bangles, earrings</p>
            </Link>
            <Link to="/products/horn-combs" className="category-card">
              <h3 className="category-name">Horn Combs</h3>
              <p className="category-description">Hair and beard combs</p>
            </Link>
            <Link to="/products/horn-cutlery" className="category-card">
              <h3 className="category-name">Horn Cutlery</h3>
              <p className="category-description">Spoons, knives, servingware</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornButtons;