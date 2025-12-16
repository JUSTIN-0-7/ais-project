// src/components/Placeholders.jsx
import React from 'react';
import Sidebar from './Sidebar';

export const Alumni = () => (
  <div className="app-container"><Sidebar /><div className="main-content"><h1>Alumni Module</h1><p>Post jobs and update profile here.</p></div></div>
);

export const Student = () => (
  <div className="app-container"><Sidebar /><div className="main-content"><h1>Student Module</h1><p>Find mentors here.</p></div></div>
);

export const Search = () => (
  <div className="app-container"><Sidebar /><div className="main-content"><h1>Search Directory</h1><p>Search logic goes here.</p></div></div>
);