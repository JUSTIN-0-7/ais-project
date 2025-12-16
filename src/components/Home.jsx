// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield, FaUserTie, FaUserGraduate, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <h1 style={{ color: '#2c3e50', fontSize: '3em' }}>Alumni Information System</h1>
      <p style={{ color: '#666', marginBottom: '50px' }}>St. Joseph's College (Autonomous), Tiruchirappalli</p>
      
      <div className="portal-grid">
        <Link to="/admin" className="role-card">
          <div className="icon-circle"><FaUserShield /></div>
          <h3>Admin Module</h3>
        </Link>
        <Link to="/alumni" className="role-card">
          <div className="icon-circle"><FaUserTie /></div>
          <h3>Alumni Module</h3>
        </Link>
        <Link to="/student" className="role-card">
          <div className="icon-circle"><FaUserGraduate /></div>
          <h3>Student Module</h3>
        </Link>
        <Link to="/events" className="role-card">
          <div className="icon-circle"><FaCalendarAlt /></div>
          <h3>Events Module</h3>
        </Link>
        <Link to="/search" className="role-card">
          <div className="icon-circle"><FaSearch /></div>
          <h3>Search Directory</h3>
        </Link>
      </div>
    </div>
  );
};
export default Home;