// src/screens/Home.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import OurStory from "../components/OurStory";
import NumbersSection from "../components/NumbersSection";
import FeaturedProducts from "../components/FeaturedProducts";
import IndiaHeritage from "../components/IndiaHeritage";
import { PRODUCTS } from "../constants/Data";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQSection from "../components/FAQSection";
import HeroCarousel from "../components/HeroCarousel";
import "./Home.css";


const Home = () => {


  return (
    <div className="home-screen">
     <HeroCarousel />
     <OurStory />
      <section id="products-section" className="products-section">
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </section>
     <NumbersSection />
      {/* Featured Products Section - Added after Numbers */}
     <FeaturedProducts />
      {/* India Heritage Section - Added after Featured Products */}
      <IndiaHeritage />
      {/* Why Choose Us Section - Add after India Heritage */}
       <WhyChooseUs />
      {/* FAQ Section - Add after Why Choose Us */}
       <FAQSection />
    </div>
  );
};

export default Home;
