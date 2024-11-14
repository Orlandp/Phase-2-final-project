import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fetch users from db.json to validate login
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      onLogin(true); // Successful login
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if the username already exists
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();
    const userExists = users.find(u => u.username === username);

    if (userExists) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    // Register the new user by adding them to db.json
    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    alert('Registration successful. You can now log in.');
    setIsRegistering(false);
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </div>
  );
}

export default Login;
