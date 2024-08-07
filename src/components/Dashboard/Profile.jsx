// src/components/Dashboard/Profile.js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser.email);

  const handleUpdate = async () => {
    try {
      await currentUser.updateEmail(email);
      alert('Email updated successfully');
    } catch {
      alert('Failed to update email');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Update Email</button>
    </div>
  );
};

export default Profile;
