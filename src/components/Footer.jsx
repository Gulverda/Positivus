import React from "react";
import "../CSS/Footer.css"; // Import the CSS for styling
import logo from "../assets/logo1.svg"; // Import the logo image
import linkedIn from "../assets/socials/linkedin.svg";
import facebook from "../assets/socials/facebook.svg";
import twitter from "../assets/socials/twitter.svg"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer_logo_nav">
        <div className="footer-brand">
          <img src={logo} alt="Positivus" className="footer-logo" />
        </div>
    <nav className="footer-nav">
          <a href="#about-us">About us</a>
          <a href="#services">Services</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="footer-social">
          <a href="https://linkedin.com">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
          <a href="https://facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        </div>
        <div className="contact_sub">
        <div className="footer-contact">
            <div className="footer_head_title">
                          <h4>Contact us:</h4>
            </div>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="Email" className="footer-input" />
          <button className="footer-button">Subscribe to news</button>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
