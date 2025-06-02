import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@src/firebase/firebase';

const Logout: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
