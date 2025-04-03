import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <Link to="/" aria-label="Home">
        <img className="logo" src= 'img/Logo.png' alt="WOODIES Logo" />
      </Link>
      <ul className="frame">
        <li>
          <Link to="/" className="text-wrapper">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-wrapper">About Us</Link>
        </li>
        <li>
          <Link to="/products" className="text-wrapper">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;