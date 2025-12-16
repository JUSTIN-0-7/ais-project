// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all our beautiful components
import Home from './components/Home';
import Admin from './components/Admin';
import Events from './components/Events';
import Student from './components/Student'; // Updated Import
import Alumni from './components/Alumni';   // Updated Import
import Search from './components/Search';   // Updated Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/student" element={<Student />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;