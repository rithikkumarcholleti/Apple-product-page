import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaSnapchatGhost } from 'react-icons/fa';
import '../styles.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Your Company Name</h2>
      <p>© 2024 Apple Inc. All rights reserved.</p>
      <div className="footer-info">
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@apple.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
        <div>
          <h3>About Us</h3>
          <p>We are dedicated to providing the best tech products.</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <button aria-label="Facebook" className="icon-button"><FaFacebookF /></button>
            <button aria-label="Instagram" className="icon-button"><FaInstagram /></button>
            <button aria-label="Twitter" className="icon-button"><FaTwitter /></button>
            <button aria-label="Snapchat" className="icon-button"><FaSnapchatGhost /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
