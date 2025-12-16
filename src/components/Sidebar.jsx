// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUniversity, FaUserGraduate, FaCalendarAlt, FaSearch, FaSignOutAlt, FaUserShield } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo"><FaUniversity /> AIS Portal</div>
      <nav>
        <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaUserShield /> Admin
        </NavLink>
        <NavLink to="/alumni" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaUserGraduate /> Alumni
        </NavLink>
        <NavLink to="/student" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaUniversity /> Student
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaCalendarAlt /> Events
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <FaSearch /> Search
        </NavLink>
        <NavLink to="/" className="nav-link" style={{ marginTop: 'auto' }}>
          <FaSignOutAlt /> Logout
        </NavLink>
      </nav>
    </div>
  );
};
export default Sidebar;