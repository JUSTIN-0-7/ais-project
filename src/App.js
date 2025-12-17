import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your components
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import Events from './components/Events';
import Student from './components/Student';
import Alumni from './components/Alumni';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* --- CHANGE 1: Make Login the first page ("/") --- */}
          <Route path="/" element={<Login />} />

          {/* --- CHANGE 2: Move the old Home page to "/landing" (optional) --- */}
          <Route path="/landing" element={<Home />} />

          {/* --- Dashboards (Only visible after login redirects here) --- */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
          <Route path="/alumni" element={<Alumni />} />
          
          {/* --- Other Pages --- */}
          <Route path="/events" element={<Events />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
