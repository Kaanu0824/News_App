// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>News App</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/category/technology">Technology</Link></li>
          <li><Link to="/category/business">Business</Link></li>
          <li><Link to="/category/health">Health</Link></li>
          <li><Link to="/category/sports">Sports</Link></li>
          <li><Link to="/category/entertainment">Entertainment</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
