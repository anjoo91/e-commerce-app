// SignupPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupPage.css'; // Import the new CSS file

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await userService.signup({ username, email, password });
      navigate('/'); // Redirect to homepage after successful registration
    } catch (err) {
      // Handle signup errors here, e.g., email might be taken
      alert(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
