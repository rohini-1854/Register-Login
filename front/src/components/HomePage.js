import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h2>Smart City Portal</h2>
        <button onClick={() => navigate('/login')}>Logout</button>
      </div>

      {/* Main Content */}
      <div className="home-wrapper">
        <div className="home-container">
          <h1>Welcome User!</h1>
          <p>Access and manage your complaints, report new issues, and track progress in your Smart City dashboard.</p>
          <button onClick={() => navigate('/register')}>Register New User</button>
          <button onClick={() => navigate('/complaints')}>View Complaints</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
