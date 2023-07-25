// src/components/Common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Function to handle user logout
  const handleLogout = () => {
    // Implement logout logic (e.g., clearing user authentication data)
    // For simplicity, we are removing the user role from local storage in this example
    localStorage.removeItem('role');
  };

  // Get user role from local storage
  const userRole = localStorage.getItem('role');

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userRole === 'admin' && (
          <li>
            <Link to="/admin/dashboard">Admin Dashboard</Link>
          </li>
        )}
        {userRole === 'agent' && (
          <li>
            <Link to="/agent/dashboard">Agent Dashboard</Link>
          </li>
        )}
        {userRole && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
