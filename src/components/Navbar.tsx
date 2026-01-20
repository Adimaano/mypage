import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Adrian Dimaano
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              <FaProjectDiagram className="nav-icon" />
              <span>Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
