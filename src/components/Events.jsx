// src/components/Events.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { FaBirthdayCake, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const Events = () => {
  const today = new Date().toDateString();

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="dashboard-split">
          <div>
            <h2>Upcoming Events</h2>
            <div className="card" style={{ marginBottom: '20px' }}>
              <div style={{ display:'flex', gap:'20px' }}>
                <div style={{ background: '#e0d8c0', padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>
                  <span style={{ fontSize: '1.5em', display: 'block' }}>15</span>NOV
                </div>
                <div>
                  <h3>Annual Alumni Meet 2025</h3>
                  <p style={{ color: '#777' }}><FaMapMarkerAlt /> Jubilee Hall</p>
                  <button className="btn btn-primary" style={{ width: 'auto', marginTop: '10px' }}>Register</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
              Celebrations ({today})
            </h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '15px' }}>
              <div style={{ width: '40px', height: '40px', background: '#e74c3c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <FaBirthdayCake />
              </div>
              <div>
                <strong>Prof. Arul Chella Kumar</strong>
                <p style={{ fontSize: '0.9em', color: '#666' }}>Dept Economics • Batch 1984</p>
                <span style={{ color: '#e74c3c', fontSize: '0.8em', fontWeight: 'bold' }}>Happy Birthday!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;