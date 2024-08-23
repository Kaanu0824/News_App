import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1>News <span className='app'>App</span></h1>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/category/technology">Technology</Link></li>
          <li><Link to="/category/business">Business</Link></li>
          <li><Link to="/category/health">Health</Link></li>
          <li><Link to="/category/sports">Sports</Link></li>
          <li><Link to="/category/entertainment">Entertainment</Link></li>
          <li><Link to="/category/bitcoin">Bitcoin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
