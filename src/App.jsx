// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/HornCraftersAbout';
import Products from './screens/Products';

// Import product category pages
// import VikingHorns from './screens/products/VikingHorns';
import HornButtons from './screens/products/HornButtons';
// import HornPlates from './screens/products/HornPlates';
// import HornEyeglasses from './screens/products/HornEyeglasses';
// import HornCombs from './screens/products/HornCombs';
// import HornJewelry from './screens/products/HornJewelry';
// import HornCutlery from './screens/products/HornCutlery';
// import BoneInlay from './screens/products/BoneInlay';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            
            {/* Product Category Routes */}
            {/* <Route path="/products/viking-horns" element={<VikingHorns />} /> */}
            <Route path="/products/horn-buttons" element={<HornButtons />} />
            {/* <Route path="/products/horn-plates" element={<HornPlates />} />
            <Route path="/products/horn-eyeglasses" element={<HornEyeglasses />} />
            <Route path="/products/horn-combs" element={<HornCombs />} />
            <Route path="/products/horn-jewelry" element={<HornJewelry />} />
            <Route path="/products/horn-cutlery" element={<HornCutlery />} />
            <Route path="/products/bone-inlay" element={<BoneInlay />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;