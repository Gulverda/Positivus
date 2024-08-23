import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import SponsorSection from './components/ads/SponsorSection.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<div>About Us</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/use-cases" element={<div>Use Cases</div>} />
        <Route path="/pricing" element={<div>Pricing</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/request-quote" element={<div>Request Quote</div>} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
      <SponsorSection />
    </Router>
  );
}

export default App;
