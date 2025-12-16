// src/components/Search.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaSearch, FaBuilding, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const Search = () => {
  const [query, setQuery] = useState("");
  
  // Fake Database
  const allAlumni = [
    { id: 1, name: 'Vikram Singh', company: 'Zoho Corp', batch: '2018', city: 'Chennai' },
    { id: 2, name: 'Priya Natarajan', company: 'Amazon', batch: '2012', city: 'Bangalore' },
    { id: 3, name: 'Ramesh Kumar', company: 'TCS', batch: '2015', city: 'Trichy' },
    { id: 4, name: 'Dr. Albert Rabara', company: 'SJC', batch: '1999', city: 'Trichy' },
  ];

  // Filter logic
  const results = allAlumni.filter(person => 
    person.name.toLowerCase().includes(query.toLowerCase()) ||
    person.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="card" style={{ padding: '30px' }}>
          <h2 style={{ marginBottom: '15px' }}>Alumni Directory</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="Search by Name or Company..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '2px solid #eee', outline: 'none' }}
            />
            <button className="btn btn-primary" style={{ width: '100px' }}><FaSearch /> Find</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {results.length > 0 ? results.map(p => (
            <div key={p.id} className="card" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
              <div>
                <h4 style={{ fontSize: '1.2em', color: '#2c3e50' }}>{p.name}</h4>
                <div style={{ display: 'flex', gap: '15px', marginTop: '5px', color: '#666', fontSize: '0.9em' }}>
                  <span><FaBuilding style={{ color: '#e0d8c0' }}/> {p.company}</span>
                  <span><FaGraduationCap style={{ color: '#e0d8c0' }}/> Batch {p.batch}</span>
                  <span><FaMapMarkerAlt style={{ color: '#e0d8c0' }}/> {p.city}</span>
                </div>
              </div>
              <button className="btn" style={{ border: '1px solid #2c3e50', color: '#2c3e50' }}>View Profile</button>
            </div>
          )) : <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>No alumni found.</p>}
        </div>
      </div>
    </div>
  );
};
export default Search;