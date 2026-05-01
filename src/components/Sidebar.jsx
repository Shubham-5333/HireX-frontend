import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiPlusCircle, FiSearch, FiBriefcase } from 'react-icons/fi';
import { RiMenuLine } from 'react-icons/ri';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/authSlice';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const navigate = useNavigate()
  // const isloggedOut = useSelector((state)=>state.authentication)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {

      const response = await fetch("http://localhost:5000/api/logout",{
        method:'POST',
        headers:{
          "Content-Type":'application/json',
        }
      })
      const data = await response.json()
      toast(data.message)
      dispatch(logoutUser())

      // navigate('/')
    } catch (error) {

    }
  }

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <RiMenuLine />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Link to='/'> <h2>HireX</h2></Link>
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

            <li>
              <NavLink
                to="/applied-jobs"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <FiBriefcase /> <span>Applied Jobs</span>
              </NavLink>
            </li>
            <button type='submit' className='logout-btn' onClick={handleLogout}>logout</button>
          </ul>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;