// src/components/Alumni.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaBriefcase, FaUserEdit, FaPlus, FaEye, FaUsers } from 'react-icons/fa';

const Alumni = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Junior Developer', company: 'Zoho', applicants: 5 },
    { id: 2, title: 'Data Analyst', company: 'Remote', applicants: 12 }
  ]);

  const handlePostJob = () => {
    const title = prompt("Enter Job Title:");
    if (title) {
      setJobs([...jobs, { id: Date.now(), title, company: 'My Company', applicants: 0 }]);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        
        {/* Welcome Banner */}
        <div style={{ background: 'linear-gradient(135deg, #2c3e50, #34495e)', color: 'white', padding: '30px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>Welcome, Mr. Joseph</h1>
            <p>Batch 1974 • Verified Alumni</p>
          </div>
          <button onClick={handlePostJob} style={{ background: '#e0d8c0', color: '#2c3e50', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaPlus /> Post a Vacancy
          </button>
        </div>

        <div className="dashboard-split">
          {/* Left: Job Postings */}
          <div className="card">
            <h3>My Active Job Postings</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
              {jobs.map(job => (
                <div key={job.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{job.title}</div>
                    <div style={{ fontSize: '0.9em', color: '#777' }}>{job.company}</div>
                  </div>
                  <div style={{ color: '#27ae60', fontWeight: 'bold' }}>{job.applicants} Applicants</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="card">
            <h3>Profile Impact</h3>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <FaEye style={{ fontSize: '2em', color: '#2c3e50' }} />
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2c3e50' }}>42</div>
              <div style={{ color: '#777' }}>Profile Views</div>
              <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />
              <FaUsers style={{ fontSize: '2em', color: '#2c3e50' }} />
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2c3e50' }}>8</div>
              <div style={{ color: '#777' }}>Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Alumni;