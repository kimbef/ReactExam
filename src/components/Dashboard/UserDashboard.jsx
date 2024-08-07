// src/components/Dashboard/UserDashboard.js
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const UserDashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h2>Welcome, {currentUser.email}</h2>
      <p>This is your dashboard.</p>
      {/* Display user-specific data here */}
    </div>
  );
};

export default UserDashboard;
