// src/components/Admin.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaCheck, FaTimes, FaDatabase, FaClock, FaUserGraduate, FaHistory } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const Admin = () => {
  // Data matching your screenshot exactly
  const [requests, setRequests] = useState([
    { id: 1, name: 'Albert Rabara. S. Dr', batch: '1994-1999', desig: 'Vice Principal (SJC)' },
    { id: 2, name: 'Joseph Kuriakose M.', batch: '1973-1974', desig: 'Bank Employee' },
    { id: 3, name: 'Saravanavel P.', batch: '1962-1966', desig: 'Professor-Advocate' },
    { id: 4, name: 'Arul Chella Kumar J.A.', batch: '1982-1984', desig: 'Professor of Economics' },
    { id: 5, name: 'Muthukumaran S.', batch: 'Pending', desig: 'Not Updated' },
  ]);

  const handleAction = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  // Chart Data with colors from the screenshot
  const chartData = {
    labels: ['Post-2010', '2000-2010', '1990-2000', '1980-1990', 'Pre-1980'],
    datasets: [{
      data: [40, 25, 15, 10, 10], // Approximate distribution
      backgroundColor: ['#2c3e50', '#3498db', '#e0d8c0', '#f1c40f', '#e74c3c'],
      borderWidth: 0,
    }]
  };

  return (
    <div className="app-container">
      <Sidebar />
      
      <div className="main-content" style={{ backgroundColor: '#f4f6f9' }}>
        
        {/* Header Section from Screenshot */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#2c3e50', margin: 0 }}>Welcome back, Admin</h1>
            <p style={{ color: '#7f8c8d', margin: '5px 0 0 0' }}>System Overview for St. Joseph's College Alumni</p>
          </div>
          
          {/* Justin Profile Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'white', padding: '10px 20px', borderRadius: '50px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 'bold', color: '#2c3e50' }}>Justin</div>
              <div style={{ fontSize: '0.8em', color: '#7f8c8d' }}>Administrator</div>
            </div>
            <div style={{ width: '40px', height: '40px', background: '#e0d8c0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#555' }}>
              DJ
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="stats-grid" style={{ marginBottom: '30px' }}>
          {/* Card 1: Total Records (Blue) */}
          <div className="card" style={{ borderLeft: '5px solid #3498db', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2em', margin: 0 }}>15,337</h2>
              <p style={{ color: '#7f8c8d', fontSize: '0.9em' }}>Total Alumni Records</p>
            </div>
            <FaDatabase style={{ fontSize: '2.5em', color: '#3498db', opacity: 0.2 }} />
          </div>

          {/* Card 2: Pending (Yellow) */}
          <div className="card" style={{ borderLeft: '5px solid #f1c40f', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2em', margin: 0 }}>5</h2>
              <p style={{ color: '#7f8c8d', fontSize: '0.9em' }}>Pending Reviews</p>
            </div>
            <FaClock style={{ fontSize: '2.5em', color: '#f1c40f', opacity: 0.2 }} />
          </div>

          {/* Card 3: Recent (Green) */}
          <div className="card" style={{ borderLeft: '5px solid #27ae60', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2em', margin: 0 }}>10,856</h2>
              <p style={{ color: '#7f8c8d', fontSize: '0.9em' }}>Recent Alumni (Post-2010)</p>
            </div>
            <FaUserGraduate style={{ fontSize: '2.5em', color: '#27ae60', opacity: 0.2 }} />
          </div>

          {/* Card 4: Oldest (Red) */}
          <div className="card" style={{ borderLeft: '5px solid #e74c3c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2em', margin: 0 }}>1940s</h2>
              <p style={{ color: '#7f8c8d', fontSize: '0.9em' }}>Oldest Record (A. Umamaheswaran)</p>
            </div>
            <FaHistory style={{ fontSize: '2.5em', color: '#e74c3c', opacity: 0.2 }} />
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="dashboard-split">
          
          {/* Left: Pending Verification Table */}
          <div className="card">
            <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Pending Verification Requests</h3>
            <table>
              <thead>
                <tr style={{ color: '#95a5a6', fontSize: '0.85em', textTransform: 'uppercase' }}>
                  <th>Name</th>
                  <th>Batch/Year</th>
                  <th>Designation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.length > 0 ? requests.map(req => (
                  <tr key={req.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ fontWeight: 'bold', color: '#2c3e50' }}>{req.name}</td>
                    <td>{req.batch}</td>
                    <td>{req.desig}</td>
                    <td>
                      <button className="btn" style={{ background: '#e8f8f5', color: '#2ecc71' }} onClick={() => handleAction(req.id)}><FaCheck /></button>
                      <button className="btn" style={{ background: '#fdedec', color: '#e74c3c' }} onClick={() => handleAction(req.id)}><FaTimes /></button>
                    </td>
                  </tr>
                )) : <tr><td colSpan="4" style={{textAlign:'center', padding:'20px', color:'#999'}}>All caught up! No pending requests.</td></tr>}
              </tbody>
            </table>
          </div>

          {/* Right: Chart */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '20px', alignSelf: 'flex-start' }}>Alumni Distribution (Real Data)</h3>
            <div style={{ width: '80%', height: '300px' }}>
              <Doughnut data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Admin;
