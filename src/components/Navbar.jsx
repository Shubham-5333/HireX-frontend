import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import './Navbar.css';
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Navbar = () => {
  const isLoggedIn = useSelector((state)=>state.authentication.isAuthenticated)
  
  return (
    <header className="navbar">
      <div className="navbar-search">
        {/* Intentionally left blank for top-left spacing or future global search */}
      </div>
      <div className="navbar-actions">
        <button className="icon-btn"><FiBell /></button>
        <div className="auth-links">
          {isLoggedIn?(
            <Link  to="/profile" className="btn-secondary"><FaUser color='rgb(111, 83, 234)'/></Link>
          ):(
            <Link  to="/login" className="btn-secondary"><FaUser color='rgb(111, 83, 234)'/></Link>
          )}

          {/* <Link to="/login" className="btn-secondary">Login</Link>
          <Link to="/register" className="btn-primary">Register</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
