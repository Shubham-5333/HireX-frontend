import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-search">
        {/* Intentionally left blank for top-left spacing or future global search */}
      </div>
      <div className="navbar-actions">
        <button className="icon-btn"><FiBell /></button>
        <div className="auth-links">
          <Link to="/login" className="btn-secondary">Login</Link>
          <Link to="/register" className="btn-primary">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
