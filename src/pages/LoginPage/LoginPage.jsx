import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Call the backend API to authenticate the user
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.token) {
            // Store the JWT token in localStorage (for simplicity)
            localStorage.setItem('token', data.token);
            history.push('/'); // Redirect to homepage after successful login
        } else {
            // Handle login errors here
            alert('Login failed!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                Don't have an account? <a href="/signup">Sign Up</a>
            </div>
        </div>
    );
}
