import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import SponsorSection from './components/ads/SponsorSection.jsx';
import DigitalMarketingSection from './components/main/DigitalMarketingSection.jsx';
import './App.css';
import Services from './components/services/Services.jsx';
import CaseStudies from './components/Swiper.jsx';
import Accordion from './components/Accordion.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <div className='container'>
      <div style={{ maxWidth: "1440px", width: "100%" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/about-us" element={<div>About Us</div>} />
            <Route path="/services" element={<div>Services</div>} />
            <Route path="/use-cases" element={<div>Use Cases</div>} />
            <Route path="/pricing" element={<div>Pricing</div>} />
            <Route path="/blog" element={<div>Blog</div>} />
            <Route path="/contact-us" element={<div>Request Quote</div>} />
            <Route path="/" element={<div></div>} />
          </Routes>
          <section id='about-us'>
            <DigitalMarketingSection />
          </section>
          <SponsorSection />
          <section id='services'>
            <Services />
          </section>
          <section id='use-cases'>
            <CaseStudies />
          </section>
          <section id='pricing'>
            <Accordion />
          </section>
          <section id='team'>
            <Team />
          </section>
          <section id='testimonials'>
            <Testimonials />
          </section>
          <section id='contact-us'>
            <ContactUs />
          </section>
            <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
