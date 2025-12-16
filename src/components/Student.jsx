// src/components/Student.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaUserGraduate, FaCheckCircle, FaPaperPlane, FaClock } from 'react-icons/fa';

const Student = () => {
  // Fake data to mimic database
  const mentors = [
    { id: 1, name: 'Dr. Albert Rabara', role: 'Vice Principal', batch: '1999', tags: ['Research', 'CS'] },
    { id: 2, name: 'Vikram Singh', role: 'Zoho Corporation', batch: '2018', tags: ['Software', 'SaaS'] },
    { id: 3, name: 'Priya Natarajan', role: 'Amazon', batch: '2012', tags: ['Cloud', 'DevOps'] }
  ];

  const [requests, setRequests] = useState([
    { id: 101, mentor: 'Vikram Singh', type: 'Referral', status: 'Pending' }
  ]);

  const handleRequest = (mentorName) => {
    alert(`Request sent to ${mentorName}!`);
    const newReq = { id: Date.now(), mentor: mentorName, type: 'Mentorship', status: 'Pending' };
    setRequests([...requests, newReq]);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h2>Student Portal</h2>
        
        {/* Mentor Cards Grid */}
        <h3>Recommended Mentors</h3>
        <div className="stats-grid">
          {mentors.map(m => (
            <div className="card" key={m.id} style={{ borderTop: '4px solid #e0d8c0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.1em' }}>{m.name}</h4>
                  <p style={{ color: '#666', fontSize: '0.9em' }}>{m.role}</p>
                </div>
                <FaCheckCircle style={{ color: '#27ae60' }} />
              </div>
              <div style={{ margin: '10px 0', display: 'flex', gap: '5px' }}>
                {m.tags.map(tag => (
                  <span key={tag} style={{ background: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8em' }}>{tag}</span>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => handleRequest(m.name)}>Request Mentorship</button>
            </div>
          ))}
        </div>

        {/* Request Status Table */}
        <h3 style={{ marginTop: '30px' }}>My Applications</h3>
        <div className="card">
          <table>
            <thead><tr><th>Mentor</th><th>Type</th><th>Status</th></tr></thead>
            <tbody>
              {requests.map(r => (
                <tr key={r.id}>
                  <td><strong>{r.mentor}</strong></td>
                  <td>{r.type}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.8em', fontWeight: 'bold',
                      background: r.status === 'Approved' ? '#d4edda' : '#fff3cd',
                      color: r.status === 'Approved' ? '#155724' : '#856404'
                    }}>
                      {r.status === 'Pending' ? <FaClock style={{marginRight:5}}/> : <FaCheckCircle style={{marginRight:5}}/>}
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Student;