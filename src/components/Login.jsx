// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaUserGraduate, FaUniversity, FaLock, FaUser, FaInfoCircle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('alumni'); // Default Role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHint, setShowHint] = useState(false); // To toggle the help message

  // Hide the hint whenever the user switches tabs
  useEffect(() => {
    setShowHint(false);
    setUsername('');
    setPassword('');
  }, [role]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      if (role === 'admin') navigate('/admin');
      else if (role === 'alumni') navigate('/alumni');
      else if (role === 'student') navigate('/student');
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* Header Section */}
        <div style={styles.header}>
          <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>Welcome Back</h2>
          <p style={{ color: '#7f8c8d' }}>Sign in to access your dashboard</p>
        </div>

        {/* Role Switcher Tabs (Alumni -> Student -> Admin) */}
        <div style={styles.tabContainer}>
          <button 
            style={role === 'alumni' ? styles.activeTab : styles.tab} 
            onClick={() => setRole('alumni')}
          >
            <FaUserGraduate /> Alumni
          </button>
          <button 
            style={role === 'student' ? styles.activeTab : styles.tab} 
            onClick={() => setRole('student')}
          >
            <FaUniversity /> Student
          </button>
          <button 
            style={role === 'admin' ? styles.activeTab : styles.tab} 
            onClick={() => setRole('admin')}
          >
            <FaUserShield /> Admin
          </button>
        </div>

        {/* Dynamic Credential Hint (Appears on Click) */}
        {showHint && (role === 'alumni' || role === 'student') && (
          <div style={styles.infoBox}>
            <FaInfoCircle style={{ marginRight: '8px', fontSize: '1.2em', flexShrink: 0 }} />
            <span style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
              <strong>Default Credentials:</strong><br />
              Username: <b>Your Full Name</b><br />
              Password: <b>Your Full Name</b>
            </span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input 
              type="text" 
              placeholder={role === 'admin' ? "Username" : "Enter Full Name"} 
              style={styles.input} 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} />
            <input 
              type="password" 
              placeholder={role === 'admin' ? "Password" : "Enter Full Name"} 
              style={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" style={styles.button}>
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        {/* Bottom Clickable Text */}
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '0.9em' }}>
          {role === 'admin' ? (
            <span>For access issues, contact System Super Admin.</span>
          ) : (
            <span>
              First time logging in?{' '}
              <span 
                onClick={() => setShowHint(!showHint)} 
                style={{ color: '#3498db', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
              >
                Click here
              </span>
            </span>
          )}
        </p>

      </div>
    </div>
  );
};

// Internal CSS Styles
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    padding: '20px'
  },
  card: {
    background: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    background: '#f4f6f9',
    padding: '5px',
    borderRadius: '10px'
  },
  tab: {
    flex: 1,
    border: 'none',
    background: 'transparent',
    padding: '10px',
    cursor: 'pointer',
    color: '#7f8c8d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    transition: '0.3s',
    fontSize: '0.9em'
  },
  activeTab: {
    flex: 1,
    border: 'none',
    background: 'white',
    padding: '10px',
    cursor: 'pointer',
    color: '#2c3e50',
    fontWeight: 'bold',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px'
  },
  infoBox: {
    background: '#e8f6f3',
    color: '#0e6251',
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'flex-start', // Aligns icon to top for multi-line text
    marginBottom: '20px',
    border: '1px solid #d1f2eb',
    animation: 'fadeIn 0.3s ease-in-out'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #eee',
    borderRadius: '8px',
    padding: '10px 15px',
    background: '#f9f9f9'
  },
  icon: {
    color: '#95a5a6',
    marginRight: '10px'
  },
  input: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
    color: '#333'
  },
  button: {
    background: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
    marginTop: '10px'
  }
};

export default Login;