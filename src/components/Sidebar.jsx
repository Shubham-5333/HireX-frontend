import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiPlusCircle, FiSearch } from 'react-icons/fi';
import { RiMenuLine } from 'react-icons/ri';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // auto close on mobile
  };

  return (
    <>
      {/* 3-dot Toggle Button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <RiMenuLine  />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <h2>HireX</h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink
                to="/find-job"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <FiSearch /> <span>Find a Job</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/post-job"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <FiPlusCircle /> <span>Post a Job</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;