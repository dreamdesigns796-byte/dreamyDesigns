// src/screens/Products.jsx
import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Sample product data based on your screenshots
  const allProducts = [
    // Buffalo Horn Plates - 12 colors as per your screenshot
    {
      id: 1,
      title: 'Buffalo Horn Plates – Color No. 1 (Light White) – 100% Natural Horn',
      category: 'Horn Plates',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      description: '100% natural buffalo horn plates in light white color. Perfect for various applications.',
      featured: true
    },
    {
      id: 2,
      title: 'Buffalo Horn Plates – Color No. 2 (Light Brown) – 100% Natural Horn',
      category: 'Horn Plates',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      description: '100% natural buffalo horn plates in light brown color.',
      featured: true
    },
    {
      id: 3,
      title: 'Buffalo Horn Plates – Color No. 3 (Brown) – 100% Natural Horn',
      category: 'Horn Plates',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      description: '100% natural buffalo horn plates in brown color.',
      featured: true
    },
    {
      id: 4,
      title: 'Buffalo Horn Plates – Color No. 4 (Medium Brown) – 100% Natural Horn',
      category: 'Horn Plates',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      description: '100% natural buffalo horn plates in medium brown color.',
      featured: true
    },
    {
      id: 5,
      title: 'Buffalo Horn Plates – Color No. 5 (Dark Brown) – 100% Natural Horn',
      category: 'Horn Plates',
      price: 94.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      description: '100% natural buffalo horn plates in dark brown color.',
      featured: true
    },
    {
      id: 6,
      title: 'Buffalo Horn Plates – Color No. 6 (Mixed Pattern) – 100% Natural Horn',
      category: 'Horn Plates',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      description: '100% natural buffalo horn plates with mixed patterns.',
      featured: true
    },
    // Additional products
    {
      id: 7,
      title: 'Drinking Horn Leather Holder',
      category: 'Viking Horns',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1543211540-7b5a46d45e5c?w=400&h=400&fit=crop',
      description: 'Handcrafted leather holder for drinking horns.',
      featured: true
    },
    {
      id: 8,
      title: 'Drinking Horn Stand',
      category: 'Viking Horns',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      description: 'Wooden stand for displaying drinking horns.',
      featured: true
    },
    {
      id: 9,
      title: 'Natural Horn Eyeglasses',
      category: 'Horn Eyeglasses',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      description: 'Handcrafted natural horn eyeglasses frame.',
      featured: false
    },
    {
      id: 10,
      title: 'Horn Beard Comb',
      category: 'Horn Combs',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      description: 'Natural horn comb for beard grooming.',
      featured: false
    },
    {
      id: 11,
      title: 'Horn Necklace',
      category: 'Horn Jewelry',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      description: 'Elegant horn necklace with traditional design.',
      featured: false
    },
    {
      id: 12,
      title: 'Horn Spoons Set',
      category: 'Horn Cutlery',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      description: 'Set of 4 natural horn spoons.',
      featured: false
    },
    {
      id: 13,
      title: 'Bone Inlay Tray',
      category: 'Bone Inlay',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop',
      description: 'Traditional bone inlay serving tray.',
      featured: false
    },
    {
      id: 14,
      title: 'Horn Button Blanks',
      category: 'Horn Buttons',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      description: 'Set of 12 natural horn button blanks.',
      featured: false
    },
    // Add more products to reach 86
    ...Array.from({ length: 72 }, (_, i) => ({
      id: i + 15,
      title: `Natural Horn Product ${i + 1}`,
      category: ['Horn Plates', 'Horn Jewelry', 'Horn Cutlery', 'Viking Horns'][i % 4],
      price: 19.99 + (i * 5),
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      description: 'Handcrafted natural horn product.',
      featured: false
    }))
  ];

  // Filter and sort products
  const getSortedProducts = () => {
    let sorted = [...allProducts];
    
    switch(sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
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
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="products-header">
        <div className="container">
          <div className="breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">/</span>
            <span>Products</span>
          </div>
          
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} results</p>
          
          <div className="sorting-container">
            <div className="sort-by">
              <label htmlFor="sort-select">Sort by:</label>
              <select 
                id="sort-select" 
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="default">Default sorting</option>
                <option value="name">Sort by name</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section-border">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Handpicked natural horn creations</p>
            <div className="title-decoration">
              <span className="decoration-dot"></span>
              <span className="decoration-dot"></span>
              <span className="decoration-dot"></span>
            </div>
          </div>
          
          <div className="featured-grid">
            {allProducts.filter(p => p.featured).slice(0, 6).map(product => (
              <div key={product.id} className="featured-card">
                <div className="featured-image">
                  <img src={product.image} alt={product.title} />
                  <div className="category-badge">{product.category}</div>
                </div>
                <div className="featured-content">
                  <h3 className="featured-title">{product.title}</h3>
                  <p className="featured-description">{product.description}</p>
                  <div className="featured-price">${product.price.toFixed(2)}</div>
                  <button className="read-more-btn">
                    Read More <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="all-products section-border">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Products</h2>
            <p className="section-subtitle">Browse our complete collection</p>
          </div>
          
          <div className="products-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {product.featured && (
                    <div className="featured-tag">Featured</div>
                  )}
                </div>
                <div className="product-content">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <button className="view-details-btn">
                      View Details <span className="btn-arrow">→</span>
                    </button>
                  </div>
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
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
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

      {/* CTA Section */}
      <section className="products-cta section-border">
        <div className="container">
          <div className="cta-content">
            <div className="corner-accent-bottom-left"></div>
            <div className="corner-accent-bottom-right"></div>
            <h2 className="cta-title">Need Custom Horn Products?</h2>
            <p className="cta-text">
              We specialize in custom orders and bulk quantities. Contact us for personalized solutions.
            </p>
            <div className="cta-buttons">
              <button className="primary-btn">
                Request A Quote <span className="btn-arrow">→</span>
              </button>
              <button className="secondary-btn">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;