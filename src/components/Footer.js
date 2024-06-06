import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/press">Press Releases</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <Link to="/help">Help Center</Link>
          <Link to="/returns">Returns</Link>
          <Link to="/shipping">Shipping Info</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/social">Social Media</Link>
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Organic Beauty Store. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
