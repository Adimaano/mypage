import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Adrian Dimaano. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
